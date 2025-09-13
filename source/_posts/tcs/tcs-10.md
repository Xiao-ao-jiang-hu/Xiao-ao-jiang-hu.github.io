---
title: TCS Lec10总结
tags:
  - tcs
categories:
  - tcs
excerpt: 本节内容涵盖了非确定性对数空间（NL）与其补集（coNL）的关系、概率论基础、随机变量与期望、集中不等式以及概率方法等重要概念。
abbrlink: 54fb2d29
date: 2025-05-28 23:19:12
---

### **第一部分：NL = coNL (Immerman-Szelepcsényi 定理)**
**目标**：证明非确定性对数空间类 NL 在补集下封闭（即 NL = coNL）。  
**核心策略**：证明问题 `NOPATH`（给定图 $G$ 和两点 $s, t$，判断是否存在**无**路径从 $s$ 到 $t$）属于 NL。

#### **关键步骤**：
1. **定义关键函数**：
   - `path(G, s, t)`：判断是否存在 $s \to t$ 路径。
   - $r_d$：从 $s$ 出发、长度不超过 $d$ 的可达节点数量。
2. **引理 1**：若存在 NL 机器计算 `path`，则存在 NL 机器计算 $r$（总可达节点数）。  
   - **证明思路**：通过遍历所有节点，用 `path` 检查可达性并计数。
3. **引理 2**：若存在 NL 机器计算 $r_d$，则存在 NL 机器计算 `path_{d+1}`（路径长度 $\leq d+1$）。  
   - **证明思路**：利用 $r_d$ 和迭代过程验证路径存在性。
4. **迭代计算 $r_d$**：
   - 初始化 $r_0 = 1$（仅 $s$ 可达）。
   - 用 NL 机器从 $r_d$ 计算 $r_{d+1}$：检查节点是否与 $R_d$（长度 $\leq d$ 的可达集）中的节点有边。
5. **最终 NTM 设计**：
   - 计算 $r_n$（所有可达节点数）。
   - 若 `path_n(G, s, t) = No` 则接受（即无路径），否则拒绝。

**结论**：`NOPATH ∈ NL`，从而 NL = coNL。


### **第二部分：概率论基础**
#### **1. 历史背景**
- 起源于赌博问题（如 de Méré 问题：掷骰子出现至少一个 6 的概率）。
- **未完成赌局问题**：Pascal 和 Fermat 的通信推动概率论早期发展。

#### **2. 基本概念**
- **样本空间 $S$**：有限集合（如 $n$ 枚硬币的 outcomes $S = \{0,1\}^n$）。
- **事件 $A \subseteq S$**：子集，概率定义为 $\Pr(A) = \sum_{x \in A} \Pr(x)$。
- **概率公理**：
  - $\Pr(x) \in [0,1]$，且 $\sum_{x \in S} \Pr(x) = 1$。
  - 若 $A \subseteq B$，则 $\Pr(A) \leq \Pr(B)$。
- **并集概率**：$\Pr(A \cup B) = \Pr(A) + \Pr(B) - \Pr(A \cap B)$。
- **Union Bound（关键工具）**：  
  $$
  \Pr\left( \bigcup_{j=1}^m A_j \right) \leq \sum_{j=1}^m \Pr(A_j).
  $$

#### **3. 条件概率与独立性**
- **条件概率**：$\Pr(B|A) = \frac{\Pr(A \cap B)}{\Pr(A)}$（以 $A$ 为新样本空间）。
- **链式法则**：  
  $$
  \Pr(A \cap B \cap C) = \Pr(A) \cdot \Pr(B|A) \cdot \Pr(C|A \cap B).
  $$
- **独立性**：$\Pr(A \cap B) = \Pr(A)\Pr(B)$，等价于 $\Pr(B|A) = \Pr(B)$（当 $\Pr(A) > 0$）。

