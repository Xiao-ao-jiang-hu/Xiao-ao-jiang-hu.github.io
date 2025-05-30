---
title: tcs-hw-9
date: 2025-05-31 01:56:48
tags:
    - tcs
excerpt:
---
## 9.1
### 题目
**问题 1.** 证明当 TQBF（真量化布尔公式问题）限制在量词后面的部分是合取范式（CNF）时，它仍然是 PSPACE-完全的。

### 解答
#### 证明步骤
**步骤 1: CNF-TQBF ∈ PSPACE**
- 标准 TQBF 问题（无矩阵形式限制）已知在 PSPACE 中（由 PSPACE = APTQBF 的性质可得）。
- CNF-TQBF 是 TQBF 的子集，因为其矩阵被限制为 CNF 形式。

- 因此，CNF-TQBF ∈ PSPACE。

**步骤 2: CNF-TQBF 是 PSPACE-难（PSPACE-hard）**
- 要证明 CNF-TQBF 是 PSPACE-难的，需证明标准 TQBF（其矩阵可以是任意布尔公式）可以多项式时间归约到 CNF-TQBF。
- **归约思路**：给定一个标准 TQBF 实例 $\Phi = Q_1 x_1 Q_2 x_2 \cdots Q_n x_n  \phi(x_1, \ldots, x_n)$，其中 $\phi$ 是任意布尔公式，我们将其转换为一个等价的 CNF-TQBF 实例 $\Phi'$，其中矩阵是 CNF 形式。这通过以下步骤实现：
  1. **应用 Tseitin 变换**：将矩阵 $\phi$ 转换为 CNF 形式，但引入额外的辅助变量。
     - Tseitin 变换是一种多项式时间算法，可将任意布尔公式 $\phi$ 转换为一个 CNF 公式 $\phi'$，同时引入一组新变量 $y_1, \ldots, y_m$，使得：
       $$
       \phi(x_1, \ldots, x_n) \equiv \exists y_1 \cdots \exists y_m  \phi'(x_1, \ldots, x_n, y_1, \ldots, y_m),
       $$
       其中 $\phi'$ 是 CNF 公式，且变换后公式大小（变量数和子句数）是原始公式大小的线性倍（因此多项式时间可完成）。
     - 新变量 $y_1, \ldots, y_m$ 是“存在量化”的，因为它们用于编码 $\phi$ 的子公式的结构，确保 $\phi'$ 在逻辑上等价于 $\phi$（在给定存在量词下）。
  2. **构造新公式**：将 Tseitin 变换的结果嵌入原量词序列中：
     $$
     \Phi' = Q_1 x_1 Q_2 x_2 \cdots Q_n x_n \exists y_1 \cdots \exists y_m  \phi'(x_1, \ldots, x_n, y_1, \ldots, y_m).
     $$
     - 这里，新添加的量词 $\exists y_1 \cdots \exists y_m$ 被放置在原量词序列的最后（即最内层），因为辅助变量 $y_i$ 依赖于所有先前的变量 $x_1, \ldots, x_n$。
  3. **等价性证明**：$\Phi$ 等价于 $\Phi'$，即：
     $$
     \Phi \text{ 为真} \iff \Phi' \text{ 为真}.
     $$
     - **理由**：由 Tseitin 变换的性质，对于任意固定赋值给 $x_1, \ldots, x_n$，存在赋值给 $y_1, \ldots, y_m$ 使得 $\phi'(x_1, \ldots, x_n, y_1, \ldots, y_m)$ 为真当且仅当 $\phi(x_1, \ldots, x_n)$ 为真。因此，整个量化公式的真值被保留。
     - 量词顺序不变（仅在最内层添加存在量词），因此等价性成立。
  4. **矩阵是 CNF**：$\phi'$ 是 CNF 公式，因此 $\Phi'$ 是一个有效的 CNF-TQBF 实例。
  5. **归约复杂度**：Tseitin 变换可在多项式时间内完成（相对于原始公式大小），且引入的新变量和子句数量是原始公式大小的线性函数，因此整个归约是多项式时间。
- **PSPACE-难性**：由于标准 TQBF 是 PSPACE-完全的，且我们给出了从 TQBF 到 CNF-TQBF 的多项式时间归约，因此 CNF-TQBF 是 PSPACE-难的。

