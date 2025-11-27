---
title: Ch 3.4 
tags:
  - math
  - functional analysis
categories:
  - math
  - functional analysis
index_img: /img/fa.jpg
banner_img: /img/fa.jpg
excerpt: 泛函分析课程笔记
date: 2025-11-25 14:09:38
---
若 $X$ 是一个自反的巴拿赫空间，则其对偶空间 $X^* = \mathcal{L}(X, \mathbb{R})$ 上的弱拓扑与弱\*拓扑一致，因此 $X^*$ 中的闭单位球是弱紧的，从而 $X$ 中的闭单位球也是弱紧的。Eberlein–Šmulian 定理断言，这一性质刻画了自反性。它还断言，闭单位球的弱紧性等价于序列弱紧性。

## Eberlein–Šmulian 定理

设 $X$ 为实巴拿赫空间，令 $B := \{ x \in X \mid \|x\| \leq 1 \}$ 为闭单位球。则以下条件等价：

1. $X$ 是自反的。
2. $B$ 是弱紧的。
3. $B$ 是序列弱紧的。
4. $X$ 中的每个有界序列都包含一个弱收敛子列。


## 注记 (James 定理)

Robert C. James 的一个定理断言如下：

设 $C \subset X$ 为实巴拿赫空间 $X$ 中的一个非空有界弱闭子集。则 $C$ 是弱紧的当且仅当 $X$ 上的每个有界线性泛函在 $C$ 上都能达到其最大值。

弱紧性的必要性条件源于这样一个事实：$X$ 上的每个有界线性泛函关于弱拓扑都是连续的。其逆命题高度非平凡，需要构造一个在 $C$ 上无法达到其最大值的 $X$ 上的有界线性泛函，前提是 $C$ 不是弱紧的。这超出了本课的范围，具体请参考 James 的原始论文以及 Holmes 和 Pryce 的工作。

将 James 定理与 Eberlein–Šmulian 定理结合，可得到以下结果。巴拿赫空间 $X$ 是自反的当且仅当，对于每个有界线性泛函 $x^* \in X^*$，存在元素 $x \in X$ 使得
$$
\|x\| = 1, \quad \langle x^*, x \rangle = \|x^*\|.
$$
若 $X$ 是自反的，则这样的元素 $x$ 的存在性可由 Hahn–Banach 定理（Hahn–Banach 定理的推论）推出。


Eberlein–Šmulian 定理的证明依赖于 Helly 定理，这是 1921 年证明的 Hahn–Banach 定理的前身，它表明何时有限线性方程组有解。

## Helly 定理

设 $X$ 为实赋范向量空间，令 $x_1^*, \dots, x_n^* \in X^*$ 且 $c_1, \dots, c_n \in \mathbb{R}$。固定一个实数 $M \geq 0$。则以下条件等价：

1. 对于每个 $\varepsilon > 0$，存在 $x \in X$ 使得
   $$
   \|x\| < M + \varepsilon, \quad \langle x_i^*, x \rangle = c_i \text{ 对于 } i=1,\dots,n. \tag{1}
   $$

2. 每个向量 $\lambda = (\lambda_1, \dots, \lambda_n) \in \mathbb{R}^n$ 满足不等式
   $$
   \left| \sum_{i=1}^n \lambda_i c_i \right| \leq M \left\| \sum_{i=1}^n \lambda_i x_i^* \right\|. \tag{2}
   $$

### 证明

我们证明 (1) 蕴含 (2)。固定常数 $\varepsilon > 0$。由 (1) 可知，存在向量 $x \in X$ 使得 (1) 成立。于是
$$
\begin{aligned}
\left| \sum_{i=1}^n \lambda_i c_i \right| &= \left| \left\langle \sum_{i=1}^n \lambda_i x_i^*, x \right\rangle \right| \\
&\leq \|x\| \left\| \sum_{i=1}^n \lambda_i x_i^* \right\| \\
&\leq (M + \varepsilon) \left\| \sum_{i=1}^n \lambda_i x_i^* \right\|.
\end{aligned}
$$
由于 $\varepsilon > 0$ 是任意选取的，这就证明了 (2)。

