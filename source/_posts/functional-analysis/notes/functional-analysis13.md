---
title: Ch 3.1.2 弱拓扑和弱*拓扑的基本性质
tags:
  - math
  - functional analysis
categories:
  - math
  - functional analysis
index_img: /img/fa.jpg
banner_img: /img/fa.jpg
excerpt: 泛函分析课程笔记
abbrlink: fb137297
date: 2025-11-13 22:11:18
---
# 动机与定义

一类重要的拓扑向量空间由线性泛函族决定。固定一个实向量空间 $X$，并令
$$
\mathcal{F} \subset \{ f: X \to \mathbb{R} \mid f \text{ 是线性的} \}
$$
为 $X$ 上任意一组线性泛函。定义 $\mathcal{U}_{\mathcal{F}} \subset 2^X$ 为使得每个 $f \in \mathcal{F}$ 连续的最弱拓扑。于是，任一线性泛函 $f \in \mathcal{F}$ 下开区间的原像均为 $X$ 的开子集。因此，集合
$$
V := \{ x \in X \mid a_i < f_i(x) < b_i \text{ 对 } i=1,\dots,m \}
$$
对于所有整数 $m \in \mathbb{N}$、所有 $f_1,\dots,f_m \in \mathcal{F}$ 以及所有满足 $a_i < b_i$（$i=1,\dots,m$）的 $2m$-元实数组 $(a_1,\dots,a_m,b_1,\dots,b_m)$，也是开集。记所有此类子集的集合为
$$
\mathcal{V}_{\mathcal{F}} := \left\{ \bigcap_{i=1}^m f_i^{-1}((a_i,b_i)) \,\middle|\,
\begin{array}{l}
m \in \mathbb{N},\, f_1,\dots,f_m \in \mathcal{F}, \\
a_1,\dots,a_m,b_1,\dots,b_m \in \mathbb{R}, \\
a_i < b_i \text{ 对 } i=1,\dots,m
\end{array}
\right\}.
\tag{3.1.1}
$$

## 引理（开集的有限个泛函逆像构成拓扑基）

设 $X$ 为实向量空间，$\mathcal{F} \subset \mathbb{R}^X$ 为 $X$ 上的一组实值线性泛函，$\mathcal{U}_{\mathcal{F}} \subset 2^X$ 为使得 $\mathcal{F}$ 中所有元素连续的最弱拓扑。则以下结论成立：

1. 集合 $\mathcal{V}_{\mathcal{F}}$（见公式 (3.1.1)）是拓扑 $\mathcal{U}_{\mathcal{F}}$ 的一个基，即
$$
\mathcal{U}_{\mathcal{F}} = \{ U \subset X \mid \forall x \in U\, \exists V \in \mathcal{V}_{\mathcal{F}} \text{ 使得 } x \in V \subset U \}.
\tag{3.1.2}
$$

2. $(X, \mathcal{U}_{\mathcal{F}})$ 是局部凸拓扑向量空间。

3. 序列 $x_n \in X$ 关于拓扑 $\mathcal{U}_{\mathcal{F}}$ 收敛到某元素 $x_0 \in X$，当且仅当对所有 $f \in \mathcal{F}$ 有 $f(x_0) = \lim_{n\to\infty} f(x_n)$。

4. 拓扑空间 $(X, \mathcal{U}_{\mathcal{F}})$ 是Hausdorff空间，当且仅当 $\mathcal{F}$ 能分离点，即对每个非零向量 $x \in X$，存在线性泛函 $f \in \mathcal{F}$ 使得 $f(x) \ne 0$。


### 证明

我们证明**第(i)部分**。首先定义 $$\mathcal{U} := \{ U \subset X \mid \forall x \in U\, \exists V \in \mathcal{V}_{\mathcal{F}} \text{ 使得 } x \in V \subset U \}$$
容易验证 $\mathcal{U}$ 是一个拓扑。

