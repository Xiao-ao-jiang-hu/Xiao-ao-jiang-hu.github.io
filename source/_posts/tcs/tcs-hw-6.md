---
title: TCS Homework 6
date: 2025-05-30 22:01:43
tags: 
    - tcs
categories:
    - tcs
excerpt: TCS Homework 6
---

## 6.1
### 题目
证明如果 $P = NP$，则 $NP = \text{coNP}$

### 解答
假设 $P = NP$。这意味着：
- 任何在 $NP$ 中的问题也在 $P$ 中。
- 由于 $P$ 在补集下封闭（即如果 $L \in P$，则 $\overline{L} \in P$，因为只需反转接受和拒绝状态），因此 $NP$ 也在补集下封闭（因为 $NP = P$）。

#### 证明 $NP \subseteq \text{coNP}$
设 $L$ 是任意一个在 $NP$ 中的问题，即 $L \in NP$。由于 $P = NP$，有 $L \in P$。因为 $P$ 在补集下封闭，所以 $\overline{L} \in P$。又因为 $P = NP$，有 $\overline{L} \in NP$。根据 $\text{coNP}$ 的定义，$\overline{L} \in NP$ 意味着 $L \in \text{coNP}$。因此，$NP \subseteq \text{coNP}$.

#### 证明 $\text{coNP} \subseteq NP$
设 $M$ 是任意一个在 $\text{coNP}$ 中的问题，即 $M \in \text{coNP}$。根据 $\text{coNP}$ 的定义，这意味着其补问题 $\overline{M} \in NP$。由于 $P = NP$，有 $\overline{M} \in P$。因为 $P$ 在补集下封闭，所以 $M \in P$。又因为 $P = NP$，有 $M \in NP$。因此，$\text{coNP} \subseteq NP$.

由以上两个包含关系，$NP \subseteq \text{coNP}$ 和 $\text{coNP} \subseteq NP$，可得 $NP = \text{coNP}$。因此，如果 $P = NP$，则 $NP = \text{coNP}$.

## 6.2
### 题目

对于每个包含 $n$ 个变量的 2-SAT 实例 $\varphi$，定义一个包含 $2n$ 个顶点的图 $G_{\varphi}$：对于 $\varphi$ 中的每个变量 $x_i$，$G_{\varphi}$ 有两个顶点，分别标记为 $x_i$ 和 $\neg x_i$（即文字 $x_i$ 和 $\neg x_i$）。如果子句 $(\neg \ell_i) \lor \ell_j$ 或 $\ell_j \lor (\neg \ell_i)$ 是 $\varphi$ 的一部分，则存在一条有向边 $\ell_i \to \ell_j$。为符号方便起见，对于文字 $\ell_i = \neg x_{k_i}$，定义 $\neg \ell_i = x_{k_i}$。证明 $\varphi$ 是不可满足的当且仅当在 $G_{\varphi}$ 中存在某个 $j$，使得有从 $x_j$ 到 $\neg x_j$ 的路径和从 $\neg x_j$ 到 $x_j$ 的路径。使用上述事实证明 2-SAT 属于 P。

### 解答
#### **不可满足性的等价条件证明**  
1. **若 $\varphi$ 不可满足，则存在 $x_j$ 使得 $x_j \leftrightarrow \neg x_j$ 成环**  
   - 假设 $\varphi$ 不可满足。  
   - 在蕴涵图 $G_\varphi$ 中，**若不存在此类环**，则可对强连通分量（SCC）进行拓扑排序，并为变量赋予一致的值。  
   - 此时不存在环意味着存在有效赋值，与 $\varphi$ 不可满足矛盾。  
   - 因此，至少存在一个变量 $x_j$ 与 $\neg x_j$ 形成环路。  

2. **若存在 $x_j \leftrightarrow \neg x_j$，则 $\varphi$ 不可满足**  
   - 若存在路径 $x_j \rightsquigarrow \neg x_j$ 和 $\neg x_j \rightsquigarrow x_j$：  
     - 设 $x_j = \text{true}$ 会推出 $\neg x_j = \text{true}$（矛盾）；  
     - 设 $x_j = \text{false}$ 会推出 $\neg x_j = \text{false}$（矛盾）。  
   - 故 $\varphi$ 不可满足。  


