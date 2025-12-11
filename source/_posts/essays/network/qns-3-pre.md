---
title: 毕设开题调研整理
tags:
  - non-commutative
  - routing
categories:
  - paper-reading
  - network
  - routing
index_img: /img/reading.jpg
banner_img: /img/reading.jpg
excerpt: 论文阅读
abbrlink: 6ee65c7d
date: 2025-12-10 23:28:15
---
# 选题说明
## 量子网络的目标
本质是在需要建立纠缠的两个节点间，配合经典网络，分布式生成高保真度的纠缠态，作为上层量子应用（QKD、分布式量子计算、量子传感等）的基础资源。网络的性能指标主要有端到端纠缠生成率、保真度、时延与资源利用率。例如，在量子密钥分发中，纠缠生成率决定了最终密钥速率，保真度影响安全性与误码率，时延关系到用户体验，资源利用率则影响网络的扩展性与成本。

## 量子模拟器的使用场景
量子网络模拟器用软件方式复现“量子比特+经典控制”混合系统的离散事件时序，例如比较不同中继策略的端到端保真度、密钥速率
在同一拓扑内同时跑 TCP 业务与 QKD 流量，观察二者在缓存、排队、丢包上的相互影响
随机断开光纤或注入虚假 Bell 测量结果，测试路由自愈与保真度门限降级机制
在给定光子源频率、内存驻留时间、错误率条件下，优化纠缠生成-纯化-交换的时隙分配策略等。

## 量子网络层协议的作用
从“点对点 QKD”到“多跳量子互联网”的瓶颈是“哪条路径、何时建立、何时纯化、何时释放”。必须由网络层完成，物理层只能提供纠缠资源。量子网络层协议的目标是：在动态变化的网络条件下，最大化端到端纠缠生成率与保真度，同时最小化时延与资源浪费。（和经典网络层的目标类似）。真实实验节点数<10，无法验证路由算法在大规模拓扑下的性能。

# 目前研究进展
## QNS-3
原生支持NS-3的量子网络模拟器
仓库：https://github.com/cqs-thu/qns-3
论文：https://arxiv.org/abs/2412.08956

qns-3 is the first quantum-network extension that fully complies with ns-3’s architecture. However, it only provides physical- and link-layer models; routing is left for future work.

唯一完全按 ns-3 编码规范写的量子扩展，可跟 IPv4/IPv6、SDN、5G 跑在同一条离散事件轴。声称后台用 ExaTN 张量网络，支持 GPU 并行，单机能跑 1000+ 量子比特。

这是季老师组的往年工作。本论文是邓芮萱学姐大三的工作，主要是基于tensornetwork实现了量子信道和量子链路的模拟，实现了量子隐形传态和量子密钥分发的模拟。大四毕设的内容就是给qns-3加上了stabilizer后端（只影响物理层）

关于还没有人做的论证： https://ruc.udc.es/dspace/bitstream/handle/2183/34234/XoveTIC_2023_proceedings_Parte20.pdf 抨击NS-3提供的QKDNetSim：“这些简化并没有让模拟更容易理解，反而限制了 QKDNetSim 的实用性；特别是它无法体现真实量子网络中由信道噪声、错误率和纠缠保真度引起的动态变化。”

**还能做的工作**
1. 现在网络层是空的，没有任何路由协议，因此只能处理全连接的网络
2. tensornetwork后端调用了exatn这个库，是橡树岭做的，原本以为它很靠谱，但组内另一位学长说它的gpu版本有问题


## 其他量子模拟器
### MPQUIC的NS-3实现
南京大学学报(自然科学版) ›› 2024, Vol. 60 ›› Issue (4) : 625-632. DOI: 10.13232/j.cnki.jnju.2024.04.009
基于NS⁃3网络模拟器的MPQUIC协议仿真研究
https://jns.nju.edu.cn/CN/10.13232/j.cnki.jnju.2024.04.009

### NetSquid、SeQUeNCe、QuISP、QuNetSim
跟 TCP/IP 不在一条时间轴，做“混合经典-量子”实验要外部耦合

### qkdX、QuISP-C++
只覆盖 QKD，缺乏通用量子噪声/纠缠 API


# 路由协议相关文章
### 2016 – Shortcuts to quantum network routing  
论文链接：https://arxiv.org/abs/1610.05238  
协议/框架名称：Shortcuts Routing  
核心机制：在已知图态拓扑上，利用局部补图（local complementation）把多跳纠缠交换转化为单跳图态测量，减少中间 Bell 测量次数。  
网络层功能：提出分布式图态路由算法，节点仅根据局部邻居信息即可生成全局路由表，实现 O(log d) 跳数的端到端纠缠建立。

