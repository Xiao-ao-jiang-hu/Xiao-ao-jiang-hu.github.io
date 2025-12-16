---
title: 泛函分析第十五次作业
tags:
  - math
  - functional analysis
categories:
  - math
  - functional analysis homework
index_img: /img/fa.jpg
banner_img: /img/fa.jpg
excerpt: 泛函分析第十五次作业
abbrlink: a831cd8
date: 2025-11-16 14:38:10
---
# 15.1
设 $X$ 为实的拓扑向量空间，$K\subset X$ 是平衡凸吸收集，证明：

1. $\mathrm{Int}(K)\subseteq\{x\in X|P_K(x)<1\}\subseteq K\subseteq\{x\in X|P_K(x)\leq1\}\subseteq\bar{K}.$

2. $P_{K}$ 是连续函数当且仅当K包含一个包含零点的开集。此时 $\mathrm{Int}(K)=\{x\in X|P_{K}(x)< 1\},\{x\in X|P_{K}(x)\leq1\}=\bar{K}.$ 


## 解答
### 1. 证明 $\mathrm{Int}(K) \subseteq \{ x \in X : P_K(x) < 1 \}$  
取 $x \in \mathrm{Int}(K)$，存在原点处的开邻域 $U$ 使得 $x + U \subseteq K$。考虑映射 $\varphi: \mathbb{R} \to X$，$\varphi(t) = tx$。由于标量乘法连续，存在 $\delta > 0$ 使得当 $|t-1| < \delta$ 时，$\varphi(t) = tx \in x + U \subseteq K$。取 $t = 1 + \delta/2 > 1$，则 $tx \in K$，即 $x \in \frac{1}{t} K$。因 $\frac{1}{t} < 1$，得 $P_K(x) \le \frac{1}{t} < 1$，故 $x \in \{ P_K < 1 \}$。


### 2. 证明 $\{ x \in X : P_K(x) < 1 \} \subseteq K$  
若 $P_K(x) < 1$，存在 $0 < t < 1$ 使得 $x \in tK$，即存在 $k \in K$ 满足 $x = tk$。由 $K$ 平衡凸且包含 $0$，对任意 $t \in [0,1]$ 有 $tK \subseteq K$，故 $x \in K$。


### 3. 证明 $K \subseteq \{ x \in X : P_K(x) \le 1 \}$  
对任意 $x \in K$，有 $x \in 1 \cdot K$，因此 $P_K(x) \le 1$，即 $x \in \{ P_K \le 1 \}$。


### 4. 证明 $\{ x \in X : P_K(x) \le 1 \} \subseteq \overline{K}$  
设 $P_K(x) \le 1$，下证 $x \in \overline{K}$。任取 $x$ 的开邻域 $V$，由标量乘法在 $1$ 处连续，存在 $\delta' > 0$ 使得当 $| \alpha - 1 | < \delta'$ 时，$\alpha x \in V$。取 $\eta > 0$ 满足 $\eta < \delta'$。因 $P_K(x) \le 1$，由下确界定义，存在 $t$ 满足 $1 \le t < 1 + \eta$ 使得 $x \in tK$，即存在 $k \in K$ 使得 $x = tk$，则 $k = \frac{1}{t} x$。由于 $1 < t < 1 + \eta$，有 $\left| \frac{1}{t} - 1 \right| = 1 - \frac{1}{t} < 1 - \frac{1}{1+\eta} = \frac{\eta}{1+\eta} < \eta < \delta'$，故 $\frac{1}{t} x \in V$，即 $k \in V \cap K$，因此 $V \cap K \ne \varnothing$，得 $x \in \overline{K}$。


### 5. 连续性与等价条件  
$P_K$ 是次线性泛函，且满足 $P_K(\lambda x) = |\lambda| P_K(x)$（因 $K$ 平衡）。

**必要性**：若 $P_K$ 连续，由 $P_K(0) = 0$，存在原点处的开邻域 $U$ 使得 $x \in U \Rightarrow P_K(x) < 1$，从而 $U \subseteq \{ P_K < 1 \} \subseteq K$，即 $K$ 包含 $0$ 的一个开邻域。

**充分性**：若存在开集 $U$ 满足 $0 \in U \subseteq K$，由拓扑向量空间的性质，存在平衡开邻域 $V \subseteq U \subseteq K$。下证 $P_K$ 在 $0$ 处连续：对任意 $\varepsilon > 0$，考虑开集 $\varepsilon V$（标量乘法同胚），它是 $0$ 的邻域。对任意 $x \in \varepsilon V$，存在 $v \in V$ 使得 $x = \varepsilon v$。由 $v \in V \subseteq K$ 且 $V$ 开，有 $v \in \mathrm{Int}(K)$，从而 $P_K(v) < 1$，故 $P_K(x) = \varepsilon P_K(v) < \varepsilon$。因此 $P_K$ 在 $0$ 连续，进而 $P_K$ 在全空间连续。


