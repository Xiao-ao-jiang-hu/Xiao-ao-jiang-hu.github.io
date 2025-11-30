---
title: ODE第九次作业
tags:
  - math
  - ode
categories:
  - math
  - ode-hw
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

## 解答
### 1
1) 对 $\dot{r} = F(r)$，该微分方程定义在 $(0,1)$ 上。$F(r)$ 是光滑函数，因此解局部存在且唯一。分离变量积分代入：
$\frac{r}{\sqrt{1 - r^2}} = \frac{r_0}{\sqrt{1 - r_0^2}} e^{t/2} \implies r(t) = \frac{r_0 e^{t/2}}{\sqrt{1 + r_0^2 (e^t - 1)}}.$
因此相流存在，且为
$$\phi_F(t, r_0) = \frac{r_0 e^{t/2}}{\sqrt{1 + r_0^2 (e^t - 1)}}.$$

2) 对 $\dot{r} = G(r)$，同样 $G(r)$ 是光滑函数，解局部存在且唯一。分离变量积分代入：
$r(t) = r_0 e^{t/2}.$
因此相流存在，且为
$$\phi_G(t, r_0) = r_0 e^{t/2}.$$

### 2
$h(\phi_t^F(r)) = \phi_t^G(h(r))$ 对 $t$ 求导：
$$h'(r)F(r) = G(h(r))$$
代入：
$$h'(r) \cdot r(1-r^2) = h(r)$$
求解该常微分方程，得
$$h(r) = \frac{r}{\sqrt{1 - r^2}}.$$

计算得
$$h(\phi_F(t, r_0)) = \frac{\frac{r_0 e^{t/2}}{\sqrt{1 + r_0^2 (e^t - 1)}}}{\sqrt{1 - \left(\frac{r_0 e^{t/2}}{\sqrt{1 + r_0^2 (e^t - 1)}}\right)^2}} = r_0 e^{t/2} = \phi_G(t, h(r_0)).$$
则 $h$ 是 $(0,1)$ 到 $(0,\infty)$ 的同胚。因此 $\dot{r} = F(r)$ 与 $\dot{r} = G(r)$ 拓扑共轭。

### 3
进行极坐标变换，得
$$\dot{r} = \frac{r}{2}, \quad \dot{\theta} = 1$$
$$\dot{r} = \frac{r(1-r^2)}{2}, \quad \dot{\theta} = 1$$

注意到两个系统在角向分量上完全相同（$\dot{\theta} = 1$），差异仅在于径向分量。因此只需要构造径向分量的同胚映射。

从第一问和第二问知道存在同胚映射 $h: (0,1) \to (0,\infty)$：
$$h(r) = \frac{r}{\sqrt{1-r^2}}, \quad h^{-1}(s) = \frac{s}{\sqrt{1+s^2}}$$
定义 $H: \mathbb{R}^2 \to \mathbb{R}^2$：
$$H(x,y) = \left( h(r)\cos\theta, h(r)\sin\theta \right), \quad \text{其中 } r = \sqrt{x^2+y^2}, \ \theta = \arctan\left(\frac{y}{x}\right)$$
其逆映射为：
$$H^{-1}(u,v) = \left( h^{-1}(s)\cos\phi, h^{-1}(s)\sin\phi \right), \quad \text{其中 } s = \sqrt{u^2+v^2}, \ \phi = \arctan\left(\frac{v}{u}\right)$$

