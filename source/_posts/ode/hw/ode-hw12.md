---
title: ODE第十二次作业
tags:
  - math
  - ode
categories:
  - math
  - ode-hw
excerpt: ODE第十二次作业
index_img: /img/ode.jpg
banner_img: /img/ode.jpg
abbrlink: 9dd07d1a
date: 2025-12-21 21:13:52
---
# 习题 1

对初值问题

$$
\dot{x} = x; \quad x(0) = 1
$$

使用 Picard-Lindelöf 定理的证明方法定出一个尽可能大的解的定义区间。

## 解答

函数 $f(t,x)=x$ 在 $\mathbb{R}^2$ 上连续且关于 $x$ 全局 Lipschitz 连续（Lipschitz 常数 $L=1$）。根据 Picard-Lindelöf 定理，初值问题存在唯一局部解。考虑矩形区域 $R=\{(t,x): |t|\leq a, |x-1|\leq b\}$，其中 $a,b>0$。计算 $M=\max_{(t,x)\in R}|f(t,x)|=1+b$，Lipschitz 常数 $L=1$。局部存在区间为 $|t|\leq h$，其中 $h=\min\left(a, \frac{b}{M}, \frac{1}{L}\right)=\min\left(a, \frac{b}{1+b}, 1\right)$。为最大化 $h$，取 $a\geq 1$ 并令 $b\to\infty$，则 $\frac{b}{1+b}\to 1$，从而 $h=1$。因此，局部解的存在区间至少为 $|t|<1$。

由于方程是线性的，解可以逐次延拓。通过求解方程可得通解 $x(t)=Ce^t$，代入初值得 $x(t)=e^t$，定义在整个实数轴 $\mathbb{R}$ 上。因此，尽可能大的定义区间为 $(-\infty, +\infty)$。

# 习题 2

考虑初值问题

$$
\dot{x} = x^2; \quad x(0) = 1.
$$

使用 Picard-Lindelöf 定理的证明方法定出一个尽可能大的解的定义区间。

## 解答

函数 $f(t,x)=x^2$ 在包含 $(0,1)$ 的区域上连续且关于 $x$ 局部 Lipschitz。取矩形区域 $R=\{(t,x): |t|\leq a, |x-1|\leq b\}$，计算 $M=\max_{(t,x)\in R}|x^2|=(1+b)^2$，Lipschitz 常数 $L=\max_{(t,x)\in R}|2x|=2(1+b)$。局部存在区间 $|t|\leq h$，其中 $h=\min\left(a, \frac{b}{M}, \frac{1}{L}\right)=\min\left(a, \frac{b}{(1+b)^2}, \frac{1}{2(1+b)}\right)$。为最大化 $h$，取 $a$ 充分大，并选择 $b$ 使 $\min\left(\frac{b}{(1+b)^2}, \frac{1}{2(1+b)}\right)$ 最大。令 $\frac{b}{(1+b)^2}=\frac{1}{2(1+b)}$ 得 $b=1$，此时 $h=\frac{1}{4}$。因此，局部解在 $|t|\leq\frac{1}{4}$ 存在唯一。

通过分离变量求解方程：$\frac{dx}{x^2}=dt$，积分得 $-\frac{1}{x}=t+C$，代入 $x(0)=1$ 得 $C=-1$，所以 $x(t)=\frac{1}{1-t}$。该解在 $t=1$ 处有奇点，且当 $t<1$ 时定义良好。因此，最大定义区间为 $(-\infty, 1)$（正向时间不能超过 $1$，负向时间可至 $-\infty$）。

# 习题 3

设 $(X, d)$ 是一个完备度量空间。设 $\theta_n > 0$ 满足 $\sum_{n=1}^{\infty} \theta_n < \infty$。设 $T: X \to X$ 是一个映射满足对任意的 $n \geq 1$ 有

$$
d(T^n(x), T^n(y)) \leq \theta_n d(x, y), \quad \forall x, y \in X.
$$

证明 $T$ 有唯一的不动点 $x_*$，且对任意的 $x \in X$ 有

$$
d(T^n(x), x_*) \leq \left(\sum_{j=n}^{\infty} \theta_j\right) d(T(x), x).
$$

## 解答

