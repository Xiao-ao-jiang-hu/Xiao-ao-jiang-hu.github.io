---
title: 泛函分析第九次作业
tags:
  - math
  - functional analysis
categories:
  - math
  - functional analysis homework
index_img: /img/fa.jpg
banner_img: /img/fa.jpg
excerpt: 泛函分析第九次作业
abbrlink: 9b1d4439
date: 2025-10-25 22:46:25
---
# 9.1
设 $X$ 是一个向量空间，$\|\cdot\|_1$ 和 $\|\cdot\|_2$ 是 $X$ 上的两个范数。如果 $(X, \|\cdot\|_1)$ 和 $(X, \|\cdot\|_2)$ 都是 Banach 空间
1. 证明这两个范数等价，即存在常数 $c, C > 0$，使得对任意 $x \in X$，有
$$c \|x\|_2 \leq \|x\|_1 \leq C \|x\|_2.$$
2. 证明 $(C[0,1], \|\cdot\|_{L_1})$ 不是 Banach 空间

## 1
考虑恒等映射 $I: (X, \|\cdot\|_1) \to (X, \|\cdot\|_2)$，定义为 $I(x) = x$。该映射是线性算子，且是双射。以下证明 $I$ 和其逆映射 $I^{-1}$ 都是连续的。


证明 $I$ 连续：
使用闭图像定理。闭图像定理表明：若 $T: X \to Y$ 是 Banach 空间之间的线性算子，且其图像 $\{(x, T(x)) \mid x \in X\}$ 在 $X \times Y$ 中是闭集，则 $T$ 连续。
这里，$X = (X, \|\cdot\|_1)$ 和 $Y = (X, \|\cdot\|_2)$ 均为 Banach 空间。$I$ 的图像为 $G = \{(x, I(x)) \mid x \in X\} = \{(x, x) \mid x \in X\}$。
设序列 $(x_n, x_n) \in G$ 在 $X \times Y$ 中收敛于 $(x, y)$，即 $x_n \to x$ 在 $\|\cdot\|_1$ 下，且 $x_n \to y$ 在 $\|\cdot\|_2$ 下。由于 $X$ 是 Hausdorff 空间（范数诱导度量），序列极限唯一，故 $x = y$。因此 $(x, y) = (x, x) \in G$，图像 $G$ 是闭集。由闭图像定理，$I$ 连续。


证明 $I^{-1}$ 连续：
逆映射 $I^{-1}: (X, \|\cdot\|_2) \to (X, \|\cdot\|_1)$ 也是恒等映射，其图像与 $G$ 相同，是闭集。类似地，应用闭图像定理（交换范数角色），$I^{-1}$ 连续。


由连续性：

$I$ 连续 $\implies$ 存在 $C > 0$ 使得 $\|I(x)\|_2 = \|x\|_2 \leq C \|x\|_1$ 对所有 $x \in X$。
$I^{-1}$ 连续 $\implies$ 存在 $c > 0$ 使得 $\|I^{-1}(x)\|_1 = \|x\|_1 \leq c \|x\|_2$ 对所有 $x \in X$。

因此，对任意 $x \in X$，有
$$c \|x\|_2 \leq \|x\|_1 \leq C \|x\|_2,$$
即范数等价。特别地，存在 $c > 0$ 使得 $\|x\|_1 \leq c \|x\|_2$。

## 2
假设 $(C[0,1], \|\cdot\|_{L_1})$ 是 Banach 空间。已知 $(C[0,1], \|\cdot\|_\infty)$ 是 Banach 空间，其中 $\|\cdot\|_\infty$ 是上确界范数：
$$\|f\|_\infty = \sup_{x \in [0,1]} |f(x)|.$$
（因为一致收敛的连续函数序列的极限仍是连续函数，故完备。）
由范数等价定理，存在 $c > 0$ 使得 $\|f\|_\infty \leq c \|f\|_{L_1}$

