---
title: 泛函分析第五次作业
tags:
  - math
  - functional analysis
categories:
  - math
  - functional analysis homework
index_img: /img/fa.jpg
banner_img: /img/fa.jpg
excerpt: 泛函分析第五次作业
abbrlink: feea09f2
date: 2025-10-02 14:27:02
---
## 5.1
若 $U = \{ u_\alpha | \alpha \in I \}$ 是 Hilbert 空间 $H$ 的规范正交集。

证明：
1. 
$$
[U] = \left\{ \sum_{\alpha \in I} c_\alpha u_\alpha \,\middle|\, c_\alpha \in \mathbb{F} \text{ 且 } \sum_{\alpha \in I} |c_\alpha|^2 < +\infty \right\} \text{ 且 } [U] \text{ 是闭子空间}.
$$

2. 若记 $\chi_U = \sum_{\alpha \in I} (x, u_\alpha) u_\alpha$. 则
$$
\| x - \chi_U \| = \min_{u \in [U]} \| x - u \|
$$

### 解答
#### 1
令
$$
M := \left\{ \sum_{\alpha \in I} c_\alpha u_\alpha \,\middle|\, c_\alpha \in \mathbb{F},\ \sum_{\alpha \in I} |c_\alpha|^2 < +\infty \right\}.
$$

由于 $ U $ 是规范正交集，对于任意有限子集 $ F \subset I $，有

$$
\left\| \sum_{\alpha \in F} c_\alpha u_\alpha \right\|^2 = \sum_{\alpha \in F} |c_\alpha|^2.
$$

因此，若 $ \sum_{\alpha \in I} |c_\alpha|^2 < \infty $，则网 $ \left( \sum_{\alpha \in F} c_\alpha u_\alpha \right)_{F \subset I,\, F\text{ 有限}} $ 是 Cauchy 网，从而在 $ H $ 中收敛（因为 Hilbert 空间是完备的）。于是，这个级数在 $ H $ 中收敛到某个向量，记为 $ x = \sum_{\alpha \in I} c_\alpha u_\alpha $。

所以，$ M \subset H $ 良定义。

设 $ x = \sum c_\alpha u_\alpha \in M $，$ y = \sum d_\alpha u_\alpha \in M $，$ a,b \in \mathbb{F} $，则

$$
ax + by = \sum (a c_\alpha + b d_\alpha) u_\alpha,
$$

且

$$
\sum |a c_\alpha + b d_\alpha|^2 \leq 2|a|^2 \sum |c_\alpha|^2 + 2|b|^2 \sum |d_\alpha|^2 < \infty,
$$

故 $ ax + by \in M $。故 $ M $ 是线性子空间。

设 $ \{x_n\} \subset M $ 且 $ x_n \to x \in H $。要证 $ x \in M $。

对每个 $ n $，写 $ x_n = \sum_{\alpha \in I} c_\alpha^{(n)} u_\alpha $，其中 $ \sum |c_\alpha^{(n)}|^2 < \infty $。

注意：由于 $ U $ 是规范正交集，对任意 $ \alpha \in I $，有

$$
c_\alpha^{(n)} = \langle x_n, u_\alpha \rangle.
$$

因为内积连续，$ x_n \to x \Rightarrow \langle x_n, u_\alpha \rangle \to \langle x, u_\alpha \rangle $。定义 $ c_\alpha := \langle x, u_\alpha \rangle $。

由Bessel 不等式：

$$
\sum_{\alpha \in I} |\langle x, u_\alpha \rangle|^2 \leq \|x\|^2 < \infty,
$$

所以 $ \sum |c_\alpha|^2 < \infty $，即 $ x \in M $。

此外，由正交投影性质有

$$
x_n = \sum c_\alpha^{(n)} u_\alpha \to \sum c_\alpha u_\alpha =: y \quad \text{in } H,
$$

但 $ x_n \to x $，所以 $ x = y \in M $。因此 $ M $ 是闭的。

首先所有有限线性组合 $ \sum_{\alpha \in F} c_\alpha u_\alpha $（$ F \subset I $ 有限）属于 $ M $，所以 $ \text{span}(U) \subset M $。由于 $ M $ 是闭子空间，而 $ [U] $ 是包含 $ U $ 的最小闭子空间，故 $ [U] \subset M $。

其次任取 $ x = \sum c_\alpha u_\alpha \in M $，则存在有限部分和 $ s_F = \sum_{\alpha \in F} c_\alpha u_\alpha \in \text{span}(U) $，且 $ s_F \to x $（当 $ F \uparrow I $）。因此 $ x \in \overline{\text{span}(U)} = [U] $。

所以 $ M \subset [U] $。

综上，$ [U] = M $，且是闭子空间。

#### 2
由 Bessel 不等式，$ \sum |\langle x, u_\alpha \rangle|^2 \leq \|x\|^2 < \infty $，所以系数平方可和，故 $ \chi_U(x) \in M = [U] $。

考虑 $ x - \chi_U(x) $ 与任意 $ u_\beta \in U $ 的内积：

