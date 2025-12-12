---
title: Ch 5.1 复化 Banach 空间
tags:
  - math
  - functional analysis
categories:
  - math
  - functional analysis
index_img: /img/fa.jpg
banner_img: /img/fa.jpg
excerpt: 泛函分析课程笔记
date: 2025-12-12 16:35:27
---
# 谱理论
本章的目的是研究实或复巴拿赫空间上有界线性算子的谱。在线性代数中，一个实矩阵可能具有复特征值，而在无限维情形下情况类似。为了定义实巴拿赫空间上有界实线性算子的特征值，更一般地说，为了定义其谱值，有必要将实巴拿赫空间复化。复巴拿赫空间以及实巴拿赫空间的复化将在预备性的第 1 节中讨论。第 2 节介绍了有界线性算子的谱，考察了其基本性质，证明了谱半径是谱值模的最大值，考察了紧算子的谱，并建立了全纯函数演算。本章其余部分专门讨论 Hilbert 空间上的算子。

## 复化巴拿赫空间

### 定义：复 Banach 空间与其上的有界复线性算子

1. 一个复赋范向量空间是一个复向量空间 $X$，配备了一个范数函数 $X \to \mathbb{R}: x \mapsto \|x\|$，该函数满足赋范空间定义中的条件，并且额外满足
$$
\|\lambda x\| = |\lambda|\, \|x\| \quad \text{对所有 } x \in X \text{ 和所有 } \lambda \in \mathbb{C}。
$$
如果复赋范向量空间 $(X, \|\cdot\|)$ 关于其诱导度量是完备的，则称其为**复巴拿赫空间**。

2. 设 $X$ 和 $Y$ 为复巴拿赫空间，记
$$
\mathcal{L}^c(X,Y) := \left\{ A: X \to Y \mid A \text{ 是复线性且有界的} \right\}
$$
为从 $X$ 到 $Y$ 的有界复线性算子的空间。那么 $\mathcal{L}^c(X,Y)$ 是一个具有算子范数的复巴拿赫空间。当 $X=Y$ 时，我们简记 $\mathcal{L}^c(X) := \mathcal{L}^c(X,X)$。

3. 一个复巴拿赫空间 $X$ 的（复）**对偶空间**是空间
$$
X^* := \mathcal{L}^c(X,\mathbb{C})
$$
由有界复线性泛函 $\Lambda: X \to \mathbb{C}$ 构成。如果 $X$ 和 $Y$ 是复巴拿赫空间，且 $A: X \to Y$ 是一个有界复线性算子，则 $A$ 的（复）**对偶算子**是定义在 $Y^* \to X^*$ 上的有界复线性算子 $A^*$，它由 $A^*y^* := y^* \circ A: X \to \mathbb{C}$ 给出，其中 $y^* \in Y^*$。

### 定理：可复化赋范空间的充要条件

$X$ 复赋范向量空间当且仅当 $X$ 是实赋范向量空间且存在一个线性映射 $J: X \to X$，使得
$$
J^2 = \operatorname{Id}_X
$$
并且
$$
\|\cos(\theta)x + \sin(\theta)Jx\| = \|x\| \quad \text{对所有 } \theta \in \mathbb{R} \text{ 和所有 } x \in X。
$$
如果存在一个 $J: X \to X$ 满足上述两个条件的线性映射，则 $X$ 具有一个唯一的复赋范向量空间结构，使得复数 $\mathrm{i}$ 的乘法由线性算子 $J$ 给出。标量乘法则由公式
$$
(s + \mathrm{i}t)x := sx + tJx \quad \text{对 } s,t \in \mathbb{R} \text{ 和 } x \in X。
$$
给出。在此记号下，从 $X$ 到自身的复线性算子就是一个与 $J$ 可交换的实线性算子。


## 复化空间的构造与性质

设 $X=(X,\|\cdot\|;\mathbb{R})$ 为一个实赋范向量空间（或实巴拿赫空间）。其**复化空间** $X^{\mathbb{C}}$ 可按以下步骤构造：

### 定义（复化空间）

1. **集合与线性结构**：令 $X^{\mathbb{C}} := X \times X$。对任意 $\lambda = a+ib \in \mathbb{C}$ 和 $(x,y) \in X^{\mathbb{C}}$，定义数乘运算为：
   $$
   \lambda(x,y) = (ax - by, \; bx + ay).
   $$
   此定义模拟复数乘法：$(a+ib)(x+iy) = (ax-by) + i(bx+ay)$。在此结构下，$X^{\mathbb{C}}$ 成为一个复向量空间。

