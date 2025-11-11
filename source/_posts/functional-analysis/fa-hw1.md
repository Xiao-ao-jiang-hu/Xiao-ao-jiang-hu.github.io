---
title: 泛函分析第一次作业
tags:
  - math
  - homework
  - functional analysis
categories:
  - math
  - functional analysis
index_img: /img/fa.jpg
banner_img: /img/fa.jpg
excerpt: no excerpt
abbrlink: 88c391a1
date: 2025-09-22 12:44:41
---
## 1.1 
设 $(X, d_X)$ 为度量空间，$Y \subset X$ 为子集，并用 $d_Y := d_X|_{Y \times Y}$ 表示 $Y$ 上的诱导距离函数。证明：
1. 若 $(Y, d_Y)$ 是完备的，则 $Y$ 是 $X$ 的闭子集；
2. 若 $(X, d_X)$ 是完备的，并且 $Y$ 是 $X$ 的闭子集，则 $(Y, d_Y)$ 是完备的。

### 解答
#### (1) 若 $(Y, d_Y)$ 是完备的，则 $Y$ 是 $X$ 的闭子集

设 $(Y, d_Y)$ 是完备的。要证明 $Y$ 是 $X$ 的闭子集，需证明 $Y$ 包含所有它的极限点。即，对于任意序列 $\{y_n\} \subset Y$，若 $y_n \to x$ 在 $X$ 中，则 $x \in Y$.

由于 $y_n \to x$ 在 $X$ 中，序列 $\{y_n\}$ 在 $(X, d_X)$ 中是柯西序列。即，对任意 $\epsilon > 0$，存在 $N$ 使得对任意 $m, n \geq N$，有 $d_X(y_m, y_n) < \epsilon$. 因为 $d_Y = d_X|_{Y \times Y}$，所以 $d_Y(y_m, y_n) = d_X(y_m, y_n)$，因此 $\{y_n\}$ 在 $(Y, d_Y)$ 中也是柯西序列。

由于 $(Y, d_Y)$ 是完备的，存在 $y \in Y$ 使得 $y_n \to y$ 在 $(Y, d_Y)$ 中，即 $d_Y(y_n, y) \to 0$，从而 $d_X(y_n, y) \to 0$. 但在 $X$ 中，有 $y_n \to x$，由极限的唯一性，可得 $x = y$，因此 $x \in Y$. 故 $Y$ 是 $X$ 的闭子集。

#### (2) 若 $(X, d_X)$ 是完备的，并且 $Y$ 是 $X$ 的闭子集，则 $(Y, d_Y)$ 是完备的

设 $(X, d_X)$ 是完备的，且 $Y$ 是 $X$ 的闭子集。要证明 $(Y, d_Y)$ 是完备的，需证明任意柯西序列 $\{y_n\} \subset Y$ 在 $(Y, d_Y)$ 中收敛。

由于 $\{y_n\}$ 在 $(Y, d_Y)$ 中是柯西序列，即对任意 $\epsilon > 0$，存在 $N$ 使得对任意 $m, n \geq N$，有 $d_Y(y_m, y_n) < \epsilon$. 但 $d_Y = d_X|_{Y \times Y}$，所以 $d_X(y_m, y_n) = d_Y(y_m, y_n)$，因此 $\{y_n\}$ 在 $(X, d_X)$ 中也是柯西序列。

由于 $(X, d_X)$ 是完备的，存在 $x \in X$ 使得 $y_n \to x$ 在 $X$ 中，即 $d_X(y_n, x) \to 0$. 因为 $Y$ 是闭子集，且 $\{y_n\} \subset Y$，所以 $x \in Y$. 因此，在 $(Y, d_Y)$ 中，有 $d_Y(y_n, x) = d_X(y_n, x) \to 0$，即 $y_n \to x$ 在 $(Y, d_Y)$ 中。故 $(Y, d_Y)$ 是完备的。

## 1.2
设 $(X,d)$ 为度量空间，$(X,d)$ 的完备化是指一个三元组 $(\overline{X},\overline{d},t)$，包含一个完备度量空间 $(\overline{X},\overline{d})$，以及具有稠密像的等距嵌入 $t: X \to \overline{X}$。

