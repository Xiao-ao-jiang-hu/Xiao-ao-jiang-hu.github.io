---
title: 稳定子表
tags:
  - quantum
  - simulation
  - stabilizer
categories:
  - quantum
  - simulation
index_img: /img/quan.jpg
banner_img: /img/quan.jpg
abbrlink: e19c09b2
excerpt: 本文介绍了稳定子表的基本概念及其在量子电路模拟中的应用，涵盖了Pauli积、稳定子生成元、稳定子表的定义与操作等内容。
date: 2025-12-18 20:50:58
---
# 前置基础

## Pauli积
Pauli矩阵 $\{I, X, Y, Z\}$ 构成单量子比特厄米算子的一个正交基（在 Hilbert-Schmidt 内积下）。对于 $n$ 量子比特系统，所有 $n$-fold Pauli 算子张成的集合构成多体算子空间的一组完备基，使得任意算子均可表示为 Pauli 算子的线性组合。这种表示简化了量子态和量子操作的分析。
### 定义：Pauli矩阵

Pauli矩阵的集合是 $\Sigma = \{I, X, Y, Z\}$，其中：
$$
\sigma_0 = I = \begin{bmatrix} 1 & 0 \\ 0 & 1 \end{bmatrix},
\sigma_1 = X = \begin{bmatrix} 0 & 1 \\ 1 & 0 \end{bmatrix},
\sigma_2 = Y = \begin{bmatrix} 0 & -i \\ i & 0 \end{bmatrix},
\sigma_3 = Z = \begin{bmatrix} 1 & 0 \\ 0 & -1 \end{bmatrix}.
\quad (1.1)
$$

### 定义:Pauli积
$n$ 个量子比特上的一个Pauli积 $P$ 是 $n$ 个Pauli矩阵的张量积：
$$
P = \bigotimes_{k=1}^{n} \sigma_k, \quad \text{其中 } \sigma_k \in \Sigma.
\quad (1.2)
$$

**例** 
$X_1Y_2Z_3$ 表示一个作用在3个量子比特上的Pauli积，其中 $\sigma_1 = X$, $\sigma_2 = Y$, $\sigma_3 = Z$。

### 定义：Pauli群
$n$ 量子比特Pauli群 $\mathcal{P}_n$ 是所有作用在 $n$ 个量子比特上的Pauli积乘以一个来自集合 $\Phi := \{\pm 1, \pm i\}$ 的相位因子所组成的集合。形式上：
$$
\mathcal{P}_n = \left\{ \phi P \mid \phi \in \Phi, P = \bigotimes_{k=1}^{n} \sigma_k, \sigma_k \in \Sigma \right\}
$$
单量子比特Pauli群记为 $\mathcal{P}_1$。


### 定理：Pauli群的生成元
$\{X_k, Z_k\}_{k=1}^{n}$ 是 $\mathcal{P}_n$ 的生成元。

### 定理：Pauli群的唯一分解性质
对于任意 $P \in \mathcal{P}_n$，存在唯一的一组 $\{x_k, z_k\}_{k=1}^{n} \subseteq \{0,1\}$ 和 $\phi \in \Phi$，使得：
$$
P = \phi \prod_{k=1}^{n} X_k^{x_k} Z_k^{z_k}.
$$

进一步，对于任意Pauli积 $Q \in \mathcal{P}_n$，我们定义：
$$
\text{ph}(P) = \phi, \, \text{op}(P) = \prod_{k=1}^{n} X_k^{x_k} Z_k^{z_k}
$$

### 推论：XZ编码
设 $\mathcal{P}_n$ 为 n 比特 Pauli 群（忽略全局相位）。对于任意 $P \in \mathcal{P}_n$，存在唯一的二进制向量 $(x_1, \dots, x_n, z_1, \dots, z_n) \in \{0,1\}^{2n}$，使得 $P$ 可表示为 $\prod_{k=1}^{n} X_k^{x_k} Z_k^{z_k}$。XZ 编码定义为映射 $\text{encode\_xz}: \mathcal{P}_n \to \{0,1\}^{2n}$，将 $P$ 映为该向量。

