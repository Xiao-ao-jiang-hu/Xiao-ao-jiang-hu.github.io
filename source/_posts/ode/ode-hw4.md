---
title: ODE第四次作业
tags:
  - math
  - ode
categories:
  - math
  - ode
excerpt: ODE第四次作业
index_img: /img/ode.png
banner_img: /img/ode.png
abbrlink: 6d1457eb
date: 2025-10-25 02:41:10
---
## Ex 1
考虑如下的非线性方程：

$$\begin{cases}\dot{x}=|y|,\\\dot{y}=-x.\end{cases}$$

该系统的相流存在吗？说明理由。

### 解答
根据 $y$ 的符号，系统分为两个区域：$y \geq 0$ 和 $y < 0$。

- 在 $y \geq 0$ 区域，系统变为：
  $$
  \dot{x} = y, \quad \dot{y} = -x.
  $$
  这是一个线性系统，其解为：
  $$
  x(t) = A \cos t + B \sin t, \quad y(t) = -A \sin t + B \cos t,
  $$
  其中 $A$ 和 $B$ 由初始条件确定。轨迹是圆或椭圆的一部分，限于上半平面。

- 在 $y < 0$ 区域，系统变为：
  $$
  \dot{x} = -y, \quad \dot{y} = -x.
  $$
  这也是一个线性系统，其解为：
  $$
  x(t) = C e^t + D e^{-t}, \quad y(t) = -C e^t + D e^{-t},
  $$
  其中 $C$ 和 $D$ 由初始条件确定。轨迹是双曲函数，限于下半平面。

在 $y = 0$ 线上，系统行为如下：
- 如果 $x \neq 0$，则 $\dot{x} = 0$，$\dot{y} = -x$。因此，速度向量垂直於 $y = 0$ 线：
  - 若 $x > 0$，则 $\dot{y} < 0$，轨迹立即进入下半平面。
  - 若 $x < 0$，则 $\dot{y} > 0$，轨迹立即进入上半平面。
- 如果 $x = 0$ 且 $y = 0$，则 $\dot{x} = 0$，$\dot{y} = 0$，原点是平衡点。

对于初始条件在 $y = 0$ 上的点 $(x_0, 0)$（$x_0 \neq 0$)，解可以唯一地构造：
- 若 $x_0 < 0$，则 $\dot{y}(0) > 0$，解立即进入上半平面，使用上半平面的线性系统解。
- 若 $x_0 > 0$，则 $\dot{y}(0) < 0$，解立即进入下半平面，使用下半平面的线性系统解。

通过这种分段构造，对于任何初始条件，系统存在唯一的解，且解可以定义在所有时间 $t$ 上。解连续依赖于初始条件，因为在不同区域的边界上解光滑连接。

因此，系统的相流存在，并且是一个全局定义的流。

## Ex2
设$U\subset\mathbb{R}^n$ 是开集，设f：$U\to\mathbb{R}^n$ 是一个连续向量场。设$\mathit{I V P}$ 

$$\dot{X}=f(X);\quad X(0)=Z $$

的解对任意的初值$Z\in U$ 均可在整个时间轴定义且唯一，记为$\phi(t,Z).$ 。进一步假设φ：$\mathbb{R}\times U\rightarrow U$ 连续。定义

$$\phi_{t}(Z):=\phi(t,Z).$$

证明$\left\{\phi_{t}:t\in\mathbb{R}\right\}$ 是系统$\dot{X}=f(X)$ )的相流。


### 解答
#### 1. 恒等性质
由初值问题 $\dot{X} = f(X)$, $X(0) = Z$ 的解定义，有：
$$
\phi(0, Z) = Z \quad \text{对于所有} \quad Z \in U.
$$
根据 $\phi_t$ 的定义，$\phi_t(Z) = \phi(t, Z)$，因此：
$$
\phi_0(Z) = \phi(0, Z) = Z.
$$
这意味着 $\phi_0$ 是恒等映射，即 $\phi_0 = \text{id}_U$。

#### 2. 群性质
固定 $Z \in U$ 和 $t \in \mathbb{R}$。定义 $X(t) = \phi(t, Z)$，则 $X(t)$ 满足：
$$
\dot{X}(t) = f(X(t)), \quad X(0) = Z.
$$
考虑函数 $Y(s) = X(s + t)$。则：
- $Y(0) = X(t) = \phi(t, Z) = \phi_t(Z)$。
- $\dot{Y}(s) = \frac{d}{ds} X(s + t) = \dot{X}(s + t) = f(X(s + t)) = f(Y(s))$。

