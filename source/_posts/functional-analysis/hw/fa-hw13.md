---
title: 泛函分析第十三次作业
泛函分析第十三次作业tags:
  - math
  - functional analysis
categories:
  - math
  - functional analysis homework
index_img: /img/fa.jpg
banner_img: /img/fa.jpg
excerpt: 泛函分析第十三次作业
abbrlink: 80bfaf41
date: 2025-11-09 10:45:45
---
# 13.1
设$C$是实赋范线性空间$\mathcal{X}$中的一个凸集，并设$x_0 \in \mathrm{int}(C),x_1 \in \partial C,x_2 = m(x_1 − x_0) + x_0$ (m > 1)

证明：$x_2 \notin C$.

## 解答
假设 $x_2 \in C$。由于 $x_0 \in \text{int}(C)$，存在 $r > 0$ 使得开球 $B(x_0, r) \subseteq C$。
由 $x_2$ 的定义，有：
$$x_2 = x_0 + m(x_1 - x_0)$$
整理得：
$$x_1 - x_0 = \frac{1}{m}(x_2 - x_0)$$
因此：
$$x_1 = x_0 + \frac{1}{m}(x_2 - x_0) = \left(1 - \frac{1}{m}\right) x_0 + \frac{1}{m} x_2$$
令 $\lambda = \frac{1}{m}$，则 $0 < \lambda < 1$，且：
$$x_1 = (1 - \lambda) x_0 + \lambda x_2$$
即 $x_1$ 是 $x_0$ 和 $x_2$ 的凸组合。
现在，证明 $x_1 \in \text{int}(C)$。任取 $w \in \mathcal{X}$ 满足 $\|w\| < (1 - \lambda) r$，考虑点 $u = x_1 + w$。则：
$$u = x_1 + w = (1 - \lambda) x_0 + \lambda x_2 + w$$
令 $q = x_0 + \frac{w}{1 - \lambda}$，则：
$$u = (1 - \lambda) q + \lambda x_2$$
由于 $\|w\| < (1 - \lambda) r$，有 $\left\| \frac{w}{1 - \lambda} \right\| < r$，因此 $q \in B(x_0, r) \subseteq C$。又 $x_2 \in C$，且 $C$ 是凸集，故 $u = (1 - \lambda) q + \lambda x_2 \in C$。这表明对任意 $u$ 满足 $\|u - x_1\| < (1 - \lambda) r$，有 $u \in C$，即 $B(x_1, (1 - \lambda) r) \subseteq C$，所以 $x_1 \in \text{int}(C)$。
但已知 $x_1 \in \partial C$，与 $x_1 \in \text{int}(C)$ 矛盾。因此假设错误，必有 $x_2 \notin C$。

# 13.2
设$X$为实赋范线性空间，$A \subset X$为非空凸集，证明：$\bar{A}$是所有$X$的包含$A$的闭半空间之交。

## 解答
记 $S = \{ H \subseteq X : H \text{ 是闭半空间且 } A \subseteq H \}$。则需证明 $\bar{A} = \bigcap S$。

$\bar{A} \subseteq \bigcap S$：
对于任意 $H \in S$，由于 $H$ 是闭集且 $A \subseteq H$，因此 $\bar{A} \subseteq H$。故 $\bar{A} \subseteq \bigcap S$。

 $\bigcap S \subseteq \bar{A}$：
假设 $x \notin \bar{A}$。由于 $A$ 是凸集，$\bar{A}$ 也是凸集。且 $\bar{A}$ 是闭集。根据 Hahn-Banach 定理的严格分离形式，存在连续线性泛函 $f: X \to \mathbb{R}$ 和实数 $\alpha$，使得对任意 $y \in \bar{A}$，有 $f(y) \leq \alpha$，但 $f(x) > \alpha$。
考虑闭半空间 $H = \{ z \in X : f(z) \leq \alpha \}$。由于 $f$ 连续，$H$ 是闭集。且 $A \subseteq \bar{A} \subseteq H$，故 $H \in S$。但 $x \notin H$，因此 $x \notin \bigcap S$。
由逆否命题，$\bigcap S \subseteq \bar{A}$。