**性质**
该编码具有同态性：对任意 $P, Q \in \mathcal{P}_n$，有
$$\text{encode\_xz}(P Q) = \text{encode\_xz}(P) \oplus \text{encode\_xz}(Q),$$
其中 $\oplus$ 表示逐分量模 2 加法。

## 稳定子
稳定子码与经典线性码具有深刻的对应关系。通过稳定子的二进制表示，可以将量子码的构造问题转化为经典码的辛正交条件，从而利用成熟的经典编码理论来设计量子码。这种联系极大地丰富了量子纠错码的资源，并简化了分析和设计过程。

### 定义：稳定子和稳定子群
称酉算子 $U$ 稳定一个纯态 $|\psi\rangle$，如果：
$$
U |\psi\rangle = |\psi\rangle
$$
称 $|\psi\rangle$ 的稳定子为所有稳定 $|\psi\rangle$ 的酉算子集合。

稳定 $|\psi\rangle$ 的酉算子集合在乘法下构成一个群。给定一个 $n$ 量子比特纯态 $|\psi\rangle$，其稳定子群 $\mathcal{S}(|\psi\rangle)$ 被定义为所有稳定 $|\psi\rangle$ 的Pauli积所组成的群。

### 稳定子的性质
1. 稳定子群是阿贝尔群。
2. 一个 $n$ 量子比特态 $|\psi\rangle$ 最多有 $n$ 个稳定子生成元。

**证明**
1. 设 $S_1, S_2 \in \mathcal{S}(|\psi\rangle)$，则：
    $$S_1 S_2 |\psi\rangle = S_1 (S_2 |\psi\rangle) = S_1 |\psi\rangle = |\psi\rangle,$$
    因此 $S_1 S_2 \in \mathcal{S}(|\psi\rangle)$。类似地，$S_2 S_1 |\psi\rangle = |\psi\rangle$，所以 $S_1 S_2 = S_2 S_1$。
2. 设 $\{S_1, \dots, S_m\}$ 为 $\mathcal{S}(|\psi\rangle)$ 的一组生成元。由于每个 $S_i$ 都是厄米且平方为单位元，$S_i$ 的本征值为 $\pm 1$。因此，$\mathcal{S}(|\psi\rangle)$ 的每个生成元将希尔伯特空间分割为两个子空间：一个对应于本征值 $+1$，另一个对应于本征值 $-1$。每添加一个独立的生成元，稳定子空间的维度至少减半。因此，最多只能有 $n$ 个独立生成元，否则稳定子空间将变得平凡。$\square$

### 定义：稳定子态
一个具有恰好 $n$ 个稳定子生成元的 $n$ 量子比特态 $|\psi\rangle$。

### 定义：Clifford 操作
一个酉算子 $C$ 是 Clifford 操作，如果 $\forall P \in \mathcal{P}_n, CPC^\dagger \in \mathcal{P}_n$。

!!! note 理解
    即 Clifford 操作是 $\mathcal{P}_n$ 在酉算子集合中的正规化子。于是 Clifford 操作由其在 $\mathcal{P}_n$ 生成元上的共轭作用唯一确定。


## 稳定子表
Gottesman–Knill 定理表明，稳定子态在 Clifford 门下的演化可以高效地通过跟踪其稳定子生成元来模拟。稳定子表提供了一种紧凑表示 Clifford 操作的方法，使得我们可以高效地计算这些操作对 Pauli 积的共轭作用。

### 定义：稳定子表
给定一个 $n$ 量子比特 Clifford 操作 $C$，一个稳定子表 $\text{Tableau}(C) ::= T$ 是一种表示，它存储了 $C$ 如何共轭每个Pauli群生成元。具体来说，它记录了 $T(g) := CgC^{-1}$，对每个生成元 $g \in \{X_1, Z_1, \dots, X_n, Z_n\}$。

