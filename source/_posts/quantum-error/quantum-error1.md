---
title: 量子信道的数学描述
date: 2025-05-23 18:37:16
tags:
    - quantum
    - quantum-error
excerpt: 量子信道的数学描述是量子信息理论的核心内容之一。本文将介绍CPTP映射的定义及其在量子信道中的重要性。
---
CPTP（Completely Positive Trace-Preserving）映射是量子信息理论中描述量子信道的基本数学工具，其必须满足两个关键性质：完全正定性（Completely Positive, CP）和保迹性（Trace-Preserving, TP）。

## CPTP映射的定义
### 完全正定性（Completely Positive, CP）
- 正定性：对于任意输入的正定密度矩阵（即量子态）$\rho$，映射后的输出 $\Lambda(\rho)$ 仍然是正定的。
- 完全性：即使将映射 $\Lambda$ 与任意维数的恒等映射（例如与另一个系统 $B$ 组合成 $\Lambda \otimes I_B$）联合作用，结果仍保持正定性。这一条件保证了即使原系统与其他系统处于纠缠态，操作后的复合系统仍是合法的量子态。

### 保迹性（Trace-Preserving, TP）
- 映射保持密度矩阵的迹不变，即 $\text{Tr}[\Lambda(\rho)] = \text{Tr}[\rho] = 1$。这确保了操作后的态仍是归一化的，总概率守恒。


## 量子信道为何必须是CPTP映射？
### 物理态的有效性
量子态的密度矩阵必须满足正定性和迹为1的条件。若信道不满足CP性质：
- 非完全正定性：当系统与另一个系统（如环境）纠缠时，对系统施加映射可能导致复合系统的密度矩阵出现负本征值，从而违反量子态的基本要求。
- 非保迹性：若迹不守恒，概率可能“泄露”或超出1，导致非物理结果。

### 开放系统演化的普适性
量子信道通常描述开放量子系统的演化（如噪声、退相干）。此时，系统的演化需考虑与环境的相互作用。通过引入CPTP条件：
- Stinespring扩张定理：任何量子操作可视为系统与环境联合的幺正演化后的部分迹（即 $\Lambda(\rho) = \text{Tr}_E[U(\rho \otimes |0\rangle\langle 0|_E)U^\dagger]$），这种形式天然满足CPTP性质。
- Kraus表示定理：任何CPTP映射可表示为 $\Lambda(\rho) = \sum_i K_i \rho K_i^\dagger$，其中 $\{K_i\}$ 满足 $\sum_i K_i^\dagger K_i = I$。这种表示直接体现了量子操作的物理可实现性。
