---
title: 泛函分析第十五次作业
tags:
  - math
  - functional analysis
categories:
  - math
  - functional analysis
index_img: /img/fa.jpg
banner_img: /img/fa.jpg
excerpt: 泛函分析第十五次作业
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
