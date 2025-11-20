---
title: Ch 3.1.1 拓扑向量空间
tags:
  - math
  - functional analysis
categories:
  - math
  - functional analysis
index_img: /img/fa.jpg
banner_img: /img/fa.jpg
excerpt: 泛函分析课程笔记
abbrlink: 5d8d4333
date: 2025-11-12 19:39:37
---
# 动机
本章致力于研究Banach空间 $X$ 上的弱拓扑及其对偶空间 $X^*$ 上的弱\*拓扑。借助这些拓扑，$X$ 和 $X^*$ 均成为局部凸Hausdorff拓扑向量空间，此类空间的基本性质在下一节中讨论。特别地，我们证明了 $X^*$ 中的闭单位球是单位球面的弱\*闭包，并且 $X^*$ 上的一个线性泛函关于弱\*拓扑连续，当且仅当它属于典范嵌入 $\iota: X \to X^{**}$ 的像。

本章的核心结果是下一节中的Banach–Alaoglu定理，该定理断言：对偶空间 $X^*$ 中的单位球关于弱\*拓扑是紧的。此定理在数学诸多领域具有重要推论。对偶空间上弱\*拓扑的进一步性质在随后一节中建立。我们证明了 $X^*$ 的一个线性子空间是弱\*闭的，当且仅当它与闭单位球的交集是弱\*闭的。作为Banach–Alaoglu定理的一个推论，反射性Banach空间中的单位球是弱紧的。Eberlein–Šmulian定理指出，这一性质刻画了反射性Banach空间。

下一节中的Kreĭn–Milman定理断言：任意局部凸Hausdorff拓扑向量空间中的非空紧凸子集，都是其极点的凸包。结合Kreĭn–Milman定理与Banach–Alaoglu定理，可以证明：任何紧度量空间的同胚映射均容许一个不变的遍历Borel概率测度。此类遍历测度的一些性质在最后一节中探讨。


# 定义与例子

回顾：两个拓扑空间 $X$ 和 $Y$ 的乘积 $X \times Y$ 上的**乘积拓扑**被定义为包含所有形如 $U \times V$ 的子集的最弱拓扑，其中 $U \subset X$ 和 $V \subset Y$ 是开集。等价地，它是使得投影映射 $\pi_X: X \times Y \to X$ 和 $\pi_Y: X \times Y \to Y$ 均连续的最弱拓扑。

## 定义（拓扑向量空间）

一个**拓扑向量空间**是一个二元组 $(X, \mathcal{U})$，其中 $X$ 是实向量空间，$\mathcal{U} \subset 2^X$ 是一个拓扑，使得结构映射
$$
X \times X \to X : (x,y) \mapsto x+y, \qquad \mathbb{R} \times X \to X : (\lambda,x) \mapsto \lambda x
$$
关于 $X \times X$ 和 $\mathbb{R} \times X$ 上的乘积拓扑是连续的。若对每个开集 $U \subset X$ 及每个 $x \in U$，均存在开集 $V \subset X$ 使得
$$
x \in V \subset U, \quad V \text{ 是凸集},
$$
则称拓扑向量空间 $(X, \mathcal{U})$ 为**局部凸**的。

## 例（强拓扑）

赋范向量空间 $(X, \|\cdot\|)$ 在由范数诱导的拓扑 $\mathcal{U}^s := \mathcal{U}(X, \|\cdot\|)$ 下构成拓扑向量空间。此拓扑有时被称为**强拓扑**或**范数拓扑**，以区别于后文讨论的更弱的拓扑。

## 例（光滑函数）

设 $X := C^\infty(\Omega)$ 表示定义在 $\mathbb{R}^n$ 的开子集 $\Omega$ 上的所有光滑函数组成的空间。这是一个局部凸Hausdorff拓扑向量空间，其拓扑由紧集上所有导数的一致收敛性给出，并由完备度量
$$
d(f,g) := \sum_{\ell=1}^\infty 2^{-\ell} \frac{\|f-g\|_{C^\ell(K_\ell)}}{1 + \|f-g\|_{C^\ell(K_\ell)}}
\tag{1}
$$
诱导。其中 $K_\ell \subset \Omega$ 是一列穷竭的紧集。

