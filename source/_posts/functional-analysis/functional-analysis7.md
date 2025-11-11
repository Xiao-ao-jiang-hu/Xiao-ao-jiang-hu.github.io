---
title: Ch 2.3 开映射与闭图定理
tags:
  - math
  - functional analysis
categories:
  - math
  - functional analysis
index_img: /img/math.png
banner_img: /img/math.png
excerpt: 泛函分析课程笔记
abbrlink: 360a482d
date: 2025-10-12 13:09:52
---
# 开映射
## 定义
给定拓扑空间 $X, Y$，映射 $T: X \to Y$ 称为开映射，如果 $\forall U \subset X$ 开集，$T(U) \subset Y$ 也是开集。

### 注
1. Brouwer 开映射定理：$X, Y$ 是有限维赋范空间，$T: X \to Y$ 连续单射，则 $T$ 是开映射。
2. 考虑有限维线性空间时，线性映射 $T: X \to Y$ 是开映射的充分必要条件是 $T$ 满射。

## 定理（开映射定理）
设 $X$ 和 $Y$ 为巴拿赫空间（即完备的赋范线性空间），$T: X \to Y$ 为有界线性算子（即连续的线性算子）。若 $T$ 是满射的（即 $T(X) = Y$），则 $T$ 是开映射（即对任意 $X$ 中的开集 $U$，$T(U)$ 是 $Y$ 中的开集）。

### 证明
以下证明基于贝尔纲定理（Baire Category Theorem），该定理指出：完备度量空间（如巴拿赫空间）不能表示为可数个无处稠密集的并集。证明分为几个步骤。

#### 步骤 1: 利用贝尔纲定理证明 $\overline{T(B_X)}$ 有内点
设 $B_X = \{ x \in X : \|x\| < 1 \}$ 为 $X$ 中的开单位球。
由于 $T$ 是满射，有 $Y = T(X) = \bigcup_{n=1}^{\infty} T(n B_X)$，其中 $n B_X = \{ x \in X : \|x\| < n \}$。
$Y$ 是巴拿赫空间，故为完备度量空间，满足贝尔纲定理。
假设每个 $\overline{T(n B_X)}$ 均无处稠密（即其闭包无内点），则 $Y$ 可表示为可数个无处稠密集的并集，与贝尔纲定理矛盾。因此，存在 $n_0 \in \mathbb{N}$ 使得 $\overline{T(n_0 B_X)}$ 有内点。
即存在 $y_0 \in Y$ 和 $r > 0$ 使得开球 $B_Y(y_0, r) = \{ y \in Y : \|y y_0\| < r \} \subseteq \overline{T(n_0 B_X)}$。
由 $T$ 的线性性，$T(n_0 B_X) = n_0 T(B_X)$，故 $\overline{T(n_0 B_X)} = n_0 \overline{T(B_X)}$（因为标量乘法是同胚）。
因此，$B_Y(y_0, r) \subseteq n_0 \overline{T(B_X)}$，即 $B_Y\left(\frac{y_0}{n_0}, \frac{r}{n_0}\right) \subseteq \overline{T(B_X)}$。
令 $z = y_0 / n_0$，则 $B_Y(z, r / n_0) \subseteq \overline{T(B_X)}$。

#### 步骤 2: 证明 $\overline{T(B_X)}$ 包含以原点为中心的开球
由于 $B_X$ 是对称的（即若 $x \in B_X$，则 $-x \in B_X$），且 $T$ 是线性的，故 $T(B_X)$ 对称（即若 $y \in T(B_X)$，则 $-y \in T(B_X)$）。因此，$\overline{T(B_X)}$ 也是对称的。
由 $B_Y(z, r / n_0) \subseteq \overline{T(B_X)}$ 和对称性，有 $B_Y(-z, r / n_0) \subseteq \overline{T(B_X)}$（因为若 $y \in \overline{T(B_X)}$，则 $-y \in \overline{T(B_X)}$）。
又因 $z \in \overline{T(B_X)}$（作为内点），故 $-z \in \overline{T(B_X)}$。
$\overline{T(B_X)}$ 是凸集（因为 $T(B_X)$ 是凸集，线性算子的像保持凸性，闭包也保持凸性）。
取任意 $v \in Y$ 满足 $\|v\| < r / n_0$，则：
  $z + v \in B_Y(z, r / n_0) \subseteq \overline{T(B_X)}$,
  $-z \in \overline{T(B_X)}$.
