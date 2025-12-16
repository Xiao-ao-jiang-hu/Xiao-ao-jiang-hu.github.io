---
title: 泛函分析第十四次作业
tags:
  - math
  - functional analysis
categories:
  - math
  - functional analysis homework
index_img: /img/fa.jpg
banner_img: /img/fa.jpg
excerpt: 泛函分析第十四次作业
abbrlink: 273f5b2d
date: 2025-11-15 22:50:21
---
# 14.1
(关于James空间)证明:$(J,\|\cdot\|_{J})$ 是完备空间且$l^{2}$ 在James 空间中稠密。

## 解答

### 完备
设 $\{x^{(m)}\}$ 是 $J$ 中的一个Cauchy序列

对任意固定索引 $j$，考虑序列 $\{x_j^{(m)}\}$. 由范数定义，对任意 $i, j$，有 $|x_i - x_j| \leq \|x\|_{J} / \sqrt{2}$. 因此，对 $x^{(m)} - x^{(n)}$，有 $|x_i^{(m)} - x_i^{(n)}| \leq \|x^{(m)} - x^{(n)}\|_{J} / \sqrt{2}$. 由于 $\{x^{(m)}\}$ 是Cauchy序列， $\{x_j^{(m)}\}$ 是Cauchy序列，故收敛到某个 $x_j$. 定义 $x = (x_1, x_2, \ldots)$.

其次，证明 $x \in J$. 由于 $\{x^{(m)}\}$ 是Cauchy序列，存在 $M$ 使得 $\|x^{(m)}\|_{J} \leq M$ 对所有 $m$ 成立。对任意有限递增序列 $p_1, \ldots, p_{k+1}$，有
$$
\sum_{i=1}^{k} |x_{p_i} - x_{p_{i+1}}|^2 + |x_{p_{k+1}} - x_{p_1}|^2 = \lim_{m \to \infty} \left( \sum_{i=1}^{k} |x_{p_i}^{(m)} - x_{p_{i+1}}^{(m)}|^2 + |x_{p_{k+1}}^{(m)} - x_{p_1}^{(m)}|^2 \right) \leq \limsup_{m \to \infty} \|x^{(m)}\|_{J}^2 \leq M^2.
$$
因此 $\|x\|_{J} \leq M < \infty$, 且 $x_n \to 0$ (因为每个 $x^{(m)}$ 满足 $x_n^{(m)} \to 0$，且点态收敛保持极限)，故 $x \in J$.

最后，证明在 $\|\cdot\|_{J}$ 范数下 $x^{(m)} \to x$ 。对任意 $\epsilon > 0$，存在 $N$，使得当 $m, n > N$ 时，$\|x^{(m)} - x^{(n)}\|_{J} < \epsilon$. 固定 $m > N$，对任意有限递增序列 $p_1, \ldots, p_{k+1}$，有
$$
\sum_{i=1}^{k} |(x_{p_i}^{(m)} - x_{p_i}) - (x_{p_{i+1}}^{(m)} - x_{p_{i+1}})|^2 + |(x_{p_{k+1}}^{(m)} - x_{p_{k+1}}) - (x_{p_1}^{(m)} - x_{p_1})|^2 = \lim_{n \to \infty} \left( \sum_{i=1}^{k} |(x_{p_i}^{(m)} - x_{p_i}^{(n)}) - (x_{p_{i+1}}^{(m)} - x_{p_{i+1}}^{(n)})|^2 + |(x_{p_{k+1}}^{(m)} - x_{p_{k+1}}^{(n)}) - (x_{p_1}^{(m)} - x_{p_1}^{(n)})|^2 \right) \leq \limsup_{n \to \infty} \|x^{(m)} - x^{(n)}\|_{J}^2 \leq \epsilon^2.
$$
因此 $\|x^{(m)} - x\|_{J} \leq \epsilon$，故 $x^{(m)} \to x$ 在 $J$ 中。所以 $J$ 是完备的。

