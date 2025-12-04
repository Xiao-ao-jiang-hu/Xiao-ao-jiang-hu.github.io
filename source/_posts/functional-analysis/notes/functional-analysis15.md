---
title: Ch 3.3 Banach–Dieudonné 定理
tags:
  - math
  - functional analysis
categories:
  - math
  - functional analysis
index_img: /img/fa.jpg
banner_img: /img/fa.jpg
excerpt: 泛函分析课程笔记
abbrlink: 1b3d63c1
date: 2025-11-21 13:29:23
---
Banach–Dieudonné 定理表明：Banach 空间 $X$ 的对偶空间 $X^*$ 的一个线性子空间是弱\*闭的，当且仅当它与 $X^*$ 中的闭单位球的交集是弱\*闭的。这一结果将在 Eberlein–Šmulian 定理的证明中起核心作用，该定理通过闭单位球的弱紧性来刻画自反 Banach 空间。

## Banach–Dieudonné 定理

设 $X$ 是一个实 Banach 空间，令 $E \subset X^*$ 为对偶空间 $X^* = \mathcal{L}(X, \mathbb{R})$ 的一个线性子空间，并令 $B^* := \{x^* \in X^* \mid \|x^*\| \le 1\}$。假设交集
$$
E \cap B^* = \{x^* \in E \mid \|x^*\| \le 1\}
$$
是弱\*闭的，且令 $x_0^* \in X^* \setminus E$。那么
$$
\inf_{x^* \in E} \|x^* - x_0^*\| > 0
$$
并且，若 $0 < \delta < \inf_{x^* \in E} \|x^* - x_0^*\|$，则存在一个向量 $x_0 \in X$ 使得
$$
\langle x_0^*, x_0 \rangle = 1, \quad \|x_0\| \le \delta^{-1}, \quad \langle x^*, x_0 \rangle = 0 \text{ 对所有 } x^* \in E.
$$

公式中的最后一个条件断言 $x_0$ 是预零化子 ${}^\perp E$ 的一个元素（见预零化子的定义）。

## 弱\*闭线性子空间的推论

设 $X$ 是一个实 Banach 空间，令 $E \subset X^*$ 为其对偶空间的一个线性子空间。则以下命题等价：

1. $E$ 是弱\*闭的。

2. $E \cap B^*$ 是弱\*闭的。

3. $({}^\perp E)^\perp = E$。

### 证明

由 (1) 推出 (2) 是因为闭单位球 $B^* \subset X^*$ 是弱\*闭的（见闭单位球弱\*闭性的推论）。

我们证明 (2) 蕴含 (3)。包含关系 $E \subset ({}^\perp E)^\perp$ 直接由定义得出。为证其逆，固定一个元素 $x_0^* \in X^* \setminus E$。则 Banach–Dieudonné 定理断言存在一个向量 $x_0 \in {}^\perp E$ 使得 $\langle x_0^*, x_0 \rangle \neq 0$，这蕴含 $x_0^* \notin ({}^\perp E)^\perp$。

由 (3) 推出 (1) 是因为，对于每个 $x \in X$，线性泛函 $\iota(x): X^* \to \mathbb{R}$ 在弱\*拓扑下是连续的，因此对于任意子集 $S \subset X$，集合 $S^\perp = \bigcap_{x \in S} \ker(\iota(x))$ 是 $X^*$ 的一个弱\*闭线性子空间（见弱\*闭子空间的推论）。这就证明了弱\*闭线性子空间的推论。


## Banach–Dieudonné 定理的证明

该证明分为五个步骤。

### 步骤 1
希望证明 $\inf_{x^* \in E} \|x^* - x_0^*\| > 0$.
由假设，交集 $E \cap B^*$ 是弱\*闭的，因此是 $X^*$ 的一个闭子集。令 $(x_i^*)_{i \in \mathbb{N}}$ 是 $E$ 中一个收敛于某个元素 $x^* \in X^*$ 的序列。则序列 $(x_i^*)_{i \in \mathbb{N}}$ 是有界的。选择一个常数 $c > 0$ 使得对所有 $i \in \mathbb{N}$ 有 $\|x_i^*\| \le c$。于是对所有 $i$ 有 $c^{-1} x_i^* \in E \cap B^*$，所以 $c^{-1} x^* = \lim_{i \to \infty} c^{-1} x_i^* \in E \cap B^*$。故 $x^* \in E$。这表明 $E$ 是 $X^*$ 的一个闭线性子空间。由于 $x_0^* \notin E$，这证明了步骤 1。