## 例

设 $X$ 为实向量空间。则 $(X, \mathcal{U})$ 是拓扑向量空间，其中 $\mathcal{U} := \{\emptyset, X\}$，但不是离散拓扑。

## 例（测度意义下的收敛）

设 $(M, \mathcal{A}, \mu)$ 为测度空间且 $\mu(M) < \infty$。记 $\mathcal{L}^0(\mu)$ 为 $M$ 上所有实值可测函数构成的向量空间，并定义
$$
L^0(\mu) := \mathcal{L}^0(\mu)/\!\sim,
$$
其中等价关系由“几乎处处相等”给出。在 $L^0(\mu)$ 上定义度量：
$$
d(f,g) := \int_M \frac{|f - g|}{1 + |f - g|}\, d\mu \quad \text{对于 } f,g \in \mathcal{L}^0(\mu).
$$

那么 $L^0(\mu)$ 是一个由度量 $d$ 诱导拓扑的拓扑向量空间。序列 $f_n \in L^0(\mu)$ 在该拓扑下收敛到 $f \in L^0(\mu)$ 当且仅当它**依测度收敛**，即
$$
\lim_{n\to\infty} \mu\big( \{x \in M \mid |f_n(x) - f(x)| > \varepsilon\} \big) = 0 \quad \text{对所有 } \varepsilon > 0.
$$

一般而言，具有依测度收敛拓扑的拓扑向量空间 $L^0(\mu)$ 不是局部凸的。

> **练习**：证明 $L^0([0,1])$ 中每个非空开凸子集都是全空间。由此推出，每个连续线性泛函 $\Lambda: L^0([0,1]) \to \mathbb{R}$ 必然恒为零。

一个重要类别的拓扑向量空间由线性泛函族决定，如下所述。固定一个实向量空间 $X$，并令
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

## 引理

设 $X$ 为实向量空间，$\mathcal{F} \subset \mathbb{R}^X$ 为 $X$ 上的一组实值线性泛函，$\mathcal{U}_{\mathcal{F}} \subset 2^X$ 为使得 $\mathcal{F}$ 中所有元素连续的最弱拓扑。则以下结论成立：

**(i)** 集合 $\mathcal{V}_{\mathcal{F}}$（见公式 (3.1.1)）是拓扑 $\mathcal{U}_{\mathcal{F}}$ 的一个基，即
$$
\mathcal{U}_{\mathcal{F}} = \{ U \subset X \mid \forall x \in U\, \exists V \in \mathcal{V}_{\mathcal{F}} \text{ 使得 } x \in V \subset U \}.
\tag{3.1.2}
$$

**(ii)** $(X, \mathcal{U}_{\mathcal{F}})$ 是局部凸拓扑向量空间。

**(iii)** 序列 $x_n \in X$ 关于拓扑 $\mathcal{U}_{\mathcal{F}}$ 收敛到某元素 $x_0 \in X$，当且仅当对所有 $f \in \mathcal{F}$ 有 $f(x_0) = \lim_{n\to\infty} f(x_n)$。

**(iv)** 拓扑空间 $(X, \mathcal{U}_{\mathcal{F}})$ 是Hausdorff空间，当且仅当 $\mathcal{F}$ 能分离点，即对每个非零向量 $x \in X$，存在线性泛函 $f \in \mathcal{F}$ 使得 $f(x) \ne 0$。


### 证明

**第(i)部分** 是一道带提示的练习题。根据公式 (3.1.2) 的右边定义集合 $\mathcal{U}_{\mathcal{F}} \subset 2^X$。由定义直接可知，$\mathcal{U}_{\mathcal{F}}$ 是一个拓扑，每个线性泛函 $f: X \to \mathbb{R}$ 在 $\mathcal{F}$ 中关于该拓扑连续，且任何使得 $\mathcal{F}$ 中每个元素连续的拓扑 $\mathcal{U} \subset 2^X$ 必须包含 $\mathcal{V}_{\mathcal{F}}$，从而也包含 $\mathcal{U}_{\mathcal{F}}$。这证明了第(i)部分。

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


## 例（乘积拓扑）