由凸性，$\frac{1}{2} \left( (z + v) + (-z) \right) = \frac{v}{2} \in \overline{T(B_X)}$。
因此，$\|v\| < r / n_0$ 蕴含 $\frac{v}{2} \in \overline{T(B_X)}$，即 $v \in 2 \overline{T(B_X)}$。
故 $B_Y(0, r / n_0) \subseteq 2 \overline{T(B_X)}$，等价于 $B_Y(0, r / (2n_0)) \subseteq \overline{T(B_X)}$。
令 $\delta = r / (2n_0) > 0$，则：
$$
\delta B_Y \subseteq \overline{T(B_X)},
$$
其中 $B_Y = \{ y \in Y : \|y\| < 1 \}$ 为 $Y$ 中的开单位球。

#### 步骤 3: 证明 $\delta B_Y \subseteq T(2 B_X)$
需证：对任意 $y \in Y$ 满足 $\|y\| < \delta$，存在 $x \in X$ 使得 $\|x\| < 2$ 且 $T x = y$。
由 $\delta B_Y \subseteq \overline{T(B_X)}$，有 $y \in \overline{T(B_X)}$，故存在 $x_1 \in B_X$ 使得 $\|y T x_1\| < \delta / 2$。
注意 $y T x_1 \in (\delta / 2) B_Y$（因为 $\|y T x_1\| < \delta / 2$），且由 $\delta B_Y \subseteq \overline{T(B_X)}$ 及线性性，有 $(\delta / 2) B_Y \subseteq \overline{T((1/2) B_X)}$（因为 $\overline{T(\alpha B_X)} = \alpha \overline{T(B_X)}$ 对任意 $\alpha > 0$）。
因此，存在 $x_2 \in (1/2) B_X$ 使得 $\| (y T x_1) T x_2 \| < \delta / 4$，即 $\|y T(x_1 + x_2)\| < \delta / 4$。
重复此过程：对每个 $k \geq 1$，存在 $x_k \in (1/2^{k-1}) B_X$ 使得：
$$
\left\| y T \left( \sum_{i=1}^k x_i \right) \right\| < \delta / 2^k.
$$
令 $s_k = \sum_{i=1}^k x_i$，则：
$\|x_k\| < 1 / 2^{k-1}$（因为 $x_k \in (1/2^{k-1}) B_X$），
$\sum_{k=1}^{\infty} \|x_k\| < \sum_{k=1}^{\infty} 1 / 2^{k-1} = 2$。
故级数 $s = \sum_{k=1}^{\infty} x_k$ 在 $X$ 中收敛（因 $X$ 完备），且 $\|s\| \leq \sum_{k=1}^{\infty} \|x_k\| < 2$，即 $s \in 2 B_X$。
由 $T$ 的连续性（有界性），$T(s) = \lim_{k \to \infty} T(s_k) = y$。
因此，$y = T(s) \in T(2 B_X)$，即：
$$
\delta B_Y \subseteq T(2 B_X).
$$

#### 步骤 4: 证明 $T$ 是开映射
设 $U \subseteq X$ 为任意开集，需证 $T(U)$ 在 $Y$ 中开。
取任意 $y_0 \in T(U)$，则存在 $x_0 \in U$ 使得 $T x_0 = y_0$。
因 $U$ 开，存在 $\epsilon > 0$ 使得 $x_0 + \epsilon B_X \subseteq U$。
则：
$$
T(U) \supseteq T(x_0 + \epsilon B_X) = y_0 + T(\epsilon B_X).
$$
由步骤 3，$\delta B_Y \subseteq T(2 B_X)$，故 $T(2 B_X) \supseteq \delta B_Y$，即 $T(B_X) \supseteq (\delta / 2) B_Y$。
因此：
$$
T(\epsilon B_X) = \epsilon T(B_X) \supseteq \epsilon (\delta / 2) B_Y.
$$
令 $\eta = \epsilon \delta / 2 > 0$，则：
$$
y_0 + T(\epsilon B_X) \supseteq y_0 + \eta B_Y.
$$
故 $y_0 + \eta B_Y \subseteq T(U)$，即 $T(U)$ 包含 $y_0$ 的一个邻域。
由 $y_0 \in T(U)$ 的任意性，$T(U)$ 是 $Y$ 中的开集。

