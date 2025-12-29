---
title: Ch 2.5 Banach 空间的自反性
tags:
  - math
  - functional analysis
categories:
  - math
  - functional analysis
index_img: /img/fa.jpg
banner_img: /img/fa.jpg
excerpt: 泛函分析课程笔记
abbrlink: 4e4e0a12
date: 2025-11-7 12:54:36
---
# 动机
在无穷维赋范空间$X$中，有界序列不一定存在按范数收敛的子序列。这为证明各类存在性问题（如微分方程解的存在性、泛函极值的存在性）带来了本质困难。考虑在索伯列夫空间 $H^1_0(0,1)$ 中最小化能量泛函 $J(u) = \frac{1}{2} \int_0^1 |u'(t)|^2 dt - \int_0^1 f(t)u(t) dt.$ 假设我们可以找到一个极小化序列 $\{u_n\}$，并且证明该序列在 $H^1_0$ 范数下是一致有界的。为了证明解的存在性，我们需要从这个有界序列中提取出一个收敛的子列，并证明其极限就是极小元。 然而，在无穷维空间 $H^1_0(0,1)$ 中，有界序列不一定包含按范数收敛的子列。因此，我们必须转向更弱的收敛方式——弱收敛。此时，我们面临的核心问题是：能否保证有界序列 $\{u_n\}$ 一定存在一个弱收敛的子列 $\{u_{n_k}\}$？引入自反空间的核心动机在于：自反Banach空间$X$（即自然嵌入映射$J: X \to X^{**}$是满射的空间）的闭单位球是弱紧的（由Banach-Alaoglu定理保证）。


# 二重对偶空间
## 定义（二重对偶空间）
设 $X$ 是一个实赋范向量空间。$X$ 的二重对偶空间是其对偶空间的对偶空间，记作

$$
X^{**} := (X^*)^* = \mathcal{L}(X^*, \mathbb{R}).
$$

存在一个自然映射 $\iota = \iota_X : X \to X^{**}$，它将每个元素 $x \in X$ 映射为线性泛函 $\iota(x) : X^* \to \mathbb{R}$，该泛函在 $x^* \in X^*$ 处的值通过在点 $x \in X$ 处取有界线性泛函 $x^* : X \to \mathbb{R}$ 的值得到。因此，映射 $\iota : X \to X^{**}$ 定义为

$$
\iota(x)(x^*) := \langle x^*, x \rangle
$$

其中 $x \in X$ 且 $x^* \in X^*$。由 Hahn–Banach 定理可知，线性映射 $\iota : X \to X^{**}$ 是一个等距嵌入。

## 引理（自然嵌入是等距的）
设 $X$ 是一个实赋范向量空间。则线性映射 $\iota : X \to X^{**}$ 是一个等距嵌入。特别地，

$$
\|x\| = \sup_{x^* \in X^* \setminus \{0\}} \frac{|\langle x^*, x \rangle|}{\|x^*\|}
$$

对所有 $x \in X$ 成立。

### 证明
映射 $\iota : X \to X^{**}$ 是线性的直接由定义得出。为证明它保持范数，固定一个非零向量 $x_0 \in X$。那么，根据Hahn-Banach 定理的推论，存在一个有界线性泛函 $x_0^* \in X^*$，使得 $\|x_0^*\| = 1$ 且 $\langle x_0^*, x_0 \rangle = \|x_0\|$。于是

$$
\|x_0\| = \frac{|\langle x_0^*, x_0 \rangle|}{\|x_0^*\|} \leq \|\iota(x_0)\| = \sup_{x^* \in X^* \setminus \{0\}} \frac{|\langle x^*, x_0 \rangle|}{\|x^*\|} \leq \|x_0\|.
$$


## 推论（商空间的范数）
设 $X$ 是一个实赋范向量空间，且 $Y \subset X$ 是一个闭线性子空间。则对于每个 $x \in X$，

$$
\inf_{y \in Y} \|x + y\| = \sup_{x^* \in Y^\perp \setminus \{0\}} \frac{|\langle x^*, x \rangle|}{\|x^*\|}.
$$

### 证明
方程左边是商空间 $X/Y$ 中等价类 $[x] = x + Y$ 的范数。右边是有界线性泛函

$$
\iota_{X/Y}(x + Y) : (X/Y)^* \cong Y^\perp \to \mathbb{R}
$$

的范数。因此方程可由引理将 $X$ 替换为 $X/Y$ 得出。

# 自反Banach空间

## 定义：自反Banach空间

一个实赋范向量空间 $X$ 被称为**自反的**，如果其自然等距嵌入 $\iota : X \to X^{**}$ 是满射（即双射）。一个自反的赋范向量空间必然是完备的，这由“完备性定理”得出。

## 定理：自反空间与其对偶及商空间的关系

设 $X$ 是一个Banach空间。则以下结论成立：

**1.** $X$ 是自反的当且仅当其对偶空间 $X^*$ 是自反的。

**2.** 如果 $X$ 是自反的，且 $Y \subset X$ 是一个闭线性子空间，则子空间 $Y$ 和商空间 $X/Y$ 都是自反的。

### 证明

我们先证明第 1. 部分。假设 $X$ 是自反的，并令 $\Lambda : X^{**} \to \mathbb{R}$ 是一个有界线性泛函。定义

$$
x^* := \Lambda \circ \iota : X \to \mathbb{R},
$$

其中 $\iota = \iota_X : X \to X^{**}$ 是前述的自然等距嵌入。由于 $X$ 是自反的，该映射 $\iota$ 是双射。固定一个元素 $x^{**} \in X^{**}$ 并定义

$$
x := \iota^{-1}(x^{**}) \in X.
$$

于是，

$$
\Lambda(x^{**}) = \Lambda \circ \iota(x) = \langle x^*, x \rangle = \langle \iota(x), x^* \rangle = \langle x^{**}, x^* \rangle.
$$

此处第一个和最后一个等式源于 $x^{**} = \iota(x)$ 的事实；第二个等式源于 $x^* = \Lambda \circ \iota$ 的定义；第三个等式源于映射 $\iota$ 的定义。这表明

$$
\Lambda = \iota_{X^*}(x^*),
$$

其中 $\iota_{X^*} : X^* \to X^{***}$ 是将 $X^*$ 视为原空间时的自然等距嵌入。这证明了对偶空间 $X^*$ 是自反的。

反之，假设 $X^*$ 是自反的。子空间 $\iota(X)$ 在 $X^{**}$ 中是完备的（根据“等距嵌入保持范数引理”），因此是闭的。我们接下来证明 $\iota(X)$ 在 $X^{**}$ 中是稠密的。为此，令 $\Lambda : X^{**} \to \mathbb{R}$ 是任意一个在 $\iota(X)$ 上消失的有界线性泛函，即 $\Lambda \circ \iota = 0$。由于 $X^*$ 是自反的，存在一个元素 $x^* \in X^*$，使得对所有 $x^{**} \in X^{**}$ 均有

$$
\Lambda(x^{**}) = \langle x^{**}, x^* \rangle.
$$

由于 $\Lambda \circ \iota = 0$，这意味着对所有 $x \in X$，

$$
\langle x^*, x \rangle = \langle \iota(x), x^* \rangle = \Lambda(\iota(x)) = 0,
$$

故 $x^* = 0$，从而 $\Lambda = 0$。因此，$\iota(X) \subset X^{**}$ 的零化子为零，根据“零化子与稠密性推论”，$\iota(X)$ 在 $X^{**}$ 中是稠密的。结合其闭性，可得 $\iota(X) = X^{**}$，这完成了第 1. 部分的证明。


我们接着证明第 2. 部分。假设 $X$ 是自反的，且 $Y \subset X$ 是一个闭线性子空间。我们首先证明 $Y$ 是一个自反Banach空间。

定义线性算子 $\pi : X^* \to Y^*$ 为

$$
\pi(x^*) := x^*|_Y, \quad \text{对于 } x^* \in X^*.
$$

固定一个元素 $y^{**} \in Y^{**}$，并定义 $x^{**} \in X^{**}$ 为

$$
x^{**} := y^{**} \circ \pi : X^* \to \mathbb{R}.
$$

由于 $X$ 是自反的，存在唯一的元素 $y \in X$ 使得

$$
\iota_X(y) = x^{**}.
$$

每个满足 $x^* \in Y^\perp$ 的元素都满足 $\pi(x^*) = 0$，因而

$$
\begin{aligned}
\langle x^*, y \rangle &= \langle \iota_X(y), x^* \rangle \\
&= \langle x^{**}, x^* \rangle \\
&= \langle y^{**} \circ \pi, x^* \rangle \\
&= \langle y^{**}, \pi(x^*) \rangle \\
&= 0.
\end{aligned}
$$

换句话说，对所有 $x^* \in Y^\perp$，都有 $\langle x^*, y \rangle = 0$，因此由“正交补与闭包推论”可知

$$
y \in \overline{Y} = Y.
$$

