---
title: Hilbert 空间
tags:
  - functional-analysis
  - math
categories:
  - math
  - functional-analysis
excerpt: no excerpt
date: 2025-09-25 14:44:40
---
# §2. Hilbert 空间

## 内积空间的概念

**定义1**：设 $H = (H, +, \cdot; \mathbb{F})$。若 $(\cdot, \cdot): H \times H \to \mathbb{F}$ 满足：

1. **非负性**：$(\varphi, \varphi) \ge 0$ 且 $(\varphi, \varphi) = 0 \iff \varphi = 0$。
2. $\forall \alpha \in \mathbb{F},\; \varphi, \chi, \xi \in H$，
   $$
   (\alpha \varphi + \chi, \xi) = \alpha (\varphi, \xi) + (\chi, \xi).
   $$
3. **共轭对称性**：
   $$
   (\varphi, \chi) = \overline{(\chi, \varphi)}.
   $$

则称 $(\cdot, \cdot)$ 是 $H$ 上的一个内积。具有内积的线性空间称为内积空间。


### 内积空间的基本性质

1. **线性性（第一变量）**：
   $$
   (\xi, \alpha \varphi + \chi) = \overline{(\alpha \varphi + \chi, \xi)} = \overline{\alpha} \overline{(\varphi, \xi)} + \overline{(\chi, \xi)} = \overline{\alpha} (\xi, \varphi) + (\xi, \chi).
   $$

2. **Cauchy-Schwarz 不等式**：$\forall \varphi, \chi \in H$，
   $$
   |(\varphi, \chi)| \le \sqrt{(\varphi, \varphi)} \cdot \sqrt{(\chi, \chi)}.
   $$
   等号成立当且仅当 $\varphi, \chi$ 线性相关。

   *证明*：记 $|\varphi| = \sqrt{(\varphi, \varphi)}$。  
   - 若 $\chi = 0$，不等式显然成立。  
   - 若 $\chi \ne 0$，令 $P_\chi \varphi = \left( \varphi, \frac{\chi}{|\chi|} \right) \frac{\chi}{|\chi|}$，则  
     $$
     (\varphi - P_\chi \varphi, \chi) = 0 \quad \Rightarrow \quad |\varphi|^2 = |\varphi - P_\chi \varphi|^2 + |P_\chi \varphi|^2 = \left| \left( \varphi, \frac{\chi}{|\chi|} \right) \right|^2.
     $$  
     即 $|(\varphi, \chi)|^2 + |\chi|^2 |\varphi - P_\chi \varphi|^2 = |\varphi|^2 |\chi|^2$，从而得证。

3. **范数诱导**：若 $\|\varphi\| = \sqrt{(\varphi, \varphi)}$，则 $(H, \|\cdot\|)$ 是赋范空间。

4. **完备性定义**：若 $(H, \|\cdot\|)$ 是完备的，则称 $(H, (\cdot, \cdot))$ 是 Hilbert 空间。


#### 典型例子

1. $(\mathbb{R}^n, (\cdot, \cdot))$，其中
   $$
   (x, y) = \sum_{i=1}^n x_i y_i.
   $$

2. $(X, \mathcal{M}, \mu)$ 完备测度空间，对于 $L^2(d\mu)$，定义
   $$
   (f, g) = \int_X f \bar{g} \, d\mu.
   $$
   则 $(L^2, (\cdot, \cdot))$ 是 Hilbert 空间。


## 内积空间的几何性质

**定义2**：由 Cauchy-Schwarz 不等式，记
$$
\cos \theta \overset{\text{定义}}{=} \frac{(\varphi, \chi)}{\|\varphi\| \|\chi\|}, \quad \theta \text{ 称为非零元素 } \varphi, \chi \text{ 之间的夹角}.
$$

$\Rightarrow$ $(\cdot, \cdot)$ 可以定义“垂直”（正交）概念：即 $\varphi \perp \chi \iff (\varphi, \chi) = 0$。

**下问**：怎样的范数可以诱导内积？$L^p(d\mu)$ 是否是 Hilbert 空间，当 $p \ne 2$ 时？


### 1. 实平面情形

设平行四边形 $ABCD$，令 $\overrightarrow{AD} = \vec{a}$, $\overrightarrow{AB} = \vec{b}$，$\theta$ 是 $\vec{a}$ 与 $\vec{b}$ 之间夹角。

由余弦定理：
$$
\begin{cases}
|\overrightarrow{BD}|^2 = a^2 + b^2 - 2ab \cos \theta \\
|\overrightarrow{AC}|^2 = a^2 + b^2 - 2ab \cos(\pi - \theta)
\end{cases}
\Rightarrow |\overrightarrow{BD}|^2 + |\overrightarrow{AC}|^2 = 2(|\vec{a}|^2 + |\vec{b}|^2) \quad \text{—— 平行四边形法则}
$$