## 9.2
### 题目
设 $\text{SUM} = \{(x, y, z) \mid x, y, z > 0 \text{ 是满足 } x + y = z \text{ 的二进制整数}\}$。证明 $\text{SUM} \in L$。

### 解答


假设输入格式为字符串 $w = x \# y \# z$，其中 $\#$ 是分隔符。

#### 算法描述
1. **计算字符串长度**：
   - 扫描输入，计算 $x$ 的长度 $\text{len}_x$：初始化计数器 $\text{len}_x = 0$，从输入起始位置向右扫描，每读到一个非 $\#$ 字符，$\text{len}_x$ 加 1，直到遇到第一个 $\#$。
   - 类似地，计算 $y$ 的长度 $\text{len}_y$：从第一个 $\#$ 后开始，初始化 $\text{len}_y = 0$，扫描直到第二个 $\#$，每读一个字符，$\text{len}_y$ 加 1。
   - 计算 $z$ 的长度 $\text{len}_z$：从第二个 $\#$ 后开始，初始化 $\text{len}_z = 0$，扫描直到输入结束，每读一个字符，$\text{len}_z$ 加 1。
   - 空间分析：每个长度计数器最多为 $n$，存储需 $O(\log n)$ 位。

2. **计算最大位置**：
   - 计算 $\text{max\_len}_{xy} = \max(\text{len}_x, \text{len}_y)$。
   - 设 $\text{max\_pos} = \text{max\_len}_{xy} + 1$（因为 $z$ 可能比 $\max(\text{len}_x, \text{len}_y)$ 多一位）。
   - 空间分析：$\text{max\_len}_{xy}$ 和 $\text{max\_pos}$ 最多为 $n + 1$，存储需 $O(\log n)$ 位。

3. **初始化进位**：
   - $\text{carry} = 0$（初始进位）。
   - 空间分析：$\text{carry}$ 为 0 或 1，需 $O(1)$ 空间。

4. **逐位加法验证**：
   - 对于位置 $t$ 从 0 到 $\text{max\_pos}$（包含）：
     - **计算索引**：
       - 对于 $x$，索引 $i_x = \text{len}_x - t$（若 $1 \leq i_x \leq \text{len}_x$，则位有效，否则为 0）。
       - 对于 $y$，索引 $i_y = \text{len}_y - t$（若 $1 \leq i_y \leq \text{len}_y$，则位有效，否则为 0）。
       - 对于 $z$，索引 $i_z = \text{len}_z - t$（仅当比较时需要）。
     - **获取位值**：
       - $\text{bit}_x = \begin{cases} 
          \text{input}[i_x] & \text{if } 1 \leq i_x \leq \text{len}_x \\
          0 & \text{otherwise}
        \end{cases}$
       - $\text{bit}_y = \begin{cases} 
          \text{input}[\text{start}_y + i_y - 1] & \text{if } 1 \leq i_y \leq \text{len}_y \\
          0 & \text{otherwise}
        \end{cases}$
        其中 $\text{start}_y = \text{len}_x + 2$（$y$ 的起始位置）。
       - 类似地，$z$ 的起始位置 $\text{start}_z = \text{len}_x + \text{len}_y + 3$。
       - 空间分析：索引计算和位置值最多为 $O(n)$，存储需 $O(\log n)$ 位。
     - **计算和与期望位**：
       - $s = \text{bit}_x + \text{bit}_y + \text{carry}$
       - $\text{exp\_z\_bit} = s \mod 2$
       - $\text{new\_carry} = \lfloor s / 2 \rfloor$
       - 空间分析：$s \leq 3$，$\text{exp\_z\_bit}$ 和 $\text{new\_carry}$ 为常数大小，需 $O(1)$ 空间。
     - **验证**：
       - 若 $t < \text{len}_z$:
         - 获取实际位 $\text{bit}_z = \text{input}[\text{start}_z + i_z - 1]$（若 $1 \leq i_z \leq \text{len}_z$)。
         - 若 $\text{bit}_z \neq \text{exp\_z\_bit}$，拒绝。
       - 若 $t \geq \text{len}_z$:
         - 若 $\text{exp\_z\_bit} \neq 0$，拒绝（因为 $z$ 无此位，但期望值非零）。
     - **更新进位**：$\text{carry} = \text{new\_carry}$.
   - 空间分析：$t$ 最多为 $\text{max\_pos} \leq n + 1$，存储需 $O(\log n)$ 位。

