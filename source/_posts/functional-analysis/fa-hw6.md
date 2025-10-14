---
title: 泛函分析第六次作业
tags:
  - math
  - functional analysis
categories:
  - math
  - functional analysis
excerpt: 泛函分析第六次作业
abbrlink: 4a3b53b5
date: 2025-10-06 11:38:10
---
## 6.1
记 $ I = [0,1] $ 为单位区间，$ C^1(I) $ 为连续可微函数 $ f: I \to \mathbb{R} $ 构成的空间（在 $ t=0 $ 和 $ t=1 $ 处考虑单侧导数）。定义  
$$
\|f\|_{C^1} := \sup_{0 \leq t \leq 1} |f(t)| + \sup_{0 \leq t \leq 1} |f'(t)|, \quad \text{for } f \in C^1(I).
$$

1. 证明：$ C^1(I) $ 在如上定义的范数下为 Banach 空间；

2. 证明：嵌入映射 $ \iota: C^1(I) \to C(I) $ 是有界线性算子；

3. 记 $ B \subset C^1(I) $ 为单位球，证明：$ \iota(B) $ 的闭包是紧的；

4. $ \iota(B) $ 是 $ C(I) $ 中的闭集吗？

5. 线性映射 $ \iota: C^1(I) \to C(I) $ 的像集是紧的吗？

### 解答

#### 1

