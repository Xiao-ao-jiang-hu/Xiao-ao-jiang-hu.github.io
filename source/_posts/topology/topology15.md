---
title: Ch7.3 奇异同调
tags:
  - math
  - topology
categories:
  - math
  - topology
index_img: /img/topology.jpg
banner_img: /img/topology.jpg
excerpt: 拓扑学笔记
abbrlink: 124a1ebd
date: 2024-11-28 12:19:10
---
第二部分建立了链复形和同调代数的基本框架。现在应用这一框架定义奇异同调——一种适用于任意拓扑空间的同调理论。奇异同调不依赖于空间的特殊结构（如三角剖分或胞腔分解），因此具有最广泛的适用性。我们将从奇异单形的概念出发，构建奇异链复形，并详细研究其基本性质。

## 1. 奇异单形与奇异链复形

### 1.1 标准单形的几何直观

为了定义奇异同调，我们需要一些基本的几何对象作为。这些就是标准单形。

**定义 3.1.1（标准n-单形）**  
对于每个非负整数 $n$，**标准n-单形** $\Delta^n$ 定义为：
$$
\Delta^n = \left\{ (t_0, t_1, \dots, t_n) \in \mathbb{R}^{n+1} \,\middle|\, t_i \geq 0, \, \sum_{i=0}^n t_i = 1 \right\}.
$$
它可以等同于以点 $e_0 = (1,0,\dots,0), e_1 = (0,1,0,\dots,0), \dots, e_n = (0,\dots,0,1)$ 为顶点的凸包。

**几何解释**：
- $\Delta^0$：单个点（可以想象为空间中的一个点）
- $\Delta^1$：单位线段 $[0,1]$（端点分别为 $e_0$ 和 $e_1$）
- $\Delta^2$：实心等边三角形（顶点 $e_0, e_1, e_2$）
- $\Delta^3$：实心正四面体
- 更高维类似：n维的“最简单”的凸多面体

标准单形具有自然的定向：顶点按标号顺序 $e_0, e_1, \dots, e_n$ 给出正向。

**面映射**：对于每个 $i = 0, 1, \dots, n$，存在一个自然的**第i个面映射** $\varepsilon_i^n: \Delta^{n-1} \to \Delta^n$，它将 $\Delta^{n-1}$ 线性映射到 $\Delta^n$ 的与顶点 $e_i$ 相对的那个面上。具体公式为：
$$
\varepsilon_i^n(t_0, \dots, t_{n-1}) = (t_0, \dots, t_{i-1}, 0, t_i, \dots, t_{n-1}).
$$
也就是说，在第 $i$ 个位置插入一个0，其余坐标顺延。

**例子**：
- $\varepsilon_0^1: \Delta^0 \to \Delta^1$ 将点映射到端点 $e_1 = (0,1)$
- $\varepsilon_1^1: \Delta^0 \to \Delta^1$ 将点映射到端点 $e_0 = (1,0)$
- 对于三角形 $\Delta^2$，面映射 $\varepsilon_0^2$ 将线段 $\Delta^1$ 映射到边 $[e_1, e_2]$，等等。

这些面映射在定义边界算子时至关重要。

### 1.2 奇异单形：连续映射作为基本单元

**定义 3.1.2（奇异单形）**  
设 $X$ 是一个拓扑空间。一个**奇异n-单形** $\sigma$ 是一个连续映射 $\sigma: \Delta^n \to X$。

“奇异”强调这些映射不必是嵌入；它们可以是非常“病态”的，例如将整个单形坍缩成一个点，或者以复杂的方式折叠。这允许我们不需要对空间 $X$ 做任何假设，它可以是任意拓扑空间。

**几何解释**：
- 一个奇异0-单形就是 $X$ 中的一个点
- 一个奇异1-单形是 $X$ 中的一条路径（可能不自相交，也可能非常曲折）
- 一个奇异2-单形是 $X$ 中的一个“三角形面片”（可能弯曲、折叠）
- 更高维类似

奇异单形是奇异链复形的“生成元”。

### 1.3 奇异链复形

**定义 3.1.3（奇异链群）**  
对于拓扑空间 $X$ 和整数 $n \geq 0$，定义**奇异n-链群** $C_n(X)$ 为所有形式有限和 $\sum_{i} a_i \sigma_i$ 生成的自由阿贝尔群，其中 $a_i \in \mathbb{Z}$，每个 $\sigma_i$ 是一个奇异n-单形。换句话说，$C_n(X)$ 是以所有奇异n-单形为基的自由阿贝尔群。

对于 $n < 0$，我们约定 $C_n(X) = 0$。

一个**奇异n-链**就是 $C_n(X)$ 中的一个元素，即有限多个奇异n-单形的带整系数的线性组合。

**注意**：由于 $X$ 通常有无限多个奇异单形（除非 $X$ 是有限离散空间），$C_n(X)$ 通常是无限生成的自由阿贝尔群。但每个链本身是有限组合，这保证了代数的可行性。