2. **实部与虚部**：对于 $z = (x,y) \in X^{\mathbb{C}}$，定义其实部与虚部分别为：
   $$
   \operatorname{Re}z = (x,0), \quad \operatorname{Im}z = (0,y).
   $$
   引入嵌入映射：
   $$
   I: X \to X^{\mathbb{C}}, \quad Ix := (x,0); \qquad i: X \to X^{\mathbb{C}}, \quad ix := (0,x).
   $$
   于是，$X^{\mathbb{C}}$ 可以写成直和形式 $X^{\mathbb{C}} = X \oplus iX$。通常记 $z = x + iy$，其中 $x = \operatorname{Re}z,\ y = \operatorname{Im}z$。

3. **复化范数**：在 $X^{\mathbb{C}}$ 上定义范数为：
   $$
   \|z\|_{X^{\mathbb{C}}} \overset{\text{def}}{=} \sup_{\theta \in [0, 2\pi]} \sqrt{ \|\operatorname{Re}(e^{i\theta}z)\|_X^2 + \|\operatorname{Im}(e^{i\theta}z)\|_X^2 }, \quad \forall z \in X^{\mathbb{C}}.
   $$
   其中，$\operatorname{Re}(e^{i\theta}z)$ 和 $\operatorname{Im}(e^{i\theta}z)$ 分别表示对 $e^{i\theta}z$ 取实部和虚部后得到的 $X$ 中的元素（通过嵌入 $I$ 等同视之），其范数 $\|\cdot\|_X$ 是 $X$ 上的原始范数。

### 命题（复化空间的基本性质）

设 $X$ 为实赋范向量空间，$X^{\mathbb{C}}$ 为其按上述方式构造的复化空间，则：

1. **复赋范空间**：$(X^{\mathbb{C}}, \|\cdot\|_{X^{\mathbb{C}}})$ 构成一个复赋范向量空间。
2. **等距嵌入**：嵌入映射 $I: X \to X^{\mathbb{C}}$ 和 $i: X \to X^{\mathbb{C}}$ 都是等距嵌入，即对任意 $x \in X$，有 $\|Ix\|_{X^{\mathbb{C}}} = \|ix\|_{X^{\mathbb{C}}} = \|x\|_X$。
3. **完备性**：$(X^{\mathbb{C}}, \|\cdot\|_{X^{\mathbb{C}}})$ 是复巴拿赫空间当且仅当 $(X, \|\cdot\|_X)$ 是实巴拿赫空间。
4. **算子的复化**：设 $A: X \to Y$ 为两个实赋范空间之间的有界实线性算子。定义其**复化算子** $A^{\mathbb{C}}: X^{\mathbb{C}} \to Y^{\mathbb{C}}$ 为：
   $$
   A^{\mathbb{C}}(x + iy) \overset{\text{def}}{=} Ax + iAy, \quad \forall x+iy \in X^{\mathbb{C}}.
   $$
   则 $A^{\mathbb{C}}$ 是有界复线性算子当且仅当 $A$ 是有界实线性算子，且它们的算子范数相等：$\|A^{\mathbb{C}}\| = \|A\|$。

### 注记

为实赋范空间 $X$ 的复化空间 $X^{\mathbb{C}}$ 赋予范数的方式不止一种。除了上面定义的 $\|\cdot\|_{X^{\mathbb{C}}}$（有时称为 **L-T 范数**），另一种常见的定义是 **Taylor 范数**：
$$
\|z\|_T \overset{\text{def}}{=} \sup_{t \in [0,2\pi]} \|\operatorname{Re}(e^{it}z)\|_X = \sup_{t \in [0,2\pi]} \|x \cos t - y \sin t\|_X, \quad z = x+iy.
$$
这两种范数（以及其它合理的定义）通常是等价的。具体地，如果 $\|\cdot\|$ 是 $X^{\mathbb{C}}$ 上任意一个满足以下两个条件的范数：
   * $\|x\| = \|x\|_X$ 对任意 $x \in X$（通过嵌入 $I$ 视为 $X^{\mathbb{C}}$ 中元素），
   * $\|x+iy\| = \|x-iy\|$ 对任意 $x, y \in X$，