我们证明 (2) 蕴含 (1)。因此假设 (2) 成立，并首先假设 $x_1^*, \dots, x_n^*$ 是线性无关的。那么存在向量 $x_1, \dots, x_n \in X$ 使得 $\langle x_i^*, x_j \rangle = \delta_{ij}$ 对于 $i,j=1,\dots,n$。定义
$$
Z := {}^\perp \{x_1^*, \dots, x_n^*\}.
$$
我们证明 $Z^\perp = \operatorname{span}\{x_1^*, \dots, x_n^*\}$。令 $x^* \in Z^\perp$。则对于所有 $x \in X$，
$$
x - \sum_{i=1}^n \langle x_i^*, x \rangle x_i \in Z
$$
并且因此
$$
0 = \left\langle x^*, x - \sum_{i=1}^n \langle x_i^*, x \rangle x_i \right\rangle = \left\langle x^* - \sum_{i=1}^n \langle x^*, x_i \rangle x_i^*, x \right\rangle.
$$
这表明 $x^* = \sum_{i=1}^n \langle x^*, x_i \rangle x_i^* \in \operatorname{span}\{x_1^*, \dots, x_n^*\}$ 对于所有 $x^* \in Z^\perp$。逆包含关系显然成立。

现在定义
$$
x := \sum_{j=1}^n c_j x_j.
$$
那么 $\langle x_i^*, x \rangle = c_i$ 对于 $i=1,\dots,n$，并且该方程的其他所有解的形式为 $x+z$，其中 $z \in Z$。因此，由 annihilator 的基本性质可得
$$
\begin{aligned}
\inf_{z \in Z} \|x + z\| &= \sup_{x^* \in Z^\perp} \frac{|\langle x^*, x \rangle|}{\|x^*\|} \\
&= \sup_{\lambda \in \mathbb{R}^n} \frac{|\langle \sum_i \lambda_i x_i^*, x \rangle|}{\|\sum_i \lambda_i x_i^*\|} \\
&= \sup_{\lambda \in \mathbb{R}^n} \frac{|\sum_i \lambda_i c_i|}{\|\sum_i \lambda_i x_i^*\|} \\
&\leq M.
\end{aligned}
$$
这证明了对于线性无关的 $n$-元组 $x_1^*, \dots, x_n^* \in X^*$，(1) 成立。

为了证明一般情况下的结果，选择子集 $J \subset \{1, \dots, n\}$，使得 $x_j^*$ 对于 $j \in J$ 是线性无关的，并张成与 $x_1^*, \dots, x_n^*$ 相同的子空间。固定常数 $\varepsilon > 0$。然后，根据我们刚刚证明的结果，存在 $x \in X$ 使得 $\|x\| < M + \varepsilon$ 且 $\langle x_j^*, x \rangle = c_j$ 对于 $j \in J$。令 $i \in \{1, \dots, n\} \setminus J$。则存在实数 $\lambda_j$ 对于 $j \in J$ 使得 $\sum_{j \in J} \lambda_j x_j^* = x_i^*$。因此 $\sum_{j \in J} \lambda_j c_j = c_i$ 由 (2) 得出，所以 $\langle x_i^*, x \rangle = c_i$。因此 $x$ 满足 (1)，这就证明了 Helly 定理。

## Eberlein–Šmulian 定理的证明

### 引理

对于每个有限集 $S \subset X^*$，存在元素 $x^* \in X^*$ 使得
$$
\|x\| \leq 2 \|x^{**}\|, \quad \langle x^*, x \rangle = \langle x^{**}, x^* \rangle \text{ 对于所有 } x \in S.
$$
#### 证明
令 $S = \{x_1^*, \dots, x_n^*\}$ 并定义 $c_i := \langle x^{**}, x_i^* \rangle$ 对于 $i=1,\dots,n$。则每个向量 $\lambda = (\lambda_1, \dots, \lambda_n) \in \mathbb{R}^n$ 满足不等式
$$
\left| \sum_{i=1}^n \lambda_i c_i \right| = \left| \left\langle x^{**}, \sum_{i=1}^n \lambda_i x_i^* \right\rangle \right| \leq \|x^{**}\| \left\| \sum_{i=1}^n \lambda_i x_i^* \right\|.
$$
因此，该引理由 Helly 定理得出，其中 $\varepsilon := M := \|x^{**}\| > 0$。