设 $I$ 为任意集合，考虑空间 $X := \mathbb{R}^I$，即所有函数 $x: I \to \mathbb{R}$ 构成的空间。这是一个实向量空间。对 $i \in I$，记在点 $i$ 处的求值映射为 $\pi_i: \mathbb{R}^I \to \mathbb{R}$，即 $\pi_i(x) := x(i)$ 对 $x \in \mathbb{R}^I$。则对每个 $i \in I$，$\pi_i: X \to \mathbb{R}$ 是一个线性泛函。令
$$
\pi := \{ \pi_i \mid i \in I \}
$$
为所有这些求值映射的集合，并记 $\mathcal{U}_\pi$ 为 $X$ 上使得每个投影 $\pi_i$ 连续的最弱拓扑。根据上述引理，该拓扑由公式 (3.1.1) 和 (3.1.2) 给出。它被称为 $\mathbb{R}^I$ 上的**乘积拓扑**。因此，$\mathbb{R}^I$ 是一个具有乘积拓扑的局部凸Hausdorff拓扑向量空间。

## 例（弱拓扑）

设 $X$ 是一个实赋范向量空间。

### (i)

$X$ 上的**弱拓扑**是使得每个有界线性泛函 $\Lambda: X \to \mathbb{R}$ 都连续的最弱拓扑 $\mathcal{U}^w \subset 2^X$。它是关于一族映射生成初拓扑的引理中所述拓扑 $\mathcal{U}_\mathcal{F} \subset 2^X$ 的特例，其中 $\mathcal{F} := X^*$ 是对偶空间。由 Hahn–Banach 定理的一个推论可知，对偶空间能够分离点，即对于每个 $x \in X \setminus \{0\}$，存在 $x^* \in X^*$ 使得 $\langle x^*, x \rangle \neq 0$。因此，上述引理断言 $(X, \mathcal{U}^w)$ 是一个局部凸的豪斯多夫拓扑向量空间。

### (ii)

由连续线性泛函的基本性质可知，每个有界线性泛函关于由范数诱导的**强拓扑** $\mathcal{U}^s := \mathcal{U}(X, \|\cdot\|)$ 是连续的。因此，
$$
\mathcal{U}^w \subset \mathcal{U}^s.
$$
当 $X$ 是有限维空间时，弱拓扑与强拓扑一致。

### (iii)

设 $(x_n)_{n \in \mathbb{N}}$ 是 $X$ 中的一个序列，且 $x \in X$。则上述引理断言，$x_n$ 在弱拓扑下收敛于 $x$ 当且仅当
$$
\langle x^*, x \rangle = \lim_{n \to \infty} \langle x^*, x_n \rangle \quad \text{对所有 } x^* \in X^*.
$$
此时我们记作 $x_n \overset{\mathrm{w}}{\to} x$ 或 $x = \mathrm{w}\text{-}\lim_{n \to \infty} x_n$。

## 例（弱*拓扑）

设 $X$ 是一个实赋范向量空间，令 $X^* = \mathcal{L}(X, \mathbb{R})$ 为其对偶空间。

### (i)

$X^*$ 上的**弱\*拓扑**是使得对所有 $x \in X$，线性泛函 $\iota(x): X^* \to \mathbb{R}$（在自然嵌入中定义）都连续的最弱拓扑 $\mathcal{U}^{w^*} \subset 2^{X^*}$。它是关于一族映射生成初拓扑的引理中所述拓扑 $\mathcal{U}_\mathcal{F} \subset 2^{X^*}$ 的特例，其中 $\mathcal{F} := \iota(X) \subset X^{**}$。这个线性泛函族能够分离点，即对于每个 $x^* \in X^* \setminus \{0\}$，存在元素 $x \in X$ 使得 $\langle x^*, x \rangle \neq 0$。因此，上述引理断言 $(X^*, \mathcal{U}^{w^*})$ 是一个局部凸的豪斯多夫拓扑向量空间。

### (ii)

记 $\mathcal{U}^s \subset 2^{X^*}$ 为由范数诱导的强拓扑，记 $\mathcal{U}^w \subset 2^{X^*}$ 为上例中的弱拓扑。则有
$$
\mathcal{U}^{w^*} \subset \mathcal{U}^w \subset \mathcal{U}^s.
$$
当 $X$ 是自反Banach空间时，弱拓扑与弱*拓扑一致。

