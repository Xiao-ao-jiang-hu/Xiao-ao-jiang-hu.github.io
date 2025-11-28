---
title: Ch4.2 高阶常系数线性方程
tags:
  - math
  - ode
categories:
  - math
  - ode
excerpt: ODE第三部分
index_img: /img/ode.jpg
banner_img: /img/ode.jpg
date: 2025-11-16 21:31:47
---
### 2.1 高阶方程与一阶方程组

**定义 2.1（d阶常微分方程）**  
设 $U \subset \mathbb{R}^{d+1}$ 是一个开集，$h: U \to \mathbb{R}$ 是一个连续函数。一个d阶常微分方程是形如  
$$
x^{(d)} = h(t, x, x', \cdots, x^{(d-1)})
$$  
的方程，其中 $x = x(t)$ 是未知函数，$t$ 是自变量，$x^{(k)}$ 表示 $x$ 关于 $t$ 的k阶导数。

**定义 2.2（d阶初值问题）**  
考虑d阶常微分方程 $x^{(d)} = h(t, x, x', \cdots, x^{(d-1)})$，其中 $h: U \to \mathbb{R}$ 连续，$U \subset \mathbb{R}^{d+1}$。初值问题是在给定初始条件  
$$
(x(s), x'(s), \cdots, x^{(d-1)}(s)) = z
$$  
下求解函数 $x(t)$，其中 $(s, z) \in U$。形式化地，初值问题表示为：  
$$
\begin{cases}
x^{(d)} = h(t, x, x', \cdots, x^{(d-1)}), \\
(x(s), x'(s), \cdots, x^{(d-1)}(s)) = z.
\end{cases}
$$  
解 $x(t)$ 需在包含 $s$ 的区间 $I$ 上定义，满足 $x^{(d)}(t) = h(t, x(t), x'(t), \cdots, x^{(d-1)}(t))$ 对于所有 $t \in I$，且初始条件成立。

为简化记号，定义  
$$
x^{\langle d \rangle}(t) = (x(t), x'(t), \cdots, x^{(d-1)}(t)).
$$

**定义 2.3（一阶方程组转化）**  
设 $U \subset \mathbb{R}^{d+1}$ 是开集，$h: U \to \mathbb{R}$ 连续。定义函数 $f: U \to \mathbb{R}^d$ 为  
$$
f(t, x_1, x_2, \cdots, x_d) = (x_2, x_3, \cdots, x_d, h(t, x_1, x_2, \cdots, x_d)).
$$  
则一阶初值问题为  
$$
\mathcal{I}(s, z, f): \quad \dot{x} = f(t, x), \quad x(s) = z.
$$

**引理 2.1（高阶与一阶初值问题的等价性）**  
设 $U \subset \mathbb{R}^{d+1}$ 是开集，$h \in C(U, \mathbb{R})$，按定义2.3定义 $f$。则：
1. 若 $\phi$ 是 $\mathcal{I}(s, z, h)$ 的解，则 $\phi^{\langle d \rangle}$ 是 $\mathcal{I}(s, z, f)$ 的解。
2. 若 $\psi = (\psi_1, \psi_2, \cdots, \psi_d)$ 是 $\mathcal{I}(s, z, f)$ 的解，则 $\psi = \psi_1^{\langle d \rangle}$ 且 $\psi_1$ 是 $\mathcal{I}(s, z, h)$ 的解。
3. 初值问题 $\mathcal{I}(s, z, h)$ 有唯一解当且仅当初值问题 $\mathcal{I}(s, z, f)$ 有唯一解。

**证明：**
1. 设 $\phi$ 是 $\mathcal{I}(s, z, h)$ 的解。则 $\phi^{\langle d \rangle}(s) = z$，且对 $t \in I$，有  
   $$
   (\phi^{\langle d \rangle}(t))' = (\phi'(t), \phi''(t), \cdots, \phi^{(d)}(t)) = (\phi'(t), \phi''(t), \cdots, h(t, \phi^{\langle d \rangle}(t))).
   $$  
   由 $f$ 的定义，这等于 $f(t, \phi^{\langle d \rangle}(t))$。因此 $\phi^{\langle d \rangle}$ 满足 $\dot{x} = f(t, x)$ 和 $x(s) = z$，故是 $\mathcal{I}(s, z, f)$ 的解。

2. 设 $\psi = (\psi_1, \psi_2, \cdots, \psi_d)$ 是 $\mathcal{I}(s, z, f)$ 的解。则 $\psi(s) = z$，且  
   $$
   \dot{\psi} = (\dot{\psi}_1, \dot{\psi}_2, \cdots, \dot{\psi}_d) = f(t, \psi) = (\psi_2, \psi_3, \cdots, \psi_d, h(t, \psi)).
   $$  
   因此，对 $j = 1, \ldots, d-1$，有 $\dot{\psi}_j = \psi_{j+1}$，这意味着 $\psi_j = \psi_1^{(j-1)}$。特别地，$\psi = \psi_1^{\langle d \rangle}$。此外，$\dot{\psi}_d = h(t, \psi) = h(t, \psi_1^{\langle d \rangle})$，但 $\dot{\psi}_d = \psi_1^{(d)}$，所以 $\psi_1^{(d)} = h(t, \psi_1^{\langle d \rangle})$。因此 $\psi_1$ 是 $\mathcal{I}(s, z, h)$ 的解。

3. 由 (1) 和 (2)，解的存在唯一性在两个问题之间一一对应。具体地：
   - 若 $\mathcal{I}(s, z, h)$ 有唯一解 $\phi$，则 $\phi^{\langle d \rangle}$ 是 $\mathcal{I}(s, z, f)$ 的解。若 $\psi$ 是另一个解，则由 (2)，$\psi_1$ 是 $\mathcal{I}(s, z, h)$ 的解，故 $\psi_1 = \phi$，从而 $\psi = \phi^{\langle d \rangle}$。唯一性得证。
   - 反之，若 $\mathcal{I}(s, z, f)$ 有唯一解 $\psi$，则由 (2)，$\psi_1$ 是 $\mathcal{I}(s, z, h)$ 的解。若 $\phi$ 是另一个解，则由 (1)，$\phi^{\langle d \rangle}$ 是 $\mathcal{I}(s, z, f)$ 的解，故 $\phi^{\langle d \rangle} = \psi$，从而 $\phi = \psi_1$。唯一性得证。

### 2.2 高阶常系数线性方程的求解

**定义 2.4（d阶常系数线性ODE）**  
设 $a = (a_0, a_1, \cdots, a_{d-1}) \in \mathbb{R}^d$，$I \subset \mathbb{R}$ 是一个区间，$b: I \to \mathbb{R}$ 连续。一个d阶常系数线性常微分方程是形如  
$$
x^{(d)} = \sum_{j=0}^{d-1} a_j x^{(j)} + b(t)
$$  
的方程。若 $b \equiv 0$，则称为齐次；否则称为非齐次。

**定义 2.5（初值问题）**  
取定 $(s, z) \in I \times \mathbb{R}^d$，初值问题 $\mathcal{I}(s, z; a, b)$ 为：  
$$
\begin{cases}
x^{(d)} = \sum_{j=0}^{d-1} a_j x^{(j)} + b(t), \\
x^{\langle d \rangle}(s) = z.
\end{cases}
$$

为求解此问题，定义矩阵 $A_a \in M_d(\mathbb{R})$ 和向量函数 $B: I \to \mathbb{R}^d$ 为：  
$$
A_a = \begin{pmatrix}
0 & 1 & 0 & \cdots & 0 \\
0 & 0 & 1 & \cdots & 0 \\
\vdots & \vdots & \vdots & \ddots & \vdots \\
0 & 0 & 0 & \cdots & 1 \\
a_0 & a_1 & a_2 & \cdots & a_{d-1}
\end{pmatrix}, \quad
B(t) = \begin{pmatrix}
0 \\ 0 \\ \vdots \\ 0 \\ b(t)
\end{pmatrix}.
$$

考虑一阶初值问题：  
$$
\mathcal{I}(s, z; A_a, B): \quad \dot{x} = A_a x + B(t), \quad x(s) = z.
$$

由引理2.1，若 $\psi = (\psi_1, \psi_2, \cdots, \psi_d)$ 是 $\mathcal{I}(s, z; A_a, B)$ 的解，则 $\psi_1$ 是 $\mathcal{I}(s, z; a, b)$ 的解。

由于 $A_a$ 是常数矩阵，此一阶系统是常系数线性系统，其解可由矩阵指数表示。具体地，解为  
$$
\psi(t) = e^{(t-s)A_a} z + \int_s^t e^{(t-\tau)A_a} B(\tau) \, d\tau.
$$  
因此，原高阶方程的解 $x(t) = \psi_1(t)$。

**性质 2.2（$A_a$ 的特征值性质）**  
设 $a \in \mathbb{R}^d$，按上述定义 $A_a$。则 $A_a$ 的每个特征值的几何重数均为 1。

**证明：**  
矩阵 $A_a$ 的特征多项式为  
$$
p(\lambda) = \lambda^d - a_{d-1} \lambda^{d-1} - \cdots - a_1 \lambda - a_0.
$$  
对于每个特征值 $\lambda$，考虑矩阵 $A_a - \lambda I$。其形式为  
$$
A_a - \lambda I = \begin{pmatrix}
-\lambda & 1 & 0 & \cdots & 0 \\
0 & -\lambda & 1 & \cdots & 0 \\
\vdots & \vdots & \vdots & \ddots & \vdots \\
0 & 0 & 0 & \cdots & 1 \\
a_0 & a_1 & a_2 & \cdots & a_{d-1} - \lambda
\end{pmatrix}.
$$  
该矩阵的秩至少为 $d-1$，因为前 $d-1$ 行线性无关（每行有一个主元）。因此，零空间的维数为 1，即几何重数为 1。