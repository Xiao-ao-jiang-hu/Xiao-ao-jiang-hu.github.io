---
title: Ch3.2 一阶系统解的性质
tags:
  - math
  - ode
categories:
  - math
  - ode
excerpt: ODE第三部分
index_img: /img/ode.jpg
banner_img: /img/ode.jpg
abbrlink: 8df66acc
date: 2025-11-03 05:51:27
---
## 极大解与极大积分曲线

### 1. 极大解的定义与存在性

**定义 3（极大解）**  
设 $U \subset \mathbb{R}^{d+1}$ 为开集，$f \in C(U, \mathbb{R}^{d})$，$\omega = (t_0, x_0) \in U$。初值问题 $\mathcal{I}(\omega)$ 定义为：  
$$
\dot{x} = f(t, x), \quad x(t_0) = x_0.
$$  
称 $(\phi_{\omega}, I_{\omega})$ 是 $\mathcal{I}(\omega)$ 的一个极大解，若满足：  
1. $I_{\omega}$ 是一个区间，$\phi_{\omega}: I_{\omega} \to \mathbb{R}^{d}$ 是 $\mathcal{I}(\omega)$ 的一个解；  
2. 若 $I_{\psi}$ 是区间，$\psi: I_{\psi} \to \mathbb{R}^{d}$ 是 $\phi_{\omega}$ 的延拓且是 $\mathcal{I}(\omega)$ 的解，则 $I_{\psi} = I_{\omega}$。  
极大解的定义区间 $I_{\omega}$ 必为开区间。

**定义 4（极大积分曲线）**  
设 $(\phi_{\omega}, I_{\omega})$ 是 $\mathcal{I}(\omega)$ 的一个极大解。称集合  
$$
\Gamma_{\omega} = \{(t, \phi_{\omega}(t)) : t \in I_{\omega}\}
$$  
为系统 $\dot{x} = f(t, x)$ 通过 $\omega$ 的一条极大积分曲线。称曲线 $\Gamma \subset U$ 是系统的一条极大积分曲线，若存在 $\omega \in U$ 使得 $\Gamma = \Gamma_{\omega}$。

**假设 ($*$)**  
$U \subset \mathbb{R}^{d+1}$ 为开集，$f \in C(U, \mathbb{R}^{d})$，且对任意 $\omega \in U$，初值问题 $\mathcal{I}(\omega)$ 的解局部存在且唯一。  
（注：若 $f \in C(U, \mathbb{R}^{d})$ 且 $f \in \mathrm{Lip}_{x,\mathrm{loc}}(U)$，则假设 ($*$) 成立。）

**定理 5（极大解的存在唯一性）**  
在假设 ($*$) 下，对任意 $\omega \in U$，$\mathcal{I}(\omega)$ 存在唯一的极大解 $(\phi_{\omega}, I_{\omega})$。

**证明**：  
存在性：令 $\mathcal{S} = \{(\phi, I_{\phi}) : \phi$ 是 $\mathcal{I}(\omega)$ 的局部解，$I_{\phi}$ 为开区间$\}$。定义 $I_{\omega} = \bigcup_{(\phi, I_{\phi}) \in \mathcal{S}} I_{\phi}$，则 $I_{\omega}$ 为开区间。定义 $\phi_{\omega}: I_{\omega} \to \mathbb{R}^{d}$ 为：对任意 $t \in I_{\omega}$，取 $(\phi, I_{\phi}) \in \mathcal{S}$ 使 $t \in I_{\phi}$，令 $\phi_{\omega}(t) = \phi(t)$。由引理 5（见下），该定义良定。易验证 $\phi_{\omega}$ 是 $\mathcal{I}(\omega)$ 的解。若 $\psi: I_{\psi} \to \mathbb{R}^{d}$ 是 $\phi_{\omega}$ 的延拓且为解，则 $I_{\psi}$ 为开区间（否则可延拓），故 $(\psi, I_{\psi}) \in \mathcal{S}$，从而 $I_{\psi} \subset I_{\omega}$，但由延拓性 $I_{\psi} \supset I_{\omega}$，故 $I_{\psi} = I_{\omega}$。因此 $(\phi_{\omega}, I_{\omega})$ 是极大解。  
唯一性：设 $(\hat{\phi}_{\omega}, \hat{I}_{\omega})$ 为另一极大解。定义 $\psi$ 在 $I_{\omega} \cup \hat{I}_{\omega}$ 上为 $\phi_{\omega}$ 和 $\hat{\phi}_{\omega}$ 的并，则 $\psi$ 是 $\mathcal{I}(\omega)$ 的解且为 $\phi_{\omega}$ 和 $\hat{\phi}_{\omega}$ 的延拓。由极大性，$\hat{I}_{\omega} = I_{\omega} \cup \hat{I}_{\omega} = I_{\omega}$，且由引理 5 得 $\phi_{\omega} = \hat{\phi}_{\omega}$。  


**引理 5（解的局部唯一性）**  
在假设 ($*$) 下，设 $\phi: I_{\phi} \to \mathbb{R}^{d}$ 和 $\psi: I_{\psi} \to \mathbb{R}^{d}$ 分别为 $\mathcal{I}(\omega)$ 在开区间 $I_{\phi}$ 和 $I_{\psi}$ 上的解，则  
$$
\phi|_{I_{\phi} \cap I_{\psi}} = \psi|_{I_{\phi} \cap I_{\psi}}.
$$