### 1.4 边缘算子

现在我们来定义边界算子，它将一个n-链映射到一个(n-1)-链。直观上，一个单形的边界由其各个面组成，但要考虑定向。

**定义 3.1.4（奇异边缘算子）**  
对于奇异n-单形 $\sigma: \Delta^n \to X$，定义其**边缘**为：
$$
\partial_n(\sigma) = \sum_{i=0}^n (-1)^i \sigma \circ \varepsilon_i^n.
$$
这里 $\sigma \circ \varepsilon_i^n: \Delta^{n-1} \to X$ 是一个奇异(n-1)-单形，称为 $\sigma$ 的**第i个面**。系数 $(-1)^i$ 是交错符号，保证了定向的一致性。

然后将 $\partial_n$ 线性扩展到整个 $C_n(X)$：对于链 $c = \sum_j a_j \sigma_j$，定义 $\partial_n(c) = \sum_j a_j \partial_n(\sigma_j)$。

对于 $n \leq 0$，定义 $\partial_n = 0$。

**几何动机**：考虑一个奇异1-单形 $\sigma: \Delta^1 \to X$，即一条路径。其边界应为两个端点：起点和终点。但注意定向：$\partial_1(\sigma) = \sigma \circ \varepsilon_0^1 - \sigma \circ \varepsilon_1^1$。如果我们将 $\varepsilon_0^1$ 视为映射到参数1（即终点），$\varepsilon_1^1$ 视为映射到参数0（即起点），那么 $\partial_1(\sigma) = \sigma(1) - \sigma(0)$，确实给出了“终点减起点”。

对于奇异2-单形 $\sigma: \Delta^2 \to X$（一个三角形面片），其边界应为三条边：$\partial_2(\sigma) = \sigma \circ \varepsilon_0^2 - \sigma \circ \varepsilon_1^2 + \sigma \circ \varepsilon_2^2$。注意符号交替：这保证了当我们将两个三角形沿一条边粘合时，公共边的方向相反，从而在求和时抵消。

**关键性质**：
$$
\partial_{n-1} \circ \partial_n = 0 \quad \text{对所有 } n.
$$
这通常简记为 $\partial^2 = 0$。

**证明**：只需验证在一个奇异n-单形 $\sigma$ 上。计算：
$$
\partial_{n-1}(\partial_n(\sigma)) = \partial_{n-1}\left( \sum_{i=0}^n (-1)^i \sigma \circ \varepsilon_i^n \right) = \sum_{i=0}^n (-1)^i \sum_{j=0}^{n-1} (-1)^j (\sigma \circ \varepsilon_i^n) \circ \varepsilon_j^{n-1}.
$$
我们需要处理双重组合 $\sigma \circ (\varepsilon_i^n \circ \varepsilon_j^{n-1})$。注意到对于 $j < i$，有组合关系：
$$
\varepsilon_i^n \circ \varepsilon_j^{n-1} = \varepsilon_j^n \circ \varepsilon_{i-1}^{n-1}.
$$
（直观上，先去掉第j个顶点，再去掉第i个顶点，等价于先去掉第i个顶点，再去掉第j个顶点，但要注意索引偏移。）利用这个关系，我们可以将双重和中的项配对。具体地，每一项对应一对指标 $(i,j)$。对于 $j < i$，项 $\sigma \circ (\varepsilon_i^n \circ \varepsilon_j^{n-1})$ 出现在求和中两次：一次来自 $(i,j)$，符号为 $(-1)^{i+j}$；另一次来自 $(j, i-1)$，符号为 $(-1)^{j+(i-1)} = (-1)^{i+j-1}$。这两个符号相反，因此抵消。所有项两两抵消，总和为零。

因此，$(C_\bullet(X), \partial_\bullet)$ 构成一个链复形，称为**奇异链复形**。

### 1.5 奇异同调群

**定义 3.1.5（奇异同调群）**  
空间 $X$ 的**奇异同调群**定义为奇异链复形的同调群：
$$
H_n(X) = H_n(C_\bullet(X)) = \frac{\ker \partial_n}{\operatorname{im} \partial_{n+1}}, \quad n \geq 0.
$$
对于 $n < 0$，定义 $H_n(X) = 0$。

元素 $z \in \ker \partial_n$ 称为**n维闭链**（或n-循环）。如果存在 $c \in C_{n+1}(X)$ 使得 $z = \partial_{n+1}(c)$，则称 $z$ 是一个**边缘链**（或边界链）。同调群 $H_n(X)$ 中的元素是同调类 $[z]$，其中 $z$ 是闭链，两个闭链 $z_1, z_2$ 属于同一个同调类当且仅当它们的差是一个边缘链。

### 1.6 约化同调

有时我们希望忽略由连通分支产生的冗余信息，专注于“更高维”的洞。这通过约化同调实现。

