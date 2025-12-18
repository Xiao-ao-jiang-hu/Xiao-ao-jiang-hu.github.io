---
title: Ch 4.3 Fredholm 算子及其复合与稳定性
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
### 定义：三个空间
设 $X$ 和 $Y$ 是实 Banach 空间，令 $A: X \to Y$ 为一个有界线性算子。$A$ 的**核 (kernel)**、**像 (image)** 和**余核 (cokernel)** 定义为
$$
\ker(A) := \{ x \in X \mid Ax = 0 \}, \\ \mathrm{im}(A) := \{ Ax \mid x \in X \}, \\ \mathrm{coker}(A) := Y / \mathrm{im}(A).
$$
如果 $A$ 的像是 $Y$ 的一个闭子空间，则余核是一个具有商范数的 Banach 空间。

### 直观理解

$a := \dim \ker(A)$. $\longleftrightarrow$ $a$ 表明 $Ax=0$ 解集合的自由度 $\longleftrightarrow$ $a$ 表明映射 $A$ 的“单射”情况

$b := \dim \operatorname{coker}(A)$ $\longleftrightarrow$ $b$ 表明 $Ax=y$ 可解性的相容性条件. 
由 Hahn-Banach 定理知, 存在 $f_1, \cdots, f_b \in X^*$ s.t. $f_i \big|_{\operatorname{Ran}(A)} = 0$ 且 $\operatorname{Ran}(A)^\perp = \operatorname{span}\{f_1, \cdots, f_b\} (\cong \ker(A^T))$ ($\mathbb{R}^m = \operatorname{Ran}(A) \oplus \ker(A^T)$)

因此, $y \in \operatorname{Ran}(A) \Leftrightarrow \forall i \leq b$, $f_i(y) = 0$.

$\longleftrightarrow$ $b$ 表明映射 $A$ 的“满射”情况

记 $L := a - b$. $\Rightarrow$ $\begin{cases} L > 0 \; (\Leftrightarrow b < a) \text{ 即映射 } A \text{ 更接近满射} \\ L < 0 \; (\Leftrightarrow b > a) \text{ 即映射 } A \text{ 更接近单射} \\ L = 0 \; (\Leftrightarrow b = a) \text{ 即“接近单射”或“满射”相当}. \end{cases}$

回到 $A: \mathbb{R}^n \mapsto \mathbb{R}^m$.

$$L = \dim \ker(A) - \dim(\mathbb{R}^m / \operatorname{Ran}(A))= \dim \ker(A) + \dim \operatorname{Ran}(A) - m = n - m$$

因此, $$\begin{cases} A \in \mathcal{M}_{m,m} \; (m=n) \quad \Leftrightarrow \text{ 二择一定理成立, 即} \begin{cases} \text{要么 } Ax=0 \text{ 有非零解} \\ \text{要么 } \forall y \in Y, \; Ax=y \text{ 有解}. \end{cases} \\ A \in \mathcal{M}_{m,n} \; (m < n) \Rightarrow L > 0 \Rightarrow \text{将高维映射到低维. 此时, 更接近“满射”} \\ A \in \mathcal{M}_{m,n} \; (m > n) \Rightarrow L < 0 \Leftrightarrow \text{将低维嵌入高维}, \text{更接近“单射”}. \end{cases}$$

为了将这样的线性映射性质从有限维推广至无限维, 引入 Fredholm 算子.



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

!!! note 直观理解
    $\operatorname{coker}$ 可以如下看待: $\operatorname{im}(A)$ 反映了有多少“方向”是可以被 $A$ 映射到的。因此 $A$ 商掉了这些“方向”后，剩下的每个等价类描述了一种“无法通过 $A$ 达到的方向”的不满足可能。余核越大，说明 $B$ 中的元素想要待在 $\operatorname{im}(A)$ 中必须满足的约束种类越多（每一种不满足的可能性都要考虑到才能呆在里面），因此映射越远离满射。


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
若 $A$ 是 Fredholm 算子且 $\dim Z < \infty$，则 $A \oplus \Phi$ 是 Fredholm 算子，且 $\mathrm{index}(A \oplus \Phi) = \mathrm{index}(A) + \dim Z$。

