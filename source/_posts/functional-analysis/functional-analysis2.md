---
title: Banach、Hilbert空间以及线性算子理论初步
tags:
  - math
  - functional-analysis
categories:
  - math
  - functional-analysis
excerpt: 泛函分析课程笔记
abbrlink: 3b3eb9f1
date: 2025-09-16 15:26:19
---
# Ch1. Banach、Hilbert空间以及线性算子理论初步

## §1. Banach空间理论

### 度量空间
#### 1. 度量空间的定义

1. **度量空间的定义**：设 $(X, d)$ 是度量空间，如果 $d: X \times X \rightarrow \mathbb{R}$ 满足
   - (M1) $d(x, y) \geq 0$，$\forall x, y \in X$，$d(x, y) = 0 \Leftrightarrow x = y$
   - (M2) $d(x, y) = d(y, x)$，$\forall x, y \in X$
   - (M3) $d(x, z) \leq d(x, y) + d(y, z)$，$\forall x, y, z \in X$
     此即，$d$ 称为 $X$ 上的度量函数。

2. **由度量诱导的拓扑空间**：设 $(X, d)$ 是度量空间，记 $B(x, \delta) = \{y \in X \mid d(x, y) < \delta\}$
   - 若 $U$ 是 $X$ 上的开集，如果 $\forall x \in U$，$\exists \delta > 0$，$s.t.\ B(x, \delta) \subseteq U$
   - 若 $\mathcal{T}(X, d) = \{U \subseteq X \mid U \text{是开集}\}$ ⇒ $(X, \mathcal{T}(X, d))$ 是拓扑空间
     （即满足：① $\emptyset, X \in \mathcal{T}$ ② $\bigcup_{\alpha \in \Lambda} U_\alpha \in \mathcal{T}$ ($\forall \alpha \in \Lambda$, $U_\alpha \in \mathcal{T}$) ③ $\bigcap_{i=1}^N U_i \in \mathcal{T}$ ($\forall 1 \leq i \leq N$, $U_i \in \mathcal{T}$))

3. **度量空间上的Cauchy列**：称 $\{x_n\}_{n \in \mathbb{N}}$ 是 $(X, d)$ 上的Cauchy列，如果 $\forall \varepsilon > 0$，$\exists N \in \mathbb{N}$，当 $m, n \geq N$，$d(x_n, x_m) < \varepsilon$

4. **完备度量空间**：设 $(X, d)$ 是完备的，如果任意 $X$ 中的Cauchy列是收敛列
   - 即：若 $\{x_n\}_{n \in \mathbb{N}}$ 是Cauchy列，则 $\exists x \in X$，$s.t.\ d(x_n, x) \rightarrow 0$ $n \rightarrow +\infty$

5. **度量空间的完备化问题**
   - 定义（稠密子集）：称$E$是$(X, d)$上的稠密子集，如果$\forall x \in X$，$\forall \varepsilon > 0$，$\exists y \in E$，$s.t.\ d(x, y) < \varepsilon$ （⇒ $\forall x \in X, \exists \{y_n\}_{n \geq 1} \subset E, s.t. d(y_n, x) \rightarrow 0 \ n \rightarrow +\infty$）
   - 定义：若 $(X, d)$ 是度量空间，称 $(\hat{X}, \hat{d})$ 是 $(X, d)$ 的完备化空间，如果：
     1. $X \subseteq \hat{X}$，且 $\hat{d}|_{X \times X} = d$
     2. $(\hat{X}, \hat{d})$ 是完备的

#### 定理：每个度量空间都有一个完备化空间

**证明**：

**Step1**
- 首先，设 Cauchy 列 $\{x_n\}$ 等价于 $\{y_n\}$ 如果 $\lim_{n \to \infty} d(x_n, y_n) = 0$ 不失一般性，这的确是等价关系。记 $[ \{x_n\} ] = \{ \{y_n\} \mid \{y_n\} \sim \{x_n\} \}$
- 令 $\hat{X} = \{ [ \{x_n\} ] \mid \{x_n\} \subseteq X \text{是Cauchy列} \}$，且 $\forall \xi, \eta \in \hat{X}$，$\xi = [\{x_n\}]$, $\eta = [\{y_n\}]$，
  则定义 $\hat{d}(\xi, \eta) \triangleq \lim_{n \to \infty} d(x_n, y_n)$