设 $\{f_n\}$ 是 $C^1(I)$ 中的一个 Cauchy 序列，即对任意 $\varepsilon > 0$，存在 $N$ 使得当 $m, n \geq N$ 时，
$$
\|f_n - f_m\|_{C^1} = \sup_{t \in I} |f_n(t) - f_m(t)| + \sup_{t \in I} |f_n'(t) - f_m'(t)| < \varepsilon.
$$
由此可得，$\{f_n\}$ 和 $\{f_n'\}$ 在 $C(I)$ 中均为 Cauchy 序列。由于 $C(I)$ 是完备的，存在 $f, g \in C(I)$ 使得
$$
f_n \to f \quad \text{和} \quad f_n' \to g \quad \text{在 } C(I) \text{ 中一致收敛}.
$$

接下来证明 $f \in C^1(I)$ 且 $f' = g$。对任意 $x, y \in I$，由牛顿-莱布尼茨公式，
$$
f_n(x) - f_n(y) = \int_y^x f_n'(t) \, dt.
$$
令 $n \to \infty$，由一致收敛性可得
$$
f(x) - f(y) = \int_y^x g(t) \, dt.
$$
因此 $f$ 可微且 $f' = g$，故 $f \in C^1(I)$。又因为 $f_n \to f$ 和 $f_n' \to f'$ 一致，有
$$
\|f_n - f\|_{C^1} = \sup |f_n - f| + \sup |f_n' - f'| \to 0,
$$
即 $f_n \to f$ 在 $C^1(I)$ 中。所以 $C^1(I)$ 是完备的，从而是 Banach 空间。


#### 2

映射 $\iota(f) = f$ 显然是线性的。对任意 $f \in C^1(I)$，有
$$
\|\iota(f)\|_{C} = \sup_{t \in I} |f(t)| \leq \sup_{t \in I} |f(t)| + \sup_{t \in I} |f'(t)| = \|f\|_{C^1}.
$$
因此 $\|\iota\| \leq 1$，即 $\iota$ 是有界线性算子。


#### 3

设 $B = \{ f \in C^1(I) : \|f\|_{C^1} \leq 1 \}$，则 $\iota(B) = B$。对任意 $f \in B$，有
$$
\sup |f| \leq 1, \quad \sup |f'| \leq 1.
$$
由中值定理，对任意 $x, y \in I$，
$$
|f(x) - f(y)| \leq \sup |f'| \cdot |x - y| \leq |x - y|,
$$
故 $B$ 是等度连续的。又因 $B$ 一致有界，由 Arzelà–Ascoli 定理，$\overline{B}$ 在 $C(I)$ 中是紧集。


#### 4

不是。考虑函数序列：
$$
f_n(x) = \frac{1}{2} \sqrt{\left(x - \frac{1}{2}\right)^2 + \frac{1}{n}}, \quad x \in I.
$$
易验证 $f_n \in C^1(I)$，且
$$
\sup |f_n| \leq \frac{1}{2}, \quad \sup |f_n'| \leq \frac{1}{2}, \quad \text{故 } \|f_n\|_{C^1} \leq 1.
$$
即 $f_n \in B$。当 $n \to \infty$ 时，$f_n$ 在 $C(I)$ 中一致收敛于
$$
f(x) = \frac{1}{2} \left| x - \frac{1}{2} \right|,
$$
但 $f$ 在 $x = \frac{1}{2}$ 处不可微，故 $f \notin C^1(I)$，从而 $f \notin \iota(B)$。因此 $\iota(B)$ 不是闭集。


#### 5

不是。像集 $\iota(C^1(I)) = C^1(I)$ 是无限维的（例如，函数族 $\{x^n\}_{n \in \mathbb{N}}$ 线性无关）。在无限维赋范空间中，紧集必为有限维，故 $C^1(I)$ 不可能是紧集。


## 6.2
记 $ I = [0,1] $，$ K: I \times I \to \mathbb{R} $ 为连续函数。定义线性算子 $ T_K: C(I) \to C(I) $ 为：

$$
(T_K f)(t) := \int_0^1 K(t,s) f(s)\,ds, \quad \text{for } f \in C(I),\ 0 \le t \le 1.
$$

证明：  
1. $ T_K $ 是连续的；  
2. 令 $ B \subset C(I) $ 为单位球（即 $ B = \{ f \in C(I) : \|f\|_\infty \le 1 \} $），证明 $ T_K(B) $ 的闭包是 $ C(I) $ 中的紧集。

### 解答
#### 1

设 $I = [0,1]$，$K: I \times I \to \mathbb{R}$ 是连续函数。定义算子 $T_K: C(I) \to C(I)$ 为：

$$
(T_K f)(t) = \int_0^1 K(t,s) f(s)\,ds, \quad \text{其中 } f \in C(I),\ 0 \le t \le 1.
$$

由于 $K$ 在紧集 $I \times I$ 上连续，存在常数 $M > 0$ 使得：

$$
|K(t,s)| \le M \quad \text{对所有 } (t,s) \in I \times I.
$$

对于任意 $f \in C(I)$，有：

$$
|(T_K f)(t)| = \left| \int_0^1 K(t,s) f(s)\,ds \right| \le \int_0^1 |K(t,s)| |f(s)|\,ds \le M \int_0^1 |f(s)|\,ds.
$$

又因为 $\|f\|_\infty = \sup_{t \in I} |f(t)|$，所以：

$$
\int_0^1 |f(s)|\,ds \le \|f\|_\infty.
$$

因此：

$$
|(T_K f)(t)| \le M \|f\|_\infty \quad \text{对所有 } t \in I,
$$

即：

$$
\|T_K f\|_\infty \le M \|f\|_\infty.
$$

这说明 $T_K$ 是有界线性算子，从而是连续的。


#### 2

根据 Arzelà–Ascoli 定理，一个函数族在 $C(I)$ 中相对紧（即其闭包是紧集）当且仅当该族是一致有界，且等度连续的

对于任意 $f \in B$，有 $\|f\|_\infty \le 1$。由第一步的估计：

$$
\|T_K f\|_\infty \le M \|f\|_\infty \le M.
$$

因此，$T_K(B)$ 是一致有界的。


对于任意 $f \in B$，考虑 $t_1, t_2 \in I$，则：

$$
|(T_K f)(t_1) - (T_K f)(t_2)| = \left| \int_0^1 [K(t_1,s) - K(t_2,s)] f(s)\,ds \right|.
$$

由于 $|f(s)| \le 1$，有：

$$
|(T_K f)(t_1) - (T_K f)(t_2)| \le \int_0^1 |K(t_1,s) - K(t_2,s)|\,ds.
$$

因为 $K$ 在紧集 $I \times I$ 上一致连续，对于任意 $\varepsilon > 0$，存在 $\delta > 0$ 使得当 $|t_1 - t_2| < \delta$ 时，对任意 $s \in I$，有：

$$
|K(t_1,s) - K(t_2,s)| < \varepsilon.
$$

因此：

$$
\int_0^1 |K(t_1,s) - K(t_2,s)|\,ds < \varepsilon.
$$

即：

$$
|(T_K f)(t_1) - (T_K f)(t_2)| < \varepsilon \quad \forall f \in B.
$$

这说明 $T_K(B)$ 是等度连续的

于是由 Arzelà–Ascoli 定理，$T_K(B)$ 的闭包是 $C(I)$ 中的紧集。 


## 5.3(?)
设 $(X, \rho)$ 是完备度量空间，$M$ 是 $X$ 中的列紧集，映射 $f: X \to M$ 满足

$$
\rho(f(x_1), f(x_2)) < \rho(x_1, x_2), \quad \forall x_1, x_2 \in X,\ x_1 \ne x_2.
$$

证明：$f$ 在 $X$ 中存在唯一的不动点。

### 解答

由于 $M$ 是列紧集，且 $X$ 是完备的，可知 $\overline{M}$ 是紧集。

又因为 $f(X) \subseteq M$，所以：
$$
f(\overline{M}) \subseteq M \subseteq \overline{M}.
$$
因此，$f$ 可视为从 $\overline{M}$ 到自身的映射。

此外，由条件可知 $f$ 是严格收缩的：
$$
\rho(f(x), f(y)) < \rho(x, y), \quad \forall x, y \in \overline{M},\ x \ne y.
$$

定义函数：
$$
\phi(x) = \rho(x, f(x)), \quad x \in \overline{M}.
$$
由于 $f$ 是连续的（由严格收缩性可得），$\phi$ 也是连续的。

由于 $\overline{M}$ 是紧集，$\phi$ 在 $\overline{M}$ 上达到最小值，设最小值为 $m$，且在 $x_0 \in \overline{M}$ 处取得：
$$
\phi(x_0) = m.
$$

假设 $m > 0$，则 $f(x_0) \ne x_0$。考虑点 $f(x_0)$，计算：
$$
\phi(f(x_0)) = \rho(f(x_0), f(f(x_0))) < \rho(x_0, f(x_0)) = \phi(x_0) = m,
$$
这与 $m$ 是最小值矛盾。

因此，$m = 0$，即 $\phi(x_0) = 0$，所以：
$$
f(x_0) = x_0.
$$
即 $x_0$ 是 $f$ 的一个不动点。

唯一性: 假设存在两个不同的不动点 $x, y \in X$，即 $f(x) = x$，$f(y) = y$，且 $x \ne y$。

则：
$$
\rho(x, y) = \rho(f(x), f(y)) < \rho(x, y),
$$
矛盾。

因此，不动点唯一。


## 6.3

设 $M$ 是 $C[a,b]$ 中的有界集，证明：集合

$$
\left\{ F(x) = \int_a^x f(t)\,dt : f \in M \right\}
$$

是预列紧集。

### 解答

只需验证一致有界和等度连续

对任意 $F \in S$，存在 $f \in M$ 使得  
$$
F(x) = \int_a^x f(t)\,dt.
$$  
由于 $|f(t)| \leq K$，有  
$$
|F(x)| = \left| \int_a^x f(t)\,dt \right| \leq \int_a^x |f(t)|\,dt \leq K(x - a) \leq K(b - a).
$$  
因此，  
$$
\|F\|_\infty \leq K(b - a),
$$  
即 $S$ 是一致有界的。

对任意 $F \in S$，存在 $f \in M$ 使得 $F(x) = \int_a^x f(t)\,dt$。  
对任意 $x, y \in [a,b]$，不妨设 $x \leq y$，则  
$$
|F(x) - F(y)| = \left| \int_x^y f(t)\,dt \right| \leq \int_x^y |f(t)|\,dt \leq K |x - y|.
$$  
给定 $\varepsilon > 0$，取 $\delta = \frac{\varepsilon}{K}$，则当 $|x - y| < \delta$ 时，  
$$
|F(x) - F(y)| < \varepsilon,
$$  
即 $S$ 是等度连续的。


## 6.4

设 $E = \{\sin nt\}_{n=1}^\infty$，证明：$E$ 在 $C[0,\pi]$ 中不是列紧的。

### 解答

 
函数族 $E$ 是等度连续的，如果对任意 $\varepsilon > 0$，存在 $\delta > 0$，使得对所有 $n$ 和任意 $s, t \in [0,\pi]$ 满足 $|s - t| < \delta$，有  
$$
|\sin(ns) - \sin(nt)| < \varepsilon.
$$  
利用三角恒等式：  
$$
\sin(ns) - \sin(nt) = 2 \cos\left(n\frac{s+t}{2}\right) \sin\left(n\frac{s-t}{2}\right),
$$  
可得  
$$
|\sin(ns) - \sin(nt)| \leq 2 \left| \sin\left(n\frac{s-t}{2}\right) \right| \leq n|s - t|.
$$  
因此，若要求  
$$
n|s - t| < \varepsilon,
$$  
则需  
$$
|s - t| < \frac{\varepsilon}{n}.
$$  
但 $n$ 可任意大，因此无法找到统一的 $\delta > 0$ 满足条件。故 $E$ 不是等度连续的。

根据 Arzelà–Ascoli 定理，$E$ 在 $C[0,\pi]$ 中不是相对紧的，因此也不是列紧的。


## 6.5

在度量空间中证明：完全有界的集合是有界的，并通过考虑 $l^2$ 的子集 $E = \{e_k\}_{k=1}^\infty$ 来说明一个集合可以有界但不完全有界。

### 解答
设 $(X, d)$ 为度量空间，$A \subseteq X$ 是完全有界的。根据完全有界的定义，对于任意 $\epsilon > 0$，存在有限个点 $x_1, x_2, \dots, x_n \in X$ 使得 $A \subseteq \bigcup_{i=1}^n B(x_i, \epsilon)$。取 $\epsilon = 1$，则存在点 $x_1, x_2, \dots, x_n$ 满足 $A \subseteq \bigcup_{i=1}^n B(x_i, 1)$。

现在证明 $A$ 是有界的。取点 $y = x_1$，并令 $R = \max_{1 \leq i,j \leq n} d(x_i, x_j)$。由于 $n$ 有限，$R$ 是有限值。对于任意 $a \in A$，存在某个 $i$ 使得 $a \in B(x_i, 1)$，即 $d(a, x_i) < 1$。于是有：
$$
d(a, y) \leq d(a, x_i) + d(x_i, y) < 1 + R.
$$
因此，$A \subseteq B(y, 1 + R)$，即 $A$ 是有界的。

下面证明 $E$ 有界但不完全有界. 对于任意 $e_k$，有 $\|e_k\| = 1$。取零向量 $0 \in l^2$，则对任意 $e_k$，有 $d(0, e_k) = \|e_k\| = 1$。因此，$E \subseteq B(0, 2)$，即 $E$ 是有界的。

假设 $E$ 是完全有界的，则对于任意 $\epsilon > 0$，存在有限个点覆盖 $E$ 的 $\epsilon$-球。取 $\epsilon = \frac{\sqrt{2}}{2}$，则对于任意两个不同的 $e_k$ 和 $e_m$，有 $d(e_k, e_m) = \|e_k - e_m\| = \sqrt{2}$。对于任意点 $x \in l^2$，球 $B(x, \epsilon)$ 最多只能包含一个 $e_k$，因为如果存在两个不同的 $e_k, e_m \in B(x, \epsilon)$，则：
$$
d(e_k, e_m) \leq d(e_k, x) + d(x, e_m) < 2\epsilon = \sqrt{2},
$$
但与 $d(e_k, e_m) = \sqrt{2}$ 矛盾。因此，每个 $\epsilon$-球至多包含一个 $e_k$。由于 $E$ 是无限集，而有限个 $\epsilon$-球最多覆盖有限个点，无法覆盖整个 $E$，故 $E$ 不是完全有界的。

综上，$E$ 有界但不完全有界。

## 6.6

试说明：对于可分非空完备度量空间，Baire 纲定理无需使用“依赖选择公理”。

### 解答

设 $X$ 是一个可分非空完备度量空间，$\{U_n\}_{n=1}^\infty$ 是一系列稠密开集。需要证明 $\bigcap_{n=1}^\infty U_n$ 是稠密的，即对于任何非空开集 $V \subseteq X$，有 $V \cap \bigcap_{n=1}^\infty U_n \neq \emptyset$。

由于 $X$ 是可分的，存在一个可数稠密子集 $D$，并且 $X$ 有一个可数基 $\mathcal{B} = \{B_k\}_{k=1}^\infty$，其中每个 $B_k$ 是以 $D$ 中点为圆心、有理数为半径的开球。这个基满足：对于任何非空开集 $W$ 和任何 $\epsilon > 0$，存在 $B_k \in \mathcal{B}$ 使得 $\overline{B_k} \subseteq W$ 且 $\text{diameter}(B_k) < \epsilon$（其中 $\overline{B_k}$ 表示 $B_k$ 的闭包）。

定义选择函数 $f$：对于任何非空开集 $W$ 和 $\epsilon > 0$，令 $f(W, \epsilon)$ 为最小的索引 $k$ 使得 $\overline{B_k} \subseteq W$ 且 $\text{diameter}(B_k) < \epsilon$。由于 $\mathcal{B}$ 是可数的，且对于任何非空开集 $W$ 和 $\epsilon > 0$，满足条件的 $B_k$ 存在，因此 $f$ 是良定义的，且不需要选择公理。

1. 从非空开集 $V$ 开始，令 $W_0 = V$。
2. 对于 $n = 1, 2, 3, \ldots$，执行以下步骤：
   - 令 $k_n = f(W_{n-1} \cap U_n, 1/n)$。
   - 令 $B_n = B_{k_n}$（即基开球）。
   - 令 $C_n = \overline{B_n}$（闭包）。
   根据 $f$ 的定义，有：
   - $C_n \subseteq W_{n-1} \cap U_n$，
   - $\text{diameter}(C_n) = \text{diameter}(B_n) < 1/n$。
3. 注意到 $C_n$ 是非空闭集，且 $C_n \subseteq C_{n-1}$（因为 $C_n \subseteq W_{n-1} = B_{n-1} \subseteq \overline{B_{n-1}} = C_{n-1}$)。
4. 由于 $X$ 是完备的，且 $\{C_n\}$ 是递减的非空闭集序列，直径趋于零，因此 $\bigcap_{n=1}^\infty C_n$ 非空，且包含唯一一点 $x$。
5. 对于每个 $n$，有 $x \in C_n \subseteq U_n$，所以 $x \in \bigcap_{n=1}^\infty U_n$。
6. 同时，$x \in C_1 \subseteq V \cap U_1 \subseteq V$，所以 $x \in V \cap \bigcap_{n=1}^\infty U_n$。

