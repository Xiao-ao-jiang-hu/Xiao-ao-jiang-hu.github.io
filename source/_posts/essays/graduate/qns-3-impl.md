---
title: qns-3 实现
tags:
  - quantum
  - network
categories:
  - paper-reading
  - network
  - routing
index_img: /img/reading.jpg
banner_img: /img/reading.jpg
excerpt: 代码实现
abbrlink: 7a6a7d9a
date: 2026-01-20 00:00:00
---
# 量子网络栈设计文档

## 1. 架构设计

```
┌─────────────────────────────────────────────────────────────┐
│                          pplications                        │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────────┐    │
│  │EntSwapApp│ │ TelepApp │ │DistillApp│ │FourNodeChain │    │
│  └──────────┘ └──────────┘ └──────────┘ └──────────────┘    │
├─────────────────────────────────────────────────────────────┤
│                           Protocols                         │
│  ┌────────────────────┐ ┌─────────────────────────────┐     │
│  │DistributeEPRProto  │ │   QuantumNetStackHelper     │     │
│  └────────────────────┘ └─────────────────────────────┘     │
├─────────────────────────────────────────────────────────────┤
│                    Quantum Physical Layer                   │
│  ┌────────────────┐ ┌─────────────────┐ ┌──────────────┐    │
│  │QuantumPhyEntity│ │QuantumMemModel  │ │QuantumChannel│    │
│  └────────────────┘ └─────────────────┘ └──────────────┘    │
├─────────────────────────────────────────────────────────────┤
│                     Tensor Network Backend                  │
│  ┌─────────────────────────────────────────────────────┐    │
│  │            QuantumNetworkSimulator (ExaTN)          │    │
│  └─────────────────────────────────────────────────────┘    │
└─────────────────────────────────────────────────────────────┘
```

## 2. 量子物理层设计

### 2.1 QuantumPhyEntity - 量子物理实体

`QuantumPhyEntity` 是量子网络的核心类，管理所有量子态和操作。

**主要职责:**
- 量子比特生成和管理
- 量子门操作
- 测量和部分迹
- 错误模型应用
- 保真度计算

**关键接口:**
```cpp
// 生成纯态量子比特
bool GenerateQubitsPure(const std::string &owner,
                        const std::vector<std::complex<double>> &data,
                        const std::vector<std::string> &qubits);

// 应用量子门
bool ApplyGate(const std::string &owner,
               const std::string &gate,
               const std::vector<std::complex<double>> &data,
               const std::vector<std::string> &qubits);

// 应用量子操作（Kraus通道）
bool ApplyOperation(const QuantumOperation &quantumOperation,
                    const std::vector<std::string> &qubits);

// 测量
std::pair<unsigned, std::vector<double>>
Measure(const std::string &owner, const std::vector<std::string> &qubits);

// 部分迹
bool PartialTrace(const std::vector<std::string> &qubits);

// 计算Bell态保真度
double CalculateFidelity(const std::pair<std::string, std::string> &epr, double &fidel);
```

### 2.2 QuantumMemoryModel - 量子存储器退相干模型

实现基于T1/T2的物理退相干模型。

**物理模型:**
- **T1 (振幅阻尼)**: |1⟩ → |0⟩ 的能量弛豫，概率 p = 1 - exp(-t/T1)
- **T2 (纯退相)**: 相干性衰减，有效退相时间 1/T_φ = 1/T2 - 1/(2T1)

**Kraus算子表示:**

振幅阻尼:
```
K0 = |0⟩⟨0| + √(1-p)|1⟩⟨1| = [[1, 0], [0, √(1-p)]]
K1 = √p|0⟩⟨1|              = [[0, √p], [0, 0]]
```

纯退相:
```
K0 = √(1-p/2) I = [[√(1-p/2), 0], [0, √(1-p/2)]]
K1 = √(p/2) Z   = [[√(p/2), 0], [0, -√(p/2)]]
```

**已知问题与解决方案:**

在张量网络中对纠缠量子比特应用Kraus通道时存在非迹保持问题。解决方案是在每次退相干操作前对所有注册的量子比特应用恒等门：

