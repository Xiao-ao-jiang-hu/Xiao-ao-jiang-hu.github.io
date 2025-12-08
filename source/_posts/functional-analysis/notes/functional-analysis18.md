---
title: Ch 4.2 紧算子
tags:
  - math
  - functional analysis
categories:
  - math
  - functional analysis
index_img: /img/fa.jpg
banner_img: /img/fa.jpg
excerpt: 泛函分析课程笔记
abbrlink: 8ceccf57
date: 2025-12-04 09:59:15
---
在有界线性算子的研究中，最重要的概念之一是紧算子。紧算子的概念可以通过几种等价的方式定义。这些条件的等价性是以下引理的内容。

## 引理(紧算子的等价条件)

设 $X$ 和 $Y$ 为 Banach 空间，且令 $K: X \to Y$ 为一个有界线性算子。则以下条件等价：

1. 若 $(x_n)_{n\in\mathbb{N}}$ 是 $X$ 中的一个有界序列，则序列 $(Kx_n)_{n\in\mathbb{N}}$ 有一个 Cauchy 子列。
2. 若 $S \subset X$ 是一个有界集，则集合 $K(S) := \{ Kx \mid x \in S \}$ 具有紧闭包。
3. 集合 $\overline{\{ Kx \mid x \in X, \|x\|_X \le 1 \}}$ 是 $Y$ 的一个紧子集。

!!! note 紧算子
    有界集合在紧算子下的像具有紧闭包。这类似于有限维空间中有界集合的性质。

### 证明

我们证明 (i) 蕴含 (ii)。因此假设 $K$ 满足 (i)，并令 $S \subset X$ 为一个有界集。则 $K(S)$ 中的每个序列都有一个 Cauchy 子列（由 (i)）。由于 $Y$ 是完备的，根据度量空间中紧等价于列紧，$\overline{K(S)}$ 是 $Y$ 的一个紧子集。

(ii) 蕴含 (iii) 是显然的。

我们证明 (iii) 蕴含 (i)。令 $(x_n)_{n\in\mathbb{N}}$ 为一个有界序列，并选择 $c > 0$ 使得 $\|x_n\|_X \le c$ 对所有 $n \in \mathbb{N}$ 成立。则 $(c^{-1} Kx_n)_{n\in\mathbb{N}}$ 有一个收敛子列 $(c^{-1} Kx_{n_i})_{i\in\mathbb{N}}$（由 (iii)）。因此 $(Kx_{n_i})_{i\in\mathbb{N}}$ 是所要求的 Cauchy 子列。这证明了该引理。

## 定义(紧算子)
1. $X, Y$是Banach空间，$K \in \mathcal{L}(X,Y)$。如果$K$满足上引理中的任一等价条件，则称$K$为从$X$到$Y$的紧算子。紧算子的集合记为 $\mathcal{K}(X,Y)$。
2. 称$K$是有限秩算子，如果$K(X)$是$Y$的一个有限维子空间。有限秩算子的集合记为 $\mathcal{F}(X,Y)$。
3. 称$K$是完全连续算子，如果对于每个弱收敛序列 $(x_n)_{n\in\mathbb{N}} \rightharpoonup x$，都有 $(Kx_n)_{n\in\mathbb{N}} \to Kx$ 强收敛。

## 引理(紧算子与完全连续算子的等价性)
设 $X$ 和 $Y$ 为 Banach 空间。则以下成立：

1. 每个紧算子 $K: X \to Y$ 是完全连续的。
2. 假设 $X$ 是自反的。则一个有界线性算子 $K: X \to Y$ 是紧的当且仅当它是完全连续的。

### 证明