#### **4. 经典问题**
- **生日悖论**：
  - $m$ 人在 $N=365$ 天的生日均不同的概率：  
    $$
    \Pr(\text{no collision}) = \prod_{k=1}^{m-1} \left(1 - \frac{k}{N}\right) \approx e^{-m(m-1)/(2N)}.
    $$
  - 当 $m \approx 23$ 时，概率降至 $\sim 50\%$。
- **应用**：密码学中的**生日攻击**（如寻找 SHA-1 哈希碰撞，$N=2^{160}$）。


### **第三部分：随机变量与期望**
#### **1. 随机变量（RV）**
- 函数 $X: S \to \mathbb{R}$（如硬币翻转的汉明权重 $X(x) = \sum x_i$）。
- **期望**：$\mathbb{E}(X) = \sum_{x} \Pr(x) X(x)$。
- **线性期望（核心工具）**：  
  $$
  \mathbb{E}\left( \sum_j X_j \right) = \sum_j \mathbb{E}(X_j).
  $$
- **独立 RV 的乘积期望**：$\mathbb{E}\left( \prod_j X_j \right) = \prod_j \mathbb{E}(X_j)$（要求独立性）。

#### **2. 经典分布**
| 分布             | 描述                     | 期望          | 方差             |
|------------------|--------------------------|---------------|------------------|
| **二项分布**     | $n$ 次伯努利试验成功次数 | $np$        | $np(1-p)$      |
| **几何分布**     | 首次成功所需试验次数       | $\frac{1}{p}$ | $\frac{1-p}{p^2}$ |
| **高斯分布**     | 概率密度 $\phi(x) = \frac{1}{\sqrt{2\pi}} e^{-x^2/2}$ | 旋转不变性    |                  |

#### **3. 赠券收集问题**
- **目标**：集齐 $n$ 种赠券所需抽取次数的期望。
- **分解**：$X = \sum_{i=1}^n X_i$，其中 $X_i \sim \text{Geometric}\left(1 - \frac{i-1}{n}\right)$。
- **期望**：$\mathbb{E}(X) = n \sum_{k=1}^n \frac{1}{k} = nH_n \approx n \ln n$（$H_n$ 为调和数）。


### **第四部分：集中不等式（Tail Bounds）**
#### **1. Markov 不等式**
- 对非负 RV $X$：$\Pr(X \geq t) \leq \frac{\mathbb{E}(X)}{t}$。  
  *应用*：赠券收集问题中 $\Pr(X \geq 100nH_n) \leq 0.01$。

#### **2. Chebyshev 不等式**
- 依赖方差：$\Pr(|X - \mu| \geq t) \leq \frac{\text{Var}(X)}{t^2}$。  
  *适用场景*：二阶矩（方差）已知的问题（如两两独立 RV）。

#### **3. Chernoff 界（指数衰减）**
- **Hoeffding 界**（有界 RV）：  
  $$
  \Pr(|X - \mu| \geq t) \leq 2 \exp\left(-\frac{2t^2}{\sum (b_i - a_i)^2}\right).
  $$
- **乘性形式**（Bernoulli RV）：  
  $$
  \Pr(X \geq (1+\varepsilon)\mu) \leq \exp\left(-\frac{\varepsilon^2}{2+\varepsilon} \mu\right).
  $$
- **应用**：采样估计成功率 $p$ 时，样本量 $n \geq \frac{1}{2\varepsilon^2} \ln(2/\delta)$ 可保证误差 $\leq \varepsilon$（置信度 $1-\delta$）。


### **第五部分：概率方法**
#### **核心思想**：用概率证明组合对象的存在性。
- **Ramsey 数下界（Erdős, 1947）**：  
  - 定理：若 $\binom{n}{k} \cdot 2^{1 - \binom{k}{2}} < 1$，则 $R(k,k) > n$。  
  - **证明**：对 $K_n$ 随机红蓝染色，用 Union Bound 证无边集 $K_k$ 全同色的概率 $<1$，故存在无单色 $K_k$ 的染色。

