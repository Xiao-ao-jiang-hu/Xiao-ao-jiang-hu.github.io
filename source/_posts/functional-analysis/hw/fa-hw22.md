---
title: 泛函分析第二十二次作业
tags:
  - math
  - functional analysis
categories:
  - math
  - functional analysis homework
index_img: /img/fa.jpg
banner_img: /img/fa.jpg
excerpt: 泛函分析第二十二次作业
date: 2025-12-08 16:47:40
---
# 22.1
设$X,Y$为Banach空间，$K:X\to Y$ 为紧算子，证明如下结论：

1. 若ImK是闭集，则$\dim\mathrm{Im}K<+\infty$
2. $\mathrm{Im}K\subset Y$ 是可分子空间；
3. 若Y可分，则存在Banach空间X和具有稠密像的紧算子$K:X\to Y$ 

## 1
设 $K: X \to Y$ 是紧算子，且 $\operatorname{Im} K$ 是闭集。则 $\operatorname{Im} K$ 是 Banach 空间（作为 $Y$ 的闭子空间）。考虑算子 $K: X \to \operatorname{Im} K$，它是连续线性满射。由开映射定理，存在常数 $\delta > 0$ 使得 $\delta B_{\operatorname{Im} K} \subseteq K(B_X)$，其中 $B_X$ 和 $B_{\operatorname{Im} K}$ 分别为 $X$ 和 $\operatorname{Im} K$ 的单位开球。于是 $B_{\operatorname{Im} K} \subseteq \frac{1}{\delta} K(B_X)$。由于 $K$ 是紧算子，$K(B_X)$ 是相对紧集，故 $\frac{1}{\delta} K(B_X)$ 也是相对紧集，从而 $B_{\operatorname{Im} K}$ 是相对紧集。这意味着 $\operatorname{Im} K$ 的单位闭球是紧的，于是 $\operatorname{Im} K$ 必为有限维（Riesz 定理）。因此 $\dim \operatorname{Im} K < +\infty$。

## 2
考虑 $X$ 的单位球 $B_X$。
由于 $K$ 是紧算子，$K(B_X)$ 是相对紧集，故其闭包 $\overline{K(B_X)}$ 是紧集，从而是可分的。令
$$S = \bigcup_{n=1}^{\infty} n \overline{K(B_X)},$$
则 $S$ 是可数个可分集的并，因此可分。
对任意 $x \in X$，存在正整数 $n$ 使得 $\|x\| \leq n$，从而
$$Kx \in n K(B_X) \subseteq S,$$
故 $\operatorname{Im} K \subseteq S$。由于可分度量空间的子空间可分，因此 $\operatorname{Im} K$ 是可分的。

## 3
由于 $Y$ 可分，存在可数稠密子集 $\{y_n\}_{n=1}^{\infty} \subset Y$。令
$$e_n = \frac{y_n}{2^n \max(1, \|y_n\|)} \quad (\text{若 } y_n = 0 \text{ 则取 } e_n = 0),$$
则
$$\sum_{n=1}^{\infty} \|e_n\| \leq \sum_{n=1}^{\infty} \frac{1}{2^n} = 1,$$
且 $\operatorname{span}\{e_n\} = \operatorname{span}\{y_n\}$ 在 $Y$ 中稠密。
定义算子 $K: \ell^1 \to Y$ 为
$$K(a) = \sum_{n=1}^{\infty} a_n e_n, \quad a = (a_n)_{n=1}^{\infty} \in \ell^1.$$
由 $\sum \|e_n\| < \infty$ 知 $K$ 是有界线性算子，且其范数不超过 $\sum \|e_n\|$。对每个 $N \in \mathbb{N}$，定义有限秩算子
$$K_N(a) = \sum_{n=1}^{N} a_n e_n,$$
则
$$\|K - K_N\| \leq \sum_{n=N+1}^{\infty} \|e_n\| \to 0 \quad (N \to \infty),$$
故 $K$ 是紧算子（作为有限秩算子的一致极限）。
对任意 $y \in Y$ 和 $\varepsilon > 0$，由于 $\operatorname{span}\{e_n\}$ 稠密，存在有限线性组合$\sum_{n=1}^{m} \alpha_n e_n$使得$\left\| y - \sum_{n=1}^{m} \alpha_n e_n \right\| < \varepsilon.$
取 $a \in \ell^1$ 使得 $a_n = \alpha_n$（$1 \leq n \leq m$），其余为 0，则
$$K a = \sum_{n=1}^{m} \alpha_n e_n,$$
故 $\|y - K a\| < \varepsilon$。
因此 $\operatorname{Im} K$ 在 $Y$ 中稠密。取 $X = \ell^1$ 即得所求。