我们证明第 (i) 部分。假设 $K$ 是紧的，令 $(x_n)_{n\in\mathbb{N}}$ 为 $X$ 中一个弱收敛到 $x \in X$ 的序列。假设，通过反证法，序列 $(Kx_n)_{n\in\mathbb{N}}$ 在范数拓扑下不收敛到 $Kx$。则存在 $\varepsilon > 0$ 和一个子列 $(x_{n_i})_{i\in\mathbb{N}}$ 使得
$$
\|Kx - Kx_{n_i}\|_Y \ge \varepsilon \quad \text{对所有 } i \in \mathbb{N}. \tag{1}
$$
由于序列 $(x_{n_i})_{i\in\mathbb{N}}$ 弱收敛，它由一致有界性定理(在$X^{**}$上)可知是有界的。由于 $K$ 是紧的，存在一个进一步的子列 $(x_{n_{i_k}})_{k\in\mathbb{N}}$ 使得序列 $(Kx_{n_{i_k}})_{k\in\mathbb{N}}$ 在 $Y$ 中强收敛到某个元素 $y$。这意味着
$$
\langle y^*, y \rangle = \lim_{k\to\infty} \langle y^*, Kx_{n_{i_k}} \rangle = \lim_{k\to\infty} \langle K^* y^*, x_{n_{i_k}} \rangle = \langle K^* y^*, x \rangle = \langle y^*, Kx \rangle
$$
对所有 $y^* \in Y^*$ 成立。因此 $y = Kx$（由 Hahn-Banach 定理），从而
$$
\lim_{k\to\infty} \|Kx_{n_{i_k}} - Kx\|_Y = 0,
$$
这与 (1) 矛盾。这证明了第 (i) 部分。

我们证明第 (ii) 部分。假设 $X$ 是自反的且 $K$ 是完全连续的。令 $(x_n)_{n\in\mathbb{N}}$ 为 $X$ 中的一个有界序列。由于 $X$ 是自反的，存在一个弱收敛子列 $(x_{n_i})_{i\in\mathbb{N}}$（由 E-S 定理）。令 $x \in X$ 为该子列的极限。由于 $K$ 是完全连续的，序列 $(Kx_{n_i})_{i\in\mathbb{N}}$ 强收敛到 $Kx$。因此 $K$ 满足前述引理中的条件 (i)，故是紧的。这证明了引理。

> $X$ 是自反的空间这一假设不可移除。例如，在 $\ell^1$ 中，一个序列弱收敛当且仅当它强收敛。因此恒等算子 $\mathrm{id}: \ell^1 \to \ell^1$ 是完全连续的。然而，它不是一个紧算子（由相关定理）。

> 有限秩算子总是紧的

> 引理中的闭包不可以移除. 令 $X := C^1([0,1])$, $Y := C([0,1])$，并令 $K: X \to Y$ 为自然包含映射。则闭单位球在 $K$ 下的像在 $C([0,1])$ 中是一个有界等度连续子集，因此由 Arzelà–Ascoli 定理可知它具有紧闭包。故 $K$ 是紧的。然而，单位球在 $K$ 下的像并不是 $C([0,1])$ 中的一个闭子集. 我们使用反证法. 假设 $\{ \|f\|_{C^1} \leq q \}$ 是 $C([0,1])$ 中的闭子集。由闭像集定理可知，存在 $c > 0$ 使得对于所有 $f \in C^1([0,1])$，都有 $\|f\|_{C^1} \leq c \|f\|_{C}$. 现在考虑函数序列 $(f_n)_{n\in\mathbb{N}}$，其中 $f_n(x) := \sin(nx)$。显然，$\|f_n\|_{C} = 1$ 对所有 $n \in \mathbb{N}$ 成立。然而，$\|f_n\|_{C^1} = \sqrt{1 + n^2}$，这与上述不等式矛盾。因此，闭包在定义中是必要的。


## 定理（紧算子）
设 $X, Y, Z$ 为 Banach 空间。则以下成立：

1. 设 $A: X \to Y$ 和 $B: Y \to Z$ 为有界线性算子，且假设 $A$ 是紧的或 $B$ 是紧的。则复合算子 $BA: X \to Z$ 是紧的。
2. 设 $K_i: X \to Y$ 为一列紧算子，它在算子范数拓扑下收敛到一个有界线性算子 $K: X \to Y$。则 $K$ 是紧的。
3. 设 $K: X \to Y$ 为一个有界线性算子，并令 $K^*: Y^* \to X^*$ 为其对偶算子。则 $K$ 是紧的当且仅当 $K^*$ 是紧的。

