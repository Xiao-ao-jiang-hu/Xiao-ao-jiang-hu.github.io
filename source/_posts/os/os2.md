---
title: 多处理机
tags:
  - os
  - 多处理机调度
  - SQMS
  - MQMS
  - Linux O(1)调度器
categories:
  - os
excerpt: 多处理机调度算法概述，包括SQMS、MQMS、Linux O(1)调度器等。
date: 2025-06-12 11:08:02
---
## 多处理机调度算法概述
### SQMS（单队列多处理器调度，Single Queue Multi-Processor Scheduling）
- **描述**：所有处理器共享一个就绪队列，调度器从中选择进程。
- **优点**
  - 简单实现，易于负载均衡。
  - 所有处理器共享同一调度策略。
- **缺点**
  - 缺乏可扩展性（scalability）
  - 缓存亲和性（cache affinity）差，可能导致缓存失效。

### MQMS（多队列多处理器调度，Multi-Queue Multi-Processor Scheduling）
- **描述**：每个处理器有独立的就绪队列，调度器选择本地队列。进程根据一些启发式规则分配到不同队列。
- **优点**
  - 更好的可扩展性，适合多核处理器。
  - 缓存亲和性更好，减少缓存失效。
- **缺点**
  - 负载均衡复杂，需要动态调整队列。
  - 可能导致某些处理器过载，其他处理器空闲。

### 负载均衡策略
**进程迁移（migration）**
- 通过进程的跨处理器迁移来实现负载均衡。

**MQMS的工作窃取（work stealing）**
- 进程量较少的队列不定期偷看其他队列是不是比自己进程多
- 如果显著多，则从其他队列窃取一些进程。
- 需要调整检查间隔平衡开销和负载均衡

## Linux O(1)调度器
### Linux O(n)调度器
- 时间片分配：每个进程分配一个时间片，时间片用完后放回就绪队列。

- **算法**
  - 每个时间片开始时：
    - 检查就绪队列是否为空
    - 如果不空，遍历所有进程并计算优先级
    - 将优先级映射成缺省时间片
    - 选择优先级最高的进程执行
  - 如果进程没有用尽时间片，则剩余时间增加到进程的下一个时间片中
- 复杂度
  - 每次调度需要遍历所有就绪进程，复杂度为O(n)，其中n为就绪进程数。
- 数据结构
  - 使用一个global runqueue防止就绪任务
  - 各个core需要竞争同一个runqueue中的任务
- **缺点**
  - 随着就绪进程数增加，调度开销增大。
  - 多个处理器竞争同一全局队列，扩展性差


### Linux O(1)调度器
- **思路**
  - 实现per-processor runqueue，每个处理器有独立的就绪队列。
  - 采用全局优先级，实时进程0-99，普通进程100-139，nice值影响优先级。
  - 活跃数组active放置就绪进程，过期数组expired放置过期进程。
- **算法**
  - 每个优先级对应一个链表，链表的连接是FIFO的
  - 引入bitmap数组记录140个链表中的活跃进程情况
  - bitmap数组的每一位对应一个优先级链表
  - 每次调度时，选择active中最高优先级的比特，取出对应链表中第一个进程执行。
  - 如果进程执行过程中被抢占，则将其放回active链表的末尾。
  - 如果进程用完时间片，则将其放入某优先级的expired链表。（优先级会重新计算）
  - 如果active bitmap中没有活跃进程，则交换active和expired


## CFS（完全公平调度器，Completely Fair Scheduler）
- **思路**
  - 不同优先级的进程重要性不同，应该拿到不同的资源
- **算法**
  - 每个进程维护一个虚拟运行时间（vruntime），表示该进程应该在CPU上运行的时间。
  - 调度器选择vruntime最小的进程执行，保证公平性。
  - vruntime根据进程优先级调整，优先级高的进程vruntime增长慢，低的增长快。
- **virtual runtime**
  - vruntime = real runtime * (1 / weight)
  - 新进程的vruntime初始化为每个队列中的最小值，避免老进程被饿死
  - 休眠进程被唤醒时，vruntime以minimum为基准给予一定补偿
- **实现**
  - 使用红黑树（rbtree）存储就绪进程，按vruntime排序。
- **优点**
  - 保证公平性，避免优先级反转。
  - 动态调整进程优先级，适应不同负载。
- **缺点**
  - 实现复杂度较高。
  - 对于短小任务，可能存在调度延迟。

## BFS（Brain Fuck Scheduler）
- 多处理机使用单就绪队列，减少负载均衡算法开销
- 所有CPU共享一个双向链表，进程按照优先级排队，相同优先级的每个进程有一个时间片长度和虚拟截止时间
- 时间片大小由算法参数指定
- 虚拟截止时间
  - 关于就绪队列中进程等待CPU最长时间的排序不是真实截止时间
  - 时间片用完时重新计算
  - 时间等待结束时保持不变，以优先抢占就绪进程
  - 为了保证CPU亲和性，不同CPU加不同权重
- 算法
  - 复用前述的bitmap，每一位对应一个优先级的区间
  - 每个区间查找virtual deadline最小的区间
- 就绪队列插入
  - 时间片用完，重新设置虚拟截止时间后插入
  - 等待时间出现，虚拟截止时间保持不变，抢先低优先级进程或插入就绪队列