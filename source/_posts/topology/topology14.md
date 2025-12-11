---
title: Ch7.2 链复形与同调代数预备
tags:
  - math
  - topology
categories:
  - math
  - topology
index_img: /img/topology.jpg
banner_img: /img/topology.jpg
excerpt: 拓扑学笔记
abbrlink: 927017f8
date: 2024-11-20 16:04:03
---
上一部分介绍了同调论的基本思想：通过代数方法探测拓扑空间中的“洞”。现在我们系统地建立同调理论所需的代数框架——链复形理论。

## 1. 链复形的定义

### 1.1 几何动机与直观理解

想象一个三角形区域：
- 它有一个二维的内部（面）
- 边界由三条一维的边组成
- 每条边有两个零维的端点

关键观察：**边界的边界总是为零**。三角形的边界是三条边组成的闭合路径，而这个闭合路径的边界（每条边的两个端点相抵消）总和为零。

链复形正是形式化这一观察：我们将空间分解为不同维度的基本单元，记录它们之间的边界关系，从而捕捉空间的拓扑性质。

### 1.2 形式定义

**定义 2.1.1（链复形）**  
一个**链复形** $(C_\bullet, \partial_\bullet)$ 由以下数据组成：
1. 一族阿贝尔群 $C_n$（$n \in \mathbb{Z}$），称为**n维链群**
2. 一族群同态 $\partial_n: C_n \to C_{n-1}$，称为**边界算子**或**边缘算子**

满足**基本关系**：
$$
\partial_{n-1} \circ \partial_n = 0 \quad \text{对所有 } n \in \mathbb{Z}
$$
通常简记为 $\partial^2 = 0$。

图示表示为：
$$
\cdots \xrightarrow{\partial_{n+2}} C_{n+1} \xrightarrow{\partial_{n+1}} C_n \xrightarrow{\partial_n} C_{n-1} \xrightarrow{\partial_{n-1}} \cdots
$$

**注记**：
- 通常考虑非负维数，即当 $n < 0$ 时 $C_n = 0$
- 链群 $C_n$ 中的元素称为 **n维链**
- 条件 $\partial^2 = 0$ 是链复形的核心，反映了“边界的边界为零”这一几何事实

### 1.3 闭链与边缘链

**定义 2.1.2（闭链）**  
一个 n 维链 $c \in C_n$ 称为 **n维闭链**，如果 $\partial_n(c) = 0$。  
所有 n 维闭链构成的集合：
$$
Z_n = Z_n(C_\bullet) = \ker(\partial_n: C_n \to C_{n-1})
$$
是 $C_n$ 的子群，称为 **n维闭链群**。

**定义 2.1.3（边缘链）**  
一个 n 维链 $c \in C_n$ 称为 **n维边缘链**，如果存在 $d \in C_{n+1}$ 使得 $c = \partial_{n+1}(d)$。  
所有 n 维边缘链构成的集合：
$$
B_n = B_n(C_\bullet) = \operatorname{im}(\partial_{n+1}: C_{n+1} \to C_n)
$$
是 $C_n$ 的子群，称为 **n维边缘链群**。

**关键性质**：由 $\partial^2 = 0$ 可得 $B_n \subseteq Z_n$，即每个边缘链一定是闭链。

**几何解释**：
- 闭链：像闭合曲线、闭合曲面那样的结构，没有边界
- 边缘链：是某个更高维区域的边界
- 条件 $B_n \subseteq Z_n$：一个区域的边界总是闭合的（没有自己的边界）

### 1.4 同调群

**定义 2.1.4（同调群）**  
链复形 $(C_\bullet, \partial_\bullet)$ 的 **n维同调群** 定义为商群：
$$
H_n(C_\bullet) = Z_n / B_n = \ker \partial_n / \operatorname{im} \partial_{n+1}
$$