!!! note 动机
    希望计算无穷维矩阵的特征值时，紧算子起着类似于有限维情形中矩阵的作用。希望有限矩阵当n趋于无穷时，某种意义下的极限仍然保留有限矩阵的一些性质。紧算子正是满足这些性质的算子。

### 证明

我们证明第 (i) 部分。令 $(x_n)_{n\in\mathbb{N}}$ 为 $X$ 中的一个有界序列。若 $A$ 是紧的，则存在子列 $(x_{n_k})_{k\in\mathbb{N}}$ 使得序列 $(Ax_{n_k})_{k\in\mathbb{N}}$ 收敛，因此序列 $(BAx_{n_k})_{k\in\mathbb{N}}$ 也收敛。若 $B$ 是紧的，则由于序列 $(Ax_n)_{n\in\mathbb{N}}$ 是有界的，存在子列 $(x_{n_k})_{k\in\mathbb{N}}$ 使得序列 $(BAx_{n_k})_{k\in\mathbb{N}}$ 收敛。这证明了第 (i) 部分。

我们证明第 (ii) 部分。令 $(x_n)_{n\in\mathbb{N}}$ 为 $X$ 中的一个有界序列。则标准对角子列论证表明序列 $(Kx_n)_{n\in\mathbb{N}}$ 有一个收敛子列。更精确地说，由于 $K_1$ 是紧的，存在子列 $(x_{n_{1,k}})_{k\in\mathbb{N}}$ 使得序列 $(K_1 x_{n_{1,k}})_{k\in\mathbb{N}}$ 在 $Y$ 中收敛。由于 $K_2$ 是紧的，存在进一步的子列 $(x_{n_{2,k}})_{k\in\mathbb{N}}$ 使得序列 $(K_2 x_{n_{2,k}})_{k\in\mathbb{N}}$ 在 $Y$ 中收敛。继续归纳并使用依赖选择公理，找到一系列子列 $(x_{n_{i,k}})_{k\in\mathbb{N}}$，使得对于每个 $i \in \mathbb{N}$，序列 $(x_{n_{i+1,k}})_{k\in\mathbb{N}}$ 是 $(x_{n_{i,k}})_{k\in\mathbb{N}}$ 的子列，且序列 $(K_i x_{n_{i,k}})_{k\in\mathbb{N}}$ 在 $Y$ 中收敛。现在考虑对角子列
$$
x_{n_k} := x_{n_{k,k}} \quad \text{对于 } k \in \mathbb{N}.
$$
则对于每个 $i \in \mathbb{N}$，序列 $(K_i x_{n_k})_{k\in\mathbb{N}}$ 在 $Y$ 中收敛。我们证明序列 $(K x_{n_k})_{k\in\mathbb{N}}$ 也收敛。为此，选择常数 $c > 0$ 使得
$$
\|x_n\|_X \le c \quad \text{对所有 } n \in \mathbb{N}.
$$
固定常数 $\varepsilon > 0$。则存在正整数 $i$ 使得
$$
\|K - K_i\| < \frac{\varepsilon}{3c}.
$$
由于序列 $(K_i x_{n_k})_{k\in\mathbb{N}}$ 收敛，存在正整数 $k_0$ 使得对所有 $k, \ell \in \mathbb{N}$ 满足
$$
k, \ell \ge k_0 \quad \Longrightarrow \quad \|K_i x_{n_k} - K_i x_{n_\ell}\|_Y < \frac{\varepsilon}{3}.
$$
这意味着
$$
\begin{aligned}
\|K x_{n_k} - K x_{n_\ell}\|_Y &\le \|K x_{n_k} - K_i x_{n_k}\|_Y + \|K_i x_{n_k} - K_i x_{n_\ell}\|_Y + \|K_i x_{n_\ell} - K x_{n_\ell}\|_Y \\
&\le \|K - K_i\| \, \|x_{n_k}\|_X + \|K_i x_{n_k} - K_i x_{n_\ell}\|_Y + \|K_i - K\| \, \|x_{n_\ell}\|_X \\
&\le 2c \|K - K_i\| + \|K_i x_{n_k} - K_i x_{n_\ell}\|_Y \\
&< \varepsilon
\end{aligned}
$$
对所有整数对 $k, \ell \ge k_0$ 成立。因此 $(K x_{n_k})_{k\in\mathbb{N}}$ 是 $Y$ 中的一个 Cauchy 序列，故收敛（因为 $Y$ 是完备的）。这表明 $K$ 是紧的，从而完成了第 (ii) 部分的证明。