那么有不等式关系：
$$
\|z\|_T \le \|z\| \le 2\|z\|_T, \quad \forall z \in X^{\mathbb{C}}.
$$
对于 L-T 范数，一个重要的性质是：当 $X=H$ 是一个实希尔伯特空间时，其复化空间 $H^{\mathbb{C}}$ 上的 L-T 范数具有简单的形式：
$$
\|x+iy\|_{X^{\mathbb{C}}}^2 = \|x\|_H^2 + \|y\|_H^2.
$$
更一般地，对于任意实赋范空间 $X$，L-T 范数满足以下估计：
$$
\|\operatorname{Re}z\|_X^2 + \|\operatorname{Im}z\|_X^2 \le \|z\|_{X^{\mathbb{C}}}^2 \le 2\left( \|\operatorname{Re}z\|_X^2 + \|\operatorname{Im}z\|_X^2 \right), \quad \forall z \in X^{\mathbb{C}}.
$$

## 对偶空间的复化

复化构造与对偶运算可以交换，但等距同构性依赖于原空间的性质。

### 命题（对偶空间的复化）

设 $X$ 为实赋范向量空间，则其实对偶空间 $\mathcal{L}(X; \mathbb{R})$ 的复化空间，与 $X$ 的复化空间 $X^{\mathbb{C}}$ 的复对偶空间 $\mathcal{L}^{\mathbb{C}}(X^{\mathbb{C}}; \mathbb{C})$ 是同构的。具体地：

对任意 $\Lambda_1 + i\Lambda_2 \in \left( \mathcal{L}(X; \mathbb{R}) \right)^{\mathbb{C}}$，其中 $\Lambda_1, \Lambda_2 \in \mathcal{L}(X; \mathbb{R})$，定义映射 $\Lambda^{\mathbb{C}}: X^{\mathbb{C}} \to \mathbb{C}$ 如下：
$$
\Lambda^{\mathbb{C}}(x+iy) \overset{\text{def}}{=} \Lambda_1(x) - \Lambda_2(y) + i\left( \Lambda_2(x) + \Lambda_1(y) \right), \quad \forall x+iy \in X^{\mathbb{C}}.
$$
那么，映射
$$
\Phi: \left( \mathcal{L}(X; \mathbb{R}) \right)^{\mathbb{C}} \longrightarrow \mathcal{L}^{\mathbb{C}}(X^{\mathbb{C}}; \mathbb{C}), \quad \Phi(\Lambda_1 + i\Lambda_2) := \Lambda^{\mathbb{C}}
$$
是一个复线性同构。此外：
1. **一般情况**：$\Phi$ 总是线性同构。
2. **希尔伯特空间情形**：若 $X$ 是实希尔伯特空间，则 $\Phi$ 是一个等距同构。
3. **一般巴拿赫空间情形**：对于一般的实巴拿赫空间 $X$，$\Phi$ 可能不是等距的。

### 注记（复线性泛函的实部）

设 $X$ 为复赋范空间（如 $X^{\mathbb{C}}$），$\Lambda \in \mathcal{L}^{\mathbb{C}}(X; \mathbb{C})$ 是一个有界复线性泛函。则其实部 $\operatorname{Re}\Lambda \in \mathcal{L}(X; \mathbb{R})$ 是一个有界实线性泛函。映射
$$
\Phi‘: \mathcal{L}^{\mathbb{C}}(X; \mathbb{C}) \longrightarrow \mathcal{L}(X; \mathbb{R}), \quad \Lambda \mapsto \operatorname{Re}\Lambda
$$
是一个（实线性）等距同构。其逆映射将实线性泛函 $\Lambda_0 \in \mathcal{L}(X; \mathbb{R})$ 映为复线性泛函 $\Lambda(x) = \Lambda_0(x) - i\Lambda_0(ix)$。

这一事实表明，关于实赋范空间对偶理论的结果（如哈恩-巴拿赫定理、对偶算子性质等），可以平行地推广到复赋范空间的情形。

### 例

1. 所有 $n$-元组 $x = (x_1, \dots, x_n)$ 的复数向量空间 $\mathbb{C}^n$ 是一个复巴拿赫空间，其范数为
$$
\|x\|_p := \left( \sum_{i=1}^n |x_i|^p \right)^{1/p}, \quad \|x\|_\infty := \max_{i=1,\dots,n} |x_i|
$$
其中 $1 \le p < \infty$ 且 $x = (x_1, \dots, x_n) \in \mathbb{C}^n$。