在极坐标下，系统 $F$ 的相流为：
$$\phi_t^F(r,\theta) = \left( \frac{r e^{t/2}}{\sqrt{1 + r^2(e^t-1)}}, \theta + t \right)$$
系统 $G$ 的相流为：
$$\phi_t^G(s,\phi) = \left( s e^{t/2}, \phi + t \right)$$
现在验证共轭条件：
$$\begin{aligned}
H(\phi_t^F(r,\theta)) &= H\left( \frac{r e^{t/2}}{\sqrt{1 + r^2(e^t-1)}}, \theta + t \right) \\
&= \left( h\left( \frac{r e^{t/2}}{\sqrt{1 + r^2(e^t-1)}} \right) \cos(\theta+t), h\left( \frac{r e^{t/2}}{\sqrt{1 + r^2(e^t-1)}} \right) \sin(\theta+t) \right)
\end{aligned}$$
另一方面：
$$\begin{aligned}
\phi_t^G(H(r,\theta)) &= \phi_t^G(h(r)\cos\theta, h(r)\sin\theta) \\
&= \phi_t^G(h(r), \theta) \quad \text{(在极坐标下)} \\
&= \left( h(r) e^{t/2}, \theta + t \right)
\end{aligned}$$
根据第二问的结果，我们有：
$$h\left( \frac{r e^{t/2}}{\sqrt{1 + r^2(e^t-1)}} \right) = h(r) e^{t/2}$$
因此：
$$H(\phi_t^F(r,\theta)) = \left( h(r) e^{t/2} \cos(\theta+t), h(r) e^{t/2} \sin(\theta+t) \right) = \phi_t^G(H(r,\theta))$$
这证明了 $H$ 确实是系统 $F$ 和 $G$ 之间的拓扑共轭映射。由于 $h$ 在 $r=0$ 附近是局部微分同胚（$h'(0)=1 \neq 0$），且角向分量是恒等映射，因此 $H$ 在原点 $(0,0)$ 附近是局部同胚。

# Ex 2 
设 $F \in C^1(\mathbb{R}^2, \mathbb{R}^2)$，且 $F(0) = 0$，$F'(0) = D$，其中
$$
D = \begin{bmatrix} \lambda & 0 \\ 0 & \mu \end{bmatrix}; \quad \lambda \leq \mu < 0.
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

## 解答
### 1
由导数的定义，存在 $\rho > 0$ 使得当 $|X| < \rho$ 时，有
$$|F(X) - D X| \leq \frac{|\lambda|}{2} |X|.$$
因此当 $|X| = r < \rho$ 时，有
$$F(X) \cdot X = (F(X) - D X) \cdot X + D X \cdot X \leq \frac{|\lambda|}{2} |X|^2 + \lambda |X|^2 = \left(\frac{|\lambda|}{2} + \lambda\right) r^2 < 0.$$

### 2
根据 $z$ 的位置分类。
1. 当 $|z| = r$ 时，取 $T(z) = 0$。
2. 当 $|z| < r$ 时，只需证存在 $T < 0$ s.t. $|\phi(T,z)| > r$，再由连续性可得存在 $T(z) \in (T,0)$ s.t. $|\phi(T(z),z)| = r$。
由第一问，存在 $\delta > 0$ s.t. 当 $|X| \leq r$ 时，$F(X) \cdot X \leq -\delta$. 则
$$\frac{d}{dt} |\phi(t,z)|^2 = 2 F(\phi(t,z)) \cdot \phi(t,z) \leq -2\delta.$$
积分得
$$|\phi(t,z)|^2 \geq |z|^2 + 2\delta |t|.$$
取 $T = -\frac{r^2 - |z|^2}{2\delta} < 0$，则 $|\phi(T,z)|^2 \geq r^2$，得证。
3. 当 $|z| > r$ 时，只需证存在 $T > 0$ s.t. $|\phi(T,z)| < r$，再由连续性可得存在 $T(z) \in (0,T)$ s.t. $|\phi(T(z),z)| = r$。类似可证得。

