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

!!! note 和有限维对比
    以上两个定理与有限维线性代数中的类似结果完全一致。在有限维情形下，线性映射 $A: \mathbb{R}^n \to \mathbb{R}^m$ 的对偶算子 $A^*: (\mathbb{R}^m)^* \to (\mathbb{R}^n)^*$ 可以通过矩阵 $A$ 的转置矩阵 $A^T \in \mathbb{R}^{n \times m}$ 来表示。具体而言，利用标准基底诱导的同构 $(\mathbb{R}^k)^* \cong \mathbb{R}^k$，对偶算子 $A^*$ 对应于由转置矩阵 $A^T$ 诱导的线性映射 $L_{A^T}: \mathbb{R}^m \to \mathbb{R}^n$。

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

!!! note 直观理解
    $A$ 的值域在 $Y$ 中“铺满”（稠密）意味着没有非零连续泛函能完全“忽略”它，这等价于 $A^*$ 没有非零的核。$A$ 是一对一的（单射）意味着 $A^*$ 的值域在弱\*拓扑下“足够多”，以至于能区分 $X$ 中的不同点；反之，若 $A^*$ 的值域在弱\*意义下“铺满” $X^*$，则 $A$ 必为单射。

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

### 引理

设 $X$ 和 $Y$ 为实赋范向量空间，且设 $A: X \to Y$ 为一个有界线性算子。令 $x^* \in X^*$。则以下等价：

1. $x^* \in \mathrm{im}(A^*)$。
2. 存在一个常数 $c \ge 0$，使得 $|\langle x^*, x \rangle| \le c \|Ax\|_Y$ 对所有 $x \in X$ 成立。

#### 证明

若 $x^* = A^* y^*$，则 $|\langle x^*, x \rangle| = |\langle y^*, Ax \rangle| \le \|y^*\|_{Y^*} \|Ax\|_Y$ 对所有 $x \in X$ 成立，因此第 2 条在 $c := \|y^*\|$ 时成立。反之，假设 $x^*$ 满足第 2 条，并定义映射 $\psi: \mathrm{im}(A) \to \mathbb{R}$ 如下。给定 $y \in \mathrm{im}(A)$，选择 $x \in X$ 使得 $y = Ax$，并定义 $\psi(y) := \langle x^*, x \rangle$。由第 2 条可知，这个数值仅依赖于 $y$，而不依赖于 $x$，且 $\psi: \mathrm{im}(A) \to \mathbb{R}$ 是一个有界线性泛函。根据定义，它满足 $\psi \circ A = x^*$。由 Hahn-Banach 定理，存在一个 $y^* \in Y^*$ 使得 $y^*|_{\mathrm{im}(A)} = \psi$。它满足 $x^* = \psi \circ A = y^* \circ A = A^* y^*$，这证明了该引理。


### 定理 1（像包含蕴含范数控制）

设 $X, Y, Z$ 为实赋范向量空间，且设 $A: X \to Y$ 和 $B: X \to Z$ 为有界线性算子。则以下等价：

1. $\mathrm{im}(B^*) \subset \mathrm{im}(A^*)$。
2. 存在一个常数 $c > 0$，使得
$$ \|Bx\|_Z \le c \|Ax\|_Y \quad \text{对所有 } x \in X. \tag{4} $$


### 定理 2（像包含蕴含范数控制的对偶形式）

设 $X, Y, Z$ 为实 Banach 空间，且设 $A: X \to Y$ 和 $B: Z \to Y$ 为有界线性算子。则以下成立：

1. 若 $\mathrm{im}(B) \subset \mathrm{im}(A)$，则存在一个常数 $c > 0$，使得
$$ \|B^* y^*\|_{Z^*} \le c \|A^* y^*\|_{X^*} \quad \text{对所有 } y^* \in Y^*. \tag{5} $$
2. 若 $X$ 是自反的且 (5) 对某个 $c > 0$ 成立，则 $\mathrm{im}(B) \subset \mathrm{im}(A)$。


