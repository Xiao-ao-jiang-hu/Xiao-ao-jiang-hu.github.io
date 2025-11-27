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
设 $U \in \mathcal{T}_d$，$f \in U$。则存在 $\varepsilon > 0$ 使得一致开球
$$B_d(f, \varepsilon) = \{ g \in C(X,Y) : d(f,g) < \varepsilon \} \subseteq U.$$
由于 $X$ 紧且 $f$ 连续，$f(X)$ 紧。对每个 $x \in X$，考虑开球 $B_{\varepsilon/4}(f(x))$。这些球覆盖 $f(X)$，由紧性存在有限子覆盖：
$$f(X) \subseteq \bigcup_{i=1}^m B_{\varepsilon/4}(f(x_i)).$$
定义紧集
$$K_i = \{ x \in X : d_Y(f(x_i), f(x)) \leq \varepsilon/4 \}, \quad i = 1, \dots, m.$$
由于 $f$ 连续，$K_i$ 是闭集，又因 $X$ 紧，故 $K_i$ 紧。且
$$X = \bigcup_{i=1}^m K_i.$$
令
$$V_i = B_{\varepsilon/2}(f(x_i)), \quad U_f = \bigcap_{i=1}^m \mathcal{L}(K_i, V_i).$$
则 $U_f$ 是紧开拓扑中的开集。
对任意 $x \in K_i$，有 $d_Y(f(x_i), f(x)) \leq \varepsilon/4 < \varepsilon/2$，故 $f(x) \in V_i$，即 $f(K_i) \subset V_i$，所以 $f \in \mathcal{L}(K_i, V_i)$，从而 $f \in U_f$。
设 $g \in U_f$，则对每个 $i$，有 $g(K_i) \subset V_i$。对任意 $x \in X$，存在 $i$ 使得 $x \in K_i$，于是
$$d_Y(f(x), g(x)) \leq d_Y(f(x), f(x_i)) + d_Y(f(x_i), g(x)) < \frac{\varepsilon}{4} + \frac{\varepsilon}{2} = \frac{3\varepsilon}{4} < \varepsilon.$$
因此 $d(f,g) < \varepsilon$，即 $g \in B_d(f, \varepsilon)$。
综上，对任意 $f \in U$，存在紧开拓扑中的开集 $U_f$ 使得 $f \in U_f \subseteq U$，故 $U \in \mathcal{T}_{\text{compact-open}}$。


设 $U \in \mathcal{T}_{\text{compact-open}}$，$f \in U$。由紧开拓扑的定义，存在有限个紧集 $K_1, \dots, K_m \subset X$ 和开集 $V_1, \dots, V_m \subset Y$ 使得
$$f \in \bigcap_{i=1}^m \mathcal{L}(K_i, V_i) \subseteq U.$$
对每个 $i$，由于 $f(K_i) \subset V_i$ 且 $f(K_i)$ 紧（因 $K_i$ 紧且 $f$ 连续），存在 $\varepsilon_i > 0$ 使得
$$\{ y \in Y : d_Y(y, f(K_i)) < \varepsilon_i \} \subseteq V_i.$$
取 $\varepsilon = \min\{\varepsilon_1, \dots, \varepsilon_m\}$。
验证 $B_{\text{unif}}(f, \varepsilon) \subseteq \bigcap_{i=1}^m \mathcal{L}(K_i, V_i)$：
设 $g \in B_{\text{unif}}(f, \varepsilon)$，则对任意 $x \in X$，有 $d_Y(f(x), g(x)) < \varepsilon$。特别地，对任意 $x \in K_i$，有
$$d_Y(g(x), f(K_i)) \leq d_Y(g(x), f(x)) < \varepsilon \leq \varepsilon_i,$$
故 $g(x) \in V_i$，即 $g(K_i) \subset V_i$，所以 $g \in \mathcal{L}(K_i, V_i)$。
因此 $g \in \bigcap_{i=1}^m \mathcal{L}(K_i, V_i)$。
综上，$f \in B_{\text{unif}}(f, \varepsilon) \subseteq U$，故 $U \in \mathcal{T}_d$。

于是，$\mathcal{T}_{\text{compact-open}} = \mathcal{T}_d$。

# 18.2
设X为赋范线性空间，试由上述的变种Arzela-Ascoli定理推出Banach-Alaoglu 定理。
提示：$X^{*}$ 中的闭单位球作为$C(X,\mathbb{R})$ ）是等度连续的，证明$X^{*}$ 上的紧开拓扑是比弱\*拓扑强，即在弱\*拓扑中的开集在紧开拓扑中仍是开集。