# 22.2
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

## 解答
**(1) $\Rightarrow$ (2):**
假设 $C$ 紧。递归构造紧集列 $\{C_k\}$ 和有限子集列 $A_k \subset C_k$ 如下：
令 $C_1 = C$。设已构造紧集 $C_k$，因 $2C_k$ 紧（数乘连续），故完全有界。取有限集 $A_k \subset 2C_k$ 使得
$$2C_k \subset \bigcup_{x \in A_k} \overline{B}_{4^{-k}}(x).$$
定义
$$C_{k+1} = \bigcup_{x \in A_k} \left( (2C_k \cap \overline{B}_{4^{-k}}(x)) - x \right).$$
易见 $C_{k+1}$ 是有限个紧集之并，故紧。此外，若 $y \in C_{k+1}$，则存在 $x \in A_k$ 和 $z \in 2C_k$ 满足 $\|z - x\| \leq 4^{-k}$ 且 $y = z - x$，故 $\|y\| \leq 4^{-k}$。特别地，当 $x \in A_{k+1} \subset C_{k+1}$ 时，有 $\|x\| \leq 4^{-k}$。
将各 $A_k$ 中的点按顺序排列成序列 $\{x_n\}$（先排 $A_1$，再排 $A_2$，依此类推）。则当 $n \to \infty$ 时，$x_n$ 必来自某 $A_k$ 且 $k \to \infty$，故 $\|x_n\| \leq 4^{-(k-1)} \to 0$，即 $\lim_{n\to\infty} \|x_n\| = 0$。
现证 $C \subset \overline{\mathrm{conv}}(\{x_n\})$。任取 $c \in C = C_1$，递归选取 $x_k \in A_k$ 和 $c_k \in C_k$ 如下：令 $c_1 = c$。假设已得 $c_k \in C_k$，由构造存在 $x_k \in A_k$ 使得 $\|2c_k - x_k\| \leq 4^{-k}$。令 $c_{k+1} = 2c_k - x_k$，则 $c_{k+1} \in C_{k+1}$。于是
$$c_k = \frac{1}{2}x_k + \frac{1}{2}c_{k+1}.$$
迭代得
$$c = \sum_{i=1}^{n} 2^{-i}x_i + 2^{-n}c_{n+1}, \quad \forall n \in \mathbb{N}.$$
因 $\|c_{n+1}\| \leq 4^{-n}$，故 $2^{-n}\|c_{n+1}\| \leq 2^{-n} \cdot 4^{-n} \to 0$，从而
$$c = \sum_{i=1}^{\infty} 2^{-i}x_i.$$
右端为 $\{x_n\}$ 的凸组合极限，故 $c \in \overline{\mathrm{conv}}(\{x_n\})$。因此 $C \subset \overline{\mathrm{conv}}(\{x_n\})$。

**(2) $\Rightarrow$ (1):**
假设存在序列 $\{x_n\} \subset C$ 满足 $\lim_{n\to\infty} \|x_n\| = 0$ 且 $C \subset \overline{\mathrm{conv}}(\{x_n\})$。因 $C$ 闭，只需证 $\overline{\mathrm{conv}}(\{x_n\})$ 紧，则 $C$ 作为其闭子集亦紧。
下证 $\overline{\mathrm{conv}}(\{x_n\})$ 完全有界。任取 $\varepsilon > 0$，由 $\|x_n\| \to 0$，存在 $N$ 使得当 $n > N$ 时 $\|x_n\| < \varepsilon$。令
$$S = \left\{ \sum_{i=1}^{N} \lambda_i x_i : \lambda_i \geq 0,\ \sum_{i=1}^{N} \lambda_i \leq 1 \right\},$$
考虑映射
$$f: \Delta_N \to X, \quad f(\lambda_1, \dots, \lambda_N) = \sum_{i=1}^{N} \lambda_i x_i,$$
其中 $\Delta_N = \left\{ (\lambda_1, \dots, \lambda_N) \in \mathbb{R}^N : \lambda_i \geq 0,\ \sum_{i=1}^{N} \lambda_i \leq 1 \right\}$。

