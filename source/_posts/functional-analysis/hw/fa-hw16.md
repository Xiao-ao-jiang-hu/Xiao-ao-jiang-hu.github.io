---
title: 泛函分析第十六次作业
tags:
  - math
  - functional analysis
categories:
  - math
  - functional analysis homework
index_img: /img/fa.jpg
banner_img: /img/fa.jpg
excerpt: 泛函分析第十六次作业
abbrlink: be52469f
date: 2025-11-20 22:45:21
---
# 16.1
> 本题说明Hilbert空间中存在弱闭集，其弱闭包不等于其强闭包。

设H为无穷维可分实Hilbert空间，$(e_n)_{n\in\mathbb{N}}$ 为一组标准正交基，证明:
1. 序列$(e_n)_{n\in\mathbb{N}}$ 弱收敛于0;

2. 集合$A:=\{\sqrt{n}e_n:n\in\mathbb{N}\}$ 是序列弱闭的，但A的弱闭包包含0；
提示：令$U\subset H$ 为0的弱开邻域，证明存在$\epsilon>0$ 以及$y_{1},\cdots,y_{m}\in H$ 使得
$$V:=\{x\in H:\max_{i=1,\cdots,m}|\langle x,y_i\rangle|<\epsilon\}\subset U.$$
证明序列$z_{n}:=\max_{i=1,\cdots,m}\left|\left\langle e_{n},y_{i}\right\rangle\right|$ 是平方可加的，并推出$V\cap A\neq\varnothing$ 

3. $A:=\{\sqrt{n}e_n:n\in\mathbb{N}\}$ 中的任何子列均不弱收敛于0.

## 解答
### 1
由于$H$是Hilbert空间，于是由Reisz表示定理，$\forall f \in H^*, !\exists y \in H \, s.t. \, f(x) = <x, y>, \, \forall x \in H$。又由于$(e_n)_{n\in\mathbb{N}}$为标准正交基，故有Parseval等式：
$$\sum_{n=1}^{\infty} |<e_n, y>|^2 = ||y||^2 < +\infty, \forall y \in H$$
因此$|<e_n, y>| \to 0$，即$e_n \rightharpoonup 0$。

### 2
任取$A$中的弱收敛子列$\sqrt{n_k}e_{n_k} \rightharpoonup x$，则其一定有界。设其弱收敛为$x$，需要证明$x \in A$。由于$\sqrt{n_k}e_{n_k}$有界，故存在$M>0$使得$||\sqrt{n_k}e_{n_k}|| \leq M$，即$n_k \leq M^2$。因此，$n_k$只能取有限个值，故$\sqrt{n_k}e_{n_k}$只能取有限个值，因此其弱极限$x$也只能是这些值中的一个，即$x \in A$。

由弱拓扑的定义：在Hilbert空间$H$中，0的任意弱开邻域$U$都可以表示为
$$U = \{x \in H : |\langle x, y_i \rangle| < \epsilon, i = 1, 2, \ldots, m\}$$
其中$y_1, y_2, \ldots, y_m \in H$，$\epsilon > 0$。
设$z_n := \max_{i=1,\ldots,m} |\langle e_n, y_i \rangle|$
于是有 $$z_n^2 \leq \sum_{i=1, \ldots m} |\langle e_n, y_i \rangle|^2$$
对$n$求和，得到
$$\sum_{n=1}^{\infty} z_n^2 \leq \sum_{i=1}^{m} \sum_{n=1}^{\infty} |\langle e_n, y_i \rangle|^2 = \sum_{i=1}^{m} ||y_i||^2 < +\infty$$
因此，$z_n$是平方可加的。由Cauchy-Schwarz不等式，存在常数$C > 0$使得
$$\sum_{n=1}^{\infty} z_n \leq C$$
因此，存在某个$n_0$使得$z_{n_0} < \epsilon$，即$e_{n_0} \in U$。由于$A$中存在$\sqrt{n_0} e_{n_0}$，故$A \cap U \neq \varnothing$。
由于$U$是任意的弱开邻域，故0属于$A$的弱闭包。

