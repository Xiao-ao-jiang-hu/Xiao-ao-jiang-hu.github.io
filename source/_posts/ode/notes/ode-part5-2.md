---
title: Ch5.2 梯度系统与Hamilton系统
tags:
  - math
  - ode
categories:
  - math
  - ode
excerpt: ODE第五部分
index_img: /img/ode.jpg
banner_img: /img/ode.jpg
abbrlink: eb645d7b
date: 2025-12-13 02:48:23
---
## 梯度系统

### 梯度系统的定义与基本性质

**定义 1.1（梯度系统）**  
设 $D \subseteq \mathbb{R}^n$ 是一个开集，$V: D \to \mathbb{R}$ 是一个连续可微函数（$C^1$ 类）。由势能函数 $V$ 确定的梯度系统是如下的一阶自治微分方程系统：
$$
\dot{x} = -\nabla V(x), \quad x \in D
$$
其中 $\dot{x} = \frac{dx}{dt}$，$\nabla V(x) = \left( \frac{\partial V}{\partial x_1}, \frac{\partial V}{\partial x_2}, \ldots, \frac{\partial V}{\partial x_n} \right)^\top$ 是 $V$ 的梯度向量。负号表示向量场指向 $V$ 下降的方向。

**注记 1.1**  
1. 梯度系统中的向量场是势能函数梯度的负值，因此梯度系统也称为**最速下降系统**，因为轨线在每一点处沿着 $V$ 下降最快的方向运动。
2. 若去掉负号，即 $\dot{x} = \nabla V(x)$，则称为**最速上升系统**，轨线沿 $V$ 增加最快的方向运动。通常考虑带负号的形式，这与力学中的耗散系统一致。
3. 梯度系统是自治系统，因为右端不显式依赖于时间 $t$。

**定义 1.2（平衡点与临界点）**  
梯度系统的平衡点满足 $\nabla V(x^*) = 0$，即 $x^*$ 是势能函数 $V$ 的**临界点**（驻点）。临界点分为三类：
- **局部极小点**：$V$ 在 $x^*$ 处取局部极小值。
- **局部极大点**：$V$ 在 $x^*$ 处取局部极大值。
- **鞍点**：$V$ 在 $x^*$ 处不是极值点，但在该点梯度为零。

**例 1.1（一维梯度系统）**  
考虑一维势能函数 $V(x) = \frac{1}{2}x^2$，梯度系统为 $\dot{x} = -V'(x) = -x$。平衡点为 $x^*=0$，它是 $V$ 的极小点。解为 $x(t) = x_0 e^{-t}$，从任意初始条件指数收敛到平衡点。

**例 1.2（二维梯度系统）**  
考虑 $V(x,y) = \frac{1}{2}(x^2 + y^2)$，则 $\nabla V = (x, y)^\top$，梯度系统为：
$$
\begin{cases}
\dot{x} = -x \\
\dot{y} = -y
\end{cases}
$$
平衡点为原点 $(0,0)$，是 $V$ 的极小点。解为 $x(t)=x_0 e^{-t}, y(t)=y_0 e^{-t}$，所有轨线沿径向趋于原点。

**性质 1.1（势能函数沿轨线的变化）**  
设 $x(t)$ 是梯度系统 $\dot{x} = -\nabla V(x)$ 的一个解，则势能函数 $V$ 沿该解随时间严格递减（除非在平衡点上）：
$$
\frac{d}{dt} V(x(t)) = -\|\nabla V(x(t))\|^2 \le 0
$$
且等号成立当且仅当 $\nabla V(x(t)) = 0$，即 $x(t)$ 是平衡点。

**证明**  
由链式法则：
$$
\frac{d}{dt} V(x(t)) = \nabla V(x(t)) \cdot \dot{x}(t) = \nabla V(x(t)) \cdot (-\nabla V(x(t))) = -\|\nabla V(x(t))\|^2
$$
由于范数非负，导数非正。当且仅当 $\nabla V(x(t)) = 0$ 时导数为零。证毕。