由于 $\Delta_N$ 是紧集，$f$ 是连续的，则 $S$ 是紧集，故完全有界。对任意 $z \in \mathrm{conv}(\{x_n\})$，存在有限凸组合 $z = \sum_{i=1}^{M} \lambda_i x_i$。令
$$z_N = \sum_{i=1}^{N} \lambda_i x_i \in S, \quad \beta = \sum_{i=N+1}^{M} \lambda_i \leq 1,$$
则
$$\|z - z_N\| = \left\| \sum_{i=N+1}^{M} \lambda_i x_i \right\| \leq \beta \cdot \varepsilon \leq \varepsilon.$$
因 $S$ 完全有界，存在有限集 $F \subset S$ 使得 $S \subset \bigcup_{y \in F} B_{\varepsilon}(y)$。于是
$$\mathrm{conv}(\{x_n\}) \subset \bigcup_{y \in F} B_{2\varepsilon}(y).$$
故 $\mathrm{conv}(\{x_n\})$ 完全有界，其闭包 $\overline{\mathrm{conv}}(\{x_n\})$ 亦完全有界。又 $\overline{\mathrm{conv}}(\{x_n\})$ 闭，所以在 Banach 空间中紧。
因此 $C$ 是紧集。



# 22.3
设$1\leq p<q<\infty$ ，按照如下流程证明所有有界线性算子$A:l^{q}\rightarrow l^{p}$ 都是紧的：

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

## 1
由于 $\ell^q$ 是自反空间，紧算子等价于将弱收敛序列映为强收敛序列。因此，只需证明对任意弱收敛于 $0$ 的序列 $(x_n) \subset \ell^q$，有 $\|Ax_n\|_p \to 0$。

## 2
!!! note 回忆： Brezis-Lieb 引理
    设 $(X,\mu)$ 是一个测度空间，$1 \le p < \infty$，$\{f_n\}$ 是 $L^p(\mu)$ 中的函数序列，满足：
    一致有界：$\sup_n \|f_n\|_p < \infty$；
    几乎处处收敛：$f_n(x) \to f(x)$ 对几乎处处 $x \in X$ 成立。
    则有
    $$\lim_{n\to\infty} \left( \|f_n\|_p^p - \|f_n - f\|_p^p \right) = \|f\|_p^p.$$
    
记
$$L = \limsup_{n\to\infty} \|y_n\|_p^p, \quad S = \limsup_{n\to\infty} \|y+y_n\|_p^p.$$
由于 $(y_n)$ 弱收敛，故其范数一致有界，即存在常数 $M > 0$ 使得 $\|y_n\|_p \leq M$ 对所有 $n$ 成立。此外，弱收敛蕴含坐标收敛：对每个坐标指标 $k$，有 $y_n(k) \to 0$。

取子列 $(y_{n_j})$ 使得
$$\lim_{j\to\infty} \|y+y_{n_j}\|_p^p = S.$$
由于 $(y_{n_j})$ 仍弱收敛于 $0$ 且范数有界，可再取子子列（仍记为 $(y_{n_j})$）使得 $\|y_{n_j}\|_p^p$ 收敛到某个数 $\ell \leq L$。在该子子列上，由 Brezis-Lieb 引理（条件满足：$y_{n_j} \to 0$ 逐点，且 $\|y+y_{n_j}\|_p$ 有界），有
$$\lim_{j\to\infty} \left( \|y+y_{n_j}\|_p^p - \|y_{n_j}\|_p^p \right) = \|y\|_p^p.$$
因此
$$S - \ell = \|y\|_p^p \quad \Rightarrow \quad S = \|y\|_p^p + \ell \leq \|y\|_p^p + L.$$