```cpp
// 解决方案：在ApplyOperation前刷新张量网络状态
for (const auto &pair : m_qubitTimestamps)
{
    m_qphyent->ApplyGate("God", QNS_GATE_PREFIX + "I", pauli_I, {pair.first});
}
QuantumOperation dephas({"I", "PZ"}, {pauli_I, pauli_Z}, {1.0 - prob, prob});
m_qphyent->ApplyOperation(dephas, {qubit});
```

### 2.3 QuantumChannel - 量子信道

表示两个量子节点之间的量子链路。

**功能:**
- 源节点和目标节点管理
- 退极化错误模型（链路保真度）
- EPR对分发支持

### 2.4 错误模型层次

```
QuantumErrorModel (基类)
├── DephaseModel      - 退相模型（门操作相关）
├── DepolarModel      - 退极化模型（链路相关）
├── TimeModel         - 时间相关退相模型
└── QuantumMemoryModel - T1/T2存储器模型（新增）
```

## 3. 一些建议的量子网络协议实现

### 3.1 EPR分发协议（测试用）

**流程:**
1. 源节点生成Bell态 |Φ+⟩ = (|00⟩ + |11⟩)/√2
2. 应用链路退极化噪声
3. 通过经典信道通知目标节点
4. 目标节点接收量子比特所有权

### 3.2 纠缠交换协议（测试用）

**Bell态测量 (BSM):**
```cpp
// CNOT门 + Hadamard门 + 测量
m_qphyent->ApplyGate("God", "QNS_GATE_CNOT", {}, {qubit2, qubit1});
m_qphyent->ApplyGate("God", "QNS_GATE_H", {}, {qubit1});
auto outcome0 = m_qphyent->Measure(owner, {qubit1});
auto outcome1 = m_qphyent->Measure(owner, {qubit2});
```

**Pauli校正:**
- 测量结果 (m0, m1) 决定校正操作
- X校正: 基于 m1
- Z校正: 基于 m0

### 3.3 四节点链协议（本次实现的目标）

**网络拓扑:** A - B - C - D

**协议时序:**
```
t=0:        生成 A-B, B-C, C-D EPR对
t=delay:    B 执行 BSM，广播结果
t=2*delay:  C 执行 BSM，广播结果  
t=3*delay:  D 应用Pauli校正，协议完成
```

**保真度模型:**
```
F_final = F_link^3 × F_decoherence
F_decoherence = (1 + exp(-2t/T2)) / 2
```

