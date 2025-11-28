---
title: Ch4.3 齐次线性方程的解空间及非齐次线性方程的解结构
tags:
  - math
  - ode
categories:
  - math
  - ode
excerpt: ODE第三部分
index_img: /img/ode.jpg
banner_img: /img/ode.jpg
date: 2025-11-21 21:51:18
---
### 3.1 初值问题的解的形式

**定义 3.1（非自治线性方程初值问题）**  
设 $I \subseteq \mathbb{R}$ 是一个区间，$A: I \to M_d(\mathbb{R})$ 和 $b: I \to \mathbb{R}^d$ 是连续函数，$(s,z) \in I \times \mathbb{R}^d$。非自治线性方程的初值问题定义为：
$$
\mathcal{I}(s,z;A,b): \quad \dot{x} = A(t)x + b(t); \quad x(s) = z.
$$

**定义 3.2（齐次方程的基本解矩阵）**  
设 $\Pi(t,s,B)$ 是矩阵初值问题
$$
\mathcal{I}(s,B;A): \quad \dot{X} = A(t)X; \quad X(s) = B \in M_d(\mathbb{R})
$$
的解。当 $B = I_d$ 时，定义 $\Pi(t,s) = \Pi(t,s,I_d)$。

**定理 3**  
设 $\Pi: I \times I \to M_d(\mathbb{R})$ 如上定义，则：
1. $\Pi \in C^1(I \times I)$。
2. 对任意 $\tau, s, t \in I$，有 $\Pi(t,\tau) = \Pi(t,s)\Pi(s,\tau)$。特别地，$\Pi(t,s)$ 可逆且 $\Pi(t,s)^{-1} = \Pi(s,t)$。
3. 对任意 $(s,z) \in I \times \mathbb{R}^d$，初值问题 $\mathcal{I}(s,z;A)$ 的解为 $\phi(t,s,z) = \Pi(t,s)z$，且 $\phi \in C^1(I \times I \times \mathbb{R}^d)$。
4. 对任意 $(s,z) \in I \times \mathbb{R}^d$，初值问题 $\mathcal{I}(s,z;A,b)$ 的解为
$$
\psi(t,s,z) = \Pi(t,s)z + \int_s^t \Pi(t,\tau)b(\tau)d\tau,
$$
且 $\psi \in C^1(I \times I \times \mathbb{R}^d)$。

**证明**：
1. 由 $\frac{\partial \Pi}{\partial t}(t,s) = A(t)\Pi(t,s)$ 及 $A, \Pi$ 连续，得 $\frac{\partial \Pi}{\partial t}$ 连续。  
   由积分方程
   $$
   \Pi(t,s) = I_d + \int_s^t A(\tau)\Pi(\tau,s)d\tau
   $$
   形式求导得
   $$
   \frac{\partial \Pi}{\partial s}(t,s) = -A(s) + \int_s^t A(\tau)\frac{\partial \Pi}{\partial s}(\tau,s)d\tau.
   $$
   令 $D(t,s) = \Phi(t,s,-A(s))$，其中 $\Phi$ 是 $\dot{Y} = A(t)Y, Y(s) = -A(s)$ 的解。由解的存在唯一性及连续性，得 $D \in C(I \times I)$。通过类似第三部分引理11的论证，可得 $\frac{\partial \Pi}{\partial s} = D$，故 $\frac{\partial \Pi}{\partial s}$ 连续。因此 $\Pi \in C^1(I \times I)$。

2. 令 $\Phi_1(t) = \Pi(t,\tau), \Phi_2(t) = \Pi(t,s)\Pi(s,\tau)$。计算得：
   $$
   \begin{aligned}
   \Phi_1(s) &= \Pi(s,\tau), \\
   \Phi_1'(t) &= A(t)\Pi(t,\tau) = A(t)\Phi_1(t), \\
   \Phi_2(s) &= \Pi(s,s)\Pi(s,\tau) = \Pi(s,\tau), \\
   \Phi_2'(t) &= A(t)\Pi(t,s)\Pi(s,\tau) = A(t)\Phi_2(t).
   \end{aligned}
   $$
   由唯一性，$\Phi_1 = \Phi_2$。取 $t = s$ 得 $I_d = \Pi(s,t)\Pi(t,s)$，故 $\Pi(t,s)^{-1} = \Pi(s,t)$。