因此，$Y(s)$ 满足微分方程：
$$
\dot{Y} = f(Y), \quad Y(0) = \phi_t(Z).
$$
由初值问题的唯一性，解为 $Y(s) = \phi(s, \phi_t(Z)) = \phi_s(\phi_t(Z))$。但另一方面，$Y(s) = X(s + t) = \phi(s + t, Z) = \phi_{s+t}(Z)$。所以：
$$
\phi_{s+t}(Z) = \phi_s(\phi_t(Z)).
$$
由于 $Z$ 是任意的，有 $\phi_{s+t} = \phi_s \circ \phi_t$，群性质得证。


## Ex 3
系统族$\{\dot{x} = a \mid a \in \mathbb{R}\}$有几个拓扑共轭等价类？说明理由。

### 解答
两个。

对于$a_1, a_2 \neq 0$，构造如下拓扑共轭映射：
$$F(x) = \frac{a_2}{a_1} x $$
则$F$是$\mathbb{R}$上的一个同胚，且将系统$\dot{x} = a_1$映射为$\dot{y} = a_2$，因为
$$\frac{dy}{dt} = \frac{a_2}{a_1} \frac{dx}{dt} = \frac{a_2}{a_1} a_1 = a_2.$$

因此，所有非零$a$的系统都属于同一个拓扑共轭等价类。

对于$a = 0$的系统$\dot{x} = 0$，其解为常数函数，轨道为单点集，不可能与任何非零$a$的系统通过同胚映射相互转换，因为非零$a$的系统轨道是$\mathbb{R}$。

## Ex 4
设系统 $\dot{x} = a$ 和系统 $\dot{x} = x$，其中 $a \in \mathbb{R}$证明这两个系统不拓扑共轭。

### 拓扑共轭的定义
对于系统 $\dot{x} = a$，流为 $\phi_a(t, x) = x + a t$。对于系统 $\dot{x} = x$，流为 $\phi_x(t, x) = x e^t$.

假设存在同胚 $h: \mathbb{R} \to \mathbb{R}$ 使得对于所有 $t, x \in \mathbb{R}$，有：
$$
h(\phi_a(t, x)) = \phi_x(t, h(x)),
$$
即：
$$
h(x + a t) = h(x) e^t. \tag{1}
$$

当 $a = 0$ 时，系统 $\dot{x} = 0$ 的流为 $\phi_0(t, x) = x$，即所有点都是平衡点。系统 $\dot{x} = x$ 只有一个平衡点 $x = 0$。

从方程 (1) 得：
$$
h(x) = h(x) e^t \quad \forall t \in \mathbb{R}.
$$
这要求 $h(x) = 0$ 对于所有 $x \in \mathbb{R}$，但 $h$ 是同胚，矛盾。因此，当 $a = 0$ 时，系统不拓扑共轭。

$a \neq 0$ 时，固定 $x \in \mathbb{R}$，令 $u = x + a t$，则 $t = \frac{u - x}{a}$。代入得：
$$
h(u) = h(x) e^{\frac{u - x}{a}} = \left( h(x) e^{-x/a} \right) e^{u/a}.
$$
令 $c = h(x) e^{-x/a}$，则：
$$
h(u) = c e^{u/a} \quad \text{对于所有 } u \in \mathbb{R}. \tag{2}
$$
因此，$h$ 是指数函数，不能是从$\mathbb{R}$ 到 $\mathbb{R}$ 的同胚，矛盾。

于是这两个系统不共轭。

## Ex 5
证明系统 $x' = |x|$ 与 $x' = x$ 不拓扑共轭，以及判断 $x' = |x|$ 是否与 $x' = -|x|$ 拓扑共轭。

### 解答

考虑系统 $x' = |x|$ 和 $x' = x$ 的流：
- 对于 $x' = |x|$：
  - 当 $x \geq 0$，$x' = x$，流为 $\phi_t(x) = x e^t$。
  - 当 $x < 0$，$x' = -x$，流为 $\phi_t(x) = x e^{-t}$。
- 对于 $x' = x$，流为 $\psi_t(x) = x e^t$。

假设存在同胚 $h$ 使得 $h(\phi_t(x)) = \psi_t(h(x))$。由于 $h$ 是同胚，它必须将平衡点映射到平衡点。两个系统的平衡点均为 $x = 0$，故 $h(0) = 0$.