!!! warning 
    在上述定理的第 2 条中，$X$ 是自反的这一假设不可移除。然而，当 $B$ 是双射时（如下文推论），这一假设并非必需。令 $X := c_0$, $Y := \ell^2$, $Z := \mathbb{R}$，并定义 $A: c_0 \to \ell^2$, $B: \mathbb{R} \to \ell^2$ 为 $Ax := (i^{-1} x_i)_{i \in \mathbb{N}}$（其中 $x = (x_i)_{i \in \mathbb{N}} \in c_0$）和 $Bz := (i^{-1} z)_{i \in \mathbb{N}}$（其中 $z \in \mathbb{R}$）。则 (5) 成立，但 $\mathrm{im}(B) \not\subset \mathrm{im}(A)$。

#### 证明

我们证明“像包含蕴含范数控制”定理中 (ii) 蕴含 (i)。因此假设 $A: X \to Y$ 和 $B: X \to Z$ 满足不等式 $\|Bx\|_Z \le c \|Ax\|_Y$，并固定一个元素 $x^* \in \mathrm{im}(B^*)$。由对偶像刻画引理，存在常数 $b > 0$ 使得
$$
|\langle x^*, x \rangle| \le b \|Bx\|_Z \le bc \|Ax\|_Y
$$
对所有 $x \in X$ 成立。因此由对偶像刻画引理可知 $x^* \in \mathrm{im}(A^*)$。这表明“像包含蕴含范数控制”定理中 (ii) 蕴含 (i)。

我们证明“像包含的对偶刻画”定理的第 (ii) 部分。因此假设 $X$ 是自反的，且有界线性算子 $A: X \to Y$ 和 $B: Z \to Y$ 满足不等式 $\|B^* y^*\|_{Z^*} \le c \|A^* y^*\|_{X^*}$。由于“像包含蕴含范数控制”定理中 (ii) 蕴含 (i)，我们有 $\mathrm{im}(B^{**}) \subset \mathrm{im}(A^{**})$。现在令 $z \in Z$ 并选择 $x^{**} \in X^{**}$ 使得 $A^{**} x^{**} = B^{**} \iota_Z(z) = \iota_Y(Bz)$（由对偶算子的基本性质）。由于 $X$ 是自反的，存在元素 $x \in X$ 使得 $\iota_X(x) = x^{**}$。于是 $\iota_Y(Ax) = A^{**} \iota_X(x) = A^{**} x^{**} = \iota_Y(Bz)$，因此 $Ax = Bz$。这证明了“像包含的对偶刻画”定理的第 (ii) 部分。

我们证明“像包含的对偶刻画”定理的第 (i) 部分。假设 $X, Y, Z$ 是 Banach 空间，且有界线性算子 $A: X \to Y$ 和 $B: Z \to Y$ 满足 $\mathrm{im}(B) \subset \mathrm{im}(A)$。定义 $X_0 := X / \ker(A)$，并令 $\pi: X \to X_0$ 为典范投影。则 $\pi^*: X_0^* \to X^*$ 是一个等距嵌入，其像为 $\ker(A)^\perp$。此外，算子 $A: X \to Y$ 降为一个有界线性算子 $A_0: X_0 \to Y$，满足 $A_0 \circ \pi = A$。它满足 $A^* = \pi^* \circ A_0^*$，因此
$$
\|A^* y^*\|_{X^*} = \|A_0^* y^*\|_{X_0^*} \quad \text{对所有 } y^* \in Y^*. \tag{1}
$$
由于 $\mathrm{im}(B) \subset \mathrm{im}(A) = \mathrm{im}(A_0)$ 且 $A_0$ 是单射，Douglas 分解定理断言存在一个有界线性算子 $T: Z \to X_0$，使得 $A_0 T = B$。因此
$$
\begin{aligned}
\|B^* y^*\|_{Z^*} &= \sup_{z \in Z \setminus \{0\}} \frac{\langle B^* y^*, z \rangle}{\|z\|_Z} \\
&= \sup_{z \in Z \setminus \{0\}} \frac{\langle A_0^* y^*, Tz \rangle}{\|z\|_Z} \\
&\le \sup_{z \in Z \setminus \{0\}} \frac{\|A_0^* y^*\|_{X_0^*} \, \|Tz\|_{X_0}}{\|z\|_Z} \\
&= \|T\| \, \|A^* y^*\|_{X^*}
\end{aligned}
$$
对所有 $y^* \in Y^*$ 成立，由 (1)。这证明了“像包含的对偶刻画”定理的第 (i) 部分。