### (iii)

设 $(x_n^*)_{n \in \mathbb{N}}$ 是 $X^*$ 中的一个序列，且 $x^* \in X^*$。则上述引理断言，$x_n^*$ 在弱\*拓扑下收敛于 $x^*$ 当且仅当
$$
\langle x^*, x \rangle = \lim_{n \to \infty} \langle x_n^*, x \rangle \quad \text{对所有 } x \in X.
$$
此时我们记作 $x_n^* \overset{\mathrm{w}^*}{\rightharpoonup} x^*$ 或 $x^* = \mathrm{w}^*-\lim_{n \to \infty} x_n^*$。


# 凸集
本小节讨论如何用超平面分离一对非空且不相交的凸集。对于赋范向量空间，该问题已在前面的相关章节中研究过。其主要结论及其证明几乎可以逐字照搬到一般的拓扑向量空间中（参见后文所述的相应定理）。下一个引理表明，在拓扑向量空间中，一个凸子集的闭包和内部仍然是凸集。

## 引理

设 $X$ 是一个拓扑向量空间，且 $K \subset X$ 是一个凸子集。则闭包 $\overline{K}$ 和内部 $\mathrm{int}(K)$ 都是 $X$ 的凸子集。此外，若 $\mathrm{int}(K) \neq \emptyset$，则 $K \subset \overline{\mathrm{int}(K)}$。

### 证明

我们首先证明 $\mathrm{int}(K)$ 是凸集。设 $x_0, x_1 \in \mathrm{int}(K)$，取实数 $0 < \lambda < 1$，并定义  
$$
x_\lambda := (1 - \lambda)x_0 + \lambda x_1.
$$  
选取开集 $U_0, U_1 \subset X$，使得 $x_0 \in U_0 \subset K$ 且 $x_1 \in U_1 \subset K$，并定义  
$$
U := (U_0 - x_0) \cap (U_1 - x_1) = \{x \in X \mid x_0 + x \in U_0,\, x_1 + x \in U_1\}.
$$  
则 $U \subset X$ 是一个包含原点的开集，且满足  
$$
x_0 + U \subset K, \quad x_1 + U \subset K.
$$  
由于 $K$ 是凸集，对任意 $u \in U$，有  
$$
(1 - \lambda)(x_0 + u) + \lambda(x_1 + u) = x_\lambda + u \in K,
$$  
因此 $x_\lambda + U \subset K$。这说明 $x_\lambda$ 有一个开邻域包含于 $K$，故 $x_\lambda \in \mathrm{int}(K)$。

接下来证明闭包 $\overline{K}$ 是凸集。设 $x_0, x_1 \in \overline{K}$，取 $0 < \lambda < 1$，并令 $x_\lambda := (1 - \lambda)x_0 + \lambda x_1$。令 $U$ 是 $x_\lambda$ 的任意开邻域。考虑映射  
$$
T: X \times X \to X, \quad T(y_0, y_1) = (1 - \lambda)y_0 + \lambda y_1,
$$  
它由加法与标量乘法的连续性可知是连续的。因此，集合  
$$
W := T^{-1}(U) = \{(y_0, y_1) \in X \times X \mid (1 - \lambda)y_0 + \lambda y_1 \in U\}
$$  
是 $(x_0, x_1)$ 的一个开邻域。于是存在开集 $U_0, U_1 \subset X$，使得  
$$
x_0 \in U_0, \quad x_1 \in U_1, \quad U_0 \times U_1 \subset W.
$$  
由于 $x_0, x_1 \in \overline{K}$，可知 $U_0 \cap K \neq \emptyset$ 且 $U_1 \cap K \neq \emptyset$。选取  
$$
y_0 \in U_0 \cap K, \quad y_1 \in U_1 \cap K.
$$  
则 $(y_0, y_1) \in W$，从而 $y_\lambda := (1 - \lambda)y_0 + \lambda y_1 \in U \cap K$。这说明每个 $x_\lambda$ 的开邻域 $U$ 都与 $K$ 相交，故 $x_\lambda \in \overline{K}$。