### 注
1. $T \in \mathcal{L}(X; Y)$；其中$X, Y$是赋范空间，则$T$是开映射的充分必要条件是存在$r_0, R_0>0$以及$x_0, x_1 \in X$ 满足 $B(Tx_1, r_0) \subset TB(x_0, R_0)$。其中$x_1 \in B(x_0, R_0)$
2. 作为推论，可以得到逆算子定理：若 $T: X \to Y$ 是巴拿赫空间之间的有界线性双射，则其逆算子 $T^{-1}: Y \to X$ 也是有界线性的。
3. 完备性不可移除

**例1：X完备但Y不完备**

考虑恒等映射 $\text{Id} : (C[0,1]; \| \cdot \|_{\infty}) \to (C[0,1]; \| \cdot \|_{L^2})$

则此时  
$$ \| \text{Id}(f) \|_{L^2} = \| f \|_{L^\infty} \quad \Rightarrow \quad \text{Id} \in \mathcal{L}(C[0,1]; C[0,1]) $$

定义函数：
$$
f_n(x) = 
\begin{cases}
\left( -\frac{n^2}{2}x + n \right)^{1/2}, & x \in [0, \frac{2}{n}] \\
0, & x \in [\frac{2}{n}, 1]
\end{cases}
$$

显然：  
$$ \| f_n(x) \|_{L^2} = 1 , \quad \| f_n \|_{L^\infty} = \sqrt{n} \Rightarrow \quad \| \text{Id}^{-1} \|_{(C[0,1]; L^2) \to (C[0,1]; L^\infty)} = +\infty
$$


**例2：Y完备但X不完备**

首先回顾 Hamel 基的概念.
若 $X = (X, +, \cdot; \mathbb{F})$. 称 $A \subseteq X$ 为 X 的 Hamel 基，如果 $\forall x \in X$，$\exists ! \lambda_1, \cdots, \lambda_n \in \mathbb{F}$ 以及 $x_1, \cdots, x_n \in A$s.t.  
$$
x = \sum_{j=1}^{n} \lambda_j x_j
$$

命题 *：由 Zorn 引理，任一线性空间均存在 Hamel 基底。

命题 **：若 B 是无限维赋范空间，则 $\exists f: B \to \mathbb{F}$ s.t. f 是线性映射但 $f \notin \mathcal{L}(B; \mathbb{F})$

证明：假设 $A = \{ e_n \mid n \in \mathbb{N} \}$ 是 X 中的线性无关组。由 Zorn 引理，A 可以扩展为 B 的 Hamel 基底 $\widetilde{A}$

定义 $f: \widetilde{A} \to \mathbb{F}$.
$$
f(x) = 
\begin{cases}
n \| x \| & x \in A \text{ 且 } x = e_n \\
0 & x \in \widetilde{A} \setminus A
\end{cases}
$$


由Hamel基定义，可以将f延拓至 X。即 $\forall x \in X$, $x = \sum_{j=1}^{n} \lambda_j \overline{e}_j$, $\lambda_j \in \mathbb{F}$, $\overline{e}_j \in \widetilde{A}$.

则  
$$
F(x) = \sum_{j=1}^{n} \lambda_j f(\overline{e}_j)
\quad \Rightarrow \quad F: X \to \mathbb{F} \text{ 是线性的且无下界} \left( F(e_n) = n \| e_n \| \Rightarrow \sup_{\| x \| = 1} |F(x)| = +\infty \right) \quad 
$$

由命题*、**，假设$\Phi$是无限维赋范空间 Y 的无界线性泛函 ⇒ $\{x \in Y \mid \Phi(x) = 0 \} = \ker \Phi$ 在 Y 中稠密（否则，$\Phi$是有界的）。记

$$
X = \{ (x, t) \in Y \times \mathbb{R} \mid x \in \ker \Phi \}
\qquad
\| (x, t) \|_X \overset{\text{def}}{=} \| x \|_Y + |t|
$$