接着证明 $f$ 关于 $\mathcal{U}$ 连续。固定任意 $f \in \mathcal{F}$ 和任意开区间 $(a, b) \subset \mathbb{R}$。考虑原像 $f^{-1}((a, b)) = \{ x \in X \mid a < f(x) < b \}$。
取 $m = 1$, $f_1 = f$, $a_1 = a$, $b_1 = b$，则：
$$f^{-1}((a, b)) = \bigcap_{i=1}^1 f_i^{-1}((a_i, b_i)) \in \mathcal{V}_{\mathcal{F}}.$$
因为 $\mathcal{V}_{\mathcal{F}} \subset \mathcal{U}$（作为基的元素是开的），所以 $f^{-1}((a, b)) \in \mathcal{U}$，即 $f^{-1}((a, b))$ 在 $\mathcal{U}$ 中是开集。
由于 $\mathbb{R}$ 的标准拓扑由开区间生成，且 $f$ 在开区间的原像均为开集，因此 $f$ 在拓扑 $\mathcal{U}$ 下连续。

接着证明 $\mathcal{U}$ 是最弱拓扑。设 $\mathcal{U}'$ 是任意一个使所有 $f \in \mathcal{F}$ 连续的拓扑。
对任意 $f_i \in \mathcal{F}$ 和任意开区间 $(a_i, b_i)$，由于 $f_i$ 在 $\mathcal{U}'$ 下连续，原像 $f_i^{-1}((a_i, b_i))$ 在 $\mathcal{U}'$ 中是开集。对任意 $V \in \mathcal{V}_{\mathcal{F}}$，存在 $m \in \mathbb{N}$, $f_1, \dots, f_m \in \mathcal{F}$, $a_i < b_i$，使得：
$$V = \bigcap_{i=1}^m f_i^{-1}((a_i, b_i)).$$
因为 $\mathcal{U}'$ 在有限交下封闭，且每个 $f_i^{-1}((a_i, b_i)) \in \mathcal{U}'$，所以 $V \in \mathcal{U}'$。因此，$\mathcal{V}_{\mathcal{F}} \subset \mathcal{U}'$。由于 $\mathcal{U}$ 是由基 $\mathcal{V}_{\mathcal{F}}$ 生成的拓扑（即 $\mathcal{U}$ 中的开集是 $\mathcal{V}_{\mathcal{F}}$ 中元素的任意并），且 $\mathcal{U}'$ 包含 $\mathcal{V}_{\mathcal{F}}$ 且是一个拓扑，因此 $\mathcal{U} \subset \mathcal{U}'$。这表明 $\mathcal{U}$ 比任何使 $\mathcal{F}$ 中所有元素连续的拓扑 $\mathcal{U}'$ 更弱，因此 $\mathcal{U}$ 是使所有 $f \in \mathcal{F}$ 连续的最弱拓扑，即 $\mathcal{U} = \mathcal{U}_{\mathcal{F}}$。

由以上，$\mathcal{U}_{\mathcal{F}} = \mathcal{U}$，且 $\mathcal{V}_{\mathcal{F}}$ 是 $\mathcal{U}$ 的一个基，因此 $\mathcal{V}_{\mathcal{F}}$ 是拓扑 $\mathcal{U}_{\mathcal{F}}$ 的一个基。即：
$$\mathcal{U}_{\mathcal{F}} = \{ U \subset X \mid \forall x \in U\, \exists V \in \mathcal{V}_{\mathcal{F}} \text{ 使得 } x \in V \subset U \}.$$
这完成了第 (i) 部分的证明。

我们证明**第(ii)部分**。首先证明标量乘法关于 $\mathcal{U}_{\mathcal{F}}$ 连续。固定集合 $V \in \mathcal{V}_{\mathcal{F}}$，并设 $\lambda_0 \in \mathbb{R}$ 和 $x_0 \in X$ 使得 $\lambda_0 x_0 \in V$。由 $\mathcal{V}_{\mathcal{F}}$ 的定义（见公式 (3.1.1)），存在常数 $\delta > 0$ 使得
$$
\delta \ne |\lambda_0|, \quad (\lambda_0 - \delta)x_0 \in V, \quad (\lambda_0 + \delta)x_0 \in V.
$$
定义
$$
U := \frac{1}{\lambda_0 - \delta} V \cap \frac{1}{\lambda_0 + \delta} V.
$$
则 $U \in \mathcal{V}_{\mathcal{F}}$ 且 $x_0 \in U$。此外，若 $x \in U$ 且 $\lambda \in \mathbb{R}$ 满足 $|\lambda - \lambda_0| < \delta$，则 $(\lambda_0 - \delta)x \in V$ 且 $(\lambda_0 + \delta)x \in V$，故 $\lambda x \in V$，因为 $V$ 是凸集。这表明标量乘法是连续的。