#### 证明
由于 $A$ 是 Fredholm 算子，$A$ 具有闭像且其核与余核均为有限维。因此，算子 $A \oplus \Phi$ 也具有闭像。进一步地，有限维空间 $Z$ 的引入不会改变核与余核的有限维性质。具体地，有限维空间的直和不会增加核与余核的维数。因此，$A \oplus \Phi$ 也是 Fredholm 算子。

下一个定理将 Fredholm 算子刻画为模紧算子可逆的算子。Fredholm 与紧算子的等价刻画定理的证明依赖于以下引理。该引理也部分回答了一个重要问题：如何识别给定的算子是否为 Fredholm。它刻画了具有闭像和有限维核的有界线性算子，并且是建立许多微分算子 Fredholm 性质的关键工具。

## 主 Fredholm 引理

设 $X$ 和 $Y$ 是 Banach 空间，令 $D: X \to Y$ 为一个有界线性算子。则下列条件等价：

1. $D$ 具有有限维核和闭像。

2. 存在一个 Banach 空间 $Z$，一个紧算子 $K: X \to Z$，以及一个常数 $c > 0$，使得
$$
\|x\|_X \le c (\|Dx\|_Y + \|Kx\|_Z)
$$
对所有 $x \in X$ 成立。

!!! note 直观理解
    条件 (2) 表明，算子 $D$ 的“非紧部分”在某种意义上是可逆的。具体地说，存在一个紧算子 $K$，使得当我们考虑 $Dx$ 和 $Kx$ 的组合时，可以控制 $x$ 的范数。这意味着，尽管 $D$ 可能不是严格的可逆算子，但它在“紧扰动”下表现出类似于可逆算子的性质。右侧的控制项中，$K$ 的作用是"探测"非平凡核中的元素，而紧算子可以捕捉到这些元素说明核的有限维性质。对于一般的 $x$，我们可以将其分解为核部分和与核正交（或补）的部分。在补空间上，$D$ 通常是下有界的，因此 $\|x\|$ 可被 $\|Dx\|$ 控制；在核部分，$\|x\|$ 可被 $\|Kx\|$ 控制。两项结合起来就得到了全空间的不等式。

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


# 复合与稳定性

## Fredholm 算子的复合定理

设 $X, Y, Z$ 为 Banach 空间，且令 $A: X \to Y$ 和 $B: Y \to Z$ 为 Fredholm 算子。则 $BA: X \to Z$ 是一个 Fredholm 算子，且
$$
\text{index}(BA) = \text{index}(A) + \text{index}(B).
$$

### 证明

由 Fredholm 算子的紧扰动刻画定理可知，存在有界线性算子 $F: Y \to X$ 和 $G: Z \to Y$，使得算子 $\mathbb{1}_X - FA$, $\mathbb{1}_Y - AF$, $\mathbb{1}_Y - GB$, 和 $\mathbb{1}_Z - BG$ 是紧的。定义 $H := FG: Z \to X$。则算子
$$
\mathbb{1}_X - HBA = F(\mathbb{1}_Y - GB)A + \mathbb{1}_X - FA,
$$
$$
\mathbb{1}_Z - BAH = B(\mathbb{1}_Y - AF)G + \mathbb{1}_Z - BG
$$
根据紧算子的基本性质定理的第 (i) 部分是紧的。因此，由 Fredholm 算子的紧扰动刻画定理可知 $BA$ 是一个 Fredholm 算子。

