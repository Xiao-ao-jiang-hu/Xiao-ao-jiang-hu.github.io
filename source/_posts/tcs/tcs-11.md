---
title: TCS Lec11总结
date: 2025-05-28 23:22:56
tags:
    - tcs
excerpt: 本节内容涵盖了随机算法的基本概念、BPP 类的定义及其与复杂性理论的关系，以及随机算法在实际问题中的应用案例。
---

### **一、随机算法案例**
1. **随机搜索算法**  
   - **问题**：在含 $n/4$ 个 1 的 $n$ 位字符串中找一个 1 的位置。  
   - **确定性算法**：最坏情况需扫描 $\Omega(n)$ 位（如 $0^{3n/4}1^{n/4}$)。  
   - **随机算法**：随机采样位置，成功概率 $p=1/4$，期望时间 $\frac{1}{p} = O(1)$。  
   - **关键点**：随机性将最坏情况复杂度转化为期望复杂度。

2. **矩阵乘法验证（Freivalds 算法）**  
   - **问题**：验证 $AB = C$（$A,B,C$ 为 $n \times n$ 矩阵）。  
   - **算法**：重复 $k$ 次：  
     - 生成随机向量 $v \in \{0,1\}^n$，计算 $d = A(Bv) - Cv$。  
     - 若 $d \neq 0$ 则输出 "No"。  
   - **分析**：  
     - 若 $AB = C$，恒输出 "Yes"。  
     - 若 $AB \neq C$，错误概率 $\leq 1/2$，$k$ 次迭代后错误率 $\leq 2^{-k}$。  
   - **复杂度**：$O(kn^2)$，远低于直接计算 $AB$（$O(n^\omega)$, $\omega \geq 2.37$)。

3. **MAX-CUT 近似算法**  
   - **问题**：在图中寻找最大割（NP 难问题）。  
   - **随机算法**：  
     - 为每个顶点随机分配 0/1，割的期望大小 $\geq |E|/2 \geq \frac{1}{2} \text{OPT}$。  
   - **去随机化**：  
     - 利用**成对独立哈希函数**（如 $h(x) = a \cdot x + b \mod 2$）。  
     - 仅需 $2n$ 个候选割，其中一个必满足 $\text{size} \geq |E|/2$。  
     - **优势**：可并行化（每个顶点独立计算）。

4. **素性测试**  
   - **Fermat 测试**：基于 $a^n \equiv a \pmod{n}$（反例为 Carmichael 数，如 561）。  
   - **Rabin-Miller 算法**：  
     - 扩展 Fermat 测试，对合数 $n$ 的错误率 $\leq 1/4$。  
   - **对比**：  
     - AKS 算法（2002）证明素数判定属 P，但随机算法仍更高效实用。


### **二、随机计算理论框架：BPP 类**
1. **定义**  
   - **模型**：概率图灵机（带随机比特生成）。  
   - **BPP**：多项式时间随机算法，满足：  
     - 若 $x \in L$，接受概率 $\geq 2/3$；  
     - 若 $x \notin L$，接受概率 $\leq 1/3$。  
   - **等价描述**：存在多项式验证器 $V$，使得 $x \in L \iff \Pr_r[V(x,r)=1] \geq 2/3$。

2. **误差缩减**  
   - 通过 $k$ 次独立运行，错误率可降至 $2^{-O(k)}$（Chernoff 界）。  
   - **推论**：BPP 允许错误率指数级小（如 $2^{-n}$）。

3. **BPP 与电路复杂性**  
   - **非均匀复杂性**：P/poly 类（多项式大小电路族）。  
   - **定理**：$\text{BPP} \subseteq \text{P/poly}$。  
     - **证明**：低错误率下，存在固定随机串 $y^*$ 使 $V(x,y^*)$ 恒正确。  
   - **意义**：BPP 问题可由小型电路求解，但 $y^*$ 可能难找。


### **三、BPP 与复杂性理论核心问题**
1. **P vs BPP 的关系**  
   - **Sipser-Gács 定理**：若 $\text{P} = \text{NP}$，则 $\text{P} = \text{BPP}$。  
     - **证明思路**：  
       - 利用误差缩减将 BPP 问题转化为集合覆盖问题。  
       - 通过 $\text{P}=\text{NP}$ 假设，用存在性量词消去技术构造确定性算法。  
   - **关键引理**：若 $S \subseteq \{0,1\}^m$ 满足 $|S| \geq 2^{m-1}$，则存在 $2m$ 个移位 $s_i$ 使得 $\bigcup_i (S \oplus s_i) = \{0,1\}^m$。

2. **硬度与随机性（Impagliazzo-Wigderson 定理）**  
   - 若存在指数时间问题 $L \in \text{E}$ 且电路复杂度 $\geq 2^{\delta n}$，则 $\text{P} = \text{BPP}$。  
   - **内涵**：高电路复杂度问题可推导出去随机化。

3. **BPP 在复杂性谱中的位置**  
   - **已知关系**：$\text{P} \subseteq \text{BPP} \subseteq \text{P/poly} \cap \text{EXP}$。  
   - **开放问题**：  
     - $\text{BPP} \overset{?}{=} \text{P}$（学界倾向成立，但未证明）。  
     - $\text{BPP} \overset{?}{=} \text{EXP}$ 或 $\text{BPP} \overset{?}{=} \text{NEXP}$（未知）。  
   - **可能情景**：  
     | 情形              | 关系                          |
     |-------------------|-------------------------------|
     | 预期              | $\text{P} = \text{BPP} \subsetneq \text{NP} \subseteq \text{EXP}$ |
     | BPP 极大         | $\text{P} \subsetneq \text{NP} \subseteq \text{BPP} = \text{EXP}$ |
     | P 极大           | $\text{P} = \text{NP} = \text{BPP} \subsetneq \text{EXP}$ |