### 3
定义函数 $G: \mathbb{R} \times (B_\rho \setminus \{0\}) \to \mathbb{R}$ 为：
$$G(t, z) = |\phi(t, z)|^2 - r^2.$$
由题设，$\phi(t, z)$ 是 $C^1$ 的，因此 $G$ 也是 $C^1$ 的。
对于任意 $z \in B_\rho \setminus \{0\}$，由第二步知存在 $T(z)$ 使得：
$$G(T(z), z) = 0.$$
计算 $G$ 对 $t$ 的偏导数：
$$\frac{\partial G}{\partial t}(t, z) = 2 \phi(t, z) \cdot F(\phi(t, z)).$$
在 $t = T(z)$ 时，有 $\phi(T(z), z) \in S_r$，即 $|\phi(T(z), z)| = r$。由第一步结论，在 $S_r$ 上：
$$F(\phi(T(z), z)) \cdot \phi(T(z), z) < 0,$$
故：
$$\frac{\partial G}{\partial t}(T(z), z) < 0.$$
由隐函数定理，存在 $z$ 的邻域 $U_z$ 及唯一的 $C^1$ 函数 $\tilde{T}: U_z \to \mathbb{R}$ 使得：
$$G(\tilde{T}(z'), z') = 0 \quad \text{对所有 } z' \in U_z,$$
且 $\tilde{T}(z) = T(z)$。因此 $T$ 在 $z$ 处连续。
由于 $z$ 是 $B_\rho \setminus \{0\}$ 中任意点，故 $T$ 在 $B_\rho \setminus \{0\}$ 上连续。

### 4
由前一步可知，$T: B_\rho \setminus \{0\} \to \mathbb{R}$ 连续。又因为 $\phi(t, z)$ 是 $C^1$ 的，且矩阵指数 $e^{-tD}$ 是光滑的，所以复合函数
$$z \mapsto e^{-T(z)D} \phi(T(z), z)$$
在 $B_\rho \setminus \{0\}$ 上连续。因此，$h$ 在 $B_\rho \setminus \{0\}$ 上连续。

只需证 $\lim_{z \to 0} h(z) = 0.$
对于 $z \in B_\rho \setminus \{0\}$，有：
$$h(z) = e^{-T(z)D} \phi(T(z), z).$$
由于 $\phi(T(z), z) \in S_r$，即 $|\phi(T(z), z)| = r$，故：
$$|h(z)| \leq \left\| e^{-T(z)D} \right\| \cdot |\phi(T(z), z)| = \left\| e^{-T(z)D} \right\| \cdot r.$$
矩阵 $D = \begin{bmatrix} \lambda & 0 \\ 0 & \mu \end{bmatrix}$，其中 $\lambda \leq \mu < 0$，故：
$$e^{-T(z)D} = \begin{bmatrix} e^{-\lambda T(z)} & 0 \\ 0 & e^{-\mu T(z)} \end{bmatrix},
\quad
\left\| e^{-T(z)D} \right\| = \max\left( e^{-\lambda T(z)},\ e^{-\mu T(z)} \right).$$
考虑 $z$ 满足 $|z| < r$，则 $T(z) < 0$。由系统稳定性，当 $z \to 0$ 时，$T(z) \to -\infty$。因此：
$$e^{-\lambda T(z)} = e^{|\lambda| T(z)} \to 0, \quad
e^{-\mu T(z)} = e^{|\mu| T(z)} \to 0,$$
所以：
$$\left\| e^{-T(z)D} \right\| \to 0 \quad \text{当 } z \to 0.$$
于是：
$$|h(z)| \leq r \cdot \left\| e^{-T(z)D} \right\| \to 0 \quad \text{当 } z \to 0,$$
即：
$$\lim_{z \to 0} h(z) = 0 = h(0).$$

### 5
设 $z_1, z_2 \in B_\rho$ 满足 $h(z_1) = h(z_2)$。
若 $z_1 = 0$，则 $h(0) = 0$，故 $h(z_2) = 0$。
若 $z_2 \neq 0$，则 $h(z_2) = e^{-T(z_2)D} \phi(T(z_2), z_2)$，且 $|\phi(T(z_2), z_2)| = r > 0$，而 $e^{-T(z_2)D}$ 可逆，故 $h(z_2) \neq 0$，矛盾。
因此 $z_2 = 0$，即 $z_1 = z_2$。
若 $z_1, z_2 \neq 0$，设 $y = h(z_1) = h(z_2)$。
考虑线性系统 $\dot{Y} = DY$，定义 $T_L(y)$ 为满足 $|e^{T_L(y)D} y| = r$ 的唯一时间（存在且唯一，因 $|e^{tD}y|$ 严格递减）。
由 $h(z) = e^{-T(z)D} \phi(T(z), z)$ 且 $\phi(T(z), z) \in S_r$，得
$$e^{T(z)D} h(z) = \phi(T(z), z) \Rightarrow |e^{T(z)D} h(z)| = r.$$
由唯一性，$T(z_1) = T_L(y) = T(z_2)$。
令 $w = e^{T_L(y)D} y$，则
$$\phi(T(z_1), z_1) = w = \phi(T(z_2), z_2).$$
于是
$$z_1 = \phi(-T(z_1), w) = \phi(-T(z_2), w) = z_2.$$
故 $h$ 是单射。


定义 $h^{-1}: h(B_\rho) \to B_\rho$ ：
若 $y = 0$，则 $h^{-1}(0) = 0$。
若 $y \neq 0$，设 $T_L(y)$ 为满足 $|e^{T_L(y)D} y| = r$ 的唯一时间，定义
$$h^{-1}(y) = \phi(-T_L(y), e^{T_L(y)D} y).$$
验证 $h(h^{-1}(y)) = y$：
设 $z = h^{-1}(y)$，则
$$\phi(T_L(y), z) = \phi(T_L(y), \phi(-T_L(y), e^{T_L(y)D} y)) = e^{T_L(y)D} y \in S_r,$$
故 $T(z) = T_L(y)$，于是
$$h(z) = e^{-T(z)D} \phi(T(z), z) = e^{-T_L(y)D} (e^{T_L(y)D} y) = y.$$
因此 $h^{-1}$ 是 $h$ 的逆。

对于 $y \neq 0$，函数 $G(t, y) = |e^{tD} y|^2 - r^2$ 是 $C^1$ 的，且
$$\frac{\partial G}{\partial t} = 2 e^{tD} y \cdot D e^{tD} y < 0 \quad (\text{因 } \lambda, \mu < 0),$$
故由隐函数定理，$T_L(y)$ 是 $C^1$ 的。
又 $\phi$ 是 $C^1$ 的，故 $h^{-1}$ 在 $h(B_\rho) \setminus \{0\}$ 上连续。
对于 $y = 0$，设 $y_n \to 0$，则 $T_L(y_n) \to -\infty$（因 $|y_n|$ 小，需负大时间使 $|e^{tD} y_n| = r$）。
于是
$$z_n = h^{-1}(y_n) = \phi(-T_L(y_n), e^{T_L(y_n)D} y_n),$$
且 $e^{T_L(y_n)D} y_n \in S_r$。
由于 $-T_L(y_n) \to +\infty$ 且 $\phi(t, \cdot)$ 在正时间趋向 $0$（因 \$0$ 渐近稳定），得 $z_n \to 0$。
故 $h^{-1}$ 在 $0$ 处连续。
因此 $h^{-1}$ 连续。

由于 $h: B_\rho \to h(B_\rho)$ 是连续双射且逆连续，故为同胚。又 $B_\rho$ 是开集，所以 $h(B_\rho)$ 是开集。

### 6
情况 1：$z = 0$
此时 $\phi(t,0) = 0$，$h(0) = 0$，故：
$$h(\phi(t,0)) = h(0) = 0, \quad e^{tD} h(0) = e^{tD} \cdot 0 = 0,$$
等式成立。

情况 2：$z \neq 0$
记 $w = \phi(t,z)$。由定义：
$$h(z) = e^{-T(z)D} \phi(T(z), z), \quad h(w) = e^{-T(w)D} \phi(T(w), w).$$
利用流性质 $\phi(T(w), w) = \phi(T(w), \phi(t,z)) = \phi(T(w) + t, z)$，得：
$$h(w) = e^{-T(w)D} \phi(T(w) + t, z).$$
另一方面：
$$e^{tD} h(z) = e^{tD} e^{-T(z)D} \phi(T(z), z) = e^{(t - T(z))D} \phi(T(z), z).$$
由 $T(z)$ 的定义，$\phi(T(z), z) \in S_r$。又因 $\phi(T(w) + t, z) = \phi(T(w), w) \in S_r$，且函数 $s \mapsto |\phi(s,z)|$ 在 $B_\rho \setminus \{0\}$ 上严格单调，故存在唯一 $s$ 使得 $|\phi(s,z)| = r$。因此：
$$T(w) + t = T(z) \quad \Rightarrow \quad T(w) = T(z) - t.$$
代入 $h(w)$：
$$h(w) = e^{-(T(z) - t)D} \phi(T(z), z) = e^{tD} e^{-T(z)D} \phi(T(z), z) = e^{tD} h(z).$$
即：
$$h(\phi(t,z)) = e^{tD} h(z).$$
故 $h$ 是 $\dot{X} = F(X)$ 与 $\dot{Y} = DY$ 在平衡点附近的局部拓扑共轭。