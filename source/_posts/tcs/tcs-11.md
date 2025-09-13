---
title: TCS Lec11总结
tags:
  - tcs
categories:
  - tcs
excerpt: 本节内容涵盖了随机算法的基本概念、BPP 类的定义及其与复杂性理论的关系，以及随机算法在实际问题中的应用案例。
abbrlink: f28c269d
date: 2025-05-28 23:22:56
---

### **1. 随机算法案例**
#### **1.1 随机搜索算法**
- **问题定义**：  
  输入：长度为 $n$ 的二进制串 $x$，其中恰有 $n/4$ 个位置为 1。  
  输出：一个满足 $x_i = 1$ 的位置 $i$。
- **确定性算法**：  
  - 顺序扫描：最坏情况（如 $x = 0^{3n/4}1^{n/4}$) 时间复杂度 $\Omega(n)$。
- **随机算法**：  
  - 重复采样随机位置 $i \sim \text{Unif}([n])$，直到找到 1。  
  - **分析**：  
    - 单次成功概率 $p = 1/4$。  
    - 运行时间服从几何分布，期望值 $\mathbb{E}[T] = 1/p = 4 = O(1)$。  
  - **关键结论**：对任意输入，期望时间复杂度为 $O(1)$。

#### **1.2 矩阵乘法验证（Freivalds 算法）**
- **问题定义**：  
  给定 $n \times n$ 矩阵 $A, B, C$，验证 $AB \overset{?}{=} C$。  
- **算法**：  
  重复 $k$ 次：  
  1. 生成随机向量 $v \in \{0,1\}^n$（均匀分布）。  
  2. 计算 $d = A(Bv) - Cv$。  
  3. 若 $d \neq \vec{0}$，输出 "No"。  
  若所有迭代通过，输出 "Yes"。  
- **正确性证明**：  
  - 若 $AB = C$：恒输出 "Yes"（错误率 $0$）。  
  - 若 $AB \neq C$：设 $D = AB - C \neq 0$，存在非零元素 $D_{i,j}$。  
    - 分析分量 $d_i = \sum_k D_{i,k}v_k = D_{i,j}v_j + s$（$s$ 为其他项和）。  
    - 错误条件：$d_i = 0$。  
      $$
      \Pr(d_i = 0) = \underbrace{\Pr(v_j = 0)}_{1/2} \cdot \Pr(s=0) + \underbrace{\Pr(D_{i,j}v_j = -s)}_{\leq 1/2} \cdot \Pr(s \neq 0) \leq \frac{1}{2}.
      $$  
    - 故 $\Pr(\text{输出 "Yes"}) \leq (1/2)^k = 2^{-k}$。  
- **复杂度**：$O(kn^2)$（优于直接计算 $O(n^\omega)$，$\omega \geq 2.37$）。

#### **1.3 MAX-CUT 近似算法**
- **问题定义**：  
  给定图 $G=(V,E)$，求最大割（NP-难问题）。  
- **随机算法**：  
  - 为每个顶点随机分配 $0$ 或 $1$（均匀分布），割边为 $x_u \neq x_v$ 的边。  
  - **期望割大小**：  
    $$
    \mathbb{E}[\text{size}] = \sum_{\{u,v\} \in E} \Pr(x_u \neq x_v) = \frac{|E|}{2} \geq \frac{1}{2} \text{OPT}.
    $$  
- **去随机化**：  
  - **成对独立哈希函数**：  
在随机算法去随机化（Derandomization）中，**成对独立哈希函数族**（Pairwise Independent Hash Family）是关键工具。

1. **完全独立性的计算代价过高**
  - 在 **MAX-CUT 随机算法**中，为每个顶点独立随机分配比特（0/1）需要 $n$ 个独立随机比特。
  - 可能赋值方案共 $2^n$ 种（指数级），无法在多项式时间内枚举所有解。
  - 算法只需保证**每条边被割的概率为 $1/2$**（即 $\Pr[x_u \neq x_v] = \frac{1}{2}$)。
  - 但完全独立性要求所有顶点赋值**全局独立**，计算代价过高。


2. **成对独立性的充分性**
   - **定义**：
     - 函数族 $\mathcal{H} = \{ h: U \to R \}$ 是成对独立的，若对任意**不同输入** $x_1 \neq x_2 \in U$ 和任意输出 $y_1, y_2 \in R$：
       $$
       \Pr_{h \in \mathcal{H}} \left[ h(x_1) = y_1 \land h(x_2) = y_2 \right] = \frac{1}{|R|^2}.
       $$
     - **性质**：对任意 $x_1 \neq x_2$，事件 $h(x_1) = y_1$ 和 $h(x_2) = y_2$ 相互独立。
   - **关键观察**：
     - MAX-CUT 的割大小仅依赖**边端点**的比特差异：
       $$
       \text{size} = \sum_{\{u,v\} \in E} \mathbf{1}_{[h(u) \neq h(v)]}.
       $$
     - 只需保证**每条边的割事件**（即 $h(u) \neq h(v)$）概率为 $1/2$，且**边间两两独立**（无需全局独立）。