### 2017 – Optimal routing for quantum networks  
论文链接：https://ieeexplore.ieee.org/document/8068178
协议/框架名称：Optimal Routing for Quantum Networks (Q-LSA)  
核心机制：将纠缠生成率、保真度衰减与内存时间统一量化为链路权重，运行 Dijkstra 算法计算最优纠缠路径。  
网络层功能：节点周期性广播本地纠缠参数（Q-LSA 报文），形成全局量子拓扑数据库，支持基于保真度-时延加权的最短路径选择。

### 2017 – Routing entanglement in the quantum internet  
论文链接：https://arxiv.org/abs/1708.07142
协议/框架名称：Entanglement Routing Algebra (ERA) + Q-BGP  
核心机制：将纠缠请求建模为“多商品流”，统一描述 swap、纯化与多路径并发；链路状态携带可达纠缠对数量与保真度上限。  
网络层功能：设计 Q-BGP 协议，节点交换量子可达性信息，支持多路径并发路由与保真度约束的路径选择。

### 2018 – Quantum network routing and local complementation  
论文链接：https://arxiv.org/abs/1805.04559
协议/框架名称：Local-Complementation Routing  
核心机制：在共享图态的网络上，通过局部补图序列选择最小测量集，快速提取端到端 Bell 对。  
网络层功能：给出完全分布式路由算法，中间节点无需全局拓扑，仅根据邻居状态决定下一补图操作，实现低开销纠缠路由。


### 2019 – A quantum network stack and protocols for reliable entanglement-based networks  
论文链接：https://arxiv.org/abs/1810.03556
协议/框架名称：QNP (Quantum Network Protocol)  
核心机制：面向连接的量子数据报协议，头部节点发送 TRACK 报文，尾部回应，中间节点按需执行 swap；带截止计时器与 Pauli 修正。  
网络层功能：定义量子分组头（TRACK/EXPIRE/COMPLETE），实现逐跳量子电路标识、保序与重传，是目前最完整的“量子网络层”草案。

### 2025 – Entanglement Routing in Quantum Networks: A Comprehensive Survey  
论文链接：https://arxiv.org/abs/2408.01234
协议/框架名称：Entanglement Routing Taxonomy  
核心机制：系统梳理 2016-2024 所有量子路由协议，归纳为 Shortest-Path、Max-Flow、Graph-State、Purify-Aware、Hybrid 五大类。  
网络层功能：指出“仍缺与经典 IP 同轴的分布式量子路由协议”，并给出统一性能基准，提供需求清单与评估指标。


# 已有的代码实现
### NetSquid-Routing（Python）  
仓库：https://gitlab.com/netsquid/netsquid-routing  
已实现：ERA（Entanglement Routing Algebra）多商品流路由、并行纠缠纯化调度、截止期驱动的路径选择。  
> NetSquid 是离散事件框架，与 ns-3 思路相近，可参考其“链路状态+保真度权重”计算函数移植到 ns-3 的 `QChannel` 接口。

### SeQUeNCe（Python）  
仓库：https://github.com/sequence-toolbox/SeQUeNCe  
已实现：基于保真度的 Dijkstra 路由、Entanglement Swapping 中继、按需纠缠路径预留（Q-OSPF 雏形）。  
> 模块 `sequence/routing` 下已经把“量子拓扑数据库”和“路由表计算”分开，可对照 ns-3 的 `Ipv4ListRouting` 进行映射。

### QuISP-OMNeT（C++ / OMNeT++）  
仓库：https://github.com/sfc-aqua/quisp  
已实现：Graph-State 路由、局部补图序列、多跳纠缠交换与纯化联合优化。  
> 虽然依赖 OMNeT，但路由逻辑全部封装在 `src/routing/` 目录，可整体拷贝后把 `cMessage` 换成 ns-3 的 `Packet` 即可编译。

### Q-NET 1.0（PennyLane + Python）  
仓库：https://github.com/XanaduAI/QNET  
已实现：量子网络流代数（QNA）路由、强化学习路由代理、量子数据报头部封装。  
> 代码量小，侧重算法原型；可把 `qnet/algorithms/routing.py` 中的“保真度-时延”代价函数直接嵌入 ns-3 的 `QRoutingTable`。

### HiQ-QKD-Router（Java，华为开源 SDK）  
仓库：https://github.com/Huawei-HiQ/qkd-router-demo  
已实现：链路保活、量子密钥池管理、最短密钥路径路由（DQC 算法）。  
> 侧重 QKD 场景，但 `DQC.java` 给出了“密钥-链路权重”计算示例，可用于 ns-3 上实现“量子-经典混合路由”。


# 计划
~~整理一下到底要干什么~~

~~咨询一下学姐是否适合作为毕设内容~~

~~调研现有模拟器~~

~~寻找空白点并确定基于哪个模拟器进行改进~~

找量子网络协议论文，筛选出比较好用、先进的

~~找一些已有的实现代码~~

~~阅读论文和代码~~

阅读qns-3的示例，先在本地跑通流程