现在考虑 $x < 0$ 在系统 $x' = |x|$ 中。当 $t \to \infty$，$\phi_t(x) = x e^{-t} \to 0$，因此 $h(\phi_t(x)) \to h(0) = 0$。但由共轭条件，$h(\phi_t(x)) = \psi_t(h(x)) = h(x) e^t$。当 $t \to \infty$，$h(x) e^t \to 0$，这要求 $h(x) = 0$。然而，$h(x) = 0$ 仅当 $x = 0$，与 $x < 0$ 矛盾。因此，假设错误，系统 $x' = |x|$ 与 $x' = x$ 不拓扑共轭。


考虑系统 $x' = -|x|$ 的流：
- 当 $x \geq 0$，$x' = -x$，流为 $\psi_t(x) = x e^{-t}$。
- 当 $x < 0$，$x' = x$，流为 $\psi_t(x) = x e^t$.

定义同胚 $h(x) = -x$。显然 $h$ 是连续双射，且逆连续。验证共轭条件 $h(\phi_t(x)) = \psi_t(h(x))$：
- 当 $x \geq 0$：
  - $\phi_t(x) = x e^t$，故 $h(\phi_t(x)) = -x e^t$。
  - $h(x) = -x$，且由于 $h(x) \leq 0$，有 $\psi_t(h(x)) = h(x) e^t = -x e^t$。
  - 所以 $h(\phi_t(x)) = \psi_t(h(x))$。
- 当 $x < 0$：
  - $\phi_t(x) = x e^{-t}$，故 $h(\phi_t(x)) = -x e^{-t}$。
  - $h(x) = -x$，且由于 $h(x) > 0$，有 $\psi_t(h(x)) = h(x) e^{-t} = -x e^{-t}$。
  - 所以 $h(\phi_t(x)) = \psi_t(h(x))$。
- 当 $x = 0$，$\phi_t(0) = 0$，$h(0) = 0$，$\psi_t(0) = 0$，显然成立。

因此，$h$ 满足共轭条件，系统 $x' = |x|$ 与 $x' = -|x|$ 拓扑共轭。

综上，系统 $x' = |x|$ 与 $x' = x$ 不拓扑共轭，但与 $x' = -|x|$ 拓扑共轭。

## Ex 6
设$A,B$是两个二阶实矩阵使得$\dot{X}=AX 与 \dot{Y}=BY$ 拓扑共轭，设$F$是对应的共轭映射。进一步假设$F$是微分同胚，即$F,F^{-1}$均为光滑映射，证明$A$与$B$相似。

### 解答
设 $\dot{X} = AX$ 和 $\dot{Y} = BY$ 拓扑共轭，且存在微分同胚 $F$ 使得 $F \circ \phi_t = \psi_t \circ F$，其中 $\phi_t(X) = e^{At} X$ 和 $\psi_t(Y) = e^{Bt} Y$ 分别为系统的流。由于 $F$ 是微分同胚，可假设 $F(0) = 0$（否则通过平移调整）。

由拓扑共轭条件，有：
$$
F(e^{At} X) = e^{Bt} F(X)
$$
对任意 $X$ 和 $t$ 成立。对 $t$ 在 $t=0$ 处求导：
$$
\frac{\partial}{\partial t} F(e^{At} X) \bigg|_{t=0} = \frac{\partial}{\partial t} e^{Bt} F(X) \bigg|_{t=0}
$$
左边：
$$
\frac{\partial}{\partial t} F(e^{At} X) \bigg|_{t=0} = DF(e^{At} X) \cdot \frac{\partial}{\partial t} e^{At} X \bigg|_{t=0} = DF(X) \cdot A X
$$
右边：
$$
\frac{\partial}{\partial t} e^{Bt} F(X) \bigg|_{t=0} = B e^{Bt} F(X) \bigg|_{t=0} = B F(X)
$$
因此：
$$
DF(X) \cdot A X = B F(X) \quad \text{对于所有 } X
$$
令 $X=0$，由于 $F(0)=0$，两边均为零。对上述方程在 $X=0$ 处求导：
令 $G(X) = DF(X) \cdot A X$，则 $G(0) = 0$。$G$ 在 $0$ 处的导数为：
$$
DG(0) \cdot Y = D^2 F(0) \cdot (Y, A \cdot 0) + DF(0) \cdot A Y = DF(0) \cdot A Y = L A Y
$$
其中 $L = DF(0)$ 为 $F$ 在 $0$ 处的导数，且 $L$ 可逆（因 $F$ 是微分同胚）。右边 $B F(X)$ 在 $0$ 处的导数为：
$$
B DF(0) \cdot Y = B L Y
$$
因此：
$$
L A Y = B L Y \quad \text{对于所有 } Y
$$
即 $L A = B L$，或 $B = L A L^{-1}$。故 $A$ 与 $B$ 相似。