现在固定任意元素 $y^* \in Y^*$。根据“限制泛函存在性推论”，存在一个元素 $x^* \in X^*$，使得

$$
y^* = x^*|_Y = \pi(x^*)
$$

并且

$$
\begin{aligned}
\langle y^{**}, y^* \rangle &= \langle y^{**}, \pi(x^*) \rangle \\
&= \langle x^{**}, x^* \rangle \\
&= \langle \iota(y), x^* \rangle \\
&= \langle x^*, y \rangle \\
&= \langle y^*, y \rangle.
\end{aligned}
$$

这表明

$$
\iota_Y(y) = y^{**}.
$$

由于 $y^{**} \in Y^{**}$ 是任意选取的，这证明了子空间 $Y$ 是一个自反Banach空间。

最后，我们证明商空间 $Z := X/Y$ 是自反的。令

$$
\pi : X \to X/Y
$$

为典范投影，定义为

$$
\pi(x) := [x] = x + Y, \quad \text{对于 } x \in X,
$$

并定义线性算子 $T : Z^* \to Y^\perp$ 为

$$
Tz^* := z^* \circ \pi : X \to \mathbb{R}, \quad \text{对于 } z^* \in Z^*.
$$

注意 $Tz^* \in Y^\perp$，因为 $(Tz^*)(y) = z^*(\pi(y)) = 0$ 对所有 $y \in Y$ 成立。此外，由“商空间对偶同构推论”，$T$ 是一个等距同构。

现在固定一个元素 $z^{**} \in Z^{**}$。那么映射

$$
z^{**} \circ T^{-1} : Y^\perp \to \mathbb{R}
$$

是在 $X^*$ 的线性子空间 $Y^\perp$ 上的一个有界线性泛函。因此，根据Hahn-Banach，存在一个有界线性泛函 $x^{**} : X^* \to \mathbb{R}$，使得对所有 $x^* \in Y^\perp$，

$$
\langle x^{**}, x^* \rangle = \langle z^{**}, T^{-1}x^* \rangle.
$$

这个关于 $x^{**}$ 的条件可以写成如下形式：

$$
\langle x^{**}, z^* \circ \pi \rangle = \langle z^{**}, z^* \rangle \quad \text{对于所有 } z^* \in Z^*.
$$

由于 $X$ 是自反的，存在一个元素 $x \in X$，使得

$$
\iota_X(x) = x^{**}.
$$

定义

$$
z := [x] = \pi(x) \in Z.
$$

那么，对所有 $z^* \in Z^*$，我们有

$$
\begin{aligned}
\langle z^{**}, z^* \rangle &= \langle x^{**}, z^* \circ \pi \rangle \\
&= \langle \iota(x), z^* \circ \pi \rangle \\
&= \langle z^* \circ \pi, x \rangle \\
&= \langle z^*, \pi(x) \rangle \\
&= \langle z^*, z \rangle.
\end{aligned}
$$

这表明

$$
\iota_Z(z) = z^{**}.
$$

由于 $z^{**} \in Z^{**}$ 是任意选取的，这说明 $Z$ 是自

## 实例：自反与非自反空间的例子

**1.** 每一个有限维赋范向量空间 $X$ 都是自反的，因为 $\dim X = \dim X^* = \dim X^{**}$（参见“有限维空间对偶维数推论”）。

**2.** 每一个Hilbert空间 $H$ 都是自反的。

**3.** 设 $(M, \mathcal{A}, \mu)$ 是一个测度空间，且令 $1 < p, q < \infty$ 满足

$$
\frac{1}{p} + \frac{1}{q} = 1.
$$

那么 $L^p(\mu)^* \cong L^q(\mu)$（参见“$L^p$ 空间对偶性示例”），这蕴含Banach空间 $L^p(\mu)$ 是自反的。练习：证明同构复合映射 $L^p(\mu) \cong L^q(\mu)^* \cong L^p(\mu)^{**}$ 正好是自然嵌入映射 。

**4.** 设 $c_0 \subset \ell^\infty$ 是所有收敛于零的实数序列 $x = (x_i)_{i \in \mathbb{N}}$ 构成的子空间，配备上确界范数。那么映射 $\ell^1 \to c_0^*$: $y \mapsto \Lambda_y$，它将每个序列 $y = (y_i)_{i \in \mathbb{N}} \in \ell^1$ 映射为有界线性泛函 $\Lambda_y : c_0 \to \mathbb{R}$，其定义为 $\Lambda_y(x) := \sum_{i=1}^\infty x_i y_i$（其中 $x = (x_i)_{i \in \mathbb{N}} \in c_0$），是一个Banach空间等距同构（参见“$\ell^1$ 与 $c_0^*$ 的等距同构示例”）。这蕴含 $c_0^{**} \cong (\ell^1)^* \cong \ell^\infty$（参见“$\ell^1$ 对偶是 $\ell^\infty$ 的示例”），因此 $c_0$ 不是自反的。练习：自然嵌入映射 $\iota: c_0 \to c_0^{**}$ 与Banach空间等距同构 $c_0^{**} \cong \ell^\infty$ 的复合映射，正是典范包含映射 $c_0 \hookrightarrow \ell^\infty$。

**(v)** Banach空间 $\ell^1$ 不是自反的。为了说明这一点，记 $c \subset \ell^\infty$ 为所有实数柯西序列构成的空间，并考虑有界线性泛函，它将每个柯西序列 $x = (x_i)_{i \in \mathbb{N}} \in c$ 映射为其极限 $\lim_{i \to \infty} x_i$。根据 Hahn–Banach 定理，该泛函可以延拓为一个有界线性泛函 $\Lambda : \ell^\infty \to \mathbb{R}$（参见“Hahn–Banach 延拓推论”），而这个延拓泛函不属于自然嵌入映射 $\iota : \ell^1 \to (\ell^1)^{**} \cong (\ell^\infty)^*$ 的像。

**5.** 设 $(M, d)$ 是一个紧度量空间，令 $X = C(M)$ 为 $M$ 上所有连续实值函数构成的Banach空间，配备上确界范数（参见“连续函数空间示例”的第 (v) 部分）。假设 $M$ 是一个无限集。那么 $C(M)$ 不是自反的。为了说明这一点，设 $A = \{a_1, a_2, \dots\} \subset M$ 是一个可数无限子集，使得 $(a_i)_{i \in \mathbb{N}}$ 是一个柯西序列，且当 $i \ne j$ 时 $a_i \ne a_j$。则 $C_A(M) := \{f \in C(M) \mid f|_A = 0\}$ 是 $C(M)$ 的一个闭线性子空间，商空间 $C(M)/C_A(M)$ 通过映射 $[f] \mapsto (f(a_i))_{i=1}^\infty$ 等距同构于实数柯西序列空间 $c$。根据“自反空间与其对偶及商空间的关系”定理，由于闭子空间 $c_0 \subset c$ 不是自反的（如 (iv) 所述），所以 $c$ 也不是自反的；进而 $C(M)/C_A(M)$ 不是自反的，因此由“自反空间与其对偶及商空间的关系”定理可知，$C(M)$ 本身不是自反的。

**6.** 在 (vi) 中讨论的Banach空间 $C(M)$ 的对偶空间同构于 $M$ 上带符号的博雷尔测度构成的Banach空间 $\mathcal{M}(M)$（参见“连续函数对偶是测度空间示例”）。由于 $C(M)$ 不是自反的，根据“自反空间与其对偶及商空间的关系”定理，空间 $\mathcal{M}(M)$ 也不是自反的。

> **注**：在 6 和 7 中，我们多次引用了“自反空间与其对偶及商空间的关系”定理。这是因为该定理建立了原空间、其子空间和商空间自反性之间的逻辑联系：若一个空间自反，则其闭子空间和商空间也自反；反之，若某个商空间或子空间不自反，则原空间也不自反。在 6 中，我们通过构造一个不自反的商空间来证明 $C(M)$ 不自反；在 7 中，我们利用 $C(M)$ 的非自反性推断其对偶空间 $\mathcal{M}(M)$ 亦非自反——这直接源于该定理的第 1. 部分：“$X$ 自反当且仅当 $X^*$ 自反”。


# 可分Banach空间

可分的赋范向量空间是指包含一个可数稠密子集的空间。因此，Banach空间 $X$ 是可分的当且仅当存在一个序列 $e_1, e_2, e_3, \dots$ 在 $X$ 中，使得所有 $e_i$ 的（有限）线性组合所构成的线性子空间在 $X$ 中是稠密的。如果这样的序列存在，则所需的可数稠密子集可以构造为所有 $e_i$ 的有理线性组合的集合。

## 定理（可分空间与其对偶空间的关系）

设 $X$ 是一个赋范向量空间。以下结论成立：

1. 如果 $X^*$ 是可分的，则 $X$ 是可分的。

2. 如果 $X$ 是自反的且可分的，则 $X^*$ 是可分的。

### 证明

