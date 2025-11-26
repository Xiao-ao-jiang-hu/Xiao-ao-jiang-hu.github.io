---
title: 一阶系统解的存在性与唯一性
tags:
  - math
  - ode
categories:
  - math
  - ode
excerpt: ODE第三部分
index_img: /img/ode.jpg
banner_img: /img/ode.jpg
abbrlink: f7fc2a7c
date: 2025-10-21 00:29:59
---
## 第一部分：一阶一维自治系统

### 1.1 分离变量系统

**定义 1.1.1（分离变量系统）**  
设 $f: \mathbb{R} \to \mathbb{R}$ 是一个连续函数，$I \subseteq \mathbb{R}$ 是一个开区间，$g: I \to \mathbb{R}$ 是一个连续函数。一个分离变量型常微分方程是形如  
$$
\dot{x} = f(t) g(x)
$$  
的方程，其中 $x = x(t)$ 是未知函数，$t$ 是自变量，$\dot{x} = \frac{dx}{dt}$ 是 $x$ 关于 $t$ 的导数。

**定义 1.1.2（初值问题）**  
考虑分离变量型方程 $\dot{x} = f(t) g(x)$，其中 $f: \mathbb{R} \to \mathbb{R}$ 连续，$I \subseteq \mathbb{R}$ 是开区间，$g: I \to \mathbb{R}$ 连续。初值问题是在给定初始条件 $x(t_0) = x_0$ 下求解函数 $x(t)$，其中 $x_0 \in I$。形式化地，初值问题表示为：  
$$
\begin{cases}
\dot{x} = f(t) g(x), \\
x(t_0) = x_0.
\end{cases}
$$  
解 $x(t)$ 需在包含 $t_0$ 的区间 $J \subseteq \mathbb{R}$ 上定义，满足 $\dot{x}(t) = f(t) g(x(t))$ 对于所有 $t \in J$，且 $x(t_0) = x_0$.

假设 $g(x_0) \neq 0$。定义以下对象：
- 设 $J \subseteq I$ 是包含 $x_0$ 且使得 $g$ 在其上非零的最大区间。
- 定义函数 $G: J \to \mathbb{R}$ 为  
  $$
  G(x) = \int_{x_0}^x \frac{dy}{g(y)}, \quad \text{对于 } x \in J.
  $$  
  则 $G(x_0) = 0$，且 $G$ 在 $J$ 上连续可微，满足 $G'(x) = \frac{1}{g(x)} \neq 0$。因此，$G$ 是严格单调的，其逆函数 $G^{-1}$ 存在且连续可微。
- 定义函数 $F: \mathbb{R} \to \mathbb{R}$ 为  
  $$
  F(t) = \int_{t_0}^t f(s) \, ds.
  $$  
  则 $F$ 在 $\mathbb{R}$ 上连续可微，且 $F(t_0) = 0$.
- 定义  
  $$
  \begin{cases}
    T^* = \sup \{ t > t_0 : F(\tau) \in G(J) \text{ 对于所有 } \tau \in [t_0, t) \}\\
    T_* = \inf \{ t < t_0 : F(\tau) \in G(J) \text{ 对于所有 } \tau \in (t, t_0] \}
  \end{cases}
  $$

**定理 1.1.1（分离变量系统解的存在唯一性）**  
设 $f: \mathbb{R} \to \mathbb{R}$ 连续，$I \subseteq \mathbb{R}$ 是开区间，$g: I \to \mathbb{R}$ 连续，$x_0 \in I$ 且 $g(x_0) \neq 0$。则初值问题  
$$
\begin{cases}
\dot{x} = f(t) g(x), \\
x(t_0) = x_0
\end{cases}
$$  
在区间 $(T_*, T^*)$ 上存在唯一解 $\varphi: (T_*, T^*) \to \mathbb{R}$，由  
$$
\varphi(t) = G^{-1}(F(t))
$$  
给出。

**证明：**  
首先验证初值条件：  
$$
\varphi(t_0) = G^{-1}(F(t_0)) = G^{-1}(0) = x_0.
$$  
其次，验证微分方程：  
由链式法则，  
$$
\varphi'(t) = (G^{-1})'(F(t)) F'(t).
$$  
由于 $G^{-1}$ 是 $G$ 的逆函数，有 $(G^{-1})'(y) = \frac{1}{G'(G^{-1}(y))}$。而 $G'(x) = \frac{1}{g(x)}$，所以  
$$
(G^{-1})'(y) = g(G^{-1}(y)).
$$  
同时，$F'(t) = f(t)$。因此，  
$$
\varphi'(t) = g(G^{-1}(F(t))) f(t) = g(\varphi(t)) f(t),
$$  
满足方程 $\dot{x} = f(t) g(x)$.

唯一性：定义函数 $\Phi: (T_*, T^*) \times J \to \mathbb{R}$ 为  
$$
\Phi(t, x) = F(t) - G(x).
$$  
则 $\Phi$ 是连续可微的，且  
$$
\frac{\partial \Phi}{\partial x}(t, x) = -G'(x) = -\frac{1}{g(x)} \neq 0 \quad \text{在 } J \text{ 上}.
$$  
设 $\psi: (T_*, T^*) \to \mathbb{R}$ 是初值问题的另一个解。则对于所有 $t \in (T_*, T^*)$，有  
$$
\frac{d}{dt} G(\psi(t)) = G'(\psi(t)) \psi'(t) = \frac{1}{g(\psi(t))} f(t) g(\psi(t)) = f(t),
$$  
所以 $G(\psi(t)) = F(t) + C$ 对于某个常数 $C$。由初始条件 $\psi(t_0) = x_0$，得 $G(x_0) = 0$ 和 $F(t_0) = 0$，所以 $C = 0$，即 $G(\psi(t)) = F(t)$。因此，$\Phi(t, \psi(t)) = 0$。类似地，对于 $\varphi$，也有 $\Phi(t, \varphi(t)) = 0$。  
现在，假设存在 $t_1 \in (T_*, T^*)$ 使得 $\psi(t_1) \neq \varphi(t_1)$。由连续性，存在 $t_* \in (T_*, T^*)$ 使得 $\psi(t_*) = \varphi(t_*) = x_* \in J$，但在 $t_*$ 的某个邻域内 $\psi \neq \varphi$。然而，由隐函数定理，方程 $\Phi(t, x) = 0$ 在 $(t_*, x_*)$ 附近有唯一解，这与 $\psi$ 和 $\varphi$ 在 $t_*$ 的邻域内不一致矛盾。因此，$\psi = \varphi$ 在 $(T_*, T^*)$ 上。  
证毕。

### 1.2 自治系统情形

