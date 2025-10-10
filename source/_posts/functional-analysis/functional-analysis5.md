---
title: Ch 2.2 一致有界原理
tags:
  - math
  - functional analysis
categories:
  - math
  - functional analysis
excerpt: 泛函分析课程笔记
abbrlink: 67625fea
date: 2025-10-10 18:19:05
---
# §2. 一致有界原理

## 定义
假设 $\{f_i\}_{i \in I}$ 满足 $\forall i \in I$, $f_i: X \to Y_i$，称 $\{f_i\}_{i \in I}$ 是点态有界的，如果
$$
\sup_{i \in I} \|f_i(x)\|_{Y_i} < +\infty \quad \forall x \in X
$$

## 定理（一致有界原理）
假设 $X$ 是 Banach 空间。$\{A_i\}_{i \in I}$ 满足
1. $A_i: X \to Y_i$ 是有界线性算子，$Y_i = (Y_i, \|\cdot\|)$ 赋范空间。
2. $\{A_i\}_{i \in I}$ 是点态有界的。
则 $\sup_{i \in I} \|A_i\| < +\infty$。

（即 算子族的点态有界性 $\Longrightarrow$ 算子族（在算子范数下）的一致有界性。）
$X$ 是 Banach 空间

## 推论
若 $(X, d)$ 是非空完备度量空间，$\{f_i\}_{i \in I}$ 满足
1. $f_i: X \mapsto \mathbb{R}$ 是连续函数
2. $\{f_i\}_{i \in I}$ 点态有界。
则 $\exists x_0 \in X$ 以及 $\varepsilon > 0$，s.t.
$$
\sup_{i \in I} \sup_{x \in B(x_0; \varepsilon)} |f_i(x)| < +\infty
$$

## 证明
引入 $F_{n,i} \overset{\text{定义}}{=} \left\{ x \in X \mid |f_i(x)| \le n \right\}$，由 $f_i$ 的连续性 $\Rightarrow F_{n,i}$ 是闭集。
$$
F_n \overset{\text{定义}}{=} \bigcap_{i \in I} F_{n,i} = \left\{ x \in X \mid \sup_{i \in I} |f_i(x)| \le n \right\} \text{（闭集）}.
$$
由条件2知，$X = \bigcup_{n \ge 1} F_n$，由 Baire 纲定理 $\Rightarrow X$ 是第二纲集。
从而 $\exists n_0 \in \mathbb{N}$，s.t. $F_{n_0}$ 不是无处稠密的。$\Rightarrow \exists x_0 \in X$，$\varepsilon > 0$，
s.t. $B(x_0; \varepsilon) \subseteq F_{n_0}$。$\Rightarrow$ (得证)

> 回忆经典结论：若 $\{f_n\}_{n \ge 1} \subset C([a,b])$，满足点态有界，则 $\exists x_0 \in [a,b]$ 以及 $\delta > 0$。
> s.t. $\forall x \in B(x_0; \delta)$ 且 $\forall n \ge 1$，$|f_n(x)| \le M < +\infty$.



## 一致有界证明
利用线性性质将“一点附近有界”推导为“零点附近有界”，令 $f_i(x) = \|A_i x\|_{Y_i}$，$\forall x \in X$

由条件2： $\Rightarrow \{f_i\}_{i \in I}$ 是点态有界的。$\Rightarrow \exists x_0 \in X$，$\varepsilon > 0$，s.t.
$$
M \overset{\text{定义}}{=} \sup_{i \in I} \sup_{x \in B(x_0; \varepsilon)} \|A_i x\|_{Y_i} < +\infty
$$
从而 $\forall i \in I$，$\forall x \in X$ 满足 $\|x\|=1$，有
$$
\|A_i (x_0 \pm \frac{\varepsilon}{2} x)\|_{Y_i} \le M < +\infty
$$
$$
\Rightarrow \|A_i x\|_{Y_i} = \frac{1}{\varepsilon} \|A_i (x_0 + \frac{\varepsilon}{2} x) - A_i (x_0 - \frac{\varepsilon}{2} x)\|_{Y_i} \le \frac{1}{\varepsilon} \times 2M = \frac{2M}{\varepsilon}
$$
即 $\sup_{i \in I} \|A_i\| \le \frac{2M}{\varepsilon} < +\infty$。（得证）



