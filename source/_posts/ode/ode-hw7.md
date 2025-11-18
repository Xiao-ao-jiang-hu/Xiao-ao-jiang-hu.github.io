---
title: ODE第七次作业
tags:
  - math
  - ode
categories:
  - math
  - ode
excerpt: ODE第七次作业
index_img: /img/ode.jpg
banner_img: /img/ode.jpg
abbrlink: ddb6334e
date: 2025-11-16 21:28:31
---
# Ex1
定义矩阵值函数
$$A(t):=\begin{bmatrix}0&2t\\ 1&0\end{bmatrix};\ B_n(t):=\int_{0}^{t}\int_{0}^{t_1}\cdots\int_{0}^{t_{n-1}}A(t_1)A(t_2)\cdots A(t_n)dt_n\cdots dt_1.$$

1) 证明当$s\neq t$ $A(t)A(s)\neq A(s)A(t)$ 

2) 证明：对任意的$n\geq2$ 有
$$B_{n}(t)\neq\frac{(\int_{0}^{t}A(\tau)d\tau)^{n}}{n!}.$$

3) 计算$D(t)$ ，并验证$D^{\prime}(t)\neq A(t)D(t)$ ，其中
$$D(t):=e^{\int_{0}^{t}A(\tau)d\tau}.$$

4) 试利用Picard迭代法求解初值问题
$$\dot{X}=A(t)X;\quad X(0)=z.$$

## 解答
### 1
计算矩阵乘积：
$$A(t)A(s) = \begin{bmatrix}0 & 2t \\ 1 & 0\end{bmatrix} \begin{bmatrix}0 & 2s \\ 1 & 0\end{bmatrix} = \begin{bmatrix}2t & 0 \\ 0 & 2s\end{bmatrix},$$
$$A(s)A(t) = \begin{bmatrix}0 & 2s \\ 1 & 0\end{bmatrix} \begin{bmatrix}0 & 2t \\ 1 & 0\end{bmatrix} = \begin{bmatrix}2s & 0 \\ 0 & 2t\end{bmatrix}.$$
显然，当 $s \neq t$ 时，$A(t)A(s) \neq A(s)A(t)$。

### 2
令 $C(t) = \int_0^t A(\tau) d\tau = \begin{bmatrix} 0 & t^2 \\ t & 0 \end{bmatrix}$。

计算 $B_2(t)$：
$$B_2(t) = \int_0^t \int_0^{t_1} A(t_1)A(t_2) dt_2 dt_1 = \int_0^t A(t_1)C(t_1) dt_1.$$
其中 $A(t_1)C(t_1) = \begin{bmatrix} 2t_1^2 & 0 \\ 0 & t_1^2 \end{bmatrix}$，故：
$$B_2(t) = \begin{bmatrix} \frac{2}{3}t^3 & 0 \\ 0 & \frac{1}{3}t^3 \end{bmatrix}.$$

计算 $\frac{1}{2!} C(t)^2$：
$$C(t)^2 = \begin{bmatrix} t^3 & 0 \\ 0 & t^3 \end{bmatrix}, \quad \frac{1}{2!} C(t)^2 = \begin{bmatrix} \frac{t^3}{2} & 0 \\ 0 & \frac{t^3}{2} \end{bmatrix}.$$

显然 $B_2(t) \neq \frac{1}{2!} C(t)^2$。
类似地，可以证明对任意 $n \geq 2$，都有 $B_n(t) \neq \frac{1}{n!} C(t)^n$。

### 3
$D(t) = \begin{bmatrix} \cosh(\theta) & t^{1/2} \sinh(\theta) \\ t^{-1/2} \sinh(\theta) & \cosh(\theta) \end{bmatrix}$

$D'(t) = \begin{bmatrix} \frac{3}{2} t^{1/2} \sinh(\theta) & \frac{1}{2} t^{-1/2} \sinh(\theta) + \frac{3}{2} t \cosh(\theta) \\ -\frac{1}{2} t^{-3/2} \sinh(\theta) + \frac{3}{2} \cosh(\theta) & \frac{3}{2} t^{1/2} \sinh(\theta) \end{bmatrix}$

$A(t)D(t) = \begin{bmatrix} 0 & 2t \\ 1 & 0 \end{bmatrix} \begin{bmatrix} \cosh(\theta) & t^{1/2} \sinh(\theta) \\ t^{-1/2} \sinh(\theta) & \cosh(\theta) \end{bmatrix} = \begin{bmatrix} 2 t^{1/2} \sinh(\theta) & 2 t \cosh(\theta) \\ \cosh(\theta) & t^{1/2} \sinh(\theta) \end{bmatrix}$

