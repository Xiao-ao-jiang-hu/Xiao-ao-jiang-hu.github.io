---
title: Ch 4.1 对偶算子
tags:
  - math
  - functional analysis
categories:
  - math
  - functional analysis
index_img: /img/fa.jpg
banner_img: /img/fa.jpg
excerpt: 泛函分析课程笔记
abbrlink: e3dc0774
date: 2025-11-28 04:16:51
---
# Ch4 Fredholm 理论
本章的目的是对 Fredholm 算子及其指标（包括稳定性定理）进行基本介绍。Fredholm 算子是 Banach 空间之间的一个有界线性算子，它具有有限维核、闭值域和有限维余核。其 Fredholm 指标是核与余核维度之差。稳定性定理断言，对于任意给定指标的 Fredholm 算子，在由算子范数诱导的拓扑下，它们构成所有有界线性算子空间中的一个开子集。该定理还断言，一个 Fredholm 算子与一个紧算子的和仍然是 Fredholm 算子，并且具有与原算子相同的指标。Fredholm 算子在数学的许多领域中扮演着重要角色，包括拓扑学和几何学。有许多重要的主题超出了本书的范围。例如，无限维 Hilbert 空间上的 Fredholm 算子空间是 K-理论的一个分类空间，其中从拓扑空间到 Fredholm 算子空间的每个连续映射都会产生一对向量丛（粗略地说，即核丛和余核丛），其 K-理论类是一个同伦不变量。另一个未涵盖的主题是 Quillen 在 Fredholm 算子空间上的行列式线丛。

本章首先介绍了有界线性算子的对偶概念。其中包括闭值域定理的证明，该定理断言一个算子具有闭值域当且仅当其对偶算子具有闭值域。然后讨论紧算子，这些算子将单位球映射到目标空间中的预紧子集，接着用模紧算子的可逆性来刻画 Fredholm 算子，并建立稳定性定理。


## 定义与例子

Banach 空间之间有界线性算子的对偶算子是在对偶空间之间诱导出的算子。这样的对偶算子已在 Hahn-Banach 定理相关结论的证明中被隐式使用。以下是形式定义。

### 定义（对偶算子）

设 $X$ 和 $Y$ 为实赋范向量空间，记其对偶空间分别为 $X^* := \mathcal{L}(X, \mathbb{R})$ 和 $Y^* := \mathcal{L}(Y, \mathbb{R})$，并设 $A: X \to Y$ 是一个有界线性算子。则 $A$ 的**对偶算子**是线性算子
$$ A^*: Y^* \to X^* $$
由下式定义：
$$ A^* y^* := y^* \circ A : X \to \mathbb{R} \quad \text{对于 } y^* \in Y^*. \tag{1} $$
因此，对于每个有界线性泛函 $y^*: Y \to \mathbb{R}$，有界线性泛函 $A^* y^*: X \to \mathbb{R}$ 是有界线性算子 $A: X \to Y$ 与 $y^*$ 的复合，即
$$ \langle A^* y^*, x \rangle = \langle y^*, Ax \rangle \tag{2} $$
对所有 $x \in X$ 成立。

### 引理

设 $X$ 和 $Y$ 为实赋范向量空间，且设 $A: X \to Y$ 为一个有界线性算子。则对偶算子
$$ A^*: Y^* \to X^* $$
是有界的，且
$$ \|A^*\| = \|A\|. $$

#### 证明

$A^*$ 的算子范数由下式给出：
$$
\begin{aligned}
\|A^*\| &= \sup_{y^* \in Y^* \setminus \{0\}} \frac{\|A^* y^*\|}{\|y^*\|} \\
&= \sup_{y^* \in Y^* \setminus \{0\}} \sup_{x \in X \setminus \{0\}} \frac{|\langle A^* y^*, x \rangle|}{\|y^*\| \, \|x\|} \\
&= \sup_{x \in X \setminus \{0\}} \sup_{y^* \in Y^* \setminus \{0\}} \frac{|\langle y^*, Ax \rangle|}{\|y^*\| \, \|x\|} \\
&= \sup_{x \in X \setminus \{0\}} \frac{\|Ax\|}{\|x\|} \\
&= \|A\|.
\end{aligned}
$$
此处最后一个等式源于 Hahn-Banach 定理。特别地，$\|A^*\| < \infty$，这证明了该引理。 



