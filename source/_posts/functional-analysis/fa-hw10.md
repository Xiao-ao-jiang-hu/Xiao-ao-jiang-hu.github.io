---
title: 泛函分析第十次作业
tags:
  - math
  - functional analysis
categories:
  - math
  - functional analysis
excerpt: 泛函分析第十次作业
abbrlink: a59951ae
date: 2025-10-31 01:25:30
---
# 10.1
考虑开集$\Omega\subset\mathbb{R}^{2},\;\Omega=\{x=(x_{1},x_{2})||x_{1}<1,x_{2}\in\mathbb{R}\},\Gamma=\{(-1,x_{2}),x_{2}\in\mathbb{R}\}$ 


(1).证明：存在常数$C>0$ 使得

$$\|f\|_{L^{2}(\Omega)}\leq C\|\nabla f\|_{L^{2}(\Omega)},\forall f\in\{g\in H^{1}(\Omega)\cap C^{1}(\overline{{\Omega}})|g|_{\Gamma}=0\}.$$

(2).证明：存在常数$C>0$ 使得对任意的$f\in H^{1}(\Omega)\cap C^{1}(\overline{\Omega})$ ,有

$$\|f\|_{L^{2}(\partial\Omega)}:=\|f(-1,\cdot)\|_{L^{2}(\mathbb{R})}+\|f(1,\cdot)\|_{L^{2}(\mathbb{R})}\leq C\|f\|_{H^{1}(\Omega)}.$$

(3).假设$H^{1}(\Omega)\cap C^{1}(\overline{\Omega}) 在 H^{1}(\Omega)$ 中稠密，证明：存在唯一的线性映射$Tr:H^{1}(\Omega)\rightarrow$ $L^{2}(\partial\Omega)$ 使得 $Tr(f)=f|_{\partial\Omega},\forall f\in H^1(\Omega)\cap C^1(\overline{\Omega})$ 且

$$\|T r(f)\|_{L^{2}(\partial\Omega)}\leq C\|f\|_{H^{1}(\Omega)}$$

(4). Poincare不等式是否可以延伸至 $f\in\{g\in H^{1}(\Omega)|T r(g)|_{\Gamma}=0\}?$ 

## 解答
### 1
$$\int_{\Omega} f(x_1, x_2)^2 \, dx = \int_{\mathbb{R}} \int_{-1}^{1} f(x_1, x_2)^2 \, dx_1 dx_2\\
= \int_{\mathbb{R}} \int_{-1}^{1} \left( \int_{-1}^{x_1} \partial_1 f(t, x_2) \, dt \right)^2 dx_1 dx_2 \\
\leq \int_{\mathbb{R}} \int_{-1}^{1} (x_1 + 1) \int_{-1}^{1} \partial_1^2 f(t, x_2) \, dt dx_1 dx_2\\
\leq 4 \int_{\mathbb{R}} \int_{-1}^{1} \partial_1^2 f(t, x_2) \, dt dx_2\\
= 4 \| \partial_1^2 f \|_{L^2(\Omega)}^2 \leq 4 \| \nabla f \|_{L^2(\Omega)}^2$$

### 2
由三角不等式：
$$|f(-1, x_2)| \leq  |f(0, x_2)| + \int_{-1}^{0} \left| \frac{\partial f}{\partial x_1} \right|  dx_1,$$
$$|f(1, x_2)|  \leq  |f(0, x_2)| + \int_{0}^{1} \left| \frac{\partial f}{\partial x_1} \right|  dx_1.$$

两边平方：
$$|f(-1, x_2)|^2 \leq 2 |f(0, x_2)|^2 + 2 \left( \int_{-1}^{0} \left| \frac{\partial f}{\partial x_1} \right|  dx_1 \right)^2 \leq 2 |f(0, x_2)|^2 + 2 \int_{-1}^{0} \left| \frac{\partial f}{\partial x_1} \right|^2  dx_1,$$
$$|f(1, x_2)|^2 \leq 2 |f(0, x_2)|^2 + 2 \left( \int_{0}^{1} \left| \frac{\partial f}{\partial x_1} \right|  dx_1 \right)^2 \leq 2 |f(0, x_2)|^2 + 2 \int_{0}^{1} \left| \frac{\partial f}{\partial x_1} \right|^2  dx_1.$$