**推论 1.2.1（自治系统解的存在唯一性）**  
设 $g: I \to \mathbb{R}$ 连续，其中 $I \subseteq \mathbb{R}$ 是开区间，$x_0 \in I$ 且 $g(x_0) \neq 0$。则初值问题  
$$
\begin{cases}
\dot{x} = g(x), \\
x(t_0) = x_0
\end{cases}
$$  
在区间 $(t_0 + \tau_*, t_0 + \tau^*)$ 上存在唯一解 $\varphi: (t_0 + \tau_*, t_0 + \tau^*) \to \mathbb{R}$，由  
$$
\varphi(t) = G^{-1}(t - t_0)
$$  
给出，其中  
- $J \subseteq I$ 是包含 $x_0$ 且使得 $g$ 在其上非零的最大区间，  
- $G: J \to \mathbb{R}$ 定义为 $G(x) = \int_{x_0}^x \frac{dy}{g(y)}$，  
- $G(J) = (\tau_*, \tau^*)$ 是一个开区间。

**证明：**  
首先验证初值条件：  
$$
\varphi(t_0) = G^{-1}(t_0 - t_0) = G^{-1}(0) = x_0.
$$  
其次，验证微分方程：  
由链式法则，  
$$
\varphi'(t) = (G^{-1})'(t - t_0).
$$  
由于 $G^{-1}$ 是 $G$ 的逆函数，有 $(G^{-1})'(y) = \frac{1}{G'(G^{-1}(y))}$。而 $G'(x) = \frac{1}{g(x)}$，所以  
$$
(G^{-1})'(y) = g(G^{-1}(y)).
$$  
因此，  
$$
\varphi'(t) = g(G^{-1}(t - t_0)) = g(\varphi(t)),
$$  
满足方程 $\dot{x} = g(x)$.

唯一性：设 $\psi: (t_0 + \tau_*, t_0 + \tau^*) \to \mathbb{R}$ 是初值问题的另一个解。则对于所有 $t \in (t_0 + \tau_*, t_0 + \tau^*)$，有  
$$
\frac{d}{dt} G(\psi(t)) = G'(\psi(t)) \psi'(t) = \frac{1}{g(\psi(t))} g(\psi(t)) = 1,
$$  
所以 $G(\psi(t)) = t - t_0 + C$ 对于某个常数 $C$。由初始条件 $\psi(t_0) = x_0$，得 $G(x_0) = 0$，所以 $C = 0$，即 $G(\psi(t)) = t - t_0$。因此，$\psi(t) = G^{-1}(t - t_0) = \varphi(t)$。  
证毕。

**推论 1.2.2（解的极大区间和取值范围）**  
设 $g: I \to \mathbb{R}$ 连续，其中 $I = (a, b)$ 是开区间，$x_0 \in I$ 且 $g(x_0) \neq 0$。设 $J = (\hat{a}, \hat{b}) \subseteq I$ 是包含 $x_0$ 且 $g$ 非零的最大区间。考虑初值问题 $\dot{x} = g(x), x(t_0) = x_0$.

1. 如果 $g(x_0) > 0$ 且 $\hat{b} < b$，则 $\tau^* = \infty$ 当且仅当对于初值问题的任何解 $\psi: I_\psi \to \mathbb{R}$（其中 $I_\psi$ 是解的极大定义区间），有 $\psi(t) < \hat{b}$ 对于所有 $t \in I_\psi$.
2. 如果 $g(x_0) > 0$ 且 $\hat{a} > a$，则 $\tau_* = -\infty$ 当且仅当对于任何解 $\psi: I_\psi \to \mathbb{R}$，有 $\psi(t) > \hat{a}$ 对于所有 $t \in I_\psi$.
3. 如果 $g(x_0) < 0$ 且 $\hat{b} < b$，则 $\tau_* = -\infty$ 当且仅当对于任何解 $\psi: I_\psi \to \mathbb{R}$，有 $\psi(t) < \hat{b}$ 对于所有 $t \in I_\psi$.
4. 如果 $g(x_0) < 0$ 且 $\hat{a} > a$，则 $\tau^* = \infty$ 当且仅当对于任何解 $\psi: I_\psi \to \mathbb{R}$，有 $\psi(t) > \hat{a}$ 对于所有 $t \in I_\psi$.

**证明：**  
我们证明第一部分，其余部分类似。  
由推论 1.2.1，解 $\varphi(t) = G^{-1}(t - t_0)$ 定义在 $(t_0 + \tau_*, t_0 + \tau^*)$ 上，且满足 $\varphi(t) \to \hat{b}$ 当 $t \to t_0 + \tau^*$，$\varphi(t) \to \hat{a}$ 当 $t \to t_0 + \tau_*$.

首先，假设 $\tau^* = \infty$。则解 $\varphi$ 定义在 $(t_0 + \tau_*, \infty)$ 上，且 $\varphi(t) < \hat{b}$ 对于所有 $t$。设 $\psi: I_\psi \to \mathbb{R}$ 是初值问题的任何解。假设存在 $t_1 \in I_\psi$ 使得 $\psi(t_1) \geq \hat{b}$。由于 $\psi(t_0) = x_0 < \hat{b}$（因为 $g(x_0) > 0$ 且 $\hat{b}$ 是 $g$ 的零点），由连续性，存在 $\hat{t}_0 \in I_\psi$ 使得 $\psi(\hat{t}_0) = x_0$。但 $\psi$ 也是初值问题 $\dot{x} = g(x), x(\hat{t}_0) = x_0$ 的解。由唯一性，在 $\hat{t}_0$ 的邻域内，$\psi(t) = G^{-1}(t - \hat{t}_0)$，但 $G^{-1}$ 取值在 $(\hat{a}, \hat{b})$，所以 $\psi(t) < \hat{b}$，与 $\psi(t_1) \geq \hat{b}$ 矛盾。因此，$\psi(t) < \hat{b}$ 对于所有 $t \in I_\psi$.

反之，假设 $\tau^* < \infty$。定义函数  
$$
\psi(t) = 
\begin{cases}
\varphi(t), & \text{如果 } t \in (t_0 + \tau_*, t_0 + \tau^*), \\
\hat{b}, & \text{如果 } t \geq t_0 + \tau^*.
\end{cases}
$$  
则 $\psi$ 连续，且对于 $t > t_0 + \tau^*$，有 $\dot{\psi}(t) = 0 = g(\hat{b}) = g(\psi(t))$。在 $t = t_0 + \tau^*$，由左导数，$\dot{\psi}(t_0 + \tau^*) = \lim_{t \to (t_0 + \tau^*)^-} \varphi'(t) = \lim_{t \to (t_0 + \tau^*)^-} g(\varphi(t)) = g(\hat{b}) = 0$，所以 $\psi$ 在 $t_0 + \tau^*$ 处可导且满足方程。因此，$\psi$ 是初值问题的一个解，且 $\psi(t) = \hat{b}$ 对于 $t \geq t_0 + \tau^*$，故存在解使得 $\psi(t) \geq \hat{b}$.  
证毕。



