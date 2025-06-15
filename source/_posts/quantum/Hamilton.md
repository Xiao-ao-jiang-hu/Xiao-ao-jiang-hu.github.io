---
title: 哈密顿量
tags:
  - quantum
  - quantum-mechanics
  - hamiltonian
  - physics
categories:
  - quantum
excerpt: 哈密顿量是量子力学的核心算符，描述系统的总能量。本文介绍其构造、能级离散化、对称性与守恒定律，以及在不同物理系统中的应用。
date: 2025-06-03 09:57:35
---

## 薛定谔方程  
- 含时薛定谔方程：  
  $$
  i\hbar\frac{\partial}{\partial t}|\psi(t)\rangle = \hat{H}|\psi(t)\rangle
  $$  

- 定态薛定谔方程（当 $\hat{H}$ 不显含时间）：  
  $$
  \hat{H}|\psi_n\rangle = E_n|\psi_n\rangle
  $$  
  直观理解：此方程求解系统的“稳态”。能量本征值 $E_n$ 是系统允许的离散能级（类似乐器的固有频率），而 $|\psi_n\rangle$ 是对应的量子态（波函数）。这表明每一个量子态都与一个特定的能量值相关联。


## 哈密顿量的构造：动能 + 势能  
哈密顿量的一般形式为：  
$$
\hat{H} = \hat{T} + \hat{V}
$$  
其中 $\hat{T}$ 是动能项，$\hat{V}$ 是势能项。  

### 1. 动能项 $\hat{T}$  
- 单粒子（三维空间）：  
  $$
  \hat{T} = -\frac{\hbar^2}{2m}\nabla^2
  $$  
  直观理解：$\nabla^2$（拉普拉斯算符）衡量波函数的“弯曲程度”。粒子质量 $m$ 越大，动能越小（类似经典物理中“惯性”效应），负号源于波函数的波动性。

- N粒子系统：  
  $$
  \hat{T} = \sum_{i=1}^N -\frac{\hbar^2}{2m_i}\nabla_i^2
  $$  
  直观理解：总动能是各粒子动能之和，$\nabla_i^2$ 针对第 $i$ 个粒子的坐标。

### 2. 势能项 $\hat{V}$  
- 位置相关势：$\hat{V} = V(\hat{\mathbf{r}})$（如重力场）  
- 粒子间相互作用：$\hat{V}_{\text{int}} = \sum_{i<j} V(|\hat{\mathbf{r}}_i - \hat{\mathbf{r}}_j|)$（如库仑力）  
  直观理解：势能将环境约束“编码”进系统。例如，势阱限制粒子运动范围，导致能量量子化（见第四节）。


## 离散能级：量子化的能量阶梯  
哈密顿量的本征值方程 $\hat{H} |\psi_n\rangle = E_n |\psi_n\rangle$ 直接给出离散能级 $E_n$。其根源是量子系统的束缚条件：  
- 数学本质：当波函数需满足边界条件（如无限深势阱）或衰减条件（如原子轨道），能量 $E$ 被强制离散化。    

### 示例：一维无限深势阱  
- 哈密顿量：  
  $$
  \hat{H} = -\frac{\hbar^2}{2m}\frac{d^2}{dx^2} + V(x), \quad V(x) = \begin{cases} 0 & 0<x<L \\ \infty & \text{其他} \end{cases}
  $$  
- 求解过程：  
  波函数 $\psi(x) = A \sin(kx)$ 在边界 $x=0$ 和 $x=L$ 处必须为零 → $kL = n\pi$ → $E_n = \frac{\hbar^2 \pi^2 n^2}{2mL^2}$
  直观理解：势阱宽度 $L$ 越小，能级间距越大（粒子“挤压”导致能量升高）；量子数 $n$ 对应不同“谐波模式”。

### 量子谐振子：等间距能级  
- 哈密顿量：  
  $$
  \hat{H} = -\frac{\hbar^2}{2m}\frac{d^2}{dx^2} + \frac{1}{2}m\omega^2 x^2
  $$  
- 能级结果：  
  $$
  E_n = \hbar\omega \left( n + \frac{1}{2} \right), \quad n=0,1,2,\dots
  $$  

## 物理系统示例
不同系统对应独特哈密顿量形式，直接决定其物理行为：  