我们证明第 (iii) 部分。首先假设 $K: X \to Y$ 是一个紧算子。则集合
$$
M := \overline{ \{ Kx \mid \|x\|_X \le 1 \} } \subset Y
$$
是一个具有由 $Y$ 上范数确定的距离函数的紧度量空间。对于每个 $y^* \in Y^*$，考虑连续实值函数
$$
f_{y^*} := y^*|_M : M \to \mathbb{R}.
$$
定义集合 $\mathcal{F} \subset C(M)$ 为
$$
\mathcal{F} := \left\{ f_{y^*} \mid y^* \in Y^*, \|y^*\|_{Y^*} \le 1 \right\}.
$$
对于每个满足 $\|y^*\|_{Y^*} \le 1$ 的 $y^* \in Y^*$，$f_{y^*}$ 的上确界范数由下式给出：
$$
\begin{aligned}
\|f_{y^*}\| &= \sup_{y \in M} |\langle y^*, y \rangle| \\
&= \sup_{x \in X, \|x\|_X \le 1} |\langle y^*, Kx \rangle| \\
&= \sup_{x \in X, \|x\|_X \le 1} |\langle K^* y^*, x \rangle| \\
&= \|K^* y^*\|_{X^*}. 
\end{aligned}
\tag{1}
$$
因此 $\|f\| \le \|K^*\| = \|K\|$ 对所有 $f \in \mathcal{F}$ 成立，所以 $\mathcal{F}$ 是 $C(M)$ 的一个有界子集。此外，集合 $\mathcal{F}$ 是等度连续的，因为
$$
\begin{aligned}
|f_{y^*}(y) - f_{y^*}(y')| &= |\langle y^*, y - y' \rangle| \\
&\le \|y^*\|_{Y^*} \cdot \|y - y'\|_Y \\
&\le \|y - y'\|_Y
\end{aligned}
$$
对所有满足 $\|y^*\|_{Y^*} \le 1$ 的 $y^* \in Y^*$ 以及所有 $y, y' \in M$ 成立。由于 $M$ 是一个紧度量空间，由 Arzelà–Ascoli 定理可知 $\mathcal{F}$ 具有紧闭包。这意味着算子 $K^*$ 是紧的。为了看到这一点，令 $(y_n^*)_{n\in\mathbb{N}}$ 为 $Y^*$ 中的一个序列，使得对所有 $n \in \mathbb{N}$ 有 $\|y_n^*\|_{Y^*} \le 1$。则序列 $(f_{y_n^*})_{n\in\mathbb{N}}$ 在 $\mathcal{F}$ 中有一个一致收敛子列 $(f_{y_{n_i}^*})_{i\in\mathbb{N}}$。因此由 (1) 可知 $(K^* y_{n_i}^*)_{i\in\mathbb{N}}$ 是 $X^*$ 中的一个 Cauchy 序列，故收敛。这表明 $K^*$ 是一个紧算子，如所断言。

反之，假设 $K^*$ 是紧的。则根据我们刚刚证明的内容，双对偶算子 $K^{**}: X^{**} \to Y^{**}$ 是紧的。这意味着 $K$ 是紧的。为了看到这一点，令 $(x_n)_{n\in\mathbb{N}}$ 为 $X$ 中的一个有界序列。则 $(\iota_X(x_n))_{n\in\mathbb{N}}$ 是 $X^{**}$ 中的一个有界序列（由自然嵌入的基本性质）。由于 $K^{**}$ 是一个紧算子，存在子列 $(\iota_X(x_{n_i}))_{i\in\mathbb{N}}$ 使得序列 $K^{**} \iota_X(x_{n_i}) = \iota_Y(K x_{n_i})$ 在 $Y^{**}$ 中收敛（当 $i$ 趋于无穷时）。因此 $(K x_{n_i})_{i\in\mathbb{N}}$ 是 $Y$ 中的一个 Cauchy 序列（由自然嵌入的基本性质），故 $K$ 是紧的。这证明了定理。

由上述定理的第 (ii) 部分可知，有限秩算子序列在算子范数拓扑下的极限是一个紧算子。一个自然的问题是：反过来，每个紧算子是否可以在算子范数拓扑下被有限秩算子序列逼近？这个问题在泛函分析中多年来一直是一个开放问题。最终发现答案取决于所涉及的 Banach 空间。以下是 Grothendieck 提出的该问题的重新表述:

## 定理（逼近性质）
设 $Y$ 为一个 Banach 空间。以下两个条件是等价的：

1. 对于每个 Banach 空间 $X$，每个紧算子 $K: X \to Y$，以及每个 $\varepsilon > 0$，存在一个有限秩算子 $T: X \to Y$，使得 $\|K - T\| < \varepsilon$。

2. 对于每个紧子集 $C \subset Y$ 和每个 $\varepsilon > 0$，存在一个有限秩算子 $T: Y \to Y$，使得对所有 $y \in C$ 有 $\|y - Ty\| < \varepsilon$。

满足这两个等价条件的 Banach 空间 $Y$ 被称为具有**逼近性质**。

设 $Y$ 为一个具有 Schauder 基 $(e_i)_{i\in\mathbb{N}}$ 的 Banach 空间，即：对每个 $y \in Y$，存在唯一的实数序列 $\lambda = (\lambda_i)_{i\in\mathbb{N}}$，使得序列 $\sum_{i=1}^n \lambda_i e_i$ 收敛且
$$y = \sum_{i=1}^\infty \lambda_i e_i = \lim_{n\to\infty} \sum_{i=1}^n \lambda_i e_i.$$
则 $Y$ 具有逼近性质。

### 证明
设 $Y$ 是具有 Schauder 基 $(e_i)_{i\in\mathbb{N}}$ 的 Banach 空间。对每个 $n\in\mathbb{N}$，定义投影算子 $P_n: Y \to Y$ 为
$$
P_n \left( \sum_{i=1}^{\infty} \lambda_i e_i \right) = \sum_{i=1}^{n} \lambda_i e_i.
$$
由于 $(e_i)$ 是 Schauder 基，每个 $P_n$ 是定义良好的有界线性算子，且对任意 $y\in Y$，有 $P_n y \to y$（当 $n\to\infty$）。由一致有界原理（Banach-Steinhaus 定理），存在常数 $M>0$，使得 $\sup_{n\in\mathbb{N}} \|P_n\| \leq M$。

现在验证等价条件中的条件 (2)：对任意紧子集 $C \subset Y$ 和任意 $\varepsilon > 0$，需构造有限秩算子 $T: Y \to Y$，使得 $\sup_{y\in C} \|y - Ty\| < \varepsilon$。

因 $C$ 紧，故完全有界。取 $\delta = \frac{\varepsilon}{2(1+M)}$，则存在有限个点 $y_1,\dots,y_k \in C$，使得
$$
C \subseteq \bigcup_{i=1}^{k} B(y_i, \delta).
$$
对每个 $i$，由 $P_n y_i \to y_i$，存在 $N_i \in \mathbb{N}$，使得当 $n \geq N_i$ 时，$\|y_i - P_n y_i\| < \frac{\varepsilon}{2}$。令 $N = \max\{N_1,\dots,N_k\}$。

现取 $T = P_N$，则 $T$ 是有限秩算子（像空间由 $e_1,\dots,e_N$ 张成）。对任意 $y \in C$，存在某个 $i$ 使得 $\|y - y_i\| < \delta$。于是当 $n = N$ 时，
$$
\begin{aligned}
\|y - T y\| &\leq \|y - y_i\| + \|y_i - P_N y_i\| + \|P_N y_i - P_N y\| \\
&< \delta + \frac{\varepsilon}{2} + \|P_N\| \cdot \|y_i - y\| \\
&\leq \delta + \frac{\varepsilon}{2} + M \delta = (1+M)\delta + \frac{\varepsilon}{2} = \varepsilon.
\end{aligned}
$$
因此，$\sup_{y\in C} \|y - Ty\| < \varepsilon$，条件 (2) 成立。故 $Y$ 具有逼近性质。

### 例子
#### 无穷维矩阵的例子
$A = (a_{ij})_{\infty \times \infty}$ 满足 $\sum_{i,j} |a_{ij}| < \infty$ 的所有无限矩阵 $A$ 构成的空间. $\forall x = (x_j)_{j \geq 1}$, 定义 $Ax = (y_i)_{i \geq 1}$, 其中 $y_i = \sum_{j=1}^{\infty} a_{ij} x_j$. 配备范数 $A = \sum_{i,j} |a_{ij}|$ 则 $A: \ell^2 \to \ell^2$ 是紧算子.

**证明:**
设矩阵 $A = (a_{ij})$ 满足 $\sum_{i,j} |a_{ij}| < \infty$，并定义算子 $A: \ell^2 \to \ell^2$ 为 $(Ax)_i = \sum_{j=1}^\infty a_{ij} x_j$，其中 $x = (x_j) \in \ell^2$。我们证明 $A$ 是紧算子。

由于 $\sum_{i,j} |a_{ij}| < \infty$，存在常数 $C > 0$ 使得 $|a_{ij}| \leq C$ 对所有 $i, j$ 成立（否则可构造子列使级数发散）。于是
$$
\sum_{i,j} |a_{ij}|^2 \leq C \sum_{i,j} |a_{ij}| < \infty,
$$
故 $A$ 是 **Hilbert–Schmidt 算子**。

对每个 $n \in \mathbb{N}$，定义截断矩阵 $A^{(n)}$：
$$
a^{(n)}_{ij} = 
\begin{cases}
a_{ij}, & \text{若 } i \leq n \text{ 且 } j \leq n, \\
0, & \text{否则}.
\end{cases}
$$
显然 $A^{(n)}$ 是有限秩算子（其像包含在由前 $n$ 个标准基向量张成的子空间中）。计算 $A - A^{(n)}$ 的 Hilbert–Schmidt 范数：
$$
\|A - A^{(n)}\|_{\mathrm{HS}}^2 = \sum_{i,j} |a_{ij} - a^{(n)}_{ij}|^2 = \sum_{i > n \text{ 或 } j > n} |a_{ij}|^2.
$$
因为 $\sum_{i,j} |a_{ij}|^2 < \infty$，当 $n \to \infty$ 时，上式右端趋于 0，故
$$
\lim_{n \to \infty} \|A - A^{(n)}\|_{\mathrm{HS}} = 0.
$$
对于任意有界算子 $T$，其算子范数满足 $\|T\|_{\mathrm{op}} \leq \|T\|_{\mathrm{HS}}$，因此
$$
\lim_{n \to \infty} \|A - A^{(n)}\|_{\mathrm{op}} = 0.
$$
所以 $A$ 是有限秩算子的一致极限，从而为紧算子。

#### 积分的例子
$A\varphi(t) := \int_a^b k(t,s)\varphi(s)ds$ 其中 $\varphi \in L^2(a,b)$, $k \in L^2((a,b)\times(a,b))$. 则 $A: L^2(a,b) \to L^2(a,b)$ 是紧算子.

**回忆: $L^p$ 中的紧性原理**

设 $1 \leq p < \infty$，$\Omega \subseteq \mathbb{R}^n$ 为可测集。考虑零延拓到全空间的函数空间 $L^p(\Omega)$。子集 $\mathcal{F} \subset L^p(\Omega)$ 是相对紧的（即其闭包在 $L^p(\Omega)$ 中紧）当且仅当同时满足以下三条：

1. 一致有界：存在常数 $M > 0$，使得对所有 $f \in \mathcal{F}$，有 $$\| f \|_{L^p(\Omega)} \leq M.$$

2. 等度连续（平移连续性）：对所有 $\varepsilon > 0$，存在 $\delta > 0$，使得对所有满足 $|h| < \delta$ 的向量 $h \in \mathbb{R}^n$ 和所有 $f \in \mathcal{F}$，有
  $$\| f(\cdot + h) - f(\cdot) \|_{L^p(\Omega_{|h|})} < \varepsilon,$$
  其中 $\Omega_{|h|} = \{ x \in \Omega : x + h \in \Omega \}$，并且约定在 $\Omega$ 外 $f$ 为零。

3. 一致消失（若 $\Omega$ 无界）：对所有 $\varepsilon > 0$，存在紧集 $K \subset \Omega$，使得对所有 $f \in \mathcal{F}$，有
  $$\int_{\Omega \setminus K} |f(x)|^p \, dx < \varepsilon.$$
  若 $\Omega$ 有界，此条件自动满足（取 $K = \Omega$ 即可）。

**证明:**
设 $B \subset L^2(a,b)$ 为有界集，即存在 $M_0 > 0$ 使得对任意 $\varphi \in B$ 有 $\|\varphi\|_{L^2} \leq M_0$。我们需证 $A(B) = \{ A\varphi : \varphi \in B \}$ 在 $L^2(a,b)$ 中相对紧，即满足 $L^p$ 紧性原理（$p=2$）的三条条件。由于 $(a,b)$ 有界，第三条自动成立，故只需验证前两条。

1. 一致有界性
  对任意 $\varphi \in B$，由 Cauchy-Schwarz 不等式，
  $$|(A\varphi)(t)| \leq \int_a^b |k(t,s)\varphi(s)|\,ds \leq \left( \int_a^b |k(t,s)|^2\,ds \right)^{1/2} \|\varphi\|_{L^2}.$$
  两边取 $L^2$ 范数，
  $$\|A\varphi\|_{L^2}^2 \leq \|\varphi\|_{L^2}^2 \iint_{(a,b)\times(a,b)} |k(t,s)|^2\,ds\,dt = \|\varphi\|_{L^2}^2 \|k\|_{L^2}^2.$$
  记 $C = \|k\|_{L^2}$，则 $\|A\varphi\|_{L^2} \leq C M_0$，故 $A(B)$ 一致有界。

2. 等度连续性
  对任意 $\varphi \in B$ 和 $h \in \mathbb{R}$，当 $t, t+h \in (a,b)$ 时，
  $$|(A\varphi)(t+h) - (A\varphi)(t)| \leq \left( \int_a^b |k(t+h,s) - k(t,s)|^2\,ds \right)^{1/2} \|\varphi\|_{L^2}.$$
  记 $\Omega_{|h|} = \{ t \in (a,b) : t+h \in (a,b) \}$，则
  $$\| (A\varphi)(\cdot+h) - (A\varphi)(\cdot) \|_{L^2(\Omega_{|h|})}^2 
  \leq M_0^2 \int_{\Omega_{|h|}} \int_a^b |k(t+h,s) - k(t,s)|^2\,ds\,dt.$$
  将 $k$ 零延拓到 $\mathbb{R}^2$，则当 $|h|$ 足够小时，有
  $$\int_a^b \int_a^b |k(t+h,s) - k(t,s)|^2\,ds\,dt \to 0 \quad (h \to 0),$$
  这是 $L^2$ 函数的平移连续性。因此，对任意 $\varepsilon > 0$，存在 $\delta > 0$，使得当 $|h| < \delta$ 时，
  $$\left( \int_a^b \int_a^b |k(t+h,s) - k(t,s)|^2\,ds\,dt \right)^{1/2} < \frac{\varepsilon}{M_0}.$$
  此时，
  $$\| (A\varphi)(\cdot+h) - (A\varphi)(\cdot) \|_{L^2(\Omega_{|h|})} < \varepsilon,$$
  即 $A(B)$ 等度连续。

由 $L^p$ 紧性原理（$p=2$），$A(B)$ 在 $L^2(a,b)$ 中相对紧。故 $A$ 将任意有界集映为相对紧集，即 $A$ 是紧算子。