### 6. 连续性下的等式  
设 $P_K$ 连续，则：

- $\mathrm{Int}(K) = \{ P_K < 1 \}$：  
  由第一部分，$\mathrm{Int}(K) \subseteq \{ P_K < 1 \}$。反向，因 $P_K$ 连续，$\{ P_K < 1 \}$ 是开集且包含于 $K$，故为 $K$ 的开子集，从而包含于 $\mathrm{Int}(K)$。

- $\overline{K} = \{ P_K \le 1 \}$：  
  由第一部分，$\{ P_K \le 1 \} \subseteq \overline{K}$。反向，因 $P_K$ 连续，$\{ P_K \le 1 \}$ 是闭集，且 $K \subseteq \{ P_K \le 1 \}$，故 $\overline{K} \subseteq \overline{\{ P_K \le 1 \}} = \{ P_K \le 1 \}$。


# 15.2
假设$X$是实线性空间，$\mathcal{P}=\{p_{\beta}\}_{\beta\in\Lambda}$ 是$X$上的一族半范。

1. 记$U(x;\varepsilon;p_{1},p_{2},\cdots,p_{n}):=\{y\in X|\forall1\leq k\leq n,p_{k}(y-x)<\varepsilon\},$ 
$$\mathcal{U}_{p}(x)=\{U(x;\varepsilon;p_{1},p_{2},\cdots,p_{n})|\varepsilon>0,n\in\mathbb{N},p_{1},p_{2},\cdots,p_{n}\in\mathcal{P}\}.$$
如果$\mathcal{U}_{p}:=\cup_{x\in X}\mathcal{U}_{p}(x) 且 \mathcal{T}_{X}=\mathcal{T}(\mathcal{U}_{p})$ ，则$(X,\mathcal{T}_X)$ 是拓扑空间且$\mathcal{U}_{p}$ $\mathcal{T}_{X}$ 的基。

2. $(X,\mathcal{T}_X)$ 是局部凸空间。

3. $\forall p_{\beta}\in\mathcal{P},p_{\beta}$ 是$(X,\mathcal{T}_X)$ 的连续函数。

4. 若P满足$p_{\beta}(x)=0,\forall\beta\in\Lambda$ 能推出$x=0$ ，则$(X,\mathcal{T}_X)$ 是Hausdorf 空间。

## 解答
### 1
覆盖性：对于任意 $x \in X$，存在 $U \in \mathcal{U}_{p}$ 使得 $x \in U$。例如，取 $n=1$，任意 $p_1 \in \mathcal{P}$，和 $\varepsilon > 0$，则 $U(x; \varepsilon; p_1)$ 包含 $x$，因为 $p_1(x-x) = 0 < \varepsilon$。
交集条件：对于任意 $U_1, U_2 \in \mathcal{U}_{p}$ 和 $x \in U_1 \cap U_2$，存在 $U_3 \in \mathcal{U}_{p}$ 使得 $x \in U_3 \subseteq U_1 \cap U_2$。

设 $U_1 = U(x_1; \varepsilon_1; p_1, \cdots, p_n)$ 和 $U_2 = U(x_2; \varepsilon_2; q_1, \cdots, q_m)$，且 $x \in U_1 \cap U_2$。则对于所有 $k$，有 $p_k(x - x_1) < \varepsilon_1$，对于所有 $j$，有 $q_j(x - x_2) < \varepsilon_2$。定义 $a_k = p_k(x - x_1)$ 和 $b_j = q_j(x - x_2)$，则 $a_k < \varepsilon_1$ 和 $b_j < \varepsilon_2$。取 $\delta_1 = \min_{1 \leq k \leq n} (\varepsilon_1 - a_k) > 0$ 和 $\delta_2 = \min_{1 \leq j \leq m} (\varepsilon_2 - b_j) > 0$，再取 $\delta = \min(\delta_1, \delta_2) > 0$。令 $U_3 = U(x; \delta; p_1, \cdots, p_n, q_1, \cdots, q_m)$。则对于任意 $y \in U_3$，有 $p_k(y - x) < \delta$ 和 $q_j(y - x) < \delta$。于是：
$$p_k(y - x_1) \leq p_k(y - x) + p_k(x - x_1) < \delta + a_k \leq (\varepsilon_1 - a_k) + a_k = \varepsilon_1,$$
所以 $y \in U_1$。类似地，$y \in U_2$。因此 $U_3 \subseteq U_1 \cap U_2$，且 $x \in U_3$。故 $\mathcal{U}_{p}$ 是 $\mathcal{T}_X$ 的基，且 $(X, \mathcal{T}_X)$ 是拓扑空间。

