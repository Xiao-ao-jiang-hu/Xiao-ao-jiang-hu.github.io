---
title: Ch 4.3 Fredholm 算子
tags:
  - math
  - functional analysis
categories:
  - math
  - functional analysis
index_img: /img/fa.jpg
banner_img: /img/fa.jpg
excerpt: 泛函分析课程笔记
abbrlink: 6d93cfe8
date: 2025-12-09 14:17:47
---
# Fredholm 算子
## 动机
考虑 $A \in \mathcal{M}_{m,n}(\mathbb{R}) : \mathbb{R}^n \mapsto \mathbb{R}^m$. $\ker(A) \overset{\text{定义}}{=} \{x \in \mathbb{R}^n \mid Ax = 0\}$. $\operatorname{coker}(A) = \mathbb{R}^m / \operatorname{Ran}(A)$.

$a \overset{\text{定义}}{=} \dim \ker(A)$. $\longleftrightarrow$ $a$ 表明 $Ax=0$ 解集合的自由度 $\longleftrightarrow$ $a$ 表明映射 $A$ 的“单射”情况

$b \overset{\text{定义}}{=} \dim \operatorname{coker}(A)$ $\longleftrightarrow$ $b$ 表明 $Ax=y$ 可解性的相容性条件. 由 H-B 定理知, 存在 $f_1, \cdots, f_b \in X^*$ s.t. $f_i \big|_{\operatorname{Ran}(A)} = 0$ 且 $\operatorname{Ran}(A)^\perp = \operatorname{span}\{f_1, \cdots, f_b\} (\cong \ker(A^T))$ ($\mathbb{R}^m = \operatorname{Ran}(A) \oplus \ker(A^T)$)

因此, $y \in \operatorname{Ran}(A) \Leftrightarrow \forall i \leq b$, $f_i(y) = 0$.

$\longleftrightarrow$ $b$ 表明映射 $A$ 的“满射”情况

记 $L \overset{\text{定义}}{=} a - b$. $\Rightarrow$ $\begin{cases} L > 0 \; (\Leftrightarrow b < a) \text{ 即映射 } A \text{ 更接近满射} \\ L < 0 \; (\Leftrightarrow b > a) \text{ 即映射 } A \text{ 更接近单射} \\ L = 0 \; (\Leftrightarrow b = a) \text{ 即“接近单射”或“满射”相当}. \end{cases}$

回到 $A: \mathbb{R}^n \mapsto \mathbb{R}^m$.

$$L = \dim \ker(A) - \dim(\mathbb{R}^m / \operatorname{Ran}(A))= \dim \ker(A) + \dim \operatorname{Ran}(A) - m = n - m$$

因此, $$\begin{cases} A \in \mathcal{M}_{m,m} \; (m=n) \quad \Leftrightarrow \text{ 二择一定理成立, 即} \begin{cases} \text{要么 } Ax=0 \text{ 有非零解} \\ \text{要么 } \forall y \in Y, \; Ax=y \text{ 有解}. \end{cases} \\ A \in \mathcal{M}_{m,n} \; (m < n) \Rightarrow L > 0 \Rightarrow \text{将高维映射到低维. 此时, 更接近“满射”} \\ A \in \mathcal{M}_{m,n} \; (m > n) \Rightarrow L < 0 \Leftrightarrow \text{将低维嵌入高维}, \text{更接近“单射”}. \end{cases}$$

为了将这样的线性映射性质从有限维推广至无限维, 引入 Fredholm 算子.

## 定义：三个空间
设 $X$ 和 $Y$ 是实 Banach 空间，令 $A: X \to Y$ 为一个有界线性算子。$A$ 的**核 (kernel)**、**像 (image)** 和**余核 (cokernel)** 定义为
$$
\ker(A) := \{ x \in X \mid Ax = 0 \}, \\ \mathrm{im}(A) := \{ Ax \mid x \in X \}, \\ \mathrm{coker}(A) := Y / \mathrm{im}(A).
$$
如果 $A$ 的像是 $Y$ 的一个闭子空间，则余核是一个具有商范数的 Banach 空间。