# 13.3
设$X,Y$为实赋范线性空间，试证明：

(1) 对任何赋范线性空间Z，由有界线性映射$B:X\times Y\to Z$ 构成的空间$\mathcal{B}(X,Y;Z)$ 中可以定义范数

$$\|B\|:=\sup_{x,y\neq0}\frac{\|B(x,y)\|_Z}{\|x\|_X\|y\|_Y},\ \forall B\in\mathcal{B}(X,Y;Z).$$

(2) 映射$\mathcal{B}(X,Y;Z)\to\mathcal{L}(X,(Y,Z)):B\to(x\mapsto B(x,\cdot))$ 是一个等距同构；

(3) 对每一对$(x,y)\in X\times Y$ 定义线性泛函$x\otimes y\in\mathcal{B}(X,Y;\mathbb{R})^{*}$ 为

$$\langle x\otimes y,B\rangle:=B(x,y),\quad\forall B\in\mathcal{B}(X,Y;Z).$$

它满足$\|x\otimes y\|=\|x\|_X\|y\|_Y$ .（提示：使用Hahn-Banach定理来证明不等式$\left\|x\otimes y\right\|\geq$ $\|x\|_{X}\|y\|_{Y}$ ，即考虑$B:X\times Y\to\mathbb{R}$ ，对合适的元素$x^{*}\in X^{*},y^{*}\in Y^{*}$ 定义$B(x,y):=\langle x^{*},x\rangle\langle y^{*},y\rangle$ ）

(4) 令$X{\otimes}Y\subset{\mathcal{B}}(X,Y;{\mathbb{R}})$ 为最小的包含双线性映射$X{\times}Y\to{\mathcal{B}}(X,Y;{\mathbb{R}})^{*}:(x,y)\mapsto x{\otimes}y$ 的像集的闭子空间，于是对任意赋范线性空间Z，映射$\mathcal{L}(X\otimes Y,Z)\to\mathcal{B}(X,Y;Z):A\mapsto B_{A}$ 

$$B_{A}(x,y):=A(x\otimes y),\forall x\in X,y\in Y,A\in\mathcal{L}(X\otimes Y,Z)$$

是一个等距同构。



## 解答
### 1
考虑空间 $\mathcal{B}(X,Y;Z)$，即从 $X \times Y$ 到 $Z$ 的有界双线性映射。定义范数：
$$\|B\| := \sup_{x,y \neq 0} \frac{\|B(x,y)\|_Z}{\|x\|_X \|y\|_Y}, \quad \forall B \in \mathcal{B}(X,Y;Z).$$
需验证此为范数：

正定性：若 $B = 0$，则 $\|B\| = 0$。反之，若 $\|B\| = 0$，则对任意 $x,y \neq 0$，有 $\|B(x,y)\|_Z = 0$，故 $B = 0$。
齐次性：对任意标量 $\alpha$，有
$$\|\alpha B\| = \sup_{x,y \neq 0} \frac{\|\alpha B(x,y)\|_Z}{\|x\|_X \|y\|_Y} = |\alpha| \sup_{x,y \neq 0} \frac{\|B(x,y)\|_Z}{\|x\|_X \|y\|_Y} = |\alpha| \|B\|.$$

三角不等式：对任意 $B_1, B_2 \in \mathcal{B}(X,Y;Z)$，有
$$\frac{\|(B_1 + B_2)(x,y)\|_Z}{\|x\|_X \|y\|_Y} \leq \frac{\|B_1(x,y)\|_Z}{\|x\|_X \|y\|_Y} + \frac{\|B_2(x,y)\|_Z}{\|x\|_X \|y\|_Y} \leq \|B_1\| + \|B_2\|,$$
取上确界得 $\|B_1 + B_2\| \leq \|B_1\| + \|B_2\|$.

因此，$\|\cdot\|$ 是 $\mathcal{B}(X,Y;Z)$ 上的范数。

### 2