1. 每个 $(X,d)$ 的完备化 $(\overline{X},\overline{d},t)$ 都具有如下的泛性质：若 $(Y,d_Y)$ 为完备度量空间，$\phi: X \to Y$ 为 1-Lipschitz 映射（即：Lipschitz 常数为 1 的 Lipschitz 连续映射），则存在唯一的 1-Lipschitz 映射 $\overline{\phi}:\overline{X} \to Y$ 使得 $\phi = \overline{\phi} \circ t$。

2. 若 $(\overline{X}_1,\overline{d}_1,t_1),(\overline{X}_2,\overline{d}_2,t_2)$ 为 $(X,d)$ 的两个完备化，则存在唯一的等距映射 $\psi: \overline{X}_1 \to \overline{X}_2$ 使得 $\psi \circ t_1 = t_2$。

3. $(X,d)$ 的完备化存在；提示：考虑由有界连续函数 $f: X \to \mathbb{R}$ 构成的空间 $C_b(X)$，它在上确界范数下是 Banach 空间；令 $x_0 \in X$，对 $x \in X$ 定义 $f_x \in C_b(X)$ 为
$$
f_x(y) := d(y,x) - d(y,x_0), \quad \text{for } y \in X.
$$
证明映射 $t: X \to C_b(X), x \mapsto f_x$ 是等距嵌入，于是 $t(X)$ 的闭包、$C_b(X)$ 中的度量、以及 $t$ 构成了 $(X,d)$ 的一个完备化；

4. 设 $(\overline{X},\overline{d})$ 是完备度量空间，$t: X \to \overline{X}$ 为 1-Lipschitz 映射并且满足 1 中的泛性质，则 $(\overline{X},\overline{d},t)$ 是 $(X,d)$ 的一个完备化。

### 解答

#### 1. 证明完备化的泛性质

设 $(\overline{X},\overline{d},t)$ 是 $(X,d)$ 的一个完备化，即 $(\overline{X},\overline{d})$ 是完备度量空间，且 $t: X \to \overline{X}$ 是等距嵌入，并且 $t(X)$ 在 $\overline{X}$ 中稠密。设 $(Y,d_Y)$ 是完备度量空间，$\phi: X \to Y$ 是 1-Lipschitz 映射。

对于任意 $\bar{x} \in \overline{X}$，由于 $t(X)$ 稠密，存在序列 $\{x_n\} \subset X$ 使得 $t(x_n) \to \bar{x}$。由于 $t$ 是等距，$\{x_n\}$ 是柯西序列。因为 $\phi$ 是 1-Lipschitz，$\{\phi(x_n)\}$ 是 $Y$ 中的柯西序列，且由于 $Y$ 完备，收敛到某点 $y \in Y$。定义 $\overline{\phi}(\bar{x}) = y$。

