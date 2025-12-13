---
title: Ch4.4 周期系数线性方程
tags:
  - math
  - ode
categories:
  - math
  - ode
excerpt: ODE第三部分
index_img: /img/ode.jpg
banner_img: /img/ode.jpg
abbrlink: ec1e15b8
date: 2025-11-26 21:59:33
---
### 4.1 一维周期系数线性方程

**定义 4.1（周期系数线性方程）**  
设函数 $a: \mathbb{R} \to \mathbb{R}$ 连续，且存在常数 $T > 0$ 使得 $a(t + T) = a(t)$ 对所有 $t \in \mathbb{R}$ 成立。一维周期系数线性方程定义为：
$$
\dot{x} = a(t) x,
$$
其中 $x = x(t)$ 是未知函数，$\dot{x} = \frac{dx}{dt}$。

**定义 4.2（初值问题与基本解）**  
对于初值问题：
$$
\dot{x} = a(t) x, \quad x(s) = 1,
$$
其解记为 $\Pi(t, s)$，称为基本解。具体地，
$$
\Pi(t, s) = e^{\int_s^t a(\tau) \, d\tau}.
$$
特别地，记 $\Pi(t) = \Pi(t, 0)$。对于一般初值 $x(s) = z$，解为 $\phi(t, s, z) = \Pi(t, s) z$.

**引理 4.1（周期性）**  
对于所有 $s, t \in \mathbb{R}$，有：
$$
\Pi(t + T, s + T) = \Pi(t, s).
$$

**证明**  
由定义：
$$
\Pi(t + T, s + T) = e^{\int_{s+T}^{t+T} a(\tau) \, d\tau}.
$$
令 $u = \tau - T$，则 $du = d\tau$，积分限变为 $\int_s^t a(u + T) \, du$。由 $a$ 的周期性，$a(u + T) = a(u)$，所以：
$$
\Pi(t + T, s + T) = e^{\int_s^t a(u) \, du} = \Pi(t, s).
$$

**性质 4.1（有界解的存在性）**  
方程 $\dot{x} = a(t) x$ 存在非零有界解当且仅当 $\int_0^T a(\tau) \, d\tau = 0$。

**证明**  
记 $\lambda = \Pi(T) = e^{\int_0^T a(\tau) \, d\tau}$。对于任意 $t \in \mathbb{R}$，存在唯一 $n \in \mathbb{Z}$ 和 $s \in [0, T)$ 使得 $t = nT + s$。则：
$$
\Pi(t) = \Pi(t, nT) \Pi(nT) = \Pi(s) \lambda^n.
$$
由于 $\Pi(s)$ 在 $[0, T]$ 上连续且正，存在常数 $C \geq 1$ 使得 $C^{-1} \leq \Pi(s) \leq C$ 对所有 $s \in [0, T]$。因此：
- 若 $\lambda = 1$，则 $|\Pi(t)| \leq C$，解有界。
- 若 $\lambda \neq 1$，则 $|\lambda^n|$ 无界，解无界。
而 $\lambda = 1$ 当且仅当 $\int_0^T a(\tau) \, d\tau = 0$。

**性质 4.2（解的指数分解）**  
设 $\mu = \frac{\log \lambda}{T}$，定义函数 $P: \mathbb{R} \to \mathbb{R}$ 为：
$$
P(t) = \Pi(t) e^{-\mu t}.
$$
则 $P$ 是 $C^1$ 光滑、以 $T$ 为周期的正函数，且：
$$
\Pi(t) = P(t) e^{\mu t}.
$$

**证明**  
首先，$P$ 是 $C^1$ 光滑，因为 $\Pi(t)$ 和 $e^{-\mu t}$ 均 $C^1$ 光滑。其次，验证周期性：
$$
\begin{aligned}
P(t + T) &= \Pi(t + T) e^{-\mu (t + T)} \\
&= \Pi(t + T, T) \Pi(T) e^{-\mu T} e^{-\mu t} \\
&= \Pi(t, 0) \lambda \lambda^{-1} e^{-\mu t} = \Pi(t) e^{-\mu t} = P(t).
\end{aligned}
$$
其中使用了 $\Pi(t + T, T) = \Pi(t, 0)$（由引理 4.1）和 $e^{\mu T} = \lambda$。因此 $P$ 以 $T$ 为周期。

### 4.2 矩阵的对数

**定义 4.3（矩阵对数）**  
设 $A \in M_d(\mathbb{C})$。如果存在矩阵 $B \in M_d(\mathbb{C})$ 使得 $A = e^B$，则称 $B$ 是 $A$ 的一个对数。

**性质 4.3（矩阵对数的存在性）**  
矩阵 $A \in M_d(\mathbb{C})$ 有对数当且仅当 $\det A \neq 0$。

**证明**  
- 必要性：若 $A = e^B$，则 $\det A = e^{\operatorname{tr}(B)} \neq 0$。
- 充分性：由于 $A$ 相似于 Jordan 标准型，只需证明每个 Jordan 块有对数。设 $J_\lambda(m)$ 是 $m \times m$ Jordan 块，$\lambda \neq 0$。则：
  $$
  J_\lambda(m) = \lambda I_m + N_m = \lambda (I_m + \lambda^{-1} N_m),
  $$
  其中 $N_m$ 是幂零矩阵（$N_m^m = 0$）。定义：
  $$
  B = \mu I_m + \sum_{k=1}^{m-1} \frac{(-1)^{k+1} N_m^k}{k \lambda^k},
  $$
  其中 $\mu \in \mathbb{C}$ 满足 $e^\mu = \lambda$。则直接计算得 $e^B = J_\lambda(m)$。

