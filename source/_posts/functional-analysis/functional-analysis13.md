---
title: Ch 3.1.2 弱拓扑和弱*拓扑的基本性质
tags:
  - math
  - functional analysis
categories:
  - math
  - functional analysis
index_img: /img/fa.jpg
banner_img: /img/fa.jpg
excerpt: 泛函分析课程笔记
abbrlink: 30b933db
date: 2025-11-13 22:11:18
---
# 弱拓扑的基本性质

在无限维Banach空间中，强闭集比弱闭集更多。然而，对于凸集，这两种概念是一致的。因此，Banach空间的一个线性子空间是闭的当且仅当它是弱闭的。

## 闭凸集是弱闭的

设 $X$ 为一个实赋范向量空间，$K \subset X$ 为一个凸子集。则 $K$ 是闭的当且仅当它是弱闭的。

### 证明

设 $K \subset X$ 为一个闭凸集。我们证明它是弱闭的。为此，固定一个元素 $x_0 \in X \setminus K$。则存在一个常数 $\delta > 0$，使得 $B_\delta(x_0) \cap K = \emptyset$。由 Hahn–Banach 分离定理，取 $A := B_\delta(x_0)$ 和 $B := K$，存在一个 $x^* \in X^*$ 和一个 $c \in \mathbb{R}$，使得 $\langle x^*, x \rangle > c$ 对所有 $x \in B_\delta(x_0)$ 成立，且 $\langle x^*, x \rangle \leq c$ 对所有 $x \in K$ 成立。于是
$$
U := \{x \in X \mid \langle x^*, x \rangle > c\}
$$
是一个包含 $x_0$ 且与 $K$ 不相交的弱开集。这表明 $X \setminus K$ 是弱开的，故 $K$ 是弱闭的。反之，$X$ 的每一个弱闭子集都是闭的，这证明了该引理。


## 有界线性泛函是弱连续的

设 $X$ 为一个实赋范向量空间，$\Lambda: X \to \mathbb{R}$ 为一个线性泛函。则 $\Lambda$ 关于 $X$ 上的范数拓扑连续当且仅当它关于弱拓扑连续。这直接由弱拓扑的定义得出。


## 预零化子

设 $X$ 为一个实赋范向量空间，$T \subset X^*$ 为对偶空间 $X^* = \mathcal{L}(X, \mathbb{R})$ 的一个子集。集合
$$
^\perp T := \{x \in X \mid \langle x^*, x \rangle = 0 \text{ 对所有 } x^* \in T\}
$$
被称为 $T$ 的**预零化子**或**左零化子**或**联合核**。它是 $X$ 的一个闭线性子空间。


## 子空间的弱闭包

设 $X$ 为一个实赋范向量空间，$E \subset X$ 为一个线性子空间。则以下结论成立：

1. $E$ 的闭包是子空间 $\overline{E} = {}^\perp(E^\perp)$，且与 $E$ 的弱闭包一致。

2. $E$ 是闭的当且仅当 $E$ 是弱闭的，当且仅当 $E = {}^\perp(E^\perp)$。

3. $E$ 是稠密的当且仅当 $E$ 是弱稠密的，当且仅当 $E^\perp = \{0\}$。

### 证明

公式 $\overline{E} = {}^\perp(E^\perp)$ 是对偶理论中标准结果的重述。该子空间也是 $E$ 的弱闭包，这由弱拓扑的基本性质以及闭凸集是弱闭的这一事实得出。这证明了 (1)。(2) 和 (3) 部分直接由 (1) 得出，这证明了该推论。

## 凸包
该引理表明，在Banach空间中，一个弱收敛序列的极限包含在该序列的闭凸包内。

设 $X$ 为一个实向量空间，$S \subset X$。集合
$$
\operatorname{conv}(S) := \left\{ \sum_{i=1}^n \lambda_i x_i \,\middle|\, n \in \mathbb{N},\, x_i \in S,\, \lambda_i \geq 0,\, \sum_{i=1}^n \lambda_i = 1 \right\}
$$
是凸的，被称为 $S$ 的**凸包**。如果 $X$ 是一个拓扑向量空间，则集合 $S \subset X$ 的凸包的闭包被称为 $S$ 的**闭凸包**，并记作 $\overline{\operatorname{conv}}(S)$。


## Mazur 引理

设 $X$ 为一个实赋范向量空间，$x_i \in X$ 为一个弱收敛于 $x$ 的序列。则
$$
x \in \overline{\operatorname{conv}}(\{x_i \mid i \in \mathbb{N}\}),
$$
即，对每个 $\varepsilon > 0$，存在一个 $n \in \mathbb{N}$ 和实数 $\lambda_1, \dots, \lambda_n$，使得 $\lambda_i \geq 0$ 对所有 $i$ 成立，$\sum_{i=1}^n \lambda_i = 1$，且 $\left\| x - \sum_{i=1}^n \lambda_i x_i \right\| < \varepsilon$。

