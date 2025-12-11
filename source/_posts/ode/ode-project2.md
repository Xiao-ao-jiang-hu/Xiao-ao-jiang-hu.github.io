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
# 第一部分：
设 $q: \mathbb{R} \to \mathbb{R}$ 连续且以 1 为周期。考虑如下周期系数二阶齐次方程
$$
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

## 2. 证明：若 $|\operatorname{tr}M|<2$，则 (1) 的所有解均有界
当 $|\operatorname{tr} M| < 2$ 时，$M$ 的特征值为一对共轭复数 $e^{\pm i\theta}$ ($\theta \in \mathbb{R}$)，且模长为 1。由于特征值互异，$M$ 可对角化：存在可逆矩阵 $P$ 使得 $M = P \begin{bmatrix} e^{i\theta} & 0 \\ 0 & e^{-i\theta} \end{bmatrix} P^{-1}$，或等价地 $M$ 相似于一个旋转矩阵，因此 $M$ 的幂一致有界：存在常数 $C > 0$，使得对任意整数 $n$，有 $\|M^n\| \le C$。

设 $\Phi(t) = \Pi(t; q)$ 为基解矩阵，满足 $\Phi(0) = I_2$ 且 $\Phi(t+1) = \Phi(t) M$。对任意 $t \in \mathbb{R}$，记 $t = n + \tau$，其中 $n = \lfloor t \rfloor$，$\tau \in [0,1)$，则 $\Phi(t) = \Phi(\tau) M^n$。由于 $\Phi(\tau)$ 在 $[0,1]$ 上连续，故存在 $C_1 > 0$ 使得 $\sup_{\tau \in [0,1]} \|\Phi(\tau)\| \le C_1$。因此
$$
\|\Phi(t)\| \le \|\Phi(\tau)\| \cdot \|M^n\| \le C_1 C,
$$
即 $\Phi(t)$ 在 $\mathbb{R}$ 上有界。

方程 (1) 的任意解 $x(t)$ 对应的向量解 $(x(t), \dot{x}(t))^{\mathsf{T}}$ 可表示为 $\Phi(t) c$，其中 $c$ 为常向量。于是 $\| (x(t), \dot{x}(t))^{\mathsf{T}} \| \le \|\Phi(t)\| \cdot \|c\| \le C_1 C \|c\|$，故 $x(t)$ 和 $\dot{x}(t)$ 均有界，特别地 $x(t)$ 有界。

## 3. 证明如下
**a. 若 tr M = 2，则 (1) 有一个周期为 1 的非零解。**

由于 $\det M = 1$，特征多项式为 $\lambda^2 - (\operatorname{tr} M)\lambda + 1 = 0$。当 $\operatorname{tr} M = 2$ 时，特征方程为 $\lambda^2 - 2\lambda + 1 = (\lambda - 1)^2 = 0$，故 $M$ 的特征值为 $\lambda = 1$（二重）。因此，$M$ 至少有一个属于特征值 $1$ 的特征向量，即存在非零向量 $c \in \mathbb{R}^2$ 使得 $Mc = c$。设 $X(t) = \Pi(t; q)c$ 为系统 (2) 的解，满足 $X(0) = c$。由周期性 $\Pi(t+1; q) = \Pi(t; q)M$，得
$$X(t+1) = \Pi(t+1; q)c = \Pi(t; q)Mc = \Pi(t; q)c = X(t),$$
即 $X(t)$ 周期为 1。其第一个分量 $x(t)$ 即为方程 (1) 的一个周期为 1 的非零解。

**b. (1) 的所有解均是周期为 1 的解当且仅当 M = I_2。**

若所有解周期为 1，则对任意 $c \in \mathbb{R}^2$，解 $X(t) = \Pi(t; q)c$ 满足 $X(t+1) = X(t)$。特别地，在 $t=0$ 处有 $X(1) = X(0)$，即 $\Pi(1; q)c = c$，亦即 $Mc = c$ 对所有 $c$ 成立，故 $M = I_2$。反之，若 $M = I_2$，则 $\Pi(t+1; q) = \Pi(t; q)M = \Pi(t; q)$，从而 $\Pi(t; q)$ 是周期为 1 的矩阵函数，于是任意解 $X(t) = \Pi(t; q)c$ 均周期为 1，故 (1) 的所有解周期为 1。