!!! note 理解
    如前所述，$C$ 由其在生成元上的共轭作用唯一确定，因此稳定子表也唯一地表示 $C$（直到全局相位）。由于生成元是有限的，稳定子表是对 Clifford 操作的有限表示。

**例** (Controlled-Y门的表) Controlled-Y门 $C_Y$ 的表如下：
$$
\text{Tableau}(C_Y) = \begin{array}{c|cccc}
& X_1 & Z_1 & X_2 & Z_2 \\
\hline
\pm & + & + & + & + \\
1 & X & Z & Z & Z \\
2 & Y &   & X & Z \\
\end{array}
$$

**计算过程**
controlled-Y门 $C_Y$ 的表可以通过以下方式计算：
1. 生成元为 $X_1, Z_1, X_2, Z_2$。
2. 通过共轭计算每个生成元的像：
   - $C_Y (X_1 \otimes I) C_Y^{-1} = X_1 \otimes Y_2$
   - $C_Y (Z_1 \otimes I) C_Y^{-1} = Z_1 \otimes I$
   - $C_Y (I \otimes X_2) C_Y^{-1} = Z_1 \otimes X_2$
   - $C_Y (I \otimes Z_2) C_Y^{-1} = Z_1 \otimes Z_2$
3. 计算相位：
    - $(X_1 \otimes I)(X_1 \otimes Y_2) = I \otimes Y_2$，相位为 $+1$。
    - $(Z_1 \otimes I)(Z_1 \otimes I) = I \otimes I$，相位为 $+1$。
    - $(I \otimes X_2)(Z_1 \otimes X_2) = Z_1 \otimes I$，相位为 $+1$。
    - $(I \otimes Z_2)(Z_1 \otimes Z_2) = Z_1 \otimes I$，相位为 $+1$。
4. 每个生成元的共轭结果构成稳定子表的列


!!! warning 稳定子表中的相位
    Pauli群中的算子一般形式为 $\pm i^k P_1 \otimes \cdots \otimes P_n$，其中 $P_i \in \{I, X, Y, Z\}$，$k \in \{0,1,2,3\}$。但厄米性要求算子等于其共轭转置。Pauli矩阵 $X, Y, Z$ 均为厄米，但乘以 $i$ 后变为反厄米（例如 $(iX)^\dagger = -iX$）。因此，为了保持 $CgC^{-1}$ 的厄米性（因为 $C$ 是酉的且 $g$ 厄米），其相位只能是 $\pm 1$，不能是 $\pm i$。在稳定子表表示中，相位位仅记录 $\pm 1$，任何 $\pm i$ 相位可以通过生成元的交换关系推断，但不直接存储。




### 定理：表 - Clifford 对应
一个 Clifford 操作唯一对应一个有效稳定子表（全局相位除外）。一个形如下的表 $T$：
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
表示一个有效的 Clifford 操作，当且仅当各列保持生成元之间的对易关系：
- $[T(X_a), T(X_b)] = 0$
- $[T(Z_a), T(Z_b)] = 0$
- $\{T(X_a), T(Z_a)\} = 0$ （反对易）
- $[T(X_a), T(Z_b)] = 0$ 对于 $a \neq b$

**证明** (“仅当”方向) 设存储的Pauli积记为 $X'_k := T(X_k)$ 和 $Z'_k := T(Z_k)$，其中 $k=1,\dots,n$。根据假设，集合 $\{X'_k, Z'_k\}_{k=1}^{n}$ 满足标准对易关系：
$$
[X'_j, X'_k] = [Z'_j, Z'_k] = 0, \quad \{X'_j, Z'_j\} = 0, \quad [X'_j, Z'_k] = 0 \text{ 当 } j \neq k
$$
考虑标准生成元 $\{X_k, Z_k\}$。有限群的Stone-von Neumann定理指出，在维度为 $2^n$ 的希尔伯特空间上，这些关系存在唯一的不可约表示（直到酉等价）。由于 $\{X_k, Z_k\}$ 和 $\{X'_k, Z'_k\}$ 都是 $(\mathbb{C}^2)^{\otimes n}$ 上这些关系的表示，因此存在一个酉算子 $U$，使得：
$$
U X_k U^\dagger = X'_k \quad \text{和} \quad U Z_k U^\dagger = Z'_k \quad \forall k
$$
由于 $U$ 将 $\mathcal{P}_n$ 的生成元映射到 $\mathcal{P}_n$ 的元素，它将整个群 $\mathcal{P}_n$ 映射到自身。因此，$U$ 是一个 Clifford 操作。 $\square$