2. 对于 $1 \le p < \infty$，序列 $x = (x_i)_{i \in \mathbb{N}}$ 的 $p$-可和复数集合 $\ell^p(\mathbb{N}, \mathbb{C})$ 是一个具有范数
$$
\|x\|_p := \left( \sum_{i=1}^\infty |x_i|^p \right)^{1/p}
$$
的复巴拿赫空间，其中 $x = (x_i)_{i \in \mathbb{N}} \in \ell^p(\mathbb{N}, \mathbb{C})$。类似地，复数有界序列的空间 $\ell^\infty(\mathbb{N}, \mathbb{C})$ 是一个具有范数
$$
\|x\|_\infty := \sup_{i \in \mathbb{N}} |x_i|
$$
的复巴拿赫空间，其中 $x = (x_i)_{i \in \mathbb{N}} \in \ell^\infty(\mathbb{N}, \mathbb{C})$。

3. 设 $(M, \mathcal{A}, \mu)$ 为一个测度空间，固定常数 $1 \le p < \infty$，并记 $\mathcal{L}^p(\mu, \mathbb{C})$ 为 $M$ 上 $p$-可积复值函数的空间。函数
$$
\mathcal{L}^p(\mu, \mathbb{C}) \to \mathbb{R}: f \mapsto \|f\|_p := \left( \int_M |f|^p \, d\mu \right)^{1/p}
$$
下降到商空间
$$
L^p(\mu, \mathbb{C}) := \mathcal{L}^p(\mu, \mathbb{C}) / {\sim},
$$
其中 $f \sim g$ 当且仅当函数 $f-g$ 几乎处处为零。这个商空间是一个复巴拿赫空间。

4. 设 $(M, \mathcal{A}, \mu)$ 为一个测度空间，记 $\mathcal{L}^\infty(\mu, \mathbb{C})$ 为从 $M$ 到 $\mathbb{C}$ 的复值有界可测函数 $f: M \to \mathbb{C}$ 的空间。如同前一部分一样，记 $\sim$ 为 $\mathcal{L}^\infty(\mu, \mathbb{C})$ 上由几乎处处相等给出的等价关系。则商空间
$$
L^\infty(\mu, \mathbb{C}) := \mathcal{L}^\infty(\mu, \mathbb{C}) / {\sim}
$$
是一个复巴拿赫空间，其范数由上确界范数定义。

5. 设 $M$ 为一个紧拓扑空间。则从 $M$ 到 $\mathbb{C}$ 的有界连续函数 $f: M \to \mathbb{C}$ 的空间 $C(M, \mathbb{C})$ 是一个具有上确界范数
$$
\|f\|_\infty := \sup_{p \in M} |f(p)|
$$
的复巴拿赫空间，其中 $f \in C(M, \mathbb{C})$。

6. 设 $(M, \mathcal{A})$ 为一个可测空间，即 $M$ 是一个集合，$\mathcal{A} \subset 2^M$ 是一个 $\sigma$-代数。$(M, \mathcal{A})$ 上的一个**复测度**是一个函数
$$
\mu: \mathcal{A} \to \mathbb{C}
$$
满足 $\mu(\emptyset) = 0$ 且是 $\sigma$-可加的，即
$$
\mu\left( \bigcup_{i=1}^\infty A_i \right) = \sum_{i=1}^\infty \mu(A_i) = \lim_{n \to \infty} \sum_{i=1}^n \mu(A_i)
$$
对于任意一列互不相交的可测集 $A_i \in \mathcal{A}$。空间
$$
\mathcal{M}(M, \mathcal{A}, \mathbb{C}) := \left\{ \mu: \mathcal{A} \to \mathbb{C} \mid \mu \text{ 是一个复测度} \right\}
$$
是 $(M, \mathcal{A})$ 上复测度的巴拿赫空间，其范数由
$$
\|\mu\| := \sup \left\{ \sum_{i=1}^n |\mu(A_i)| \;\middle|\; \begin{array}{l} n \in \mathbb{N}, \, A_1, \dots, A_n \in \mathcal{A}, \\ A_i \cap A_j = \emptyset \text{ for } i \ne j, \\ \bigcup_{i=1}^n A_i = M \end{array} \right\}
$$
给出，其中 $\mu \in \mathcal{M}(M, \mathcal{A}, \mathbb{C})$。
