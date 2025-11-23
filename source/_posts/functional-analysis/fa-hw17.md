---
title: 泛函分析第十七次作业
tags:
  - math
  - functional analysis
categories:
  - math
  - functional analysis homework
index_img: /img/fa.jpg
banner_img: /img/fa.jpg
excerpt: 泛函分析第十七次作业
date: 2025-11-23 19:46:13
---
# 17.1 
设$X$为可分的赋范线性空间，$(x_n)_{n\in\mathbb{N}}$ 为 $X$ 单位球中的稠密序列，证明映射

$$d(x^{*},y^{*}):=\sum_{n=1}^{\infty}2^{-n}|\langle x^{*}-y^{*},x_{n}\rangle|,\ \forall x^{*},y^{*}\in B^{*}$$

定义了闭单位球$B^{*}\subset X^{*}$ 上的距离函数，证明该距离函数诱导的拓扑是$B^{*}$ 上的弱\*拓扑。

## 解答
非负性：显然 $d(x^*, y^*) \geq 0$。

同一性：若 $d(x^*, y^*) = 0$，则对每个 $n \in \mathbb{N}$，有 $|\langle x^* - y^*, x_n \rangle| = 0$。由于 $\{x_n\}$ 在单位球中稠密，且 $x^* - y^*$ 连续，可得对任意 $x \in X$，有 $\langle x^* - y^*, x \rangle = 0$，故 $x^* = y^*$。反之显然成立。

对称性：$d(x^*, y^*) = d(y^*, x^*)$。

三角不等式：对任意 $x^*, y^*, z^* \in B^*$，有
$$|\langle x^* - y^*, x_n \rangle| \leq |\langle x^* - z^*, x_n \rangle| + |\langle z^* - y^*, x_n \rangle|,$$
乘以 $2^{-n}$ 并求和即得 $d(x^*, y^*) \leq d(x^*, z^*) + d(z^*, y^*)$。

因此，$d$ 是 $B^*$ 上的度量。