- 不难验证：
  1. $\hat{d}$ 是良定义的
  2. $(\hat{X}, \hat{d})$ 是度量空间
  3. 引入映射 $\Phi: X \mapsto \hat{X}$，即 $\forall x \in X$，$\Phi(x) = [ \{x\} ]$（常值序列）
     则 $\Phi: (X, d) \mapsto (\Phi(X), \hat{d})$ 是等距映射
     即：$\Phi$ 是单射，且 $d(x, y) = \hat{d}(\Phi(x), \Phi(y))$
     证明：若 $\Phi(x) = \Phi(y)$，则 $\hat{d}(\Phi(x), \Phi(y)) = 0 \Rightarrow d(x, y) = 0 \Rightarrow x = y$
- **结论**：$\hat{d}(\Phi(x), \Phi(y)) = \lim_{n \to \infty} d(x, y) = d(x, y)$

**Step 2**：由 $(X, d)$ 与 $(\Phi(X), \hat{d})$ 等距同构，下面证明 $(\hat{X}, \hat{d})$ 是 $(\Phi(X), \hat{d})$ 的完备化
- $\Phi(X)$ 是 $\hat{X}$ 的稠密子集。任取 $\xi \in \hat{X}$，$\xi = [ \{x_n\} ]$，下证 $\hat{d}(\Phi(x_n), \xi) \rightarrow 0 \ n \rightarrow +\infty$
  事实上，$\hat{d}(\Phi(x_n), \xi) = \lim_{m \to \infty} d(x_n, x_m)$，由于 $\{x_n\}_{n \in \mathbb{N}}$ 是 $X$ 中的 Cauchy 列，
  $$
  \Rightarrow \lim_{n \to \infty} \hat{d}(\Phi(x_n), \xi) = 0
  $$
- $(\hat{X}, \hat{d})$ 是完备的。记 $\{\xi_n\}_{n \in \mathbb{N}}$ 是 $\hat{X}$ 中的 Cauchy 列。记 $\xi_n = [\{x_n^{(m)}\}_{m \in \mathbb{N}}]$
  由①可知，$\forall n \in \mathbb{N}$，$\exists \Phi(y_n) \in \Phi(X)$。$s.t.\ \hat{d}(\Phi(y_n), \xi_n) \leq \frac{1}{n}$
  $$
  \Rightarrow \{ \Phi(y_n) \}_{n \in \mathbb{N}} \subseteq \Phi(X) \quad \text{且} \quad \{\Phi(y_n)\} \text{是} \hat{X} \text{中的 Cauchy 列}
  $$
  记 $\xi = [\{y_n\}_{n \in \mathbb{N}}]$，则 $\hat{d}(\Phi(y_n), \xi) \to 0$ 当 $n \to +\infty$
  $$
  \Rightarrow \hat{d}(\xi_n, \xi) \to 0 \quad \text{当} \quad n \to +\infty \quad \Rightarrow \text{结论}
  $$

- 若 $(X', d')$ 完备且 $X \subseteq X'$ 且 $d'|_{X \times X} = d$，记 $\tilde{X}$ 是 $X$ 在 $(X', d')$ 下的闭包
  即，$\tilde{X} = \{y \in X' \mid \exists \{y_n\} \subseteq X, \quad d'(y_n, y) \to 0 \text{ 当 } n \to +\infty\}$
  则 $(\tilde{X}, d')$ 与 $(\hat{X}, \hat{d})$ 是等距同构的（⇒ $(\hat{X}, \hat{d}) \cong (\tilde{X}, d')$）
  - 任取 $y \in \tilde{X}$，（⇔ $\exists \{y_n\} \subseteq X, \quad d'(y_n, y) \to 0 \text{ 当 } n \to +\infty)$ ⇒ $\{y_n\}$ 是 $X$ 中的 Cauchy 列
    记 $\xi = [\{y_n\}_{n \in \mathbb{N}}]$，则定义 $\Psi(y) = \xi$
    不难验证 $\Psi$ 是良定义的（即与 $\{y_n\}_{n \in \mathbb{N}}$ 的选取无关）
  - $\Psi$ 是单射：即若 $y, z \in \tilde{X}$，$\exists \{y_n\}_{n \in \mathbb{N}}, \{z_n\}_{n \in \mathbb{N}} \subseteq X$，$d'(y_n, y) + d'(z_n, z) \to 0$ 当 $n \to +\infty$
    若 $\Psi(y) = \Psi(z)$，即 $[\{y_n\}_{n \in \mathbb{N}}] = [\{z_n\}_{n \in \mathbb{N}}]$，⇒ $d'(y_n, z_n) \to 0$，从而 $d'(y, z) = 0 \Rightarrow y = z$
  - 可见 $\Psi$ 是单射。任取 $\xi = [\{y_n\}_{n \in \mathbb{N}}] \in \hat{X}$，由定义可知 $\{y_n\}_{n \in \mathbb{N}}$ 是 $X$ 中的 Cauchy 列
    由 $\tilde{X}$ 的定义，可知 $\exists y \in \tilde{X}$，$s.t.\ d'(y_n, y) \to 0$ 当 $n \to +\infty$
    $$
    \Rightarrow \Psi(y) = \xi
    $$
  - 任取 $x, y \in \tilde{X}$，即 $\exists \{x_n\}, \{y_n\} \subseteq X$，$s.t.\ d'(x_n, x) + d'(y_n, y) \to 0$ 当 $n \to +\infty$
    $$
    |d'(x, y) - d'(x_n, y_n)| \leq |d'(x, y) - d'(x_n, y)| + |d'(x_n, y) - d'(x_n, y_n)|
    $$
    $$
    \leq d'(x, x_n) + d'(y_n, y) \to 0 \quad n \to +\infty
    $$
    $$
    \Rightarrow d'(x, y) = \lim_{n \to \infty} d'(x_n, y_n) = \lim_{n \to \infty} d(x_n, y_n) = \hat{d}(\Psi(x), \Psi(y))
    $$
    （由函数 $\Psi(x) = [ \{ x_n \}_{n \in \mathbb{N}} ]$，$\Psi(y) = [ \{ y_n \}_{n \in \mathbb{N}} ]$ 得）

