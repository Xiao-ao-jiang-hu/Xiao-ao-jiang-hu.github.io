---
title: 泛函分析第四次作业
tags:
  - math
  - functional analysis
categories:
  - math
  - functional analysis homework
index_img: /img/fa.jpg
banner_img: /img/fa.jpg
excerpt: no excerpt
abbrlink: d3564e07
date: 2025-09-26 16:17:36
---
## 4.1
写出网收敛的概念，并尝试说明$[a,b]$区间上的Riemann可积是网收敛。

### 解答
#### 网收敛定义
- **定向集**：一个预序集（即具有自反性和传递性的二元关系）$(D, \leq)$，其中任意两个元素都有上界（即对于任意 $d_1, d_2 \in D$，存在 $d_3 \in D$ 使得 $d_1 \leq d_3$ 和 $d_2 \leq d_3$）。
- **网**：从一个定向集 $D$ 到一个拓扑空间 $X$ 的函数 $\{x_d\}_{d \in D}$。
- **网收敛**：网 $\{x_d\}_{d \in D}$ 收敛于点 $x \in X$，如果对于 $x$ 的任意邻域 $U$，存在索引 $d_0 \in D$，使得对于所有 $d \geq d_0$（即 $d_0 \leq d$），有 $x_d \in U$。这表示网的值最终停留在 $x$ 的任意小邻域内。



#### 证明Riemman可积是网收敛

考虑区间 $[a, b]$ 的所有标记划分的集合 $T$：
  - $P$ 是 $[a, b]$ 的一个划分，即有限点集 $a = x_0 < x_1 < \cdots < x_n = b$。
  - $\xi$ 是代表点的选择，即对每个子区间 $[x_{i-1}, x_i]$，选择一点 $\xi_i \in [x_{i-1}, x_i]$。
在 $T$ 上定义序关系：对于两个标记划分 $(P, \xi)$ 和 $(Q, \eta)$，定义 $(P, \xi) \leq (Q, \eta)$ 当且仅当 $Q$ 是 $P$ 的细化（即 $P$ 的每个子区间被 $Q$ 的子区间覆盖）。这个序使 $T$ 成为定向集，因为任意两个标记划分有一个共同的细化（例如，取它们的划分点的并集）。

对于每个标记划分 $(P, \xi) \in T$，定义Riemann和：
$$
S(P, \xi, f) = \sum_{i=1}^{n} f(\xi_i) \Delta x_i
$$

其中 $\Delta x_i = x_i - x_{i-1}$。
这些Riemann和形成一个网 $\{ S(P, \xi, f) \}_{(P, \xi) \in T}$ 从定向集 $T$ 到实数集 $\mathbb{R}$（赋予通常拓扑）。

由Riemman可积定义：存在一个数 $I \in \mathbb{R}$，使得对于任意 $\epsilon > 0$，存在 $\delta > 0$，当划分 $P$ 的范数（即最大子区间长度）小于 $\delta$ 时，无论代表点 $\xi$ 如何选择，都有 $|S(P, \xi, f) - I| < \epsilon$。于是对于 $I$ 的任意邻域，存在一个标记划分 $(P_0, \xi_0) \in T$，使得对于所有细化 $(P, \xi) \geq (P_0, \xi_0)$，有 $S(P, \xi, f) \in (I - \epsilon, I + \epsilon)$。故，网 $\{ S(P, \xi, f) \}_{(P, \xi) \in T}$ 收敛于 $I$。



## 4.2
考虑装备了上确界范数的 $C[0,1]$ 空间，令

$$
N = \left\{ f \in C[0,1] : \int_0^1 f(x)\,dx = 0 \right\}
$$

为 $C[0,1]$ 中具有零平均值函数构成的线性闭子空间，再令

$$
X = \{ f \in C[0,1] : f(0) = 0 \}
$$

并定义 $M = N \cap X$，即

$$
M = \left\{ f \in C[0,1] : f(0) = 0,\ \int_0^1 f(x)\,dx = 0 \right\}.
$$

1. 若 $u \in C[0,1]$，证明

$$
d(u, N) = \inf_{n \in N} \| u - n \|_\infty = \left| \int_0^1 u(x)\,dx \right|,
$$

其中 $\int_0^1 u(x)\,dx$ 表示 $u$ 的平均值，因此下确界在 $n = u - \int_0^1 u(x)\,dx \in N$ 处取到；

2. 若 $u(x) = x \in X$，证明