**注记 1.2**  
性质 1.1 表明 $V$ 是梯度系统的 Lyapunov 函数。实际上，$V$ 沿轨线递减，因此梯度系统总是耗散的，能量（势能）不断减少直至达到平衡点。

### 梯度系统的动力学分析

**定理 1.1（梯度系统的稳定性）**  
设 $x^*$ 是梯度系统 $\dot{x} = -\nabla V(x)$ 的一个平衡点。
1. 若 $x^*$ 是 $V$ 的严格局部极小点，则 $x^*$ 是渐近稳定的。
2. 若 $x^*$ 是 $V$ 的严格局部极大点，则 $x^*$ 是不稳定的。
3. 若 $x^*$ 是 $V$ 的鞍点，则 $x^*$ 通常是不稳定的。

**证明**  
1. 当 $x^*$ 是严格局部极小点时，存在邻域 $U$ 使得 $V(x) > V(x^*)$ 对 $x \in U \setminus \{x^*\}$。定义 $W(x) = V(x) - V(x^*)$，则 $W(x)$ 在 $U$ 上正定，且 $\dot{W}(x) = -\|\nabla V(x)\|^2 \le 0$。由 Lyapunov 稳定性定理，$x^*$ 稳定。进一步，若 $\dot{W}(x)=0$ 仅当 $\nabla V(x)=0$，而在 $U$ 内平衡点只有 $x^*$，则应用 LaSalle 不变原理可知 $x^*$ 渐近稳定。
2. 当 $x^*$ 是严格局部极大点时，考虑 $W(x) = V(x^*) - V(x)$，则 $W(x)$ 在 $x^*$ 附近正定，且 $\dot{W}(x) = \|\nabla V(x)\|^2 \ge 0$，$\dot{W}(x)=0$ 仅当 $\nabla V(x)=0$。由 Chetaev 不稳定性定理，$x^*$ 不稳定。
3. 鞍点情形通常不稳定，证明需具体分析。证毕。

**定理 1.2（梯度系统无周期解）**  
梯度系统 $\dot{x} = -\nabla V(x)$ 不存在非平凡的周期解（即非常数的闭轨线）。

**证明**  
假设存在周期为 $T>0$ 的非平凡周期解 $x(t)$，即 $x(t+T)=x(t)$ 对所有 $t$。考虑势能函数沿该周期解在一个周期内的变化：
$$
\Delta V = V(x(T)) - V(x(0)) = \int_0^T \frac{d}{dt} V(x(t)) \, dt = -\int_0^T \|\nabla V(x(t))\|^2 \, dt \le 0
$$
由于 $x(t)$ 是周期解，$x(T)=x(0)$，故 $\Delta V = 0$，从而 $\int_0^T \|\nabla V(x(t))\|^2 \, dt = 0$。这意味着 $\|\nabla V(x(t))\| = 0$ 对几乎所有 $t \in [0,T]$ 成立，因此 $\nabla V(x(t)) \equiv 0$，即 $x(t)$ 恒为平衡点，与非常数解矛盾。证毕。

**定理 1.3（梯度系统的极限行为）**  
设 $x(t)$ 是梯度系统 $\dot{x} = -\nabla V(x)$ 的一个解，定义在 $[0,\infty)$ 上且保持在紧集 $K \subset D$ 内。则当 $t \to \infty$ 时，$x(t)$ 趋于平衡点集合 $E = \{ x \in D : \nabla V(x) = 0 \}$。更精确地，$\omega$ 极限集 $\omega(x)$ 包含在 $E$ 中。

**证明**  
由性质 1.1，$V(x(t))$ 单调递减且有下界（在紧集 $K$ 上 $V$ 有最小值），故 $V(x(t))$ 收敛到某值 $c$。令 $\omega(x)$ 为解的正向极限集，由紧性 $\omega(x)$ 非空。对任意 $y \in \omega(x)$，存在序列 $t_n \to \infty$ 使 $x(t_n) \to y$。由 $V$ 的连续性，$V(y) = \lim_{n \to \infty} V(x(t_n)) = c$。考虑过 $y$ 的解 $z(t)$（初值 $z(0)=y$），由解对初值连续依赖性，对固定 $t$，$x(t_n + t) \to z(t)$，且 $V(x(t_n + t)) \to V(z(t))$。但 $V(x(t))$ 收敛到 $c$，故 $V(z(t)) \equiv c$。因此 $\frac{d}{dt} V(z(t)) = -\|\nabla V(z(t))\|^2 = 0$，从而 $\nabla V(z(t)) \equiv 0$，即 $z(t)$ 是平衡点，特别地 $\nabla V(y)=0$。所以 $\omega(x) \subseteq E$。证毕。