**几何意义**：
- 同调群 $H_n$ 度量了“不能被填充的 n 维洞”
- 闭链 $z \in Z_n$ 代表一个潜在的洞
- 如果 $z$ 是边缘链（$z \in B_n$），则它可以被填充，不表示真正的洞
- 同调类 $[z] \in H_n$ 是闭链模去边缘链的等价类，表示一个洞的代数化身

### 1.5 详细例子

#### 例 1：三角形的链复形

考虑一个三角形单纯复形，由以下构成：
- 顶点：$v_0, v_1, v_2$
- 边：$e_{01} = [v_0, v_1]$, $e_{12} = [v_1, v_2]$, $e_{20} = [v_2, v_0]$
- 面：$f = [v_0, v_1, v_2]$

构造链复形：
- $C_0$: 由 $v_0, v_1, v_2$ 生成的自由阿贝尔群，形式为 $a_0 v_0 + a_1 v_1 + a_2 v_2$
- $C_1$: 由 $e_{01}, e_{12}, e_{20}$ 生成的自由阿贝尔群
- $C_2$: 由 $f$ 生成的自由阿贝尔群
- $C_n = 0$ 对 $n \geq 3$

边界算子：
- $\partial_1(e_{01}) = v_1 - v_0$
- $\partial_1(e_{12}) = v_2 - v_1$
- $\partial_1(e_{20}) = v_0 - v_2$
- $\partial_2(f) = e_{01} + e_{12} + e_{20}$
- $\partial_n = 0$ 对 $n \geq 3$

验证 $\partial^2 = 0$：
$$
\partial_1(\partial_2(f)) = \partial_1(e_{01} + e_{12} + e_{20}) = (v_1 - v_0) + (v_2 - v_1) + (v_0 - v_2) = 0
$$

计算同调群：
1. **$H_0$**:
   - 所有 0 维链都是闭链（因为 $\partial_0 = 0$）
   - 考虑边缘链：$B_0 = \operatorname{im} \partial_1$
   - 对任意顶点 $v_i, v_j$，有 $v_j - v_i \in B_0$（通过适当的边）
   - 因此所有顶点在商群中等价
   - $H_0 \cong \mathbb{Z}$，生成元是任一顶点类，如 $[v_0]$
   - **几何意义**：三角形是连通的，只有一个连通分支

2. **$H_1$**:
   - 闭链：满足 $\partial_1(c) = 0$ 的 1 维链
   - 设 $c = a e_{01} + b e_{12} + c e_{20}$，则
     $$
     \partial_1(c) = a(v_1 - v_0) + b(v_2 - v_1) + c(v_0 - v_2) = (-a + c)v_0 + (a - b)v_1 + (b - c)v_2 = 0
     $$
     解得 $a = b = c$
   - 所以 $Z_1 = \{ k(e_{01} + e_{12} + e_{20}) \mid k \in \mathbb{Z} \} \cong \mathbb{Z}$
   - 边缘链：$B_1 = \operatorname{im} \partial_2 = \{ k(e_{01} + e_{12} + e_{20}) \mid k \in \mathbb{Z} \}$
   - 因此 $H_1 = Z_1 / B_1 = 0$
   - **几何意义**：三角形内部被填充，没有一维洞

3. **$H_2$**:
   - $Z_2 = \ker \partial_2$，但 $\partial_2(kf) = k(e_{01} + e_{12} + e_{20}) \neq 0$ 除非 $k = 0$
   - 所以 $Z_2 = 0$，从而 $H_2 = 0$
   - **几何意义**：三角形没有二维洞（它不是闭合曲面）

#### 例 2：圆圈（三角形的边界）

考虑与例1相同的顶点和边，但去掉面 $f$。链复形变为：
- $C_0$: 由 $v_0, v_1, v_2$ 生成
- $C_1$: 由 $e_{01}, e_{12}, e_{20}$ 生成
- $C_n = 0$ 对 $n \geq 2$

边界算子与例1相同（但只到 $\partial_1$）。

计算同调：
1. **$H_0$**：与例1相同，$H_0 \cong \mathbb{Z}$