我们证明“像包含蕴含范数控制”定理中 (i) 蕴含 (ii)。因此假设算子 $A: X \to Y$ 和 $B: X \to Z$ 满足 $\mathrm{im}(B^*) \subset \mathrm{im}(A^*)$。由“像包含的对偶刻画”定理的第 (i) 部分，存在一个 $c > 0$ 使得 $\|B^{**} x^{**}\|_{Z^{**}} \le c \|A^{**} x^{**}\|_{Y^{**}}$ 对所有 $x^{**} \in X^{**}$ 成立。于是，由自然嵌入的等距性和对偶算子的基本性质，我们有
$$
\|Bx\|_Z = \|\iota_Z(Bx)\|_{Z^{**}} = \|B^{**} \iota_X(x)\|_{Z^{**}} \le c \|A^{**} \iota_X(x)\|_{Y^{**}} = c \|Ax\|_Y
$$
对所有 $x \in X$ 成立。这证明了“像包含蕴含范数控制”定理。

## 闭值域定理

本小节的主要定理断言：两个 Banach 空间之间的有界线性算子具有闭值域当且仅当其对偶算子具有闭值域。证明中的关键工具是 Banach 空间之间有界线性算子满射性的判据。该判据指出：在 $X$ 中开单位球的像在 $Y$ 中包含原点的一个邻域。

### 定理（闭值域定理）

设 $X$ 和 $Y$ 为 Banach 空间，令 $A: X \to Y$ 为一个有界线性算子，并令 $A^*: Y^* \to X^*$ 为其对偶算子。则以下条件等价：

1. $\mathrm{im}(A) = {}^\perp \ker(A^*)$。
2. $A$ 的像在 $Y$ 中是一个闭子空间。
3. 存在一个常数 $c > 0$，使得对每个 $x \in X$，
$$
\inf_{A\xi=0} \|x + \xi\|_X \le c \|Ax\|_Y. \tag{2}
$$
此处下确界取遍所有满足 $A\xi = 0$ 的 $\xi \in X$。
4. $\mathrm{im}(A^*) = \ker(A)^\perp$。
5. $A^*$ 的像在 $X^*$ 中是一个弱\*闭子空间。
6. $A^*$ 的像在 $X^*$ 中是一个闭子空间。
7. 存在一个常数 $c > 0$，使得对每个 $y^* \in Y^*$，
$$
\inf_{A^*\eta^*=0} \|y^* + \eta^*\|_{Y^*} \le c \|A^* y^*\|_{X^*}. \tag{3}
$$
此处下确界取遍所有满足 $A^*\eta^* = 0$ 的 $\eta^* \in Y^*$。

!!! note 直观理解
    对于一个有界线性算子，其值域的闭性是它与其伴随算子共同享有的“好性质”。一旦成立，原算子的像恰好由“消灭其伴随算子核的所有元素”构成；伴随算子的像恰好由“消灭原算子核的所有连续泛函”构成。这种“恰好”的关系，是通过分析上的下方有界条件（即商映射的控制不等式）来保证的。


#### 证明
1 蕴含 2 是因为任意子集在 $Y^*$ 中的预零化子都是 $Y$ 中的闭子空间。