5. **结束处理**：
   - 循环结束后，若未拒绝，则接受（即 $x + y = z$)。
   - 注意：在 $t = \text{max\_pos}$ 时，$\text{new\_carry}$ 必为 0，因此无需额外检查进位。

#### 空间复杂度分析
- 存储的长度（$\text{len}_x, \text{len}_y, \text{len}_z$）需 $O(\log n)$ 位。
- $\text{max\_len}_{xy}, \text{max\_pos}, t$ 需 $O(\log n)$ 位。
- 进位（$\text{carry}, \text{new\_carry}$）需 $O(1)$ 空间。
- 临时变量（索引、位值、和等）需 $O(\log n)$ 或 $O(1)$ 空间。
- 总工作空间为 $O(\log n)$.

## 9.3
### 题目

(a) 一个无向图是**二分图**（bipartite），如果其节点可以被划分为两个集合，使得所有边都连接一个集合中的节点与另一个集合中的节点。证明一个图是二分图当且仅当它不包含节点数为奇数的环（即奇环）。

(b) 设 $\text{BIPARTITE} = \{ \langle G \rangle \mid G \text{ 是一个二分图} \}$。证明 $\text{BIPARTITE}$ 属于复杂度类 NL（非确定性对数空间）。


### 解答

#### (a) 证明：一个图是二分图当且仅当它不包含奇环

1. **如果 $G$ 是二分图，则 $G$ 中不存在奇环。**
   
   假设 $G$ 是二分图，则节点集 $V$ 可以被划分为两个不相交的集合 $U$ 和 $V$，使得每条边都连接 $U$ 中的一个节点和 $V$ 中的一个节点（即没有边在同一个集合内）。
   
   考虑 $G$ 中的任意一个环 $C = v_1 - v_2 - \cdots - v_k - v_1$，其中 $k \geq 3$。由于 $G$ 是二分图，节点在环中必须交替地属于 $U$ 和 $V$。不失一般性，假设 $v_1 \in U$。则：
   - $v_2 \in V$（因为边 $(v_1, v_2)$ 连接 $U$ 和 $V$），
   - $v_3 \in U$（因为边 $(v_2, v_3)$ 连接 $V$ 和 $U$），
   - 依此类推。
   
   一般地，对于节点 $v_i$：
   - 如果 $i$ 是奇数，则 $v_i \in U$,
   - 如果 $i$ 是偶数，则 $v_i \in V$.
   
   现在，考虑节点 $v_k$ 和 $v_1$：
   - 如果 $k$ 是奇数，则 $v_k \in U$（因为 $k$ 奇数）。
   - 但边 $(v_k, v_1)$ 要求 $v_k$ 和 $v_1$ 属于不同集合，而 $v_1 \in U$ 和 $v_k \in U$ 矛盾（因为两者都在 $U$）。
   
   因此，当 $k$ 为奇数时，环 $C$ 不可能存在。换言之，$G$ 中不存在奇环。
   
   如果 $k$ 是偶数，则 $v_k \in V$ 和 $v_1 \in U$ 属于不同集合，没有矛盾，因此偶环可以存在。