**定义 3.1.6（约化同调）**  
定义**增广奇异链复形** $\widetilde{C}_\bullet(X)$ 如下：
$$
\cdots \to C_2(X) \xrightarrow{\partial_2} C_1(X) \xrightarrow{\partial_1} C_0(X) \xrightarrow{\epsilon} \mathbb{Z} \to 0,
$$
其中**增广映射** $\epsilon: C_0(X) \to \mathbb{Z}$ 定义为对每个奇异0-单形 $\sigma: \Delta^0 \to X$，$\epsilon(\sigma) = 1$，并线性扩展。可以验证 $\epsilon \circ \partial_1 = 0$（因为 $\partial_1$ 将一个1-单形的边界映为“终点减起点”，在 $\epsilon$ 下像为0）。

约化同调群 $\tilde{H}_n(X)$ 定义为这个增广链复形的同调群：
$$
\tilde{H}_n(X) = H_n(\widetilde{C}_\bullet(X)), \quad n \geq 0.
$$
对于 $n \geq 1$，有 $\tilde{H}_n(X) \cong H_n(X)$，因为链群相同且边界算子相同。对于 $n=0$，有：
$$
\tilde{H}_0(X) = \ker \epsilon / \operatorname{im} \partial_1.
$$
与普通同调的关系：容易验证有短正合序列：
$$
0 \to \tilde{H}_0(X) \to H_0(X) \xrightarrow{\epsilon_*} \mathbb{Z} \to 0,
$$
其中 $\epsilon_*$ 由 $\epsilon$ 诱导。如果 $X$ 非空且道路连通，则 $H_0(X) \cong \mathbb{Z}$，且 $\epsilon_*$ 是同构，从而 $\tilde{H}_0(X) = 0$。更一般地，如果 $X$ 有 $r$ 个道路连通分支，则 $H_0(X) \cong \mathbb{Z}^r$，而 $\tilde{H}_0(X) \cong \mathbb{Z}^{r-1}$。

约化同调的优点：对于可缩空间（例如一点、欧氏空间、圆盘），所有约化同调群为零。这使得许多公式更简洁。

## 2. 基本性质与计算

### 2.1 同伦不变性

奇异同调最重要的性质之一是同伦不变性：同伦等价的空间具有同构的同调群。实际上，更强的结论成立：同伦的映射诱导相同的同调同态。

**定理 3.2.1（同伦不变性）**  
设 $f, g: X \to Y$ 是连续映射。如果 $f$ 和 $g$ 是同伦的（即存在连续映射 $H: X \times I \to Y$ 使得 $H(x,0)=f(x)$ 和 $H(x,1)=g(x)$ 对所有 $x \in X$），那么它们诱导的链映射 $f_\#, g_\#: C_\bullet(X) \to C_\bullet(Y)$ 是链同伦的。因此，它们诱导相同的同调同态：
$$
f_* = g_*: H_n(X) \to H_n(Y) \quad \text{对所有 } n.
$$

**证明思路**：我们需要构造一个链同伦 $D_n: C_n(X) \to C_{n+1}(Y)$ 使得：
$$
\partial_{n+1} \circ D_n + D_{n-1} \circ \partial_n = g_\# - f_\#.
$$
构造的关键是利用同伦 $H$ 和标准单形上的“柱体分解”。

对于每个奇异n-单形 $\sigma: \Delta^n \to X$，考虑复合映射：
$$
H \circ (\sigma \times \operatorname{id}_I): \Delta^n \times I \to Y.
$$
我们希望将 $\Delta^n \times I$ 分解为 $(n+1)$-单形的并，从而将 $H \circ (\sigma \times \operatorname{id}_I)$ 视为一个 $(n+1)$-链。为此，我们需要将乘积 $\Delta^n \times I$ 进行三角剖分。

标准分解：将 $\Delta^n \times I$ 划分为 $n+1$ 个 $(n+1)$-单形。具体地，对于 $i=0,\dots,n$，定义映射 $\rho_i: \Delta^{n+1} \to \Delta^n \times I$ 为：
$$
\rho_i(t_0,\dots,t_{n+1}) = \left( \sum_{j=0}^{i} t_j e_j + \sum_{j=i+1}^{n} t_j e_{j-1}, \, t_{n+1} + \sum_{j=i+1}^{n+1} t_j \right),
$$
但更简单的描述是：$\rho_i$ 将 $\Delta^{n+1}$ 线性映射到 $\Delta^n \times I$ 中，使得顶点对应关系为：
$$
e_0 \mapsto (e_0, 0), \quad \dots, \quad e_i \mapsto (e_i, 0), \quad e_{i+1} \mapsto (e_i, 1), \quad \dots, \quad e_{n+1} \mapsto (e_n, 1).
$$
然后定义链 $P_n = \sum_{i=0}^n (-1)^i \rho_i \in C_{n+1}(\Delta^n \times I)$。可以验证，这个链的边界满足：
$$
\partial P_n = i_1 - i_0 - \sum_{i=0}^n (-1)^i (\varepsilon_i^n \times \operatorname{id}_I)_\#(P_{n-1}),
$$
其中 $i_0, i_1: \Delta^n \to \Delta^n \times I$ 是底部和顶部的包含：$i_0(x) = (x,0)$，$i_1(x) = (x,1)$。