### 步骤 2
选择一个实数

$$
0 < \delta < \inf_{x^* \in E} \|x^* - x_0^*\|.
$$

则存在一列有限子集 $S_1, S_2, S_3, \dots$，它们属于闭单位球 $B \subset X$，使得对所有 $n \in \mathbb{N}$ 和所有 $x^* \in X^*$，我们有
$$
\|x^* - x_0^*\| \le \delta n \quad \text{且} \quad \max_{x \in S_k} |\langle x^* - x_0^*, x \rangle| \le k\delta \quad \Longrightarrow \quad x^* \notin E
$$
对所有满足 $1 \le k < n$ 的 $k \in \mathbb{N}$ 成立。

对于 $n=1$，条件由上述不等式得出。现在固定一个整数 $n \ge 1$ 并假设，通过归纳法，已为满足 $k < n$ 的 $k \in \mathbb{N}$ 构造了有限集 $S_k \subset B$，使得该条件成立。对每个有限集 $S \subset B$ 定义
$$
E(S) := \left\{ x^* \in E \,\middle|\,
\begin{aligned}
&\|x^* - x_0^*\| \le \delta(n+1), \\
&\max_{x \in S_k} |\langle x^* - x_0^*, x \rangle| \le \delta k \text{ 对 } 1 \le k < n, \\
&\max_{x \in S} |\langle x^* - x_0^*, x \rangle| \le \delta n
\end{aligned}
\right\}.
$$
定义
$$
R := \|x_0^*\| + \delta(n+1).
$$
由于 $E \cap B^*$ 是弱\*闭的，集合
$$
K := R(E \cap B^*) = \{x^* \in E \mid \|x^*\| \le R = \|x_0^*\| + \delta(n+1)\}
$$
也是弱\*闭的。因此，根据弱\*紧性定理，$K$ 是弱\*紧的。此外，对于每个有限集 $S \subset B$，集合 $E(S)$ 是 $K$ 与下列弱\*闭集的交集：
$$
\begin{aligned}
&\{x^* \in X^* \mid \|x^* - x_0^*\| \le \delta(n+1)\}, \\
&\{x^* \in X^* \mid \max_{x \in S} \langle x^* - x_0^*, x \rangle \le \delta n\}, \\
&\{x^* \in X^* \mid \max_{x \in S_k} \langle x^* - x_0^*, x \rangle \le \delta k\}, \; k \in \mathbb{N}, \; k < n.
\end{aligned}
$$
因此，对每个有限集 $S \subset B$，$E(S) \subset K$ 是一个弱\*闭集。

现在，假设通过反证法，对每个有限集 $S \subset B$ 都有 $E(S) \neq \emptyset$。那么每个有限子集族 $\mathscr{S} \subset 2^B$ 满足
$$
\bigcap_{S \in \mathscr{S}} E(S) = E\left( \bigcup_{S \in \mathscr{S}} S \right) \neq \emptyset,
$$
因此集合族
$$
\{E(S) \mid S \text{ 是 } B \text{ 的一个有限子集}\}
$$
作为 $K$ 的弱\*闭子集具有有限交性质。由于 $K$ 是弱\*紧的，这意味着存在一个元素 $x^* \in X^*$ 使得对每个有限集 $S \subset B$ 都有 $x^* \in E(S)$。这个元素 $x^*$ 属于子空间 $E$ 并满足
$$
\max_{x \in S_k} \langle x^* - x_0^*, x \rangle \le \delta k
$$
对所有满足 $k < n$ 的 $k \in \mathbb{N}$ 成立，以及
$$
\|x^* - x_0^*\| = \sup_{x \in B} |\langle x^* - x_0^*, x \rangle| \le \delta n
$$
这与前述条件矛盾。这个矛盾表明存在一个有限集 $S \subset B$ 使得 $E(S) = \emptyset$。在此理解下，步骤 2 由依赖选择公理（见第 6 页）得出。