2. **如果 $G$ 中不存在奇环，则 $G$ 是二分图。**
   
   假设 $G$ 中不存在奇环。需要证明 $G$ 是二分图。由于图的连通分量相互独立，如果每个连通分量都是二分图，则整个图是二分图。因此，只需考虑 $G$ 连通的情况（若不连通，对每个连通分量单独证明）。
   
   选取一个起始节点 $s \in V$。通过 BFS（广度优先搜索）对节点着色：
   - 令层 0 为 $\{s\}$，着色为颜色 0。
   - 层 1 为 $s$ 的所有邻居，着色为颜色 1。
   - 层 2 为层 1 节点的所有未访问邻居，着色为颜色 0。
   - 依此类推，交替着色。
   
   具体地，对每个节点，根据其 BFS 层数（距离 $s$ 的最短路径长度）着色：
   - 如果距离为偶数，着色为颜色 0。
   - 如果距离为奇数，着色为颜色 1。
   
   现在，证明这种着色是有效的二分图着色：即每条边都连接不同颜色的节点（即不同集合）。
   
   在 BFS 中，所有边要么连接相邻层（即距离相差 1 的节点），要么可能连接同层节点（如果存在非树边）。如果存在一条边连接同层的两个节点，则会导致矛盾。
   
   假设存在边 $(u, v)$ 且 $u$ 和 $v$ 都在同一层 $k$（即 $\text{dist}(s, u) = \text{dist}(s, v) = k$）。设 $x$ 是 $s$ 到 $u$ 和 $s$ 到 $v$ 的最短路径上的最后一个共同祖先节点。令 $d = \text{dist}(s, x)$，则：
   - $\text{dist}(x, u) = k - d$,
   - $\text{dist}(x, v) = k - d$.
   
   路径 $x \to u$ 和 $x \to v$ 是不相交的（因为 $x$ 是最后一个共同节点）。考虑路径：$x \to u \to v \to x$（即从 $x$ 到 $u$，然后边 $(u, v)$，然后从 $v$ 返回 $x$）。这形成一个环，其长度为：
   \[
   \text{dist}(x, u) + 1 + \text{dist}(x, v) = (k - d) + 1 + (k - d) = 2(k - d) + 1,
   \]
   这是奇数（因为 $2(k - d)$ 是偶数，加 1 为奇数）。
   
   由于路径 $x \to u$ 和 $x \to v$ 不相交，这是一个简单环。因此，$G$ 中存在奇环，与假设矛盾。
   
   故，不存在边连接同层节点。所有边都连接相邻层（距离相差 1），因此每条边都连接颜色 0 和颜色 1 的节点。着色有效，$G$ 是二分图。
   
#### (b) 证明 $\text{BIPARTITE}$ 属于 NL
利用 Immerman-Szelepcsényi 定理：由于 NL = coNL，证明 $\overline{\text{BIPARTITE}} = \{ \langle G \rangle \mid G \text{ 不是二分图} \}$ 属于 NL 即可。等价地，证明检查“是否存在奇环”在 NL 中。

**算法思路：**
- 非确定性猜测一个起始节点 $v_0$。
- 从 $v_0$ 开始非确定性遍历一条路径，记录当前节点、路径长度模 2（奇偶性），以及步数计数器。
- 如果在某步移动后，当前节点回到 $v_0$ 且路径长度模 2 为 1（奇数），则接受（找到奇闭行走，隐含奇环）。

**详细算法：**
1. 非确定性选择一个起始节点 $v_0 \in V$（存储 $v_0$，需要 $\lceil \log_2 n \rceil$ 位）。
2. 初始化：
   - 当前节点 $c \gets v_0$,
   - 当前路径长度模 2 $\text{len} \gets 0$,
   - 步数计数器 $\text{step} \gets 0$（用于限制路径长度，避免无限循环）。
3. 重复以下步骤最多 $n$ 次（因为路径长度超过 $n$ 时必有重复节点）：
   - 非确定性选择一个邻居 $d$ 与 $c$ 相邻（通过扫描输入磁带检查边 $(c, d)$ 是否存在）。
   - 更新：
     - $c_{\text{next}} \gets d$,
     - $\text{new\_len} \gets (\text{len} + 1) \mod 2$（更新长度奇偶性）。
   - 检查：如果 $c_{\text{next}} = v_0$ 且 $\text{new\_len} = 1$，则接受（找到从 $v_0$ 到 $v_0$ 的奇闭行走）。
   - 否则，设置：
     - $c \gets c_{\text{next}}$,
     - $\text{len} \gets \text{new\_len}$,
     - $\text{step} \gets \text{step} + 1$.
4. 如果步数超过 $n$ 仍未接受，则拒绝。

**空间分析：**
- 存储 $v_0$：$O(\log n)$ 位。
- 存储当前节点 $c$：$O(\log n)$ 位。
- 存储 $\text{len}$（模 2）：1 位。
- 存储步数计数器 $\text{step}$（计数到 $n$）：$O(\log n)$ 位。
总空间：$O(\log n)$，符合 NL 要求。

