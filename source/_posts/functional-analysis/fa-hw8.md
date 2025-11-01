---
title: 泛函分析第八次作业
tags:
  - math
  - functional analysis
categories:
  - math
  - functional analysis
excerpt: 泛函分析第八次作业
abbrlink: 472523f2
date: 2025-10-25 15:24:05
---
# 8.1
本题目说明，存在Fourier级数不一致收敛的连续函数。记$C(\mathbb{R}/2\pi\mathbb{Z},\mathbb{C})$ 为装备了上确界范数的、以$2\pi$ 为周期的复值连续函数$f:\mathbb{R}\to\mathbb{C}$ 构成的空间。

(1)对$n\in\mathbb{N}$ 定义Dirichlet核$D_{n}\in C(\mathbb{R}/2\pi\mathbb{Z},\mathbb{C})$ 为

$$D_{n}(t):=\sum_{k=-n}^{n}e^{i k t}=\frac{\sin((n+\frac{1}{2})t)}{\sin(\frac{1}{2}t)},\ t\in\mathbb{R}.$$

证明：$\|D_n\|_{L^1}\geq\frac{8}{\pi}\sum_{k=1}^{n}\frac{1}{k}$ 

(2) 函数$f\in C(\mathbb{R}/2\pi\mathbb{Z},\mathbb{C})$ 的第n项Fourier展开定义为

$$(\mathcal{F}_{n}(f))(x):=(D_{n}*f)(x)=\sum_{k=-n}^{n}\int_{0}^{2\pi}f(t)e^{i k(x-t)}d t,\ x\in\mathbb{R}.$$

证明算子$\mathcal{F}_{n}:C(\mathbb{R}/2\pi\mathbb{Z},\mathbb{C})\to C(\mathbb{R}/2\pi\mathbb{Z},\mathbb{C})$ 的算子范数为$\|\mathcal{F}_{n}\|=\|D_{n}\|_{L^{1}}$ 

(3)利用一致有界性原理推出：存在$f\in C(\mathbb{R}/2\pi\mathbb{Z},\mathbb{C})$ 使得序列$\mathcal{F}_{n}(f)$ 不一致收敛。

## 解答
### (1)
$$
\|D_n\|_{L^1} = \int_0^{2\pi} |D_n(t)|\,dt = 2\int_0^\pi \frac{|\sin((n+\frac{1}{2})t)|}{\sin(\frac{t}{2})}\,dt\\
\geq 2\sum_{k=1}^n \int_{\frac{(k-1)\pi}{n+\frac{1}{2}}}^{\frac{k\pi}{n+\frac{1}{2}}} \frac{|\sin(n+\frac{1}{2})t|}{\frac{t}{2}}\,dt\\
\geq 2\sum_{k=1}^n \int_{\frac{(k-1)\pi}{n+\frac{1}{2}}}^{\frac{k\pi}{n+\frac{1}{2}}} \frac{|\sin(n+\frac{1}{2})t|}{\frac{k\pi}{2n+1}}\,dt\\
\geq 2\sum_{k=1}^n \frac{4}{k\pi} = \frac{8}{\pi} \sum_{k=1}^n \frac{1}{k}
$$

### (2)
$$
\|\mathcal{F}_n\| = \sup_{\substack{f \in C(\mathbb{R}/2\pi\mathbb{Z}, \mathbb{C}), \\ \|f\|_\infty = 1}} \|\mathcal{F}_n(f)\|_\infty
\\
= \sup_{\substack{f \in C(\mathbb{R}/2\pi\mathbb{Z}, \mathbb{C}), \\ \|f\|_\infty = 1}} \sup_{x \in \mathbb{R}} \left| \int_0^{2\pi} f(t) D_n(x - t)\,dt \right|
\\
\leq \sup_{\substack{f \in C(\mathbb{R}/2\pi\mathbb{Z}, \mathbb{C}), \\ \|f\|_\infty = 1}} \sup_{x \in \mathbb{R}} \int_0^{2\pi} |f(t)| |D_n(x - t)|\,dt
\\
\leq \sup_{x \in \mathbb{R}} \int_0^{2\pi} |D_n(x - t)|\,dt = \|D_n\|_{L^1}
$$