**推论 1.2.3（解的极大定义区间）**  
设 $g: I \to \mathbb{R}$ 连续，其中 $I = (a, b)$ 是开区间，$x_0 \in I$ 且 $g(x_0) > 0$。设 $\varphi: (t_{\min}, t_{\max}) \to \mathbb{R}$ 是初值问题
$$
\begin{cases}
\dot{x} = g(x), \\
x(0) = x_0
\end{cases}
$$
的解，且其极大定义区间为 $(t_{\min}, t_{\max})$。则

1. $t_{\min} \leq \tau_*, \quad t_{\max} \geq \tau^*$，且限制在区间 $(\tau_*, \tau^*)$ 上，$\varphi$ 是唯一的解。
2. 若 $\hat{b} = b$，则 $t_{\max} = \tau^*$。若 $\hat{a} = a$，则 $t_{\min} = \tau_*$。
3. 若 $\hat{b} < b$ 且 $\tau^* = \infty$，则 $t_{\max} = \infty$，且解在 $(\tau_*, \infty)$ 上唯一。
4. 若 $\hat{a} > a$ 且 $\tau_* = -\infty$，则 $t_{\min} = -\infty$，且解在 $(-\infty, \tau^*)$ 上唯一。
5. 若 $\hat{b} < b$ 且 $\tau^* < \infty$，则 $t_{\max} = \infty$，但解在 $(\tau_*, \infty)$ 上不一定唯一。
6. 若 $\hat{a} > a$ 且 $\tau_* > -\infty$，则 $t_{\min} = -\infty$，但解在 $(-\infty, \tau^*)$ 上不一定唯一。

**证明：**
1. 由推论1.2.1，解在 $(\tau_*, \tau^*)$ 上存在唯一，且 $\varphi(t) = G^{-1}(t)$（这里取 $t_0 = 0$）。由于 $(t_{\min}, t_{\max})$ 是极大定义区间，必有 $t_{\min} \leq \tau_*$ 和 $t_{\max} \geq \tau^*$。

2. 若 $\hat{b} = b$，则 $\tau^* = \infty$ 或 $\tau^* < \infty$。如果 $\tau^* = \infty$，则 $t_{\max} = \infty$。如果 $\tau^* < \infty$，则 $\varphi(t) \uparrow b$ 当 $t \uparrow \tau^*$。若 $t_{\max} > \tau^*$，则由于 $\varphi$ 连续，有 $\varphi(\tau^*) = b \notin (a,b) = I$，矛盾。故 $t_{\max} = \tau^*$。同理可证另一部分。

3. 由1知 $t_{\max} \geq \tau^* = \infty$，所以 $t_{\max} = \infty$。由推论1.2.2第一部分，因为 $\tau^* = \infty$，所以任何解都满足 $\psi(t) < \hat{b}$ 对于所有 $t$，从而解在 $(\tau_*, \infty)$ 上唯一（因为若存在两个解，则它们都小于 $\hat{b}$，从而在 $(\tau_*, \infty)$ 上由分离变量法得到的表达式相同）。

4. 同理可证。

5. 由1知 $t_{\max} \geq \tau^*$，但 $\tau^* < \infty$，我们断言 $t_{\max} = \infty$。否则，若 $t_{\max} < \infty$，则由于 $\varphi(t) < \hat{b}$ 对于 $t \in (t_{\min}, t_{\max})$，且 $\varphi(t)$ 在 $t_{\max}$ 处有极限（因为 $\varphi$ 单调递增且有上界 $\hat{b}$），记 $\lim_{t \to t_{\max}} \varphi(t) = x_1 \leq \hat{b}$。如果 $x_1 < \hat{b}$，则我们可以将解延拓到 $t_{\max}$ 之后，与极大性矛盾。如果 $x_1 = \hat{b}$，则 $\hat{b} < b$，且 $g(\hat{b}) = 0$。但此时我们可以定义解在 $t_{\max}$ 之后为常数 $\hat{b}$，从而延拓了解，矛盾。因此 $t_{\max} = \infty$。但解在 $(\tau_*, \infty)$ 上不一定唯一，因为我们可以构造一个解，它在某个时刻跳到常数解 $\hat{b}$，如推论1.2.2的证明中所示。

6. 同理可证。

证毕。

**性质 1.2.1（平衡点处解的唯一性条件）**  
设 $x_0 \in I$ 是 $g$ 的孤立零点，即 $g(x_0) = 0$ 且存在 $\delta > 0$ 使得对任意的 $x \in [x_0 - \delta, x_0) \cup (x_0, x_0 + \delta]$ 均有 $g(x) \neq 0$。则初值问题
$$
\begin{cases}
\dot{x} = g(x), \\
x(0) = x_0
\end{cases}
$$
有唯一解（即常值解 $x(t) \equiv x_0$）当且仅当
$$
\left| \int_{x_0-\delta}^{x_0} \frac{dx}{g(x)} \right| = \left| \int_{x_0}^{x_0+\delta} \frac{dx}{g(x)} \right| = \infty.
$$

**证明：**
充分性：假设两个积分都发散。我们证明只有常值解。假设存在另一个解 $\psi: J \to \mathbb{R}$ 且存在 $t_* \in J$ 使得 $\psi(t_*) \neq x_0$。不妨设 $\psi(t_*) > x_0$。由连续性，存在 $t_0 \in J$ 使得 $\psi(t_0) = y_0 \in (x_0, x_0+\delta]$。则 $\psi$ 也是初值问题 $\dot{x} = g(x), x(t_0) = y_0$ 的解。由于 $g(y_0) \neq 0$，我们可以用分离变量法。如果 $g(y_0) > 0$，则 $\hat{a} = x_0$，且
$$
\tau_* = \int_{y_0}^{x_0} \frac{dx}{g(x)} = -\infty,
$$
由推论1.2.2，对于任何解 $\psi$，有 $\psi(t) > x_0$ 对于所有 $t \in J$，但这与 $\psi(0) = x_0$ 矛盾。如果 $g(y_0) < 0$，则类似推理得到矛盾。同理，如果 $\psi(t_*) < x_0$，利用左边积分的发散性也会导致矛盾。因此，只有常值解。

必要性：假设其中一个积分收敛，不妨设
$$
\left| \int_{x_0}^{x_0+\delta} \frac{dx}{g(x)} \right| < \infty.
$$
则我们可以构造一个非平凡解。定义
$$
G(x) = \int_{x_0}^x \frac{dy}{g(y)}, \quad x \in [x_0, x_0+\delta).
$$
则 $G$ 是严格单调的（因为 $g$ 在 $(x_0, x_0+\delta]$ 上不变号），设其值域为 $[0, M)$ 或 $(M, 0]$（取决于 $g$ 的符号），其中 $M = \int_{x_0}^{x_0+\delta} \frac{dy}{g(y)}$ 是有限的。则 $G^{-1}$ 存在。定义函数
$$
\varphi(t) = 
\begin{cases}
x_0, & t \leq 0, \\
G^{-1}(t), & t \in [0, M) \text{ 或 } (M, 0] \text{（取决于符号）}.
\end{cases}
$$
则 $\varphi$ 是初值问题的一个解，且不是常值解。因此解不唯一。