## Ex 7
证明如下三个系统互不拓扑共轭：

$$\dot{X}=\begin{bmatrix}1&\\ &1\end{bmatrix}X;\ \dot{Y}=\begin{bmatrix}-1&\\ &-1\end{bmatrix}Y;\ \dot{Z}=\begin{bmatrix}1&\\ &-1\end{bmatrix}Z$$

### 解答
首先计算每个系统的流。

- **系统1**：$\dot{X} = A X$，其中 $A = \begin{bmatrix} 1 & 0 \\ 0 & 1 \end{bmatrix}$。  
  解为 $X(t) = e^{At} X(0)$，其中 $e^{At} = \begin{bmatrix} e^t & 0 \\ 0 & e^t \end{bmatrix}$。  
  流为 $\phi_t(X) = \begin{bmatrix} e^t x_1 \\ e^t x_2 \end{bmatrix}$，其中 $X = (x_1, x_2)^T$。

- **系统2**：$\dot{Y} = B Y$，其中 $B = \begin{bmatrix} -1 & 0 \\ 0 & -1 \end{bmatrix}$。  
  解为 $Y(t) = e^{Bt} Y(0)$，其中 $e^{Bt} = \begin{bmatrix} e^{-t} & 0 \\ 0 & e^{-t} \end{bmatrix}$。  
  流为 $\psi_t(Y) = \begin{bmatrix} e^{-t} y_1 \\ e^{-t} y_2 \end{bmatrix}$，其中 $Y = (y_1, y_2)^T$。

- **系统3**：$\dot{Z} = C Z$，其中 $C = \begin{bmatrix} 1 & 0 \\ 0 & -1 \end{bmatrix}$。  
  解为 $Z(t) = e^{Ct} Z(0)$，其中 $e^{Ct} = \begin{bmatrix} e^t & 0 \\ 0 & e^{-t} \end{bmatrix}$。  
  流为 $\chi_t(Z) = \begin{bmatrix} e^t z_1 \\ e^{-t} z_2 \end{bmatrix}$，其中 $Z = (z_1, z_2)^T$。

假设存在同胚 $h: \mathbb{R}^2 \to \mathbb{R}^2$ 使得 $h \circ \phi_t = \psi_t \circ h$ 对所有 $t$ 成立。  
由于原点是不动点（即 $\phi_t(0) = 0$ 和 $\psi_t(0) = 0$)，有 $h(0) = 0$。  
考虑任意点 $X \neq 0$。在系统1中，当 $t \to -\infty$ 时，$\phi_t(X) = (e^t x_1, e^t x_2) \to 0$，因此 $h(\phi_t(X)) \to h(0) = 0$。  
但由拓扑共轭条件，$h(\phi_t(X)) = \psi_t(h(X))$。令 $Y = h(X)$，则 $\psi_t(Y) = (e^{-t} y_1, e^{-t} y_2)$。当 $t \to -\infty$ 时，$e^{-t} \to \infty$，因此如果 $Y \neq 0$，则 $\psi_t(Y) \to \infty$（在范数意义上），这与 $h(\phi_t(X)) \to 0$ 矛盾。  
因此，必须有 $h(X) = 0$ 对于所有 $X \neq 0$，但 $h$ 是同胚，必须为双射，这与 $h(0) = 0$ 矛盾（因为 $X \neq 0$ 时 $h(X) = 0$ 则 $h$ 不是单射）。  
故系统1和系统2不拓扑共轭。


