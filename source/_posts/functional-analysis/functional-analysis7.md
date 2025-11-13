---
title: Ch 2.3.1 开映射
tags:
  - math
  - functional analysis
categories:
  - math
  - functional analysis
index_img: /img/fa.jpg
banner_img: /img/fa.jpg
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


