---
title: ODE第九次作业
tags:
  - math
  - ode
categories:
  - math
  - ode
excerpt: ODE第九次作业
index_img: /img/ode.jpg
banner_img: /img/ode.jpg
date: 2025-11-28 20:07:02
---
# Ex 1
考虑两个一维向量场 $F: (0,1) \to \mathbb{R}$; $G: (0,\infty) \to \mathbb{R}$
$$
F(r) = \frac{r(1 - r^2)}{2}; \quad G(r) = \frac{r}{2}.
$$
1) 证明 $\dot{r} = F(r)$ 与 $\dot{r} = G(r)$ 的相流均存在，并分别计算它们的相流。
2) 证明 $\dot{r} = F(r)$ 与 $\dot{r} = G(r)$ 拓扑共轭。
3) 证明 $\dot{X} = F(X)$ 与 $\dot{Y} = G(Y)$ 在平衡点附近局部拓扑共轭，这里
$$
F(x,y) := (x/2 - y - x(x^2 + y^2)/2, x + y/2 - y(x^2 + y^2)/2);
$$
$$
G(x,y) := (x/2 - y, x + y/2).
$$





# Ex 2 
设 $F \in C^1(\mathbb{R}^2, \mathbb{R}^2)$，且 $F(0) = 0$，$F'(0) = D$，其中
$$
D = \begin{bmatrix}
\lambda \\
\mu
\end{bmatrix}; \quad \lambda \leq \mu < 0.
$$
本题的目的是证明 $\dot{X} = F(X)$ 与 $\dot{Y} = DY$ 在平衡点附近局部拓扑共轭。我们用 $\phi(t,z)$ 表示初值问题
$$
\dot{X} = F(X); \quad X(0) = z
$$
的极大解，其定义域记为 $I_z$。承认（以后会证明）$\phi$ 作为 $(t,z)$ 的映射在其定义域上为 $C^1$ 光滑。
1) 证明存在 $\rho > 0$ 使得对任意的 $r \in (0,\rho]$，向量场 $F(X)$ 限制在 $S_r := \{X \in \mathbb{R}^2 : |X| = r\}$ 上朝向圆内，即
$$
F(X) \cdot X < 0, \quad \forall X \in S_r.
$$

2) 固定 $r \in (0,\rho)$。对任意的 $z \in B_\rho := \{X : |X| < \rho\}$ 且 $z \neq 0$，证明存在 $T(z) \in I_z$ 使得 $\phi(T(z),z) \in S_r$。
3) 证明 $T: B_\rho \setminus \{0\} \to \mathbb{R}$ 连续。
4) 定义 $h: B_\rho \to \mathbb{R}^2$ 为 $h(0) = 0$，
$$
h(z) := e^{-T(z)D} \phi(T(z),z), \quad z \in B_\rho \setminus \{0\}.
$$
证明 $h$ 连续。
5) 证明 $h(B_\rho)$ 为开集，且 $h: B_\rho \to h(B_\rho)$ 为同胚。
6) 证明 $h$ 为 $\dot{X} = F(X)$ 与 $\dot{Y} = DY$ 的局部拓扑共轭，即对任意的 $z \in B_\rho$ 以及 $t \in I_z$ 使得 $\phi(t,z) \in B_\rho$ 有
$$
h(\phi(t,z)) = e^{tD} h(z).
$$