### 3
设 $(\sqrt{n_k} e_{n_k})$ 是 $A$ 的子列。构造 $y \in H$ 如下：
$$y = \sum_{k=1}^\infty \frac{1}{\sqrt{n_k}} e_{n_k}.$$
由于 $n_k \to \infty$，可选 $n_k$ 使得 $\sum 1/n_k < \infty$（如 $n_k = k^2$），则 $\|y\|^2 = \sum 1/n_k < \infty$，故 $y \in H$。
此时：
$$\langle \sqrt{n_k} e_{n_k}, y \rangle = \sqrt{n_k} \cdot \frac{1}{\sqrt{n_k}} = 1 \not\to 0.$$
因此，该子列不弱收敛于 0。
一般地，对任意子列 $(\sqrt{n_k} e_{n_k})$，总可构造 $y \in H$ 使得 $\langle \sqrt{n_k} e_{n_k}, y \rangle \not\to 0$，故 $A$ 中无子列弱收敛于 0。



# 16.2
1. $\ell^1$中的标准基$e_{n}=\{\delta_{in}\}_{i\geq1}$ 不弱收敛于0；

2. 视$\ell^1$为$c_0$的对偶空间，则标准基$e_{n}$ 弱\*收敛于0；

3. Schur 定理：$\ell^1$中的序列弱收敛当且仅当它收敛（于0）。

## 解答
### 1
取 $f \in l^\infty$ 为常序列 $f = (1, 1, 1, \ldots)$，则
$$f(e_n) = \sum_{i=1}^\infty f_i (e_n)_i = f_n = 1, \quad \forall n \geq 1.$$
因此，$f(e_n) = 1$ 对所有 $n$，不收敛于 0。

### 2
任取 $x = (x_i) \in c_0$，则有 $$e_n(x) = x_n \to 0 \quad \text{当 } n \to \infty.$$
因此，$e_n \xrightarrow{w^*} 0$。

### 3
只用证弱收敛蕴含强收敛。
令 $\{x_n\}$ 是 $\ell^1$ 中的序列，且弱收敛于 0，即对每个 $f \in \ell^\infty$，有 $f(x_n) \to 0$。需要证明 $\|x_n\|_1 \to 0$。

假设 $\|x_n\|_1$ 不收敛于 0。则存在 $\epsilon > 0$ 和子列 $\{x_{n_k}\}$ 使得 $\|x_{n_k}\|_1 \geq \epsilon$ 对所有 $k$。为简便起见，不妨假设整个序列满足 $\|x_n\|_1 \geq \epsilon$ 对所有 $n$（否则取子列）。
由于 $x_n \in \ell^1$，对每个 $n$，存在有限集 $A_n$ 使得 $\sum_{j \notin A_n} |x_n(j)| < \frac{\epsilon}{4}$，从而 $\sum_{j \in A_n} |x_n(j)| > \|x_n\|_1 - \frac{\epsilon}{4} \geq \epsilon - \frac{\epsilon}{4} = \frac{3\epsilon}{4}$。
现在构造子列 $\{x_{n_k}\}$ 和集合 $B_k$ 满足 $B_k$ 是有限集，且 $B_k \subseteq A_{n_k}$，$B_k$ 两两不交，$\sum_{j \in B_k} |x_{n_k}(j)| > \frac{\epsilon}{2}$.