现在，对于奇异n-单形 $\sigma: \Delta^n \to X$，定义：
$$
D_n(\sigma) = (H \circ (\sigma \times \operatorname{id}_I))_\#(P_n) \in C_{n+1}(Y),
$$
其中下标 $\#$ 表示将链映射向前推。然后将 $D_n$ 线性扩展到所有链上。

计算验证 $D$ 满足链同伦方程需要利用 $P_n$ 的边界性质。细节略去，但关键点在于：$D$ 的构造几何上很自然：它将一个单形 $\sigma$ 映射到由同伦 $H$ 在 $\sigma \times I$ 上产生的“柱体”链。

**推论 3.2.2**：如果 $f: X \to Y$ 是一个同伦等价，那么 $f_*: H_n(X) \to H_n(Y)$ 是同构对所有 $n$。特别地，同伦等价的空间具有同构的同调群。

**证明**：设 $g: Y \to X$ 是 $f$ 的同伦逆，即 $g \circ f \simeq \operatorname{id}_X$ 且 $f \circ g \simeq \operatorname{id}_Y$。由定理3.2.1，$(g \circ f)_* = g_* \circ f_* = (\operatorname{id}_X)_* = \operatorname{id}_{H_n(X)}$，同理 $(f \circ g)_* = \operatorname{id}_{H_n(Y)}$。因此 $f_*$ 和 $g_*$ 互为逆同构。

同伦不变性意味着同调群是拓扑不变量（实际上，是同伦型不变量）。特别地，如果空间是可缩的（即同伦等价于一点），那么它的同调群与一点相同。

### 2.2 点空间的同调（维数公理）

**定理 3.2.3（一点空间的同调）**  
设 $*$ 表示单点空间。则：
$$
H_n(*) \cong \begin{cases}
\mathbb{Z}, & n = 0, \\
0, & n \geq 1.
\end{cases}
$$
约化同调：$\tilde{H}_n(*) = 0$ 对所有 $n$。

**证明**：对于单点空间，对每个维数 $n$，恰好存在一个奇异n-单形：常值映射 $\sigma_n: \Delta^n \to *$。因此，链群 $C_n(*) \cong \mathbb{Z}$，由 $\sigma_n$ 生成。

边界算子：对于 $n \geq 1$，计算：
$$
\partial_n(\sigma_n) = \sum_{i=0}^n (-1)^i \sigma_n \circ \varepsilon_i^n.
$$
但每个 $\sigma_n \circ \varepsilon_i^n$ 也是常值映射 $\Delta^{n-1} \to *$，即等于 $\sigma_{n-1}$。因此：
$$
\partial_n(\sigma_n) = \left( \sum_{i=0}^n (-1)^i \right) \sigma_{n-1}.
$$
交错和 $\sum_{i=0}^n (-1)^i$ 当 $n$ 为奇数时为0，当 $n$ 为偶数时为1（因为项数为奇数时正负抵消，项数为偶数时留下+1）。更准确地说：
- 若 $n$ 是奇数，则 $\partial_n(\sigma_n) = 0$。
- 若 $n$ 是偶数且 $n \geq 2$，则 $\partial_n(\sigma_n) = \sigma_{n-1}$。
- 对于 $n=1$，$\partial_1(\sigma_1) = (\sigma_1 \circ \varepsilon_0^1) - (\sigma_1 \circ \varepsilon_1^1) = \sigma_0 - \sigma_0 = 0$。

因此，链复形可以显式写出：
$$
\cdots \xrightarrow{\partial_3} C_2(*) \xrightarrow{\partial_2} C_1(*) \xrightarrow{\partial_1} C_0(*) \to 0,
$$
其中 $C_n(*) \cong \mathbb{Z}$，且：
- $\partial_1 = 0$（因为 $\partial_1(\sigma_1) = 0$）
- $\partial_2: \mathbb{Z} \to \mathbb{Z}$ 是乘以1的同态（因为 $\partial_2(\sigma_2) = \sigma_1$）
- $\partial_3 = 0$（因为 $\partial_3(\sigma_3) = 0$）
- $\partial_4: \mathbb{Z} \to \mathbb{Z}$ 是乘以1的同态，等等。

所以链复形在偶数维和奇数维之间交替：当 $n$ 为偶数时，$\partial_n$ 是同构（乘以1）；当 $n$ 为奇数时，$\partial_n = 0$。