### Banach空间
#### 赋范空间
- $X = (X, +, \cdot, \|\cdot\|)$，$\mathbb{F} = \mathbb{R}$ 或 $\mathbb{C}$
- **定义**：称 $(X, \|\cdot\|)$ 是赋范空间，如果 $\|\cdot\|$ 满足：
  1. $\|x\| \geq 0$，$\|x\| = 0 \Leftrightarrow x = 0$
  2. $\| \alpha x \| = |\alpha| \|x\|$
  3. $\| x + y \| \leq \|x\| + \|y\|$（三角不等式）

#### 定理
1. 若设 $d(x, y) \triangleq \|x - y\|$，则 $(X, d)$ 是度量空间 ⇒ $(X, \|\cdot\|) \cong (X, d(x, y))$
    - 若此时 $(X, d)$ 是完备的，则称 $(X, \|\cdot\|)$ 是 Banach 空间

2. 对于 $\mathbb{R}$，定义 $d(x, y) \triangleq |e^x - e^y|$ ⇒ $( \mathbb{R}, d )$ 是度量空间，但 $d(x, y)$ 不是由范数诱导的

3. 赋范空间不一定是 Banach 空间。例如 $X = \{ \alpha = (\alpha_i)_{i \in \mathbb{N}} \mid \{\alpha_i\}_{i \in \mathbb{N}} \text{中只有有限项非零} \}$
   - 定义 $\| \alpha \| \triangleq \sum_{i=1}^{\infty} |\alpha_i|$，则 $(X, \|\cdot\|)$ 是赋范空间，但不完备

4. 假设 $(X, \mathcal{A}, \mu)$ 是测度空间，$\mathbb{L}^p(d\mu) := \{ f : X \to \mathbb{R} \mid f$ 是 $\mu$-可测且 $\|f\|_{\mathbb{L}^p(d\mu)} < \infty \}$

    其中
    $$
    \|f\|_{\mathbb{L}^p(d\mu)} \triangleq \left( \int_X |f|^p d\mu \right)^{\frac{1}{p}} \quad 1 \leq p < \infty
    $$
    $$
    \|f\|_{\mathbb{L}^\infty(d\mu)} \triangleq \inf \{ C \geq 0 \mid |f| \leq C \ \mu\text{-a.e.} \}
    $$
    则 $\forall 1 \leq p \leq +\infty$, $(L^p(d\mu):=\mathbb{L}(d\mu)/\sim, ||\cdot||_{L^p})$ 是 Banach 空间
    其中，$f \sim g \Leftrightarrow f = g \ \mu\text{-a.e.}$

5. 若 $(X, \mathcal{A})$ 是可测空间，$M(X) \triangleq \{ \mu \mid \mu \text{是} X \text{上的复测度} \}$
   - 例：$M(X)$，$\|\cdot\|$ 是 Banach 空间。其中 $\|\mu\| \triangleq |\mu|(X)$