我们证明加法是连续的。固定元素 $W \in \mathcal{V}_{\mathcal{F}}$，并设 $x_0, y_0 \in X$ 使得 $x_0 + y_0 \in W$。定义集合
$$
U := \frac{1}{2}(x_0 - y_0) + \frac{1}{2}W, \quad V := \frac{1}{2}(y_0 - x_0) + \frac{1}{2}W.
$$
则由公式 (3.1.1)，$U,V \in \mathcal{V}_{\mathcal{F}}$。此外，$x_0 \in U$，$y_0 \in V$，且对所有 $x \in U$ 和所有 $y \in V$，由于 $W$ 是凸集，有 $x + y \in W$。这表明加法是连续的。因此 $(X, \mathcal{U}_{\mathcal{F}})$ 是拓扑向量空间。$(X, \mathcal{U}_{\mathcal{F}})$ 是局部凸的，是因为 $\mathcal{V}_{\mathcal{F}}$ 中的元素均为凸集。这证明了第(ii)部分。

我们证明**第(iii)部分**。固定序列 $(x_n)_{n\in\mathbb{N}}$ 在 $X$ 中和元素 $x_0 \in X$。假设 $x_n$ 关于拓扑 $\mathcal{U}_{\mathcal{F}}$ 收敛到 $x_0$。设 $f \in \mathcal{F}$ 并固定常数 $\varepsilon > 0$。则集合
$$
U := \{ x \in X \mid |f(x) - f(x_0)| < \varepsilon \}
$$
是 $\mathcal{V}_{\mathcal{F}}$ 的一个元素，因而属于 $\mathcal{U}_{\mathcal{F}}$。由于 $x_0 \in U$，存在正整数 $n_0$ 使得对每个整数 $n \ge n_0$ 有 $x_n \in U$。因此我们已证：
$$
\forall f \in \mathcal{F}\, \forall \varepsilon > 0\, \exists n_0 \in \mathbb{N}\, \forall n \in \mathbb{N}: (n \ge n_0 \implies |f(x_n) - f(x_0)| < \varepsilon).
$$
这意味着
$$
\lim_{n\to\infty} f(x_n) = f(x_0)
$$
对所有 $f \in \mathcal{F}$ 成立。

反之，假设对所有 $f \in \mathcal{F}$ 有 $\lim_{n\to\infty} f(x_n) = f(x_0)$，并设 $U \in \mathcal{U}_{\mathcal{F}}$ 使得 $x_0 \in U$。则存在集合
$$
V = \bigcap_{i=1}^m f_i^{-1}((a_i,b_i)) \in \mathcal{V}_{\mathcal{F}}
$$
使得 $x_0 \in V \subset U$。这意味着对 $i=1,\dots,m$ 有 $a_i < f_i(x_0) < b_i$。由于 $\lim_{n\to\infty} f_i(x_n) = f_i(x_0)$，存在正整数 $n_0$ 使得对每个整数 $n \ge n_0$ 和每个 $i \in \{1,\dots,m\}$ 有 $a_i < f_i(x_n) < b_i$。因此对每个整数 $n \ge n_0$ 有 $x_n \in V \subset U$，这就证明了第(iii)部分。

我们证明**第(iv)部分**。首先假设 $X$ 是Hausdorff空间，并设 $x \in X \setminus \{0\}$。则存在开集 $U \subset X$ 使得
$$
0 \in U, \quad x \notin U.
$$
选择集合 $V = \bigcap_{i=1}^m f_i^{-1}((a_i,b_i)) \in \mathcal{V}_{\mathcal{F}}$ 使得
$$
0 \in V \subset U.
$$
由于 $0 \in V$，有 $a_i < 0 < b_i$ 对所有 $i \in \{1,\dots,m\}$ 成立。由于 $x \notin V$，存在指标 $i \in \{1,\dots,m\}$ 使得 $f_i(x) \notin (a_i,b_i)$，因此 $f_i(x) \ne 0$。