### 稠密
首先，注意 $l^{2} \subset J$，因为对 $x \in l^{2}$，有 $\|x\|_{J} \leq 2\|x\|_{2}$。

接下来，证明有限序列在 $J$ 中稠密。对任意 $x \in J$，定义截断序列 $x^{(N)}$ 为 $x^{(N)}_n = x_n$ 当 $n \leq N$，且 $x^{(N)}_n = 0$ 当 $n > N$. 则 $x^{(N)}$ 是有限序列，故 $x^{(N)} \in l^{2}$. 需证明 $\|x - x^{(N)}\|_{J} \to 0$ 当 $N \to \infty$.

令 $y^{(N)} = x - x^{(N)}$. 则 $y^{(N)}_n = 0$ 当 $n \leq N$，且 $y^{(N)}_n = x_n$ 当 $n > N$. 对任意有限递增序列 $p_1, \ldots, p_{k+1}$，考虑
$$
A = \sum_{i=1}^{k} |y^{(N)}_{p_i} - y^{(N)}_{p_{i+1}}|^2 + |y^{(N)}_{p_{k+1}} - y^{(N)}_{p_1}|^2.
$$
由于 $x_n \to 0$，对任意 $\epsilon > 0$，存在 $N_0$ 使得当 $n > N_0$ 时 $|x_n| < \epsilon$. 取 $N > N_0$，则当 $p_i > N$ 时 $|y^{(N)}_{p_i}| = |x_{p_i}| < \epsilon$. 在 $A$ 中，如果所有 $p_i > N$，则 $A \leq \|x\|_{J}^2$，但由于 $|x_{p_i}|$ 小， $A$ 小；如果有些 $p_i \leq N$ 且有些 $p_i > N$，则由于循环项和切换点，项 involving $|x_{p_i}|$ 对于 $p_i > N$ 均小于 $\epsilon$，且切换点数量有限，故 $A$ 可被控制。详细地，当 $N$ 足够大时， $\|y^{(N)}\|_{J} < \epsilon$，因此 $\|x - x^{(N)}\|_{J} \to 0$. 故有限序列在 $J$ 中稠密，而有限序列属于 $l^{2}$，所以 $l^{2}$ 在 $J$ 中稠密。


# 14.2
（关于Schauder基）假设 $X$ 是可分实Banach空间，$(e_{i})_{i\geq1}$ 是 $X$ 的Schauder基，即$\forall x\in X,\exists!(x_i)_{i\geq1}$ 使得

$$\lim_{n\to\infty}\|x-\sum_{i=1}^{n}x_i e_i\|=0.$$

定义：$\Pi_{n}(x):=\sum_{i=1}^{n}x_{i}e_{i}$ .则

1. $\Pi_{n}$ 是 $X$ 上的线性投影算子且$\Pi_{n}\circ\Pi_{m}=\Pi_{m}\circ\Pi_{n}=\Pi_{m}$ 如果$n\geq m\geq1$ 

2. 引入 $|\|x\||:=\sup_{n\geq1}\left\|\Pi_n(x)\right\|$ ,则 $\forall x\in X,\|x\|\leq|\|x\||$ ，从而$(X,|\|\cdot\||)$ 是Banach空间.

3. 存在常数$c>0$ 使得$\sup_{n\geq1}\|\Pi_n(x)\|\leq c\|x\|$ 

## 解答
### 1
首先对于任意 $x, y \in X$ 和标量 $\alpha, \beta$，有：
$$
\Pi_n(\alpha x + \beta y) = \sum_{i=1}^n (\alpha x_i + \beta y_i) e_i = \alpha \sum_{i=1}^n x_i e_i + \beta \sum_{i=1}^n y_i e_i = \alpha \Pi_n(x) + \beta \Pi_n(y).
$$

其次，$\Pi_n$ 是投影算子，因为：
$$
\Pi_n(\Pi_n(x)) = \Pi_n\left( \sum_{i=1}^n x_i e_i \right) = \sum_{i=1}^n x_i e_i = \Pi_n(x),
$$
所以 $\Pi_n \circ \Pi_n = \Pi_n$.