$$
\langle x - \chi_U(x), u_\beta \rangle = \langle x, u_\beta \rangle - \sum_{\alpha \in I} \langle x, u_\alpha \rangle \langle u_\alpha, u_\beta \rangle = \langle x, u_\beta \rangle - \langle x, u_\beta \rangle = 0.
$$

因此，$ x - \chi_U(x) \perp u_\beta $ 对所有 $ \beta \in I $ 成立。

由于 $ [U] = \overline{\text{span}}(U) $，而正交关系在闭包下保持，故

$$
x - \chi_U(x) \perp [U].
$$

对任意闭子空间 $ M \subset H $，有正交分解：

$$
H = M \oplus M^\perp,
$$

且对任意 $ x \in H $，存在唯一 $ P_M x \in M $ 使得 $ x - P_M x \in M^\perp $，并且

$$
\|x - P_M x\| = \min_{u \in M} \|x - u\|.
$$

已证 $ \chi_U(x) \in [U] $ 且 $ x - \chi_U(x) \in [U]^\perp $，所以由唯一性，

$$
\chi_U(x) = P_{[U]}(x),
$$

$$
\|x - \chi_U(x)\| = \min_{u \in [U]} \|x - u\|.
$$


## 5.2.1
三种特殊多项式的两种认识 (1)：Gram-Schmidt 正交化

假设 $ H = (H, (\cdot, \cdot)) $ 是 Hilbert 空间。若多项式序列 $ \{P_n\}_{n=0}^{\infty} $ 满足：

(1). $ \mathbf{P} := \operatorname{span}\{1, x, \cdots, x^n, \cdots\} \subset H $；  
(2). $ \deg P_n = n $；  
(3). $ (P_m, P_n) = 0,\ \forall m \ne n $，

则称 $ \{P_n\}_{n=0}^{\infty} $ 是 $ H $ 上的正交多项式。

证明：

1. 正交多项式存在；

2. 若 $ \{P_n\}_{n=0}^{\infty} $，$ \{\tilde{P}_n\}_{n=0}^{\infty} $ 是 $ H $ 上两个正交多项式，则对于 $ n \in \mathbb{N} $，存在 $ c_n \in \mathbb{F} $ 使得  
$$
P_n = c_n \tilde{P}_n.
$$

### 解答
#### 1

证明：
考虑 $H$ 的子空间 $\text{span}\{1, x, x^2, \ldots\} \subset H$。由于 $H$ 是 Hilbert 空间，我们可以对线性无关的集合 $\{1, x, x^2, \ldots\}$ 应用 Gram-Schmidt 正交化过程构造一组正交多项式:

- 令 $u_0 = 1$，定义 $P_0 = u_0$。
- 对于 $n \geq 1$，定义：
  $$
  u_n = x^n - \sum_{k=0}^{n-1} \frac{(x^n, P_k)}{(P_k, P_k)} P_k,
  $$
  然后令 $P_n = u_n$。

由构造，每个 $P_n$ 是次数为 $n$ 的多项式（因为 $x^n$ 减去一些低次多项式的线性组合），且 $\{P_n\}$ 两两正交。因此，正交多项式序列 $\{P_n\}_{n=0}^\infty$ 存在。


#### 2

- $n = 0$：
  $P_0$ 和 $\tilde{P}_0$ 都是常数，且均与所有更高次多项式正交。故存在 $c_0 \neq 0$ 使得 $\tilde{P}_0 = c_0 P_0$

- 假设对 $k = 0,1,\ldots,n-1$，有 $\tilde{P}_k = c_k P_k$（其中 $c_k \neq 0$）。

  现在看 $n$ 次多项式 $\tilde{P}_n$ 和 $P_n$：
  由于 $\tilde{P}_n$ 是 $n$ 次多项式，且与所有 $\tilde{P}_k$（$k < n$）正交，由归纳假设，$\tilde{P}_n$ 也与所有 $P_k$（$k < n$）正交（因为 $\tilde{P}_k = c_k P_k$，且内积是双线性的）。
  类似地，$P_n$ 也与所有 $P_k$（$k < n$）正交。
  因此，$\tilde{P}_n$ 和 $P_n$ 都属于空间 $W_n = \{ Q \in \text{span}\{1,x,\ldots,x^n\} : (Q, P_k)=0, \forall k<n \}$。
  但 $W_n$ 的维数为 1（因为正交化过程每一步唯一确定一个方向），所以 $\tilde{P}_n$ 和 $P_n$ 线性相关，即存在 $c_n \neq 0$ 使得 $\tilde{P}_n = c_n P_n$。

由数学归纳法，结论对一切 $n$ 成立。


## 5.2.2
三种特殊多项式的两种认识 (2) Rodrigues formula

考虑 Sturm-Liouville 方程

$$
p(x)y'' + q(x)y' + \lambda y = 0,
$$

其中，$p(x) = \alpha x^2 + \beta x + \gamma$，$q(x) = \mu x + \nu$。试证明：

1. 若 $y_n = \sum_{j=1}^{n} g_j x^j$ 是方程的一个解，则 $g_n$ 满足  
$$
n(n - 1)\alpha g_n + n\mu g_n + \lambda g_n = 0.
$$