显然 $D'(t) \neq A(t)D(t)$。

### 4
$X_0(t) = z$
$X_{n+1}(t) = z + \int_{0}^{t} A(s) X_n(s) ds$

定义状态转移矩阵 $\Phi(t)$ 满足 $X(t) = \Phi(t) z$，则 $\Phi(t)$ 的迭代为：

$\Phi_0(t) = I$
$\Phi_{n+1}(t) = I + \int_{0}^{t} A(s) \Phi_n(s) ds$

迭代解为：

$\Phi_n(t) = \sum_{k=0}^{n} B_k(t)$，其中 $B_0(t) = I$，$B_k(t) = \int_{0}^{t} \int_{0}^{t_1} \cdots \int_{0}^{t_{k-1}} A(t_1) A(t_2) \cdots A(t_k) dt_k \cdots dt_1$ for $k \geq 1$
因此 $X(t) = \lim_{n \to \infty} X_n(t) = \left( \sum_{k=0}^{\infty} B_k(t) \right) z$

该级数收敛，且为初值问题的解。

# Ex2
设$I \subset \mathbb{R}$为区间，矩阵值函数A：$I\to M_{d}$ R)连续且可交换：

$$A(t)A(s)=A(s)A(t),\quad\forall t,s\in I.$$

任取$s\in I 以及 n\in\mathbb{N}$ 定义$B_{n}(s,\cdot):I\to M_{d}(\mathbb{R}$ )为

$$B_{n}(s,t):=\int_{s}^{t}\int_{s}^{t_{1}}\cdots\int_{s}^{t_{n-1}}A(t_{1})A(t_{2})\cdots A(t_{n})d t_{n}\cdots d t_{1}.$$

定义$B_{0}(s,t)\equiv I_{d}$ 

1. 证明：对任意的$n\geq1$ 有
$$B_{n}(s,t)=\frac{(\int_{s}^{t}A(\tau)d\tau)^{n}}{n!}.$$

2. 证明
$$\Pi(t,s)=e^{\int_{0}^{t}A(\tau)d\tau};\quad\frac{\partial\Pi}{\partial t}(t,s)=A(t)\Pi(t,s)=\Pi(t,s)A(t).$$

3. 对以下矩阵值函数求解初值问题$\dot{X}=A(t)X;\quad X(0)=z$ 
$$\left[\begin{matrix}{\operatorname{c o s}t}&{\operatorname{s i n}t}\\ {-\operatorname{s i n}t}&{\operatorname{c o s}t}\\ \end{matrix}\right];\quad\left[\begin{matrix}{1}&{t}&{t^{2}/2}\\ {}&{1}&{t}\\ {}&{}&{1}\\ \end{matrix}\right].$$

## 解答
### 1
由于 $A(t)$ 可交换，所有 $A(t)$ 互相对易，因此矩阵积分可以类似标量函数处理。考虑多重积分：
$$B_n(s,t) = \int_s^t \int_s^{t_1} \cdots \int_s^{t_{n-1}} A(t_1) A(t_2) \cdots A(t_n) \, dt_n \cdots dt_1.$$
该积分在区域 $s \leq t_n \leq t_{n-1} \leq \cdots \leq t_1 \leq t$ 上进行。令 $F(t) = \int_s^t A(\tau) \, d\tau$，则 $F(t)^n$ 是 $n$ 重积分：
$$F(t)^n = \left( \int_s^t A(\tau) \, d\tau \right)^n = \int_s^t \cdots \int_s^t A(\tau_1) \cdots A(\tau_n) \, d\tau_1 \cdots d\tau_n.$$
由于 $A$ 可交换，被积函数对称，积分 over the $n$-维立方体等于 $n!$ 乘以积分 over the ordered region $s \leq \tau_n \leq \tau_{n-1} \leq \cdots \leq \tau_1 \leq t$，即：
$$\int_s^t \cdots \int_s^t A(\tau_1) \cdots A(\tau_n) \, d\tau_1 \cdots d\tau_n = n! B_n(s,t).$$
因此，
$$B_n(s,t) = \frac{F(t)^n}{n!} = \frac{\left( \int_s^t A(\tau) \, d\tau \right)^n}{n!}.$$

