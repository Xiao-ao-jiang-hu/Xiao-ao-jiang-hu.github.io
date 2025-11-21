---
title: Ch 3.2 Banach-Alaoglu 定理
tags:
  - math
  - functional analysis
categories:
  - math
  - functional analysis
index_img: /img/fa.jpg
banner_img: /img/fa.jpg
excerpt: 泛函分析课程笔记
date: 2025-11-18 04:11:53
---
在无限维空间中，单位球在范数拓扑下通常不具紧性。而 Banach–Alaoglu 定理指出，对偶空间中的闭单位球在弱\*拓扑下却是紧的。本节给出 Banach–Alaoglu 定理的两种形式：可分空间情形和一般情形。

# 可分情形
第一个版本适用于可分赋范向量空间，断言对偶空间中的每个有界序列均存在弱\*收敛子列。

## 定理（Banach-Alaoglu：可分情形）

设 $X$ 为一个可分实赋范向量空间。则对偶空间 $X^*$ 中的每个有界序列均存在弱\*收敛子列。

### 证明

令 $D = \{x_1, x_2, x_3, \ldots\} \subset X$ 为一个可数稠密子集，并设 $(x_n^*)_{n \in \mathbb{N}}$ 为 $X^*$ 中的一个有界序列。标准对角线论证表明，存在子列 $(x_{n_i}^*)_{i \in \mathbb{N}}$，使得对每个 $k \in \mathbb{N}$，实数序列 $(\langle x_{n_i}^*, x_k \rangle)_{i \in \mathbb{N}}$ 收敛。更精确地说，序列 $(\langle x_n^*, x_1 \rangle)_{n \in \mathbb{N}}$ 有界，故存在收敛子列 $(\langle x_{n_{i,1}}^*, x_1 \rangle)_{i \in \mathbb{N}}$。由于序列 $(\langle x_{n_{i,1}}^*, x_2 \rangle)_{i \in \mathbb{N}}$ 有界，它也有一个收敛子列 $(\langle x_{n_{i,2}}^*, x_2 \rangle)_{i \in \mathbb{N}}$。继续通过归纳法并使用依赖选择公理（参见第6页），构造子列序列 $(x_{n_{i,k}}^*)_{i \in \mathbb{N}}$，使得对每个 $k \in \mathbb{N}$，$(x_{n_{i,k+1}}^*)_{i \in \mathbb{N}}$ 是 $(x_{n_{i,k}}^*)_{i \in \mathbb{N}}$ 的子列，且序列 $(\langle x_{n_{i,k}}^*, x_k \rangle)_{i \in \mathbb{N}}$ 收敛。现在考虑对角子列 $x_{n_i}^* := x_{n_{i,i}}^*$。则序列 $(\langle x_{n_i}^*, x_k \rangle)_{i \in \mathbb{N}}$ 对每个 $k \in \mathbb{N}$ 均收敛。于是可知存在元素 $x^* \in X^*$ 使得

$$
\langle x^*, x \rangle = \lim_{i \to \infty} \langle x_{n_i}^*, x \rangle \tag{1}
$$

对所有 $x \in X$ 成立。因此，序列 $(x_{n_i}^*)_{i \in \mathbb{N}}$ 在弱\*拓扑下收敛于 $x^*$。

## 例子
本例说明，在上述定理中 $X$ 为可分的假设不可省略。考虑 Banach 空间 $X = \ell^\infty$，配备上确界范数，该空间不可分。对 $n \in \mathbb{N}$，定义有界线性泛函 $\Lambda_n: \ell^\infty \to \mathbb{R}$ 为 $\Lambda_n(x) := x_n$，其中 $x = (x_i)_{i \in \mathbb{N}} \in \ell^\infty$。则序列 $(\Lambda_n)_{n \in \mathbb{N}}$ 在 $X^*$ 中不存在弱\*收敛子列。为验证这一点，令 $n_1 < n_2 < n_3 < \cdots$ 为任意正整数序列，并定义序列 $x = (x_i)_{i \in \mathbb{N}} \in \ell^\infty$ 如下：当 $i = n_{2k}$（$k \in \mathbb{N}$）时，$x_i := 1$；否则 $x_i := -1$。则 $\Lambda_{n_k}(x) = x_{n_k} = (-1)^k$，故实数序列 $(\Lambda_{n_k}(x))_{k \in \mathbb{N}}$ 不收敛。因此，子列 $(\Lambda_{n_k})_{k \in \mathbb{N}}$ 在 $X^*$ 中不收敛于弱\*拓扑。


