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
设X为实的拓扑向量空间，$K\subset X$ 是平衡凸吸收集，则

1. $\mathrm{Int}(K)\subseteq\{x\in X|P_K(x)<1\}\subseteq K\subseteq\{x\in X|P_K(x)\leq1\}\subseteq\bar{K}.$

2. $P_{K}$ 是连续函数当且仅当K包含一个包含零点的开集。此时$\mathrm{Int}(K)=\{x\in X|P_{K}(x)< 1\},\{x\in X|P_{K}(x)\leq1\}=\bar{K}.$ 


## 解答
### 1.
任取 $x \in \mathrm{Int}(K)$, 则存在 $U$，使得 $x + U \subset K$. 由于 $K$ 是平衡集，故对于任意 $u \in U$，有 $x + t u \in K, \forall t \in [-1,1]$. 因此对于任意 $t \in [0,1]$，有 $x = (1-t)x + t(x + u) \in K$. 故 $P_K(x) \leq 1$. 若 $P_K(x) = 1$, 则存在 $t_n \to 1^-$，使得 $x \in t_n K$. 则存在 $k_n \in K$，使得 $x = t_n k_n$. 因为 $K$ 是吸收集，故存在 $\lambda > 0$，使得 $\frac{1}{\lambda} x \in K$. 取 $n$ 足够大，使得 $t_n > \lambda$, 则有 $k_n = \frac{1}{t_n} x \in K$, 与 $K$ 的凸性矛盾. 因此 $P_K(x) < 1$, 即 $\mathrm{Int}(K) \subseteq \{x \in X | P_K(x) < 1\}$.

任取 $x \in \{x \in X | P_K(x) < 1\}$, 则存在 $t < 1$，使得 $x \in t K$. 因为 $K$ 是凸集，故 $x = t k$，其中 $k \in K$. 因为 $t < 1$，故 $k = \frac{1}{t} x \in K$. 因此 $x \in K$, 即 $\{x \in X | P_K(x) < 1\} \subseteq K$.

任取 $x \in K$, 则 $P_K(x) \leq 1$, 故 $K \subseteq \{x \in X | P_K(x) \leq 1\}$.

任取 $x \in \{x \in X | P_K(x) \leq 1\}$, 则存在 $t_n \to 1^+$，使得 $x \in t_n K$. 则存在 $k_n \in K$，使得 $x = t_n k_n$. 因为 $K$ 是吸收集，故存在 $\lambda > 0$，使得 $\frac{1}{\lambda} x \in K$. 取 $n$ 足够大，使得 $t_n < \lambda$, 则有 $k_n = \frac{1}{t_n} x \in K$. 因此 $k_n$ 在 $K$ 中有界. 由 $k_n = \frac{1}{t_n} x$ 可知，$k_n \to x$. 因此 $x \in \bar{K}$, 即 $\{x \in X | P_K(x) \leq 1\} \subseteq \bar{K}$.


### 2.
充分性：若 $P_K$ 连续，则 $\{ x \in X : P_K(x) < 1 \}$ 是开集（因为 $P_K$ 连续且 $(-\infty, 1)$ 开）。由部分 1，$\{ x \in X : P_K(x) < 1 \} \subseteq K$，且 $P_K(0) = 0$，故 $0 \in \{ x \in X : P_K(x) < 1 \}$。因此 $K$ 包含一个包含零点的开集。

必要性：若 $K$ 包含一个包含零点的开集 $U$，则存在平衡开邻域 $V \subseteq U \subseteq K$（拓扑向量空间中零点的开邻域包含平衡开邻域）。需证 $P_K$ 连续。由于 $P_K$ 是半范数，只需证在零点连续。对任意 $\epsilon > 0$，取 $W = \epsilon V$，则 $W$ 是零点开邻域。若 $x \in W$，则 $x/\epsilon \in V \subseteq K$，故 $P_K(x/\epsilon) \leq 1$，即 $P_K(x) \leq \epsilon$。因此 $P_K$ 在零点连续，从而在整个空间连续。

当 $P_K$ 连续时：

由部分 1，$\text{Int}(K) \subseteq \{ x \in X : P_K(x) < 1 \}$。又 $\{ x \in X : P_K(x) < 1 \}$ 是开集且包含于 $K$，故 $\{ x \in X : P_K(x) < 1 \} \subseteq \text{Int}(K)$。因此 $\text{Int}(K) = \{ x \in X : P_K(x) < 1 \}$。
由部分 1，$K \subseteq \{ x \in X : P_K(x) \leq 1 \} \subseteq \overline{K}$。又 $\{ x \in X : P_K(x) \leq 1 \}$ 是闭集（因为 $P_K$ 连续且 $(-\infty, 1]$ 闭），故 $\overline{K} \subseteq \{ x \in X : P_K(x) \leq 1 \}$。因此 $\{ x \in X : P_K(x) \leq 1 \} = \overline{K}$.

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