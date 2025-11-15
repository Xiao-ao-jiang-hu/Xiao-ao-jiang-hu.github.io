---
title: ODE第一次大作业
tags:
  - math
  - ode
categories:
  - math
  - ode
excerpt: ODE第一次大作业
index_img: /img/ode.jpg
banner_img: /img/ode.jpg
abbrlink: f4794a59
date: 2025-11-14 13:28:22
---
用S表示定义在R上的$C^{\infty}$ 光滑函数全体。定义微分映射$D:\mathbb{S}\to\mathbb{Z}$ S为

$$D(f):=f^{\prime}.$$

更一般的，设$q(x)\;=\;x^{n}+a_{n-1}x^{n-1}+\cdots+a_{1}x+a_{0}$ 为首一多项式，定义$.q(D):\mathbb{S}\to\mathbb{S}$ 勺



$$q(D)(f):=f^{(n)}+a_{n-1}f^{(n-1)}+\cdots+a_{1}f^{\prime}+a_{0}f.$$

任给$\lambda\in\mathbb{C}$ 以及多项式$\mathbf{\nabla}p(t)$ ，称$\mathbf{i}p(t)e^{\lambda t}$ 是一个指数为λ的拟多项式。我们称多项$ 式 p$ 的次数为拟多项式$\Re p(t)e^{\lambda t}$ 的次数。设$d\in\mathbb{N}$ ，定义空间

$$\mathbb{P}(d;\lambda):=\{p(t)e^{\lambda t}:\operatorname{d e g}(p)<d\}.$$

## 1
证明：
1. $\mathbb{P}(d;\lambda)\subset\mathbb{S}$ 是一个d维线性空间，且它的一组基可取为

$$\{e^{\lambda t},t e^{\lambda t},\cdots,t^{d-1}e^{\lambda t}\}.$$

2. 写出D在基(1)下的矩阵。

### 解答
#### 1
首先，证明 $\mathbb{P}(d;\lambda) \subset \mathbb{S}$。由于 $e^{\lambda t}$ 是光滑函数，且多项式 $p(t)$ 是光滑函数，因此 $p(t)e^{\lambda t}$ 也是光滑函数，即 $\mathbb{P}(d;\lambda) \subset \mathbb{S}$。
其次，证明 $\mathbb{P}(d;\lambda)$ 是一个线性空间。任取 $f, g \in \mathbb{P}(d;\lambda)$，即 $f(t) = p(t)e^{\lambda t}$, $g(t) = q(t)e^{\lambda t}$，其中 $\deg(p) < d$, $\deg(q) < d$。对于任意常数 $c_1, c_2 \in \mathbb{C}$，有 $c_1 f(t) + c_2 g(t) = (c_1 p(t) + c_2 q(t)) e^{\lambda t}$。由于 $\deg(c_1 p + c_2 q) < d$，因此 $c_1 f + c_2 g \in \mathbb{P}(d;\lambda)$，故 $\mathbb{P}(d;\lambda)$ 是线性空间。
最后，证明维数为 $d$ 且基为 $\{e^{\lambda t}, t e^{\lambda t}, \cdots, t^{d-1}e^{\lambda t}\}$。设 $\varphi_k(t) = t^k e^{\lambda t}$ for $k=0,1,\ldots,d-1$。这些函数属于 $\mathbb{P}(d;\lambda)$。要证明它们线性无关，假设存在常数 $c_0, c_1, \ldots, c_{d-1}$ 使得
$$c_0 e^{\lambda t} + c_1 t e^{\lambda t} + \cdots + c_{d-1} t^{d-1} e^{\lambda t} = 0 \quad \forall t \in \mathbb{R}.$$
由于 $e^{\lambda t} \neq 0$，上式等价于
$$c_0 + c_1 t + \cdots + c_{d-1} t^{d-1} = 0 \quad \forall t \in \mathbb{R},$$
这意味着多项式恒为零，故 $c_0 = c_1 = \cdots = c_{d-1} = 0$，因此 $\{\varphi_0, \varphi_1, \ldots, \varphi_{d-1}\}$ 线性无关。此外，任意 $f \in \mathbb{P}(d;\lambda)$ 可写为 $f(t) = p(t)e^{\lambda t}$ 其中 $\deg(p) < d$，故 $p(t)$ 可表示为 $t^0, t^1, \ldots, t^{d-1}$ 的线性组合，即 $f$ 可表示为 $\varphi_0, \varphi_1, \ldots, \varphi_{d-1}$ 的线性组合。因此，$\{\varphi_0, \varphi_1, \ldots, \varphi_{d-1}\}$ 是 $\mathbb{P}(d;\lambda)$ 的一组基，维数为 $d$。