设 $\tau_d$ 为 $d$ 诱导的度量拓扑，$\tau_{w^*}$ 为 $B^*$ 上的弱\*拓扑。需证 $\tau_d = \tau_{w^*}$。
(a) $\tau_d \subseteq \tau_{w^*}$
任取 $x^* \in B^*$，$\varepsilon > 0$，考虑 $d$-球 $B_d(x^*, \varepsilon)$。取 $N \in \mathbb{N}$ 使得
$$\sum_{n=N+1}^{\infty} 2^{-n} < \frac{\varepsilon}{2}.$$
定义弱\*邻域：
$$U = \left\{ y^* \in B^* : |\langle x^* - y^*, x_n \rangle| < \frac{\varepsilon}{2} \text{ 对 } n = 1, \dots, N \right\}.$$
对任意 $y^* \in U$，有
$$d(x^*, y^*) = \sum_{n=1}^{N} 2^{-n} |\langle x^* - y^*, x_n \rangle| + \sum_{n=N+1}^{\infty} 2^{-n} |\langle x^* - y^*, x_n \rangle|.$$
由于 $\|x^* - y^*\| \leq 2$，得
$$\sum_{n=N+1}^{\infty} 2^{-n} |\langle x^* - y^*, x_n \rangle| \leq 2 \cdot \sum_{n=N+1}^{\infty} 2^{-n} = 2^{1-N} < \frac{\varepsilon}{2},$$
且
$$\sum_{n=1}^{N} 2^{-n} |\langle x^* - y^*, x_n \rangle| < \frac{\varepsilon}{2} \sum_{n=1}^{N} 2^{-n} < \frac{\varepsilon}{2}.$$
故 $d(x^*, y^*) < \varepsilon$，即 $U \subseteq B_d(x^*, \varepsilon)$。因此 $B_d(x^*, \varepsilon)$ 是弱\*开集，从而 $\tau_d \subseteq \tau_{w^*}$。
(b) $\tau_{w^*} \subseteq \tau_d$
任取 $x^* \in B^*$，设 $U$ 为弱\*邻域，可设
$$U = \left\{ y^* \in B^* : |\langle x^* - y^*, z_i \rangle| < \varepsilon,\ i = 1, \dots, m \right\},$$
其中 $z_1, \dots, z_m \in X$，$\varepsilon > 0$。
对每个 $i$，令 $w_i = z_i / \|z_i\|$（若 $z_i \neq 0$），则 $w_i$ 在单位球中。由稠密性，存在 $x_{n_i}$ 使得
$$\|w_i - x_{n_i}\| < \eta,$$
其中 $\eta > 0$ 待定。
对任意 $y^* \in B^*$，有
$$|\langle x^* - y^*, z_i \rangle| = \|z_i\| \cdot |\langle x^* - y^*, w_i \rangle|.$$
又
$$|\langle x^* - y^*, w_i \rangle| \leq |\langle x^* - y^*, x_{n_i} \rangle| + |\langle x^* - y^*, w_i - x_{n_i} \rangle| \leq |\langle x^* - y^*, x_{n_i} \rangle| + 2\eta.$$
故
$$|\langle x^* - y^*, z_i \rangle| \leq \|z_i\| \left( |\langle x^* - y^*, x_{n_i} \rangle| + 2\eta \right).$$
取 $\eta < \frac{\varepsilon}{4 \|z_i\|}$，则 $2\|z_i\| \eta < \frac{\varepsilon}{2}$。又若 $d(x^*, y^*) < \delta$，则
$$2^{-n_i} |\langle x^* - y^*, x_{n_i} \rangle| < \delta \quad \Rightarrow \quad |\langle x^* - y^*, x_{n_i} \rangle| < 2^{n_i} \delta.$$
取 $\delta < \frac{\varepsilon}{2 \|z_i\| 2^{n_i}}$，则
$$|\langle x^* - y^*, z_i \rangle| < \|z_i\| \left( 2^{n_i} \delta + 2\eta \right) < \frac{\varepsilon}{2} + \frac{\varepsilon}{2} = \varepsilon.$$
取 $\delta = \min_{1 \leq i \leq m} \left\{ \frac{\varepsilon}{2 \|z_i\| 2^{n_i}} \right\}$，则当 $d(x^*, y^*) < \delta$ 时，有 $y^* \in U$，即 $B_d(x^*, \delta) \subseteq U$。因此 $\tau_{w^*} \subseteq \tau_d$。

# 17.2
设$M$为局部紧Hausdorf 空间，称实值函数$f:M\to\mathbb{R}$ 在无穷远处消失，如果对任意$\varepsilon>0$ 都存在紧集$K\subset M$ 使得$\sup_{x\in M\backslash K}|f(x)|<\varepsilon$ .记$C_{0}(M)$ 为所有在无穷远处消失的连续函数构成的空间。

1. 证明:$C_{0}(M)$ 在上确界范数下为Banach空间;

2. 根据Riesz表示定理，对偶空间$C_{0}(M)^{*}$ 和符号Radon测度空间M一一对应，其中M上的符号Radon测度为满足如下性质的符号Borel测度：对每个Borel集$B\subset M$ 和$\varepsilon>0$ ，存在紧集$K\subset B$ 使得$\left|\mu(A)-\mu(A\cap K)\right|<\varepsilon$ 对任意Borel集$A\subset B$ 成立。
考虑映射$\delta: M\to C_{0}(M)^{*},x\mapsto\delta_{x}$ ，其中$\delta_{x}:C_{0}(M)\to\mathbb{R}$ 定义为$\delta_{x}(f):=f(x),\forall f\in$ $C_{0}(M)$ 若在$C_{0}(M)^{*}$ 上装备弱\*拓扑，试证明：映射$\delta:M\to\delta(M)\subset C_{0}(M)^{*}$ 是同胚；在前一问的一一对应关系中，像$\delta(M)$ 含于在Radon 概率测度集
$$P(M):=\{\mu\in\mathcal{M}(M):\mu>0,\|\mu\|=\mu(M)=1\}.$$
试求出集合$\delta(M)=\{\delta_{x}:x\in M\}\subset P(M)$ 的弱\*闭包。


## 解答