进而可得点积公式：
$$
\vec{a} \cdot \vec{b} = |\vec{a}| |\vec{b}| \cos \theta = \frac{1}{4} \left( |\vec{a} + \vec{b}|^2 - |\vec{a} - \vec{b}|^2 \right).
$$

### 2. 复平面情形

设 $\vec{A}_1 = a + ib = r_1 e^{i\theta}$, $\vec{A}_2 = c + id = r_2 e^{i\varphi}$。

则内积定义为：
$$
(\vec{A}_1, \vec{A}_2) = (a + ib) \cdot \overline{(c + id)} = r_1 e^{i\theta} \cdot r_2 e^{-i\varphi} = r_1 r_2 e^{i(\theta - \varphi)}.
$$

展开实部与虚部：
$$
= r_1 r_2 \cos(\theta - \varphi) + i r_1 r_2 \sin(\theta - \varphi)
= r_1 r_2 \cos(\theta - \varphi) + i r_1 r_2 \cos\left( \frac{\pi}{2} - (\theta - \varphi) \right).
$$

通过向量图示（$\vec{A}_1$, $\vec{A}_2$, $i\vec{A}_2$ 构成直角关系），可推导出复内积的**极化恒等式**：

$$
(\vec{A}_1, \vec{A}_2) = \frac{1}{4} \left( |\vec{A}_1 + \vec{A}_2|^2 - |\vec{A}_1 - \vec{A}_2|^2 \right) + \frac{i}{4} \left( |\vec{A}_1 + i\vec{A}_2|^2 - |\vec{A}_1 - i\vec{A}_2|^2 \right).
$$

### 定理3（极化恒等式）：内积与范数的关系

1. 若 $\mathbb{F} = \mathbb{R}$，即 $H$ 是实内积空间，则
   $$
   (\varphi, \chi) = \frac{1}{4} \left( \|\varphi + \chi\|^2 - \|\varphi - \chi\|^2 \right), \quad \forall \varphi, \chi \in H.
   $$

2. 若 $\mathbb{F} = \mathbb{C}$，即 $H$ 是复内积空间，则
   $$
   (\varphi, \chi) = \frac{1}{4} \left( \|\varphi + \chi\|^2 - \|\varphi - \chi\|^2 \right) + \frac{i}{4} \left( \|\varphi + i\chi\|^2 - \|\varphi - i\chi\|^2 \right).
   $$

### 定理4（范数诱导内积的充要条件）
若 $X = (X, \|\cdot\|)$，则 $X$ 存在内积 $(\cdot, \cdot)$，使得
$$
\|\varphi\|^2 = (\varphi, \varphi), \quad \forall \varphi \in X
\iff \|\cdot\| \text{ 满足平行四边形法则}, \text{ 即 } \forall \varphi, \chi \in H,
$$
$$
2(\|\varphi\|^2 + \|\chi\|^2) = \|\varphi + \chi\|^2 + \|\varphi - \chi\|^2.
$$

**证明**：只需验证“$\Leftarrow$”方向。这可归结于证明由极化恒等式定义的右端是内积。

由定理3可知：
- $(\varphi, \chi) = \overline{(\chi, \varphi)}$，
- $(\varphi, \varphi) \ge 0$ 且 $(\varphi, \varphi) = 0 \iff \varphi = 0$。

因此，只需验证 $(\cdot, \cdot)$ 对第一变量是线性性质。

**Step 1**：证明
$$
(\varphi_1 + \varphi_2, \chi) = (\varphi_1, \chi) + (\varphi_2, \chi).
$$

计算：
$$
  (\varphi_1, \chi) + (\varphi_2, \chi) \\  = \frac{1}{4} \left( \|\varphi_1 + \chi\|^2 - \|\varphi_1 - \chi\|^2 + \|\varphi_2 + \chi\|^2 - \|\varphi_2 - \chi\|^2 \right) \\  + \frac{i}{4} \left( \|\varphi_1 + i\chi\|^2 - \|\varphi_1 - i\chi\|^2 + \|\varphi_2 + i\chi\|^2 - \|\varphi_2 - i\chi\|^2 \right).
$$

利用平行四边形法则：
$$
= \frac{1}{8} \left( \|\varphi_1 + \varphi_2 + 2\chi\|^2 - \|\varphi_1 + \varphi_2 - 2\chi\|^2 \right) + \frac{i}{8} \left( \|\varphi_1 + \varphi_2 + 2i\chi\|^2 - \|\varphi_1 + \varphi_2 - 2i\chi\|^2 \right)
$$

令 $\psi = \frac{\varphi_1 + \varphi_2}{2}$，则上式变为：
$$
= \frac{1}{2} \left( \|\psi + \chi\|^2 - \|\psi - \chi\|^2 \right)+ \frac{i}{2} \left( \|\psi + i\chi\|^2 - \|\psi - i\chi\|^2 \right)= 2 \left( \frac{\varphi_1 + \varphi_2}{2}, \chi \right)= (\varphi_1 + \varphi_2, \chi).
$$