#### 2
$D = \begin{pmatrix}
\lambda & 1 & 0 & \cdots & 0 \\
0 & \lambda & 2 & \cdots & 0 \\
0 & 0 & \lambda & \cdots & 0 \\
\vdots & \vdots & \vdots & \ddots & \vdots \\
0 & 0 & 0 & \cdots & \lambda
\end{pmatrix}.$

## 2
设$\lambda_{1},\cdots,\lambda_{k}\in\mathbb{C} 互$ .异。设$d_{1},\cdots,d_{k}\in\mathbb{N}_{\circ}$ ，证明如下的和是直和：

$$\mathbb{P}(d_{1};\lambda_{1})+\cdots+\mathbb{P}(d_{k};\lambda_{k}).$$

### 解答
要证明该和为直和，需证：若存在 $f_i \in \mathbb{P}(d_i;\lambda_i)$（$i=1,\dots,k$）使得
$$f_1 + f_2 + \cdots + f_k = 0,$$
则必有 $f_1 = f_2 = \cdots = f_k = 0$。
设 $f_i(t) = p_i(t) e^{\lambda_i t}$，其中 $p_i(t)$ 是次数小于 $d_i$ 的多项式。则上述条件等价于：
$$p_1(t) e^{\lambda_1 t} + p_2(t) e^{\lambda_2 t} + \cdots + p_k(t) e^{\lambda_k t} = 0 \quad \text{对所有 } t \in \mathbb{R}. \tag{1}$$
我们使用数学归纳法证明。

- k=1:
$$p_1(t) e^{\lambda_1 t} = 0.$$
由于 $e^{\lambda_1 t} \neq 0$，必有 $p_1(t) \equiv 0$，即 $f_1 = 0$。结论成立。

- 假设对 $k-1$ 个互异指数的情况成立，即若$\sum_{i=1}^{k-1} p_i(t) e^{\lambda_i t} = 0,$ 则所有 $p_i(t) \equiv 0$。
假设存在不全为零的多项式 $p_1(t), \dots, p_k(t)$ 满足 (1) 式。不妨设 $p_k(t) \not\equiv 0$，并记 $m = \deg(p_k)$。
将 (1) 式两边乘以 $e^{-\lambda_k t}$，得：
$$p_1(t) e^{(\lambda_1 - \lambda_k)t} + \cdots + p_{k-1}(t) e^{(\lambda_{k-1} - \lambda_k)t} + p_k(t) = 0. \tag{2}$$
对 (2) 式两边求 $m+1$ 阶导数。由于 $p_k(t)$ 是 $m$ 次多项式，其 $m+1$ 阶导数为零。对前 $k-1$ 项应用莱布尼茨公式：
$$\frac{d^{m+1}}{dt^{m+1}} \left[ p_i(t) e^{(\lambda_i - \lambda_k)t} \right] = e^{(\lambda_i - \lambda_k)t} \sum_{j=0}^{m+1} \binom{m+1}{j} p_i^{(j)}(t) (\lambda_i - \lambda_k)^{m+1 - j}.$$
记
$$Q_i(t) = \sum_{j=0}^{m+1} \binom{m+1}{j} p_i^{(j)}(t) (\lambda_i - \lambda_k)^{m+1 - j},$$
则 $Q_i(t)$ 是多项式，且若 $p_i(t) \not\equiv 0$，则 $Q_i(t) \not\equiv 0$（因为最高次项系数非零）。
于是得到：
$$\sum_{i=1}^{k-1} Q_i(t) e^{(\lambda_i - \lambda_k)t} = 0. \tag{3}$$
由归纳假设，指数 $\lambda_1 - \lambda_k, \dots, \lambda_{k-1} - \lambda_k$ 互异，故 (3) 式 imply 所有 $Q_i(t) \equiv 0$。特别地，$Q_i(t)$ 的最高次项系数为 $(\lambda_i - \lambda_k)^{m+1}$ 乘以 $p_i(t)$ 的最高次项系数，由于 $\lambda_i \neq \lambda_k$，可得 $p_i(t) \equiv 0$（$i=1,\dots,k-1$）。
代入 (1) 式得：
$$p_k(t) e^{\lambda_k t} = 0 \quad \Rightarrow \quad p_k(t) \equiv 0,$$
与假设矛盾。
因此，所有 $p_i(t) \equiv 0$，即 $f_i = 0$。