$$
d(u, M) = \inf_{m \in M} \| u - m \|_\infty = \frac{1}{2},
$$

但下确界不能在任何 $m \in M$ 处取到。

### 解答
#### 1.
由于$n \in N$，于是有
$$
\int_0^1 (u(x) - n(x))\,dx = \int_0^1 u(x)\,dx - \int_0^1 n(x)\,dx = \int_0^1 u(x)\,dx.
$$
而由积分性质
$$
|\int_0^1 u(x)dx| \geq (1-0) \inf_{x \in [0,1]} |u(x) - n(x)| = \inf_{x \in [0,1]} |u(x) - n(x)| = \|u - n\|_\infty.
$$
于是有
$$
\|u - n\|_\infty \leq \left|\int_0^1 u(x)\,dx\right|, \forall n \in N.
$$
等号当且仅当$u(x) - n(x)$在$[0,1]$上恒为常数时成立。于是
$$
n(x) = u(x)+C, \forall x \in [0,1].
$$
积分令其为零得到结论

#### 2.
由1.可知
$$
d(u, M) \leq \int_0^1 u(x)dx = \frac{1}{2}.
$$
但由1.知等号当且仅当$u$和$M$差一个常数。但$u(0) = 0$且在$[0, 1]$上单调递增，而$M$中函数在$[0,1]$上必有正有负，故不可能差一个常数。于是不存在$m$取到下确界

## 4.3
若 $A$ 是某个 Hilbert 空间的子集，证明

$$
A^\perp = \overline{A}^{\perp},
$$

其中 $\overline{A}$ 表示 $A$ 的闭包；若 $M$ 是某个 Hilbert 空间的线性子空间，证明

$$
M^{\perp\perp} = \overline{M}.
$$

### 解答
#### 1.
- $\overline{A}^{\perp} \subset A^{\perp}$:
  任取$b \in \overline{A}^{\perp}$，有$\forall a \in \overline{A}$，$(a, b)=0$。而$A \subset \overline{A}$，于是有$\forall a \in A$，$(a, b)=0$，即$b \in A^{\perp}$。

- $A^{\perp} \subset \overline{A}^{\perp}$:
  任取$b \in A^{\perp}$，有$\forall a \in A$，$(a, b)=0$。任取$\{a_n\} \subset A$，使得$a_n \to a \in \overline{A}$，则由内积的连续性，有$(a, b) = \lim_{n \to \infty} (a_n, b) = 0$。于是$b \in \overline{A}^{\perp}$。

#### 2.
- $\overline{M} \subset M^{\perp\perp}$:
  首先有$M \subset M^{\perp\perp}$，因为对于任意$b \in M^{\perp\perp}$，有$\forall m \in M$，$(m, b)=0$，即$b \in M^{\perp}$。因此由闭包定义有$\overline{M} \subset M^{\perp\perp}$。

- $M^{\perp\perp} \subset \overline{M}$:
  由于$\overline{M}$是闭子空间，由投影定理知$\forall x \in H$，存在唯一分解$x = m_0 + m_\perp$，其中$m_0 \in \overline{M}, m_\perp \in \overline{M}^\perp = M^\perp$
  任取$m \in M^{\perp\perp}$，有$m = m_0 + m_\perp$。由定义，有$(a, m_\perp) = (a, m_0) + (m_\perp, m_\perp) = 0$，由内积正定性知$m_\perp=0$，于是$m=m_0 \in \overline{M}$


## 4.4
设 $\mathcal{H}_1, \mathcal{H}_2$ 是两个 Hilbert 空间，定义直和空间：

$$
\mathcal{H}_1 \oplus \mathcal{H}_2 = \left\{ (x_1, x_2) : x_1 \in \mathcal{H}_1,\ x_2 \in \mathcal{H}_2 \right\}
$$

并装备内积：

$$
\langle (x_1, x_2), (y_1, y_2) \rangle_{\mathcal{H}_1 \oplus \mathcal{H}_2} = \langle x_1, y_1 \rangle_{\mathcal{H}_1} + \langle x_2, y_2 \rangle_{\mathcal{H}_2}
$$

证明 $\mathcal{H}_1 \oplus \mathcal{H}_2$ 是 Hilbert 空间，并找出子空间 $M = \left\{ (x_1, 0) : x_1 \in \mathcal{H}_1 \right\}$ 的正交补空间 $M^\perp$。