**证明**：  
反证法。假设存在 $t_1 \in I_{\phi} \cap I_{\psi}$ 使 $\phi(t_1) \neq \psi(t_1)$，不妨设 $t_1 > t_0$。令  
$$
t_* = \sup \{ s \in [t_0, t_1] : \phi|_{[t_0, s]} = \psi|_{[t_0, s]} \},
$$  
则 $t_0 \leq t_* < t_1$，且对任意 $\epsilon \in (0, t_1 - t_*)$，有 $\phi|_{[t_*, t_* + \epsilon]} \neq \psi|_{[t_*, t_* + \epsilon]}$。但 $x_* = \phi(t_*) = \psi(t_*)$，且 $\phi$ 和 $\psi$ 均为初值问题 $\dot{x} = f(t, x), x(t_*) = x_*$ 的解。由假设 ($*$)，存在 $\delta > 0$ 使 $\phi|_{(t_* - \delta, t_* + \delta)} = \psi|_{(t_* - \delta, t_* + \delta)}$，矛盾。  


**推论 8（极大积分曲线的存在唯一性）**  
在假设 ($*$) 下，对任意 $\omega \in U$，过 $\omega$ 的极大积分曲线存在且唯一。

**证明**：  
由定理 5，存在唯一极大解 $(\phi_{\omega}, I_{\omega})$，其图像 $\Gamma_{\omega}$ 即为唯一极大积分曲线。  


### 2. 极大解的几何性质

**引理 6（极大解的一致性）**  
设 $(\phi_{\omega}, I_{\omega})$ 是 $\mathcal{I}(\omega)$ 的极大解。若 $\hat{\omega} = (\hat{t}_0, \hat{x}_0) \in \Gamma_{\omega}$，则 $(\phi_{\omega}, I_{\omega})$ 也是 $\mathcal{I}(\hat{\omega})$ 的极大解。

**证明**：  
由 $\hat{\omega} \in \Gamma_{\omega}$，有 $\phi_{\omega}(\hat{t}_0) = \hat{x}_0$，故 $\phi_{\omega}$ 是 $\mathcal{I}(\hat{\omega})$ 的解。设 $\psi: I_{\psi} \to \mathbb{R}^{d}$ 是 $\phi_{\omega}$ 的延拓且为 $\mathcal{I}(\hat{\omega})$ 的解，则 $\psi$ 也是 $\mathcal{I}(\omega)$ 的解（因 $\omega \in \Gamma_{\omega} \subset \Gamma_{\psi}$）。由 $(\phi_{\omega}, I_{\omega})$ 的极大性，$I_{\psi} = I_{\omega}$，故 $(\phi_{\omega}, I_{\omega})$ 是 $\mathcal{I}(\hat{\omega})$ 的极大解。  


**推论 9**  
设 $\Gamma$ 是过 $\omega$ 的极大积分曲线，若 $\hat{\omega} \in \Gamma$，则 $\Gamma$ 也是过 $\hat{\omega}$ 的极大积分曲线。

**证明**：  
由引理 6 直接可得。  


**性质 6（极大积分曲线的相交性）**  
设 $\Gamma$ 和 $\hat{\Gamma}$ 是系统 $\dot{x} = f(t, x)$ 的两条极大积分曲线。则要么 $\Gamma \cap \hat{\Gamma} = \emptyset$，要么 $\Gamma = \hat{\Gamma}$。

**证明**：  
若 $\Gamma \cap \hat{\Gamma} \neq \emptyset$，取 $\tilde{\omega} \in \Gamma \cap \hat{\Gamma}$。由推论 9，$\Gamma$ 和 $\hat{\Gamma}$ 均为过 $\tilde{\omega}$ 的极大积分曲线。由推论 8，极大积分曲线唯一，故 $\Gamma = \hat{\Gamma}$。  


**性质 7（极大积分曲线趋于边界）**  
设 $\Gamma$ 是系统 $\dot{x} = f(t, x)$ 的一条极大积分曲线，对应极大解 $(\phi_{\omega}, I_{\omega})$，其中 $I_{\omega} = (t_{\mathrm{min}}, t_{\mathrm{max}})$。则对 $U$ 的任意紧子集 $K$，存在 $t_*, t^* \in I_{\omega}$ 使得  
$$
(t, \phi_{\omega}(t)) \notin K, \quad \forall t \in I_{\omega} \setminus [t_*, t^*].
$$

