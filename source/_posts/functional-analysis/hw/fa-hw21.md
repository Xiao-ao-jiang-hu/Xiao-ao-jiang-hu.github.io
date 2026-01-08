---
title: 泛函分析第二十一次作业
tags:
  - math
  - functional analysis
categories:
  - math
  - functional analysis homework
index_img: /img/fa.jpg
banner_img: /img/fa.jpg
excerpt: 泛函分析第二十一次作业
abbrlink: b5d35bd5
date: 2025-12-08 13:20:50
---
# 21.1
考虑算子 $T: \ell^2 \to \ell^2$ 定义为 $T((x_i)_{i \geq 1}) = (i^{-1} x_i)_{i \geq 1}$。证明 $\operatorname{Ran}(T)$ 不是闭的。

## 解答
构造序列 $y^{(n)} \in \ell^2$，其中 $y_i^{(n)} = \begin{cases} 1/i & \text{若 } i \leq n, \\ 0 & \text{若 } i > n. \end{cases}$
取 $x^{(n)} \in \ell^2$ 为 $x_i^{(n)} = \begin{cases} 1 & \text{若 } i \leq n, \\ 0 & \text{若 } i > n. \end{cases}$
则 $T(x^{(n)}) = (i^{-1} x_i^{(n)}) = y^{(n)}$，故 $y^{(n)} \in \operatorname{Ran}(T)$。
当 $n \to \infty$ 时，$y^{(n)}$ 在 $\ell^2$ 范数下收敛于 $y = (1/i)_{i \geq 1}$，因为
$$\|y^{(n)} - y\|_2^2 = \sum_{i=n+1}^\infty \frac{1}{i^2} \to 0.$$
但 $y \notin \operatorname{Ran}(T)$：若 $y \in \operatorname{Ran}(T)$，则存在 $x \in \ell^2$ 使得 $x_i = i y_i = 1$，从而 $x = (1,1,1,\dots) \notin \ell^2$。因此 $\operatorname{Ran}(T)$ 不是闭的

# 21.2
假设 $X, Y$ 是 Banach 空间，$T: X \to Y$ 是单射。$N$ 是 $Y$ 的一个闭子空间，且满足 $N \oplus \operatorname{Ran}(T) = Y$。证明 $\operatorname{Ran}(T)$ 是闭的。

## 解答
只需要证明 $T^*$ 是满射。对于任意 $f \in X^*$，定义 $\tilde{f} \in Y^*$ 如下：
$$\tilde{f}(y) = f(x) \quad \text{其中 } y = T(x) + n, \; n \in N.$$
由于 $N \cap \operatorname{Ran}(T) = \{0\}$，$\tilde{f}$ 定义良好且线性。并且 $\tilde{f}$ 是有界的，因为
$$|\tilde{f}(y)| = |f(x)| \leq \|f\| \|x\| \leq \|f\| \|T^{-1}\| \|y\|.$$
因此，$\tilde{f} \in Y^*$ 且 $T^*(\tilde{f}) = f$，说明 $T^*$ 是满射。


# 21.3
假设 $X, Y$ 是 Banach 空间，$S, T \in \mathcal{L}(X; Y)$。若存在 $c > 0$ 使得 $\|Sx\| \le c\|Tx\|, \forall x \in X$，且 $\ker(T) = \ker(S)$，则 $\text{Ran}(T)$ 是闭的如果 $\text{Ran}(S)$ 是闭的。

## 解答
由闭值域定理，由于 $S$ 闭，存在 $c_1 > 0$ 使得 $\forall x \in X, \inf_{z \in \ker(T)} \|x + z\| \le c_1 \|Tx\|$。
由于 $\ker(T) = \ker(S)$，所以 $\inf_{z \in \ker(S)} \|x + z\| \le c_1 \|Tx\|$。
又因为 $\|Sx\| \le c \|Tx\|$，所以 $\inf_{z \in \ker(S)} \|x + z\| \le c c_1 \|Sx\|$。
于是由闭值域定理 $\text{Ran}(T)$ 闭。