### 2
加法连续性：设 $V = U(x+y; \varepsilon; p_1, \cdots, p_n)$ 是包含 $x+y$ 的基开集。取 $U = U(x; \varepsilon/2; p_1, \cdots, p_n)$ 和 $W = U(y; \varepsilon/2; p_1, \cdots, p_n)$。则对于任意 $u \in U$ 和 $w \in W$，有 $p_k(u - x) < \varepsilon/2$ 和 $p_k(w - y) < \varepsilon/2$。于是：

$$p_k((u+w) - (x+y)) \leq p_k(u-x) + p_k(w-y) < \varepsilon/2 + \varepsilon/2 = \varepsilon,$$
所以 $u+w \in V$，即 $U + W \subseteq V$。故加法连续。

数乘连续性：设 $V = U(\alpha x; \varepsilon; p_1, \cdots, p_n)$ 是包含 $\alpha x$ 的基开集。令 $M = \max_{1 \leq k \leq n} p_k(x)$（由于有限集，$M$ 有限）。取 $\eta > 0$ 使得 $\eta < \varepsilon / (|\alpha| + 1 + M)$。取 $\delta = \eta$ 和 $U = U(x; \eta; p_1, \cdots, p_n)$。则对于 $|\beta - \alpha| < \delta$ 和 $y \in U$，有 $p_k(y - x) < \eta$ 和 $|\beta - \alpha| < \eta$。于是：

$$p_k(\beta y - \alpha x) \leq |\beta| p_k(y - x) + |\beta - \alpha| p_k(x) < (|\alpha| + 1) \eta + \eta M < \varepsilon,$$
所以 $\beta y \in V$。故数乘连续。
因此 $(X, \mathcal{T}_X)$ 是拓扑向量空间。现在证明局部凸性。考虑原点处的邻域 $U(0; \varepsilon; p_1, \cdots, p_n) = \{ y \in X \mid p_k(y) < \varepsilon \}$。对于任意 $y, z \in U(0; \varepsilon; p_1, \cdots, p_n)$ 和 $t \in [0,1]$，有：
$$p_k(t y + (1-t) z) \leq t p_k(y) + (1-t) p_k(z) < t \varepsilon + (1-t) \varepsilon = \varepsilon,$$
所以 $t y + (1-t) z \in U(0; \varepsilon; p_1, \cdots, p_n)$，即该集合是凸的。对于任意点 $x$，邻域 $U(x; \varepsilon; p_1, \cdots, p_n) = x + U(0; \varepsilon; p_1, \cdots, p_n)$ 也是凸的（因为平移保持凸性）。这些凸邻域形成邻域基，故 $(X, \mathcal{T}_X)$ 是局部凸空间。

### 3
对于任意 $x \in X$ 和 $\varepsilon > 0$，取邻域 $V = U(x; \varepsilon; p_{\beta})$。则对于任意 $y \in V$，有 $p_{\beta}(y - x) < \varepsilon$。由于半范数满足 $|p_{\beta}(y) - p_{\beta}(x)| \leq p_{\beta}(y - x)$，所以 $|p_{\beta}(y) - p_{\beta}(x)| < \varepsilon$。故 $p_{\beta}$ 在 $x$ 处连续，从而在 $X$ 上连续。

### 4
令 $z = x - y \neq 0$。由条件，存在某个 $\beta \in \Lambda$ 使得 $p_{\beta}(z) \neq 0$，设 $\delta = p_{\beta}(z) > 0$。取 $V = U(0; \delta/2; p_{\beta})$，则 $z \notin V$ 因为 $p_{\beta}(z) = \delta > \delta/2$。定义 $U = x + V$ 和 $W = y + V$，则 $x \in U$ 和 $y \in W$。假设存在 $u \in U \cap W$，则 $u = x + v_1 = y + v_2$ 对于某些 $v_1, v_2 \in V$。于是 $x - y = v_2 - v_1$，所以：
$$p_{\beta}(x - y) = p_{\beta}(v_2 - v_1) \leq p_{\beta}(v_2) + p_{\beta}(v_1) < \delta/2 + \delta/2 = \delta,$$
但 $p_{\beta}(x - y) = p_{\beta}(z) = \delta$，矛盾。故 $U \cap W = \emptyset$，即 $(X, \mathcal{T}_X)$ 是 Hausdorff 空间。