### 有限维 Banach 空间的性质

#### 定理
若 $\dim X < \infty$，则 $(X, \|\cdot\|)$ 是赋范空间，则：
1. $(X, \|\cdot\|)$ 是完备的。
2. 若 $(X, \|\cdot\|_1)$ 与 $(X, \|\cdot\|_2)$ 均是赋范空间，则 $\|\cdot\|_1$ 与 $\|\cdot\|_2$ 等价（即存在常数 $c_1, c_2 > 0$，使得对任意 $x \in X$，有 $c_1 \|x\|_1 \leq \|x\|_2 \leq c_2 \|x\|_1$）。

**证明**：
- 首先证明 2
  取 $X$ 中的一组基 $e_1, \ldots, e_n$（$\dim X = n$）. 则对于任意 $x \in X$，有 $x = \sum_{j=1}^n x_j e_j$，记 $\|x\|_2^2 = \left( \sum_{j=1}^n |x_j|^2 \right)^{1/2}$。

  **假设** $(X, \|\cdot\|)$ 是赋范空间：
  1. 由 $x = \sum_{j=1}^n x_j e_j$，得 $\|x\|_1 \leq \sum_{j=1}^n |x_j| \|e_j\|_1 \leq \left( \sum_{j=1}^n \|e_j\|_1^2 \right)^{1/2} \|x\|_2$。

  2. 考虑集合 $S = \{ x \in X \mid \|x\|_2 = 1 \}$ 是紧集，因为 $(X, \|\cdot\|_1)$ 与 $(\mathbb{R}^n, \|\cdot\|_1)$ 等距同构（这里 $\|y\|_2 = \left( \sum_{j=1}^n |y_j|^2 \right)^{1/2}$，其中 $y = (y_1, \ldots, y_n)$）。且 $(\mathbb{R}^n, \|\cdot\|_2)$ 上，紧集 = 有界闭集，故 $(X, \|\cdot\|_1)$ 在 $[X, \|\cdot\|_2]$ 下紧。由连续函数在紧集上有极值，得 $\exists \delta > 0$，使得 $\inf_{x \in S} \|x\|_1 \geq \delta > 0$，即 $\|x\|_1 \geq \delta \|x\|_2$。

  3. 由1.和2.，$\|\cdot\|_1$ 与 $\|\cdot\|_2$ 是等价范数。由 $\|\cdot\|_1$ 的完备性以及等价范数的性质，得 $(X, \|\cdot\|_2)$ 是完备的。由于 $(X, \|\cdot\|_2)$ 与 $(\mathbb{R}^n, \|\cdot\|)$ 等距同构，故 $(X, \|\cdot\|_2)$ 是完备的，即 $(X, \|\cdot\|)$ 是完备的。


#### 推论
1. 若 $(X, \|\cdot\|)$ 满足 $\dim X < +\infty$，则 $k$ 是紧集 $\Leftrightarrow$ $k$ 是有界闭集。

2. 称 $T: (X, \|\cdot\|_X) \mapsto (Y, \|\cdot\|_Y)$ 上的线性映射，设 $\dim X < +\infty$，且记 $\|T\| \triangleq \sup_{\|x\|_X = 1} \|Tx\|_Y$，则 $\|T\| < +\infty$

**证明**：
1. 由定理2的证明过程可知

2. 记 $\|x\|_m \triangleq \|x\|_X + \|Tx\|_Y \Rightarrow (X, \|\cdot\|_m)$ 是赋范空间。由定理 $\Rightarrow \|\cdot\|_m \sim \|x\|_X \Rightarrow \|Tx\|_Y \leq c \|x\|_X \Rightarrow \|T\| \leq c < +\infty$



### 无穷维Banach空间（球面不是紧集）

#### Riesz 引理
若 $(X, \|\cdot\|)$ 是赋范空间，$\dim X = +\infty$，$Y$ 是 $X$ 的闭子空间且 $Y \neq X$，则 $\forall 0 < \delta < 1$，$\exists x \in X$，s.t. $\|x\| = 1$ 且 $\inf_{y \in Y} \|x - y\| > 1 - \delta$。

**证明**：
任取 $x_0 \in X \setminus Y$，则 $d = \inf_{y \in Y} \|x_0 - y\| > 0$（否则 $x_0 \in Y$）。

由 inf 定义，$\exists y_0 \in Y$，s.t. $d \leq \|x_0 - y_0\| \leq \frac{d}{1 - \delta}$