得到

$$\int_{-\infty}^{\infty} |f(-1, x_2)|^2  dx_2 + \int_{-\infty}^{\infty} |f(1, x_2)|^2  dx_2 \leq 4 \int_{-\infty}^{\infty} |f(0, x_2)|^2  dx_2 + 2 \int_{-\infty}^{\infty} \int_{-1}^{1} \left| \frac{\partial f}{\partial x_1} \right|^2  dx_1  dx_2.$$

即：
$$\|f(-1, \cdot)\|_{L^2(\mathbb{R})}^2 + \|f(1, \cdot)\|_{L^2(\mathbb{R})}^2 \leq 4 \|f(0, \cdot)\|_{L^2(\mathbb{R})}^2 + 2 \left\| \frac{\partial f}{\partial x_1} \right\|_{L^2(\Omega)}^2$$

估计 $\|f(0, \cdot)\|_{L^2(\mathbb{R})}^2$：
$$\|f(0, \cdot)\|_{L^2(\mathbb{R})}^2 \leq \|f\|_{L^2(\Omega)}^2 + \left\| \frac{\partial f}{\partial x_1} \right\|_{L^2(\Omega)}^2 \leq \|f\|_{H^1(\Omega)}^2,$$
且：
$$\left\| \frac{\partial f}{\partial x_1} \right\|_{L^2(\Omega)}^2 \leq \|\nabla f\|_{L^2(\Omega)}^2 \leq \|f\|_{H^1(\Omega)}^2.$$
代入得：
$$\|f(-1, \cdot)\|_{L^2(\mathbb{R})}^2 + \|f(1, \cdot)\|_{L^2(\mathbb{R})}^2 \leq 4 \|f\|_{H^1(\Omega)}^2 + 2 \|f\|_{H^1(\Omega)}^2 = 6 \|f\|_{H^1(\Omega)}^2.$$
因此：
$$\|f\|_{L^2(\partial\Omega)} = \|f(-1, \cdot)\|_{L^2(\mathbb{R})} + \|f(1, \cdot)\|_{L^2(\mathbb{R})} \leq 2 \sqrt{6} \|f\|_{H^1(\Omega)},$$


### 3
定义子空间 $X = H^1(\Omega) \cap C^1(\overline{\Omega})$，其在 $H^1(\Omega)$ 中稠密（由假设）。定义算子 $T: X \to L^2(\partial\Omega)$ 为 $T(f) = f|_{\partial\Omega}$，其中 $f|_{\partial\Omega}$ 是 $f$ 在边界 $\partial\Omega = \{x_1 = -1\} \cup \{x_1 = 1\}$ 上的限制。由部分 (2)，存在常数 $C > 0$ 使得：
$$\|T(f)\|_{L^2(\partial\Omega)} \leq C \|f\|_{H^1(\Omega)}, \quad \forall f \in X.$$
因此，$T$ 是定义在稠密子空间 $X$ 上的有界线性算子，从 Banach 空间 $H^1(\Omega)$ 到 Banach 空间 $L^2(\partial\Omega)$（因为 $\partial\Omega$ 是两条实直线，$L^2(\partial\Omega)$ 是完备的）。
由有界线性算子的延拓定理，$T$ 可以唯一地延拓到整个 $H^1(\Omega)$ 上的有界线性算子 $\mathrm{Tr}: H^1(\Omega) \to L^2(\partial\Omega)$，满足：

$\mathrm{Tr}(f) = T(f) = f|_{\partial\Omega}$ 对所有 $f \in X$，
$\|\mathrm{Tr}(f)\|_{L^2(\partial\Omega)} \leq C \|f\|_{H^1(\Omega)}$ 对所有 $f \in H^1(\Omega)$（延拓保持算子范数，故常数 $C$ 不变）。

唯一性：若存在另一个有界线性算子 $S: H^1(\Omega) \to L^2(\partial\Omega)$ 满足 $S(f) = f|_{\partial\Omega}$ 对所有 $f \in X$，则由稠密性，$S = \mathrm{Tr}$ 在 $H^1(\Omega)$ 上成立。


