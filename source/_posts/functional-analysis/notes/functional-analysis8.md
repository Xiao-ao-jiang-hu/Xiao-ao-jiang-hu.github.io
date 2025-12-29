---
title: Ch 2.3.2 闭算子
tags:
  - math
  - functional analysis
categories:
  - math
  - functional analysis
index_img: /img/fa.jpg
banner_img: /img/fa.jpg
excerpt: 泛函分析课程笔记
abbrlink: 960eec3d
date: 2025-10-18 10:07:54
---
# 闭算子
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

## 定义（闭算子）
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
考虑 $L^2([0, 1])$，它是一个Hilbert空间。我们希望在这个空间上研究微分方程。自然地，我们想定义一个“微分算子” $A$，它将一个函数映射为其导数：
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

### 判别定理
设 $X, Y$ 是赋范空间，$A: D(A) \subset X \to Y$ 是线性算子。定义映射 $P: \overline{G(A)} \to X$，使得对于 $(x, y) \in \overline{G(A)}$，有 $P(x, y) = x$。则下列命题等价：
1. $A$ 可闭；
2. 映射 $P$ 是单射；
3. 若 $\{x_n\} \subset D(A)$ 满足 $x_n \to 0$ 且 $A x_n \to y$，则 $y = 0$。

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

### 注
1. 直观来看，若 $x_n \to x$， $Ax_n \to y$, 则有 $\tilde{A}x := y$。这样可以将 $A \mapsto \tilde{A}$， 此时为了说明 $\tilde{A}$ 是良定义的，需要 $\tilde{x_n} \mapsto x, A\tilde{x_n} \mapsto \tilde{y} \Rightarrow y = \tilde{y}$，这与条件3等价
2. 回到微分算子的例子：$Graph(T) = \{(f, \frac{\partial}{\partial x}f \mid f \in C^1[a, b])\}$， 则：
   1. $T$是可闭算子
   2. 若 $\overline{\text{Graph}(T)} \stackrel{\text{定义}}{=} \left\{ (f, g) \mid \exists f_n \in C[a,b], \text{ s.t. } f_n \xrightarrow{L^2} f, \; \frac{d}{dx}f_n \xrightarrow{L^2} g \right\} \subseteq L^2([a,b]) \times L^2([a,b])$,则 $\overline{\text{Graph}(T)} = \left\{ \left(f, \frac{d}{dx}f\right) \mid f \in H^1([a,b]) \right\}$，其中 $H^1([a,b]) \stackrel{\text{定义}}{=} \left\{ f \in AC[a,b] \text{ 且 } f' \in L^2[a,b] \right\}$；
   3. 若 $\|f\|_{H^1}^2 \stackrel{\text{定义}}{=} \|f\|_{L^2}^2 + \|f'\|_{L^2}^2, \; \forall f \in H^1([a,b])$。则 $\left( H^1([a,b]), \|\cdot\|_{H^1} \right)$ 是 Banach 空间，从而 $T \in \mathcal{L}\left( H^1([a,b]), \; L^2([a,b]) \right)$。
3. $X = L^2(\mathbb{R}), \quad \mathcal{D}(A) = \left\{ f \in L^2 \mid \exists c > 0, \text{ s.t. } \operatorname{supp} f \subset [-c, c] \right\}$，$A f \stackrel{\text{定义}}{=} \int_{-\infty}^{\infty} f(t) \, dt, \quad \forall f \in \mathcal{D}(A)$。则 $A$ 不是可闭的。记 $f_n = \begin{cases} \frac{1}{n} & |t| \leq n \\ 0 & |t| > n \end{cases} \quad \Rightarrow \quad \|f_n\|_{L^2}^2 = \frac{2}{n} \to 0$。而 $A f_n = 2 \quad \Rightarrow$ 3 不成立。
4. 若$H$是Hilbert空间，$A: D(A) \subset H \mapsto H$ 是稠密子空间上的对称算子，则$A$可闭。事实上，假设 $x_n \to 0, \, Ax_n \to y, \, \forall z \in D(A), \, (Ax_n, z) = (x_n, Az) \Rightarrow (y, z) = 0 \Rightarrow y = 0$


## Sobolev 空间
### 动机
考虑 $\Omega \subseteq \mathbb{R}^n$ 是非空开集，$\alpha \in \mathbb{N}^n$ 是一个多重指标，定义微分算子 $\partial^\alpha = \frac{\partial^{|\alpha|}}{\partial x_1^{\alpha_1} \partial x_2^{\alpha_2} \cdots \partial x_n^{\alpha_n}}$。
考虑算子 $T = \partial^\alpha$，定义域为 $\mathcal{D}(T) = \{ f \in C_c^\infty(\Omega) \mid \|f\|_{L^p} + \|Tf\|_{L^p} < +\infty \}$。可以证明 $T$ 是可闭算子，即如果序列 $\{f_n\} \subseteq \mathcal{D}(T)$ 满足 $f_n \xrightarrow{L^p} 0$ 且 $Tf_n \xrightarrow{L^p} g$，则 $g = 0$ 几乎处处成立。
证明的关键在于对任意试验函数 $u \in C_c^\infty(\Omega)$，利用分部积分公式：
$$\int_\Omega T f_n \, u \, dx = \int_\Omega \partial^\alpha f_n \, u \, dx = (-1)^{|\alpha|} \int_\Omega f_n \, \partial^\alpha u \, dx$$
取极限 $n \to \infty$ 得到 $\int_\Omega g \, u \, dx = 0$，由试验函数的稠密性可得 $g = 0$ 几乎处处。

此时：
$$\boxed{
\begin{array}{c}
f_n \xrightarrow{L^p} f \\
T f_n \xrightarrow{L^p} g
\end{array}
} \quad \Longrightarrow \quad
\boxed{
\begin{array}{c}
f, g \text{ 满足 } \forall u \in C_c^\infty(\Omega), \\
\displaystyle \int_\Omega f \, \partial^\alpha u \, dx = (-1)^{|\alpha|} \int_\Omega g \, u \, dx
\end{array}
}$$
一个自然问题是何时右推出左

### 定义（Sobolev空间）
对于 $1 \leq p \leq \infty$ 和正整数 $m$，定义 **Sobolev 空间** $W^{m,p}(\Omega)$ 为：
$$W^{m,p}(\Omega) = \{ f \in L^p(\Omega) \mid \forall \alpha \in \mathbb{N}^n, |\alpha| \leq m, \partial^\alpha f \text{ 存在且属于 } L^p(\Omega) \}$$
其中 $\partial^\alpha f$ 是在分布意义下的导数，即对任意 $u \in C_c^\infty(\Omega)$ 有：
$$\int_\Omega f \, \partial^\alpha u \, dx = (-1)^{|\alpha|} \int_\Omega (\partial^\alpha f) \, u \, dx$$
赋予范数：
$$\|f\|_{W^{m,p}(\Omega)} = \left( \sum_{|\alpha| \leq m} \|\partial^\alpha f\|_{L^p(\Omega)}^p \right)^{\frac{1}{p}}, \quad 1 \leq p < \infty$$
当 $p = \infty$ 时，取相应的上确界范数。

### Meyer-Serrin 逼近定理
一个自然的问题是：Sobolev 空间中的函数能否用光滑函数逼近。

设 $\Omega \subseteq \mathbb{R}^n$ 是开集，$1 \leq p < \infty$，$m \geq 0$是整数。则$C\infty(\Omega) \cap W{m,p}(\Omega)$在$W^{m,p}(\Omega)$ 中稠密。
即，对任意 $f \in W^{m,p}(\Omega)$，存在序列 $\{f_k\} \subseteq C^\infty(\Omega) \cap W^{m,p}(\Omega)$ 使得：
$$\lim_{k \to \infty} \|f_k - f\|_{W^{m,p}(\Omega)} = 0$$

#### 证明
取标准磨光核 $\rho \in C_c^\infty(\mathbb{R}^n)$，满足：
- $\text{supp } \rho \subseteq B_1(0)$
- $\rho \geq 0$
- $\int_{\mathbb{R}^n} \rho(x) dx = 1$

定义 $\rho_\varepsilon(x) = \varepsilon^{-n} \rho(x/\varepsilon)$，则 $\rho_\varepsilon \in C_c^\infty(\mathbb{R}^n)$ 且 $\text{supp } \rho_\varepsilon \subseteq B_\varepsilon(0)$。

对 $f \in W^{m,p}(\mathbb{R}^n)$，定义磨光函数：
$$
f_\varepsilon(x) = (f * \rho_\varepsilon)(x) = \int_{\mathbb{R}^n} f(y) \rho_\varepsilon(x-y) dy
$$
则 $f_\varepsilon \in C^\infty(\mathbb{R}^n)$。

我们证明 $f_\varepsilon \in W^{m,p}(\mathbb{R}^n)$ 且其导数为：
$$
\partial^\alpha f_\varepsilon = f * \partial^\alpha \rho_\varepsilon
$$

事实上，对任意多重指标 $|\alpha| \leq m$ 和试验函数 $\varphi \in C_c^\infty(\mathbb{R}^n)$，有：
$$
\begin{aligned}
\int_{\mathbb{R}^n} f_\varepsilon(x) \partial^\alpha \varphi(x) dx 
&= \int_{\mathbb{R}^n} \left( \int_{\mathbb{R}^n} f(y) \rho_\varepsilon(x-y) dy \right) \partial^\alpha \varphi(x) dx \\
&= \int_{\mathbb{R}^n} f(y) \left( \int_{\mathbb{R}^n} \rho_\varepsilon(x-y) \partial^\alpha \varphi(x) dx \right) dy \\
&= (-1)^{|\alpha|} \int_{\mathbb{R}^n} f(y) \left( \int_{\mathbb{R}^n} \partial^\alpha \rho_\varepsilon(x-y) \varphi(x) dx \right) dy \\
&= (-1)^{|\alpha|} \int_{\mathbb{R}^n} \left( \int_{\mathbb{R}^n} f(y) \partial^\alpha \rho_\varepsilon(x-y) dy \right) \varphi(x) dx \\
&= (-1)^{|\alpha|} \int_{\mathbb{R}^n} (f * \partial^\alpha \rho_\varepsilon)(x) \varphi(x) dx
\end{aligned}
$$

这表明 $\partial^\alpha f_\varepsilon = f * \partial^\alpha \rho_\varepsilon$ 在分布意义下成立。由于 $f \in L^p(\mathbb{R}^n)$ 且 $\partial^\alpha \rho_\varepsilon \in L^1(\mathbb{R}^n)$，由 Young 卷积不等式可知 $f * \partial^\alpha \rho_\varepsilon \in L^p(\mathbb{R}^n)$，因此 $f_\varepsilon \in W^{m,p}(\mathbb{R}^n)$。

我们需要证明 $\lim_{\varepsilon \to 0} \|f_\varepsilon - f\|_{W^{m,p}(\mathbb{R}^n)} = 0$。

首先考虑 $L^p$ 范数。由磨光函数的性质，有 $\|f_\varepsilon - f\|_{L^p(\mathbb{R}^n)} \to 0$ 当 $\varepsilon \to 0$。

对于导数部分，对任意 $|\alpha| \leq m$，有：
$$
\partial^\alpha f_\varepsilon - \partial^\alpha f = f * \partial^\alpha \rho_\varepsilon - \partial^\alpha f
$$

注意 $\partial^\alpha \rho_\varepsilon$ 的积分为 $0$（当 $|\alpha| \geq 1$ 时），因此：
$$
f * \partial^\alpha \rho_\varepsilon - \partial^\alpha f = \int_{\mathbb{R}^n} [\partial^\alpha f(x-y) - \partial^\alpha f(x)] \rho_\varepsilon(y) dy
$$

由 Minkowski 积分不等式：
$$
\|f * \partial^\alpha \rho_\varepsilon - \partial^\alpha f\|_{L^p} \leq \int_{\mathbb{R}^n} \|\partial^\alpha f(\cdot - y) - \partial^\alpha f(\cdot)\|_{L^p} \rho_\varepsilon(y) dy
$$

由于 $\partial^\alpha f \in L^p(\mathbb{R}^n)$，$L^p$ 函数的平移连续性保证了对任意 $\delta > 0$，存在 $\eta > 0$ 使得当 $|y| < \eta$ 时：
$$
\|\partial^\alpha f(\cdot - y) - \partial^\alpha f(\cdot)\|_{L^p} < \delta
$$

对于 $\varepsilon < \eta$，有：
$$
\|f * \partial^\alpha \rho_\varepsilon - \partial^\alpha f\|_{L^p} \leq \int_{B_\varepsilon(0)} \|\partial^\alpha f(\cdot - y) - \partial^\alpha f(\cdot)\|_{L^p} \rho_\varepsilon(y) dy < \delta
$$

因此 $\|\partial^\alpha f_\varepsilon - \partial^\alpha f\|_{L^p} \to 0$ 当 $\varepsilon \to 0$。

综上，对任意 $|\alpha| \leq m$，有 $\|\partial^\alpha f_\varepsilon - \partial^\alpha f\|_{L^p} \to 0$，故 $\|f_\varepsilon - f\|_{W^{m,p}(\mathbb{R}^n)} \to 0$。