### 引理

设 $X, Y, Z$ 为实赋范向量空间，且设 $A: X \to Y$ 和 $B: Y \to Z$ 为有界线性算子。则以下成立：

1. $(BA)^* = A^* B^*$ 且 $(\mathbb{1}_X)^* = \mathbb{1}_{X^*}$。
2. 双对偶算子 $A^{**}: X^{**} \to Y^{**}$ 满足 $\iota_Y \circ A = A^{**} \circ \iota_X$，其中 $\iota_X: X \to X^{**}$ 和 $\iota_Y: Y \to Y^{**}$ 是自然嵌入。

#### 证明

这直接由定义得出。



### 例

设 $(M,d)$ 为一个紧度量空间，且 $\phi: M \to M$ 为一个同胚。令 $T: C(M) \to C(M)$ 为由 $Tf := f \circ \phi$ 定义的算子，其中 $f \in C(M)$（即 $f$ 在 $\phi$ 下的拉回）。那么，在对偶空间 $C(M)^* \cong \mathcal{M}(M)$ 与 $M$ 上符号 Borel 测度空间的恒等映射下，$T$ 的对偶算子是算子 $T^*: \mathcal{M}(M) \to \mathcal{M}(M)$，它将每个符号 Borel 测度 $\mu: \mathcal{B} \to \mathbb{R}$ 映射为其在 $\phi$ 下的前推 $T^* \mu = \phi_* \mu$。此前推由 $(\phi_* \mu)(B) := \mu(\phi^{-1}(B))$ 给出，其中 $B \subset M$ 为任意 Borel 集。



### 例（转置矩阵）

矩阵 $A \in \mathbb{R}^{m \times n}$ 诱导了一个线性映射 $L_A: \mathbb{R}^n \to \mathbb{R}^m$。其对偶算子对应于标准同构 $\iota_k: \mathbb{R}^k \to (\mathbb{R}^k)^*$ 下的转置矩阵。这意味着 $(L_A)^* \circ \iota_m = \iota_n \circ L_{A^T}: \mathbb{R}^m \to (\mathbb{R}^n)^*$。



### 例（伴随算子）

设 $H$ 为一个实 Hilbert 空间，设 $A: H \to H$ 为一个有界线性算子，且设 $A^*_{\text{Banach}}: H^* \to H^*$ 为 $A$ 的对偶算子。在此情况下，可以通过 Riesz 表示定理中的同构 $I: H \to H^*$ 将 Hilbert 空间 $H$ 与其自身的对偶空间 $H^*$ 相认同。算子
$$ A^*_{\text{Hilbert}} := I^{-1} \circ A^*_{\text{Banach}} \circ I: H \to H $$
被称为 $A$ 的**伴随算子**。它由公式
$$ \langle A^*_{\text{Hilbert}} y, x \rangle = \langle y, Ax \rangle \tag{3} $$
表征，其中对所有 $x, y \in H$，$\langle \cdot, \cdot \rangle$ 表示 Hilbert 空间 $H$ 上的内积，而非如方程 (2) 中 $H^*$ 与 $H$ 之间的配对。当完全在 Hilbert 空间框架下工作时，通常方便使用记号 $A^* := A^*_{\text{Hilbert}}$ 来表示伴随算子，而不是对偶算子。



### 例（自伴算子）

