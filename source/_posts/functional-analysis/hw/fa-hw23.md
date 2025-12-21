---
title: 泛函分析第二十三次作业
tags:
  - math
  - functional analysis
categories:
  - math
  - functional analysis homework
index_img: /img/fa.jpg
banner_img: /img/fa.jpg
excerpt: 泛函分析第二十三次作业
abbrlink: 49c6701f
date: 2025-12-20 02:19:36
---
# 23.1
设 $X,Y$ 为 Banach 空间，并且存在 $X$ 到 $Y$ 的 Fredholm 算子，证明如下结论：
1. $X$ 是自反的当且仅当 $Y$ 是自反的；
2. $X$ 是可分的当且仅当 $Y$ 是可分的。

## 解答
1.  设 $T: X \to Y$ 为 Fredholm 算子，则 $\ker T$ 有限维，$\operatorname{im} T$ 闭且余有限维。由 Banach 空间理论，存在闭子空间 $X_0 \subset X$ 使得 $X = \ker T \oplus X_0$，以及有限维子空间 $W \subset Y$ 使得 $Y = \operatorname{im} T \oplus W$，且 $T|_{X_0}: X_0 \to \operatorname{im} T$ 为同构。
    *   若 $X$ 自反，则其闭子空间 $X_0$ 自反，从而 $\operatorname{im} T$ 自反；又 $W$ 有限维自反，故 $Y = \operatorname{im} T \oplus W$ 自反。
    *   若 $Y$ 自反，则其闭子空间 $\operatorname{im} T$ 自反，从而 $X_0$ 自反；又 $\ker T$ 有限维自反，故 $X = \ker T \oplus X_0$ 自反。
    因此 $X$ 自反当且仅当 $Y$ 自反。

2.  沿用上述分解。
    *   若 $X$ 可分，则其闭子空间 $X_0$ 可分，从而 $\operatorname{im} T$ 可分；又 $W$ 有限维可分，故 $Y = \operatorname{im} T \oplus W$ 可分。
    *   若 $Y$ 可分，则其闭子空间 $\operatorname{im} T$ 可分，从而 $X_0$ 可分；又 $\ker T$ 有限维可分，故 $X = \ker T \oplus X_0$ 可分。
    因此 $X$ 可分当且仅当 $Y$ 可分。


# 23.2
设 $X$ 为实 Banach 空间，证明：任意两个 $X$ 的余维数为 1 的闭子空间是同构的。

提示：考虑子空间 $Y, Z$ 以及 $(Y \cap Z) \times \mathbb{R}$。

## 解答
设这两个子空间为 $Y$ 和 $Z$。当这两个空间相等时平凡。假设不相等，令 $g: X \to X/Z \cong^{p} \mathbb{R}$ 是商映射。考虑 $\phi = p \circ g|_Y: Y \to \mathbb{R}$，其核为 $Y \cap Z$。故由第一同构定理可知
$$Y / (Y \cap Z) \cong^{\phi} \operatorname{im}(\phi) \subset \mathbb{R}.$$
又因为 $Y \neq Z$，所以 $\operatorname{im}(\phi) \neq 0$，从而 $Y / (Y \cap Z) \cong^{\phi} \mathbb{R}$，于是 $Y/(Y \cap Z)$ 是一维的，存在 $y_0 \in Y \setminus (Y \cap Z)$，使得每个 $y \in Y$ 可唯一表示为 $y = u + t y_0$，其中 $u \in Y \cap Z$，$t \in \mathbb{R}$。由此得到代数直和分解 $Y = (Y \cap Z) \oplus \mathbb{R} y_0$。

定义线性泛函 $\ell: Y \to \mathbb{R}$，$\ell(y) = t$（对应于上述分解）。则 $\ker \ell = Y \cap Z$ 是闭的，故 $\ell$ 连续。于是投影 $y \mapsto u = y - \ell(y) y_0$ 也连续，因此该直和是拓扑直和，且映射 $(u, t) \mapsto u + t y_0$ 给出了 $(Y \cap Z) \times \mathbb{R}$ 到 $Y$ 的拓扑同构（赋予直和范数 $\|(u, t)\| = \|u\| + |t|$）。类似地，对 $Z$ 可得 $Z \cong (Y \cap Z) \times \mathbb{R}$，从而 $Y \cong Z$。

# 23.3
设 $X$ 为无限维实 Banach 空间，证明如下命题等价：

1. $X$ 和 $X \times \mathbb{R}$ 同构；