2. 若 $w(x)$ 满足 $(wp)' = wq$，则方程可改写为  
$$
(w(x)p(x)y')' + \lambda w(x)y = 0.
$$

3. （Rodrigues 的观察）  
$$
y_n(x) = \frac{1}{w(x)} \left( \frac{d}{dx} \right)^n \left( w(x) p(x)^n \right)
$$  
是方程的一个解，当  
$$
\lambda = -\left( \frac{n^2 - n}{2} \right) p'' - n q'.
$$

4. *验证三种特殊正交多项式的 Rodrigues formula。


### 解答
#### 1

考虑 Sturm–Liouville 方程：

$$
p(x)y'' + q(x)y' + \lambda y = 0,
$$

其中

$$
p(x) = \alpha x^2 + \beta x + \gamma, \quad q(x) = \mu x + \nu.
$$

假设解为 $n$ 次多项式：

$$
y_n(x) = \sum_{j=0}^{n} g_j x^j.
$$

计算导数：

$$
y_n'(x) = \sum_{j=1}^{n} j g_j x^{j-1}, \quad y_n''(x) = \sum_{j=2}^{n} j(j-1) g_j x^{j-2}.
$$

代入方程：

- $p(x)y_n'' = (\alpha x^2 + \beta x + \gamma) \sum j(j-1)g_j x^{j-2}$
- $q(x)y_n' = (\mu x + \nu) \sum j g_j x^{j-1}$
- $\lambda y_n = \lambda \sum g_j x^j$

提取 $x^n$ 项的系数：

- 来自 $p(x)y_n''$：$n(n-1)\alpha g_n$
- 来自 $q(x)y_n'$：$n\mu g_n$
- 来自 $\lambda y_n$：$\lambda g_n$

因此：

$$
n(n-1)\alpha g_n + n\mu g_n + \lambda g_n = 0.
$$


#### 2

假设存在函数 $w(x)$ 满足：

$$
(wp)' = wq.
$$

考虑：

$$
(wpy')' = w'py' + wp'y' + wpy'' = y'(w'p + wp') + wpy''.
$$

由条件 $(wp)' = wq$，得：

$$
w'p + wp' = wq,
$$

所以：

$$
(wpy')' = wq y' + wpy'' = w(py'' + qy').
$$

因此，原方程可改写为：

$$
(wpy')' + \lambda w y = 0.
$$


#### 3

定义：

$$
y_n(x) = \frac{1}{w(x)} \left( \frac{d}{dx} \right)^n \left[ w(x) p(x)^n \right].
$$

令 $u(x) = w(x) p(x)^n$，则 $y_n = \frac{u^{(n)}}{w}$。

计算导数并代入自伴形式：

$$
(wpy_n')' + \lambda w y_n = 0,
$$

可得：

$$
p u^{(n+2)} + (2p' - q) u^{(n+1)} + (\lambda - q' + p'') u^{(n)} = 0.
$$

验证当

$$
\lambda = -\left( \frac{n^2 - n}{2} \right) p'' - n q'
$$

时，上述方程成立。特别地，当 $n = 0$ 时，由 $(wp)' = wq$ 可得 $\lambda_0 = 0$，与公式一致。


#### 4

- 勒让德多项式

  - $p(x) = 1 - x^2 \Rightarrow \alpha = -1, \beta = 0, \gamma = 1$
  - $q(x) = -2x \Rightarrow \mu = -2, \nu = 0$
  - $(wp)' = wq \Rightarrow w = 1$
  - Rodrigues 公式：

  $$
  P_n(x) = \frac{1}{2^n n!} \frac{d^n}{dx^n} \left[ (1 - x^2)^n \right]
  $$

  - 特征值：

  $$
  \lambda = -\frac{n^2 - n}{2} \cdot (-2) - n \cdot (-2) = n(n+1)
  $$

-  拉盖尔多项式

   - $p(x) = x \Rightarrow \alpha = 0, \beta = 1, \gamma = 0$
   - $q(x) = 1 - x \Rightarrow \mu = -1, \nu = 1$
   - $(wp)' = wq \Rightarrow w = e^{-x}$
   - Rodrigues 公式：

   $$
   L_n(x) = \frac{e^x}{n!} \frac{d^n}{dx^n} \left( x^n e^{-x} \right)
   $$

   - 特征值：

   $$
   \lambda = -\frac{n^2 - n}{2} \cdot 0 - n \cdot (-1) = n
   $$

- 埃尔米特多项式

  - $p(x) = 1 \Rightarrow \alpha = 0, \beta = 0, \gamma = 1$
  - $q(x) = -2x \Rightarrow \mu = -2, \nu = 0$
  - $(wp)' = wq \Rightarrow w = e^{-x^2}$
  - Rodrigues 公式：

  $$
  H_n(x) = (-1)^n e^{x^2} \frac{d^n}{dx^n} \left( e^{-x^2} \right)
  $$

  - 特征值：

  $$
  \lambda = -\frac{n^2 - n}{2} \cdot 0 - n \cdot (-2) = 2n
  $$


## 5.3
定义勒让德多项式 $ P_n $ 为  
$$
P_n(x) = \frac{1}{2^n n!} \frac{d^n}{dx^n}(x^2 - 1)^n.
$$

1. 证明勒让德多项式在 $ L^2[-1,1] $ 中两两正交，同时它们可由单项式 $ \{1, x, x^2, \cdots\} $ 通过 Gram-Schmidt 正交化得到；

2. 证明  
$$
\int_{-1}^{1} P_n(x)^2 dx = \frac{2}{2n + 1}.
$$

3. 证明勒让德多项式是 $ L^2[-1,1] $ 中一组正交基，给定 $ f \in L^2[-1,1] $，其可以表示为  
$$
f(x) = \sum_{n=0}^{\infty} c_n P_n(x).
$$  
计算 $ c_n $ 并明确指出在什么意义下上述级数收敛；

4. 证明第 $ n $ 个勒让德多项式 $ P_n $ 是如下微分算子的特征函数：  
$$
L = -\frac{d}{dx}(1 - x^2)\frac{d}{dx},
$$  
其对应的特征值为 $ \lambda_n = n(n+1) $，即 $ LP_n = \lambda_n P_n $。

### 解答

#### 1

考虑内积 $\langle f, g \rangle = \int_{-1}^{1} f(x) g(x) \, dx$。

首先证明正交性：对于 $m \neq n$，需证明 $\int_{-1}^{1} P_m(x) P_n(x) \, dx = 0$。不妨假设 $m < n$。考虑 $\int_{-1}^{1} x^k P_n(x) \, dx$ 对于 $k < n$。由 Rodrigues 公式，
$$
\int_{-1}^{1} x^k P_n(x) \, dx = \frac{1}{2^n n!} \int_{-1}^{1} x^k \frac{d^n}{dx^n}(x^2 - 1)^n \, dx.
$$
通过分部积分 $n$ 次，边界项在 $x = \pm 1$ 处为零（因为 $(x^2 - 1)^n$ 的导数直到 $n-1$ 阶在 $x = \pm 1$ 处为零），得到
$$
\int_{-1}^{1} x^k \frac{d^n}{dx^n}(x^2 - 1)^n \, dx = (-1)^n \int_{-1}^{1} \frac{d^n x^k}{dx^n} (x^2 - 1)^n \, dx.
$$
由于 $k < n$，$\frac{d^n x^k}{dx^n} = 0$，所以 $\int_{-1}^{1} x^k P_n(x) \, dx = 0$。因此，$P_n$ 与所有次数低于 $n$ 的多项式正交。由于 $P_m$ 是次数为 $m < n$ 的多项式，故 $\int_{-1}^{1} P_m(x) P_n(x) \, dx = 0$，即勒让德多项式两两正交。

其次，证明勒让德多项式可由单项式 $\{1, x, x^2, \cdots\}$ 通过 Gram-Schmidt 正交化得到。多项式在 $L^2[-1,1]$ 中稠密，且勒让德多项式 $P_n$ 是 $n$ 次多项式，满足 $P_n(1) = 1$。由于 $P_n$ 与所有低次多项式正交，且 Gram-Schmidt 过程从单项式生成一组正交多项式，勒让德多项式正是由此过程得到的（可能相差常数倍，但这里定义保证了 $P_n(1) = 1$，故唯一）。

#### 2

由定义，
$$
\int_{-1}^{1} P_n(x)^2 \, dx = \frac{1}{(2^n n!)^2} \int_{-1}^{1} \left[ \frac{d^n}{dx^n}(x^2 - 1)^n \right]^2 \, dx.
$$
设 $k_n$ 为 $P_n(x)$ 的首项系数。由 Rodrigues 公式，$P_n(x) = k_n x^n + \text{低次项}$，其中 $k_n = \frac{(2n)!}{2^n (n!)^2}$。由于 $P_n$ 与低次项正交，
$$
\int_{-1}^{1} P_n(x)^2 \, dx = k_n \int_{-1}^{1} x^n P_n(x) \, dx.
$$
计算 $\int_{-1}^{1} x^n P_n(x) \, dx$:
$$
\int_{-1}^{1} x^n P_n(x) \, dx = \frac{1}{2^n n!} \int_{-1}^{1} x^n \frac{d^n}{dx^n}(x^2 - 1)^n \, dx.
$$
分部积分 $n$ 次，边界项为零，得
$$
\int_{-1}^{1} x^n \frac{d^n}{dx^n}(x^2 - 1)^n \, dx = (-1)^n n! \int_{-1}^{1} (x^2 - 1)^n \, dx.
$$
计算 $\int_{-1}^{1} (x^2 - 1)^n \, dx$。令 $x = \cos \theta$，则 $dx = -\sin \theta \, d\theta$，积分限从 $\pi$ 到 $0$，
$$
\int_{-1}^{1} (x^2 - 1)^n \, dx = \int_{\pi}^{0} (\cos^2 \theta - 1)^n (-\sin \theta) \, d\theta = (-1)^n \int_{\pi}^{0} -\sin^{2n+1} \theta \, d\theta = (-1)^n \int_{0}^{\pi} \sin^{2n+1} \theta \, d\theta.
$$
已知 $\int_{0}^{\pi} \sin^{2n+1} \theta \, d\theta = \frac{2^{2n+1} (n!)^2}{(2n+1)!}$，所以
$$
\int_{-1}^{1} (x^2 - 1)^n \, dx = (-1)^n \frac{2^{2n+1} (n!)^2}{(2n+1)!}.
$$
因此，
$$
\int_{-1}^{1} x^n P_n(x) \, dx = \frac{1}{2^n n!} (-1)^n n! \cdot (-1)^n \frac{2^{2n+1} (n!)^2}{(2n+1)!} = \frac{2^{n+1} (n!)^2}{(2n+1)!}.
$$
于是，
$$
\int_{-1}^{1} P_n(x)^2 \, dx = k_n \cdot \frac{2^{n+1} (n!)^2}{(2n+1)!} = \frac{(2n)!}{2^n (n!)^2} \cdot \frac{2^{n+1} (n!)^2}{(2n+1)!} = \frac{(2n)! \cdot 2}{(2n+1)!} = \frac{2}{2n+1},
$$
因为 $(2n+1)! = (2n+1) (2n)!$.

#### 3

勒让德多项式在 $L^2[-1,1]$ 中两两正交，且由 (2) 知其范数非零。多项式在 $L^2[-1,1]$ 中稠密，而勒让德多项式张成所有多项式空间，因此它们构成 $L^2[-1,1]$ 的一组正交基。

对于 $f \in L^2[-1,1]$，有展开式
$$
f(x) = \sum_{n=0}^{\infty} c_n P_n(x),
$$
其中系数 $c_n$ 由内积给出：
$$
c_n = \frac{\langle f, P_n \rangle}{\langle P_n, P_n \rangle} = \frac{2n+1}{2} \int_{-1}^{1} f(x) P_n(x) \, dx.
$$
级数在 $L^2$ 范数下收敛，即
$$
\lim_{N \to \infty} \int_{-1}^{1} \left| f(x) - \sum_{n=0}^{N} c_n P_n(x) \right|^2 dx = 0.
$$

#### 4

勒让德多项式 $P_n$ 满足勒让德微分方程：
$$
(1 - x^2) \frac{d^2 P_n}{dx^2} - 2x \frac{d P_n}{dx} + n(n+1) P_n = 0.
$$
注意到
$$
\frac{d}{dx} \left( (1 - x^2) \frac{d P_n}{dx} \right) = (1 - x^2) \frac{d^2 P_n}{dx^2} - 2x \frac{d P_n}{dx},
$$
所以勒让德方程可写为
$$
-\frac{d}{dx} \left( (1 - x^2) \frac{d P_n}{dx} \right) + n(n+1) P_n = 0,
$$
即 $L P_n = n(n+1) P_n$, 其中 $L = -\frac{d}{dx}(1 - x^2)\frac{d}{dx}$。因此，$P_n$ 是 $L$ 的特征函数，特征值为 $\lambda_n = n(n+1)$.


## 5.4
定义 Hilbert 空间 $ \mathcal{H} $ 为  
$$
\mathcal{H} = \left\{ f: [-1,1] \to \mathbb{C} : \int_{-1}^{1} \frac{|f(x)|^2}{\sqrt{1 - x^2}} dx < \infty \right\},
$$  
其上的内积为  
$$
\langle f, g \rangle = \int_{-1}^{1} \frac{\overline{f(x)} g(x)}{\sqrt{1 - x^2}} dx.
$$

证明切比雪夫多项式  
$$
T_n(x) = \cos(n\theta), \quad \text{其中 } \cos\theta = x,\, 0 \leq \theta \leq \pi,\, n = 1,2,\cdots
$$  
是 $ \mathcal{H} $ 中一组正交基，并且  
$$
\|T_0\| = \sqrt{\pi}, \quad \|T_n\| = \sqrt{\frac{\pi}{2}},\, n \geq 1.
$$

### 解答

#### 正交性
考虑内积 $\langle T_m, T_n \rangle$ 对于 $m, n \geq 0$。通过变量代换 $x = \cos\theta$，有 $dx = -\sin\theta \, d\theta$，且当 $x$ 从 $-1$ 到 $1$ 时，$\theta$ 从 $\pi$ 到 $0$。同时，$\sqrt{1 - x^2} = \sqrt{1 - \cos^2\theta} = \sin\theta$（因为 $\theta \in [0, \pi]$，$\sin\theta \geq 0$）。因此，
$$
\langle T_m, T_n \rangle = \int_{-1}^{1} \frac{\overline{T_m(x)} T_n(x)}{\sqrt{1 - x^2}} \, dx = \int_{\pi}^{0} \frac{\cos(m\theta) \cos(n\theta)}{\sin\theta} (-\sin\theta) \, d\theta = \int_{0}^{\pi} \cos(m\theta) \cos(n\theta) \, d\theta.
$$
现在计算积分 $\int_{0}^{\pi} \cos(m\theta) \cos(n\theta) \, d\theta$。利用三角恒等式：
$$
\cos(m\theta) \cos(n\theta) = \frac{1}{2} \left[ \cos((m+n)\theta) + \cos((m-n)\theta) \right].
$$
所以，
$$
\langle T_m, T_n \rangle = \frac{1}{2} \int_{0}^{\pi} \left[ \cos((m+n)\theta) + \cos((m-n)\theta) \right] d\theta.
$$
对于 $m \neq n$，$m+n$ 和 $m-n$ 均为非零整数，则
$$
\int_{0}^{\pi} \cos(k\theta) \, d\theta = \frac{\sin(k\theta)}{k} \Big|_{0}^{\pi} = 0 \quad \text{（因为 } \sin(k\pi) = 0 \text{）},
$$
故 $\langle T_m, T_n \rangle = 0$。因此，切比雪夫多项式在 $\mathcal{H}$ 中正交。

#### 范数
首先计算 $T_0$ 的范数。$T_0(x) = \cos(0 \cdot \theta) = 1$，所以
$$
\| T_0 \|^2 = \langle T_0, T_0 \rangle = \int_{0}^{\pi} 1 \cdot 1 \, d\theta = \pi,
$$
因此 $\| T_0 \| = \sqrt{\pi}$.

对于 $n \geq 1$，有
$$
\| T_n \|^2 = \langle T_n, T_n \rangle = \int_{0}^{\pi} \cos^2(n\theta) \, d\theta.
$$
利用恒等式 $\cos^2(n\theta) = \frac{1 + \cos(2n\theta)}{2}$，得
$$
\| T_n \|^2 = \int_{0}^{\pi} \frac{1 + \cos(2n\theta)}{2} \, d\theta = \frac{1}{2} \int_{0}^{\pi} 1 \, d\theta + \frac{1}{2} \int_{0}^{\pi} \cos(2n\theta) \, d\theta.
$$
其中，$\int_{0}^{\pi} 1 \, d\theta = \pi$，且
$$
\int_{0}^{\pi} \cos(2n\theta) \, d\theta = \frac{\sin(2n\theta)}{2n} \Big|_{0}^{\pi} = 0,
$$
所以 $\| T_n \|^2 = \frac{\pi}{2}$，因此 $\| T_n \| = \sqrt{\frac{\pi}{2}}$ for $n \geq 1$.

#### 完备性
考虑映射 $U: \mathcal{H} \to L^2([0, \pi])$ 定义为 $U(f)(\theta) = f(\cos\theta)$。由内积的定义，
$$
\langle f, g \rangle_{\mathcal{H}} = \int_{0}^{\pi} \overline{f(\cos\theta)} g(\cos\theta) \, d\theta = \langle U(f), U(g) \rangle_{L^2([0, \pi])},
$$
故 $U$ 是酉算子。在 $L^2([0, \pi])$ 中，函数集 $\{\cos(n\theta) : n = 0, 1, 2, \cdots\}$ 是正交基。由于 $U(T_n)(\theta) = \cos(n\theta)$，且 $U$ 是酉算子，因此 $\{T_n\}$ 是 $\mathcal{H}$ 中的正交基。

综上，切比雪夫多项式是 $\mathcal{H}$ 中的一组正交基，且范数满足 $\| T_0 \| = \sqrt{\pi}$，$\| T_n \| = \sqrt{\frac{\pi}{2}}$ for $n \geq 1$.


## 5.5
定义赫米特多项式 $ H_n $ 为  
$$
H_n(x) = (-1)^n e^{x^2} \frac{d^n}{dx^n}(e^{-x^2}).
$$

1. 证明 $ \varphi_n(x) := e^{-x^2/2} H_n(x) $ 是 $ L^2(\mathbb{R}) $ 中一组正交基；  
*Hint*: 正交基等价若 $ (\phi, \varphi_n(x)) = 0,\, \forall n \geq 0 $ 时，$ \phi = 0 $。由正交多项式的性质，这等价于若 $ (\phi, x^n e^{-x^2/2}) = 0,\, \forall n \geq 0 $ 时，$ \phi = 0 $。从而可以转换为证明若  
$$
\int_{\mathbb{R}} \phi e^{-x^2/2} e^{-i n x} = 0,
$$  
则 $ \phi = 0 $。（由 $ \mathbb{R} $ 上的 Fourier 变换可知，此时，$ \phi e^{-x^2/2} \in L^1 $，因此，只需要验证 $ \int_{\mathbb{R}} \phi e^{-x^2/2} e^{-i n x} = 0 $ 成立）。

2. 证明第 $ n $ 个赫米特函数 $ \varphi_n $ 是如下线性算子的特征函数：  
$$
H = -\frac{d^2}{dx^2} + x^2,
$$  
其对应的特征值为 $ \lambda_n = 2n + 1 $，即 $ H\varphi_n = \lambda_n \varphi_n $。  
*提示*：记  
$$
A = \frac{d}{dx} + x, \quad A^* = -\frac{d}{dx} + x.
$$

3. 若 $ G(x,t) := \sum_{n=0}^{\infty} H_n(x) \frac{t^n}{n!} $，则 $ G(x,t) = e^{x^2} e^{-(x-t)^2} $。$ G $ 称为 Hermite 多项式的 generating function。  
*Hint*: 利用 Taylor 系列展开以及 $ H_n $ 的 Rodrigues formula，即开头的定义。

4. 若  
$$
\mathcal{F}(f)(k) := (\sqrt{2\pi})^{-1} \int_{\mathbb{R}} f(x) e^{-i x k} dx,
$$  
则  
$$
\mathcal{F}(\varphi_n) = (-i)^n \varphi_n.
$$  
*Hint*: 计算 $ e^{-x^2/2} G $ 的 Fourier 变换，然后比较系数。

### 解答
#### 1

赫米特多项式 $H_n(x)$ 在权重 $e^{-x^2}$ 下正交，即：
$$
\int_{-\infty}^{\infty} H_m(x) H_n(x) e^{-x^2} \, dx = \sqrt{\pi} 2^n n! \, \delta_{mn}.
$$
因此，对于 $\varphi_n(x) = e^{-x^2/2} H_n(x)$，有：
$$
\int_{-\infty}^{\infty} \varphi_m(x) \varphi_n(x) \, dx = \int_{-\infty}^{\infty} H_m(x) H_n(x) e^{-x^2} \, dx = 0 \quad \text{当 } m \neq n,
$$
故 $\{\varphi_n\}$ 是正交系。

为证明完备性，需证若 $\langle \phi, \varphi_n \rangle = 0$ 对所有 $n \geq 0$ 成立，则 $\phi = 0$。其中 $\langle \cdot, \cdot \rangle$ 表示 $L^2(\mathbb{R})$ 内积。由于 $H_n(x)$ 是多项式且 $\deg H_n = n$，故 $\{\varphi_n\}$ 与 $\{x^n e^{-x^2/2}\}$ 张成相同的空间。因此，若 $\langle \phi, \varphi_n \rangle = 0$ 对所有 $n$，则 $\langle \phi, x^n e^{-x^2/2} \rangle = 0$ 对所有 $n$。

令 $\psi(x) = \phi(x) e^{x^2/2}$，则：
$$
\langle \phi, x^n e^{-x^2/2} \rangle = \int_{-\infty}^{\infty} \phi(x) x^n e^{-x^2/2} \, dx = \int_{-\infty}^{\infty} \psi(x) x^n e^{-x^2} \, dx.
$$
由于 $\phi \in L^2(\mathbb{R})$，有：
$$
\int_{-\infty}^{\infty} |\psi(x)|^2 e^{-x^2} \, dx = \int_{-\infty}^{\infty} |\phi(x)|^2 \, dx < \infty,
$$
故 $\psi \in L^2(\mathbb{R}, e^{-x^2} dx)$。赫米特多项式 $H_n$ 在 $L^2(\mathbb{R}, e^{-x^2} dx)$ 中完备，因此若 $\int_{-\infty}^{\infty} \psi(x) H_n(x) e^{-x^2} \, dx = 0$ 对所有 $n$ 成立，则 $\psi = 0$ 在 $L^2(\mathbb{R}, e^{-x^2} dx)$ 中，从而 $\phi = 0$。故 $\{\varphi_n\}$ 是完备正交系，即为 $L^2(\mathbb{R})$ 的正交基。

#### 2

定义算子：
$$
A = \frac{d}{dx} + x, \quad A^* = -\frac{d}{dx} + x.
$$
首先计算 $A \varphi_n$：
$$
\varphi_n(x) = e^{-x^2/2} H_n(x), \quad \varphi_n'(x) = e^{-x^2/2} (H_n'(x) - x H_n(x)),
$$
所以：
$$
A \varphi_n = \varphi_n' + x \varphi_n = e^{-x^2/2} (H_n'(x) - x H_n(x)) + x e^{-x^2/2} H_n(x) = e^{-x^2/2} H_n'(x).
$$
利用赫米特多项式的性质 $H_n'(x) = 2n H_{n-1}(x)$，得：
$$
A \varphi_n = 2n e^{-x^2/2} H_{n-1}(x) = 2n \varphi_{n-1}.
$$

接下来计算 $A^* \varphi_n$：
$$
A^* \varphi_n = -\varphi_n' + x \varphi_n = -e^{-x^2/2} (H_n'(x) - x H_n(x)) + x e^{-x^2/2} H_n(x) = e^{-x^2/2} (-H_n'(x) + 2x H_n(x)).
$$
利用赫米特多项式的递推关系 $H_{n+1}(x) = 2x H_n(x) - 2n H_{n-1}(x)$，有：
$$
-H_n'(x) + 2x H_n(x) = H_{n+1}(x),
$$
所以：
$$
A^* \varphi_n = e^{-x^2/2} H_{n+1}(x) = \varphi_{n+1}.
$$

现在计算 $A^* A \varphi_n$：
$$
A^* A \varphi_n = A^* (2n \varphi_{n-1}) = 2n A^* \varphi_{n-1} = 2n \varphi_n.
$$
另一方面，计算 $A^* A$：
$$
A^* A = \left( -\frac{d}{dx} + x \right) \left( \frac{d}{dx} + x \right) = -\frac{d^2}{dx^2} - x \frac{d}{dx} + x \frac{d}{dx} + x^2 + \frac{d}{dx} x = -\frac{d^2}{dx^2} - 1 + x^2,
$$
故：
$$
H = -\frac{d^2}{dx^2} + x^2 = A^* A + 1.
$$
因此：
$$
H \varphi_n = (A^* A + 1) \varphi_n = 2n \varphi_n + \varphi_n = (2n + 1) \varphi_n,
$$
即 $\varphi_n$ 是 $H$ 的特征函数，特征值为 $\lambda_n = 2n + 1$.

#### 3

由赫米特多项式的 Rodrigues 公式：
$$
H_n(x) = (-1)^n e^{x^2} \frac{d^n}{dx^n} e^{-x^2},
$$
代入生成函数：
$$
G(x,t) = \sum_{n=0}^{\infty} (-1)^n e^{x^2} \frac{d^n}{dx^n} e^{-x^2} \frac{t^n}{n!} = e^{x^2} \sum_{n=0}^{\infty} \frac{(-t)^n}{n!} \frac{d^n}{dx^n} e^{-x^2}.
$$
注意到 $\sum_{n=0}^{\infty} \frac{(-t)^n}{n!} \frac{d^n}{dx^n} e^{-x^2}$ 是平移算子的泰勒展开：
$$
\sum_{n=0}^{\infty} \frac{(-t)^n}{n!} \frac{d^n}{dx^n} f(x) = f(x-t),
$$
所以：
$$
\sum_{n=0}^{\infty} \frac{(-t)^n}{n!} \frac{d^n}{dx^n} e^{-x^2} = e^{-(x-t)^2},
$$
因此：
$$
G(x,t) = e^{x^2} e^{-(x-t)^2} = e^{2xt - t^2}.
$$
故生成函数为 $G(x,t) = e^{2xt - t^2}$.

#### 4

傅里叶变换定义为：
$$
\mathcal{F}(f)(k) = \frac{1}{\sqrt{2\pi}} \int_{-\infty}^{\infty} f(x) e^{-i k x} \, dx.
$$
考虑函数：
$$
F(x,t) = e^{-x^2/2} G(x,t) = e^{-x^2/2} e^{2xt - t^2} = \sum_{n=0}^{\infty} \varphi_n(x) \frac{t^n}{n!}.
$$
计算 $F(x,t)$ 的傅里叶变换：
$$
\hat{F}(k,t) = \frac{1}{\sqrt{2\pi}} \int_{-\infty}^{\infty} F(x,t) e^{-i k x} \, dx = \frac{1}{\sqrt{2\pi}} \int_{-\infty}^{\infty} e^{-x^2/2 + 2xt - t^2} e^{-i k x} \, dx.
$$
合并指数：
$$
-\frac{x^2}{2} + 2x t - t^2 - i k x = -\frac{1}{2} \left[ x^2 - 2x(2t - i k) \right] - t^2.
$$
平方：
$$
x^2 - 2x(2t - i k) = (x - (2t - i k))^2 - (2t - i k)^2,
$$
所以指数为：
$$
-\frac{1}{2} (x - (2t - i k))^2 + \frac{1}{2} (2t - i k)^2 - t^2.
$$
计算：
$$
(2t - i k)^2 = 4t^2 - 4i t k - k^2, \quad \frac{1}{2} (2t - i k)^2 = 2t^2 - 2i t k - \frac{k^2}{2},
$$
因此：
$$
\hat{F}(k,t) = \frac{1}{\sqrt{2\pi}} e^{2t^2 - 2i t k - \frac{k^2}{2} - t^2} \int_{-\infty}^{\infty} e^{-\frac{1}{2} (x - (2t - i k))^2} \, dx = e^{t^2 - 2i t k - \frac{k^2}{2}},
$$
因为高斯积分 $\int_{-\infty}^{\infty} e^{-\frac{1}{2} y^2} \, dy = \sqrt{2\pi}$。故：
$$
\hat{F}(k,t) = e^{-\frac{k^2}{2}} e^{t^2 - 2i t k}.
$$
另一方面，由生成函数：
$$
\hat{F}(k,t) = \sum_{n=0}^{\infty} \mathcal{F}(\varphi_n)(k) \frac{t^n}{n!}.
$$
若 $\mathcal{F}(\varphi_n)(k) = (-i)^n \varphi_n(k)$，则：
$$
\sum_{n=0}^{\infty} \mathcal{F}(\varphi_n)(k) \frac{t^n}{n!} = \sum_{n=0}^{\infty} (-i)^n \varphi_n(k) \frac{t^n}{n!} = e^{-\frac{k^2}{2}} \sum_{n=0}^{\infty} (-i)^n H_n(k) \frac{t^n}{n!}.
$$
利用赫米特多项式的生成函数：
$$
\sum_{n=0}^{\infty} H_n(k) \frac{u^n}{n!} = e^{2k u - u^2},
$$
令 $u = -i t$，得：
$$
\sum_{n=0}^{\infty} (-i)^n H_n(k) \frac{t^n}{n!} = e^{2k (-i t) - (-i t)^2} = e^{-2i k t + t^2} = e^{t^2 - 2i k t},
$$
所以：
$$
\sum_{n=0}^{\infty} \mathcal{F}(\varphi_n)(k) \frac{t^n}{n!} = e^{-\frac{k^2}{2}} e^{t^2 - 2i k t} = \hat{F}(k,t).
$$
比较系数得：
$$
\mathcal{F}(\varphi_n)(k) = (-i)^n \varphi_n(k).
$$
