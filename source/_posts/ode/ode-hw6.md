---
title: ODE第六次作业
tags:
  - math
  - ode
categories:
  - math
  - ode
excerpt: ODE第六次作业
index_img: /img/ode.png
banner_img: /img/ode.png
abbrlink: f4794a59
date: 2025-11-07 21:28:13
---
# Ex 1
计算如下一些矩阵的指数：

$$\left[\begin{matrix}{0}&{1}&{2}\\ {0}&{0}&{3}\\ {0}&{0}&{0}\\ \end{matrix}\right];\left[\begin{matrix}{\lambda}&{0}&{0}\\ {1}&{\lambda}&{0}\\ {0}&{1}&{\lambda}\\ \end{matrix}\right];\left[\begin{matrix}{1+i}&{0}\\ {2}&{1+i}\\ \end{matrix}\right];\left[\begin{matrix}{1}&{0}&{0}\\ {1}&{0}&{0}\\ {1}&{0}&{0}\\ \end{matrix}\right]$$

## 解答
1. $e^A = I + A + \frac{A^2}{2!} = \begin{bmatrix} 1 & 1 & \frac{7}{2} \\ 0 & 1 & 3 \\ 0 & 0 & 1 \end{bmatrix}$

2. $e^B = e^\lambda \begin{bmatrix} 1 & 0 & 0 \\ 1 & 1 & 0 \\ \frac{1}{2} & 1 & 1 \end{bmatrix} = \begin{bmatrix} e^\lambda & 0 & 0 \\ e^\lambda & e^\lambda & 0 \\ \frac{1}{2} e^\lambda & e^\lambda & e^\lambda \end{bmatrix}$

3. 可以写成 $C = (1+i) I + M$，其中 $M = \begin{bmatrix} 0 & 0 \\ 2 & 0 \end{bmatrix}$ 是幂零矩阵。计算得：$$e^C = e^{1+i} \begin{bmatrix} 1 & 0 \\ 2 & 1 \end{bmatrix} = \begin{bmatrix} e^{1+i} & 0 \\ 2 e^{1+i} & e^{1+i} \end{bmatrix}$$

4. $e^D = I + (e - 1) D = \begin{bmatrix} e & 0 & 0 \\ e-1 & 1 & 0 \\ e-1 & 0 & 1 \end{bmatrix}$

# Ex 2
本题的目的是证明讲义第4部分定理2.

1) 设$\lambda>0$ 证明系统$\dot{x}=J_{\lambda}(m)x$ 与系统 $\dot{x}=I_{m}x=x$ 拓扑共轭。

2) 设$a>0,b\in\mathbb{R} 且 b\neq0。$ 记$B=\begin{bmatrix}a&b\\ -b&a\end{bmatrix}$ 。证明系统$\dot{x}=J_{B}(m)x$ 与系统$\dot{x}=D x$ 拓扑共轭，这里

$$D=\begin{bmatrix}B&&&\\ &B&&\\ &&\ddots&\\ &&&B\end{bmatrix}$$

3) 设$\dot{x}=Ax 与 \dot{x}=\hat{A}x$ 拓扑共轭；$\dot{y}=By 与 \dot{y}=\hat{B}y$ 拓扑共轭。令 $$C:=\left[\begin{matrix}{A}&{}\\ {}&{B}\\ \end{matrix}\right];\quad\hat{C}:=\left[\begin{matrix}{\hat{A}}&{}\\ {}&{\hat{B}}\\ \end{matrix}\right]$$ 证明$\dot{z}=C z 与 \dot{z}=\hat{C}z$ 拓扑共轭。

4) 设$m\neq\hat{m}$ ，设$n\geq m_{l}$ 。证明如下二系统不拓扑共轭： $$x=\begin{bmatrix}I_m&\\ &-I_{n-m}\end{bmatrix}x;\quad x=\begin{bmatrix}I_{\hat{m}}&\\ &-I_{n-\hat{m}}\end{bmatrix}x.$$

5) 设$A,B\in M_{d}(\mathbb{R})$ 均为双曲矩阵。证明：$\dot{x}=Ax 与 \dot{y}=By$ 拓扑共轭当且仅当$\mathrm{sgn}(A)=\mathrm{sgn}(B)$ 


## 解答
### 1
由于 $\lambda > 0$，矩阵 $J_{\lambda}(m)$ 的所有特征值均为 $\lambda$（实部为正），而 $I_m$ 的所有特征值均为 1（实部为正）。因此，两个系统都是双曲的（特征值实部均不为零），且稳定子空间维数均为 0（即没有稳定特征值）。根据双曲线性系统的拓扑分类定理，两个双曲线性系统拓扑共轭当且仅当它们具有相同的稳定子空间维数。故系统 $\dot{x} = J_{\lambda}(m)x$ 与 $\dot{x} = I_{m}x$ 拓扑共轭。

