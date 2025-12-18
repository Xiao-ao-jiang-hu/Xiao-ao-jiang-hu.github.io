---
title: stabilizer-tableau
tags:
  - quantum
  - simulation
  - stabilizer
categories:
  - quantum
  - simulation
excerpt: no excerpt
abbrlink: e19c09b2
date: 2025-12-18 20:50:58
---
### **第1部分：前置基础**

#### **1.1 泡利积**

**定义 1** (泡利矩阵) 泡利矩阵的集合是 $\Sigma = \{I, X, Y, Z\}$，其中：
$$
\sigma_0 = I = \begin{bmatrix} 1 & 0 \\ 0 & 1 \end{bmatrix},
\sigma_1 = X = \begin{bmatrix} 0 & 1 \\ 1 & 0 \end{bmatrix},
\sigma_2 = Y = \begin{bmatrix} 0 & -i \\ i & 0 \end{bmatrix},
\sigma_3 = Z = \begin{bmatrix} 1 & 0 \\ 0 & -1 \end{bmatrix}.
\quad (1.1)
$$

**定义 2** (泡利积) $n$ 个量子比特上的一个泡利积 $P$ 是 $n$ 个泡利矩阵的张量积：
$$
P = \bigotimes_{k=1}^{n} \sigma_k, \quad \text{其中 } \sigma_k \in \Sigma.
\quad (1.2)
$$

**例** (泡利积记号) $X_1Y_2Z_3$ 表示一个作用在3个量子比特上的泡利积，其中 $\sigma_1 = X$, $\sigma_2 = Y$, $\sigma_3 = Z$。

**定义 3** (泡利群) $n$ 量子比特泡利群 $\mathcal{P}_n$ 是所有作用在 $n$ 个量子比特上的泡利积乘以一个来自集合 $\Phi := \{\pm 1, \pm i\}$ 的相位因子所组成的集合。形式上：
$$
\mathcal{P}_n = \left\{ \phi P \mid \phi \in \Phi, P = \bigotimes_{k=1}^{n} \sigma_k, \sigma_k \in \Sigma \right\}.
\quad (1.3)
$$
单量子比特泡利群记为 $\mathcal{P}_1$。

**断言** $\{X_k, Z_k\}_{k=1}^{n}$ 是 $\mathcal{P}_n$ 的一个生成集。

**断言** (唯一分解) 对于任意泡利算子 $P \in \mathcal{P}_n$，存在唯一的 $\phi \in \Phi$ 和 $x_k, z_k \in \{0,1\}$（对每个量子比特索引 $k \in [n] := \{1,2,\dots,n\}$），使得：
$$
P = \phi \prod_{k=1}^{n} X_k^{x_k} Z_k^{z_k}.
\quad (1.4)
$$

**定义 4** (相位与算子提取) 对于任意泡利积 $Q \in \mathcal{P}_n$，它可以唯一地写成 $Q = \phi P$，其中 $\phi \in \Phi$ 且 $P = \bigotimes_{k=1}^{n} \sigma_k$（其中每个 $\sigma_k \in \{I, X, Y, Z\}$ 的相位为 $+1$），我们定义：
- 相位函数 $\text{ph}(Q) = \phi$。
- 算子函数 $\text{op}(Q) = P$。¹

¹ 注意，$\text{op}(Q)$ 对应于商群 $\mathcal{P}_n / \Phi$ 中 $Q$ 的代表元，带有 $+1$ 相位。

---

#### **1.2 稳定子生成元**

**定义 5** (XZ编码) XZ编码是一个映射 $\text{encode\_xz}: \{I, X, Y, Z\} \to \{0,1\}^2$，由其在泡利矩阵上的作用定义：
$$
\text{encode\_xz}(I) = (0,0) \quad (1.5) \\
\text{encode\_xz}(X) = (1,0) \quad (1.6) \\
\text{encode\_xz}(Y) = (1,1) \quad (1.7) \\
\text{encode\_xz}(Z) = (0,1) \quad (1.8)
$$
一般来说，对于任何 $P \in \mathcal{P}_1$ 且 $\text{op}(P) = X^x Z^z$，我们有 $\text{encode\_xz}(P) = (x,z)$。

**性质** (XZ编码的同态性) XZ编码是一个同态。对于任何 $P_1, P_2 \in \{I, X, Y, Z\}$：
$$
\text{encode\_xz}(P_1 P_2) = \text{encode\_xz}(P_1) \oplus \text{encode\_xz}(P_2).
\quad (1.9)
$$