反之，假设对每个 $x \in X$，存在元素 $f \in \mathcal{F}$ 使得 $f(x) \ne 0$。设 $x_0, x_1 \in X$ 使得 $x_0 \ne x_1$，并选择 $f \in \mathcal{F}$ 使得 $f(x_1 - x_0) \ne 0$。选择 $\varepsilon > 0$ 使得 $2\varepsilon < |f(x_1 - x_0)|$，并考虑集合
$$
U_i := \{ x \in X \mid |f(x - x_i)| < \varepsilon \}
$$
对 $i=0,1$。则 $U_0, U_1 \in \mathcal{V}_{\mathcal{F}} \subset \mathcal{U}_{\mathcal{F}}$，$x_0 \in U_0$，$x_1 \in U_1$，且 $U_0 \cap U_1 = \emptyset$。这证明了第(iv)部分及引理。

## 定义（弱拓扑）

设 $X$ 是一个实赋范向量空间。$X$ 上的**弱拓扑**是使得每个有界线性泛函 $\Lambda: X \to \mathbb{R}$ 都连续的最弱拓扑 $\mathcal{U}^w \subset 2^X$。

### 注
1. 弱拓扑是关于一族映射生成初拓扑的引理中所述拓扑 $\mathcal{U}_\mathcal{F} \subset 2^X$ 的特例，其中 $\mathcal{F} := X^*$ 是对偶空间。由 Hahn–Banach 定理的一个推论可知，对偶空间能够分离点，即对于每个 $x \in X \setminus \{0\}$，存在 $x^* \in X^*$ 使得 $\langle x^*, x \rangle \neq 0$。因此，上述引理断言 $(X, \mathcal{U}^w)$ 是一个局部凸的豪斯多夫拓扑向量空间。

2. 由连续线性泛函的基本性质可知，每个有界线性泛函关于由范数诱导的**强拓扑** $\mathcal{U}^s := \mathcal{U}(X, \|\cdot\|)$ 是连续的。因此，
$$
\mathcal{U}^w \subset \mathcal{U}^s.
$$
当 $X$ 是有限维空间时，弱拓扑与强拓扑一致。

3. 设 $(x_n)_{n \in \mathbb{N}}$ 是 $X$ 中的一个序列，且 $x \in X$。则上述引理断言，$x_n$ 在弱拓扑下收敛于 $x$ 当且仅当
$$
\langle x^*, x \rangle = \lim_{n \to \infty} \langle x^*, x_n \rangle \quad \text{对所有 } x^* \in X^*.
$$
此时我们记作 $x_n \overset{\mathrm{w}}{\to} x$ 或 $x = \mathrm{w}\text{-}\lim_{n \to \infty} x_n$。

!!! note 弱邻域的“有限控制”结构
    弱邻域形如：
    $$N(x_0; f_1,\dots,f_n;\varepsilon) = \{ x \in X : |f_i(x-x_0)| < \varepsilon,\ i=1,\dots,n \}$$
    它只限制 $x$ 与 $x_0$ 在 $f_1,\dots,f_n$ 这有限个线性泛函上的差异，而在这些泛函的零空间
    $$Z = \bigcap_{i=1}^n \ker f_i$$
    （对于 $X$ 是无穷维的情况来说是一个无穷维子空间）上完全自由。因此，弱邻域在 $Z$ 方向上是无界的，可以沿 $Z$ 任意移动而不离开邻域。

## 定义(弱\*拓扑)

设 $X$ 是一个实赋范向量空间，令 $X^* = \mathcal{L}(X, \mathbb{R})$ 为其对偶空间。则$X^*$ 上的**弱\*拓扑**是使得对所有 $x \in X$，线性泛函 $\iota(x): X^* \to \mathbb{R}$（在自然嵌入中定义）都连续的最弱拓扑 $\mathcal{U}^{w^*} \subset 2^{X^*}$。