### 证明 (1) 蕴含 (2)
假设 $X$ 是自反的。则 $\iota: X \to X^{**}$ 是一个巴拿赫空间等距映射，因此关于弱拓扑是一个同胚。由于 $X^*$ 是自反的，$X^{**}$ 上的弱拓扑与弱\*拓扑一致。因此，闭单位球 $B^{**} \subset X^{**}$ 是弱紧的，从而闭单位球 $B \subset X$ 也是弱紧的。这表明 (1) 蕴含 (2)。

### 证明 (2) 蕴含 (1)
假设 $X$ 中的闭单位球是弱紧的，并固定一个非零元素 $x^{**} \in X^{**}$。

我们证明 $x^{**}$ 属于包含映射 $\iota: X \to X^{**}$ 的像中。记 $\mathscr{S} \subset 2^{X^*}$ 为所有有限子集 $S \subset X^*$ 的集合。对于 $S \in \mathscr{S}$，定义
$$
K(S) := \{ x \in X \mid \|x\| \leq 2 \|x^{**}\| \text{ 且 } \langle x^*, x \rangle = \langle x^{**}, x^* \rangle \text{ 对于所有 } x^* \in S \}.
$$
那么，对于每个有限集 $S \subset X^*$，集合 $K(S)$ 由引理可知是非空的，因此是弱闭的，并且包含在 $cB$ 中，其中 $c := 2 \|x^{**}\|$。集合 $cB$ 由 (2) 可知是弱紧的，而集合族 $\{ K(S) \mid S \in \mathscr{S} \}$ 具有有限交性质，因为
$$
\bigcap_{i=1}^m K(S_i) = K\left( \bigcup_{i=1}^m S_i \right) \neq \emptyset \quad \text{对于所有 } S_1, \dots, S_m \in \mathscr{S}.
$$
因此
$$
\bigcap_{S \in \mathscr{S}} K(S) \neq \emptyset
$$
所以存在 $x \in X$ 使得 $x \in K(S)$ 对于所有 $S \subset \mathscr{S}$。这表明 $\langle x^*, x \rangle = \langle x^{**}, x^* \rangle$ 对于所有 $x^* \in X^*$，因此 $x^{**} = \iota(x)$。因此我们证明了 (2) 蕴含 (1)。

### 证明 (1) 蕴含 (3)
首先假设 $X$ 既是可分的又是自反的。则 $X^*$ 是可分的，并且是自反的。令 $(x_n)_{n \in \mathbb{N}}$ 为 $X^{**}$ 中闭单位球 $B \subset X$ 内的一个序列，因此 $(\iota(x_n))_{n \in \mathbb{N}}$ 是一个有界序列，故由 Banach–Alaoglu 定理可知，存在一个弱\*收敛子列 $(\iota(x_{n_i}))_{i \in \mathbb{N}}$。由于 $\iota: X \to X^{**}$ 关于 $X$ 和 $X^*$ 的弱拓扑是一个同胚，可知序列 $(x_{n_i})_{i \in \mathbb{N}}$ 弱收敛到某个元素 $x \in X$。由于 $x_{n_i} \in B$ 对于所有 $i \in \mathbb{N}$，可知 $x \in B$。这表明当 $X$ 自反且可分时，闭单位球 $B \subset X$ 是序列弱紧的。

现在假设 $X$ 是自反的，令 $(x_n)_{n \in \mathbb{N}}$ 为闭单位球 $B \subset X$ 内的一个序列。令 $Y := \overline{\operatorname{span}}\{x_n \mid n \in \mathbb{N}\}$ 为包含序列 $(x_n)_{n \in \mathbb{N}}$ 的最小闭子空间。则 $Y$ 是自反的，并且 $Y$ 是可分的。因此，序列 $(x_n)_{n \in \mathbb{N}}$ 有一个子列弱收敛到 $B$ 中的一个元素。这表明 (1) 蕴含 (3)。

### 证明 (3) 蕴含 (4)

若 $(x_n)_{n \in \mathbb{N}}$ 是一个有界序列，则存在常数 $c > 0$ 使得 $\|x_n\| \leq c$ 对于所有 $n \in \mathbb{N}$，因此序列 $(c^{-1}x_n)_{n \in \mathbb{N}}$ 在 $B$ 中具有一个弱收敛子列，由 (3) 可知，因此原序列 $(x_n)_{n \in \mathbb{N}}$ 也是如此。这表明 (3) 蕴含 (4)。