### 注
条件 “$X$ 是完备的”不可移除。考虑
$$
X \overset{\text{定义}}{=} \left\{ x = \{x_i\}_{i \in \mathbb{N}} \mid \exists N \in \mathbb{N} \text{ s.t. } \forall i \ge N \text{ 且 } i \ne N, \text{ 有 } x_i = 0 \right\}, \quad \|x\| = \sup_{i \ge 1} |x_i| = \|x\|_\infty
$$
则 $(X, \|\cdot\|)$ 是不完备的。且 $\overline{X}^{\|\cdot\|_{\ell^\infty}} = c_0 = \left\{ x \in \ell^\infty \mid \lim_{n \to \infty} x_n = 0, \, x = \{x_n\}_{n \ge 1} \right\}$

$A_n: X \mapsto X$，s.t. $A_n x = (x_1, \, 2x_2, \, \cdots, \, n x_n; \, 0, \, \cdots, \, 0, \, \cdots)$

$A: X \mapsto X$，s.t. $A x = \{n x_n\}_{n \ge 1}$。

不难验证：
固定 $x \in X$，$\lim_{n \to \infty} \|A_n x - A x\| = 0$。（同为 $X$ 中只有有限项不为零）。

- $\|A_n x\| \le n \|x\|_{\ell^\infty}$ 且 $\|A_n e_n\|_{\ell^\infty} = n$ $\Rightarrow \|A_n\| = n$。

$\Rightarrow \sup_{n \ge 1} \|A_n\| = +\infty$。且 $\|A e_n\|_{\ell^\infty} = n$ $\Rightarrow A \notin \mathcal{L}(X, X)$。（得证）


## 算子强收敛
假设 $X, Y$ 是 Banach 空间。$\forall i \in \mathbb{N}$，$A_i, A \in \mathcal{L}(X, Y)$。称 $A_i$ 强收敛至 $A$，如果 $\forall x \in X$，$A_i x \to A x$。

## 定理（Banach-Steinhaus）
$X, Y$ 是 Banach 空间。$\{A_i\}_{i \in \mathbb{N}} \subset \mathcal{L}(X, Y)$。则下列等价：
① $\forall x \in X$，$\{A_i x\}_{i \in \mathbb{N}}$ 是 $Y$ 中的 Cauchy 列。
② $\sup_{i \in \mathbb{N}} \|A_i\| < +\infty$ 且于稠密子集 $D \subset X$ s.t. $\forall x \in D$，s.t. $\{A_i x\}_{i \in \mathbb{N}}$ 是 $Y$ 中的 Cauchy 列。
③ $\sup_{i \in \mathbb{N}} \|A_i\| < +\infty$ 且 $\exists A \in \mathcal{L}(X, Y)$，s.t. $A_i \xrightarrow{\text{强}} A$，且 $\|A\| \le \lim_{i \to \infty} \|A_i\|$。

### 特别
当 $X$ 不是完备时，例 ⑥ $\Leftrightarrow$ ⑦；当 $Y$ 不是完备时，⑥ $\Leftrightarrow$ ⑦。

### 证明
1 $\Leftrightarrow$ 3：
只需证明 1 $\Rightarrow$ 3。
首先 ⑥ $\Longrightarrow \sup_{i \in \mathbb{N}} \|A_i\| < +\infty$。
定义 $A: X \to Y$
$$
\text{s.t. } A x = \lim_{i \to \infty} A_i x \quad \forall x \in X
$$
$\Rightarrow \|A x\| \le (\lim_{i \to \infty} \|A_i\|) \|x\|$ $\Rightarrow \|A\| \le \lim_{i \to \infty} \|A_i\| < +\infty$