### 注
1. 它是关于一族映射生成初拓扑的引理中所述拓扑 $\mathcal{U}_\mathcal{F} \subset 2^{X^*}$ 的特例，其中 $\mathcal{F} := \iota(X) \subset X^{**}$。这个线性泛函族能够分离点，即对于每个 $x^* \in X^* \setminus \{0\}$，存在元素 $x \in X$ 使得 $\langle x^*, x \rangle \neq 0$。因此，上述引理断言 $(X^*, \mathcal{U}^{w^*})$ 是一个局部凸的豪斯多夫拓扑向量空间。

2. 记 $\mathcal{U}^s \subset 2^{X^*}$ 为由范数诱导的强拓扑，记 $\mathcal{U}^w \subset 2^{X^*}$ 为上例中的弱拓扑。则有
$$
\mathcal{U}^{w^*} \subset \mathcal{U}^w \subset \mathcal{U}^s.
$$
当 $X$ 是自反Banach空间时，弱拓扑与弱*拓扑一致。

3. 设 $(x_n^*)_{n \in \mathbb{N}}$ 是 $X^*$ 中的一个序列，且 $x^* \in X^*$。则上述引理断言，$x_n^*$ 在弱\*拓扑下收敛于 $x^*$ 当且仅当
$$
\langle x^*, x \rangle = \lim_{n \to \infty} \langle x_n^*, x \rangle \quad \text{对所有 } x \in X.
$$
此时我们记作 $x_n^* \overset{\mathrm{w}^*}{\rightharpoonup} x^*$ 或 $x^* = \mathrm{w}^*-\lim_{n \to \infty} x_n^*$。


# 弱拓扑的基本性质

在无限维Banach空间中，强闭集比弱闭集更多。然而，对于凸集，这两种概念是一致的。因此，Banach空间的一个线性子空间是闭的当且仅当它是弱闭的。

## 闭凸集是弱闭的

设 $X$ 为一个实赋范向量空间，$K \subset X$ 为一个凸子集。则 $K$ 是闭的当且仅当它是弱闭的。

### 证明

设 $K \subset X$ 为一个闭凸集。我们证明它是弱闭的。为此，固定一个元素 $x_0 \in X \setminus K$。则存在一个常数 $\delta > 0$，使得 $B_\delta(x_0) \cap K = \emptyset$。由 Hahn–Banach 分离定理，取 $A := B_\delta(x_0)$ 和 $B := K$，存在一个 $x^* \in X^*$ 和一个 $c \in \mathbb{R}$，使得 $\langle x^*, x \rangle > c$ 对所有 $x \in B_\delta(x_0)$ 成立，且 $\langle x^*, x \rangle \leq c$ 对所有 $x \in K$ 成立。于是
$$
U := \{x \in X \mid \langle x^*, x \rangle > c\}
$$
是一个包含 $x_0$ 且与 $K$ 不相交的弱开集。这表明 $X \setminus K$ 是弱开的，故 $K$ 是弱闭的。反之，$X$ 的每一个弱闭子集都是闭的，这证明了该引理。


## 有界线性泛函是弱连续的

设 $X$ 为一个实赋范向量空间，$\Lambda: X \to \mathbb{R}$ 为一个线性泛函。则 $\Lambda$ 关于 $X$ 上的范数拓扑连续当且仅当它关于弱拓扑连续。这直接由弱拓扑的定义得出。


## 预零化子

设 $X$ 为一个实赋范向量空间，$T \subset X^*$ 为对偶空间 $X^* = \mathcal{L}(X, \mathbb{R})$ 的一个子集。集合
$$
^\perp T := \{x \in X \mid \langle x^*, x \rangle = 0 \text{ 对所有 } x^* \in T\}
$$
被称为 $T$ 的**预零化子**或**左零化子**或**联合核**。它是 $X$ 的一个闭线性子空间。


## 子空间的弱闭包

设 $X$ 为一个实赋范向量空间，$E \subset X$ 为一个线性子空间。则以下结论成立：

1. $E$ 的闭包是子空间 $\overline{E} = {}^\perp(E^\perp)$，且与 $E$ 的弱闭包一致。

2. $E$ 是闭的当且仅当 $E$ 是弱闭的，当且仅当 $E = {}^\perp(E^\perp)$。