### 2
由于 $A$ 可交换，指数函数可定义为幂级数：
$$\Pi(t,s) = \sum_{n=0}^{\infty} \frac{\left( \int_s^t A(\tau) \, d\tau \right)^n}{n!} = \sum_{n=0}^{\infty} B_n(s,t),$$
其中 $B_0(s,t) = I_d$。现在计算偏导数：
令 $F(t) = \int_s^t A(\tau) \, d\tau$，则 $F'(t) = A(t)$。由于 $A$ 可交换，$F(t)$ 与 $A(t)$ 可交换，因此：
$$\frac{\partial \Pi}{\partial t}(t,s) = \frac{d}{dt} e^{F(t)} = e^{F(t)} F'(t) = e^{F(t)} A(t) = \Pi(t,s) A(t).$$
同样，由于 $\Pi(t,s)$ 与 $A(t)$ 可交换，有 $\Pi(t,s) A(t) = A(t) \Pi(t,s)$。因此：
$$\frac{\partial \Pi}{\partial t}(t,s) = A(t) \Pi(t,s) = \Pi(t,s) A(t).$$
当 $t = s$ 时，$F(s) = 0$，故 $\Pi(s,s) = e^0 = I_d$，满足初始条件。

由于 $A(t)$ 可交换，解为 $X(t) = \Pi(t,0) z = e^{\int_0^t A(\tau) \, d\tau} z$.
对于第一个矩阵 $A(t) = \begin{bmatrix} \cos t & \sin t \\ -\sin t & \cos t \end{bmatrix}$
计算积分：
$$\int_0^t A(\tau) \, d\tau = \int_0^t \begin{bmatrix} \cos \tau & \sin \tau \\ -\sin \tau & \cos \tau \end{bmatrix} d\tau = \begin{bmatrix} \sin t & 1 - \cos t \\ \cos t - 1 & \sin t \end{bmatrix}.$$
令 $M = \begin{bmatrix} \sin t & 1 - \cos t \\ \cos t - 1 & \sin t \end{bmatrix}$。记 $a = \sin t$, $b = 1 - \cos t$，则 $M = a I + b J$，其中 $I = \begin{bmatrix} 1 & 0 \\ 0 & 1 \end{bmatrix}$, $J = \begin{bmatrix} 0 & 1 \\ -1 & 0 \end{bmatrix}$。由于 $J^2 = -I$，有：
$$e^{b J} = \cos b \, I + \sin b \, J = \begin{bmatrix} \cos b & \sin b \\ -\sin b & \cos b \end{bmatrix}.$$
因此，
$$e^M = e^a e^{b J} = e^{\sin t} \begin{bmatrix} \cos(1 - \cos t) & \sin(1 - \cos t) \\ -\sin(1 - \cos t) & \cos(1 - \cos t) \end{bmatrix}.$$
解为：
$$X(t) = e^{\sin t} \begin{bmatrix} \cos(1 - \cos t) & \sin(1 - \cos t) \\ -\sin(1 - \cos t) & \cos(1 - \cos t) \end{bmatrix} z.$$
对于第二个矩阵 $A(t) = \begin{bmatrix} 1 & t & t^2/2 \\ 0 & 1 & t \\ 0 & 0 & 1 \end{bmatrix}$
计算积分：
$$\int_0^t A(\tau) \, d\tau = \int_0^t \begin{bmatrix} 1 & \tau & \tau^2/2 \\ 0 & 1 & \tau \\ 0 & 0 & 1 \end{bmatrix} d\tau = \begin{bmatrix} t & t^2/2 & t^3/6 \\ 0 & t & t^2/2 \\ 0 & 0 & t \end{bmatrix}.$$
令 $M = \begin{bmatrix} t & t^2/2 & t^3/6 \\ 0 & t & t^2/2 \\ 0 & 0 & t \end{bmatrix}$。则 $M = t I + N$，其中 $N = \begin{bmatrix} 0 & t^2/2 & t^3/6 \\ 0 & 0 & t^2/2 \\ 0 & 0 & 0 \end{bmatrix}$。计算 $N^2$:
$$N^2 = \begin{bmatrix} 0 & 0 & (t^2/2)(t^2/2) \\ 0 & 0 & 0 \\ 0 & 0 & 0 \end{bmatrix} = \begin{bmatrix} 0 & 0 & t^4/4 \\ 0 & 0 & 0 \\ 0 & 0 & 0 \end{bmatrix}, \quad N^3 = 0.$$
因此，
$$e^N = I + N + \frac{N^2}{2} = \begin{bmatrix} 1 & t^2/2 & t^3/6 + t^4/8 \\ 0 & 1 & t^2/2 \\ 0 & 0 & 1 \end{bmatrix}.$$
于是，
$$e^M = e^t e^N = e^t \begin{bmatrix} 1 & t^2/2 & t^3/6 + t^4/8 \\ 0 & 1 & t^2/2 \\ 0 & 0 & 1 \end{bmatrix}.$$
解为：
$$X(t) = e^t \begin{bmatrix} 1 & t^2/2 & t^3/6 + t^4/8 \\ 0 & 1 & t^2/2 \\ 0 & 0 & 1 \end{bmatrix} z.$$