最后证明最后一个断言。假设 $\mathrm{int}(K) \neq \emptyset$，并任取 $x \in K$。固定一点 $y_0 \in \mathrm{int}(K)$，考虑集合  
$$
U_x := \{ t x + (1 - t) y \mid y \in \mathrm{int}(K),\ 0 < t < 1 \}.
$$  
对任意 $z \in U_x$，存在 $y \in \mathrm{int}(K)$ 和 $0 < t < 1$ 使得 $z = t x + (1 - t) y$。由于 $y \in \mathrm{int}(K)$，存在开邻域 $V \subset K$ 包含 $y$。由凸性，$t x + (1 - t) V$ 是包含 $z$ 的开集（因为平移与缩放保持开性），且完全包含于 $K$。因此 $z \in \mathrm{int}(K)$，即 $U_x \subset \mathrm{int}(K)$。

另一方面，当 $t \to 1^-$ 时，点 $t x + (1 - t) y_0 \to x$，故 $x$ 是 $U_x$ 的极限点。因此 $x \in \overline{U_x} \subset \overline{\mathrm{int}(K)}$。由于 $x \in K$ 是任意的，得到 $K \subset \overline{\mathrm{int}(K)}$。



## 凸集分离定理

设 $X$ 为一个拓扑向量空间，$A, B \subset X$ 为两个非空、不相交的凸子集，且 $A$ 是开集。则存在一个连续线性泛函 $\Lambda: X \to \mathbb{R}$，使得  
$$
\Lambda(x) > \sup_{y \in B} \Lambda(y) \quad \text{对所有 } x \in A \text{ 成立}.
$$

### 证明

我们首先考虑 $B = \{0\}$ 的特殊情况。定义集合  
$$
P := \{ t x \mid x \in A,\ t \geq 0 \}.
$$  
由于 $A$ 是非空开凸集且 $0 \notin A$，可以验证 $P$ 满足通常用于构造偏序的三条基本性质（即：$P + P \subset P$，$\lambda P \subset P$ 对所有 $\lambda \geq 0$，以及 $P \cap (-P) = \{0\}$）。因此，可在 $X$ 上引入偏序 $\preccurlyeq$，定义为  
$$
x \preccurlyeq y \iff y - x \in P.
$$  
取任意 $x_0 \in A$，并令 $Y := \mathbb{R} x_0$ 为由 $x_0$ 生成的一维子空间。由于 $A$ 是开集且包含 $x_0$，该子空间满足正泛函延拓所需的条件。于是，由关于有序向量空间中正线性泛函的存在性结果可知，存在一个正线性泛函 $\Lambda: X \to \mathbb{R}$（即 $x \in P \Rightarrow \Lambda(x) \geq 0$），使得  
$$
\Lambda(x_0) = 1.
$$

接下来说明 $\Lambda(x) > 0$ 对所有 $x \in A$ 成立。任取 $x \in A$。由于 $A$ 是开集，存在 $\varepsilon > 0$ 使得 $x - \varepsilon x_0 \in A \subset P$。由 $\Lambda$ 的正性得  
$$
\Lambda(x - \varepsilon x_0) \geq 0 \quad \Rightarrow \quad \Lambda(x) \geq \varepsilon \Lambda(x_0) = \varepsilon > 0.
$$

现在证明 $\Lambda$ 是连续的。令  
$$
U := \{ x \in X \mid \Lambda(x) > 0 \}.
$$  
对任意 $x \in U$，定义  
$$
V := \left\{ y \in X \mid x_0 + \frac{1}{\Lambda(x)}(y - x) \in A \right\}.
$$  
由于 $A$ 是开集，且映射 $y \mapsto x_0 + \Lambda(x)^{-1}(y - x)$ 是同胚（由拓扑向量空间的连续运算保证），故 $V$ 是开集。又因 $x \in V$（代入即得 $x_0 \in A$），且对任意 $y \in V$，有  
$$
\Lambda(y) = \Lambda(x) + \Lambda(x) \cdot \Lambda\!\left( \frac{y - x}{\Lambda(x)} \right) = \Lambda(x)\bigl[1 + \Lambda(z)\bigr],
$$  
其中 $z = \frac{y - x}{\Lambda(x)}$ 满足 $x_0 + z \in A$，从而 $z \in P$，故 $\Lambda(z) \geq 0$，进而 $\Lambda(y) > 0$。因此 $V \subset U$，说明 $U$ 是开集。