我们先证明第 1. 部分。假设 $X^*$ 是可分的，并选取 $X^*$ 中的一个稠密序列 $(x_i^*)_{i \in \mathbb{N}}$。选择序列 $x_i \in X$ 使得
$$
\|x_i\| = 1, \quad \langle x_i^*, x_i \rangle \ge \frac{1}{2} \|x_i^*\| \quad \text{对所有 } i \in \mathbb{N}.
$$
令 $Y \subset X$ 是所有 $x_i$ 的有限线性组合构成的线性子空间。我们证明 $Y$ 在 $X$ 中是稠密的。为此，任取元素 $x^* \in Y^\perp$。则存在序列 $i_k \in \mathbb{N}$ 使得 $\lim_{k \to \infty} \|x^* - x_{i_k}^*\| = 0$。这意味着
$$
\begin{aligned}
\|x_{i_k}^*\| &\le 2 |\langle x_{i_k}^*, x_{i_k} \rangle| = 2 |\langle x_{i_k}^* - x^*, x_{i_k} \rangle| \\
&\le 2 \|x_{i_k}^* - x^*\| \|x_{i_k}\| = 2 \|x_{i_k}^* - x^*\|.
\end{aligned}
$$
右边的最后一项当 $k$ 趋于无穷时趋于零，因此 $x^* = \lim_{k \to \infty} x_{i_k}^* = 0$。这表明 $Y^\perp = \{0\}$。因此 $Y$ 在 $X$ 中是稠密的，这就证明了第 1. 部分。如果 $X$ 是自反的且可分的，则 $X^{**}$ 是可分的，因此由第 1. 部分可知 $X^*$ 是可分的。

## 例

1. 有限维Banach空间是可分的。

2. 对于 $1 \le p < \infty$，空间 $\ell^p$ 是可分的，而 $(\ell^1)^* \cong \ell^\infty$ 不是可分的。所有收敛到零的序列构成的子空间 $c_0 \subset \ell^\infty$ 是可分的。

3. 设 $M$ 是一个第二可数的局部紧豪斯多夫空间，记 $\mathcal{B} \subset 2^M$ 为其Borel $\sigma$-代数，并设 $\mu : \mathcal{B} \to [0,\infty]$ 为一个局部有限的Borel测度。那么对于 $1 \le p < \infty$，空间 $L^p(\mu)$ 是可分的

4. 设 $(M,d)$ 是一个紧致度量空间。则具有上确界范数的连续函数空间 $C(M)$ 是可分的。其对偶空间 $\mathcal{M}(M)$（即符号Borel测度空间）通常不是可分的。


# James空间

1950 年，James发现了一个非自反Banach空间 $J$ 的显著例子，该空间与其二重对偶空间 $J^{**}$ 等距同构。在这个例子中，典范等距嵌入
$$
\iota: J \to J^{**}
$$
是一个余维数为一的闭子空间。

回忆 $c_0 \subset \ell^\infty$ 是装备了上确界范数的所有收敛到零的实数序列 $(x_i)_{i \in \mathbb{N}} \in \mathbb{R}^{\mathbb{N}}$ 构成的Banach空间：
$$
\|x\|_\infty := \sup_{i \in \mathbb{N}} |x_i| \quad \text{对 } x = (x_i)_{i \in \mathbb{N}} \in c_0.
$$
$c_0$ 的对偶空间与装备了范数
$$
\|x\|_1 := \sum_{i=1}^\infty |x_i| \quad \text{对 } x = (x_i)_{i \in \mathbb{N}} \in \ell^1
$$
的绝对可求和实数序列空间 $\ell^1$ 同构。

同样回忆，$\ell^2$ 是装备了范数
$$
\|x\|_2 := \left( \sum_{i=1}^\infty |x_i|^2 \right)^{1/2} \quad \text{对 } x = (x_i)_{i \in \mathbb{N}} \in \ell^2
$$
的所有平方可求和实数序列构成的Hilbert空间。

## 定义（James空间）

令 $\mathcal{P} \subset 2^{\mathbb{N}}$ 表示 $\mathbb{N}$ 的所有非空有限子集的集合，并将 $\mathcal{P}$ 中的元素写成 $\mathbf{p} = (p_1, p_2, \dots, p_k)$ 的形式，其中 $1 \le p_1 < p_2 < \cdots < p_k$。对于每个 $\mathbf{p} = (p_1, p_2, \dots, p_k) \in \mathcal{P}$ 和每个实数序列 $x = (x_i)_{i \in \mathbb{N}}$，通过当 $k=1$ 时定义 $\|x\|_{\mathbf{p}} := 0$，以及当 $k \ge 2$ 时定义
$$
\|x\|_{\mathbf{p}} := \sqrt{ \frac{1}{2} \left( \sum_{j=1}^{k-1} |x_{p_j} - x_{p_{j+1}}|^2 + |x_{p_k} - x_{p_1}|^2 \right) }
$$
来确定一个数 $\|x\|_{\mathbf{p}} \in [0, \infty)$。James空间是由下式定义的赋范向量空间：
$$
J := \left\{ x \in c_0 \,\middle|\, \sup_{\mathbf{p} \in \mathcal{P}} \|x\|_{\mathbf{p}} < \infty \right\}
$$
并且
$$
\|x\|_J := \sup_{\mathbf{p} \in \mathcal{P}} \|x\|_{\mathbf{p}}
$$
对 $x \in J$ 成立。

我们先探讨James空间的一些基本性质。这是接下来五个引理的内容。

## 引理（James空间的基本性质）

集合 $J$ 是 $c_0$ 的一个线性子空间，且 $\|\cdot\|_J$ 是 $J$ 上的一个范数。此外，
$$
\|x\|_\infty \le \|x\|_J \le \sqrt{2} \|x\|_2 \quad \text{对所有 } x \in c_0,
$$
因此 $\ell^2 \subset J \subset c_0$。

### 证明

根据定义，对所有 $x, y \in c_0$ 和所有 $\lambda \in \mathbb{R}$，有 $\|x+y\|_J \le \|x\|_J + \|y\|_J$ 且 $\|\lambda x\|_J = |\lambda| \|x\|_J$。因此 $J$ 是 $c_0$ 的一个线性子空间。

为了证明第一个不等式，固定一个元素 $\mathbf{p} = (i,j) \in \mathcal{P}$。那么对所有 $x \in c_0$ 和所有满足 $i < j$ 的 $i, j \in \mathbb{N}$，有 $|x_i - x_j| = \|x\|_{\mathbf{p}} \le \|x\|_J$。因此对所有 $x \in c_0$ 和所有 $i \in \mathbb{N}$，有 $|x_i| = \lim_{j \to \infty} |x_i - x_j| \le \|x\|_J$。现在固定任意元素 $\mathbf{p} = (p_1, p_2, \dots, p_k) \in \mathcal{P}$。那么
$$
\begin{aligned}
\|x\|_{\mathbf{p}}^2 &= \frac{1}{2} \sum_{j=1}^{k-1} |x_{p_j} - x_{p_{j+1}}|^2 + \frac{1}{2} |x_{p_k} - x_{p_1}|^2 \\
&\le \sum_{j=1}^{k-1} |x_{p_j}|^2 + \sum_{j=1}^{k-1} |x_{p_{j+1}}|^2 + |x_{p_k}|^2 + |x_{p_1}|^2 \\
&= 2 \sum_{j=1}^{k} |x_{p_j}|^2 \le 2 \|x\|_2^2
\end{aligned}
$$
对所有 $x \in c_0$ 成立。对所有 $\mathbf{p} \in \mathcal{P}$ 取上确界得到 $\|x\|_J \le \sqrt{2} \|x\|_2$ 于是存在自然包含关系 $\ell^2 \subset J \subset c_0$。此外，对每个 $x \in J \setminus \{0\}$，有 $\|x\|_J \neq 0$，因此 $(J, \|\cdot\|_J)$ 是一个赋范向量空间。

我们证明 $J$ 是完备的。设 $(x_n)_{n \in \mathbb{N}}$ 是 $J$ 中的一个柯西序列。那么 $(\|x_n\|_J)_{n \in \mathbb{N}}$ 是 $\mathbb{R}$ 中的一个柯西序列，因此极限 $C := \lim_{n \to \infty} \|x_n\|_J$ 存在。此外，$(x_n)_{n \in \mathbb{N}}$ 是 $c_0$ 中的一个柯西序列（因此它在上确界范数下收敛到某个元素 $x \in c_0$。于是
$$
\|x\|_{\mathbf{p}} = \lim_{n \to \infty} \|x_n\|_{\mathbf{p}} \le \lim_{n \to \infty} \|x_n\|_J = C
$$
对所有 $\mathbf{p} \in \mathcal{P}$ 成立。对所有 $\mathbf{p} \in \mathcal{P}$ 取上确界得到 $x \in J$。我们必须证明 $\lim_{n \to \infty} \|x_n - x\|_J = 0$。为此，固定一个数 $\varepsilon > 0$ 并选择一个整数 $n_0 \in \mathbb{N}$，使得对所有整数 $m,n \ge n_0$，有 $\|x_n - x_m\|_J < \varepsilon / 2$。那么对所有 $\mathbf{p} \in \mathcal{P}$ 和所有 $n \ge n_0$，有 $\|x_n - x\|_{\mathbf{p}} = \lim_{m \to \infty} \|x_n - x_m\|_{\mathbf{p}} \le \sup_{m \ge n_0} \|x_n - x_m\|_J \le \varepsilon / 2$。因此，对每个整数 $n \ge n_0$，有 $\|x_n - x\|_J = \sup_{\mathbf{p} \in \mathcal{P}} \|x_n - x\|_{\mathbf{p}} \le \varepsilon / 2 < \varepsilon$。这表明 $\lim_{n \to \infty} \|x_n - x\|_J = 0$，从而证明了 $J$ 是完备的。