### 1. 氢原子（单电子）  
$$
\hat{H} = -\frac{\hbar^2}{2\mu}\nabla^2 - \frac{e^2}{4\pi\epsilon_0} \frac{1}{r}
$$  
- 结果：$E_n = -\frac{13.6}{n^2}  \text{eV}$（玻尔能级）  

### 2. 晶格中的电子（紧束缚模型）  
$$
\hat{H} = -t\sum_{\langle i,j\rangle} \left( |i\rangle\langle j| + |j\rangle\langle i| \right) + \epsilon\sum_i |i\rangle\langle i|
$$  
- 能带结构：$E(\mathbf{k}) = \epsilon - 2t(\cos k_x a + \cos k_y a + \cos k_z a)$  
  直观理解：电子在原子间“跳跃”，参数 $t$ 控制跳跃强度；$\cos$ 项形成能带（允许能量范围）。

### 3. 超导体（BCS理论）  
$$
\hat{H} = \sum_{\mathbf{k},\sigma} \epsilon_{\mathbf{k}} \hat{c}_{\mathbf{k}\sigma}^\dagger \hat{c}_{\mathbf{k}\sigma} - \sum_{\mathbf{k},\mathbf{k}'} V_{\mathbf{k}\mathbf{k}'} \hat{c}_{\mathbf{k}\uparrow}^\dagger \hat{c}_{-\mathbf{k}\downarrow}^\dagger \hat{c}_{-\mathbf{k}'\downarrow} \hat{c}_{\mathbf{k}'\uparrow}
$$  
- 能隙方程：$\Delta = V \sum_{\mathbf{k}} \frac{\Delta}{2\sqrt{\epsilon_{\mathbf{k}}^2 + \Delta^2}} \tanh\left( \frac{\sqrt{\epsilon_{\mathbf{k}}^2 + \Delta^2}}{2k_B T} \right)$  
  直观理解：电子配对形成“库珀对”，$\Delta$ 是能隙（超导态的量子特性屏障）。

### 4. 光-原子相互作用（Jaynes-Cummings模型）  
$$
\hat{H} = \hbar\omega_c \hat{a}^\dagger\hat{a} + \frac{\hbar\omega_a}{2}\hat{\sigma}_z + \hbar g (\hat{a}\hat{\sigma}_+ + \hat{a}^\dagger\hat{\sigma}_-)
$$  
- 缀饰态能级分裂：$\Delta E = \hbar\sqrt{(\omega_c - \omega_a)^2 + 4g^2(n+1)}$  


## 对称性与守恒定律  
哈密顿量的对称性直接对应物理守恒量：  
- 连续对称性：  
  - 平移不变性 $[\hat{H}, \hat{\mathbf{p}}] = 0$ → 动量守恒  
  - 旋转不变性 $[\hat{H}, \hat{\mathbf{L}}] = 0$ → 角动量守恒  
  直观理解：若系统空间均匀（无特殊点），动量守恒；若各向同性（无特殊方向），角动量守恒。  

- 离散对称性：  
  - 宇称对称性 $[\hat{H}, \hat{P}] = 0$ → 波函数宇称守恒  
  - 时间反演对称性 $\hat{T}\hat{H}\hat{T}^{-1} = \hat{H}$ → 微观过程可逆  

## 含时哈密顿量的处理  
当 $\hat{H}$ 显含时间时，系统演化更复杂：  