**不动点的存在性与唯一性：**  
任取 $x_0 \in X$，定义序列 $\{x_n\}$ 满足 $x_n = T^n(x_0)$。对任意 $m > n \geq 1$，有
$$
d(x_n, x_m) = d(T^n(x_0), T^m(x_0)) \leq \theta_n d(x_0, T^{m-n}(x_0)).
$$
估计 $d(x_0, T^{m-n}(x_0))$：
$$
d(x_0, T^{m-n}(x_0)) \leq \sum_{k=0}^{m-n-1} d(T^k(x_0), T^{k+1}(x_0)) \leq \sum_{k=0}^{m-n-1} \theta_k d(x_0, T(x_0)),
$$
其中 $\theta_0=1$。由于 $\sum_{k=0}^\infty \theta_k$ 收敛，设 $S=\sum_{k=0}^\infty \theta_k$，则 $d(x_n, x_m) \leq \theta_n S d(x_0, T(x_0))$。由 $\sum \theta_n$ 收敛知 $\theta_n \to 0$，故 $\{x_n\}$ 是 Cauchy 序列。由 $X$ 完备，存在 $x_* \in X$ 使得 $x_n \to x_*$。

由条件取 $n=1$ 得 $d(T(x), T(y)) \leq \theta_1 d(x,y)$，故 $T$ 连续。从而 $T(x_*) = \lim_{n\to\infty} T(x_n) = \lim_{n\to\infty} x_{n+1} = x_*$，即 $x_*$ 为不动点。

若还有不动点 $y_*$，则对任意 $n$，$d(x_*, y_*) = d(T^n(x_*), T^n(y_*)) \leq \theta_n d(x_*, y_*)$。由于 $\theta_n \to 0$，存在 $n$ 使 $\theta_n < 1$，故 $d(x_*, y_*) = 0$，唯一性得证。

**不等式证明：**  
对任意 $x \in X$ 和 $n \geq 1$，有
$$
d(T^n(x), x_*) = d(T^n(x), T^n(x_*)) \leq \theta_n d(x, x_*).
$$
为估计 $d(x, x_*)$，对任意 $m > n$，
$$
d(T^n(x), x_*) \leq \sum_{k=n}^{m-1} d(T^k(x), T^{k+1}(x)) + d(T^m(x), x_*) \leq \sum_{k=n}^{m-1} \theta_k d(x, T(x)) + \theta_m d(x, x_*).
$$
令 $m \to \infty$，由 $\theta_m \to 0$ 得
$$
d(T^n(x), x_*) \leq \left( \sum_{k=n}^{\infty} \theta_k \right) d(x, T(x)).
$$
此即所求不等式。

# 习题 4

从 $\varphi \equiv 0$ 开始计算如下 IVP 的 Picard 迭代序列

$$
\dot{x} = 2t - 2\sqrt{\max\{0, x\}}, \quad x(0) = 0.
$$

该序列收敛吗？

## 解答
Picard 迭代定义为 $\varphi_0(t)=0$，
$$
\varphi_{n+1}(t) = \int_0^t \left(2s - 2\sqrt{\max\{0, \varphi_n(s)\}}\right) ds.
$$

- 当 $t \geq 0$：  
  $\varphi_0(t)=0$，则 $\varphi_1(t)=\int_0^t 2s ds = t^2$。  
  $\varphi_1(t)=t^2 \geq 0$，故 $\varphi_2(t)=\int_0^t (2s - 2s) ds = 0$。  
  由此交替：$\varphi_{2k}(t)=0$，$\varphi_{2k+1}(t)=t^2$。该序列在 $t>0$ 时不收敛（振荡）；在 $t=0$ 时收敛于 $0$。

- 当 $t < 0$：  
  设 $t<0$，则 $\varphi_0(t)=0$，$\varphi_1(t)=\int_0^t 2s ds = t^2$。  
  由于 $s$ 从 $0$ 到 $t$ 为负，$\sqrt{\max\{0, \varphi_1(s)\}} = \sqrt{s^2}=|s|=-s$，故 $\varphi_2(t)=\int_0^t (2s - 2(-s)) ds = \int_0^t 4s ds = 2t^2$。  
  一般地，设 $\varphi_n(t)=c_n t^2$（$c_n \geq 0$），则递推关系为 $c_{n+1}=1+\sqrt{c_n}$，$c_0=0$。该序列单调递增收敛于方程 $c=1+\sqrt{c}$ 的正根 $c_*=\frac{3+\sqrt{5}}{2}$。因此，当 $t<0$ 时 Picard 迭代收敛于 $\varphi_*(t)=c_* t^2$。