显然，$(X, \| \cdot \|_X)$ 不是完备的（否则 $\ker \Phi$ 是闭集 ⇒ $\Phi \equiv 0$ ⇒ $\Phi$ 是有界的，矛盾）

构造：$T: X \to Y$. s.t.  
$$
T(x, t) \overset{\text{def}}{=} x + t y_0, \quad \text{其中 } \Phi(y_0) = 1
$$

则 T 是 X 到 Y 上的有界线性算子，T 是双射且 T 无界。

- T 是单射。若 $T(x, t) = x + t y_0 = 0$ ⇒ $\Phi(x + t y_0) = 0$ ⇒ $t = 0$ 且 $x = 0$

- T 是满射。$\forall y \in Y$,  
$$
y = \underbrace{y - \Phi(y) y_0}_{\in \ker \Phi} + \underbrace{\Phi(y)}_{\in \mathbb{R}} y_0
$$

- T 无界。$T^{-1} y = (y - \Phi(y) y_0, \Phi(y))$ （$\Phi$ 是无界的 ⇒ $T^{-1}$ 无界）


# 闭图定理
## 引入

考虑 $X = C[0,1]$ 以及微分算子 $T = \frac{\partial}{\partial x}$

- $\text{dom}(T)$（或 $D(T)$）：表示算子 $T$ 的定义域。显然  
  $$
  D(T) = \left\{ f \in C^1[0,1] \right\} \text{ 在 } X \text{ 中稠密}
  $$

- 由数学分析(I)：若  
  $$
  \begin{cases}
  f_n \xrightarrow{L^\infty} f \\
  f_n' \xrightarrow{L^\infty} g
  \end{cases}
  \quad \text{则} \quad g = f' \quad  \left( \Leftrightarrow \text{序列极限与 } T \text{ 算子交换} \right)
  $$

从而
$$
\text{Graph}(T) \overset{\text{定义}}{=} \left\{ (f, g) \in X \times X \mid f \in D(T),\ g = Tf \right\}
$$
是 $X \times X$ 的闭子空间。

## 闭算子
设 $X, Y$ 是赋范空间，$T: D(T) \subseteq X \to Y$ 是线性算子。若 $T$ 的图 $\text{Graph}(T)$ 在 $X \times Y$ 中闭，则称 $T$ 为闭算子。

### 注
1. 闭算子完全保证了“序列极限与算子交换”的性质，即：若 $\{x_n\} \subset D(T)$ 且 $x_n \to x \in X$，$T x_n \to y \in Y$，则 $x \in D(T)$ 且 $T x = y$。
2. 可以定义T的图范数，即 $$\| x \|_{\text{Graph}(T)} = \| x \|_X + \| T x \|_Y, \quad \forall x \in D(T)$$
从而
$$T \text{ 闭} \iff Graph(T) \text{ 闭} \iff (\mathcal{D}(T), \| \cdot \|_T)\text{ 是Banach空间且 }T:(\mathcal{D}(T), \| \cdot \|_T) \mapsto (Y, \| \cdot \|) \text{ 是有界的}$$ 
3. 对照之前的例子，考虑微分算子$T: D(T) \subseteq X \to C[0,1]$，$\forall n \in \mathbb{N}$，$T(f_n) = n x^{n-1}$，其中 $f_n(x) = x^n$。由于 $\|f_n\|_{L^\infty} = 1$，且 $\|T(f_n)\|_{L^\infty} = n \to +\infty$ ⇒ $T$ 不是有界的。若考虑 $T: (D(T), \|\cdot\|_T) \to (C[0,1]; L^\infty)$ 。首先：$\|Tf\|_{L^\infty} \leq \|f\|_T = \|f\|_{L^\infty} + \|Tf\|_{L^\infty}$。其次：$(D(T), \|\cdot\|_T)$ 是完备 Banach 空间。从而给出了将“微分算子”（无界算子）⇒ “有界算子”研究

> Sobolev空间引入 $W^{m,p}(\mathbb{R}^n)$
> $$\|f\|_{W^{m,p}(\mathbb{R}^n)} = \left( \sum_{|\alpha| \leq m} \| \partial^\alpha f \|_{L^p}^p \right)^{\frac{1}{p}}$$
> 其中 $\alpha$ 是多重指标，$\alpha = (\alpha_1, \cdots, \alpha_n)$
> $$\partial^\alpha = \frac{\partial^{\alpha_1}}{\partial x_1^{\alpha_1}} \frac{\partial^{\alpha_2}}{\partial x_2^{\alpha_2}} \cdots \frac{\partial^{\alpha_n}}{\partial x_n^{\alpha_n}}$$