为证明指标公式，考虑算子
$$
A_0: \frac{\ker(BA)}{\ker(A)} \to \ker(B), \quad A_0[x] := Ax,
$$
$$
B_0: \frac{Y}{\text{im}(A)} \to \frac{\text{im}(B)}{\text{im}(BA)}, \quad B_0[y] := [By].
$$
这些是在有限维实向量空间之间的良定义线性算子。根据定义，算子 $A_0$ 是单射，$B_0$ 是满射。其次，$\text{im}(A_0) = \text{im}(A) \cap \ker(B)$，故
$$
\text{coker}(A_0) = \frac{\ker(B)}{\text{im}(A) \cap \ker(B)}.
$$
第三，
$$
\begin{aligned}
\ker(B_0) &= \left\{ [y] \in Y/\text{im}(A) \mid By \in \text{im}(BA) \right\} \\
&= \left\{ [y] \in Y/\text{im}(A) \mid \exists x \in X \text{ 使得 } B(y - Ax) = 0 \right\} \\
&= \left\{ [y] \in Y/\text{im}(A) \mid y \in \text{im}(A) + \ker(B) \right\} \\
&= \frac{\text{im}(A) + \ker(B)}{\text{im}(A)} \\
&\cong \frac{\ker(B)}{\text{im}(A) \cap \ker(B)} \\
&= \text{coker}(A_0).
\end{aligned}
$$

#### 证明续

因此，由有限维向量空间指标的例子，我们有
$$
\begin{aligned}
0 &= \text{index}(A_0) + \text{index}(B_0) \\
&= \dim\left( \frac{\ker(BA)}{\ker(A)} \right) - \dim\ker(B) + \dim\text{coker}(A) - \dim\left( \frac{\text{im}(B)}{\text{im}(BA)} \right) \\
&= \dim\ker(BA) - \dim\ker(A) - \dim\ker(B) \\
&\quad + \dim\text{coker}(A) + \dim\text{coker}(B) - \dim\text{coker}(BA) \\
&= \text{index}(BA) - \text{index}(A) - \text{index}(B).
\end{aligned}
$$
这证明了 Fredholm 算子的复合定理。$\square$

## Fredholm 指标的稳定性定理

设 $X$ 和 $Y$ 为 Banach 空间，且令 $D: X \to Y$ 为一个 Fredholm 算子。

1. 若 $K: X \to Y$ 是一个紧算子，则 $D+K$ 是一个 Fredholm 算子，且 $\text{index}(D+K) = \text{index}(D)$。

2. 存在一个常数 $\varepsilon > 0$，使得以下成立。若 $P: X \to Y$ 是一个满足 $\|P\| < \varepsilon$ 的有界线性算子，则 $D+P$ 是一个 Fredholm 算子，且 $\text{index}(D+P) = \text{index}(D)$。

### 证明

我们在第 1 部分中证明 Fredholm 性质。设 $D: X \to Y$ 为一个 Fredholm 算子，且令 $K: X \to Y$ 为一个紧算子。由 Fredholm 算子的紧扰动刻画定理，存在一个有界线性算子 $T: Y \to X$，使得算子 $\mathbb{1}_X - TD$ 和 $\mathbb{1}_Y - DT$ 是紧的。因此，算子 $\mathbb{1}_X - T(D+K)$ 和 $\mathbb{1}_Y - (D+K)T$ 根据紧算子的基本性质定理也是紧的，所以 $D+K$ 是一个 Fredholm 算子，由 Fredholm 算子的紧扰动刻画定理得证。

我们在第 2 部分中证明 Fredholm 性质。设 $D: X \to Y$ 为一个 Fredholm 算子。由 Fredholm 算子的等价刻画引理，存在一个紧算子 $K: X \to Z$ 和一个常数 $c>0$，使得对所有 $x \in X$ 有 $\|x\|_X \le c(\|Dx\|_Y + \|Kx\|_Z)$。现在令 $P: X \to Y$ 为一个具有算子范数
$$
\|P\| < \frac{1}{c}
$$
的有界线性算子。