综上，Picard 迭代序列在 $t>0$ 时不收敛，在 $t<0$ 时收敛。

# 习题 5

构造一个系统 $\dot{x} = f(t, x)$ 使得其某个初值问题 $I(\omega)$ 有两个极大解 $(\phi_\omega, I_\omega)$ 和 $(\hat{\phi}_\omega, \hat{I}_\omega)$ 满足 $I_\omega \neq \hat{I}_\omega$。

## 解答

构造自治系统 $\dot{x}=f(x)$，其中 $f: \mathbb{R} \to \mathbb{R}$ 连续定义为：
$$
f(x) = 
\begin{cases}
\sqrt{x}, & 0 \leq x \leq 1, \\
\text{光滑递增连接}, & 1 < x < 2, \\
x^2, & x \geq 2.
\end{cases}
$$
且 $f(x)=0$ 当 $x<0$。考虑初值问题 $\dot{x}=f(x), x(0)=0$。

- **解一（零解）：** $\phi_1(t)=0$ 对所有 $t \in \mathbb{R}$ 成立，是极大解，定义区间 $I_1=\mathbb{R}$。
- **解二（非零解）：** 在 $t \geq 0$ 时，解先从 $0$ 出发，在 $x$ 较小时满足 $\dot{x}=\sqrt{x}$，故初期行为如 $x(t)=\frac{t^2}{4}$。当 $x$ 增大进入 $x^2$ 主导区域后，解将在有限时间 $T>0$ 爆破（因为 $\dot{x}=x^2$ 的解在有限时间趋于无穷）。向左延拓时，令 $x(t)=0$ 对 $t<0$，得到解 $\phi_2(t)$ 定义在 $(-\infty, T)$ 上，且是极大解（因为向右不能超过 $T$）。
  
这两个极大解的定义区间分别为 $\mathbb{R}$ 和 $(-\infty, T)$，满足 $I_1 \neq I_2$。

# 习题 6
设 $U \subset \mathbb{R}^d$ 是开集，设 $f \in C(U, \mathbb{R}^d)$，设 $\omega = (t_0, x_0) \in U$。本题的目的是证明 $I(\omega)$ 的极大解存在。


1. 称 $(\phi, I_\phi)$ 是 $I(\omega)$ 的一个局部解，若 $I_\phi$ 是包含 $t_0$ 的开区间，且 $\phi$ 是 $I(\omega)$ 的解。令
$$S := \{(\phi, I_\phi): (\phi, I_\phi) \text{ 是 } I(\omega) \text{ 的一个局部解}\}.$$
在 $S$ 上定义如下关系 $\leq$:
$$(\phi, I_\phi) \leq (\psi, I_\psi) \Leftrightarrow I_\phi \subset I_\psi; \quad \psi|_{I_\phi} = \phi.$$
证明 $\leq$ 是 $S$ 上的一个偏序。


2. 设 $\{(\phi_\alpha, I_\alpha): \alpha \in A\} \subset S$ 是一个链，即任给 $\alpha, \beta \in A$，
$$(\phi_\alpha, I_\alpha) \leq (\phi_\beta, I_\beta) \quad \text{或者} \quad (\phi_\beta, I_\beta) \leq (\phi_\alpha, I_\alpha).$$
证明 $\{(\phi_\alpha, I_\alpha): \alpha \in A\}$ 有上界，即存在 $(\phi, I_\phi) \in S$ 使得
$$(\phi_\alpha, I_\alpha) \leq (\phi, I_\phi), \quad \forall \alpha \in A.$$


3. 利用 Zorn 引理证明 $I(\omega)$ 存在一个极大解。