**证明**：  
仅证 $t^*$ 的存在性（$t_*$ 类似）。分两种情况：  
1. 若 $t_{\mathrm{max}} = \infty$，令 $t^* = \max \{ t : (t, x) \in K \}$（由 $K$ 紧，$t^*$ 存在）。则对 $t > t^*$，有 $(t, \phi_{\omega}(t)) \notin K$。  
2. 若 $t_{\mathrm{max}} < \infty$，反设不存在这样的 $t^*$，则存在序列 $\{t_n\} \subset I_{\omega}$ 使 $t_n \uparrow t_{\mathrm{max}}$ 且 $(t_n, \phi_{\omega}(t_n)) \in K$。由 $K$ 紧，存在子列使 $\phi_{\omega}(t_n) \to x_*$，故 $(t_{\mathrm{max}}, x_*) \in K$。取 $\rho > 0$ 使 $D = [t_{\mathrm{max}} - 2\rho, t_{\mathrm{max}} + 2\rho] \times \overline{B(x_*, 2\rho)} \subset U$，令 $M = 1 + \max \{ |f(t, x)| : (t, x) \in D \}$。存在 $N$ 使 $0 < t_{\mathrm{max}} - t_N \leq \rho/(2M)$ 且 $|\phi_{\omega}(t_N) - x_*| \leq \rho/(2M)$。由 Picard-Lindelöf 定理，初值问题 $\mathcal{I}((t_N, \phi_{\omega}(t_N)))$ 的解 $\phi_N$ 在 $I_N = [t_N - \rho/M, t_N + \rho/M]$ 上存在唯一。注意到 $t_N + \rho/M \geq t_{\mathrm{max}} + \rho/(2M) > t_{\mathrm{max}}$，故 $J = I_{\omega} \cup I_N$ 是严格包含 $I_{\omega}$ 的区间。定义 $\psi$ 在 $J$ 上为 $\phi_{\omega}$ 和 $\phi_N$ 的并，则 $\psi$ 是 $\mathcal{I}(\omega)$ 的解，与 $(\phi_{\omega}, I_{\omega})$ 的极大性矛盾。故 $t^*$ 存在。  


### 3. 自治系统情形

设 $V \subset \mathbb{R}^{d}$ 为开集，$g: V \to \mathbb{R}^{d}$ 连续，考虑自治系统 $\dot{x} = g(x)$。令 $f(t, x) = g(x)$，则 $U = \mathbb{R} \times V$。

**引理 7（自治系统解的平移不变性）**  
设 $t_0, \tau_0 \in \mathbb{R}$，$x_0 \in V$。则 $(\phi, I_{\phi})$ 是 $\mathcal{I}(t_0, x_0)$ 的极大解当且仅当 $(\psi, I_{\psi})$ 是 $\mathcal{I}(\tau_0, x_0)$ 的极大解，其中  
$$
I_{\psi} = I_{\phi} - (t_0 - \tau_0), \quad \psi(t) = \phi(t + t_0 - \tau_0).
$$

**证明**：  
直接验证 $\psi$ 满足 $\dot{\psi}(t) = g(\psi(t))$ 和 $\psi(\tau_0) = x_0$，且极大性由定义保持。  


**定义（极大相曲线）**  
设 $\omega = (0, x_0)$，$(\phi_{\omega}, I_{\omega})$ 是 $\mathcal{I}(\omega)$ 的极大解。称 $\phi_{\omega}(I_{\omega})$ 为系统 $\dot{x} = g(x)$ 通过点 $x_0$ 的一条极大相曲线。

**推论 10**  
在假设 ($*$) 下：  
1. 对任意 $x_0 \in V$，通过 $x_0$ 的极大相曲线唯一。  
2. 若 $\Gamma$ 和 $\tilde{\Gamma}$ 是两条极大相曲线，则要么 $\Gamma \cap \tilde{\Gamma} = \emptyset$，要么 $\Gamma = \tilde{\Gamma}$。

**证明**：  
由定理 5 和性质 6 直接可得。  


**性质 8（自治系统极大相曲线的边界行为）**  
在假设 ($*$) 下，设 $x_0 \in V$，$\omega = (0, x_0)$，$(\phi_{\omega}, I_{\omega})$ 为极大解，$I_{\omega} = (t_{\mathrm{min}}, t_{\mathrm{max}})$。  
1. 若 $t_{\mathrm{max}} < \infty$，则对 $V$ 的任意紧子集 $K$，存在 $t^* \in I_{\omega}$ 使  
   $$
   \phi_{\omega}(t) \notin K, \quad \forall t \in (t^*, t_{\mathrm{max}}).
   $$  
2. 若 $t_{\mathrm{min}} > -\infty$，则对 $V$ 的任意紧子集 $K$，存在 $t_* \in I_{\omega}$ 使  
   $$
   \phi_{\omega}(t) \notin K, \quad \forall t \in (t_{\mathrm{min}}, t_*).
   $$

**证明**：  
仅证 1。令 $\hat{K} = [0, t_{\mathrm{max}}] \times K$，则 $\hat{K}$ 是 $U$ 的紧子集。由性质 7，存在 $t^* \in I_{\omega}$ 使对 $t \in [t^*, t_{\mathrm{max}})$ 有 $(t, \phi_{\omega}(t)) \notin \hat{K}$，故 $\phi_{\omega}(t) \notin K$。  


## 解关于初值和参数的连续依赖性

### 1. Grönwall不等式

**定理 6（Grönwall不等式）**  
设 $\xi: [t_0, t_1] \to [0, \infty)$ 连续，$a, b \geq 0$。若对任意 $t \in [t_0, t_1]$ 有  
$$
\xi(t) \leq a + b \int_{t_0}^t \xi(\tau) d\tau,
$$  
则对任意 $t \in [t_0, t_1]$ 有  
$$
0 \leq \xi(t) \leq a e^{b(t - t_0)}.
$$