# 不变测度

设 $(M, d)$ 为一个紧致度量空间，$\phi: M \to M$ 为一个同胚映射。记 $\mathcal{B} \subset 2^M$ 为 Borel $\sigma$-代数。所有连续函数 $f: M \to \mathbb{R}$ 构成的空间 $C(M)$（配备上确界范数）是一个可分 Banach 空间，其对偶空间与带符号的 Borel 测度空间 $\mathcal{M}(M)$（即从 $\mathcal{B}$ 到 $\mathbb{R}$ 的映射）等距同构，并配备范数函数：

$$
\|\mu\| := \sup_{B \in \mathcal{B}} \big( \mu(B) - \mu(M \setminus B) \big)
$$

其中 $\mu \in \mathcal{M}(M)$。若 Borel 测度 $\mu: \mathcal{B} \to [0, \infty)$ 满足 $\|\mu\| = \mu(M) = 1$，则称其为概率测度。若概率测度 $\mu: \mathcal{B} \to [0,1]$ 满足：

$$
\int_M (f \circ \phi)\, d\mu = \int_M f\, d\mu \quad \text{对所有 } f \in C(M) \tag{3.2.1}
$$

则称其为 $\phi$-不变 的。

定义集合：

$$
\mathcal{M}(\phi) := \left\{ \mu \in \mathcal{M}(M) \,\middle|\,
\begin{array}{l}
\mu(B) \geq 0 \text{ 对所有 } B \in \mathcal{B}, \\
\mu(M) = 1, \text{ 且 } \mu \text{ 满足 } \text{3.2.1}
\end{array}
\right\} \tag{3.2.2}
$$

该集合由 $\phi$-不变的 Borel 概率测度组成，是 $\mathcal{M}(M)$ 中单位球的一个弱\*闭凸子集。下面的引理表明该集合非空。

## 引理

每个紧致度量空间上的同胚映射均存在一个不变的 Borel 概率测度。

### 证明

设 $\phi: M \to M$ 为紧致度量空间上的一个同胚映射。固定一点 $x_0 \in M$，并对每个整数 $n \geq 1$，定义 Borel 概率测度 $\mu_n: \mathcal{B} \to [0,1]$ 如下：

$$
\int_M f\, d\mu_n := \frac{1}{n} \sum_{k=0}^{n-1} f(\phi^k(x_0)) \quad \text{对所有 } f \in C(M).
$$

此处 $\phi^0 := \mathrm{id}: M \to M$，而 $\phi^k := \phi \circ \cdots \circ \phi$ 表示 $\phi$ 的第 $k$ 次迭代（$k \in \mathbb{N}$）。根据上述定理 3.2.1，序列 $\mu_n$ 存在弱\*收敛子列 $(\mu_{n_i})_{i \in \mathbb{N}}$。其弱\*极限是一个 Borel 测度 $\mu: \mathcal{B} \to [0, \infty)$，满足：

$$
\|\mu\| = \int_M 1\, d\mu = \lim_{i \to \infty} \int_M 1\, d\mu_{n_i} = 1
$$

并且

$$
\int_M (f \circ \phi)\, d\mu = \lim_{i \to \infty} \frac{1}{n_i} \sum_{k=1}^{n_i} f(\phi^k(x_0)) = \lim_{i \to \infty} \frac{1}{n_i} \sum_{k=0}^{n_i-1} f(\phi^k(x_0)) = \int_M f\, d\mu
$$

对所有 $f \in C(M)$ 成立。因此 $\mu \in \mathcal{M}(\phi)$。

# Tychoff 定理
Banach-Alaoglu 定理的证明依赖于 Tychonoff 定理，该定理断言任意紧致拓扑空间的乘积在乘积拓扑下仍然是紧致的。

Tychonoff 定理的证明使用了如下关于紧致性的刻画：一个拓扑空间 $K$ 是紧致的当且仅当每个由 $K$ 的闭子集构成的、具有有限交性质的集合族都有非空交集。
## 定义（有限交性质和极大集合族）

设 $K$ 为一个集合。集合族 $\mathcal{A} \subset 2^K$ 被称为具有**有限交性质**，若