下一个目标是证明 $\ell^2$ 在 $J$ 中是稠密的。为此，引入 $J$ 上的另一个范数会很方便。对于每个实数序列 $x = (x_i)_{i \in \mathbb{N}}$ 和每个 $\mathbf{p} = (p_1, p_2, \dots, p_k) \in \mathcal{P}$，在 $k=1$ 时定义 $\||x\||_{\mathbf{p}} := |x_{p_1}|$，在 $k \ge 2$ 时定义
$$
\||x\||_{\mathbf{p}} := \sqrt{ \frac{1}{2} \left( |x_{p_1}|^2 + \sum_{j=1}^{k-1} |x_{p_j} - x_{p_{j+1}}|^2 + |x_{p_k}|^2 \right) }.
$$
将这些数值对所有 $\mathbf{p} \in \mathcal{P}$ 取上确界，记为
$$
\||x\||_J := \sup_{\mathbf{p} \in \mathcal{P}} \||x\||_{\mathbf{p}}.
$$
这是 $J$ 上的一个范数，它与 $\|\cdot\|_J$ 等价。需要注意的是，下面不等式中的第二个估计仅对 $x \in c_0$ 成立，而并非对所有 $x \in \ell^\infty$ 成立。

## 引理（James空间中另一个等价范数）

每个 $x \in c_0$ 都满足以下不等式：
$$
\frac{1}{\sqrt{2}} \|x\|_J \le \||x\||_J \le \|x\|_J.
$$
此外，函数 $J \to [0, \infty) : x \mapsto \||x\||_J$ 是一个范数。

### 证明

令 $x \in c_0$ 且 $\mathbf{p} = (p_1, \dots, p_k) \in \mathcal{P}$。那么
$$
\begin{aligned}
\|x\|_{\mathbf{p}}^2 &= \frac{1}{2} \left( \sum_{j=1}^{k} |x_{p_j} - x_{p_{j+1}}|^2 + |x_{p_k} - x_{p_1}|^2 \right) \\
&\le \sum_{j=1}^{k} |x_{p_j} - x_{p_{j+1}}|^2 + |x_{p_k}|^2 + |x_{p_1}|^2 \\
&= 2 \||x\||_{\mathbf{p}}^2 \le 2 \|x\|_2^2.
\end{aligned}
$$
对所有 $\mathbf{p} \in \mathcal{P}$ 取上确界得到不等式 $\|x\|_J \le \sqrt{2} \||x\||_J$。

现在，对每个整数 $n > p_k$，定义 $\mathbf{q}_n := (p_1, \dots, p_k, n)$。那么
$$
\begin{aligned}
\||x\||_{\mathbf{p}}^2 &= \frac{1}{2} \left( \sum_{j=1}^{k} |x_{p_j} - x_{p_{j+1}}|^2 + |x_{p_k}|^2 + |x_{p_1}|^2 \right) \\
&= \lim_{n \to \infty} \frac{1}{2} \left( \sum_{j=1}^{k} |x_{p_j} - x_{p_{j+1}}|^2 + |x_{p_k} - x_n|^2 + |x_n - x_{p_1}|^2 \right) \\
&= \lim_{n \to \infty} \|x\|_{\mathbf{q}_n}^2 \le \|x\|_J^2.
\end{aligned}
$$
对所有 $\mathbf{p} \in \mathcal{P}$ 取上确界得到不等式 $\||x\||_J \le \|x\|_J$。


## 引理（$\ell^2$ 在 James 空间中稠密）

子空间 $\ell^2$ 在 $J$ 中是稠密的。

### 证明

固定一个非零元素 $x \in J$ 和一个实数 $\varepsilon > 0$，并选取一个常数 $0 < \delta < \||x\||_J$，使得
$$
2\delta \||x\||_J < \varepsilon^2.
$$
我们断言：存在自然数 $n$ 和元组 $\mathbf{p} = (p_1, \dots, p_k) \in \mathcal{P}$，满足
$$
\sup_{i \ge n} |x_i| < \delta, \quad \||x\||_{\mathbf{p}} > \||x\||_J - \delta, \quad p_k = n.
$$
具体地，先选择 $n \in \mathbb{N}$ 使得 $\sup_{i \ge n} |x_i| < \delta$，并选择 $\mathbf{p}_0 = (p_1, \dots, p_{k-1}) \in \mathcal{P}$ 使得 $\||x\||_{\mathbf{p}_0} > \||x\||_J - \delta$。接着选择 $p_k > p_{k-1}$ 足够大，使得 $p_k \ge n$，且元组 $\mathbf{p} := (p_1, \dots, p_k)$ 满足
$$
\||x\||_{\mathbf{p}} = \sqrt{ \||x\||_{\mathbf{p}_0}^2 - \frac{1}{2}|x_{p_{k-1}}|^2 + \frac{1}{2}|x_{p_{k-1}} - x_{p_k}|^2 + \frac{1}{2}|x_{p_k}|^2 } > \||x\||_J - \delta.
$$
如有必要，可进一步增大 $n$ 以确保 $p_k = n$。