定义函数序列 $\{f_n\} \subset C[0,1]$ 为
$$f_n(x) = \max\left\{1 - n \left|x - \frac{1}{2}\right|,  0\right\}, \quad x \in [0,1].$$
这是以 $x = \frac{1}{2}$ 为中心的“帐篷函数”，满足：

$f_n\left(\frac{1}{2}\right) = 1$,
$f_n(x) = 0$ 当 $\left|x - \frac{1}{2}\right| \geq \frac{1}{n}$，
在区间 $\left[\frac{1}{2} - \frac{1}{n}, \frac{1}{2} + \frac{1}{n}\right]$ 上线性变化。

计算范数：

$\|f_n\|_\infty = \sup |f_n(x)| = f_n\left(\frac{1}{2}\right) = 1$,
$\|f_n\|_{L_1} = \int_0^1 |f_n(x)|  dx = \text{三角形面积} = \frac{1}{2} \times \text{底} \times \text{高} = \frac{1}{2} \times \frac{2}{n} \times 1 = \frac{1}{n}$（底为区间长度 $\frac{2}{n}$，高为 1）。

由假设的范数等价性，存在 $c > 0$ 使得对任意 $n$，有
$$\|f_n\|_\infty \leq c \|f_n\|_{L_1} \implies 1 \leq c \cdot \frac{1}{n}.$$
即 $c \geq n$ 对所有正整数 $n$ 成立。但当 $n \to \infty$ 时，这要求 $c$ 无限大，矛盾（因为 $c$ 是固定常数）。
因此，假设错误，$(C[0,1], \|\cdot\|_{L_1})$ 不可能是 Banach 空间。

# 9.2
试利用闭图像定理证明逆算子定理以及开映射定理

## 逆算子定理
> 逆算子定理：若 $T: X \to Y$ 是有界线性算子（即连续线性算子）且是双射，则其逆算子 $T^{-1}: Y \to X$ 也是有界的。

设 $S = T^{-1}: Y \to X$，则 $S$ 是线性算子（因为 $T$ 线性，故其逆也线性）。需证 $S$ 连续。
考虑 $S$ 的图像 $\Gamma(S) = \{(y, Sy) \mid y \in Y\} \subseteq Y \times X$。

取序列 $\{(y_n, S y_n)\} \subseteq \Gamma(S)$ 收敛于 $(y, z) \in Y \times X$，即 $y_n \to y$ 在 $Y$ 中，且 $S y_n \to z$ 在 $X$ 中。
由 $S = T^{-1}$，有 $T(S y_n) = y_n$。
因 $T$ 连续，故 $T(S y_n) \to T(z)$。但 $T(S y_n) = y_n \to y$，所以 $T(z) = y$。
因此 $z = S y$，即 $(y, z) \in \Gamma(S)$。
这表明 $\Gamma(S)$ 是闭集。
由闭图像定理（应用于 $S: Y \to X$，其中 $Y$ 和 $X$ 为巴拿赫空间），$S$ 连续，即 $T^{-1}$ 有界。

## 开映射定理
> 开映射定理：若 $T: X \to Y$ 是有界线性算子且是满射，则 $T$ 是开映射

设 $N = \ker T$。因 $T$ 连续，故 $N$ 是 $X$ 的闭子空间。
考虑商空间 $Z = X / N$，其元素为等价类 $[x] = x + N$，赋予商范数 $\|[x]\|_Z = \inf_{n \in N} \|x + n\|_X$。

