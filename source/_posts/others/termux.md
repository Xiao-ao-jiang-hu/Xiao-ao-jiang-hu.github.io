---
layout: blog
title: 安卓搞机日志
date: 2025-3-24 20:30:00
tags:
    - android
    - harmony os
    - linux
    - termux
categories:
    - 杂物
excerpt: 在安卓设备上配置Termux和proot，搭建Linux开发环境的实践记录。
---
不失一般性地，假设我们有一个华为平板。作为一个具有大于12英寸屏幕的设备，自然地我们希望配置一个开发环境进行开发。然而，向系财务申请报销并在一个月内拿到报销款的概率都比安卓系统原生支持apt-get的概率大。我的某室友云："这屏都能裁成三个vim窗口了，咋不直接买笔记本？"我望着账单沉默了三秒，突然想起校图书馆《Linux从入门到放弃》扉页写着：真正的极客能把微波炉刷成ArchLinux。

## Termux
经常地，配置一个良好的开发环境从打开一个终端开始。Termux是一个在安卓上运行的终端模拟器，支持大部分Linux命令。它不靠虚拟机也不走双系统，直接在ARM架构上构建起完整的包生态。Termux通过proot实现文件系统隔离，就像在客厅里搭了个透明玻璃房。你在里面敲apt install python时，安卓本体系统只会觉得有人在安静地拼乐高。