**Step 2**：证明 $\forall \alpha \in \mathbb{R}$，有 $(\alpha \varphi, \chi) = \alpha (\varphi, \chi)$

记 $f(\alpha) \overset{\text{定义}}{=} (\alpha \varphi, \chi)$，$\forall \alpha \in \mathbb{R}$。由定义知 $f(\alpha)$ 是 $\mathbb{R}$ 上的连续函数。

下证：$f(\alpha) = \alpha f(1)$（即（★）式成立）。

- **(i)** 由 $(0, \chi) = 0 \Rightarrow f(0) = 0$。
- **(ii)** 由 Step 1：$( -\alpha \varphi + \alpha \varphi, \chi ) = (\alpha \varphi, \chi) + (-\alpha \varphi, \chi) = 0 \Rightarrow f(-\alpha) = -f(\alpha)$，$\forall \alpha \in \mathbb{R}$。
- **(iii)** 由 Step 1：$\forall m \in \mathbb{N}$，
  $$
  \begin{cases}
  f(m\alpha) = m f(\alpha), \\
  f(\alpha) = m f\left( \frac{\alpha}{m} \right)
  \end{cases}
  \Rightarrow
  f(m) = m f(1), \quad f\left( \frac{1}{m} \right) = \frac{1}{m} f(1).
  $$

从而：
$$
f\left( \frac{m}{n} \right) = \frac{m}{n} f(1), \quad \forall m,n \in \mathbb{N}.
$$

由于 $f(\alpha)$ 连续，对任意 $\alpha > 0$，存在有理数列 $\{r_n\} \to \alpha$，则
$$
f(\alpha) = \lim_{n\to\infty} f(r_n) = \lim_{n\to\infty} r_n f(1) = \alpha f(1).
$$

对 $\alpha < 0$，有：
$$
f(\alpha) = -f(-\alpha) = -(-\alpha) f(1) = \alpha f(1).
$$

综上，$\forall \alpha \in \mathbb{R}$，$f(\alpha) = \alpha f(1)$，即 $(\alpha \varphi, \chi) = \alpha (\varphi, \chi)$。


**Step 3**：证明 $\forall \alpha \in \mathbb{C}$，有 $(\alpha \varphi, \chi) = \alpha (\varphi, \chi)$

令 $\alpha = a + ib \in \mathbb{C}$，则
$$
f(\alpha) = f(a + ib) = ((a + ib)\varphi, \chi) = (a\varphi, \chi) + (ib\varphi, \chi).
$$

由 Step 2，$(a\varphi, \chi) = a(\varphi, \chi)$。

又由定义，$(i\varphi, \chi) = i(\varphi, \chi)$，所以
$$
(ib\varphi, \chi) = b(i\varphi, \chi) = b \cdot i(\varphi, \chi) = (a + ib)(\varphi, \chi) = \alpha (\varphi, \chi).
$$

因此，$\forall \alpha \in \mathbb{C}$，$(\alpha \varphi, \chi) = \alpha (\varphi, \chi)$。

证毕。

好的，以下是按照您指定格式整理的后续笔记内容：


### 应用：$L^p$ 空间何时是 Hilbert 空间？

#### 1. $L^p(p \ne 2)$ 不是 Hilbert 空间

**反证法**：假设 $\text{supp} f \cap \text{supp} g = \emptyset$。

则有：
$$
\|f + g\|_{L^p}^p = \|f\|_{L^p}^p + \|g\|_{L^p}^p.
$$

考虑平行四边形法则：
$$
\|f + g\|_{L^p}^2 + \|f - g\|_{L^p}^2 \overset{?}{=} 2(\|f\|_{L^p}^2 + \|g\|_{L^p}^2).
$$

取特例：$\|f\|_{L^p} = \|g\|_{L^p} = 1$，则左边为：
$$
\left(2^{1/p}\right)^2 + \left(2^{1/p}\right)^2 = 2 \cdot 2^{2/p},
$$
右边为：
$$
2(1^2 + 1^2) = 4.
$$

当 $p \ne 2$ 时，$2 \cdot 2^{2/p} \ne 4$，故平行四边形法则不成立。

因此，$L^p(p \ne 2)$ 不是 Hilbert 空间。



#### 2. 当 $1 < p < +\infty$ 时，Hanner 不等式作为“平行四边形法则”的替代

（参见 Lieb《Analysis》）

- **当 $1 < p \le 2$ 时**：
  $$
  \left| \|u\|_p - \|v\|_p \right|^p + \left( \|u\|_p + \|v\|_p \right)^p \le \|u + v\|_p^p + \|u - v\|_p^p \quad \text{(H1)}
  $$

