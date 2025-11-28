---
title: Ch4.1 矩阵的指数与常系数线性方程的求解
tags:
  - math
  - ode
categories:
  - math
  - ode
excerpt: ODE第三部分
index_img: /img/ode.jpg
banner_img: /img/ode.jpg
date: 2025-11-11 21:11:01
---
### 1.1 矩阵值级数与方阵的指数定义

**定义 1.1（矩阵值级数）**  
设 $\{A_n: n \geq 1\} \subset M_d(\mathbb{R})$。称表达式 $\sum_{n=1}^{\infty} A_n$ 为矩阵值级数。该级数收敛，若存在 $B \in M_d(\mathbb{R})$ 使得部分和 $S_m := \sum_{n=1}^{m} A_n$ 满足 $S_m \to B$（在矩阵范数 $\|\cdot\|$ 下）。此时记 $B = \sum_{n=1}^{\infty} A_n$。

**引理 1.1（矩阵范数的性质）**  
对任意 $A, B \in M_d(\mathbb{R}), \lambda \in \mathbb{R}$，有  
1. $\|\lambda A\| = |\lambda| \|A\|$；  
2. $\|A+B\| \leq \|A\| + \|B\|$；  
3. $\|AB\| \leq \|A\| \|B\|$。  
特别地，对任意 $n \in \mathbb{N}$，有 $\|A^n\| \leq \|A\|^n$。

**引理 1.2（级数收敛的充分条件）**  
设 $\{A_n: n \geq 1\} \subset M_d(\mathbb{R})$。若级数 $\sum_{n=1}^{\infty} \|A_n\|$ 收敛（即绝对收敛），则级数 $\sum_{n=1}^{\infty} A_n$ 在 $M_d(\mathbb{R})$ 中收敛。

**证明**：  
记 $S_m = \sum_{n=1}^{m} A_n$。对任意 $m, k \in \mathbb{N}$，有  
$$
\|S_{m+k} - S_m\| = \left\|\sum_{n=m+1}^{m+k} A_n\right\| \leq \sum_{n=m+1}^{m+k} \|A_n\| \leq \sum_{n=m+1}^{\infty} \|A_n\| \to 0 \quad (m \to \infty).
$$  
故 $\{S_m\}$ 是 Cauchy 列。由 $M_d(\mathbb{R})$ 完备，级数收敛。

**例 1.1**  
设 $A \in M_d(\mathbb{R})$ 满足 $\|A\| < 1$，则 $\sum_{n=0}^{\infty} A^n$ 收敛。进一步，$I - A$ 可逆，且  
$$
\sum_{n=0}^{\infty} A^n = (I - A)^{-1}.
$$

**定义 1.2（矩阵指数）**  
设 $A \in M_d(\mathbb{R})$，定义矩阵指数 $e^A$ 为  
$$
e^A := \sum_{n=0}^{\infty} \frac{A^n}{n!}.
$$  
该级数绝对收敛，因为 $\sum_{n=0}^{\infty} \left\|\frac{A^n}{n!}\right\| \leq \sum_{n=0}^{\infty} \frac{\|A\|^n}{n!} = e^{\|A\|} < \infty$。

**例 1.2**  
设 $D = \mathrm{diag}(\lambda_1, \dots, \lambda_d)$，则 $e^D = \mathrm{diag}(e^{\lambda_1}, \dots, e^{\lambda_d})$。特别地，$e^0 = I_d$。

**例 1.3**  
记 $d$ 阶幂零矩阵 $N$ 为  
$$
N = \begin{bmatrix}
0 & 1 & & & \\
  & 0 & 1 & & \\
  &   & \ddots & \ddots & \\
  &   &        & 0 & 1 \\
  &   &        &   & 0
\end{bmatrix}.
$$  
则 $N^d = 0$，于是  
$$
e^N = \sum_{n=0}^{d-1} \frac{N^n}{n!} = 
\begin{bmatrix}
1 & 1 & \frac{1}{2!} & \cdots & \frac{1}{(d-1)!} \\
  & 1 & 1 & \ddots & \vdots \\
  &   & \ddots & \ddots & \frac{1}{2!} \\
  &   &        & 1 & 1 \\
  &   &        &   & 1