证毕。

**性质 1.2.2（Lipschitz条件保证唯一性）**  
设 $g: I \to \mathbb{R}$ 在 $I$ 的每个紧子区间上Lipschitz连续，即对任意的紧区间 $J = [\alpha, \beta] \subset I$，存在常数 $C_J > 0$ 使得
$$
|g(x) - g(y)| \leq C_J |x - y|, \quad \forall x, y \in J.
$$
设 $g(x_0) = 0$，则初值问题
$$
\begin{cases}
\dot{x} = g(x), \\
x(0) = x_0
\end{cases}
$$
的解存在且唯一（即只有常值解）。

**证明：**
已知常值解是一个解。假设存在另一个解 $\psi: I_\psi \to \mathbb{R}$ 且 $\psi \not\equiv x_0$。则存在 $t_* \in I_\psi$ 使得 $\psi(t_*) \neq x_0$。由连续性，存在 $t_0 \in I_\psi$ 使得 $\psi(t_0) = x_0$ 且在 $t_0$ 的邻域内 $\psi$ 不恒等于 $x_0$。不妨设存在 $t_1 > t_0$ 使得 $\psi(t_1) = y_0 > x_0$。设 $\hat{a}$ 是 $g$ 的小于 $y_0$ 的最大零点。则 $\hat{a} \geq x_0$。由于 $g$ 是局部Lipschitz的，存在常数 $C > 0$ 使得在 $[\hat{a}, y_0]$ 上，有
$$
|g(x)| = |g(x) - g(\hat{a})| \leq C |x - \hat{a}|.
$$
因此，对于 $x \in (\hat{a}, y_0]$，有
$$
\frac{1}{|g(x)|} \geq \frac{1}{C |x - \hat{a}|}.
$$
从而
$$
\left| \int_{\hat{a}}^{y_0} \frac{dx}{g(x)} \right| \geq \frac{1}{C} \int_{\hat{a}}^{y_0} \frac{dx}{x - \hat{a}} = \infty.
$$
由性质1.2.1，初值问题 $\dot{x} = g(x), x(t_0) = y_0$ 有唯一解，且该解满足 $\psi(t) > \hat{a}$ 对于所有 $t \in I_\psi$。但这与 $\psi(t_0) = x_0 \leq \hat{a}$ 矛盾。因此，不存在这样的非平凡解。

证毕。

**推论 1.2.4（光滑性保证唯一性）**  
设 $g: I \to \mathbb{R}$ 为 $C^1$ 光滑，设 $g(x_0) = 0$，则初值问题
$$
\begin{cases}
\dot{x} = g(x), \\
x(0) = x_0
\end{cases}
$$
的解存在且唯一（即只有常值解）。

**证明：**
由于 $g$ 是 $C^1$ 的，则 $g$ 在 $I$ 的每个紧子区间上Lipschitz连续。由性质1.2.2即得。

证毕。

### 1.3 二维自治系统与一维非自治系统的关系

**性质 1.3.1（二维自治系统与一维非自治系统的积分曲线关系）**  
设 $I, J \subseteq \mathbb{R}$ 为开区间，$F: I \times J \to \mathbb{R}^2$ 连续，记 $F = (f, g)$，其中 $f: I \times J \to \mathbb{R}$，$g: I \times J \to \mathbb{R}$ 连续。考虑二维自治系统 (1.3.1)
$$
\dot{X} = F(X), \quad \text{其中 } X = (x, y) \in I \times J,
$$
即
$$
\begin{cases}
\dot{x} = f(x, y), \\
\dot{y} = g(x, y).
\end{cases}
$$
假设对任意的 $X \in I \times J$，有 $f(X) \neq 0$。考虑一维非自治系统 (1.3.2)
$$
\frac{dy}{dx} = \frac{g(x, y)}{f(x, y)}.
$$
设 $Z_0 = (x_0, y_0) \in I \times J$。则曲线 $\Gamma \subseteq I \times J$ 是系统 (1.3.1) 的一条通过 $Z_0$ 的相曲线（即存在系统 (1.3.1) 的解 $\varphi: I_\varphi \to \mathbb{R}^2$ 使得 $\varphi(0) = Z_0$ 且 $\varphi(I_\varphi) = \Gamma$）当且仅当 $\Gamma$ 是系统 (1.3.2) 的一条通过 $Z_0$ 的积分曲线（即存在系统 (1.3.2) 的解 $h: I_h \to \mathbb{R}$ 使得 $h(x_0) = y_0$ 且 $\Gamma = \{ (x, h(x)) : x \in I_h \}$）。

