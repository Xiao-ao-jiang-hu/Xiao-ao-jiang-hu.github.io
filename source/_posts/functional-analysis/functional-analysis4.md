---
title: Ch 1.3 度量空间的紧性原理
tags:
  - functional analysis
  - math
categories:
  - math
  - functional analysis
excerpt: 泛函分析课程笔记
abbrlink: '559903e6'
date: 2025-09-27 18:06:33
---
# §3 度量空间的紧性原理

### 几个概念

- **紧集**：假设 $(X, \tau)$ 是拓扑空间。称 $K$ 是紧集，如果  
  $$
  K \subseteq \bigcup_{U \in \mathcal{U}} U,\quad \mathcal{U} \subseteq \tau
  $$  
  则 $\exists\ \{U_1, \cdots, U_m\} \subseteq \mathcal{U},\ \text{s.t.}\ K \subseteq \bigcup_{i=1}^m U_i$。

- **列紧集**：称度量空间 $(X, d)$ 是列紧的，如果  
  $$
  \forall\ \{x_n\}_{n=1}^\infty \subseteq X,\ \exists\ \{x_{n_k}\}_{k=1}^\infty \subseteq \{x_n\}_{n=1}^\infty
  \text{，使得 } \{x_{n_k}\} \text{ 是 } X \text{ 中的收敛列。}
  $$  
  若 $K \subseteq X$，称 $K$ 是列紧集，如果 $(K, d_K)$ 是列紧的，其中 $d_K = d|_{K \times K}$。

- **预紧集**：若 $K \subseteq X = (X, d)$，称 $K$ 是预紧集，如果 $(K, d_K)$ 是列紧的。  
  称 $K$ 是相对紧集，如果 $\overline{K}$ 是紧集。

- **完全有界集**：$K \subseteq X = (X, d)$，称 $K$ 是完全有界集，如果 $K = \emptyset$ 或者 $\forall\ \varepsilon > 0$，  
  $\exists\ x_1, \cdots, x_m \in K,\ \text{s.t.}\ K \subseteq \bigcup_{i=1}^m B(x_i; \varepsilon) \overset{\text{def}}{=} \left\{ y \in X \mid d(y, x_i) < \varepsilon \right\}$。

### 定理1（度量空间紧集的刻画）

设 $(X, d)$ 是度量空间，$K \subseteq X$，则下列论断等价：

- **(a)** $K$ 是列紧集  
- **(b)** $K$ 是完备的且是完全有界集  
  （注：$(K, d_K)$ 是完备的）  
- **(c)** $K$ 是紧集

> **注**：
> 1. 这表明“紧”与“列紧”在度量空间中的等价性。作为应用，“紧”的定义可以由“序列有收敛子列”替代。也表明**预紧与预列紧是等价的**。
> 2. 在“弱拓扑”与“弱*拓扑”下，“紧”与“列紧”不是等价的。

### 引理2

若 $(X,d)$ 是度量空间, $K \subseteq X$, 则下面论断等价：

1. $K$ 中的任何点列都存在 Cauchy 子列  
2. $K$ 是完全有界集

**证明**：

- **1 $\Rightarrow$ 2**：（反证法）假设 $\exists \varepsilon_0 > 0$，$\forall n \in \mathbb{N}$，$\forall \{x_j\}_{j=1}^n \subseteq K$，有 $K \not\subseteq \bigcup_{j=1}^n B(x_j; \varepsilon_0)$。  
  则 $K$ 是无限集。取定 $x_1 \in K$，$\Rightarrow \exists x_2 \in K \setminus B(x_1; \varepsilon)$，$\Rightarrow \exists x_3 \in K \setminus (B(x_1; \varepsilon) \cup B(x_2; \varepsilon))$。  
  由此可以得到序列 $\{x_m\}_{m \geq 1}$ 满足 $d(x_i, x_j) \geq \varepsilon$（$i \ne j$），这与1矛盾。

