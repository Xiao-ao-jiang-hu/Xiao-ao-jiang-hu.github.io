---
title: Linux 权限模型
tags:
  - linux
categories:
  - linux
excerpt: 从最基础的文件权限 rwx 到容器安全，Linux 的权限控制经历了几十年演进。这篇文章梳理了 Unix DAC、Capabilities、Namespace、Cgroup、SELinux 这五套机制，重点讲内核实现和实际应用场景。
date: 2025-08-20 00:37:07
---

## 传统 Unix DAC：最古老也最基础的权限模型
### 1. 要解决的问题  
上世纪 70 年代，多用户小型机刚出现，核心诉求是：  
- **区分“谁”能访问“什么”**——防止用户 A 随意修改用户 B 的文件；  
- **让 root 能完成系统管理**——root 必须是“万能”的；  
- **实现简单、开销低**——当时 CPU 与内存资源极其有限。  


### 2. 解决方案  
Unix 设计了三元组 + 三权限位的 **Discretionary Access Control (DAC)** 模型：  
- **三元组**（主体身份）：真实 UID / 有效 UID / 保存 UID（及对应 GID）。  
- **三权限位**（客体属性）：  
  ```
  -rwx rwx rwx
   │   │   └─ other
   │   └─ group
   └─ user
  ```
- **discretionary（自主）**：文件属主可以自行 `chmod` 改权限，root 除外规则。 
- **特殊位**：setuid、setgid、sticky 用于特定场景提权或目录写保护。


### 3. 具体实现  
- **inode** 中固定 12–16 字节保存 `i_mode`，其中低 12 位即权限位。  
- **task_struct** 保存 `cred` 结构，含 UID/GID、EUID/EGID、文件系统 UID/GID、capability 集。  

```c
int may_open(struct inode *inode, int acc_mode)
{
    if (current->fsuid == 0)          /* root bypass */
        return 0;

    umode_t mode = inode->i_mode;
    if (current->fsuid == inode->i_uid)
        mode >>= 6;                   /* 取 user 位 */
    else if (in_group_p(inode->i_gid))
        mode >>= 3;                   /* 取 group 位 */

    if (acc_mode & ~mode & 07)        /* 07=RWX */
        return -EACCES;
    return 0;
}
```

- 用户态：`chmod/chown/setuid` → 系统调用 `sys_chmod`/`sys_chown`/`sys_setuid`。  
- 内核态：VFS 层通用函数 `generic_permission()`，具体文件系统可覆写。  


### 4. 常见应用  
| 场景 | 命令/代码 | 解释 |
|------|-----------|------|
| 普通文件保护 | `chmod 600 ~/.ssh/id_rsa` | 仅属主可读，防止其他用户窃取私钥。 |
| 共享目录 | `chmod 1777 /tmp` | sticky 位保证用户只能删自己文件。 |
| 提权执行 | `chmod 4755 /usr/bin/passwd` | setuid 位让普通用户运行时拥有 root 权限，修改 `/etc/shadow`。 |
| 组协作 | `chgrp dev src && chmod 770 src` | 仅 `dev` 组成员可读写目录。 |


## Linux Capabilities：把“无所不能”的 root 切成 40+ 块细粒度特权

### 1. 要解决的问题  
传统 Unix DAC 只有“root / 非 root”两级，导致：  
- 普通二进制一旦需要任何特权（如监听低端口、修改系统时钟）就必须整段程序以 **setuid-root** 运行，攻击面巨大；  
- root 进程被攻破即 **完全失陷**；  
- 容器/最小权限原则下，希望“用多少给多少”，而不是一次性授予全部特权。  


### 2. 解决方案  
Linux 从 2.2 开始引入 **Capabilities**：  
- 将传统 root 特权划分为数个独立单元（Linux 5.x 约 60+ 项）。  
- 每个进程拥有 5 个 capability 集合：  
  - Permitted（上限）  
  - Inheritable（跨 exec 继承）  
  - Effective（当前生效）  
  - Bounding（系统级上限）  
  - Ambient（非特权 exec 也可保留）  
- 文件系统支持 **file capability**，让普通用户二进制直接携带“所需最小特权”。  
- root 不再特殊：UID=0 仅默认拥有全集，但可随时裁剪。


### 3. 具体实现  

- 内核数据结构  
  - `task_struct → cred → struct user_namespace *user_ns`  
  - `kernel_cap_t cap_permitted / cap_effective / cap_inheritable / cap_bset / cap_ambient`  
  - 权限检查改为 `capable(CAP_XXX)` 宏，而非简单判断 UID==0。