因 $N$ 闭且 $X$ 巴拿赫，故 $Z$ 巴拿赫。
定义诱导算子 $\tilde{T}: Z \to Y$ 为 $\tilde{T}([x]) = T x$。
良定性：若 $[x] = [x']$，则 $x - x' \in N = \ker T$，故 $T x = T x'$，因此 $\tilde{T}$ 良定。
线性：$\tilde{T}$ 显然线性。
有界性：对任意 $[x] \in Z$，有
$$\|\tilde{T}([x])\|_Y = \|T x\|_Y \leq \|T\| \|x\|_X.$$
取 $n \in N$ 使 $\|x + n\|_X$ 接近 $\|[x]\|_Z$，则
$$\|T x\|_Y = \|T(x + n)\|_Y \leq \|T\| \|x + n\|_X,$$
故 $\|\tilde{T}([x])\|_Y \leq \|T\| \|[x]\|_Z$，即 $\tilde{T}$ 有界。
双射性：因 $T$ 满射，故 $\tilde{T}$ 满射；又因 $\ker \tilde{T} = \{[0]\}$（由构造），故 $\tilde{T}$ 单射，从而双射。

由逆算子定理（已证），$\tilde{T}^{-1}: Y \to Z$ 有界。

因 $\tilde{T}$ 有界且其逆有界，故 $\tilde{T}$ 是同胚（即 $\tilde{T}$ 和 $\tilde{T}^{-1}$ 均连续），从而 $\tilde{T}$ 是开映射。
考虑商映射 $q: X \to Z$，定义为 $q(x) = [x]$。
标准事实：$q$ 是开映射（因为商映射总是开映射）。
注意到 $T = \tilde{T} \circ q$，即
$$T(x) = \tilde{T}(q(x)), \quad \forall x \in X.$$

由于开映射的复合仍是开映射，故 $T$ 是开映射。

# 9.4
完善判别可补充空间的充分条件，即引理：
设 $X$ 是赋范空间，$Y$ 是 $X$ 的闭子空间，且满足 $\dim(X/Y) < +\infty$ 或 $\dim{Y} < +\infty$ ，则 $Y$ 可补充于 $X$。

## 解答
没懂题目什么意思，这里证明该引理

情况 1：$\dim Y < +\infty$
由于 $Y$ 是有限维闭子空间，设其一组基为 $\{e_1, e_2, \dots, e_n\}$。对每个 $i = 1, 2, \dots, n$，定义线性泛函 $f_i$ 在 $Y$ 上使得 $f_i(e_j) = \delta_{ij}$。由 Hahn-Banach 定理，每个 $f_i$ 可延拓为 $X$ 上的有界线性泛函，仍记为 $f_i$。定义算子 $P: X \to X$ 为  
$$
Px = \sum_{i=1}^n f_i(x) e_i.
$$  
则 $P$ 是线性算子，且对任意 $y \in Y$，有 $Py = y$，故 $P$ 是到 $Y$ 上的投影。由于每个 $f_i$ 连续，$P$ 是有界算子。令 $Z = \ker P$，则 $Z$ 是闭子空间（因 $P$ 连续），且 $X = Y \oplus Z$（代数直和）：  
- 对任意 $x \in X$，有 $x = Px + (x - Px)$，其中 $Px \in Y$，$x - Px \in \ker P = Z$。  
- 若 $y + z = 0$ 其中 $y \in Y, z \in Z$，则 $P(y + z) = y = 0$，故 $z = 0$。  
因此 $Y$ 可补充，补空间为 $Z$。

情况 2：$\dim(X/Y) < +\infty$
设 $n = \dim(X/Y)$，并设 $\{\hat{w}_1, \hat{w}_2, \dots, \hat{w}_n\}$ 是 $X/Y$ 的一组基。对每个 $\hat{w}_i$，选取代表元 $w_i \in X$ 使得 $\pi(w_i) = \hat{w}_i$，其中 $\pi: X \to X/Y$ 是商映射（连续开映射）。定义线性映射 $\sigma: X/Y \to X$ 为 $\sigma(\hat{w}_i) = w_i$ 并线性延拓。由于 $X/Y$ 是有限维赋范空间，$\sigma$ 是有界线性算子。定义算子 $P: X \to X$ 为  
$$
Px = x - \sigma(\pi(x)).
$$  
则 $P$ 是线性算子，且：  
- 对任意 $x \in X$，有 $\pi(Px) = \pi(x) - \pi(\sigma(\pi(x))) = \pi(x) - \pi(x) = 0$，故 $Px \in Y = \ker \pi$。  
- 对任意 $y \in Y$，有 $\pi(y) = 0$，故 $Py = y - \sigma(0) = y$，因此 $P$ 是到 $Y$ 上的投影。  
由于 $\pi$ 和 $\sigma$ 均连续，$P$ 是有界算子。令 $W = \sigma(X/Y) = \operatorname{im} \sigma$，则 $W$ 是有限维子空间（因 $\dim(X/Y) < +\infty$），故闭。且 $\ker P = \{x \in X : x = \sigma(\pi(x))\} = \operatorname{im} \sigma = W$。因此 $X = Y \oplus W$（代数直和），且 $Y$ 和 $W$ 均为闭子空间。故 $Y$ 可补充，补空间为 $W$。

综上，在两种情况下，$Y$ 均可补充于 $X$。


# 9.5
设 $\mathcal{X}, \mathcal{Y}$ 是赋范线性空间，D是 $\mathcal{X}$ 的线性子空间并且 $A: D \to \mathcal{Y}$ 是线性映射，证明：
(1)若$A$连续且$D$是闭的，则$A$是闭算子；

(2)若$A$连续且是闭算子，则$\mathcal{Y}$完备蕴含$D$闭；

(3)若$A$是单射的闭算子，则$A^{-1}$也是闭算子；

(4)若X完备，$A$是单射的闭算子，$R(A)$在中稠密并且$A^{-1}$ 连续，则$R(A)=\mathcal{Y}$ 

## 1
设序列 $\{x_n\} \subseteq D$ 满足 $x_n \to x$ 在 $\mathcal{X}$ 中，且 $A x_n \to y$ 在 $\mathcal{Y}$ 中。需证 $x \in D$ 且 $A x = y$。由于 $D$ 是闭子空间，且 $x_n \to x$，有 $x \in D$。由于 $A$ 连续，且 $x_n \to x$（其中 $x \in D$)，有 $A x_n \to A x$。但已知 $A x_n \to y$，由极限的唯一性，有 $A x = y$。因此，$A$ 是闭算子。