- **当 $p \ge 2$ 时**：
  $$
  \left( \|u + v\|_p + \|u - v\|_p \right)^p + \left| \|u + v\|_p - \|u - v\|_p \right|^p \le 2^p \left( \|u\|_p^p + \|v\|_p^p \right) \quad \text{(H2)}
  $$

> 注：当 $p \in [2, +\infty)$ 时，(H1) 和 (H2) 反向成立。


### 一致凸空间（Uniformly Convex Space）

**定义**：设 $X = (X, \|\cdot\|)$。若对任意 $0 < \varepsilon \le 2$，$\exists \delta(\varepsilon) > 0$，使得 $\forall x, y \in X$，满足 $\|x\| \le 1$, $\|y\| \le 1$ 且 $\|x - y\| \ge \varepsilon$，均有
$$
\left\| \frac{x + y}{2} \right\| \le 1 - \delta(\varepsilon),
$$
则称 $X$ 是一致凸的。

> **注**：
> - 此概念由 James A. Clarkson 于 1936 年提出（针对 $L^p$ 空间，$1 < p < +\infty$），几何上表示：单位球面上任意两个不同的向量，它们和的一半不会触碰到球面，且离球面的距离可由它们的差控制。
> - 由 Hanner 不等式可推出：当 $1 < p < +\infty$ 时，$L^p$ 是一致凸的。


#### $L^1$ 与 $L^\infty$ 不是一致凸的

**例1**：
设 $f_1(x) = \mathbf{1}_{[0,1]}(x)$，$f_2(x) = \mathbf{1}_{[1,2]}(x)$。  
则 $\|f_1\|_{L^1} = \|f_2\|_{L^1} = 1$，且
$$
\left\| \frac{f_1 + f_2}{2} \right\|_{L^1} = \left\| \frac{f_1 - f_2}{2} \right\|_{L^1} = 1.
$$

**例2**：
设 $f_1(x) = \mathbf{1}_{[0,1]}(x) - \mathbf{1}_{[2,3]}(x)$，$f_2(x) = \mathbf{1}_{[-\frac{1}{2}, \frac{1}{2}]}(x) + \mathbf{1}_{[\frac{3}{2}, \frac{5}{2}]}(x)$。  
则 $\|f_1\|_{L^\infty} = \|f_2\|_{L^\infty} = 1$，且
$$
\left\| \frac{f_1 + f_2}{2} \right\|_{L^\infty} = \left\| \frac{f_1 - f_2}{2} \right\|_{L^\infty} = 1.
$$

故在 $L^1$ 和 $L^\infty$ 中，存在单位球面上相距为 2 的点，其平均仍位于单位球面上，因此它们不是一致凸空间。


### Hilbert 空间的对偶空间（投影定理）

**（投影定理）**：假设 $H = (H, (\cdot, \cdot))$ 是 Hilbert 空间，$K$ 是 $H$ 中的闭子集，$x \notin K$。  
则 $\exists! z_0 \in K$，s.t. $\forall z \in K$，
$$
\|x - z_0\| = \inf_{z \in K} \|x - z\| \quad \text{且} \quad \operatorname{Re}(z - z_0, x - z_0) \le 0. \quad \text{(※2)}
$$

若 $K$ 是 $H$ 的闭子空间，则 $\forall z \in K$，
$$
(z, x - z_0) = 0 \quad \text{(※3)} \quad \Rightarrow \quad x - z_0 \perp K.
$$

#### 证明：

**Step 1**：设 $D = \inf_{z \in K} \|x - z\|$，并取 $\{z_n\} \subseteq K$ 使得 $\lim_{n \to \infty} \|x - z_n\| = D$。  
证明 $\{x - z_n\}$ 是 Cauchy 列。

由平行四边形法则：
$$
\left\| \frac{(x - z_n) + (x - z_m)}{2} \right\|^2 + \left\| \frac{(x - z_n) - (x - z_m)}{2} \right\|^2 = \frac{\|x - z_n\|^2 + \|x - z_m\|^2}{2}.
$$

左边第一项 $\ge D^2$（因 $\frac{z_n + z_m}{2} \in K$），第二项 $\ge 0$，右边 $\to D^2$（当 $n,m \to \infty$）。  
故 $\|z_n - z_m\| \to 0$，即 $\{z_n\}$ 是 Cauchy 列。  
由 $K$ 闭，$\exists z_0 \in K$ 使得 $z_n \to z_0$，从而 $\|x - z_0\| = D$。

**Step 2**：定义函数 $F(t) \overset{\text{定义}}{=} \| (1-t)z_0 + tz - x \|^2$，$\forall z \in K$。  
由于 $K$ 是子空间，$(1-t)z_0 + tz \in K$，故 $F(t) \ge D^2 = F(0)$，即 $t=0$ 是极小值点，所以 $F'(0) \ge 0$。