### 1
首先，$C_0(M)$ 是 $C_b(M)$的子空间，且 $C_b(M)$ 在上确界范数下是 Banach 空间。为证明 $C_0(M)$ 是 Banach 空间，只需证明 $C_0(M)$ 是 $C_b(M)$ 的闭子空间。

设 $\{f_n\}$ 是 $C_0(M)$ 中的 Cauchy 序列，则存在 $f \in C_b(M)$ 使得 $f_n \to f$ 一致收敛。需证 $f \in C_0(M)$。对于任意 $\varepsilon > 0$，存在 $N$ 使得当 $n \geq N$ 时，$\|f_n - f\| < \varepsilon/2$。对于 $f_N \in C_0(M)$，存在紧集 $K \subset M$ 使得 $\sup_{x \in M \setminus K} |f_N(x)| < \varepsilon/2$。于是对于 $x \in M \setminus K$，有：
$$
|f(x)| \leq |f(x) - f_N(x)| + |f_N(x)| < \varepsilon/2 + \varepsilon/2 = \varepsilon.
$$
故 $f \in C_0(M)$，因此 $C_0(M)$ 是闭子空间，从而是 Banach 空间。

### 2

#### 证明 $\delta$ 是同胚

映射 $\delta: M \to C_0(M)^*$ 定义为 $\delta(x) = \delta_x$，其中 $\delta_x(f) = f(x)$ 对于 $f \in C_0(M)$。$C_0(M)^*$ 装备弱\*拓扑，即最粗的拓扑使得所有映射 $\mu \mapsto \mu(f)$（$f \in C_0(M)$）连续。

- **连续性**: 设 $x \in M$，考虑 $\delta_x$ 的弱\*邻域基元素：
  $$
  V(\delta_x; f_1, \dots, f_k; \varepsilon) = \left\{ \mu \in C_0(M)^* : |\mu(f_i) - \delta_x(f_i)| < \varepsilon, \, i=1,\dots,k \right\},
  $$
  其中 $f_i \in C_0(M)$，$\varepsilon > 0$。由于 $f_i$ 连续，存在 $x$ 的邻域 $U$ 使得对于所有 $y \in U$，有 $|f_i(y) - f_i(x)| < \varepsilon$，即 $|\delta_y(f_i) - \delta_x(f_i)| < \varepsilon$。故 $\delta(y) \in V(\delta_x; f_1, \dots, f_k; \varepsilon)$，因此 $\delta$ 连续。

- **开映射**: 设 $U \subset M$ 为开集，需证 $\delta(U)$ 在 $\delta(M)$ 中开。取 $x \in U$，由于 $M$ 局部紧 Hausdorff，存在紧集 $K$ 使得 $x \in \text{int}(K) \subset K \subset U$。由 Urysohn 引理，存在连续函数 $f: M \to [0,1]$ 使得 $f(x) = 1$ 且 $f(y) = 0$ 对于 $y \in M \setminus K$。由于 $K$ 紧，$f \in C_c(M) \subset C_0(M)$。考虑弱\*邻域：
  $$
  W = \left\{ \mu \in C_0(M)^* : |\mu(f) - \delta_x(f)| < \frac{1}{2} \right\} = \left\{ \mu : |\mu(f) - 1| < \frac{1}{2} \right\}.
  $$
  对于 $\mu = \delta_y \in W \cap \delta(M)$，有 $|f(y) - 1| < 1/2$，故 $f(y) > 1/2$，从而 $y \in \text{supp}(f) \subset K \subset U$，即 $\delta_y \in \delta(U)$。因此 $W \cap \delta(M) \subset \delta(U)$，故 $\delta(U)$ 开于 $\delta(M)$。

综上，$\delta$ 是同胚。

#### 求 $\delta(M)$ 的弱\*闭包
断言：$\delta(M)$ 在 $P(M)$ 中弱\*闭，即其弱\*闭包为 $\delta(M)$ 自身。