### 解答
显然是线性空间。下面证明完备性。
任取Cauchy列 $\{(x_n, y_n)\}$，于是有
$$
\|(x_m, y_m)-(x_n, y_n)\|^2 = \langle (x_m-x_n, y_m-y_n), (x_m-x_n, y_m-y_n) \rangle \\= \langle (x_m-x_n, x_m-x_n) \rangle+\langle (y_m-y_n, y_m-y_n) \rangle = \|x_m-x_n\|^2+\|y_m-y_n\|^2 \leq \epsilon
$$
于是$\{x_n\}$和$\{y_n\}$分别是$\mathcal{H}_1$和$\mathcal{H}_2$中的Cauchy列。由于$\mathcal{H}_1$和$\mathcal{H}_2$是Hilbert空间，于是两者收敛于$x$和$y$。易证明$\{(x_n, y_n)\}$收敛至$(x, y)$，故$\mathcal{H}_1 \oplus \mathcal{H}_2$完备，于是是Hilbert空间。

$(a, b)$ 是 $M^\perp$ 中的元素当且仅当其满足 $\langle (a, b), (x_1, 0) \rangle = \langle a, x_1 \rangle = 0$, $\forall x_1 \in \mathcal{H}_1$. 此条件满足当且仅当 $a \in \mathcal{H}_1^\perp$。但$a\in \mathcal{H}_1$，于是只能$a=0$。故$M^\perp=\{(0, b) \mid b \in \mathcal{H}_2\}$


## 4.5
设 $\{H_n : n \in \mathbb{N}\}$ 是 Hilbert 空间 $\mathcal{H}$ 的一列两两正交的闭子空间。定义无穷直和：

$$
\bigoplus_{n=1}^{\infty} H_n = \left\{ \sum_{n=1}^{\infty} x_n : x_n \in H_n,\ \sum_{n=1}^{\infty} \|x_n\|^2 < \infty \right\}.
$$

证明：$\bigoplus_{n=1}^{\infty} H_n$ 是 $\mathcal{H}$ 的线性闭子空间。

### 解答

#### 线性子空间

令 $x = \sum_{n=1}^{\infty} x_n$, $y = \sum_{n=1}^{\infty} y_n$，其中 $x_n, y_n \in H_n$，且 $\sum \|x_n\|^2 < \infty$, $\sum \|y_n\|^2 < \infty$。

任取标量 $\alpha, \beta \in \mathbb{F}$:

$$
z = \alpha x + \beta y = \sum_{n=1}^{\infty} (\alpha x_n + \beta y_n).
$$

由于每个 $H_n$ 是线性子空间，故 $\alpha x_n + \beta y_n \in H_n$。

再看范数平方和：

$$
\sum_{n=1}^{\infty} \|\alpha x_n + \beta y_n\|^2 \leq \sum_{n=1}^{\infty} (|\alpha| \|x_n\| + |\beta| \|y_n\|)^2.
$$

由 Cauchy-Schwarz 不等式：

$$
(|\alpha| \|x_n\| + |\beta| \|y_n\|)^2 \leq 2(|\alpha|^2 \|x_n\|^2 + |\beta|^2 \|y_n\|^2),
$$

所以：

$$
\sum_{n=1}^{\infty} \|\alpha x_n + \beta y_n\|^2 \leq 2|\alpha|^2 \sum \|x_n\|^2 + 2|\beta|^2 \sum \|y_n\|^2 < \infty.
$$

因此 $z \in \bigoplus_{n=1}^{\infty} H_n$，说明该集合对线性组合封闭，是线性子空间。


#### 闭子空间

要证：若 $\{z_k\}_{k=1}^\infty \subset \bigoplus_{n=1}^{\infty} H_n$，且 $z_k \to z$ 在 $\mathcal{H}$ 中，则 $z \in \bigoplus_{n=1}^{\infty} H_n$。

记 $z_k = \sum_{n=1}^{\infty} x_n^{(k)}$，其中 $x_n^{(k)} \in H_n$，且 $\sum_{n=1}^{\infty} \|x_n^{(k)}\|^2 < \infty$。


对于任意固定的 $n$，定义投影算子 $P_n: \mathcal{H} \to H_n$，由于 $H_n$ 是闭子空间，$P_n$ 是有界线性算子。

因为 $z_k \to z$，则对每个 $n$，有 $P_n(z_k) \to P_n(z)$，因为投影是连续的。

因此，$x_n^{(k)} \to x_n := P_n(z)$ 在 $H_n$ 中。

构造 $z' = \sum_{n=1}^{\infty} x_n$，并证明它收敛于 $z$，且 $\sum \|x_n\|^2 < \infty$。