$$
\mathcal{A} \neq \emptyset
$$

且

$$
n \in \mathbb{N},\quad A_1, \dots, A_n \in \mathcal{A} \quad \Longrightarrow \quad A_1 \cap \cdots \cap A_n \neq \emptyset.
$$

一个具有有限交性质的集合族 $\mathcal{A} \subset 2^K$ 称为**极大**的，若每一个包含 $\mathcal{A}$ 且具有有限交性质的集合族 $\mathcal{B} \subset 2^K$ 必等于 $\mathcal{A}$。

该定义的重要性体现在以下观察中：

1. 一个拓扑空间 $K$ 是紧致的当且仅当每个由 $K$ 的闭子集构成的、具有有限交性质的集合族 $\mathcal{A} \subset 2^K$ 具有非空交集，即存在元素 $x \in K$ 使得 $x \in A$ 对所有 $A \in \mathcal{A}$ 成立。
2. 设 $K$ 为任意集合，$\mathcal{A} \subset 2^K$ 为一个具有有限交性质的子集族。则根据 Zorn 引理，存在一个极大集合族 $\mathcal{B} \subset 2^K$，它具有有限交性质并包含 $\mathcal{A}$。
3. 设 $\mathcal{B} \subset 2^K$ 为一个具有有限交性质的极大集合族。则  
   $$
   n \in \mathbb{N},\quad B_1, \dots, B_n \in \mathcal{B} \quad \Longrightarrow \quad B_1 \cap \cdots \cap B_n \in \mathcal{B}
   $$  
   且，对每个子集 $C \subset K$，  
   $$
   C \cap B \neq \emptyset \text{ 对所有 } B \in \mathcal{B} \quad \Longrightarrow \quad C \in \mathcal{B}.
   $$


## Tychonoff 定理

设 $I$ 为任意集合，对每个 $i \in I$，令 $K_i$ 为一个紧致拓扑空间。则乘积

$$
K := \prod_{i \in I} K_i = \{x = (x_i)_{i \in I} \mid x_i \in K_i \text{ 对所有 } i \in I\}
$$

关于乘积拓扑（即使得每个自然投影 $\pi_i: K \to K_i$ 连续的最弱拓扑）是紧致的。

### 证明

设

$$
K = \prod_{i \in I} K_i
$$

为一族紧致拓扑空间的乘积，并记自然投影为 $\pi_i: K \to K_i$，其中 $i \in I$。设 $\mathcal{A} \subset 2^K$ 为一个由 $K$ 的闭子集构成的、具有有限交性质的集合族。则根据上述注记的第 2 部分，存在一个极大集合族 $\mathcal{B} \subset 2^K$，它具有有限交性质并包含 $\mathcal{A}$。我们证明存在元素 $x \in K$ 使得 $x \in \overline{B}$ 对所有 $B \in \mathcal{B}$ 成立。

为此，对每个 $i \in I$，定义

$$
\mathcal{B}_i := \left\{ \overline{\pi_i(B)} \,\middle|\, B \in \mathcal{B} \right\} \subset 2^{K_i}.
$$

则 $\mathcal{B}_i$ 是 $K_i$ 的闭子集族，且具有有限交性质。由于 $K_i$ 是紧致的，由上述注记的第 1 部分可知

$$
\bigcap_{B \in \mathcal{B}} \overline{\pi_i(B)} \neq \emptyset
$$

对所有 $i \in I$ 成立。因此，由选择公理，存在元素 $x = (x_i)_{i \in I} \in K$ 使得

$$
x_i \in \overline{\pi_i(B)} \quad \text{对所有 } i \in I \text{ 和所有 } B \in \mathcal{B}.
$$

我们声称 $x \in \overline{B}$ 对所有 $B \in \mathcal{B}$ 成立。为证此，设 $U \subset K$ 为包含 $x$ 的开集。则根据乘积拓扑的定义，存在有限集 $J \subset I$ 和开集 $U_j \subset K_j$（其中 $j \in J$），使得

$$
x \in \bigcap_{j \in J} \pi_j^{-1}(U_j) \subset U.
$$

于是

$$
x_j = \pi_j(x) \in U_j \cap \overline{\pi_j(B)} \quad \text{对所有 } j \in J \text{ 和所有 } B \in \mathcal{B}.
$$

由于 $U_j$ 是开集，这意味着 $U_j \cap \pi_j(B) \neq \emptyset$，从而