### 证明 (4) 蕴含 (1)
假设 (4) 成立，并选择一个元素 $x_0^{**} \in X^{**}$ 使得 $\|x_0^{**}\| \leq 1$。我们分三步证明 $x_0^{**}$ 属于包含映射 $\iota: X \to X^{**}$ 的像中。

#### 步骤 1

令 $n \in \mathbb{N}$ 且 $x_1^*, \dots, x_n^* \in X^*$。则存在 $x \in X$ 使得
$$
\|x\| \leq 1, \quad \langle x_i^*, x \rangle = \langle x_0^{**}, x_i^* \rangle \quad \text{对于 } i=1,\dots,n. \tag{3}
$$
记 $S \subset X$ 为单位球面，并从单位球面的双对偶嵌入性质回忆，$\iota(S)$ 的弱\*闭包是闭单位球 $B^{**} \subset X^{**}$。对于 $m \in \mathbb{N}$，集合
$$
U_m := \left\{ x^{**} \in X^{**} \,\middle|\, |\langle x^{**} - x_0^{**}, x_i^* \rangle| < \frac{1}{m} \text{ 对于 } i=1,\dots,n \right\}
$$
是 $x_0^{**} \in B^{**}$ 的一个弱\*开邻域，因此 $U_m \cap \iota(S) \neq \emptyset$。因此，由可数选择公理，存在序列 $(x_m)_{m \in \mathbb{N}}$ 在 $X$ 中使得
$$
\|x_m\| = 1, \quad \iota(x_m) \in U_m \quad \text{对于所有 } m \in \mathbb{N}.
$$
该序列满足
$$
|\langle x_i^*, x_m \rangle - \langle x_0^{**}, x_i^* \rangle| < \frac{1}{m} \quad \text{对于所有 } m \in \mathbb{N} \text{ 且 } i=1,\dots,n.
$$
由 (4) 可知，存在一个弱收敛子列 $(x_{m_k})_{k \in \mathbb{N}}$。记其弱极限为 $x$。它满足 $\|x\| \leq 1$ ，并且
$$
\langle x_i^*, x \rangle = \lim_{k \to \infty} \langle x_i^*, x_{m_k} \rangle = \langle x_0^{**}, x_i^* \rangle \quad \text{对于 } i=1,\dots,n.
$$
这证明了步骤 1。

#### 步骤 2

定义
$$
E := \{ x^* \in X^* \mid \langle x_0^{**}, x^* \rangle = 0 \}
$$
并令 $B^* \subset X^*$ 为闭单位球。则 $E \cap B^*$ 是弱\*闭的。

固定一个元素 $x_0^*$ 在 $E \cap B^*$ 的弱\*闭包中。则 $x_0^* \in B^*$ 由 Banach–Alaoglu 定理。我们必须证明 $x_0^* \in E$。固定常数 $\varepsilon > 0$。我们声称存在序列 $x_n \in B$ 且 $x_n^* \in E \cap B^*$ 使得，对于所有 $n \in \mathbb{N}$，
$$
\langle x_i^*, x_n \rangle = \langle x_0^{**}, x_i^* \rangle = \begin{cases} \langle x_0^{**}, x_0^* \rangle, & \text{若 } i=0, \\ 0, & \text{若 } i \geq 1, \end{cases} \quad \text{对于 } i=0,\dots,n-1, \tag{4}
$$
并且
$$
|\langle x_n^* - x_0^*, x_i \rangle| < \varepsilon \quad \text{对于 } i=1,\dots,n. \tag{5}
$$
由步骤 1 可知，存在元素 $x_1 \in B$ 使得 $\langle x_0^*, x_1 \rangle = \langle x_0^{**}, x_0^* \rangle$。因此 $x_1$ 满足 (4) 对于 $n=1$。此外，由于 $x_0^*$ 属于 $E \cap B^*$ 的弱\*闭包，存在元素 $x_1^* \in E \cap B^*$ 使得
$$
|\langle x_1^* - x_0^*, x_1 \rangle| < \varepsilon.
$$
因此 $x_1^*$ 满足 (5) 对于 $n=1$。