3. 直接验证：$\Pi(s,s)z = z$，且
   $$
   \frac{d}{dt}[\Pi(t,s)z] = A(t)\Pi(t,s)z.
   $$
   由1及线性函数的光滑性，得 $\phi \in C^1(I \times I \times \mathbb{R}^d)$。

4. 设 $\psi(t) = \Pi(t,s)z(t)$，代入方程得：
   $$
   \begin{aligned}
   \psi'(t) &= \Pi'(t,s)z(t) + \Pi(t,s)z'(t) = A(t)\Pi(t,s)z(t) + \Pi(t,s)z'(t), \\
   A(t)\psi(t) + b(t) &= A(t)\Pi(t,s)z(t) + b(t).
   \end{aligned}
   $$
   比较得 $\Pi(t,s)z'(t) = b(t)$，即 $z'(t) = \Pi(s,t)b(t)$。积分得：
   $$
   z(t) = z + \int_s^t \Pi(s,\tau)b(\tau)d\tau.
   $$
   因此
   $$
   \psi(t) = \Pi(t,s)z + \int_s^t \Pi(t,\tau)b(\tau)d\tau.
   $$
   由3及积分的光滑性，得 $\psi \in C^1(I \times I \times \mathbb{R}^d)$。□

**性质 6**  
设 $I$ 如上，则
$$
\det \Pi(t,s) = e^{\int_s^t \operatorname{tr} A(\tau)d\tau}.
$$

**证明**：  
令 $\eta(t) = \det \Pi(t,s)$，则 $\eta(s) = 1$。对 $\Pi(t+\delta,s)$ 进行Taylor展开：
$$
\Pi(t+\delta,s) = \Pi(t,s) + A(t)\Pi(t,s)\delta + R(\delta) = [I + A(t)\delta + R(\delta)\Pi(s,t)]\Pi(t,s),
$$
其中 $\|R(\delta)\| = o(\delta)$。取行列式得：
$$
\eta(t+\delta) = \det[I + A(t)\delta + R(\delta)\Pi(s,t)] \eta(t) = (1 + \operatorname{tr} A(t)\delta + o(\delta)) \eta(t).
$$
因此 $\eta'(t) = \operatorname{tr} A(t) \eta(t)$。解此一阶线性方程得：
$$
\eta(t) = e^{\int_s^t \operatorname{tr} A(\tau)d\tau} \eta(s) = e^{\int_s^t \operatorname{tr} A(\tau)d\tau}. \quad □
$$

### 3.2 齐次线性方程的解空间

#### 3.2.1 一阶齐次线性方程的解空间

**定理 4**  
设 $A: I \to M_d(\mathbb{R})$ 连续，则系统 $\dot{x} = A(t)x$ 的所有解构成一个 $d$ 维实线性空间。对任意固定 $s \in I$，$\Pi(t,s)$ 的列向量构成解空间的一组基。

**证明**：  
记解集合为 $X$。对任意 $\phi_1, \phi_2 \in X$ 和 $\lambda_1, \lambda_2 \in \mathbb{R}$，有
$$
(\lambda_1\phi_1 + \lambda_2\phi_2)' = A(t)(\lambda_1\phi_1 + \lambda_2\phi_2),
$$
故 $X$ 是线性空间。  
令 $\Pi(t,s) = [\pi_1(t), \cdots, \pi_d(t)]$。对任意 $\phi \in X$，有 $\phi(t) = \Pi(t,s)\phi(s)$，即 $\phi$ 可由 $\{\pi_1, \cdots, \pi_d\}$ 线性表示。  
取 $z = e_i$，则 $\pi_i(t) = \Pi(t,s)e_i$ 是 $\mathcal{I}(s,e_i;A)$ 的解，且 $\pi_i(s) = e_i$，故 $\{\pi_1, \cdots, \pi_d\}$ 线性无关。因此 $\dim X = d$。□

**定义 3.3（Wronski行列式）**  
设 $\phi_1, \cdots, \phi_d: I \to \mathbb{R}^d$ 连续，定义其Wronski行列式为：
$$
W(\phi_1, \cdots, \phi_d)(t) = \det[\phi_1(t), \cdots, \phi_d(t)].
$$

