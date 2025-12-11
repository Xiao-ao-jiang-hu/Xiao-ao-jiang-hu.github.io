---
title: ODE第二次大作业
tags:
  - math
  - ode
categories:
  - math
  - ode
excerpt: ODE第二次大作业
index_img: /img/ode.jpg
banner_img: /img/ode.jpg
abbrlink: 347f22c5
date: 2025-12-11 10:32:06
---
设 $q: \mathbb{R} \to \mathbb{R}$ 连续且以 1 为周期。考虑如下周期系数二阶齐次方程
$$
\label{eq:1}
-\ddot{x} + q(t)x = 0. \tag{1}
$$
与之等价的周期系数一阶方程形如
$$
\dot{x} = Q(t)x; \quad \text{这里} \quad Q(t) := \begin{bmatrix} 0 & 1 \\ q(t) & 0 \end{bmatrix}. \tag{2}
$$
设 $\Pi(t; q)$ 为初值问题
$$
\dot{X} = Q(t)X; \quad X(0) = I_2
$$
的解。定义系统的首次回归矩阵 $M := \Pi(1; q)$。

## 1. 证明 $det(\Pi(t; q))=1$
根据刘维尔公式，行列式 $\det(X(t))$ 满足
$$\frac{d}{dt} \det(X(t)) = \operatorname{tr}(Q(t)) \det(X(t)).$$
由于 $\operatorname{tr}(Q(t)) = 0 + 0 = 0$，可得
$$\frac{d}{dt} \det(X(t)) = 0,$$
因此 $\det(X(t))$ 为常数。由初始条件 $X(0) = I_2$ 知 $\det(X(0)) = 1$，故对任意 $t \in \mathbb{R}$ 有
$$\det(\Pi(t; q)) = 1.$$

## 2. 证明：若 $|\operatorname{tr}M|<2$，则 \eqref{eq:1} 的所有解均有界