**定义 6** (稳定子) 我们说一个酉算子 $U$ 稳定一个纯态 $|\psi\rangle$，如果：
$$
U |\psi\rangle = |\psi\rangle.
\quad (1.10)
$$

**断言** (稳定子群) 稳定 $|\psi\rangle$ 的酉算子集合在乘法下构成一个群。

**定义 7** (稳定子群) 给定一个 $n$ 量子比特纯态 $|\psi\rangle$，其稳定子群 $\mathcal{S}(|\psi\rangle)$ 被定义为所有稳定 $|\psi\rangle$ 的泡利积所组成的群。

**性质** (阿贝尔性) 稳定子群是阿贝尔群。

**证明** (反证法) $\forall M, N \in \mathcal{S}(|\psi\rangle) \subset \mathcal{P}_n$,
$$
MN \neq NM \\
\iff MN = -NM \\
\iff -|\psi\rangle = -NM|\psi\rangle = MN|\psi\rangle = |\psi\rangle \\
\iff \text{false}
\quad \square
$$

**断言** 一个 $n$ 量子比特态 $|\psi\rangle$ 最多有 $n$ 个稳定子生成元。

**定义 8** (稳定子态) 一个具有恰好 $n$ 个稳定子生成元的 $n$ 量子比特态 $|\psi\rangle$。

---

#### **1.3 稳定子表**

**定义 9** ( Clifford 操作) 一个酉算子 $C$ 是 Clifford 操作，如果 $\forall P \in \mathcal{P}_n, CPC^\dagger \in \mathcal{P}_n$。

**定义 10** (稳定子表) 给定一个 $n$ 量子比特 Clifford 操作 $C$，一个稳定子表 $\text{Tableau}(C) ::= T$ 是一种表示，它存储了 $C$ 如何共轭每个泡利群生成元。具体来说，它记录了 $T(g) := CgC^{-1}$，对每个生成元 $g \in \{X_1, Z_1, \dots, X_n, Z_n\}$。²

² 存储一个稳定子表的空间复杂度是 $O(n^2)$ 比特。

---

**备注** (后向传播) 共轭恒等式 $gC|\psi\rangle = C(C^{-1}gC)|\psi\rangle$ 可以可视化为以下电路等价：
```text
|ψ⟩ ——[C]——[g]——     Backward    Forward
          ||            ↖       ↗
|ψ⟩ ——[C⁻¹gC]——[C]——
```

**例** (受控-Y门的表) 受控-Y门 $C_Y$ 的表如下：³
$$
\text{Tableau}(C_Y) = \begin{array}{c|cccc}
& X_1 & Z_1 & X_2 & Z_2 \\
\hline
\pm & + & + & + & + \\
1 & X & Z & I & I \\
2 & Y &   & Z & Z \\
\end{array}
$$

³ 由于 $g$ 的相位为 $\pm 1$ $\iff$ $g$ 是厄米算子 $\iff$ $CgC^\dagger$ 是厄米算子 $\iff$ $CgC^{-1}$ 的相位为 $\pm 1$，因此稳定子表中的相位总是 $\pm 1$，永远不会是 $\pm i$。

**断言** (泡利积乘法) 对于两个实相位泡利积 $P, Q \in \mathcal{P}_n$，它们的乘积可以通过以下方式计算：
1. 应用XZ编码同态⁴，逐位应用于 $\text{op}(P)$ 和 $\text{op}(Q)$。
2. 计算相位 $\text{ph}(PQ) = \sum_{k=1}^{n} s_{x,k} t_{x,k} - s_{z,k} t_{z,k} \mod 4$，其中 $s_{x/z,k}$ 是表 $\text{Tableau}(P)$ 中第 $k$ 列 $X_k/Z_k$ 项的相位指数。

⁴ 性质 1.1