计算得：
$$
F'(0) = 2 \operatorname{Re}(z - z_0, z_0 - x) \ge 0 \quad \Rightarrow \quad \operatorname{Re}(z - z_0, x - z_0) \le 0
$$

**Step 3**：若 $K$ 是闭子空间，则对任意 $z \in K$，有 $-z \in K$ 和 $iz \in K$（复情形）。

- 取 $z := -z$，得 $\operatorname{Re}(z, x - z_0) = 0$。
- 取 $z := iz$，得 $\operatorname{Im}(z, x - z_0) = 0$。

综上，$(z, x - z_0) = 0$，即 $x - z_0 \perp K$。


### Riesz 表示定理

**（Riesz 表示定理）**：设 $H = (H, (\cdot, \cdot))$ 是 Hilbert 空间，$L \in H^*$，则 $\exists! y \in H$，s.t. $\forall x \in H$，
$$
L(x) = (x, y) \quad \text{且} \quad \|y\| = \|L\|.
$$

**注**：若定义 $\Phi: H^* \to H$，s.t. $\Phi(L) = y$，则 $\Phi$ 是等距同构，即 $H^* = H$。

> [由等距，$H^*$ 也是 Hilbert 空间，且 $\forall L_1, L_2 \in H^*$，$(L_1, L_2) = (\Phi(L_1), \Phi(L_2))$]

#### 证明：

不妨假设 $L \ne 0$。记 $K = \{ x \in H \mid L(x) = 0 \}$，则 $K$ 是闭子空间且 $K \ne H$。

取 $x \in H \setminus K$，由投影定理，$\exists z_0 \in K$，s.t. $\forall z \in K$，$(z, x - z_0) = 0$。

任取 $\xi \in H$，令 $\xi = \alpha (x - z_0) + \eta$，其中 $\eta \in K$。  
则 $L(\xi) = \alpha L(x - z_0) = \alpha L(x)$，故 $\alpha = \frac{L(\xi)}{L(x)}$。

于是：
$$
\xi = \frac{L(\xi)}{L(x)} (x - z_0) + \eta \quad \Rightarrow \quad \left( \xi - \frac{L(\xi)}{L(x)} (x - z_0), x - z_0 \right) = 0.
$$

因此：
$$
(\xi, x - z_0) = \frac{L(\xi)}{L(x)} \|x - z_0\|^2 \quad \Rightarrow \quad L(\xi) = \left( \xi, \overline{L(x)} \frac{x - z_0}{\|x - z_0\|^2} \right).
$$

令 $y = \overline{L(x)} \frac{x - z_0}{\|x - z_0\|^2}$，则 $L(\xi) = (\xi, y)$，且 $\|y\| = \|L\|$。


### 正交补与正交分解

**定义（正交集合与正交补）**：若 $A, B$ 是 $H = (H, (\cdot, \cdot))$ 的两个子集。如果 $\forall \varphi \in A, \chi \in B$，$(\varphi, \chi) = 0$，则称 $A$ 与 $B$ 正交，记为 $A \perp B$。

集合 $\{ \varphi \mid \varphi \in H, \varphi \perp A \}$ 称为 $A$ 的正交补，记为 $A^\perp$。（$\Rightarrow A^\perp$ 是线性子空间）

#### 定理5：设 $H = (H, (\cdot, \cdot))$ 是 Hilbert 空间，$\forall A, B \subseteq H$。

1. $A^\perp$ 是闭子集
2. 若 $A \subset B$，则 $B^\perp \subseteq A^\perp$。
3. $(\operatorname{span} A)^\perp = A^\perp$。
4. $\overline{A} = (A^\perp)^\perp$，如果 $A$ 是线性子空间。
5. 若 $A$ 是闭子空间，则 $H = A \oplus A^\perp$。

##### 证明（只证5）：

任取 $x \in H \setminus A$，由（投影定理）$\Rightarrow \exists z_0 \in A$，s.t. $x - z_0 \perp A$。

即 $x = z_0 + (x - z_0)$，其中 $z_0 \in A$，$x - z_0 \in A^\perp$，故 $H = A + A^\perp$。

又因 $A \cap A^\perp = \{0\}$，所以 $H = A \oplus A^\perp$。


## 规范正交基

**定义（规范正交集）**：
1. 设 $H = (H, (\cdot, \cdot))$，$A = \{ e_\alpha \}_{\alpha \in \Lambda} \subseteq H$ 称为 $H$ 的一个规范正交集，如果 $\forall \alpha, \beta \in \Lambda$，
   $$
   (e_\alpha, e_\beta) = \delta_{\alpha\beta}.
   $$