计算同调：
- $H_0(*) = \ker \partial_0 / \operatorname{im} \partial_1$。由于 $\partial_0 = 0$，$\ker \partial_0 = C_0(*) \cong \mathbb{Z}$；而 $\operatorname{im} \partial_1 = 0$（因为 $\partial_1=0$）。所以 $H_0(*) \cong \mathbb{Z}$。
- 对于 $n \geq 1$：
  - 如果 $n$ 是奇数，则 $\partial_n = 0$，所以 $\ker \partial_n = C_n(*) \cong \mathbb{Z}$；而 $\partial_{n+1}$ 是同构（因为 $n+1$ 是偶数），所以 $\operatorname{im} \partial_{n+1} = C_n(*)$。因此 $H_n(*) = \mathbb{Z}/\mathbb{Z} = 0$。
  - 如果 $n$ 是偶数，则 $\partial_n$ 是同构，所以 $\ker \partial_n = 0$；而 $\partial_{n+1} = 0$，所以 $\operatorname{im} \partial_{n+1} = 0$。因此 $H_n(*) = 0$。

所以所有高阶同调群均为零。

对于约化同调，考虑增广链复形：
$$
\cdots \to C_1(*) \xrightarrow{0} C_0(*) \xrightarrow{\epsilon} \mathbb{Z} \to 0,
$$
其中 $\epsilon(\sigma_0) = 1$。显然 $\ker \epsilon = 0$，所以 $\tilde{H}_0(*) = 0$，高阶与普通同调相同，均为零。

**几何意义**：一点空间没有洞，所以除了反映连通性的 $H_0$ 外，其他同调群均为零。约化同调则全部为零，这符合可缩空间的直观。

### 2.3 零维同调的几何意义

零维同调 $H_0(X)$ 反映了空间 $X$ 的连通性。更精确地说，它反映了道路连通分支的个数。

**定理 3.2.4**：设 $X$ 是一个拓扑空间。则 $H_0(X)$ 同构于自由阿贝尔群 $\mathbb{Z}^{\pi_0(X)}$，其中 $\pi_0(X)$ 是 $X$ 的道路连通分支的集合。特别地，如果 $X$ 是道路连通的，则 $H_0(X) \cong \mathbb{Z}$。

**证明**：我们构造一个同态 $\phi: H_0(X) \to \mathbb{Z}^{\pi_0(X)}$ 并证明它是同构。

首先，将 $X$ 分解为道路连通分支：$X = \bigsqcup_{\alpha \in A} X_\alpha$，其中 $A = \pi_0(X)$。每个奇异0-单形（点）属于某个分支。定义映射 $\psi: C_0(X) \to \mathbb{Z}^A$ 为：对于0-单形 $\sigma: \Delta^0 \to X$，令 $\psi(\sigma)$ 是分支指标函数，在 $\sigma$ 所在分支上取1，其他地方取0。线性扩展。换句话说，如果将 $\mathbb{Z}^A$ 视为以 $A$ 为基的自由阿贝尔群，则 $\psi$ 将点 $\sigma$ 映到其所属分支的生成元。

显然 $\psi$ 是满射。我们断言：$\ker \psi = \operatorname{im} \partial_1$。

- 首先，若 $c = \partial_1(\tau)$ 是一个边缘链，其中 $\tau$ 是1-链，则由于每条路径的端点在同一道路连通分支内，$\psi(c) = 0$。所以 $\operatorname{im} \partial_1 \subseteq \ker \psi$。
- 反之，设 $c = \sum_i a_i \sigma_i \in \ker \psi$。这意味着在每个道路连通分支内，系数和为零。固定一个分支 $X_\alpha$，令其中的点集为 $\{x_1, \dots, x_m\}$，对应系数 $a_1, \dots, a_m$ 满足 $\sum a_i = 0$。在该分支内选取一个基点 $x_0$。由于道路连通，对每个 $x_i$ 存在一条路径 $\gamma_i$ 从 $x_0$ 到 $x_i$。将 $\gamma_i$ 视为奇异1-单形，则 $\partial_1(\gamma_i) = x_i - x_0$。因此，$a_i x_i = a_i x_0 + a_i \partial_1(\gamma_i)$。将所有点求和，得到在该分支内：
  $$
  \sum_{i=1}^m a_i x_i = \left(\sum_{i=1}^m a_i\right) x_0 + \partial_1\left(\sum_{i=1}^m a_i \gamma_i\right) = \partial_1\left(\sum_{i=1}^m a_i \gamma_i\right),
  $$
  因为系数和为零。因此，在每个分支内，该分支的部分0-链是某个1-链的边缘。将各分支的1-链组合起来，得到整个 $c$ 属于 $\operatorname{im} \partial_1$。

因此，$\ker \psi = \operatorname{im} \partial_1$。由同态基本定理，$\psi$ 诱导同构：
$$
\overline{\psi}: C_0(X)/\operatorname{im} \partial_1 \to \mathbb{Z}^A.
$$
但 $C_0(X)/\operatorname{im} \partial_1 = H_0(X)$（因为 $\partial_0=0$，所以 $\ker \partial_0 = C_0(X)$）。所以 $H_0(X) \cong \mathbb{Z}^A$。

