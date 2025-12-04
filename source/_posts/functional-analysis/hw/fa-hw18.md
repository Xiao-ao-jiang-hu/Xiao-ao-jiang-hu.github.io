---
title: 泛函分析第十八次作业
tags:
  - math
  - functional analysis
categories:
  - math
  - functional analysis homework
index_img: /img/fa.jpg
banner_img: /img/fa.jpg
excerpt: 泛函分析第十八次作业
abbrlink: b34c36d8
date: 2025-11-27 15:06:19
---
# 18.1
设 $X$ 为拓扑空间，$Y$ 为度量空间，记

$$
C(X,Y) := \left\{ X \to Y \text{上连续函数构成的空间} \right\}.
$$

$(C(X,Y), \mathcal{T}_{compact-open})$ 上的紧开拓扑 $\mathcal{T}_{compact-open}$ 是对任意紧集 $K \subset X$ 和开集 $V \subset Y$，集合

$$
\mathcal{L}(K,V) := \{ f \in C(X,Y) : f(K) \subset V \}.
$$

为开集的最小拓扑。

1. 证明：集合 $U \subset C(X,Y)$ 在紧开拓扑中是开集当且仅当对任意 $f \in U$，存在有限个紧集 $K_1, \cdots, K_m \subset X$ 以及有限个开集 $V_1, \cdots, V_m \subset Y$ 使得 $f \in \bigcap_{i=1}^m \mathcal{L}(K_i, V_i) \subset U$.

2. 若 $X$ 是紧的，证明 $(C(X,Y), \mathcal{T}_{compact-open})$ 与由度量
$$
d(f,g) := \sup_{x \in X} d_Y(f(x), g(x)), \quad \forall f,g \in C(X,Y).
$$
诱导的拓扑一致。
提示 1：令 $f \in C(X,Y)$ 且满足存在 $K_1, \cdots, K_m \subset X$ 为紧集，$V_1, \cdots, V_m \subset Y$ 为开集，使得 $f(K_i) \subset V_i, \forall 1 \le i \le m$，证明存在 $\varepsilon > 0$ 使得 $B_\varepsilon(f(x_i)) \subset V_i, \forall x \in K_i, 1 \le i \le m$，由此推出满足 $d(f,g) < \varepsilon$ 的每个 $g \in C(X,Y)$ 都满足 $g(K_i) \subset V_i, \forall 1 \le i \le m$.
提示 2：令 $f \in C(X,Y), \varepsilon > 0$，找出元素 $x_1, \cdots, x_m \in X$ 使得 $X = \bigcup_{i=1}^m K_i$，其中 $K_i := \{ x \in X : d_Y(f(x_i), f(x)) \le \varepsilon/4 \}$，定义 $U := \{ g \in C(X,Y) : g(K_i) \subset V_i, \forall 1 \le i \le m \}, V_i := B_{\varepsilon/2}(f(x_i))$，证明 $f \in U$，以及 $d(f,g) < \varepsilon, \forall g \in U$.

3. 对每个紧集 $K \subset X$ 定义半范数 $p_K : C(X,\mathbb{R}) \to \mathbb{R}$ 为
$$
p_K(f) := \sup_K |f|, \quad \forall f \in C(X,\mathbb{R}).
$$
证明这些半范数生成了紧开拓扑，即 $(C(X,Y), \mathcal{T}_{compact-open})$ 是使得对任意的 $p_K$ ($K \subset X$ 是紧集) 连续的最小拓扑。

4. 证明：$(C(X,\mathbb{R}), \mathcal{T}_{compact-open})$ 是局部凸拓扑向量空间。

5. 证明：集合 $\mathcal{F} \subset C(X,Y)$ 在 $(C(X,Y), \mathcal{T}_{compact-open})$ 中是预紧的，当且仅当对任意紧集 $K \subset X$
$$
\mathcal{F}_K := \{ f|_K : f \in \mathcal{F} \} \subset C(K,Y)
$$
是预紧的。提示：令 $\mathcal{K} \subset 2^X$ 为紧集构成的集合，证明映射 $C(X,Y) \to \prod_{K \in \mathcal{K}} C(K,Y) : f \mapsto (f|_K)_{K \in \mathcal{K}}$ 是到其像的同胚映射，并应用 Tychonoff 定理。