!!! note
    直观上，若一点 $x$ 不在 $C$ 的范数闭包中，则由 Hahn-Banach 定理存在一个连续线性泛函 $f$ 严格分离 $x$ 与 $C$。于是 $f$ 给出的弱邻域就将 $x$ 与 $C$ 分离，故 $x$ 也不在弱闭包中。这说明了尽管弱拓扑更粗，但连续线性泛函足够多，足以分离凸集与外点。

### 证明

集合 $K := \operatorname{conv}(\{x_i \mid i \in \mathbb{N}\})$ 是凸的，因此其强闭包 $\overline{K}$ 也是凸的。故由闭凸集是弱闭的可知 $\overline{K}$ 是弱闭的。由于 $x_i \in K$ 弱收敛于 $x$，故 $x \in \overline{K}$。


> 由 Mazur 引理可知，在Banach空间 $X$ 中，单位球面 $S \subset X$ 的每个弱收敛序列的弱极限都包含在闭单位球 $B = \operatorname{conv}(S) = \overline{\operatorname{conv}}(S)$ 内。事实上，当 $X$ 是无限维时，$B$ 就是 $S$ 的弱闭包，因此弱拓扑严格弱于范数拓扑。

## 单位球面的弱闭包

设 $X$ 为一个无限维实赋范向量空间，并定义
$$
S := \{x \in X \mid \|x\| = 1\}, \quad B := \{x \in X \mid \|x\| \leq 1\}.
$$
则 $B$ 是 $S$ 的弱闭包。

!!! note
    直观上，这是因为弱拓扑比范数拓扑更粗，其邻域仅由有限个线性泛函控制，从而允许我们通过沿“未被检测”的方向扰动球内的点，使其达到球面，同时保持弱逼近。

### 证明

由闭凸集是弱闭的可知，集合 $B$ 是弱闭的，因此包含 $S$ 的弱闭包。我们证明 $B$ 包含于 $S$ 的弱闭包内。为此，令 $x_0 \in B$，并令 $U \subset X$ 为一个包含 $x_0$ 的弱开集。则存在元素 $x_1^*, \dots, x_n^* \in X^*$ 和一个常数 $\varepsilon > 0$，使得
$$
V := \{x \in X \mid |\langle x_i^*, x - x_0 \rangle| < \varepsilon \text{ 对 } i = 1, \dots, n \text{ 成立}\} \subset U.
$$
由于 $X$ 是无限维的，存在一个非零向量 $\xi \in X$，使得
$$
\langle x_i^*, \xi \rangle = 0 \quad \text{对 } i = 1, \dots, n \text{ 成立}.
$$
由于 $\|x_0\| \leq 1$，存在一个实数 $t$，使得 $\|x_0 + t\xi\| = 1$。因此 $x_0 + t\xi \in V \cap S$，故 $U \cap S \neq \emptyset$。于是 $x_0$ 属于 $S$ 的弱闭包，这完成了该引理的证明。


> 鉴于单位球面的弱闭包这一结果，需要知道：$B$ 中的每个元素是否都是 $S$ 中某个弱收敛序列的极限？答案通常是否定的。例如，$\ell^1$ 中的一个序列弱收敛当且仅当它强收敛。因此，$\ell^1$ 中每个范数为1的弱收敛序列的极限再次具有范数1。结论是Banach空间中一个子集的弱闭包通常比该子集中所有弱收敛序列的极限集合要大得多。


# 弱\*拓扑的基本性质

当 $X$ 是一个Banach空间，$Y$ 是其一个稠密子空间时，对偶空间 $X^*$ 和 $Y^*$ 在典范意义下同构，因为 $Y$ 上的每个有界线性泛函都可以唯一地延拓为 $X$ 上的一个有界线性泛函。该延拓具有与 $Y$ 上原线性泛函相同的范数，因此典范同构 $X^* \to Y^*: x^* \mapsto x^*|_Y$ 是一个等距映射。然而，$X^*$ 和 $Y^*$ 的弱\*拓扑可能会截然不同。具体而言，根据“弱\*连续线性泛函的刻画”定理的 (i) 部分，$Y^*$ 上的弱\*连续线性泛函空间可以被识别为原始的赋范向量空间 $Y$，因此可能比 $X^*$ 上的弱\*连续线性泛函空间小得多。换言之，一个赋范向量空间的完备化是一个Banach空间，且两个空间具有相同的对偶空间，但它们的弱\*拓扑却不同。因此，在处理赋范向量空间的对偶空间的弱\*拓扑与Banach空间的对偶空间的弱\*拓扑时，必须格外小心。


## 弱\*连续线性泛函

设 $X$ 为一个实赋范向量空间，并令
$$
\Lambda: X^* \to \mathbb{R}
$$
为其对偶空间上的一个线性泛函。则以下条件等价：

1. $\Lambda$ 关于 $X^*$ 上的弱\*拓扑是连续的。

2. $\Lambda$ 的核是 $X^*$ 的一个弱\*闭线性子空间。

3. $\Lambda$ 属于包含映射 $\iota: X \to X^{**}$（见 (2.4.1)）的像，即存在一个元素 $x \in X$，使得对所有 $x^* \in X^*$，有 $\Lambda(x^*) = \langle x^*, x \rangle$。

### 证明

这直接由“弱\*连续线性泛函的刻画”定理以及弱\*拓扑的定义得出。