特别地，如果 $X$ 道路连通，则 $A$ 只有一个元素，所以 $H_0(X) \cong \mathbb{Z}$。

**注记**：实际上，我们证明了 $H_0(X)$ 由道路连通分支生成，每个分支贡献一个自由生成元。这一定理也解释了为什么可缩空间（道路连通）的 $H_0$ 是 $\mathbb{Z}$。

### 2.4 球面的同调计算

球面是同调理论中最基本的例子之一。我们将计算 $S^n$ 的奇异同调群。

**定理 3.2.5（球面的同调）**  
对于 $n \geq 0$，球面 $S^n$ 的奇异同调群为：
$$
H_k(S^n) \cong \begin{cases}
\mathbb{Z}, & k = 0, \\
\mathbb{Z}, & k = n \text{ 且 } n > 0, \\
0, & \text{其他}.
\end{cases}
$$
对于 $n=0$，$S^0$ 是两个点，其同调为：
$$
H_k(S^0) \cong \begin{cases}
\mathbb{Z} \oplus \mathbb{Z}, & k = 0, \\
0, & k > 0.
\end{cases}
$$
约化同调：
$$
\tilde{H}_k(S^n) \cong \begin{cases}
\mathbb{Z}, & k = n, \\
0, & \text{其他}.
\end{cases}
$$
对于 $n=0$，$\tilde{H}_0(S^0) \cong \mathbb{Z}$，$\tilde{H}_k(S^0)=0$ 对 $k>0$。

**证明**：我们对 $n$ 进行归纳。基础情形 $n=0$ 容易：$S^0$ 是两个离散点，由定理3.2.4，$H_0(S^0) \cong \mathbb{Z} \oplus \mathbb{Z}$。对于 $k>0$，由于每个点可缩，且离散点的任意奇异单形只能是常值映射到某个点，因此可以证明 $H_k(S^0) = 0$（或者更一般地，对于不连通空间，高阶同调是各分支高阶同调的直和，而单点的高阶同调为零）。

现在假设对 $S^{n-1}$ 结论成立，我们来计算 $S^n$（$n \geq 1$）。我们将使用 Mayer-Vietoris 序列，但这需要一些准备工作。这里我们给出一个使用相对同调长正合序列的证明。

考虑空间对 $(D^n, S^{n-1})$，其中 $D^n$ 是 $n$ 维闭圆盘，边界为 $S^{n-1}$。注意 $D^n$ 可缩，因此 $H_k(D^n) = 0$ 对 $k>0$，$H_0(D^n) \cong \mathbb{Z}$。同时，商空间 $D^n/S^{n-1}$ 同胚于 $S^n$（将边界捏成一个点）。我们有相对同调的长正合序列：
$$
\cdots \to H_k(D^n) \to H_k(D^n, S^{n-1}) \to H_{k-1}(S^{n-1}) \to H_{k-1}(D^n) \to \cdots
$$
由于 $D^n$ 可缩，当 $k>1$ 时，$H_k(D^n)=0$ 且 $H_{k-1}(D^n)=0$，所以序列给出同构：
$$
H_k(D^n, S^{n-1}) \cong H_{k-1}(S^{n-1}) \quad \text{对 } k>1.
$$
对于 $k=1$，序列为：
$$
0 \to H_1(D^n, S^{n-1}) \to H_0(S^{n-1}) \xrightarrow{i_*} H_0(D^n) \to H_0(D^n, S^{n-1}) \to 0.
$$
我们需要分析映射 $i_*: H_0(S^{n-1}) \to H_0(D^n)$。当 $n>1$ 时，$S^{n-1}$ 是道路连通的，所以 $H_0(S^{n-1}) \cong \mathbb{Z}$，$H_0(D^n) \cong \mathbb{Z}$。包含映射 $i: S^{n-1} \hookrightarrow D^n$ 诱导的同态 $i_*$ 实际上是同构，因为两个生成元都对应整个空间（它们都是道路连通的，且包含映射将点映到点，在 $H_0$ 中所有点等价）。因此，由正合性，$H_1(D^n, S^{n-1}) = \ker i_* = 0$，且 $H_0(D^n, S^{n-1}) = \operatorname{coker} i_* = 0$。

当 $n=1$ 时，$S^{n-1} = S^0$，$H_0(S^0) \cong \mathbb{Z} \oplus \mathbb{Z}$，而 $H_0(D^1) \cong \mathbb{Z}$。包含映射 $i: S^0 \hookrightarrow D^1$ 将两个端点映到区间两端。在 $H_0$ 中，这两个端点可能不等价？实际上，区间 $D^1$ 是道路连通的，所以两个端点在 $H_0(D^1)$ 中是等价的。因此，$i_*$ 将两个生成元都映到 $H_0(D^1)$ 的同一个生成元（即1）。所以 $i_*$ 的核为 $\{(a,b) \in \mathbb{Z} \oplus \mathbb{Z} \mid a+b=0\} \cong \mathbb{Z}$，而余核为0。于是 $H_1(D^1, S^0) \cong \mathbb{Z}$，$H_0(D^1, S^0) = 0$。