假设存在同胚 $h: \mathbb{R}^2 \to \mathbb{R}^2$ 使得 $h \circ \phi_t = \chi_t \circ h$ 对所有 $t$ 成立。  
同样地，有 $h(0) = 0$。  
在系统1中，所有轨迹（除原点外）是通过原点的直线，即对于每个方向 $\theta$，集合 $L_\theta = \{ (r \cos \theta, r \sin \theta) : r \in \mathbb{R} \}$ 是一条轨迹。这些直线有无数条。  
在系统3中，通过原点的轨迹只有两条：$z_1$-轴（即 $z_2 = 0$) 和 $z_2$-轴（即 $z_1 = 0$)。  
由于 $h$ 是同胚，它必须将系统1中通过原点的轨迹映射到系统3中通过原点的轨迹上。但系统1中有无数条通过原点的直线，而系统3中只有两条，这不可能通过连续双射实现（因为通过原点的直线集合在 $\mathbb{R}^2$ 中形成实射影线，是连通的紧致空间，而两条直线是离散的，无法同胚）。  
因此，系统1和系统3不拓扑共轭。


假设存在同胚 $h: \mathbb{R}^2 \to \mathbb{R}^2$ 使得 $h \circ \psi_t = \chi_t \circ h$ 对所有 $t$ 成立。  
有 $h(0) = 0$。  
在系统2中，所有轨迹当 $t \to \infty$ 时收敛到原点，即对于任意 $Y \neq 0$，$\psi_t(Y) \to 0$ 当 $t \to \infty$。因此，$h(\psi_t(Y)) \to h(0) = 0$。  
由拓扑共轭条件，$h(\psi_t(Y)) = \chi_t(h(Y))$，所以 $\chi_t(h(Y)) \to 0$ 当 $t \to \infty$。  
在系统3中，$\chi_t(Z) \to 0$ 当 $t \to \infty$ 仅当 $Z$ 在稳定流形上，即 $z_1 = 0$。因此，对于所有 $Y$，必须有 $h(Y) \in \{ (0, z_2) : z_2 \in \mathbb{R} \}$，即 $h$ 将整个 $\mathbb{R}^2$ 映射到 $z_1$-轴上。但 $h$ 是同胚，必须是满射，而 $z_1$-轴是 $\mathbb{R}$ 的子集，与 $\mathbb{R}^2$ 不同胚，矛盾。  
故系统2和系统3不拓扑共轭。


## Ex 8
我们用$\overline{\mathbb{R}}=\left\{\infty\right\}\cup$ R表示R的一点紧化。我们已知初值问题:$\dot{x}=$ $x^{2};x(0)=z$ 的解为$(z\neq0)$ 

$$\phi(t,z)=\frac{1}{z^{-1}-t}.$$

定义一个函数$\Phi: \mathbb{R}\times\overline{{\mathbb{R}}}\rightarrow\overline{{\mathbb{R}}}$ 如下：

$$\Phi(t,z):=\begin{cases}0& 若 z=0\\-t^{-1},& 若 z=\infty\\\infty,& 若 z=t^{-1}\\\phi(t,z),& 其它 \end{cases}$$

定义$\Phi_{t}:\overline{\mathbb{R}}\rightarrow\overline{\mathbb{R}}$ 为$\Phi_{t}(z):=\Phi(t,z)$ 

证明$\left\{\Phi_{t}:t\in\mathbb{R}\right\}$ 是R上的一个流。

### 解答

#### 验证恒等性:
需证 $\Phi(0, z) = z$ 对于所有 $z \in \overline{\mathbb{R}}$。
- 若 $z = 0$，则 $\Phi(0, 0) = 0$，成立。
- 若 $z = \infty$，则 $\Phi(0, \infty) = -0^{-1} = -\infty = \infty$，成立。
- 若 $z$ 为有限且 $z \neq 0$，则 $z$ 不属于 $z=0$ 或 $z=\infty$ 或 $z=0^{-1}$（因为 $0^{-1} = \infty$），故属于“其它”情形，$\Phi(0, z) = \phi(0, z) = \frac{1}{z^{-1} - 0} = z$，成立。

因此，恒等性成立。

#### 验证结合性
需证 $\Phi(s + t, z) = \Phi(s, \Phi(t, z))$ 对于所有 $s, t \in \mathbb{R}$ 和 $z \in \overline{\mathbb{R}}$。令 $w = \Phi(t, z)$，则需证 $\Phi(s + t, z) = \Phi(s, w)$。根据 $z$ 的取值分情况讨论。

##### 情况 1: $z = 0$
则 $w = \Phi(t, 0) = 0$，故 $\Phi(s, w) = \Phi(s, 0) = 0$。另一方面，$\Phi(s + t, 0) = 0$。因此相等。