3. $E$ 是稠密的当且仅当 $E$ 是弱稠密的，当且仅当 $E^\perp = \{0\}$。

### 证明

公式 $\overline{E} = {}^\perp(E^\perp)$ 是对偶理论中标准结果的重述。该子空间也是 $E$ 的弱闭包，这由弱拓扑的基本性质以及闭凸集是弱闭的这一事实得出。这证明了 (1)。(2) 和 (3) 部分直接由 (1) 得出，这证明了该推论。

## 凸包
该引理表明，在Banach空间中，一个弱收敛序列的极限包含在该序列的闭凸包内。

设 $X$ 为一个实向量空间，$S \subset X$。集合
$$
\operatorname{conv}(S) := \left\{ \sum_{i=1}^n \lambda_i x_i \,\middle|\, n \in \mathbb{N},\, x_i \in S,\, \lambda_i \geq 0,\, \sum_{i=1}^n \lambda_i = 1 \right\}
$$
是凸的，被称为 $S$ 的**凸包**。如果 $X$ 是一个拓扑向量空间，则集合 $S \subset X$ 的凸包的闭包被称为 $S$ 的**闭凸包**，并记作 $\overline{\operatorname{conv}}(S)$。


## Mazur 引理

设 $X$ 为一个实赋范向量空间，$x_i \in X$ 为一个弱收敛于 $x$ 的序列。则
$$
x \in \overline{\operatorname{conv}}(\{x_i \mid i \in \mathbb{N}\}),
$$
即，对每个 $\varepsilon > 0$，存在一个 $n \in \mathbb{N}$ 和实数 $\lambda_1, \dots, \lambda_n$，使得 $\lambda_i \geq 0$ 对所有 $i$ 成立，$\sum_{i=1}^n \lambda_i = 1$，且 $\left\| x - \sum_{i=1}^n \lambda_i x_i \right\| < \varepsilon$。

!!! note
    直观上，若一点 $x$ 不在 $C$ 的范数闭包中，则由 Hahn-Banach 定理存在一个连续线性泛函 $f$ 严格分离 $x$ 与 $C$。于是 $f$ 给出的弱邻域就将 $x$ 与 $C$ 分离，故 $x$ 也不在弱闭包中。这说明了尽管弱拓扑更粗，但连续线性泛函足够多，足以分离凸集与外点。

### 证明

集合 $K := \operatorname{conv}(\{x_i \mid i \in \mathbb{N}\})$ 是凸的，因此其强闭包 $\overline{K}$ 也是凸的。故由闭凸集是弱闭的可知 $\overline{K}$ 是弱闭的。由于 $x_i \in K$ 弱收敛于 $x$，故 $x \in \overline{K}$。


> 由 Mazur 引理可知，在Banach空间 $X$ 中，单位球面 $S \subset X$ 的每个弱收敛序列的弱极限都包含在闭单位球 $B = \operatorname{conv}(S) = \overline{\operatorname{conv}}(S)$ 内。事实上，当 $X$ 是无限维时，$B$ 就是 $S$ 的弱闭包，因此弱拓扑严格弱于范数拓扑。

## 单位球面的弱闭包

设 $X$ 为一个无限维实赋范向量空间，并定义
$$
S := \{x \in X \mid \|x\| = 1\}, \quad B := \{x \in X \mid \|x\| \leq 1\}.
$$
则 $B$ 是 $S$ 的弱闭包。

!!! note
    直观上，这是因为弱拓扑比范数拓扑更粗，其邻域仅由有限个线性泛函控制，从而允许我们通过沿“未被检测”的方向扰动球内的点，使其达到球面，同时保持弱逼近。

### 证明