## 3
对$q_{k}(x):=(x-\lambda)^{k}$ ,计算$\cdot q_{k}(D)(\mathbb{P}(d;\lambda))$ 。并由此构造k阶常系数微分方程

$$q_{k}(D)(f)=0$$

的一组基。

### 解答
设 $q_k(x) = (x - \lambda)^k$，则微分算子为：
$$q_k(D) = (D - \lambda)^k.$$
对于任意 $f(t) = p(t)e^{\lambda t} \in \mathbb{P}(d;\lambda)$，其中 $\deg(p) < d$，有：
$$(D - \lambda)(p(t)e^{\lambda t}) = p'(t)e^{\lambda t}.$$
反复应用此算子，得：
$$(D - \lambda)^k(p(t)e^{\lambda t}) = p^{(k)}(t)e^{\lambda t}.$$
由于 $\deg(p) < d$，若 $k \geq d$，则 $p^{(k)} \equiv 0$；若 $k < d$，则 $\deg(p^{(k)}) < d - k$。因此：
$$q_k(D)(\mathbb{P}(d;\lambda)) = 
\begin{cases}
\mathbb{P}(d - k; \lambda), & \text{若 } d > k, \\
\{0\}, & \text{若 } d \leq k.
\end{cases}$$
考虑齐次微分方程：
$$(D - \lambda)^k f = 0.$$
由第一步，当 $d = k$ 时：
$$q_k(D)(\mathbb{P}(k;\lambda)) = \{0\},$$
即 $\mathbb{P}(k;\lambda)$ 是方程的解空间。
由题1可知，$\mathbb{P}(k;\lambda)$ 的基为：
$$\{e^{\lambda t},\ t e^{\lambda t},\ \cdots,\ t^{k-1}e^{\lambda t}\}.$$

## 4
设 $\mu\neq\lambda$ ，且$q_{k}(x):=(x-\mu)^{k}$ ，证明： $q_{k}(D)(\mathbb{P}(d;\lambda))=\mathbb{P}(d;\lambda)$ 