6. 证明如下的变种 Arzela-Ascoli 定理：设 $X$ 为拓扑空间，$Y$ 为度量空间，则集合 $\mathcal{F} \subset C(X,Y)$ 在 $(C(X,Y), \mathcal{T}_{compact-open})$ 是预紧的，当且仅当它逐点预紧并且对任意紧集 $K \subset X$，如前定义的 $\mathcal{F}_K \subset C(K,Y)$ 等度连续。

## 解答
### 1
该拓扑的基 $\mathcal{B}$ 由 $\mathcal{S}$ 中元素的有限交集构成，即：
$$\mathcal{B} = \left\{ \bigcap_{i=1}^m \mathcal{L}(K_i, V_i) : m \in \mathbb{N},\ K_i \subset X \text{ 紧},\ V_i \subset Y \text{ 开} \right\}$$

假设 $U \subset C(X,Y)$ 在紧开拓扑中是开集，于是 $U$ 可表示为 $\mathcal{B}$ 中某些元素的并集：
$$U = \bigcup_{\alpha \in I} B_\alpha, \quad \text{其中 } B_\alpha \in \mathcal{B}.$$
对于任意 $f \in U$，存在某个 $\alpha$ 使得 $f \in B_\alpha \subseteq U$。由于 $B_\alpha \in \mathcal{B}$，可写为：
$$B_\alpha = \bigcap_{i=1}^m \mathcal{L}(K_i, V_i),$$
其中 $K_1, \dots, K_m \subset X$ 是紧集，$V_1, \dots, V_m \subset Y$ 是开集。因此，
$$f \in \bigcap_{i=1}^m \mathcal{L}(K_i, V_i) \subseteq U,$$


另一方面，假设对于任意 $f \in U$，存在有限个紧集 $K_1, \dots, K_m \subset X$ 和开集 $V_1, \dots, V_m \subset Y$，使得：
$$f \in \bigcap_{i=1}^m \mathcal{L}(K_i, V_i) \subseteq U.$$
对每个 $f \in U$，记对应的基元素为：
$$B_f = \bigcap_{i=1}^{m_f} \mathcal{L}(K_{f,i}, V_{f,i}),$$
满足 $f \in B_f \subseteq U$。则：
$$U = \bigcup_{f \in U} B_f.$$
因此 $U$ 在紧开拓扑中是开集。


### 2
设度量诱导的拓扑为 $\mathcal{T}_d$。
先证 $\mathcal{T}_c \subset \mathcal{T}_d$:
由于 $f$ 连续，$K_i$ 紧，于是 $f(K_i) \subset Y$ 是度量空间中的紧集。又由于 $V_i$ 是开集，于是存在 $\varepsilon > 0$ 使得对任意 $y \in f(K_i)$，都有 $B_\varepsilon(y) \subset V_i$。取任意 $g \in C(X,Y)$ 满足 $d(f,g) < \varepsilon$，则对任意 $x \in K_i$，有
$$d_Y(g(x), f(x)) < \varepsilon,$$
从而 $g(x) \in B_\varepsilon(f(x)) \subset V_i$。因此，$g(K_i) \subset V_i$，即 $g \in \mathcal{L}(K_i, V_i)$。由此可知，$B_\varepsilon(f) \subset \bigcap_{i=1}^m \mathcal{L}(K_i, V_i)$，从而 $\bigcap_{i=1}^m \mathcal{L}(K_i, V_i)$ 在 $\mathcal{T}_d$ 中是开集。

再证 $\mathcal{T}_d \subset \mathcal{T}_c$:
由于$X$是紧的，对任意 $\varepsilon > 0$，由于$f$连续，存在有限个开集 $U_i = \{x \in X: d_Y(f(x_i), f(x)) < \varepsilon/4\}$ 覆盖 $X$。于是 $K_i = \{x \in X: d_Y(f(x_i), f(x)) \le \varepsilon/4\}$ 满足 $X = \bigcup_{i=1}^m K_i$。