**实验结果**
脚本位于 `ns-3.42/contrib/quantum/scripts/run_experiments.sh`
| LinkF | T2(ms) | Delay(ms) | Time(ms) | Fidelity |
| ----- | ------ | --------- | -------- | -------- |
| 0.85  | 10     | 1         | 3        | 0.4756   |
| 0.85  | 10     | 5         | 15       | 0.3224   |
| 0.85  | 10     | 10        | 30       | 0.3078   |
| 0.85  | 10     | 50        | 150      | 0.3071   |
| 0.85  | 50     | 1         | 3        | 0.5794   |
| 0.85  | 50     | 5         | 15       | 0.4756   |
| 0.85  | 50     | 10        | 30       | 0.3995   |
| 0.85  | 50     | 50        | 150      | 0.3078   |
| 0.85  | 100    | 1         | 3        | 0.5962   |
| 0.85  | 100    | 5         | 15       | 0.5345   |
| 0.85  | 100    | 10        | 30       | 0.4756   |
| 0.85  | 100    | 50        | 150      | 0.3224   |
| 0.85  | 500    | 1         | 3        | 0.6105   |
| 0.85  | 500    | 5         | 15       | 0.5962   |
| 0.85  | 500    | 10        | 30       | 0.5794   |
| 0.85  | 500    | 50        | 150      | 0.4756   |
| 0.90  | 10     | 1         | 3        | 0.5645   |
| 0.90  | 10     | 5         | 15       | 0.3826   |
| 0.90  | 10     | 10        | 30       | 0.3654   |
| 0.90  | 10     | 50        | 150      | 0.3645   |
| 0.90  | 50     | 1         | 3        | 0.6878   |
| 0.90  | 50     | 5         | 15       | 0.5645   |
| 0.90  | 50     | 10        | 30       | 0.4743   |
| 0.90  | 50     | 50        | 150      | 0.3654   |
| 0.90  | 100    | 1         | 3        | 0.7078   |
| 0.90  | 100    | 5         | 15       | 0.6345   |
| 0.90  | 100    | 10        | 30       | 0.5645   |
| 0.90  | 100    | 50        | 150      | 0.3826   |
| 0.90  | 500    | 1         | 3        | 0.7247   |
| 0.90  | 500    | 5         | 15       | 0.7078   |
| 0.90  | 500    | 10        | 30       | 0.6878   |
| 0.90  | 500    | 50        | 150      | 0.5645   |
| 0.95  | 10     | 1         | 3        | 0.6640   |
| 0.95  | 10     | 5         | 15       | 0.4500   |
| 0.95  | 10     | 10        | 30       | 0.4298   |
| 0.95  | 10     | 50        | 150      | 0.4287   |
| 0.95  | 50     | 1         | 3        | 0.8089   |
| 0.95  | 50     | 5         | 15       | 0.6640   |
| 0.95  | 50     | 10        | 30       | 0.5578   |
| 0.95  | 50     | 50        | 150      | 0.4298   |
| 0.95  | 100    | 1         | 3        | 0.8324   |
| 0.95  | 100    | 5         | 15       | 0.7463   |
| 0.95  | 100    | 10        | 30       | 0.6640   |
| 0.95  | 100    | 50        | 150      | 0.4500   |
| 0.95  | 500    | 1         | 3        | 0.8523   |
| 0.95  | 500    | 5         | 15       | 0.8324   |
| 0.95  | 500    | 10        | 30       | 0.8089   |
| 0.95  | 500    | 50        | 150      | 0.6640   |
| 0.99  | 10     | 1         | 3        | 0.7514   |
| 0.99  | 10     | 5         | 15       | 0.5093   |
| 0.99  | 10     | 10        | 30       | 0.4864   |
| 0.99  | 10     | 50        | 150      | 0.4851   |
| 0.99  | 50     | 1         | 3        | 0.9154   |
| 0.99  | 50     | 5         | 15       | 0.7514   |
| 0.99  | 50     | 10        | 30       | 0.6313   |
| 0.99  | 50     | 50        | 150      | 0.4864   |
| 0.99  | 100    | 1         | 3        | 0.9420   |
| 0.99  | 100    | 5         | 15       | 0.8446   |
| 0.99  | 100    | 10        | 30       | 0.7514   |
| 0.99  | 100    | 50        | 150      | 0.5093   |
| 0.99  | 500    | 1         | 3        | 0.9645   |
| 0.99  | 500    | 5         | 15       | 0.9420   |
| 0.99  | 500    | 10        | 30       | 0.9154   |
| 0.99  | 500    | 50        | 150      | 0.7514   |

## 4. 张量网络后端

### 4.1 ExaTN集成

使用ExaTN库进行张量网络表示和收缩。

**优势:**
- 高效的张量网络收缩算法
- 支持大规模量子态模拟
- GPU加速支持

**密度矩阵表示:**
- 每个量子比特对应一个2×2张量
- 多比特态通过张量积构建
- 门操作通过张量收缩实现

### 4.2 已知限制

1. **测量后部分迹问题**: 在多量子比特纠缠系统中，测量后执行部分迹可能导致张量网络状态异常
2. **数值精度**: 复数张量的虚部需要在容差范围内

## 5. 与ns-3的集成

### 5.1 事件调度

利用ns-3的 `Simulator::Schedule` 进行：
- 退相干事件调度
- 协议阶段转换
- 经典消息传递模拟

### 5.2 网络栈

```cpp
// 创建经典网络
CsmaHelper csmaHelper;
csmaHelper.SetChannelAttribute("Delay", TimeValue(MilliSeconds(delay)));
NetDeviceContainer devices = csmaHelper.Install(nodes);

// IPv6地址配置
InternetStackHelper stack;
stack.Install(nodes);
Ipv6AddressHelper address;
address.SetBase("2001:1::", Ipv6Prefix(64));
```

### 5.3 应用层接口

量子应用继承自 `ns3::Application`，支持：
- `StartApplication()` / `StopApplication()` 生命周期
- UDP套接字通信
- 属性系统配置