2. 存在 $X$ 的余维数为 1 的子空间和 $X$ 同构；

3. 所有 $X$ 的余维数为 1 的闭子空间和 $X$ 同构；

4. 存在指数为 1 的 Fredholm 算子 $A: X \to X$。

## 解答
**(1) $\Rightarrow$ (2)**  
假设 $X \cong X \times \mathbb{R}$。考虑子空间 $X \times \{0\} \subset X \times \mathbb{R}$，其商 $(X \times \mathbb{R})/(X \times \{0\}) \cong \mathbb{R}$，故余维数为 1。在同构 $X \cong X \times \mathbb{R}$ 下，$X \times \{0\}$ 对应 $X$ 的一个余维数为 1 的子空间 $Y$。由于 $X \times \{0\} \cong X$，故 $Y \cong X$，即存在 $X$ 的余维数为 1 的子空间（$Y$ 必闭，因同构保持闭性）与 $X$ 同构。

**(2) $\Rightarrow$ (3)**  
设存在 $X$ 的余维数为 1 的闭子空间 $Y$ 使得 $Y \cong X$。对任意余维数为 1 的闭子空间 $Z \subset X$，由题 23.2 知 $Y \cong Z$，从而 $Z \cong X$。故所有 $X$ 的余维数为 1 的闭子空间均与 $X$ 同构。

**(3) $\Rightarrow$ (4)**  
取 $f \in X^*$ 非零，则 $\ker f$ 是余维数为 1 的闭子空间。由 (3)，$\ker f \cong X$。记 $V = \ker f^\perp$（一维子空间），则 $X = V \oplus \ker f$ 为拓扑直和。设 $T: \ker f \to X$ 为同构。定义算子 $A: X \to X$ 为：对 $x = v + w$（$v \in V, w \in \ker f$），令 $A(x) = T(w)$。由于直和投影连续且 $T$ 连续，故 $A$ 有界。易见 $\ker A = V$（一维），且 $A$ 为满射（对任意 $y \in X$，存在 $w \in \ker f$ 使 $T(w)=y$，取 $x=0+w$ 即得 $A(x)=y$），故 $\operatorname{im} A = X$ 闭，$\operatorname{coker} A = 0$。因此 $A$ 是 Fredholm 算子，且指数 $\operatorname{ind}(A) = \dim \ker A - \dim \operatorname{coker} A = 1$。

**(4) $\Rightarrow$ (1)**  
设 $A: X \to X$ 为指数 1 的 Fredholm 算子。令 $k = \dim \ker A$，$c = \dim \operatorname{coker} A$，则 $k - c = 1$。由 Fredholm 算子性质，存在闭子空间 $X_0 \subset X$ 使 $X = \ker A \oplus X_0$，且 $A|_{X_0}: X_0 \to \operatorname{im} A$ 为同构；又存在有限维子空间 $W \subset X$ 使 $X = \operatorname{im} A \oplus W$，且 $\dim W = c$。于是有拓扑同构：
$$
X \cong \ker A \oplus X_0 \cong \mathbb{R}^k \oplus \operatorname{im} A, \quad
X \cong \operatorname{im} A \oplus W \cong \operatorname{im} A \oplus \mathbb{R}^c.
$$
因 $k = c+1$，有 $\mathbb{R}^k \cong \mathbb{R}^c \oplus \mathbb{R}$。从而
$$
X \cong \mathbb{R}^k \oplus \operatorname{im} A \cong (\mathbb{R}^c \oplus \mathbb{R}) \oplus \operatorname{im} A \cong \mathbb{R}^c \oplus (\operatorname{im} A \oplus \mathbb{R}) \cong (\mathbb{R}^c \oplus \operatorname{im} A) \oplus \mathbb{R} \cong X \oplus \mathbb{R}.
$$
故 $X \cong X \times \mathbb{R}$。

综上，四个命题等价。

# 23.4
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



## 解答
### 1