#### **算法**  
1. **构建 $G_\varphi$**  
   - 对每个变量 $x_i$，创建顶点 $x_i$ 和 $-x_i$。  
   - 对每个子句 $(\ell_1 \vee \ell_2)$，添加有向边 $\neg \ell_1 \rightarrow \ell_2$ 和 $\neg \ell_2 \rightarrow \ell_1$。  

2. **计算强连通分量（SCC）**  
   - 使用线性时间算法（如 Tarjan 算法）求 $G_\varphi$ 的 SCC。  

3. **检查矛盾**  
   - 对每个变量 $x_j$：  
     - 若 $x_j$ 和 $\neg x_j$ 属于同一 SCC，则 $\varphi$ **不可满足**，终止。  
     - 否则继续。  

4. **为变量赋值**  
   - 将 SCC 按拓扑序逆序遍历（从出度为 0 的分量开始）。  
   - 对每个 SCC：  
     - 若文字 $\ell$ 未被赋值，则设 $\ell = \text{true}$ 且 $\neg \ell = \text{false}$。  

**正确性：**  
- 步骤 3 基于前述等价条件判定不可满足性。  
- 步骤 4 通过逆拓扑序赋值，确保所有蕴涵关系被满足（可满足时必存在有效赋值）。  

**时间复杂度：**  
- 构建图：$O(m)$（$m$ 为子句数）。  
- 求 SCC：$O(n+m)$（$n$ 为变量数）。  
- 检查矛盾与赋值：$O(n)$。  
- **总时间复杂度**：$O(n + m)$（输入规模的线性时间）。  


## 6.3
### 题目
Lehmer 定理指出，一个自然数 $n$ 是素数当且仅当以下两个条件成立：
1. 存在一个数 $a$ 使得 $a^{n-1} \equiv 1 \pmod{n}$。
2. 对于 $n - 1$ 的每一个素因子 $q$，有 $a^{(n-1)/q} \neq 1 \pmod{n}$。

使用该定理证明 PRIME $\in NP \cap coNP$。（提示：为证明 PRIME $\in NP$，可能需要使用递归定义的见证。）


### 解答

1. **PRIME $\in NP$**：利用 Lehmer 定理，为素数 $n$ 构造一个递归定义的见证树。每个节点的见证包括一个基数 $a$ 和 $n-1$ 的素因子分解，递归地为每个素因子提供子见证（证明其素性）。验证过程在多项式时间内完成。
2. **PRIME $\in coNP$**：等价于证明 COMPOSITE $\in NP$。对于合数 $n$，见证是一个非平凡因子 $d$（$1 < d < n$ 且 $d \mid n$)，验证可在多项式时间内完成。

#### 第一部分：证明 PRIME $\in NP$
设 $n$ 是一个素数（即 PRIME 的 "是" 实例）。根据 Lehmer 定理，存在一个整数 $a$（称为 *Lehmer 见证*）满足：
- $a^{n-1} \equiv 1 \pmod{n}$。
- 对于 $n-1$ 的每个素因子 $q$，有 $a^{(n-1)/q} \not\equiv 1 \pmod{n}$.

**递归定义的见证：**
- 见证是一个树状结构 $W(n)$，其中每个节点对应一个待证素的数。
- 对于节点 $m$（假设 $m$ 是素数）：
  - 基数 $a_m$（满足 Lehmer 定理对 $m$ 的条件）。
  - $m-1$ 的完全素因子分解：$m-1 = q_1^{e_1} q_2^{e_2} \cdots q_k^{e_k}$，其中 $q_i$ 是素数。
  - 对于每个素因子 $q_i$，一个子见证 $W(q_i)$（递归证明 $q_i$ 是素数）。
- **递归基**：当 $m$ 是小素数（如 $m \leq C$，其中 $C$ 是一个固定常数，如 100）时，无需子见证，因为小素数的列表可在常数时间内验证。