4. 设 $(\phi_\omega, I_\omega)$ 是 $I(\omega)$ 的一个极大解。证明对应的极大积分曲线会离开 $U$ 的每个紧子集。
设 $U \subset \mathbb{R}^d$ 是开集，设 $f \in C(U, \mathbb{R}^d)$，设 $\omega = (t_0, x_0) \in U$。本题的目的是证明 $I(\omega)$ 的极大解存在。


## 解答
### 1

需验证自反性、反对称性和传递性。  
- **自反性：** $(\phi, I_\phi) \leq (\phi, I_\phi)$ 显然。  
- **反对称性：** 若 $(\phi, I_\phi) \leq (\psi, I_\psi)$ 且 $(\psi, I_\psi) \leq (\phi, I_\phi)$，则 $I_\phi \subset I_\psi$ 且 $I_\psi \subset I_\phi$，故 $I_\phi=I_\psi$；同时 $\psi|_{I_\phi}=\phi$ 且 $\phi|_{I_\psi}=\psi$，得 $\phi=\psi$。  
- **传递性：** 若 $(\phi, I_\phi) \leq (\psi, I_\psi)$ 且 $(\psi, I_\psi) \leq (\eta, I_\eta)$，则 $I_\phi \subset I_\psi \subset I_\eta$，且 $\eta|_{I_\phi}=(\eta|_{I_\psi})|_{I_\phi}=\psi|_{I_\phi}=\phi$，故 $(\phi, I_\phi) \leq (\eta, I_\eta)$。  
因此 $\leq$ 是偏序。

### 2

设 $\{(\phi_\alpha, I_\alpha): \alpha \in A\}$ 是 $S$ 中的一个链。令 $I=\bigcup_{\alpha \in A} I_\alpha$，则 $I$ 是包含 $t_0$ 的开区间。定义 $\phi: I \to \mathbb{R}^d$ 为：对 $t \in I$，取 $\alpha$ 使 $t \in I_\alpha$，令 $\phi(t)=\phi_\alpha(t)$。由链的性质，该定义良好。易见 $\phi(t_0)=x_0$，且在每个 $I_\alpha$ 上 $\phi$ 与 $\phi_\alpha$ 一致，故 $\phi$ 在 $I$ 上连续、可微，并满足微分方程。因此 $(\phi, I) \in S$，且对每个 $\alpha$ 有 $(\phi_\alpha, I_\alpha) \leq (\phi, I)$，即 $(\phi, I)$ 是链的上界。

### 3

由 (1) 知 $(S, \leq)$ 是偏序集，(2) 知 $S$ 中每个链都有上界。根据 Zorn 引理，$S$ 存在极大元 $(\phi_\omega, I_\omega)$，此即为 $I(\omega)$ 的一个极大解（若可延拓则与极大性矛盾）。

### 4
记 $I_\omega=(a,b)$。假设存在紧集 $K \subset U$ 使得对任意 $\epsilon>0$，存在 $t \in (b-\epsilon, b)$ 满足 $(t, \phi_\omega(t)) \in K$（若 $b=\infty$ 则结论自动成立）。取序列 $t_n \to b^-$ 且 $(t_n, \phi_\omega(t_n)) \in K$。由 $K$ 紧，存在子列 $(t_{n_k}, \phi_\omega(t_{n_k})) \to (b, x_b) \in K \subset U$。由于 $f$ 在 $K$ 上有界，故 $|\dot{\phi}_\omega|$ 有界，从而 $\phi_\omega$ Lipschitz 连续，极限 $\lim_{t\to b^-} \phi_\omega(t)=x_b$ 存在。定义 $\tilde{\phi}(b)=x_b$，则 $\tilde{\phi}$ 在 $[t_0, b]$ 上连续。由局部存在定理，存在 $\delta>0$ 和解 $\psi$ 满足 $\psi(b)=x_b$ 定义在 $[b, b+\delta)$ 上。拼接 $\tilde{\phi}$ 和 $\psi$ 得到 $I_\omega$ 的延拓，与 $(\phi_\omega, I_\omega)$ 的极大性矛盾。因此，当 $b<\infty$ 时，对任意紧集 $K \subset U$，存在 $\epsilon>0$ 使对 $t \in (b-\epsilon, b)$ 有 $(t, \phi_\omega(t)) \notin K$。类似可证 $a>-\infty$ 的情形。