首先，由于 $z_k \to z$，序列 $\{z_k\}$ 是柯西列。即对任意 $\varepsilon > 0$，存在 $K$，使得当 $k,l > K$ 时，

$$
\|z_k - z_l\|^2 = \sum_{n=1}^{\infty} \|x_n^{(k)} - x_n^{(l)}\|^2 < \varepsilon^2.
$$

这说明 $\{x_n^{(k)}\}_{k=1}^\infty$ 对每个 $n$ 都是柯西列，从而 $x_n^{(k)} \to x_n$。

对任意 $N$有：

$$
\sum_{n=1}^N \|x_n^{(k)} - x_n^{(l)}\|^2 \leq \sum_{n=1}^{\infty} \|x_n^{(k)} - x_n^{(l)}\|^2 < \varepsilon^2,
$$

取极限 $l \to \infty$，得：

$$
\sum_{n=1}^N \|x_n^{(k)} - x_n\|^2 \leq \varepsilon^2.
$$

这对所有 $N$ 成立，因此：

$$
\sum_{n=1}^{\infty} \|x_n^{(k)} - x_n\|^2 \leq \varepsilon^2.
$$

这意味着 $z_k \to z' = \sum_{n=1}^{\infty} x_n$ 在 $\mathcal{H}$ 中，且 $\sum \|x_n\|^2 \leq \sum \|x_n - x_n^{(k)}\|^2 + \sum \|x_n^{(k)}\|^2 < \infty$（因为右边第一项有限，第二项因 $z_k \in \bigoplus H_n$ 也有限）。

又因为极限唯一，所以 $z = z'$，即 $z = \sum_{n=1}^{\infty} x_n$，其中 $x_n \in H_n$，且 $\sum \|x_n\|^2 < \infty$，故 $z \in \bigoplus_{n=1}^{\infty} H_n$。

因此，$\bigoplus_{n=1}^{\infty} H_n$ 是闭集。

## 4.6
写出$L^p$版本的凸投影定理并证明

### 解答
#### 定理内容
设 $1 < p < \infty$，$(X, \mathcal{F}, \mu)$ 是一个测度空间，$E \subset L^p(\mu)$ 是一个非空闭凸子集。则对任意 $f \in L^p(\mu)$，存在唯一的元素 $g \in E$，使得
$$
\|f - g\|_p = \inf \{ \|f - h\|_p : h \in E \}.
$$
这个元素 $g$ 称为 $f$ 在 $E$ 上的投影。


#### 存在性

令
$$
d = \inf \{ \|f - h\|_p : h \in E \}.
$$
由于 $E$ 非空，$d < \infty$。取极小化序列 $\{g_n\} \subset E$，使得
$$
\lim_{n \to \infty} \|f - g_n\|_p = d.
$$


由于 $E$ 是凸集，对任意 $m, n$，有 $\frac{g_m + g_n}{2} \in E$，因此
$$
\left\| f - \frac{g_m + g_n}{2} \right\|_p \geq d.
$$

利用 Clarkson 不等式，存在常数 $C_p > 0$，使得
$$
\left\| \frac{f - g_m}{2} + \frac{f - g_n}{2} \right\|_p^p + \left\| \frac{f - g_m}{2} - \frac{f - g_n}{2} \right\|_p^p \leq \frac{1}{2} \left( \|f - g_m\|_p^p + \|f - g_n\|_p^p \right).
$$

即
$$
\left\| f - \frac{g_m + g_n}{2} \right\|_p^p + \left\| \frac{g_m - g_n}{2} \right\|_p^p \leq \frac{1}{2} \left( \|f - g_m\|_p^p + \|f - g_n\|_p^p \right).
$$

由于 $\left\| f - \frac{g_m + g_n}{2} \right\|_p \geq d$，可得
$$
d^p + \left\| \frac{g_m - g_n}{2} \right\|_p^p \leq \frac{1}{2} \left( \|f - g_m\|_p^p + \|f - g_n\|_p^p \right).
$$

当 $m, n \to \infty$ 时，右边趋于 $d^p$，因此
$$
\limsup_{m,n \to \infty} \left\| \frac{g_m - g_n}{2} \right\|_p^p \leq 0,
$$
即 $\{g_n\}$ 是 Cauchy 序列。

由于 $L^p(\mu)$ 是完备的，存在 $g \in L^p(\mu)$ 使得 $g_n \to g$。又因为 $E$ 是闭集，所以 $g \in E$。由范数的连续性，
$$
\|f - g\|_p = \lim_{n \to \infty} \|f - g_n\|_p = d.
$$