### 梯度系统的线性化与特征值

**定理 1.4（梯度系统的线性化矩阵）**  
设 $x^*$ 是梯度系统 $\dot{x} = -\nabla V(x)$ 的平衡点，且 $V$ 是 $C^2$ 函数。则在 $x^*$ 处的线性化系统为 $\dot{y} = A y$，其中 $A = -D^2V(x^*)$，而 $D^2V(x^*)$ 是 $V$ 在 $x^*$ 处的 Hessian 矩阵，即 $(D^2V)_{ij} = \frac{\partial^2 V}{\partial x_i \partial x_j}(x^*)$。

**证明**  
梯度系统的向量场为 $f(x) = -\nabla V(x)$。其 Jacobian 矩阵在 $x^*$ 处为：
$$
Df(x^*) = -D(\nabla V)(x^*) = -D^2V(x^*)
$$
因为梯度向量的 Jacobian 就是 Hessian 矩阵。因此线性化系统为 $\dot{y} = Df(x^*) y = -D^2V(x^*) y$。证毕。

**注记 1.3**  
Hessian 矩阵 $D^2V(x^*)$ 是对称矩阵（如果 $V$ 是 $C^2$ 函数，混合偏导数连续则相等）。因此线性化矩阵 $A = -D^2V(x^*)$ 也是对称矩阵。对称矩阵的特征值均为实数，且可以正交对角化。

**推论 1.1（梯度系统线性化的特征值）**  
梯度系统在平衡点 $x^*$ 处的线性化矩阵的特征值均为实数。进一步：
- 若 $x^*$ 是 $V$ 的严格局部极小点，则 $D^2V(x^*)$ 正定，其特征值全为正，故 $A$ 的特征值全为负，平衡点渐近稳定。
- 若 $x^*$ 是 $V$ 的严格局部极大点，则 $D^2V(x^*)$ 负定，其特征值全为负，故 $A$ 的特征值全为正，平衡点不稳定。
- 若 $x^*$ 是鞍点，则 $D^2V(x^*)$ 有正有负的特征值，从而 $A$ 的特征值也有正有负，平衡点通常为鞍点，不稳定。

**例 1.3（二维梯度系统的线性化）**  
考虑 $V(x,y) = \frac{1}{2}(x^2 - y^2)$，则梯度系统为：
$$
\begin{cases}
\dot{x} = -x \\
\dot{y} = y
\end{cases}
$$
平衡点为 $(0,0)$。Hessian 矩阵为：
$$
D^2V(0,0) = \begin{pmatrix} 1 & 0 \\ 0 & -1 \end{pmatrix}
$$
特征值为 $1$ 和 $-1$。线性化矩阵 $A = -D^2V = \begin{pmatrix} -1 & 0 \\ 0 & 1 \end{pmatrix}$，特征值为 $-1$ 和 $1$，因此原点是不稳定鞍点。

### 梯度系统的例子

**例 1.4（双势阱系统）**  
考虑一维势能 $V(x) = \frac{1}{4}x^4 - \frac{1}{2}x^2$，梯度系统为 $\dot{x} = -V'(x) = -x^3 + x = x(1-x^2)$。平衡点满足 $x(1-x^2)=0$，得 $x^*=0, \pm 1$。计算二阶导数 $V''(x) = 3x^2-1$。在 $x=0$ 处，$V''(0)=-1<0$，故 $x=0$ 是 $V$ 的局部极大点，不稳定。在 $x=\pm 1$ 处，$V''(\pm 1)=2>0$，故 $x=\pm 1$ 是 $V$ 的局部极小点，渐近稳定。相图显示：从 $x>1$ 出发的解趋于 $1$，从 $0<x<1$ 出发的解也趋于 $1$，从 $-1<x<0$ 出发的解趋于 $-1$，从 $x<-1$ 出发的解趋于 $-1$。