**c. 若 tr M = 2 但 M ≠ I_2，则 (1) 的非 1-周期解必无界。**

由 (a) 知，存在非零特征向量 $v$ 使得 $Mv = v$，对应解周期为 1。由于 $M \ne I_2$ 且 $\operatorname{tr} M = 2$，$M$ 的 Jordan 形式为
$$M = P \begin{bmatrix} 1 & 1 \\ 0 & 1 \end{bmatrix} P^{-1},$$
其中 $P$ 可逆。设 $w$ 为广义特征向量，满足 $Mw = v + w$。任意初始条件 $c \in \mathbb{R}^2$ 可唯一表为 $c = \alpha v + \beta w$。对应的解为 $X(t) = \Pi(t; q)c$。写 $t = n + \tau$，其中 $n = \lfloor t \rfloor$，$\tau \in [0,1)$，则
$$X(t) = \Pi(\tau; q) M^n c.$$
计算 $M^n c$：由于 $M^n v = v$，且 $M^n w = n v + w$（可通过归纳法证明），故
$$M^n c = \alpha v + \beta (n v + w) = (\alpha + n\beta) v + \beta w.$$
若 $c$ 不是特征向量（即解非 1-周期），则 $\beta \ne 0$，于是当 $|n| \to \infty$ 时，$\|M^n c\| \to \infty$。由于 $\Pi(\tau; q)$ 在 $[0,1]$ 上连续，存在常数 $C_1, C_2 > 0$ 使得对任意 $\tau$ 有 $\|\Pi(\tau; q)\| \le C_1$ 且 $\|\Pi(\tau; q)^{-1}\| \le C_2$（因行列式恒为 1，故可逆），因此 $\|X(t)\|$ 与 $\|M^n c\|$ 同阶，当 $t \to \pm\infty$ 时无界。特别地，解的第一个分量 $x(t)$ 也无界。

称 $\phi$ 是 (1) 的一个 1-反周期解，若 $\phi$ 是 (1) 的解且满足
$$
\phi(t + 1) = -\phi(t), \quad \forall t \in \mathbb{R}.
$$
由定义知，若 $\phi$ 是一个 1-反周期解，则其是一个 2-周期解。

## 4. 证明如下
**a. 若 $\operatorname{tr} M = -2$，则 (1) 有一个非零 1-反周期解。**

由 $\det M = 1$，特征方程为 $\lambda^2 + 2\lambda + 1 = (\lambda + 1)^2 = 0$，故 $M$ 的特征值为 $\lambda = -1$（二重）。因此，存在非零向量 $c \in \mathbb{R}^2$ 使得 $Mc = -c$。设 $X(t) = \Pi(t; q)c$ 为系统 (2) 的解，满足 $X(0) = c$。则
$$
X(t+1) = \Pi(t+1; q)c = \Pi(t; q)Mc = \Pi(t; q)(-c) = -X(t),
$$
即 $X(t)$ 是 1-反周期的。其第一个分量 $x(t)$ 即为方程 (1) 的一个非零 1-反周期解。

**b. (1) 的所有解均是 1-反周期解当且仅当 $M = -I_2$。**

若所有解都是 1-反周期的，则对任意 $c \in \mathbb{R}^2$，有 $X(t+1) = -X(t)$，特别地在 $t=0$ 处有 $X(1) = -X(0)$，即 $\Pi(1; q)c = -c$，亦即 $Mc = -c$ 对所有 $c$ 成立，故 $M = -I_2$。

反之，若 $M = -I_2$，则 $\Pi(t+1; q) = \Pi(t; q)M = -\Pi(t; q)$，于是任意解 $X(t) = \Pi(t; q)c$ 满足
$$
X(t+1) = -\Pi(t; q)c = -X(t),
$$
即所有解均为 1-反周期解。

**c. 若 $\operatorname{tr} M = -2$ 但 $M \ne -I_2$，则 (1) 的非 1-反周期解必无界。**