由于 $\Lambda$ 是线性的，其连续性等价于原点处的连续性，而 $U$ 作为 $\Lambda^{-1}((0, \infty))$ 是开集，表明 $\Lambda$ 在原点邻域内有界，从而连续。这就完成了 $B = \{0\}$ 情形的证明。

对于一般情形，考虑集合  
$$
U := A - B = \{ a - b \mid a \in A,\ b \in B \}.
$$  
由于 $A$ 是开集，$B$ 是任意集合，平移保持开性，故 $U$ 是开集；又因 $A$ 与 $B$ 均为凸集，$U$ 也是凸集；且由 $A \cap B = \emptyset$ 可知 $0 \notin U$。因此，应用上述特殊情况于开凸集 $U$ 与单点集 $\{0\}$，存在连续线性泛函 $\Lambda: X \to \mathbb{R}$，使得  
$$
\Lambda(u) > 0 \quad \text{对所有 } u \in U.
$$  
换言之，对任意 $a \in A$ 和 $b \in B$，有 $\Lambda(a - b) > 0$，即  
$$
\Lambda(a) > \Lambda(b).
$$  
令 $c := \sup_{b \in B} \Lambda(b) \in [-\infty, \infty)$。由于上式对所有 $a \in A$、$b \in B$ 成立，显然 $\Lambda(a) \geq c$ 对所有 $a \in A$ 成立。我们进一步证明严格不等式 $\Lambda(a) > c$。

选取任意 $\xi \in X$ 使得 $\Lambda(\xi) = 1$（这样的 $\xi$ 存在，因为 $\Lambda \not\equiv 0$）。对任意 $a \in A$，由于 $A$ 是开集，存在 $\delta > 0$ 使得 $a - \delta \xi \in A$。于是  
$$
\Lambda(a) = \Lambda(a - \delta \xi) + \delta \Lambda(\xi) = \Lambda(a - \delta \xi) + \delta.
$$  
但 $\Lambda(a - \delta \xi) \geq c$，故  
$$
\Lambda(a) \geq c + \delta > c.
$$  
因此，对所有 $x \in A$，均有 $\Lambda(x) > \sup_{y \in B} \Lambda(y)$


## 引理（线性泛函的基与表示）

设 $X$ 为一个实向量空间，$n \in \mathbb{N}$。则对 $X$ 上任意 $n$ 元组线性无关的线性泛函 $\Lambda_1, \dots, \Lambda_n: X \to \mathbb{R}$，以下结论成立。

1. 存在向量 $x_1, \dots, x_n \in X$，使得
$$
\Lambda_i(x_j) = \delta_{ij} := \begin{cases} 1, & \text{若 } i = j, \\ 0, & \text{若 } i \neq j \end{cases} \quad \text{对 } i,j = 1, \dots, n \text{ 成立}.
$$

2. 若 $\Lambda: X \to \mathbb{R}$ 是一个线性泛函，满足 $\bigcap_{i=1}^n \ker(\Lambda_i) \subset \ker(\Lambda)$，则 $\Lambda \in \operatorname{span}\{\Lambda_1, \dots, \Lambda_n\}$。

### 证明

证明通过对 $n$ 进行归纳。当 $n=1$ 时，(i) 由定义成立。我们证明 $(i)_n$ 蕴含 $(ii)_n$，且 $(ii)_n$ 蕴含 $(i)_{n+1}$ 对所有 $n \in \mathbb{N}$ 成立。

