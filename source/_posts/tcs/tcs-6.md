---
title: TCS Lec6总结
tags:
  - tcs
categories:
  - tcs
index_img: /img/tcs.jpg
banner_img: /img/tcs.jpg
excerpt: 本节系统介绍了P与NP类的核心区别，通过图论、逻辑与代数中的典型问题（如最短/最长路径、SAT、Hamiltonian路径、MAX-CUT、permanent等）展示“易验证但难求解”的现象，正式定义了NP类（基于验证器与非确定性图灵机），并探讨了coNP、NP ∩ coNP及著名开放问题P vs NP。
abbrlink: 5c9521c4
date: 2025-05-26 15:51:37
---

### **第一部分：计算问题分类与典型实例**

#### **1.1 图论问题**

##### **(1) 最短路径与可达性（SHORTEST-PATH / REACHABILITY）**
- **定义**：给定无向图 $G = (V, E)$ 与顶点 $s, t \in V$，判断是否存在 $s \to t$ 路径（REACHABILITY），或求最短路径长度（SHORTEST-PATH）。
- **算法**：
  - BFS：$O(n + m)$ 时间（$n = |V|, m = |E|$）。
  - Dijkstra（带权图）：$O(m + n \log n)$（使用 Fibonacci 堆）。
- **复杂性**：$\in \mathsf{P}$。

##### **(2) 最长路径（LONGEST-PATH）**
- **定义**：求 $s$ 到 $t$ 的**简单路径**（无重复顶点）的最大长度。
- **难点**：路径数指数级，无已知多项式算法。
- **已知算法**：$O(c^n)$，最佳 $c \approx 1.65$。
- **特例**：**Hamiltonian 路径问题（HAM-PATH）**：是否存在访问所有 $n$ 个顶点的路径？
- **相关问题**：
  - **HAM-CYCLE**：是否存在 Hamiltonian 环？
  - **TSP（旅行商问题）**：求访问所有城市一次并返回起点的最短环。

##### **(3) 最小割（MIN-CUT）**
- **定义**：给定 $s, t$，求割集 $S \subset V$（$s \in S, t \notin S$）使得跨割边数最少。
- **算法**：
  - 基于 **Max-Flow Min-Cut 定理**。
  - Ford-Fulkerson：通过反复求增广路径（即 REACHABILITY）。
  - **线性规划（LP）建模**：
    $$
    \begin{aligned}
    \text{Maximize:} &\quad \sum_{e:\pi_1(e)=s} x_e \\
    \text{Subject to:} &\quad \sum_{e:\pi_1(e)=v} x_e = 0 \quad \forall v \in V \setminus \{s,t\}, \\
    &\quad x_e \in [-1,1]
    \end{aligned}
    $$
  - **最新进展**：2022年 Chen 等人提出 **近线性时间最大流算法**。
- **复杂性**：$\in \mathsf{P}$。

##### **(4) 最大割（MAX-CUT）**
- **定义**：划分 $V = S \cup \bar{S}$，最大化跨割边数（或加权和）。
- **应用**：
  - VLSI 设计。
  - **Ising 模型**：能量函数 $H(x) = \sum_{u \sim v} J_{uv} x_u x_v$，其中 $x_u \in \{\pm 1\}$。
    - 最小能量 $\Leftrightarrow$ 最大割：$H(x) = J - 2 \cdot \text{CUT}(x)$。
- **近似算法**：
  - 随机划分：期望割大小为总边数一半 ⇒ **0.5-近似**。
  - **Goemans-Williamson 算法**（1995）：基于半正定规划（SDP），近似比 $\alpha \approx 0.878$。
  - **唯一游戏猜想（UGC）**：若成立，则 0.878 是最优近似比。
- **复杂性**：$\in \mathsf{NP}$，但 $\notin \mathsf{P}$（除非 $\mathsf{P} = \mathsf{NP}$）。


#### **1.2 逻辑问题**

##### **(1) SAT（布尔可满足性）**
- **定义**：给定 CNF 公式 $\varphi$，判断是否存在赋值使其为真。
- **输入格式**（DIMACS）：
  ```
  p cnf 4 3
  1 2 -4 0
  3 -4 0
  1 2 3 0
  ```
  表示 $(x_1 \vee x_2 \vee \neg x_4) \wedge (x_3 \vee \neg x_4) \wedge (x_1 \vee x_2 \vee x_3)$。
- **变体**：
  - **k-SAT**：每个子句至多 $k$ 个文字。
    - **2-SAT**：$\in \mathsf{P}$（转化为有向图强连通分量问题）。
    - **3-SAT**：$\in \mathsf{NP}$-complete，最快算法 $O(1.3^n)$。
- **应用**：电路验证、软件测试、自动推理。
- **SAT 求解器**：
  - 可处理百万变量实例。
  - **案例**：证明 **布尔毕达哥拉斯三元组定理**（2016）：
    - $\{1,\dots,7824\}$ 可二染色避免 $a^2 + b^2 = c^2$；
    - $\{1,\dots,7825\}$ 不可。
    - 证明文件达 **200TB**（压缩后 68GB）。

##### **(2) TQBF（全量词布尔公式）**
- **定义**：判断形如 $\exists x_1 \forall x_2 \exists x_3 \cdots Q x_n\ \varphi(x_1,\dots,x_n)$ 的公式是否为真。
- **复杂性**：$\in \mathsf{PSPACE}$，比 SAT 更难（含交替量词）。


#### **1.3 代数与数论问题**

##### **(1) 素性与因式分解**
- **PRIME**：判断 $n$ 是否为素数。
  - **AKS 算法**（2002）：首个确定性多项式时间算法 ⇒ $\text{PRIME} \in \mathsf{P}$。