## 2
设 $\mathcal{Y}$ 完备，需证 $D$ 是闭子空间。取序列 $\{x_n\} \subseteq D$ 满足 $x_n \to x$ 在 $\mathcal{X}$ 中，需证 $x \in D$。

由于 $A$ 连续，且 $\{x_n\}$ 是 Cauchy 序列（因为收敛序列是 Cauchy 序列），且连续线性算子将 Cauchy 序列映射为 Cauchy 序列，故 $\{A x_n\}$ 是 $\mathcal{Y}$ 中的 Cauchy 序列。由 $\mathcal{Y}$ 完备，存在 $y \in \mathcal{Y}$ 使得 $A x_n \to y$。现在有 $x_n \to x$ 和 $A x_n \to y$，且 $A$ 是闭算子，故 $x \in D$ 且 $A x = y$。特别地，$x \in D$.

因此，$D$ 是闭的。

## 3
由于 $A$ 单射，逆算子 $A^{-1}: R(A) \to D$ 存在，其中 $R(A)$ 是 $A$ 的值域。需证 $A^{-1}$ 是闭算子，即对序列 $\{y_n\} \subseteq R(A)$ 满足 $y_n \to y$ 在 $\mathcal{Y}$ 中，且 $A^{-1} y_n \to x$ 在 $\mathcal{X}$ 中，有 $y \in R(A)$ 且 $A^{-1} y = x$.

设 $x_n = A^{-1} y_n$，则 $A x_n = y_n$。已知 $y_n \to y$ 和 $x_n \to x$。由于 $A$ 是闭算子，且 $x_n \to x$ 和 $A x_n = y_n \to y$，有 $x \in D$ 且 $A x = y$。因此，$y = A x \in R(A)$，且 $A^{-1} y = x$. 故 $A^{-1}$ 是闭算子。

## 4