$$
\pi_j^{-1}(U_j) \cap B \neq \emptyset \quad \text{对所有 } j \in J \text{ 和所有 } B \in \mathcal{B}.
$$

由上述注记的第 3 部分，这蕴含 $\pi_j^{-1}(U_j) \in \mathcal{B}$ 对所有 $j \in J$ 成立。再次应用上述注记的第 3 部分，可得 $\bigcap_{j \in J} \pi_j^{-1}(U_j) \in \mathcal{B}$，从而

$$
\bigcap_{j \in J} \pi_j^{-1}(U_j) \cap B \neq \emptyset \quad \text{对所有 } B \in \mathcal{B}.
$$

这表明对每个 $B \in \mathcal{B}$ 及每个包含 $x$ 的开集 $U \subset K$，均有 $U \cap B \neq \emptyset$。因此 $x \in \overline{B}$ 对所有 $B \in \mathcal{B}$ 成立，从而 $x \in A$ 对所有 $A \in \mathcal{A}$ 成立。故由上述注记的第 1 部分，$K$ 是紧致的，这就证明了 Tychonoff 定理。


# 一般情形

Banach-Alaoglu 定理的第二个版本适用于所有实赋范向量空间，断言对偶空间中的闭单位球是弱\*紧的。

## Banach-Alaoglu 定理（一般情形）

设 $X$ 为一个实赋范向量空间。则对偶空间 $X^*$ 中的闭单位球

$$
B^* := \{x^* \in X^* \mid \|x^*\| \leq 1\}
$$

是弱\*紧的。

### 证明

这是一个 Tychonoff 定理的应用。参数空间为 $I = X$。对每个 $x \in X$，关联紧致区间

$$
K_x := [-\|x\|, \|x\|] \subset \mathbb{R}.
$$

这些紧致区间的乘积空间为

$$
K := \prod_{x \in X} K_x = \{f: X \to \mathbb{R} \mid |f(x)| \leq \|x\| \text{ 对所有 } x \in X\} \subset \mathbb{R}^X.
$$

定义

$$
L := \{f: X \to \mathbb{R} \mid f \text{ 是线性的}\} \subset \mathbb{R}^X.
$$

$K$ 与 $L$ 的交集即为闭单位球

$$
B^* := \{x^* \in X^* \mid \|x^*\| \leq 1\} = L \cap K.
$$

根据定义，$B^*$ 上的弱\*拓扑由 $\mathbb{R}^X$ 上的乘积拓扑诱导（参见关于弱\*拓扑的例子）。此外，$L$ 关于乘积拓扑是 $\mathbb{R}^X$ 的闭子集。为验证这一点，固定元素 $x, y \in X$ 和 $\lambda \in \mathbb{R}$，并定义映射 $\phi_{x,y}: \mathbb{R}^X \to \mathbb{R}$ 和 $\psi_{x,\lambda}: \mathbb{R}^X \to \mathbb{R}$ 如下：

$$
\phi_{x,y}(f) := f(x+y) - f(x) - f(y), \quad \psi_{x,\lambda}(f) := f(\lambda x) - \lambda f(x).
$$

根据乘积拓扑的定义，这些映射是连续的，这意味着集合

$$
L = \bigcap_{x,y \in X} \phi_{x,y}^{-1}(0) \cap \bigcap_{x \in X, \lambda \in \mathbb{R}} \psi_{x,\lambda}^{-1}(0)
$$

关于乘积拓扑是闭的。由于 $K$ 是 $\mathbb{R}^X$ 的紧致子集（由 Tychonoff 定理），而 $\mathbb{R}^X$ 是 Hausdorff 空间（参见关于弱\*拓扑的例子），可知 $B^* = L \cap K$ 是紧致集的一个闭子集，故本身是紧致的。这证明了前述定理。

下一个定理刻画了可分 Banach 空间对偶空间中弱\*紧子集的性质。

## 弱\*紧子集定理

设 $X$ 为一个可分 Banach 空间，且 $K \subset X^*$。则下列条件等价：

1. $K$ 是弱\*紧的。
2. $K$ 是有界的且弱\*闭的。
3. $K$ 是序列弱\*紧的，即 $K$ 中每个序列均存在极限在 $K$ 中的弱\*收敛子列。
4. $K$ 是有界的且序列弱\*闭的，即若 $x^* \in X^*$ 是 $K$ 中某序列的弱\*极限，则 $x^* \in K$。