2. 称 $H$ 的规范正交集 $A$ 是极大的，如果下列性质成立：即若 $\varphi \in H$ 满足 $(\varphi, e_\alpha) = 0$，$\forall \alpha \in \Lambda$，则 $\varphi = 0$。

$H$ 的极大规范正交集称为规范正交基（或完备规范正交基）。

> 注：规范正交集中任意抽取有限个元素必是线性无关的。

**例1**：对于 $(\ell^2, (\cdot, \cdot))$，其中 $(a, b) = \sum_{j=1}^\infty a_j \overline{b_j}$。  
令 $e_n = (0, \dots, 0, 1, 0, \dots)$（第 $n$ 位为 1），则 $\{e_n\}_{n=1}^\infty$ 是 $\ell^2$ 的规范正交基。

**例2**：$A = \left\{ \frac{1}{\sqrt{2\pi}}, \frac{1}{\sqrt{\pi}} \cos nx, \frac{1}{\sqrt{\pi}} \sin nx \mid n \in \mathbb{N} \right\}$ 是 $L^2[-\pi, \pi]$ 的规范正交基。

> 即需证明：Fourier 级数的唯一性。即若 $f \in L^1[-\pi, \pi]$ 满足 $\forall n \in \mathbb{Z}$，$\int_{-\pi}^\pi f(x) e^{inx} dx = 0$，则 $f = 0$ a.e.


### 规范正交基的存在性

**定理6**：若 $H$ 是非平凡的 Hilbert 空间，则 $H$ 存在规范正交基。

为此，需要引入 **Zorn 引理**。

#### 半序关系的定义：

若集合 $X$ 中的关系 $R$ 满足：
1. **自反性**：$\forall x \in X$，$x R x$。
2. **反对称性**：若 $x R y$ 且 $y R x$，则 $x = y$。
3. **传递性**：$\forall x, y, z \in X$，若 $x R y$ 且 $y R z$，则 $x R z$。

则称 $R$ 是一个半序关系，记为“$\le$”。如果 $\forall x, y \in X$，有 $x R y$ 或 $y R x$，则称 $X$ 是全序的。

#### 上界与极大元：

- 若 $Y \subseteq X$，$x$ 称为 $Y$ 上的一个上界，如果 $\forall y \in Y$，$y \le x$。
- 若 $\eta \in X$ 满足 $\forall x \in X$，$\eta \le x \Rightarrow x = \eta$，则称 $\eta$ 为 $X$ 的极大元。


#### Zorn 引理：
设 $X$ 为半序集。如果每一个全序子集均有上界，则 $X$ 必有极大元。


#### 定理6 的证明：

1. $H$ 中的规范正交集以包含关系构成半序集。（由 Gram-Schmidt 正交化过程可知，规范正交集存在。例如：任取 $x_1, x_2 \in H$，
   $$
   e_1 = \frac{x_1}{\|x_1\|}, \quad k_2 = x_2 - (x_2, e_1)e_1, \quad e_2 = \frac{k_2}{\|k_2\|} \Rightarrow \{e_1, e_2\} \text{ 是规范正交集。}
   $$

2. 全序子集必有上界（即所有正交集的并必是上界）。

由 Zorn 引理，$\exists S$ 是规范正交集的极大元，即 $S$ 是 $H$ 的规范正交基。

**反证法补充**：若不然，$\exists 0 \ne \varphi \in H$，s.t. $\forall e \in S$，$(\varphi, e) = 0$。令 $\widetilde{S} = S \cup \{\varphi\}$，则 $\widetilde{S}$ 仍是规范正交集，且 $S \subsetneq \widetilde{S}$，这与 $S$ 是极大元矛盾。故 $S$ 是完备规范正交基。

### 无序和与收敛的定义

假设 $\{x_\alpha\}_{\alpha \in I} \subseteq X$（Banach 空间），称 $\{x_\alpha\}_{\alpha \in I}$ 的无序和收敛于 $x$（记为：$x = \sum_{\alpha \in I} x_\alpha$），如果 $\forall \varepsilon > 0$，$\exists J^\varepsilon \subseteq I$（有限集合），s.t. $\forall J^\varepsilon \subseteq J \subseteq I$（$J$ 为有限集合），有
$$
\left\| S_J - x \right\| < \varepsilon, \quad \text{其中} \quad S_J = \sum_{\alpha \in J} x_\alpha.
$$

#### 注：

1. 这样的收敛性是**网收敛**。无序和（$x = \sum_{\alpha \in I} x_\alpha$）不依赖于求和项的次序关系。也就是说，“无序和”允许求和本身可以轮换（permutation）。

2. “$x = \sum_{\alpha \in I} x_\alpha$”也称为“无条件收敛”。

3. $\sum_{\alpha \in I} x_\alpha$ 称为**绝对收敛**，如果 $\sum_{\alpha \in I} \|x_\alpha\|$ 无条件收敛至一个非负数。