- **2 $\Rightarrow$ 1**：不妨假设 $\{x_n\}_{n \geq 1} \subseteq K$。由 $K$ 是完全有界的，取 $\varepsilon = 1$，$\Rightarrow \{x_n\}_{n \geq 1} \subseteq \bigcup_{j=1}^m B(y_j; 1)$。  
  $\Rightarrow \exists y_1 \in \{\xi_1, \cdots, \xi_m\}$ 以及子列 $\{x_n^{(1)}\}_{n \geq 1} \subseteq \{x_n\}_{n \geq 1}$，s.t. $\{x_n^{(1)}\}_{n \geq 1} \subseteq B(y_k; 1)$（至少有一个 $B(\xi_j; 1)$ 包含 $\{x_n\}_{n \geq 1}$ 中无限个元素）。  
  同理，对于 $\{x_n^{(1)}\}$，$\exists \{x_n^{(2)}\}_{n \geq 1} \subseteq \{x_n^{(1)}\}_{n \geq 1}$ 以及 $y_2 \in K$，s.t. $\{x_n^{(2)}\}_{n \geq 1} \subseteq B(y_2; \frac{1}{2})$。  
  $\Rightarrow \exists \{x_n^{(k)}\}$ 以及 $y_k \in K$，s.t. $\{x_n^{(k)}\} \subseteq \{x_n^{(k-1)}\}$ 且 $\{x_n^{(k)}\}_{n \geq 1} \subseteq B(y_k; \frac{1}{k})$。  
  取对角线序列 $\{x_n^{(n)}\}_{n \geq 1}$，则  
  $$
  \forall i,j \geq 1 \, , d(x_i^{(i)}, x_j^{(j)}) \leq 2 \max \left\{ \frac{1}{i}, \frac{1}{j} \right\}
  $$  
  故 $\{x_n^{(n)}\}$ 是 Cauchy 列。

### 定理1的证明

- **1 $\Leftrightarrow$ 2**：由引理2可知。

- **1 $\Leftrightarrow$ 3**（即“列紧”$\Leftrightarrow$“紧”）：

  - **1 $\Rightarrow$ 3**：（反证法）假设开覆盖 $\bigcup_{\lambda \in \Lambda} G_{\lambda} \supseteq K$ 不能取出有限子覆盖。  
    由于 $K$ 是列紧（$\Rightarrow$ 完全有界），$\forall n \in \mathbb{N}$，存在有限集 $N_n = \{x_1^{(n)}, \cdots, x_{k_n}^{(n)}\} \subseteq K$，s.t. $K \subseteq \bigcup_{x \in N_n} B(x; \frac{1}{n})$。  
    $\Rightarrow \exists y_n \in N_n \subseteq K$ s.t. $K \cap B(y_n; \frac{1}{n})$ 不能被有限个 $G_\lambda$ 覆盖。  
    此时 $\{y_n\} \subseteq K$ 且 $K$ 是列紧的，$\Rightarrow \exists \{y_{n_k}\}$ s.t $y_{n_k} \to y_0 \in K$。  
    于是 $\Rightarrow \exists \lambda_0 \in \Lambda$ s.t. $y_0 \in G_{\lambda_0}$，$\Rightarrow \exists \delta = \delta(y_0)$，s.t. $B(y_0; \delta) \cap K \subseteq G_{\lambda_0}$。  
    当 $n_k \gg 1$ 时，$d(y_{n_k}, y_0) < \delta/2$，$\Rightarrow \forall x \in B(y_{n_k}; \frac{1}{n_k}) \cap K$，  
    $$
    d(x, y_0) < d(x, y_{n_k}) + d(y_{n_k}, y_0) < \frac{1}{n_k} + \frac{\delta}{2} < \delta
    $$  
    即 $B(y_{n_k}; \frac{1}{n_k}) \cap K \subset G_{\lambda_0}$，这与不能有限覆盖矛盾。

  - **3 $\Rightarrow$ 1**：  
    - **Step1**：若 $K$ 是紧集，则 $K$ 是闭集。  
      任取 $x_0 \in K^c$，则 $K \subseteq \bigcup_{x \in K} B(x; \frac{1}{2}d(x_0, x))$。由于 $K$ 是紧集，存在有限子覆盖 $K \subseteq \bigcup_{i=1}^{N} B(x_i; \frac{1}{2}d(x_0, x_i))$。  
      取 $\delta = \min_{1 \le i \le N} \frac{1}{4}d(x_0; x_i)$，则任取 $x \in B(x_0; \delta)$，有  
      $$
      d(x, x_i) \ge d(x_i, x_0) - d(x, x_0) \ge \frac{3}{4}d(x_i, x_0) \quad \forall 1 \le i \le N
      $$  
      $\Rightarrow B(x_0; \delta) \cap K = \emptyset$，$\Rightarrow B(x_0; \delta) \subseteq K^c$，故 $K^c$ 是开集，$K$ 是闭集。

    - **Step2**：（反证法）假设 $K$ 中存在序列 $\{x_n\}_{n \ge 1}$ 不含有 Cauchy 子列，不妨设 $\{x_n\}_{n \ge 1}$ 互异。  
      记 $S_n \overset{\text{定义}}{=} \{x_n\}_{n \ge 1}^\infty \setminus \{x_n\}$，则 $S_n$ 是闭集，故 $X \setminus S_n^c$ 是开集。  
      $K \subseteq X = \bigcup_{n=1}^{\infty} (X \cap S_n^c)$，由紧性 $\Rightarrow \exists N \in \mathbb{N}$ s.t. $K \subset \bigcup_{n=1}^{N} (X \cap S_n^c)$。  
      但 $\{x_n\}_{n > 1} \cap K \subseteq \bigcup_{n=1}^{N} \{x_n\}$，矛盾。  
      结合 Step1 和 Step2，$K$ 是列紧集。