**例 1.5（Rosenbrock函数）**  
在优化中常用的 Rosenbrock 函数 $V(x,y) = (1-x)^2 + 100(y-x^2)^2$，梯度系统为：
$$
\begin{cases}
\dot{x} = -2(1-x) + 400x(y-x^2) \\
\dot{y} = -200(y-x^2)
\end{cases}
$$
唯一平衡点为 $(1,1)$，是全局极小点。该势能函数具有一个狭窄弯曲的山谷，梯度下降的轨线可能振荡收敛。

**例 1.6（周期势场）**  
考虑 $V(x) = \cos x$，梯度系统 $\dot{x} = \sin x$。平衡点满足 $\sin x=0$，即 $x = k\pi, k \in \mathbb{Z}$。计算 $V''(x) = -\cos x$。当 $k$ 为偶数时，$V''(2m\pi) = -\cos(2m\pi) = -1 < 0$，故平衡点是 $V$ 的极大点，不稳定。当 $k$ 为奇数时，$V''((2m+1)\pi) = -\cos((2m+1)\pi) = 1 > 0$，平衡点是极小点，稳定。注意由于 $V$ 是周期函数，梯度系统的轨线最终趋于某个极小点，但不同区域可能趋于不同的极小点。

## Hamilton系统

### Hamilton系统的定义与基本结构

**定义 2.1（Hamilton系统）**  
设 $D \subseteq \mathbb{R}^{2n}$ 是一个开集，$H: D \to \mathbb{R}$ 是一个连续可微函数（$C^1$ 类）。由 Hamilton 函数 $H$ 确定的 Hamilton 系统是如下的一阶自治微分方程系统：
$$
\begin{cases}
\dot{q}_i = \dfrac{\partial H}{\partial p_i}, \quad i=1,\ldots,n \\
\dot{p}_i = -\dfrac{\partial H}{\partial q_i}, \quad i=1,\ldots,n
\end{cases}
$$
其中 $q = (q_1,\ldots,q_n)^\top$ 称为**广义坐标**，$p = (p_1,\ldots,p_n)^\top$ 称为**广义动量**，合起来记 $z = (q,p) \in \mathbb{R}^{2n}$。函数 $H(q,p)$ 称为 **Hamilton 函数** 或 **Hamilton 量**。

**定义 2.2（辛矩阵与辛结构）**  
定义 $2n \times 2n$ 矩阵：
$$
J = \begin{pmatrix} 0_n & I_n \\ -I_n & 0_n \end{pmatrix}
$$
其中 $0_n$ 是 $n \times n$ 零矩阵，$I_n$ 是 $n \times n$ 单位矩阵。矩阵 $J$ 称为**辛矩阵**，它满足 $J^\top = -J$ 且 $J^{-1} = -J = J^\top$。利用 $J$，Hamilton 系统可写为紧凑形式：
$$
\dot{z} = J \nabla H(z)
$$
其中 $\nabla H(z) = \left( \frac{\partial H}{\partial q_1}, \ldots, \frac{\partial H}{\partial q_n}, \frac{\partial H}{\partial p_1}, \ldots, \frac{\partial H}{\partial p_n} \right)^\top$ 是 $H$ 的梯度。

**注记 2.1**  
1. Hamilton 系统来源于经典力学，其中 $H$ 通常表示系统的总能量（动能+势能）。在保守力学系统中，能量守恒，因此 Hamilton 系统描述的是保守系统的演化。
2. 与梯度系统不同，Hamilton 系统的向量场不是梯度场，而是由 $J$ 矩阵与梯度相乘得到，这种结构称为**辛结构**。