由闭凸集是弱闭的可知，集合 $B$ 是弱闭的，因此包含 $S$ 的弱闭包。我们证明 $B$ 包含于 $S$ 的弱闭包内。为此，令 $x_0 \in B$，并令 $U \subset X$ 为一个包含 $x_0$ 的弱开集。则存在元素 $x_1^*, \dots, x_n^* \in X^*$ 和一个常数 $\varepsilon > 0$，使得
$$
V := \{x \in X \mid |\langle x_i^*, x - x_0 \rangle| < \varepsilon \text{ 对 } i = 1, \dots, n \text{ 成立}\} \subset U.
$$
由于 $X$ 是无限维的，存在一个非零向量 $\xi \in X$，使得
$$
\langle x_i^*, \xi \rangle = 0 \quad \text{对 } i = 1, \dots, n \text{ 成立}.
$$
由于 $\|x_0\| \leq 1$，存在一个实数 $t$，使得 $\|x_0 + t\xi\| = 1$。因此 $x_0 + t\xi \in V \cap S$，故 $U \cap S \neq \emptyset$。于是 $x_0$ 属于 $S$ 的弱闭包，这完成了该引理的证明。


> 鉴于单位球面的弱闭包这一结果，需要知道：$B$ 中的每个元素是否都是 $S$ 中某个弱收敛序列的极限？答案通常是否定的。例如，$\ell^1$ 中的一个序列弱收敛当且仅当它强收敛。因此，$\ell^1$ 中每个范数为1的弱收敛序列的极限再次具有范数1。结论是Banach空间中一个子集的弱闭包通常比该子集中所有弱收敛序列的极限集合要大得多。


# 弱\*拓扑的基本性质

当 $X$ 是一个Banach空间，$Y$ 是其一个稠密子空间时，对偶空间 $X^*$ 和 $Y^*$ 在典范意义下同构，因为 $Y$ 上的每个有界线性泛函都可以唯一地延拓为 $X$ 上的一个有界线性泛函。该延拓具有与 $Y$ 上原线性泛函相同的范数，因此典范同构 $X^* \to Y^*: x^* \mapsto x^*|_Y$ 是一个等距映射。然而，$X^*$ 和 $Y^*$ 的弱\*拓扑可能会截然不同。具体而言，根据“弱\*连续线性泛函的刻画”定理的 (i) 部分，$Y^*$ 上的弱\*连续线性泛函空间可以被识别为原始的赋范向量空间 $Y$，因此可能比 $X^*$ 上的弱\*连续线性泛函空间小得多。换言之，一个赋范向量空间的完备化是一个Banach空间，且两个空间具有相同的对偶空间，但它们的弱\*拓扑却不同。因此，在处理赋范向量空间的对偶空间的弱\*拓扑与Banach空间的对偶空间的弱\*拓扑时，必须格外小心。


## 弱\*连续线性泛函

设 $X$ 为一个实赋范向量空间，并令
$$
\Lambda: X^* \to \mathbb{R}
$$
为其对偶空间上的一个线性泛函。则以下条件等价：

1. $\Lambda$ 关于 $X^*$ 上的弱\*拓扑是连续的。

2. $\Lambda$ 的核是 $X^*$ 的一个弱\*闭线性子空间。

3. $\Lambda$ 属于包含映射 $\iota: X \to X^{**}$（见 (2.4.1)）的像，即存在一个元素 $x \in X$，使得对所有 $x^* \in X^*$，有 $\Lambda(x^*) = \langle x^*, x \rangle$。

### 证明

这直接由“弱\*连续线性泛函的刻画”定理以及弱\*拓扑的定义得出。


## 子空间的弱\*闭包

设 $X$ 为一个实赋范向量空间，$E \subset X^*$ 为其对偶空间的一个线性子空间。则以下结论成立：

1. 线性子空间 $(^\perp E)^\perp$ 是 $E$ 的弱\*闭包。

2. $E$ 是弱\*闭的当且仅当 $E = (^\perp E)^\perp$。

3. $E$ 在 $X^*$ 中是弱\*稠密的当且仅当 $^\perp E = \{0\}$。

### 证明

由“弱\*连续线性泛函”推论可知，$E$ 的预零化子是 $X^*$ 上在 $E$ 上消失的弱\*连续线性泛函的空间。因此，(1) 部分由“弱\*连续线性泛函的刻画”定理的 (ii) 部分得出。(2) 部分直接由 (1) 得出。(3) 部分由 (1) 以及推论 2.3.4 的事实“任意子集 $S \subset X$ 满足 $S^\perp = X^*$ 当且仅当 $S \subset \{0\}$”得出。这证明了“子空间的弱\*闭包”推论。