### 解答
要证明：
$$q_k(D)(\mathbb{P}(d;\lambda)) = \mathbb{P}(d;\lambda),$$
即算子 $(D - \mu)^k$ 将空间 $\mathbb{P}(d;\lambda)$ 映射到自身，且是满射。
任取 $f(t) = p(t)e^{\lambda t} \in \mathbb{P}(d;\lambda)$，计算：
$$(D - \mu)f = p'(t)e^{\lambda t} + (\lambda - \mu)p(t)e^{\lambda t} = \left[ p'(t) + (\lambda - \mu)p(t) \right] e^{\lambda t}.$$
由于 $\deg(p) < d$，有 $\deg(p') < d - 1$，而 $\deg((\lambda - \mu)p) < d$，因此：
$$\deg\left( p'(t) + (\lambda - \mu)p(t) \right) < d,$$
故 $(D - \mu)f \in \mathbb{P}(d;\lambda)$。这表明 $D - \mu$ 是 $\mathbb{P}(d;\lambda)$ 上的线性算子。
令基函数为：
$$\varphi_j(t) = t^j e^{\lambda t}, \quad j = 0, 1, \dots, d-1.$$
计算：
$$(D - \mu)\varphi_j = j t^{j-1} e^{\lambda t} + (\lambda - \mu) t^j e^{\lambda t} = j \varphi_{j-1} + (\lambda - \mu) \varphi_j,$$
其中约定 $\varphi_{-1} = 0$。
因此，在基 $\{\varphi_0, \varphi_1, \dots, \varphi_{d-1}\}$ 下，算子 $D - \mu$ 的矩阵为：
$$A = 
\begin{pmatrix}
\lambda - \mu & 1 & 0 & \cdots & 0 \\
0 & \lambda - \mu & 2 & \cdots & 0 \\
0 & 0 & \lambda - \mu & \cdots & 0 \\
\vdots & \vdots & \vdots & \ddots & \vdots \\
0 & 0 & 0 & \cdots & \lambda - \mu
\end{pmatrix}.$$
这是一个上三角矩阵，主对角线元素均为 $\lambda - \mu$。由于 $\mu \ne \lambda$，有 $\lambda - \mu \ne 0$，故矩阵 $A$ 可逆。
由于 $D - \mu$ 在基下的矩阵 $A$ 可逆，其 $k$ 次幂 $A^k$ 也可逆。因此，算子 $(D - \mu)^k$ 在 $\mathbb{P}(d;\lambda)$ 上是可逆的线性算子，即：
$$(D - \mu)^k : \mathbb{P}(d;\lambda) \to \mathbb{P}(d;\lambda)$$
是线性同构。
特别地，它是满射，故：
$$(D - \mu)^k(\mathbb{P}(d;\lambda)) = \mathbb{P}(d;\lambda).$$

## 5
证明：若$\lambda$不是$q(x)$ 的根，则$q(D)(\mathbb{P}(d;\lambda))=\mathbb{P}(d;\lambda)$ 

### 解答
对于任意 $f(t) = p(t)e^{\lambda t} \in \mathbb{P}(d;\lambda)$，利用恒等式：
$$q(D)(p(t)e^{\lambda t}) = e^{\lambda t} \cdot q(D + \lambda)(p(t)).$$
这是因为：
$$D(p(t)e^{\lambda t}) = e^{\lambda t}(D + \lambda)p(t),$$
归纳可得一般形式。
设 $V = \{ p(t) \mid \deg(p) < d \}$，即次数小于 $d$ 的多项式空间。定义线性算子 $T: V \to V$ 为：
$$T(p) = q(D + \lambda)(p).$$
则 $q(D)$ 在 $\mathbb{P}(d;\lambda)$ 上的作用等价于 $T$ 在 $V$ 上的作用，即：
$$q(D)(p(t)e^{\lambda t}) = e^{\lambda t} \cdot T(p(t)).$$
取 $V$ 的基 $\{1, t, t^2, \dots, t^{d-1}\}$。对于 $p(t) = t^j$，有：
$$T(t^j) = q(D + \lambda)(t^j).$$
由于 $q(D + \lambda)$ 是微分算子的多项式，其作用为：
$$T(t^j) = q(\lambda) t^j + \text{次数低于 } j \text{ 的项}.$$
因此，$T$ 在基下的矩阵是上三角矩阵，主对角线元素均为 $q(\lambda)$。
由于 $\lambda$ 不是 $q(x)$ 的根，有 $q(\lambda) \neq 0$，故矩阵的行列式为：
$$\det(T) = (q(\lambda))^d \neq 0,$$
即 $T$ 是可逆的线性算子。因此，$T: V \to V$ 是满射。
从而，$q(D)$ 在 $\mathbb{P}(d;\lambda)$ 上也是满射，即：
$$q(D)(\mathbb{P}(d;\lambda)) = \mathbb{P}(d;\lambda).$$


## 6
给定多项式 $q(x)=x^{n}+a_{n-1}x^{n-1}+\cdots+a_{1}x+a_{0}$ ，设其有因式分解

$$q(x)=\prod_{j=1}^{k}(x-\lambda_{j})^{m_{j}},$$

其中 $\{\lambda_j:j=1,\cdots,k\}$ 互异。证明

$$\bigcup_{j=1}^{k}\{e^{\lambda_{j}t},t e^{\lambda_{j}t},\cdots,t^{m_{j}-1}e^{\lambda_{j}t}\}$$

给出了方程$q(D)(f)=0$ 的解空间的一组基。

### 解答
给定多项式：
$$q(x) = \prod_{j=1}^{k}(x - \lambda_j)^{m_j},$$
对应的微分算子为：
$$q(D) = \prod_{j=1}^{k}(D - \lambda_j)^{m_j}.$$
考虑函数：
$$f_{j,r}(t) = t^r e^{\lambda_j t}, \quad \text{其中 } j = 1, \dots, k,\ r = 0, \dots, m_j - 1.$$
由问题3可知，对于每个 $j$，有：
$$(D - \lambda_j)^{m_j}(f_{j,r}) = 0.$$
由于算子 $(D - \lambda_i)$ 彼此可交换，可得：
$$q(D)(f_{j,r}) = \left( \prod_{i \ne j} (D - \lambda_i)^{m_i} \right) (D - \lambda_j)^{m_j}(f_{j,r}) = 0.$$
因此，所有函数 $f_{j,r}$ 都是方程 $q(D)(f) = 0$ 的解。
由问题2可知，对于互异的 $\lambda_1, \dots, \lambda_k$，空间：
$$\mathbb{P}(m_1; \lambda_1) \oplus \cdots \oplus \mathbb{P}(m_k; \lambda_k)$$
是直和。而每个 $\mathbb{P}(m_j; \lambda_j)$ 的基为：
$$\{ e^{\lambda_j t}, t e^{\lambda_j t}, \dots, t^{m_j - 1} e^{\lambda_j t} \},$$
因此这些函数的并集是线性无关的。
总函数个数为：
$$\sum_{j=1}^{k} m_j = n,$$
即多项式 $q(x)$ 的次数。
常系数线性齐次微分方程 $q(D)(f) = 0$ 的解空间维数等于算子的阶数 $n$。这是因为初始条件：
$$f(0), f'(0), \dots, f^{(n-1)}(0)$$
唯一确定一个解，因此解空间与 $\mathbb{R}^n$ 同构。
由于我们已经找到 $n$ 个线性无关的解，它们构成解空间的一组基。

## 7
假设同6 ，设$\mu\ne\lambda_{j},1\le j\le k。$ 证明：$q(D)(f)=e^{\mu t}$ 必有一形$ 如 c e^{\mu t}$ 的特解。

### 解答
计算
$$q(D)(c e^{\mu t}) = c \cdot q(\mu) e^{\mu t},$$
因为 $D(e^{\mu t}) = \mu e^{\mu t}$，所以 $q(D)(e^{\mu t}) = q(\mu) e^{\mu t}$。
欲使
$$c \cdot q(\mu) e^{\mu t} = e^{\mu t},$$
只需取
$$c = \frac{1}{q(\mu)}.$$
由于 $\mu \ne \lambda_j$，有 $q(\mu) \ne 0$，故 $c$ 存在且唯一。
由问题5知，若 $\mu$ 不是 $q(x)$ 的根，则
$$q(D)(\mathbb{P}(1;\mu)) = \mathbb{P}(1;\mu).$$
而 $\mathbb{P}(1;\mu) = \{ c e^{\mu t} \mid c \in \mathbb{C} \}$，故存在唯一的 $f \in \mathbb{P}(1;\mu)$ 使得
$$q(D)(f) = e^{\mu t},$$
即 $f(t) = c e^{\mu t}$。


## 8
假设同习题6. 证明：对任意的$1\leq j\leq k$ $q(D)(f)=e^{\lambda_{j}t}$ 必有一形$ 如 ct^{m_{j}}e^{\lambda_{j}t}$ 的特解。


### 解答
将 $q(D)$ 写为
$$q(D) = (D - \lambda_j)^{m_j} \cdot Q_j(D), \quad \text{其中 } Q_j(D) = \prod_{i \ne j} (D - \lambda_i)^{m_i}.$$
则方程变为
$$(D - \lambda_j)^{m_j} \left[ Q_j(D)(f) \right] = e^{\lambda_j t}.$$
设
$$f(t) = c t^{m_j} e^{\lambda_j t}.$$
计算 $Q_j(D)(f)$：
$$Q_j(D)(f) = Q_j(D)(c t^{m_j} e^{\lambda_j t}) = c e^{\lambda_j t} \cdot Q_j(D + \lambda_j)(t^{m_j}).$$
令
$$P(t) = Q_j(D + \lambda_j)(t^{m_j}),$$
则
$$Q_j(D)(f) = c e^{\lambda_j t} P(t).$$
计算
$$(D - \lambda_j)^{m_j} \left[ Q_j(D)(f) \right] = (D - \lambda_j)^{m_j} \left[ c e^{\lambda_j t} P(t) \right] = c e^{\lambda_j t} D^{m_j} P(t).$$
因为 $(D - \lambda_j)^{m_j} (e^{\lambda_j t} P(t)) = e^{\lambda_j t} D^{m_j} P(t)$。
注意 $Q_j(D + \lambda_j)$ 是微分算子的多项式，其常数项为 $Q_j(\lambda_j)$。当作用于 $t^{m_j}$ 时，最高次项来自常数项：
$$Q_j(D + \lambda_j)(t^{m_j}) = Q_j(\lambda_j) t^{m_j} + \text{次数低于 } m_j \text{ 的项}.$$
因此，
$$P(t) = Q_j(\lambda_j) t^{m_j} + \text{低次项}.$$
应用 $D^{m_j}$ 后，低次项消失，仅保留最高次项：
$$D^{m_j} P(t) = m_j! \cdot Q_j(\lambda_j).$$
于是
$$(D - \lambda_j)^{m_j} \left[ Q_j(D)(f) \right] = c e^{\lambda_j t} \cdot m_j! \cdot Q_j(\lambda_j).$$
由方程
$$q(D)(f) = e^{\lambda_j t},$$
得
$$c \cdot m_j! \cdot Q_j(\lambda_j) e^{\lambda_j t} = e^{\lambda_j t}.$$
由于 $\lambda_j$ 不是 $Q_j(x)$ 的根，有 $Q_j(\lambda_j) \ne 0$，解得
$$c = \frac{1}{m_j! \cdot Q_j(\lambda_j)}.$$
因此，特解为
$$f(t) = \frac{1}{m_j! \cdot Q_j(\lambda_j)} \cdot t^{m_j} e^{\lambda_j t}.$$



## 9
设$a\geq0,\omega\in$ R。求解方程

$$\ddot{x}=-x-a\dot{x}+\cos\omega t.$$

### 解答
整理为标准形式：
$$
\ddot{x} + a\dot{x} + x = \cos(\omega t) \tag{1}
$$

齐次方程为：
$$
\ddot{x} + a\dot{x} + x = 0
$$
特征方程为：
$$
r^2 + a r + 1 = 0
$$
根为：
$$
r = \frac{-a \pm \sqrt{a^2 - 4}}{2}
$$

根据判别式 $\Delta = a^2 - 4$ 的值，分情况讨论：

- **情况 1：** $a = 0$  
  根为 $r = \pm i$，齐次解为：
  $$
  x_h(t) = C_1 \cos t + C_2 \sin t
  $$

- **情况 2：** $0 < a < 2$  
  根为复数：
  $$
  r = -\frac{a}{2} \pm i \frac{\sqrt{4 - a^2}}{2}
  $$
  齐次解为：
  $$
  x_h(t) = e^{-\frac{a}{2}t} \left( C_1 \cos\left( \frac{\sqrt{4 - a^2}}{2} t \right) + C_2 \sin\left( \frac{\sqrt{4 - a^2}}{2} t \right) \right)
  $$

- **情况 3：** $a = 2$  
  根为重根 $r = -1$，齐次解为：
  $$
  x_h(t) = (C_1 + C_2 t) e^{-t}
  $$

- **情况 4：** $a > 2$  
  根为两个不同的实数：
  $$
  r_1 = -\frac{a}{2} + \frac{\sqrt{a^2 - 4}}{2}, \quad r_2 = -\frac{a}{2} - \frac{\sqrt{a^2 - 4}}{2}
  $$
  齐次解为：
  $$
  x_h(t) = C_1 e^{r_1 t} + C_2 e^{r_2 t}
  $$


设特解形式为：
$$
x_p(t) = A \cos(\omega t) + B \sin(\omega t)
$$
代入方程 (1)：

- 一阶导数：
  $$
  \dot{x}_p = -\omega A \sin(\omega t) + \omega B \cos(\omega t)
  $$
- 二阶导数：
  $$
  \ddot{x}_p = -\omega^2 A \cos(\omega t) - \omega^2 B \sin(\omega t)
  $$

代入得：
$$
(-\omega^2 A + a \omega B + A) \cos(\omega t) + (-\omega^2 B - a \omega A + B) \sin(\omega t) = \cos(\omega t)
$$

比较系数：

- $\cos(\omega t)$ 项：
  $$
  (1 - \omega^2)A + a \omega B = 1 \tag{2}
  $$
- $\sin(\omega t)$ 项：
  $$
  -a \omega A + (1 - \omega^2)B = 0 \tag{3}
  $$

解方程组：

由 (3) 得：
$$
B = \frac{a \omega}{1 - \omega^2} A
$$
代入 (2)：
$$
A = \frac{1 - \omega^2}{(1 - \omega^2)^2 + a^2 \omega^2}
$$
代入求 $B$：
$$
B = \frac{a \omega}{1 - \omega^2} \cdot \frac{1 - \omega^2}{(1 - \omega^2)^2 + a^2 \omega^2} = \frac{a \omega}{(1 - \omega^2)^2 + a^2 \omega^2}
$$

因此特解为：
$$
x_p(t) = \frac{(1 - \omega^2) \cos(\omega t) + a \omega \sin(\omega t)}{(1 - \omega^2)^2 + a^2 \omega^2}
$$

可写成振幅-相位形式：
$$
x_p(t) = \frac{\cos(\omega t - \delta)}{\sqrt{(1 - \omega^2)^2 + a^2 \omega^2}}
$$
其中：
$$
\delta = \arctan\left( \frac{a \omega}{1 - \omega^2} \right)
$$


方程 (1) 的通解为齐次解与特解之和：
$$
x(t) = x_h(t) + x_p(t)
$$
即：
$$
x(t) = x_h(t) + \frac{\cos(\omega t - \delta)}{\sqrt{(1 - \omega^2)^2 + a^2 \omega^2}}
$$
其中 $x_h(t)$ 由第二步给出，$\delta = \arctan\left( \dfrac{a \omega}{1 - \omega^2} \right)$



## 10
设 $a_{1},\cdots,a_{k}\in\mathbb{R}$ 

1. 求如下k阶递归方程的通解：

$$x_{n}=a_{1}x_{n-1}+a_{2}x_{n-2}+\cdots+a_{k}x_{n-k}.$$

2. 设$f(t)=p(t)e^{\lambda t}$ 是一个拟多项式。求如下非齐次k阶递归方程的通解：

$$x_{n}=a_{1}x_{n-1}+a_{2}x_{n-2}+\cdots+a_{k}x_{n-k}+f(n).$$

### 解答
#### 1
其特征多项式为：
$$P(r) = r^k - a_1 r^{k-1} - a_2 r^{k-2} - \cdots - a_k.$$
设 $P(r) = 0$ 的根为 $r_1, r_2, \ldots, r_s$，重数分别为 $m_1, m_2, \ldots, m_s$，且 $m_1 + m_2 + \cdots + m_s = k$。则齐次通解为：
$$x_n = \sum_{i=1}^{s} \left( c_{i,0} + c_{i,1} n + \cdots + c_{i,m_i-1} n^{m_i-1} \right) r_i^n.$$
其中 $c_{i,j}$ 为任意常数。

#### 2
通解为齐次解与特解之和：
$$x_n = x_h(n) + x_p(n),$$
其中 $x_h(n)$ 为齐次通解（如上所述）。
特解 $x_p(n)$ 的形式取决于 $e^\lambda$ 是否为特征根：

若 $e^\lambda$ 不是特征根（即 $P(e^\lambda) \neq 0$），则特解形如：
$$x_p(n) = q(n) e^{\lambda n},$$
其中 $q(n)$ 为与 $p(n)$ 同次的多项式。
若 $e^\lambda$ 是特征根，且重数为 $m$，则特解形如：
$$x_p(n) = n^m q(n) e^{\lambda n},$$
其中 $q(n)$ 为与 $p(n)$ 同次的多项式。

系数通过代入原方程确定。