需证 $R(A)$ 是闭子空间（因 $R(A)$ 稠密且闭蕴含 $R(A) = \mathcal{Y}$)。取序列 $\{y_n\} \subseteq R(A)$ 满足 $y_n \to y$ 在 $\mathcal{Y}$ 中，需证 $y \in R(A)$.

设 $x_n = A^{-1} y_n$，则 $A x_n = y_n$。由于 $A^{-1}$ 连续（故有界），存在 $M > 0$ 使得 $\|A^{-1} z\| \leq M \|z\|$ 对所有 $z \in R(A)$ 成立。因此，$\|x_n - x_m\| = \|A^{-1} y_n - A^{-1} y_m\| \leq M \|y_n - y_m\|$。序列 $\{y_n\}$ 收敛，故是 Cauchy 序列，即 $\|y_n - y_m\| \to 0$ 当 $n, m \to \infty$。由上式，$\|x_n - x_m\| \to 0$，故 $\{x_n\}$ 是 $\mathcal{X}$ 中的 Cauchy 序列。

由 $\mathcal{X}$ 完备，存在 $x \in \mathcal{X}$ 使得 $x_n \to x$。现在有 $x_n \to x$ 和 $A x_n = y_n \to y$，且 $A$ 是闭算子，故 $x \in D$ 且 $A x = y$，即 $y = A x \in R(A)$. 因此，$R(A)$ 是闭的。又 $R(A)$ 在 $\mathcal{Y}$ 中稠密，故 $R(A) = \mathcal{Y}$.

# 9.6
记${T=\frac{\partial}{\partial x},\mathrm{G r a p h}(T)=\{(f,f^{\prime})|f\in C^{1}[a,b]\}}$ 则

1. $T$ 可闭 (Hint，$f(x)-f(a)=\int_{a}^{x}f^{\prime}(t)dt$)

2. 若$\overline{{\mathrm{Graph}(\mathrm{T})}}=\{(f,g)|\exists\{f_n\}_{n\geq1}\subset C^1([a,b]),s.t.f_n\stackrel{L^2}{\rightarrow}f,f'_n\stackrel{L^2}{\rightarrow}g\}$ ,则 $\overline{Graph(T)}=\{(f,f^{\prime})|f\in H^{1}([a,b])\}$, 其中 $H^{1}([a,b])=\{f\in AC([a,b])|f^{\prime}\in L^{2}([a,b])\};$ 

3. 若$\|f\|_{H^1}^2:=\|f\|_{L^2}^2+\|f'\|_{L^2}^2$ ,则若$H_{0}^{1}([a,b]):=\overline{{C_{c}^{\infty}((a,b))}}^{\|\cdot\|_{H^{1}}}$ ,问$H_{0}^{1}([a,b]) 与 H^{1}([a,b])$ 的差别。


## 1
考虑序列 $\{f_n\} \subset C^1([a,b])$ 使得在 $L^2([a,b]) \times L^2([a,b])$ 中，$(f_n, f_n') \to (f, g)$，即：

$f_n \to f$ 在 $L^2([a,b])$ 中，
$f_n' \to g$ 在 $L^2([a,b])$ 中。

由于 $[a,b]$ 是紧区间，$L^2([a,b]) \subset L^1([a,b])$（因为测度有限，由 Cauchy-Schwarz 不等式，$\|h\|_{L^1} \leq (b-a)^{1/2} \|h\|_{L^2}$)。因此：

$f_n' \to g$ 在 $L^1([a,b])$ 中。

对每个 $f_n$，应用微积分基本定理：
$$f_n(x) - f_n(a) = \int_a^x f_n'(t)  dt, \quad \forall x \in [a,b].$$
定义 $h_n(x) = f_n(x) - f_n(a)$，则 $h_n(a) = 0$，且：
$$h_n(x) = \int_a^x f_n'(t)  dt.$$
由于 $f_n' \to g$ 在 $L^1([a,b])$ 中，且积分算子是连续的，有：
$$h_n(x) \to h(x) := \int_a^x g(t)  dt \quad \text{点态（甚至一致）于 } [a,b].$$
另一方面，$f_n \to f$ 在 $L^2([a,b])$ 中，故存在子序列（仍记为 $\{f_n\}$) 几乎处处点态收敛到 $f$（由 $L^2$ 收敛的性质）。因此：
$$h_n(x) - f_n(x) = -f_n(a) =: c_n,$$
其中 $c_n$ 是常数序列。于是：
$$c_n = h_n(x) - f_n(x) \to h(x) - f(x) \quad \text{几乎处处}.$$
由于 $c_n$ 是常数序列，其极限（如果存在）必须为常数，故 $h(x) - f(x)$ 是常数几乎处处，记为 $c$：
$$h(x) - f(x) = c \quad \text{a.e.} \quad x \in [a,b].$$
代入 $h(x) = \int_a^x g(t)  dt$，得：
$$\int_a^x g(t)  dt - f(x) = c \quad \text{a.e.}$$
因此：
$$f(x) = \int_a^x g(t)  dt - c.$$
由微积分基本定理，$f$ 是绝对连续的（即 $f \in AC([a,b])$），且其导数几乎处处为 $g$：
$$f' = g \quad \text{a.e.}$$
此外，在 $x = a$ 处，$f(a) = \int_a^a g(t)  dt - c = -c$，故 $c = -f(a)$。
综上，对任意 $(f, g) \in \overline{\text{Graph}(T)}$，有 $g = f'$ 几乎处处，且 $f \in AC([a,b])$、$f' \in L^2([a,b])$。这表明 $\overline{\text{Graph}(T)}$ 是一个图（对应闭算子），故 $T$ 是可闭的。