**断言** (表- Clifford 对应) 在 Clifford 操作和有效稳定子表之间存在一一对应关系（全局相位除外）。一个形如下的表 $T$：
$$
T = \begin{array}{c|cccccc}
& X_1 & Z_1 & X_2 & Z_2 & \dots & X_n & Z_n \\
\hline
\pm & s_{x,1} & s_{z,1} & s_{x,2} & s_{z,2} & \dots & s_{x,n} & s_{z,n} \\
1 & x_{1,1} & z_{1,1} & x_{1,2} & z_{1,2} & \dots & x_{1,n} & z_{1,n} \\
2 & x_{2,1} & z_{2,1} & x_{2,2} & z_{2,2} & \dots & x_{2,n} & z_{2,n} \\
\vdots & \vdots & \vdots & \vdots & \vdots & \ddots & \vdots & \vdots \\
n & x_{n,1} & z_{n,1} & x_{n,2} & z_{n,2} & \dots & x_{n,n} & z_{n,n} \\
\end{array}
$$
表示一个有效的 Clifford 操作，当且仅当各列（视为泡利积）保持生成元之间的对易关系：
- $[T(X_a), T(X_b)] = 0$
- $[T(Z_a), T(Z_b)] = 0$
- $\{T(X_a), T(Z_a)\} = 0$ （反对易）
- $[T(X_a), T(Z_b)] = 0$ 对于 $a \neq b$

**证明** (“仅当”方向) 设存储的泡利积记为 $X'_k := T(X_k)$ 和 $Z'_k := T(Z_k)$，其中 $k=1,\dots,n$。根据假设，集合 $\{X'_k, Z'_k\}_{k=1}^{n}$ 满足标准对易关系：
$$
[X'_j, X'_k] = [Z'_j, Z'_k] = 0, \quad \{X'_j, Z'_j\} = 0, \quad [X'_j, Z'_k] = 0 \text{ 当 } j \neq k.
\quad (1.11)
$$
考虑标准生成元 $\{X_k, Z_k\}$。有限群的Stone-von Neumann定理指出，在维度为 $2^n$ 的希尔伯特空间上，这些关系存在唯一的不可约表示（直到酉等价）。由于 $\{X_k, Z_k\}$ 和 $\{X'_k, Z'_k\}$ 都是 $(\mathbb{C}^2)^{\otimes n}$ 上这些关系的表示，因此存在一个酉算子 $U$，使得：
$$
U X_k U^\dagger = X'_k \quad \text{和} \quad U Z_k U^\dagger = Z'_k \quad \forall k.
\quad (1.12)
$$
由于 $U$ 将 $\mathcal{P}_n$ 的生成元映射到 $\mathcal{P}_n$ 的元素，它将整个群 $\mathcal{P}_n$ 映射到自身。因此，$U$ 是一个 Clifford 操作。 $\square$

---

#### **1.3.1 通过表共轭一个泡利积**

**算法** (通过表共轭) 为了通过 $C$ 的表（计算 $CPC^{-1}$）来共轭一个任意泡利积 $P$：
1. 将 $\text{op}(P)$ 分解为生成元：$\text{op}(P) = \prod_{k \in Q_P} X_k^{x_k} Z_k^{z_k}$，其中 $Q_P$ 是 $P$ 作用非平凡的量子比特集合。
2. 用表中的像替换每个生成元：$X_k \to X'_k := CX_kC^{-1}$, $Z_k \to Z'_k := CZ_kC^{-1}$。
3. 将得到的泡利积⁵和初始相位相乘，得到最终结果 $CPC^{-1} = \text{ph}(P) \prod_{k \in Q_P} (X'_k)^{x_k} (Z'_k)^{z_k}$。

⁵ 断言 1.5

**断言** (原地共轭的复杂度) 设 $C$ 是一个 $m$ 量子比特 Clifford 操作，其稳定子表为 $T$，设 $P$ 是一个 $n$ 量子比特泡利积。定义：
- $Q_T = \{q_1, \dots, q_m\}$ 为表覆盖的量子比特集合，
- $Q_P = \{p_1, \dots, p_n\}$ 为 $P$ 作用非平凡的量子比特集合（即，不是单位元），
- $Q_{\text{common}} = Q_T \cap Q_P$，其中 $c = |Q_{\text{common}}|$ 为公共量子比特数。

那么，计算 $CPC^{-1}$ 原地的复杂度是 $O(mc) \subseteq O(m^2)$，独立于 $n$。

**证明** 根据算法1.1，对每个 $k \in Q_P$：
- 如果 $k \in Q_{\text{common}}$：我们从表中查找 $CX_kC^{-1}$ 和/或 $CZ_kC^{-1}$ 并将其乘入结果。每次查找和乘法的时间为 $O(m)$。
- 如果 $k \notin Q_T$：则 $C$ 不作用于量子比特 $k$，所以 $CX_kC^{-1} = X_k$ 且 $CZ_kC^{-1} = Z_k$。这些量子比特不变，不需要查找/乘法。

表查找次数最多为 $2c$。因此，总复杂度为 $O(c \cdot m) \subseteq O(m^2)$，与 $n$ 无关。 $\square$