**例 2.1（一维谐振子）**  
一维谐振子的 Hamilton 函数为 $H(q,p) = \frac{p^2}{2m} + \frac{1}{2}k q^2$，其中 $m$ 为质量，$k$ 为弹性系数。为简化，取 $m=1, k=1$，则 $H(q,p) = \frac{1}{2}(p^2 + q^2)$。Hamilton 方程为：
$$
\begin{cases}
\dot{q} = \frac{\partial H}{\partial p} = p \\
\dot{p} = -\frac{\partial H}{\partial q} = -q
\end{cases}
$$
即 $\ddot{q} = \dot{p} = -q$，简谐振动方程。解为 $q(t)=A\cos(t+\phi), p(t)=-A\sin(t+\phi)$，轨线是相平面上的椭圆（圆）。

**例 2.2（数学摆）**  
数学摆的 Hamilton 函数为 $H(q,p) = \frac{p^2}{2} + (1-\cos q)$，其中 $q=\theta$ 为摆角，$p=\dot{\theta}$ 为角速度。Hamilton 方程为：
$$
\begin{cases}
\dot{q} = p \\
\dot{p} = -\sin q
\end{cases}
$$
平衡点为 $(k\pi, 0)$，$k \in \mathbb{Z}$。当 $k$ 为偶数时，对应摆的最低点；当 $k$ 为奇数时，对应摆的最高点。

### Hamilton 系统的特殊性质

**定理 2.1（能量守恒）**  
设 $z(t) = (q(t), p(t))$ 是 Hamilton 系统 $\dot{z} = J \nabla H(z)$ 的一个解，则 Hamilton 函数 $H$ 沿该解为常数：
$$
\frac{d}{dt} H(z(t)) = 0
$$
即 $H(z(t)) \equiv H(z(0))$。

**证明**  
由链式法则：
$$
\frac{d}{dt} H(z(t)) = \nabla H(z(t)) \cdot \dot{z}(t) = \nabla H(z(t)) \cdot (J \nabla H(z(t))) 
$$
因为 $J$ 是反对称矩阵，对任意向量 $v$，有 $v^\top J v = 0$。故 $\nabla H(z(t)) \cdot (J \nabla H(z(t))) = 0$。证毕。

**注记 2.2**  
能量守恒表明 Hamilton 系统的解被限制在等能量曲面 $H(z) = E$（常数）上运动。这大大约束了系统的动力学行为。

**定义 2.3（Poisson括号）**  
设 $F, G: D \to \mathbb{R}$ 是 $C^1$ 函数，定义它们的 Poisson 括号为：
$$
\{F, G\} = \sum_{i=1}^n \left( \frac{\partial F}{\partial q_i} \frac{\partial G}{\partial p_i} - \frac{\partial F}{\partial p_i} \frac{\partial G}{\partial q_i} \right) = (\nabla F)^\top J (\nabla G)
$$
其中 $J$ 是辛矩阵。

**性质 2.1（Poisson括号的性质）**  
对任意 $C^1$ 函数 $F, G, H$ 和常数 $c$，有：
1. **双线性**：$\{cF + G, H\} = c\{F, H\} + \{G, H\}$，$\{F, cG + H\} = c\{F, G\} + \{F, H\}$。
2. **反对称性**：$\{F, G\} = -\{G, F\}$，特别地 $\{F, F\} = 0$。
3. **Leibniz法则**：$\{F, GH\} = \{F, G\}H + G\{F, H\}$。
4. **Jacobi恒等式**：$\{F, \{G, H\}\} + \{G, \{H, F\}\} + \{H, \{F, G\}\} = 0$。

**证明**  
1-3 由定义直接可得。4 Jacobi 恒等式的证明需要计算偏导数，可利用括号的定义和二阶偏导数的对称性。证略。

**定理 2.2（运动方程与 Poisson 括号）**  
设 $F(z)$ 是任意 $C^1$ 函数，$z(t)$ 是 Hamilton 系统的解，则 $F$ 沿解的变化率为：
$$
\frac{d}{dt} F(z(t)) = \{F, H\}(z(t))
$$

**证明**  
$$
\frac{d}{dt} F(z(t)) = \nabla F(z(t)) \cdot \dot{z}(t) = \nabla F(z(t)) \cdot (J \nabla H(z(t))) = \{F, H\}(z(t))
$$
证毕。