**证明：**  
首先，设 $\Gamma$ 是系统 (1.3.1) 通过 $Z_0$ 的一条相曲线。则存在解 $\varphi: I_\varphi \to \mathbb{R}^2$ 使得 $\varphi(0) = Z_0$ 且 $\varphi(I_\varphi) = \Gamma$。记 $\varphi(t) = (\varphi_1(t), \varphi_2(t))$。由
$$
\varphi_1'(t) = f(\varphi(t)) \neq 0
$$
知 $\varphi_1$ 是严格单调的 $C^1$ 函数，故存在反函数 $\psi := \varphi_1^{-1}$，其定义域为 $I_\psi = \varphi_1(I_\varphi)$，且 $\psi$ 也是 $C^1$ 的。定义函数 $h: I_\psi \to \mathbb{R}$ 为
$$
h(x) = \varphi_2(\psi(x)).
$$
则 $h$ 是 $C^1$ 的，且 $h(x_0) = \varphi_2(\psi(x_0)) = \varphi_2(0) = y_0$。此外，
$$
h'(x) = \varphi_2'(\psi(x)) \psi'(x) = \frac{\varphi_2'(\psi(x))}{\varphi_1'(\psi(x))} = \frac{g(\varphi(\psi(x)))}{f(\varphi(\psi(x)))} = \frac{g(x, h(x))}{f(x, h(x))}.
$$
因此，$h$ 是系统 (1.3.2) 的一个解，且其图像为 $\Gamma$。故 $\Gamma$ 是系统 (1.3.2) 通过 $Z_0$ 的积分曲线。

反之，设 $\Gamma$ 是系统 (1.3.2) 通过 $Z_0$ 的一条积分曲线。则存在解 $h: I_h \to \mathbb{R}$ 使得 $h(x_0) = y_0$ 且 $\Gamma = \{ (x, h(x)) : x \in I_h \}$。定义函数 $\tilde{f}: I_h \to \mathbb{R}$ 为
$$
\tilde{f}(x) = f(x, h(x)).
$$
由假设，$\tilde{f}(x) \neq 0$ 且连续。考虑初值问题
$$
\dot{x} = \tilde{f}(x), \quad x(0) = x_0.
$$
由分离变量法，该方程在区间 $\tilde{J} = G(I_h)$ 上存在唯一解 $\eta: \tilde{J} \to \mathbb{R}$，其中
$$
G(x) = \int_{x_0}^x \frac{dy}{\tilde{f}(y)},
$$
且 $\eta(t) = G^{-1}(t)$。现在定义
$$
\varphi(t) = (\eta(t), h(\eta(t))), \quad t \in \tilde{J}.
$$
则 $\varphi(0) = (x_0, h(x_0)) = (x_0, y_0) = Z_0$，且 $\varphi(\tilde{J}) = \Gamma$。我们验证 $\varphi$ 是系统 (1.3.1) 的解：
$$
\varphi_1'(t) = \eta'(t) = \tilde{f}(\eta(t)) = f(\eta(t), h(\eta(t))) = f(\varphi(t)),
$$
$$
\varphi_2'(t) = h'(\eta(t)) \eta'(t) = \frac{g(\eta(t), h(\eta(t)))}{f(\eta(t), h(\eta(t)))} \cdot f(\eta(t), h(\eta(t))) = g(\varphi(t)).
$$
因此，$\varphi'(t) = F(\varphi(t))$，即 $\varphi$ 是系统 (1.3.1) 的解。故 $\Gamma$ 是系统 (1.3.1) 通过 $Z_0$ 的相曲线。

证毕。

## 第二部分：解的存在性——Peano定理
## 第二部分：解的存在性—Peano定理

### 2.1 Euler折线法

**定义 2.1（Euler折线法）**  
设初值问题为：
$$
\begin{cases}
\dot{x} = f(t, x), \\
x(t_0) = x_0,
\end{cases}
$$
其中 $f: U \to \mathbb{R}^d$ 连续，$U \subset \mathbb{R}^{d+1}$ 是开集，$(t_0, x_0) \in U$。对任意正整数 $n$，取 $\epsilon > 0$，令 $\delta = \epsilon/n$，定义节点 $s_j = t_0 + j\delta$，$j = 0,1,\dots,n$。Euler折线 $\phi_n: [t_0, t_0+\epsilon] \to \mathbb{R}^d$ 按以下方式递归构造：
- 在 $[s_0, s_1]$ 上：$\phi_n(t) = x_0 + (t-s_0)f(s_0, x_0)$
- 在 $[s_j, s_{j+1}]$ 上：$\phi_n(t) = \phi_n(s_j) + (t-s_j)f(s_j, \phi_n(s_j))$，$j=1,\dots,n-1$

**定义 2.2（阶梯函数）**  
定义阶梯函数 $\rho_n: [t_0, t_0+\epsilon] \to \mathbb{R}^d$ 为：
$$
\rho_n(t) = f(s_j, \phi_n(s_j)), \quad t \in [s_j, s_{j+1}), \quad j=0,1,\dots,n-1
$$
则 Euler 折线可表示为积分形式：
$$
\phi_n(t) = x_0 + \int_{t_0}^t \rho_n(s)ds
$$

### 2.2 Peano定理

**定理 2.3（Arzela-Ascoli）**  
设 $\{f_n: n \geq 1\}$ 是紧区间 $I$ 上的一列 $\mathbb{R}^d$ 值连续函数，满足：
1. 一致有界：存在 $M > 0$ 使得 $|f_n(t)| \leq M$ 对所有 $n$ 和 $t \in I$ 成立
2. 等度连续：对任意 $\varepsilon > 0$，存在 $\delta > 0$，当 $|t-s| < \delta$ 时，$|f_n(t)-f_n(s)| < \varepsilon$ 对所有 $n$ 成立

则存在子列 $\{f_{n_k}\}$ 和连续函数 $f: I \to \mathbb{R}^d$，使得 $f_{n_k} \rightrightarrows f$。

**定理 2.4（Peano）**  
设 $f: U \to \mathbb{R}^d$ 连续，$(t_0, x_0) \in U$。取 $\rho, \eta > 0$ 使得柱体
$$
C_{\rho,\eta} = [t_0-\rho, t_0+\rho] \times \overline{B(x_0, \eta)} \subset U
$$
令 $M = \max\{|f(t,x)| : (t,x) \in C_{\rho,\eta}\}$，$\epsilon = \min\{\rho, \eta/M\}$。则初值问题
$$
\begin{cases}
\dot{x} = f(t, x), \\
x(t_0) = x_0
\end{cases}
$$
在区间 $[t_0-\epsilon, t_0+\epsilon]$ 上至少存在一个解。

**证明**  
仅证 $[t_0, t_0+\epsilon]$ 部分，另一侧对称。令 $t_1 = t_0 + \epsilon$。

**第一步：构造Euler折线序列**  
对每个 $n \in \mathbb{N}$，令 $s_j = t_0 + j\epsilon/n$，按定义2.1构造 $\phi_n$，按定义2.2构造 $\rho_n$，使得：
$$
\phi_n(t) = x_0 + \int_{t_0}^t \rho_n(s)ds
$$

**第二步：验证一致有界性和等度连续性**  
由构造可得：
- $|\phi_n(t)| \leq |x_0| + \int_{t_0}^{t_1}|\rho_n(s)|ds \leq |x_0| + M\epsilon \leq |x_0| + \eta$
- $|\phi_n(t) - \phi_n(s)| \leq M|t-s|$

故 $\{\phi_n\}$ 一致有界且等度连续。

**第三步：应用Arzela-Ascoli定理**  
由定理2.3，存在子列 $\{\phi_{n_k}\}$ 和连续函数 $\phi: [t_0, t_1] \to \mathbb{R}^d$，使得 $\phi_{n_k} \rightrightarrows \phi$。

**第四步：证明极限函数是解**  
记 $\delta_k = \max_{t \in [t_0,t_1]} |\phi_{n_k}(t) - \phi(t)|$，定义连续模：
$$
\omega_f(\delta) = \max\{|f(t,x) - f(t',x')| : |t-t'| \leq \delta, |x-x'| \leq \delta, (t,x),(t',x') \in C_{\rho,\eta}\}
$$
固定 $t_* \in [t_0, t_1]$，对 $t \neq t_*$，估计：
$$
\Delta(t,t_*) = \left|\frac{\phi(t)-\phi(t_*)}{t-t_*} - f(t_*,\phi(t_*))\right|
$$
对 $t > t_*$，有：
$$
\begin{aligned}
\Delta(t,t_*) &\leq \left|\frac{\phi_{n_k}(t)-\phi_{n_k}(t_*)}{t-t_*} - f(t_*,\phi_{n_k}(t_*))\right| + \frac{2\delta_k}{|t-t_*|} + \omega_f(\delta_k) \\
&\leq \frac{1}{t-t_*}\int_{t_*}^t |\rho_{n_k}(\tau) - f(t_*,\phi_{n_k}(t_*))|d\tau + \frac{2\delta_k}{|t-t_*|} + \omega_f(\delta_k)
\end{aligned}
$$
对 $\tau \in [t_*, t]$，存在 $j_\tau$ 使得 $\rho_{n_k}(\tau) = f(s_{j_\tau}, \phi_{n_k}(s_{j_\tau}))$，且：
$$
|s_{j_\tau} - t_*| \leq |t-t_*| + 1/n_k, \quad |\phi_{n_k}(s_{j_\tau}) - \phi_{n_k}(t_*)| \leq M(|t-t_*| + 1/n_k)
$$
故：
$$
\Delta(t,t_*) \leq \omega_f((M+1)(|t-t_*| + 1/n_k)) + \frac{2\delta_k}{|t-t_*|} + \omega_f(\delta_k)
$$
令 $k \to \infty$ 得：
$$
\Delta(t,t_*) \leq \omega_f((M+1)|t-t_*|)
$$
再令 $t \to t_*$ 得 $\lim_{t\to t_*}\Delta(t,t_*) = 0$。同理处理 $t < t_*$ 情形。因此 $\phi$ 在 $t_*$ 处可导且 $\phi'(t_*) = f(t_*,\phi(t_*))$。由构造知 $\phi(t_0) = x_0$，故 $\phi$ 是解。

**推论 2.5**  
存在初值问题的解 $\phi: I \to \mathbb{R}^d$，使得对任意紧子集 $K \subset U$，存在 $t_* \in I$ 满足 $(t_*, \phi(t_*)) \notin K$。


## 第三部分：解的唯一性—Picard迭代

### 3.1 解的积分形式

**引理 3.1（解的积分形式）**  
设 $I \subset \mathbb{R}$ 是一个区间，$t_0 \in I$，$U \subset \mathbb{R} \times \mathbb{R}^d$ 是一个开集，$f: U \to \mathbb{R}^d$ 是一个连续函数，且 $(t_0, x_0) \in U$。设 $\phi: I \to \mathbb{R}^d$ 是一个连续函数，且其图像 $\Gamma_\phi = \{(t, \phi(t)) : t \in I\} \subset U$。则 $\phi$ 是初值问题  
$$
\begin{cases}
\dot{x} = f(t, x), \\
x(t_0) = x_0
\end{cases}
$$  
的一个解当且仅当 $\phi$ 满足积分方程  
$$
\phi(t) = x_0 + \int_{t_0}^t f(\tau, \phi(\tau)) \, d\tau, \quad \forall t \in I.
$$

**证明**  
假设 $\phi$ 是初值问题的解，则 $\phi$ 是 $C^1$ 光滑的，且满足 $\phi'(t) = f(t, \phi(t))$ 对于所有 $t \in I$ 和 $\phi(t_0) = x_0$。对两边从 $t_0$ 到 $t$ 积分，得到  
$$
\phi(t) = x_0 + \int_{t_0}^t f(\tau, \phi(\tau)) \, d\tau.
$$  
反之，假设 $\phi$ 连续且满足积分方程。由于 $f$ 连续，右端的积分作为 $t$ 的函数是 $C^1$ 光滑的，故 $\phi$ 是 $C^1$ 光滑的。对积分方程两边关于 $t$ 求导，得 $\phi'(t) = f(t, \phi(t))$。又由积分方程知 $\phi(t_0) = x_0$，因此 $\phi$ 是初值问题的解。

**定义 3.2（等价算子）**  
设 $I \subset \mathbb{R}$ 是一个区间，$t_0 \in I$，$U \subset \mathbb{R} \times \mathbb{R}^d$ 是一个开集，$f: U \to \mathbb{R}^d$ 连续，且 $(t_0, x_0) \in U$。定义算子 $T$ 如下：对于任意连续函数 $\phi: I \to \mathbb{R}^d$ 满足图像 $\Gamma_\phi \subset U$，令  
$$
(T\phi)(t) = x_0 + \int_{t_0}^t f(\tau, \phi(\tau)) \, d\tau, \quad \forall t \in I.
$$  
则求解积分方程等价于求算子 $T$ 的不动点，即 $\phi = T\phi$。

### 3.2 压缩映射原理

**定义 3.3（压缩映射）**  
设 $(X, d)$ 是一个度量空间。映射 $T: X \to X$ 称为压缩映射，如果存在常数 $c \in (0, 1)$ 使得对于所有 $x, y \in X$，有  
$$
d(T(x), T(y)) \leq c \, d(x, y).
$$

**定理 3.4（压缩映射原理）**  
设 $(X, d)$ 是一个完备度量空间，且 $T: X \to X$ 是一个压缩映射。则 $T$ 有唯一的不动点 $x_* \in X$，即 $T(x_*) = x_*$。此外，对于任意初始点 $x_0 \in X$，迭代序列 $\{T^n(x_0)\}$ 收敛到 $x_*$，且有以下误差估计：  
$$
d(T^n(x_0), x_*) \leq \frac{c^n}{1 - c} \, d(x_0, T(x_0)).
$$

**证明**  
任取 $x_0 \in X$，定义序列 $\{x_n\}$ 为 $x_n = T^n(x_0)$。对于任意 $n, k \in \mathbb{N}$，有  
$$
\begin{aligned}
d(x_n, x_{n+k}) &\leq \sum_{j=1}^k d(x_{n+j-1}, x_{n+j}) \\
&\leq \sum_{j=1}^k c^{n+j-1} d(x_0, x_1) \\
&\leq \frac{c^n}{1 - c} d(x_0, x_1),
\end{aligned}
$$  
其中 $x_1 = T(x_0)$。由于 $c \in (0,1)$，当 $n \to \infty$ 时，$c^n \to 0$，故 $\{x_n\}$ 是 Cauchy 列。由 $X$ 的完备性，存在 $x_* \in X$ 使得 $x_n \to x_*$。由于 $T$ 是压缩映射，它是连续映射，因此  
$$
T(x_*) = T(\lim_{n \to \infty} x_n) = \lim_{n \to \infty} T(x_n) = \lim_{n \to \infty} x_{n+1} = x_*,
$$  
所以 $x_*$ 是 $T$ 的不动点。

为证唯一性，假设 $y_* \in X$ 是另一个不动点，即 $T(y_*) = y_*$。则  
$$
d(x_*, y_*) = d(T(x_*), T(y_*)) \leq c \, d(x_*, y_*).
$$  
由于 $c < 1$，必有 $d(x_*, y_*) = 0$，即 $x_* = y_*$。

误差估计由前述不等式取 $k \to \infty$ 得到，因为  
$$
d(x_n, x_*) = \lim_{k \to \infty} d(x_n, x_{n+k}) \leq \frac{c^n}{1 - c} d(x_0, x_1).
$$  
代入 $x_n = T^n(x_0)$ 和 $x_1 = T(x_0)$ 即得结论。

### 3.3 Lipschitz性质与解的唯一性

**定义 3.5（Lipschitz连续）**  
设 $U \subset \mathbb{R}^{d+1}$ 是开集，$f: U \to \mathbb{R}^d$ 是一个映射。设 $D \subset U$。称 $f$ 在 $D$ 上关于 $x$ 分量 Lipschitz 连续，记为 $f \in \mathrm{Lip}_x(D)$，若存在常数 $L = L(D) > 0$ 使得对任意的 $(t, x), (t, x') \in D$，有
$$
|f(t, x) - f(t, x')| \leq L |x - x'|.
$$
称 $f$ 在 $U$ 上关于 $x$ 局部 Lipschitz 连续，记为 $f \in \mathrm{Lip}_{x,loc}(U)$，若对任意的紧集 $K \subset U$，均有 $f \in \mathrm{Lip}_x(K)$。

**定理 3.6（Picard-Lindelöf）**  
设 $U \subset \mathbb{R}^{d+1}$ 是开集，$f: U \to \mathbb{R}^d$ 连续，且 $f \in \mathrm{Lip}_{x,loc}(U)$。设 $(t_0, x_0) \in U$，则存在 $\delta > 0$ 使得初值问题
$$
\begin{cases}
\dot{x} = f(t, x), \\
x(t_0) = x_0
\end{cases}
$$
的解在区间 $[t_0 - \delta, t_0 + \delta]$ 上存在且唯一。

**证明**  
使用压缩映射原理。

**第一步：构造度量空间**  
取 $\rho, \eta > 0$ 使得柱体
$$
C_{\rho,\eta} = [t_0 - \rho, t_0 + \rho] \times \overline{B(x_0, \eta)} \subset U.
$$
令 $M = \max\{ |f(t, x)| : (t, x) \in C_{\rho,\eta} \}$。由假设，$f \in \mathrm{Lip}_x(C_{\rho,\eta})$，记 $L$ 是相应的 Lipschitz 常数。取
$$
\delta = \min\left\{ \rho, \frac{\eta}{M}, \frac{1}{2L} \right\}.
$$
记 $I = [t_0 - \delta, t_0 + \delta]$。定义
$$
Y = C(I, \overline{B(x_0, \eta)}),
$$
即 $Y$ 是从 $I$ 到 $\overline{B(x_0, \eta)}$ 的连续函数空间。赋予 $Y$ 上确界范数 $\|\phi\|_\infty = \sup_{t \in I} |\phi(t)|$，则 $(Y, \|\cdot\|_\infty)$ 是一个完备度量空间。

**第二步：构造压缩映射**  
定义映射 $T: Y \to C(I, \mathbb{R}^d)$ 为
$$
(T\phi)(t) = x_0 + \int_{t_0}^t f(\tau, \phi(\tau)) \, d\tau.
$$
由 $M$ 的定义和 $\delta$ 的取法，对任意 $t \in I$，有
$$
|(T\phi)(t) - x_0| \leq M |t - t_0| \leq M \delta \leq \eta,
$$
所以 $T\phi \in Y$。因此 $T: Y \to Y$。

对任意 $\phi, \psi \in Y$ 和 $t \in I$，有
$$
\begin{aligned}
|(T\phi)(t) - (T\psi)(t)| &= \left| \int_{t_0}^t \left( f(\tau, \phi(\tau)) - f(\tau, \psi(\tau)) \right) d\tau \right| \\
&\leq \int_{t_0}^t |f(\tau, \phi(\tau)) - f(\tau, \psi(\tau))| \, d\tau \\
&\leq \int_{t_0}^t L |\phi(\tau) - \psi(\tau)| \, d\tau \\
&\leq L \|\phi - \psi\|_\infty |t - t_0| \\
&\leq L \delta \|\phi - \psi\|_\infty.
\end{aligned}
$$
由于 $L \delta \leq \frac{1}{2}$，所以
$$
\|T\phi - T\psi\|_\infty \leq \frac{1}{2} \|\phi - \psi\|_\infty.
$$
因此 $T$ 是压缩映射。

**第三步：应用压缩映射原理**  
由压缩映射原理（定理3.4），$T$ 在 $Y$ 中存在唯一的不动点 $\phi$，即 $\phi = T\phi$。由引理3.1，$\phi$ 是初值问题在 $I$ 上的唯一解。

**引理 3.7**  
设 $U \subset \mathbb{R}^{d+1}$ 是开集，且 $f \in C^1(U, \mathbb{R}^d)$，则 $f \in \mathrm{Lip}_{x,loc}(U)$。

**证明**  
设 $K \subset U$ 是紧集。由于 $f$ 是 $C^1$ 的，其偏导数在 $K$ 上有界。由中值定理，存在 $L > 0$ 使得对任意 $(t, x), (t, x') \in K$，有
$$
|f(t, x) - f(t, x')| \leq L |x - x'|,
$$
因此 $f \in \mathrm{Lip}_x(K)$。由 $K$ 的任意性，$f \in \mathrm{Lip}_{x,loc}(U)$。

**推论 3.8**  
设 $U \subset \mathbb{R}^{d+1}$ 是开集，$f \in C^1(U, \mathbb{R}^d)$，$(t_0, x_0) \in U$。则存在 $\delta > 0$ 使得初值问题
$$
\begin{cases}
\dot{x} = f(t, x), \\
x(t_0) = x_0
\end{cases}
$$
的解在区间 $[t_0 - \delta, t_0 + \delta]$ 上存在且唯一。

### 3.4 Picard迭代

**定义 3.9（Picard迭代）**  
在定理3.6的证明中，我们构造了完备度量空间 $Y = C(I, \overline{B(x_0,\eta)})$ 和压缩映射 $T: Y \to Y$。该映射的不动点即为IVP的解。压缩映射原理进一步指出，为了得到这个解，我们可以从任意函数 $\varphi \in Y$ 出发，构造序列 $\{T^n(\varphi): n \geq 1\}$，则该序列以指数速度收敛到要求的解：
$$
\|T^n(\varphi) - \phi\|_{\infty} \leq \frac{\|\varphi - T(\varphi)\|_{\infty}}{2^n}.
$$
我们称这个逼近解的过程为 Picard 迭代。在实际计算中，通常取初始函数 $\varphi \equiv x_0$。

#### 3.4.1 f关于x局部Lipschitz的Picard迭代

**定理 3.10（局部Lipschitz条件下的Picard迭代）**  
设 $(t_0,x_0) \in \mathbb{R}^{d+1}$，$\rho,\eta > 0$，$f: C_{\rho,\eta} \to \mathbb{R}^d$ 连续，且关于x分量Lipschitz连续：存在 $L > 0$ 使得
$$
|f(t,x) - f(t,x')| \leq L|x - x'|, \quad \forall (t,x),(t,x') \in C_{\rho,\eta}.
$$
定义 $M = \max\{|f(t,x)| : (t,x) \in C_{\rho,\eta}\}$，$\delta = \min\{\rho, \eta/M\}$。按定理3.6证明定义 $I, Y, T$，则对任意 $\phi,\psi \in Y$ 和 $n \in \mathbb{N}$，有
$$
\|T^n\phi - T^n\psi\|_{\infty} \leq \frac{(L\delta)^n}{n!} \|\phi - \psi\|_{\infty}.
$$
特别地，当 $n$ 足够大时，$T^n$ 是 $Y$ 上的压缩映射。

**证明**  
考虑 $t > t_0$ 的情形（$t < t_0$ 情形对称处理）。对任意 $\phi,\psi \in Y$，有：
$$
\begin{aligned}
|T^n\phi(t) - T^n\psi(t)| &= \left| \int_{t_0}^t [f(s,T^{n-1}\phi(s)) - f(s,T^{n-1}\psi(s))] ds \right| \\
&\leq \int_{t_0}^t |f(s,T^{n-1}\phi(s)) - f(s,T^{n-1}\psi(s))| ds \\
&\leq L \int_{t_0}^t |T^{n-1}\phi(s) - T^{n-1}\psi(s)| ds \\
&\leq L^n \int_{t_0}^t \int_{t_0}^{s_1} \cdots \int_{t_0}^{s_{n-1}} |\phi(s_n) - \psi(s_n)| ds_n \cdots ds_2 ds_1 \\
&\leq L^n \|\phi - \psi\|_{\infty} \int_{t_0}^t \int_{t_0}^{s_1} \cdots \int_{t_0}^{s_{n-1}} ds_n \cdots ds_2 ds_1 \\
&= L^n \|\phi - \psi\|_{\infty} \frac{(t - t_0)^n}{n!} \\
&\leq \frac{(L\delta)^n}{n!} \|\phi - \psi\|_{\infty}.
\end{aligned}
$$
因此 $\|T^n\phi - T^n\psi\|_{\infty} \leq \frac{(L\delta)^n}{n!} \|\phi - \psi\|_{\infty}$。

**定理 3.11（局部Lipschitz条件下解的存在唯一性）**  
在上述条件下，初值问题在区间 $I$ 上的解存在且唯一。

**证明**  
**存在性**：对任意 $\psi \in Y$，有 $\|\psi\|_{\infty} \leq |x_0| + \eta$。任取 $\varphi \in Y$，序列 $\{T^n\varphi: n \geq 1\}$ 是 $Y$ 中的Cauchy列，因为：
$$
\|T^{n+k}\varphi - T^n\varphi\|_{\infty} \leq \frac{(L\delta)^n}{n!} \|T^k\varphi - \varphi\|_{\infty} \leq \frac{(L\delta)^n}{n!} 2(|x_0| + \eta).
$$
设 $\phi = \lim_{n \to \infty} T^n\varphi$，由 $T$ 的连续性得：
$$
\phi = \lim_{n \to \infty} T^{n+1}\varphi = T(\lim_{n \to \infty} T^n\varphi) = T\phi.
$$
故 $\phi$ 是 $T$ 的不动点，从而是IVP在区间 $I$ 上的解。

**唯一性**：设 $\psi$ 也是IVP在区间 $I$ 上的解，则 $T\psi = \psi$。对任意 $n \in \mathbb{N}$：
$$
\|\psi - \phi\|_{\infty} = \|T^n\psi - T^n\phi\|_{\infty} \leq \frac{(L\delta)^n}{n!} \|\psi - \phi\|_{\infty}.
$$
令 $n \to \infty$ 得 $\|\psi - \phi\|_{\infty} = 0$，故 $\phi = \psi$。

#### 3.4.2 f关于x全局Lipschitz的Picard迭代

**性质 3.12（全局Lipschitz条件下的Picard迭代）**  
设 $I$ 为紧区间，$f: I \times \mathbb{R}^d \to \mathbb{R}^d$ 连续，且存在 $L > 0$ 使得
$$
|f(t,x) - f(t,x')| \leq L|x - x'|, \quad \forall t \in I, x,x' \in \mathbb{R}^d.
$$
则对任意 $(t_0,x_0) \in I \times \mathbb{R}^d$，初值问题的解在 $I$ 上存在且唯一。

**证明**  
在空间 $X = C(I, \mathbb{R}^d)$ 上定义算子 $T: X \to X$ 为：
$$
(T\phi)(t) = x_0 + \int_{t_0}^t f(\tau,\phi(\tau)) d\tau.
$$
由复合函数连续性及不定积分性质知，若 $\phi \in X$，则 $T\phi \in X$。

对任意 $\phi,\psi \in X$，重复局部情形的证明可得：
$$
\|T^n\phi - T^n\psi\|_{\infty} \leq \frac{(L|I|)^n}{n!} \|\phi - \psi\|_{\infty},
$$
其中 $|I|$ 表示区间 $I$ 的长度。

固定 $\phi \in X$，有：
$$
\|T^{n+1}\phi - T^n\phi\|_{\infty} \leq \frac{(L|I|)^n}{n!} \|T\phi - \phi\|_{\infty}.
$$
从而对任意 $n,k \in \mathbb{N}$：
$$
\|T^{n+k}\phi - T^n\phi\|_{\infty} \leq \left( \sum_{j=n}^{\infty} \frac{(L|I|)^j}{j!} \right) \|T\phi - \phi\|_{\infty}.
$$
故 $\{T^n\phi: n \geq 1\}$ 是Cauchy列。利用与定理3.11相同的证明，可得解的存在唯一性。

**推论 3.13（线性方程解的存在唯一性）**  
设 $I$ 是一个区间（不要求紧），$A: I \to M_d(\mathbb{R})$ 连续，$b: I \to \mathbb{R}^d$ 连续。则对任意 $(t_0,x_0) \in I \times \mathbb{R}^d$，初值问题
$$
\begin{cases}
\dot{x} = A(t)x + b(t), \\
x(t_0) = x_0
\end{cases}
$$
的解在 $I$ 上存在且唯一。

**证明**  
定义 $f(t,x) = A(t)x + b(t)$。任取 $I$ 的紧子区间 $J$，由 $J$ 紧、$A$ 连续及范数函数连续知：
$$
L := \sup\{\|A(t)\| : t \in J\} < \infty.
$$
从而对任意 $t \in J, x,x' \in \mathbb{R}^d$：
$$
|f(t,x) - f(t,x')| = |A(t)(x - x')| \leq \|A(t)\| |x - x'| \leq L|x - x'|.
$$
由性质3.12知，初值问题的解在 $J$ 上存在且唯一。由 $J \subset I$ 的任意性知，解在 $I$ 上存在且唯一。