## Fredholm 算子的定义

设 $X$ 和 $Y$ 是实 Banach 空间，令 $A: X \to Y$ 为一个有界线性算子。若 $A$ 具有闭像且其核与余核均为有限维，则称 $A$ 为 **Fredholm 算子**。若 $A$ 是 Fredholm 算子，则其核与余核的维数之差称为 $A$ 的 **Fredholm 指标 (Fredholm index)**，记作
$$
\mathrm{index}(A) := \dim \ker(A) - \dim \mathrm{coker}(A).
$$

条件“$A$ 的像是闭的”在 Fredholm 算子的定义中实际上是冗余的。当余核是有限维时，该条件必然成立。换句话说，虽然任何无限维的 Banach 空间 $Y$ 都存在不闭的线性子空间 $Z \subset Y$ 且商空间 $Y/Z$ 是有限维的，但这样的子空间永远不可能是有界线性算子在取值于 $Y$ 的 Banach 空间上的像。

## 有限余核蕴含闭像的引理

设 $X$ 和 $Y$ 是 Banach 空间，令 $A: X \to Y$ 为一个具有有限维余核的有界线性算子。则 $A$ 的像是 $Y$ 的一个闭子空间。

### 证明

令 $m := \dim \mathrm{coker}(A)$，并选择向量 $y_1, \dots, y_m \in Y$，使得等价类
$$
[y_i] := y_i + \mathrm{im}(A) \in Y/\mathrm{im}(A), \quad i=1,\dots,m,
$$
构成 $A$ 的余核的一组基。定义
$$
\widetilde{X} := X \times \mathbb{R}^m, \quad \| (x, \lambda) \|_{\widetilde{X}} := \|x\|_X + \|\lambda\|_{\mathbb{R}^m}
$$
对于 $x \in X$ 和 $\lambda = (\lambda_1, \dots, \lambda_m) \in \mathbb{R}^m$。则 $\widetilde{X}$ 是一个 Banach 空间。定义线性算子 $\widetilde{A}: \widetilde{X} \to Y$ 为
$$
\widetilde{A}(x, \lambda) := Ax + \sum_{i=1}^m \lambda_i y_i.
$$
则 $\widetilde{A}$ 是一个满射的有界线性算子，且
$$
\ker(\widetilde{A}) = \{ (x, \lambda) \in X \times \mathbb{R}^m \mid Ax = 0, \lambda = 0 \} = \ker(A) \times \{0\}.
$$

由于 $\widetilde{A}$ 是满射的，由开映射定理的推论可知，存在常数 $c > 0$ 使得
$$
\inf_{\xi \in \ker(A)} \| x + \xi \|_X + \| \lambda \|_{\mathbb{R}^m} \le c \left\| Ax + \sum_{i=1}^m \lambda_i y_i \right\|_Y
$$
对所有 $x \in X$ 和所有 $\lambda \in \mathbb{R}^m$ 成立。令 $\lambda = 0$ 得到不等式
$$
\inf_{\xi \in \ker(A)} \| x + \xi \|_X \le c \|Ax\|_Y \quad \text{对所有 } x \in X.
$$
因此，由对偶算子的闭图像定理可知 $A$ 具有闭像。这证明了有限余核蕴含闭像的引理。

## Fredholm 算子的对偶性定理

设 $X$ 和 $Y$ 是 Banach 空间，令 $A \in \mathcal{L}(X,Y)$。则以下结论成立。

1. 若 $A$ 和 $A^*$ 均具有闭像，则
$$
\dim \ker(A^*) = \dim \mathrm{coker}(A), \quad \dim \mathrm{coker}(A^*) = \dim \ker(A).
$$

2. $A$ 是 Fredholm 算子当且仅当 $A^*$ 是 Fredholm 算子。

3. 若 $A$ 是 Fredholm 算子，则 $\mathrm{index}(A^*) = -\mathrm{index}(A)$。