记 $x := \frac{x_0 - y_0}{\|x_0 - y_0\|}$，则 $x \in Y$，$\|x - y\| = \frac{\|x_0 - y_0 - \|x_0 - y_0\| y\|}{\|x_0 - y_0\|} \geq \frac{d}{1 - \delta} = 1 - \delta$

#### 定理
$(X, \|\cdot\|)$ 是赋范空间，$B = \{ x \in X \mid \|x\| \leq 1 \}$，$S = \{ x \in X \mid \|x\| = 1 \}$，则 $\dim X < +\infty \Leftrightarrow B$ 是紧集 $\Leftrightarrow S$ 是紧集。

**证明**：由有限维Banach空间的性质得 ① $\Rightarrow$ ③。由紧集的闭集仍是紧集的性质得 ② $\Rightarrow$ ③，因此只需证明 ③ $\Rightarrow$ ①

**证明**：

由逆否命题等价性，只需证明 若 $\dim X = +\infty \Rightarrow B$ 不是紧集。

事实上，由Riesz 引理：
$$
\exists \{x_n\}_{n=1}^\infty \subseteq S, \, s.t. \, \forall m, n \in \mathbb{N}, \|x_m - x_n\| \geq \frac{3}{4}
$$

由归纳法，假设 $\{x_n\}_{n=1}^N$ 满足 $\forall 1 \leq i < j \leq N$，$\|x_i - x_j\| \geq \frac{3}{4}$ 且 $\{x_n\}_{n=1}^N \subseteq B$。

记 $Y := \text{span} \{x_1, \ldots, x_N\}$，则 $(Y, \|\cdot\|)$ 是赋范空间，$Y \subseteq X$ 上的闭空间（完备）

由Riesz 引理，$\exists x_{N+1} \in S$，s.t. $\inf_{y \in Y} \|x_{N+1} - y\| \geq \frac{3}{4} \Rightarrow \{x_n\}_{n=1}^{N+1}$ 满足 ①②

由此得到 $\{x_n\}_{n=1}^\infty$，由条件 $m < n$，$\|x_m - x_n\| \geq \frac{3}{4}$ 可知开覆盖 $O \subseteq \bigcup_{i=1}^N B(x_i, \frac{3}{4})$，则 $N \in \mathbb{N}$，$x \in S$ 满足 $S \subseteq \bigcup_{i=1}^N A_i$

但是 $\forall N \in \mathbb{N}$，不存在 $A_1, \ldots, A_N \in O$，s.t. $S \subseteq \bigcup_{i=1}^N A_i \Rightarrow S$ 不是紧集

### 有界线性算子及有界线性算子空间

#### 有界线性算子
**定义**：假设 $(X, \|\cdot\|_X)$, $(Y, \|\cdot\|_Y)$ 是两个赋范空间，$T: X \mapsto Y$ 是线性映射。

(即 $\forall \alpha \in \mathbb{F}$, $x_1, x_2 \in X$, $T(\alpha_1 x_1 + x_2) = \alpha_1 T x_1 + T x_2$ )

称 $T$ 是有界的如果 $\exists C > 0$，s.t. $\forall x \in X$，$\|Ax\|_Y \leq C \|x\|_X$。

**定义**：记 $\|T\| = \sup_{x \neq 0} \frac{\|Ax\|_Y}{\|x\|_X}$，称 $\|T\|$ 为 $T$ 的范数（可以验证）。

引入：$(X, Y) \xrightarrow{\text{定义}} \{ T: X \mapsto Y \mid T \text{ 是有界线性算子} \}$。

#### 定理
1. 若 $T: (X, \|\cdot\|_X) \to (Y, \|\cdot\|_Y)$ 是线性的，则 ① $T$ 有界 ⇔ ② $T$ 连续 ⇔ ③ $T$ 在 $0$ 处连续。
2. 设 $B(X,Y)$ 为 $X \to Y$ 的全体有界线性算子，赋以算子范数 $\|T\|=\sup_{\|x\|_X\le 1}\|Tx\|_Y$；若 $(Y,\|\cdot\|_Y)$ 完备，则 $(B(X,Y),\|\cdot\|)$ 为 Banach 空间。