### 1. 相互作用绘景  
- 分解：$\hat{H} = \hat{H}_0 + \hat{V}(t)$  
- 演化算符：$\hat{U}_I(t,t_0) = \mathcal{T}\exp\left( -\frac{i}{\hbar}\int_{t_0}^t \hat{V}_I(t')dt' \right)$  
  直观理解：将系统分为“自由部分” $\hat{H}_0$ 和“扰动” $\hat{V}(t)$，简化含时微扰计算。

### 2. 绝热定理  
若 $\hat{H}(t)$ 缓慢变化，系统保持在瞬时本征态：  
$$
|\psi(t)\rangle \approx e^{i\phi(t)} |n(t)\rangle, \quad \hat{H}(t)|n(t)\rangle = E_n(t)|n(t)\rangle
$$  

## 多体量子系统：第二量子化  
对大量粒子（如电子气、玻色凝聚），哈密顿量需用场算符表示：  

### 1. 费米子系统（电子）  
$$
\hat{H} = \sum_{ij} t_{ij} \hat{c}_i^\dagger \hat{c}_j + \frac{1}{2}\sum_{ijkl} V_{ijkl} \hat{c}_i^\dagger \hat{c}_j^\dagger \hat{c}_k \hat{c}_l
$$  
直观理解：$\hat{c}_i^\dagger$ 和 $\hat{c}_j$ 是粒子产生/湮灭算符，$t_{ij}$ 描述粒子“跳跃”，$V_{ijkl}$ 描述粒子间相互作用。

### 2. 玻色子系统（BEC）  
$$
\hat{H} = \int d^3r \hat{\psi}^\dagger(\mathbf{r}) \left( -\frac{\hbar^2}{2m}\nabla^2 + V_{\text{ext}}(\mathbf{r}) \right) \hat{\psi}(\mathbf{r}) + \frac{g}{2} \int d^3r \hat{\psi}^\dagger\hat{\psi}^\dagger\hat{\psi}\hat{\psi}
$$  
直观理解：玻色子可“堆积”在同一态（BEC），$g$ 控制粒子间排斥/吸引强度。


## 哈密顿量的对角化技术  
求解 $\hat{H}$ 的本征值是关键任务：  

### 1. 数值对角化（有限维系统）  
- 构造矩阵：$H_{ij} = \langle \phi_i | \hat{H} | \phi_j \rangle$  
- 对角化：$\mathbf{H} = \mathbf{U}\mathbf{D}\mathbf{U}^\dagger$，本征值 $D_{nn} = E_n$  
  直观理解：将算符投射到有限基底，本征值即矩阵特征值

### 2. 解析方法（如Bogoliubov变换）  
对超导系统：  
$$
\hat{\gamma}_k = u_k \hat{c}_k + v_k \hat{c}_{-k}^\dagger \quad \Rightarrow \quad \hat{H} = \sum_k E_k \hat{\gamma}_k^\dagger \hat{\gamma}_k + \text{const}
$$  
直观理解：通过混合粒子-空穴算符，将复杂相互作用转化为“准粒子”的自由系统。


## 相对论修正：高速粒子的哈密顿量  
### 1. 狄拉克方程（严格相对论形式）  
$$
\hat{H}_D = c \boldsymbol{\alpha} \cdot \hat{\mathbf{p}} + \beta m c^2 + V(\mathbf{r})
$$  
直观理解：$\boldsymbol{\alpha}$ 和 $\beta$ 是狄拉克矩阵，描述电子自旋和反粒子（正电子）效应。

### 2. 泡利近似（非相对论极限）  
$$
\hat{H} = \frac{\hat{\mathbf{p}^2}{2m} + V - \frac{\hat{\mathbf{p}}^4}{8m^3c^2} + \frac{\hbar}{4m^2c^2}}{\frac{1}{r}\frac{dV}{dr} \hat{\mathbf{L}}\cdot\hat{\mathbf{S}}} + \cdots
$$  
直观理解：修正项包括相对论质量增加（$\hat{\mathbf{p}}^4$ 项）和自旋-轨道耦合（$\hat{\mathbf{L}}\cdot\hat{\mathbf{S}}$ 项）——解释原子光谱精细结构。


## 开放系统：环境的影响  
当系统与环境耦合时，哈密顿量需扩展为Lindblad方程：  
$$
\frac{d\hat{\rho}}{dt} = -\frac{i}{\hbar} [\hat{H}, \hat{\rho}] + \sum_k \left( \hat{L}_k \hat{\rho} \hat{L}_k^\dagger - \frac{1}{2} \{ \hat{L}_k^\dagger \hat{L}_k, \hat{\rho} \} \right)
$$  
直观理解：$\hat{L}_k$ 是“跳变算符”，描述能量耗散（如光子发射）；哈密顿量部分控制相干演化，耗散项导致退相干。


## 总结：哈密顿量的统一视角  
哈密顿量 $\hat{H}$ 是量子理论的基石，其形式决定了：  
1. 能谱结构（$E_n$） → 解释光谱、热力学性质（如配分函数 $Z = \text{Tr}(e^{-\beta\hat{H}})$）。  
2. 时间演化（$|\psi(t)\rangle = e^{-i\hat{H}t/\hbar}|\psi(0)\rangle$） → 预测量子动力学。  
3. 响应函数（$G(\omega) = \langle \hat{A}; \hat{B} \rangle_\omega$） → 描述系统对外场的反应。  
4. 对称性与守恒律 → 连接诺特定理与量子测量。  