# Ex3
设$I\subset\mathbb{R}$ 为区间，矩阵值函数A：$I\to M_d(\mathbb{I}$ R)连续。按习题2定义$B_{n}(s,t)。$ 

1. 对任意的$n\geq1$ 计算
$$\frac{\partial B_{n}}{\partial s}(t,s).$$

2. 证明
$$\frac{\partial\Pi}{\partial s}(t,s)=-\Pi(t,s)A(s).$$
并由此证明$\Pi\in C^{1}(I\times I;M_{d}(\mathbb{R}))$ 

3. 记$\eta(s):=\operatorname*{d e t}\Pi(t,s)$ 证明$\eta(s)$ 满足微分方程$\dot{x}=-\mathrm{tr}A(s)x_{\circ}$ ，并由此求$\eta(s).$ 

## 解答
### 1
对于 $n \geq 1$，计算偏导数 $\frac{\partial B_n}{\partial s}(t,s)$。通过直接计算或数学归纳法，可得：
$$\frac{\partial B_n}{\partial s}(t,s) = - A(s) B_{n-1}(t,s).$$
对于 $n = 0$，$B_0(t,s) = I$ 为常数矩阵，故 $\frac{\partial B_0}{\partial s}(t,s) = 0$.
因此，对于 $n \geq 1$，有：
$$\frac{\partial B_n}{\partial s}(t,s) = - A(s) B_{n-1}(t,s).$$

### 2
状态转移矩阵 $\Pi(t,s)$ 是皮卡迭代 $B_n(t,s)$ 的一致极限，且满足积分方程：
$$\Pi(t,s) = I + \int_s^t A(\tau) \Pi(\tau,s) \, d\tau.$$
考虑函数 $W(s) = \frac{\partial \Pi}{\partial s}(t,s) + \Pi(t,s) A(s)$。首先，对积分方程求偏导于 $s$：
$$\frac{\partial \Pi}{\partial s}(t,s) = - A(s) \Pi(s,s) + \int_s^t A(\tau) \frac{\partial \Pi}{\partial s}(\tau,s) \, d\tau.$$
由于 $\Pi(s,s) = I$，有：
$$\frac{\partial \Pi}{\partial s}(t,s) = - A(s) + \int_s^t A(\tau) \frac{\partial \Pi}{\partial s}(\tau,s) \, d\tau.$$
另一方面，
$$\Pi(t,s) A(s) = \left[ I + \int_s^t A(\tau) \Pi(\tau,s) \, d\tau \right] A(s) = A(s) + \int_s^t A(\tau) \Pi(\tau,s) A(s) \, d\tau.$$
因此，
$$W(s) = \frac{\partial \Pi}{\partial s}(t,s) + \Pi(t,s) A(s) = \left[ - A(s) + \int_s^t A(\tau) \frac{\partial \Pi}{\partial s}(\tau,s) \, d\tau \right] + \left[ A(s) + \int_s^t A(\tau) \Pi(\tau,s) A(s) \, d\tau \right] = \int_s^t A(\tau) W(\tau) \, d\tau.$$
所以 $W(s)$ 满足积分方程：
$$W(s) = \int_s^t A(\tau) W(\tau) \, d\tau.$$
当 $s = t$ 时，$\Pi(t,t) = I$，且 $\frac{\partial \Pi}{\partial s}(t,t) = - A(t)$，故：
$$W(t) = - A(t) + I \cdot A(t) = 0.$$
由于 $A$ 连续，该积分方程的唯一解为 $W(s) = 0$ 对所有 $s$ 成立。因此，
$$\frac{\partial \Pi}{\partial s}(t,s) = - \Pi(t,s) A(s).$$
由于 $A$ 连续，$\Pi$ 连续，且 $\frac{\partial \Pi}{\partial s}$ 连续，故 $\Pi \in C^{1}(I \times I; M_{d}(\mathbb{R}))$.