\end{bmatrix}.
$$  
类似地，$e^{tN} = \sum_{n=0}^{d-1} \frac{t^n N^n}{n!}$ 具有类似结构。

### 1.2 矩阵指数的基本性质

**性质 1.1（指数加法定理）**  
设 $A, B \in M_d(\mathbb{R})$ 且 $AB = BA$，则  
$$
e^{A+B} = e^A e^B.
$$

**证明**：  
记 $S_N(A) = \sum_{n=0}^{N} \frac{A^n}{n!}$。由 $AB=BA$，有  
$$
S_N(A) S_N(B) = \sum_{k=0}^{N} \sum_{l=0}^{N} \frac{A^k B^l}{k! l!}, \quad
S_{2N}(A+B) = \sum_{n=0}^{2N} \frac{1}{n!} \sum_{k+l=n} \frac{n! A^k B^l}{k! l!}.
$$  
于是  
$$
\begin{aligned}
&\left\| S_{2N}(A+B) - S_N(A) S_N(B) \right\| \\
&\leq \sum_{k=N+1}^{\infty} \sum_{l=0}^{\infty} \frac{\|A\|^k \|B\|^l}{k! l!} + \sum_{k=0}^{\infty} \sum_{l=N+1}^{\infty} \frac{\|A\|^k \|B\|^l}{k! l!} \\
&= e^{\|B\|} \sum_{k=N+1}^{\infty} \frac{\|A\|^k}{k!} + e^{\|A\|} \sum_{l=N+1}^{\infty} \frac{\|B\|^l}{l!} \to 0 \quad (N \to \infty).
\end{aligned}
$$  
同时 $S_{2N}(A+B) \to e^{A+B}$，$S_N(A) S_N(B) \to e^A e^B$，故得证。

**推论 1.1**  
对任意 $A \in M_d(\mathbb{R})$，$e^A$ 可逆，且 $(e^A)^{-1} = e^{-A}$。

**证明**：  
由 $A(-A) = (-A)A$，应用性质 1.1 得 $e^A e^{-A} = e^{-A} e^A = e^0 = I$。

**例 1.4**  
记 $I$ 为二阶单位阵，$J = \begin{bmatrix} 0 & 1 \\ -1 & 0 \end{bmatrix}$，$A = \begin{bmatrix} a & b \\ -b & a \end{bmatrix}$。则 $A = aI + bJ$，且 $IJ=JI$。计算得  
$$
e^{aI} = e^a I, \quad e^{bJ} = R_b = \begin{bmatrix} \cos b & \sin b \\ -\sin b & \cos b \end{bmatrix}.
$$  
故 $e^A = e^a R_b$，$e^{tA} = e^{at} R_{bt}$。

**例 1.5**  
记 $d$ 阶 Jordan 块 $J_\lambda(d) = \lambda I_d + N_d$。则 $\lambda I_d$ 与 $N_d$ 可交换，故  
$$
e^{J_\lambda(d)} = e^{\lambda I_d} e^{N_d} = e^\lambda e^{N_d}, \quad e^{t J_\lambda(d)} = e^{\lambda t} e^{t N_d}.
$$

**性质 1.2（矩阵指数函数的光滑性）**  
设 $A \in M_d(\mathbb{R})$，定义 $\phi(t) = e^{tA}$。则 $\phi$ 是 $C^\infty$ 函数，且  
$$
\phi^{(n)}(t) = A^n \phi(t) = \phi(t) A^n.
$$

**证明**：  
令 $\phi_n(t) = \sum_{k=0}^{n} \frac{(tA)^k}{k!}$，则 $\phi_n$ 连续可微，且  
$$
\phi_n'(t) = A \sum_{k=0}^{n-1} \frac{(tA)^k}{k!} = \sum_{k=0}^{n-1} \frac{(tA)^k}{k!} A.
$$  
在紧区间 $[-M, M]$ 上，$\phi_n(t) \rightrightarrows e^{tA}$，$\phi_n'(t) \rightrightarrows A e^{tA}$ 且 $\phi_n'(t) \rightrightarrows e^{tA} A$。由向量值函数的一致收敛定理，$\phi$ 连续可微，且 $\phi'(t) = A e^{tA} = e^{tA} A$。归纳可得 $\phi$ 光滑。