3. **高效构造与多项式大小**
   - **构造方法**（以顶点集 $V$ 为例）：
     - 设顶点用 $k = \log n$ 位编码（$U = \{0,1\}^k$），输出 $R = \{0,1\}$。
     - 定义哈希函数：  
       $$
       h_{a,b}(x) = a \cdot x + b \mod 2 \quad (a \in \{0,1\}^k,  b \in \{0,1\}).
       $$
     - **函数族大小**：$|\mathcal{H}| = 2^{k+1} = 2n = O(n)$（多项式级）。
   - **成对独立性证明**：
     - 固定 $x_1 \neq x_2$，需证 $\forall y_1, y_2 \in \{0,1\}$：
       $$
       \Pr_{a,b} \left[ a \cdot x_1 + b = y_1 \land a \cdot x_2 + b = y_2 \right] = \frac{1}{4}.
       $$
     - 方程组：
       $$
       \begin{cases}
       a \cdot x_1 + b = y_1 \\
       a \cdot x_2 + b = y_2
       \end{cases}
       \implies a \cdot (x_1 - x_2) = y_1 - y_2 \pmod{2}.
       $$
     - 因 $x_1 \neq x_2$，存在坐标 $i$ 使得 $x_{1,i} \neq x_{2,i}$。  
       对固定 $a$ 的其他分量，$a_i$ 有唯一解满足方程（概率 $1/2$），且 $b$ 由 $a$ 唯一确定（概率 $1$）。  
       故联合概率为 $\frac{1}{2} \times \frac{1}{2} = \frac{1}{4}$。


4. **去随机化的实现**
   - **算法步骤**：
     1. 枚举所有 $h_{a,b} \in \mathcal{H}$（共 $2n$ 个函数）。
     2. 对每个 $h_{a,b}$，计算割大小 $\text{size}_{a,b} = \sum_{\{u,v\} \in E} \mathbf{1}_{[h_{a,b}(u) \neq h_{a,b}(v)]}$。
     3. 输出最大割。
   - **正确性保证**：
     - 对每条边 $\{u,v\}$：
       $$
       \Pr_{h \in \mathcal{H}} \left[ h(u) \neq h(v) \right] = \frac{1}{2} \quad (\text{由成对独立性导出}).
       $$
     - 期望割大小：
       $$
       \mathbb{E}[\text{size}] = \sum_{\{u,v\} \in E} \frac{1}{2} = \frac{|E|}{2}.
       $$
     - **存在性**：期望为 $|E|/2$ → 必存在某个 $h_{a,b}$ 满足 $\text{size}_{a,b} \geq \frac{|E|}{2}$。
   - **复杂度优势**：
     - 时间：$O(n) \times O(|E|) = O(n^3)$（多项式时间）。
     - 空间：每个顶点赋值仅依赖 $a, b$ 和自身标签，**可并行计算**。


- **为什么更弱独立性足够？——本质原因**
随机算法的去随机化常依赖以下事实：
1. **目标函数为线性**（如割大小是边割事件的线性组合）。
2. **期望的线性性**（Linearity of Expectation）：
   $$
   \mathbb{E}\left[\sum_{\{u,v\} \in E} \mathbf{1}_{\text{cut}}\right] = \sum_{\{u,v\} \in E} \mathbb{E}[\mathbf{1}_{\text{cut}}].
   $$
3. **期望计算仅需边缘概率**：
   - 对每条边 $e$，只需 $\Pr[\text{割 } e] = \frac{1}{2}$。
   - 无需高阶联合事件概率（如三条边同时被割的概率）。

→ **成对独立性已足够保证边缘概率正确**，且能高效构造。


#### **1.4 素性测试**
- **Fermat 测试**：  
  - 依据：若 $n$ 质数，则 $\forall a: a^n \equiv a \pmod{n}$。  
  - **缺陷**：Carmichael 数（如 $561$) 满足条件但为合数。  
- **Rabin-Miller 算法**：  
  - 步骤：对 $n=2^k q+1$，检查序列 $a^q, a^{2q}, \dots, a^{2^k q} \pmod{n}$ 是否以 $1$ 结尾且前驱为 $-1$。  
  - **错误率**：若 $n$ 合数，$\Pr(\text{通过}) \leq 1/4$（Rabin 证明）。  
- **AKS 算法 (2002)**：  
  确定性多项式时间算法（但随机算法更高效）。