设 $ m \in \mathbb{N} $ 足够大，取 $ f_{m,n}(t) $ 为图像为从 $ (0,0) $ 开始顺次连接 $ k = 1, \cdots, 2n + 1 $ 取值时的以下顶点：

$$
\left( \frac{2(k-1)\pi}{2n+1} + \frac{1}{m},\ (-1)^{k+1} \right),\quad \left( \frac{2k\pi}{2n+1} - \frac{1}{m},\ (-1)^{k+1} \right)
$$

最后连接 $ (2\pi, 0) $ 得到的折线段，延拓为 $ 2\pi $ 周期函数。则 $ \|f_{m,n}\|_\infty = 1 $，且

$$
\|\mathcal{F}_n(f_{m,n})\|_\infty \geq \left| \int_0^{2\pi} f_{m,n}(t) D_n(-t)\,dt \right| = \|D_n\|_{L^1} - \frac{2(2n+1)}{m}
$$

取 $ m \to \infty $，推出 $ \|\mathcal{F}_n\| = \|D_n\|_{L^1} $。

### (3)
考虑空间 $ C(\mathbb{R}/2\pi\mathbb{Z}, \mathbb{C}) $ 的子集：

$$
\mathcal{K} := \left\{ f \in C(\mathbb{R}/2\pi\mathbb{Z}, \mathbb{C}) : \|f\|_\infty \leq 1 \right\}
$$

在限制范数后，$\mathcal{K}$ 是一个 Banach 空间（严格而言，$\mathcal{K}$ 是单位球，不是线性空间；但若考虑其所在的赋范空间 $C(\mathbb{R}/2\pi\mathbb{Z}, \mathbb{C})$，则该空间是 Banach 空间）。

此外，在 (2) 中构造的函数 $ f_{m,n} \in \mathcal{K} $；并存在有界线性算子列 $ \mathcal{F}_n: \mathcal{K} \to C(\mathbb{R}/2\pi\mathbb{Z}, \mathbb{C}) $，满足：

$$
\|\mathcal{F}_n\| = \|D_n\|_{L^1} \to \infty \quad (n \to \infty)
$$

根据一致有界原理，集合

$$
\mathcal{R} := \left\{ f \in \mathcal{K} : \sup_{n} \|\mathcal{F}_n(f)\|_\infty = \infty \right\}
$$

是 $\mathcal{K}$ 中的一个剩余集（即第二纲集，稠密且不可数交的开稠集之交），因此必存在某个函数 $ f \in C(\mathbb{R}/2\pi\mathbb{Z}, \mathbb{C}) $，使得序列 $ \mathcal{F}_n(f) $ 不一致有界，从而傅里叶部分和序列 $ \mathcal{F}_n(f) $ 不一致收敛。


# 8.2
函数 $ f \in L^1([0, 2\pi], \mathbb{C}) $ 的 Fourier 系数定义为

$$
\hat{f}(k) := \int_0^{2\pi} e^{-ikt} f(t) dt, \quad k \in \mathbb{Z},
$$

并且 $ f $ 的 Fourier 级数为 $ \mathcal{F}(f) := (\hat{f}(k))_{k \in \mathbb{Z}} $.

(1) 证明 Riemann-Lebesgue 引理，即

$$
\lim_{|k|\to\infty} |\hat{f}(k)| = 0, \quad \forall f \in L^1([0, 2\pi], \mathbb{C}).
$$

(2) 记 $ c_0(\mathbb{Z}, \mathbb{C}) \subset \ell^\infty(\mathbb{Z}, \mathbb{C}) $ 的闭子空间，由当 $ |k| \to \infty $ 时趋于 0 的元素构成；证明有界线性算子 $ \mathcal{F}: L^1([0, 2\pi], \mathbb{C}) \to c_0(\mathbb{Z}, \mathbb{C}) $ 有稠密像但不是满射。（提示：考虑前一题中 Dirichlet 核的 Fourier 系数）

## 解答
### (1)

由实分析知识可知，$ L^1((0,2\pi), \mathbb{C}) $ 中的函数可被光滑紧支函数逼近。具体而言，对任意 $ f \in L^1((0,2\pi), \mathbb{C}) $ 和任意 $ \varepsilon > 0 $，存在光滑紧支函数 $ f_\varepsilon \in C_c^\infty((0,2\pi), \mathbb{C}) $，使得