## 凸集分离

设 $X$ 为一个实赋范向量空间，$A, B \subset X^*$ 为非空、不相交的凸集，且 $A$ 是弱\*开的。则存在一个元素 $x \in X$，使得
$$
\langle x^*, x \rangle > \sup_{y^* \in B} \langle y^*, x \rangle \quad \text{对所有 } x^* \in A \text{ 成立}.
$$

### 证明

“局部凸空间中的分离定理”和“弱\*连续线性泛函”推论。

## 单位球面的弱\*闭包

设 $X$ 为一个无限维实赋范向量空间，并定义
$$
S^* := \{x^* \in X^* \mid \|x^*\| = 1\}, \quad B^* := \{x^* \in X^* \mid \|x^*\| \leq 1\}.
$$
则 $B^*$ 是 $S^*$ 的弱\*闭包。

### 证明

令 $F_x := \{x^* \in X^* \mid \langle x^*, x \rangle \leq 1\}$ 对 $x \in S$（$X$ 中的单位球面）成立。则对所有 $x \in S$，$F_x$ 是弱\*闭的，因此 $B^* = \bigcap_{x \in S} F_x$ 也是弱\*闭的。现在令 $K \subset X^*$ 为 $S^*$ 的弱\*闭包。则 $K \subset B^*$，因为 $B^*$ 是一个包含 $S^*$ 的弱\*闭集；且 $B^* \subset K$，因为 $K$ 是一个包含 $S^*$ 的弱闭集，而 $B^*$ 是 $S^*$ 的弱闭包（由引理 3.1.21）。

## Goldstine 定理

设 $X$ 为一个实赋范向量空间，$\iota: X \to X^{**}$ 为包含映射 (2.4.1)。则以下结论成立：

1. $\iota(X)$ 在 $X^{**}$ 中是弱\*稠密的。

2. 假设 $X$ 是无限维的，并记 $S \subset X$ 为闭单位球面。则 $\iota(S)$ 的弱\*闭包是闭单位球 $B^{**} \subset X^{**}$。

### 证明

由定义，$^\perp \iota(X) = \{0\}$，故 (1) 由“子空间的弱\*闭包”推论得出。为证明 (2)，令 $K \subset X^{**}$ 为 $\iota(S)$ 的弱\*闭包。则 $K \subset B^{**}$，因为 $B^{**}$ 是弱\*闭的（由“单位球面的弱\*闭包”推论）。此外，集合 $\iota^{-1}(K) \subset X$ 是弱闭的（由练习 3.1.24），且 $S \subset \iota^{-1}(K)$。因此，由引理 3.1.21 可得 $B \subset \iota^{-1}(K)$，从而 $\iota(B) \subset K$，所以 $K$ 是 $\iota(B)$ 的弱\*闭包。于是 $K$ 是凸的（由引理 3.1.10）。现在令 $x_0^{**} \in X^{**} \setminus K$ 并选择一个凸的弱\*开邻域 $U \subset X^{**}$ 使得 $U \cap K = \emptyset$。那么，由“凸集分离”推论，存在一个元素 $x_0^* \in X^*$，使得
$$
\langle x_0^{**}, x_0^* \rangle > \sup_{x^{**} \in K} \langle x^{**}, x_0^* \rangle \geq \sup_{x \in S} \langle \iota(x), x_0^* \rangle = \sup_{x \in S} \langle x_0^*, x \rangle = \|x_0^*\|.
$$
因此 $\|x_0^{**}\| > 1$，故 $x_0^{**} \notin B^{**}$。于是 $B^{**} \subset K \subset B^{**}$，所以 $B^{**} = K$。这证明了 Goldstine 定理。


Goldstine 定理表明，与弱拓扑相反，$X^*$ 的一个闭线性子空间不一定弱\*闭。例如，空间 $c_0$（例 1.3.7）是 $\ell^\infty \cong (\ell^1)^*$ 的一个闭线性子空间，但在弱\*拓扑下是稠密的，因此不是弱\*闭的。对弱\*闭子空间的研究将在第 3.3 节中再次展开。