现在，我们还需要知道相对同调 $H_k(D^n, S^{n-1})$ 与 $S^n$ 的同调的关系。有一个一般事实：对于好空间对 $(X,A)$，如果 $A$ 是非空的闭子集，且 $(X,A)$ 是好偶（例如 CW 对），那么有同构 $H_k(X,A) \cong \tilde{H}_k(X/A)$。这里 $D^n/S^{n-1} \cong S^n$，所以 $H_k(D^n, S^{n-1}) \cong \tilde{H}_k(S^n)$。我们暂时接受这个事实，后续会证明。

因此，综合以上：
- 对于 $n>1$，当 $k>1$ 时，$\tilde{H}_k(S^n) \cong H_{k-1}(S^{n-1})$；当 $k=1$ 时，$\tilde{H}_1(S^n)=0$；当 $k=0$ 时，$\tilde{H}_0(S^n)=0$（因为 $S^n$ 道路连通）。
- 对于 $n=1$，$\tilde{H}_1(S^1) \cong \mathbb{Z}$，$\tilde{H}_0(S^1)=0$。

由归纳假设，$H_{k-1}(S^{n-1})$ 在 $k-1 = n-1$ 即 $k=n$ 时为 $\mathbb{Z}$，否则为0。所以对 $n>1$，$\tilde{H}_n(S^n) \cong \mathbb{Z}$，其他为0。再由约化同调与普通同调的关系（$\tilde{H}_0=0$，$\tilde{H}_k = H_k$ 对 $k>0$），得到定理结论。

**另一种直接构造**：对于 $S^n$，我们可以显式构造一个非平凡的 n-循环。考虑将 $\Delta^{n+1}$ 的边界映射到 $S^n$ 的映射：具体地，将 $S^n$ 视为 $\mathbb{R}^{n+1}$ 中的单位球面，取标准 $(n+1)$-单形 $\Delta^{n+1}$，将其边界（由 $n+2$ 个 n-单形组成）通过径向投影映射到 $S^n$ 上。这样得到的奇异 n-链是一个闭链（因为边界抵消），且不是边缘。这给出了 $H_n(S^n)$ 的一个生成元。

**例子**：计算 $S^1$ 的奇异同调。
- $H_0(S^1) \cong \mathbb{Z}$，因为 $S^1$ 道路连通。
- $H_1(S^1)$：考虑将 $\Delta^1$ 缠绕圆周一周的映射 $\sigma: \Delta^1 \to S^1$，例如参数化 $\sigma(t) = e^{2\pi i t}$。但单独这个映射的边界不为零（起点和终点相同，所以差为零？实际上，$\partial_1(\sigma) = \sigma(1) - \sigma(0) = 1 - 1 = 0$，所以它是一个闭链）。我们需要检查它是否是边缘。直观上，如果它是某个2-链的边缘，那么它可以被填充，但 $S^1$ 中间有洞，所以不是。实际上，我们可以证明 $H_1(S^1) \cong \mathbb{Z}$，生成元由这样的闭链给出。
- 对于 $k \geq 2$，$H_k(S^1) = 0$。

## 3. 函子性

奇异同调不仅是空间的代数不变量，而且对空间之间的连续映射有自然的对应关系。

### 3.1 诱导链映射

**定义 3.3.1（诱导链映射）**  
设 $f: X \to Y$ 是一个连续映射。对于奇异 n-单形 $\sigma: \Delta^n \to X$，定义 $f_\#(\sigma) = f \circ \sigma: \Delta^n \to Y$。然后将 $f_\#$ 线性扩展到奇异链：
$$
f_\#\left( \sum_i a_i \sigma_i \right) = \sum_i a_i f_\#(\sigma_i).
$$
这给出了一族同态 $f_\#: C_n(X) \to C_n(Y)$。