### 推论

#### 推论1
任意紧度量空间是可分的。（由完备有界集 $\Rightarrow$ 可数稠密子集）

#### 推论2
$(X, d)$ 是度量空间，$K \subseteq X$。则下列等价：

1. $K$ 是预紧集  
2. $K$ 中的序列存在 $X$ 中的收敛子列  
3. $K$ 是完备有界集且 $K$ 中的 Cauchy 列是 $X$ 中的收敛列

### Arzelà-Ascoli 定理

#### 定义
$C(X, Y) \overset{\text{定义}}{=} \{ f: (X, d_X) \to (Y, d_Y) \mid f \text{连续} \}$。  
$\forall f, g \in C(X, Y)$，定义 $d(f, g) \overset{\text{定义}}{=} \sup_{x \in X} d_Y(f(x), g(x))$。

#### 命题4
$(C(X, Y), d(\cdot, \cdot))$ 是完备的当且仅当 $(Y, d_Y)$ 是完备的。

#### 等度连续的定义
称 $\mathcal{F} \subseteq C(X, Y)$ 是等度连续的，如果 $\forall \varepsilon > 0$，$\exists \delta > 0$，s.t. $\forall x, x' \in X$ 以及 $f \in \mathcal{F}$，如果 $d(x, x') < \delta$，则 $d_Y(f(x), f(x')) < \varepsilon$。

#### Arzelà-Ascoli定理
假设 $(X, d_X), (Y, d_Y)$ 是度量空间，$X$ 是紧的，$\mathcal{F} \subset C(X, Y)$，则  
1. $\mathcal{F}$ 是预紧集  
2. $\mathcal{F}$ 是等度连续的且 $\forall x \in X$，$\mathcal{F}(x) \overset{\text{定义}}{=} \{f(x) \mid x \in X\}$ 是 $Y$ 中的预紧集（也称 $\mathcal{F}$ 是点态列紧）

**证明**：

- **1 $\Rightarrow$ 2**：  
  记 $T_x: C(X; Y) \to Y$ s.t. $\forall f \in C(X; Y)$，$T_x(f) = f(x)$。  
  则  
  $$
  d_Y(T_x(f), T_x(g)) = d_Y(f(x), g(x)) \le d(f, g) \Rightarrow T_x \in C(C(X; Y); Y)
  $$  
  连续映射将预列紧集映射至预列紧集，故 $\mathcal{F}$ 是点态列紧。  
  假设 $\mathcal{F}$ 非空。对于固定的 $\varepsilon > 0$，根据预紧性，存在有限集 $\{f_1, \cdots, f_m\} \subseteq \mathcal{F}$，使得  
  $$
  \mathcal{F} \subset \bigcup_{i=1}^{m} B\left(f_i; \frac{\varepsilon}{3}\right)
  $$  
  由于 $X$ 是紧集，每个 $f_i$（$1 \le i \le m$）是一致连续的。因此，存在 $\delta > 0$，使得对任意 $x, x' \in X$，若 $d(x, x') < \delta$，则  
  $$
  d_Y(f_i(x), f_i(x')) < \frac{\varepsilon}{3} \quad (\forall 1 \le i \le m)
  $$  
  现在，对任意 $f \in \mathcal{F}$，存在 $1 \le i \le m$，使得 $d(f_i, f) < \frac{\varepsilon}{3}$。于是，对任意 $x, x' \in X$ 满足 $d(x, x') < \delta$，有  
  $$
  \begin{aligned}
  d_Y(f(x), f(x')) &\le d_Y(f(x), f_i(x)) + d_Y(f_i(x), f_i(x')) + d_Y(f_i(x'), f(x')) \\
  &\le 2d(f_i, f) + d_Y(f_i(x), f_i(x')) \\
  &< 2 \cdot \frac{\varepsilon}{3} + \frac{\varepsilon}{3} = \varepsilon
  \end{aligned}
  $$  
  因此，$\mathcal{F}$ 是等度连续的。

- **2 $\Rightarrow$ 1**：  
  假设 $\mathcal{F}$ 是等度连续的，且对每个 $x \in X$，$\mathcal{F}(x)$ 是 $Y$ 中的预紧集。需要证明 $\mathcal{F}$ 是预紧集。  
  由于 $X$ 是紧度量空间，可取可数稠密子集 $\{x_k\}_{k \in \mathbb{N}}$。设 $\{f_m\}_{m \ge 1} \subseteq \mathcal{F}$。  
  由点态列紧性，使用对角线法则构造子列 $\{g_j := f_{m_j}\}_{j \ge 1} \subseteq \mathcal{F}$，使得对每个 $k \ge 1$，序列 $\{f_{m_j}(x_k)\}$ 在 $Y$ 中收敛。  
  固定 $\varepsilon > 0$。  
  - 由等度连续性，存在 $\delta > 0$，使得对任意 $x, x' \in X$，若 $d(x, x') < \delta$，则  
    $$
    d_Y(f(x), f(x')) < \frac{\varepsilon}{3} \quad \forall f \in \mathcal{F}
    $$  
  - 由于 $X$ 是紧集且 $\{x_k\}$ 稠密，存在有限子覆盖：  
    $$
    X = \bigcup_{k=1}^{N} B(x_k; \delta)
    $$  
  - 由于对每个 $1 \le k \le N$，序列 $\{f_{m_j}(x_k)\}$ 收敛，存在 $J > 0$，使得对任意 $1 \le k \le N$，  
    $$
    d_Y(f_{m_j}(x_k), f_{m_i}(x_k)) < \frac{\varepsilon}{3} \quad \forall i \ge j \ge J
    $$  
  现在，对任意 $x \in X$，存在 $1 \le \hat{k} \le N$，使得 $x \in B(x_{\hat{k}}; \delta)$。于是，对任意 $i \ge j \ge J$，  
  $$
  \begin{aligned}
  d_Y(f_{m_i}(x), f_{m_j}(x)) &\le d_Y(f_{m_i}(x), f_{m_i}(x_{\hat{k}})) + d_Y(f_{m_i}(x_{\hat{k}}), f_{m_j}(x_{\hat{k}})) + d_Y(f_{m_j}(x_{\hat{k}}), f_{m_j}(x)) \\
  &< \frac{\varepsilon}{3} + \frac{\varepsilon}{3} + \frac{\varepsilon}{3} = \varepsilon
  \end{aligned}
  $$  
  因此，$\{f_{m_j}\}$ 是 $C(X; Y)$ 中的 Cauchy 列。  
  由预紧性，$\{f_{m_j}\}$ 在 $C(X; Y)$ 中收敛，故 $\mathcal{F}$ 是预紧集。

### 推论5

$(X, d)$ 是紧度量空间，$\mathcal{F} \subset C(X; \mathbb{R}^n)$，则

1. $\mathcal{F}$ 是预紧的 $\Leftrightarrow$ $\mathcal{F}$ 是有界的（即 $\sup_{f \in \mathcal{F}} \sup_{x \in X} |f(x)| < +\infty$）且等度连续。  
2. $\mathcal{F}$ 是紧 $\Leftrightarrow$ $\mathcal{F}$ 有界、闭且等度连续。

> **注**：Arzelà-Ascoli定理中以下条件缺一不可：
> 1. 条件 “$(X, d)$ 是紧的”  
> 2. 条件 “$\mathcal{F}$ 是点态紧”  
> 3. 条件 “等度连续”  
> 
> **例10**：$X = [0, 1]$，$\{f_n(x) := x^n\}_{n \ge 1}$ 满足1、2，但不满足3。  
> **例11**：$X = \mathbb{R}$（不满足1），$f_n(x) = \begin{cases} 0 & x \in [n, n+1] \\ 2(x-n) & x \in [n, n+\frac{1}{2}] \\ 2 - 2(x-n) & x \in [n+\frac{1}{2}, n+1] \end{cases}$ 满足2、3，但 $\|f_n - f_m\|_\infty = 1$（$\forall n \ne m$）。  
> **例12**：$X = [0, 1]$，$f_n(x) = n$ 满足1、3，但不满足2。