那么，对所有 $x \in X$，我们有
$$
\begin{aligned}
\|x\|_X &\le c(\|Dx\|_Y + \|Kx\|_Z) \\
&\le c(\|Dx + Px\|_Y + \|Px\|_Y + \|Kx\|_Z) \\
&\le c(\|(D+P)x\|_Y + \|Kx\|_Z) + c\|P\|\|x\|_X
\end{aligned}
$$
从而
$$
(1 - c\|P\|)\|x\|_X \le c(\|(D+P)x\|_Y + \|Kx\|_Z).
$$
因此，由 Fredholm 算子的等价刻画引理可知，$D+P$ 具有闭值域和有限维核。对偶算子进行相同的论证表明，当 $\|P^*\| = \|P\|$ 足够小时，$D^* + P^*$ 具有有限维核，因此由 Fredholm 算子的对偶定理可知，$D+P$ 具有有限维余核。


我们证明第 2 部分中的指标公式。如同在 Fredholm 算子的紧扰动刻画定理的证明中一样，定义 $X_0 := \ker(A)$ 和 $Y_1 := \text{im}(A)$，并使用 Banach 空间直和分解引理找到闭线性子空间 $X_1 \subset X$ 和 $Y_0 \subset Y$，使得
$$
X = X_0 \oplus X_1, \quad Y = Y_0 \oplus Y_1.
$$
对于 $i,j \in \{0,1\}$，定义 $P_{ji}: X_i \to Y_j$ 为 $P|_{X_i}: X_i \to Y$ 与投影 $Y = Y_0 \oplus Y_1 \to Y_j: y_0 + y_1 \mapsto y_j$ 的复合。令 $D_{11}: X_1 \to Y_1$ 为 $D$ 在 $X_1$ 上的限制，其值域在 $Y_1 = \text{im}(D)$ 中。则 $D_{11}$ 是双射的。我们证明以下结论。

#### 引理

假设算子 $D_{11} + P_{11}: X_1 \to Y_1$ 是双射的，并定义
$$
A_0 := P_{00} - P_{01}(D_{11} + P_{11})^{-1}P_{10}: X_0 \to Y_0.
$$
则 $\text{index}(D+P) = \text{index}(A_0)$。

该声明表明，当算子 $D_{11} + P_{11}$ 是双射时，
$$
\text{index}(D+P) = \text{index}(A_0) = \dim X_0 - \dim Y_0 = \text{index}(D)
$$
成立。由 Banach 空间上的逆算子扰动推论，当 $\|P_{11}\|\|(D_{11} + P_{11})^{-1}\| < 1$ 时成立，因此当 $\|P\|$ 足够小时成立。

**引理的证明**
观察到方程
$$
(D+P)(x_0 + x_1) = y_0 + y_1 \tag{4.4.1}
$$
可以写成
$$
y_0 = P_{00}x_0 + P_{01}x_1, \tag{4.4.2}
$$
$$
y_1 = P_{10}x_0 + (D_{11} + P_{11})x_1
$$
其中 $x_0 \in X_0$, $x_1 \in X_1$ 且 $y_0 \in Y_0$, $y_1 \in Y_1$。由于 $D_{11} + P_{11}$ 是双射的，方程 (4.4.2) 可以写成如下形式：
$$
A_0x_0 = y_0 - P_{01}(D_{11} + P_{11})^{-1}y_1, \tag{4.4.3}
$$
$$
x_1 = (D_{11} + P_{11})^{-1}(y_1 - P_{10}x_0).
$$
这表明
$$
x_0 + x_1 \in \ker(D+P) \iff \begin{cases} x_0 \in \ker(A_0), \\ x_1 = -(D_{11} + P_{11})^{-1}P_{10}x_0 \end{cases}
$$
对于 $x_i \in X_i$，因此 $\ker(D+P) \cong \ker(A_0)$。方程 (4.4.3) 也表明
$$
y_0 + y_1 \in \text{im}(D+P) \iff y_0 - P_{01}(D_{11} + P_{11})^{-1}y_1 \in \text{im}(A_0)
$$
对于 $y_i \in Y_i$。因此，映射 $Y \to Y_0: y_0 + y_1 \mapsto y_0 - P_{01}(D_{11} + P_{11})^{-1}y_1$ 诱导出从 $Y/\text{im}(D+P)$ 到 $Y_0/\text{im}(A_0)$ 的同构。因此
$$
\text{coker}(D+P) \cong \text{coker}(A_0).
$$
这证明了引理和第 2 部分的指标公式。