现在令 $n \in \mathbb{N}$ 并假设已找到 $x_i \in B$ 且 $x_i^* \in E \cap B^*$ 使得 (4) 和 (5) 成立。那么，由步骤 1，存在元素 $x_{n+1} \in B$ 使得
$$
\langle x_i^*, x_{n+1} \rangle = \langle x_0^{**}, x_i^* \rangle \quad \text{对于 } i=0,\dots,n.
$$
此外，由于 $x_0^*$ 属于 $E \cap B^*$ 的弱\*闭包，存在元素 $x_{n+1}^* \in E \cap B^*$ 使得
$$
|\langle x_{n+1}^* - x_0^*, x_i \rangle| < \varepsilon \quad \text{对于 } i=1,\dots,n+1.
$$
由依赖选择公理（第 6 页），这表明存在序列 $x_n \in B$ 且 $x_n^* \in E \cap B^*$ 满足 (4) 和 (5)。

由于 $\|x_n\| \leq 1$ 对于所有 $n \in \mathbb{N}$，由 (4) 可知，存在一个弱收敛子列 $(x_{n_k})_{k \in \mathbb{N}}$。记其极限为 $x_0$。则
$$
\langle x_m^*, x_0 \rangle = \lim_{k \to \infty} \langle x_m^*, x_{n_k} \rangle = \langle x_0^{**}, x_m^* \rangle = 0 \quad \text{对于所有 } m \in \mathbb{N}. \tag{6}
$$
这里第二个等式由 (4) 得出，最后一个等式由 $x_m^* \in E \cap B^*$ 对于 $m \geq 1$ 得出。此外，$x_0 \in B$ 并且存在 $m \in \mathbb{N}$ 和 $\lambda_1, \dots, \lambda_m \in \mathbb{R}$ 使得
$$
\lambda_i \geq 0, \quad \sum_{i=1}^m \lambda_i = 1, \quad \left\| x_0 - \sum_{i=1}^m \lambda_i x_i \right\| < \varepsilon. \tag{7}
$$
因此
$$
\begin{aligned}
|\langle x_0^{**}, x_0^* \rangle| &\leq \left| \langle x_0^{**}, x_0^* \rangle - \sum_{i=1}^m \lambda_i \langle x_m^*, x_i \rangle \right| + \left| \left\langle x_m^*, \sum_{i=1}^m \lambda_i x_i - x_0 \right\rangle \right| \\
&\leq \sum_{i=1}^m \lambda_i \left| \langle x_0^{**}, x_0^* \rangle - \langle x_m^*, x_i \rangle \right| + \left\| \sum_{i=1}^m \lambda_i x_i - x_0 \right\| \\
&= \sum_{i=1}^m \lambda_i \left| \langle x_0^* - x_m^*, x_i \rangle \right| + \left\| \sum_{i=1}^m \lambda_i x_i - x_0 \right\| \\
&< 2\varepsilon.
\end{aligned}
$$
这里第一步使用方程 (6)，第二步使用 (7)，第三步使用 (4) 中的方程 $\langle x_0^{**}, x_0^* \rangle = \langle x_0^*, x_i \rangle$，最后一步由 (5)、(6) 和 (7) 得出。因此 $|\langle x_0^{**}, x_0^* \rangle| < 2\varepsilon$ 对于所有 $\varepsilon > 0$，因此 $\langle x_0^{**}, x_0^* \rangle = 0$，所以 $x_0^* \in E \cap B^*$。这证明了步骤 2。

#### 步骤 3

存在元素 $x_0 \in X$ 使得 $\iota(x_0) = x_0^{**}$。

由对偶空间中弱\*闭子空间的表示定理，在步骤 2 中的线性子空间 $E \subset X^*$ 是弱\*闭的。（这是证明中唯一一处我们使用 $X$ 是完备的事实的地方。）因此，由对偶配对的基本性质可知，存在元素 $x_0 \in X$ 使得 $\langle x^*, x_0 \rangle = \langle x_0^{**}, x^* \rangle$ 对于所有 $x^* \in X^*$。这证明了步骤 3 和 Eberlein–Šmulian 定理。