取子列 $(y_{n_k})$ 使得 $\|y_{n_k}\|_p^p \to L$。在该子列上，由 Brezis-Lieb 引理（再取子子列使得 $\|y+y_{n_k}\|_p^p$ 收敛），存在子子列（仍记为 $(y_{n_k})$）满足
$$\lim_{k\to\infty} \left( \|y+y_{n_k}\|_p^p - \|y_{n_k}\|_p^p \right) = \|y\|_p^p.$$
由于 $\|y_{n_k}\|_p^p \to L$，得
$$\lim_{k\to\infty} \|y+y_{n_k}\|_p^p = \|y\|_p^p + L.$$
因此存在原序列的子列使 $\|y+y_n\|_p^p$ 收敛于 $\|y\|_p^p + L$，故
$$S \geq \|y\|_p^p + L.$$

## 3
令 $y = Ax$，$y_n = \lambda Ax_n$，则 $y_n \rightharpoonup 0$。由 (2) 得
$$\limsup_{n \to \infty} \|Ax + \lambda Ax_n\|_p^p = \|Ax\|_p^p + \lambda^p \limsup_{n \to \infty} \|Ax_n\|_p^p.$$
由 $\|A\| = 1$ 有 $\|A(x + \lambda x_n)\|_p \leq \|x + \lambda x_n\|_q$，故
$$\limsup_{n \to \infty} \|Ax + \lambda Ax_n\|_p^p \leq \limsup_{n \to \infty} \|x + \lambda x_n\|_q^p.$$
对 $\ell^q$ 应用 (2)（指数为 $q$）得
$$\limsup_{n \to \infty} \|x + \lambda x_n\|_q^q = \|x\|_q^q + \lambda^q \limsup_{n \to \infty} \|x_n\|_q^q.$$
注意到 $\limsup a_n^p = (\limsup a_n)^p$，因此
$$\limsup \|x + \lambda x_n\|_q^p = \left( \limsup \|x + \lambda x_n\|_q^q \right)^{p/q} = \left( \|x\|_q^q + \lambda^q \limsup \|x_n\|_q^q \right)^{p/q}.$$
代入即得所需不等式。

## 4
取常数 $C \geq \sup_{n \in \mathbb{N}} \|x_n\|_q$（弱收敛序列有界）。由 (3) 及 $\|x\|_q = 1$ 得
$$\|Ax\|_p^p + \lambda^p \limsup_{n \to \infty} \|Ax_n\|_p^p \leq \left( 1 + \lambda^q C^q \right)^{p/q}.$$
结合 $\|Ax\|_p > 1 - \varepsilon$，有 $\|Ax\|_p^p > (1 - \varepsilon)^p$，故
$$\lambda^p \limsup_{n \to \infty} \|Ax_n\|_p^p \leq \left( 1 + \lambda^q C^q \right)^{p/q} - (1 - \varepsilon)^p.$$

## 5
令 $\lambda = C^{-1} \varepsilon^{1/q}$，代入上式得
$$C^{-p} \varepsilon^{p/q} \limsup_{n \to \infty} \|Ax_n\|_p^p \leq (1 + \varepsilon)^{p/q} - (1 - \varepsilon)^p,$$
即
$$\limsup_{n \to \infty} \|Ax_n\|_p^p \leq C^p \varepsilon^{-p/q} \left( (1 + \varepsilon)^{p/q} - (1 - \varepsilon)^p \right).$$
当 $\varepsilon \to 0$ 时，利用展开式
$$(1 + \varepsilon)^{p/q} = 1 + \frac{p}{q} \varepsilon + o(\varepsilon), \quad (1 - \varepsilon)^p = 1 - p \varepsilon + o(\varepsilon),$$
可得
$$(1 + \varepsilon)^{p/q} - (1 - \varepsilon)^p = p \left( \frac{1}{q} + 1 \right) \varepsilon + o(\varepsilon).$$
因此
$$\varepsilon^{-p/q} \left( (1 + \varepsilon)^{p/q} - (1 - \varepsilon)^p \right) = \varepsilon^{1 - p/q} \cdot \frac{(1 + \varepsilon)^{p/q} - (1 - \varepsilon)^p}{\varepsilon} \to 0 \quad (\varepsilon \to 0),$$
因为 $1 - p/q > 0$。故 $\limsup \|Ax_n\|_p^p = 0$，即 $\|Ax_n\|_p \to 0$。