- **COMPOSITE**：判断 $n$ 是否为合数。
  - **证书**：因子 $p, q > 1$ 使得 $n = pq$ ⇒ $\text{COMPOSITE} \in \mathsf{NP}$。
- **FACTOR**：给定 $n, k$，判断是否存在 $d \in (1, k)$ 整除 $n$。
  - $\in \mathsf{NP} \cap \mathsf{coNP}$：
    - $\mathsf{NP}$ 证书：因子 $d$。
    - $\mathsf{coNP}$ 证书：$n$ 的**素因子分解**（可验证无小于 $k$ 的因子）。

##### **(2) 行列式 vs. 积和式（Determinant vs. Permanent）**
- **行列式**：
  $$
  \det(A) = \sum_{\pi \in S_n} \text{sign}(\pi) \prod_{i=1}^n A_{i,\pi(i)}
  $$
  - 可在 $\mathsf{P}$ 内计算（高斯消元）。
- **积和式**：
  $$
  \text{perm}(A) = \sum_{\pi \in S_n} \prod_{i=1}^n A_{i,\pi(i)}
  $$
  - **应用**：组合计数（完美匹配数）、量子物理（玻色子采样）。
  - **复杂性**：$\#\mathsf{P}$-complete（Valiant, 1979），无已知高效算法。
  - **几何复杂性理论（GCT）**：试图证明 $\text{perm} \notin \mathsf{VP}$（代数版本的 $\mathsf{P} \neq \mathsf{NP}$）。


### **第二部分：NP 类的正式定义**

#### **2.1 多项式可验证性（Polynomial Verifiability）**
- **核心思想**：解难找，但**解易验**。
- **验证器（Verifier）**：算法 $V(x, w)$，其中 $w$ 为**见证（witness）**。
  - $x \in A \iff \exists w,\ |w| \le \text{poly}(|x|),\ V(x, w) = 1$。
  - $V$ 在 $|x|$ 的多项式时间内运行。
- **例子**：
  - **HAM-PATH**：见证为顶点序列 $u_1,\dots,u_n$。
  - **SAT**：见证为满足赋值。
  - **COMPOSITE**：见证为非平凡因子。

> **定义**：$\mathsf{NP} = \{ A \mid A \text{ 有多项式时间验证器} \}$。

#### **2.2 非确定性图灵机（NTM）刻画**
- **非确定性时间类**：
  $$
  \mathsf{NTIME}(t(n)) = \{ A \mid A \text{ 可被 } O(t(n)) \text{ 时间 NTM 判定} \}
  $$
- **NTM 示例（HAM-PATH）**：
  > $H =$ “On input $\langle G, s, t \rangle$:  
  > 1. 非确定性写下 $u_1,\dots,u_n$；  
  > 2. 检查无重复、$u_1=s, u_n=t$、每对 $(u_i,u_{i+1}) \in E$；  
  > 3. 若全满足则接受。”

- **等价定理**：
  > **定理**：$A \in \mathsf{NP} \iff A \in \bigcup_{c \ge 0} \mathsf{NTIME}(n^c)$。

#### **2.3 NP 中的典型问题**
- **Karp 的 21 个 NP-complete 问题**（1972）：
  - SAT, CLIQUE, VERTEX-COVER, HAM-CYCLE, 3-COLORING 等。
- **Garey & Johnson 的《计算机与难解性》**（1979）：收录 300+ NP-hard 问题。
- **其他问题**：
  - **CLIQUE**：$G$ 是否含 $k$-团？见证：$k$ 个顶点。
  - **VERTEX-COVER**：是否存在大小 $\le k$ 的顶点覆盖？
  - **GRAPH-ISO**（图同构）：未知是否在 $\mathsf{NP}$-complete，但 $\in \mathsf{NP}$。


### **第三部分：P、NP 与 coNP 的关系**

#### **3.1 包含关系**
$$
\mathsf{P} \subseteq \mathsf{NP} \subseteq \mathsf{EXP}
$$
- **$\mathsf{P} \subseteq \mathsf{NP}$**：若能高效求解，则见证可为空（或直接输出解）。
- **$\mathsf{NP} \subseteq \mathsf{EXP}$**：暴力枚举所有见证（$2^{\text{poly}(n)}$ 种）。

#### **3.2 P vs NP 问题**
- **核心问题**：验证是否比求解容易？
- **千禧年大奖难题**：$\mathsf{P} \stackrel{?}{=} \mathsf{NP}$。
- **共识**：$\mathsf{P} \neq \mathsf{NP}$（但未证明）。

#### **3.3 coNP 类**
- **定义**：
  $$
  \mathsf{coNP} = \{ A \mid \overline{A} \in \mathsf{NP} \}
  $$
  - 即：**否实例**有多项式见证。
- **例子**：
  - **TAUT**：CNF 公式是否为永真式？  
    - 否实例见证：反例赋值 ⇒ $\text{TAUT} \in \mathsf{coNP}$。
  - **PRIME**：AKS 前，已知 $\text{PRIME} \in \mathsf{coNP}$（Pratt 证书）。
- **FACTOR 的特殊性**：
  - $\text{FACTOR} \in \mathsf{NP} \cap \mathsf{coNP}$ ⇒ 若 $\mathsf{NP} \neq \mathsf{coNP}$，则 $\text{FACTOR} \notin \mathsf{NP}\text{-complete}$。

#### **3.4 复杂性类关系图**
```
          EXP
           |
          NP
         /  \
        P    coNP
         \  /
      NP ∩ coNP
```
- **开放问题**：
  - $\mathsf{NP} \stackrel{?}{=} \mathsf{coNP}$？
  - $\mathsf{P} \stackrel{?}{=} \mathsf{NP} \cap \mathsf{coNP}$？