### 证明

假设 $A$ 和 $A^*$ 均具有闭像。则由正交补关系可得
$$
\mathrm{im}(A^*) = \ker(A)^\perp, \quad \ker(A^*) = \mathrm{im}(A)^\perp.
$$
因此，由对偶空间的商空间同构性质可知，线性子空间 $\ker(A) \subset X$ 和商空间 $\mathrm{coker}(A) = Y/\mathrm{im}(A)$ 的对偶空间同构于
$$
(\ker(A))^* \cong X^*/\ker(A)^\perp = X^*/\mathrm{im}(A^*) = \mathrm{coker}(A^*),
$$
$$
(\mathrm{coker}(A))^* = (Y/\mathrm{im}(A))^* \cong \mathrm{im}(A)^\perp = \ker(A^*).
$$
这证明了第 1 部分。第 2 和 3 部分直接由第 1 部分和闭像判别准则得出。这证明了 Fredholm 算子的对偶性定理。

### 有限维空间上的线性算子例子

若 $X$ 和 $Y$ 是有限维的，则每个线性算子 $A: X \to Y$ 都是 Fredholm 算子，且 $\mathrm{index}(A) = \dim X - \dim Y$。

### 双射有界线性算子的例子

Banach 空间之间每个双射的有界线性算子都是指标为零的 Fredholm 算子。

### 移位算子的例子

考虑 Banach 空间 $X = \ell^p$，其中 $1 \le p \le \infty$，并令 $k \in \mathbb{N}$。定义线性算子 $A_k, A_{-k}: \ell^p \to \ell^p$ 为
$$
A_k x := (x_{k+1}, x_{k+2}, x_{k+3}, \dots), \quad \text{对于 } x = (x_i)_{i \in \mathbb{N}} \in \ell^p,
$$
$$
A_{-k} x := (0, \dots, 0, x_1, x_2, x_3, \dots)
$$
其中，在 $A_{-k}$ 的公式中，$x_1$ 前面有 $k$ 个零。这些是指标分别为 $\mathrm{index}(A_k) = k$ 和 $\mathrm{index}(A_{-k}) = -k$ 的 Fredholm 算子。

### 直和扰动的例子

设 $X, Y, Z$ 是 Banach 空间，令 $A: X \to Y$ 和 $\Phi: Z \to Y$ 为有界线性算子。定义有界线性算子 $A \oplus \Phi: X \oplus Z \to Y$ 为
$$
(A \oplus \Phi)(x, z) := Ax + \Phi z.
$$
若 $A$ 是 Fredholm 算子且 $\dim Z < \infty$，则 $A \oplus \Phi$ 是 Fredholm 算子，且 $\mathrm{index}(A \oplus \Phi) = \mathrm{index}(A) + \dim Z$。（请证明！）

下一个定理将 Fredholm 算子刻画为模紧算子可逆的算子。Fredholm 与紧算子的等价刻画定理的证明依赖于以下引理。该引理也部分回答了一个重要问题：如何识别给定的算子是否为 Fredholm。它刻画了具有闭像和有限维核的有界线性算子，并且是建立许多微分算子 Fredholm 性质的关键工具。

## 主 Fredholm 引理

设 $X$ 和 $Y$ 是 Banach 空间，令 $D: X \to Y$ 为一个有界线性算子。则下列条件等价：

1. $D$ 具有有限维核和闭像。

2. 存在一个 Banach 空间 $Z$，一个紧算子 $K: X \to Z$，以及一个常数 $c > 0$，使得
$$
\|x\|_X \le c (\|Dx\|_Y + \|Kx\|_Z)
$$
对所有 $x \in X$ 成立。

### 证明

我们证明 (1) 蕴含 (2)。因此假设 $D$ 具有有限维核和闭像。令 $m := \dim \ker(D)$，并选择 $\ker(D)$ 的一组基 $x_1, \dots, x_m$。由 Hahn-Banach 定理，存在有界线性泛函 $x_1^*, \dots, x_n^* \in X^*$，使得
$$
\langle x_i^*, x_j \rangle = \delta_{ij} = \begin{cases} 1, & \text{若 } i=j, \\ 0, & \text{若 } i \ne j, \end{cases} \quad \text{对于 } i,j=1,\dots,m.
$$