### 2
 $J_B(m)$ 是 $B$ 的 $m$ 阶块 Jordan 矩阵，其特征值为 $a \pm ib$（由于 $a > 0$，实部为正）。矩阵 $D$ 是 $B$ 的 $m$ 次重复，特征值同样为 $a \pm ib$。因此，两个系统都是双曲的，且稳定子空间维数均为 0。根据双曲线性系统的拓扑分类定理，它们拓扑共轭。


### 3
由于 $\dot{x} = A x$ 与 $\dot{x} = \hat{A} x$ 拓扑共轭，存在同胚 $f: \mathbb{R}^n \to \mathbb{R}^n$ 使得对于所有 $x \in \mathbb{R}^n$ 和 $t \in \mathbb{R}$，有
$$f(e^{At} x) = e^{\hat{A}t} f(x).$$
同理，由于 $\dot{y} = B y$ 与 $\dot{y} = \hat{B} y$ 拓扑共轭，存在同胚 $g: \mathbb{R}^p \to \mathbb{R}^p$ 使得对于所有 $y \in \mathbb{R}^p$ 和 $t \in \mathbb{R}$，有
$$g(e^{Bt} y) = e^{\hat{B}t} g(y).$$
现在定义同胚 $h: \mathbb{R}^{n+p} \to \mathbb{R}^{n+p}$ 为
$$h(z) = h(x, y) = (f(x), g(y)),$$
其中 $z = (x, y) \in \mathbb{R}^{n+p}$。则对于系统 $\dot{z} = C z$，流为 $e^{Ct} z = (e^{At} x, e^{Bt} y)$，且
$$h(e^{Ct} z) = h(e^{At} x, e^{Bt} y) = (f(e^{At} x), g(e^{Bt} y)) = (e^{\hat{A}t} f(x), e^{\hat{B}t} g(y)) = e^{\hat{C}t} (f(x), g(y)) = e^{\hat{C}t} h(z).$$
故 $\dot{z} = C z$ 与 $\dot{z} = \hat{C} z$ 拓扑共轭。

### 4
第一个系统的稳定子空间维数为 $n - m$，不稳定子空间维数为 $m$。第二个系统的稳定子空间维数为 $n - \hat{m}$，不稳定子空间维数为 $\hat{m}$。由于 $m \neq \hat{m}$，有 $n - m \neq n - \hat{m}$，即稳定子空间维数不同。拓扑共轭保持稳定子空间维数，故两个系统不拓扑共轭。

### 5
由于 $A$ 和 $B$ 是双曲的，根据双曲线性系统的拓扑分类定理，$\dot{x} = A x$ 与 $\dot{y} = B y$ 拓扑共轭当且仅当它们具有相同的稳定子空间维数，即 $\operatorname{sgn}(A) = \operatorname{sgn}(B)$。



# Ex 3
求方程

$$x^{(5)}=-72x-60x'+10x''+15x'''$$

解空间的一组基。