## 2
$\overline{\text{Graph}(T)} \subseteq \left\{ (f, f') \mid f \in H^1([a,b]) \right\}$：
由 1 ，若 $(f, g) \in \overline{\text{Graph}(T)}$，则 $f \in AC([a,b])$、$g = f'$ 几乎处处，且 $f' \in L^2([a,b])$，故 $f \in H^1([a,b])$ 且 $(f, g) = (f, f')$. 因此 $\overline{\text{Graph}(T)} \subseteq \left\{ (f, f') \mid f \in H^1([a,b]) \right\}$.


$\overline{\text{Graph}(T)} \supseteq \left\{ (f, f') \mid f \in H^1([a,b]) \right\}$：
设 $f \in H^1([a,b])$，即 $f \in AC([a,b])$ 且 $f' \in L^2([a,b])$. 需构造序列 $\{f_n\} \subset C^1([a,b])$ 使得 $f_n \to f$ 在 $L^2([a,b])$ 中，且 $f_n' \to f'$ 在 $L^2([a,b])$ 中。
定义
$$f_\varepsilon(x) = (f * \rho_\varepsilon)(x) = \int_\mathbb{R} f(y) \rho_\varepsilon(x - y)  dy.$$
则 $f_\varepsilon \in C^\infty([a,b]) \subset C^1([a,b])$，且：

$f_\varepsilon \to f$ 在 $L^2([a,b])$ 中

$f_\varepsilon' = f' * \rho_\varepsilon \to f'$ 在 $L^2([a,b])$ 中（因为 $f' \in L^2([a,b])$）

因此 $(f_\varepsilon, f_\varepsilon') \in \text{Graph}(T)$ 且 $(f_\varepsilon, f_\varepsilon') \to (f, f')$ 在 $L^2 \times L^2$ 中，故 $(f, f') \in \overline{\text{Graph}(T)}$.


综上，$\overline{\text{Graph}(T)} = \left\{ (f, f') \mid f \in H^1([a,b]) \right\}$。

## 3

$H^1([a,b])$ 包含所有绝对连续、导数在 $L^2$ 的函数，无边界条件。
$H_0^1([a,b])$ 包含所有在边界 $a$ 和 $b$ 处为零的函数，即：
$$H_0^1([a,b]) = \{ f \in H^1([a,b]) \mid f(a) = f(b) = 0 \}.$$