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

试证明：集合 $U \subset C(X,Y)$ 在紧开拓扑中是开集当且仅当对任意 $f \in U$，存在有限个紧集 $K_1, \cdots, K_m \subset X$ 以及有限个开集 $V_1, \cdots, V_m \subset Y$ 使得 $f \in \bigcap_{i=1}^m \mathcal{L}(K_i, V_i) \subset U$.

1. 若 $X$ 是紧的，证明 $(C(X,Y), \mathcal{T}_{compact-open})$ 与由度量
$$
d(f,g) := \sup_{x \in X} d_Y(f(x), g(x)), \quad \forall f,g \in C(X,Y).
$$
诱导的拓扑一致。
提示 1：令 $f \in C(X,Y)$ 且满足存在 $K_1, \cdots, K_m \subset X$ 为紧集，$V_1, \cdots, V_m \subset Y$ 为开集，使得 $f(K_i) \subset V_i, \forall 1 \le i \le m$，证明存在 $\varepsilon > 0$ 使得 $B_\varepsilon(f(x_i)) \subset V_i, \forall x \in K_i, 1 \le i \le m$，由此推出满足 $d(f,g) < \varepsilon$ 的每个 $g \in C(X,Y)$ 都满足 $g(K_i) \subset V_i, \forall 1 \le i \le m$.
提示 2：令 $f \in C(X,Y), \varepsilon > 0$，找出元素 $x_1, \cdots, x_m \in X$ 使得 $X = \bigcup_{i=1}^m K_i$，其中 $K_i := \{ x \in X : d_Y(f(x_i), f(x)) \le \varepsilon/4 \}$，定义 $U := \{ g \in C(X,Y) : g(K_i) \subset V_i, \forall 1 \le i \le m \}, V_i := B_{\varepsilon/2}(f(x_i))$，证明 $f \in U$，以及 $d(f,g) < \varepsilon, \forall g \in U$.

2. 对每个紧集 $K \subset X$ 定义半范数 $p_K : C(X,\mathbb{R}) \to \mathbb{R}$ 为
$$
p_K(f) := \sup_K |f|, \quad \forall f \in C(X,\mathbb{R}).
$$
证明这些半范数生成了紧开拓扑，即 $(C(X,Y), \mathcal{T}_{compact-open})$ 是使得对任意的 $p_K$ ($K \subset X$ 是紧集) 连续的最小拓扑。

3. 证明：$(C(X,\mathbb{R}), \mathcal{T}_{compact-open})$ 是局部凸拓扑向量空间。

4. 证明：集合 $\mathcal{F} \subset C(X,Y)$ 在 $(C(X,Y), \mathcal{T}_{compact-open})$ 中是预紧的，当且仅当对任意紧集 $K \subset X$
$$
\mathcal{F}_K := \{ f|_K : f \in \mathcal{F} \} \subset C(K,Y)
$$
是预紧的。提示：令 $\mathcal{K} \subset 2^X$ 为紧集构成的集合，证明映射 $C(X,Y) \to \prod_{K \in \mathcal{K}} C(K,Y) : f \mapsto (f|_K)_{K \in \mathcal{K}}$ 是到其像的同胚映射，并应用 Tychonoff 定理。

5. 证明如下的变种 Arzela-Ascoli 定理：设 $X$ 为拓扑空间，$Y$ 为度量空间，则集合 $\mathcal{F} \subset C(X,Y)$ 在 $(C(X,Y), \mathcal{T}_{compact-open})$ 是预紧的，当且仅当它逐点预紧并且对任意紧集 $K \subset X$，如前定义的 $\mathcal{F}_K \subset C(K,Y)$ 等度连续。