2. **$H_1$**:
   - 闭链：与例1相同，$Z_1 = \{ k(e_{01} + e_{12} + e_{20}) \mid k \in \mathbb{Z} \} \cong \mathbb{Z}$
   - 边缘链：由于没有 $C_2$，$B_1 = 0$
   - 因此 $H_1 = Z_1 / B_1 \cong \mathbb{Z}$
   - **几何意义**：圆圈有一个一维洞

3. **$H_n = 0$** 对 $n \geq 2$

#### 例 3：两个不相交的圆圈

考虑两个圆圈 $S^1 \sqcup S^1$。它们的链复形是每个圆圈链复形的直和。

计算同调：
- $H_0 \cong \mathbb{Z} \oplus \mathbb{Z}$（两个连通分支）
- $H_1 \cong \mathbb{Z} \oplus \mathbb{Z}$（两个独立的一维洞）
- $H_n = 0$ 对 $n \geq 2$

### 1.6 链复形的范畴

链复形与链映射构成一个范畴 **Ch(Ab)**：
- 对象：链复形
- 态射：链映射（见下一节）

这个范畴是阿贝尔范畴，具有核、余核、直和等结构。

## 2. 链映射与链同伦

### 2.1 链映射的定义

**定义 2.2.1（链映射）**  
设 $(C_\bullet, \partial_\bullet)$ 和 $(C'_\bullet, \partial'_\bullet)$ 是两个链复形。一个**链映射** $f_\#: C_\bullet \to C'_\bullet$ 是一族群同态 $f_n: C_n \to C'_n$（$n \in \mathbb{Z}$），使得下图对每个 $n$ 交换：
$$
\begin{CD}
C_n @>{f_n}>> C'_n \\
@V{\partial_n}VV @VV{\partial'_n}V \\
C_{n-1} @>{f_{n-1}}>> C'_{n-1}
\end{CD}
$$
即 $\partial'_n \circ f_n = f_{n-1} \circ \partial_n$。

**几何解释**：链映射将复形 $C$ 的每个链映射到复形 $C'$ 的对应链，且保持边界关系。在拓扑中，连续映射 $\phi: X \to Y$ 诱导奇异链复形之间的链映射 $\phi_\#$，将 $X$ 中的奇异单形复合 $\phi$ 得到 $Y$ 中的奇异单形。

**性质 2.2.2**：链映射保持闭链和边缘链：
1. 若 $z \in Z_n(C)$，则 $f_n(z) \in Z_n(C')$
2. 若 $b \in B_n(C)$，则 $f_n(b) \in B_n(C')$

**证明**：
1. $\partial'_n(f_n(z)) = f_{n-1}(\partial_n(z)) = f_{n-1}(0) = 0$
2. 若 $b = \partial_{n+1}(d)$，则 $f_n(b) = f_n(\partial_{n+1}(d)) = \partial'_{n+1}(f_{n+1}(d)) \in B_n(C')$

### 2.2 诱导的同调同态

由于链映射保持闭链和边缘链，它诱导商群的同态。

**定义 2.2.3（诱导同态）**  
链映射 $f_\#: C_\bullet \to C'_\bullet$ 诱导 **同调同态**：
$$
f_*: H_n(C) \to H_n(C'), \quad [z] \mapsto [f_n(z)]
$$
其中 $[z]$ 表示闭链 $z$ 的同调类。

**验证良定性**：若 $[z_1] = [z_2]$，则 $z_1 - z_2 \in B_n(C)$，于是 $f_n(z_1) - f_n(z_2) \in B_n(C')$，故 $[f_n(z_1)] = [f_n(z_2)]$。

**命题 2.2.4（函子性）**：
1. 恒等链映射诱导恒等同调同态
2. 链映射的复合诱导同调的复合：$(g \circ f)_* = g_* \circ f_*$

因此，同调是链复形范畴到阿贝尔群范畴的函子。

### 2.3 链同伦的定义

链同伦是链映射之间的“同伦”，它使得两个链映射诱导相同的同调同态。

**定义 2.2.5（链同伦）**  
设 $f_\#, g_\#: C_\bullet \to C'_\bullet$ 是两个链映射。一个**链同伦** $D: f_\# \simeq g_\#$ 是一族同态 $D_n: C_n \to C'_{n+1}$（$n \in \mathbb{Z}$），满足：
$$
\partial'_{n+1} \circ D_n + D_{n-1} \circ \partial_n = f_n - g_n
$$
对每个 $n$ 成立。常简记为 $\partial' D + D \partial = f - g$。

**几何解释**：在拓扑中，若 $F: X \times I \to Y$ 是连接 $f$ 和 $g$ 的同伦，则它诱导链同伦。代数上，链同伦 $D$ 提供了一种“缩并”机制，将 $f$ 和 $g$ 的差表示为边缘项。

### 2.4 链同伦的性质

**定理 2.2.6**：若链映射 $f_\#$ 和 $g_\#$ 是链同伦的，则它们诱导相同的同调同态：$f_* = g_*: H_n(C) \to H_n(C')$。

**证明**：设 $D: f_\# \simeq g_\#$ 是链同伦。对任意闭链 $z \in Z_n(C)$，有：
$$
f_n(z) - g_n(z) = \partial'_{n+1}(D_n(z)) + D_{n-1}(\underbrace{\partial_n(z)}_{=0}) = \partial'_{n+1}(D_n(z))
$$
因此 $f_n(z) - g_n(z) \in B_n(C')$，故在 $H_n(C')$ 中 $[f_n(z)] = [g_n(z)]$。

**定义 2.2.7（链等价）**  
链复形 $C_\bullet$ 和 $D_\bullet$ 称为**链等价**的，如果存在链映射 $f: C \to D$ 和 $g: D \to C$，使得 $g \circ f \simeq \operatorname{id}_C$ 且 $f \circ g \simeq \operatorname{id}_D$。此时 $f$ 和 $g$ 称为链等价。

**推论 2.2.8**：链等价诱导同调群的同构。

**证明**：由定理2.2.6，$(g \circ f)_* = g_* \circ f_* = (\operatorname{id}_C)_* = \operatorname{id}_{H_*(C)}$，同理 $f_* \circ g_* = \operatorname{id}_{H_*(D)}$。因此 $f_*$ 和 $g_*$ 是同构。

### 2.5 例子：圆柱上的链同伦

考虑圆柱 $S^1 \times I$。有两个自然映射：
- $i_0: S^1 \to S^1 \times I$，$z \mapsto (z, 0)$
- $i_1: S^1 \to S^1 \times I$，$z \mapsto (z, 1)$

在链水平上，我们可以构造链同伦 $D$ 连接 $i_0$ 和 $i_1$ 诱导的链映射。

具体地，将 $S^1$ 三角化为一个三角形边界（如例2），将圆柱三角化为三棱柱的边界。链同伦 $D$ 将一个1维单形映射到对应的“垂直”2维单形。

代数上，设 $e$ 是 $S^1$ 的一个生成1维链，则 $D(e)$ 是连接 $i_0(e)$ 和 $i_1(e)$ 的2维链。验证 $\partial D(e) = i_1(e) - i_0(e) - D(\partial e)$，由于 $\partial e = 0$，得 $\partial D(e) = i_1(e) - i_0(e)$。

这个例子展示了拓扑同伦如何代数化为链同伦。

## 3. 正合序列与同调代数基本工具

### 3.1 正合序列

**定义 2.3.1（正合序列）**  
阿贝尔群（或模）的序列：
$$
\cdots \longrightarrow A_{n+1} \xrightarrow{f_{n+1}} A_n \xrightarrow{f_n} A_{n-1} \longrightarrow \cdots
$$
称为在 $A_n$ 处**正合**，如果 $\operatorname{im}(f_{n+1}) = \ker(f_n)$。

序列称为**正合序列**，如果它在每个中间群处正合。

**重要特例**：
1. $0 \to A \xrightarrow{f} B$ 正合 ⇔ $f$ 是单射
2. $B \xrightarrow{g} C \to 0$ 正合 ⇔ $g$ 是满射
3. $0 \to A \xrightarrow{f} B \xrightarrow{g} C \to 0$ 正合 ⇔ $f$ 单射，$g$ 满射，且 $\operatorname{im} f = \ker g$。这样的序列称为**短正合序列**。

**几何解释**：短正合序列 $0 \to A \to B \to C \to 0$ 表示 $B$ 是 $A$ 的扩张，且 $C \cong B/A$。

### 3.2 链复形的短正合序列

在拓扑中，子空间包含 $A \hookrightarrow X$ 诱导链复形的短正合序列。

**定义 2.3.2（相对链复形）**  
设 $A_\bullet \subseteq C_\bullet$ 是链复形的子复形（即 $A_n \subseteq C_n$ 且 $\partial(A_n) \subseteq A_{n-1}$）。定义**相对链复形**：
$$
(C/A)_n = C_n / A_n, \quad \partial_n^{\text{rel}}: [c] \mapsto [\partial_n c]
$$
其中 $[c]$ 表示陪集。

有自然的短正合序列：
$$
0 \to A_\bullet \xrightarrow{i} C_\bullet \xrightarrow{\pi} (C/A)_\bullet \to 0
$$
其中 $i$ 是包含，$\pi$ 是商映射。

在拓扑中，若 $A \subseteq X$，则奇异链复形有 $0 \to S_\bullet(A) \to S_\bullet(X) \to S_\bullet(X, A) \to 0$，其中 $S_\bullet(X, A) = S_\bullet(X)/S_\bullet(A)$。

### 3.3 蛇引理

蛇引理是同调代数中的基本工具，用于从短正合序列构造连接同态。

**引理 2.3.3（蛇引理）**  
考虑阿贝尔群（或模）的交换图：
$$
\begin{CD}
0 @>>> A @>{i}>> B @>{j}>> C @>>> 0 \\
@. @V{f}VV @V{g}VV @V{h}VV @. \\
0 @>>> A' @>{i'}>> B' @>{j'}>> C' @>>> 0
\end{CD}
$$
其中两行都是短正合序列。则存在**连接同态** $\delta: \ker h \to \operatorname{coker} f$ 使得下列序列正合：
$$
\ker f \xrightarrow{i_*} \ker g \xrightarrow{j_*} \ker h \xrightarrow{\delta} \operatorname{coker} f \xrightarrow{i'_*} \operatorname{coker} g \xrightarrow{j'_*} \operatorname{coker} h
$$
其中 $i_*, j_*$ 是限制映射，$i'_*, j'_*$ 是诱导映射。

**证明**：我们详细构造连接同态 $\delta$，以展示同调代数中的典型“图追踪”技巧。

#### 构造 $\delta$

1. 取 $c \in \ker h \subseteq C$
2. 由于 $j$ 满射，存在 $b \in B$ 使得 $j(b) = c$
3. 考虑 $g(b) \in B'$。由于 $j'(g(b)) = h(j(b)) = h(c) = 0$，有 $g(b) \in \ker j' = \operatorname{im} i'$
4. 因此存在 $a' \in A'$ 使得 $i'(a') = g(b)$。由 $i'$ 单射，$a'$ 唯一
5. 定义 $\delta(c) = [a'] \in \operatorname{coker} f = A' / \operatorname{im} f$

需要验证：
- **良定性**：若选取不同的 $b'$ 满足 $j(b') = c$，则 $b' - b \in \ker j = \operatorname{im} i$，设 $b' - b = i(a)$。那么 $g(b') = g(b) + g(i(a)) = g(b) + i'(f(a))$，对应的 $a'' = a' + f(a)$，在 $\operatorname{coker} f$ 中 $[a''] = [a']$
- **同态**：易验证 $\delta$ 是群同态
- **正合性**：需要验证序列在 $\ker h$、$\operatorname{coker} f$ 等处的正合性，通过类似图追踪可证

**注记**：名称“蛇引理”来源于连接同态 $\delta$ 在图表中形成的蛇形路径。

### 3.4 长正合序列定理

这是同调论中最重要、最常用的工具之一。

**定理 2.3.4（长正合序列定理）**  
设 $0 \to A_\bullet \xrightarrow{i} B_\bullet \xrightarrow{j} C_\bullet \to 0$ 是链复形的短正合序列。则存在自然的长正合序列：
$$
\cdots \to H_{n+1}(C) \xrightarrow{\partial_*} H_n(A) \xrightarrow{i_*} H_n(B) \xrightarrow{j_*} H_n(C) \xrightarrow{\partial_*} H_{n-1}(A) \to \cdots
$$
其中 $\partial_*: H_n(C) \to H_{n-1}(A)$ 是连接同态。

**证明**：我们将证明分为三步：构造连接同态、验证正合性、自然性。

#### 步骤1：构造连接同态 $\partial_*$

考虑交换图（对每个 $n$）：
$$
\begin{CD}
0 @>>> A_n @>{i_n}>> B_n @>{j_n}>> C_n @>>> 0 \\
@. @V{\partial_n^A}VV @V{\partial_n^B}VV @V{\partial_n^C}VV @. \\
0 @>>> A_{n-1} @>{i_{n-1}}>> B_{n-1} @>{j_{n-1}}>> C_{n-1} @>>> 0
\end{CD}
$$
应用蛇引理，但需调整以获得同调群而非核与余核。

直接构造 $\partial_*: H_n(C) \to H_{n-1}(A)$：
1. 取 $[c] \in H_n(C)$，其中 $c \in C_n$ 满足 $\partial_n^C(c) = 0$
2. 由于 $j_n$ 满射，存在 $b \in B_n$ 使得 $j_n(b) = c$
3. 考虑 $\partial_n^B(b) \in B_{n-1}$。由于 $j_{n-1}(\partial_n^B(b)) = \partial_n^C(j_n(b)) = \partial_n^C(c) = 0$，有 $\partial_n^B(b) \in \ker j_{n-1} = \operatorname{im} i_{n-1}$
4. 因此存在 $a \in A_{n-1}$ 使得 $i_{n-1}(a) = \partial_n^B(b)$
5. 验证 $a$ 是闭链：
   $$
   i_{n-2}(\partial_{n-1}^A(a)) = \partial_{n-1}^B(i_{n-1}(a)) = \partial_{n-1}^B(\partial_n^B(b)) = 0
   $$
   由于 $i_{n-2}$ 单射，得 $\partial_{n-1}^A(a) = 0$
6. 定义 $\partial_*[c] = [a] \in H_{n-1}(A)$

验证 $\partial_*$ 良定义（类似于蛇引理中的验证）。

#### 步骤2：验证正合性

需要验证在 $H_n(A)$、$H_n(B)$、$H_n(C)$ 三处的正合性。我们详细验证一处，其余类似。

**在 $H_n(B)$ 处的正合性**：需证 $\operatorname{im} i_* = \ker j_*$。

- $\operatorname{im} i_* \subseteq \ker j_*$：对 $[a] \in H_n(A)$，$j_*(i_*[a]) = [j_n(i_n(a))] = [0] = 0$
- $\ker j_* \subseteq \operatorname{im} i_*$：设 $[b] \in H_n(B)$ 满足 $j_*[b] = 0$，即 $j_n(b) \in B_n(C)$。存在 $c' \in C_{n+1}$ 使得 $j_n(b) = \partial_{n+1}^C(c')$。由于 $j_{n+1}$ 满射，存在 $b' \in B_{n+1}$ 使 $j_{n+1}(b') = c'$。那么：
  $$
  j_n(b - \partial_{n+1}^B(b')) = j_n(b) - \partial_{n+1}^C(j_{n+1}(b')) = j_n(b) - \partial_{n+1}^C(c') = 0
  $$
  所以 $b - \partial_{n+1}^B(b') \in \ker j_n = \operatorname{im} i_n$，设 $b - \partial_{n+1}^B(b') = i_n(a)$。验证 $a$ 是闭链且 $i_*[a] = [b]$。

类似可验证其他两处的正合性。

#### 步骤3：自然性

若有两个短正合序列之间的映射（即三层的交换图表），则连接同态与诱导映射交换。这通过图追踪可证。

### 3.5 应用：相对同调的长正合序列

在拓扑中最重要的应用是空间偶的同调。

**定义 2.3.5（空间偶的同调）**  
设 $A \subseteq X$ 是拓扑空间对。定义**相对同调群**：
$$
H_n(X, A) = H_n(S_\bullet(X)/S_\bullet(A))
$$
其中 $S_\bullet(X)$ 是 $X$ 的奇异链复形。

**推论 2.3.6**：对空间偶 $(X, A)$，有长正合序列：
$$
\cdots \to H_{n+1}(X, A) \xrightarrow{\partial_*} H_n(A) \to H_n(X) \to H_n(X, A) \xrightarrow{\partial_*} H_{n-1}(A) \to \cdots
$$

**证明**：由短正合序列 $0 \to S_\bullet(A) \to S_\bullet(X) \to S_\bullet(X, A) \to 0$ 应用定理2.3.4即得。

这个序列是计算同调的基本工具，它将相对同调与绝对同调联系起来。

### 3.6 例子：圆盘与边界的同调

设 $D^2$ 是二维圆盘，$\partial D^2 = S^1$ 是其边界。考虑偶 $(D^2, S^1)$。

已知：
- $H_n(D^2) = \begin{cases} \mathbb{Z}, & n=0 \\ 0, & n>0 \end{cases}$（圆盘可缩）
- $H_n(S^1) = \begin{cases} \mathbb{Z}, & n=0,1 \\ 0, & n>1 \end{cases}$

代入长正合序列：
$$
\cdots \to H_2(D^2) \to H_2(D^2, S^1) \to H_1(S^1) \to H_1(D^2) \to H_1(D^2, S^1) \to H_0(S^1) \to H_0(D^2) \to H_0(D^2, S^1) \to 0
$$

代入已知值：
$$
\cdots \to 0 \to H_2(D^2, S^1) \to \mathbb{Z} \to 0 \to H_1(D^2, S^1) \to \mathbb{Z} \xrightarrow{\cong} \mathbb{Z} \to H_0(D^2, S^1) \to 0
$$

分析：
1. 从 $\mathbb{Z} \to 0$ 知该映射为零映射
2. 从 $\mathbb{Z} \xrightarrow{\cong} \mathbb{Z}$ 知最后一个映射是同构
3. 由正合性：
   - 在 $H_2(D^2, S^1)$ 处：$0 \to H_2(D^2, S^1) \to \mathbb{Z} \to 0$ 正合 ⇒ $H_2(D^2, S^1) \cong \mathbb{Z}$
   - 在 $H_1(D^2, S^1)$ 处：$0 \to H_1(D^2, S^1) \to \mathbb{Z} \xrightarrow{\cong} \mathbb{Z}$ 正合 ⇒ $H_1(D^2, S^1) = 0$（因为 $\mathbb{Z} \xrightarrow{\cong} \mathbb{Z}$ 是单射，其核为0）
   - 在 $H_0(D^2, S^1)$ 处：$\mathbb{Z} \xrightarrow{\cong} \mathbb{Z} \to H_0(D^2, S^1) \to 0$ 正合 ⇒ $H_0(D^2, S^1) = 0$

所以 $H_n(D^2, S^1) = \begin{cases} \mathbb{Z}, & n=2 \\ 0, & \text{其他} \end{cases}$

**几何解释**：相对同调 $H_2(D^2, S^1) \cong \mathbb{Z}$ 表示圆盘模去边界后有一个二维的“洞”，实际上这个生成元对应圆盘本身，其边界在 $S^1$ 中。