## 闭图定理
假设$X$和$Y$是Banach空间，$T: X \to Y$是线性算子。则下列命题等价：
1. $T$有界
2. $T$是闭算子
3. $Graph(T)$是$X \times Y$上的闭集


### 证明
只证3⇒1：
假设$Graph(T)$是$X \times Y$上的闭集。则$(Graph(T), \|\cdot\|_{X \times Y})$是Banach空间，其中$\|(x, Tx)\|_{X \times Y} = \|x\|_X + \|Tx\|_Y$。定义映射$\Phi: (Graph(T), \|\cdot\|_{X \times Y}) \to (X, \|\cdot\|_X)$，$\Phi(x, Tx) = x$。显然，$\Phi$是线性双射且有界（因为$\|\Phi(x, Tx)\|_X = \|x\|_X \leq \|x\|_X + \|Tx\|_Y = \|(x, Tx)\|_{X \times Y}$）。由逆映射定理，$\Phi^{-1}: (X, \|\cdot\|_X) \to (Graph(T), \|\cdot\|_{X \times Y})$也是有界的。注意到$\Phi^{-1}(x) = (x, Tx)$，故存在常数$C > 0$使得$\|(x, Tx)\|_{X \times Y} = \|x\|_X + \|Tx\|_Y \leq C \|x\|_X$，即$\|Tx\|_Y \leq (C - 1) \|x\|_X$。因此，$T$是有界的。

#### 注
1. 由证明过程，开映射定理 ⇒ 闭图象定理。反过来，闭图象定理 ⇒ 逆算子定理 ⇒ 开映射定理 （$B_{\frac{\delta}{2}}([x]) \subseteq B_\delta(x)$）
需验证 $\|\cdot\|_{X/\ker T}$ 与 $\|\cdot\|$ 的关系 —— 需要商范数
2. 定理中的 X 与 Y 的完备性不可移除。
例①：
$X = C^1[0,1]$，$Y = C[0,1]$，$T = \frac{d}{dx}$ ⇒ T 是无界的，但是 Graph(T) 是闭集。
（$(C^1[0,1], \|\cdot\|_{C^0})$ 不是完备的。多项式函数 ⊆ $C^1[0,1]$，而 多项式函数在 $\|\cdot\|_{C^0}$ 下稠密 = $C[0,1]$）
例②：
假设 Φ 是无限维 Banach 空间 X 上的无界线性泛函。Φ: $X \to \mathbb{R}$。$X = (X, +, \cdot; \mathbb{R})$
令 $Y = \ker \Phi \times \mathbb{R}$，
$$\|(x, t)\|_Y \overset{\text{def}}{=} \|x\|_X + |t|$$
由于 $\ker \Phi$ 是 X 中稠密 ⇒ $(Y, \|\cdot\|_Y)$ 不是完备的。
定义 $T: X \to Y$，s.t.
$$Tx = \left( x - \Phi(x)x_0,\ \Phi(x) \right)$$
⇒ T 是闭算子但 T 无界。
（事实上，若 $x_n \to x$，$Tx_n \to (y, k)$ ⇒
$$k = \lim_{n \to \infty} \Phi(x_n),\ y = x - k x_0 \in \ker \Phi \Rightarrow k = \Phi(x) \Rightarrow Tx = (y, k)$$
⇒ T 闭）

### 推论（Hellinger-Toeplitz）
设 $H$ 是一个 Hilbert 空间，$T: H \to H$ 是一个线性算子，且满足对于所有 $x, y \in H$，有 $\langle Tx, y \rangle = \langle x, Ty \rangle$（即 $T$ 是对称算子）。那么 $T$ 是有界算子。