#### 唯一性

假设存在 $g_1, g_2 \in E$，且 $g_1 \neq g_2$，均满足
$$
\|f - g_1\|_p = \|f - g_2\|_p = d.
$$

由于 $E$ 是凸集，$\frac{g_1 + g_2}{2} \in E$，因此
$$
\left\| f - \frac{g_1 + g_2}{2} \right\|_p \geq d.
$$

另一方面，由 $L^p$ 空间的严格凸性（当 $1 < p < \infty$ 时），有
$$
\left\| f - \frac{g_1 + g_2}{2} \right\|_p = \left\| \frac{f - g_1}{2} + \frac{f - g_2}{2} \right\|_p < \frac{1}{2} \left( \|f - g_1\|_p + \|f - g_2\|_p \right) = d,
$$
除非 $f - g_1$ 与 $f - g_2$ 线性相关且方向相同。但若方向相同，且范数相等，则 $f - g_1 = f - g_2$，即 $g_1 = g_2$，矛盾。

因此，假设不成立，投影唯一。

## 4.7
设 $\{x_n : n \in \mathbb{N}\}$ 为 Hilbert 空间中的标准正交基，证明 $\sum_{n=1}^\infty \frac{x_n}{n}$ 无条件收敛但不绝对收敛。

### 解答
由于调和级数发散，故不绝对收敛。

由于 $\{x_n\}$ 是标准正交基，级数 $\sum_{n=1}^\infty \frac{x_n}{n}$ 收敛当且仅当 $\sum_{n=1}^\infty \left\| \frac{x_n}{n} \right\|^2 < \infty$。计算得 $\sum_{n=1}^\infty \left\| \frac{x_n}{n} \right\|^2 = \sum_{n=1}^\infty \frac{1}{n^2} < \infty$（因为 $p$-级数 $p=2>1$ 收敛）。令 $s = \sum_{n=1}^\infty \frac{x_n}{n}$，则 $s$ 存在且 $\|s\|^2 = \sum_{n=1}^\infty \frac{1}{n^2}$。

对于任意置换 $\pi$，考虑部分和 $T_M = \sum_{m=1}^M \frac{x_{\pi(m)}}{\pi(m)}$。需证明 $T_M$ 收敛于 $s$。给定 $\epsilon > 0$，由于 $\sum_{n=1}^\infty \frac{1}{n^2} < \infty$，存在 $N$ 使得 $\sum_{n=N+1}^\infty \frac{1}{n^2} < \epsilon$。由于 $\pi$ 是双射，存在 $M_0$ 使得当 $M \geq M_0$ 时，$\{ \pi(1), \dots, \pi(M) \} \supseteq \{1, 2, \dots, N\}$。于是，当 $M \geq M_0$ 时，有：
$$
\|s - T_M\|^2 = \sum_{n \notin \{\pi(1), \dots, \pi(M)\}} \left| \frac{1}{n} \right|^2 \leq \sum_{n=N+1}^\infty \frac{1}{n^2} < \epsilon.
$$
故 $T_M$ 收敛于 $s$，即级数无条件收敛。

综上，级数 $\sum_{n=1}^\infty \frac{x_n}{n}$ 无条件收敛但不绝对收敛。


## 4.8
证明：Hilbert空间是可分度量空间当且仅当它有可数标准正交基。

### 解答


#### 充分性

由于 $H$ 可分，存在可数稠密子集 $D = \{x_n\}_{n=1}^\infty$。我们通过 Gram-Schmidt 过程构造标准正交基：

从 $D$ 中提取一个线性无关序列 $\{y_n\}$，使得 $\overline{\text{span}\{y_n\}} = H$。  具体地，令 $y_1 = x_1$，然后依次取 $x_n$ 中第一个不在已张成子空间中的向量。随后使用Grant-Schmidt正交化得到标准正交序列 $\{e_n\}$。
 
由于 $\overline{\text{span}\{y_n\}} = H$，且 $\text{span}\{e_n\} = \text{span}\{y_n\}$，故 $\overline{\text{span}\{e_n\}} = H$。  因此，$\{e_n\}$ 是标准正交基，且为可数集。


#### 必要性

设 $\{e_n\}_{n=1}^\infty$ 为 $H$ 的可数标准正交基。考虑所有有限线性组合：
$$
S = \left\{ \sum_{n=1}^N q_n e_n : N \in \mathbb{N},\ q_n \in Q \subset \mathbb{F} \text{ 可数稠密子集} \right\}.
$$

