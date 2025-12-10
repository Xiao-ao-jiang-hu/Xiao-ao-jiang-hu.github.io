---
title: Ch5.2 基本群的计算
tags:
  - math
  - topology
categories:
  - math
  - topology
index_img: /img/topology.jpg
banner_img: /img/topology.jpg
excerpt: 拓扑学笔记
abbrlink: f47aabc8
date: 2024-10-29 13:24:49
---
# 基本群的计算

本节计算若干常见拓扑空间的基本群，结果汇总如下：

| 空间                                 | 基本群                                |
| ------------------------------------ | ------------------------------------- |
| $\mathbb{E}^n$ 的凸子集              | 平凡群                                |
| 圆周 $S^1$                           | $\mathbb{Z}$                          |
| $n$ 维球面 $S^n$（$n \geq 2$）       | 平凡群                                |
| $n$ 维实射影空间 $P^n$（$n \geq 2$） | $\mathbb{Z}_2$                        |
| 环面 $T$                             | $\mathbb{Z} \times \mathbb{Z}$        |
| 克莱因瓶                             | $\langle a, b \mid a^2 = b^2 \rangle$ |
| 透镜空间 $L(p,q)$                    | $\mathbb{Z}_p$                        |


## 0. 提升引理
提升引理是计算基本群的关键工具。道路提升引理说明了如何将路径从空间 $X$ 提升到其覆盖空间 $\tilde{X}$（在后续章节中会介绍），而同伦提升引理则处理同伦的提升。对于圆周 $S^1$，我们将其视为实数轴 $\mathbb{R}$ 的覆盖空间，通过指数映射 $\pi: \mathbb{R} \to S^1$ 给出。
### 引理 5.10（路径提升引理）
对 $S^1$ 中任意从 $1$ 出发的路径 $\sigma$，存在唯一路径 $\tilde{\sigma}: I \to \mathbb{R}$ 使得 $\tilde{\sigma}(0)=0$ 且 $\pi \circ \tilde{\sigma} = \sigma$。

#### 证明
利用 $S^1$ 的开覆盖 $\{U=S^1 \setminus \{-1\}, V=S^1 \setminus \{1\}\}$ 及其在 $\mathbb{R}$ 中的原像分解。通过勒贝格引理将 $I$ 细分，使得每一段落在 $\sigma^{-1}(U)$ 或 $\sigma^{-1}(V)$ 中，然后逐段提升。

### 引理 5.11（同伦提升引理）
设 $F: I \times I \to S^1$ 满足 $F(0,t)=F(1,t)=1$ 对所有 $t$ 成立。则存在唯一映射 $\tilde{F}: I \times I \to \mathbb{R}$ 使得 $\pi \circ \tilde{F} = F$ 且 $\tilde{F}(0,t)=0$。  
#### 证明
类似路径提升，将 $I\times I$ 细分为小正方形，使得每个正方形在 $F$ 下落入 $U$ 或 $V$，然后逐正方形提升。

## 1. $\mathbb{E}^n$ 的凸子集

设 $C \subseteq \mathbb{E}^n$ 为凸集。对任意以 $p \in C$ 为基点的环路 $\alpha$，定义直线同伦  
$$
F(s,t) = (1-t)\alpha(s) + t p.
$$  
则 $F$ 是 $\alpha$ 到常值环路 $e(s)=p$ 的同伦。因此 $\pi_1(C,p)$ 为平凡群。若道路连通空间的基本群平凡，则称其为**单连通**空间。

## 2. 圆周 $S^1$

### 定理 5.8  
圆周的基本群同构于整数加群：$\pi_1(S^1) \cong \mathbb{Z}$。

#### 证明

将 $S^1$ 视为复平面中的单位圆，取基点 $1 \in S^1$。定义指数映射 $\pi: \mathbb{R} \to S^1$ 为 $\pi(x) = e^{2\pi i x}$。对每个整数 $n$，定义 $\mathbb{R}$ 中从 $0$ 到 $n$ 的路径 $\gamma_n(s)=ns$。复合 $\pi \circ \gamma_n$ 是 $S^1$ 中以 $1$ 为基点的环路，其绕行方向由 $n$ 的符号决定，绕行圈数为 $|n|$。定义同态  
$$
\phi: \mathbb{Z} \to \pi_1(S^1,1), \quad \phi(n) = \langle \pi \circ \gamma_n \rangle.
$$

**引理 5.9**：$\phi$ 是同态。  
**证明**：对 $m,n \in \mathbb{Z}$，考虑 $\mathbb{R}$ 中路径 $\sigma(s) = \gamma_n(s) + m$，则 $\pi \circ \sigma = \pi \circ \gamma_n$。路径 $\gamma_m \cdot \sigma$ 连接 $0$ 到 $m+n$，故  
$$
\phi(m+n) = \langle \pi \circ \gamma_{m+n} \rangle = \langle \pi \circ (\gamma_m \cdot \sigma) \rangle = \langle (\pi \circ \gamma_m) \cdot (\pi \circ \sigma) \rangle = \phi(m) \cdot \phi(n).
$$