我们证明 2 蕴含 3。定义
$$
X_0 := X / \ker(A), \quad Y_0 := \mathrm{im}(A),
$$
并令 $\pi_0: X \to X_0$ 为将每个元素 $x \in X$ 映射到其在商空间 $X_0 = X / \ker(A)$ 中的等价类 $\pi_0(x) := [x] = x + \ker(A)$ 的投影。由于 $A$ 的核是闭的且 $X$ 是 Banach 空间，由商空间定理可知商空间 $X_0$ 是一个 Banach 空间，其范数为
$$
\|[x]\|_{X_0} = \inf_{\xi \in \ker(A)} \|x + \xi\|_X \quad \text{对于 } x \in X.
$$
由于 $A$ 的像是闭的（由 2），子空间 $Y_0 \subset Y$ 是一个 Banach 空间。由于元素 $x \in X$ 在 $A$ 下的像 $Ax \in Y_0 \subset Y$ 仅依赖于 $x$ 在商空间 $X_0$ 中的等价类，故存在唯一的线性映射 $A_0: X_0 \to Y_0$，使得对所有 $x \in X$ 有 $A_0[x] = Ax$。根据定义，映射 $A_0$ 是双射的。此外，
$$
\|Ax\|_Y = \|A(x + \xi)\|_Y \le \|A\| \, \|x + \xi\|_X
$$
对所有 $x \in X$ 和所有 $\xi \in \ker(A)$ 成立，因此
$$
\|A_0[x]\|_{Y_0} = \|Ax\|_Y \le \|A\| \inf_{\xi \in \ker(A)} \|x + \xi\|_X = \|A\| \, \|[x]\|_{X_0}
$$
对所有 $x \in X$ 成立。这表明 $A_0: X_0 \to Y_0$ 是一个双射的有界线性算子。因此，由开映射定理，$A_0^{-1}$ 是连续的，从而由逆算子定理可知 $A_0^{-1}$ 是有界的。于是存在常数 $c > 0$，使得对所有 $y \in Y_0 \subset Y$ 有 $\|A_0^{-1} y\|_{X_0} \le c \|y\|_{Y_0}$。这意味着
$$
\inf_{\xi \in \ker(A)} \|x + \xi\|_X = \|[x]\|_{X_0} \le c \|A_0[x]\|_{Y_0} = c \|Ax\|_Y
$$
对所有 $x \in X$ 成立。因此我们已证明 2 蕴含 3。

我们证明 3 蕴含 4。包含关系 $\mathrm{im}(A^*) \subset \ker(A)^\perp$ 直接由定义得出。为了证明反向包含，固定一个元素 $x^* \in \ker(A)^\perp$，使得对所有 $\xi \in \ker(A)$ 有 $\langle x^*, \xi \rangle = 0$。则
$$
|\langle x^*, x \rangle| = |\langle x^*, x + \xi \rangle| \le \|x^*\|_{X^*} \, \|x + \xi\|_X
$$
对所有 $x \in X$ 和所有 $\xi \in \ker(A)$ 成立。对所有 $\xi \in \ker(A)$ 取下确界，并利用 3 中的不等式 (2) 得到估计
$$
|\langle x^*, x \rangle| \le \|x^*\|_{X^*} \inf_{A\xi=0} \|x + \xi\|_X \le c \|x^*\|_{X^*} \|Ax\|_Y \tag{4}
$$
对所有 $x \in X$ 成立。由 (4) 和对偶像刻画引理可知 $x^* \in \mathrm{im}(A^*)$。这表明 3 蕴含 4。

4 蕴含 5 是因为任意子集在 $X$ 中的零化子都是 $X^*$ 中的弱\*闭子集。

5 蕴含 6 直接由“每个弱\*闭子集关于对偶空间上的算子范数诱导的强拓扑也是闭的”这一事实得出。

