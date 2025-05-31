---
title: TCS Lec11总结
date: 2025-05-28 23:22:56
tags:
    - tcs
excerpt: 本节内容涵盖了随机算法的基本概念、BPP 类的定义及其与复杂性理论的关系，以及随机算法在实际问题中的应用案例。
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
    - 定义：族 $\mathcal{H} = \{h: U \to R\}$ 满足 $\forall x_1 \neq x_2, y_1,y_2: \Pr_{h}(h(x_1)=y_1 \land h(x_2)=y_2) = 1/|R|^2$。  
    - 构造：$U = \{0,1\}^k$, $R = \{0,1\}$, $h_{a,b}(x) = a \cdot x + b \mod 2$（$a \in \{0,1\}^k, b \in \{0,1\}$），族大小 $2^{k+1}$。  
  - **去随机化算法**：  
    - 枚举所有 $h_{a,b} \in \mathcal{H}$（共 $O(n)$ 个），计算对应割大小，取最优者。  
    - **正确性**：由成对独立性，每条边满足 $\Pr(h(u) \neq h(v)) = 1/2$，故存在割大小 $\geq |E|/2$。  
  - **优势**：可并行计算（顶点分配独立）。

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
- **P/poly 类**：  
  语言 $L \in \text{P/poly}$ 当且仅当存在电路族 $\{C_n\}$ 满足 $|C_n| \leq \text{poly}(n)$ 且 $C_n$ 计算 $L$ 在长度为 $n$ 的输入。  
- **定理**：$\text{BPP} \subseteq \text{P/poly}$。  
  - **证明**：  
    - 设 $L \in \text{BPP}$，经误差缩减后错误率 $\leq 0.1 \cdot 2^{-n}$。  
    - 固定输入长度 $n$，随机串长 $m = \text{poly}(n)$。  
    - 由并集界：$\exists r^* \in \{0,1\}^m$ 使得 $\forall x \in \{0,1\}^n: V(x, r^*) = L(x)$。  
    - 构造电路 $C_n$：硬编码 $r^*$，计算 $V(x, r^*)$（多项式时间可计算，故电路大小多项式）。


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