- 系统调用  
  - `capset()` / `capget()`：进程自己修改 capability。  
  - `prctl(PR_CAP_AMBIENT, …)`：动态增删 Ambient 集。  
  - `execve()` 时根据文件系统 capability xattr、Bounding 集、Ambient 集重新计算 5 个集合。

- 用户态工具  
  - `setcap` / `getcap`：给二进制打 capability 标签（xattr `security.capability`）。  
  - `capsh`、`libcap-ng`、`systemd` 的 `AmbientCapabilities=`、`CapabilityBoundingSet=`。


### 4. 常见应用  

| 场景 | 命令/配置 | 效果 |
|------|-----------|------|
| **非 root 也能 ping** | `setcap cap_net_raw+ep /bin/ping` | 普通用户运行 ping 时仅获得 `CAP_NET_RAW`，无需 setuid-root。 |
| **容器最小特权** | Docker `--cap-drop=ALL --cap-add=NET_BIND_SERVICE` | 容器进程只能绑定低端口，不能加载内核模块。 |
| **systemd 服务加固** | `CapabilityBoundingSet=CAP_NET_BIND_SERVICE CAP_SETUID` | 服务即使被入侵，也无法执行超出给定 capability 的操作。 |


## Linux Namespace：隔离

### 1. 要解决的问题
在 2000 年以前的 Linux 只有 chroot、rlimits 和 POSIX ACL，三大缺陷：  
- **全局可见**：`/proc/*/status`、`/sys/fs/cgroup` 暴露所有进程信息。  
- **全局命名**：PID、NET、IPC、Mount 都是全局名字空间，租户间冲突。  
- **逃逸风险**：`chroot()` 可被 `mkdir+chdir+pivot_root` 组合打破；`CAP_SYS_ADMIN` 无处不在。

隔离粒度必须满足：  
- 进程看不到其他租户的进程；  
- 网络协议栈、路由表、防火墙规则独立；  
- IPC/UTC/Mount 等系统资源可以“虚拟化”。


### 2. 解决方案
#### 2.1 UTS namespace  
- 隔离：hostname、domainname（`sethostname()/setdomainname()`）。  
- 实现：`struct uts_namespace` 仅 64 字节，包含字符串数组。  
- 演示：  
  ```bash
  unshare -u bash -c 'hostname newname; hostname'  # 输出 newname
  hostname                                         # 宿主仍是原值
  ```

#### 2.2 IPC namespace  
- 隔离：System V IPC（msgget, semget, shmget）与 POSIX MQ。  
- 实现：每个 `struct ipc_namespace` 内部维护 `idr` 树管理 ID。  
- 注意：IPC namespace 不隔离 Unix Domain Socket，后者属于文件系统。

#### 2.3 PID namespace  
- 层次：支持多级嵌套，PID 由 `struct upid` 维护。  
- 限制：32 层嵌套上限（`MAX_PID_NS_LEVEL`）。  
- 演示：  
  ```bash
  unshare -p -f bash -c 'echo $$'   # 输出 1
  pstree -p                         # 宿主视角看到 /bash(12345)
  ```

#### 2.4 Mount namespace  
- 隔离：挂载点、挂载传播、`/proc/mounts`。  
- 关键 flag：`MS_SLAVE`, `MS_PRIVATE`, `MS_UNBINDABLE`。  
- 联合挂载：Docker 的 overlayfs 由 `mount -t overlay overlay -o lowerdir=...,upperdir=...,workdir=...` 在 mnt ns 内部完成。

#### 2.5 Network namespace  
- 资源：网卡、路由、iptables、conntrack、netfilter、TCP 栈。  
- 实现：`struct net` 包含 `struct netns_ipv4`, `struct netns_packet` 等子结构，总计 200+ 字段。  
- 虚拟设备：  
  - `veth` 创建后一端放容器 netns，一端留宿主机。  
  - `macvlan`, `ipvlan`, `vxlan` 均支持跨 netns 移动。  
- 演示：  
  ```bash
  ip netns add demo
  ip link add veth0 type veth peer name veth1
  ip link set veth1 netns demo
  ip netns exec demo ip addr add 10.0.0.2/24 dev veth1
  ```

#### 2.6 User namespace  
- 功能：UID/GID 重映射 + capability 命名空间化。  
- 映射文件：  
  ```bash
  cat /proc/self/uid_map
  0 100000 65536   # ns 内 UID 0 映射宿主机 100000-165535
  ```
