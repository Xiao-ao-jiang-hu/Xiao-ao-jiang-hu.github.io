---
title: 泛函分析作业题干汇总
tags:
  - math
  - homework
  - functional analysis
categories:
  - math
  - functional analysis homework
index_img: /img/fa.jpg
banner_img: /img/fa.jpg
excerpt: 泛函分析各次作业汇总
abbrlink: d8be9b47
date: 2026-01-10 12:00:00
---

## 第1次作业
### 1.1
设 $(X, d_X)$ 为度量空间，$Y \subset X$ 为子集，并用 $d_Y := d_X|_{Y \times Y}$ 表示 $Y$ 上的诱导距离函数。证明：
1. 若 $(Y, d_Y)$ 是完备的，则 $Y$ 是 $X$ 的闭子集；
2. 若 $(X, d_X)$ 是完备的，并且 $Y$ 是 $X$ 的闭子集，则 $(Y, d_Y)$ 是完备的。

### 1.2
设 $(X,d)$ 为度量空间，$(X,d)$ 的完备化是指一个三元组 $(\overline{X},\overline{d},t)$，包含一个完备度量空间 $(\overline{X},\overline{d})$，以及具有稠密像的等距嵌入 $t: X \to \overline{X}$。

1. 每个 $(X,d)$ 的完备化 $(\overline{X},\overline{d},t)$ 都具有如下的泛性质：若 $(Y,d_Y)$ 为完备度量空间，$\phi: X \to Y$ 为 1-Lipschitz 映射（即：Lipschitz 常数为 1 的 Lipschitz 连续映射），则存在唯一的 1-Lipschitz 映射 $\overline{\phi}:\overline{X} \to Y$ 使得 $\phi = \overline{\phi} \circ t$。

2. 若 $(\overline{X}_1,\overline{d}_1,t_1),(\overline{X}_2,\overline{d}_2,t_2)$ 为 $(X,d)$ 的两个完备化，则存在唯一的等距映射 $\psi: \overline{X}_1 \to \overline{X}_2$ 使得 $\psi \circ t_1 = t_2$。

3. $(X,d)$ 的完备化存在；提示：考虑由有界连续函数 $f: X \to \mathbb{R}$ 构成的空间 $C_b(X)$，它在上确界范数下是 Banach 空间；令 $x_0 \in X$，对 $x \in X$ 定义 $f_x \in C_b(X)$ 为
$$
f_x(y) := d(y,x) - d(y,x_0), \quad \text{for } y \in X.
$$
证明映射 $t: X \to C_b(X), x \mapsto f_x$ 是等距嵌入，于是 $t(X)$ 的闭包、$C_b(X)$ 中的度量、以及 $t$ 构成了 $(X,d)$ 的一个完备化；

4. 设 $(\overline{X},\overline{d})$ 是完备度量空间，$t: X \to \overline{X}$ 为 1-Lipschitz 映射并且满足 1 中的泛性质，则 $(\overline{X},\overline{d},t)$ 是 $(X,d)$ 的一个完备化。

### 1.3
证明赋范向量空间的完备化是 Banach 空间

### 1.4
设 $X = \left\{ (x_1, x_2, x_3, \ldots) \,\middle|\, \text{只有有限个 } x_i \neq 0 \right\}$，配备欧氏范数 $\|x\| = \sqrt{\sum_{i=1}^{\infty} |x_i|^2}$。证明$X$ 不是完备的，并给出其完备化。

### 1.5
设 $(X, M, \mu)$ 是一个复测度空间，即 $\mu : M \to \mathbb{C}$ 满足：
1. $\mu(\emptyset) = 0$;
2. 若 $\{E_j\}_{j \geq 1} \subset M$ 且互不相交，则 $\mu\left(\bigcup_{j=1}^{\infty} E_j\right) = \sum_{j=1}^{\infty} \mu(E_j)$.

则：
1. 对任意 $E \in M$，定义
$$
|\mu|(E) := \sup \left\{ \sum_{j=1}^{\infty} |\mu(E_j)| : \{E_j\}_{j \geq 1} \text{ 是 } E \text{ 的可测分割} \right\},
$$
其中上确界取遍所有 $E$ 的可数可测分割（即 $E = \bigcup_{j=1}^{\infty} E_j$，且 $E_j$ 互不相交）。证明 $|\mu|$ 是 $(X, M)$ 上的正测度，且 $|\mu|(X) < \infty$，即 $|\mu|$ 是有限测度。

2. 记 $C_m := \{ (X, M) \text{ 上的复测度} \}$，且对任意 $\mu \in C_m$，定义 $\|\mu\| = |\mu|(X)$。证明 $(C_m, \|\cdot\|)$ 是 Banach 空间。

## 第2次作业
### 2.1
本题目旨在说明算子范数的定义中，$\sup$ 不一定是最大值。考虑 Banach 空间 $X := C([-1, 1])$，为连续函数 $f: [-1,1] \to \mathbb{R}$ 装备上确界范数，并定义有界线性泛函 $\Lambda$ 为
$$
\Lambda : C([-1,1]) \to \mathbb{R}, \Lambda(f) := \int_0^1 f(t) dt - \int_{-1}^0 f(t) dt \quad \text{for } f \in C([-1,1]).
$$
证明：$\|\Lambda\| = 2$，但不存在 $f \in C([-1,1])$ 使得 $\|f\|_\infty = 1, |\Lambda(f)| = 2$。

### 2.2
设 $C(0,1]$ 表示 $(0,1]$ 上的有界连续函数，对 $f \in C(0,1]$ 令 $\|f\| = \sup_{0<x\leq 1} |f(x)|$。证明：
1. $\|\cdot\|$ 是 $C(0,1]$ 空间上的范数；
2. $l^\infty$ 与 $C(0,1]$ 的一个子空间是等距同构的。