### **2. BPP 类：定义与性质**
#### **2.1 基本定义**
- **概率图灵机**：  
  非确定性图灵机，每步有两个随机选择（概率 $1/2$），路径概率为 $2^{-\text{随机步数}}$。  
- **BPP 类**：  
  语言 $L \in \text{BPP}$ 当且仅当存在多项式时间概率图灵机 $M$ 满足：  
  $$
  \begin{cases}
  x \in L & \implies \Pr[M \text{ accepts } x] \geq 2/3, \\
  x \notin L & \implies \Pr[M \text{ accepts } x] \leq 1/3.
  \end{cases}
  $$  
- **等价定义**：存在多项式时间验证器 $V$ 使得  
  $$
  x \in L \iff \Pr_{r \in \{0,1\}^{p(|x|)}} [V(x,r) = 1] \geq 2/3.
  $$

#### **2.2 误差缩减**
- **定理**：对任意 $L \in \text{BPP}$ 和多项式 $q$，存在概率机 $M'$ 在时间 $\text{poly}(n)$ 内以错误率 $\leq 2^{-q(n)}$ 判定 $L$。  
- **证明**：  
  - 独立运行原算法 $k = O(q(n))$ 次，取多数结果。  
  - 由 Chernoff 界，错误概率 $\leq e^{-c k} \leq 2^{-q(n)}$（$c>0$ 为常数）。

#### **2.3 BPP 与电路复杂性（P/poly）**
## BPP与电路复杂性：详细展开

### 1. 非均匀计算模型：P/poly类

#### 1.1 电路模型基础
- **电路定义**：
  - 由布尔门（AND, OR, NOT）组成的有向无环图
  - 输入：n个布尔变量
  - 输出：1个布尔值
  - 大小：电路中门的数量

- **有限函数计算**：
  - 对每个输入长度n，函数 $f_n: \{0,1\}^n \to \{0,1\}$
  - $f_n \in \text{SIZE}_n(s)$ 当存在大小≤s的电路计算 $f_n$

#### 1.2 扩展到无限语言
- **语言 $L \subseteq \{0,1\}^*$**：
  - 对应函数序列 $\{f_n\}$，其中 $f_n(x) = L(x)$ 当 $|x| = n$
  
- **非均匀复杂度类**：
  - $L \in \text{SIZE}(T(n))$ 当存在电路族 $\{C_n\}$ 满足：
    $$
    \begin{cases}
    \forall n, C_n \text{ 计算 } f_n \\
    \exists n_0, \forall n \geq n_0, |C_n| \leq T(n)
    \end{cases}
    $$
  
- **P/poly定义**：
  $$
  \text{P/poly} = \bigcup_{c \in \mathbb{N}} \text{SIZE}(n^c)
  $$
  多项式大小电路族计算的语言类

#### 1.3 P与P/poly的关系
| 特性          | P类                          | P/poly类                          |
|---------------|------------------------------|----------------------------------|
| 计算模型      | 单一图灵机                   | 电路族（每个输入长度不同电路）    |
| 均匀性        | 是（同一机器处理所有输入）    | 否（不同尺寸输入用不同电路）      |
| 包含关系      | $\text{P} \subseteq \text{P/poly}$ | $\text{P} \subsetneq \text{P/poly}$ |
| 非可计算问题  | 不包含                       | 包含（如硬编码不可判定问题的答案）|

**反例说明严格包含**：
定义语言：
$$
L = \{ 1^n \mid \text{第 } n \text{ 个图灵机在空输入上停机} \}
$$
- $L \in \text{P/poly}$：对每个n，电路硬编码答案（0或1）
- $L \notin \text{RE}$：图灵停机问题不可判定 → $L \notin \text{P}$

### 2. BPP ⊆ P/poly 的证明

#### 2.1 定理核心思想
若 $L \in \text{BPP}$，则存在多项式大小电路族计算 $L$，证明分三步：

**步骤1：误差缩减**
- 设原始BPP算法错误概率 $\epsilon = 1/3$
- 通过k次独立重复并取多数结果，错误概率降至 $\epsilon' \leq e^{-ck}$ (Chernoff界)
- 特别取 $k = n+1$，则：
  $$
  \epsilon' \leq e^{-c(n+1)} < \frac{1}{10} \cdot 2^{-n} \quad (\text{对足够大c})
  $$