$$
\|f - f_\varepsilon\|_{L^1} \leq \varepsilon.
$$

于是，

$$
|\hat{f}(n) - \hat{f}_\varepsilon(n)| = \left| \frac{1}{2\pi} \int_0^{2\pi} (f(t) - f_\varepsilon(t)) e^{-int} \, dt \right| \leq \frac{1}{2\pi} \|f - f_\varepsilon\|_{L^1} \leq \frac{\varepsilon}{2\pi}.
$$

因此，只需证明**光滑紧支函数版本的 Riemann-Lebesgue 引理**。

对 $ f_\varepsilon \in C_c^\infty((0,2\pi), \mathbb{C}) $，我们估计其傅里叶系数：

$$
|\hat{f}_\varepsilon(n)| = \frac{1}{2\pi} \left| \sum_{k=1}^n \int_{2(k-1)\pi/n}^{2k\pi/n} \left( f_\varepsilon(t) - f_\varepsilon\left(\frac{2k\pi}{n}\right) \right) e^{-int} \, dt + \int_{2(k-1)\pi/n}^{2k\pi/n} f_\varepsilon\left(\frac{2k\pi}{n}\right) e^{-int} \, dt \right|
$$

利用积分中值定理和三角不等式，可得：

$$
|\hat{f}_\varepsilon(n)| \leq \frac{1}{2\pi} \left( 2\pi \cdot \frac{2\pi}{n} \|f_\varepsilon'\|_\infty \right) + \frac{1}{2\pi} \cdot \max_k \left| f_\varepsilon\left( \frac{2k\pi}{n} \right) \right| \cdot \sum_{k=1}^n \left| \int_{2(k-1)\pi/n}^{2k\pi/n} e^{-int} \, dt \right|
$$

注意到每个小区间上 $ \int e^{-int} \, dt = 0 $（因为是完整周期的整数倍），故第二项为零。第一项简化为：

$$
|\hat{f}_\varepsilon(n)| \leq \frac{2\pi \|f_\varepsilon'\|_\infty}{n}
$$

因此，

$$
\lim_{n \to \infty} |\hat{f}(n)| \leq \lim_{n \to \infty} \left( |\hat{f}(n) - \hat{f}_\varepsilon(n)| + |\hat{f}_\varepsilon(n)| \right) \leq \frac{\varepsilon}{2\pi} + 0.
$$

由于 $ \varepsilon > 0 $ 是任意的，故

$$
\lim_{n \to \infty} |\hat{f}(n)| = 0.
$$

证毕。


### (2)

设范数为上确界范数。对任意序列 $ \xi \in c_0(\mathbb{Z}, \mathbb{C}) $ 和任意 $ \varepsilon > 0 $，存在 $ N \in \mathbb{N} $，使得当 $ |k| > N $ 时，$ |\xi(k)| < \varepsilon $。

定义截断函数：

$$
f_\varepsilon(t) := \sum_{k=-N}^{N} \xi(k) e^{ikt} \in L^1([0,2\pi], \mathbb{C}).
$$

则有：

$$
\| \mathcal{F}(f_\varepsilon) - \xi \|_\infty < \varepsilon,
$$

说明 $ L^1([0,2\pi], \mathbb{C}) $ 的像在 $ c_0(\mathbb{Z}, \mathbb{C}) $ 中稠密。

但该映射**不是满射**。反证如下：

假设 $ \mathcal{F} $ 是满射，则由开映射定理知，$ \mathcal{F} $ 是开映射，从而存在 $ \delta > 0 $，使得

$$
\delta B_{c_0} \subseteq \mathcal{F}(B_{L^1}),
$$

其中 $ B_{c_0} $ 和 $ B_{L^1} $ 分别表示单位球。

考虑序列：

$$
(a_{m,n})_{n \in \mathbb{Z}} \in c_0(\mathbb{Z}, \mathbb{C}), \quad a_{m,n} = \delta \chi_{[-m,m]}(n),
$$

即前 $ m $ 个正负项为 $ \delta $，其余为 0。显然 $ (a_{m,n}) \in \delta B_{c_0} $。

由满射性，存在原像 $ f_m \in B_{L^1} $，使得 $ \mathcal{F}(f_m) = (a_{m,n}) $。

注意到 $ \delta D_m $（Dirichlet 核缩放）是满足此傅里叶系数的一个函数。由傅里叶系数的唯一性，$ \delta D_m $ 是唯一的原像。

然而，Dirichlet 核的 $ L^1 $ 范数满足：

$$
\|f_m\|_{L^1} = \|\delta D_m\|_{L^1} \geq \delta \cdot \frac{8}{\pi} \sum_{k=1}^m \frac{1}{k} \xrightarrow{m \to \infty} \infty.
$$

这与 $ f_m \in B_{L^1} $（即 $ \|f_m\|_{L^1} \leq 1 $）矛盾。

因此，$ \mathcal{F} $ 不是满射。

# 8.3
本题目说明：一致有界性原理、开映射定理以及闭图像定理对不完备的赋范线性空间不成立。

令$X=\mathbb{R}^{\infty}$ 为有限项非零的实序列$x=(x_i)_{i\in\mathbb{N}}$ 组成的线性空间，对$x\in X$ 定义

$$\|x\|_{1}:=\sum_{i=1}^{\infty}|x_{i}|,\ \|x\|_{\infty}:=\sup_{i\in\mathbb{N}}|x_{i}|.$$

证明如下事实：

(1)对$n\in\mathbb{N}$ 定义线性泛函$\Lambda_{n}:X\rightarrow\mathbb{R}$ 为$\Lambda_{n}(x):=nx_{n}$ .则对于每个$n\in\mathbb{N},\Lambda_n$ 是有界的，并且$\sup_{n\in\mathbb{N}}\left|\Lambda_n(x)\right|<\infty,\forall x\in X$ 然而$\sup_{n\in\mathbb{N}}\|\Lambda_n\|_{X^*}=\infty$ ；（对前面定义的两种范数都是）

(2)恒等映射id:$(X,\|\cdot\|_{1})\to(X,\|\cdot\|_{\infty})$ 是有界的，但其逆不是；

(3)恒等映射id:$(X,\|\cdot\|_{\infty})\to(X,\|\cdot\|_{1})$ 有闭图像但不是有界的。

## 解答
### (1)
- **每个 $\Lambda_n$ 在两种范数下均有界：**
  - 对于 $\|\cdot\|_1$ 范数：  
    对任意 $x \in X$，有 $|\Lambda_n(x)| = |n x_n| = n |x_n|$。  
    由于 $\|x\|_1 = \sum_{i=1}^{\infty} |x_i| \geq |x_n|$，因此 $|\Lambda_n(x)| \leq n \|x\|_1$。  
    这表明 $\Lambda_n$ 有界，且 $\|\Lambda_n\|_{(X, \|\cdot\|_1)^*} \leq n$。  
    取序列 $x^{(n)} \in X$ 满足 $x^{(n)}_n = 1$，其余分量为 0，则 $\|x^{(n)}\|_1 = 1$，且 $\Lambda_n(x^{(n)}) = n \cdot 1 = n$，故 $|\Lambda_n(x^{(n)})| = n$，因此 $\|\Lambda_n\|_{(X, \|\cdot\|_1)^*} \geq n$。  
    综上，$\|\Lambda_n\|_{(X, \|\cdot\|_1)^*} = n$。
  - 对于 $\|\cdot\|_\infty$ 范数：  
    对任意 $x \in X$，有 $|\Lambda_n(x)| = |n x_n| \leq n \sup_{i \in \mathbb{N}} |x_i| = n \|x\|_\infty$。  
    这表明 $\Lambda_n$ 有界，且 $\|\Lambda_n\|_{(X, \|\cdot\|_\infty)^*} \leq n$。  
    取相同的序列 $x^{(n)}$，有 $\|x^{(n)}\|_\infty = 1$，且 $\Lambda_n(x^{(n)}) = n$，故 $|\Lambda_n(x^{(n)})| = n$，因此 $\|\Lambda_n\|_{(X, \|\cdot\|_\infty)^*} \geq n$。  
    综上，$\|\Lambda_n\|_{(X, \|\cdot\|_\infty)^*} = n$。

- **$\sup_{n \in \mathbb{N}} |\Lambda_n(x)| < \infty$ 对所有 $x \in X$ 成立：**  
  固定 $x \in X$，由于 $x$ 仅有有限项非零，设其支撑集的最大下标为 $N_x \in \mathbb{N}$，即当 $n > N_x$ 时 $x_n = 0$。  
  则当 $n > N_x$ 时，$\Lambda_n(x) = n \cdot 0 = 0$；当 $n \leq N_x$ 时，$\Lambda_n(x) = n x_n$ 为有限值。  
  因此，$\sup_{n \in \mathbb{N}} |\Lambda_n(x)| = \max_{n \leq N_x} |n x_n| < \infty$（有限个实数取最大值）。

- **$\sup_{n \in \mathbb{N}} \|\Lambda_n\|_{X^*} = \infty$ 对两种范数成立：**  
  由上述，$\|\Lambda_n\|_{(X, \|\cdot\|_1)^*} = n$ 和 $\|\Lambda_n\|_{(X, \|\cdot\|_\infty)^*} = n$，故 $\sup_{n \in \mathbb{N}} \|\Lambda_n\|_{X^*} = \sup_{n \in \mathbb{N}} n = \infty$。

### (2)
考虑恒等映射 $\text{id}: (X, \|\cdot\|_1) \to (X, \|\cdot\|_\infty)$。

- **$\text{id}$ 有界：**  
  对任意 $x \in X$，有 $\|x\|_\infty = \sup_{i \in \mathbb{N}} |x_i| \leq \sum_{i=1}^{\infty} |x_i| = \|x\|_1$（因为序列有限支撑）。  
  因此，$\|\text{id}(x)\|_\infty = \|x\|_\infty \leq 1 \cdot \|x\|_1$，故 $\text{id}$ 有界，且 $\|\text{id}\| \leq 1$。  
  取序列 $x^{(1)} \in X$ 满足 $x^{(1)}_1 = 1$，其余分量为 0，则 $\|x^{(1)}\|_1 = 1$，$\|\text{id}(x^{(1)})\|_\infty = 1$，故 $\|\text{id}\| = 1$。

- **其逆映射（即 $\text{id}: (X, \|\cdot\|_\infty) \to (X, \|\cdot\|_1)$）无界：**  
  逆映射为 $\text{id}^{-1} = \text{id}: (X, \|\cdot\|_\infty) \to (X, \|\cdot\|_1)$。  
  取序列 $x^{(k)} \in X$ 满足前 $k$ 个分量为 1，其余为 0（$k \in \mathbb{N}$)。  
  则 $\|x^{(k)}\|_\infty = \sup_{i} |x^{(k)}_i| = 1$，$\|x^{(k)}\|_1 = \sum_{i=1}^{k} |x^{(k)}_i| = k$。  
  因此，$\|\text{id}(x^{(k)})\|_1 = k = k \cdot \|x^{(k)}\|_\infty$。  
  当 $k \to \infty$ 时，$\frac{\|\text{id}(x^{(k)})\|_1}{\|x^{(k)}\|_\infty} = k \to \infty$，故逆映射无界。


### (3)
考虑恒等映射 $\text{id}: (X, \|\cdot\|_\infty) \to (X, \|\cdot\|_1)$。

- **$\text{id}$ 无界：**  
  同 (2) 中逆映射的证明：取 $x^{(k)} \in X$ 前 $k$ 个分量为 1，其余为 0，则 $\|x^{(k)}\|_\infty = 1$，$\|\text{id}(x^{(k)})\|_1 = k \to \infty$，故无界。

- **$\text{id}$ 有闭图像：**  
  需证：若序列 $\{x_n\} \subset X$ 满足在 $(X, \|\cdot\|_\infty)$ 中 $x_n \to x$，且在 $(X, \|\cdot\|_1)$ 中 $\text{id}(x_n) = x_n \to y$，则 $y = x$。  
  假设：
  - $\|x_n - x\|_\infty \to 0$（即 $x_n \to x$ 在 $\|\cdot\|_\infty$ 下），
  - $\|x_n - y\|_1 \to 0$（即 $x_n \to y$ 在 $\|\cdot\|_1$ 下）。  
  由 $\|x_n - x\|_\infty \to 0$，对每个固定 $i \in \mathbb{N}$，有 $|x_n(i) - x(i)| \leq \|x_n - x\|_\infty \to 0$，故 $x_n(i) \to x(i)$（逐点收敛）。  
  由 $\|x_n - y\|_1 \to 0$，对每个固定 $i \in \mathbb{N}$，有 $|x_n(i) - y(i)| \leq \sum_{j} |x_n(j) - y(j)| = \|x_n - y\|_1 \to 0$，故 $x_n(i) \to y(i)$（逐点收敛）。  
  因此，对每个 $i$，有 $x_n(i) \to x(i)$ 和 $x_n(i) \to y(i)$，故 $x(i) = y(i)$。  
  即 $x = y$，所以图像闭。

# 8.4
证明：设 $T \in L(X; Y)$，其中 $X$ 和 $Y$ 是赋范空间。则 $T$ 是开映射当且仅当存在 $r_0 > 0$、$R_0 > 0$、$x_0 \in X$ 和 $x_1 \in X$ 满足 $x_1 \in B(x_0; R_0)$ 且 $B(T x_1; r_0) \subseteq T(B(x_0; R_0))$。

## 解答
### 充分性
假设 $T$ 是开映射。考虑任意点 $x_0 \in X$ 和半径 $R_0 > 0$（例如，取 $R_0 = 1$)。由于 $T$ 是开映射，且开球 $B(x_0; R_0)$ 是开集，因此 $T(B(x_0; R_0))$ 是 $Y$ 中的开集。注意 $T x_0 \in T(B(x_0; R_0))$，因为 $x_0 \in B(x_0; R_0)$（由 $\|x_0 - x_0\| = 0 < R_0$ 保证）。因此，存在 $r_0 > 0$ 使得以 $T x_0$ 为中心的开球满足：
$$
B(T x_0; r_0) \subseteq T(B(x_0; R_0)).
$$
现在，取 $x_1 = x_0$，则 $x_1 \in B(x_0; R_0)$（因为 $\|x_1 - x_0\| = 0 < R_0$)，且：
$$
B(T x_1; r_0) = B(T x_0; r_0) \subseteq T(B(x_0; R_0)).
$$
因此，存在 $x_0 \in X$、$R_0 > 0$（例如 $R_0 = 1$)、$r_0 > 0$ 和 $x_1 = x_0$ 满足条件。