### 2.3
在 $C^1[a,b]$ 中，对 $f \in C^1[a,b]$，令
$$
\|f\|_1 = \left( \int_a^b (|f|^2 + |f'|^2) dx \right)^{1/2}.
$$
1. 证明：$\|\cdot\|_1$ 是 $C^1[a,b]$ 上的范数；
2. 问 $(C^1[a,b], \|\cdot\|_1)$ 是否完备？

### 2.4
在 $C[0,1]$ 中，对 $f \in C[0,1]$，令
$$
\|f\|_1 = \left( \int_0^1 |f(x)|^2 dx \right)^{1/2}, \quad \|f\|_2 = \left( \int_0^1 (1+x)|f(x)|^2 dx \right)^{1/2}.
$$
证明：$\|\cdot\|_1$ 和 $\|\cdot\|_2$ 是 $C[0,1]$ 中的两个等价范数。

### 2.5
设 $BC[0, \infty)$ 表示 $[0, \infty)$ 上的有界连续函数，对 $f \in BC[0, \infty)$ 以及 $a > 0$，定义
$$
\|f\|_a = \left( \int_0^\infty e^{-ax} |f(x)|^2 dx \right)^{1/2}.
$$
1. 证明：$\|\cdot\|_a$ 是 $BC[0, \infty)$ 上的范数；
2. 若 $a, b > 0, a \neq b$，证明：$\|\cdot\|_a$ 与 $\|\cdot\|_b$ 作为 $BC[0, \infty)$ 上的范数是不等价的。

### 2.6
若 $(X, \|\cdot\|)$ 是赋范空间，则 $(X, \|\cdot\|)$ 是 Banach 空间当且仅若 $\sum_{i \geq 1} \|u_i\| < \infty$，$u_i \in X$，则存在 $u \in X$ 使得 $u = \sum_{i \geq 1} u_i$。

## 第3次作业
### 3.1
证明在 $C[a, b]$ 中，不可能引入一个内积 $(\cdot, \cdot)$，使得  
$$
(f, f)^{1/2} = \max_{a \leq x \leq b} |f(x)|, \quad \forall f \in C[a, b].
$$

### 3.2
在 $L^2[0,T]$ 中考虑泛函  
$$
J(f) = \left| \int_0^T e^{-(T-t)} f(t) \, dt \right|, \quad f \in L^2[0,T].
$$  
求在单位球面（即 $\|f\|_{L^2} = 1$）上 $J(f)$ 的最大值以及达到最大值的函数。

### 3.3
证明$L^\infty$空间是不可分的。

### 3.4
证明Hanner不等式并说明对于 $1< p <+\infty$, $L^p$空间是一致凸的

### 3.5
设 $(X, \mathcal{M}, \mu)$ 是一个完备测度空间，且 $\mu$ 是 $\sigma$-有限的。证明 $\mu$ 是可局部化的。

### 3.6
证明
1. $(l^p)^* = l^q$，其中$1/p+1/q=1$, $1 \leq p < +\infty$
2. 若$C_0 = \{\{x_n\} \mid \lim_{n \to \infty}|x_n|=0\} \subset l^{\infty}$, 则$(C_0)^* = l^1$.

## 第4次作业
### 4.1
写出网收敛的概念，并尝试说明$[a,b]$区间上的Riemann可积是网收敛。

### 4.2
考虑装备了上确界范数的 $C[0,1]$ 空间，令

$$
N = \left\{ f \in C[0,1] : \int_0^1 f(x)\,dx = 0 \right\}
$$

为 $C[0,1]$ 中具有零平均值函数构成的线性闭子空间，再令

$$
X = \{ f \in C[0,1] : f(0) = 0 \}
$$

并定义 $M = N \cap X$，即

$$
M = \left\{ f \in C[0,1] : f(0) = 0,\ \int_0^1 f(x)\,dx = 0 \right\}.
$$

1. 若 $u \in C[0,1]$，证明

$$
d(u, N) = \inf_{n \in N} \| u - n \|_\infty = \left| \int_0^1 u(x)\,dx \right|,
$$

其中 $\int_0^1 u(x)\,dx$ 表示 $u$ 的平均值，因此下确界在 $n = u - \int_0^1 u(x)\,dx \in N$ 处取到；

2. 若 $u(x) = x \in X$，证明

$$
d(u, M) = \inf_{m \in M} \| u - m \|_\infty = \frac{1}{2},
$$

但下确界不能在任何 $m \in M$ 处取到。

### 4.3
若 $A$ 是某个 Hilbert 空间的子集，证明

$$
A^\perp = \overline{A}^{\perp},
$$

其中 $\overline{A}$ 表示 $A$ 的闭包；若 $M$ 是某个 Hilbert 空间的线性子空间，证明

$$
M^{\perp\perp} = \overline{M}.
$$

### 4.4
设 $\mathcal{H}_1, \mathcal{H}_2$ 是两个 Hilbert 空间，定义直和空间：

$$
\mathcal{H}_1 \oplus \mathcal{H}_2 = \left\{ (x_1, x_2) : x_1 \in \mathcal{H}_1,\ x_2 \in \mathcal{H}_2 \right\}
$$

并装备内积：

$$
\langle (x_1, x_2), (y_1, y_2) \rangle_{\mathcal{H}_1 \oplus \mathcal{H}_2} = \langle x_1, y_1 \rangle_{\mathcal{H}_1} + \langle x_2, y_2 \rangle_{\mathcal{H}_2}
$$

证明 $\mathcal{H}_1 \oplus \mathcal{H}_2$ 是 Hilbert 空间，并找出子空间 $M = \left\{ (x_1, 0) : x_1 \in \mathcal{H}_1 \right\}$ 的正交补空间 $M^\perp$。

### 4.5
设 $\{H_n : n \in \mathbb{N}\}$ 是 Hilbert 空间 $\mathcal{H}$ 的一列两两正交的闭子空间。定义无穷直和：

$$
\bigoplus_{n=1}^{\infty} H_n = \left\{ \sum_{n=1}^{\infty} x_n : x_n \in H_n,\ \sum_{n=1}^{\infty} \|x_n\|^2 < \infty \right\}.
$$

证明：$\bigoplus_{n=1}^{\infty} H_n$ 是 $\mathcal{H}$ 的线性闭子空间。

### 4.6
写出$L^p$版本的凸投影定理并证明

### 4.7
设 $\{x_n : n \in \mathbb{N}\}$ 为 Hilbert 空间中的标准正交基，证明 $\sum_{n=1}^\infty \frac{x_n}{n}$ 无条件收敛但不绝对收敛。

### 4.8
证明：Hilbert空间是可分度量空间当且仅当它有可数标准正交基。

### 4.9
若 $\mathcal{M}$ 是可分Hilbert空间 $\mathcal{H}$ 的稠密线性子空间，则 $\mathcal{H}$ 有一族由 $\mathcal{M}$ 中元素组成的标准正交基；若 $\mathcal{M}$ 是 $\mathcal{H}$ 的任意稠密子集，结论是否仍然成立？

## 第5次作业
### 5.1
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

### 5.2
三种特殊多项式的两种认识 (1)：Gram-Schmidt 正交化

假设 $ H = (H, (\cdot, \cdot)) $ 是 Hilbert 空间。若多项式序列 $ \{P_n\}_{n=0}^{\infty} $ 满足：

1. $ \mathbf{P} := \operatorname{span}\{1, x, \cdots, x^n, \cdots\} \subset H $；  
2. $ \deg P_n = n $；  
3. $ (P_m, P_n) = 0,\ \forall m \ne n $，

则称 $ \{P_n\}_{n=0}^{\infty} $ 是 $ H $ 上的正交多项式。

证明：

1. 正交多项式存在；

2. 若 $ \{P_n\}_{n=0}^{\infty} $，$ \{\tilde{P}_n\}_{n=0}^{\infty} $ 是 $ H $ 上两个正交多项式，则对于 $ n \in \mathbb{N} $，存在 $ c_n \in \mathbb{F} $ 使得  
$$
P_n = c_n \tilde{P}_n.
$$

### 5.2
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

### 5.3
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

### 5.4
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

### 5.5
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

## 第6次作业
### 6.1
记 $ I = [0,1] $ 为单位区间，$ C^1(I) $ 为连续可微函数 $ f: I \to \mathbb{R} $ 构成的空间（在 $ t=0 $ 和 $ t=1 $ 处考虑单侧导数）。定义  
$$
\|f\|_{C^1} := \sup_{0 \leq t \leq 1} |f(t)| + \sup_{0 \leq t \leq 1} |f'(t)|, \quad \text{for } f \in C^1(I).
$$

1. 证明：$ C^1(I) $ 在如上定义的范数下为 Banach 空间；

2. 证明：嵌入映射 $ \iota: C^1(I) \to C(I) $ 是有界线性算子；

3. 记 $ B \subset C^1(I) $ 为单位球，证明：$ \iota(B) $ 的闭包是紧的；

4. $ \iota(B) $ 是 $ C(I) $ 中的闭集吗？

5. 线性映射 $ \iota: C^1(I) \to C(I) $ 的像集是紧的吗？

### 6.2
记 $ I = [0,1] $，$ K: I \times I \to \mathbb{R} $ 为连续函数。定义线性算子 $ T_K: C(I) \to C(I) $ 为：

$$
(T_K f)(t) := \int_0^1 K(t,s) f(s)\,ds, \quad \text{for } f \in C(I),\ 0 \le t \le 1.
$$

证明：  
1. $ T_K $ 是连续的；  
2. 令 $ B \subset C(I) $ 为单位球（即 $ B = \{ f \in C(I) : \|f\|_\infty \le 1 \} $），证明 $ T_K(B) $ 的闭包是 $ C(I) $ 中的紧集。

## 第5次作业
### 5.3
设 $(X, \rho)$ 是完备度量空间，$M$ 是 $X$ 中的列紧集，映射 $f: X \to M$ 满足

$$
\rho(f(x_1), f(x_2)) < \rho(x_1, x_2), \quad \forall x_1, x_2 \in X,\ x_1 \ne x_2.
$$

证明：$f$ 在 $X$ 中存在唯一的不动点。

## 第6次作业
### 6.3
设 $M$ 是 $C[a,b]$ 中的有界集，证明：集合

$$
\left\{ F(x) = \int_a^x f(t)\,dt : f \in M \right\}
$$

是预列紧集。

### 6.4
设 $E = \{\sin nt\}_{n=1}^\infty$，证明：$E$ 在 $C[0,\pi]$ 中不是列紧的。

### 6.5
在度量空间中证明：完全有界的集合是有界的，并通过考虑 $l^2$ 的子集 $E = \{e_k\}_{k=1}^\infty$ 来说明一个集合可以有界但不完全有界。

### 6.6
试说明：对于可分非空完备度量空间，Baire 纲定理无需使用“依赖选择公理”。

### 6.7
试利用 Baire 纲定理证明：超越数在 $\mathbb{R}$ 中稠密。

## 第7次作业
### 7.1
(Baire纲定理等价依赖选择公理) 设 $X$ 为非空集合, 映射 $A: X \to 2^X$ 把每个 $x \in X$ 映为非空集合 $A(x) \subset X$, 证明存在序列 $\{x_n\}_{n=1}^\infty \subset X$ 使得 $x_{n+1} \in A(x_n), \forall n \in \mathbb{N}$.

**提示:** 记 $\mathcal{X} := X^\mathbb{N}$ 为所有序列 $\xi = \{x_n\}_{n=1}^\infty \subset X$ 构成的集合, 并定义函数 $d: \mathcal{X} \times \mathcal{X} \to [0, \infty)$ 如下: 对 $\xi = \{x_n\}_{n=1}^\infty \in \mathcal{X}, \eta = \{y_n\}_{n=1}^\infty \in \mathcal{X}$ 定义
$$d(\xi, \xi) = 0, \quad d(\xi, \eta) := 2^{-n}, \quad n := \min\{k \in \mathbb{N}: x_k \neq y_k\}.$$
证明 $(\mathcal{X}, d)$ 是完备度量空间, 对 $k \in \mathbb{N}$ 定义
$$
\mathcal{U}_k := \{\xi = \{x_n\}_{n=1}^\infty \in \mathcal{X}: \exists l > k, \text{ such that } x_l \in A(x_k)\}.
$$
证明对每个 $k \in \mathbb{N}, \mathcal{U}_k$ 是 $\mathcal{X}$ 中的稠密开集, 并由此推出 $\mathcal{R} := \bigcap_{k=1}^\infty \mathcal{U}_k$ 是非空的, 选取其中元素并构造其合适的子序列.

### 7.2
设 $f : [0, \infty) \to \mathbb{R}$ 为连续函数，并且
$$
\lim_{n \to \infty} f(nt) = 0, \quad \forall t > 0.
$$
证明：$\lim_{x \to \infty} f(x) = 0$.
提示：固定 $\varepsilon > 0$ 并证明对某些 $n \in \mathbb{N}$,
$$
A_n := \{ t > 0 : |f(mt)| \leq \varepsilon, \forall m \geq n \}
$$
的内部是非空的，不妨设 $[a, b] \subset A_n$, $0 < a < b$ 以及 $n(b-a) \geq a$，推出 $|f(x)| \leq \varepsilon, \forall x \geq na$.

### 7.3
设$X$为无限维赋范线性空间，$\Lambda:X\to\mathbb{R}$为非零线性泛函，则以下命题等价：
1. $\Lambda$ 是有界的
2. $\operatorname{Ker} \Lambda$ 是 $X$ 的闭线性子空间
3. $\operatorname{Ker} \Lambda$ 在 $X$ 中不是稠密的

### 7.4
假设 $\{x_n\} _{n\geq 1}$ 具有如下性质：对任意 $\{ y_n\} _{n\geq 1}$ 满足 $\lim _{n\to \infty }y_n= 0$ , 总有 $\sum _{n\geq 1}x_ny_n$ 收敛，则 $\sum_{n\geq1}|x_n|$ 收敛。

### 7.5
(本题强调讲义 45 页共轭双线性定理中 “X 是 Banach 空间” 条件不可去除)
假设 $X$ 是 $[0, 1]$ 上实系数多项式函数的全体。考虑 $(X, L^1(0,1))$ 空间上的双线性泛函
$$
B(f,g) := \int_0^1 f(t)g(t)dt, \forall f,g \in X.
$$
试证明：
1. $\forall x \in X$，$B(x, \cdot)$ 是共轭线性的；$\forall y \in X$，$B(\cdot, y) \in \mathcal{L}(X, \mathbb{R})$  且连续。
2. B 不是有界的。

## 第8次作业
### 8.1
本题目说明，存在Fourier级数不一致收敛的连续函数。记$C(\mathbb{R}/2\pi\mathbb{Z},\mathbb{C})$ 为装备了上确界范数的、以$2\pi$ 为周期的复值连续函数$f:\mathbb{R}\to\mathbb{C}$ 构成的空间。

1. 对$n\in\mathbb{N}$ 定义Dirichlet核$D_{n}\in C(\mathbb{R}/2\pi\mathbb{Z},\mathbb{C})$ 为

$$D_{n}(t):=\sum_{k=-n}^{n}e^{i k t}=\frac{\sin((n+\frac{1}{2})t)}{\sin(\frac{1}{2}t)},\ t\in\mathbb{R}.$$

证明：$\|D_n\|_{L^1}\geq\frac{8}{\pi}\sum_{k=1}^{n}\frac{1}{k}$ 

2. 函数$f\in C(\mathbb{R}/2\pi\mathbb{Z},\mathbb{C})$ 的第n项Fourier展开定义为

$$(\mathcal{F}_{n}(f))(x):=(D_{n}*f)(x)=\sum_{k=-n}^{n}\int_{0}^{2\pi}f(t)e^{i k(x-t)}d t,\ x\in\mathbb{R}.$$

证明算子$\mathcal{F}_{n}:C(\mathbb{R}/2\pi\mathbb{Z},\mathbb{C})\to C(\mathbb{R}/2\pi\mathbb{Z},\mathbb{C})$ 的算子范数为$\|\mathcal{F}_{n}\|=\|D_{n}\|_{L^{1}}$ 

3. 利用一致有界性原理推出：存在$f\in C(\mathbb{R}/2\pi\mathbb{Z},\mathbb{C})$ 使得序列$\mathcal{F}_{n}(f)$ 不一致收敛。

### 8.2
函数 $ f \in L^1([0, 2\pi], \mathbb{C}) $ 的 Fourier 系数定义为

$$
\hat{f}(k) := \int_0^{2\pi} e^{-ikt} f(t) dt, \quad k \in \mathbb{Z},
$$

并且 $ f $ 的 Fourier 级数为 $ \mathcal{F}(f) := (\hat{f}(k))_{k \in \mathbb{Z}} $.

1. 证明 Riemann-Lebesgue 引理，即

$$
\lim_{|k|\to\infty} |\hat{f}(k)| = 0, \quad \forall f \in L^1([0, 2\pi], \mathbb{C}).
$$

2. 记 $ c_0(\mathbb{Z}, \mathbb{C}) \subset \ell^\infty(\mathbb{Z}, \mathbb{C}) $ 的闭子空间，由当 $ |k| \to \infty $ 时趋于 0 的元素构成；证明有界线性算子 $ \mathcal{F}: L^1([0, 2\pi], \mathbb{C}) \to c_0(\mathbb{Z}, \mathbb{C}) $ 有稠密像但不是满射。（提示：考虑前一题中 Dirichlet 核的 Fourier 系数）

### 8.3
本题目说明：一致有界性原理、开映射定理以及闭图像定理对不完备的赋范线性空间不成立。

令$X=\mathbb{R}^{\infty}$ 为有限项非零的实序列$x=(x_i)_{i\in\mathbb{N}}$ 组成的线性空间，对$x\in X$ 定义

$$\|x\|_{1}:=\sum_{i=1}^{\infty}|x_{i}|,\ \|x\|_{\infty}:=\sup_{i\in\mathbb{N}}|x_{i}|.$$

证明如下事实：

1. 对$n\in\mathbb{N}$ 定义线性泛函$\Lambda_{n}:X\rightarrow\mathbb{R}$ 为$\Lambda_{n}(x):=nx_{n}$ .则对于每个$n\in\mathbb{N},\Lambda_n$ 是有界的，并且$\sup_{n\in\mathbb{N}}\left|\Lambda_n(x)\right|<\infty,\forall x\in X$ 然而$\sup_{n\in\mathbb{N}}\|\Lambda_n\|_{X^*}=\infty$ ；（对前面定义的两种范数都是）

2. 恒等映射id:$(X,\|\cdot\|_{1})\to(X,\|\cdot\|_{\infty})$ 是有界的，但其逆不是；

3. 恒等映射id:$(X,\|\cdot\|_{\infty})\to(X,\|\cdot\|_{1})$ 有闭图像但不是有界的。

### 8.4
证明：设 $T \in L(X; Y)$，其中 $X$ 和 $Y$ 是赋范空间。则 $T$ 是开映射当且仅当存在 $r_0 > 0$、$R_0 > 0$、$x_0 \in X$ 和 $x_1 \in X$ 满足 $x_1 \in B(x_0; R_0)$ 且 $B(T x_1; r_0) \subseteq T(B(x_0; R_0))$。

### 8.5
设 $\mathcal{X}, \mathcal{Y}$ 是Banach空间，又设方程 $Ux=y$ 对任意 $y\in\mathcal{Y}$ 有解 $x\in\mathcal{X}$ ，其中 $U\in\mathcal{L}(\mathcal{X},\mathcal{Y})$ ，并且存在$m>0$ 使得

$$\|U x\|\geq m\|x\|,\forall x\in\mathcal{X}.$$

证明：$U$ 有连续逆$U^{-1}$ ，并且 $\|U^{-1}\|\leq 1/m.$

## 第9次作业
### 9.1
设 $X$ 是一个向量空间，$\|\cdot\|_1$ 和 $\|\cdot\|_2$ 是 $X$ 上的两个范数。如果 $(X, \|\cdot\|_1)$ 和 $(X, \|\cdot\|_2)$ 都是 Banach 空间
1. 证明这两个范数等价，即存在常数 $c, C > 0$，使得对任意 $x \in X$，有
$$c \|x\|_2 \leq \|x\|_1 \leq C \|x\|_2.$$
2. 证明 $(C[0,1], \|\cdot\|_{L_1})$ 不是 Banach 空间

### 9.2
试利用闭图像定理证明逆算子定理以及开映射定理

### 9.4
完善判别可补充空间的充分条件，即引理：
设 $X$ 是赋范空间，$Y$ 是 $X$ 的闭子空间，且满足 $\dim(X/Y) < +\infty$ 或 $\dim{Y} < +\infty$ ，则 $Y$ 可补充于 $X$。

### 9.5
设 $\mathcal{X}, \mathcal{Y}$ 是赋范线性空间，D是 $\mathcal{X}$ 的线性子空间并且 $A: D \to \mathcal{Y}$ 是线性映射，证明：
1. 若$A$连续且$D$是闭的，则$A$是闭算子；

2. 若$A$连续且是闭算子，则$\mathcal{Y}$完备蕴含$D$闭；

3. 若$A$是单射的闭算子，则$A^{-1}$也是闭算子；

4. 若X完备，$A$是单射的闭算子，$R(A)$在中稠密并且$A^{-1}$ 连续，则$R(A)=\mathcal{Y}$

### 9.6
记${T=\frac{\partial}{\partial x},\mathrm{G r a p h}(T)=\{(f,f^{\prime})|f\in C^{1}[a,b]\}}$ 则

1. $T$ 可闭 (Hint，$f(x)-f(a)=\int_{a}^{x}f^{\prime}(t)dt$)

2. 若$\overline{{\mathrm{Graph}(\mathrm{T})}}=\{(f,g)|\exists\{f_n\}_{n\geq1}\subset C^1([a,b]),s.t.f_n\stackrel{L^2}{\rightarrow}f,f'_n\stackrel{L^2}{\rightarrow}g\}$ ,则 $\overline{Graph(T)}=\{(f,f^{\prime})|f\in H^{1}([a,b])\}$, 其中 $H^{1}([a,b])=\{f\in AC([a,b])|f^{\prime}\in L^{2}([a,b])\};$ 

3. 若$\|f\|_{H^1}^2:=\|f\|_{L^2}^2+\|f'\|_{L^2}^2$ ,则若$H_{0}^{1}([a,b]):=\overline{{C_{c}^{\infty}((a,b))}}^{\|\cdot\|_{H^{1}}}$ ,问$H_{0}^{1}([a,b]) 与 H^{1}([a,b])$ 的差别。

## 第10次作业
### 10.1
考虑开集$\Omega\subset\mathbb{R}^{2},\;\Omega=\{x=(x_{1},x_{2})||x_{1}<1,x_{2}\in\mathbb{R}\},\Gamma=\{(-1,x_{2}),x_{2}\in\mathbb{R}\}$ 


1. 证明：存在常数$C>0$ 使得

$$\|f\|_{L^{2}(\Omega)}\leq C\|\nabla f\|_{L^{2}(\Omega)},\forall f\in\{g\in H^{1}(\Omega)\cap C^{1}(\overline{{\Omega}})|g|_{\Gamma}=0\}.$$

2. 证明：存在常数$C>0$ 使得对任意的$f\in H^{1}(\Omega)\cap C^{1}(\overline{\Omega})$ ,有

$$\|f\|_{L^{2}(\partial\Omega)}:=\|f(-1,\cdot)\|_{L^{2}(\mathbb{R})}+\|f(1,\cdot)\|_{L^{2}(\mathbb{R})}\leq C\|f\|_{H^{1}(\Omega)}.$$

3. 假设$H^{1}(\Omega)\cap C^{1}(\overline{\Omega}) 在 H^{1}(\Omega)$ 中稠密，证明：存在唯一的线性映射$Tr:H^{1}(\Omega)\rightarrow$ $L^{2}(\partial\Omega)$ 使得 $Tr(f)=f|_{\partial\Omega},\forall f\in H^1(\Omega)\cap C^1(\overline{\Omega})$ 且

$$\|T r(f)\|_{L^{2}(\partial\Omega)}\leq C\|f\|_{H^{1}(\Omega)}$$

4. Poincare不等式是否可以延伸至 $f\in\{g\in H^{1}(\Omega)|T r(g)|_{\Gamma}=0\}?$

### 10.2
考虑方程

$$-u''+\alpha u=f,x\in(0,1);u(0)=0,u'(1)=b,f\in L^2((0,1)),\alpha\geq0,$$

的弱形式：$\forall v\in\overline{H}:=\{g\in H^1((0,1))|g(0)=0\}$ 

$$\int_{0}^{1}u^{\prime}v^{\prime}d x+\alpha\int_{0}^{1}u v d x=\int_{0}^{1}f v d x+b v(1).$$

利用Lax-Milgram定理，说明方程在弱形式下有唯一解.

### 10.3
设$H$是Hilbert空间，$A\in\mathcal{L}(H)$ 并且存在$m>0$ 使得

$$|\langle A x,x\rangle|\geq m\|x\|^{2},\forall x\in H.$$

证明：存在$A^{-1}\in\mathcal{L}(H)$

### 10.4
设 $p$ 是实线性空间 $\mathcal{X}$ 上的次线性泛函，证明：
1. $p(0)=0$；
2. $p(−x)\geq−p(x)$;
3. 给定$x_0 \in \mathcal{X}$，在$\mathcal{X}$上必有实线性泛函，满足$f(x0)=p(x0)$，以及 $f(x)\leq p(x), \forall x \in \mathcal{X}$

### 10.5
设 $\mathcal{X}$ 是由实数列 $x=\left\{a_{n}\right\}$ 全体组成的实线性空间，其元素间相等和线性运算都按坐标定义，并定义

$$p(x)=\limsup_{n\to\infty}a_n,\ \forall x=\{a_n\}\in\mathcal{X}.$$

证明：$p(x)$ 是 $\mathcal{X}$ 上的次线性泛函。

## 第11次作业
### 11.1
给定赋范线性空间χ中n个线性无关的元素$x_{1},x_{2},\cdots,x_{n},$ 证明：

$$\exists f_{1},f_{2},\cdots,f_{n}\in\mathcal{X}^{*},s.t.\langle f_{i},x_{j}\rangle=\delta_{i j},\forall1\leq i,j\leq n.$$

### 11.2
记$l^{\infty}$ 为装备了上确界范数的实有界序列构成的Banach空间，定义移位算子T：$l^{\infty}\rightarrow l^{\infty}$ 为

$$T x:=(x_{n+1})_{n\in\mathbb{N}},\quad x=(x_{n})_{n\in\mathbb{N}}\in l^{\infty}.$$

考虑子空间

$$Y:=\mathrm{Im}(\mathrm{id}-T)=\{x-T x:x\in l^{\infty}\}.$$

1. 记$c_{0}\subset l^{\infty}$ 为趋于0的序列构成的子空间，证明：$c_{0}\subset\overline{{Y}}$ 

2. 记$\mathbf{1}=(1,1,\cdots)\in l^{\infty}$ ，证明：$\sup_{n\in\mathbb{N}}\left|1+x_{n+1}-x_n\right|\geq1,\forall x\in l^\infty$ ，并由此推出

$$d(\mathbf{1},Y)=\inf_{y\in Y}\|\mathbf{1}-y\|_{\infty}=1.$$

3. 由Hahn-Banach定理，存在有界线性泛函$\Lambda:l^{\infty}\rightarrow\mathbb{R}$ 使得$$\Lambda(\mathbf{1})=1,\quad\|\Lambda\|=1,\quad\Lambda(x-T x)\|=0,\forall x\in l^{\infty}.$$
  证明任意这样的泛函具有如下性质：
     1. $\Lambda(T x)=\Lambda(x),\forall x\in l^{\infty}$ 
     2. (b)若$x\in l^{\infty},x_n\geq0,\forall n\in\mathbb{N}$ ，则$\Lambda(x)\geq0$ 
     3. $\liminf_{n\to\infty}x_n\leq\Lambda(x)\leq\limsup_{n\to\infty}x_n,\forall x\in l^{\infty}.$ 收敛，则$\Lambda(x)=\lim_{n\to\infty}x_n$ 

4. 设$\Lambda$满足 3 中条件，试找出$x,y\in l^{\infty}$ 使得$\Lambda(xy)\ne\Lambda(x)\Lambda(y)$ ；（提示：考虑序列$x_{n}:=(-1)^{n}$ 并说明$\Lambda(x)=0$ 

5. 设$\Lambda$满足 3 中条件，证明不存在序列$y\in l^{1}$ 使得$\Lambda(x)=\sum_{n=1}^{\infty}x_n y_n,\forall x\in l^{\infty}$ .（提示：根据（3b）任意这样的序列必然有非负项$y_{n}\geq0$ 并满足$\sum_{n=1}^{\infty}y_{n}=1$ ，于是存在$N\in\mathbb{N}$ 使得$\sum_{n=1}^{N}y_{n}>0,$ ，与(3d)矛盾)

### 11.3
(Hahn-Banach 延拓定理不唯一)假设
$$\mathcal{C}:=\{x=\{x_n\}_{n\geq1}\in l^{\infty}\mid\lim_{n\rightarrow\infty}x_n \text{ 存在} \}$$

$$\mathcal{S}:=\{x=\{x_n\}_{n\geq1}\in l^{\infty}\mid\lim_{n\rightarrow\infty}x_{2n} \text{ 存在} ,\lim_{n\rightarrow\infty}x_{2n+1} \text{存在} \}.$$
$$f(x)=\lim_{n\to\infty}x_n,\forall x\in\mathcal{C}$$
$$f_1(x)=\lim_{n\to\infty}x_{2n},\forall x\in\mathcal{S}$$
$$f_2(x)=\lim_{n\to\infty}x_{2n+1},\forall x\in\mathcal{S}$$

则(i).$\mathcal{S},\mathcal{C}$ 是l∞上的闭子空间；(ii).$f\in\mathcal{C}^{*};f_{1},f_{2}\in\mathcal{S}^{*},\mathrm{ 且 }\|f\|=\|f_{1}\|=\|f_{2}\|=1.$ .此时$f_{1}|_{\mathcal{C}}=f_{2}|_{\mathcal{C}}.$ (iii).能否构造一个例子，表明$\mathrm{Hahn-Banach}$ 延拓方式是无穷的。

## 第12次作业
### 12.1
$K\subset X=(X,+,\cdot,\mathbb{R})$ 则

1. $K$是吸收集等价于0是$K$的代数内点；

2. 若$K$是凸集，则$K$是吸收集等价$\forall x\in X,P_K(x)<\infty$ 

3. 若$K$是平衡凸吸收集，有 $V:=\left\{x\in X|P_{K}(x)<1\right\}\subset K\subset W:=\left\{x\in X|P_{K}(x)\leq1\right\}$; $V,W$ 也是是平衡凸吸收集；$V$ 是 $K$ 的代数内点点全体；$P_{K}=P_{V}=P_{W}$

### 12.2
设X为实赋范线性空间，$0\in C\subset X$ 为凸集，$C$的Minkowski泛函 $p:X\to[0,\infty]$ 定义为

$$p(x):=\inf\{\lambda>0:\lambda^{-1}x\in C\},\ x\in X.$$

证明：$p$是连续的当且仅当 $0\in\mathrm{int}C$ ，此时 $\mathrm{int}C=p^{-1}([0,1)),\overline{C}=p^{-1}([0,1]).$

### 12.3
设$X$是赋范线性空间，$E$是$X$中的非空平衡凸集，$f$是$X$上的线性泛函，证明：

$$|f(x)|\leq\sup_{y\in E}\mathrm{Re}f(y),\quad\forall x\in E $$

### 12.4
设 $X$ 是实赋范线性空间，$E \subseteq X$ 是非空的平衡闭凸集，$x_0 \in X \setminus E$。证明存在 $f \in X^*$ 和 $a > 0$，使得对任意 $x \in E$，有 $|f(x)| < a < |f(x_0)|$。

### 12.5
设$E,F$是实赋范线性空间$X$中的两个互不相交的非空凸集，并且$E$是开的和平衡的，证明：

$$\exists f\in\mathcal{X}^*,s.t.|f(x)|<\inf_{y\in F}|f(y)|,\ \forall x\in E.$$

### 12.6
定义$A:=\{x\in l^{2}:x_{i}=0,\forall i>1\}$ 以及

$$B:=\{x=(x_i)_{i=1}^{\infty}\in\mathbb{R}^{\mathbb{N}}:|ix_i-i^{1/3}|\leq x_1,\forall i>1\}\subset l^2.$$

试证明$A,B$是$l^2$中的两个互不相交的非空闭凸集，并且$A-B$在$l^2$空间中稠密，并由此推出$A,B$不能被仿射超平面分离。

## 第13次作业
### 13.1
设$C$是实赋范线性空间$\mathcal{X}$中的一个凸集，并设$x_0 \in \mathrm{int}(C),x_1 \in \partial C,x_2 = m(x_1 − x_0) + x_0$ (m > 1)

证明：$x_2 \notin C$.

### 13.2
设$X$为实赋范线性空间，$A \subset X$为非空凸集，证明：$\bar{A}$是所有$X$的包含$A$的闭半空间之交。

### 13.3
设$X,Y$为实赋范线性空间，试证明：

1. 对任何赋范线性空间Z，由有界线性映射$B:X\times Y\to Z$ 构成的空间$\mathcal{B}(X,Y;Z)$ 中可以定义范数

$$\|B\|:=\sup_{x,y\neq0}\frac{\|B(x,y)\|_Z}{\|x\|_X\|y\|_Y},\ \forall B\in\mathcal{B}(X,Y;Z).$$

2. 映射$\mathcal{B}(X,Y;Z)\to\mathcal{L}(X,(Y,Z)):B\to(x\mapsto B(x,\cdot))$ 是一个等距同构；

3. 对每一对$(x,y)\in X\times Y$ 定义线性泛函$x\otimes y\in\mathcal{B}(X,Y;\mathbb{R})^{*}$ 为

$$\langle x\otimes y,B\rangle:=B(x,y),\quad\forall B\in\mathcal{B}(X,Y;Z).$$

它满足$\|x\otimes y\|=\|x\|_X\|y\|_Y$ .（提示：使用Hahn-Banach定理来证明不等式$\left\|x\otimes y\right\|\geq$ $\|x\|_{X}\|y\|_{Y}$ ，即考虑$B:X\times Y\to\mathbb{R}$ ，对合适的元素$x^{*}\in X^{*},y^{*}\in Y^{*}$ 定义$B(x,y):=\langle x^{*},x\rangle\langle y^{*},y\rangle$ ）

4. 令$X{\otimes}Y\subset{\mathcal{B}}(X,Y;{\mathbb{R}})$ 为最小的包含双线性映射$X{\times}Y\to{\mathcal{B}}(X,Y;{\mathbb{R}})^{*}:(x,y)\mapsto x{\otimes}y$ 的像集的闭子空间，于是对任意赋范线性空间Z，映射$\mathcal{L}(X\otimes Y,Z)\to\mathcal{B}(X,Y;Z):A\mapsto B_{A}$ 

$$B_{A}(x,y):=A(x\otimes y),\forall x\in X,y\in Y,A\in\mathcal{L}(X\otimes Y,Z)$$

是一个等距同构。

### 13.4
设 $X$ 是Banach空间， $Y\subset X$ 为闭子空间，若 $Y$ 和 $X/Y$ 都是自反的，证明 $X$ 也是自反的。

### 13.5
设 $1 < p < \infty$， 证明 $l^p$ 是自反的

## 第14次作业
### 14.1
(关于James空间)证明:$(J,\|\cdot\|_{J})$ 是完备空间且$l^{2}$ 在James 空间中稠密。

### 14.2
（关于Schauder基）假设 $X$ 是可分实Banach空间，$(e_{i})_{i\geq1}$ 是 $X$ 的Schauder基，即$\forall x\in X,\exists!(x_i)_{i\geq1}$ 使得

$$\lim_{n\to\infty}\|x-\sum_{i=1}^{n}x_i e_i\|=0.$$

定义：$\Pi_{n}(x):=\sum_{i=1}^{n}x_{i}e_{i}$ .则

1. $\Pi_{n}$ 是 $X$ 上的线性投影算子且$\Pi_{n}\circ\Pi_{m}=\Pi_{m}\circ\Pi_{n}=\Pi_{m}$ 如果$n\geq m\geq1$ 

2. 引入 $|\|x\||:=\sup_{n\geq1}\left\|\Pi_n(x)\right\|$ ,则 $\forall x\in X,\|x\|\leq|\|x\||$ ，从而$(X,|\|\cdot\||)$ 是Banach空间.

3. 存在常数$c>0$ 使得$\sup_{n\geq1}\|\Pi_n(x)\|\leq c\|x\|$

## 第15次作业
### 15.1
设 $X$ 为实的拓扑向量空间，$K\subset X$ 是平衡凸吸收集，证明：

1. $\mathrm{Int}(K)\subseteq\{x\in X|P_K(x)<1\}\subseteq K\subseteq\{x\in X|P_K(x)\leq1\}\subseteq\bar{K}.$

2. $P_{K}$ 是连续函数当且仅当K包含一个包含零点的开集。此时 $\mathrm{Int}(K)=\{x\in X|P_{K}(x)< 1\},\{x\in X|P_{K}(x)\leq1\}=\bar{K}.$

### 15.2
假设$X$是实线性空间，$\mathcal{P}=\{p_{\beta}\}_{\beta\in\Lambda}$ 是$X$上的一族半范。

1. 记$U(x;\varepsilon;p_{1},p_{2},\cdots,p_{n}):=\{y\in X|\forall1\leq k\leq n,p_{k}(y-x)<\varepsilon\},$ 
$$\mathcal{U}_{p}(x)=\{U(x;\varepsilon;p_{1},p_{2},\cdots,p_{n})|\varepsilon>0,n\in\mathbb{N},p_{1},p_{2},\cdots,p_{n}\in\mathcal{P}\}.$$
如果$\mathcal{U}_{p}:=\cup_{x\in X}\mathcal{U}_{p}(x) 且 \mathcal{T}_{X}=\mathcal{T}(\mathcal{U}_{p})$ ，则$(X,\mathcal{T}_X)$ 是拓扑空间且$\mathcal{U}_{p}$ $\mathcal{T}_{X}$ 的基。

2. $(X,\mathcal{T}_X)$ 是局部凸空间。

3. $\forall p_{\beta}\in\mathcal{P},p_{\beta}$ 是$(X,\mathcal{T}_X)$ 的连续函数。

4. 若P满足$p_{\beta}(x)=0,\forall\beta\in\Lambda$ 能推出$x=0$ ，则$(X,\mathcal{T}_X)$ 是Hausdorf 空间。

## 第16次作业
### 16.1
> 本题说明Hilbert空间中存在弱闭集，其弱闭包不等于其强闭包。

设H为无穷维可分实Hilbert空间，$(e_n)_{n\in\mathbb{N}}$ 为一组标准正交基，证明:
1. 序列$(e_n)_{n\in\mathbb{N}}$ 弱收敛于0;

2. 集合$A:=\{\sqrt{n}e_n:n\in\mathbb{N}\}$ 是序列弱闭的，但A的弱闭包包含0；
提示：令$U\subset H$ 为0的弱开邻域，证明存在$\epsilon>0$ 以及$y_{1},\cdots,y_{m}\in H$ 使得
$$V:=\{x\in H:\max_{i=1,\cdots,m}|\langle x,y_i\rangle|<\epsilon\}\subset U.$$
证明序列$z_{n}:=\max_{i=1,\cdots,m}\left|\left\langle e_{n},y_{i}\right\rangle\right|$ 是平方可加的，并推出$V\cap A\neq\varnothing$ 

3. $A:=\{\sqrt{n}e_n:n\in\mathbb{N}\}$ 中的任何子列均不弱收敛于0.

### 16.2
1. $\ell^1$中的标准基$e_{n}=\{\delta_{in}\}_{i\geq1}$ 不弱收敛于0；

2. 视$\ell^1$为$c_0$的对偶空间，则标准基$e_{n}$ 弱\*收敛于0；

3. Schur 定理：$\ell^1$中的序列弱收敛当且仅当它收敛（于0）。

### 16.3
若 $(X, \mathscr{U}_{\mathscr{F}})$ 是使得 $\mathscr{F}$ 中所有线性泛函连续的最弱拓扑，$\mathscr{F}$ 是线性空间，$E \subseteq X$ 是线性子空间。证明：

1. $E$ 是闭集当且仅当 $\forall x \in X,\ x \in E \Leftrightarrow \Lambda(x) = 0$，其中 $\Lambda \in \mathscr{F}$ 满足 $E \subseteq \ker \Lambda$

2. $E$ 是稠密的当且仅当 $\forall \Lambda \in \mathscr{F}$，满足 $E \subseteq \ker \Lambda$ 则 $\Lambda \equiv 0$。

## 第17次作业
### 17.1
设$X$为可分的赋范线性空间，$(x_n)_{n\in\mathbb{N}}$ 为 $X$ 单位球中的稠密序列，证明映射

$$d(x^{*},y^{*}):=\sum_{n=1}^{\infty}2^{-n}|\langle x^{*}-y^{*},x_{n}\rangle|,\ \forall x^{*},y^{*}\in B^{*}$$

定义了闭单位球$B^{*}\subset X^{*}$ 上的距离函数，证明该距离函数诱导的拓扑是$B^{*}$ 上的弱\*拓扑。

### 17.2
设$M$为局部紧Hausdorf 空间，称实值函数$f:M\to\mathbb{R}$ 在无穷远处消失，如果对任意$\varepsilon>0$ 都存在紧集$K\subset M$ 使得$\sup_{x\in M\backslash K}|f(x)|<\varepsilon$ .记$C_{0}(M)$ 为所有在无穷远处消失的连续函数构成的空间。

1. 证明:$C_{0}(M)$ 在上确界范数下为Banach空间;

2. 根据Riesz表示定理，对偶空间$C_{0}(M)^{*}$ 和符号Radon测度空间M一一对应，其中M上的符号Radon测度为满足如下性质的符号Borel测度：对每个Borel集$B\subset M$ 和$\varepsilon>0$ ，存在紧集$K\subset B$ 使得$\left|\mu(A)-\mu(A\cap K)\right|<\varepsilon$ 对任意Borel集$A\subset B$ 成立。
考虑映射$\delta: M\to C_{0}(M)^{*},x\mapsto\delta_{x}$ ，其中$\delta_{x}:C_{0}(M)\to\mathbb{R}$ 定义为$\delta_{x}(f):=f(x),\forall f\in$ $C_{0}(M)$ 若在$C_{0}(M)^{*}$ 上装备弱\*拓扑，试证明：映射$\delta:M\to\delta(M)\subset C_{0}(M)^{*}$ 是同胚；在前一问的一一对应关系中，像$\delta(M)$ 含于在Radon 概率测度集
$$P(M):=\{\mu\in\mathcal{M}(M):\mu>0,\|\mu\|=\mu(M)=1\}.$$
试求出集合$\delta(M)=\{\delta_{x}:x\in M\}\subset P(M)$ 的弱\*闭包。

### 17.3
若 $X$ 是 Banach 空间且 $X$ 可分，$S \subseteq X$ 是一个有界集合，$x \in \overline{S}^w$。则存在 $\{x_n\}_{n \in \mathbb{N}} \subseteq S$ 使得 $x_n$ 弱收敛至 $x$。

## 第18次作业
### 18.1
设 $X$ 为拓扑空间，$Y$ 为度量空间，记

$$
C(X,Y) := \left\{ X \to Y \text{上连续函数构成的空间} \right\}.
$$

$(C(X,Y), \mathcal{T}_{compact-open})$ 上的紧开拓扑 $\mathcal{T}_{compact-open}$ 是对任意紧集 $K \subset X$ 和开集 $V \subset Y$，集合

$$
\mathcal{L}(K,V) := \{ f \in C(X,Y) : f(K) \subset V \}.
$$

为开集的最小拓扑。

1. 证明：集合 $U \subset C(X,Y)$ 在紧开拓扑中是开集当且仅当对任意 $f \in U$，存在有限个紧集 $K_1, \cdots, K_m \subset X$ 以及有限个开集 $V_1, \cdots, V_m \subset Y$ 使得 $f \in \bigcap_{i=1}^m \mathcal{L}(K_i, V_i) \subset U$.

2. 若 $X$ 是紧的，证明 $(C(X,Y), \mathcal{T}_{compact-open})$ 与由度量
$$
d(f,g) := \sup_{x \in X} d_Y(f(x), g(x)), \quad \forall f,g \in C(X,Y).
$$
诱导的拓扑一致。
提示 1：令 $f \in C(X,Y)$ 且满足存在 $K_1, \cdots, K_m \subset X$ 为紧集，$V_1, \cdots, V_m \subset Y$ 为开集，使得 $f(K_i) \subset V_i, \forall 1 \le i \le m$，证明存在 $\varepsilon > 0$ 使得 $B_\varepsilon(f(x_i)) \subset V_i, \forall x \in K_i, 1 \le i \le m$，由此推出满足 $d(f,g) < \varepsilon$ 的每个 $g \in C(X,Y)$ 都满足 $g(K_i) \subset V_i, \forall 1 \le i \le m$.
提示 2：令 $f \in C(X,Y), \varepsilon > 0$，找出元素 $x_1, \cdots, x_m \in X$ 使得 $X = \bigcup_{i=1}^m K_i$，其中 $K_i := \{ x \in X : d_Y(f(x_i), f(x)) \le \varepsilon/4 \}$，定义 $U := \{ g \in C(X,Y) : g(K_i) \subset V_i, \forall 1 \le i \le m \}, V_i := B_{\varepsilon/2}(f(x_i))$，证明 $f \in U$，以及 $d(f,g) < \varepsilon, \forall g \in U$.

3. 对每个紧集 $K \subset X$ 定义半范数 $p_K : C(X,\mathbb{R}) \to \mathbb{R}$ 为
$$
p_K(f) := \sup_K |f|, \quad \forall f \in C(X,\mathbb{R}).
$$
证明这些半范数生成了紧开拓扑，即 $(C(X,Y), \mathcal{T}_{compact-open})$ 是使得对任意的 $p_K$ ($K \subset X$ 是紧集) 连续的最小拓扑。

4. 证明：$(C(X,\mathbb{R}), \mathcal{T}_{compact-open})$ 是局部凸拓扑向量空间。

5. 证明：集合 $\mathcal{F} \subset C(X,Y)$ 在 $(C(X,Y), \mathcal{T}_{compact-open})$ 中是预紧的，当且仅当对任意紧集 $K \subset X$
$$
\mathcal{F}_K := \{ f|_K : f \in \mathcal{F} \} \subset C(K,Y)
$$
是预紧的。提示：令 $\mathcal{K} \subset 2^X$ 为紧集构成的集合，证明映射 $C(X,Y) \to \prod_{K \in \mathcal{K}} C(K,Y) : f \mapsto (f|_K)_{K \in \mathcal{K}}$ 是到其像的同胚映射，并应用 Tychonoff 定理。

6. 证明如下的变种 Arzela-Ascoli 定理：设 $X$ 为拓扑空间，$Y$ 为度量空间，则集合 $\mathcal{F} \subset C(X,Y)$ 在 $(C(X,Y), \mathcal{T}_{compact-open})$ 是预紧的，当且仅当它逐点预紧并且对任意紧集 $K \subset X$，如前定义的 $\mathcal{F}_K \subset C(K,Y)$ 等度连续。

### 18.2
设X为赋范线性空间，试由上述的变种Arzela-Ascoli定理推出Banach-Alaoglu 定理。
提示：$X^{*}$ 中的闭单位球作为$C(X,\mathbb{R})$ ）是等度连续的，证明$X^{*}$ 上的紧开拓扑是比弱\*拓扑强，即在弱\*拓扑中的开集在紧开拓扑中仍是开集。

## 第19次作业
### 19.1
若 $X$ 是自反的Banach空间，则规范嵌入映射 $l$ 满足 $l: (X, \mathcal{U}^w) \to (X^{**}, \mathcal{U}^w)$ 是同胚。

### 19.2
Milman-Pettis定理：一致凸Banach空间是自反的。

1. 设X为一致凸赋范线性空间，$(x_{\alpha})_{\alpha\in A}$ 为X单位球中的网，且网$\left(\left\|x_{\alpha}+x_{\beta}\right\|\right)_{(\alpha,\beta)\in A\times A}$ 收敛于2，证明：$(x_{\alpha})_{\alpha\in A}$ 是Cauchy网;

2. 设X为赋范线性空间，$x^{**}\in X^{**},\|x^{**}\|=1$ ，证明：存在X单位球中的网$(x_{\alpha})_{\alpha\in A}$ 使得$X^{**}$ 中的网$(\iota(x_{\alpha}))_{\alpha\in A}$ 按照弱\*拓扑收敛于$x^{**}$ 

3. 设X为赋范线性空间，X单位球中的网$(x_{\alpha})_{\alpha\in A}$ 使得 $X^{**}$ 中的网$(\iota(x_{\alpha}))_{\alpha\in A}$ 按照弱\*拓扑收敛于 $x^{**},\left\|x^{**}\right\|=1$ 证明网$\left(\iota\left(x_{\alpha}+x_{\beta}\right)\right)_{(\alpha,\beta)\in A\times A}$ 按照弱\*拓扑收敛于$2x^{**}$ ；若X 是一致凸的，利用（1)证明 $(x_{\alpha})_{\alpha\in A}$ 是Cauchy网;

4. 设X是一致凸Banach空间，$x^{**}\in X^{**},\|x^{**}\|=1$ ，按照(2)取网 $(x_{\alpha})_{\alpha\in A}$ ,由(3)知它收敛于某个元素$x\in X$ ，从而推出 $\iota(x)=x^{**}$

## 第20次作业
### 20.1
设 $X, Y$ 为 Banach 空间，考虑 $L(X,Y)$ 中的算子范数，证明如下结论:
1. 所有满射构成的集合是开集
2. 所有单射构成的集合不一定是开集
3. 所有具有闭像的单射构成的集合是开集

### 20.2
若 $ T, S \in \mathcal{L}(X; Y) $，其中 $ X, Y $ 是 Banach 空间，则

1. $ (T + S)^* = T^* + S^* $，$ aT^* = (aT)^* $；

2. 若 $ T^{-1} \in \mathcal{L}(Y; X) $，则 $ (T^*)^{-1} $ 存在且 $ (T^*)^{-1} = (T^{-1})^* $。

### 20.3
假设 $L_A : \mathbb{R}^n \to \mathbb{R}^m$ 使得 $L_A x = A x$，其中，$A \in M_{m,n}(\mathbb{R})$，$x \in \mathbb{R}^n$。求 $(L_A)^* = ?$

### 20.4
假设 $ X $ 是 Banach 空间，$ Y $ 是 $ X $ 的闭子空间，$ \pi: X \to X/Y $ 使得 $ \pi(x) = [x] $， $ \ell: Y \to X $ 使得 $ \ell(y) = y $，则

1. $ \pi^*: (X/Y)^* \to Y^\perp $ 是等距同构的；  
2. $ \ell^* $ 是满射且 $ \ker(\ell^*) = Y^\perp $，从而 $ \ell^*: X^*/Y^\perp \to Y^* $ 是等距同构。

## 第21次作业
### 21.1
考虑算子 $T: \ell^2 \to \ell^2$ 定义为 $T((x_i)_{i \geq 1}) = (i^{-1} x_i)_{i \geq 1}$。证明 $\operatorname{Ran}(T)$ 不是闭的。

### 21.2
假设 $X, Y$ 是 Banach 空间，$T: X \to Y$ 是单射。$N$ 是 $Y$ 的一个闭子空间，且满足 $N \oplus \operatorname{Ran}(T) = Y$。证明 $\operatorname{Ran}(T)$ 是闭的。

### 21.3
假设 $X, Y$ 是 Banach 空间，$S, T \in \mathcal{L}(X; Y)$。若存在 $c > 0$ 使得 $\|Sx\| \le c\|Tx\|, \forall x \in X$，且 $\ker(T) = \ker(S)$，则 $\text{Ran}(T)$ 是闭的如果 $\text{Ran}(S)$ 是闭的。

### 21.4
假设 $X, Y$ 是 Hilbert 空间，$S, T \in \mathcal{L}(X; Y)$。若存在 $c > 0$ 使得 $\|Sx\| \le c\|Tx\|, \forall x \in X$，且 $T(\ker(S)) \subset T(\ker(S)^\perp)$，则 $\operatorname{Ran}(T)$ 是闭的，如果 $\operatorname{Ran}(S)$ 是闭的。

## 第22次作业
### 22.1
设$X,Y$为Banach空间，$K:X\to Y$ 为紧算子，证明如下结论：

1. 若ImK是闭集，则$\dim\mathrm{Im}K<+\infty$
2. $\mathrm{Im}K\subset Y$ 是可分子空间；
3. 若Y可分，则存在Banach空间X和具有稠密像的紧算子$K:X\to Y$

### 22.2
设$X$为Banach空间，$C\subset X$ 为闭子集，则如下结论等价：

1. C是紧集
2. 存在序列$x_{n}\in C$ 使得
$$\lim_{n\to\infty}\|x_n\|=0,\ C\subset\overline{\mathrm{conv}}(\{x_n:n\in\mathbb{N}\}).$$

!!! note 提示
    1. 为了证明 2 推 1 ，观察发现只要$\lim_{n\to\infty}\|x_n\|=0$ ，就有
    $$\overline{\mathrm{conv}}(\{x_n:n\in\mathbb{N}\})=\big\{\sum_{n=1}^{\infty}\lambda_n x_n:\lambda_n\geq0,\sum_{n=1}^{\infty}\lambda_n=1\big\}.$$
    2. 为了证明 1 推 2 ，选取一列紧集$C_{k}\subset X$ 以及一列有限子集$A_{k}\subset C_{k}$ 使得$C_{1}=C$ 并且对任意$k\in\mathbb{N}$ 有
    $$2C_{k}\subset\bigcup_{x\in A_{k}}\overline{B}_{4^{-k}}(x),\ C_{k+1}:=\bigcup_{x\in A_{k}}\big((2C\cap\overline{B}_{4^{-k}}(x))-x\big).$$
    证明对每个$c\in C$ ，存在序列$x_{k}\in A_{k}$ 使得$x=\sum_{k=1}^{\infty}2^{-k}x_{k}$ ，注意当$x\in A_{k+1}$ 时 $\|x\|\leq4^{-k}$

### 22.3
设 $1 \leq p < q < \infty$, 按照如下流程证明所有有界线性算子 $A:l^{q} \rightarrow l^{p}$ 都是紧的：

1. 固定有界线性算子A：$l^{q}\rightarrow l^{p},\left\|A\right\|=1$ 和$l^{q}$ 中弱收敛于0的序列$(x_n)_{n\in\mathbb{N}}$ 则只需证明$\lim_{n\to\infty}\|Ax_n\|_p=0$ 


2. 若$(y_n)_{n\in\mathbb{N}}$ 是$l^{p}$ 中弱收敛于0的序列，则
$$\limsup_{n\to\infty}\|y+y_n\|_p^p=\|y\|_p^p+\limsup_{n\to\infty}\|y_n\|_p^p,\ \forall y\in l^p.$$

3. 考虑(1)中的$(x_n)_{n\in\mathbb{N}}$ ，固定常数$\varepsilon>0$ 并选取$x\in l^{q}$ 使得
$$\|x\|_q=1,\quad1-\varepsilon<\|A x\|_p<1.$$
则对任意$\lambda>0$ 成立
$$\left(\|A x\|_{p}^{p}+\lambda^{p}\limsup_{n\rightarrow\infty}\|A x_{n}\|_{p}^{p}\right)^{1/p}\leq\left(\|x\|_{q}^{q}+\lambda^{q}\limsup_{n\rightarrow\infty}\|x_{n}\|_{q}^{q}\right)^{1/q}.$$
提示：令$y_{n}:=\lambda A x_{n}$ 并使用（2）中等式，以及不等式$\|A x+\lambda A x_{n}\|_{p}\leq\|x+\lambda x_{n}\|_{q}.$ 

4. 存在常数$C>0$ 使得对任意$\lambda>0,\varepsilon>0$ 成立
$$\lambda^{p}\limsup_{n\rightarrow\infty}\|A x_{n}\|_{p}^{p}\leq(1+\lambda^{q}C^{q})^{p/q}-(1-\varepsilon)^{p}.$$
提示：选取$C\geq\sup_{n\in\mathbb{N}}\|x_n\|_q$ 并使用（3)中的两个不等式。