固定一个整数 $n \in \mathbb{N}$ 并假设 $(i)_n$ 成立。令 $\Lambda: X \to \mathbb{R}$ 为一个线性泛函，满足 $\bigcap_{i=1}^n \ker(\Lambda_i) \subset \ker(\Lambda)$。由于 $(i)$ 对 $n$ 成立，存在向量 $x_1, \dots, x_n \in X$，使得 $\Lambda_i(x_j) = \delta_{ij}$ 对 $i,j = 1, \dots, n$ 成立。固定一个元素 $x \in X$。则 $x - \sum_{i=1}^n \Lambda_i(x)x_i \in \bigcap_{j=1}^n \ker(\Lambda_j) \subset \ker(\Lambda)$，这蕴含 $\Lambda(x) = \sum_{i=1}^n \Lambda_i(x)\Lambda(x_i)$。因此 $\Lambda = \sum_{i=1}^n \Lambda(x_i)\Lambda_i$，故 $(ii)$ 对 $n$ 成立。

现在假设 $(ii)_n$ 成立。令 $\Lambda_1, \dots, \Lambda_{n+1}: X \to \mathbb{R}$ 为线性无关的线性泛函，并定义 $Z_i := \bigcap_{j \neq i} \ker(\Lambda_j)$ 对 $i = 1, \dots, n+1$ 成立。则 $\Lambda_i \notin \operatorname{span}\{\Lambda_j \mid j \neq i\}$ 对 $i = 1, \dots, n+1$ 成立。由于 $(ii)$ 对 $n$ 成立，这意味着对每个 $i \in \{1, \dots, n+1\}$，存在一个向量 $x_i \in Z_i$，使得 $\Lambda_i(x_i) = 1$。因此 $(i)$ 在 $n$ 被替换为 $n+1$ 时成立。这完成了归纳论证和引理的证明。\qed


## 引理（线性泛函的等价条件）
设 $X$ 为一个实向量空间，$\Lambda_1, \dots, \Lambda_n: X \to \mathbb{R}$ 和 $\Lambda: X \to \mathbb{R}$ 为线性泛函。则下列条件等价：

1. $\bigcap_{i=1}^n \ker(\Lambda_i) \subset \ker(\Lambda)$。

2. $\Lambda \in \operatorname{span}\{\Lambda_1, \dots, \Lambda_n\}$。

3. 存在常数 $c \geq 0$，使得
$$
|\Lambda(x)| \leq c \max_{i=1,\dots,n} |\Lambda_i(x)| \quad \text{对所有 } x \in X \text{ 成立}.
$$

### 证明

我们证明 (i) 蕴含 (ii)。于是假设 (i) 成立，并选择一个极大子集 $J \subset \{1, \dots, n\}$，使得 $\Lambda_j$ ($j \in J$) 线性无关。则 $\bigcap_{j \in J} \ker(\Lambda_j) = \bigcap_{i=1}^n \ker(\Lambda_i) \subset \ker(\Lambda)$ 由 (i) 得出，因此由引理可知 $\Lambda \in \operatorname{span}\{\Lambda_j \mid j \in J\}$。故 (ii) 成立。

我们证明 (ii) 蕴含 (iii)。于是假设 (ii) 成立，并选择实数 $c_1, \dots, c_n$ 使得 $\Lambda = \sum_{i=1}^n c_i \Lambda_i$。定义 $c := \sum_{i=1}^n |c_i|$。则
$$
|\Lambda(x)| = \left| \sum_{i=1}^n c_i \Lambda_i(x) \right| \leq \sum_{i=1}^n |c_i| \, |\Lambda_i(x)| \leq c \max_{i=1,\dots,n} |\Lambda_i(x)|
$$
对所有 $x \in X$ 成立，故 (iii) 成立。(iii) 蕴含 (i) 是显然的，这证明了引理。\qed

## 定理（拓扑 $\mathcal{U}_\mathcal{F}$）

设 $X$ 为一个实向量空间，$\mathcal{F} \subset \{\Lambda : X \to \mathbb{R} \mid \Lambda \text{ 是线性的}\}$ 是所有线性泛函空间的一个线性子空间。令 $\mathcal{U}_\mathcal{F} \subset 2^X$ 为 $X$ 上使得每个 $\Lambda \in \mathcal{F}$ 均连续的最弱拓扑。该拓扑具有以下性质：

1. 一个线性泛函 $\Lambda: X \to \mathbb{R}$ 是连续的当且仅当它具有闭核，当且仅当 $\Lambda \in \mathcal{F}$。