**例** (表与泡利积的部分重叠) 考虑一个覆盖量子比特 $Q_T = \{1,2,3\}$（所以 $m=3$）的表 $T$ 和一个泡利积：
$$
P = X_1 Y_2 X_5 Z_7 Y_8,
\quad (1.13)
$$
其中 $Q_P = \{1,2,5,7,8\}$（所以 $n=5$）。公共量子比特是 $Q_{\text{common}} = \{1,2\}$，给出 $c=2$。Stim 计算 $CPC^{-1}$ 如下：
1. 丢弃 $Q_P \setminus Q_T = \{5,7,8\}$，留下 $P' = X_1 Y_2$。
2. 分解 $Y = iXZ$，所以 $P' = iX_1 X_2 Z_2$。
3. 从表中查找 $CX_1C^{-1}$、$CX_2C^{-1}$ 和 $CZ_2C^{-1}$（每个都是一个 $m$ 量子比特泡利积）。

4. 将结果相乘：$CP'C^{-1} = (CX_1C^{-1})(CX_2C^{-1})(CZ_2C^{-1})$。
5. 将结果散开得到 $CPC^{-1} = (CP'C^{-1})X_5Z_7Y_8$。

---

#### **1.3.2 组合表**

给定一个 $n$ 量子比特稳定子表 $A$ 和一个 $m$ 量子比特稳定子表 $B$，其中 $m \leq n$，我们可能希望将 $B$ 追加或前置到 $A$ 中。

**算法** (原地追加) 将 $B$ 原地追加到 $A$ 中（赋值 $A \leftarrow B \circ A$）是通过原地共轭 $A$ 的每一列来完成的。对于 $A$ 的每一列 $k \in \{1, \dots, 2n\}$：
1. 设 $P_k$ 为存储在第 $k$ 列的泡利积。计算 $P'_k = BP_kB^{-1}$。（用 $B$ 共轭 $P_k$）。⁶
2. 更新第 $k$ 列以存储 $P'_k$。

由于有 $2n$ 列，总复杂度为 $O(n \cdot m^2)$。

⁶ 这需要 $O(m^2)$ 时间。

**图1.** 将 $B$ 追加到 $A$ 的可视化。
```text
---m---
      |   |
      | A |----[B]----
      |   |
---n-m---
```

**算法** (原地前置) 将 $B$ 原地前置到 $A$ 中（赋值 $A \leftarrow A \circ B$）是通过计算共轭 $B$ 的每一列来完成的。对于 $B$ 的每一列 $k \in \{1, \dots, 2m\}$：
1. 设 $P_k$ 为存储在第 $k$ 列的泡利积。计算 $P'_k = AP_kA^{-1}$。（用 $A$ 共轭 $P_k$）。⁷
2. 将 $P'_k$ 写入 $A$ 的第 $k$ 列下方。

由于有 $2m$ 列，总复杂度为 $O(m \cdot m \cdot n) = O(n \cdot m^2)$。

⁷ 这需要 $O(m \cdot n)$ 时间，因为 $P_k$ 在 $A$ 中有 $m$ 个量子比特。

**图2.** 将 $B$ 前置到 $A$ 的可视化。
```text
---m---
      |   |
      | B |----[A]----
      |   |
---n-m---
```

**断言** (组合同态性) 同构 $C \mapsto \text{Tableau}(C)$ 是从 Clifford 群（模全局相位 $\{\pm 1, \pm i\}$）到稳定子表群（在组合下）的一个群同态。也就是说，对于任意 Clifford 操作 $C_1$ 和 $C_2$：
$$
\text{Tableau}(C_1 C_2) = \text{Tableau}(C_1) \circ \text{Tableau}(C_2)
$$

---

#### **1.3.3 逆表**

**定义 11** (逆表) 设 $T = \text{Tableau}(C)$ 为对应于 Clifford 操作 $C$ 的稳定子表。逆表 $T^{-1}$ 定义为对应于逆 Clifford 操作 $C^{-1}$ 的表：
$$
T^{-1} := \text{Tableau}(C^{-1})
$$

**定义 12** (单位表) 单位表 $I$ 是对应于单位 Clifford 操作的表。它将每个生成元映射到自身：$X_k \mapsto X_k$ 且 $Z_k \mapsto Z_k$ 对所有 $k$。
$$
I = \begin{array}{c|cccccc}
& X_1 & Z_1 & X_2 & Z_2 & \dots & X_N & Z_N \\
\hline
\pm & + & + & + & + & \dots & + & + \\
1 & X & Z & I & I & \dots & I & I \\
2 & I & I & X & Z & \dots & I & I \\
\vdots & \vdots & \vdots & \vdots & \vdots & \ddots & \vdots & \vdots \\
N & I & I & I & I & \dots & X & Z \\
\end{array}
$$

**断言** (逆性质) 对于任何稳定子表 $T$，$T \circ T^{-1} = T^{-1} \circ T = I$。

**证明** 使用同态性质（断言1.8）：
$$
T \circ T^{-1} = \text{Tableau}(C) \circ \text{Tableau}(C^{-1}) = \text{Tableau}(C \circ C^{-1}) = \text{Tableau}(I) = I.
$$
$T^{-1} \circ T$ 的论证相同。 $\square$

**算法** (逆一个表) 给定一个表 $T$，其逆 $T^{-1}$ 可以按如下方式计算：
1. **计算泡利项**。对于生成元 $G_a \in \{X_a, Z_a\}$，在 $T^{-1}$ 中第 $a$ 个量子比特的列由 $T$ 中第 $b$ 个量子比特的列的项决定。具体来说，设 $T(G_a)$ 表示在 $T$ 下生成元 $G_a$ 的输出在第 $b$ 个量子比特的泡利项。然后，$T^{-1}(G_a)$ 在第 $a$ 个量子比特的项由求解对易关系确定：⁸
    - 如果 $T(X_a)$ 与 $X_b$ 对易，则 $T^{-1}(X_b)$ 必须与 $X_a$ 对易；否则反对易。
    - 如果 $T(Z_a)$ 与 $Z_b$ 对易，则 $T^{-1}(X_b)$ 必须与 $Z_a$ 对易；否则反对易。
2. **计算符号**。设 $S$ 为一个与 $T^{-1}$ 具有相同泡利项但所有符号均为正的表。对于每个生成元 $g \in \{X_1, Z_1, \dots, X_N, Z_N\}$，通过计算 $T(S(g))g$ 来确定 $T^{-1}$ 中相应列的符号。⁹

⁸ 这实际上相当于对表的泡利项进行转置并伴随局部基变换，耗时 $O(n^2)$。
⁹ 直接计算符号需要 $O(n^3)$ 时间。

**断言** (逆重构的正确性) $T^{-1}(g)$ 的符号与 $T(S(g))g$ 的符号相同。

**证明** 设 $s \in \{+1, -1\}$ 为 $T^{-1}$ 中 $g$ 的列的符号，则 $S(g) = sT^{-1}(g)$。对两边应用操作 $T$：
$$
T(S(g)) = T(sT^{-1}(g)) = sT(T^{-1}(g)) = sg
$$
因此：
$$
T(S(g)) \cdot g = sg \cdot g = sI
\quad \square
$$

**例** (逆部分表) 考虑以下部分指定的稳定子表：
$$
T := \text{Tableau}(C) = \begin{array}{c|cccccccc}
& X_1 & Z_1 & X_2 & Z_2 & X_3 & Z_3 & X_4 & Z_4 \\
\hline
\pm & ? & ? & ? & ? & ? & ? & ? & ? \\
1 & ? & ? & ? & ? & ? & ? & ? & ? \\
2 & ? & ? & ? & ? & ? & ? & ? & ? \\
3 & ? & ? & ? & ? & ? & ? & ? & ? \\
4 & ? & ? & ? & ? & ? & ? & X & ? \\
\end{array}
$$
这表明 $(CX_3C^{-1})_4 = X$ 且 $(CZ_3C^{-1})_3 = I$。我们可以通过检查与生成元 $X_3$ 和 $Z_3$ 的对易性来确定 $T^{-1}(X_4)_3$ 和 $T^{-1}(Z_4)_3$ 的条目：
$$
[X_4, CX_3C^{-1}] = 0 \implies [C^{-1}X_4C, X_3] = 0 \implies (C^{-1}X_4C)_3 \in \{I, X\} \\
[X_4, CZ_3C^{-1}] = 0 \implies [C^{-1}X_4C, Z_3] = 0 \implies (C^{-1}X_4C)_3 \in \{I, Z\} \\
\therefore (C^{-1}X_4C)_3 = I.
$$
$$
\{Z_4, CX_3C^{-1}\} = 0 \implies \{C^{-1}Z_4C, X_3\} = 0 \implies (C^{-1}Z_4C)_3 \in \{Z, Y\} \\
\{Z_4, CZ_3C^{-1}\} = 0 \implies [C^{-1}Z_4C, Z_3] = 0 \implies (C^{-1}Z_4C)_3 \in \{I, Z\} \\
\therefore (C^{-1}Z_4C)_3 = Z.
$$
因此，$(C^{-1}Z_4C)_3 = Z$。得到的逆表：
$$
T^{-1} = \begin{array}{c|cccccccc}
& X_1 & Z_1 & X_2 & Z_2 & X_3 & Z_3 & X_4 & Z_4 \\
\hline
\pm & ? & ? & ? & ? & ? & ? & ? & ? \\
1 & ? & ? & ? & ? & ? & ? & ? & ? \\
2 & ? & ? & ? & ? & ? & ? & ? & ? \\
3 & ? & ? & ? & ? & ? & ? & ? & Z \\
4 & ? & ? & ? & ? & ? & ? & ? & ? \\
\end{array}
$$

**备注** (逆的局域性) 应用 $T$ 到 $X_a$ 和 $Z_a$ 所产生的量子比特 $b$ 上的项，总是完全决定了应用 $T^{-1}$ 到 $X_b$ 和 $Z_b$ 所产生的量子比特 $a$ 上的项。

---

#### **1.3.4 内积**

**算法** (通过逆表的内积) 设 $|\psi\rangle = C_1|0^n\rangle$ 和 $|\phi\rangle = C_2|0^n\rangle$ 为两个由逆表 $\text{Tableau}(C_1)^{-1}$ 和 $\text{Tableau}(C_2)^{-1}$ 指定的稳定子态。它们的内积¹¹
$$
\langle\psi|\phi\rangle = (\langle 0^n|C_1^{-1})(C_2|0^n\rangle) = \langle 0^n|(C_1^{-1}C_2|0^n\rangle)
$$
可以按如下方式计算：
1. 计算 $T = \text{Tableau}(C_1^{-1}C_2) = \text{Tableau}(C_1)^{-1} \circ \text{Tableau}(C_2)^{-1}$。¹²
2. 初始化 $p \leftarrow 1$。对于每个量子比特索引 $k=1,\dots,n$，窥视 $T$ 中的 $\langle Z_k\rangle$ 并分情况处理：
    - 如果为1，继续；
    - 如果为-1，返回0；
    - 如果为0，更新 $p \leftarrow \frac{1}{\sqrt{2}}p$ 并后选择结果 $+1$ 在 $T$ 上。
3. 返回 $p$。

¹¹ 操作解释：$\prod_{k=1}^{n} \text{Pr}[+1|Z_k]$ 的平方根。
¹² 前置需要 $O(n^3)$ 时间。

**断言** (通过逆表的内积) 上述算法耗时 $O(n^3)$。

---

#### **1.4 泡利框架**

**定义 13** (泡利框架) 一个泡利框架 $\mathcal{F}$ 是商群 $\mathcal{P}_n/\Phi$ 中的一个元素，其中 $\Phi = \{\pm 1, \pm i\}$。它对应于某个 $P \in \mathcal{F}$ 的 $\text{op}(P)$，有效地忽略了全局相位。¹³

¹³ 存储一个泡利框架的空间复杂度是 $O(n)$ 比特。

**性质** (框架传播) 设 $\mathcal{F} \in \mathcal{P}_n/\Phi$ 为一个泡利框架。 Clifford 门 $C$ 在 $\mathcal{F}$ 上的作用通过共轭任意代表元 $P \in \mathcal{F}$ 来定义：
$$
\mathcal{F}' = [CPC^{-1}]_\Phi,
\quad (1.14)
$$
其中 $[\cdot]_\Phi$ 表示商群中的等价类。这导致电路等价：
$$
CF' = FC.
\quad (1.15)
$$
```
    n                 n
   ──[F']──[C]──   =   ──[C]──[F]──
        ↖ Backward         ↗ Forward
```

---

##### **1.4.1 跟踪噪声**

**假设** (泡利噪声) 在泡利框架模拟中，噪声过程必须是泡利信道，即，它们必须等价于从概率分布中采样一个泡利积并将其乘入状态。

##### **1.4.2 跟踪校正**

**备注** (自适应校正) 如果需要自适应校正（基于测量应用 $I, X, Y$ 或 $Z$），只需模拟参考电路一次。自适应行为完全通过更新泡利框架 $\mathcal{F}$ 来处理（例如，如果触发校正 $P$，则 $\mathcal{F} \leftarrow \mathcal{F} \cdot P$）。