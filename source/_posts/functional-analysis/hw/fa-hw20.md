---
title: 泛函分析第二十次作业
tags:
  - math
  - functional analysis
categories:
  - math
  - functional analysis homework
index_img: /img/fa.jpg
banner_img: /img/fa.jpg
excerpt: 泛函分析第二十次作业
abbrlink: 613c1166
date: 2025-12-04 20:32:09
---
# 20.1
设 $X, Y$ 为 Banach 空间，考虑 $L(X,Y)$ 中的算子范数，证明如下结论:
1. 所有满射构成的集合是开集
2. 所有单射构成的集合不一定是开集
3. 所有具有闭像的单射构成的集合是开集

## 1

!!! note Neumann 迭代技巧
    考虑算子方程：
    $$(I - A)x = y$$
    其中 $A$ 是有界线性算子，且谱半径 $r(A) < 1$（特别地，当 $\|A\| < 1$ 时）。则解可表示为诺依曼级数：
    $$x = (I - A)^{-1}y = \sum_{k=0}^{\infty} A^k y$$
    该级数按算子范数收敛。

设 $T \in \mathcal{L}(X, Y)$ 为满射。由开映射定理，存在常数 $c > 0$ 使得
$$\forall y \in Y, \; \exists x \in X: \; T x = y \quad \text{且} \quad \|x\| \le c \|y\|.$$
取 $S \in \mathcal{L}(X, Y)$ 满足 $\|S - T\| < \delta$，其中 $\delta = \frac{1}{c}$。对任意 $y \in Y$，构造序列 $\{x_n\} \subset X$ 如下：
取 $x_0$ 使得 $T x_0 = y$ 且 $\|x_0\| \le c \|y\|$。
设 $R = S - T$，则 $\|R\| < \delta$。
递归地选取 $x_{k+1}$ 使得 $T x_{k+1} = -R x_k$ 且 $\|x_{k+1}\| \le c \|R x_k\| \le c \|R\| \|x_k\|$。
由 $\|R\| < \delta = 1/c$ 知 $c \|R\| < 1$，故级数 $x = \sum_{k=0}^\infty x_k$ 收敛，且
$$S x = T x + R x = \sum_{k=0}^\infty T x_k + \sum_{k=0}^\infty R x_k = y + \sum_{k=0}^\infty (-R x_k) + \sum_{k=0}^\infty R x_k = y.$$
因此 $S$ 为满射，即满射算子集合为开集。

!!! note
    隐式地构造诺依曼级数。如果形式上将 $T$ 视为可逆的，则解可写为：
    $$x = (T+R)^{-1}y = [T(I + T^{-1}R)]^{-1}y = (I + T^{-1}R)^{-1}T^{-1}y$$
    当 $\|T^{-1}R\| < 1$ 时，展开为：
    $$x = \sum_{k=0}^{\infty} (-T^{-1}R)^k T^{-1}y$$
    对应：
    $$x = \sum_{k=0}^{\infty} x_k, \quad x_0 = T^{-1}y, \quad x_{k+1} = -T^{-1}R x_k$$


## 2
取 $X = Y = \ell^2$，定义对角算子 $T(x_1, x_2, x_3, \dots) = (x_1, \frac{x_2}{2}, \frac{x_3}{3}, \dots)$。显然 $T$ 是单射（所有对角元非零），但像不闭（例如 $y_n = \frac{1}{n}$ 不在 $T(X)$ 中）。
构造扰动算子 $S_n = T - \frac{1}{n}I$，即：
$$S_n(x) = \left( x_1 - \frac{x_1}{n}, \frac{x_2}{2} - \frac{x_2}{n}, \dots, \frac{x_n}{n} - \frac{x_n}{n}, \dots \right).$$
注意到第 $n$ 个分量为零，即 $S_n(e_n) = 0$，其中 $e_n$ 是标准基向量。因此 $S_n$ 不是单射。
计算范数：
$$\|S_n - T\| = \left\| -\frac{1}{n}I \right\| = \frac{1}{n}$$
这表明 $T$ 的任意邻域内都包含非单射算子 $S_n$，故单射集合不是开集。

## 3
设 $T \in L(X, Y)$ 是单射且 $T(X)$ 闭。由于 $T: X \to T(X)$ 是双射且 $T(X)$ 是 Banach 空间，由 Banach 同构定理，存在常数 $c > 0$ 使得：
$$\|x\| \leq c \|Tx\| \quad \text{对所有 } x \in X.$$
即 $T$ 是下有界的。
令 $S = T + A$，其中 $\|A\| < \varepsilon$。对任意 $x \in X$，有：
$$\|Sx\| = \|Tx + Ax\| \geq \|Tx\| - \|Ax\| \geq \frac{1}{c} \|x\| - \varepsilon \|x\| = \left( \frac{1}{c} - \varepsilon \right) \|x\|.$$
若取 $\varepsilon < \frac{1}{2c}$，则 $\|Sx\| \geq \frac{1}{2c} \|x\|$，即 $S$ 是下有界的。

单射性：若 $Sx = 0$，则 $\|x\| \leq 2c \|Sx\| = 0$，故 $x = 0$。
像闭性：设 $\{Sx_n\}$ 收敛于 $y \in Y$，则 $\{x_n\}$ 是 Cauchy 序列（因 $\|x_n - x_m\| \leq 2c \|Sx_n - Sx_m\|$），故存在 $x \in X$ 使得 $x_n \to x$，从而 $Sx_n \to Sx = y$，即 $y \in S(X)$。

