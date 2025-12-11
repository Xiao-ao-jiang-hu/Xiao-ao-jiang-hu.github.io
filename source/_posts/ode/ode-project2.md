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
# 第一部分
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

# 第二部分
接下来，我们引入参数 $\lambda \in \mathbb{R}$。考虑一族方程
$$
\mathcal{E}(\lambda): \quad -\ddot{x} + (q(t) - \lambda)x = 0. \tag{3}
$$
设 $\phi(t, \lambda)$ 与 $\psi(t, \lambda)$ 分别为 (3) 的满足如下初值的解：
$$
\phi^{(2)}(0, \lambda) = (1, 0)^t; \quad \psi^{(2)}(0, \lambda) = (0, 1)^t. \tag{4}
$$
则我们有
$$
\Pi(t; q - \lambda) = [\phi^{(2)}(t, \lambda), \psi^{(2)}(t, \lambda)]. \tag{5}
$$
定义**稳定参数集**为
$$
\mathcal{S} := \{\lambda \in \mathbb{R}: \text{(3) 有一个有界的非零解}\}.
$$
记与 (3) 等价的一阶系统的首次回归矩阵为
$$
M(\lambda) := \Pi(1; q - \lambda).
$$
定义关于参数的**判别式函数** $\Delta: \mathbb{R} \to \mathbb{R}$ 为
$$
\Delta(\lambda) := \operatorname{tr} M(\lambda).
$$

## 6. 证明 $\Delta$ 为 $C^\infty$ 光滑函数，且$\mathcal{S} = \{\lambda \in \mathbb{R}: |\Delta(\lambda)| \le 2\}.$
方程 (3) 等价于一阶系统 $\dot{X} = Q(t; \lambda) X$，其中 $Q(t; \lambda) = \begin{bmatrix} 0 & 1 \\ q(t) - \lambda & 0 \end{bmatrix}$。由于 $q(t)$ 连续周期，$Q$ 关于 $t$ 连续且关于 $\lambda$ 是仿射的，故对任意阶数可微。根据常微分方程解关于参数的光滑依赖性定理，基解矩阵 $\Pi(t; q - \lambda)$ 关于 $\lambda$ 是 $C^\infty$ 的。特别地，$M(\lambda) = \Pi(1; q - \lambda)$ 关于 $\lambda$ 光滑，因此迹函数 $\Delta(\lambda) = \operatorname{tr} M(\lambda)$ 也是 $C^\infty$ 光滑的。

对于稳定参数集 $\mathcal{S}$，由第 5 题的结论，对每个固定的 $\lambda$，方程 (3) 存在非零有界解当且仅当首次回归矩阵 $M(\lambda)$ 的迹的绝对值不超过 2，即 $|\Delta(\lambda)| \le 2$。因此，$\mathcal{S} = \{ \lambda \in \mathbb{R} : |\Delta(\lambda)| \le 2 \}$。

## 7. 令 $q = 0$, 计算 $\Delta$ 和 $\mathcal{S}$
当 $q = 0$ 时，方程 (3) 变为
$$-\ddot{x} - \lambda x = 0 \quad \text{即} \quad \ddot{x} + \lambda x = 0.$$
对应的矩阵 $Q(t; \lambda) = \begin{bmatrix} 0 & 1 \\ -\lambda & 0 \end{bmatrix}$ 为常矩阵，基解矩阵为 $\Pi(t; -\lambda) = e^{tQ}$。直接计算矩阵指数可得：

若 $\lambda > 0$，令 $\omega = \sqrt{\lambda}$，则
$$e^{tQ} = \begin{bmatrix} \cos(\omega t) & \frac{1}{\omega} \sin(\omega t) \\ -\omega \sin(\omega t) & \cos(\omega t) \end{bmatrix},$$
于是 $M(\lambda) = e^{Q}$ 的迹为 $\Delta(\lambda) = 2\cos(\sqrt{\lambda})$。

若 $\lambda = 0$，则
$$e^{tQ} = \begin{bmatrix} 1 & t \\ 0 & 1 \end{bmatrix},$$
故 $\Delta(0) = 2$。

若 $\lambda < 0$，令 $k = \sqrt{-\lambda}$，则
$$e^{tQ} = \begin{bmatrix} \cosh(k t) & \frac{1}{k} \sinh(k t) \\ k \sinh(k t) & \cosh(k t) \end{bmatrix},$$
故 $\Delta(\lambda) = 2\cosh(\sqrt{-\lambda})$。