取 $n_1$，令 $B_1 = A_{n_1}$，则 $\sum_{j \in B_1} |x_{n_1}(j)| > \frac{3\epsilon}{4} > \frac{\epsilon}{2}$。
假设已选 $n_1, \dots, n_{k-1}$ 和 $B_1, \dots, B_{k-1}$。令 $C = \bigcup_{i=1}^{k-1} B_i$，则 $C$ 为有限集。由于弱收敛于 0，对每个 $j \in C$，有 $x_n(j) \to 0$，故存在 $N$ 使得当 $n > N$ 时，对所有 $j \in C$，有 $|x_n(j)| < \frac{\epsilon}{4 |C|}$（若 $C$ 为空，则取 $N=0$）。从而 $\sum_{j \in C} |x_n(j)| < \frac{\epsilon}{4}$。
选 $n_k > N$，则 $\sum_{j \in A_{n_k}} |x_{n_k}(j)| > \frac{3\epsilon}{4}$，且 $\sum_{j \in A_{n_k} \cap C} |x_{n_k}(j)| \leq \sum_{j \in C} |x_{n_k}(j)| < \frac{\epsilon}{4}$，故 $\sum_{j \in A_{n_k} \setminus C} |x_{n_k}(j)| > \frac{3\epsilon}{4} - \frac{\epsilon}{4} = \frac{\epsilon}{2}$。令 $B_k = A_{n_k} \setminus C$，则 $B_k$ 与 $C$ 不交，故与 $B_1, \dots, B_{k-1}$ 不交，且 $\sum_{j \in B_k} |x_{n_k}(j)| > \frac{\epsilon}{2}$.

定义 $f \in \ell^\infty$ 如下：对每个 $j \in \mathbb{N}$，若 $j \in B_k$ 对某个 $k$，则令 $f_j = \operatorname{sign}(x_{n_k}(j))$；否则令 $f_j = 0$。由于 $B_k$ 两两不交，$f$ 是良定义的，且 $|f_j| \leq 1$，故 $f \in \ell^\infty$。
对每个 $k$，有
$$f(x_{n_k}) = \sum_j f_j x_{n_k}(j) = \sum_{j \in B_k} \operatorname{sign}(x_{n_k}(j)) x_{n_k}(j) = \sum_{j \in B_k} |x_{n_k}(j)| > \frac{\epsilon}{2}.$$
因此 $f(x_{n_k}) \not\to 0$，与弱收敛于 0 矛盾。
故假设错误，必有 $\|x_n\|_1 \to 0$，即 $x_n$ 强收敛于 0。


# 16.3
若 $(X, \mathscr{U}_{\mathscr{F}})$ 是使得 $\mathscr{F}$ 中所有线性泛函连续的最弱拓扑，$\mathscr{F}$ 是线性空间，$E \subseteq X$ 是线性子空间。证明：

1. $E$ 是闭集当且仅当 $\forall x \in X,\ x \in E \Leftrightarrow \Lambda(x) = 0$，其中 $\Lambda \in \mathscr{F}$ 满足 $E \subseteq \ker \Lambda$

2. $E$ 是稠密的当且仅当 $\forall \Lambda \in \mathscr{F}$，满足 $E \subseteq \ker \Lambda$ 则 $\Lambda \equiv 0$。

## 解答
使讲义定理中的第二部分：
$E$ 是闭集当且仅当 $E = \overline{E}$。由闭包公式：
$$\overline{E} = \left\{ x \in X : \forall \Lambda \in \mathscr{F},\ E \subseteq \ker(\Lambda) \Rightarrow \Lambda(x) = 0 \right\}.$$
因此，
$$E = \overline{E} \iff \forall x \in X,\ x \in E \Leftrightarrow \left( \forall \Lambda \in \mathscr{F},\ E \subseteq \ker(\Lambda) \Rightarrow \Lambda(x) = 0 \right).$$
即 $E$ 是闭集当且仅当对任意 $x \in X$，$x \in E$ 等价于所有在 $E$ 上为零的 $\Lambda \in \mathscr{F}$ 在 $x$ 处也为零。

$E$ 是稠密集当且仅当 $\overline{E} = X$。由闭包公式：
$$\overline{E} = \bigcap_{\Lambda \in \mathscr{F},\, E \subset \ker(\Lambda)} \ker(\Lambda) = X.$$
这意味着对任意 $\Lambda \in \mathscr{F}$，若 $E \subseteq \ker(\Lambda)$，则 $\ker(\Lambda) = X$，即 $\Lambda \equiv 0$。反之，若对任意 $\Lambda \in \mathscr{F}$ 满足 $E \subseteq \ker(\Lambda)$ 都有 $\Lambda \equiv 0$，则上述交为 $X$，故 $E$ 稠密。