**性质 7**  
设 $\{\phi_1, \cdots, \phi_d\}$ 是 $\dot{x} = A(t)x$ 的一组解，记 $W(t) = W(\phi_1, \cdots, \phi_d)(t)$。则以下等价：
1. $\{\phi_1, \cdots, \phi_d\}$ 线性无关。
2. 存在 $s \in I$ 使得 $W(s) \neq 0$。
3. 对任意 $t \in I$，有 $W(t) \neq 0$。

**证明**：  
(3)⇒(2) 显然。  
(2)⇒(1)：若 $\{\phi_1, \cdots, \phi_d\}$ 线性相关，则存在非零 $\lambda \in \mathbb{R}^d$ 使得 $\sum \lambda_j \phi_j(s) = 0$，故 $W(s) = 0$，矛盾。  
(1)⇒(3)：反证法。假设存在 $s \in I$ 使得 $W(s) = 0$，则存在非零 $\lambda \in \mathbb{R}^d$ 使得 $\sum \lambda_j \phi_j(s) = 0$。令 $\psi = \sum \lambda_j \phi_j$，则 $\psi(s) = 0$。由唯一性，$\psi \equiv 0$，与线性无关矛盾。□

**定理 5（Abel-Liouville）**  
设 $\{\phi_1, \cdots, \phi_d\}$ 是 $\dot{x} = A(t)x$ 的一组解，记 $W(t) = W(\phi_1, \cdots, \phi_d)(t)$。对任意 $s \in I$，有
$$
W(t) = e^{\int_s^t \operatorname{tr} A(\tau)d\tau} W(s).
$$

**证明**：  
由 $\phi_j(t) = \Pi(t,s)\phi_j(s)$ 得
$$
[\phi_1(t), \cdots, \phi_d(t)] = \Pi(t,s)[\phi_1(s), \cdots, \phi_d(s)].
$$
取行列式并应用性质6即得结论。□

#### 3.2.2 高阶齐次线性方程的解空间