**验证算法：**
输入：整数 $n$，见证 $W(n)$。  
输出：接受当且仅当 $n$ 是素数。  
步骤：
1. 如果 $n \leq C$（常数），直接检查 $n$ 是否在小素数列表中，是则接受，否则拒绝。
2. 从 $W(n)$ 中提取：
   - 基数 $a_n$。
   - $n-1$ 的素因子分解 $n-1 = q_1^{e_1} q_2^{e_2} \cdots q_k^{e_k}$。
   - 子见证 $W(q_1), W(q_2), \ldots, W(q_k)$。
3. 验证：
   - **分解正确性**：计算乘积 $q_1^{e_1} q_2^{e_2} \cdots q_k^{e_k}$ 并检查是否等于 $n-1$。
   - **Lehmer 条件 1**：计算 $a_n^{n-1} \mod n$（使用快速模幂算法），检查是否 $\equiv 1 \pmod{n}$。
   - **Lehmer 条件 2**：对每个 $q_i$，计算 $a_n^{(n-1)/q_i} \mod n$（快速模幂），检查是否 $\not\equiv 1 \pmod{n}$。
   - **子见证递归验证**：对每个 $q_i$，递归调用验证算法检查 $W(q_i)$ 证明 $q_i$ 是素数。
4. 若所有检查通过，则接受；否则拒绝。

**正确性分析：**
- 若 $n$ 是素数，Lehmer 定理保证存在 $a_n$ 满足条件。递归基（小素数）和递归步骤确保整个见证树正确。
- 验证失败当且仅当 $n$ 不是素数（由 Lehmer 定理的充要条件保证）。

**多项式时间与大小分析：**
- **见证大小**：设 $s(m)$ 为证明 $m$ 素性的见证大小。
  - 每个节点 $m$ 的见证包括：
    - $a_m$：大小 $O(\log m)$ 位（因为 $1 \leq a_m \leq m-1$)。
    - $m-1$ 的因子分解：素因子 $q_i$ 和指数 $e_i$，总大小 $O(\log m)$ 位（因为因子数 $O(\log m)$，每个因子大小 $O(\log m)$)。
    - 子见证 $W(q_i)$：每个 $q_i < m$。
  - 递归深度：由于 $q_i \leq m/2$（至少减半），深度为 $O(\log n)$。
  - 总大小：递归树有 $O(\log n)$ 层，每层总大小 $O((\log n)^2)$（因为每个节点大小 $O(\log n)$，节点数 $O(\log n)$），故 $s(n) = O((\log n)^3)$，是多项式大小。
- **验证时间**：
  - 模幂运算（如 $a_n^{n-1} \mod n$) 可在 $O((\log n)^3)$ 时间完成（使用快速幂）。
  - 分解乘积验证：乘法可在 $O((\log n)^2)$ 时间完成。
  - 递归调用：每个节点处理时间多项式在 $\log m$，总时间多项式在 $\log n$（因为深度 $O(\log n)$，每层时间多项式）。
  - 总验证时间 $O((\log n)^k)$ 对某个 $k$，是多项式时间。

因此，PRIME $\in NP$.

#### 第二部分：证明 PRIME $\in coNP$
等价于证明 COMPOSITE $\in NP$。设 $n$ 是一个合数（即 COMPOSITE 的 "是" 实例）。

**见证**：一个非平凡因子 $d$ 满足 $1 < d < n$ 和 $d \mid n$。  
**验证算法**：  
输入：整数 $n$，见证 $d$。  
步骤：  
1. 检查 $1 < d < n$。  
2. 检查 $d$ 整除 $n$（即计算 $n \mod d \equiv 0$)。  
若两者成立，则接受（$n$ 是合数）；否则拒绝。

**正确性分析**：  
- 若 $n$ 是合数，则存在非平凡因子 $d$，见证有效。  
- 若验证通过，则 $n$ 必为合数。

**多项式时间与大小分析**：  
- 见证大小：$d$ 的大小为 $O(\log n)$ 位（因为 $d < n$)。  
- 验证时间：除法 $n \mod d$ 可在 $O((\log n)^2)$ 时间完成。  
因此，COMPOSITE $\in NP$，故 PRIME $\in coNP$.
