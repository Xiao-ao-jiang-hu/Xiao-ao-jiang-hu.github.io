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
若 $\dim X < \infty$，$(X, \|\cdot\|)$ 是赋范空间，则：
1. $(X, \|\cdot\|)$ 是完备的
2. 若 $\|\cdot\|_1$ 与 $\|\cdot\|_2$ 均是 $X$ 上的范数，则 $\|\cdot\|_1 \sim \|\cdot\|_2$（即之为等价范数）
   即 $\exists c_1, c_2 > 0$，$\forall x \in X$，$c_1 \|x\|_1 \leq \|x\|_2 \leq c_2 \|x\|_1$

**证明**：
1. 首先证明 2. 
    取 $X$ 中的一组基 $e_1, \cdots, e_n$ ($\dim X = n$)
    则 $\forall x \in X$，$x = \sum_{j=1}^n y_j e_j$，记 $\|x\|_2 \triangleq \left( \sum_{j=1}^n |y_j|^2 \right)^{\frac{1}{2}}$
    假设 $(X, \|\cdot\|_1)$ 是赋范空间
    1. 由 $x = \sum_{j=1}^n y_j e_j$，⇒ $\|x\|_1 \leq \sum_{j=1}^n |y_j| \|e_j\|_1 \leq \left( \sum_{j=1}^n \|e_j\|_1^2 \right)^{\frac{1}{2}} \|x\|_2$
    2. 首先 $S = \{ x \in X \mid \|x\|_2 = 1 \}$ 是紧集，因为 $(X, \|\cdot\|_2)$ 与 $(\mathbb{R}^n, \|\cdot\|_2)$ 等距同构
    （这里 $\|x\|_2 = \left( \sum_{j=1}^n |y_j|^2 \right)^{\frac{1}{2}}$ 与 $\mathbb{R}^n$ 中的欧几里得范数等价）