**定义 3.4（高阶齐次线性方程）**  
设 $a: I \to \mathbb{R}^d$ 连续，$a(t) = (a_0(t), \cdots, a_{d-1}(t))$。d阶齐次线性方程为：
$$
x^{(d)} = \sum_{j=0}^{d-1} a_j(t) x^{(j)}.
$$
初值问题为：
$$
\mathcal{I}(s,z;a(t)): \quad x^{(d)} = \sum_{j=0}^{d-1} a_j(t) x^{(j)}; \quad x^{\langle d \rangle}(s) = z,
$$
其中 $x^{\langle d \rangle} = (x, x', \cdots, x^{(d-1)})^T$。

**定义 3.5（伴随矩阵）**  
定义
$$
A_a(t) = 
\begin{bmatrix}
0 & 1 & 0 & \cdots & 0 \\
0 & 0 & 1 & \cdots & 0 \\
\vdots & \vdots & \vdots & \ddots & \vdots \\
0 & 0 & 0 & \cdots & 1 \\
a_0(t) & a_1(t) & a_2(t) & \cdots & a_{d-1}(t)
\end{bmatrix}.
$$

**推论 5**  
设 $\psi$ 是初值问题
$$
\dot{x} = A_a(t)x; \quad x(s) = z
$$
的解，则 $\mathcal{I}(s,z;a(t))$ 的解为 $\psi_1$。

**证明**：直接应用引理5。□

**定义 3.6（高阶Wronski行列式）**  
设 $\phi_1, \cdots, \phi_d \in C^{(d-1)}(I)$，定义其Wronski行列式为：
$$
W(\phi_1, \cdots, \phi_d)(t) = \det[\phi_1^{\langle d \rangle}(t), \cdots, \phi_d^{\langle d \rangle}(t)].
$$

**引理 6**  
设 $\phi_1, \cdots, \phi_d \in C^{(d-1)}(I)$。若存在 $s \in I$ 使得 $W(\phi_1, \cdots, \phi_d)(s) \neq 0$，则 $\phi_1, \cdots, \phi_d$ 线性无关。

**证明**：  
逆否命题。若 $\phi_1, \cdots, \phi_d$ 线性相关，则存在非零 $\lambda \in \mathbb{R}^d$ 使得 $\sum \lambda_j \phi_j = 0$。逐次求导得 $\sum \lambda_j \phi_j^{(m)} = 0$ 对 $m = 0, \cdots, d-1$ 成立，故 $W(\phi_1, \cdots, \phi_d)(t) \equiv 0$。□

**定理 6**  
方程 (28) 的所有解构成一个 $d$ 维实线性空间。一组基为 $\{\phi_1, \cdots, \phi_d\}$，其中 $\phi_j$ 是 $\mathcal{I}(s,e_j;a(t))$ 的解。

**证明**：  
记解集合为 $X$，易证 $X$ 是线性空间。  
令 $\phi_j$ 为 $\mathcal{I}(s,e_j;a(t))$ 的解，则 $\phi_j^{\langle d \rangle}(s) = e_j$，故 $W(\phi_1, \cdots, \phi_d)(s) = 1 \neq 0$，由引理6得线性无关。  
对任意 $\phi \in X$，令 $\psi = \sum_{j=1}^d \phi^{(j-1)}(s) \phi_j$，则 $\psi^{\langle d \rangle}(s) = \phi^{\langle d \rangle}(s)$，由唯一性得 $\phi = \psi$。故 $\{\phi_1, \cdots, \phi_d\}$ 是基。□

**性质 8**  
设 $\{\phi_1, \cdots, \phi_d\}$ 是方程 (28) 的一组解，记 $W(t) = W(\phi_1, \cdots, \phi_d)(t)$。则以下等价：
1. $\{\phi_1, \cdots, \phi_d\}$ 线性无关。
2. 存在 $s \in I$ 使得 $W(s) \neq 0$。
3. 对任意 $t \in I$，有 $W(t) \neq 0$。

**证明**：  
(3)⇒(2) 显然。  
(2)⇒(1)：由引理6。  
(1)⇒(3)：反证法。假设存在 $s \in I$ 使得 $W(s) = 0$，则存在非零 $\lambda \in \mathbb{R}^d$ 使得 $\sum \lambda_j \phi_j^{\langle d \rangle}(s) = 0$。令 $\psi = \sum \lambda_j \phi_j$，则 $\psi^{\langle d \rangle}(s) = 0$。由唯一性得 $\psi \equiv 0$，矛盾。□

**推论 6**  
设 $\{\phi_1, \cdots, \phi_d\}$ 是方程 (28) 的一组解，记 $W(t) = W(\phi_1, \cdots, \phi_d)(t)$。对任意 $s \in I$，有
$$
W(t) = e^{\int_s^t a_{d-1}(\tau)d\tau} W(s).
$$

**证明**：  
对 $A_a(t)$ 应用定理5，注意到 $\operatorname{tr} A_a(t) = a_{d-1}(t)$。□

### 3.3 非齐次线性方程的解的结构

**性质 9**  
记齐次方程 $\dot{x} = A(t)x$ 的解空间为 $X$，非齐次方程 $\dot{x} = A(t)x + b(t)$ 的解集合为 $Y$。则
$$
Y = X + \phi,
$$
其中 $\phi$ 是非齐次方程的一个特解，可取为
$$
\phi(t) = \int_s^t \Pi(t,\tau)b(\tau)d\tau.
$$

**证明**：  
与线性代数中非齐次线性方程组的解结构相同。由定理3的4，特解可取为上述形式。□

**定义 3.7（高阶非齐次线性方程）**  
设 $a: I \to \mathbb{R}^d, b: I \to \mathbb{R}$ 连续，d阶非齐次线性方程为：
$$
x^{(d)} = \sum_{j=0}^{d-1} a_j(t) x^{(j)} + b(t).
$$
初值问题为：
$$
\mathcal{I}(s,z;a(t),b(t)): \quad x^{(d)} = \sum_{j=0}^{d-1} a_j(t) x^{(j)} + b(t); \quad x^{\langle d \rangle}(s) = z.
$$
定义 $B(t) = (0, \cdots, 0, b(t))^T \in \mathbb{R}^d$。

**性质 10**  
初值问题 $\mathcal{I}(s,z;a(t),b(t))$ 的解存在唯一，且由
$$
\psi(t,s,z) = \Pi(t,s)z + \int_s^t \Pi(t,\tau)B(\tau)d\tau
$$
的第一分量给出。记齐次方程 (28) 的解空间为 $X$，非齐次方程 (33) 的解集合为 $Y$，则
$$
Y = X + \phi,
$$
其中 $\phi$ 是上述向量值函数的第一分量。

**证明**：  
由推论5和性质9即得。□