蕴含关系 (1) $\Longleftrightarrow$ (2)、(2) $\Longrightarrow$ (4) 和 (3) $\Longrightarrow$ (4) 在 $X$ 不可分时仍成立。

### 证明

我们先证 (1) 蕴含 (2)。假设 $K$ 是弱\*紧的。由于 $X^*$ 上的弱\*拓扑是 Hausdorff 拓扑，故 $K$ 是弱\*闭的。为证 $K$ 有界，固定一个元素 $x \in X$。则函数

$$
K \to \mathbb{R}: x^* \mapsto \langle x^*, x \rangle
$$

关于弱\*拓扑是连续的，因此是有界的。于是

$$
\sup_{x^* \in K} |\langle x^*, x \rangle| < \infty \quad \text{对所有 } x \in X.
$$

由此，根据一致有界性定理，有

$$
\sup_{x^* \in K} \|x^*\| < \infty,
$$

故 $K$ 是有界的。

接下来证 (2) 蕴含 (1)。假设 $K$ 是有界的且弱\*闭的。选取 $c > 0$ 使得

$$
\|x^*\| \leq c \quad \text{对所有 } x^* \in K.
$$

由于集合

$$
c B^* = \{x^* \in X^* \mid \|x^*\| \leq c\}
$$

由前述 Banach-Alaoglu 定理（一般情形）可知是弱\*紧的，且 $K \subset c B^*$ 是弱\*闭的，故 $K$ 是弱\*紧的。

再证 (2) 蕴含 (3)。假设 $K$ 是有界的且弱\*闭的。令 $(x_n^*)_{n \in \mathbb{N}}$ 为 $K$ 中的一个序列。该序列是有界的，故由关于可分空间中弱\*收敛子列存在的结果，它存在一个弱\*收敛子列（因为 $X$ 是可分的）。令 $x^* \in X^*$ 为该子列的弱\*极限。由于 $K$ 是弱\*闭的，可知 $x^* \in K$。因此 $K$ 是序列弱\*紧的。

接着证 (3) 蕴含 (4)。假设 $K$ 是序列弱\*紧的。则 $K$ 是有界的，因为每个弱\*收敛序列均被一致有界性定理所约束。此外，$K$ 是序列弱\*闭的，这是由于弱\*极限的唯一性。（若 $x_n^* \in K$ 在弱\*拓扑下收敛到 $x^* \in X^*$，则它存在一个子列弱\*收敛到某个 $y^* \in K$，从而 $x^* = y^* \in K$。）

最后证 (4) 蕴含 (2)。假设 $K$ 是有界的且序列弱\*闭的。我们需要证明 $K$ 是弱\*闭的。设 $x_0^* \in X^*$ 为 $K$ 的弱\*闭包中的一个元素。选择 $X$ 的一个可数稠密子集 $\{x_k \mid k \in \mathbb{N}\}$。则集合

$$
U_n := \left\{ x^* \in X^* \,\middle|\, |\langle x^* - x_0^*, x_k \rangle| < \frac{1}{n} \text{ 对 } k=1,\ldots,n \right\}
$$

是 $x_0^*$ 的一个弱\*开邻域，对每个 $n \in \mathbb{N}$ 成立。因此 $U_n \cap K \neq \emptyset$ 对所有 $n \in \mathbb{N}$ 成立，故由可数选择公理，存在序列 $(x_n^*)_{n \in \mathbb{N}}$ 在 $X^*$ 中，使得对所有 $n \in \mathbb{N}$，有 $x_n^* \in U_n \cap K$。该序列满足 $|\langle x_n^* - x_0^*, x_k \rangle| \leq 1/n$ 对所有 $k, n \in \mathbb{N}$ 且 $n \geq k$ 成立。于是

$$
\lim_{n \to \infty} \langle x_n^*, x_k \rangle = \langle x_0^*, x_k \rangle \quad \text{对所有 } k \in \mathbb{N}.
$$

由于序列 $(x_n^*)_{n \in \mathbb{N}}$ 在 $X^*$ 中有界，且序列 $(x_k)_{k \in \mathbb{N}}$ 在 $X$ 中稠密，由关于逐点收敛延拓到全空间的结果可得