**命题 3.3.2**：$f_\#$ 是一个链映射，即下列图表交换：
$$
\begin{CD}
C_n(X) @>{f_\#}>> C_n(Y) \\
@V{\partial_n}VV @VV{\partial_n}V \\
C_{n-1}(X) @>{f_\#}>> C_{n-1}(Y)
\end{CD}
$$
换言之，$\partial_n \circ f_\# = f_\# \circ \partial_n$。

**证明**：在生成元 $\sigma$ 上验证：
$$
\partial_n(f_\#(\sigma)) = \partial_n(f \circ \sigma) = \sum_{i=0}^n (-1)^i (f \circ \sigma) \circ \varepsilon_i^n = \sum_{i=0}^n (-1)^i f \circ (\sigma \circ \varepsilon_i^n),
$$
而
$$
f_\#(\partial_n(\sigma)) = f_\#\left( \sum_{i=0}^n (-1)^i \sigma \circ \varepsilon_i^n \right) = \sum_{i=0}^n (-1)^i f \circ (\sigma \circ \varepsilon_i^n).
$$
所以相等。

由于 $f_\#$ 是链映射，它诱导同调群的同态。

**定义 3.3.3（诱导同调同态）**  
链映射 $f_\#$ 诱导同态 $f_*: H_n(X) \to H_n(Y)$，定义为：
$$
f_*([z]) = [f_\#(z)] \quad \text{对于闭链 } z \in Z_n(X).
$$
这是良定义的，因为如果 $z' = z + \partial c$，则 $f_\#(z') = f_\#(z) + \partial f_\#(c)$，所以它们在 $H_n(Y)$ 中等价。

### 3.2 函子性质

**定理 3.3.4（函子性）**  
奇异同调 $H_n$ 是一个函子，从拓扑空间范畴（对象为拓扑空间，态射为连续映射）到阿贝尔群范畴。具体地：
1. 恒等映射 $\operatorname{id}_X: X \to X$ 诱导恒等同态 $\operatorname{id}_{H_n(X)}: H_n(X) \to H_n(X)$。
2. 对于连续映射 $f: X \to Y$ 和 $g: Y \to Z$，有 $(g \circ f)_* = g_* \circ f_*: H_n(X) \to H_n(Z)$。

**证明**：
1. 显然，$\operatorname{id}_\#$ 是恒等链映射，所以诱导恒等同态。
2. 在链水平上，$(g \circ f)_\# = g_\# \circ f_\#$，因此在同调水平上也有 $(g \circ f)_* = g_* \circ f_*$。

函子性意味着我们可以研究映射如何影响同调。例如，如果一个映射是同伦等价，那么它诱导同构。如果一个映射是常值映射，那么它在正维数上诱导零同态（因为常值映射将一切映到一点，而一点的正维同调为零）。

### 3.3 例子：圆周的自映射

考虑圆周 $S^1$，视作复平面中的单位圆。考虑映射 $f_m: S^1 \to S^1$，$f_m(z) = z^m$，其中 $m$ 是整数。我们计算诱导同态 $f_{m*}: H_1(S^1) \to H_1(S^1)$。

我们知道 $H_1(S^1) \cong \mathbb{Z}$。我们需要确定 $f_{m*}$ 在这个生成元上的作用。取一个生成元：例如，让奇异1-单形 $\sigma: \Delta^1 \to S^1$ 为 $\sigma(t) = e^{2\pi i t}$。那么 $\sigma$ 是一个闭链，且其同调类生成 $H_1(S^1)$。计算 $f_{m \#}(\sigma) = f_m \circ \sigma$，即 $t \mapsto e^{2\pi i m t}$。这个映射绕圆周 $m$ 圈。直观上，它应该对应于 $m$ 倍生成元。因此，$f_{m*}$ 是乘以 $m$ 的同态：$f_{m*}([z]) = m[z]$。

为了严格证明，我们可以使用度数理论或单纯逼近。这里我们给出一个基于局部次数的论证：考虑 $S^1$ 的一个单纯剖分，将圆周分为若干段，使得每段在 $f_m$ 下是覆盖映射。然后计算链映射的矩阵表示。细节略。

**更一般地**：对于球面 $S^n$，映射 $f: S^n \to S^n$ 诱导的同态 $f_*: H_n(S^n) \to H_n(S^n)$ 是乘以一个整数，称为映射 $f$ 的度数（degree）。度数是一个重要的同伦不变量。

### 3.4 同调与同伦的关系

同调群和同伦群都是拓扑不变量，但它们提供的信息不同。对于道路连通空间，$H_1(X)$ 是基本群 $\pi_1(X)$ 的 Abel 化：
$$
H_1(X) \cong \pi_1(X)_{\text{ab}} = \pi_1(X) / [\pi_1(X), \pi_1(X)],
$$
其中右边是基本群交换化所得的阿贝尔群。对于高阶，一般没有这样简单的关系，但有时同调群更容易计算。

**例子**：对于环面 $T^2 = S^1 \times S^1$，基本群为 $\mathbb{Z} \times \mathbb{Z}$，其 Abel 化仍是 $\mathbb{Z} \times \mathbb{Z}$，而 $H_1(T^2) \cong \mathbb{Z} \times \mathbb{Z}$，符合上述关系。但 $H_2(T^2) \cong \mathbb{Z}$，而高阶同伦群 $\pi_n(T^2)$ 对于 $n \geq 2$ 非常复杂（包含球面同伦群的直和等）。

函子性也允许我们研究空间的代数拓扑性质如何通过映射传递。例如，如果一个映射诱导同调群的单射或满射，可以推断映射的某些性质。