若另有序列 $\{x'_n\}$ 满足 $t(x'_n) \to \bar{x}$，则 $d(x_n, x'_n) = \overline{d}(t(x_n), t(x'_n)) \to 0$，故 $d_Y(\phi(x_n), \phi(x'_n)) \leq d(x_n, x'_n) \to 0$，所以极限相同，定义良好。

对任意 $\bar{x}, \bar{x}' \in \overline{X}$，取序列 $\{x_n\}, \{x'_n\}$ 使得 $t(x_n) \to \bar{x}$, $t(x'_n) \to \bar{x}'$。则
$$
d_Y(\overline{\phi}(\bar{x}), \overline{\phi}(\bar{x}')) = \lim d_Y(\phi(x_n), \phi(x'_n)) \leq \lim d(x_n, x'_n) = \lim \overline{d}(t(x_n), t(x'_n)) = \overline{d}(\bar{x}, \bar{x}'),
$$
所以 $\overline{\phi}$ 是 1-Lipschitz。对于 $x \in X$，取常数序列得 $\overline{\phi}(t(x)) = \phi(x)$，即 $\phi = \overline{\phi} \circ t$。

唯一性：若另有 1-Lipschitz $\psi: \overline{X} \to Y$ 满足 $\psi \circ t = \phi$，则对任意 $\bar{x} \in \overline{X}$，取序列 $x_n \to \bar{x}$，有
$$
\psi(\bar{x}) = \lim \psi(t(x_n)) = \lim \phi(x_n) = \overline{\phi}(\bar{x}),
$$
故 $\psi = \overline{\phi}$。

#### 2. 证明完备化的唯一性

设 $(\overline{X}_1,\overline{d}_1,t_1)$ 和 $(\overline{X}_2,\overline{d}_2,t_2)$ 是 $(X,d)$ 的两个完备化。考虑映射 $t_2: X \to \overline{X}_2$，它是等距，故为 1-Lipschitz。由 (1) 的泛性质，存在唯一 1-Lipschitz $\psi: \overline{X}_1 \to \overline{X}_2$ 使得 $t_2 = \psi \circ t_1$。

同理，存在唯一 1-Lipschitz $\phi: \overline{X}_2 \to \overline{X}_1$ 使得 $t_1 = \phi \circ t_2$。

考虑复合 $\phi \circ \psi: \overline{X}_1 \to \overline{X}_1$。对 $x \in X$，有
$$
\phi \circ \psi (t_1(x)) = \phi(t_2(x)) = t_1(x),
$$
故 $\phi \circ \psi$ 在 $t_1(X)$ 上为恒等映射。由于 $t_1(X)$ 稠密且 $\phi \circ \psi$ 连续，故 $\phi \circ \psi = id_{\overline{X}_1}$。同理，$\psi \circ \phi = id_{\overline{X}_2}$。因此 $\psi$ 和 $\phi$ 是互逆的等距映射。

唯一性由泛性质中的唯一性保证。

#### 3. 证明完备化的存在性

考虑空间 $C_b(X)$，即所有有界连续函数 $f: X \to \mathbb{R}$ 的空间，配备上确界范数 $\|f\|_\infty = \sup_{x \in X} |f(x)|$。由于 $\mathbb{R}$ 完备，$C_b(X)$ 是 Banach 空间，故完备。

固定 $x_0 \in X$。对每个 $x \in X$，定义函数 $f_x(y) = d(y,x) - d(y,x_0)$。由三角不等式，$|f_x(y)| \leq d(x,x_0)$，故 $f_x$ 有界；且 $d$ 连续，故 $f_x$ 连续。因此 $f_x \in C_b(X)$。

定义映射 $t: X \to C_b(X)$ 为 $t(x) = f_x$。对 $x, x' \in X$，有
$$
\|f_x - f_{x'}\|_\infty = \sup_{y \in X} |d(y,x) - d(y,x')|.
$$
由三角不等式，$|d(y,x) - d(y,x')| \leq d(x,x')$，且取 $y = x$ 时 $|f_x(x) - f_{x'}(x)| = d(x,x')$，故 $\|f_x - f_{x'}\|_\infty = d(x,x')$。所以 $t$ 是等距嵌入。

令 $\overline{X}$ 为 $t(X)$ 在 $C_b(X)$ 中的闭包，$\overline{d}$ 为上确界范数诱导的度量。由于 $C_b(X)$ 完备，$\overline{X}$ 作为闭子集完备。且 $t(X)$ 在 $\overline{X}$ 中稠密。故 $(\overline{X}, \overline{d}, t)$ 是 $(X,d)$ 的一个完备化。

#### 4. 证明满足泛性质的映射是完备化

设 $(\overline{X},\overline{d})$ 是完备度量空间，$t: X \to \overline{X}$ 是 1-Lipschitz 映射，且满足泛性质。先证 $t$ 是等距嵌入。

对任意 $x' \in X$，定义 $\phi: X \to \mathbb{R}$ 为 $\phi(x) = d(x,x')$。则 $|\phi(x) - \phi(y)| \leq d(x,y)$，故 $\phi$ 是 1-Lipschitz。由泛性质，存在唯一 1-Lipschitz $\overline{\phi}: \overline{X} \to \mathbb{R}$ 使得 $\overline{\phi} \circ t = \phi$。