**证明**：
- 对(1)：① ⇒ ②：$\|Tx-Ty\|=\|T(x-y)\|\le \|T\|\,\|x-y\|$，故 $T$ 连续。② ⇒ ③：显然。③ ⇒ ①：由 $0$ 处连续性，存在 $\delta>0,\varepsilon>0$ 使得 $\|x\|_X\le \delta \Rightarrow \|Tx\|_Y\le \varepsilon$。任意 $x\ne 0$，令 $u=\delta x/\|x\|_X$，则 $\|u\|_X=\delta$ 且 $\|Tu\|_Y\le \varepsilon$，于是 $\|Tx\|_Y=(\|x\|_X/\delta)\,\|T(\delta x/\|x\|_X)\|_Y\le (\varepsilon/\delta)\,\|x\|_X$，故 $T$ 有界。

- 对(2)：设 $(Y,\|\cdot\|_Y)$ 完备，$\{T_n\}$ 在算子范数下为 Cauchy。则对任意 $x\in X$，$\|T_n x-T_m x\|_Y\le \|T_n-T_m\|\,\|x\|_X$，从而 $\{T_n x\}$ 为 $Y$ 中的 Cauchy 列，极限存在，记 $Tx=\lim_n T_n x$。由逐点极限可得 $T$ 线性，且 $\|T_n-T\|=\sup_{\|x\|_X\le 1}\|T_n x-Tx\|_Y\to 0$，从而 $T$ 有界且 $T_n\to T$ 于算子范数，故 $B(X,Y)$ 完备。

- 由 $\{T_n\}$ 为 Cauchy，可取子列 $\{T_{n_k}\}$ 使得 $\|T_{n_{k+1}}-T_{n_k}\|\le 2^{-k}$。则任意 $x\in X$ 有 $Tx=\lim_{k\to\infty}T_{n_k}x=\sum_{k=0}^\infty (T_{n_{k+1}}-T_{n_k})x$，并且
$\|T-T_{n_k}\|=\sup_{\|x\|_X\le 1}\|Tx-T_{n_k}x\|\le \sum_{j=k}^\infty \|T_{n_{j+1}}-T_{n_j}\|\le \sum_{j=k}^\infty 2^{-j}=2^{-k+1}\to 0$，从而 $T\in B(X,Y)$ 且 $T_n\to T$ 于算子范数。
  1. $T(\alpha x + y) = \lim_{n \to \infty} T_n(\alpha x + y) = \lim_{n \to \infty} (\alpha T_n x + T_n y) = \alpha T x + T y$

  2. $\|Tx\| = \lim_{n \to \infty} \|T_n x\| \leq (\sup_{n \geq 1} \|T_n\|) \|x\| \Rightarrow T \in \mathcal{L}(X,Y)$。

  3. 由于 $\{T_n\}_{n \geq 1}$ 是 Cauchy 列，$\Rightarrow \exists \{T_{n_k}\}_{k \geq 0}$ s.t. $\|T_{n_{k+1}} - T_{n_k}\| \leq 2^{-k}$ $(\forall k \geq 1$ 且 $T_{n_0} \equiv 0)$。

    $\Rightarrow T x = \lim_{k \to \infty} T_{n_k} x = \sum_{k=0}^{+\infty} (T_{n_{k+1}} - T_{n_k}) x \Rightarrow T x - T_{n_k} x = \sum_{j=k}^{+\infty} (T_{n_{j+1}} - T_{n_j}) x$

    $\Rightarrow \|T x - T_{n_k} x\| \leq (\sum_{j=k}^{+\infty} \|T_{n_{j+1}} - T_{n_j}\|) \|x\| \leq 2^{-k} \|x\| \Rightarrow \|T - T_{n_k}\| \leq 2^{-k} \to 0$ (当 $k \to \infty$)。

### 商空间与乘积空间
#### 商空间
**定义**：

设 $(X, \|\cdot\|)$ 是赋范空间，$Y$ 是 $X$ 的闭子空间。定义等价关系 $\sim$ 如下：$\forall x_1, x_2 \in X$，$x_1 \sim x_2 \Leftrightarrow x_1 - x_2 \in Y$。

由此等价关系：
$$
[x] := \{ z \in X \mid z \sim x \} = x + Y = \{ x + y \mid y \in Y \}
$$

此时商空间定义为：
$$
\begin{cases}
X/Y := \{ [x] \mid x \in X \} = {[x] \mid x \in X} \\
\|[x]\| := \inf_{y \in Y} \|x + y\|
\end{cases}
$$

注意到该定义下商空间和范数构成内积空间

#### 商空间保持完备性
##### 引理
若 $X = (X, \|\cdot\|)$ , $Y \subseteq X$ 是闭子空间. 假设$\{x_i\} \subseteq X$ 且 $\{[x_i]\} \subseteq X/Y$ 是 Cauchy 列. 则存在子列 $\{x_{i_k}\} \subseteq \{x_i\}$ 以及 $\{y_k\} \subseteq Y$ 使得 $\{x_{i_k} + y_k\}$ 是 $X$ 中的 Cauchy 列.