2. 线性子空间 $E \subset X$ 的闭包是 $\overline{E} = \bigcap_{\Lambda \in \mathcal{F},\, E \subset \ker(\Lambda)} \ker(\Lambda)$。

3. 线性子空间 $E \subset X$ 是闭的当且仅当，对所有 $x \in X$，
$$
x \in E \quad \Longleftrightarrow \quad \Lambda(x) = 0 \text{ 对所有 } \Lambda \in \mathcal{F} \text{ 使得 } E \subset \ker(\Lambda) \text{ 成立}.
$$

4. 线性子空间 $E \subset X$ 是稠密的当且仅当，对所有 $\Lambda \in \mathcal{F}$，
$$
E \subset \ker(\Lambda) \quad \Longrightarrow \quad \Lambda = 0.
$$

### 证明

我们证明 (i)。若 $\Lambda \in \mathcal{F}$，则根据拓扑 $\mathcal{U}_\mathcal{F}$ 的定义，$\Lambda$ 是连续的。若 $\Lambda$ 是连续的，则根据连续性的定义，$\Lambda$ 具有闭核。因此，只需证明：若 $\Lambda$ 具有闭核，则 $\Lambda \in \mathcal{F}$。于是假设 $\Lambda$ 具有闭核，且不失一般性地假设 $\Lambda \neq 0$。选择 $x \in X$ 使得 $\Lambda(x) = 1$。则 $x \in X \setminus \ker(\Lambda)$，且集合 $X \setminus \ker(\Lambda)$ 是开集。因此，存在一个整数 $n > 0$、一个常数 $\varepsilon > 0$，以及元素 $\Lambda_1, \dots, \Lambda_n \in \mathcal{F} \setminus \{0\}$，使得
$$
V := \bigcap_{i=1}^n \{y \in X \mid |\Lambda_i(y) - \Lambda_i(x)| < \varepsilon\} \subset X \setminus \ker(\Lambda).
$$
我们证明
$$
\bigcap_{i=1}^n \ker(\Lambda_i) \subset \ker(\Lambda). \tag{3.1.5}
$$
即，选择 $y \in X$ 使得 $\Lambda_i(y) = 0$ 对 $i = 1, \dots, n$ 成立。则 $x + ty \in V$，从而 $x + ty \notin \ker(\Lambda)$ 对所有 $t \in \mathbb{R}$ 成立。因此 $1 + t\Lambda(y) = \Lambda(x + ty) \neq 0$ 对所有 $t \in \mathbb{R}$ 成立，这蕴含 $\Lambda(y) = 0$。这证明了 (3.1.5)。由 (3.1.5) 和引理可得
$$
\Lambda \in \operatorname{span}\{\Lambda_1, \dots, \Lambda_n\} \subset \mathcal{F},
$$


我们证明 (ii)。设 $E \subset X$ 为一个线性子空间。若 $\Lambda \in \mathcal{F}$ 在 $E$ 上消失，则 $\overline{E} \subset \ker(\Lambda)$，因为 $\ker(\Lambda)$ 是包含 $E$ 的 $X$ 的一个闭子集。反之，令 $x \in X \setminus \overline{E}$。由于 $(X, \mathcal{U}_\mathcal{F})$ 是局部凸的（由引理的 (ii) 部分），且 $X \setminus \overline{E}$ 是开集，存在一个凸开集 $U \in \mathcal{U}_\mathcal{F}$，使得 $x \in U$ 且 $U \cap E = \emptyset$。由于 $U$ 和 $E$ 是凸的，定理断言存在一个连续线性泛函 $\Lambda: X \to \mathbb{R}$，使得 $\Lambda(x) > \sup_{y \in E} \Lambda(y)$。由于 $E$ 是一个线性子空间，这蕴含 $E \subset \ker(\Lambda)$。由于由 (i) 可知 $\Lambda \in \mathcal{F}$，故 $x \notin \bigcap_{\Lambda \in \mathcal{F},\, E \subset \ker(\Lambda)} \ker(\Lambda)$。这证明了部分 (ii)。部分 (iii) 和 (iv) 直接由 (ii) 得出。