设 $\{f_n\}$ 是 $W^{1,p}(I)$ 中的 Cauchy 列，即对任意 $\varepsilon > 0$，存在 $N$ 使得当 $m,n \ge N$ 时，
$$
\|f_n - f_m\|_{W^{1,p}} = \left( \int_0^1 |f_n - f_m|^p + \int_0^1 |f_n' - f_m'|^p \right)^{1/p} < \varepsilon.
$$
从而 $\{f_n\}$ 和 $\{f_n'\}$ 分别是 $L^p(I)$ 中的 Cauchy 列。由 $L^p$ 的完备性，存在 $f, g \in L^p(I)$ 使得 $f_n \to f$ 在 $L^p$ 中，$f_n' \to g$ 在 $L^p$ 中。

现证 $f$ 绝对连续且 $f' = g$ 几乎处处。由 Cauchy 性，可证 $\{f_n(0)\}$ 是 Cauchy 数列（利用估计 $|f_n(0)-f_m(0)| \le \|f_n - f_m\|_{L^p} + \|f_n' - f_m'\|_{L^p}$），故收敛到某数 $A$。定义 $\tilde{f}(x) = A + \int_0^x g(t)\,dt$，则 $\tilde{f}$ 绝对连续且 $\tilde{f}' = g$ 几乎处处。由 $L^p$ 收敛，存在子列 $\{f_{n_k}\}$ 几乎处处收敛到 $f$。对几乎处处 $x$，
$$
f_{n_k}(x) = f_{n_k}(0) + \int_0^x f_{n_k}'(t)\,dt \to A + \int_0^x g(t)\,dt = \tilde{f}(x),
$$
故 $f = \tilde{f}$ 几乎处处，从而 $f$ 绝对连续且 $f' = g \in L^p$，即 $f \in W^{1,p}(I)$。最后由收敛性 $\|f_n - f\|_{W^{1,p}}^p = \|f_n - f\|_{L^p}^p + \|f_n' - f'\|_{L^p}^p \to 0$，得 $W^{1,p}(I)$ 完备。

### 2

对任意 $f \in W^{1,p}(I)$ 和 $x \in I$，由绝对连续性，
$$
f(x) = f(0) + \int_0^x f'(t)\,dt.
$$
对 $y \in I$ 积分 $f(0) = f(y) - \int_0^y f'(t)\,dt$ 得
$$
f(0) = \int_0^1 f(y)\,dy - \int_0^1 \int_0^y f'(t)\,dt\,dy,
$$
故
$$
|f(0)| \le \int_0^1 |f(y)|\,dy + \int_0^1 \int_0^y |f'(t)|\,dt\,dy \le \|f\|_{L^1} + \|f'\|_{L^1}.
$$
从而
$$
|f(x)| \le |f(0)| + \int_0^1 |f'(t)|\,dt \le \|f\|_{L^1} + 2\|f'\|_{L^1}.
$$
由 Hölder 不等式及 $|I|=1$，有 $\|f\|_{L^1} \le \|f\|_{L^p}$，$\|f'\|_{L^1} \le \|f'\|_{L^p}$。因此
$$
\|f\|_{C(I)} = \sup_{x\in I} |f(x)| \le \|f\|_{L^p} + 2\|f'\|_{L^p} \le 3 \|f\|_{W^{1,p}},
$$
其中末步用到 $\|f\|_{L^p}, \|f'\|_{L^p} \le \|f\|_{W^{1,p}}$。故嵌入有界。

### 3

* $p > 1$ 时嵌入是紧的。设 $\{f_n\}$ 在 $W^{1,p}(I)$ 中有界，即存在 $M>0$ 使得 $\|f_n\|_{W^{1,p}} \le M$。由 (2) 知 $\{f_n\}$ 在 $C(I)$ 中一致有界。对任意 $x,y \in I$，
$$
|f_n(x) - f_n(y)| \le \int_y^x |f_n'(t)|\,dt \le \|f_n'\|_{L^p} |x-y|^{1-1/p} \le M |x-y|^{1-1/p},
$$
故 $\{f_n\}$ 等度连续。由 Arzelà–Ascoli 定理，$\{f_n\}$ 在 $C(I)$ 中有收敛子列，因此嵌入紧。

* $p = 1$ 时嵌入不紧。取 $f_n(t) = t^n$，则 $f_n$ 绝对连续，且
$$
\|f_n\|_{L^1} = \frac{1}{n+1}, \quad \|f_n'\|_{L^1} = 1,
$$
故 $\|f_n\|_{W^{1,1}} \le 2$，即 $\{f_n\}$ 在 $W^{1,1}(I)$ 中有界。但在 $C(I)$ 中，$f_n$ 点态收敛于不连续函数
$$
f(t) = \begin{cases} 0, & 0 \le t < 1, \\ 1, & t = 1, \end{cases}
$$
故任何子列均不能在 $C(I)$ 中一致收敛（否则极限连续）。因此 $\{f_n\}$ 在 $C(I)$ 中无收敛子列，嵌入非紧。