**引理 1.3（矩阵指数生成的流）**  
定义 $\phi: \mathbb{R} \times \mathbb{R}^d \to \mathbb{R}^d$ 为 $\phi(t, z) = e^{tA} z$。则 $\phi$ 是 $\mathbb{R}^d$ 上的光滑流。

**证明**：  
对任意 $t, s \in \mathbb{R}$，由 $tA$ 与 $sA$ 可交换，有  
$$
e^{(t+s)A} = e^{tA + sA} = e^{tA} e^{sA}.
$$  
故 $\phi(t+s, z) = \phi(t, \phi(s, z))$，且 $\phi(0, z) = z$。由性质 1.2，$\phi$ 光滑。

### 1.3 常系数线性方程的解

**定理 1.1（常系数线性方程的解）**  
设 $A \in M_d(\mathbb{R})$，初值问题  
$$
\mathcal{I}(0, z): \quad \dot{x} = A x, \quad x(0) = z
$$  
的解在 $\mathbb{R}$ 上存在唯一，且由 $\phi(t, z) = e^{tA} z$ 给出。系统 $\dot{x} = A x$ 的相流存在且光滑。

**证明**：  
由常微分方程理论，解在 $\mathbb{R}$ 上存在唯一。验证：$\phi(0, z) = e^{0} z = z$，且  
$$
\frac{d}{dt} \phi(t, z) = \frac{d}{dt} (e^{tA} z) = A e^{tA} z = A \phi(t, z).
$$  
故为解。由引理 1.3，相流光滑。

#### 1.3.1 矩阵指数的计算

**引理 1.4（相似矩阵的指数）**  
设 $A = P B P^{-1}$，则 $e^A = P e^B P^{-1}$。

**证明**：  
对任意 $n$，$A^n = P B^n P^{-1}$，故 $S_n(A) = P S_n(B) P^{-1}$，取极限即得。

**推论 1.2（矩阵指数的 Jordan 分解）**  
设 $A$ 有 Jordan 分解  
$$
A = P \begin{bmatrix} J_1 & & \\ & \ddots & \\ & & J_r \end{bmatrix} P^{-1},
$$  
则  
$$
e^A = P \begin{bmatrix} e^{J_1} & & \\ & \ddots & \\ & & e^{J_r} \end{bmatrix} P^{-1}.
$$  
若 $A$ 的特征值（含重数）为 $\lambda_1, \dots, \lambda_d$，则 $e^A$ 的特征值为 $e^{\lambda_1}, \dots, e^{\lambda_d}$。

**应用（体积变化）**  
系统 $\dot{x} = A x$ 的相流为 $\phi(t, z) = e^{tA} z$。由于  
$$
\det(e^{tA}) = \prod_{j=1}^d e^{\lambda_j t} = e^{t \sum_{j=1}^d \lambda_j} = e^{t \mathrm{tr} A},
$$  
故相流保体积当且仅当 $\mathrm{tr} A = 0$。

#### 1.3.2 复 Jordan 块的实化

考虑 $A \in M_d(\mathbb{R})$ 有复特征值 $\lambda = a+bi$（$b \neq 0$）对应的 $m$ 阶 Jordan 块 $J_\lambda$，则 $J_{\bar{\lambda}}$ 也出现。设  
$$
A = P \begin{bmatrix} J_\lambda & \\ & J_{\bar{\lambda}} \end{bmatrix} P^{-1}.
$$  
以 $m=2$ 为例，记 $P$ 的前两列为 $u, v$，则  
$$
A u = \lambda u, \quad A v = u + \lambda v.
$$  
写 $u = u_1 + i u_2$, $v = v_1 + i v_2$（$u_i, v_j \in \mathbb{R}^d$）。令 $Q = [u_1, u_2, v_1, v_2]$，则 $Q$ 可逆，且  
$$
A Q = Q \begin{bmatrix} a & b & 1 & 0 \\ -b & a & 0 & 1 \\ 0 & 0 & a & b \\ 0 & 0 & -b & a \end{bmatrix} =: Q J_B Q^{-1},
$$  
其中 $B = \begin{bmatrix} a & b \\ -b & a \end{bmatrix}$。$J_B$ 称为实 Jordan 标准型。