**证明**：
由条件$\{[x_i]\} \subseteq X/Y$ 是 Cauchy 列， 则存在子列 $\{[x_{i_k}]\} \subseteq \{[x_i]\}$ 使得 $\|[x_{i_{k+1}}] - [x_{i_k}]\| < 2^{-k}$.

由商空间范数定义，$$\|[x_{i_{k+1}}] - [x_{i_k}]\| = \|[x_{i_{k+1}} - x_{i_k}]\| = \inf_{y \in Y} \|x_{i_{k+1}} - x_{i_k} + y\| < 2^{-k}$$

因此，存在 $\eta_k \in Y$ 使得 $\|x_{i_{k+1}} - x_{i_k} + \eta_k\| < 2^{-k}$.

令 $y_1 = 0$ 且 $y_k = \sum_{j=1}^{k-1} \eta_j$ (当 $k \geq 2$). 则 $$\|x_{i_{k+1}} + y_{k+1} - (x_{i_k} + y_k)\| = \|x_{i_{k+1}} - x_{i_k} + \eta_k\| < 2^{-k}$$

因此，$\{x_{i_k} + y_k\}$ 是 $X$ 中的 Cauchy 列.

##### 定理
设 $(X, \|\cdot\|)$ 是赋范空间，$Y$ 是 $X$ 的闭子空间. 则
1. $\pi: X \to X/Y$ 是有界线性算子且是满射.
2. （泛性质）$T: (X, \|\cdot\|_X) \to (Z, \|\cdot\|_Z)$ 是有界线性算子，$Y \subseteq \ker T \Leftrightarrow \exists ! T_0: X/Y \to Z, s.t. T = T_0 \circ \pi$
3. 若 $(X, \|\cdot\|)$ 是Banach空间，则 $(X/Y, \|\cdot\|)$ 也是Banach空间.

**证明**：
1. 线性显然，且 $\|\pi(x)\| = \|[x]\| \leq \|x\|$，故 $\pi$ 有界且 $\|\pi\| \leq 1$. 显然 $\pi$ 是满射.
2. 交换图：
    ```mermaid
    graph TD;
        A[X] -- π --> B[X/Y];
        A -- T --> C[Z];
        B -- T₀ --> C;
    ```
    由 $Y \subseteq \ker T$ 可知 $\forall x_1, x_2 \in X$，若 $[x_1] = [x_2]$，则 $x_1 - x_2 \in Y \Rightarrow T x_1 = T x_2$，从而可定义 $T_0([x]) := T x$，且 $T = T_0 \circ \pi$. 

    唯一性：若 $T = T_1 \circ \pi$，则 $\forall [x] \in X/Y$，$T_1([x]) = T_1(\pi(x)) = T x = T_0([x])$，从而 $T_1 = T_0$.
    
    由 $\|T_0([x])\|_Z = \|T x\|_Z \leq \|T\| \|x\|_X$ 可知 $T_0$ 有界且 $\|T_0\| \leq \|T\|$.
3. 设 $\{[x_n]\} \subseteq X/Y$ 是 Cauchy 列. 则由引理，存在子列 $\{[x_{n_k}]\} \subseteq \{[x_n]\}$ 以及 $\{y_k\} \subseteq Y$ 使得 $\{x_{n_k} + y_k\}$ 是 $X$ 中的 Cauchy 列. 由 $X$ 完备性，记$x = \lim_{k \to \infty} (x_{n_k} + y_k)$. 则 
    $$
    \|[x_n] - [x]\| = \inf_{y \in Y} \|x_n - x + y\| \leq \|x_n - x + y_n\| = \lim_{k \to \infty} \|x_n - (x_{n_k} + y_k) + y_n\| \\
    = \lim_{k \to \infty} \|x_n - x_{n_k} - y_k + y_n\| \leq \lim_{k \to \infty} \|x_n - x_{n_k}\| + \lim_{k \to \infty} \|y_k - y_n\|
    $$
    从而 $\lim_{n \to \infty} [x_n] = [x]$，即 $X/Y$ 完备.