此时 $M$ 的 Jordan 形式为
$$
M = P \begin{bmatrix} -1 & 1 \\ 0 & -1 \end{bmatrix} P^{-1},
$$
其中 $P$ 可逆。设 $v$ 为属于特征值 $-1$ 的特征向量，$w$ 为广义特征向量，满足 $Mw = -w + v$。任取初始条件 $c = \alpha v + \beta w$，对应的解为 $X(t) = \Pi(t; q)c$。写 $t = n + \tau$，$\tau \in [0,1)$，则
$$
X(t) = \Pi(\tau; q) M^n c.
$$
计算 $M^n c$：由于 $M^n v = (-1)^n v$，且通过归纳可证 $M^n w = (-1)^n w + n(-1)^{n-1} v$，故
$$
M^n c = \alpha (-1)^n v + \beta \left[ (-1)^n w + n(-1)^{n-1} v \right] = (-1)^n (\alpha - n\beta) v + (-1)^n \beta w.
$$
若解不是 1-反周期的，则 $\beta \ne 0$（否则 $c$ 与 $v$ 平行，对应 1-反周期解）。此时当 $|n| \to \infty$ 时，系数 $(-1)^n (\alpha - n\beta)$ 的绝对值趋于无穷，而 $\Pi(\tau; q)$ 在 $[0,1]$ 上连续有界（因行列式恒为 1，故可逆），所以 $\|X(t)\|$ 随 $|t| \to \infty$ 无界，从而解的第一个分量 $x(t)$ 也无界。


## 5.证明如下
**a. 若 $|\operatorname{tr} M| > 2$，则方程 (1) 的任何非零解均无界。**

由于 $\det M = 1$，特征值为 $\lambda_1, \lambda_2$ 满足 $\lambda_1 \lambda_2 = 1$ 且 $\operatorname{tr} M = \lambda_1 + \lambda_2$。当 $|\operatorname{tr} M| > 2$ 时，$\lambda_1, \lambda_2$ 为互异实数，且 $|\lambda_1| > 1 > |\lambda_2|$。设 $v_1, v_2$ 为对应的特征向量。任意非零解对应的初始向量 $c = \alpha v_1 + \beta v_2$（不全为零）。令 $X(t) = \Pi(t; q)c$，写 $t = n + \tau$，其中 $n = \lfloor t \rfloor$，$\tau \in [0,1)$，则
$$
X(t) = \Pi(\tau; q) M^n c = \Pi(\tau; q) (\alpha \lambda_1^n v_1 + \beta \lambda_2^n v_2).
$$
若 $\alpha \neq 0$，则当 $n \to +\infty$ 时 $|\lambda_1^n| \to \infty$，故 $\|X(t)\| \to \infty$（即解在正半轴无界）。若 $\alpha = 0$，则 $\beta \neq 0$，此时考虑负半轴：令 $n = -m$，$m \to +\infty$，有
$$
M^n c = \beta \lambda_2^{-m} v_2 = \beta \lambda_1^m v_2,
$$
因为 $\lambda_2^{-1} = \lambda_1$，故当 $m \to \infty$ 时 $|\lambda_1^m| \to \infty$，解在负半轴无界。因此，任何非零解在整个 $\mathbb{R}$ 上无界。

**b. 方程 (1) 存在非零有界解当且仅当 $|\operatorname{tr} M| \le 2$。**  

“当”部分：若 $|\operatorname{tr} M| \le 2$，分三种情形：
- 若 $|\operatorname{tr} M| < 2$，由第2问知所有解有界，故存在非零有界解。
- 若 $\operatorname{tr} M = 2$，由第3问知存在周期为1的非零解，故有界。
- 若 $\operatorname{tr} M = -2$，由第4问知存在1-反周期非零解（从而为2-周期解），故有界。
因此，当 $|\operatorname{tr} M| \le 2$ 时，必存在非零有界解。

“仅当”部分：若存在非零有界解，但假设 $|\operatorname{tr} M| > 2$，则由 (a) 知任何非零解均无界，矛盾。故必有 $|\operatorname{tr} M| \le 2$。

综上，结论得证。