#### 证明
只需证明$T$是闭算子。
取序列 $\{x_n\} \subset H$ 满足 $x_n \to x$ 且 $Tx_n \to y$，其中 $x, y \in H$。我们需要证明 $Tx = y$。
对于任意 $z \in H$，由 $T$ 的对称性：
$$\langle Tx_n, z \rangle = \langle x_n, Tz \rangle.$$
由于 $x_n \to x$，有 $\langle x_n, Tz \rangle \to \langle x, Tz \rangle$。同时，由于 $Tx_n \to y$，有 $\langle Tx_n, z \rangle \to \langle y, z \rangle$。因此：
$$\langle y, z \rangle = \langle x, Tz \rangle.$$
再次利用 $T$ 的对称性，$\langle x, Tz \rangle = \langle Tx, z \rangle$，所以：
$$\langle y, z \rangle = \langle Tx, z \rangle \quad \text{对于所有 } z \in H.$$
由于内积是确定的，这意味着 $y = Tx$。因此，$T$ 是闭算子。

### 推论（Douglas因式分解定理）
设 $X$, $Y$, $Z$ 是 Banach 空间，$T_1: X \to Z$ 和 $T_2: Y \to Z$ 是有界线性算子，且 $T_1$ 是单射。则以下条件等价：

1. $\text{Im}(T_2) \subseteq \text{Im}(T_1)$；
2. 存在有界线性算子 $T: Y \to X$ 使得 $T_1 T = T_2$.

#### 证明
首先证明 (2) ⇒ (1)。假设存在有界线性算子 $T: Y \to X$ 使得 $T_1 T = T_2$。则对于任意 $y \in Y$，有 $T_2(y) = T_1(T(y)) \in \text{Im}(T_1)$，因此 $\text{Im}(T_2) \subseteq \text{Im}(T_1)$.

现在证明 (1) ⇒ (2)。假设 $\text{Im}(T_2) \subseteq \text{Im}(T_1)$。由于 $T_1$ 是单射，可以定义算子 $T: Y \to X$ 如下：对于每个 $y \in Y$，由于 $T_2(y) \in \text{Im}(T_1)$，存在唯一的 $x \in X$ 使得 $T_1(x) = T_2(y)$。定义 $T(y) = x$。则由定义有 $T_1 T = T_2$。

首先证明 $T$ 是线性的。取 $y_1, y_2 \in Y$ 和标量 $\alpha, \beta$。则  
$$
T_1(T(\alpha y_1 + \beta y_2)) = T_2(\alpha y_1 + \beta y_2) = \alpha T_2(y_1) + \beta T_2(y_2) = \alpha T_1(T(y_1)) + \beta T_1(T(y_2)) = T_1(\alpha T(y_1) + \beta T(y_2)).
$$  
由于 $T_1$ 是单射，有 $T(\alpha y_1 + \beta y_2) = \alpha T(y_1) + \beta T(y_2)$，因此 $T$ 是线性的。

接下来证明 $T$ 是有界的。使用闭图定理：闭图定理指出，如果 $X$ 和 $Y$ 是 Banach 空间，且 $T: Y \to X$ 是闭线性算子（即图像 $\{ (y, T(y)) : y \in Y \}$ 在 $Y \times X$ 中是闭的），则 $T$ 是有界的。

考虑序列 $\{ y_n \} \subset Y$ 满足 $y_n \to y$ 在 $Y$ 中，且 $T(y_n) \to x$ 在 $X$ 中。需要证明 $T(y) = x$。  
由于 $T_1$ 和 $T_2$ 有界，有  
$$
T_1(T(y_n)) = T_2(y_n) \to T_2(y) \quad \text{和} \quad T_1(T(y_n)) \to T_1(x).
$$  
因此 $T_1(x) = T_2(y)$。但由 $T$ 的定义， $T_1(T(y)) = T_2(y)$，且 $T_1$ 是单射，故 $T(y) = x$。这表明 $T$ 是闭算子，因此由闭图定理，$T$ 是有界的。

### 可补充子空间的判别
#### 可补充子空间
设 $X$ 是赋范空间，$M \subseteq X$ 是闭子空间。若存在闭子空间 $N \subseteq X$ 使得 $X = M \oplus N$（即每个 $x \in X$ 唯一表示为 $x = m + n$，其中 $m \in M$，$n \in N$），则称 $M$ 是可补充子空间，且 $N$ 是 $M$ 的补空间。