**正确性：**
- **如果 $G$ 有奇环：** 设奇环为 $C = v_0 - v_1 - \cdots - v_k - v_0$，其中 $k$ 为奇数。非确定性选择 $v_0$ 为起始节点，并沿环遍历：从 $v_0$ 到 $v_1$，再到 $v_2$，…，最后回到 $v_0$。移动 $k$ 步后：
  - 初始：$c = v_0$, $\text{len} = 0$。
  - 第 $k$ 步移动后：$c_{\text{next}} = v_0$, $\text{new\_len} = (\text{len}_{\text{prev}} + 1) \mod 2$。由于环长 $k$ 为奇数，且 $\text{len}_{\text{prev}}$ 为 $k-1$（偶数），故 $\text{new\_len} = \text{even} + 1 = \text{odd} = 1$。满足接受条件，$M$ 接受。
- **如果 $G$ 无奇环：** 则不存在奇闭行走。对于任何 $v_0$ 和任何路径，当移动回 $v_0$ 时，路径长度必为偶数（否则与无奇环矛盾）。因此，$\text{new\_len} = 1$ 的条件永不满足，$M$ 不接受。


## 9.4
### 题目
设 $S(n) \geq \log n$ 是一个空间可构造函数。证明 $\text{NSPACE}(S(n)) = \text{coNSPACE}(S(n))$ 是 $\text{NL} = \text{coNL}$ 的一个推论。

### 解答

设 $L$ 是一个语言，使得 $L \in \text{coNSPACE}(S(n))$。则其补语言 $\overline{L} \in \text{NSPACE}(S(n))$。即存在一个非确定性图灵机 $M$ 在空间 $O(S(n))$ 内判定 $\overline{L}$。

由于 PATH（有向图可达性问题）是 $\text{NSPACE}(S(n))$-完全的（对于 $S(n) \geq \log n$)，存在一个对数空间规约将 $\overline{L}$ 规约到 PATH。具体地：
- 给定输入 $x$（长度 $n = |x|$)，规约机器输出一个配置图 $G$ 和两个节点 $s, t$。
- $x \in \overline{L}$ 当且仅当在 $G$ 中存在从 $s$ 到 $t$ 的路径。
- 等价地，$x \in L$ 当且仅当在 $G$ 中不存在从 $s$ 到 $t$ 的路径，即 $(G, s, t) \in \text{coPATH}$。
- 图 $G$ 的节点数 $N = 2^{O(S(n))}$（因为空间界限为 $S(n)$，配置大小 $O(S(n))$，配置数 $2^{O(S(n))}$)。
- 输入到 coPATH 的大小 $m$（即描述 $(G, s, t)$ 的字符串长度）满足 $m = \Theta(N^k) = 2^{O(S(n))}$ 对于某个常数 $k$（例如，使用邻接矩阵表示时 $m = O(N^2)$)。

由假设 $\text{NL} = \text{coNL}$，且 PATH 是 $\text{NL}$-完全的，因此 coPATH $\in \text{coNL} = \text{NL}$。即 coPATH 可用非确定性图灵机在空间 $O(\log m)$ 内判定（相对于输入大小 $m$)。

现在构造一个非确定性图灵机 $M'$ 判定 $L$：
1. 在输入 $x$（长度 $n$) 上，运行对数空间规约，生成 $(G, s, t)$。
   - 规约使用确定性空间 $O(\log n)$（因为是对数空间规约）。
   - 输出 $(G, s, t)$ 的大小 $m = 2^{O(S(n))}$。
2. 在输出 $(G, s, t)$ 上，非确定性判定 coPATH。
   - 使用空间 $O(\log m)$.
   - 由于 $m = 2^{O(S(n))}$，有 $\log m = O(S(n))$，因此空间为 $O(S(n))$.

总空间使用：
- 规约步骤：空间 $O(\log n)$。
- coPATH 判定：空间 $O(\log m) = O(S(n))$。
- 因为 $S(n) \geq \log n$，有 $O(\log n) \subseteq O(S(n))$，故总空间为 $O(S(n))$.

$M'$ 接受 $x$ 当且仅当 $(G, s, t) \in \text{coPATH}$，即当且仅当 $x \in L$。因此，$L \in \text{NSPACE}(S(n))$.

综上，对任意 $L \in \text{coNSPACE}(S(n))$，有 $L \in \text{NSPACE}(S(n))$，即 $\text{coNSPACE}(S(n)) \subseteq \text{NSPACE}(S(n))$。由对称性（或类似论证），$\text{NSPACE}(S(n)) \subseteq \text{coNSPACE}(S(n))$ 也成立（因为补的补是原语言）。故 $\text{NSPACE}(S(n)) = \text{coNSPACE}(S(n))$.