### 4
考虑任意 $f \in H^1(\Omega)$ 满足 $\mathrm{Tr}(f)|_{\Gamma} = 0$。由迹的定义，$\mathrm{Tr}(f)|_{\Gamma} = f|_{\Gamma}$ 在 $L^2(\Gamma)$ 中，且 $\mathrm{Tr}(f)|_{\Gamma} = 0$ 意味着 $\|f(-1, \cdot)\|_{L^2(\mathbb{R})} = 0$，即 $f(-1, x_2) = 0$ 对几乎所有 $x_2 \in \mathbb{R}$.
由 Fubini 定理，对几乎所有 $x_2 \in \mathbb{R}$，函数 $h_{x_2}(x_1) = f(x_1, x_2)$ 属于 $H^1(-1, 1)$，且 $h_{x_2}(-1) = 0$。应用一维 Poincaré 不等式：
$$\int_{-1}^{1} |h_{x_2}(x_1)|^2  dx_1 \leq 4 \int_{-1}^{1} \left| \frac{\partial h_{x_2}}{\partial x_1} \right|^2  dx_1 = 4 \int_{-1}^{1} \left| \frac{\partial f}{\partial x_1} \right|^2  dx_1.$$
对 $x_2$ 积分：
$$\|f\|_{L^2(\Omega)}^2 = \int_{-\infty}^{\infty} \int_{-1}^{1} |f|^2  dx_1  dx_2 \leq 4 \int_{-\infty}^{\infty} \int_{-1}^{1} \left| \frac{\partial f}{\partial x_1} \right|^2  dx_1  dx_2 \leq 4 \int_{\Omega} |\nabla f|^2  dx = 4 \|\nabla f\|_{L^2(\Omega)}^2.$$
取平方根：
$$\|f\|_{L^2(\Omega)} \leq 2 \|\nabla f\|_{L^2(\Omega)}.$$
因此，Poincaré 不等式可以延伸至 $f \in \{g \in H^1(\Omega) | \mathrm{Tr}(g)|_{\Gamma} = 0\}$。

# 10.2
考虑方程

$$-u''+\alpha u=f,x\in(0,1);u(0)=0,u'(1)=b,f\in L^2((0,1)),\alpha\geq0,$$

的弱形式：$\forall v\in\overline{H}:=\{g\in H^1((0,1))|g(0)=0\}$ 

$$\int_{0}^{1}u^{\prime}v^{\prime}d x+\alpha\int_{0}^{1}u v d x=\int_{0}^{1}f v d x+b v(1).$$

利用Lax-Milgram定理，说明方程在弱形式下有唯一解.

## 解答
定义双线性形式 $a: \overline{H} \times \overline{H} \to \mathbb{R}$ 和线性泛函 $L: \overline{H} \to \mathbb{R}$ 如下：
$$a(u, v) = \int_{0}^{1} u' v'  dx + \alpha \int_{0}^{1} u v  dx, \quad L(v) = \int_{0}^{1} f v  dx + b v(1).$$

应用 Lax-Milgram 定理只需证明：
1. $V = \overline{H}$ 是一个 Hilbert 空间。
2. $a(\cdot, \cdot)$ 是连续的。
3. $a(\cdot, \cdot)$ 是强制的。
4. $L(\cdot)$ 是连续的。

### 验证 $\overline{H}$ 是 Hilbert 空间

$H^1((0,1))$ 是 Sobolev 空间，定义为 $\{ g \in L^2((0,1)) \mid g' \in L^2((0,1)) \}$，配备范数 $\|g\|_{H^1} = \left( \|g\|_{L^2}^2 + \|g'\|_{L^2}^2 \right)^{1/2}$。这是一个 Hilbert 空间。
$\overline{H} = \{ g \in H^1((0,1)) \mid g(0) = 0 \}$ 是 $H^1((0,1))$ 的子空间。由于一维 Sobolev 嵌入 $H^1((0,1)) \subset C([0,1])$ 是连续的，边界值 $g(0)$ 是有定义的，且映射 $g \mapsto g(0)$ 是连续线性泛函。因此，$\overline{H}$ 是其核，故为闭子空间。闭子空间完备，因此 $\overline{H}$ 是 Hilbert 空间。