2 $\Leftarrow$ 3：
只需证明 2 $\Rightarrow$ 3。
设 $M = \sup_{i \in \mathbb{N}} \|A_i\|$。
$\forall x \in X$，$\forall \varepsilon > 0$。
由 $D$ 的稠密性，$\exists \xi \in D$，s.t. $\|x - \xi\| \le \frac{\varepsilon}{M}$，此时
$$
\|A_i x - A_j x\| \le \|A_i (x - \xi)\| + \|A_j (x - \xi)\| + \underbrace{\|A_i \xi - A_j \xi\|}_{\substack{\text{因}\{A_i \xi\}_{i \in \mathbb{N}} \\ \text{是Cauchy列}}} \le 2M \cdot \frac{\varepsilon}{M}
$$
$\Rightarrow \{A_i x\}_{i \in \mathbb{N}}$ 是 Cauchy 列。$\Longrightarrow \{A_i x\}$ 是收敛列。
由1 $\Rightarrow$ 3 的证明过程，结论成立。



### 推论（共轭双线性映射）
若 $X$ 是 Banach 空间，$Y, Z$ 是赋范空间。$B: X \times Y \mapsto Z$ 满足：
$\forall x_i, y_i$ ($i=1,2$),
$$
\begin{cases}
B(\alpha_1 x_1 + \alpha_2 x_2, \, y) = \sum_{i=1}^{2} \alpha_i \cdot B(x_i, y) \\
B(x, \, \beta_1 y_1 + \beta_2 y_2) = \sum_{i=1}^{2} \overline{\beta_i} \cdot B(x, y_i)
\end{cases}
$$

则下列说法等价：

1. $B$ 是有界的。（即 $\exists c > 0$，$\forall x \in X$，$\forall y \in Y$，$\|B(x,y)\|_Z \le c \|x\|_X \|y\|_Y$）

2. $B$ 是连续的。

3. $\forall x \in X$，$B(x, \cdot)$ 是其线性性；$\forall y \in X$，$B(\cdot, y) \in \mathcal{L}(X, Z)$ 且连续。

## 证明
1 $\Rightarrow$ 2：
$$
\|B(x,y) - B(\hat{x}, \hat{y})\|_Z \le \|B(x, y - \hat{y})\|_Z + \|B(x - \hat{x}, \hat{y})\|_Z \quad \text{（得证）}
$$

2 $\Rightarrow$ 3 显然。

3 $\Rightarrow$ 1：
令 $S_Y \overset{\text{定义}}{=} \{ y \in Y \mid \|y\|_Y = 1 \}$。
$\forall y \in S_Y$，$A_y(x) \overset{\text{定义}}{=} B(x, y)$。$\Rightarrow$ 
1. $A_y \in \mathcal{L}(X, Z)$。

2. 利用 $B(x, 0) = 0$

$\Rightarrow$ 固定 $x \in X$，$\exists \delta_x > 0$，$\forall y \in B(0, \delta_x)$，有 $\|B(x, y) - B(x, 0)\|_Z \le 1$
$\Rightarrow \|B(x, y)\|_Z = \frac{2\|y\|}{\delta_x} \|B(x, \frac{\delta_x y}{2\|y\|})\|_Z \le \frac{2}{\delta_x} \|y\|$
$\Rightarrow \|A_y(x)\|_Z = \|B(x, y)\|_Z \le \frac{2}{\delta_x} \|y\| \le \frac{2}{\delta_x}$
$\Rightarrow \{A_y\}_{y \in Y}$ 是点态有界的。

由一致有界原理 $\Rightarrow \sup_{y \in Y} \|A_y\| \le M < +\infty$。
$\Rightarrow \|B(x, y)\|_Z = \|y\| \cdot \|B(x, \frac{y}{\|y\|})\|$
$\le \|A_{\frac{y}{\|y\|}}(x)\|_Z \cdot \|y\| \le M \|x\| \|y\|$ $\Rightarrow$ 结论

### 例
$\forall 1 < p < +\infty$。若 $f_n \xrightarrow{\text{弱}} f$ （即 $\forall g \in L^q(d\mu)$，$\int_X f_n g \, d\mu \xrightarrow[n \to +\infty]{} \int_X f g \, d\mu$）

则 $\|f\|_{L^p} \le \lim_{n \to \infty} \|f_n\|_{L^p}$

（其中 $T_n(g) = \int_X f_n g \, d\mu$，且此时 $\|T_n\| = \|f_n\|_{L^p}^*$，$\|T\| = \|f\|_{L^p}^*$）