因此，$V \cap \bigcap_{n=1}^\infty U_n \neq \emptyset$，证明了 $\bigcap_{n=1}^\infty U_n$ 是稠密的。


## 6.7

试利用 Baire 纲定理证明：超越数在 $\mathbb{R}$ 中稠密。

### 解答
设 $A$ 为所有代数数的集合。设 $T = \mathbb{R} \setminus A$ 为所有超越数的集合。目标是证明 $T$ 在 $\mathbb{R}$ 中稠密。

每个代数数是某个非零整系数多项式的根，而这样的多项式只有可数多个（因为整系数多项式与 $\mathbb{Z}^n$ 的子集对应，是可数的）。每个非零多项式只有有限个根，因此 $A$ 是可数集。设 $A = \{a_1, a_2, a_3, \dots\}$。对于每个 $n \in \mathbb{N}$，单点集 $\{a_n\}$ 是闭集，且其内部为空（因为在 $\mathbb{R}$ 中，单点集不包含任何开区间），故 $\{a_n\}$ 是无处稠密集。因此，$A = \bigcup_{n=1}^{\infty} \{a_n\}$ 是可数个无处稠密集的并集，即 $A$ 是第一纲集。

$\mathbb{R}$ 是完备度量空间（关于通常的欧几里得度量）。由 Baire 纲定理，若 $A$ 是第一纲集，则其补集 $T = \mathbb{R} \setminus A$ 是 剩余集。在完备度量空间中，剩余集是稠密的。（若 $T$ 不稠密，则存在非空开区间 $I$ 使得 $I \cap T = \emptyset$，即 $I \subseteq A$。但 $I$ 作为非空开集是第二纲集，而 $A$ 是第一纲集，矛盾。）

因此，超越数集合 $T$ 在 $\mathbb{R}$ 中稠密。