- 安全：非特权用户可在 user ns 内获得“假 root”，但受限于宿主机 capabilities。  
- 使用：LXC、Podman rootless、Chrome sandbox 均依赖。

#### 2.7 Cgroup namespace  
- 功能：在容器内呈现“裁剪”后的 cgroup 层次。  
- 防止：容器内看到 `/sys/fs/cgroup/systemd` 等宿主机路径。  
- 演示：  
  ```bash
  unshare -C bash -c 'cat /proc/self/cgroup'
  # 仅显示 / 而非完整路径
  ```

#### 2.8 Time namespace（实验）  
- 功能：独立 `boottime`, `monotonic` 时钟。  
- 场景：热迁移容器时，避免时钟跳变。  
- 限制：目前仅支持 `CLOCK_BOOTTIME`, `CLOCK_MONOTONIC`。

### 3. 具体实现
#### 3.1 核心结构体  
```c
// include/linux/nsproxy.h
struct nsproxy {
    atomic_t count;               /* 引用计数 */
    struct uts_namespace  *uts_ns;
    struct ipc_namespace  *ipc_ns;
    struct mnt_namespace  *mnt_ns;
    struct pid_namespace  *pid_ns_for_children;
    struct net            *net_ns;
    struct cgroup_namespace *cgroup_ns;
    struct time_namespace *time_ns;
    ...
};
```
每个 Namespace 实例都是一个独立对象，例如 `struct net` 在 `net/core/net_namespace.c` 中定义，大小约 3.6 KB（x86_64）。

#### 3.2 进程描述符  
```c
// include/linux/sched.h
struct task_struct {
    ...
    struct nsproxy *nsproxy;     /* 指向当前 Namespace 视图 */
    struct user_namespace *cred->user_ns; /* 用于 capability 计算 */
    ...
};
```
当进程通过 `setns()` 切换 namespace 时，仅替换指针，无需重建 task。