#### 判别定理
设 $X$ 是赋范空间，$M \subseteq X$ 是闭子空间。则下列命题等价：
1. $M$ 是可补充子空间；
2. 存在有界线性投影算子 $P: X \to X$，使得 $P^2 = P$ 且 $\text{Im}(P) = M$。
3. 存在有界线性算子 $Q: X \to X/M$，使得 $\Pi \circ Q = Id$，其中 $\Pi: X \to X/M$ 是商映射，$Id$ 是 $X/M$ 上的恒等映射。 

##### 证明
**(2) ⇒ (1)**

假设存在有界投影 $P$ 满足 $P^2 = P$ 且 $\text{Im}(P) = M$。定义：

$$
N = \ker(P)
$$

由于 $P$ 有界，$N$ 是闭子空间。对任意 $x \in X$，有：

$$
x = Px + (x - Px)
$$

其中 $Px \in M$，且 $x - Px \in N$（因为 $P(x - Px) = Px - P^2x = 0$）。又若 $x \in M \cap N$，则 $Px = x$ 且 $Px = 0$，故 $x = 0$。因此：

$$
X = M \oplus N
$$

即 $M$ 是可补充子空间。

**(1) ⇒ (2)**

假设 $X = M \oplus N$，其中 $N$ 是闭子空间。定义投影算子：

$$
P: X \to X,\quad P(m + n) = m \quad \text{对 } m \in M,\, n \in N
$$

易验证 $P^2 = P$ 且 $\text{Im}(P) = M$。下面证明 $P$ 有界。

考虑序列 $x_n \to x$ 且 $Px_n \to y$。写：

$$
x_n = m_n + n_n,\quad x = m + n
$$

则 $Px_n = m_n \to y$，且 $n_n = x_n - m_n \to x - y$。由于 $M, N$ 闭，有 $y \in M$，$x - y \in N$。由直和分解唯一性，得 $y = m$，即 $Px = y$。故 $P$ 的图是闭的，由闭图像定理，$P$ 有界。


**(2) ⇒ (3)**

假设存在有界投影 $P$ 满足 $P^2 = P$ 且 $\text{Im}(P) = M$。定义：

$$
Q: X/M \to X,\quad Q([x]) = x - Px
$$

- **良定义性**：若 $[x] = [y]$，则 $x - y \in M$，故 $P(x - y) = x - y$，得：

  $$
  x - Px = y - Py \Rightarrow Q([x]) = Q([y])
  $$

- **线性性**：显然。
- **右逆性**：

  $$
  \Pi(Q([x])) = \Pi(x - Px) = [x - Px] = [x] \quad \text{因为 } Px \in M
  $$

  故 $\Pi \circ Q = \text{Id}_{X/M}$。

- **有界性**：对任意 $[x] \in X/M$，存在 $m \in M$ 使得：

  $$
  \|x + m\| < \|[x]\| + \epsilon
  $$

  由于 $Q([x]) = Q([x + m]) = (x + m) - P(x + m)$，且 $P$ 有界（设 $\|P\| \leq C$），有：

  $$
  \|Q([x])\| \leq \|x + m\| + \|P(x + m)\| \leq (1 + C)\|x + m\| < (1 + C)(\|[x]\| + \epsilon)
  $$

  令 $\epsilon \to 0$，得 $\|Q([x])\| \leq (1 + C)\|[x]\|$，故 $Q$ 有界。

**(3) ⇒ (2)**

假设存在有界算子 $Q: X/M \to X$ 使得 $\Pi \circ Q = \text{Id}_{X/M}$。定义：

$$
P = I - Q \circ \Pi
$$

- **有界性**：显然。
- **投影性**：

  $$
  P^2 = (I - Q\Pi)(I - Q\Pi) = I - 2Q\Pi + Q\Pi Q\Pi
  $$

  由于 $\Pi Q = \text{Id}_{X/M}$，有：

  $$
  Q\Pi Q\Pi = Q(\Pi Q)\Pi = Q \cdot \text{Id}_{X/M} \cdot \Pi = Q\Pi
  $$

  故：

  $$
  P^2 = I - 2Q\Pi + Q\Pi = I - Q\Pi = P
  $$