#### 乘积空间
设 $(X_i,\|\cdot\|_i)$，$i=1,2,\cdots,n$ 为赋范线性空间，则其乘积空间 $X=X_1\times X_2\times \cdots \times X_n$ 上的范数定义为:
$$\|(x_1,x_2,\cdots,x_n)\|=\left(\sum_{i=1}^n \|x_i\|_i^2\right)^{1/2}.$$
则 $(X,\|\cdot\|)$ 为赋范线性空间，且当且仅当各 $(X_i,\|\cdot\|_i)$ 完备时，$(X,\|\cdot\|)$ 完备。


### 对偶空间
#### 定义
若 $X = (X, \|\cdot\|)$，则 $X^* = \mathcal{L}(X, \mathbb{F})$ 称为 $X$ 的对偶空间。

- $\dim X = n < +\infty$ 不妨假设 $X = \text{span}\{e_1, \cdots, e_n\}$，$\Rightarrow \forall x \in X \exists! \gamma = (\gamma_1, \cdots, \gamma_n) \in \mathbb{R}^n$ s.t. $x = (\gamma_1, \cdots, \gamma_n)x \quad \text{记} \quad \ell_i(\xi) = \gamma_i$

#### 定理
$$X^* = \mathcal{L}(X, \mathbb{F}) = \text{span}\{\ell_1, \cdots, \ell_n\}$$

> 这里，$\ell_i$ 表示将 $X$ 中的元素“投影”至坐标轴 “$e_i$” 上。因此，$\{\ell_1, \cdots, \ell_n\}$ 可以看作是 $X$ 中的“坐标系”，从而 $X^*$ 中的任一元素，代表的是 $X$ 上的一个“坐标轴”

**证明**：

- **Step 1**：
    $\forall i \leq n, \quad \ell_i \in \mathcal{L}(X, \mathbb{F})$，有 $|\ell_i(\xi)| = |\gamma_i| \leq (\sum_{j=1}^n |\gamma_j|^2)^{1/2} = \|\xi\|_2 \leq \|\xi\| \Rightarrow \ell_i \in \mathcal{L}(X, \mathbb{F})$

- **Step 2**：
    $\forall l \in X^*, \forall \xi \in X$，有 $\ell(\xi) = \sum_{i=1}^n x_i l(e_i) = \sum_{i=1}^n l(e_i)l_i(\xi)$，即 $\ell = \sum_{i=1}^n \ell(\xi) \ell_i \Rightarrow X^* = \text{span}\{\ell_1, \cdots, \ell_n\}$

- **Step 3**：
    假设 $\sum_{i=1}^n a_i \ell_i = 0$，选取 $\xi = e_j \Rightarrow 0 = \sum_{i=1}^n a_i \ell_i(e_j) = a_j \Rightarrow \ell_1, \cdots, \ell_n$ 线性无关。

    - $\dim X = +\infty$，由有限维情形，$X^*$ 中的元素看作是 $X$ 上的一个“坐标轴”，因此，研究 $X^*$ 本身对于 $X$ 的意义至关重要，尤其是 $X$ 的几何“结构”。

    - 反过来，任取 $X^*$ 中的坐标轴 $g_1, \cdots, g_n$，也可以确定 $X$ 中的坐标轴 $x_1, \cdots, x_n$。s.t. $g_i(x_j) = \delta_{ij}$。

    事实上，$(e_1, \cdots, e_n)$ 确定 $\{\ell_1, \cdots, \ell_n\}$ 确定 $\{\ell_1^*, \cdots, \ell_n^*\}$
    $\Rightarrow \phi: X \to (X^*)^*, \quad \phi(\xi) = (\ell_1^*(\xi), \cdots, \ell_n^*(\xi))$，其中 $\xi = (\xi_1, \cdots, \xi_n)x$。

    1. 不难验证$\phi$是双射。

    2. $$\forall l \in X^*, \phi(\xi)(l) = \sum_{i=1}^n \ell_i^*(\xi) l(e_i) = \sum_{i=1}^n \ell_i^*(\xi) \ell_i(\xi) = \ell(\xi)$$

    $\Rightarrow \forall g_1, \cdots, g_n$ 是 $X$ 的坐标轴，$\Phi^{-1}(\{g_1^*, \cdots, g_n^*\})$ 是 $X$ 中的基底，且 $g_i(\Phi^{-1}(g_j^*)) = \delta_{ij}$。

    > 实际上，$\Rightarrow \forall g^* \in (X^*)^* \quad g^*(e) = \Phi(\Phi^{-1}(g^*)) \Rightarrow g_i(\Phi^{-1}(g_j^*)) = g_i^*(g_i) = \delta_{ij}$.