剩下要证明的是第 1 部分的指标公式。令 $K: X \to Y$ 为一个紧算子，并定义 $I := \{ t \in \mathbb{R} \mid \text{index}(D+tK) = \text{index}(D) \}$。由第 2 部分，集合 $\mathcal{F}_k(X,Y) \subset \mathcal{L}(X,Y)$ 中指标为 $k$ 的 Fredholm 算子对于每个 $k \in \mathbb{Z}$ 都是开集，因此它们的并集 $\mathcal{F}(X,Y) := \bigcup_{k \in \mathbb{Z}} \mathcal{F}_k(X,Y)$ 也是开集。此外，映射 $\mathbb{R} \to \mathcal{F}(X,Y): t \mapsto D+tK$ 是连续的，因此对于每个 $k \in \mathbb{Z}$，该映射下的原像 $\mathcal{F}_k(X,Y)$ 是开集。因此，集合 $I_k := \{ t \in \mathbb{R} \mid \text{index}(D+tK) = k \}$ 对于所有 $k \in \mathbb{Z}$ 都是开集，且 $\mathbb{R} = \bigcup_{k \in \mathbb{Z}} I_k$。由于 $I_k = I$ 当 $k = \text{index}(D)$ 时，可知 $I$ 和 $\mathbb{R} \setminus I = \bigcup_{\ell \ne k} I_\ell$ 都是开集。由于 $0 \in I$ 且 $\mathbb{R}$ 是连通的，可知 $I = \mathbb{R}$，因此 $1 \in I$，所以 $\text{index}(D+K) = \text{index}(D)$。这证明了 Fredholm 指标的稳定性定理。$\square$

## 注记：Fredholm 替代
考虑特殊情况，其中 $X=Y$ 是一个 Banach 空间，且 $K: X \to X$ 是一个紧算子。此时 Fredholm 指标的稳定性定理断言 $\mathbb{1}-K$ 是一个指标为零的 Fredholm 算子。这导致所谓的 **Fredholm 替代**。它断言，对于每个 $y \in X$，非齐次线性方程
$$
x - Kx = y
$$
都有解 $x \in X$，或者相应的齐次方程 $x - Kx = 0$ 有非平凡解。这只是因为算子 $\mathbb{1}-K$ 的核和余核具有相同维度，因此要么都是平凡的，要么都是非平凡的。

## 注记：Calkin 代数

设 $X$ 为一个 Banach 空间，记 $\mathcal{L}(X)$ 为从 $X$ 到自身的有界线性算子构成的 Banach 空间，记 $\mathcal{F}(X) \subset \mathcal{L}(X)$ 为所有 Fredholm 算子的子集，记 $\mathcal{K}(X) \subset \mathcal{L}(X)$ 为所有紧算子的子集。由紧算子的基本性质定理的第 (ii) 部分，线性子空间 $\mathcal{K}(X) \subset \mathcal{L}(X)$ 是闭的，且由紧算子的基本性质定理的第 (i) 部分，商空间
$$
\mathcal{L}(X)/\mathcal{K}(X)
$$
是一个 Banach 代数，称为 **Calkin 代数**。由 Fredholm 指标的稳定性定理的第 2 部分，集合 $\mathcal{F}(X)$ 是 $\mathcal{L}(X)$ 的一个开子集，且由 Fredholm 指标的稳定性定理的第 1 部分，这个开集在等价关系下是不变的。由 Fredholm 算子的紧扰动刻画定理，商空间中的相应开子集
$$
\mathcal{F}(X)/\mathcal{K}(X) \subset \mathcal{L}(X)/\mathcal{K}(X)
$$
是 Calkin 代数中的可逆元群。由 Fredholm 指标的稳定性定理的第 1 部分，Fredholm 指标产生一个良定义的映射
$$
\mathcal{F}(X)/\mathcal{K}(X) \to \mathbb{Z}: [D] \mapsto \text{index}(D). \tag{4.4.4}
$$
由 Fredholm 算子的复合定理，此映射是一个群同态。