**证明**：  
定义 $\eta: [t_0, t_1] \to [0, \infty)$ 为  
$$
\eta(t) = a + b \int_{t_0}^t \xi(\tau) d\tau.
$$  
则 $\eta$ 连续可微，$\eta'(t) = b\xi(t)$，且由假设 $\xi(t) \leq \eta(t)$。  
考虑函数 $\eta(t)e^{-b(t - t_0)}$，其导数为  
$$
\frac{d}{dt}[\eta(t)e^{-b(t - t_0)}] = [\eta'(t) - b\eta(t)]e^{-b(t - t_0)} = b[\xi(t) - \eta(t)]e^{-b(t - t_0)} \leq 0.
$$  
故 $\eta(t)e^{-b(t - t_0)}$ 在 $[t_0, t_1]$ 上单调不增，从而  
$$
\eta(t)e^{-b(t - t_0)} \leq \eta(t_0) = a,
$$  
即 $\eta(t) \leq a e^{b(t - t_0)}$。  
由 $\xi(t) \leq \eta(t)$ 得 $\xi(t) \leq a e^{b(t - t_0)}$。  


### 2. 解关于初值的连续依赖性

**引理 8（解的局部连续依赖性）**  
设 $U \subset \mathbb{R}^{d+1}$ 为开集，$f \in C(U, \mathbb{R}^d) \cap \mathrm{Lip}_{x,\mathrm{loc}}(U)$，$(s, z) \in U$，$\phi(t, s, z)$ 是 $\mathcal{I}(s, z)$ 在区间 $[s - \kappa_1, s + \kappa_2]$ 上的解。记  
$$
\Gamma = \{(t, \phi(t, s, z)) : t \in [s - \kappa_1, s + \kappa_2]\}.
$$  
设 $\epsilon > 0$ 使得 $\Gamma$ 的闭 $\epsilon$-邻域 $\Gamma(\epsilon) \subset U$，其中  
$$
\Gamma(\epsilon) = \{\omega \in \mathbb{R}^{d+1} : d(\omega, \Gamma) \leq \epsilon\}.
$$  
设 $L$ 为 $f$ 在 $\Gamma(\epsilon)$ 上关于 $x$ 的 Lipschitz 常数。令  
$$
\bar{\delta} = e^{-L\kappa} \epsilon / 2, \quad \kappa = \max\{\kappa_1, \kappa_2\}.
$$  
则对任意 $z' \in B(z, \bar{\delta})$，$\mathcal{I}(s, z')$ 的解 $\phi(t, s, z')$ 至少在 $[s - \kappa_1, s + \kappa_2]$ 上存在，且满足估计  
$$
|\phi(t, s, z) - \phi(t, s, z')| \leq |z - z'| e^{L|t - s|}, \quad \forall t \in [s - \kappa_1, s + \kappa_2].
$$

**证明**：  
仅证 $t \geq s$ 情形（$t \leq s$ 类似）。  
设 $z' \in B(z, \bar{\delta})$。由解的局部存在性，存在 $T \in (s, t_{\mathrm{max}}^{(s, z')})$ 使得  
$$
\phi(t, s, z') \in \Gamma(\epsilon), \quad \forall t \in [s, T],
$$  
且存在序列 $t_n \downarrow T$ 使得 $\phi(t_n, s, z') \notin \Gamma(\epsilon)$。特别地，  
$$
d((T, \phi(T, s, z')), \Gamma) = \epsilon.
$$  
断言：$T > s + \kappa_2$。  
若 $T \leq s + \kappa_2$，则对 $t \in [s, T]$，由积分方程和 Lipschitz 条件得  
$$
|\phi(t, s, z) - \phi(t, s, z')| \leq |z - z'| + \int_s^t L |\phi(\tau, s, z) - \phi(\tau, s, z')| d\tau.
$$  
由 Grönwall 不等式得  
$$
|\phi(t, s, z) - \phi(t, s, z')| \leq |z - z'| e^{L(t - s)} \leq \bar{\delta} e^{L\kappa_2} = \epsilon / 2.
$$  
取 $t = T$，得  
$$
d((T, \phi(T, s, z')), \Gamma) \leq |\phi(T, s, z) - \phi(T, s, z')| \leq \epsilon / 2,
$$  
与 $d((T, \phi(T, s, z')), \Gamma) = \epsilon$ 矛盾。故 $T > s + \kappa_2$。  
因此 $\phi(t, s, z')$ 在 $[s, s + \kappa_2]$ 上存在，且对 $t \in [s, s + \kappa_2]$ 应用上述估计即得结论。  


**定理 7（解关于初值和时间的联合连续性）**  
设 $U \subset \mathbb{R}^{d+1}$ 为开集，$f \in C(U, \mathbb{R}^d) \cap \mathrm{Lip}_{x,\mathrm{loc}}(U)$。对 $(s, z) \in U$，记 $\mathcal{I}(s, z)$ 的极大解为 $(\phi(t, s, z), I_{(s, z)})$。则 $\phi$ 的定义域  
$$
W = \{(t, s, z) : (s, z) \in U, t \in I_{(s, z)}\}
$$  
是 $\mathbb{R} \times U \subset \mathbb{R}^{d+2}$ 的开子集，且 $\phi$ 在 $W$ 上连续。  
更精确地，对 $\sigma_0 = (t_0, s_0, z_0) \in W$，存在 $\delta > 0$，$C > 0$ 使得  
$$
R_{\sigma_0} = (t_0 - \delta, t_0 + \delta) \times (s_0 - \delta, s_0 + \delta) \times B(z_0, \delta) \subset W,
$$  
且对任意 $\sigma = (t, s, z) \in R_{\sigma_0}$ 有  
$$
|\phi(t, s, z) - \phi(t_0, s_0, z_0)| \leq C(|z - z_0| + |s - s_0| + |t - t_0|).
$$

**证明**：  
设 $t_0 \geq s_0$。由 $I_{(s_0, z_0)}$ 为开区间，存在 $\delta_0 > 0$ 使得  
$$
[s_0 - \delta_0, t_0 + \delta_0] \subset I_{(s_0, z_0)}.
$$  
定义紧曲线段  
$$
\Gamma = \{(t, \phi(t, s_0, z_0)) : t \in [s_0 - \delta_0, t_0 + \delta_0]\} \subset U.
$$  
取 $\epsilon > 0$ 使 $\Gamma(\epsilon) \subset U$，设 $L$ 为 $f$ 在 $\Gamma(\epsilon)$ 上关于 $x$ 的 Lipschitz 常数。令  
$$
M = \max\{|f(t, x)| : (t, x) \in \Gamma(\epsilon)\}, \quad \kappa = t_0 - s_0 + 2\delta_0,
$$  
$$
\delta = \min\left\{\delta_0, \frac{e^{-L\kappa}\epsilon}{4}, \frac{e^{-L\kappa}\epsilon}{4M}\right\}.
$$  
设 $(s, z) \in (s_0 - \delta, s_0 + \delta) \times B(z_0, \delta)$，令 $z_s = \phi(s, s_0, z_0)$。则  
$$
|z_s - z_0| \leq \left|\int_{s_0}^s f(\tau, \phi(\tau, s_0, z_0)) d\tau\right| \leq M|s - s_0| < \frac{e^{-L\kappa}\epsilon}{4},
$$  
$$
|z_s - z| \leq |z_s - z_0| + |z_0 - z| < \frac{e^{-L\kappa}\epsilon}{2}.
$$  
由解的唯一性，$\phi(t, s_0, z_0) = \phi(t, s, z_s)$。  
对 $\phi(t, s, z_s)$ 和 $\phi(t, s, z)$ 应用引理 8，得 $\phi(t, s, z)$ 在 $[s_0 - \delta_0, t_0 + \delta_0]$ 上存在，且  
$$
|\phi(t, s, z_s) - \phi(t, s, z)| \leq |z_s - z| e^{L|t - s|}.
$$  
特别地，$(t_0 - \delta, t_0 + \delta) \subset I_{(s, z)}$，故 $R_{\sigma_0} \subset W$。  
对任意 $\sigma = (t, s, z) \in R_{\sigma_0}$，有  
$$
\begin{aligned}
&|\phi(t, s, z) - \phi(t_0, s_0, z_0)| \\
&\leq |\phi(t, s, z) - \phi(t, s_0, z_0)| + |\phi(t, s_0, z_0) - \phi(t_0, s_0, z_0)| \\
&= |\phi(t, s, z) - \phi(t, s, z_s)| + \left|\int_{t_0}^t f(\tau, \phi(\tau, s_0, z_0)) d\tau\right| \\
&\leq e^{L\kappa}|z - z_s| + M|t - t_0| \\
&\leq e^{L\kappa}(|z - z_0| + |z_0 - z_s|) + M|t - t_0| \\
&\leq e^{L\kappa}|z - z_0| + e^{L\kappa}M|s - s_0| + M|t - t_0|.
\end{aligned}
$$  
取 $C = e^{L\kappa}M$ 即得结论。  


### 3. 解关于参数的连续依赖性

**定义（含参数的初值问题）**  
设 $W \subset \mathbb{R}^{d + d' + 1}$ 为开集，记点为 $(t, x, \lambda)$，其中 $\lambda \in \mathbb{R}^{d'}$ 为参数。设 $f \in C(W, \mathbb{R}^d)$，$(s, z, \lambda) \in W$。含参数的初值问题 $\mathcal{I}(s, z, \lambda)$ 定义为  
$$
\dot{x} = f(t, x, \lambda), \quad x(s) = z.
$$  
记其解为 $\phi(t, s, z, \lambda)$。

**定义（关于 $(x, \lambda)$ 的局部 Lipschitz 连续性）**  
称 $f: W \to \mathbb{R}^d$ 关于 $(x, \lambda)$ 局部 Lipschitz 连续（记为 $f \in \mathrm{Lip}_{(x, \lambda), \mathrm{loc}}(W)$），若对任意紧集 $K \subset W$，存在 $L > 0$ 使得对任意 $(t, x, \lambda), (t, x', \lambda') \in K$ 有  
$$
|f(t, x, \lambda) - f(t, x', \lambda')| \leq L |(x, \lambda) - (x', \lambda')|.
$$

**定理 8（解关于参数的连续依赖性）**  
设 $W \subset \mathbb{R}^{d + d' + 1}$ 为开集，$f \in C(W, \mathbb{R}^d) \cap \mathrm{Lip}_{(x, \lambda), \mathrm{loc}}(W)$。对 $(s, z, \lambda) \in W$，记 $\mathcal{I}(s, z, \lambda)$ 的极大解为 $(\phi(t, s, z, \lambda), I_{(s, z, \lambda)})$。则 $\phi$ 的定义域  
$$
\widehat{W} = \{(t, s, z, \lambda) : (s, z, \lambda) \in W, t \in I_{(s, z, \lambda)}\}
$$  
是 $\mathbb{R} \times W \subset \mathbb{R}^{d + d' + 2}$ 的开子集，且 $\phi$ 在 $\widehat{W}$ 上连续。

**证明**：  
将参数视为新的变量。定义 $F: \mathbb{R}^{d + d' + 1} \to \mathbb{R}^{d + d'}$ 为  
$$
F(t, x, y) = (f(t, x, y), \mathbf{0}),
$$  
其中 $\mathbf{0} \in \mathbb{R}^{d'}$ 为零向量。则 $F \in C(W, \mathbb{R}^{d + d'}) \cap \mathrm{Lip}_{(x, y), \mathrm{loc}}(W)$。  
考虑初值问题  
$$
\dot{X} = F(t, X), \quad X(s) = (z, \lambda), \quad X = (x, y).
$$  
记其极大解为 $(\Phi(t, s, (z, \lambda)), I_{(s, (z, \lambda))})$。由定理 7，$\Phi$ 的定义域  
$$
\widetilde{W} = \{(t, s, (z, \lambda)) : (s, (z, \lambda)) \in W, t \in I_{(s, (z, \lambda))}\}
$$  
是 $\mathbb{R} \times W \subset \mathbb{R}^{d + d' + 2}$ 的开子集，且 $\Phi$ 在 $\widetilde{W}$ 上连续。  
设 $\Phi(t, s, (z, \lambda)) = (x(t), y(t))$。由后 $d'$ 个方程 $\dot{y} = 0$ 及初值 $y(s) = \lambda$ 得 $y(t) \equiv \lambda$。前 $d$ 个方程为  
$$
\dot{x}(t) = f(t, x(t), y(t)) = f(t, x(t), \lambda), \quad x(s) = z,
$$  
故 $x(t) = \phi(t, s, z, \lambda)$，且 $I_{(s, z, \lambda)} = I_{(s, (z, \lambda))}$。  
因此 $\widehat{W} = \widetilde{W}$ 为开集，且 $\phi$ 作为 $\Phi$ 的前 $d$ 个分量在 $\widehat{W}$ 上连续。  


## 解关于初值和参数的光滑依赖性

### 1. 一阶变分方程与解关于初值的C¹光滑性

**定义 13（一阶变分方程）**  
设 $U \subset \mathbb{R}^{d+1}$ 为开集，$f \in C^1(U, \mathbb{R}^d)$，$(s,z) \in U$，$\phi(t,s,z)$ 是 $\mathcal{I}(s,z)$ 的解。定义矩阵值函数  
$$
A(t) = \frac{\partial f}{\partial x}(t, \phi(t,s,z)).
$$  
则线性矩阵微分方程  
$$
\dot{X} = A(t)X, \quad X(s) = I_d
$$  
称为系统 $\dot{x} = f(t,x)$ 沿解 $\phi(t,s,z)$ 的一阶变分方程。

**引理 9（矩阵范数等价性）**  
存在常数 $C_d > 1$ 使得对任意 $A \in M_d(\mathbb{R})$ 有  
$$
C_d^{-1} \|A\| \leq \|A\|_2 \leq C_d \|A\|,
$$  
其中 $\|A\|_2 = (\sum_{i,j=1}^d |a_{ij}|^2)^{1/2}$。

**引理 10（一阶变分方程解的存在唯一性与连续性）**  
设 $I \subset \mathbb{R}$ 为紧区间，$K \subset \mathbb{R}^m$ 为紧集，$A: I \times K \to M_d(\mathbb{R})$ 连续。则对任意 $(\tau,\omega) \in I \times K$ 和 $B \in M_d(\mathbb{R})$，初值问题  
$$
\dot{X} = A(t,\omega)X, \quad X(\tau) = B
$$  
在 $I$ 上存在唯一解，记作 $\Phi(t,\tau,\omega)$，且 $\Phi$ 在 $I \times I \times K$ 上连续。

**证明**：  
定义函数空间 $S = C(I \times I \times K, M_d(\mathbb{R}))$，赋予范数  
$$
\|\varphi\|_\infty = \max\{\|\varphi(t,\tau,\omega)\| : (t,\tau,\omega) \in I \times I \times K\}.
$$  
定义 Picard 映射 $P: S \to S$ 为  
$$
(P\varphi)(t,\tau,\omega) = B + \int_\tau^t A(s,\omega)\varphi(s,\tau,\omega) ds.
$$  
由 $A$ 的连续性和 $I$ 的紧性，存在 $L > 0$ 使得 $\|A(t,\omega)\| \leq L$。则对 $\varphi_1, \varphi_2 \in S$，有  
$$
\|(P\varphi_1)(t,\tau,\omega) - (P\varphi_2)(t,\tau,\omega)\| \leq L|t-\tau| \|\varphi_1 - \varphi_2\|_\infty.
$$  
取 $n$ 足够大使得 $(L|I|)^n/n! < 1$，则 $P^n$ 是压缩映射，由 Banach 不动点定理，$P$ 有唯一不动点 $\Phi$，即为所求解。  
连续性由 Picard 迭代的一致收敛性可得。  


**推论 11（一阶变分方程解的定义域与连续性）**  
设 $V \subset \mathbb{R}^{m+1}$ 为开集，且对每个 $\omega \in \mathbb{R}^m$，截口 $V_\omega = \{t \in \mathbb{R} : (t,\omega) \in V\}$ 为开区间。设 $A: V \to M_d(\mathbb{R})$ 连续。则对任意 $(\tau,\omega) \in V$ 和 $B \in M_d(\mathbb{R})$，初值问题  
$$
\dot{X} = A(t,\omega)X, \quad X(\tau) = B
$$  
在 $V_\omega$ 上存在唯一解，记作 $\Phi(t,\tau,\omega)$。其定义域  
$$
\widehat{V} = \{(t,\tau,\omega) : (\tau,\omega) \in V, t \in V_\omega\}
$$  
是 $\mathbb{R}^{m+2}$ 的开子集，且 $\Phi$ 在 $\widehat{V}$ 上连续。

**证明**：  
存在唯一性由引理10在紧区间上的结果和延拓论证可得。  
开性：任取 $(t,\tau,\omega) \in \widehat{V}$，取紧区间 $I \subset V_\omega$ 包含 $t,\tau$。由 $I \times \{\omega\}$ 是 $V$ 的紧子集，存在 $\delta > 0$ 使 $I \times \overline{B(\omega,\delta)} \subset V$。则对任意 $(\tau',\omega') \in I \times \overline{B(\omega,\delta)}$，有 $I \subset V_{\omega'}$，故 $I \times I \times \overline{B(\omega,\delta)} \subset \widehat{V}$。  
连续性由引理10在 $I \times I \times \overline{B(\omega,\delta)}$ 上的连续性可得。  


**性质 9（解关于初值偏导数的候选）**  
设 $U \subset \mathbb{R}^{d+1}$ 为开集，$f \in C^1(U, \mathbb{R}^d)$，$\phi(t,s,z)$ 是 $\mathcal{I}(s,z)$ 的解，定义域为  
$$
W = \{(t,s,z) : (s,z) \in U, t \in I_{(s,z)}\}.
$$  
定义 $A: W \to M_d(\mathbb{R})$ 为  
$$
A(t,s,z) = \frac{\partial f}{\partial x}(t, \phi(t,s,z)).
$$  
则一阶变分方程  
$$
\dot{X} = A(t,s,z)X, \quad X(s) = I_d
$$  
的解 $D(t,s,z)$ 在 $W$ 上存在唯一，且 $D$ 在 $W$ 上连续。

**证明**：  
取 $V = W$，参数 $\omega = (s,z)$，则 $V_\omega = I_{(s,z)}$ 为开区间。由推论11，解 $D(t,s,z) = \Phi(t,s,\omega)$ 在 $W$ 上存在唯一且连续。  


**定理 9（向量值有限增量定理）**  
设 $U \subset \mathbb{R}^d$ 为开集，$\varphi: U \to \mathbb{R}^d$ 为 $C^1$ 映射。设 $z_0, z \in U$ 且线段 $[z_0,z] \subset U$。则  
$$
|\varphi(z) - \varphi(z_0) - \varphi'(z_0)(z - z_0)| \leq \sup_{\xi \in [z_0,z]} \|\varphi'(\xi) - \varphi'(z_0)\| |z - z_0|.
$$

**引理 12（解关于初值的可微性）**  
在性质9的假设下，对任意 $(t,s,z) \in W$，偏导数 $\frac{\partial \phi}{\partial z}(t,s,z)$ 存在且等于 $D(t,s,z)$，即  
$$
\frac{\partial \phi}{\partial z}(t,s,z) = D(t,s,z).
$$  
因此 $\frac{\partial \phi}{\partial z}$ 在 $W$ 上连续。

**证明**：  
固定 $(t,s,z) \in W$，设 $(t,s,z') \in W$。定义余项  
$$
R(t,z',z) = \phi(t,s,z') - \phi(t,s,z) - D(t,s,z)(z' - z).
$$  
由积分方程得  
$$
\begin{aligned}
R(t,z',z) &= z' - z + \int_s^t [f(\tau,\phi(\tau,s,z')) - f(\tau,\phi(\tau,s,z))] d\tau \\
&\quad - \left(I_d + \int_s^t \frac{\partial f}{\partial x}(\tau,\phi(\tau,s,z))D(\tau,s,z) d\tau\right)(z' - z).
\end{aligned}
$$  
设 $\Gamma = \{(\tau,\phi(\tau,s,z)) : \tau \in [s,t]\}$，取 $\epsilon_0 > 0$ 使 $\Gamma$ 的闭 $\epsilon_0$-邻域 $\Gamma(\epsilon_0) \subset U$。由解的连续依赖性，存在 $\delta_0 > 0$ 使得对 $z' \in B(z,\delta_0)$，有  
$$
|\phi(\tau,s,z) - \phi(\tau,s,z')| \leq \epsilon_0, \quad \forall \tau \in [s,t].
$$  
由有限增量定理，  
$$
f(\tau,\phi(\tau,s,z')) - f(\tau,\phi(\tau,s,z)) = \frac{\partial f}{\partial x}(\tau,\phi(\tau,s,z))(\phi(\tau,s,z') - \phi(\tau,s,z)) + \Delta(z',z,\tau),
$$  
其中 $|\Delta(z',z,\tau)| \leq \eta(C|z'-z|)C|z'-z|$，$\eta$ 是 $\frac{\partial f}{\partial x}$ 在 $\Gamma(\epsilon_0)$ 上的连续模，$C$ 是 Lipschitz 常数。  
代入得  
$$
|R(t,z',z)| \leq \int_s^t M|R(\tau,z',z)| d\tau + (t-s)\eta(C|z'-z|)C|z'-z|,
$$  
其中 $M = \max\{\|\frac{\partial f}{\partial x}(p)\| : p \in \Gamma(\epsilon_0)\}$。  
由 Grönwall 不等式，  
$$
|R(t,z',z)| \leq (t-s)\eta(C|z'-z|)C|z'-z| e^{M(t-s)} = o(|z'-z|).
$$  
故 $\frac{\partial \phi}{\partial z}(t,s,z)$ 存在且等于 $D(t,s,z)$。  


**性质 10（解关于初始时间偏导数的候选）**  
在性质9的假设下，一阶变分方程  
$$
\dot{X} = A(t,s,z)X, \quad X(s) = -f(s,z)
$$  
的解 $\hat{D}(t,s,z)$ 在 $W$ 上存在唯一，且 $\hat{D}$ 在 $W$ 上连续。

**引理 13（解关于初始时间的可微性）**  
在性质9的假设下，对任意 $(t,s,z) \in W$，偏导数 $\frac{\partial \phi}{\partial s}(t,s,z)$ 存在且等于 $\hat{D}(t,s,z)$，即  
$$
\frac{\partial \phi}{\partial s}(t,s,z) = \hat{D}(t,s,z).
$$  
因此 $\frac{\partial \phi}{\partial s}$ 在 $W$ 上连续。

**证明**：  
证明思路与引理12类似，通过构造余项并应用 Grönwall 不等式。  


**定理 10（解关于初值的C¹光滑性）**  
设 $U \subset \mathbb{R}^{d+1}$ 为开集，$f \in C^1(U, \mathbb{R}^d)$，则 $\mathcal{I}(s,z)$ 的极大解 $\phi(t,s,z)$ 的定义域 $W$ 是开集，且 $\phi \in C^1(W)$。

**证明**：  
由定理7，$W$ 是开集且 $\phi$ 连续。  
由 $\frac{\partial \phi}{\partial t}(t,s,z) = f(t,\phi(t,s,z))$ 及 $f \in C^1$ 和 $\phi$ 连续，得 $\frac{\partial \phi}{\partial t}$ 连续。  
由引理12和13，$\frac{\partial \phi}{\partial z}$ 和 $\frac{\partial \phi}{\partial s}$ 在 $W$ 上连续。  
故 $\phi \in C^1(W)$。  


**定理 11（解关于参数的C¹光滑性）**  
设 $\widetilde{U} \subset \mathbb{R}^{d+d'+1}$ 为开集，$f \in C^1(\widetilde{U}, \mathbb{R}^d)$，则 $\mathcal{I}(s,z,\lambda)$ 的极大解 $\phi(t,s,z,\lambda)$ 的定义域  
$$
\widetilde{W} = \{(t,s,z,\lambda) : (s,z,\lambda) \in \widetilde{U}, t \in I_{(s,z,\lambda)}\}
$$  
是开集，且 $\phi \in C^1(\widetilde{W})$。

**证明**：  
将参数视为新的空间变量，构造增广系统  
$$
F(t,x,y) = (f(t,x,y), \mathbf{0}), \quad (x,y) \in \mathbb{R}^{d+d'}.
$$  
则 $F \in C^1(\widetilde{U}, \mathbb{R}^{d+d'})$。由定理10，增广系统的解 $(x(t),y(t))$ 关于 $(s,z,\lambda)$ C¹光滑。注意到 $y(t) \equiv \lambda$，故 $\phi(t,s,z,\lambda) = x(t)$ 关于 $(s,z,\lambda)$ C¹光滑。  


### 2. 高阶光滑性

**定理 12（解关于初值和参数的高阶光滑性）**  
设 $k \in \mathbb{N} \cup \{\infty\}$。  
1. 若 $f \in C^k(U, \mathbb{R}^d)$，则 $\phi \in C^k(W)$。  
2. 若 $f \in C^k(\widetilde{U}, \mathbb{R}^d)$，则 $\tilde{\phi} \in C^k(\widetilde{W})$。

**证明**：  
对 $k$ 进行数学归纳法。  
$k=1$ 时由定理10和11成立。  
假设结论对 $k$ 成立，考虑 $k+1$ 情形。  
先证1)：设 $f \in C^{k+1}(U, \mathbb{R}^d)$。  
- $\frac{\partial \phi}{\partial t}(t,s,z) = f(t,\phi(t,s,z))$：由 $f \in C^{k+1}$ 和归纳假设 $\phi \in C^k$，得 $\frac{\partial \phi}{\partial t} \in C^k$。  
- $\frac{\partial \phi}{\partial z}$ 满足的变分方程：  
  $$
  \dot{X} = \frac{\partial f}{\partial x}(t,\phi(t,s,z))X, \quad X(s) = I_d.
  $$  
  令 $F(t,X,s,z) = \frac{\partial f}{\partial x}(t,\phi(t,s,z))X$，由 $f \in C^{k+1}$ 和 $\phi \in C^k$ 得 $F \in C^k$。由归纳假设2)，解 $\Phi(t,\tau,s,z)$ 关于参数 $(s,z)$ C^k光滑，故 $\frac{\partial \phi}{\partial z}(t,s,z) = \Phi(t,s,s,z) \in C^k$。  
- $\frac{\partial \phi}{\partial s}$ 满足的方程：  
  $$
  \dot{y} = \frac{\partial f}{\partial x}(t,\phi(t,s,z))y, \quad y(s) = -f(s,z).
  $$  
  类似可得 $\frac{\partial \phi}{\partial s} \in C^k$。  
故 $\phi \in C^{k+1}(W)$。  
2)的证明类似，利用已证的1)在 $k+1$ 时成立的结论。  
由数学归纳法，结论对任意 $k$ 成立。  