# 21.4
假设 $X, Y$ 是 Hilbert 空间，$S, T \in \mathcal{L}(X; Y)$。若存在 $c > 0$ 使得 $\|Sx\| \le c\|Tx\|, \forall x \in X$，且 $T(\ker(S)) \subset T(\ker(S)^\perp)$，则 $\operatorname{Ran}(T)$ 是闭的，如果 $\operatorname{Ran}(S)$ 是闭的。

## 解答
设 $N = \ker(S)$。由于 $S$ 有闭值域，$N$ 是闭子空间，故 $X = N \oplus N^\perp$（Hilbert 空间的正交分解）。由开映射定理，$S|_{N^\perp} : N^\perp \to \operatorname{Ran}(S)$ 是有界线性双射，且其逆有界，故存在常数 $m > 0$ 使得  
$$
\|S x\| \ge m \|x\|, \quad \forall x \in N^\perp.
$$  
结合条件 $\|S x\| \le c \|T x\|$（对所有 $x \in X$），得  
$$
\|T x\| \ge \frac{m}{c} \|x\|, \quad \forall x \in N^\perp. \tag{1}
$$  
因此 $T|_{N^\perp}$ 是单射且下方有界，故 $\operatorname{Ran}(T|_{N^\perp}) = T(N^\perp)$ 是闭子空间。

由条件 $T(N) \subset T(N^\perp)$，对任意 $n \in N$，存在 $w \in N^\perp$ 使得 $T n = T w$。取 $w$ 为满足该等式中范数最小者（即 $w \perp (N^\perp \cap \ker T)$）。由于 $T(N^\perp)$ 闭，由闭值域定理（应用于 $T|_{N^\perp}$），存在常数 $\alpha > 0$ 使得  
$$
\|T z\| \ge \alpha \inf_{\zeta \in N^\perp \cap \ker T} \|z + \zeta\|, \quad \forall z \in N^\perp.
$$  
特别地，对上述 $w$（与 $N^\perp \cap \ker T$ 正交），有 $\inf \|w + \zeta\| = \|w\|$，故  
$$
\|T w\| \ge \alpha \|w\|. \tag{2}
$$

现对任意 $x \in X$，分解 $x = n + n^\perp$，其中 $n \in N$，$n^\perp \in N^\perp$。取 $w \in N^\perp$ 使 $T n = T w$ 且满足 (2)。令 $\xi = -n + w$，则 $T \xi = -T n + T w = 0$。计算  
$$
x + \xi = n + n^\perp - n + w = n^\perp + w.
$$  
估计范数：  
$$
\|x + \xi\| \le \|n^\perp\| + \|w\|.
$$  
由 (1) 及 $\|S x\| = \|S n^\perp\| \le c \|T x\|$，得  
$$
\|n^\perp\| \le \frac{c}{m} \|T x\|. \tag{3}
$$  
又由 $T n = T w$ 及 (2)，有 $\|w\| \le \frac{1}{\alpha} \|T n\|$。而  
$$
\|T n\| \le \|T x\| + \|T n^\perp\| \le \|T x\| + \|T\| \|n^\perp\| \le \left(1 + \frac{\|T\| c}{m}\right) \|T x\|,
$$  
故  
$$
\|w\| \le \frac{1}{\alpha} \left(1 + \frac{\|T\| c}{m}\right) \|T x\|. \tag{4}
$$  
将 (3)、(4) 代入，得  
$$
\|x + \xi\| \le \left[ \frac{c}{m} + \frac{1}{\alpha} \left(1 + \frac{\|T\| c}{m}\right) \right] \|T x\|.
$$  
因此存在常数 $C > 0$，使得对任意 $x \in X$，存在 $\xi \in \ker T$ 满足 $\|x + \xi\| \le C \|T x\|$。由闭值域定理（条件 3），此即等价于 $\operatorname{Ran}(T)$ 闭。证毕。
