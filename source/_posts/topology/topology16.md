---
title: Ch7.4 相对同调与切除定理
tags:
  - math
  - topology
categories:
  - math
  - topology
index_img: /img/topology.jpg
banner_img: /img/topology.jpg
excerpt: 拓扑学笔记
date: 2024-12-04 14:39:01
---
在前面的部分中，我们定义了奇异同调群 $H_n(X)$，并建立了一些基本性质。然而，直接计算奇异同调往往非常复杂，因为奇异链群太大。为了有效计算，我们需要一些工具来将空间分解为更简单的部分。
相对同调研究的是空间偶 $(X, A)$，其中 $A$ 是 $X$ 的子空间。直观上，相对同调 $H_n(X, A)$ 衡量的是 $X$ 中不被 $A$ 捕获的“洞”。例如，如果 $A$ 是 $X$ 的边界，那么相对同调可能反映 $X$ 模去边界的拓扑性质。
切除定理允许我们在计算相对同调时“切除”或忽略空间的一部分，只要这部分位于子空间的内部。这使得我们可以将空间分解为更小的、更容易理解的片段。

## 1. 相对同调群的定义

### 1.1 相对链复形

设 $X$ 是一个拓扑空间，$A \subseteq X$ 是一个子空间。奇异链复形 $C_\bullet(A)$ 自然通过包含映射成为 $C_\bullet(X)$ 的子复形。即每个奇异单形 $\sigma: \Delta^n \to A$ 也可以视为 $X$ 中的奇异单形（通过复合包含映射 $A \hookrightarrow X$）。

**定义 4.1.1（相对链群）**  
对于空间偶 $(X, A)$，定义 **相对 n 维链群** 为商群：
$$
C_n(X, A) = C_n(X) \big/ C_n(A).
$$
其元素是形如 $c + C_n(A)$ 的陪集，其中 $c \in C_n(X)$。通常将这样的陪集记为 $[c]$ 或 $c \mod C_n(A)$。

由于边界算子 $\partial_n: C_n(X) \to C_{n-1}(X)$ 满足 $\partial_n(C_n(A)) \subseteq C_{n-1}(A)$，它诱导商群上的边界算子：
$$
\partial_n^{\text{rel}}: C_n(X, A) \to C_{n-1}(X, A), \quad [c] \mapsto [\partial_n c].
$$
容易验证 $\partial_n^{\text{rel}}$ 是良定义的（因为若 $[c_1] = [c_2]$，则 $c_1 - c_2 \in C_n(A)$，于是 $\partial_n(c_1 - c_2) \in C_{n-1}(A)$，从而 $[\partial_n c_1] = [\partial_n c_2]$）。并且满足 $\partial_{n-1}^{\text{rel}} \circ \partial_n^{\text{rel}} = 0$。因此，$(C_\bullet(X, A), \partial_\bullet^{\text{rel}})$ 构成一个链复形，称为 **相对链复形**。

**定义 4.1.2（相对同调群）**  
空间偶 $(X, A)$ 的 **相对同调群** 定义为相对链复形的同调群：
$$
H_n(X, A) = H_n(C_\bullet(X, A)) = \frac{\ker \partial_n^{\text{rel}}}{\operatorname{im} \partial_{n+1}^{\text{rel}}}, \quad n \geq 0.
$$

具体地：
- 一个 **相对闭链** 是元素 $[c] \in C_n(X, A)$ 满足 $\partial_n^{\text{rel}}([c]) = 0$，即 $\partial_n c \in C_{n-1}(A)$。
- 一个 **相对边缘链** 是存在 $[d] \in C_{n+1}(X, A)$ 使得 $[c] = \partial_{n+1}^{\text{rel}}([d])$，等价地，存在 $d \in C_{n+1}(X)$ 和 $a \in C_n(A)$ 使得 $c = \partial_{n+1} d + a$。

### 1.2 几何直观