### 必要性
假设存在 $x_0 \in X$、$R_0 > 0$、$r_0 > 0$ 和 $x_1 \in X$ 满足：
- $x_1 \in B(x_0; R_0)$，即 $\|x_1 - x_0\| < R_0$,
- $B(T x_1; r_0) \subseteq T(B(x_0; R_0))$.

定义 $z = x_1 - x_0$，则 $\|z\| < R_0$，且 $z \in B(0; R_0)$。由 $T$ 的线性性：
$$
T(B(x_0; R_0)) = T(x_0 + B(0; R_0)) = T x_0 + T(B(0; R_0)).
$$
令 $y_1 = T x_1 = T(x_0 + z) = T x_0 + T z$，则给定条件为：
$$
B(y_1; r_0) \subseteq T x_0 + T(B(0; R_0)).
$$
代入 $y_1 = T x_0 + T z$：
$$
T x_0 + T z + B(0; r_0) \subseteq T x_0 + T(B(0; R_0)).
$$
因此：
$$
T z + B(0; r_0) \subseteq T(B(0; R_0)).
$$
由于 $\|z\| < R_0$，有 $T z \in T(B(0; R_0))$。令 $S = T(B(0; R_0))$，则：
$$
T z + B(0; r_0) \subseteq S.
$$
因为 $T z \in S$，有：
$$
B(0; r_0) \subseteq S - T z \subseteq S - S,
$$
其中 $S - S = \{a - b \mid a, b \in S\}$。由于 $T$ 是线性的，且 $B(0; R_0)$ 是凸集（赋范空间中开球是凸集），因此 $S = T(B(0; R_0))$ 是凸集。对于任意 $a, b \in S$，存在 $u, v \in B(0; R_0)$ 使得 $a = T u$，$b = T v$，且：
$$
a - b = T(u - v), \quad \|u - v\| \leq \|u\| + \|v\| < R_0 + R_0 = 2R_0.
$$
故 $a - b \in T(B(0; 2R_0))$，即 $S - S \subseteq T(B(0; 2R_0))$。因此：
$$
B(0; r_0) \subseteq S - S \subseteq T(B(0; 2R_0)).
$$
这表明 $T(B(0; 2R_0))$ 包含开球 $B_Y(0; r_0)$。为证 $T$ 是开映射，需证对任意开集 $U \subseteq X$，$T(U)$ 是开集。设 $y \in T(U)$，则存在 $x \in U$ 使得 $T x = y$。由于 $U$ 开，存在 $\delta > 0$ 使得 $B(x; \delta) \subseteq U$。则：
$$
T(B(x; \delta)) = T(x + B(0; \delta)) = y + T(B(0; \delta)).
$$
由 $B(0; r_0) \subseteq T(B(0; 2R_0))$ 和 $T$ 的线性性，有：
$$
T(B(0; \delta)) = \delta \cdot T(B(0; 1)) \supseteq \delta \cdot \left( \frac{r_0}{2R_0} B(0; 1) \right) = B\left(0; \frac{\delta r_0}{2R_0}\right),
$$
因为 $B(0; 2R_0) = 2R_0 \cdot B(0; 1)$，所以：
$$
T(B(0; 1)) \supseteq \frac{r_0}{2R_0} B(0; 1) = B\left(0; \frac{r_0}{2R_0}\right).
$$
因此：
$$
T(B(0; \delta)) \supseteq \delta \cdot B\left(0; \frac{r_0}{2R_0}\right) = B\left(0; \frac{\delta r_0}{2R_0}\right).
$$
于是：
$$
T(B(x; \delta)) \supseteq y + B\left(0; \frac{\delta r_0}{2R_0}\right).
$$
这表明 $y$ 是 $T(U)$ 的内点，故 $T(U)$ 是开集。因此 $T$ 是开映射。