### 3
记 $\eta(s) = \det \Pi(t,s)$，证明 $\eta(s)$ 满足微分方程 $\dot{x} = -\operatorname{tr} A(s) x$，并求 $\eta(s)$
由部分2，$\frac{\partial \Pi}{\partial s}(t,s) = - \Pi(t,s) A(s)$。对行列式 $\eta(s) = \det \Pi(t,s)$ 求导，利用行列式导数公式：
$$\eta'(s) = \frac{d}{ds} \det \Pi(t,s) = \det \Pi(t,s) \cdot \operatorname{tr} \left( \Pi(t,s)^{-1} \frac{\partial \Pi}{\partial s}(t,s) \right).$$
代入 $\frac{\partial \Pi}{\partial s}(t,s) = - \Pi(t,s) A(s)$:
$$\eta'(s) = \det \Pi(t,s) \cdot \operatorname{tr} \left( \Pi(t,s)^{-1} ( - \Pi(t,s) A(s) ) \right) = \det \Pi(t,s) \cdot \operatorname{tr} ( - A(s) ) = - \operatorname{tr} A(s) \det \Pi(t,s) = - \operatorname{tr} A(s) \eta(s).$$
所以 $\eta(s)$ 满足微分方程：
$$\dot{\eta} = - \operatorname{tr} A(s) \eta.$$
这是一阶线性微分方程，解为：
$$\eta(s) = \eta(s_0) \exp \left( - \int_{s_0}^s \operatorname{tr} A(\tau) \, d\tau \right).$$
当 $s = t$ 时，$\Pi(t,t) = I$，故 $\eta(t) = 1$。取 $s_0 = t$，则：
$$\eta(s) = \exp \left( - \int_t^s \operatorname{tr} A(\tau) \, d\tau \right) = \exp \left( \int_s^t \operatorname{tr} A(\tau) \, d\tau \right).$$
因此，
$$\eta(s) = \det \Pi(t,s) = \exp \left( \int_s^t \operatorname{tr} A(\tau) \, d\tau \right).$$


# Ex4
设$d \geq 2$。构造连续函数 $\phi_i: \mathbb{R} \to \mathbb{R}^d, \, 1\leq i \leq d$ 使得$\phi_1, \cdots, \phi_d$线性无关，但是
$$W(\phi_{1},\cdots,\phi_{d})(t)\equiv0.$$

## 解答
设 $d \geq 2$。构造连续函数 $\phi_i : \mathbb{R} \to \mathbb{R}$（其中 $1 \leq i \leq d$) 如下：

- 定义 $\phi_1(t) = t^d$ 对于所有 $t \in \mathbb{R}$。
- 定义 $\phi_2(t) = \begin{cases} 
t^d & \text{若 } t \geq 0 \\
2t^d & \text{若 } t < 0 
\end{cases}$。
- 对于 $k = 3, 4, \ldots, d$，定义 $\phi_k(t) = t^{d-k+1}$ 对于所有 $t \in \mathbb{R}$.

则函数集 $\{\phi_1, \phi_2, \ldots, \phi_d\}$ 线性无关，但它们的 Wronskian $W(\phi_1, \ldots, \phi_d)(t) \equiv 0$ 对于所有 $t \in \mathbb{R}$.

验证：
- 线性无关性： 假设 $\sum_{i=1}^d c_i \phi_i(t) = 0$ 对于所有 $t \in \mathbb{R}$。  
  对于 $t > 0$，有 $c_1 t^d + c_2 t^d + c_3 t^{d-1} + \cdots + c_d t = 0$，即 $(c_1 + c_2) t^d + c_3 t^{d-1} + \cdots + c_d t = 0$。由于该等式对所有 $t > 0$ 成立，可得 $c_1 + c_2 = 0$, $c_3 = 0$, ..., $c_d = 0$。  
  对于 $t < 0$，有 $c_1 t^d + c_2 (2t^d) + c_3 t^{d-1} + \cdots + c_d t = 0$，但 $c_3 = \cdots = c_d = 0$，所以 $c_1 t^d + 2c_2 t^d = 0$，即 $(c_1 + 2c_2) t^d = 0$， hence $c_1 + 2c_2 = 0$。  
  结合 $c_1 + c_2 = 0$ 和 $c_1 + 2c_2 = 0$，得 $c_2 = 0$ 和 $c_1 = 0$。因此所有 $c_i = 0$，函数集线性无关。
- Wronskian 为零： 对于 $t > 0$，$\phi_1(t) = \phi_2(t) = t^d$，因此 Wronskian 矩阵中有两行相同，行列式为零。对于 $t < 0$，$\phi_1(t) = t^d$ 和 $\phi_2(t) = 2t^d$ 成比例，因此 Wronskian 矩阵的行线性相关，行列式为零。在 $t = 0$ 处，函数连续且可导，Wronskian 为零。故 $W(\phi_1, \ldots, \phi_d)(t) \equiv 0$.