- **像为 $M$**：对任意 $x \in X$，有：

  $$
  \Pi(Px) = \Pi(x - Q\Pi x) = \Pi x - (\Pi Q)(\Pi x) = \Pi x - \Pi x = 0
  $$

  故 $Px \in M$，即 $\text{Im}(P) \subseteq M$。反之，若 $m \in M$，则 $\Pi m = 0$，故：

  $$
  Pm = m - Q(0) = m
  $$

  即 $M \subseteq \text{Im}(P)$。因此 $\text{Im}(P) = M$。

## 可闭算子
### 动机
考虑$L^2([0, 1])$，它是一个希尔伯特空间。我们希望在这个空间上研究微分方程。自然地，我们想定义一个“微分算子” $A$，它将一个函数映射为其导数：
$$A f = \frac{d f}{d x}$$
但 $A$ 是无界的。考虑一列函数 $f_n(x) = \sin(n\pi x)$。计算其范数和导数的范数：

$\|f_n\|_{L^2}^2 = \int_0^1 |\sin(n\pi x)|^2 dx = \frac{1}{2}$。
$A f_n = n\pi \cos(n\pi x)$。
$\|A f_n\|_{L^2}^2 = \int_0^1 |n\pi \cos(n\pi x)|^2 dx = \frac{(n\pi)^2}{2}$。

因此，算子范数 $\|A\|$ 满足：
$$\|A\| \geq \frac{\|A f_n\|}{\|f_n\|} = \frac{n\pi / \sqrt{2}}{1 / \sqrt{2}} = n\pi \quad \text{对于所有 } n \in \mathbb{N}.$$

一个自然的想法是：能否将一个无界算子“升级”为一个闭算子

### 定义（可闭算子）
一个算子 $T: D(T) \subset X \to Y$ 称为可闭的，如果它的图像 $\Gamma(T)$ 的闭包 $\overline{\Gamma(T)}$ 本身是某个算子的图像。这个算子就称为 $T$ 的闭延拓，记作 $\overline{T}$。

#### 证明
**(1) ⇔ (2)**

假设 (1) 成立：即 $A$ 可闭，存在闭算子 $B$ 使得 $\overline{G(A)} = G(B)$。由于 $B$ 是算子，对任意 $x \in D(B)$，存在唯一的 $Bx$ 满足 $(x, Bx) \in G(B)$。因此，若 $(x, y_1), (x, y_2) \in \overline{G(A)} = G(B)$，则 $y_1 = y_2 = Bx$，即 $P(x, y_1) = P(x, y_2) = x$ 蕴含 $y_1 = y_2$。故 $P$ 是单射。

假设 (2) 成立：即 $P$ 是单射。定义算子 $B$ 如下：

$D(B) = \{ x \in X \mid \exists y \in Y \text{ 使 } (x, y) \in \overline{G(A)} \}$，
对 $x \in D(B)$，令 $Bx = y$，其中 $y$ 是唯一满足 $(x, y) \in \overline{G(A)}$ 的元素（由 $P$ 单射保证唯一性）。

则 $G(B) = \overline{G(A)}$，且 $B$ 是线性算子（因为 $\overline{G(A)}$ 是线性子空间）。由于 $\overline{G(A)}$ 闭，$B$ 是闭算子，且 $G(A) \subseteq G(B)$，故 $A$ 可闭。

**(2) ⇔ (3)**

假设 (2) 成立：即 $P$ 是单射。设 $\{x_n\} \subset D(A)$ 满足 $x_n \to 0$ 且 $A x_n \to y$。则序列 $\{(x_n, A x_n)\} \subset G(A)$ 满足 $(x_n, A x_n) \to (0, y)$，故 $(0, y) \in \overline{G(A)}$。由于 $P$ 单射，$P(0, y) = 0$ 蕴含 $y = 0$，即 (3) 成立。

假设 (3) 成立：欲证 $P$ 单射。设 $(0, y) \in \overline{G(A)}$，则存在序列 $\{(x_n, A x_n)\} \subset G(A)$ 使得 $(x_n, A x_n) \to (0, y)$，即 $x_n \to 0$ 且 $A x_n \to y$。由 (3) 得 $y = 0$。因此，若 $(x, y_1), (x, y_2) \in \overline{G(A)}$，则 $(0, y_1 - y_2) \in \overline{G(A)}$（因 $\overline{G(A)}$ 是线性子空间），故 $y_1 - y_2 = 0$，即 $y_1 = y_2$。所以 $P$ 是单射。