### 步骤 3
设常数 $\delta > 0$ 和有限子集序列 $S_n \subset B$ ($n \in \mathbb{N}$) 如步骤 2 所述。选择一个序列 $(x_i)_{i \in \mathbb{N}}$ 在 $B$ 中，使得
$$
\bigcup_{n \in \mathbb{N}} \frac{1}{n} S_n = \{x_1, x_2, x_3, \dots\}.
$$
则
$$
\sup_{i \in \mathbb{N}} |\langle x^* - x_0^*, x_i \rangle| > \delta
$$
对所有 $x^* \in E$ 成立。

令 $x^* \in E$ 并选择一个整数
$$
n \ge \delta^{-1} \|x^* - x_0^*\|.
$$
则 $\|x^* - x_0^*\| \le \delta n$，因此由前述不等式有 $n \ge 2$。于是，根据步骤 2，存在一个整数 $k \in \{1, \dots, n-1\}$ 和一个元素 $x \in S_k$ 使得
$$
|\langle x^* - x_0^*, x \rangle| > \delta k.
$$
选择 $i \in \mathbb{N}$ 使得 $k^{-1} x = x_i$。则
$$
|\langle x^* - x_0^*, x_i \rangle| > \delta
$$
这证明了步骤 3。

### 步骤 4
设 $(x_i)_{i \in \mathbb{N}}$ 如步骤 3 所述。则 $\lim_{i \to \infty} \|x_i\| = 0$。此外，存在一个可求和序列 $\alpha = (\alpha_i)_{i \in \mathbb{N}} \in \ell^1$ 使得
$$
\sum_{i=1}^\infty \alpha_i \langle x_0^*, x_i \rangle = 1, \quad \sum_{i=1}^\infty \alpha_i \langle x^*, x_i \rangle = 0 \text{ 对所有 } x^* \in E, \quad \sum_{i=1}^\infty |\alpha_i| \le \delta^{-1}.
$$

由定义可知 $\lim_{i \to \infty} \|x_i\| = 0$。定义有界线性算子 $T: X^* \to c_0$（取值在趋于零的实数序列构成的 Banach 空间 $c_0 \subset \ell^\infty$ 中）如下：
$$
Tx^* := (\langle x^*, x_i \rangle)_{i \in \mathbb{N}} \quad \text{对 } x^* \in X^*.
$$
则由步骤 3，
$$
\|Tx^* - Tx_0^*\|_\infty > \delta \quad \text{对所有 } x^* \in E.
$$
因此，由 Hahn–Banach 定理及 $\ell^1$ 作为 $c_0$ 对偶空间的例子可知，存在一个元素 $\beta = (\beta_i)_{i \in \mathbb{N}} \in \ell^1 \cong c_0^*$ 使得
$$
\langle \beta, Tx_0^* \rangle \ge \delta, \quad \langle \beta, Tx^* \rangle = 0 \text{ 对所有 } x^* \in E, \quad \|\beta\|_1 = 1.
$$
于是，序列 $\alpha = (\alpha_i)_{i \in \mathbb{N}} \in \ell^1$，其元素定义为 $\alpha_i := \langle \beta, Tx_0^* \rangle^{-1} \beta_i$（$i \in \mathbb{N}$），满足步骤 4 的要求。

### 步骤 5
设 $(x_i)_{i \in \mathbb{N}}$ 为步骤 3 中的序列，$(\alpha_i)_{i \in \mathbb{N}}$ 为步骤 4 中的可求和实数序列。则极限
$$
x_0 := \sum_{i=1}^\infty \alpha_i x_i = \lim_{n \to \infty} \sum_{i=1}^n \alpha_i x_i
$$
在 $X$ 中存在并满足 Banach–Dieudonné 定理的要求。

由于对所有 $i \in \mathbb{N}$ 有 $\|x_i\| \le 1$，我们有
$$
\sum_{i=1}^\infty \|\alpha_i x_i\| \le \sum_{i=1}^\infty |\alpha_i| \le \delta^{-1}.
$$
由于 $X$ 是一个 Banach 空间，这意味着极限存在并满足 $\|x_0\| \le \delta^{-1}$（见绝对收敛级数收敛引理）。此外，由步骤 4，
$$
\langle x_0^*, x_0 \rangle = \sum_{i=1}^\infty \alpha_i \langle x_0^*, x_i \rangle = 1, \quad \langle x^*, x_0 \rangle = \sum_{i=1}^\infty \alpha_i \langle x^*, x_i \rangle = 0
$$
对所有 $x^* \in E$ 成立。这证明了 Banach–Dieudonné 定理。