因此，当 $\|S - T\| < \frac{1}{2c}$ 时，$S$ 是具有闭像的单射。这说明该集合是开集。


# 20.2
若 $ T, S \in \mathcal{L}(X; Y) $，其中 $ X, Y $ 是 Banach 空间，则

1. $ (T + S)^* = T^* + S^* $，$ aT^* = (aT)^* $；

2. 若 $ T^{-1} \in \mathcal{L}(Y; X) $，则 $ (T^*)^{-1} $ 存在且 $ (T^*)^{-1} = (T^{-1})^* $。

## 1
对任意 $y^* \in Y^*$，有
$$((T + S)^* y^*)(x) = y^*((T + S)x) = y^*(Tx) + y^*(Sx) = (T^* y^*)(x) + (S^* y^*)(x).$$
因此 $(T + S)^* = T^* + S^*$。
类似地，对于任意 $y^* \in Y^*$，有
$$((aT)^* y^*)(x) = y^*((aT)x) = a y^*(Tx) = a (T^* y^*)(x).$$

## 2
若 $T^{-1} \in \mathcal{L}(Y; X)$，则对任意 $y^* \in Y^*$ 和 $y \in Y$，
$$\langle y, (T^{-1})^* T^* y^* \rangle = \langle T^{-1} y, T^* y^* \rangle = \langle T(T^{-1} y), y^* \rangle = \langle y, y^* \rangle,$$
故 $(T^{-1})^* T^* = I_{Y^*}$。类似地，对任意 $x^* \in X^*$ 和 $x \in X$，
$$\langle x, T^* (T^{-1})^* x^* \rangle = \langle Tx, (T^{-1})^* x^* \rangle = \langle T^{-1}(Tx), x^* \rangle = \langle x, x^* \rangle,$$
故 $T^* (T^{-1})^* = I_{X^*}$。因此 $T^*$ 可逆，且 $(T^*)^{-1} = (T^{-1})^* \in \mathcal{L}(X^*; Y^*)$。


# 20.3
假设 $L_A : \mathbb{R}^n \to \mathbb{R}^m$ 使得 $L_A x = A x$，其中，$A \in M_{m,n}(\mathbb{R})$，$x \in \mathbb{R}^n$。求 $(L_A)^* = ?$

## 解答
对于线性算子 $L_A: \mathbb{R}^n \to \mathbb{R}^m$，其中 $L_A x = A x$，$A \in M_{m,n}(\mathbb{R})$，其伴随算子 $(L_A)^*: \mathbb{R}^m \to \mathbb{R}^n$ 满足
$$\langle L_A x, y \rangle_{\mathbb{R}^m} = \langle x, (L_A)^* y \rangle_{\mathbb{R}^n}, \quad \forall x \in \mathbb{R}^n, y \in \mathbb{R}^m,$$
这里 $\langle \cdot, \cdot \rangle$ 表示标准欧几里得内积。利用矩阵运算可得
$$\langle A x, y \rangle = (A x)^\top y = x^\top A^\top y = \langle x, A^\top y \rangle,$$
因此
$$(L_A)^* y = A^\top y, \quad \text{即} \quad (L_A)^* = L_{A^\top}.$$
所以，伴随算子 $(L_A)^*$ 对应于矩阵 $A$ 的转置 $A^\top$ 所定义的线性映射。

# 20.4
假设 $ X $ 是 Banach 空间，$ Y $ 是 $ X $ 的闭子空间，$ \pi: X \to X/Y $ 使得 $ \pi(x) = [x] $， $ \ell: Y \to X $ 使得 $ \ell(y) = y $，则

1. $ \pi^*: (X/Y)^* \to Y^\perp $ 是等距同构的；  
2. $ \ell^* $ 是满射且 $ \ker(\ell^*) = Y^\perp $，从而 $ \ell^*: X^*/Y^\perp \to Y^* $ 是等距同构。

## 解答
### 1
对任意 $\varphi \in (X/Y)^*$，定义 $\pi^*(\varphi) = \varphi \circ \pi \in X^*$。由于 $\pi(Y) = 0$，有 $\pi^*(\varphi)|_Y = 0$，故 $\pi^*(\varphi) \in Y^\perp$。  
反之，对任意 $f \in Y^\perp$，定义 $\tilde{f}([x]) = f(x)$，则 $\tilde{f} \in (X/Y)^*$ 且 $\pi^*(\tilde{f}) = f$，故 $\pi^*$ 是双射。  
等距性：由商范数定义，对任意 $\varphi \in (X/Y)^*$，有 $\|\pi^*(\varphi)\| = \|\varphi \circ \pi\| = \|\varphi\|$。

### 2
$\ell^*(f) = f|_Y$，显然 $\ker(\ell^*) = \{ f \in X^* : f|_Y = 0 \} = Y^\perp$。  
由 Hahn-Banach 定理，任意 $g \in Y^*$ 可延拓为 $f \in X^*$，故 $\ell^*$ 是满射。  
考虑诱导映射 $\tilde{\ell}^*: X^*/Y^\perp \to Y^*$，$\tilde{\ell}^*([f]) = f|_Y$，这是良定义的线性双射。  
等距性：对任意 $[f] \in X^*/Y^\perp$，有  
$$
\| [f] \| = \inf_{g \in Y^\perp} \| f + g \| = \| f|_Y \| = \| \tilde{\ell}^*([f]) \|,
$$
故 $\tilde{\ell}^*$ 是等距同构。