5. 在(4)中不等式令$\lambda:=C^{-1}\varepsilon^{1/q}$ 并得到
$$\limsup_{n\to\infty}\|Ax_n\|_p^p\leq C^p\varepsilon^{1-p/q}\big(\frac{(1+\varepsilon)^{p/q}-1}{\varepsilon}+\frac{1-(1-\varepsilon)^p}{\varepsilon}\big).$$
对任意$\varepsilon>0$ 成立，在上式中取极限$\varepsilon\to0$ 来证明$\lim_{n\to\infty}\|Ax_n\|_p=0$

## 第23次作业
### 23.1
设 $X,Y$ 为 Banach 空间，并且存在 $X$ 到 $Y$ 的 Fredholm 算子，证明如下结论：
1. $X$ 是自反的当且仅当 $Y$ 是自反的；
2. $X$ 是可分的当且仅当 $Y$ 是可分的。

### 23.2
设 $X$ 为实 Banach 空间，证明：任意两个 $X$ 的余维数为 1 的闭子空间是同构的。

提示：考虑子空间 $Y, Z$ 以及 $(Y \cap Z) \times \mathbb{R}$。

### 23.3
设 $X$ 为无限维实 Banach 空间，证明如下命题等价：

1. $X$ 和 $X \times \mathbb{R}$ 同构；