一般地，定义 $2m$ 阶实方阵  
$$
J_B(1) = B, \quad J_B(m) = \begin{bmatrix} B & I & & \\ & B & \ddots & \\ & & \ddots & I \\ & & & B \end{bmatrix} \quad (m \geq 2).
$$  
记 $D = \mathrm{diag}(B, \dots, B)$，$N$ 为相应幂零矩阵，则 $J_B(m) = D + N$，且 $DN = ND$，故  
$$
e^{J_B(m)} = e^D e^N = e^B \begin{bmatrix} I & I & \frac{I}{2!} & \cdots & \frac{I}{(m-1)!} \\ & I & I & \ddots & \vdots \\ & & \ddots & \ddots & \frac{I}{2!} \\ & & & I & I \\ & & & & I \end{bmatrix}.
$$

**推论 1.3（实 Jordan 分解下的指数）**  
设 $A \in M_d(\mathbb{R})$ 有实 Jordan 分解  
$$
A = Q \begin{bmatrix} J_1 & & \\ & \ddots & \\ & & J_r \end{bmatrix} Q^{-1},
$$  
其中 $J_k$ 为实 Jordan 块 $J_\lambda(m)$ 或 $J_B(m')$，则  
$$
e^A = Q \begin{bmatrix} e^{J_1} & & \\ & \ddots & \\ & & e^{J_r} \end{bmatrix} Q^{-1},
$$  
各 $e^{J_k}$ 按例 1.5 或上式计算。

### 1.4 线性系统的共轭

**定义 1.3（拓扑共轭、光滑共轭、线性共轭）**  
设 $A, B \in M_d(\mathbb{R})$。系统 $\dot{x} = A x$ 与 $\dot{y} = B y$ 称为：  
- **拓扑共轭**：若存在同胚 $F: \mathbb{R}^d \to \mathbb{R}^d$，使得对任意 $t \in \mathbb{R}, z \in \mathbb{R}^d$，有  
  $$
  F(e^{tA} z) = e^{tB} F(z).
  $$  
- **光滑共轭**：若上述 $F$ 为微分同胚。  
- **线性共轭**：若上述 $F$ 为线性同构。

**性质 1.3**  
系统 $\dot{x} = A x$ 与 $\dot{y} = B y$ 光滑共轭当且仅当线性共轭，当且仅当 $A$ 与 $B$ 相似。

**证明**：  
若光滑共轭，对 $F(e^{tA} z) = e^{tB} F(z)$ 求导并令 $z=0$，得 $F'(0) A = B F'(0)$，故 $A$ 与 $B$ 相似。  
若 $A = P B P^{-1}$，则 $e^{tA} = P e^{tB} P^{-1}$。取 $F(z) = P^{-1} z$，则线性共轭。  
线性共轭显然蕴含光滑共轭。

**定理 1.2（双曲系统的拓扑共轭）**  
设 $A, B \in M_d(\mathbb{R})$ 均为双曲矩阵（即特征值实部均非零）。则 $\dot{x} = A x$ 与 $\dot{y} = B y$ 拓扑共轭当且仅当 $\mathrm{sgn}(A) = \mathrm{sgn}(B)$（即稳定维数相同且不稳定维数相同）。

**证明**：
见作业 6 Ex 2

### 1.5 非齐次方程的求解

**性质 1.4（非齐次方程的解）**  
设 $A \in M_d(\mathbb{R})$，$I \subset \mathbb{R}$ 为区间，$b: I \to \mathbb{R}^d$ 连续。初值问题  
$$
\dot{x} = A x + b(t), \quad x(s) = z
$$  
的解为  
$$
\phi(t, s, z) = e^{(t-s)A} z + \int_s^t e^{(t-\tau)A} b(\tau) \, d\tau.
$$  
且解在 $I \times I \times \mathbb{R}^d$ 上连续。

**证明**：  
由常微分方程理论，解存在唯一。验证：$\phi(s, s, z) = z$，且  
$$
\frac{\partial \phi}{\partial t}(t, s, z) = A e^{(t-s)A} z + b(t) + \int_s^t A e^{(t-\tau)A} b(\tau) \, d\tau = A \phi(t, s, z) + b(t).
$$  
故为解。