定义有界线性算子 $K: X \to Z := \ker(D)$ 为
$$
Kx := \sum_{i=1}^m \langle x_i^*, x \rangle x_i.
$$
则 $K$ 是一个紧算子（有限秩算子必为紧算子）。此外，限制映射 $K|_{\ker(D)}: \ker(D) \to Z$ 是恒等映射，因此是双射。故算子 $X \to Y \times Z: x \mapsto (Dx, Kx)$ 是单射，且其像 $\mathrm{im}(D) \times Z$ 是 $Y \times Z$ 的一个闭子空间。因此，由闭图像定理的推论可知，存在常数 $c > 0$ 使得上述不等式成立。

我们证明 (2) 蕴含 (1)。假设 $D$ 满足 (2)，并令 $K: X \to Z$ 和 $c > 0$ 如 (2) 中所示。我们分三步证明 $D$ 满足 (1)。

**步骤 1.** $\ker(D)$ 中的每个有界序列都有一个收敛子序列。

令 $(x_n)_{n \in \mathbb{N}}$ 为 $\ker(D)$ 中的一个有界序列。由于 $K$ 是紧算子，存在子序列 $(x_{n_i})_{i \in \mathbb{N}}$，使得 $(Kx_{n_i})_{i \in \mathbb{N}}$ 是 $Z$ 中的 Cauchy 序列。由于对所有 $i \in \mathbb{N}$ 有 $Dx_{n_i} = 0$，由上述不等式可知，对所有 $i,j \in \mathbb{N}$ 有 $\|x_{n_i} - x_{n_j}\|_X \le c \|Kx_{n_i} - Kx_{n_j}\|_Z$。因此 $(x_{n_i})_{i \in \mathbb{N}}$ 是一个 Cauchy 序列，故在完备空间 $X$ 中收敛。极限 $x := \lim_{i \to \infty} x_{n_i}$ 属于 $D$ 的核，这证明了步骤 1。

**步骤 2.** 存在一个常数 $C > 0$，使得
$$
\inf_{\xi \in \ker(D)} \|x + \xi\|_X \le C \|Dx\|_Y \quad \text{对所有 } x \in X.
$$

反设不存在这样的常数 $C > 0$ 使得上述不等式成立。则由可数选择公理可知，存在序列 $(x_n)_{n \in \mathbb{N}}$ 在 $X$ 中，使得
$$
\inf_{\xi \in \ker(D)} \|x_n + \xi\|_X > n \|Dx_n\|_Y \quad \text{对所有 } n \in \mathbb{N}.
$$
通过将每个元素 $x_n$ 乘以适当的常数并在必要时加上核中的一个元素，我们可以假设
$$
\inf_{\xi \in \ker(D)} \|x_n + \xi\|_X = 1, \quad 1 \le \|x_n\| \le 2 \quad \text{对所有 } n \in \mathbb{N}.
$$
则由上述两式可得 $\|Dx_n\|_Y < 1/n$，所以 $\lim_{n \to \infty} Dx_n = 0$。此外，由于 $K$ 是紧算子，存在子序列 $(x_{n_i})_{i \in \mathbb{N}}$，使得 $(Kx_{n_i})_{i \in \mathbb{N}}$ 是 $Z$ 中的 Cauchy 序列。由于 $(Dx_{n_i})_{i \in \mathbb{N}}$ 和 $(Kx_{n_i})_{i \in \mathbb{N}}$ 都是 Cauchy 序列，由前述不等式可知 $(x_{n_i})_{i \in \mathbb{N}}$ 是 $X$ 中的 Cauchy 序列。该序列在完备空间 $X$ 中收敛。定义 $x := \lim_{i \to \infty} x_{n_i}$。则 $Dx = \lim_{i \to \infty} x_{n_i} = 0$，因此由归一化条件，
$$
1 = \inf_{\xi \in \ker(D)} \|x_{n_i} + \xi\|_X \le \|x_{n_i} - x\|_X \quad \text{对所有 } i \in \mathbb{N}.
$$
由于 $\lim_{i \to \infty} \|x_{n_i} - x\|_X = 0$，这是一个矛盾。这证明了步骤 2。