- **可数性**：对每个 $N$，$\{\sum_{n=1}^N q_n e_n\}$ 的基数是可数的有限次笛卡尔积，因此有限。又由于 $\mathbb{N}$ 可数，因此总基数是可数笛卡尔积可数，于是也可数。
- **稠密性**：对任意 $x \in H$，有 Fourier 展开 $x = \sum_{n=1}^\infty \langle x, e_n \rangle e_n$。  
  对任意 $\epsilon > 0$，存在 $N$ 使得 $\left\| x - \sum_{n=1}^N \langle x, e_n \rangle e_n \right\| < \frac{\epsilon}{2}$。  
  取 $Q$ 系数 $q_n$ 满足 $|\langle x, e_n \rangle - q_n| < \frac{\epsilon}{2N}$，则：
  $$
  \left\| \sum_{n=1}^N \langle x, e_n \rangle e_n - \sum_{n=1}^N q_n e_n \right\| \leq \sum_{n=1}^N |\langle x, e_n \rangle - q_n| < \frac{\epsilon}{2}.
  $$
  由三角不等式，$\|x - \sum q_n e_n\| < \epsilon$，故 $S$ 在 $H$ 中稠密。

因此，$H$ 可分。


## 4.9
若 $\mathcal{M}$ 是可分Hilbert空间 $\mathcal{H}$ 的稠密线性子空间，则 $\mathcal{H}$ 有一族由 $\mathcal{M}$ 中元素组成的标准正交基；若 $\mathcal{M}$ 是 $\mathcal{H}$ 的任意稠密子集，结论是否仍然成立？

### 解答
设 $\mathcal{H}$ 为可分 Hilbert 空间，$\mathcal{M}$ 是其稠密线性子空间。由于 $\mathcal{H}$ 可分，存在可数稠密子集 $D = \{d_1, d_2, d_3, \ldots\} \subseteq \mathcal{H}$。因为 $\mathcal{M}$ 在 $\mathcal{H}$ 中稠密，对于每个 $d_i \in D$，存在 $m_i \in \mathcal{M}$ 使得 $\|d_i - m_i\| < \frac{1}{i}$。令 $S = \{m_1, m_2, m_3, \ldots\}$，则 $S \subseteq \mathcal{M}$ 且可数。

证明 $S$ 在 $\mathcal{H}$ 中稠密：对任意 $x \in \mathcal{H}$ 和 $\epsilon > 0$，存在 $d_k \in D$ 使得 $\|x - d_k\| < \frac{\epsilon}{2}$。取 $k > \frac{2}{\epsilon}$，则 $\|d_k - m_k\| < \frac{1}{k} < \frac{\epsilon}{2}$。因此，
$$
\|x - m_k\| \leq \|x - d_k\| + \|d_k - m_k\| < \frac{\epsilon}{2} + \frac{\epsilon}{2} = \epsilon,
$$
故 $\overline{S} = \mathcal{H}$。

令 $V = \operatorname{span}(S)$。由于 $\mathcal{M}$ 是线性子空间且 $S \subseteq \mathcal{M}$，有 $V \subseteq \mathcal{M}$。又因 $\overline{S} = \mathcal{H}$，有 $\overline{V} = \mathcal{H}$。由 $\mathcal{H}$ 可分且无限维（有限维 Hilbert 空间也满足，但此处一般处理)，$V$ 无限维。从 $S$ 中提取线性无关集 $B = \{b_1, b_2, b_3, \ldots\}$ 使得 $\operatorname{span}(B) = V$。

对 $B$ 应用 Gram-Schmidt 正交化：
- 令 $u_1 = \frac{b_1}{\|b_1\|}$。
- 对 $k \geq 2$，令 $v_k = b_k - \sum_{j=1}^{k-1} \langle b_k, u_j \rangle u_j$，则 $u_k = \frac{v_k}{\|v_k\|}$。

序列 $\{u_1, u_2, u_3, \ldots\}$ 为标准正交系，且 $u_k \in V \subseteq \mathcal{M}$。由于 $\overline{\operatorname{span}\{u_n\}} = \overline{V} = \mathcal{H}$，故 $\{u_n\}$ 是 $\mathcal{H}$ 的标准正交基，且所有元素属于 $\mathcal{M}$。

反例：取 $\mathcal{M} = \{x \in \mathcal{H} : \|x\| \neq 1\}$。
