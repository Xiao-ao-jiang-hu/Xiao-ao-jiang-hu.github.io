---
title: 泛函分析第四次作业
tags:
  - math
  - functional-analysis
categories:
  - math
  - functional-analysis
excerpt: no excerpt
date: 2025-09-26 16:17:36
---
## 4.1
写出网收敛的概念，并尝试说明$[a,b]$区间上的Riemann可积是网收敛。

### 解答
#### 网收敛定义
- **定向集**：一个预序集（即具有自反性和传递性的二元关系）$(D, \leq)$，其中任意两个元素都有上界（即对于任意 $d_1, d_2 \in D$，存在 $d_3 \in D$ 使得 $d_1 \leq d_3$ 和 $d_2 \leq d_3$）。
- **网**：从一个定向集 $D$ 到一个拓扑空间 $X$ 的函数 $\{x_d\}_{d \in D}$。
- **网收敛**：网 $\{x_d\}_{d \in D}$ 收敛于点 $x \in X$，如果对于 $x$ 的任意邻域 $U$，存在索引 $d_0 \in D$，使得对于所有 $d \geq d_0$（即 $d_0 \leq d$），有 $x_d \in U$。这表示网的值最终停留在 $x$ 的任意小邻域内。



#### 证明Riemman可积是网收敛

考虑区间 $[a, b]$ 的所有标记划分的集合 $T$：
  - $P$ 是 $[a, b]$ 的一个划分，即有限点集 $a = x_0 < x_1 < \cdots < x_n = b$。
  - $\xi$ 是代表点的选择，即对每个子区间 $[x_{i-1}, x_i]$，选择一点 $\xi_i \in [x_{i-1}, x_i]$。
在 $T$ 上定义序关系：对于两个标记划分 $(P, \xi)$ 和 $(Q, \eta)$，定义 $(P, \xi) \leq (Q, \eta)$ 当且仅当 $Q$ 是 $P$ 的细化（即 $P$ 的每个子区间被 $Q$ 的子区间覆盖）。这个序使 $T$ 成为定向集，因为任意两个标记划分有一个共同的细化（例如，取它们的划分点的并集）。

对于每个标记划分 $(P, \xi) \in T$，定义Riemann和：
  $$
  S(P, \xi, f) = \sum_{i=1}^{n} f(\xi_i) \Delta x_i
  $$
其中 $\Delta x_i = x_i - x_{i-1}$。
这些Riemann和形成一个网 $\{ S(P, \xi, f) \}_{(P, \xi) \in T}$ 从定向集 $T$ 到实数集 $\mathbb{R}$（赋予通常拓扑）。

由Riemman可积定义：存在一个数 $I \in \mathbb{R}$，使得对于任意 $\epsilon > 0$，存在 $\delta > 0$，当划分 $P$ 的范数（即最大子区间长度）小于 $\delta$ 时，无论代表点 $\xi$ 如何选择，都有 $|S(P, \xi, f) - I| < \epsilon$。于是对于 $I$ 的任意邻域，存在一个标记划分 $(P_0, \xi_0) \in T$，使得对于所有细化 $(P, \xi) \geq (P_0, \xi_0)$，有 $S(P, \xi, f) \in (I - \epsilon, I + \epsilon)$。故，网 $\{ S(P, \xi, f) \}_{(P, \xi) \in T}$ 收敛于 $I$。



## 4.2
考虑装备了上确界范数的 $C[0,1]$ 空间，令

$$
N = \left\{ f \in C[0,1] : \int_0^1 f(x)\,dx = 0 \right\}
$$

为 $C[0,1]$ 中具有零平均值函数构成的线性闭子空间，再令

$$
X = \{ f \in C[0,1] : f(0) = 0 \}
$$

并定义 $M = N \cap X$，即

$$
M = \left\{ f \in C[0,1] : f(0) = 0,\ \int_0^1 f(x)\,dx = 0 \right\}.
$$

1. 若 $u \in C[0,1]$，证明

$$
d(u, N) = \inf_{n \in N} \| u - n \|_\infty = \left| \int_0^1 u(x)\,dx \right|,
$$

其中 $\int_0^1 u(x)\,dx$ 表示 $u$ 的平均值，因此下确界在 $n = u - \int_0^1 u(x)\,dx \in N$ 处取到；

2. 若 $u(x) = x \in X$，证明

$$
d(u, M) = \inf_{m \in M} \| u - m \|_\infty = \frac{1}{2},
$$

但下确界不能在任何 $m \in M$ 处取到。

### 解答
#### 1.
由于$n \in N$，于是有
$$
\int_0^1 (u(x) - n(x))\,dx = \int_0^1 u(x)\,dx - \int_0^1 n(x)\,dx = \int_0^1 u(x)\,dx.
$$
而由积分性质
$$
|\int_0^1 u(x)dx| \geq (1-0) \inf_{x \in [0,1]} |u(x) - n(x)| = \inf_{x \in [0,1]} |u(x) - n(x)| = \|u - n\|_\infty.
$$
于是有
$$
\|u - n\|_\infty \leq \left|\int_0^1 u(x)\,dx\right|, \forall n \in N.
$$
等号当且仅当$u(x) - n(x)$在$[0,1]$上恒为常数时成立。于是
$$
n(x) = u(x)+C, \forall x \in [0,1].
$$
积分令其为零得到结论

#### 2.
由1.可知
$$
d(u, M) \leq \int_0^1 u(x)dx = \frac{1}{2}.
$$
但由1.知等号当且仅当$u$和$M$差一个常数。但$u(0) = 0$且在$[0, 1]$上单调递增，而$M$中函数在$[0,1]$上必有正有负，故不可能差一个常数。于是不存在$m$取到下确界

## 4.3
若 $A$ 是某个 Hilbert 空间的子集，证明

$$
A^\perp = \overline{A}^{\perp},
$$

其中 $\overline{A}$ 表示 $A$ 的闭包；若 $M$ 是某个 Hilbert 空间的线性子空间，证明

$$
M^{\perp\perp} = \overline{M}.
$$