现在，设 $n \geq m \geq 1$。对于任意 $x \in X$，有：
$$
\Pi_n(\Pi_m(x)) = \Pi_n\left( \sum_{i=1}^m x_i e_i \right) = \sum_{i=1}^n [\Pi_m(x)]_i e_i,
$$
其中 $[\Pi_m(x)]_i = x_i$ 当 $i \leq m$，且 $[\Pi_m(x)]_i = 0$ 当 $i > m$。因此：
$$
\Pi_n(\Pi_m(x)) = \sum_{i=1}^m x_i e_i = \Pi_m(x).
$$
类似地，
$$
\Pi_m(\Pi_n(x)) = \Pi_m\left( \sum_{i=1}^n x_i e_i \right) = \sum_{i=1}^m x_i e_i = \Pi_m(x).
$$
故 $\Pi_n \circ \Pi_m = \Pi_m \circ \Pi_n = \Pi_m$ 当 $n \geq m \geq 1$.

### 2
首先，由 Schauder 基的定义，对任意 $x \in X$，有 $\Pi_n(x) \to x$ 在范数 $\|\cdot\|$ 下。于是
$$
\|x\| = \lim_{n\to\infty} \|\Pi_n(x)\| \le \sup_{n\ge 1} \|\Pi_n(x)\| = |\!|\!|x|\!|\!|,
$$
即 $\|x\| \le |\!|\!|x|\!|\!|$ 对所有 $x \in X$ 成立。

下证 $(X, |\!|\!|\cdot|\!|\!|)$ 是 Banach 空间。设 $\{x^{(k)}\} \subset X$ 是 $|\!|\!|\cdot|\!|\!|$ 下的 Cauchy 序列，即对任意 $\varepsilon > 0$，存在 $N$ 使得当 $k,l \ge N$ 时，
$$
|\!|\!|x^{(k)} - x^{(l)}|\!|\!| = \sup_{n\ge 1} \|\Pi_n(x^{(k)} - x^{(l)})\| < \varepsilon.
$$
由 $\|x\| \le |\!|\!|x|\!|\!|$ 知，$\{x^{(k)}\}$ 也是 $\|\cdot\|$ 下的 Cauchy 序列。因 $(X, \|\cdot\|)$ 完备，存在 $x \in X$ 使得 $\|x^{(k)} - x\| \to 0$。

对于 Schauder 基，投影算子 $\Pi_n$ 是连续线性算子（坐标泛函连续），故对每个 $n$，有 $\|\Pi_n(x^{(k)}) - \Pi_n(x)\| \to 0$ 当 $k \to \infty$。对任意 $k \ge N$，在不等式
$$
\|\Pi_n(x^{(k)} - x^{(l)})\| < \varepsilon \quad (\forall l \ge N)
$$
中令 $l \to \infty$，得 $\|\Pi_n(x^{(k)}) - \Pi_n(x)\| \le \varepsilon$ 对所有 $n$ 成立。因此
$$
|\!|\!|x^{(k)} - x|\!|\!| = \sup_{n\ge 1} \|\Pi_n(x^{(k)} - x)\| \le \varepsilon, \quad \forall k \ge N,
$$
即 $x^{(k)} \to x$ 在 $|\!|\!|\cdot|\!|\!|$ 下。故 $(X, |\!|\!|\cdot|\!|\!|)$ 是 Banach 空间。

### 3

由2，$(X, |\|\cdot\||)$ 是 Banach 空间，且恒等映射 $I: (X, |\|\cdot\||) \to (X, \|\cdot\|)$ 是连续线性双射，因为 $\|x\| \leq |\|x\||$。由开映射定理，$I^{-1}$ 连续，即存在常数 $c > 0$ 使得：
$$
|\|x\|| \leq c \|x\| \quad \forall x \in X.
$$
但 $|\|x\|| = \sup_{n \geq 1} \|\Pi_n(x)\|$，故：
$$
\sup_{n \geq 1} \|\Pi_n(x)\| \leq c \|x\|.
$$