#### 3.3 系统调用接口  
| 调用 | 作用 | 内核入口 | 关键 flag |
|---|---|---|---|
| clone() | 创建进程并指定 namespace | kernel/fork.c → _do_fork() | CLONE_NEW* |
| unshare() | 当前进程脱离共享 namespace | kernel/nsproxy.c → sys_unshare() | 同上 |
| setns() | 加入已存在 namespace | kernel/nsproxy.c → sys_setns() | 通过 /proc/*/ns/* fd |

#### 3.4 生命周期与引用计数  
- 每个 namespace 内部都有一个 `kref`（或 `atomic_t`）计数器。  
- 当最后一个进程 exit 或 `setns` 离开，计数为 0 时调用 `*ns_free()` 释放内存。  
- 对于 PID namespace 还有“孤儿 reaper”机制：最后一个进程退出时，内核向父 PID ns 发送 `SIGCHLD`，防止僵尸。


#### 3.5. 以 clone(CLONE_NEWNET) 为例

- 调用链
```
user: clone(CLONE_NEWNET|CLONE_NEWPID|SIGCHLD, stack)
↓
sys_clone → _do_fork → copy_process
    → copy_namespaces
        → create_new_namespaces
            → copy_net_ns
                → net_alloc
                    → setup_net
                        → ops->init   (net_dev_init)
```
- 数据结构初始化
```c
// net/core/net_namespace.c
static int __net_init net_dev_init(struct net *net)
{
    INIT_LIST_HEAD(&net->dev_base_head);
    net->proc_net = proc_mkdir("net", net->proc_net);
    ...
}
```
- 返回用户空间
  - 子进程通过 `task->nsproxy->net_ns` 指向全新 `struct net`，宿主机旧进程不变。  
  - 此时 `ip link ls` 只能看到 `lo`，因为尚未创建 veth。



### 4. 常见应用

| 软件 | 依赖的 namespace | 备注 |
|---|---|---|
| Docker | all | `--pid=host` 关闭 PID ns |
| Kubernetes Pod | net, ipc, uts | 可选共享 PID ns |
| LXC/LXD | all | 支持 cgroup ns |
| Podman rootless | user, net, mnt | 无需 suid |
| Chrome sandbox | user, net, pid | renderer 进程 |
| systemd-nspawn | all | `--private-users` |
| Flatpak | user, mnt | 沙箱应用 |
| Kata Containers | all | VM+namespace 双层隔离 |
| gVisor | user, net, pid | 用户空间内核拦截 |


## Cgroup：精确控制能用多少资源
### 1. 要解决的问题  
PID/Mount/UTS 等 Namespace 已经解决了 **“能看到什么”**，但进程仍然可以：  
- **吃光 CPU**：死循环让整机卡死；  
- **耗尽内存**：触发 OOM Killer 时连宿主机 sshd 一起被杀；  
- **打满磁盘带宽**：一次 `dd` 把磁盘 IOPS 跑满，拖慢所有容器；  
- **fork 炸弹**：瞬间创建上万进程，耗尽 PID、文件描述符。  


### 2. 解决方案  
Linux 自 2.6.24 起引入 **Control Group (cgroup)**
- 把进程按树形层级（**cgroup hierarchy**）分组；  
- 为每个组分别附加**子系统（controller）**，对 CPU、内存、I/O、网络等做**计量、限制、优先级调整、冻结与 OOM 处理**；  
- 提供 VFS 接口：挂载 cgroupfs 后，目录即分组，文件即旋钮。  

目前主流 **cgroup v1**（多挂载点，单功能）与 **cgroup v2**（单挂载点，统一树形）并存，Kubernetes 1.25+ 默认优先 v2。


### 3. 具体实现  

#### 3.1 核心对象  
- `struct cgroup`：分组节点；  
- `struct css_set`：进程到 cgroup 的映射；  
- **controller**：内核模块，实现具体资源策略，如 `cpu`, `memory`, `blkio`, `pids`, `cpuset`, `hugetlb`, `perf_event`, `rdma`, `freezer`…

#### 3.2 用户态接口（以 v2 为例）  
```bash
# 1. 挂载统一层次
mount -t cgroup2 none /sys/fs/cgroup

# 2. 创建分组
mkdir /sys/fs/cgroup/web
echo 100000 > /sys/fs/cgroup/web/memory.max      # 100 MiB
echo 200000 > /sys/fs/cgroup/web/cpu.max         # 0.2 核
echo 1000   > /sys/fs/cgroup/web/pids.max        # 最多 1000 进程

# 3. 把进程放进去
echo 1234 > /sys/fs/cgroup/web/cgroup.procs
```

#### 3.3 关键文件（v2）  
| 文件 | 作用示例 |
|------|----------|
| `memory.current` | 实时已用内存（字节） |
| `memory.events` | OOM、max 命中次数 |
| `cpu.stat` | 周期、节流次数 |
| `io.max` | 限制磁盘读写带宽/OPS |
| `cgroup.freeze` | 写 1 立即冻结组内所有任务 |
| `cgroup.kill` | 写 1 向组内所有进程发 SIGKILL |


### 4. 常见应用  

| 场景 | 命令/配置 | 效果 |
|------|-----------|------|
| **Docker 资源限制** | `docker run -m 512m --cpus=1.5 nginx` | 背后即 memory & cpu cgroup 限制。 |
| **Kubernetes QoS** | Pod `resources.requests.cpu: 500m` → cpu.shares；`limits.memory: 1Gi` → memory.max | 实现 Guaranteed/Burstable/BestEffort QoS。 |
| **系统防 fork 炸弹** | `systemd-run --scope -p TasksMax=200 stress --fork 300` | 超过 200 进程立即触发 `EAGAIN`。 |
| **热更新不停机** | `echo 1 > /sys/fs/cgroup/app/cgroup.freeze` → 更新二进制 → `echo 0 > cgroup.freeze` | 类似“快照-恢复”，零中断。 |
| **I/O 限速** | `echo "259:0 wbps=10485760" > io.max` | 把 /dev/nvme0n1 写带宽限制到 10 MB/s，防止 CI job 拖慢磁盘。 |
| **混合部署优先级** | cpu controller 的 `weight` 属性：把在线业务 weight 设 10000，离线批处理设 100，CPU 争用时优先保障在线。 |


## SELinux：在 DAC 与 Capability 之上再罩一层“强制访问控制网”
### 1. 要解决的问题  
传统 Unix DAC（ugo+rwx）+ Capability 仍留下两大硬伤：  
- **root 依旧可以绕过一切**：一旦 UID 0 被攻陷，系统失守；  
- **权限粒度太粗**：只能按“用户/组/角色”授权，无法精确到“哪个进程对哪个文件执行什么操作”；  
- **自主（Discretionary）模型**：文件属主可以随便 `chmod 777`，无法强制策略。  


### 2. 解决方案  
SELinux（Security-Enhanced Linux）由 NSA 于 2000 年提出，核心思想：  
- **一切皆标签（Label-based）**：文件、进程、套接字、端口… 都打上 **安全上下文**（`user:role:type:level`）；  
- **策略数据库**：内核加载二进制策略文件（`policy.XX`），规定“什么类型在什么角色下能对什么类型做什么访问”；  
- **强制（Mandatory）**：策略由管理员下发，**用户或 root 无法自行更改**，违反即拒绝并记审计日志；  
- **多级安全（MLS）**：可选的 Bell-LaPadula 机密性模型，用于政府/军用场景；  
- **RBAC/TE**：Role-Based Access Control + Type Enforcement 组合，兼顾灵活与最小权限。


### 3. 具体实现   
> 为什么 root 也打不开 `/etc/shadow`？内核在哪一步把它拦下来的？

#### 3.1 LSM 钩子框架  
Linux Security Module（LSM）在内核关键路径埋了 **200+ 钩子**，SELinux 就是其中一个“插件”。

```
security_file_open()           // fs/open.c
└─ call_int_hook(file_open, 0, file)
   └─ selinux_file_open(struct file *file)
      └─ avc_has_perm(ssid, tsid, SECCLASS_FILE, FILE__READ, ...)
```

钩子 → SELinux 决策函数 → 返回 0/-EACCES。

#### 3.2 核心数据结构  
| 名字 | 所在文件 | 作用 |
|---|---|---|
| `struct task_security_struct` | `security/selinux/hooks.c` | 进程标签（task SID） |
| `struct inode_security_struct` | `security/selinux/hooks.c` | 文件标签（inode SID） |
| `struct selinux_avc` | `security/selinux/avc.c` | 访问向量缓存，避免每次都查策略库 |
| `struct policydb` | `security/selinux/ss/policydb.c` | 编译后的策略常驻内存 |

#### 3.3 一次访问的完整决策流程  
假设 PID 1234（标签 `httpd_t`）尝试写 `/etc/shadow`（标签 `shadow_t`）：

1. **系统调用** → `open("/etc/shadow", O_RDWR)`  
2. **LSM 钩子** → `security_file_open()`  
3. **取 SID**  
   - 当前进程 SID = `httpd_t`  
   - inode SID = `shadow_t`  
4. **查缓存** → `avc_has_perm(httpd_t, shadow_t, file, {write})`  
5. **缓存未命中** → `security_compute_av()` 查询策略库  
   - 策略里 **没有** `allow httpd_t shadow_t:file write;`  
6. **拒绝** → 返回 `-EACCES`，同时写审计日志：  
   ```
   audit: type=1400 audit(1666...): avc: denied { write } \
         for pid=1234 comm="httpd" name="shadow" dev="dm-0" \
         ino=123456 scontext=system_u:system_r:httpd_t:s0 \
         tcontext=system_u:object_r:shadow_t:s0 tclass=file
   ```

#### 3.4 策略的“编译-加载-生效”流水线

| 阶段 | 文件 | 工具 | 结果 |
|---|---|---|---|
| 编写源策略 | `*.te` | vim / sepolicy-generate | 人类可读规则 |
| 编译模块 | `*.mod` | `checkmodule -M -m myapp.te -o myapp.mod` | 二进制中间文件 |
| 打包策略 | `*.pp` | `semodule_package -o myapp.pp -m myapp.mod` | 可加载策略包 |
| 加载到内核 | `policydb` | `semodule -i myapp.pp` | 插入 `security/selinux/ss/` 常驻内存 |

### 4. 例子与常见应用

| 场景 | 命令/配置 | 效果 |
|------|-----------|------|
| **Web 服务器沙箱** | 策略：`httpd_t` 只能读写 `public_content_t`，无权访问 `/etc/shadow`。即使 Apache 被 RCE，也无法读取敏感文件。 |
| **容器隔离加固** | 在 **Fedora CoreOS** 上启用 SELinux + container-selinux：容器进程运行在 `container_t`，禁止逃逸到宿主机 `unconfined_t`。 |
| **SSH 端口偏移** | `semanage port -a -t ssh_port_t -p tcp 2222` → SELinux 允许 sshd 监听 2222，无需关闭防火墙。 |
| **布尔值一键开关** | `setsebool -P httpd_can_network_connect_db on` | 让 Apache 直接连 MySQL，无需写复杂规则。 |
| **调试拒绝日志** | `ausearch -m avc -ts recent` → 查看拒绝 → `audit2allow -a` 生成策略 → `semodule -i mypol.pp` | 五分钟内完成“拒绝→允许”闭环。 |
| **Android 安全** | 自 Android 4.3 起，所有应用运行在 **SELinux enforcing**，即使 root 应用也需通过 sepolicy 显式授权，阻止恶意提权。 |