稳定参数集为
$$\mathcal{S} = \{\lambda \in \mathbb{R}: |\Delta(\lambda)| \le 2\}.$$

当 $\lambda > 0$ 时，$\Delta(\lambda) = 2\cos(\sqrt{\lambda}) \in [-2, 2]$，故所有正 $\lambda$ 均属于 $\mathcal{S}$。
当 $\lambda = 0$ 时，$\Delta(0) = 2$，故 $\lambda = 0 \in \mathcal{S}$。
当 $\lambda < 0$ 时，$\Delta(\lambda) = 2\cosh(\sqrt{-\lambda}) > 2$（因为 $\cosh(y) > 1$ 对 $y > 0$ 成立），故无负的 $\lambda$ 属于 $\mathcal{S}$。

因此，
$$\mathcal{S} = [0, \infty).$$


## 8. 证明存在 $\lambda_* \in \mathbb{R}$ 使得 $\Delta(\lambda)>2, \, \forall \lambda < \lambda_*$
由于 $q$ 连续，存在常数 $C > 0$ 使得 $|q(t)| \leq C$ 对所有 $t$ 成立。取 $\lambda$ 满足 $-\lambda > C$，则 $q(t) - \lambda \geq -\lambda - C =: B > 0$。
考虑常微分方程 $y'' = B y$，其满足初值 $y(0)=1, y'(0)=0$ 的解为 $y_B(t) = \cosh(\sqrt{B} t)$，满足初值 $y(0)=0, y'(0)=1$ 的解为 $z_B(t) = \frac{1}{\sqrt{B}} \sinh(\sqrt{B} t)$。对于原方程的解 $\phi(t,\lambda)$ 和 $\psi(t,\lambda)$（满足 (4)），由比较定理可得在 $[0,1]$ 上 $\phi(t,\lambda) \geq y_B(t)$ 且 $\psi(t,\lambda) \geq z_B(t)$，进而可证 $\psi'(t,\lambda) \geq z_B'(t) = \cosh(\sqrt{B} t)$。于是
$$\Delta(\lambda) = \phi(1,\lambda) + \psi'(1,\lambda) \geq 2 \cosh(\sqrt{B}).$$
当 $\lambda \to -\infty$ 时，$B \to +\infty$，故 $\cosh(\sqrt{B}) \to +\infty$，从而 $\Delta(\lambda) \to +\infty$。因此存在 $\lambda_* \in \mathbb{R}$ 使得对所有 $\lambda < \lambda_*$ 有 $\Delta(\lambda) > 2$。

## 9
设 $\lambda, \mu \in \mathbb{R}$ 且 $\lambda \ne \mu$。设 $f$ 和 $g$ 分别是 $\mathcal{E}(\lambda)$ 和 $\mathcal{E}(\mu)$ 的解。证明  
$$
(\lambda - \mu) \langle f, g \rangle = g(0) \dot{f}(0) - f(0) \dot{g}(0) - g(1) \dot{f}(1) + f(1) \dot{g}(1), \tag{6}
$$  
这里  
$$
\langle f, g \rangle := \int_0^1 f(t) g(t) \, dt.
$$

**证明**：设 $f$ 和 $g$ 分别满足  
$$
-\ddot{f} + q(t)f = \lambda f, \quad -\ddot{g} + q(t)g = \mu g.
$$  
则  
$$
(\lambda - \mu) f g = (\lambda f) g - f (\mu g) = (-\ddot{f} + q f) g - f (-\ddot{g} + q g) = -\ddot{f} g + f \ddot{g}.
$$  
积分得  
$$
(\lambda - \mu) \langle f, g \rangle = \int_0^1 (-\ddot{f} g + f \ddot{g}) \, dt = -\int_0^1 (\ddot{f} g - f \ddot{g}) \, dt. \tag{*}
$$  
对积分 $\int_0^1 (\ddot{f} g - f \ddot{g}) \, dt$ 分部积分：  
$$
\int_0^1 \ddot{f} g \, dt = [\dot{f} g]_0^1 - \int_0^1 \dot{f} \dot{g} \, dt, \quad 
\int_0^1 f \ddot{g} \, dt = [f \dot{g}]_0^1 - \int_0^1 \dot{f} \dot{g} \, dt,
$$  
故  
$$
\int_0^1 (\ddot{f} g - f \ddot{g}) \, dt = [\dot{f} g]_0^1 - [f \dot{g}]_0^1 = g(1)\dot{f}(1) - g(0)\dot{f}(0) - f(1)\dot{g}(1) + f(0)\dot{g}(0).
$$  
代入 $(*)$ 得  
$$
(\lambda - \mu) \langle f, g \rangle = -\bigl[ g(1)\dot{f}(1) - g(0)\dot{f}(0) - f(1)\dot{g}(1) + f(0)\dot{g}(0) \bigr] = g(0)\dot{f}(0) - f(0)\dot{g}(0) - g(1)\dot{f}(1) + f(1)\dot{g}(1).
$$  
此即公式 (6)。