设 $H = \ell^2$ 为标准 Hilbert 空间，且设 $(a_i)_{i \in \mathbb{N}}$ 为一个有界实数序列。通过 $Ax := (a_i x_i)_{i \in \mathbb{N}}$ 定义有界线性算子 $A: \ell^2 \to \ell^2$，其中 $x = (x_i)_{i \in \mathbb{N}} \in \ell^2$。该算子等于其自身的伴随算子 $A^*_{\text{Hilbert}}$。这样的算子称为**自伴**或**对称**算子。



## 对偶性

### 定理（对偶性）

设 $X$ 和 $Y$ 为实赋范向量空间，且设 $A: X \to Y$ 为一个有界线性算子。则以下成立：

1. $\mathrm{im}(A)^\perp = \ker(A^*)$ 且 ${}^\perp \mathrm{im}(A^*) = \ker(A)$。
2. $A$ 具有稠密值域当且仅当 $A^*$ 是单射。
3. $A$ 是单射当且仅当 $A^*$ 具有弱\*稠密值域。

#### 证明

我们证明第 1 条。首先令 $y^* \in Y^*$。则
$$
\begin{aligned}
y^* \in \mathrm{im}(A)^\perp &\iff \langle y^*, Ax \rangle = 0 \text{ 对所有 } x \in X \\
&\iff \langle A^* y^*, x \rangle = 0 \text{ 对所有 } x \in X \iff A^* y^* = 0
\end{aligned}
$$
这表明 $\mathrm{im}(A)^\perp = \ker(A^*)$。现在令 $x \in X$。则
$$
\begin{aligned}
x \in {}^\perp \mathrm{im}(A^*) &\iff \langle A^* y^*, x \rangle = 0 \text{ 对所有 } y^* \in Y^* \\
&\iff \langle y^*, Ax \rangle = 0 \text{ 对所有 } y^* \in Y^* \iff Ax = 0.
\end{aligned}
$$
最后一步使用了 Hahn-Banach 定理。这表明 ${}^\perp \mathrm{im}(A^*) = \ker(A)$。

我们证明第 2 条。算子 $A^*$ 是单射当且仅当 $\ker(A^*) = \{0\}$。这等价于 $\mathrm{im}(A)^\perp = \{0\}$（由第 1 条），从而等价于 $\mathrm{im}(A)$ 在 $Y$ 中稠密（由零化子性质）。

我们证明第 3 条。算子 $A$ 是单射当且仅当 $\ker(A) = \{0\}$。这等价于 ${}^\perp \mathrm{im}(A^*) = \{0\}$（由第 1 条），从而等价于 $\mathrm{im}(A^*)$ 在 $X^*$ 中弱\*稠密（由弱\*拓扑下的分离定理）。这证明了该定理。



### 例

定义算子 $A: \ell^2 \to \ell^2$ 为 $Ax := (i^{-1} x_i)_{i \in \mathbb{N}}$，其中 $x = (x_i)_{i \in \mathbb{N}} \in \ell^2$。该算子是自伴的、单射的，并具有稠密值域，但不是满射的。因此 $\mathrm{im}(A) \subsetneq \ell^2 = {}^\perp \ker(A^*)$。



### 例

在上述定理的第 3 条中，“弱\*稠密”一词不能被“稠密”替代。令 $X := \ell^1$ 且 $Y := c_0$。则包含映射 $A: \ell^1 \to c_0$ 是单射且具有稠密值域。此外，$X^* \cong \ell^\infty$ 且 $Y^* \cong \ell^1$，而 $A^*: \ell^1 \to \ell^\infty$ 再次是明显的包含映射。其像在弱\*意义下稠密，但不是稠密的。

**练习：** 算子 $A^{**}: (\ell^\infty)^* \to \ell^\infty$ 不是单射。



### 例

设 $X$ 为一个实赋范向量空间，$Y \subset X$ 为一个闭线性子空间，且令 $\pi: X \to X/Y$ 为典范投影。则对偶算子 $\pi^*: (X/Y)^* \to X^*$ 是等距嵌入，其像为 $Y$ 的零化子。包含映射 $\iota: Y \to X$ 的对偶算子 $\iota^*: X^* \to Y^*$ 是一个满射算子，其核为 $Y^\perp$。它下降为等距同构 $X^*/Y^\perp \to Y^*$。