## 解答
将其重写为齐次线性微分方程：
$$x^{(5)} - 15x''' - 10x'' + 60x' + 72x = 0$$
对应的特征方程为：
$$r^5 - 15r^3 - 10r^2 + 60r + 72 = 0$$
特征方程可因式分解为：
$$(r + 2)^3 (r - 3)^2 = 0$$
微分方程的通解为：
$$x(t) = (A_1 + A_2 t + A_3 t^2) e^{-2t} + (B_1 + B_2 t) e^{3t}$$
其中 $A_1, A_2, A_3, B_1, B_2$ 为常数。
解空间的一组基为以下五个线性无关的函数：
$$\{ e^{-2t}, \, t e^{-2t}, \, t^2 e^{-2t}, \, e^{3t}, \, t e^{3t} \}$$

# Ex 4
求方程

$$x^{(4)}=16x $$

解空间的一组基。

## 解答
将其重写为齐次线性微分方程：
$$x^{(4)} - 16x = 0$$
对应的特征方程为：
$$r^4 - 16 = 0$$
解得特征根为：
$$r = 2, -2, 2i, -2i$$
因此，微分方程的通解为：
$$x(t) = C_1 e^{2t} + C_2 e^{-2t} + C_3 \cos(2t) + C_4 \sin(2t)$$
其中 $C_1, C_2, C_3, C_4$ 为常数。
解空间的一组基为以下四个线性无关的函数：
$$\{ e^{2t}, \, e^{-2t}, \, \cos(2t), \, \sin(2t) \}$$


# Ex 5
设$k_{1},k_{2}>0。$ 本题的目的是求解如下方程组（耦合弹簧振子）

$$\begin{aligned}\ddot{x}\quad&=\quad-(k_1+k_2)x+k_2y\\\ddot{y}\quad&=\quad k_2x-(k_1+k_2)y\end{aligned}$$

1）写出相应的一阶方程组，并求解。

2）求解原方程。

3）研究方程的解的周期性（可能与$\omega_{1}:=\sqrt{k_{1}} 和 \omega_{2}:=\sqrt{k_{1}+2k_{2}}$ 相关）。


## 解答
### 1
引入新变量：
$$u = \dot{x}, \quad v = \dot{y}$$
则一阶方程组为：
$$\begin{aligned}
\dot{x} &= u \\
\dot{y} &= v \\
\dot{u} &= -(k_1 + k_2)x + k_2 y \\
\dot{v} &= k_2 x - (k_1 + k_2)y
\end{aligned}$$
令 $\mathbf{z} = (x, y, u, v)^T$，则一阶方程组可写为矩阵形式：
$$\dot{\mathbf{z}} = A \mathbf{z}$$
其中
$$A = \begin{pmatrix}
0 & 0 & 1 & 0 \\
0 & 0 & 0 & 1 \\
-(k_1 + k_2) & k_2 & 0 & 0 \\
k_2 & -(k_1 + k_2) & 0 & 0
\end{pmatrix}$$
求解一阶方程组需找到特征值。特征值满足 $\det(A - \lambda I) = 0$，计算可得特征值为：
$$\lambda = \pm i \omega_1, \quad \lambda = \pm i \omega_2$$
其中 $\omega_1 = \sqrt{k_1}$，$\omega_2 = \sqrt{k_1 + 2k_2}$。
通解为：
$$\begin{aligned}
x(t) &= C_1 \cos(\omega_1 t + \phi_1) + C_2 \cos(\omega_2 t + \phi_2) \\
y(t) &= C_1 \cos(\omega_1 t + \phi_1) - C_2 \cos(\omega_2 t + \phi_2) \\
u(t) &= -C_1 \omega_1 \sin(\omega_1 t + \phi_1) - C_2 \omega_2 \sin(\omega_2 t + \phi_2) \\
v(t) &= -C_1 \omega_1 \sin(\omega_1 t + \phi_1) + C_2 \omega_2 \sin(\omega_2 t + \phi_2)
\end{aligned}$$

### 2
令 $\mathbf{r} = (x, y)^T$，则方程组可写为：
$$\ddot{\mathbf{r}} = M \mathbf{r}$$
其中
$$M = \begin{pmatrix}
-(k_1 + k_2) & k_2 \\
k_2 & -(k_1 + k_2)
\end{pmatrix}$$
求解特征值问题 $M \mathbf{v} = \lambda \mathbf{v}$，特征值为：
$$\lambda_1 = -k_1, \quad \lambda_2 = -k_1 - 2k_2$$
对应特征向量为：
$$\mathbf{v}_1 = \begin{pmatrix} 1 \\ 1 \end{pmatrix}, \quad \mathbf{v}_2 = \begin{pmatrix} 1 \\ -1 \end{pmatrix}$$
设 $\lambda = -\omega^2$，则：
$$\omega_1 = \sqrt{k_1}, \quad \omega_2 = \sqrt{k_1 + 2k_2}$$
通解为：
$$\begin{aligned}
x(t) &= C_1 \cos(\omega_1 t + \phi_1) + C_2 \cos(\omega_2 t + \phi_2) \\
y(t) &= C_1 \cos(\omega_1 t + \phi_1) - C_2 \cos(\omega_2 t + \phi_2)
\end{aligned}$$


### 3
解 $x(t)$ 和 $y(t)$ 由两个简谐振动叠加而成，频率分别为 $\omega_1 = \sqrt{k_1}$ 和 $\omega_2 = \sqrt{k_1 + 2k_2}$。解的周期性取决于频率比 $\omega_1 / \omega_2$。

如果 $\omega_1 / \omega_2$ 为有理数，即存在整数 $m, n$ 使得 $m \omega_1 = n \omega_2$，则解是周期的，周期为 $T = 2\pi m / \omega_1 = 2\pi n / \omega_2$。
如果 $\omega_1 / \omega_2$ 为无理数，则解不是周期的，但准周期的。

由于 $\omega_1 / \omega_2 = \sqrt{k_1 / (k_1 + 2k_2)}$，因此周期性取决于 $k_1$ 和 $k_2$ 的取值。当 $k_1 / (k_1 + 2k_2)$ 是有理数的平方时，解是周期的。