证明：设 $\mu \in P(M)$ 在 $\delta(M)$ 的弱\*闭包中，则存在网 $\{\delta_{x_\alpha}\}_{\alpha \in A}$ 弱\*收敛于 $\mu$，即对于所有 $f \in C_0(M)$，有 $\delta_{x_\alpha}(f) = f(x_\alpha) \to \mu(f)$。假设 $\mu$ 不是点测度，则存在点 $a, b \in M$ 且 $a \neq b$，以及邻域 $U$ of $a$ 和 $V$ of $b$ 使得 $\mu(U) > 0$ 和 $\mu(V) > 0$。由 Radon 性质，存在紧集 $A \subset U$ 和 $B \subset V$ 使得 $\mu(A) > 0$ 和 $\mu(B) > 0$。由于 $M$ 为 Hausdorff，存在不相交开集 $U' \supset A$ 和 $V' \supset B$。由 Urysohn 引理，存在连续函数 $f, g: M \to [0,1]$ 使得 $f|_A = 1$，$f|_{M \setminus U'} = 0$，$g|_B = 1$，$g|_{M \setminus V'} = 0$。由于 $A, B$ 紧，$f, g \in C_0(M)$。于是 $\mu(f) \geq \mu(A) > 0$ 和 $\mu(g) \geq \mu(B) > 0$。由弱\*收敛，对于足够大的 $\alpha$，有 $f(x_\alpha) > \mu(f)/2 > 0$ 和 $g(x_\alpha) > \mu(g)/2 > 0$，故 $x_\alpha \in \text{supp}(f) \cap \text{supp}(g)$。但 $\text{supp}(f) \subset \overline{U'}$，$\text{supp}(g) \subset \overline{V'}$，且 $U' \cap V' = \emptyset$，故 $\text{supp}(f) \cap \text{supp}(g) = \emptyset$，矛盾。因此 $\mu$ 必为点测度，即 $\mu = \delta_x$ 对于某个 $x \in M$。故 $\delta(M)$ 在 $P(M)$ 中弱\*闭。

因此，$\delta(M)$ 的弱\*闭包为 $\delta(M)$ 自身。

# 17.3
若 $X$ 是 Banach 空间且 $X$ 可分，$S \subseteq X$ 是一个有界集合，$x \in \overline{S}^w$。则存在 $\{x_n\}_{n \in \mathbb{N}} \subseteq S$ 使得 $x_n$ 弱收敛至 $x$。

## 解答
由于 $X$ 是可分的，存在 $X$ 中的可数稠密子集 $\{y_k\}$。
由 Banach-Alaoglu 定理，$X^*$ 的单位球 $B^* = \{f \in X^* : \|f\| \leq 1\}$ 在弱* 拓扑下是紧的。
由于 $X$ 可分，$B^*$ 在弱* 拓扑下是 可度量的，从而也是 可分的。
因此，可以选取 $\{f_n\} \subset B^*$，使得 $\{f_n\}$ 在 $B^*$ 中稠密。

定义度量：
$$d(x, y) = \sum_{n=1}^\infty \frac{1}{2^n} |f_n(x - y)|.$$

由于 $\|x\|, \|y\| \leq M$，有 $|f_n(x - y)| \leq \|f_n\| \cdot \|x - y\| \leq 2M$，所以级数收敛。
显然 $d$ 是一个度量。

若 $x_n \rightharpoonup x$，则对每个 $f_n \in X^*$，有 $f_n(x_n) \to f_n(x)$，故 $d(x_n, x) \to 0$。
反之，若 $d(x_n, x) \to 0$，则对每个 $f_n$，有 $f_n(x_n) \to f_n(x)$。
对任意 $f \in X^*$，由于 $\{f_n\}$ 在 $B^*$ 中稠密，存在 $f_n$ 使得 $\|f - f_n\| < \varepsilon$，从而
$$|f(x_n) - f(x)| \leq |f(x_n) - f_n(x_n)| + |f_n(x_n) - f_n(x)| + |f_n(x) - f(x)| \leq 2M\varepsilon + o(1),$$
所以 $f(x_n) \to f(x)$，即 $x_n \rightharpoonup x$。

在 $S \cup \{x\}$ 上，弱拓扑与 $d$ 诱导的拓扑一致。
由于 $x \in \overline{S}^w$，即 $x$ 属于 $S$ 的弱闭包，而 $d$ 是度量，因此存在 $\{x_n\} \subseteq S$ 使得 $d(x_n, x) \to 0$，即 $x_n \rightharpoonup x$。