相对同调 $H_n(X, A)$ 的几何意义是什么？它衡量的是 $X$ 中那些边界位于 $A$ 内的 n 维“洞”，但这些洞本身不完全在 $A$ 中。换句话说，我们只关心那些在模去 $A$ 后仍然可见的洞。

**例子**：
1. 设 $X = D^n$ 是 n 维闭圆盘，$A = \partial D^n = S^{n-1}$。则 $H_n(D^n, S^{n-1}) \cong \mathbb{Z}$。这个生成元对应于圆盘本身，其边界在球面上。模去边界后，圆盘成为一个 n-球面（通过将边界捏成一点），所以这个相对同调类对应 $S^n$ 的生成元。
2. 若 $A = \emptyset$，则 $H_n(X, \emptyset) = H_n(X)$，即绝对同调。
3. 若 $A$ 是 $X$ 的一个收缩核，并且收缩是同伦等价，那么相对同调往往为零（更精确地，由长正合序列可知）。

相对同调可以理解为模掉 $A$ 后的空间的约化同调，但需小心：一般地，如果 $A$ 是闭子集且具有良好的性质，有 $H_n(X, A) \cong \tilde{H}_n(X/A)$，其中 $X/A$ 是将 $A$ 捏为一点得到的商空间。这个同构对于 CW 复形成立。

### 1.3 长正合序列