6 蕴含 7 来源于 2 蕴含 3（已证）并将算子 $A$ 替换为其对偶算子 $A^*$。

我们证明 7 蕴含 1。首先假设 $A$ 满足 7 且具有稠密值域。则由对偶性定理，$A^*$ 是单射，因此 7 中的不等式 (3) 变为
$$
\|y^*\|_{Y^*} \le c \|A^* y^*\|_{X^*} \quad \text{对所有 } y^* \in Y^*. \tag{5}
$$
定义 $\delta := c^{-1}$。我们证明：
$$
\{ y \in Y \mid \|y\| \le \delta \} \subset \overline{ \{ Ax \mid x \in X, \|x\|_X < 1 \} }. \tag{6}
$$
为此，注意到集合
$$
K := \overline{ \{ Ax \mid x \in X, \|x\|_X < 1 \} }
$$
是 $Y$ 中的一个闭凸子集。我们必须证明每个 $y \in Y \setminus K$ 的范数 $\|y\|_Y > \delta$。为此，固定一个元素 $y_0 \in Y \setminus K$。由 Hahn-Banach 分离定理，存在一个有界线性泛函 $y_0^*: Y \to \mathbb{R}$ 使得
$$
\langle y_0^*, y_0 \rangle > \sup_{y \in K} \langle y_0^*, y \rangle.
$$
这意味着
$$
\begin{aligned}
\|A^* y_0^*\|_{X^*} &= \sup_{\substack{x \in X \\ \|x\| < 1}} \langle A^* y_0^*, x \rangle \\
&= \sup_{\substack{x \in X \\ \|x\| < 1}} \langle y_0^*, Ax \rangle \\
&= \sup_{y \in K} \langle y_0^*, y \rangle \\
&< \langle y_0^*, y_0 \rangle \\
&\le \|y_0\|_Y \, \|y_0^*\|_{Y^*}
\end{aligned}
$$
因此，由 (5)，
$$
\|y_0\|_Y > \frac{\|A^* y_0^*\|_{X^*}}{\|y_0^*\|_{Y^*}} \ge \frac{1}{c} = \delta.
$$
这证明了 (6)。因此，由 Banach 空间满射性判据，$\{ y \in Y \mid \|y\| < \delta \} \subset \{ Ax \mid x \in X, \|x\|_X < 1 \}$。于是 $A$ 是满射的，所以 $\mathrm{im}(A) = Y = {}^\perp \ker(A^*)$，因为 $A^*$ 是单射的。这表明 7 蕴含 1，只要算子 $A$ 具有稠密值域。

现在假设 $A$ 满足 7 但不具有稠密值域。定义
$$
Y_0 := \overline{\mathrm{im}(A)}, \quad A_0 := A: X \to Y_0.
$$
于是 $A_0$ 与 $A$ 是同一个算子，但被视为目标空间更小的算子。对偶算子 $A_0^*: Y_0^* \to X^*$ 满足
$$
A_0^*(y^*|_{Y_0}) = A^* y^* \quad \text{对所有 } y^* \in Y^* \tag{7}
$$
根据定义。此外，对所有 $y^* \in Y^*$，我们有
$$
\|y^*\|_{Y_0^*} = \inf_{\eta^* \in \ker(A^*)} \|y^* + \eta^*\|_{Y^*} \le c \|A^* y^*\|_{X^*} = c \|A_0^*(y^*|_{Y_0})\|_{X^*}.
$$
这里我们使用了 7 中的不等式 (3) 和方程 (7)。因此，由证明的第一部分（稠密值域情形），算子 $A_0: X \to Y_0$ 是满射的。于是
$$
\mathrm{im}(A) = \mathrm{im}(A_0) = Y_0 = \overline{\mathrm{im}(A)} = {}^\perp (\mathrm{im}(A)^\perp) = {}^\perp \ker(A^*)
$$
由零化子基本性质和对偶性定理。这表明 7 蕴含 1，并完成了闭值域定理的证明。