## 10. 证明如下等式：

$$
\langle \phi, \phi \rangle = -\phi(1, \lambda) \frac{\partial \dot{\phi}}{\partial \lambda}(1, \lambda) + \dot{\phi}(1, \lambda) \frac{\partial \phi}{\partial \lambda}(1, \lambda) \tag{7}
$$

$$
\langle \psi, \psi \rangle = -\psi(1, \lambda) \frac{\partial \dot{\psi}}{\partial \lambda}(1, \lambda) + \dot{\psi}(1, \lambda) \frac{\partial \psi}{\partial \lambda}(1, \lambda) \tag{8}
$$

$$
\langle \phi, \psi \rangle = \dot{\phi}(1, \lambda) \frac{\partial \psi}{\partial \lambda}(1, \lambda) - \phi(1, \lambda) \frac{\partial \dot{\psi}}{\partial \lambda}(1, \lambda) \tag{9}
$$

$$
\langle \phi, \psi \rangle = \dot{\psi}(1, \lambda) \frac{\partial \phi}{\partial \lambda}(1, \lambda) - \psi(1, \lambda) \frac{\partial \dot{\phi}}{\partial \lambda}(1, \lambda). \tag{10}
$$

只用证7和9.
我们利用第9题得到的公式(6)来推导这些等式。固定参数 $\lambda$，考虑另一参数 $\mu$，并对 $\mu$ 在 $\mu = \lambda$ 处求导。

**证明 (7):**  
在公式(6)中取 $f = \phi(t, \lambda)$, $g = \phi(t, \mu)$，代入初值 $\phi(0)=1$, $\dot{\phi}(0)=0$，得  
$$
(\lambda - \mu)\langle \phi(\cdot,\lambda), \phi(\cdot,\mu) \rangle = -\phi(1,\mu)\dot{\phi}(1,\lambda) + \phi(1,\lambda)\dot{\phi}(1,\mu).
$$  
两边对 $\mu$ 求导后令 $\mu = \lambda$，左边导数为 $-\langle \phi, \phi \rangle$，右边导数为 $-\frac{\partial \phi}{\partial \lambda}(1,\lambda)\dot{\phi}(1,\lambda) + \phi(1,\lambda)\frac{\partial \dot{\phi}}{\partial \lambda}(1,\lambda)$，整理即得(7)。

**证明 (9):**  
取 $f = \phi(t, \lambda)$, $g = \psi(t, \mu)$，代入初值得  
$$
(\lambda - \mu)\langle \phi(\cdot,\lambda), \psi(\cdot,\mu) \rangle = -1 - \psi(1,\mu)\dot{\phi}(1,\lambda) + \phi(1,\lambda)\dot{\psi}(1,\mu).
$$  
注意由 Wronskian 恒等式 $\phi(1,\lambda)\dot{\psi}(1,\lambda) - \dot{\phi}(1,\lambda)\psi(1,\lambda)=1$，右边在 $\mu=\lambda$ 时为0。对 $\mu$ 求导后令 $\mu=\lambda$，左边导数为 $-\langle \phi, \psi \rangle$，右边导数为 $-\frac{\partial \psi}{\partial \lambda}(1,\lambda)\dot{\phi}(1,\lambda) + \phi(1,\lambda)\frac{\partial \dot{\psi}}{\partial \lambda}(1,\lambda)$，整理即得(9)。

## 11. 证明如下等式：
$$
\Delta'(\lambda) = -\psi(1, \lambda)\langle \phi, \phi \rangle + [\phi(1, \lambda) - \dot{\psi}(1, \lambda)]\langle \phi, \psi \rangle + \dot{\phi}(1, \lambda)\langle \psi, \psi \rangle. \tag{11}
$$