**步骤 3.** $D$ 满足 (1)。

由步骤 1 和有限维子空间的紧性可知 $\dim \ker(D) < \infty$。由步骤 2 和闭像判别准则可知，算子 $D: X \to Y$ 具有闭像。这证明了步骤 3 和主 Fredholm 引理。


## Fredholm 与紧算子的等价刻画定理

设 $X$ 和 $Y$ 是 Banach 空间，令 $A: X \to Y$ 为一个有界线性算子。则下列条件等价：

1. $A$ 是 Fredholm 算子。

2. 存在一个有界线性算子 $F: X \to Y$，使得算子 $\mathbb{I}_X - FA: X \to X$ 和 $\mathbb{I}_Y - AF: Y \to Y$ 是紧算子。

### 证明
我们证明 (1) 蕴含 (2)。因此假设 $A: X \to Y$ 是 Fredholm 算子，并定义
$$
X_0 := \ker(A), \quad Y_1 := \mathrm{im}(A).
$$
则由 Banach 空间的直和分解定理，存在闭线性子空间
$$
X_1 \subset X, \quad Y_0 \subset Y
$$
使得
$$
X = X_0 \oplus X_1, \quad Y = Y_0 \oplus Y_1.
$$
这意味着有界线性算子
$$
A_1 := A|_{X_1}: X_1 \to Y_1
$$
是双射的。因此，由逆算子定理，$A_1^{-1}: Y_1 \to X_1$ 是有界的。定义有界线性算子 $F: Y \to X$ 为
$$
F(y_0 + y_1) := A_1^{-1} y_1 \quad \text{对于 } y_0 \in Y_0 \text{ 和 } y_1 \in Y_1.
$$
则 $AF(y_0 + y_1) = y_1$ 且 $FA(x_0 + x_1) = x_1$，因此
$$
(\mathbb{I}_Y - AF)(y_0 + y_1) = y_0, \quad (\mathbb{I}_X - FA)(x_0 + x_1) = x_0
$$
对所有 $x_0 \in X_0$, $x_1 \in X_1$, $y_0 \in Y_0$, $y_1 \in Y_1$ 成立。由于 $X_0$ 和 $Y_0$ 是有限维的，算子 $\mathbb{I}_Y - AF$ 和 $\mathbb{I}_X - FA$ 具有有限秩，因此是紧算子（有限秩算子必为紧算子）。

我们证明 (2) 蕴含 (1)。因此假设存在一个有界线性算子 $F: Y \to X$，使得算子 $K := \mathbb{I}_X - FA: X \to X$ 和 $L := \mathbb{I}_Y - AF: Y \to Y$ 是紧算子。则
$$
\|x\|_X = \|FAx + Kx\|_X \le c (\|Ax\|_Y + \|Kx\|_X)
$$
对所有 $x \in X$ 成立，其中 $c := \max\{1, \|F\|\}$。因此，由主 Fredholm 引理可知，$A$ 具有有限维核和闭像。此外，由紧算子的对偶仍是紧算子可知，$L^*: Y^* \to Y^*$ 是一个紧算子，且
$$
\|y^*\|_{Y^*} = \|F^*A^*y^* + L^*y^*\|_{Y^*} \le c (\|A^*y^*\|_{Y^*} + \|L^*y^*\|_{Y^*})
$$
对所有 $y^* \in Y^*$ 成立。因此，由主 Fredholm 引理可知，$A^*$ 具有有限维核，故由 Fredholm 算子的对偶性定理可知，$A$ 具有有限维余核。这证明了 Fredholm 与紧算子的等价刻画定理。