定义映射 $\Phi: \mathcal{B}(X,Y;Z) \to \mathcal{L}(X, \mathcal{L}(Y,Z))$ 为 $\Phi(B) = T_B$，其中 $T_B(x) = B(x, \cdot)$，即 $T_B(x)(y) = B(x,y)$。

线性性：对任意 $x_1, x_2 \in X$ 和标量 $\alpha$，有
$$T_B(\alpha x_1 + x_2) = B(\alpha x_1 + x_2, \cdot) = \alpha B(x_1, \cdot) + B(x_2, \cdot) = \alpha T_B(x_1) + T_B(x_2),$$
故 $T_B$ 线性。
有界性：计算范数：
$$\|T_B\| = \sup_{x \neq 0} \frac{\|T_B(x)\|}{\|x\|_X} = \sup_{x \neq 0} \frac{1}{\|x\|_X} \sup_{y \neq 0} \frac{\|B(x,y)\|_Z}{\|y\|_Y} = \sup_{x,y \neq 0} \frac{\|B(x,y)\|_Z}{\|x\|_X \|y\|_Y} = \|B\|,$$
故 $\|T_B\| = \|B\|$，即 $\Phi$ 是等距。
满射：对任意 $T \in \mathcal{L}(X, \mathcal{L}(Y,Z))$，定义 $B(x,y) = T(x)(y)$，则 $B$ 双线性且
$$\|B(x,y)\|_Z \leq \|T(x)\| \|y\|_Y \leq \|T\| \|x\|_X \|y\|_Y,$$
故 $B$ 有界且 $\|B\| \leq \|T\|$。由等距性 $\|T\| = \|B\|$，故 $\Phi$ 满射。
单射：若 $T_B = T_{B'}$，则对任意 $x,y$，有 $B(x,y) = B'(x,y)$，故 $B = B'$.

因此，$\Phi$ 是等距同构。


### 3
定义 $x \otimes y \in \mathcal{B}(X,Y;\mathbb{R})^*$ 为 $\langle x \otimes y, B \rangle = B(x,y)$。需证 $\|x \otimes y\| = \|x\|_X \|y\|_Y$。

上界：对任意 $B \neq 0$，有
$$|\langle x \otimes y, B \rangle| = |B(x,y)| \leq \|B\| \|x\|_X \|y\|_Y,$$
故
$$\|x \otimes y\| = \sup_{B \neq 0} \frac{|B(x,y)|}{\|B\|} \leq \|x\|_X \|y\|_Y.$$

下界：使用 Hahn-Banach 定理。存在 $x^* \in X^*$ 和 $y^* \in Y^*$ 使得 $\|x^*\| = 1$，$\langle x^*, x \rangle = \|x\|_X$，且 $\|y^*\| = 1$，$\langle y^*, y \rangle = \|y\|_Y$。定义 $B(u,v) = \langle x^*, u \rangle \langle y^*, v \rangle$，则 $B$ 双线性且
$$|B(u,v)| \leq \|u\|_X \|v\|_Y,$$
故 $\|B\| \leq 1$。同时，
$$B(x,y) = \|x\|_X \|y\|_Y.$$
因此，
$$\|x \otimes y\| \geq \frac{|B(x,y)|}{\|B\|} \geq \|x\|_X \|y\|_Y,$$
其中用到了 $\|B\| \leq 1$。

综上，$\|x \otimes y\| = \|x\|_X \|y\|_Y$.

### 4
定义 $X \otimes Y$ 为 $\mathcal{B}(X,Y;\mathbb{R})^*$ 中包含所有 $x \otimes y$ 的最小的闭子空间。定义映射 $\Psi: \mathcal{L}(X \otimes Y, Z) \to \mathcal{B}(X,Y;Z)$ 为 $\Psi(A) = B_A$，其中 $B_A(x,y) = A(x \otimes y)$。

双线性性与有界性：由于 $x \otimes y$ 在 $x$ 和 $y$ 上线性，且 $A$ 线性，故 $B_A$ 双线性。且
$$\|B_A(x,y)\|_Z = \|A(x \otimes y)\|_Z \leq \|A\| \|x \otimes y\| = \|A\| \|x\|_X \|y\|_Y,$$
故 $\|B_A\| \leq \|A\|$。
等距性：需证 $\|A\| = \|B_A\|$。已证 $\|B_A\| \leq \|A\|$，现证 $\|A\| \leq \|B_A\|$。对任意 $u \in X \otimes Y$ 和 $z^* \in Z^*$ 满足 $\|z^*\| = 1$，定义 $B_{z^*}(x,y) = \langle z^*, A(x \otimes y) \rangle = \langle z^*, B_A(x,y) \rangle$。则
$$\|B_{z^*}\| = \sup_{x,y \neq 0} \frac{|\langle z^*, B_A(x,y) \rangle|}{\|x\|_X \|y\|_Y} \leq \|B_A\|.$$
对于 $u \in X \otimes Y$，有 $\langle z^*, A(u) \rangle = \langle u, B_{z^*} \rangle$，故
$$|\langle z^*, A(u) \rangle| = |\langle u, B_{z^*} \rangle| \leq \|u\| \|B_{z^*}\| \leq \|B_A\| \|u\|.$$
因此，
$$\|A(u)\|_Z = \sup_{\|z^*\|=1} |\langle z^*, A(u) \rangle| \leq \|B_A\| \|u\|,$$
故 $\|A\| \leq \|B_A\|$。综上，$\|A\| = \|B_A\|$，即 $\Psi$ 等距。
双射性：

满射：对任意 $B \in \mathcal{B}(X,Y;Z)$，定义 $A_B$ 在 $\operatorname{span}\{x \otimes y\}$ 上为 $A_B(x \otimes y) = B(x,y)$。由双线性性，$A_B$ 线性，且
$$\|A_B(x \otimes y)\|_Z = \|B(x,y)\|_Z \leq \|B\| \|x\|_X \|y\|_Y = \|B\| \|x \otimes y\|,$$
故 $A_B$ 有界，可唯一延拓至 $X \otimes Y$，满足 $B_{A_B} = B$。
单射：若 $B_A = 0$，则 $A(x \otimes y) = 0$ 对所有 $x,y$ 成立，故 $A = 0$。



因此，$\Psi$ 是等距同构。

# 13.4
设 $X$ 是Banach空间， $Y\subset X$ 为闭子空间，若 $Y$ 和 $X/Y$ 都是自反的，证明 $X$ 也是自反的。

## 解答
考虑自然嵌入 $J_X: X \to X''$
取任意 $x'' \in X''$。考虑商映射 $\pi: X \to X/Y$，它诱导对偶映射 $\pi': (X/Y)' \to X'$ 和双对偶映射 $\pi'': X'' \to (X/Y)''$。由于 $X/Y$ 自反，存在唯一 $z \in X/Y$ 使得 $\pi''(x'') = J_{X/Y}(z)$。取 $x \in X$ 满足 $\pi(x) = z$。
对任意 $f \in Y^\perp$，存在 $g \in (X/Y)'$ 使得 $f = g \circ \pi$。计算：
$$(x'' - J_X(x))(f) = x''(f) - f(x) = \pi''(x'')(g) - g(\pi(x)) = J_{X/Y}(z)(g) - g(z) = 0,$$
故 $x'' - J_X(x) \in (Y^\perp)^\perp$。由于 $Y$ 自反，有 $(Y^\perp)^\perp = J_X(Y)$，因此存在 $y \in Y$ 使得 $x'' - J_X(x) = J_X(y)$，即 $x'' = J_X(x + y)$。所以 $J_X$ 是满射，$X$ 自反。

# 13.5
设 $1 < p < \infty$， 证明 $l^p$ 是自反的

## 解答
设 $1 < p < \infty$，则 $(\ell^p)' = \ell^q$ 其中 $\frac{1}{p} + \frac{1}{q} = 1$。进一步，$(\ell^p)'' = (\ell^q)' = \ell^p$。自然嵌入 $J: \ell^p \to (\ell^p)''$ 是等距同构，故 $\ell^p$ 自反。