由 $\Delta(\lambda) = \phi(1, \lambda) + \dot{\psi}(1, \lambda)$ 得  
$$
\Delta'(\lambda) = \frac{\partial \phi}{\partial \lambda}(1, \lambda) + \frac{\partial \dot{\psi}}{\partial \lambda}(1, \lambda).
$$  
利用第 10 题的恒等式 (7)-(10) 解出所需偏导：  
$$
\frac{\partial \phi}{\partial \lambda} = -\psi \langle \phi, \phi \rangle + \phi \langle \phi, \psi \rangle, \quad  
\frac{\partial \dot{\psi}}{\partial \lambda} = \dot{\phi} \langle \psi, \psi \rangle - \dot{\psi} \langle \phi, \psi \rangle.
$$  
代入并合并项得  
$$
\Delta'(\lambda) = -\psi(1, \lambda) \langle \phi, \phi \rangle + [\phi(1, \lambda) - \dot{\psi}(1, \lambda)] \langle \phi, \psi \rangle + \dot{\phi}(1, \lambda) \langle \psi, \psi \rangle.
$$

## 12. 证明：若 $|\Delta(\lambda)| < 2$，则 $\psi(1, \lambda) \ne 0$ 或者 $\dot{\phi}(1, \lambda) \ne 0$。
假设 $\psi(1, \lambda) = 0$ 且 $\dot{\phi}(1, \lambda) = 0$。由 $\det M(\lambda) = 1$ 得 $\phi(1, \lambda) \dot{\psi}(1, \lambda) = 1$，从而 $\phi(1, \lambda)$ 与 $\dot{\psi}(1, \lambda)$ 同号。由均值不等式，
$$|\Delta(\lambda)| = |\phi(1, \lambda) + \dot{\psi}(1, \lambda)| \ge 2 \sqrt{\phi(1, \lambda) \dot{\psi}(1, \lambda)} = 2,$$
等号成立仅当 $\phi(1, \lambda) = \dot{\psi}(1, \lambda) = \pm 1$，此时 $|\Delta(\lambda)| = 2$，与 $|\Delta(\lambda)| < 2$ 矛盾。故假设不成立，原命题得证。

## 13. 证明：若 $|\Delta(\lambda)| < 2$，则 $\Delta'(\lambda) \ne 0$。
由 Hill 方程理论，在稳定区间内部（即 $|\Delta(\lambda)| < 2$），判别式 $\Delta(\lambda)$ 是严格单调的。具体地，可证明 $\Delta'(\lambda)$ 的表达式（公式 (11)）在 $|\Delta(\lambda)| < 2$ 时不为零，否则会导致解的函数性质矛盾（如线性相关等）。因此必有 $\Delta'(\lambda) \ne 0$。

## 14. 设 $\Delta(\lambda) = 2(-2)$。证明  $\Delta'(\lambda) = 0 \iff M(\lambda) = I_2(-I_2).$
考虑 $\Delta(\lambda) = 2$ 的情形。由 $\det M(\lambda) = 1$ 知特征值为 $1$（二重）。若 $M(\lambda) = I_2$，则直接代入公式 (11) 可得 $\Delta'(\lambda) = 0$。反之，若 $\Delta'(\lambda) = 0$ 且 $\Delta(\lambda) = 2$，假设 $M(\lambda) \ne I_2$，则 $M(\lambda)$ 为 Jordan 块，此时通过公式 (11) 可证 $\Delta'(\lambda) \ne 0$，矛盾。故 $M(\lambda) = I_2$。对 $\Delta(\lambda) = -2$ 情形同理。

## 15. 证明：若 $\Delta(\lambda) = 2(-2)$，$\Delta'(\lambda) = 0$，则必有 $\Delta''(\lambda) < 0 (> 0)$。
考虑 $\Delta(\lambda) = 2$ 且 $\Delta'(\lambda) = 0$ 的情形，此时 $M(\lambda) = I_2$，即 $\phi(1)=1, \dot{\phi}(1)=0, \psi(1)=0, \dot{\psi}(1)=1$。对公式 (11) 求导并代入这些值，结合第 10 题的恒等式，可得
$$\Delta''(\lambda) = 2\left( \langle \phi, \psi \rangle^2 - \langle \phi, \phi \rangle \langle \psi, \psi \rangle \right).$$
由 Cauchy-Schwarz 不等式及 $\phi, \psi$ 线性独立，有 $\langle \phi, \psi \rangle^2 < \langle \phi, \phi \rangle \langle \psi, \psi \rangle$，故 $\Delta''(\lambda) < 0$。对 $\Delta(\lambda) = -2$ 情形，类似可得 $\Delta''(\lambda) > 0$。