首先证明每个 $K_i$ 是紧集：考虑函数 $\varphi_i: X \to \mathbb{R}$，定义为 $\varphi_i(x) = d_Y(f(x_i), f(x))$。由于 $f$ 连续且度量函数连续，$\varphi_i$ 是连续函数。而 $K_i = \varphi_i^{-1}([0, \varepsilon/4])$ 是闭区间 $[0, \varepsilon/4]$ 的原像，因此 $K_i$ 是 $X$ 的闭子集。由于 $X$ 是紧空间，紧空间的闭子集是紧集，故 $K_i$ 是紧集。

令 $V_i = B_{\varepsilon/2}(f(x_i))$，则 $V_i$ 是 $Y$ 中的开集。定义
$$U = \bigcap_{i=1}^m \mathcal{L}(K_i, V_i) = \{ g \in C(X,Y) : g(K_i) \subset V_i, \forall 1 \le i \le m \}.$$
验证 $f \in U$：

对任意 $x \in K_i$，由 $K_i$ 的定义有 $d_Y(f(x), f(x_i)) \leq \varepsilon/4 < \varepsilon/2$，故 $f(x) \in V_i$，即 $f(K_i) \subset V_i$，因此 $f \in U$。

验证 $U \subset B_d(f, \varepsilon)$：
取任意 $g \in U$，则对任意 $x \in X$，存在 $i$ 使得 $x \in K_i$（因 $X = \bigcup_{i=1}^m K_i$）。由于 $g(K_i) \subset V_i$，有 $d_Y(g(x), f(x_i)) < \varepsilon/2$；又由 $x \in K_i$，有 $d_Y(f(x), f(x_i)) \leq \varepsilon/4$。
由三角不等式：
$$d_Y(g(x), f(x)) \leq d_Y(g(x), f(x_i)) + d_Y(f(x_i), f(x)) < \varepsilon/2 + \varepsilon/4 = 3\varepsilon/4 < \varepsilon.$$

因此 $\sup_{x \in X} d_Y(g(x), f(x)) < \varepsilon$，即 $d(f,g) < \varepsilon$，故 $g \in B_d(f, \varepsilon)$。

### 3
设半范数族生成的拓扑为 $\mathcal{T}_s$。
先证明 $\mathcal{T}_s \subset \mathcal{T}_c$:
半范数拓扑 $\mathcal{T}_s$ 的子基由形如
$$\{ f \in C(X, \mathbb{R}) : p_K(f) < \varepsilon \} = \{ f : \sup_{x \in K} |f(x)| < \varepsilon \} = \mathcal{L}(K, (-\varepsilon, \varepsilon))$$
的集合组成，其中 $K$ 紧，$\varepsilon > 0$。由于 $(-\varepsilon, \varepsilon)$ 是 $\mathbb{R}$ 中的开集，这些集合属于 $\mathcal{T}_c$。

再证明 $\mathcal{T}_c \subset \mathcal{T}_s$:
只用证 $\mathcal{L}(K, V)$ 在 $\mathcal{T}_s$ 中开。由于$f$连续，$K$紧，$f(K)$紧。对任意 $y \in f(K)$，存在 $\delta_y > 0$ 使得 $B_{\delta_y}(y) \subset V$。由$f(K)$紧，存在有限子覆盖 $B_{\delta_{y_1}}(y_1), \dots, B_{\delta_{y_m}}(y_m)$ 覆盖$f(K)$。定义
$$\delta = \min_{1 \le i \le m} \delta_{y_i} > 0.$$
取任意 $g \in C(X, \mathbb{R})$ 满足
$$p_K(g - f) = \sup_{x \in K} |g(x) - f(x)| < \delta.$$
则对任意 $x \in K$，存在 $i$ 使得 $f(x) \in B_{\delta_{y_i}}(y_i)$，从而
$$|g(x) - y_i| \leq |g(x) - f(x)| + |f(x) - y_i| < \delta + \delta_{y_i} \leq 2\delta_{y_i}.$$
因此，$g(x) \in B_{\delta_{y_i}}(y_i) \subset V$，即 $g(K) \subset V$，从而 $g \in \mathcal{L}(K, V)$。这表明 $\mathcal{L}(K, V)$ 在 $\mathcal{T}_s$ 中开。