定义 $\xi := (x_1, \dots, x_n, 0, \dots)$。我们来证明
$$
\||x - \xi\||_J < \varepsilon.
$$
为此，令 $\mathbf{q} = (q_1, \dots, q_\ell) \in \mathcal{P}$。若 $q_\ell \le n$，则 $\|x - \xi\|_{\mathbf{q}} = 0$。因此假设 $q_\ell > n$，令 $j \in \{1, \dots, \ell\}$ 为满足 $q_j > n$ 的最小下标，并定义 $\mathbf{q}' := (q_j, q_{j+1}, \dots, q_\ell) \in \mathcal{P}$。那么
$$
\|x - \xi\|_{\mathbf{q}} = \|x\|_{\mathbf{q}'}.
$$
现在考虑元组 $\mathbf{p}' := (p_1, \dots, p_k, q_j, q_{j+1}, \dots, q_\ell) \in \mathcal{P}$。由前述条件，它满足不等式
$$
\begin{aligned}
\||x\||_J^2 &\ge \||x\||_{\mathbf{p}'}^2 \\
&= \||x\||_{\mathbf{p}}^2 + \||x\||_{\mathbf{q}'}^2 + \frac{1}{2}|x_{p_k} - x_{q_j}|^2 - \frac{1}{2}|x_{p_k}|^2 - \frac{1}{2}|x_{q_j}|^2 \\
&> (\||x\||_J - \delta)^2 - \delta^2 + \||x\||_{\mathbf{q}'}^2 \\
&= \||x\||_J^2 - 2\delta \||x\||_J + \||x\||_{\mathbf{q}'}^2.
\end{aligned}
$$
这蕴含 $\||x\||_{\mathbf{q}'}^2 < 2\delta \||x\||_J$，从而
$$
\|x - \xi\|_{\mathbf{q}} = \||x\||_{\mathbf{q}'} < \sqrt{2\delta \||x\||_J} < \varepsilon,
$$
其中最后一步使用了前面关于 $\delta$ 和 $\varepsilon$ 的选取以及上述等式。对所有 $\mathbf{q} \in \mathcal{P}$ 取上确界，即得不等式 $\||x - \xi\||_J < \varepsilon$。由此可知，所有有限支撑序列构成的集合 $c_{00}$ 在 $J$ 中是稠密的，而 $\ell^2$ 作为包含 $c_{00}$ 的闭子空间，自然也是稠密的。这就完成了引理的证明。

以下引理表明，标准基向量 $e_i := (\delta_{ij})_{j \in \mathbb{N}}$ 构成 $J$ 的一个 Schauder 基。

## 引理（James空间的Schauder基）
对每个 $ n \in \mathbb{N} $，定义投影算子 $ \Pi_n : J \to J $ 为
$$
\Pi_n(x) := \sum_{i=1}^n x_i e_i, \quad \text{其中 } x = (x_i)_{i \in \mathbb{N}} \in J.
\tag{*}
$$
那么，
$$
\|\Pi_n(x)\|_J \le \|x\|_J, \quad \|x - \Pi_n(x)\|_J \le \|x\|_J
\tag{†}
$$
对所有 $ n \in \mathbb{N} $ 和所有 $ x \in J $ 成立，并且
$$
\lim_{n \to \infty} \|x - \Pi_n(x)\|_J = 0
\tag{‡}
$$
对所有 $ x \in J $ 成立。


### 证明

我们先证明不等式 (†)。固定一个元素 $ x \in J $、一个正整数 $ n $，以及一个元组 $ \mathbf{p} = (p_1, \dots, p_k) \in \mathcal{P} $。若 $ p_k \le n $，则 $ \|\Pi_n(x)\|_{\mathbf{p}} = \|x\|_{\mathbf{p}} $；若 $ p_1 > n $，则 $ \|\Pi_n(x)\|_{\mathbf{p}} = 0 $。因此，我们可假设
$$
p_1 \le n < p_k.
$$
令 $ \ell \in \{1, \dots, k-1\} $ 为满足 $ p_\ell \le n $ 的最大下标，并定义 $ \mathbf{q} := (p_1, \dots, p_\ell) $。于是有
$$
\begin{aligned}
\|\Pi_n(x)\|_{\mathbf{p}}^2 &= \|x\|_{\mathbf{q}}^2 - \frac{1}{2}|x_{p_\ell} - x_{p_1}|^2 + \frac{1}{2}|x_{p_\ell}|^2 + \frac{1}{2}|x_{p_1}|^2 \\
&= \||x\||_{\mathbf{q}}^2 \\
&\le \||x\||_J^2,
\end{aligned}
$$
其中最后一步由前文引理（关于范数的单调性）保证。因此，对任意 $ \mathbf{p} \in \mathcal{P} $，都有 $ \|\Pi_n(x)\|_{\mathbf{p}} \le \|x\|_J $，从而第一个不等式成立。

接下来证明第二个不等式。注意到当 $ p_1 > n $ 时，$ \|x - \Pi_n(x)\|_{\mathbf{p}} = \|x\|_{\mathbf{p}} $；当 $ p_k \le n $ 时，$ \|x - \Pi_n(x)\|_{\mathbf{p}} = 0 $。因此，我们假设 $ p_1 \le n < p_k $，并令 $ \ell \in \{2, \dots, k\} $ 为满足 $ p_\ell > n $ 的最小下标，再定义 $ \mathbf{q} := (p_\ell, \dots, p_k) $。于是
$$
\begin{aligned}
\|x - \Pi_n(x)\|_{\mathbf{p}}^2 &= \|x\|_{\mathbf{q}}^2 - \frac{1}{2}|x_{p_\ell} - x_{p_k}|^2 + \frac{1}{2}|x_{p_\ell}|^2 + \frac{1}{2}|x_{p_k}|^2 \\
&= \||x\||_{\mathbf{q}}^2 \\
&\le \||x\||_J^2,
\end{aligned}
$$
同样由前述引理保证。因此，对任意 $ \mathbf{p} \in \mathcal{P} $，都有 $ \|x - \Pi_n(x)\|_{\mathbf{p}} \le \|x\|_J $，从而第二个不等式也成立。

现在我们证明极限关系 (‡)。当 $ x \in \ell^2 $ 时，这直接由前面引理中给出的估计 (†) 以及 $\ell^2$ 在 $J$ 中稠密的事实推出。由于 $ \ell^2 $ 在 $ J $ 中是稠密的（如前一引理所证），并且投影算子族 $ \{\Pi_n\} $ 在 $ J $ 上一致有界（由 (†) 知其算子范数不超过 1），根据 **Banach–Steinhaus 定理**，我们可以将收敛性从稠密子空间 $ \ell^2 $ 延拓到整个空间 $ J $。即，对任意 $ x \in J $，有
$$
\lim_{n \to \infty} \|x - \Pi_n(x)\|_J = 0.
$$


# James空间的对偶空间

在完成上述准备后，我们便可以考察James空间$J$的对偶空间。固定一个有界线性泛函$\Lambda: J \to \mathbb{R}$。根据之前的结论，包含映射$\ell^2 \hookrightarrow J$是一个有界线性算子，并且其像在$J$中是稠密的。因此，$\Lambda$与该包含映射的复合是一个从$\ell^2$到$\mathbb{R}$的有界线性泛函$\Lambda|_{\ell^2}: \ell^2 \to \mathbb{R}$。于是，由Riesz表示定理可知，存在唯一的序列$y = (y_i)_{i \in \mathbb{N}} \in \ell^2$，使得
$$
\Lambda(x) = \sum_{i=1}^{\infty} y_i x_i = \langle y, x \rangle \quad \text{对所有 } x \in \ell^2 \subset J,
$$
并且，反过来，$\Lambda$由这个序列$y \in \ell^2$唯一确定。因此，$J$的对偶空间可以被等同于所有满足以下条件的$y \in \ell^2$构成的空间：
$$
\|y\|_{J^*} := \sup_{0 \neq x \in \ell^2} \frac{|\langle y, x \rangle|}{\|x\|_J} < \infty.
$$
根据之前的结论，每个$y \in J^*$都满足不等式
$$
\frac{1}{\sqrt{2}} \|y\|_2 \le \|y\|_{J^*} \le \|y\|_1.
$$
因此，存在典范包含关系
$$
\ell^1 \subset J^* \subset \ell^2 \subset J \subset c_0.
$$

此时，引入两个将在后续章节中介绍的概念会很方便。它们分别是：有界线性算子$A: X \to Y$的对偶算子$A^*: Y^* \to X^*$，以及Banach空间对偶空间上的弱*拓扑。一个有用的性质是，对偶算子的算子范数与原算子的算子范数相同。在我们将$J^*$等同于$\ell^2$的一个子空间的情况下，投影算子$\Pi_n: J \to J$的对偶算子是算子
$$
\Pi_n: J^* \to J^*, \quad \Pi_n(y) := \sum_{i=1}^{n} y_i e_i \quad \text{对于 } y = (y_i)_{i \in \mathbb{N}} \in J^*.
$$
因此，根据之前的估计可知，
$$
\|\Pi_n(y)\|_{J^*} \le \|y\|_{J^*}, \quad \|y - \Pi_n(y)\|_{J^*} \le \|y\|_{J^*}
$$
对所有$y \in J^*$和所有$n \in \mathbb{N}$成立。此外，$c_0$的对偶空间可以被等同于$\ell^1$，而包含映射$J \hookrightarrow c_0$的对偶算子就是包含映射$\ell^1 \hookrightarrow J^*$。因此，根据一般性考虑可知，$\ell^1$在$J^*$中关于弱*拓扑是稠密的。下面的引理表明，$\ell^1$在$J^*$中关于范数拓扑也是稠密的。

## 引理（James空间对偶空间中Schauder基的收敛性）

每个$y \in J^*$都满足
$$
\lim_{n \to \infty} \|y - \Pi_n(y)\|_{J^*} = 0.
$$

### 证明

固定一个元素$y \in J^*$。我们证明
$$
\varepsilon_n := \|y - \Pi_n(y)\|_{J^*} = \sup_{\substack{0 \neq x \in J \\ \Pi_n(x) = 0}} \frac{|\langle y, x \rangle|}{\|x\|_J} \ge \varepsilon_{n+1}
$$
对所有$n \in \mathbb{N}$成立。为此，固定一个整数$n \in \mathbb{N}$，并回忆之前引理中的结论：对所有$x \in J$，有$\|x - \Pi_n(x)\|_J \le \|x\|_J$。于是
$$
\begin{aligned}
\|y - \Pi_n(y)\|_{J^*} &= \sup_{0 \neq x \in J} \frac{|\langle y - \Pi_n(y), x \rangle|}{\|x\|_J} \\
&\le \sup_{\substack{x \in J \\ \Pi_n(x) \neq x}} \frac{|\langle y, x - \Pi_n(x) \rangle|}{\|x - \Pi_n(x)\|_J} \\
&= \sup_{\substack{0 \neq x \in J \\ \Pi_n(x) = 0}} \frac{|\langle y, x \rangle|}{\|x\|_J} \\
&\le \sup_{0 \neq x \in J} \frac{|\langle y - \Pi_n(y), x \rangle|}{\|x\|_J} \\
&= \|y - \Pi_n(y)\|_{J^*}.
\end{aligned}
$$
这证明了第二个等式。该等式也表明序列$(\varepsilon_n)_{n \in \mathbb{N}}$是非增的。

现在，假设（反证法）$\lim_{n \to \infty} \varepsilon_n = \inf_{n \in \mathbb{N}} \varepsilon_n > 0$。选择一个常数$0 < \varepsilon < \inf_{n \in \mathbb{N}} \varepsilon_n$。那么，根据(*)和可数选择公理，存在一个序列$x_n = (x_{n,i})_{i \in \mathbb{N}} \in J$，使得
$$
\Pi_n(x_n) = 0, \quad \|x_n\|_J = 1, \quad \langle y, x_n \rangle > \varepsilon
$$
对所有$n \in \mathbb{N}$成立。由于$c_{00}$在$J$中是稠密的，该序列可以选择为对所有$n \in \mathbb{N}$，都有$x_n \in c_{00}$。根据之前的引理，每个元素$x_n$满足$\|x_n\|_\infty \le \|x_n\|_J = 1$。定义映射$\kappa: \mathbb{N} \to \mathbb{N}$为
$$
\kappa(n) := \max\{i \in \mathbb{N} \mid x_{n,i} \neq 0\} \quad \text{对于 } n \in \mathbb{N}.
$$
那么对所有$n \in \mathbb{N}$，都有$\kappa(n) > n$。接下来，通过递归定义序列$n_j \in \mathbb{N}$：令$n_1 := 1$，并对$j \in \mathbb{N}$，令$n_{j+1} := \kappa(n_j) > n_j$。再定义序列$\xi = (\xi_i)_{i \in \mathbb{N}} \in c_0$，其中$\xi_1 := 0$，且
$$
\xi_i := \frac{x_{n_j, i}}{j} \quad \text{对于 } j \in \mathbb{N} \text{ 且 } n_j + 1 \le i \le n_{j+1} = \kappa(n_j).
$$

该序列收敛于零，因为对所有$i$和$j$，都有$|x_{n_j, i}| \le 1$。此外
$$
\langle y, \Pi_{n_k}(\xi) \rangle = \sum_{i=1}^{n_k} y_i \xi_i = \sum_{j=1}^{k-1} \frac{\langle y, x_{n_j} \rangle}{j} \ge \sum_{j=1}^{k-1} \frac{\varepsilon}{j} \quad \text{对所有 } k \in \mathbb{N} \text{ 成立}.
$$

现在令$\mathbf{p} = (p_1, \dots, p_\ell) \in \mathcal{P}$。如果$p_1 = 1$，则当$\ell \ge 2$时，$\||\xi\||_{\mathbf{p}} = \||\xi\||_{(p_2,\dots,p_\ell)}$；当$\ell = 1$时，$\||\xi\||_{\mathbf{p}} = 0$。因此，假设$p_1 \ge 2$，并定义
$$
\mathcal{J} := \{j \in \mathbb{N} \mid \text{存在 } i \in \{1, \dots, \ell\} \text{ 使得 } n_j < p_i \le n_{j+1}\}.
$$
那么$\mathcal{J} \neq \emptyset$。令$m := \max \mathcal{J}$，并对每个$j \in \mathcal{J}$，定义
$$
\begin{aligned}
k_j &:= \min\{i \in \{1, \dots, \ell\} \mid n_j < p_i \le n_{j+1}\}, \\
\ell_j &:= \max\{i \in \{1, \dots, \ell\} \mid n_j < p_i \le n_{j+1}\}, \\
\mathbf{p}_j &:= (p_{k_j}, \dots, p_{\ell_j}).
\end{aligned}
$$
那么$\{1, \dots, \ell\} = \bigcup_{j \in \mathcal{J}} \{k_j, \dots, \ell_j\}$，因为$p_1 \ge 2$，并且对所有$j \in \mathcal{J}$，有
$$
\||\xi\||_{\mathbf{p}_j} = j^{-1} \||x_{n_j}\||_{\mathbf{p}_j} \le j^{-1} \||x_{n_j}\||_J \le j^{-1} \|x_{n_j}\|_J = j^{-1},
$$
因此，
$$
\begin{aligned}
2\||\xi\||_{\mathbf{p}}^2 &= |\xi_{p_1}|^2 + \sum_{m \neq j \in \mathcal{J}} \sum_{i=k_j}^{\ell_j} |\xi_{p_i} - \xi_{p_{i+1}}|^2 + \sum_{i=k_m}^{\ell_m-1} |\xi_{p_i} - \xi_{p_{i+1}}|^2 + |\xi_{p_\ell}|^2 \\
&\le 2 \sum_{j \in \mathcal{J}} \left( |\xi_{p_{k_j}}|^2 + \sum_{i=k_j}^{\ell_j-1} |\xi_{p_i} - \xi_{p_{i+1}}|^2 + |\xi_{p_{\ell_j}}|^2 \right) \\
&= 4 \sum_{j \in \mathcal{J}} \||\xi\||_{\mathbf{p}_j}^2 \\
&\le 4 \sum_{j \in \mathcal{J}} \frac{1}{j^2} \\
&\le \frac{2}{3} \pi^2.
\end{aligned}
$$
对所有$\mathbf{p} \in \mathcal{P}$取上确界，并利用之前的引理得到
$$
\|\xi\|_J \le \sqrt{2} \||\xi\||_J = \sup_{\mathbf{p} \in \mathcal{P}} \sqrt{2} \||\xi\||_{\mathbf{p}} \le \sqrt{\frac{2}{3}} \pi < \infty,
$$
所以$\xi \in J$。然后，根据之前的引理可知，
$$
\|\Pi_{n_k}(\xi)\|_J \le \|\xi\|_J \le \sqrt{\frac{2}{3}} \pi
$$
对所有$k \in \mathbb{N}$成立，这与序列$\langle y, \Pi_{n_k}(\xi) \rangle$无界的事实相矛盾。


# James空间的对偶性定理
我们现在可以证明本小节的主要结果。

## 定理 2.4.14 (James)

James空间$J$与其二次对偶空间$J^{**}$等距同构，且典范包含映射
$$
\iota: J \to J^{**}
$$
在$J^{**}$中的像余维数为一。

### 证明

该证明分为七个步骤。

#### 步骤 1

设$\Lambda: J^* \to \mathbb{R}$是一个有界线性泛函，并定义
$$
z_i := \Lambda(e_i) \quad \text{对于 } i \in \mathbb{N}.
$$
那么$z := (z_i)_{i \in \mathbb{N}} \in \ell^\infty$，并且对所有$n \in \mathbb{N}$和所有$y \in J^*$，有
$$
\Lambda(\Pi_n(y)) = \langle y, \Pi_n(z) \rangle \tag{1}
$$
以及对所有$y \in J^*$，有
$$
\Lambda(y) = \lim_{n \to \infty} \langle y, \Pi_n(z) \rangle. \tag{2}
$$

对于每个$i \in \mathbb{N}$，我们有
$$
|\langle e_i, e_i \rangle| = 1 = \|e_i\|_J,
$$
因此，
$$
1 \le \|e_i\|_{J^*} = \sup_{0 \neq x \in J} \frac{|\langle x, e_i \rangle|}{\|x\|_J} = \sup_{0 \neq x \in J} \frac{|x_i|}{\|x\|_J} \le \sup_{0 \neq x \in J} \frac{\|x\|_\infty}{\|x\|_J} \le 1
$$
由前述引理可知。故
$$
\|e_i\|_{J^*} = 1 \quad \text{对于所有 } i \in \mathbb{N}.
$$
这意味着
$$
|z_i| = |\Lambda(e_i)| \le \|\Lambda\| \|e_i\|_{J^*} = \|\Lambda\|
$$
对所有$i \in \mathbb{N}$成立，所以$z \in \ell^\infty$。现在令$y = (y_i)_{i \in \mathbb{N}} \in J^*$。那么
$$
\Lambda(\Pi_n(y)) = \sum_{i=1}^{n} y_i \Lambda(e_i) = \sum_{i=1}^{n} y_i z_i = \langle y, \Pi_n(z) \rangle \quad \text{对于所有 } n \in \mathbb{N},
$$
这证明了公式(1)。由前述引理和公式(1)可知，
$$
\begin{aligned}
\lim_{n \to \infty} |\Lambda(y) - \langle y, \Pi_n(z) \rangle| &= \lim_{n \to \infty} |\Lambda(y - \Pi_n(y))| \\
&\le \lim_{n \to \infty} \|\Lambda\| \|y - \Pi_n(y)\|_{J^*} \\
&= 0.
\end{aligned}
$$
这证明了公式(2)和步骤1。

#### 步骤 2

设$\Lambda: J^* \to \mathbb{R}$和$z \in \ell^\infty$如步骤1中所定义。那么
$$
\sup_{\mathbf{p} \in \mathcal{P}} \max\{\|z\|_{\mathbf{p}}, \||z\||_{\mathbf{p}}\} \le \|\Lambda\|. \tag{3}
$$

固定一个元素$\mathbf{p} = (p_1, \dots, p_k) \in \mathcal{P}$，并选择一个整数$n \ge p_k$。那么
$$
\begin{aligned}
\max\{\|z\|_{\mathbf{p}}, \||z\||_{\mathbf{p}}\} &= \max\{\|\Pi_n(z)\|_{\mathbf{p}}, \||\Pi_n(z)\||_{\mathbf{p}}\} \\
&\le \|\Pi_n(z)\|_J \\
&= \sup_{0 \neq y \in J^*} \frac{|\langle y, \Pi_n(z) \rangle|}{\|y\|_{J^*}} \\
&= \sup_{0 \neq y \in J^*} \frac{|\Lambda(\Pi_n(y))|}{\|y\|_{J^*}} \\
&\le \sup_{0 \neq y \in J^*} \frac{\|\Lambda\| \|\Pi_n(y)\|_{J^*}}{\|y\|_{J^*}} \\
&\le \|\Lambda\|.
\end{aligned}
$$
此处第二步遵循自前述引理，第三步遵循自前述引理，第四步遵循自公式(1)，最后一步遵循自前述结论。这证明了公式(3)和步骤2。

#### 步骤 3

设$z = (z_i)_{i \in \mathbb{N}} \in \ell^\infty$是一个满足
$$
\sup_{\mathbf{p} \in \mathcal{P}} \max\{\|z\|_{\mathbf{p}}, \||z\||_{\mathbf{p}}\} < \infty \tag{4}
$$
的有界序列。那么$z$是一个Cauchy序列，且由下式定义的序列$x := (x_i)_{i \in \mathbb{N}}$
$$
\lambda := \lim_{j \to \infty} z_j, \quad x_i := z_i - \lambda \quad \text{对于 } i \in \mathbb{N}, \tag{5}
$$
是$J$中的一个元素。

假设 $z$ 不是一个Cauchy序列。那么存在两个子序列$(z_{p_i})_{i \in \mathbb{N}}$和$(z_{q_i})_{i \in \mathbb{N}}$收敛于不同的极限。通过取更进一步的子序列，我们可以假设对所有$i \in \mathbb{N}$，有$p_i < q_i < p_{i+1}$，并且存在一个常数$\varepsilon > 0$，使得对所有$i, j \in \mathbb{N}$，都有$|z_{p_i} - z_{q_j}| > \varepsilon$。对于$n \in \mathbb{N}$，考虑元组
$$
\mathbf{p}_n := (p_1, q_1, p_2, q_2, \dots, p_n, q_n).
$$
那么$\|z\|_{\mathbf{p}_n} > \sqrt{n}\varepsilon$对所有$n \in \mathbb{N}$成立，这与公式(4)矛盾。这表明$z$是一个Cauchy序列。现在，序列$x$在公式(5)中按定义收敛于零，并满足
$$
\|x\|_J = \sup_{\mathbf{p} \in \mathcal{P}} \|x\|_{\mathbf{p}} = \sup_{\mathbf{p} \in \mathcal{P}} \|z\|_{\mathbf{p}} < \infty
$$
由公式(4)得出。因此$x \in J$，这证明了步骤3。

#### 步骤 4

设$z = (z_i)_{i \in \mathbb{N}} \in \ell^\infty$是一个满足公式(4)的有界序列，并设$\lambda \in \mathbb{R}$和$x \in J$由公式(5)给出。那么极限
$$
\Lambda(y) := \lim_{n \to \infty} \langle y, \Pi_n(z) \rangle = \lim_{n \to \infty} \langle y, \Pi_n(x) \rangle + \lambda \lim_{n \to \infty} \sum_{i=1}^{n} y_i \tag{6}
$$
对每个$y \in J^*$都存在，并定义了一个线性泛函$\Lambda: J^* \to \mathbb{R}$。

序列$(\sum_{i=1}^{n} y_i)_{n \in \mathbb{N}}$在$y \in \ell^1$时收敛是显然的。此外，子空间$\ell^1$在$J^*$中是稠密的，由前述引理可知，并且
$$
\left| \sum_{i=1}^{n} y_i \right| = |\langle \mathbf{1}_n, y \rangle| \le \|\mathbf{1}_n\|_J \|y\|_{J^*} = \|y\|_{J^*}
$$
对所有$n \in \mathbb{N}$成立。这里
$$
\mathbf{1}_n := (1, \dots, 1, 0, \dots)
$$
表示前$n$个分量等于1、其余为0的序列。因此，函数序列
$$
J^* \to \mathbb{R}: y \mapsto y_1 + \cdots + y_n
$$
是一致有界的，并且在稠密子空间$\ell^1 \subset J^*$上收敛。因此，由Banach-Steinhaus定理可知，序列$(\sum_{i=1}^{n} y_i)_{n \in \mathbb{N}}$对所有$y \in J^*$都收敛。因此，由步骤3和前述引理可知，公式(6)中的极限对所有$y \in J^*$都存在，这证明了步骤4。

#### 步骤 5

设$z \in \ell^\infty$是一个满足公式(4)的序列，并设$\Lambda: J^* \to \mathbb{R}$是由步骤4中公式(6)定义的线性映射。那么$\Lambda$是$J^*$上的一个有界线性泛函，其范数为
$$
\|\Lambda\| = \sup_{\mathbf{p} \in \mathcal{P}} \max\{\|z\|_{\mathbf{p}}, \||z\||_{\mathbf{p}}\}. \tag{7}
$$

我们证明
$$
\frac{|\Lambda(y)|}{\|y\|_{J^*}} \le \sup_{\mathbf{p} \in \mathcal{P}} \max\{\|z\|_{\mathbf{p}}, \||z\||_{\mathbf{p}}\} \quad \text{对于所有 } y \in J^* \setminus \{0\}. \tag{8}
$$
为此，首先注意到
$$
\|x\|_J = \sup_{\mathbf{p} \in \mathcal{P}} \|x\|_{\mathbf{p}} = \sup_{\mathbf{p} \in \mathcal{P}} \max\{\|x\|_{\mathbf{p}}, \||x\||_{\mathbf{p}}\} \tag{9}
$$
对所有$x \in J$成立，由前述引理可知。

接下来我们证明不等式
$$
\sup_{\mathbf{p} \in \mathcal{P}} \max\{\|\Pi_n(z)\|_{\mathbf{p}}, \||\Pi_n(z)\||_{\mathbf{p}}\} \le \sup_{\mathbf{p} \in \mathcal{P}} \max\{\|z\|_{\mathbf{p}}, \||z\||_{\mathbf{p}}\} \tag{10}
$$
对所有$n \in \mathbb{N}$成立。为此，固定两个元素
$$
\mathbf{p} = (p_1, \dots, p_k) \in \mathcal{P}, \quad n \in \mathbb{N}.
$$
那么当$p_1 > n$时，$\|\Pi_n(z)\|_{\mathbf{p}} = \||\Pi_n(z)\||_{\mathbf{p}} = 0$；当$p_k \le n$时，$\||\Pi_n(z)\||_{\mathbf{p}} = \||z\||_{\mathbf{p}}$且$\|\Pi_n(z)\|_{\mathbf{p}} = \|z\|_{\mathbf{p}}$。因此，假设
$$
p_1 \le n < p_k
$$
并记$\ell \in \{1, \dots, k-1\}$为满足$p_\ell \le n$的最大数。考虑元素
$$
\mathbf{q} := (p_1, \dots, p_\ell) \in \mathcal{P}.
$$
它满足
$$
\begin{aligned}
2\|\Pi_n(z)\|_{\mathbf{p}}^2 &= 2\||\Pi_n(z)\||_{\mathbf{p}}^2 \\
&= |z_{p_1}|^2 + \sum_{j=1}^{\ell-1} |z_{p_j} - z_{p_{j+1}}|^2 + |z_{p_\ell}|^2 \\
&= 2\||z\||_{\mathbf{q}}^2.
\end{aligned}
$$
这证明了公式(10)。

现在令$x = \Pi_n(z)$。那么，由公式(9)和公式(10)，
$$
\begin{aligned}
\frac{|\langle y, \Pi_n(z) \rangle|}{\|y\|_{J^*}} &\le \|\Pi_n(z)\|_J \\
&= \sup_{\mathbf{p} \in \mathcal{P}} \max\{\|\Pi_n(z)\|_{\mathbf{p}}, \||\Pi_n(z)\||_{\mathbf{p}}\} \\
&\le \sup_{\mathbf{p} \in \mathcal{P}} \max\{\|z\|_{\mathbf{p}}, \||z\||_{\mathbf{p}}\}
\end{aligned}
$$
对所有$y \in J^* \setminus \{0\}$和所有$n \in \mathbb{N}$成立。取极限$n \to \infty$。那么由步骤4中公式(6)对$\Lambda$的定义可知，
$$
\begin{aligned}
\frac{|\Lambda(y)|}{\|y\|_{J^*}} &= \lim_{n \to \infty} \frac{|\langle y, \Pi_n(z) \rangle|}{\|y\|_{J^*}} \\
&\le \sup_{\mathbf{p} \in \mathcal{P}} \max\{\|z\|_{\mathbf{p}}, \||z\||_{\mathbf{p}}\}
\end{aligned}
$$
对所有$y \in J^* \setminus \{0\}$成立。这证明了公式(8)。因此，$\Lambda: J^* \to \mathbb{R}$是一个有界线性泛函。现在对所有$y \in J^* \setminus \{0\}$取上确界以得到
$$
\begin{aligned}
\|\Lambda\| &= \sup_{0 \neq y \in J^*} \frac{|\Lambda(y)|}{\|y\|_{J^*}} \\
&\le \sup_{\mathbf{p} \in \mathcal{P}} \max\{\|z\|_{\mathbf{p}}, \||z\||_{\mathbf{p}}\}.
\end{aligned}
$$
逆向不等式已在步骤2中建立，这证明了步骤5。

#### 步骤 6

典范包含映射$\iota: J \to J^{**}$的像余维数为一。

由步骤1、步骤2、步骤4和步骤5可知，$J$的二次对偶空间自然同构于空间
$$
J^{**} := \left\{ z \in \ell^\infty \,\middle|\, \sup_{\mathbf{p} \in \mathcal{P}} \max\{\|z\|_{\mathbf{p}}, \||z\||_{\mathbf{p}}\} < \infty \right\}.
$$
该对应关系将序列$z \in J^{**}$赋予有界线性泛函$\Lambda: J^* \to \mathbb{R}$，其由公式(6)给出。它对每个$z \in J^{**}$都是良定义的，这一点已在步骤4中证明；它是有界的，这一点已在步骤5中证明；并且每个$J^*$上的有界线性泛函都具有这种形式，这一点已在步骤1和2中证明。此外，在步骤5中也已证明，$J^{**}$与$J^*$的对偶空间的等同是一个关于$J^{**}$上范数的等距同构，该范数定义为
$$
\|z\|_{J^{**}} := \sup_{\mathbf{p} \in \mathcal{P}} \max\{\|z\|_{\mathbf{p}}, \||z\||_{\mathbf{p}}\} \quad \text{对于 } x \in J^{**}.
$$
在此等同下，典范包含映射$\iota: J \to J^{**}$就是将$J$作为子集嵌入到$J^{**}$中的明显包含。根据前述引理的一般性观察（另见前述引理和公式(9)），这是一个等距嵌入。此外，常数序列$\mathbf{1} := (1, 1, 1, \dots)$是$J^{**}$中的一个单位向量，并且
$$
J^{**} = J \oplus \mathbb{R}\mathbf{1}
$$
由步骤3得出。这证明了步骤6。

#### 步骤 7

映射
$$
J \to J^{**}: x = (x_i)_{i \in \mathbb{N}} \mapsto (x_{i+1} - x_1)_{i \in \mathbb{N}}
$$
是一个等距同构。

该映射是双射的，由步骤3可知。如果$x = (x_i)_{i \in \mathbb{N}} \in J$和$z = (z_i)_{i \in \mathbb{N}} \in J^{**}$通过条件
$$
x_1 = -\lim_{j \to \infty} z_j, \quad x_{i+1} - x_1 = z_i \quad \text{对于 } i \in \mathbb{N},
$$
相关联，那么
$$
\|z\|_{(p_1, \dots, p_k)} = \|x\|_{(p_1+1, \dots, p_k+1)}, \quad \||z\||_{(p_1, \dots, p_k)} = \|x\|_{(1, p_1+1, \dots, p_k+1)}
$$
对所有$(p_1, \dots, p_k) \in \mathcal{P}$成立，因此
$$
\|x\|_J = \sup_{\mathbf{p} \in \mathcal{P}} \|x\|_{\mathbf{p}} = \sup_{\mathbf{p} \in \mathcal{P}} \max\{\|z\|_{\mathbf{p}}, \||z\||_{\mathbf{p}}\} = \|z\|_{J^{**}}.
$$
这证明了步骤7和定理。

### 关于定理的备注
1. 设 $X$ 是一个实 Banach 空间。$X$ 的一个 **Schauder 基** 是指 $X$ 中的一个序列 $(e_i)_{i \in \mathbb{N}}$，使得对于每个 $x \in X$，都存在唯一的序列 $(x_i)_{i \in \mathbb{N}} \in \mathbb{R}^{\mathbb{N}}$，满足  
   $$
   \lim_{n \to \infty} \left\| x - \sum_{i=1}^{n} x_i e_i \right\| = 0.
   $$  
   与每个 Schauder 基 $(e_i)_{i \in \mathbb{N}}$ 相关联的是一个唯一的有界线性泛函序列 $e_i^* \in X^*$，使得对所有 $i, j \in \mathbb{N}$，都有 $\langle e_i^*, e_j \rangle = \delta_{ij}$（参见练习题）。因此，序列 $x_i = \langle e_i^*, x \rangle$ 由上述条件所刻画。如果对所有 $i \in \mathbb{N}$，都有 $\|e_i\| = 1$，则称 Schauder 基 $(e_i)_{i \in \mathbb{N}}$ 是 **规范化的**。与每个 Schauder 基 $(e_i)_{i \in \mathbb{N}}$ 和每个 $n \in \mathbb{N}$ 相关联的是一个投影算子 $\Pi_n: X \to X$，其定义为  
   $$
   \Pi_n(x) := \sum_{i=1}^{n} \langle e_i^*, x \rangle e_i \quad \text{对于 } x \in X.
   $$  
   算子序列 $\Pi_n \in \mathcal{L}(X)$ 是有界的（参见练习题）。如果对所有 $n \in \mathbb{N}$，都有 $\|\Pi_n\| \le 1$，则称 Schauder 基 $(e_i)_{i \in \mathbb{N}}$ 是 **单调的**。如果对每个 $x^* \in X^*$，都有 $\lim_{n \to \infty} \|\Pi_n^*(x^*) - x^*\|_{X^*} = 0$，则称其是 **收缩的**，此时序列 $(e_i^*)_{i \in \mathbb{N}}$ 是 $X^*$ 的一个 Schauder 基。如果对于每个满足 $\sup_{n \in \mathbb{N}} \|\sum_{i=1}^{n} x_i e_i\| < \infty$ 的序列 $(x_i)_{i \in \mathbb{N}} \in \mathbb{R}^{\mathbb{N}}$，序列 $\sum_{i=1}^{n} x_i e_i$ 都在 $X$ 中收敛，则称其是 **有界完备的**。

2. 由前述引理可知，James 空间 $J$ 的标准基 $(e_i)_{i \in \mathbb{N}}$ 是一个规范化的单调 Schauder 基，并且由前述引理可知，它是收缩的。但它不是有界完备的，因为常数序列 $x_i = 1$ 满足 $\|\sum_{i=1}^{n} e_i\|_J = 1$，然而序列 $\sum_{i=1}^{n} e_i$ 在 $J$ 中不收敛。

3. 对偶空间 $J^*$ 的标准基 $(e_i)_{i \in \mathbb{N}}$ 同样是规范化的和单调的。可以从前述引理推断出，这个基是有界完备的。然而，它不是收缩的，因为在 $J^{**}$ 中，对偶序列的张成空间的闭包是真子空间 $J \subset J^{**}$，这是由定理得出的。

4. Robert C. James 的一个定理断言：一个具有 Schauder 基 $(e_i)_{i \in \mathbb{N}}$ 的 Banach 空间 $X$ 是自反的，当且仅当该基既是收缩的又是有界完备的。

5. Banach 空间 $X$ 的一个 Schauder 基 $(e_i)_{i \in \mathbb{N}}$ 被称为 **无条件的**，如果对于每个双射 $\sigma: \mathbb{N} \to \mathbb{N}$，序列 $(e_{\sigma(i)})_{i \in \mathbb{N}}$ 仍然是 $X$ 的一个 Schauder 基。James 空间 $J$ 不承认无条件 Schauder 基。

6. Schauder 基有许多例子，例如可分 Hilbert 空间的任何标准正交基，它总是规范化的、单调的、无条件的、收缩的和有界完备的。

7. 实 Banach 空间 $X$ 上的一个 **复结构** 是指一个有界线性算子 $I: X \to X$，使得  
   $$
   I^2 = -\mathbb{I}.
   $$  
   这样的复结构诱导了二次对偶空间 $X^{**}$ 上的一个复结构 $I^{**}: X^{**} \to X^{**}$，使得典范包含映射 $\iota: X \to X^{**}$ 满足  
   $$
   \iota \circ I = I^{**} \circ \iota.
   $$  
   因此，复结构可以下降到商空间 $X^{**}/\iota(X)$ 上。在 James 空间 $X = J$ 的情况下，这个商空间具有一维实维度。因此，它不承认复结构，James 空间 $J$ 也不承认。

8. 考虑 James 空间 $J$ 与其对偶空间的乘积  
   $$
   X := J \times J^*
   $$  
   并赋予范数  
   $$
   \|(x, y)\|_X := \sqrt{\|x\|_J^2 + \|y\|_{J^*}^2} \quad \text{对于 } (x, y) \in J \times J^*.
   $$  
   由定理可知，空间 $X$ 与其对偶空间等距同构。然而，它不是自反的。

9. James 空间 $J$ 是一个非自反 Banach 空间的例子，但其二次对偶空间是可分的。

10. James 空间否定回答了另一个问题：一个可分 Banach 空间，如果它与其二次对偶空间等距同构，是否必须是自反的？James 空间满足这两个条件，但不是自反的。

11. James 空间 $J$ 是一个无限维 Banach 空间的例子，它不与乘积空间  
    $$
    X := J \times J
    $$  
    同构。这是因为典范包含映射 $\iota: X \to X^{**}$ 的像余维数为二，这是由定理得出的。此外，$X$ 承认复结构而 $J$ 不承认。