> **说明**：由于 $\sum_{\alpha \in I} \|x_\alpha\| < +\infty$，记 $I_m = \left\{ \alpha \in I \mid \|x_\alpha\| \ge \frac{1}{m} \right\}$，则 $I_m$ 是有限集合。
> 
> （否则，若 $I_m$ 是无限集 $\Rightarrow \sum_{\alpha \in I_m} \|x_\alpha\| \ge \sum_{i=1}^N \frac{1}{m} = \frac{N}{m} \to +\infty$ 当 $N \to \infty$）
> 
> 从而：
> $$
> \sum_{\alpha \in I} \|x_\alpha\| = \sum_{i=1}^\infty \sum_{\alpha \in I_{m_i}} \|x_\alpha\|, \quad \text{其中 } \{m_i\}_{i=1}^\infty \subseteq \mathbb{N} \text{ 且 } |I_{m_i}| < \infty.
> $$
> 即 $\{x_\alpha\}_{\alpha \in I}$ 只有可数个非零项，其余均为零。
> 当 $\sum_{\alpha \in I} \|x_\alpha\| < +\infty \iff \sum_{i=1}^\infty \|x_{\alpha_i}\| < +\infty$，$\Rightarrow \sum_{\alpha \in I} x_\alpha$ 是收敛的，即 $\sum_{\alpha \in I} x_\alpha$ 是无序和收敛。

4. 对于 $\{x_\alpha\}_{\alpha \in I}$，绝对收敛 $\Rightarrow$ 无序和收敛，而无序和收敛 $\not\Rightarrow$ 绝对收敛。（举例？）


#### 定义（无序和是 Cauchy 的）：

无序和 $\sum_{\alpha \in I} x_\alpha$ 是 Cauchy 的，如果 $\forall \varepsilon > 0$，$\exists$ 有限集合 $J_\varepsilon \subseteq I$，s.t. $\forall$ 有限集合 $K \subseteq I \setminus J_\varepsilon$，有
$$
\left\| S_K \right\| < \varepsilon.
$$


#### 命题7：假设 $\{x_\alpha\}_{\alpha \in I} \subseteq X$（Banach 空间），则
$$
\sum_{\alpha \in I} x_\alpha \text{ 是收敛的} \iff \sum_{\alpha \in I} x_\alpha \text{ 是 Cauchy 的}.
$$

**证明**：

“$\Rightarrow$”由定义可证。下面证明“$\Leftarrow$”。

$\forall n \ge 1$，取有限集 $J_n$（有陪集）$\subseteq I$，使得 $\forall$ 有限集 $K \subseteq I \setminus J_n$，有 $\|S_K\| < \frac{1}{n}$。

不妨假设 $J_n \subseteq J_{n+1}$（否则令 $J_{n+1} := J_n \cup J_{n+1}'$）。

则 $\forall m \ge n$，$\|S_{J_m} - S_{J_n}\| \le \frac{1}{n}$，$\Rightarrow \{S_{J_n}\}_{n=1}^\infty$ 是 Cauchy 列。

设 $x = \lim_{n \to \infty} S_{J_n}$。对任意 $\varepsilon > 0$，取 $n \in \mathbb{N}$，s.t. $\frac{1}{n} < \varepsilon/2$。

不妨假设 $\|S_K\| < \varepsilon/2$ 对所有有限集 $K \supseteq J_n$ 成立。

此时，$\forall$ 有限集 $J \supseteq J_n$，
$$
\|S_J - x\| \le \|S_J - S_{J_n}\| + \|S_{J_n} - x\| < \varepsilon/2 + \varepsilon/2 = \varepsilon.
$$

（因为 $J \setminus J_n \subseteq I \setminus J_n$，所以 $\|S_{J \setminus J_n}\| < \varepsilon/2$，且 $\|S_{J_n} - x\| < \varepsilon/2$）

故 $\sum_{\alpha \in I} x_\alpha$ 收敛于 $x$。

### 规范正交基上的展开式

**引理8**：设 $\{u_\alpha\}_{\alpha \in I}$ 是 Hilbert 空间 $H$ 的规范正交集，则
$$
\sum_{\alpha \in I} c_\alpha u_\alpha \text{ 是收敛的} \iff \sum_{\alpha \in I} |c_\alpha|^2 \text{ 是收敛的}.
$$

若两者之一收敛，有
$$
\left\| \sum_{\alpha \in I} c_\alpha u_\alpha \right\|^2 = \sum_{\alpha \in I} |c_\alpha|^2. \quad \text{(※)}
$$

**证明**：

对于有限集 $J \subseteq I$，
$$
\left\| \sum_{\alpha \in J} c_\alpha u_\alpha \right\|^2 = \sum_{\alpha, \beta \in J} (c_\alpha u_\alpha, c_\beta u_\beta) = \sum_{\alpha \in J} |c_\alpha|^2.
$$