### 4
根据3的结论，紧开拓扑 $\mathcal{T}_c$ 等于半范数族生成的拓扑 $\mathcal{T}_s$，即
$$\mathcal{T}_c = \mathcal{T}_s.$$
半范数拓扑 $\mathcal{T}_s$ 的子基由形如
$$\{ f \in C(X, \mathbb{R}) : p_K(f) < \varepsilon \}, \quad K \subset X \text{ 紧}, \varepsilon > 0$$
的集合组成。
对任意 $f \in C(X, \mathbb{R})$，其邻域基由形如
$$\{ g \in C(X, \mathbb{R}) : p_{K_i}(g - f) < \varepsilon_i, \, i = 1, \dots, n \}$$
的集合构成，其中 $K_1, \dots, K_n$ 是紧集，$\varepsilon_1, \dots, \varepsilon_n > 0$。若 $g, h$ 满足 $p_{K_i}(g - f) < \varepsilon_i$ 和 $p_{K_i}(h - f) < \varepsilon_i$，则对任意 $t \in [0,1]$，有
$$p_{K_i}((tg + (1-t)h) - f) \leq t p_{K_i}(g - f) + (1-t) p_{K_i}(h - f) < \varepsilon_i,$$
故 $tg + (1-t)h$ 也属于该邻域，进而表明该邻域是凸集。

加法连续性：若 $f_n \to f$ 且 $g_n \to g$，则对任意紧集 $K$ 和 $\varepsilon > 0$，存在 $N$ 使得当 $n > N$ 时，
$$p_K(f_n - f) < \varepsilon/2, \quad p_K(g_n - g) < \varepsilon/2,$$
于是
$$p_K((f_n + g_n) - (f + g)) \leq p_K(f_n - f) + p_K(g_n - g) < \varepsilon,$$
故 $f_n + g_n \to f + g$.


数乘连续性：若 $\lambda_n \to \lambda$ 且 $f_n \to f$，则对任意紧集 $K$ 和 $\varepsilon > 0$，存在 $N$ 使得当 $n > N$ 时，
$$|\lambda_n - \lambda| < \varepsilon/(2p_K(f) + 1), \quad p_K(f_n - f) < \varepsilon/(2|\lambda| + 1),$$
于是
$$p_K(\lambda_n f_n - \lambda f) \leq |\lambda_n| p_K(f_n - f) + |\lambda_n - \lambda| p_K(f) < \varepsilon,$$
故 $\lambda_n f_n \to \lambda f$.


因此，$C(X, \mathbb{R})$ 是拓扑向量空间。
### 5
令 $\mathcal{K}$ 为 $X$ 的所有紧子集的集合。定义映射
$$\Phi : C(X,Y) \to \prod_{K \in \mathcal{K}} C(K,Y), \quad \Phi(f) = (f|_K)_{K \in \mathcal{K}}.$$
紧开拓扑 $\mathcal{T}_c$ 是使得所有限制映射 $f \mapsto f|_K$ 连续的最粗拓扑，而乘积拓扑在 $\Phi(C(X,Y))$ 上正好是使得这些映射连续的拓扑。因此，$\Phi$ 是到其像的同胚嵌入。

先证若 $\mathcal{F}$ 预紧，则每个 $\mathcal{F}_K$ 预紧：
对任意紧集 $K \subset X$，限制映射$r_K : C(X,Y) \to C(K,Y), \quad r_K(f) = f|_K$是连续的。连续映射将紧集映为紧集，故$r_K(\overline{\mathcal{F}}) = \overline{r_K(\mathcal{F})} = \overline{\mathcal{F}_K}$在 $C(K,Y)$ 中是紧的，即 $\mathcal{F}_K$ 是预紧的。

再证若每个 $\mathcal{F}_K$ 预紧，则 $\mathcal{F}$ 预紧：
考虑乘积空间$P = \prod_{K \in \mathcal{K}} \overline{\mathcal{F}_K}.$ 由 Tychonoff 定理，$P$ 是紧的。
由于对任意 $f \in \mathcal{F}$ 有 $f|_K \in \mathcal{F}_K \subset \overline{\mathcal{F}_K}$，故$\Phi(\mathcal{F}) \subset P.$