### 推论（满射与单射的对偶性）

设 $X$ 和 $Y$ 为 Banach 空间，令 $A: X \to Y$ 为一个有界线性算子。则以下成立：

1. 算子 $A$ 是满射的当且仅当 $A^*$ 是单射的并且具有闭像。等价地，存在常数 $c > 0$ 使得
$$
\|y^*\|_{Y^*} \le c \|A^* y^*\|_{X^*} \quad \text{对所有 } y^* \in Y^*. 
$$

2. 算子 $A^*$ 是满射的当且仅当 $A$ 是单射的并且具有闭像。等价地，存在常数 $c > 0$ 使得
$$
\|x\|_X \le c \|Ax\|_Y \quad \text{对所有 } x \in X.
$$

#### 证明

算子 $A$ 具有稠密值域当且仅当 $A^*$ 是单射的，这是由对偶性定理得出的。因此，$A$ 是满射的当且仅当它具有闭值域且 $A^*$ 是单射的。因此，第 (i) 部分由闭值域定理中的条件 (vii) 蕴含 (i) 得出。

第 (ii) 部分是“像包含的对偶刻画”定理的一个特例，其中 $Z = X$ 且 $B = \mathrm{id}: X \to X$。或者，也可以像第 (i) 部分的证明一样进行论证：算子 $A^*$ 具有弱\*稠密值域当且仅当 $A$ 是单射的，这是由对偶性定理得出的。因此，$A^*$ 是满射的当且仅当它具有弱\*闭像且 $A$ 是单射的。因此，第 (ii) 部分由闭值域定理中的条件 (iii) 蕴含 (iv) 得出。

这证明了该推论。

### 推论(双射与等距映射的对偶性）)

设 $X$ 和 $Y$ 为 Banach 空间，令 $A: X \to Y$ 为一个有界线性算子。则以下成立：

1. $A$ 是双射的当且仅当 $A^*$ 是双射的。
2. 若 $A$ 是双射的，则 $(A^*)^{-1} = (A^{-1})^*$。
3. $A$ 是等距映射当且仅当 $A^*$ 是等距映射。

### 证明

我们证明第 (i) 部分。若 $A$ 是双射的，则 $A^*$ 是单射的（由对偶性定理），并且 $A$ 满足不等式 $\|Ax\|_Y \ge c \|x\|_X$（由逆算子定理），因此 $A^*$ 是满射的（由前述推论）。反之，若 $A^*$ 是双射的，则 $A$ 是单射的（由对偶性定理），并且 $A^*$ 满足不等式 $\|A^* y^*\|_{X^*} \ge c \|y^*\|_{Y^*}$（由逆算子定理），因此 $A$ 是满射的（由前述推论）。

我们证明第 (ii) 部分。假设 $A$ 是双射的，并定义 $B := A^{-1}: Y \to X$。则 $B$ 是一个有界线性算子（由逆算子定理），并且
$$
AB = \mathrm{id}_Y, \quad BA = \mathrm{id}_X.
$$
于是 $B^* A^* = (AB)^* = (\mathrm{id}_Y)^* = \mathrm{id}_{Y^*}$ 且 $A^* B^* = (BA)^* = (\mathrm{id}_X)^* = \mathrm{id}_{X^*}$（由对偶算子的基本性质）。这表明 $B^* = (A^*)^{-1}$。

我们证明第 (iii) 部分。假设 $A$ 和 $A^*$ 是双射的。则 $(A^*)^{-1} = (A^{-1})^*$（由第 (ii) 部分），因此 $\|A^*\| = \|A\|$ 且 $\|(A^*)^{-1}\| = \|A^{-1}\|$（由对偶算子范数等于原算子范数）。在此理解下，第 (iii) 部分源于以下事实：$A$ 是等距映射当且仅当 $\|A\| = \|A^{-1}\| = 1$。这证明了该推论。