由命题7，$\sum_{\alpha \in I} c_\alpha u_\alpha$ 收敛 $\iff \sum_{\alpha \in I} c_\alpha u_\alpha$ 是 Cauchy 的 $\iff \sum_{\alpha \in I} |c_\alpha|^2$ 是 Cauchy 的 $\iff \sum_{\alpha \in I} |c_\alpha|^2$ 收敛。

由无序和收敛的定义，对 $\{J_n\}_{n=1}^\infty$（有限集列），s.t.
$$
\left\| \sum_{\alpha \in J_n} c_\alpha u_\alpha - \sum_{\alpha \in J_m} c_\alpha u_\alpha \right\| + \left| \sum_{\alpha \in J_n} |c_\alpha|^2 - \sum_{\alpha \in J_m} |c_\alpha|^2 \right| \le \frac{1}{n}, \quad \forall m \ge n.
$$

从而 $\left\| \sum_{\alpha \in I} c_\alpha u_\alpha \right\|^2 = \sum_{\alpha \in I} |c_\alpha|^2$。


### Bessel 不等式与正交投影

**定理（Bessel 不等式）**：假设 $U = \{u_\alpha\}_{\alpha \in I}$ 是 Hilbert 空间 $H$ 的规范正交集，$x \in H$。则：

1. $\sum_{\alpha \in I} |\langle x, u_\alpha \rangle|^2 \le \|x\|^2$。
2. $x_U \overset{\text{定义}}{=} \sum_{\alpha \in I} \langle x, u_\alpha \rangle u_\alpha$ 是收敛的。
3. $x - x_U \in U^\perp$。


#### 证明：

**①** $\forall$ 有限子集 $J \subseteq I$，
$$
\left\| x - \sum_{\alpha \in J} \langle x, u_\alpha \rangle u_\alpha \right\|^2 = \|x\|^2 - \sum_{\alpha \in J} |\langle x, u_\alpha \rangle|^2.
$$

$\Rightarrow \sum_{\alpha \in J} |\langle x, u_\alpha \rangle|^2 \le \|x\|^2$。

取上确界：
$$
M = \sup \left\{ \sum_{\alpha \in J} |\langle x, u_\alpha \rangle|^2 \,\middle|\, J \subseteq I \text{ 有限} \right\} \le \|x\|^2.
$$

由于 $\{ \alpha \in I \mid \langle x, u_\alpha \rangle \ne 0 \}$ 至多可数（由引理8），故
$$
\sum_{\alpha \in I} |\langle x, u_\alpha \rangle|^2 = M \le \|x\|^2.
$$

**②** 由引理8可知，$\sum_{\alpha \in I} \langle x, u_\alpha \rangle u_\alpha$ 收敛。

**③** 首先证明：$\forall u \in H$，
$$
\langle x_U, u \rangle = \sum_{\alpha \in I} \langle x, u_\alpha \rangle \langle u_\alpha, u \rangle. \quad \text{(※)}
$$

由于 $\sum_{\alpha \in I} |\langle x, u_\alpha \rangle|^2$ 和 $\sum_{\alpha \in I} |\langle u_\alpha, u \rangle|^2$ 均收敛，由 Cauchy-Schwarz 不等式，
$$
\sum_{\alpha \in I} |\langle x, u_\alpha \rangle \langle u_\alpha, u \rangle| \le \sqrt{ \sum_{\alpha \in I} |\langle x, u_\alpha \rangle|^2 } \cdot \sqrt{ \sum_{\alpha \in I} |\langle u_\alpha, u \rangle|^2 } < +\infty,
$$
即右边是绝对收敛的。

令 $J_n \to I$（有限集列），则
$$
\langle x_U, u \rangle = \lim_{n \to \infty} \sum_{\alpha \in J_n} \langle x, u_\alpha \rangle \langle u_\alpha, u \rangle = \sum_{\alpha \in I} \langle x, u_\alpha \rangle \langle u_\alpha, u \rangle.
$$

任取 $\beta \in I$，则
$$
\langle x - x_U, u_\beta \rangle = \langle x, u_\beta \rangle - \sum_{\alpha \in I} \langle x, u_\alpha \rangle \underbrace{\langle u_\alpha, u_\beta \rangle}_{=\delta_{\alpha\beta}} = \langle x, u_\beta \rangle - \langle x, u_\beta \rangle = 0.
$$

$\Rightarrow x - x_U \in U^\perp$。


### 闭线性包的定义

**定义**：记
$$
[U] \overset{\text{定义}}{=} \left\{ \sum_{u \in U} c_u u \,\middle|\, c_u \in \mathbb{F}, \; \sum_{u \in U} c_u u \text{ 是无条件收敛} \right\},
$$
其中 $U \subseteq H$（Hilbert 空间）。