$$
\lim_{n \to \infty} \langle x_n^*, x \rangle = \langle x_0^*, x \rangle \quad \text{对所有 } x \in X.
$$

因此 $(x_n^*)_{n \in \mathbb{N}}$ 是 $K$ 中的一个序列，弱\*收敛于 $x_0^*$，故 $x_0^* \in K$。这证明了前述弱\*紧子集定理。

## 推论

设 $(M,d)$ 为一个紧致度量空间，$\phi: M \to M$ 为一个同胚映射。则 $M$ 上 $\phi$-不变的 Borel 概率测度集合 $\mathcal{M}(\phi)$ 是 $\mathcal{M}(M) = C(M)^*$ 的一个弱\*紧凸子集。

### 证明

根据定义，集合 $\mathcal{M}(\phi)$ 是凸的、有界的且弱\*闭的（参见小节 3.2.2）。因此，由前述弱\*紧子集定理可知它是弱\*紧的。

## 例子

在前述弱\*紧子集定理中，$X$ 为完备空间的假设不可省略。令 $c_{00}$ 为所有仅含有限个非零项的序列 $x = (x_i)_{i \in \mathbb{N}} \in \ell^\infty$ 构成的集合，配备上确界范数。其闭包是关于 $c_0$ 的例子中的空间 $c_0 \subset \ell^\infty$，其对偶空间同构于 $\ell^1$。一个有界线性泛函序列 $\Lambda_n: c_{00} \to \mathbb{R}$ 在弱\*拓扑下收敛到有界线性泛函 $\Lambda: c_{00} \to \mathbb{R}$，当且仅当 $\lim_{n \to \infty} \Lambda_n(e_i) = \Lambda(e_i)$ 对所有 $i \in \mathbb{N}$ 成立，其中 $e_i := (\delta_{ij})_{j \in \mathbb{N}}$。对 $n \in \mathbb{N}$，定义 $\Lambda_n: X \to \mathbb{R}$ 为 $\Lambda_n(x) := x_n$，其中 $x = (x_i)_{i \in \mathbb{N}} \in X$。则 $n \Lambda_n$ 在弱\*拓扑下收敛到零，故集合 $K := \{n \Lambda_n \mid n \in \mathbb{N}\} \cup \{0\}$ 是 $c_{00} \cong \ell^1$ 的一个无界弱\*紧子集。

## 例子

Banach 空间 $X = \ell^\infty$ 不是可分的。我们证明对于 $X = \ell^\infty$，前述弱\*紧子集定理中的 (1) 不蕴含 (3)，且 (4) 不蕴含其他任何断言。由前述 Banach-Alaoglu 定理（一般情形），$(\ell^\infty)^*$ 中的闭单位球是弱\*紧的，但不是序列弱\*紧的。具体而言，对每个 $n \in \mathbb{N}$，有界线性泛函 $\Lambda_n: \ell^\infty \to \mathbb{R}$ 定义为

$$
\Lambda_n(x) := x_n
$$

其中 $x = (x_i)_{i \in \mathbb{N}} \in \ell^\infty$，其范数 $\|\Lambda_n\| = 1$，而序列 $(\Lambda_n)_{n \in \mathbb{N}}$ 在 $(\ell^\infty)^*$ 中没有弱\*收敛子列（参见关于 $\ell^\infty$ 的例子）。此外，有界集

$$
K := \{\Lambda_n \mid n \in \mathbb{N}\} \subset (\ell^\infty)^*
$$

是序列弱\*闭的，但既不是序列弱\*紧的，也不是弱\*紧的。（练习：找一列弱\*开子集 $U_n \subset (\ell^\infty)^*$，使得对所有 $m, n \in \mathbb{N}$ 且 $m \neq n$，有 $\Lambda_n \in U_n \setminus U_m$。）

## 例子

设 $M$ 为一个局部紧 Hausdorff 空间，它序列紧但不紧。（例如，一个不可数的良序集 $M$，其中每个元素仅有可数多个前驱，配备序拓扑，如文献 [75] 中例 3.6 所示。）令 $\delta: M \to C_0(M)^*$ 为练习中定义的嵌入映射。则 $K := \delta(M)$ 是 $C_0(M)^*$ 中的一个序列弱\*紧子集，但不是弱\*紧的。因此，在前述弱\*紧子集定理中，对于 $X = C_0(M)$，(3) 不蕴含 (1)。