## 通过稳定子表进行计算
### 算法1：Pauli积乘法

$$
\begin{array}{|l|}
\hline
\textbf{算法1：Pauli积乘法} \\
\hline
\text{输入：} \\
\quad P, Q \in \mathcal{P}_n \text{，分别由相位指数 } p, q \in \mathbb{Z}_4 \text{ 和指数向量 } (x_P, z_P), (x_Q, z_Q) \in \{0,1\}^{2n} \text{ 表示。} \\
\text{输出：} \\
\quad R = PQ \text{ 的表示：相位指数 } r \in \mathbb{Z}_4 \text{ 和指数向量 } (x_R, z_R) \in \{0,1\}^{2n}。 \\
\text{步骤：} \\
1. \text{计算指数向量：} \\
\quad \text{对于 } k = 1, \dots, n: \\
\qquad x_{R,k} \gets x_{P,k} \oplus x_{Q,k} \\
\qquad z_{R,k} \gets z_{P,k} \oplus z_{Q,k} \\
2. \text{计算相位贡献：} \\
\quad \Delta \gets 2 \cdot (x_Q \cdot z_P) \bmod 4 \quad \text{（其中 } \cdot \text{ 表示点积，结果为整数）} \\
3. \text{计算总相位：} \\
\quad r \gets (p + q + \Delta) \bmod 4 \\
4. \text{返回 } (r, (x_R, z_R)) \\
\hline
\end{array}
$$

**复杂度分析**：步骤1需 $O(n)$ 次异或，步骤2需 $O(n)$ 次乘加（乘为按位与，加为求和），步骤3常数时间，故总时间复杂度 $O(n)$。空间复杂度 $O(n)$。

**正确性证明**：基于 Pauli 乘法的标准公式 $(X^{x_P} Z^{z_P})(X^{x_Q} Z^{z_Q}) = (-1)^{x_Q \cdot z_P} X^{x_P \oplus x_Q} Z^{z_P \oplus z_Q}$，相位因子 $(-1)^{x_Q \cdot z_P} = i^{2 (x_Q \cdot z_P)}$。结合输入相位即得算法。


### 算法2：通过稳定子表计算 Pauli 共轭