2. 存在 $X$ 的余维数为 1 的子空间和 $X$ 同构；

3. 所有 $X$ 的余维数为 1 的闭子空间和 $X$ 同构；

4. 存在指数为 1 的 Fredholm 算子 $A: X \to X$。

### 23.4
记 $I = [0,1] \subset \mathbb{R}$ 为单位区间，固定实数 $p \ge 1$，定义

$$
W^{1,p}(I) := \left\{ f: I \to \mathbb{R} \,\middle|\, f \text{ 绝对连续且} \int_0^1 |f'(t)|^p dt < +\infty \right\}
$$

为 $I$ 上 $W^{1,p}$ 函数的 Sobolev 空间，并装备了范数

$$
\|f\|_{W^{1,p}} := \left( \int_0^1 (|f(t)|^p + |f'(t)|^p) dt \right)^{1/p}, \quad \forall f \in W^{1,p}(I).
$$

特别地，$W^{1,1}(I)$ 是由绝对连续函数组成的 Banach 空间。

1. 证明：$W^{1,p}(I)$ 在上述范数下是 Banach 空间；

2. 证明：从 $W^{1,p}(I)$ 到 $C(I)$（装备了上确界范数）的嵌入映射是有界线性算子；

3. 证明：上述嵌入映射在 $p > 1$ 时是紧算子，而 $p = 1$ 时不是。（提示：在 $p > 1$ 时证明 $W^{1,p}(I)$ 中的单位球是等度连续的，并应用 Arzela-Ascoli 定理；在 $p = 1$ 时考虑函数 $f_n(t) := t^n$）

## 第24次作业
### 24.1
若 $\Lambda \in \mathcal{L}^c(X = (X, \|\cdot\|; \mathbb{C}); \mathbb{C})$，则

1. $Re\Lambda \in \mathcal{L}(X = (X, \|\cdot\|; \mathbb{R}); \mathbb{R})$；
2. $\Phi: \mathcal{L}^c(X = (X, \|\cdot\|; \mathbb{C}); \mathbb{C}) \to \mathcal{L}(X = (X, \|\cdot\|; \mathbb{R}); \mathbb{R})$ 是等距同构如果
   $$
   \Phi(\Lambda) = Re\Lambda.
   $$

### 24.2
若 $X = (X, \|\cdot\|; \mathbb{R})$, $\forall z \in X^c$，记
$$
\|z\|_{X^c} := \sup_{\theta \in \mathbb{R}} \sqrt{\|Re(e^{i\theta}z)\|_X^2 + \|Im(e^{i\theta}z)\|_X^2}.
$$

则

1. $(X^c, \|\cdot\|_{X^c})$ 是复赋范空间，且 $(X^c, \|\cdot\|_{X^c})$ 是 Banach 的如果 $X$ 是 Banach 的；
2. 若 $A: X = (X, \|\cdot\|; \mathbb{R}) \to Y = (Y, \|\cdot\|; \mathbb{R})$，记 $A^c: (X^c, \|\cdot\|_{X^c}) \to (Y^c, \|\cdot\|_{Y^c})$ 使得
   $$
   A^c(x + iy) := Ax + iAy, \forall x + iy \in X^c, x, y \in X.
   $$
则 $A^c \in \mathcal{L}^c(X^c; Y^c)$ 如果 $A \in \mathcal{L}(X; Y)$ 且 $\|A^c\| = \|A\|$。

### 24.3
若 $\Lambda_1 + i\Lambda_2 \in (\mathcal{L}(X = (X, \|\cdot\|; \mathbb{R}); \mathbb{R}))^c$，其中 $\Lambda_1, \Lambda_2 \in \mathcal{L}(X = (X, \|\cdot\|; \mathbb{R}); \mathbb{R})$，有
$$
\Lambda^c(x + iy) = \Lambda_1(x) - \Lambda_2(y) + i(\Lambda_2(x) + \Lambda_1(y)),
$$

则

1. $\Phi: (\mathcal{L}(X = (X, \|\cdot\|; \mathbb{R}); \mathbb{R}))^c \to \mathcal{L}^c(X^c; \mathbb{C})$ 是同构，如果 $\Phi(\Lambda_1 + i\Lambda_2) = \Lambda^c$；
2. 若 $X$ 是 Hilbert 空间，则 $\Phi$ 还是等距的。

## 第25次作业
### 25.1
尝试说明 $R: l^2 \to l^2$ 使得 $R(\{x_i\}_{i \ge 1}) = (0, x_1, x_2, \cdots)$。则 $C_\sigma(R) = \{|\lambda| = 1\}$; $R_\sigma(\lambda) = \{|\lambda| < 1\}$。（这表明 $P_\sigma(R)$ 是空集）

提示：连续谱的证明可以参考例子；剩余谱的刻画关键证明：$|\lambda| < 1$，有 $\text{Ran}(\lambda I - R) = \{(\bar{\lambda}^i)_{i \ge 0}\}^\perp$。

### 25.2
设 $X$ 为复 Banach 空间，$A \in \mathcal{L}^c(X)$ 为双射且是有界复线性算子，实数 $\varepsilon, r$ 使得
$$
0 < \varepsilon < \|A^{-1}\|^{-1} \le \|A\| < r.
$$
证明 $\sigma(A) \subset \{\varepsilon < |\lambda| < r\}$。

### 25.3
设 $X$ 为复 Banach 空间，$\Omega \subset \mathbb{C}$ 为开集，$f: \Omega \to X$ 为全纯函数。

1. $f$ 的导数 $f': \Omega \to X$ 也是全纯的；
2. $f$ 是光滑的；
3. 取 $z_0 \in \Omega, r > 0$ 使得 $\overline{B_r(z_0)} \subset \Omega$，定义 $\gamma(t) := z_0 + re^{2\pi it}$，证明 $f$ 在 $w \in B_r(z_0)$ 处的第 $n$ 阶导数由柯西积分公式给出：
   $$
   f^{(n)}(w) = \frac{n!}{2\pi i} \int_\gamma \frac{f(z)}{(z-w)^{n+1}} dz.
   $$

### 25.4
设 $X$ 为复 Banach 空间，$(a_n)_{n \in \mathbb{N}}$ 为 $X$ 中序列，且
$$
\rho := \frac{1}{\limsup_{n \to \infty} \|a_n\|^{1/n}} > 0.
$$
证明幂级数 $f(z) := \sum_{n=0}^\infty a_n z^n$ 对任意满足 $|z| < \rho$ 的复数 $z$ 收敛，并且 $f: B_\rho(0) \to X$ 是全纯函数；取 $0 < r < \rho$ 并定义环路 $\gamma(t) = re^{2\pi it}$，证明系数 $a_n$ 由以下公式给出：
$$
a_n = \frac{f^{(n)}(0)}{n!} = \frac{1}{2\pi i} \int_\gamma \frac{f(z)}{z^{n+1}} dz.
$$

### 25.5
设 $X$ 为复 Banach 空间，$A: X \to X$ 为有界复线性算子，$p(z) = \sum_{k=0}^n a_k z^k$ 为复系数多项式，直接证明算子 $p(A) := \sum_{k=0}^n a_k A^k$ 满足 $\sigma(p(A)) = p(\sigma(A))$。

提示：为证明 $p(\sigma(A)) \subset \sigma(p(A))$，固定 $\lambda \in \sigma(A)$，则存在复系数多项式 $q$ 使得 $p(z) - p(\lambda) = (z - \lambda)q(z), \forall z \in \mathbb{C}$；为证明反向包含关系，不妨设 $a := a_n \ne 0$，固定 $\mu \in \sigma(p(A))$ 以及 $\lambda_1, \cdots, \lambda_n$ 为多项式 $p - \mu$ 的零点，于是 $p(z) - \mu = a \prod_{i=1}^n (z - \lambda_i), \forall z \in \mathbb{C}$，证明 $A - \lambda_i I$ 对某些 $i$ 不是双射。

## 第26次作业
### 26.1
对应于 25.2，证明
$$
A^{-1} = \frac{1}{2\pi i} \int_{|z|=r} \frac{R(z, A)}{z} dz - \frac{1}{2\pi i} \int_{|z|=\varepsilon} \frac{R(z, A)}{z} dz.
$$

### 26.2
设 $H$ 是复 Hilbert 空间，$A \in \mathcal{L}^c(H)$，$E \subset H$ 为闭复线性子空间，称子空间 $E$ 在 $A$ 下不变，如果
$$
\forall x \in H,\ x \in E \Rightarrow Ax \in E.
$$
证明 $E$ 在 $A$ 下不变当且仅当 $E^\perp$ 在 $A^*$ 下不变。

### 26.3
若 $A \in \mathcal{L}^c(X)$ 满足 $\ker((\lambda I - A)^m) = \ker((\lambda I - A)^{m+1})$，则 $\ker((\lambda I - A)^m) = \ker((\lambda I - A)^{m+k}), \forall k \ge 1$。

### 26.4
假设 $\lambda \in \sigma(A) \setminus \{0\}$，其中 $A \in \mathcal{L}^c(X)$ 是紧算子。若 $P_\lambda = \frac{1}{2\pi i} \int_{|z-\lambda|=\varepsilon} R(z, A) dz$，其中 $\{|z-\lambda|\le\varepsilon\} \setminus \{\lambda\} \subset \rho(A)$，$Y = \text{Ran}(P_\lambda)$，则 $\forall m \ge 1$，
$$
\ker((\lambda I - A)^m) = \ker((\lambda I - A|_Y)^m).
$$

### 26.5
若 $A$ 是紧算子，证明 $\sigma_p(A)$ 是至多可数集。

### 26.6
$A \in \mathcal{L}^c(X)$，$r > 0$ 满足 $r > \|A\|$。若 $e^A := \sum_{k=0}^\infty \frac{A^k}{k!}$，则

1. $e^A = \frac{1}{2\pi i} \int_{|z|=r} e^z R(z, A) dz$。
2. $\sigma(e^A) = \{e^\lambda | \lambda \in \sigma(A)\}$。
3. $\forall s, t \in \mathbb{R},\ e^{(s+t)A} = e^{sA} e^{tA}$。

## 第27次作业
### 27.1
设 $X, Y, Z$ 是复 Hilbert 空间，$A \in \mathcal{L}(X;Y)$，$B \in \mathcal{L}(Y;Z)$。证明：

1. $A^* \in \mathcal{L}(Y;X)$ 且 $\|A^*\| = \|A\|$；
2. $(BA)^* = A^* B^*$，且对任意 $\lambda \in \mathbb{C}$，有 $(\lambda I_X)^* = \overline{\lambda} I_X$；
3. $\ker(A^*) = \operatorname{Ran}(A)^\perp$，且 $\overline{\operatorname{Ran}(A^*)} = \ker(A)^\perp$；
4. $\operatorname{Ran}(A)$ 闭当且仅当 $\operatorname{Ran}(A^*)$ 闭；
5. $A^{**} = A$；
6. 若 $A$ 是双射，则 $A^*$ 也是双射，且 $(A^*)^{-1} = (A^{-1})^*$；
7. 若 $A$ 是等距同构，则 $A^*$ 也是等距同构；
8. 若 $A$ 是紧算子，则 $A^*$ 也是紧算子；
9. 若 $A$ 是 Fredholm 算子，则 $A^*$ 也是 Fredholm 算子，且 $\operatorname{index}(A^*) + \operatorname{index}(A) = 0$。

### 27.2
设 $H$ 是非零复 Hilbert 空间，$A: H \to H$ 为正规算子。

1. 证明：
   $$
   \operatorname{Re}\lambda \geq 0,\ \forall \lambda \in \sigma(A)
   \iff
   \operatorname{Re}\langle x, Ax \rangle \geq 0,\ \forall x \in H.
   $$

2. 证明：
   $$
   \sup_{\|x\|=1} \operatorname{Re}\langle x, Ax \rangle = \sup_{\lambda \in \sigma(A)} \operatorname{Re}\lambda,
   \quad
   \inf_{\|x\|=1} \operatorname{Re}\langle x, Ax \rangle = \inf_{\lambda \in \sigma(A)} \operatorname{Re}\lambda.
   $$

3. 证明：
   $$
   \sigma(A) \cap i\mathbb{R} = \varnothing
   \iff
   A + A^* \text{ 是双射}.
   $$

4. 证明：
   $$
   \sigma(A + A^*) = \{ \lambda + \overline{\lambda} : \lambda \in \sigma(A) \}.
   $$

5. 说明：在上述 (1)–(4) 中，“$A$ 是正规算子”的假设不可省略。  
   **提示**：构造一个实 $2 \times 2$ 矩阵 $A$ 及向量 $x \in \mathbb{R}^2$，使得 $\sigma(A) = \{0\}$ 但 $\langle x, Ax \rangle > 0$。