一个空间偶 $(X, A)$ 给出链复形的短正合序列：
$$
0 \to C_\bullet(A) \xrightarrow{i_\#} C_\bullet(X) \xrightarrow{j_\#} C_\bullet(X, A) \to 0,
$$
其中 $i: A \hookrightarrow X$ 是包含映射，$j_\#$ 是商映射。这个短正合序列诱导同调的长正合序列，这是相对同调最基本的工具。

**定理 4.1.3（相对同调的长正合序列）**  
对于空间偶 $(X, A)$，存在一个长正合序列：
$$
\cdots \to H_{n+1}(X, A) \xrightarrow{\partial_*} H_n(A) \xrightarrow{i_*} H_n(X) \xrightarrow{j_*} H_n(X, A) \xrightarrow{\partial_*} H_{n-1}(A) \to \cdots,
$$
其中 $i_*: H_n(A) \to H_n(X)$ 和 $j_*: H_n(X) \to H_n(X, A)$ 由包含映射诱导，而 $\partial_*: H_n(X, A) \to H_{n-1}(A)$ 是连接同态。

连接同态 $\partial_*$ 的定义如下：设 $[c] \in H_n(X, A)$，其中 $c \in C_n(X)$ 是相对闭链，即 $\partial_n c \in C_{n-1}(A)$。由于 $c$ 的相对边界为零，$\partial_n c$ 实际上是 $A$ 中的闭链（因为 $\partial_{n-1}(\partial_n c)=0$）。定义 $\partial_*[c] = [\partial_n c] \in H_{n-1}(A)$。

**证明**：这是链复形的短正合序列诱导长正合序列的直接应用（见第二部分定理 2.3.4）。我们只需验证连接同态如上述定义。

详细步骤：考虑短正合序列：
$$
0 \to C_n(A) \xrightarrow{i_\#} C_n(X) \xrightarrow{j_\#} C_n(X, A) \to 0.
$$
根据蛇引理，连接同态 $\partial_*: H_n(X, A) \to H_{n-1}(A)$ 定义如下：取 $[c] \in H_n(X, A)$，其中 $c \in C_n(X)$ 使得 $j_\#(c) = [c]$ 且 $\partial_n^{\text{rel}}([c]) = 0$。这意味着 $\partial_n c \in \ker j_\# = \operatorname{im} i_\#$，所以存在 $a \in C_{n-1}(A)$ 使得 $i_\#(a) = \partial_n c$。然后定义 $\partial_*[c] = [a] \in H_{n-1}(A)$。但注意 $a$ 是闭链吗？因为 $i_\#$ 是单射，且 $\partial_{n-1} i_\#(a) = \partial_{n-1} \partial_n c = 0$，所以 $\partial_{n-1} a = 0$。因此 $[a]$ 是良定义的闭链类。实际上，$\partial_*[c] = [\partial_n c]$，因为 $i_\#$ 将 $A$ 中的链与 $X$ 中的链等同。

**几何意义**：长正合序列将绝对同调与相对同调联系起来。它告诉我们，$X$ 的同调信息可以从子空间 $A$ 和相对同调 $H_n(X, A)$ 中恢复出来。连接同态 $\partial_*$ 将一个相对闭链的绝对边界（落在 $A$ 中）视为 $A$ 中的一个同调类。

**例子**：再次考虑 $(D^n, S^{n-1})$。长正合序列给出：
$$
\cdots \to H_{n+1}(D^n, S^{n-1}) \to H_n(S^{n-1}) \to H_n(D^n) \to H_n(D^n, S^{n-1}) \to H_{n-1}(S^{n-1}) \to \cdots.
$$
已知 $D^n$ 可缩，所以对于 $k>0$，$H_k(D^n)=0$。同时，$H_n(D^n, S^{n-1}) \cong \mathbb{Z}$（当 $n>0$），且对于 $k \neq n$，$H_k(D^n, S^{n-1})=0$（这需要另外计算）。对于 $n>1$，序列在 $H_n(S^{n-1})$ 附近的一段为：
$$
0 \to H_n(D^n, S^{n-1}) \to H_{n-1}(S^{n-1}) \to 0,
$$
所以有 $H_n(D^n, S^{n-1}) \cong H_{n-1}(S^{n-1})$。对于 $n=1$，序列为：
$$
0 \to H_1(D^1, S^0) \to H_0(S^0) \to H_0(D^1) \to H_0(D^1, S^0) \to 0.
$$
已知 $H_0(S^0) \cong \mathbb{Z} \oplus \mathbb{Z}$，$H_0(D^1) \cong \mathbb{Z}$，包含映射 $i_*: H_0(S^0) \to H_0(D^1)$ 将两个生成元映到同一个生成元（因为 $D^1$ 连通），所以 $\ker i_* \cong \mathbb{Z}$，$\operatorname{coker} i_* = 0$。由正合性，$H_1(D^1, S^0) \cong \ker i_* \cong \mathbb{Z}$，且 $H_0(D^1, S^0) = 0$。

## 2. 切除定理

切除定理（Excision Theorem）是同调论中的一个关键定理，它允许我们在计算相对同调时移除空间的某些部分，只要这些部分位于子空间的内部。

### 2.1 切除定理的陈述

**定理 4.2.1（切除定理）**  
设 $X$ 是一个拓扑空间，子集 $Z \subseteq A \subseteq X$ 满足 $\operatorname{cl}(Z) \subseteq \operatorname{int}(A)$（即 $Z$ 的闭包包含在 $A$ 的内部中）。则包含映射 $i: (X \setminus Z, A \setminus Z) \hookrightarrow (X, A)$ 诱导同构：
$$
i_*: H_n(X \setminus Z, A \setminus Z) \xrightarrow{\cong} H_n(X, A) \quad \text{对所有 } n.
$$
有时也表述为：如果 $U \subseteq A$ 使得 $\operatorname{cl}(U) \subseteq \operatorname{int}(A)$，那么包含映射诱导同构 $H_n(X \setminus U, A \setminus U) \cong H_n(X, A)$。

**几何解释**：如果我们有一个子空间 $A$，并且有一个更小的子集 $Z$ 完全在 $A$ 的内部，那么我们可以将 $Z$ 从 $X$ 和 $A$ 中同时移除，而不改变相对同调。换句话说，相对同调 $H_n(X, A)$ 只依赖于 $X$ 中靠近 $A$ 的部分，而远离 $A$ 的内部可以忽略。

常见的应用情形：$A$ 是 $X$ 的一个开邻域，或者 $A$ 是 $X$ 的一个子复形，而 $Z$ 是 $A$ 中一个可以被“收缩”掉的部分。

### 2.2 证明思路：重分引理

切除定理的证明需要一些技术性工具，主要思想是将奇异链“重分”，使得每个单形要么完全在 $A$ 内部，要么完全在 $X \setminus Z$ 中，从而可以将其转化为 $(X \setminus Z, A \setminus Z)$ 中的相对链。我们概述主要步骤。

首先，注意到包含映射诱导链映射 $i_\#: C_\bullet(X \setminus Z, A \setminus Z) \to C_\bullet(X, A)$，我们需要证明它诱导同调同构。这通常通过证明该链映射是链同伦等价来实现。具体地，我们构造一个逆映射（在同调意义上）或证明它诱导同构。

证明的核心是下面的 **重分引理**（Subdivision Lemma）：

**引理 4.2.2（重分引理）**  
设 $\mathcal{U} = \{U_j\}_{j \in J}$ 是 $X$ 的一个开覆盖。定义 $C_n^\mathcal{U}(X)$ 为 $C_n(X)$ 中由那些像集包含在某个 $U_j$ 内的奇异单形生成的子群。则包含映射 $i: C_\bullet^\mathcal{U}(X) \hookrightarrow C_\bullet(X)$ 是一个链同伦等价。也就是说，存在链映射 $\rho: C_\bullet(X) \to C_\bullet^\mathcal{U}(X)$ 使得 $\rho \circ i$ 和 $i \circ \rho$ 分别链同伦于恒等映射。

**几何思想**：我们可以将任意奇异单形“重分”为更小的奇异单形，使得每个小单形的像都落在某个开集 $U_j$ 中。这种重分过程通过重心重分（barycentric subdivision）来实现。重心重分是一个组合过程，将标准单形划分为更小的单形，并且可以迭代进行使得每个小单形的直径任意小。由于紧性，奇异单形的像是紧集，可以被开覆盖有限覆盖，所以经过足够多次重分后，每个小单形的像将完全落在某个开集内。

基于重分引理，我们可以证明切除定理：

考虑开覆盖 $\mathcal{U} = \{A, X \setminus Z\}$。由于 $\operatorname{cl}(Z) \subseteq \operatorname{int}(A)$，我们有 $X = \operatorname{int}(A) \cup (X \setminus \operatorname{cl}(Z))$，因此 $\mathcal{U}$ 确实是 $X$ 的开覆盖。根据重分引理，包含映射 $C_\bullet^\mathcal{U}(X) \hookrightarrow C_\bullet(X)$ 诱导同调同构。

现在考虑相对版本。定义 $C_n^\mathcal{U}(X, A) = C_n^\mathcal{U}(X) / (C_n^\mathcal{U}(X) \cap C_n(A))$。实际上，由于 $A$ 是 $\mathcal{U}$ 中的一个开集，可以证明链复形 $C_\bullet^\mathcal{U}(X, A)$ 与 $C_\bullet(X \setminus Z, A \setminus Z)$ 有密切联系。具体来说，每个相对链在重分后可以表示为一些落在 $A$ 或 $X \setminus Z$ 中的小单形的组合。那些落在 $A$ 中的部分可以模掉，而落在 $X \setminus Z$ 中的部分给出了 $(X \setminus Z, A \setminus Z)$ 中的链。通过仔细的论证，可以建立同构。

**注意**：详细的证明需要构造重心重分的链映射，并证明它是链同伦于恒等映射的。这涉及到相当复杂的组合几何，但直观上是清晰的。

### 2.3 切除定理的另一种形式：MV序列的切除形式

切除定理常常与Mayer-Vietoris序列结合使用。事实上，切除定理可以视为Mayer-Vietoris序列的一个推论，反之亦然。我们将在下一节讨论Mayer-Vietoris序列。

## 3. 应用

### 3.1 维数公理的证明

在同调论的公理化体系中，维数公理（dimension axiom）指出：一点空间 $P$ 的同调满足 $H_0(P) \cong \mathbb{Z}$，且对于 $n \neq 0$，$H_n(P) = 0$。我们已经用奇异同调直接计算验证了这个公理。现在，我们可以用切除定理和长正合序列来重新验证，这展示了这些工具的力量。

实际上，我们已经直接计算过一点空间的同调，但为了练习，我们可以用相对同调来推导球面的同调，然后令 $n=0$ 得到一点的情形。

### 3.2 局部同调概念引入

相对同调允许我们定义局部同调，它研究一个点附近的同调性质。

**定义 4.3.1（局部同调）**  
设 $X$ 是一个拓扑空间，$x \in X$。点 $x$ 处的 **局部同调群** 定义为：
$$
H_n(X, X \setminus \{x\}).
$$
直观上，这个群刻画了在 $x$ 附近 $X$ 的局部拓扑结构。例如，如果 $X$ 是一个 n 维流形，那么对于任意内点 $x$，有 $H_n(X, X \setminus \{x\}) \cong \mathbb{Z}$。这反映了局部上，流形看起来像 $\mathbb{R}^n$，而 $H_n(\mathbb{R}^n, \mathbb{R}^n \setminus \{0\}) \cong \mathbb{Z}$。

我们可以用切除定理来计算局部同调：如果 $U$ 是 $x$ 的一个邻域，那么由切除定理（取 $Z = X \setminus U$，$A = X \setminus \{x\}$，注意需要满足闭包条件），有：
$$
H_n(X, X \setminus \{x\}) \cong H_n(U, U \setminus \{x\}).
$$
因此，局部同调只依赖于 $x$ 的任意小邻域。

**例子**：计算 $\mathbb{R}^n$ 在原点处的局部同调。考虑空间偶 $(\mathbb{R}^n, \mathbb{R}^n \setminus \{0\})$。我们可以用同伦等价来简化：$\mathbb{R}^n \setminus \{0\}$ 同伦等价于 $S^{n-1}$，并且包含映射 $S^{n-1} \hookrightarrow \mathbb{R}^n \setminus \{0\}$ 是同伦等价。同时，$\mathbb{R}^n$ 可缩。但直接使用长正合序列并不容易，因为相对同调与绝对同调的关系需要知道映射。更好的方法是注意到 $(\mathbb{R}^n, \mathbb{R}^n \setminus \{0\})$ 同伦等价于 $(D^n, S^{n-1})$，因为我们可以将 $\mathbb{R}^n$ 径向收缩到单位圆盘，并且将 $\mathbb{R}^n \setminus \{0\}$ 形变收缩到 $S^{n-1}$。我们已经知道 $H_n(D^n, S^{n-1}) \cong \mathbb{Z}$（当 $n>0$），且低维为零。所以对于 $n \geq 1$，$H_n(\mathbb{R}^n, \mathbb{R}^n \setminus \{0\}) \cong \mathbb{Z}$，而其他维数为零。对于 $n=0$，$\mathbb{R}^0$ 是一个点，需要单独计算。

局部同调在流形理论和局部代数几何中非常重要，因为它可以检测奇点。

### 3.3 应用例子：球面同调的计算（再次）

我们使用切除定理和长正合序列来更高效地计算球面 $S^n$ 的同调。

考虑球面 $S^n$，将其表示为两个开集的并：设 $U_+ = S^n \setminus \{N\}$，$U_- = S^n \setminus \{S\}$，其中 $N$ 和 $S$ 分别是北极和南极。那么 $U_+$ 和 $U_-$ 都同伦等价于一点（因为它们是星形区域），且 $U_+ \cap U_-$ 同伦等价于 $S^{n-1}$（因为它是一个去掉两极的球面，可以形变收缩到赤道）。

我们想用 Mayer-Vietoris 序列来计算 $S^n$ 的同调，但 Mayer-Vietoris 序列将在下一节正式引入。这里我们可以用切除定理和长正合序列来模拟。

另一种方法：考虑空间偶 $(D^n, S^{n-1})$。我们已经知道 $H_k(D^n, S^{n-1}) \cong \tilde{H}_k(S^n)$。而通过切除定理，我们可以将 $(D^n, S^{n-1})$ 与其他空间偶联系起来。

具体地，将 $D^n$ 视为上半球面，将 $S^{n-1}$ 视为边界。考虑另一个下半球面 $D^n_-$，使得 $S^n = D^n \cup D^n_-$，且 $D^n \cap D^n_- = S^{n-1}$。那么由切除定理（实际上更适用的是 Mayer-Vietoris 序列），我们可以将 $S^n$ 的同调表示为两个圆盘的同调及其交的同调。

不过，我们将在下一节系统介绍 Mayer-Vietoris 序列后，再给出完整的计算。

### 3.4 应用例子：圆柱与环面的相对同调

考虑圆柱 $X = S^1 \times I$，其中 $I = [0,1]$。设 $A = S^1 \times \{0\}$ 是底部圆周。计算 $H_n(X, A)$。

由于 $A$ 是 $X$ 的收缩核（我们可以将圆柱垂直压缩到底部），包含映射 $A \hookrightarrow X$ 是同伦等价吗？实际上，圆柱可收缩到底部，所以 $X$ 和 $A$ 是同伦等价的。因此，由同伦不变性，$i_*: H_n(A) \to H_n(X)$ 是同构。在长正合序列中：
$$
\cdots \to H_n(A) \xrightarrow{i_*} H_n(X) \to H_n(X, A) \to H_{n-1}(A) \xrightarrow{i_*} H_{n-1}(X) \to \cdots
$$
由于 $i_*$ 是同构，由正合性可知 $H_n(X, A) = 0$ 对所有 $n$。这符合直观：模掉底部后，圆柱没有新的洞。

现在考虑环面 $T^2 = S^1 \times S^1$，设 $A = S^1 \vee S^1$ 是两个生成圈的楔和（比如，取经圈和纬圈的交点作为基点，然后取经圈和纬圈）。计算 $H_n(T^2, A)$。

我们可以用长正合序列：
$$
\cdots \to H_n(A) \to H_n(T^2) \to H_n(T^2, A) \to H_{n-1}(A) \to \cdots
$$
已知：$H_0(T^2) \cong \mathbb{Z}$，$H_1(T^2) \cong \mathbb{Z} \oplus \mathbb{Z}$，$H_2(T^2) \cong \mathbb{Z}$；对于 $A = S^1 \vee S^1$，由于 wedge sum 的性质，同调为 $H_0(A) \cong \mathbb{Z}$，$H_1(A) \cong \mathbb{Z} \oplus \mathbb{Z}$，更高维为零。包含映射 $A \hookrightarrow T^2$ 在 $H_1$ 上诱导什么？直观上，它将两个生成元映为环面的两个独立的一维洞，所以 $i_*: H_1(A) \to H_1(T^2)$ 应该是同构。在 $H_0$ 上也是同构。那么在长正合序列中，对于 $n=2$，我们有：
$$
\cdots \to H_2(A) \to H_2(T^2) \to H_2(T^2, A) \to H_1(A) \xrightarrow{i_*} H_1(T^2) \to \cdots
$$
由于 $H_2(A)=0$，且 $i_*$ 在 $H_1$ 上是同构，序列变为：
$$
0 \to \mathbb{Z} \to H_2(T^2, A) \to \mathbb{Z} \oplus \mathbb{Z} \xrightarrow{\cong} \mathbb{Z} \oplus \mathbb{Z} \to H_1(T^2, A) \to 0.
$$
由此可得 $H_2(T^2, A) \cong \mathbb{Z}$，并且 $H_1(T^2, A) = 0$。对于 $H_0$，类似可得 $H_0(T^2, A) = 0$。所以相对同调集中在维数2。

**几何解释**：相对同调 $H_2(T^2, A)$ 的生成元对应环面本身，其边界落在 $A$ 上（实际上，环面没有边界，所以是闭链，但在相对意义下，我们可以将整个环面视为相对闭链，因为它的边界为零，自然落在 $A$ 中）。模掉 $A$ 后，这个相对闭链不再是边缘，因为它不能由三维链的边缘得到（没有三维链）。所以它生成一个相对同调类。