综上，$T$ 是开映射当且仅当存在 $r_0 > 0$、$R_0 > 0$、$x_0 \in X$ 和 $x_1 \in X$ 满足 $x_1 \in B(x_0; R_0)$ 且 $B(T x_1; r_0) \subseteq T(B(x_0; R_0))$。

# 8.5
设 $\mathcal{X}, \mathcal{Y}$ 是Banach空间，又设方程 $Ux=y$ 对任意 $y\in\mathcal{Y}$ 有解 $x\in\mathcal{X}$ ，其中 $U\in\mathcal{L}(\mathcal{X},\mathcal{Y})$ ，并且存在$m>0$ 使得

$$\|U x\|\geq m\|x\|,\forall x\in\mathcal{X}.$$

证明：$U$ 有连续逆$U^{-1}$ ，并且 $\|U^{-1}\|\leq 1/m.$ 

## 解答
首先，证明 $U$ 是单射。若 $Ux = 0$，则 $\|Ux\| = 0 \geq m \|x\|$，由于 $m > 0$，必有 $\|x\| = 0$，即 $x = 0$。因此 $U$ 是单射。结合题目条件，$U$ 是满射，故 $U$ 是双射，存在逆算子 $U^{-1}: \mathcal{Y} \to \mathcal{X}$.

其次，证明 $U^{-1}$ 连续且 $\|U^{-1}\| \leq \frac{1}{m}$。对任意 $y \in \mathcal{Y}$，设 $x = U^{-1}y$，则 $Ux = y$。由条件 $\|Ux\| \geq m \|x\|$，有
$$
\|y\| = \|Ux\| \geq m \|x\| = m \|U^{-1}y\|,
$$
故
$$
\|U^{-1}y\| \leq \frac{1}{m} \|y\|.
$$
因此，$U^{-1}$ 是线性算子且满足 $\|U^{-1}y\| \leq \frac{1}{m} \|y\|$ 对所有 $y \in \mathcal{Y}$ 成立，即 $U^{-1}$ 有界（故连续），且
$$
\|U^{-1}\| = \sup_{\|y\|=1} \|U^{-1}y\| \leq \sup_{\|y\|=1} \frac{1}{m} \|y\| = \frac{1}{m}.
$$

综上，$U$ 有连续逆 $U^{-1}$，且 $\|U^{-1}\| \leq \frac{1}{m}$.