**步骤2：并集界与存在性**
- 固定输入长度n，记输入空间 $|\{0,1\}^n| = 2^n$
- 对每个输入x，错误概率：
  $$
  \Pr_r[M'(x,r) \neq L(x)] < \delta = \frac{1}{10} \cdot 2^{-n}
  $$
- 存在性论证：
  $$
  \Pr_r[\exists x: M'(x,r) \neq L(x)] \leq \sum_x \Pr_r[M'(x,r) \neq L(x)] < 2^n \cdot \delta = \frac{1}{10} < 1
  $$
  ⇒ 存在固定随机串 $r^*$ 使得：
  $$
  \forall x \in \{0,1\}^n: M'(x, r^*) = L(x)
  $$

**步骤3：电路构造**
1. 对每个n，硬编码 $r^*$（长度 $m = \text{poly}(n)$)
2. 构造电路 $C_n$ 模拟 $M'(\cdot, r^*)$
   - 因 $M'$ 是确定性多项式时间算法
   - 标准电路模拟：时间 $T(n)$ → 电路大小 $O(T(n)^2)$


### **3. BPP 与复杂性理论**
#### **3.1 Sipser-Gács 定理：P = NP ⇒ P = BPP**
- **目标**：证明若 $\text{P} = \text{NP}$，则 $\text{BPP} = \text{P}$。  
- **证明概要**：  
  1. **误差缩减**：设 $L \in \text{BPP}$，有验证器 $V$，错误率 $\leq 2^{-m-2}$（$m = |r|$）。  
     - 定义集合 $S_x = \{ r \mid V(x,r) = 1 \}$：  
       $$
       \begin{cases}
       x \in L & \implies |S_x| \geq (1 - 2^{-m-2}) \cdot 2^m > 2^{m-1}, \\
       x \notin L & \implies |S_x| \leq 2^{-2} = 1/4.
       \end{cases}
       $$  
  2. **覆盖引理**：若 $|S| \geq 2^{m-1}$，则 $\exists s_1, \dots, s_{2m}$ 使得 $\bigcup_{i=1}^{2m} (S \oplus s_i) = \{0,1\}^m$。  
     - **证明**（概率法）：  
       - 随机选取 $s_i$，对固定 $z \in \{0,1\}^m$：  
         $$
         \Pr[z \notin S \oplus s_i] = 1 - \frac{|S|}{2^m} \leq \frac{1}{2}.
         $$  
       - 故 $\Pr[z \text{ 未被覆盖}] \leq (1/2)^{2m} = 2^{-2m}$。  
       - 并集界：$\Pr[\exists z \text{ 未被覆盖}] \leq 2^m \cdot 2^{-2m} = 2^{-m} < 1$。  
  3. **量词消去**：  
     - 定义谓词 $\phi(x; s_1, \dots, s_{2m}) := \forall r\, \exists i: V(x, r \oplus s_i) = 1$。  
     - 若 $x \in L$，则 $\exists s_1, \dots, s_{2m}$ 使 $\phi$ 真。  
     - 若 $x \notin L$，则 $\forall s_1, \dots, s_{2m}$，$\phi$ 假。  
     - 因 $\phi$ 是 $\Pi_2$ 公式，且 $\text{P} = \text{NP}$ 可推出多项式时间判定 $\phi$，故 $L \in \text{P}$。

#### **3.2 硬度与随机性（Impagliazzo-Wigderson 定理）**
- **定理**：  
  若存在 $L \in \text{E} = \text{DTIME}(2^{O(n)})$ 和 $\delta > 0$，使得对充分大 $n$，$L$ 在 $n$ 位输入的电路复杂度 $\geq 2^{\delta n}$，则 $\text{P} = \text{BPP}$。  
- **内涵**：指数时间问题的电路下界可推导出去随机化。

#### **3.3 BPP 在复杂性谱中的位置**
- **已知包含关系**：  
  $$
  \text{P} \subseteq \text{BPP} \subseteq 
  \begin{cases}
  \text{P/poly}, \\
  \text{EXP} = \text{DTIME}(2^{\text{poly}(n)}).
  \end{cases}
  $$  
- **开放问题**：  
  1. $\text{BPP} \overset{?}{=} \text{P}$（广泛认为成立）。  
  2. $\text{BPP} \overset{?}{=} \text{NEXP}$（认为不成立，但未证明）。  
- **与 NP 的关系**：  
  - 若 NP-难问题 $\in \text{BPP}$，则 $\text{NP} \subseteq \text{BPP}$。  
  - 若 $\text{P} = \text{NP}$，则 $\text{P} = \text{BPP}$（Sipser-Gács 定理）。  
- **可能的世界观**：  
  | 情形              | 关系                                      |
  |-------------------|------------------------------------------|
  | 预期              | $\text{P} = \text{BPP} \subsetneq \text{NP} \subseteq \text{EXP}$ |
  | BPP 极大         | $\text{P} \subsetneq \text{NP} \subseteq \text{BPP} = \text{EXP}$ |
  | P 极大           | $\text{P} = \text{NP} = \text{BPP} \subsetneq \text{EXP}$ |