**推论 2.1（守恒量的刻画）**  
函数 $F$ 是 Hamilton 系统的守恒量（首次积分）当且仅当 $\{F, H\} = 0$。

**定义 2.4（可积系统）**  
Hamilton 系统称为 **Liouville 可积的**，如果存在 $n$ 个函数 $F_1, F_2, \ldots, F_n$ 满足：
1. **独立性**：在几乎处处，梯度 $\nabla F_1, \ldots, \nabla F_n$ 线性无关。
2. **对合性**：$\{F_i, F_j\} = 0$ 对所有 $i,j$。
3. **守恒性**：每个 $F_i$ 都是守恒量，即 $\{F_i, H\} = 0$，且通常取 $F_1 = H$。

**定理 2.3（Liouville-Arnold 定理，陈述）**  
设 Hamilton 系统是 Liouville 可积的，且水平集 $M_f = \{z: F_i(z)=f_i, i=1,\ldots,n\}$ 是紧的且连通。则 $M_f$ 微分同胚于 $n$ 维环面 $\mathbb{T}^n$，且在 $M_f$ 上存在作用量-角变量 $(I, \theta)$，使得 Hamilton 方程化为：
$$
\dot{I}_i = 0, \quad \dot{\theta}_i = \omega_i(I), \quad i=1,\ldots,n
$$
因此运动是拟周期的。

**例 2.3（谐振子是可积系统）**  
一维谐振子 $H=\frac{1}{2}(p^2+q^2)$ 本身就是一个守恒量，且只有一个自由度 $n=1$，故可积。水平集 $H=E$ 是椭圆（圆），同胚于圆周 $\mathbb{T}^1$。作用量 $I = E$，角频率 $\omega=1$。

**例 2.4（中心力场问题）**  
在平面中心力场中，Hamilton 函数 $H = \frac{1}{2}(p_r^2 + \frac{p_\theta^2}{r^2}) + V(r)$。守恒量有能量 $H$ 和角动量 $p_\theta$，且 $\{H, p_\theta\}=0$，故对于两个自由度的系统，有两个独立对合的守恒量，系统可积。

### Hamilton 系统的平衡点与稳定性

**定义 2.5（平衡点）**  
Hamilton 系统的平衡点满足 $\dot{z}=0$，即 $J \nabla H(z^*) = 0$。由于 $J$ 可逆，这等价于 $\nabla H(z^*) = 0$。因此平衡点是 Hamilton 函数的临界点。

**定理 2.4（线性 Hamilton 系统）**  
设 $H(z) = \frac{1}{2} z^\top S z$ 是二次型，其中 $S$ 是 $2n \times 2n$ 对称矩阵。则 Hamilton 系统为线性系统：
$$
\dot{z} = J S z
$$
记 $A = J S$。矩阵 $A$ 满足：若 $\lambda$ 是 $A$ 的特征值，则 $-\lambda, \bar{\lambda}, -\bar{\lambda}$ 也是特征值。特别地，特征值关于实轴和虚轴对称。

**证明**  
由 $S$ 对称，$J$ 反对称，考虑 $A = J S$。假设 $Av = \lambda v$，取复共轭得 $A \bar{v} = \bar{\lambda} \bar{v}$。又因为 $J^{-1} = -J$，考虑 $A^\top = S^\top J^\top = S(-J) = -S J$。由于 $S$ 对称，$A^\top = -S J$。计算 $A^\top (J v) = -S J (J v) = -S (-I) v = S v = J^{-1} A v = J^{-1} \lambda v = -\lambda J v$，故 $J v$ 是 $A^\top$ 属于特征值 $-\lambda$ 的特征向量。由于 $A$ 和 $A^\top$ 特征值相同，所以 $-\lambda$ 也是 $A$ 的特征值。综合得特征值成四元组出现。证毕。

**定理 2.5（非线性平衡点的稳定性：Dirichlet 定理）**  
设 $z^*$ 是 Hamilton 系统的一个平衡点，且 $H$ 在 $z^*$ 处有严格的局部极小值（或极大值），则 $z^*$ 是稳定的（Lyapunov 稳定）。