接下来的两个定理建立了两个具有相同目标空间的算子的像之间以及它们对偶算子之间的对应关系，反之亦然。建立这种对应关系的主要工具是 Douglas 分解定理和 Hahn-Banach 定理。

### 定理

设 $X, Y, Z$ 为实赋范向量空间，且设 $A: X \to Y$ 和 $B: X \to Z$ 为有界线性算子。则以下等价：

1. $\mathrm{im}(B^*) \subset \mathrm{im}(A^*)$。
2. 存在一个常数 $c > 0$，使得
$$ \|Bx\|_Z \le c \|Ax\|_Y \quad \text{对所有 } x \in X. \tag{4} $$

#### 证明

参见相关章节。



### 定理

设 $X, Y, Z$ 为实 Banach 空间，且设 $A: X \to Y$ 和 $B: Z \to Y$ 为有界线性算子。则以下成立：

1. 若 $\mathrm{im}(B) \subset \mathrm{im}(A)$，则存在一个常数 $c > 0$，使得
$$ \|B^* y^*\|_{Z^*} \le c \|A^* y^*\|_{X^*} \quad \text{对所有 } y^* \in Y^*. \tag{5} $$
2. 若 $X$ 是自反的且 (5) 对某个 $c > 0$ 成立，则 $\mathrm{im}(B) \subset \mathrm{im}(A)$。

#### 证明

参见相关章节。



### 例

在上述定理的第 2 条中，$X$ 是自反的这一假设不可移除。然而，当 $B$ 是双射时（如下文推论），这一假设并非必需。令 $X := c_0$, $Y := \ell^2$, $Z := \mathbb{R}$，并定义 $A: c_0 \to \ell^2$, $B: \mathbb{R} \to \ell^2$ 为 $Ax := (i^{-1} x_i)_{i \in \mathbb{N}}$（其中 $x = (x_i)_{i \in \mathbb{N}} \in c_0$）和 $Bz := (i^{-1} z)_{i \in \mathbb{N}}$（其中 $z \in \mathbb{R}$）。则 (5) 成立，但 $\mathrm{im}(B) \not\subset \mathrm{im}(A)$。



### 引理

设 $X$ 和 $Y$ 为实赋范向量空间，且设 $A: X \to Y$ 为一个有界线性算子。令 $x^* \in X^*$。则以下等价：

1. $x^* \in \mathrm{im}(A^*)$。
2. 存在一个常数 $c \ge 0$，使得 $|\langle x^*, x \rangle| \le c \|Ax\|_Y$ 对所有 $x \in X$ 成立。

#### 证明

若 $x^* = A^* y^*$，则 $|\langle x^*, x \rangle| = |\langle y^*, Ax \rangle| \le \|y^*\|_{Y^*} \|Ax\|_Y$ 对所有 $x \in X$ 成立，因此第 2 条在 $c := \|y^*\|$ 时成立。反之，假设 $x^*$ 满足第 2 条，并定义映射 $\psi: \mathrm{im}(A) \to \mathbb{R}$ 如下。给定 $y \in \mathrm{im}(A)$，选择 $x \in X$ 使得 $y = Ax$，并定义 $\psi(y) := \langle x^*, x \rangle$。由第 2 条可知，这个数值仅依赖于 $y$，而不依赖于 $x$，且 $\psi: \mathrm{im}(A) \to \mathbb{R}$ 是一个有界线性泛函。根据定义，它满足 $\psi \circ A = x^*$。由 Hahn-Banach 定理，存在一个 $y^* \in Y^*$ 使得 $y^*|_{\mathrm{im}(A)} = \psi$。它满足 $x^* = \psi \circ A = y^* \circ A = A^* y^*$，这证明了该引理。