##### 情况 2: $z = \infty$
则 $w = \Phi(t, \infty) = -t^{-1}$。需证 $\Phi(s, -t^{-1}) = -(s + t)^{-1}$。
- 若 $t = 0$，则 $w = -0^{-1} = \infty$，故 $\Phi(s, w) = \Phi(s, \infty) = -s^{-1}$。另一方面，$\Phi(s + t, \infty) = \Phi(s, \infty) = -s^{-1}$，相等。
- 若 $t \neq 0$，则 $w = -t^{-1}$ 为有限数。计算 $\Phi(s, w)$：
  - 若 $w = s^{-1}$，即 $-t^{-1} = s^{-1}$，则 $s = -t$，故 $s + t = 0$，从而 $\Phi(s, w) = \infty$ 且 $\Phi(s + t, \infty) = -(s + t)^{-1} = -\infty = \infty$，相等。
  - 若 $w \neq s^{-1}$，则 $\Phi(s, w) = \phi(s, w) = \frac{1}{w^{-1} - s}$。由于 $w^{-1} = -t$，有 $\phi(s, w) = \frac{1}{-t - s} = -(s + t)^{-1}$。而 $\Phi(s + t, \infty) = -(s + t)^{-1}$，相等。

因此，当 $z = \infty$ 时结合性成立。

##### 情况 3: $z = t^{-1}$（其中 $t \neq 0$，故 $z$ 为有限数）
则 $w = \Phi(t, z) = \infty$。需证 $\Phi(s, w) = \Phi(s + t, z)$。
- $\Phi(s, w) = \Phi(s, \infty) = -s^{-1}$。
- 计算 $\Phi(s + t, z)$：
  - 若 $z = (s + t)^{-1}$，则 $\Phi(s + t, z) = \infty$。但 $z = t^{-1}$，故 $t^{-1} = (s + t)^{-1}$ 意味着 $s = 0$，此时 $\Phi(s, w) = \Phi(0, \infty) = \infty$，相等。
  - 若 $z \neq (s + t)^{-1}$，则 $\Phi(s + t, z) = \phi(s + t, z) = \frac{1}{z^{-1} - (s + t)}$。由于 $z^{-1} = t$，有 $\phi(s + t, z) = \frac{1}{t - (s + t)} = -s^{-1}$，与 $\Phi(s, w) = -s^{-1}$ 相等。

因此，当 $z = t^{-1}$ 时结合性成立。

##### 情况 4: $z$ 为其它情形（即 $z$ 为有限数，$z \neq 0$，且 $z \neq t^{-1}$）
则 $w = \Phi(t, z) = \phi(t, z) = \frac{1}{z^{-1} - t}$。由于 $z \neq t^{-1}$，有 $z^{-1} - t \neq 0$，故 $w$ 为有限数。需证 $\Phi(s, w) = \Phi(s + t, z)$。
- 计算 $\Phi(s, w)$：
  - 若 $w = s^{-1}$，则 $\Phi(s, w) = \infty$。
  - 若 $w \neq s^{-1}$，则 $\Phi(s, w) = \phi(s, w) = \frac{1}{w^{-1} - s}$。
- 计算 $\Phi(s + t, z)$：
  - 若 $z = (s + t)^{-1}$，则 $\Phi(s + t, z) = \infty$。
  - 若 $z \neq (s + t)^{-1}$，则 $\Phi(s + t, z) = \phi(s + t, z) = \frac{1}{z^{-1} - (s + t)}$。

现在，$w^{-1} = z^{-1} - t$，故 $\phi(s, w) = \frac{1}{(z^{-1} - t) - s} = \frac{1}{z^{-1} - (s + t)} = \phi(s + t, z)$。
- 若 $w \neq s^{-1}$，则 $\Phi(s, w) = \phi(s, w) = \phi(s + t, z) = \Phi(s + t, z)$，相等。
- 若 $w = s^{-1}$，则 $\frac{1}{z^{-1} - t} = s^{-1}$，即 $z^{-1} - t = s$，故 $z^{-1} = s + t$，即 $z = (s + t)^{-1}$。此时 $\Phi(s, w) = \infty$ 且 $\Phi(s + t, z) = \infty$，相等。

因此，当 $z$ 为其它情形时结合性成立。

综上，结合性对所有情形成立。

故 $\{\Phi_t : t \in \mathbb{R}\}$ 是 $\overline{\mathbb{R}}$ 上的一个流。