### 验证 $a(\cdot, \cdot)$ 的连续性
只需证明有界：
$$|a(u, v)| = \left| \int_0^1 u' v'  dx + \alpha \int_0^1 u v  dx \right| \leq \int_0^1 |u' v'|  dx + \alpha \int_0^1 |u v|  dx$$
由 Cauchy-Schwarz 不等式：
$$\int_0^1 |u' v'|  dx \leq \|u'\|_{L^2} \|v'\|_{L^2} \leq \|u\|_{H^1} \|v\|_{H^1}, \quad \int_0^1 |u v|  dx \leq \|u\|_{L^2} \|v\|_{L^2} \leq \|u\|_{H^1} \|v\|_{H^1}.$$
因此，
$$|a(u, v)| \leq \|u'\|_{L^2} \|v'\|_{L^2} + \alpha \|u\|_{L^2} \|v\|_{L^2} \leq (1 + \alpha) \|u\|_{H^1} \|v\|_{H^1}.$$
取 $M = 1 + \alpha$ 有限，连续性得证。

### 验证 $a(\cdot, \cdot)$ 的强制性
$$a(u, u) = \int_0^1 (u')^2  dx + \alpha \int_0^1 u^2  dx = \|u'\|_{L^2}^2 + \alpha \|u\|_{L^2}^2.$$
由于 $u(0) = 0$ ，应用 Poincaré 不等式：存在常数 $C > 0$ 使得
$$\|u\|_{L^2}^2 \leq C^2 \|u'\|_{L^2}^2, \quad \text{其中 } C = 1.$$
这是因为 $u(x) = \int_0^x u'(t)  dt$，故由 Cauchy-Schwarz：
$$|u(x)| \leq \int_0^x |u'(t)|  dt \leq \|u'\|_{L^2} \|1\|_{L^2} = \|u'\|_{L^2},$$
从而
$$\|u\|_{L^2}^2 = \int_0^1 u(x)^2  dx \leq \int_0^1 (\|u'\|_{L^2})^2  dx = \|u'\|_{L^2}^2.$$
因此，$\|u\|_{H^1}^2 = \|u\|_{L^2}^2 + \|u'\|_{L^2}^2 \leq \|u'\|_{L^2}^2 + \|u'\|_{L^2}^2 = 2 \|u'\|_{L^2}^2$，即
$$\|u'\|_{L^2}^2 \geq \frac{1}{2} \|u\|_{H^1}^2.$$
于是，
$$a(u, u) = \|u'\|_{L^2}^2 + \alpha \|u\|_{L^2}^2 \geq \|u'\|_{L^2}^2 \geq \frac{1}{2} \|u\|_{H^1}^2.$$
取 $\gamma = \frac{1}{2} > 0$，强制性得证

### 验证 $L(\cdot)$ 的连续性
固定 $v, w \in \overline{H}$ 和标量 $c$，有：
$$L(v + w) = \int_0^1 f (v + w)  dx + b (v + w)(1) = \int_0^1 f v  dx + b v(1) + \int_0^1 f w  dx + b w(1) = L(v) + L(w),$$
$$L(c v) = \int_0^1 f (c v)  dx + b (c v)(1) = c \cdot L(v).$$
因此 $L$ 是线性的。

$$|L(v)| = \left| \int_0^1 f v  dx + b v(1) \right| \leq \left| \int_0^1 f v  dx \right| + |b| |v(1)|.$$
由 Cauchy-Schwarz：
$$\left| \int_0^1 f v  dx \right| \leq \|f\|_{L^2} \|v\|_{L^2} \leq \|f\|_{L^2} \|v\|_{H^1}.$$
由 Sobolev 嵌入 $H^1((0,1)) \subset C([0,1])$（连续嵌入），存在常数 $K > 0$ 使得 $\|v\|_{C([0,1])} \leq K \|v\|_{H^1}$。取 $K = 1$ ，有
$$|v(1)| \leq \|v\|_{C([0,1])} \leq \|v\|_{H^1}.$$
因此，
$$|L(v)| \leq \|f\|_{L^2} \|v\|_{H^1} + |b| \|v\|_{H^1} = (\|f\|_{L^2} + |b|) \|v\|_{H^1}.$$
取 $C_L = \|f\|_{L^2} + |b|$，连续性得证。

# 10.3
设$H$是Hilbert空间，$A\in\mathcal{L}(H)$ 并且存在$m>0$ 使得

$$|\langle A x,x\rangle|\geq m\|x\|^{2},\forall x\in H.$$

证明：存在$A^{-1}\in\mathcal{L}(H)$ 


## 解答
考虑 Hilbert 空间 $H$ 上的共轭双线性形式 $a: H \times H \to \mathbb{C}$（或 $\mathbb{R}$）定义为：  
$$
a(x, y) = \langle x, Ay \rangle, \quad \forall x, y \in H.
$$  
需验证 $a$ 满足 Lax-Milgram 定理的条件：

1. 有界性：  
   因 $A \in \mathcal{L}(H)$，存在常数 $\|A\| > 0$ 使得：  
   $$
   |a(x, y)| = |\langle x, Ay \rangle| \leq \|x\| \cdot \|Ay\| \leq \|A\| \|x\| \|y\|, \quad \forall x, y \in H.
   $$  
   故 $a$ 有界。

2. 强制性：  
   由给定条件 $|\langle Ax, x \rangle| \geq m \|x\|^2$，并利用内积性质 $\langle x, Ax \rangle = \overline{\langle Ax, x \rangle}$，得：  
   $$
   |a(x, x)| = |\langle x, Ax \rangle| = |\langle Ax, x \rangle| \geq m \|x\|^2, \quad \forall x \in H.
   $$  
   故 $a$ 强制。

由 Lax-Milgram 定理，存在唯一可逆算子 $B \in \mathcal{B}(H)$（即有界线性算子）使得：  
$$
a(x, y) = \langle x, By \rangle, \quad \forall x, y \in H.
$$  
代入 $a$ 的定义：  
$$
\langle x, Ay \rangle = \langle x, By \rangle, \quad \forall x, y \in H.
$$  
取 $x = (A - B)y$，则：  
$$
\langle (A - B)y, (A - B)y \rangle = \|(A - B)y\|^2 = 0, \quad \forall y \in H.
$$  
故 $A - B = 0$，即 $A = B$。因此 $A$ 可逆，且逆算子 $A^{-1} = B^{-1} \in \mathcal{B}(H)$ 有界。

# 10.4
设 $p$ 是实线性空间 $\mathcal{X}$ 上的次线性泛函，证明：
(1) $p(0)=0$；
(2) $p(−x)\geq−p(x)$;
(3)给定$x_0 \in \mathcal{X}$，在$\mathcal{X}$上必有实线性泛函，满足$f(x0)=p(x0)$，以及 $f(x)\leq p(x), \forall x \in \mathcal{X}$

## 解答
(1) 由次线性泛函的定义，对于任意 $x \in \mathcal{X}$ 和标量 $\lambda \geq 0$，有：
$$p(\lambda 0) = \lambda p(0) \rArr p(0) = \lambda p(0) \rArr p(0) = 0$$

(2) 对任意 $x \in \mathcal{X}$，由次线性泛函的正齐次性和次可加性，有：
$$p(0) = p(x + (-x)) \leq p(x) + p(-x) \rArr 0 \leq p(x) + p(-x) \rArr p(-x) \geq -p(x)$$

(3) 考虑由 $x_0$ 张成的一维子空间 $M = \{ t x_0 \mid t \in \mathbb{R} \}$。在 $M$ 上定义线性泛函 $g: M \to \mathbb{R}$ 为：
$$g(t x_0) = t p(x_0).$$
设 $m = t x_0$，则：

若 $t \geq 0$，由正齐次性：
$$p(m) = p(t x_0) = t p(x_0) = g(m).$$

若 $t < 0$，令 $s = -t > 0$，则 $m = t x_0 = -s x_0$。由 (2) 知 $p(-x_0) \geq -p(x_0)$，故：
$$p(m) = p(-s x_0) = s p(-x_0) \geq s (-p(x_0)) = -s p(x_0) = t p(x_0) = g(m).$$


综上，对所有 $m \in M$，有 $g(m) \leq p(m)$.
根据实形式的 Hahn-Banach 定理，存在线性泛函 $f: \chi \to \mathbb{R}$ 延拓 $g$（即 $f|_M = g$)，且满足 $f(x) \leq p(x)$ 对所有 $x \in \chi$。特别地，取 $x = x_0 \in M$:
$$f(x_0) = g(x_0) = 1 \cdot p(x_0) = p(x_0).$$
因此，$f$ 满足要求。


# 10.5
10.5.设 $\mathcal{X}$ 是由实数列 $x=\left\{a_{n}\right\}$ 全体组成的实线性空间，其元素间相等和线性运算都按坐标定义，并定义

$$p(x)=\limsup_{n\to\infty}a_n,\ \forall x=\{a_n\}\in\mathcal{X}.$$

证明：$p(x)$ 是 $\mathcal{X}$ 上的次线性泛函。

## 解答


### 正齐次性
对任意标量 $\alpha \geq 0$ 和任意 $x = \{a_n\} \in X$，需证 $p(\alpha x) = \alpha p(x)$。

考虑 $\alpha x = \{\alpha a_n\}$，则：
$$
p(\alpha x) = \limsup_{n \to \infty} (\alpha a_n).
$$
根据上极限的性质，对 $\alpha \geq 0$，有：
$$
\limsup_{n \to \infty} (\alpha a_n) = \alpha \limsup_{n \to \infty} a_n.
$$
因此：
$$
p(\alpha x) = \alpha \limsup_{n \to \infty} a_n = \alpha p(x).
$$
当 $\alpha = 0$ 时，$\alpha x = \{0\}$（全零序列），且 $p(\{0\}) = \limsup_{n \to \infty} 0 = 0$，而 $\alpha p(x) = 0 \cdot p(x)$。在扩展实数中约定 $0 \cdot (+\infty) = 0$ 和 $0 \cdot (-\infty) = 0$，故 $\alpha p(x) = 0$。因此，正齐次性成立。

### 次可加性
对任意 $x = \{a_n\}, y = \{b_n\} \in X$，需证 $p(x + y) \leq p(x) + p(y)$，即：
$$
\limsup_{n \to \infty} (a_n + b_n) \leq \limsup_{n \to \infty} a_n + \limsup_{n \to \infty} b_n.
$$
定义序列：
- $s_n = \sup_{k \geq n} a_k$
- $t_n = \sup_{k \geq n} b_k$
- $u_n = \sup_{k \geq n} (a_k + b_k)$

则：
$$
\limsup_{n \to \infty} a_n = \lim_{n \to \infty} s_n, \quad \limsup_{n \to \infty} b_n = \lim_{n \to \infty} t_n, \quad \limsup_{n \to \infty} (a_n + b_n) = \lim_{n \to \infty} u_n.
$$
由于 $\{a_k : k \geq n\}$ 和 $\{b_k : k \geq n\}$ 是非空实数集，因此 $s_n, t_n$ 和 $u_n$ 均在 $\mathbb{R} \cup \{+\infty\}$ 中取值（上确界可能为 $+\infty$，但永不为 $-\infty$，因为非空集上确界不低于任何实数）。

对任意 $k \geq n$，有：
$$
a_k \leq s_n, \quad b_k \leq t_n,
$$
所以：
$$
a_k + b_k \leq s_n + t_n.
$$
因此，上确界满足：
$$
u_n = \sup_{k \geq n} (a_k + b_k) \leq s_n + t_n.
$$
序列 $s_n, t_n, u_n$ 均为单调非增（因为当 $n$ 增加时，上确界在更小的集合上取），故极限存在或为 $-\infty$。取极限：
$$
\lim_{n \to \infty} u_n \leq \lim_{n \to \infty} (s_n + t_n).
$$
在扩展实数中，当 $\lim s_n$ 和 $\lim t_n$ 不为异号无穷时有：
$$
\lim_{n \to \infty} (s_n + t_n) = \lim_{n \to \infty} s_n + \lim_{n \to \infty} t_n.
$$
因此：
$$
\lim_{n \to \infty} u_n \leq \lim_{n \to \infty} s_n + \lim_{n \to \infty} t_n,
$$
即：
$$
p(x + y) \leq p(x) + p(y).
$$