### 安装
进入[Termux仓库](https://github.com/termux/termux-app)，进入Releases，下载最新的apk安装包，安装后打开：
![](/img/termux.jpg)

## Proot
### 为何套娃永动机
Termux自带的proot就像宿舍床位——能摆下课本水杯，但开小灶炖红烧肉就会被楼长邀请谈话。原装环境虽然预置了apt，但/usr目录仍然被锁在sandbox里。我们需要一个更大的厨房来炖红烧肉。于是，proot-distro就像在阳台上搭了个违建厨房，允许我们在隔离的环境中运行完整的Linux发行版。

### 什么是proot？
Proot 是一个 Linux 工具，可以让你在没有 root 权限的情况下以非特权用户身份创建一个隔离的文件系统环境。在小学二年级就上过的操作系统课程中，我们知道在Linux中可以使用`ptrace`来监听和修改系统调用。于是，我们可以拦截诸如`open`, `write`, `execve`等文件系统的相关调用，并更改其路径到用户空间的隔离文件系统来实现隔离和模拟root用户操作。

### 三重套娃奥义

1. 权限隔离：Termux的proot仅够它自己玩转基础包，而Debian套娃相当于在阳台搭违建——既能保留原宿舍床位（Termux原生环境），又能在新地盘炖红烧肉（sudo rm -rf / ，反正炸不穿安卓的SeLinux防火墙）

2. 环境完整性：原生Termux的/data目录结构像308的柜子，而Debian镜像自带标准Linux骨架。

3. 软件生态：例如，Termux仓库的gcc可能砍了Fortran编译腿，而Debian源里的开发工具都是全须全尾的。

### 套娃实操
1. `pkg install proot proot-distro` 安装proot
2. `proot-distro install <your distro choice>` （这里我选用了debian，因为不希望snap在存储里拉屎，你可以使用`proot-distro list`命令查看所有可选的发行版）


## GUI环境
### 要有光——Linux图形子系统
从你点击Firefox图标到屏幕亮起网页，这之间到底发生了什么？这需要我们来盯真一下Linux窗口系统的结构。

在小学二年级就上过的人机交互课程中我们了解到GUI是现代最常见的人机交互接口。窗口系统是GUI的一种实现方式，以WIMP（windows、icons、menus、pointer）的形式提供人机交互接口。Linux系统中有一揽子窗口系统协议和实现，虽然长得不一样，但大体上都遵循同样的工作流程。首先，这些窗口系统基本都基于典中典的client-server架构，应用程序作为display server的一个client，在自己的窗口（window）中运行，并绘制自己的GUI。client的绘图请求，都会提交给display server。display server响应并处理这些请求，以一定的规则混合、叠加，最终在有限的输出资源上（屏幕），显示多个应用程序的GUI。display server和自己的client之间，通过某种类型的通信协议交互，该通信协议通常称作display server protocol。display server protocol可以是基于网络的，甚至是网络透明的（network transparent），如X Window System所使用的。这也是为什么x11可以在远程机器上运行GUI应用。

![](https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Wayland_display_server_protocol.svg/1920px-Wayland_display_server_protocol.svg.png)

更详细的说，Linux的图形子子系统的工作流程大致如下：（我们以1984年的老登x11和相对现代的Wayland为例）

1. 客户：应用绘图 (App Rendering)
Firefox对GTK库说：“在坐标(50,100)画个800x600的窗口，内容是我刚渲染好的网页位图”。随后GTK库将这个请求翻译成X11或Wayland协议的标准“订单”，然后直接丢给图形显示系统开始摆烂。

2. 客服：显示协议 (Display Protocol)
   - X11(亲这边马上帮您看一下型)：
    订单送到X Server (`Xorg`)：记下每个窗口的位置和谁压着谁（窗口栈管理），把鼠标点击等“用户指令”分发给对应窗口。

     - 可选古董技能：自己吭哧吭哧用CPU把像素填进帧缓冲区 (Framebuffer)（现代桌面基本不用这招了）。
     - 可选创新技能：通过 OpenGL/Vulkan 喊话：“显卡兄，按这个模型和纹理，用你的Shader帮我渲染窗口”，然后GPU输出结果存到窗口缓冲区(Window Buffer)。这相当于每个窗口有张独立的画布。

     - X11的痛：没有合成器，客服处理所有订单，窗口野蛮生长，互相覆盖还容易撕裂。

   - Wayland(好的呢亲型)：
    订单直达合成器，一切交给流水线工人，包揽调度和呈现。

3. 流水线工人：合成器(Compositor)
    纯牛马闪亮登场！它负责：
    - 收集画布：拿到所有窗口（包括桌面背景、任务栏）的画作。
    - 场景编排：知道谁在前谁在后，谁要半透明，谁要有阴影。
    - 特效合成：调用CPU（这么干的该砍头了）或GPU把N张画布混合成最终整块屏幕的画面。防撕裂、流畅动画等都是它的手艺。

4.  物流：硬件通信 (Kernel & Hardware Finale)
    合成器/显示服务器通过DRM/KMS（内核显示驱动）告诉显卡：“最终帧在这块内存，上屏吧！”，GPU的显示控制器立刻切换扫描目标到这块帧缓冲。显示器以60Hz/90Hz/...的节奏，逐行读取像素数据。世界亮了。


### XFCE4-桌面环境界的五菱宏光
- 基础靠X11：老协议，新补丁
    核心还是X Server (`Xorg`)，运行着上世纪的X11协议，但打了合成器补丁。开启 `xfwm4 --compositor` 模式，利用 `X Composite` 扩展（老东西续命用的），强制所有App把窗口内容画到离屏缓冲区，告别互相覆盖。`GLX_EXT_texture_from_pixmap`将离屏缓冲区零拷贝变成 GPU 可处理的 OpenGL纹理，效率暴增。最后通过 `DRI3/Present` 将最终画面直送显卡驱动，丝滑无撕裂。

- 精准刀法：只实现 “看得见、用得着” 的视觉效果，不做硬件杀手。 `xfwm4` 身兼窗口管理+合成，无需额外合成器进程。内存占用堪比记事本，是GNOME/KDE的几分之一，老设备/安卓容器选手的五菱宏光。

### 实操
首先我们安装（ https://github.com/termux/termux-x11/releases ）并打开termux提供的termux-x11应用（相当于接个虚拟屏幕来捕获图形输出）。在启动x11-server之前长这样：

![](/img/termux-x11.jpg)

随后进入我们proot出来的 Linux发行版安装xfce4：
```bash
apt install xfce4 xfce4-goodies sudo
```

然后在termux中执行以下命令：
```bash
XDG_RUNTIME_DIR={$TMPDIR} \
termux-x11 :1 \
proot-distro login debian --shared-tmp -- \
runuser -l {your_username} -c \
"DISPLAY=:1 dbus-launch --exit-with-session xfce4-session"
```

1. `XDG_RUNTIME_DIR={$TMPDIR}`  
   保证运行时文件（DBus 套接字、X11 锁文件）都存在Termux的临时目录，防止 XFCE4 把文件写到安卓无权访问的系统路径导致暴毙。

2. `termux-x11 :1`  
   启动 Termux 的 X11 图形引擎（显示编号 `:1`），在后台创建 UNIX 套接字 `/tmp/.X11-unix/X1`。（相当于在安卓内部开了个虚拟显卡接口）

3. `proot-distro login debian --shared-tmp --`  
   `--shared-tmp` 将宿主机的 `/tmp` 挂载到 Debian 容器里，让容器内的程序能直接摸到 `termux-x11` 创建的 `X1` 套接字。

4. `runuser -l {your_user_name} -c "..."`  
   以用户身份启动桌面，防止权限过高把容器搞崩（Linux桌面的祖传安全规范，虽然有很多人希望我就是root，root就是我，但是崩掉之后就寄了）

5. `DISPLAY=:1 dbus-launch --exit-with-session xfce4-session`  
   向系统宣告把所有图形订单发给 `:1` 号显示（对接 termux-x11），然后拉起 D-Bus 消息总线，最后点火启动 XFCE4 桌面引擎，五菱宏光准备发车


![发车实录](/img/xfce4.jpg)

## VSCode+SSH

### 安全性导致的锅
Linux通过内核级隔离技术构建程序沙盒环境，核心是命名空间和权限控制。命名空间为进程提供虚拟化视图：文件系统挂载点被隔离，网络接口独立配置，进程树被重新映射。同时cgroups限制资源使用，seccomp过滤危险系统调用。这种机制让占领世界的Electron应用能在受限环境中安全运行。但在Android的proot容器里启动VSCode时就会发生大爆炸：Electron要求创建新的mount命名空间实现文件系统隔离，但proot本身通过ptrace模拟环境，无法提供真正的内核级命名空间。Android系统拒绝此操作，导致经典错误：
```
Failed to move to new namespace: Operation not permitted
```
此时VSCode的常规GPU加速路径也会受阻，因为沙盒会封锁对/dev/dri等设备的直接访问，而proot已存在访问限制层。在proot环境中，唯一可靠的解决方案是：
```bash
code --no-sandbox
```
禁用沙盒的安全风险实际上在当前的环境中被多层防护体系化解：proot容器提供第一级Linux环境隔离，Android应用沙盒构建第二层系统调用过滤，SELinux强制访问控制则作为最终安全兜底。恶意代码需要同时穿透这三重防护才能构成实质威胁，其难度远超常规攻击场景。（实际上安卓不会信任任何应用的沙盒，除非它是系统应用，所以在应用里面起的大多数环境都没有进行严格安全保护的必要性，比如这样启动在最差的情况下只会炸穿我们通过proot构建的系统）


### SSH远程开发
现在我们获得了一个满血Debian环境加一个完整的本地VSCode客户端。对于一般的开发者来说，这已经足够了。但考虑到超过90%的同学似乎都有模型训练的需求，我们显然不能让他们在平板上跑模型。自然地，我们需要通过SSH连接远程服务器。于是乎，在完整本地VSCode客户端的加持下我们终于连上了我们忠实的远程服务器：
![](/img/ssh.jpg)
世界完整了。


## 后记
当我在平板上敲下第一个git push时，室友凑过头来："哟，真在平板上写代码啊？这玩意儿能跑得动？"我默默把屏幕转向他——左边是VSCode远程连接的A100服务器训练着模型，右边是本地Termux终端监控着日志，中间还开着文档。"看，这屏能裁成三个IDE窗口，不比笔记本香？"

## 踩坑
### 关于 Android 的 kill -9 问题
在使用 termux 时，经常会遇到进程无缘无故突然收到 kill -9 的问题。原因是从 Android 12 开始，Google 引入了 Phantom Process Killer 机制。父进程最多只能启动32个子进程，大大限制了一个应用在后台能够操作的动作数量。2个子进程的限制是整个系统全局限制，不是针对每个应用，也就是其他应用的子进程也会影响到termux。我们可以通过adb调整 Phantom Process 最大的进程数到INTMAX来解决这个问题：
```bash
adb shell "/system/bin/device_config put activity_manager max_phantom_processes 2147483647"
```

### 关于 VSCode 的 SSH Config 路径问题
在某些情况下，vscode实际使用的 ssh config 路径可能与预期不符。我们可以通过Remote SSH: Config File 设置手动修改config文件路径