**证明**  
若 $H$ 在 $z^*$ 处有严格局部极小值，则存在邻域 $U$ 使得 $H(z) > H(z^*)$ 对 $z \in U \setminus \{z^*\}$。定义 $W(z) = H(z) - H(z^*)$，则 $W$ 在 $U$ 上正定。由于 $\frac{d}{dt} W(z(t)) = \{H, H\} = 0$，故 $W$ 沿解为常数。因此，若初值 $z(0)$ 足够接近 $z^*$，则 $W(z(0))$ 很小，且 $W(z(t)) = W(z(0))$ 保持很小，从而 $z(t)$ 保持在 $U$ 内，即稳定。注意这里不是渐近稳定，因为 $H$ 守恒，解不会趋于平衡点除非初值就是平衡点。证毕。

**注记 2.3**  
Dirichlet 定理表明，Hamilton 函数的局部极值点给出稳定的平衡点。但反之不成立：稳定的平衡点未必是极值点（例如线性中心，特征值纯虚数且 Jordan 块为一阶时稳定，但 $H$ 可能是鞍点）。

**例 2.5（非线性摆的稳定性）**  
数学摆 $H = \frac{p^2}{2} + (1-\cos q)$。平衡点 $(0,0)$ 对应 $H$ 的极小点（$H=0$），故稳定；平衡点 $(\pi,0)$ 对应 $H$ 的局部极大点（在 $q=\pi$ 附近，$\cos q \approx -1 + \frac{1}{2}(q-\pi)^2$，故 $H \approx \frac{p^2}{2} - \frac{1}{2}(q-\pi)^2 + 2$，是鞍点），实际上不稳定。

### Hamilton 系统的几何性质

**定理 2.6（Liouville 定理：相体积守恒）**  
Hamilton 系统的流保持相空间的体积。更精确地，设 $\Phi_t$ 是 Hamilton 系统的流，即 $\Phi_t(z_0)$ 是初值为 $z_0$ 的解。则对任意区域 $\Omega \subset \mathbb{R}^{2n}$，有：
$$
\text{vol}(\Phi_t(\Omega)) = \text{vol}(\Omega)
$$
其中体积是通常的 Lebesgue 体积。

**证明**  
流的体积变化由向量场的散度决定。对于自治系统 $\dot{z} = f(z)$，流的体积变化率为 $\frac{d}{dt} \text{vol}(\Phi_t(\Omega)) = \int_{\Phi_t(\Omega)} \nabla \cdot f \, dz$。对 Hamilton 系统，$f(z) = J \nabla H(z)$，计算散度：
$$
\nabla \cdot f = \sum_{i=1}^{2n} \frac{\partial f_i}{\partial z_i} = \text{trace}(Df) = \text{trace}(J D^2 H(z))
$$
由于 $J$ 反对称，$D^2 H$ 对称，矩阵乘积 $J D^2 H$ 的迹为零（因为反对称矩阵与对称矩阵乘积的迹为零）。故 $\nabla \cdot f = 0$，从而体积不变。证毕。

**定理 2.7（辛结构保持）**  
Hamilton 系统的流 $\Phi_t$ 是辛变换，即满足：
$$
(D\Phi_t)^\top J (D\Phi_t) = J
$$
其中 $D\Phi_t$ 是流关于初值的导数矩阵。

**证明思路**  
记 $A(t) = D\Phi_t(z_0)$，则 $A(t)$ 满足变分方程：
$$
\dot{A}(t) = Df(\Phi_t(z_0)) A(t) = J D^2 H(\Phi_t(z_0)) A(t)
$$
定义 $B(t) = A(t)^\top J A(t)$，计算导数：
$$
\dot{B}(t) = \dot{A}^\top J A + A^\top J \dot{A} = A^\top (D^2 H)^\top J^\top J A + A^\top J J D^2 H A
$$
利用 $J^\top = -J$，$J^2 = -I$，化简得 $\dot{B}(t) = 0$，故 $B(t)$ 常数，即 $A(t)^\top J A(t) = J$ 对所有 $t$ 成立。证毕。