对 $x, x' \in X$，有 $\overline{\phi}(t(x)) = d(x,x')$ 和 $\overline{\phi}(t(x')) = d(x',x') = 0$。故
$$
d(x,x') = |\overline{\phi}(t(x)) - \overline{\phi}(t(x'))| \leq \overline{d}(t(x), t(x')) \leq d(x,x'),
$$
其中最后不等式因 $t$ 是 1-Lipschitz。故 $\overline{d}(t(x), t(x')) = d(x,x')$，即 $t$ 是等距嵌入。

再证 $t(X)$ 在 $\overline{X}$ 中稠密。由 (3)，存在完备化 $(\hat{X}, \hat{d}, \hat{t})$。应用泛性质于 $\hat{t}: X \to \hat{X}$（等距故 1-Lipschitz），存在唯一 1-Lipschitz $\overline{\hat{t}}: \overline{X} \to \hat{X}$ 使得 $\overline{\hat{t}} \circ t = \hat{t}$。

应用 $(\hat{X}, \hat{d}, \hat{t})$ 的泛性质于 $t: X \to \overline{X}$（1-Lipschitz），存在唯一 1-Lipschitz $\overline{t}: \hat{X} \to \overline{X}$ 使得 $\overline{t} \circ \hat{t} = t$。

考虑复合 $\overline{t} \circ \overline{\hat{t}}: \overline{X} \to \overline{X}$。对 $x \in X$，
$$
\overline{t} \circ \overline{\hat{t}} (t(x)) = \overline{t} (\overline{\hat{t}} (t(x))) = \overline{t} (\hat{t}(x)) = t(x),
$$
故 $\overline{t} \circ \overline{\hat{t}}$ 在 $t(X)$ 上为恒等。由泛性质唯一性，$\overline{t} \circ \overline{\hat{t}} = id_{\overline{X}}$。同理，$\overline{\hat{t}} \circ \overline{t} = id_{\hat{X}}$。故 $\overline{\hat{t}}$ 和 $\overline{t}$ 是互逆的等距映射。

由于 $\hat{t}(X)$ 在 $\hat{X}$ 中稠密，且 $\overline{t}$ 是等距，故 $t(X) = \overline{t}(\hat{t}(X))$ 在 $\overline{X}$ 中稠密。因此 $(\overline{X},\overline{d},t)$ 是完备化。

## 1.3
证明赋范向量空间的完备化是 Banach 空间

### 解答

设 $(X, \|\cdot\|)$ 是一个赋范向量空间（不一定完备）。定义 $S$ 为 $X$ 中所有 Cauchy 序列的集合。在 $S$ 上定义等价关系：
$$
\{x_n\} \sim \{y_n\} \iff \lim_{n \to \infty} \|x_n - y_n\| = 0.
$$
令 $Y = S / {\sim}$ 表示等价类的集合，记 $[{x_n}]$ 为 Cauchy 序列 $\{x_n\}$ 的等价类。

定义线性运算和范数：
- **加法**：$[{x_n}] + [{y_n}] = [{x_n + y_n}]$
- **数乘**：$\alpha [{x_n}] = [{\alpha x_n}]$
- **范数**：$\|[{x_n}]\| = \lim_{n \to \infty} \|x_n\|$

这些定义是良定的：
- 若 $\{x_n\} \sim \{x'_n\}$ 且 $\{y_n\} \sim \{y'_n\}$，则
  $$
  \|(x_n + y_n) - (x'_n + y'_n)\| \leq \|x_n - x'_n\| + \|y_n - y'_n\| \to 0,
  $$
  故加法良定。数乘类似。
- 若 $\{x_n\} \sim \{x'_n\}$，则
  $$
  \left| \|x_n\| - \|x'_n\| \right| \leq \|x_n - x'_n\| \to 0,
  $$
  故范数良定。

验证 $Y$ 是赋范向量空间：
- **正定性**：$\|[x_n]\| = 0 \implies \lim \|x_n\| = 0 \implies \{x_n\} \sim \{0\} \implies [{x_n}] = 0$。
- **齐次性**：$\|\alpha [x_n]\| = \lim \|\alpha x_n\| = |\alpha| \lim \|x_n\| = |\alpha| \|[x_n]\|$。
- **三角不等式**：
  $$
  \|[x_n] + [y_n]\| = \lim \|x_n + y_n\| \leq \lim (\|x_n\| + \|y_n\|) = \|[x_n]\| + \|[y_n]\|.
  $$


定义等距嵌入 $\phi: X \to Y$：
定义 $\phi(x) = [{x, x, x, \ldots}]$（常数序列）。则：
- $\phi$ 是线性映射。
- $\|\phi(x)\| = \lim \|x\| = \|x\|$，故 $\phi$ 是等距映射。

证明 $\phi(X)$ 在 $Y$ 中稠密：
对任意 $y = [{x_n}] \in Y$，令 $y_k = \phi(x_k) \in \phi(X)$。则：
$$
\|y_k - y\| = \lim_{m \to \infty} \|x_k - x_m\|.
$$
由于 $\{x_n\}$ 是 Cauchy 序列，对任意 $\varepsilon > 0$，存在 $N$ 使得当 $k, m > N$ 时 $\|x_k - x_m\| < \varepsilon$。故当 $k > N$ 时，
$$
\|y_k - y\| = \lim_{m \to \infty} \|x_k - x_m\| \leq \varepsilon,
$$
即 $y_k \to y$，所以 $\phi(X)$ 在 $Y$ 中稠密。

证明 $Y$ 是完备的：
设 $\{y_k\}$ 是 $Y$ 中的 Cauchy 序列。由于 $\phi(X)$ 稠密，对每个 $k$，存在 $x_k \in X$ 使得 $\|\phi(x_k) - y_k\| < 1/k$。

- **证明 $\{x_k\}$ 是 $X$ 中的 Cauchy 序列**：
  $$
  \|x_k - x_l\| = \|\phi(x_k) - \phi(x_l)\| \leq \|\phi(x_k) - y_k\| + \|y_k - y_l\| + \|y_l - \phi(x_l)\| < \frac{1}{k} + \|y_k - y_l\| + \frac{1}{l}.
  $$
  由于 $\{y_k\}$ 是 Cauchy 序列，右端可任意小，故 $\{x_k\}$ 是 Cauchy 序列。

- **令 $y = [{x_k}] \in Y$，证明 $y_k \to y$**：
  $$
  \|y_k - y\| \leq \|y_k - \phi(x_k)\| + \|\phi(x_k) - y\| < \frac{1}{k} + \|\phi(x_k) - y\|.
  $$
  又
  $$
  \|\phi(x_k) - y\| = \lim_{l \to \infty} \|x_k - x_l\|,
  $$
  由于 $\{x_k\}$ 是 Cauchy 序列，对任意 $\varepsilon > 0$，存在 $N$ 使得当 $k, l > N$ 时 $\|x_k - x_l\| < \varepsilon$，故
  $$
  \|\phi(x_k) - y\| = \lim_{l \to \infty} \|x_k - x_l\| \leq \varepsilon.
  $$
  因此当 $k > N$ 时，$\|y_k - y\| < 1/k + \varepsilon \to \varepsilon$，即 $y_k \to y$。

故 $Y$ 是完备的赋范向量空间，即 Banach 空间。

## 1.4
设 $X = \left\{ (x_1, x_2, x_3, \ldots) \,\middle|\, \text{只有有限个 } x_i \neq 0 \right\}$，配备欧氏范数 $\|x\| = \sqrt{\sum_{i=1}^{\infty} |x_i|^2}$。证明$X$ 不是完备的，并给出其完备化。

### 解答

- $X$ 不是完备的
  考虑序列 $\{x_n\} \subset X$，其中 $x_n = \left(1, \frac{1}{2}, \frac{1}{4}, \ldots, \frac{1}{2^{n-1}}, 0, 0, \ldots\right)$，即前 $n$ 个分量为 $1/2^{k-1}$（$k=1,\ldots,n$），其余分量为零。每个 $x_n$ 只有有限个非零分量，故 $x_n \in X$。

  该序列是柯西序列，因为对于 $m > n$，有：
  $$
  \|x_m - x_n\|^2 = \sum_{k=n}^{m-1} \left(\frac{1}{2^k}\right)^2 = \sum_{k=n}^{m-1} \frac{1}{4^k} \leq \frac{1}{4^n} \cdot \frac{1}{1 - 1/4} = \frac{1}{4^n} \cdot \frac{4}{3},
  $$
  当 $n \to \infty$ 时，上式趋于零。因此，$\{x_n\}$ 是柯西序列。

  然而，该序列收敛于点 $x = \left(1, \frac{1}{2}, \frac{1}{4}, \ldots, \frac{1}{2^{k-1}}, \ldots\right)$，该点有无限个非零分量，且 $\sum_{k=1}^{\infty} |x_k|^2 = \sum_{k=1}^{\infty} \frac{1}{4^{k-1}} = \frac{1}{1 - 1/4} = \frac{4}{3} < \infty$，故 $x \in l^2$，但 $x \notin X$（因为 $X$ 只包含有限个非零分量的向量）。因此，$X$ 不是完备的。

- $X$ 的完备化
  $l^2$ 空间定义为所有平方可和序列的集合，即：
  $$
  l^2 = \left\{ (x_1, x_2, \ldots) \,\middle|\, \sum_{i=1}^{\infty} |x_i|^2 < \infty \right\},
  $$
  配备欧氏范数 $\|x\| = \sqrt{\sum_{i=1}^{\infty} |x_i|^2}$。需要证明：
  1. $l^2$ 是完备的。
  2. $X$ 在 $l^2$ 中稠密。

  -  $l^2$ 是完备的
  $l^2$ 是希尔伯特空间，因为其内积 $\langle x, y \rangle = \sum_{i=1}^{\infty} x_i y_i$ 诱导的范数满足完备性。具体地，任何柯西序列在 $l^2$ 中收敛，这是一个标准结果（参见泛函分析教材，如《Real Analysis》 by H.L. Royden 或《Functional Analysis》 by W. Rudin）。因此，$l^2$ 是完备的。

  -  $X$ 在 $l^2$ 中稠密
  对于任意 $x = (x_1, x_2, \ldots) \in l^2$，定义序列 $\{x_n\} \subset X$ 为 $x_n = (x_1, x_2, \ldots, x_n, 0, 0, \ldots)$，即前 $n$ 个分量与 $x$ 相同，其余为零。每个 $x_n$ 只有有限个非零分量，故 $x_n \in X$。 then:
  $$
  \|x - x_n\|^2 = \sum_{i=n+1}^{\infty} |x_i|^2.
  $$
  由于 $x \in l^2$，有 $\sum_{i=1}^{\infty} |x_i|^2 < \infty$，因此尾和 $\sum_{i=n+1}^{\infty} |x_i|^2 \to 0$ 当 $n \to \infty$。故 $\|x - x_n\| \to 0$，即 $x_n \to x$ 在 $l^2$ 范数下。这表明 $X$ 在 $l^2$ 中稠密。

  由于 $l^2$ 是完备的且 $X$ 在 $l^2$ 中稠密，$l^2$ 是 $X$ 的完备化空间。完备化空间在等距同构意义下唯一，因此 $X$ 的完备化空间就是 $l^2$。

综上，赋范线性空间 $X$ 不是完备的，其完备化空间是 $l^2$。

## 1.5
设 $(X, M, \mu)$ 是一个复测度空间，即 $\mu : M \to \mathbb{C}$ 满足：
(1) $\mu(\emptyset) = 0$;
(2) 若 $\{E_j\}_{j \geq 1} \subset M$ 且互不相交，则 $\mu\left(\bigcup_{j=1}^{\infty} E_j\right) = \sum_{j=1}^{\infty} \mu(E_j)$.

则：
1. 对任意 $E \in M$，定义
$$
|\mu|(E) := \sup \left\{ \sum_{j=1}^{\infty} |\mu(E_j)| : \{E_j\}_{j \geq 1} \text{ 是 } E \text{ 的可测分割} \right\},
$$
其中上确界取遍所有 $E$ 的可数可测分割（即 $E = \bigcup_{j=1}^{\infty} E_j$，且 $E_j$ 互不相交）。证明 $|\mu|$ 是 $(X, M)$ 上的正测度，且 $|\mu|(X) < \infty$，即 $|\mu|$ 是有限测度。

2. 记 $C_m := \{ (X, M) \text{ 上的复测度} \}$，且对任意 $\mu \in C_m$，定义 $\|\mu\| = |\mu|(X)$。证明 $(C_m, \|\cdot\|)$ 是 Banach 空间。
### 证明

#### 1. 
首先，证明 $|\mu|$ 是正测度：
- $|\mu|(\emptyset) = 0$：因为 $\emptyset$ 的唯一划分是自身，且 $\mu(\emptyset) = 0$，所以 $|\mu|(\emptyset) = 0$。
- 非负性：对于任意 $E \in \mathcal{M}$，$|\mu|(E) \geq 0$，因为每个 $|\mu(E_j)| \geq 0$，因此上确界 $\geq 0$。
- 可数可加性：设 $\{F_k\}_{k\geq 1}$ 是一列互不相交的集合，需证 $|\mu|(\cup_{k=1}^{\infty} F_k) = \sum_{k=1}^{\infty} |\mu|(F_k)$。
  - 先证 $|\mu|(\cup_{k} F_k) \leq \sum_{k} |\mu|(F_k)$：对任意 $\cup_{k} F_k$ 的划分 $\{E_j\}$，有
    $$
    \sum_j |\mu(E_j)| \leq \sum_j \sum_k |\mu(E_j \cap F_k)| = \sum_k \sum_j |\mu(E_j \cap F_k)| \leq \sum_k |\mu|(F_k),
    $$
    因为 $\{E_j \cap F_k\}_j$ 是 $F_k$ 的划分。取上确界得 $|\mu|(\cup_{k} F_k) \leq \sum_k |\mu|(F_k)$。
  - 再证 $|\mu|(\cup_{k} F_k) \geq \sum_k |\mu|(F_k)$：对任意 $\epsilon > 0$，对每个 $k$，存在 $F_k$ 的划分 $\{E_{k,i}\}_i$ 使得
    $$
    \sum_i |\mu(E_{k,i})| \geq |\mu|(F_k) - \epsilon/2^k.
    $$
    则 $\{E_{k,i}\}_{k,i}$ 是 $\cup_{k} F_k$ 的划分，且
    $$
    \sum_{k,i} |\mu(E_{k,i})| = \sum_k \sum_i |\mu(E_{k,i})| \geq \sum_k (|\mu|(F_k) - \epsilon/2^k) = \sum_k |\mu|(F_k) - \epsilon.
    $$
    故 $|\mu|(\cup_{k} F_k) \geq \sum_k |\mu|(F_k) - \epsilon$，由 $\epsilon$ 任意性得 $|\mu|(\cup_{k} F_k) \geq \sum_k |\mu|(F_k)$。
  综上，$|\mu|(\cup_{k} F_k) = \sum_k |\mu|(F_k)$，即可数可加性成立。

其次，证明 $|\mu|(X) < \infty$：
- 设 $\mu = \nu + i\lambda$，其中 $\nu$ 和 $\lambda$ 是实值可数加性集函数。由于 $\mu(X)$ 有限，$\nu(X)$ 和 $\lambda(X)$ 也有限。
- 对于实值可数加性集函数，其总变差有限，即 $|\nu|(X) < \infty$ 和 $|\lambda|(X) < \infty$。
- 对任意 $E$ 的划分 $\{E_j\}$，有
  $$
  \sum_j |\mu(E_j)| \leq \sum_j |\nu(E_j)| + \sum_j |\lambda(E_j)| \leq |\nu|(E) + |\lambda|(E),
  $$
  故 $|\mu|(E) \leq |\nu|(E) + |\lambda|(E)$。取 $E = X$，得 $|\mu|(X) \leq |\nu|(X) + |\lambda|(X) < \infty$。

因此，$|\mu|$ 是有限正测度。

#### 2.
首先，证明 $\|\cdot\|$ 是范数：
- 非负性：$\|\mu\| = |\mu|(X) \geq 0$，且 $\|\mu\| = 0$ 当且仅当 $|\mu|(X) = 0$，即对任意 $E$，$|\mu|(E) = 0$，故 $\mu(E) = 0$，所以 $\mu = 0$。
- 齐次性：对 $a \in \mathbb{C}$，$\|a\mu\| = |a\mu|(X) = |a| |\mu|(X) = |a| \|\mu\|$。
- 三角不等式：对任意划分 $\{E_j\}$ of $X$，
  $$
  \sum_j |(\mu + \nu)(E_j)| \leq \sum_j |\mu(E_j)| + \sum_j |\nu(E_j)| \leq |\mu|(X) + |\nu|(X),
  $$
  故 $\|\mu + \nu\| = |\mu + \nu|(X) \leq |\mu|(X) + |\nu|(X) = \|\mu\| + \|\nu\|$.

其次，证明完备性：设 $\{\mu_n\}$ 是 $\mathcal{C}_m$ 中的柯西序列，即对任意 $\epsilon > 0$，存在 $N$ 使得当 $m,n \geq N$ 时，$\|\mu_m - \mu_n\| = |\mu_m - \mu_n|(X) < \epsilon$。
- 对任意 $E \in \mathcal{M}$，有 $|\mu_m(E) - \mu_n(E)| \leq |\mu_m - \mu_n|(E) \leq |\mu_m - \mu_n|(X) < \epsilon$，故 $\{\mu_n(E)\}$ 是 Cauchy 序列，收敛于某复数，定义 $\mu(E) = \lim_{n \to \infty} \mu_n(E)$。
- 证明 $\mu$ 是复测度：
  - $\mu(\emptyset) = \lim \mu_n(\emptyset) = 0$。
  - 可数可加性：设 $\{E_j\}$ 是互不相交的集合，$E = \cup_j E_j$。对任意 $\epsilon > 0$，存在 $N$ 使得当 $n \geq N$ 时，对任意 $E' \in \mathcal{M}$，$|\mu_n(E') - \mu(E')| < \epsilon/2$（因为柯西序列一致收敛）。对固定 $n \geq N$，由于 $\mu_n$ 可数可加，存在 $J_0$ 使得当 $J \geq J_0$ 时，$|\mu_n(E) - \sum_{j=1}^J \mu_n(E_j)| < \epsilon/2$。则
    $$
    |\mu(E) - \sum_{j=1}^J \mu(E_j)| \leq |\mu(E) - \mu_n(E)| + |\mu_n(E) - \sum_{j=1}^J \mu_n(E_j)| + |\sum_{j=1}^J (\mu_n(E_j) - \mu(E_j))| < \epsilon/2 + \epsilon/2 + J \cdot (\epsilon/2J) = \epsilon,
    $$
    其中最后一项由一致收敛控制。故 $\mu(E) = \sum_{j=1}^{\infty} \mu(E_j)$，即可数可加性成立。
- 证明 $\|\mu_n - \mu\| \to 0$：对任意 $\epsilon > 0$，存在 $N$ 使得当 $m,n \geq N$ 时，$|\mu_m - \mu_n|(X) < \epsilon$。对固定 $n \geq N$ 和任意划分 $\{E_j\}$ of $X$，有
  $$
  \sum_j |(\mu_n - \mu)(E_j)| \leq \liminf_{m \to \infty} \sum_j |(\mu_n - \mu_m)(E_j)| \leq \liminf_{m \to \infty} |\mu_n - \mu_m|(X) \leq \epsilon,
  $$
  故 $|\mu_n - \mu|(X) \leq \epsilon$，即 $\|\mu_n - \mu\| \leq \epsilon$。所以 $\|\mu_n - \mu\| \to 0$.

因此，$(\mathcal{C}_m, \|\cdot\|)$ 是 Banach 空间。