又因 $\Phi$ 是嵌入，且 $\Phi(C(X,Y))$ 在乘积空间中闭（因它由满足一致性条件 $f_K = f_{K'}|_K$ 对 $K \subset K'$ 的族构成，这些条件是闭的），故$\overline{\Phi(\mathcal{F})} \subset \Phi(C(X,Y)) \cap P.$ 而 $P$ 是紧的，所以 $\overline{\Phi(\mathcal{F})}$ 是紧集 $P$ 的闭子集，因而是紧的。因此 $\Phi(\mathcal{F})$ 在 $\Phi(C(X,Y))$ 中是预紧的，再由 $\Phi$ 是同胚嵌入，得 $\mathcal{F}$ 在 $C(X,Y)$ 中是预紧的。

### 6
由第5题，$\mathcal{F}$ 在 $\mathcal{T}_c$ 下预紧当且仅当对任意紧集 $K \subset X$，$\mathcal{F}_K$ 在 $C(K,Y)$ 中预紧。由于 $K$ 紧，由第2题，$C(K,Y)$ 上的紧开拓扑与一致度量拓扑一致。由经典 Arzela-Ascoli 定理，$\mathcal{F}_K$ 在一致度量拓扑下预紧当且仅当 $\mathcal{F}_K$ 逐点预紧且等度连续。而 $\mathcal{F}$ 逐点预紧等价于对每个紧集 $K$（特别地取单点集）$\mathcal{F}_K$ 逐点预紧。因此，条件等价于 $\mathcal{F}$ 逐点预紧且对任意紧集 $K$，$\mathcal{F}_K$ 等度连续。


# 18.2
设X为赋范线性空间，试由上述的变种Arzela-Ascoli定理推出Banach-Alaoglu 定理。
提示：$X^{*}$ 中的闭单位球作为$C(X,\mathbb{R})$ ）是等度连续的，证明$X^{*}$ 上的紧开拓扑是比弱\*拓扑强，即在弱\*拓扑中的开集在紧开拓扑中仍是开集。

## 解答
首先验证 $B^*$ 满足上述(6)中条件。
对于逐点预紧性，对任意 $x \in X$，集合 $\{ f(x) : f \in B^* \}$ 满足 $|f(x)| \leq \|f\| \|x\| \leq \|x\|$，因此包含在紧区间 $[-\|x\|, \|x\|]$ 中，从而预紧。
对于等度连续性，对任意 $x \in X$ 和 $\epsilon > 0$，取 $\delta = \epsilon$，则对任意 $y$ 满足 $\|y - x\| < \delta$ 和任意 $f \in B^*$，有
$$|f(y) - f(x)| = |f(y - x)| \leq \|f\| \|y - x\| \leq \|y - x\| < \epsilon,$$
故等度连续性成立。
因此，$B^*$ 在紧开拓扑下是预紧的。接着证明 $B^*$ 在紧开拓扑下是闭的。设 $\{f_\alpha\} \subset B^*$ 是一个网，在紧开拓扑下收敛于 $f \in C(X, \mathbb{R})$。由于紧开拓扑收敛蕴含逐点收敛，对每个 $x \in X$，有 $f_\alpha(x) \to f(x)$。由 $f_\alpha$ 的线性性，对任意 $x, y \in X$ 和 $a, b \in \mathbb{R}$，有
$$f_\alpha(a x + b y) = a f_\alpha(x) + b f_\alpha(y),$$
取极限得 $f(a x + b y) = a f(x) + b f(y)$，故 $f$ 是线性的。同时，由 $|f_\alpha(x)| \leq \|x\|$ 取极限得 $|f(x)| \leq \|x\|$，故 $\|f\| \leq 1$，即 $f \in B^*$，表明 $B^*$ 是闭的。结合预紧性，$B^*$ 在紧开拓扑下是紧的。
弱拓扑由子基开集 $O_{x,U} = \{ f \in X^* : f(x) \in U \}$ 生成，而紧开拓扑由子基开集 $W_{K,V} = \{ f \in C(X, \mathbb{R}) : f(K) \subset V \}$ 生成。对于弱开集 $O_{x,U}$，取紧集 $K = \{x\}$，则
$$O_{x,U} = W_{\{x\}, U} \cap X^*,$$
故弱开集是紧开拓扑开集，表明紧开拓扑比弱拓扑强。
由于 $B^*$ 在较强调扑（紧开拓扑）下紧，它在较弱拓扑（弱\*拓扑）下也紧，证明了 Banach-Alaoglu 定理。