**推论 2.2（Hamilton 系统无吸引子）**  
由于 Hamilton 系统保持相体积，不存在渐近稳定的平衡点或极限环，因为吸引子会导致体积收缩。因此 Hamilton 系统中常见的长期行为是周期运动或拟周期运动，或者混沌（但无吸引子，混沌发生在不变集上）。

### Hamilton 系统的例子

**例 2.6（耦合谐振子）**  
考虑两个耦合的一维谐振子，Hamilton 函数为：
$$
H(q_1,q_2,p_1,p_2) = \frac{1}{2}(p_1^2 + p_2^2) + \frac{1}{2}(\omega_1^2 q_1^2 + \omega_2^2 q_2^2) + \frac{\epsilon}{2}(q_1 - q_2)^2
$$
其中 $\epsilon$ 为耦合强度。方程可解，系统可积（有四个独立守恒量？实际上能量和动量？）。当 $\omega_1 = \omega_2$ 时，系统有对称性，出现简并。

**例 2.7（Kepler 问题）**  
平面 Kepler 问题（二体问题在质心系）的 Hamilton 函数为：
$$
H = \frac{1}{2}\left(p_r^2 + \frac{p_\theta^2}{r^2}\right) - \frac{k}{r}
$$
其中 $(r,\theta)$ 为极坐标。守恒量有能量 $H$ 和角动量 $p_\theta$，且 $\{H, p_\theta\}=0$，故可积。轨线为圆锥曲线。

**例 2.8（Henon-Heiles 系统）**  
Henon-Heiles Hamiltonian 是一个著名的不可积系统，用于研究混沌：
$$
H = \frac{1}{2}(p_x^2 + p_y^2) + \frac{1}{2}(x^2 + y^2) + x^2 y - \frac{1}{3} y^3
$$
当能量较低时，运动似乎规则；当能量超过某个阈值时，出现混沌运动。

## 梯度系统与 Hamilton 系统的比较

| 性质           | 梯度系统                                      | Hamilton 系统                                                |
| -------------- | --------------------------------------------- | ------------------------------------------------------------ |
| **向量场形式** | $\dot{x} = -\nabla V(x)$                      | $\dot{z} = J \nabla H(z)$                                    |
| **能量变化**   | $\frac{dV}{dt} = -\|\nabla V\|^2 \le 0$，耗散 | $\frac{dH}{dt} = 0$，保守                                    |
| **平衡点条件** | $\nabla V(x^*) = 0$（临界点）                 | $\nabla H(z^*) = 0$（临界点）                                |
| **线性化矩阵** | $A = -D^2V(x^*)$，对称                        | $A = J D^2H(z^*)$，满足特殊结构                              |
| **特征值**     | 全是实数                                      | 成对出现：$\lambda, -\lambda, \bar{\lambda}, -\bar{\lambda}$ |
| **周期解**     | 不存在非平凡周期解                            | 常见周期解，特别是在可积系统中                               |
| **相体积**     | 通常收缩（耗散）                              | 保持（Liouville 定理）                                       |
| **典型行为**   | 趋于平衡点                                    | 周期、拟周期或混沌运动                                       |

### 混合系统：带阻尼的 Hamilton 系统

在实际物理系统中，经常同时包含保守力和耗散力。例如，带阻尼的谐振子：
$$
\ddot{q} + \gamma \dot{q} + \omega^2 q = 0
$$
可写为：
$$
\begin{cases}
\dot{q} = p \\
\dot{p} = -\omega^2 q - \gamma p
\end{cases}
$$
这不是纯 Hamilton 系统，因为第二个方程包含耗散项 $-\gamma p$。可以分解为：
$$
\dot{z} = J \nabla H(z) + R(z)
$$
其中 $H = \frac{1}{2}(p^2 + \omega^2 q^2)$，$R(z) = (0, -\gamma p)^\top$。此时能量变化：
$$
\frac{dH}{dt} = \nabla H \cdot \dot{z} = \nabla H \cdot (J \nabla H + R) = \nabla H \cdot R = -\gamma p^2 \le 0
$$
因此能量耗散，系统最终趋于平衡点。