## 子空间的弱\*闭包

设 $X$ 为一个实赋范向量空间，$E \subset X^*$ 为其对偶空间的一个线性子空间。则以下结论成立：

1. 线性子空间 $(^\perp E)^\perp$ 是 $E$ 的弱\*闭包。

2. $E$ 是弱\*闭的当且仅当 $E = (^\perp E)^\perp$。

3. $E$ 在 $X^*$ 中是弱\*稠密的当且仅当 $^\perp E = \{0\}$。

### 证明

由“弱\*连续线性泛函”推论可知，$E$ 的预零化子是 $X^*$ 上在 $E$ 上消失的弱\*连续线性泛函的空间。因此，(1) 部分由“弱\*连续线性泛函的刻画”定理的 (ii) 部分得出。(2) 部分直接由 (1) 得出。(3) 部分由 (1) 以及推论 2.3.4 的事实“任意子集 $S \subset X$ 满足 $S^\perp = X^*$ 当且仅当 $S \subset \{0\}$”得出。这证明了“子空间的弱\*闭包”推论。



## 凸集分离

设 $X$ 为一个实赋范向量空间，$A, B \subset X^*$ 为非空、不相交的凸集，且 $A$ 是弱\*开的。则存在一个元素 $x \in X$，使得
$$
\langle x^*, x \rangle > \sup_{y^* \in B} \langle y^*, x \rangle \quad \text{对所有 } x^* \in A \text{ 成立}.
$$

### 证明

“局部凸空间中的分离定理”和“弱\*连续线性泛函”推论。

## 单位球面的弱\*闭包

设 $X$ 为一个无限维实赋范向量空间，并定义
$$
S^* := \{x^* \in X^* \mid \|x^*\| = 1\}, \quad B^* := \{x^* \in X^* \mid \|x^*\| \leq 1\}.
$$
则 $B^*$ 是 $S^*$ 的弱\*闭包。

### 证明

令 $F_x := \{x^* \in X^* \mid \langle x^*, x \rangle \leq 1\}$ 对 $x \in S$（$X$ 中的单位球面）成立。则对所有 $x \in S$，$F_x$ 是弱\*闭的，因此 $B^* = \bigcap_{x \in S} F_x$ 也是弱\*闭的。现在令 $K \subset X^*$ 为 $S^*$ 的弱\*闭包。则 $K \subset B^*$，因为 $B^*$ 是一个包含 $S^*$ 的弱\*闭集；且 $B^* \subset K$，因为 $K$ 是一个包含 $S^*$ 的弱闭集，而 $B^*$ 是 $S^*$ 的弱闭包（由引理 3.1.21）。

## Goldstine 定理

设 $X$ 为一个实赋范向量空间，$\iota: X \to X^{**}$ 为包含映射 (2.4.1)。则以下结论成立：

1. $\iota(X)$ 在 $X^{**}$ 中是弱\*稠密的。

2. 假设 $X$ 是无限维的，并记 $S \subset X$ 为闭单位球面。则 $\iota(S)$ 的弱\*闭包是闭单位球 $B^{**} \subset X^{**}$。

### 证明

由定义，$^\perp \iota(X) = \{0\}$，故 (1) 由“子空间的弱\*闭包”推论得出。为证明 (2)，令 $K \subset X^{**}$ 为 $\iota(S)$ 的弱\*闭包。则 $K \subset B^{**}$，因为 $B^{**}$ 是弱\*闭的（由“单位球面的弱\*闭包”推论）。此外，集合 $\iota^{-1}(K) \subset X$ 是弱闭的（由练习 3.1.24），且 $S \subset \iota^{-1}(K)$。因此，由引理 3.1.21 可得 $B \subset \iota^{-1}(K)$，从而 $\iota(B) \subset K$，所以 $K$ 是 $\iota(B)$ 的弱\*闭包。于是 $K$ 是凸的（由引理 3.1.10）。现在令 $x_0^{**} \in X^{**} \setminus K$ 并选择一个凸的弱\*开邻域 $U \subset X^{**}$ 使得 $U \cap K = \emptyset$。那么，由“凸集分离”推论，存在一个元素 $x_0^* \in X^*$，使得
$$
\langle x_0^{**}, x_0^* \rangle > \sup_{x^{**} \in K} \langle x^{**}, x_0^* \rangle \geq \sup_{x \in S} \langle \iota(x), x_0^* \rangle = \sup_{x \in S} \langle x_0^*, x \rangle = \|x_0^*\|.
$$
因此 $\|x_0^{**}\| > 1$，故 $x_0^{**} \notin B^{**}$。于是 $B^{**} \subset K \subset B^{**}$，所以 $B^{**} = K$。这证明了 Goldstine 定理。


Goldstine 定理表明，与弱拓扑相反，$X^*$ 的一个闭线性子空间不一定弱\*闭。例如，空间 $c_0$（例 1.3.7）是 $\ell^\infty \cong (\ell^1)^*$ 的一个闭线性子空间，但在弱\*拓扑下是稠密的，因此不是弱\*闭的。对弱\*闭子空间的研究将在第 3.3 节中再次展开。