**性质 4.4（实矩阵的对数）**  
设 $A \in M_d(\mathbb{R})$ 可逆。
1. 存在实矩阵 $B \in M_d(\mathbb{R})$ 使得 $A = e^B$ 当且仅当：若 $\lambda < 0$ 是 $A$ 的特征值，则其 Jordan 块在 Jordan 标准型中出现偶数次。
2. 若 $A$ 无负特征值，则存在实矩阵 $B \in M_d(\mathbb{R})$ 使得 $A = e^B$。
3. 总存在实矩阵 $B \in M_d(\mathbb{R})$ 使得 $A^2 = e^B$.

**证明**  
（略，留作习题。）


### 4.3 高维一阶周期系统的解

**定义 4.4（高维周期系统）**  
设函数 $A: \mathbb{R} \to M_d(\mathbb{R})$ 连续，且存在常数 $T > 0$ 使得 $A(t + T) = A(t)$ 对所有 $t \in \mathbb{R}$ 成立。高维周期系数线性方程定义为：
$$
\dot{x} = A(t) x,
$$
其中 $x = x(t) \in \mathbb{R}^d$。

**定义 4.5（基本解矩阵与首次回归矩阵）**  
设 $\Pi(t, s)$ 是初值问题：
$$
\dot{X} = A(t) X, \quad X(s) = I_d
$$
的解矩阵，称为基本解矩阵。记 $\Pi(t) = \Pi(t, 0)$。首次回归矩阵定义为 $M = \Pi(T)$。

**引理 4.2（周期性）**  
对于所有 $s, t \in \mathbb{R}$，有：
$$
\Pi(t + T, s + T) = \Pi(t, s).
$$

**证明**  
令 $\Phi(t) = \Pi(t + T, s + T)$。则：
- $\Phi(s) = \Pi(s + T, s + T) = I_d$。
- $\Phi'(t) = \frac{\partial \Pi}{\partial t}(t + T, s + T) = A(t + T) \Pi(t + T, s + T) = A(t) \Phi(t)$。
由解的唯一性，$\Phi(t) = \Pi(t, s)$。

**性质 4.5（周期分解）**  
存在矩阵 $B \in M_d(\mathbb{R})$ 使得 $M^2 = e^{2TB}$。定义函数 $P: \mathbb{R} \to M_d(\mathbb{R})$ 为：
$$
P(t) = \Pi(t) e^{-tB}.
$$
则 $P$ 是以 $2T$ 为周期的 $C^1$ 光滑可逆矩阵值函数，且 $P^{-1}$ 也 $C^1$ 光滑，并满足：
$$
\Pi(t) = P(t) e^{tB}.
$$

**证明**  
由性质 4.4(3)，存在实矩阵 $\hat{B}$ 使得 $M^2 = e^{\hat{B}}$。令 $B = \frac{\hat{B}}{2T}$，则 $e^{2TB} = M^2$。定义 $P(t) = \Pi(t) e^{-tB}$。  
- $P$ 是 $C^1$ 光滑且可逆，因为 $\Pi(t)$ 和 $e^{-tB}$ 均 $C^1$ 光滑可逆。  
- 验证周期性：
  $$
  \begin{aligned}
  P(t + 2T) &= \Pi(t + 2T) e^{-B(t + 2T)} \\
  &= \Pi(t + 2T, 2T) \Pi(2T) e^{-2TB} e^{-tB} \\
  &= \Pi(t) M^2 M^{-2} e^{-tB} = \Pi(t) e^{-tB} = P(t).
  \end{aligned}
  $$
  其中使用了 $\Pi(2T) = M^2$ 和 $e^{2TB} = M^2$。因此 $P$ 以 $2T$ 为周期。

**定理 4.1（有界解的存在性）**  
设 $M$ 是系统 $\dot{x} = A(t) x$ 的首次回归矩阵。
1. 方程存在非零有界解当且仅当 $M$ 有模为 1 的特征值。
2. 方程的所有非零解均有界当且仅当 $M$ 可对角化且所有特征值的模均为 1。

**证明**  
由性质 4.5，解可写为 $\Pi(t) z = P(t) e^{tB} z$，其中 $z \neq 0$。由于 $P$ 和 $P^{-1}$ 连续且周期，存在常数 $C \geq 1$ 使得：
$$
C^{-1} \| e^{tB} z \| \leq \| \Pi(t) z \| \leq C \| e^{tB} z \|.
$$
因此，解的有界性与 $e^{tB} z$ 的有界性等价。  
由 $e^{2TB} = M^2$，矩阵 $B$ 的特征值 $\mu$ 满足 $e^{2T \mu}$ 是 $M^2$ 的特征值。  
1. 存在非零有界解当且仅当 $B$ 有实部为零的特征值，当且仅当 $M^2$ 有模为 1 的特征值，当且仅当 $M$ 有模为 1 的特征值。  
2. 所有非零解有界当且仅当 $B$ 可对角化且所有特征值实部为零，当且仅当 $M^2$ 可对角化且所有特征值模为 1，当且仅当 $M$ 可对角化且所有特征值模为 1。