两个提升引理可得：
- **满射性**：对任意 $\langle \alpha \rangle \in \pi_1(S^1,1)$，提升 $\tilde{\alpha}$ 为 $\mathbb{R}$ 中从 $0$ 到某整数 $n$ 的路径，则 $\phi(n)=\langle \alpha \rangle$。
- **单射性**：若 $\phi(n)$ 为单位元，则存在从常值环路到 $\pi \circ \gamma_n$ 的同伦。提升该同伦可得 $\tilde{F}(1,1)=0$，从而 $n=0$。

因此 $\phi$ 是同构。


## 3. $n$ 维球面 $S^n$（$n \geq 2$）

### 定理 5.12（维数 ≥ 2 的球面单连通）  
当 $n \geq 2$ 时，$\pi_1(S^n)$ 为平凡群。

#### 证明

取 $S^n$ 上两点 $x, y$，令 $U = S^n \setminus \{x\}$，$V = S^n \setminus \{y\}$。则：
- $U$ 与 $V$ 均同胚于 $\mathbb{E}^n$，故单连通。
- 当 $n \geq 2$ 时，$U \cap V = S^n \setminus \{x,y\}$ 道路连通。
- 对任意基点 $p \in U \cap V$ 及环路 $\alpha$，利用勒贝格引理将 $\alpha$ 分割为若干小段，每段完全落在 $U$ 或 $V$ 中。通过在 $U \cap V$ 中选取辅助路径，可将 $\alpha$ 表示为一系列完全位于 $U$ 或 $V$ 中的环路的乘积。由于 $U$ 和 $V$ 单连通，每个因子零伦，故 $\alpha$ 零伦。

因此 $S^n$（$n \geq 2$）单连通。

## 4. 轨道空间的基本群

### 定理 5.13（轨道空间的基本群）  
设 $G$ 为同胚群，作用于单连通空间 $X$，且满足：对任意 $x \in X$，存在邻域 $U$ 使得对所有 $g \in G \setminus \{e\}$ 有 $U \cap g(U) = \varnothing$。则轨道空间 $X/G$ 的基本群同构于 $G$：$\pi_1(X/G) \cong G$。

#### 证明

取基点 $x_0 \in X$，令 $\pi: X \to X/G$ 为自然投影。对 $g \in G$，取 $X$ 中连接 $x_0$ 与 $g(x_0)$ 的路径 $\gamma_g$（$X$ 单连通确保路径在同伦意义下唯一）。定义  
$$
\phi: G \to \pi_1(X/G, \pi(x_0)), \quad \phi(g) = \langle \pi \circ \gamma_g \rangle.
$$  
验证 $\phi$ 为同态。条件 $U \cap g(U)=\varnothing$ 保证 $\pi$ 是覆叠映射，从而可应用提升引理：
- **满射**：对 $X/G$ 中任意环路 $\alpha$，存在提升 $\tilde{\alpha}$ 为 $X$ 中从 $x_0$ 到某点 $g(x_0)$ 的路径，则 $\phi(g)=\langle \alpha \rangle$。
- **单射**：若 $\phi(g)$ 为单位元，则存在 $\pi \circ \gamma_g$ 到常值环路的同伦，提升该同伦可得 $g(x_0)=x_0$，由作用自由性得 $g=e$。

故 $\phi$ 为同构。


## 例

1. **环面 $T$**  
   取 $X=\mathbb{E}^2$，$G=\mathbb{Z} \times \mathbb{Z}$ 通过平移作用。$X$ 单连通，作用满足定理条件，轨道空间为环面，故 $\pi_1(T) \cong \mathbb{Z} \times \mathbb{Z}$。

2. **实射影空间 $P^n$（$n \geq 2$）**  
   取 $X=S^n$，$G=\mathbb{Z}_2$ 通过对径点作用。当 $n \geq 2$ 时 $S^n$ 单连通，作用满足定理条件，故 $\pi_1(P^n) \cong \mathbb{Z}_2$。

3. **透镜空间 $L(p,q)$**  
   取 $X=S^3$，$G=\mathbb{Z}_p$ 通过特定旋转作用（见第4.4节例6）。$S^3$ 单连通，作用满足定理条件，故 $\pi_1(L(p,q)) \cong \mathbb{Z}_p$。


## 非阿贝尔基本群的例子

基本群不一定交换。例如，考虑群 $G = \langle t, u \mid u^{-1} t u = t^{-1} \rangle$（这是一个非交换群）在平面上的适当作用，其轨道空间的基本群即为 $G$。

环面的基本群也可由定理5.13得到，同时该定理也表明当 $m,n \geq 2$ 时，$\pi_1(S^m \times S^n)$ 是平凡群（因为 $S^m \times S^n$ 单连通）。