$$
\begin{array}{|l|}
\hline
\textbf{算法2：通过稳定子表计算 Pauli 共轭} \\
\hline
\text{输入：} \\
\quad \text{Clifford 操作 } C \text{ 的局部表表示：覆盖量子比特集合 } Q_T = \{q_1,\dots,q_m\} \text{，} \\
\quad \text{矩阵 } M \in \{0,1\}^{2m \times 2m} \text{ 和相位向量 } r \in \mathbb{Z}_4^{2m}。 \\
\quad \text{Pauli 算子 } P \text{，由相位指数 } p \in \mathbb{Z}_4 \text{ 和指数向量 } (x, z) \in \{0,1\}^{2N} \text{ 表示，} \\
\quad \text{其中 } N \geq m \text{ 为总量子比特数，} P \text{ 作用于集合 } Q_P \text{（大小为 } n\text{）。} \\
\quad \text{映射函数 } \mathrm{idx}: Q_T \to \{1,\dots,m\} \text{ 给出量子比特在表中的索引。} \\
\text{输出：} \\
\quad R = C P C^{-1} \text{ 的表示：相位指数 } p' \in \mathbb{Z}_4 \text{ 和指数向量 } (x', z') \in \{0,1\}^{2N}。 \\
\text{步骤：} \\
1. \text{初始化局部结果：} p_{\text{cur}} \gets 0, \; v_{\text{cur}} \gets (0,\dots,0) \in \{0,1\}^{2m} \\
2. \text{遍历公共量子比特：对于每个 } k \in Q_{\text{common}} = Q_T \cap Q_P: \\
\quad \text{设 } i = \mathrm{idx}(k) \\
\quad \text{若 } x_k = 1: \\
\qquad w \gets M[i] \text{（第 } i \text{ 行，对应 } CX_kC^{-1} \text{）}, \; r_i \gets r[i] \\
\qquad \text{调用算法1，输入 } (p_{\text{cur}}, v_{\text{cur}}) \text{ 和 } (r_i, w) \text{，更新 } (p_{\text{cur}}, v_{\text{cur}}) \\
\quad \text{若 } z_k = 1: \\
\qquad w \gets M[m+i] \text{（第 } m+i \text{ 行，对应 } CZ_kC^{-1} \text{）}, \; r_{m+i} \gets r[m+i] \\
\qquad \text{调用算法1，输入 } (p_{\text{cur}}, v_{\text{cur}}) \text{ 和 } (r_{m+i}, w) \text{，更新 } (p_{\text{cur}}, v_{\text{cur}}) \\
3. \text{构建全局指数向量：} \\
\quad \text{对于 } k = 1 \text{ 到 } N: \\
\qquad \text{若 } k \in Q_T \text{ 且存在 } \mathrm{idx}(k): \\
\qquad\quad i \gets \mathrm{idx}(k) \\
\qquad\quad x'_k \gets v_{\text{cur}}[i], \quad z'_k \gets v_{\text{cur}}[m+i] \\
\qquad \text{否则：} \\
\qquad\quad x'_k \gets x_k, \quad z'_k \gets z_k \\
4. \text{加入原始相位：} p' \gets (p_{\text{cur}} + p) \bmod 4 \\
5. \text{返回 } (p', (x', z')) \\
\hline
\end{array}
$$

**复杂度分析**：设 $c = |Q_{\text{common}}|$，步骤2中每个公共量子比特至多调用两次算法1，每次 $O(m)$，故步骤2总复杂度 $O(c \cdot m) \subseteq O(m^2)$。步骤3需 $O(N)$ 时间。空间复杂度 $O(N + m)$。

**正确性证明**：由 Clifford 操作的同构性质，$C P C^{-1} = i^p \prod_{k \in Q_{\text{common}}} (C X_k C^{-1})^{x_k} (C Z_k C^{-1})^{z_k} \cdot \prod_{k \notin Q_T} X_k^{x_k} Z_k^{z_k}$。算法2依次乘以相应像并保持相位，算法1保证乘法正确，非公共量子比特部分保持不变，故正确。


**示例**

考虑总量子比特数 $N=5$，Clifford 操作 $C$ 覆盖 $Q_T = \{1,2,3\}$（即 $m=3$）。定义 $C$ 如下（相位均为 $+1$）：
- $C X_1 C^{-1} = Z_1$
- $C Z_1 C^{-1} = X_1$
- $C X_2 C^{-1} = X_2$
- $C Z_2 C^{-1} = Z_1 Z_2$
- $C X_3 C^{-1} = X_3$
- $C Z_3 C^{-1} = Z_3$

其表 $T$ 如下（行对应生成元像，列对应量子比特的 $X$ 和 $Z$ 分量）：

$$
T = \begin{array}{c|cccccc}
& X_1 & Z_1 & X_2 & Z_2 & X_3 & Z_3 \\
\hline
1 & 0 & 1 & 0 & 0 & 0 & 0 \\
2 & 1 & 0 & 0 & 0 & 0 & 0 \\
3 & 0 & 0 & 1 & 0 & 0 & 0 \\
4 & 0 & 1 & 0 & 1 & 0 & 0 \\
5 & 0 & 0 & 0 & 0 & 1 & 0 \\
6 & 0 & 0 & 0 & 0 & 0 & 1 \\
\end{array}
$$

其中行1–3对应 $C X_k C^{-1}$，行4–6对应 $C Z_k C^{-1}$，所有相位 $r_i = 0$。

设 Pauli 算子 $P = X_1 Y_2 X_4 Z_5$。将 $Y_2 = i X_2 Z_2$ 代入得 $P = i X_1 X_2 Z_2 X_4 Z_5$，故相位指数 $p = 1$，指数向量为：
- 量子比特1: $(x_1=1, z_1=0)$
- 量子比特2: $(x_2=1, z_2=1)$
- 量子比特4: $(x_4=1, z_4=0)$
- 量子比特5: $(x_5=0, z_5=1)$
- 其余为 $(0,0)$

因此 $Q_P = \{1,2,4,5\}$，$Q_{\text{common}} = \{1,2\}$，$c=2$。

执行算法2：
1. 初始化 $p_{\text{cur}}=0$，$v_{\text{cur}} = (0,0,0|0,0,0)$（长度 $2m=6$）。
2. 遍历公共量子比特：
   - $k=1$：$x_1=1$，取行1：$w = (0,1,0,0,0,0)$，$r_1=0$。调用算法1：$(0,零向量) \times (0,w)$ 得 $p_{\text{cur}}=0$，$v_{\text{cur}} = (0,0,0|1,0,0)$（即 $Z_1$）。
   - $k=2$：$x_2=1, z_2=1$。
       先乘 $X_2$ 像（行3）：$w = (0,0,1,0,0,0)$，$r_3=0$。调用算法1：当前 $(0, (0,0,0|1,0,0)) \times (0, (0,0,1,0,0,0))$ 计算 $\Delta = 2 \cdot ( (0,0,1) \cdot (1,0,0) ) = 0$，得 $p_{\text{cur}}=0$，$v_{\text{cur}} = (0,1,0|1,0,0)$（即 $Z_1 X_2$）。
       再乘 $Z_2$ 像（行4）：$w = (0,1,0,1,0,0)$，$r_4=0$。调用算法1：当前 $(0, (0,1,0|1,0,0)) \times (0, (0,1,0,1,0,0))$ 计算 $\Delta = 2 \cdot ( (0,1,0) \cdot (1,0,0) ) = 0$，得 $p_{\text{cur}}=0$，$v_{\text{cur}} = (0,1,0|0,1,0)$（即 $X_2 Z_2$）。
3. 构建全局指数向量：
   - 量子比特1（在 $Q_T$ 中，$\mathrm{idx}(1)=1$）：从 $v_{\text{cur}}$ 取 $x'_1 = v_{\text{cur}}[1] = 0$，$z'_1 = v_{\text{cur}}[4] = 0$。
   - 量子比特2（$\mathrm{idx}(2)=2$）：$x'_2 = 1$，$z'_2 = 1$。
   - 量子比特3（$\mathrm{idx}(3)=3$）：$x'_3 = 0$，$z'_3 = 0$。
   - 量子比特4（不在 $Q_T$）：$x'_4 = x_4 = 1$，$z'_4 = 0$。
   - 量子比特5（不在 $Q_T$）：$x'_5 = 0$，$z'_5 = 1$。
4. $p' = (0 + 1) \bmod 4 = 1$。

返回结果为：相位指数 $p'=1$，指数向量 $(x', z')$ 如上，对应 $C P C^{-1} = i X_2 Z_2 X_4 Z_5$。


### 算法3：组合表

给定一个 $n$ 量子比特稳定子表 $A$（表示 Clifford 操作 $C_A$）和一个 $m$ 量子比特稳定子表 $B$（表示 $C_B$，且 $m \leq n$），计算组合 Clifford 操作 $C_B \circ C_A$ 或 $C_A \circ C_B$ 的表。

**追加**（计算 $C_B \circ C_A$ 的表）：  
对于 $A$ 的每一列 $k \in \{1, \dots, 2n\}$（每列存储 $C_A P_k C_A^{-1}$，其中 $P_k$ 为第 $k$ 个 Pauli 生成元）：
1. 取出列 $k$ 对应的 Pauli 积 $P_k'$。
2. 计算 $P_k'' = C_B P_k' C_B^{-1}$（通过算法 2 共轭，复杂度 $O(m^2)$）。
3. 将 $P_k''$ 存回列 $k$。

由于共轭每列需 $O(m^2)$，总列数 $2n$，故复杂度为 $O(n \cdot m^2)$。

**前置**（计算 $C_A \circ C_B$ 的表）：  
对于 $B$ 的每一列 $k \in \{1, \dots, 2m\}$：
1. 取出 $B$ 中列 $k$ 对应的 Pauli 积 $P_k' = C_B P_k C_B^{-1}$。
2. 计算 $P_k'' = C_A P_k' C_A^{-1}$（复杂度 $O(m \cdot n)$，因 $P_k'$ 作用在 $m$ 个量子比特上）。
3. 将 $P_k''$ 写入 $A$ 的列 $k$（覆盖原内容，$A$ 表扩展至 $n$ 量子比特）。

共轭每列需 $O(m \cdot n)$，总列数 $2m$，故复杂度为 $O(m \cdot n \cdot m) = O(n \cdot m^2)$。

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
1. **计算Pauli项**。对于生成元 $G_a \in \{X_a, Z_a\}$，在 $T^{-1}$ 中第 $a$ 个量子比特的列由 $T$ 中第 $b$ 个量子比特的列的项决定。具体来说，设 $T(G_a)$ 表示在 $T$ 下生成元 $G_a$ 的输出在第 $b$ 个量子比特的Pauli项。然后，$T^{-1}(G_a)$ 在第 $a$ 个量子比特的项由求解对易关系确定：⁸
    - 如果 $T(X_a)$ 与 $X_b$ 对易，则 $T^{-1}(X_b)$ 必须与 $X_a$ 对易；否则反对易。
    - 如果 $T(Z_a)$ 与 $Z_b$ 对易，则 $T^{-1}(X_b)$ 必须与 $Z_a$ 对易；否则反对易。
2. **计算符号**。设 $S$ 为一个与 $T^{-1}$ 具有相同Pauli项但所有符号均为正的表。对于每个生成元 $g \in \{X_1, Z_1, \dots, X_N, Z_N\}$，通过计算 $T(S(g))g$ 来确定 $T^{-1}$ 中相应列的符号。⁹

⁸ 这实际上相当于对表的Pauli项进行转置并伴随局部基变换，耗时 $O(n^2)$。
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

#### **1.4 Pauli框架**

**定义 13** (Pauli框架) 一个Pauli框架 $\mathcal{F}$ 是商群 $\mathcal{P}_n/\Phi$ 中的一个元素，其中 $\Phi = \{\pm 1, \pm i\}$。它对应于某个 $P \in \mathcal{F}$ 的 $\text{op}(P)$，有效地忽略了全局相位。¹³

¹³ 存储一个Pauli框架的空间复杂度是 $O(n)$ 比特。

**性质** (框架传播) 设 $\mathcal{F} \in \mathcal{P}_n/\Phi$ 为一个Pauli框架。 Clifford 门 $C$ 在 $\mathcal{F}$ 上的作用通过共轭任意代表元 $P \in \mathcal{F}$ 来定义：
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

**假设** (Pauli噪声) 在Pauli框架模拟中，噪声过程必须是Pauli信道，即，它们必须等价于从概率分布中采样一个Pauli积并将其乘入状态。

##### **1.4.2 跟踪校正**

**备注** (自适应校正) 如果需要自适应校正（基于测量应用 $I, X, Y$ 或 $Z$），只需模拟参考电路一次。自适应行为完全通过更新Pauli框架 $\mathcal{F}$ 来处理（例如，如果触发校正 $P$，则 $\mathcal{F} \leftarrow \mathcal{F} \cdot P$）。