## 注记：Fredholm 算子与 K-理论

设 $H$ 为一个无限维可分 Hilbert 空间。Kuiper 的一个定理 [53] 断言，群
$$
\text{Aut}(H) := \{ A: H \to H \mid A \text{ 是一个双射的有界线性算子} \}
$$
是可收缩的。这可用于证明空间 $\mathcal{F}(H)$（从 $H$ 到自身的 Fredholm 算子）是 K-理论的一个分类空间。起点是观察到，如果 $M$ 是一个紧 Hausdorff 空间，且 $A: M \to \mathcal{F}(H)$ 是一个连续映射，使得算子 $A(p)$ 对所有 $p \in M$ 都是满射，则这些算子的核确定了一个定义在 $M$ 上的向量丛 $E$，其定义为
$$
E := \{ (p,x) \in M \times H \mid A(p)x = 0 \}. \tag{4.4.5}
$$
更一般地，任何定义在紧 Hausdorff 空间 $M$ 上的连续映射 $A: M \to \mathcal{F}(H)$，决定了 $M$ 上的一个所谓 **K-理论类**（在等价关系 $(E,F) \sim (E',F')$ 当且仅当 $E \oplus F' \cong E' \oplus F$ 下的一对向量丛的等价类），两个这样的映射所关联的 K-理论类一致当且仅当映射是同伦的，并且每个紧 Hausdorff 空间上的 K-理论类都可以通过这种方式获得。这就是 **Atiyah–Jänich 定理** [5,7,42]。特别地，当 $M$ 是一个单点时，该定理断言，对于所有 $k \in \mathbb{Z}$，指标为 $k$ 的 Fredholm 算子的空间 $\mathcal{F}_k(H)$ 是非空且连通的。

## 注记：Banach 超平面问题

1932 年，Banach 提出了一个问题：是否每一个无限维实 Banach 空间 $X$ 都同构于 $X \times \mathbb{R}$，或者等价地，是否每一个闭余维度为一的子空间都同构于 $X$。这个问题在 1994 年由 Gowers 给出了解答。他构造了一个无限维实 Banach 空间 $X$，它不与其任何真子空间同构，因此 $X$ 上的每一个 Fredholm 算子都具有 Fredholm 指标零。这个例子后来被 Argyros 和 Haydon 改进。**Argyros–Haydon 空间** 是一个无限维实 Banach 空间 $X$，使得 $X$ 上的每一个有界线性算子 $A: X \to X$ 都具有形式 $A = \lambda \mathbb{1} + K$，其中 $\lambda$ 是一个实数，且 $K: X \to X$ 是一个紧算子。因此，$X$ 上的每一个有界线性算子要么是紧算子，要么是指标为零的 Fredholm 算子，开集 $\mathcal{F}(X) = \mathcal{F}_0(X) = \mathcal{L}(X) \setminus \mathcal{K}(X)$ 有两个连通分支，且 Calkin 代数同构于实数，即
$$
\mathcal{L}(X)/\mathcal{K}(X) \cong \mathbb{R}.
$$
这表明 Atiyah–Jänich 定理中的 Hilbert 空间 $H$ 不能被任意的 Banach 空间替代（参见 Fredholm 算子与 K-理论注记）。Gowers 和 Argyros–Haydon 的构造细节超出了本书的范围。