---
title: 复分析第一次作业
tags:
  - complex-analysis
  - homework
categories:
  - complex-analysis
  - homework
abbrlink: 31fbe909
date: 2026-03-06 13:33:57
---
# Ch1.Ex7
the family of mappings introduced here plays an important role in complex analysis. These mappings, sometimes called Blaschke factors, will reappear in various applications in later chapters.

## 1
 Let $ z, w $ be two complex numbers such that $ \overline{z}w \ne 1 $. Prove that

$$ \left| \frac{w - z}{1 - \overline{w}z} \right| < 1 \quad \text{if } |z| < 1 \text{ and } |w| < 1, $$

and also that

$$ \left| \frac{w - z}{1 - \overline{w}z} \right| = 1 \quad \text{if } |z| = 1 \text{ or } |w| = 1. $$

[Hint: Why can one assume that $ z $ is real? It then suffices to prove that

$$ (r - w)(r - \overline{w}) \le (1 - rw)(1 - r\overline{w}) $$

with equality for appropriate $ r $ and $ |w|.$]

### 解答
计算分子与分母的差：
$$|1-\overline{w}z|^2 - |w-z|^2 = (1-\overline{w}z)(1-w\overline{z}) - (w-z)(\overline{w}-\overline{z}).$$
展开得
$$(1-\overline{w}z)(1-w\overline{z}) = 1 - \overline{w}z - w\overline{z} + |w|^2|z|^2,$$
$$(w-z)(\overline{w}-\overline{z}) = |w|^2 - w\overline{z} - \overline{w}z + |z|^2.$$
两式相减：
$$(1 - \overline{w}z - w\overline{z} + |w|^2|z|^2) - (|w|^2 - w\overline{z} - \overline{w}z + |z|^2) = 1 - |w|^2 - |z|^2 + |w|^2|z|^2 = (1-|z|^2)(1-|w|^2).$$
因此，
$$|1-\overline{w}z|^2 - |w-z|^2 = (1-|z|^2)(1-|w|^2). \tag{1}$$
进而
$$\left| \frac{w - z}{1 - \overline{w}z} \right|^2 = 1 - \frac{(1-|z|^2)(1-|w|^2)}{|1-\overline{w}z|^2}.$$

若 $|z|<1$ 且 $|w|<1$，则 $(1-|z|^2)(1-|w|^2) > 0$，且分母 $|1-\overline{w}z|^2 > 0$（因为 $|\overline{w}z| = |w||z| < 1$，故 $1-\overline{w}z \neq 0$）。由 (2) 式得
$$\left| \frac{w - z}{1 - \overline{w}z} \right|^2 < 1,$$
即
$$\left| \frac{w - z}{1 - \overline{w}z} \right| < 1.$$

若 $|z|=1$ 或 $|w|=1$，则 $(1-|z|^2)(1-|w|^2)=0$，由 (2) 式得
$$\left| \frac{w - z}{1 - \overline{w}z} \right|^2 = 1,$$
即
$$\left| \frac{w - z}{1 - \overline{w}z} \right| = 1.$$


其中条件 $\overline{z}w \neq 1$ 保证分母不为零。



## 2
Prove that for a fixed $ w $ in the unit disc $ \mathbb{D} $, the mapping
$$ F : z \mapsto \frac{w - z}{1 - \overline{w}z} $$
satisfies the following conditions:

1. $ F $ maps the unit disc to itself (that is, $ F : \mathbb{D} \to \mathbb{D} $), and is holomorphic.
2. $ F $ interchanges 0 and $ w $, namely $ F(0) = w $ and $ F(w) = 0 $.
3. $ |F(z)| = 1 $ if $ |z| = 1 $.
4. $ F : \mathbb{D} \to \mathbb{D} $ is bijective. [Hint: Calculate $ F \circ F $.]

### 解答
$F$ 是有理函数，分母在 $\mathbb{D}$ 上不为零，因为当 $|z|<1$ 时，$|\overline{w}z| = |w||z| < 1$，故 $1-\overline{w}z \neq 0$。因此 $F$ 在 $\mathbb{D}$ 上全纯。
由问题 1 的结论，当 $|z|<1$ 时，有 $|F(z)| < 1$，故 $F$ 将 $\mathbb{D}$ 映射到自身，即 $F: \mathbb{D} \to \mathbb{D}$。

直接计算：
$$F(0) = \frac{w-0}{1-\overline{w}\cdot 0} = w,
\quad
F(w) = \frac{w-w}{1-\overline{w}w} = 0.$$
故 $F(0)=w$，$F(w)=0$。

若 $|z|=1$，由问题 1 结论（此时 $|z|=1$），有 $|F(z)| = 1$。即 $F$ 将单位圆周映到单位圆周。

计算复合映射 $F \circ F$：
$$F(F(z)) = F\left( \frac{w-z}{1-\overline{w}z} \right)
= \frac{ w - \frac{w-z}{1-\overline{w}z} }{ 1 - \overline{w} \cdot \frac{w-z}{1-\overline{w}z} }.$$
分别化简分子和分母：
$$\text{分子} = w - \frac{w-z}{1-\overline{w}z}
= \frac{w(1-\overline{w}z) - (w-z)}{1-\overline{w}z}
= \frac{w - w\overline{w}z - w + z}{1-\overline{w}z}
= \frac{z(1-|w|^2)}{1-\overline{w}z},$$
$$\text{分母} = 1 - \overline{w} \cdot \frac{w-z}{1-\overline{w}z}
= \frac{(1-\overline{w}z) - \overline{w}(w-z)}{1-\overline{w}z}
= \frac{1-\overline{w}z - \overline{w}w + \overline{w}z}{1-\overline{w}z}
= \frac{1-|w|^2}{1-\overline{w}z}.$$
因此
$$F(F(z)) = \frac{ \frac{z(1-|w|^2)}{1-\overline{w}z} }{ \frac{1-|w|^2}{1-\overline{w}z} } = z.$$
由于 $w \in \mathbb{D}$，故 $1-|w|^2 \neq 0$，上述运算有效。于是对任意 $z \in \mathbb{D}$，有 $F(F(z)) = z$，即 $F$ 是自身的逆映射。
由此易知 $F$ 是双射：若 $F(z_1)=F(z_2)$，则作用 $F$ 得 $z_1=z_2$，故为单射；对任意 $\zeta \in \mathbb{D}$，取 $z = F(\zeta)$，则 $F(z) = F(F(\zeta)) = \zeta$，故为满射。
因此 $F: \mathbb{D} \to \mathbb{D}$ 是双射。

# Ch1.Ex8
Suppose $U$ and $V$ are open sets in the complex plane. Prove that if $f : U \to V$ and $g : V \to \mathbb{C}$ are two functions that are differentiable (in the real sense, that is, as functions of the two real variables $x$ and $y$), and $h = g \circ f$, then
$$ \frac{\partial h}{\partial z} = \frac{\partial g}{\partial z} \frac{\partial f}{\partial z} + \frac{\partial g}{\partial \bar{z}} \frac{\partial \bar{f}}{\partial z} $$
and
$$ \frac{\partial h}{\partial \bar{z}} = \frac{\partial g}{\partial z} \frac{\partial f}{\partial \bar{z}} + \frac{\partial g}{\partial \bar{z}} \frac{\partial \bar{f}}{\partial \bar{z}}. $$
This is the complex version of the chain rule.

## 解答
记 $z = x + iy$，并设 $f = u + iv$，其中 $u, v$ 是实值函数。令 $w = f(z) = a + ib$，其中 $a = u(x,y)$，$b = v(x,y)$。则 $h(z) = g(w) = g(a, b)$。
由实变量的链式法则：
$$\frac{\partial h}{\partial x} = \frac{\partial g}{\partial a} \frac{\partial u}{\partial x} + \frac{\partial g}{\partial b} \frac{\partial v}{\partial x}, \qquad
\frac{\partial h}{\partial y} = \frac{\partial g}{\partial a} \frac{\partial u}{\partial y} + \frac{\partial g}{\partial b} \frac{\partial v}{\partial y}.$$
Wirtinger 导数定义为：
$$\frac{\partial}{\partial z} = \frac{1}{2} \left( \frac{\partial}{\partial x} - i \frac{\partial}{\partial y} \right), \qquad
\frac{\partial}{\partial \bar{z}} = \frac{1}{2} \left( \frac{\partial}{\partial x} + i \frac{\partial}{\partial y} \right).$$
对函数 $g$，类似定义关于 $w = a + ib$ 的导数：
$$\frac{\partial g}{\partial w} = \frac{1}{2} \left( \frac{\partial g}{\partial a} - i \frac{\partial g}{\partial b} \right), \qquad
\frac{\partial g}{\partial \bar{w}} = \frac{1}{2} \left( \frac{\partial g}{\partial a} + i \frac{\partial g}{\partial b} \right).$$
由此解出：
$$\frac{\partial g}{\partial a} = \frac{\partial g}{\partial w} + \frac{\partial g}{\partial \bar{w}}, \qquad
\frac{\partial g}{\partial b} = i \left( \frac{\partial g}{\partial w} - \frac{\partial g}{\partial \bar{w}} \right). \tag{1}$$
同时，对于 $f = u + iv$，计算：
$$\frac{\partial f}{\partial z} = \frac{1}{2} \left( \frac{\partial f}{\partial x} - i \frac{\partial f}{\partial y} \right), \qquad
\frac{\partial f}{\partial \bar{z}} = \frac{1}{2} \left( \frac{\partial f}{\partial x} + i \frac{\partial f}{\partial y} \right),$$
以及 $\bar{f} = u - iv$ 的相应导数。
直接计算可得以下恒等式：
$$\frac{\partial u}{\partial x} - i \frac{\partial u}{\partial y} = \frac{\partial f}{\partial z} + \frac{\partial \bar{f}}{\partial z}, \qquad
\frac{\partial v}{\partial x} - i \frac{\partial v}{\partial y} = -i \left( \frac{\partial f}{\partial z} - \frac{\partial \bar{f}}{\partial z} \right), \tag{2}$$
$$\frac{\partial u}{\partial x} + i \frac{\partial u}{\partial y} = \frac{\partial f}{\partial \bar{z}} + \frac{\partial \bar{f}}{\partial \bar{z}}, \qquad
\frac{\partial v}{\partial x} + i \frac{\partial v}{\partial y} = -i \left( \frac{\partial f}{\partial \bar{z}} - \frac{\partial \bar{f}}{\partial \bar{z}} \right). \tag{3}$$

1. 计算 $\frac{\partial h}{\partial z}$
由定义：
$$\frac{\partial h}{\partial z} = \frac{1}{2} \left( \frac{\partial h}{\partial x} - i \frac{\partial h}{\partial y} \right).$$
代入链式法则：
$$\frac{\partial h}{\partial x} - i \frac{\partial h}{\partial y} = \left( \frac{\partial g}{\partial a} \frac{\partial u}{\partial x} + \frac{\partial g}{\partial b} \frac{\partial v}{\partial x} \right) - i \left( \frac{\partial g}{\partial a} \frac{\partial u}{\partial y} + \frac{\partial g}{\partial b} \frac{\partial v}{\partial y} \right) = \frac{\partial g}{\partial a} \left( \frac{\partial u}{\partial x} - i \frac{\partial u}{\partial y} \right) + \frac{\partial g}{\partial b} \left( \frac{\partial v}{\partial x} - i \frac{\partial v}{\partial y} \right).$$
利用 (2)：
$$\frac{\partial h}{\partial x} - i \frac{\partial h}{\partial y} = \frac{\partial g}{\partial a} \left( \frac{\partial f}{\partial z} + \frac{\partial \bar{f}}{\partial z} \right) + \frac{\partial g}{\partial b} \left[ -i \left( \frac{\partial f}{\partial z} - \frac{\partial \bar{f}}{\partial z} \right) \right].$$
再将 (1) 代入：
$$\frac{\partial g}{\partial a} = \frac{\partial g}{\partial w} + \frac{\partial g}{\partial \bar{w}}, \quad \frac{\partial g}{\partial b} = i \left( \frac{\partial g}{\partial w} - \frac{\partial g}{\partial \bar{w}} \right).$$
于是
$$\begin{aligned}
\frac{\partial h}{\partial x} - i \frac{\partial h}{\partial y} &= \left( \frac{\partial g}{\partial w} + \frac{\partial g}{\partial \bar{w}} \right) \left( \frac{\partial f}{\partial z} + \frac{\partial \bar{f}}{\partial z} \right) + i \left( \frac{\partial g}{\partial w} - \frac{\partial g}{\partial \bar{w}} \right) \left[ -i \left( \frac{\partial f}{\partial z} - \frac{\partial \bar{f}}{\partial z} \right) \right] \\
&= \left( \frac{\partial g}{\partial w} + \frac{\partial g}{\partial \bar{w}} \right) \left( \frac{\partial f}{\partial z} + \frac{\partial \bar{f}}{\partial z} \right) + \left( \frac{\partial g}{\partial w} - \frac{\partial g}{\partial \bar{w}} \right) \left( \frac{\partial f}{\partial z} - \frac{\partial \bar{f}}{\partial z} \right).
\end{aligned}$$
展开合并同类项：
$$\begin{aligned}
&\left( \frac{\partial g}{\partial w} \frac{\partial f}{\partial z} + \frac{\partial g}{\partial w} \frac{\partial \bar{f}}{\partial z} + \frac{\partial g}{\partial \bar{w}} \frac{\partial f}{\partial z} + \frac{\partial g}{\partial \bar{w}} \frac{\partial \bar{f}}{\partial z} \right) \\
+&\left( \frac{\partial g}{\partial w} \frac{\partial f}{\partial z} - \frac{\partial g}{\partial w} \frac{\partial \bar{f}}{\partial z} - \frac{\partial g}{\partial \bar{w}} \frac{\partial f}{\partial z} + \frac{\partial g}{\partial \bar{w}} \frac{\partial \bar{f}}{\partial z} \right) \\
&= 2 \frac{\partial g}{\partial w} \frac{\partial f}{\partial z} + 2 \frac{\partial g}{\partial \bar{w}} \frac{\partial \bar{f}}{\partial z}.
\end{aligned}$$
因此，
$$\frac{\partial h}{\partial z} = \frac{1}{2} \left( 2 \frac{\partial g}{\partial w} \frac{\partial f}{\partial z} + 2 \frac{\partial g}{\partial \bar{w}} \frac{\partial \bar{f}}{\partial z} \right) = \frac{\partial g}{\partial w} \frac{\partial f}{\partial z} + \frac{\partial g}{\partial \bar{w}} \frac{\partial \bar{f}}{\partial z}.$$

2. 计算 $\frac{\partial h}{\partial \bar{z}}$
类似地，
$$\frac{\partial h}{\partial \bar{z}} = \frac{1}{2} \left( \frac{\partial h}{\partial x} + i \frac{\partial h}{\partial y} \right).$$
代入链式法则：
$$\frac{\partial h}{\partial x} + i \frac{\partial h}{\partial y} = \frac{\partial g}{\partial a} \left( \frac{\partial u}{\partial x} + i \frac{\partial u}{\partial y} \right) + \frac{\partial g}{\partial b} \left( \frac{\partial v}{\partial x} + i \frac{\partial v}{\partial y} \right).$$
利用 (3)：
$$\frac{\partial h}{\partial x} + i \frac{\partial h}{\partial y} = \frac{\partial g}{\partial a} \left( \frac{\partial f}{\partial \bar{z}} + \frac{\partial \bar{f}}{\partial \bar{z}} \right) + \frac{\partial g}{\partial b} \left[ -i \left( \frac{\partial f}{\partial \bar{z}} - \frac{\partial \bar{f}}{\partial \bar{z}} \right) \right].$$
代入 (1)：
$$\begin{aligned}
\frac{\partial h}{\partial x} + i \frac{\partial h}{\partial y} &= \left( \frac{\partial g}{\partial w} + \frac{\partial g}{\partial \bar{w}} \right) \left( \frac{\partial f}{\partial \bar{z}} + \frac{\partial \bar{f}}{\partial \bar{z}} \right) + i \left( \frac{\partial g}{\partial w} - \frac{\partial g}{\partial \bar{w}} \right) \left[ -i \left( \frac{\partial f}{\partial \bar{z}} - \frac{\partial \bar{f}}{\partial \bar{z}} \right) \right] \\
&= \left( \frac{\partial g}{\partial w} + \frac{\partial g}{\partial \bar{w}} \right) \left( \frac{\partial f}{\partial \bar{z}} + \frac{\partial \bar{f}}{\partial \bar{z}} \right) + \left( \frac{\partial g}{\partial w} - \frac{\partial g}{\partial \bar{w}} \right) \left( \frac{\partial f}{\partial \bar{z}} - \frac{\partial \bar{f}}{\partial \bar{z}} \right).
\end{aligned}$$
展开合并：
$$\begin{aligned}
&\left( \frac{\partial g}{\partial w} \frac{\partial f}{\partial \bar{z}} + \frac{\partial g}{\partial w} \frac{\partial \bar{f}}{\partial \bar{z}} + \frac{\partial g}{\partial \bar{w}} \frac{\partial f}{\partial \bar{z}} + \frac{\partial g}{\partial \bar{w}} \frac{\partial \bar{f}}{\partial \bar{z}} \right) \\
+&\left( \frac{\partial g}{\partial w} \frac{\partial f}{\partial \bar{z}} - \frac{\partial g}{\partial w} \frac{\partial \bar{f}}{\partial \bar{z}} - \frac{\partial g}{\partial \bar{w}} \frac{\partial f}{\partial \bar{z}} + \frac{\partial g}{\partial \bar{w}} \frac{\partial \bar{f}}{\partial \bar{z}} \right) \\
&= 2 \frac{\partial g}{\partial w} \frac{\partial f}{\partial \bar{z}} + 2 \frac{\partial g}{\partial \bar{w}} \frac{\partial \bar{f}}{\partial \bar{z}}.
\end{aligned}$$
因此，
$$\frac{\partial h}{\partial \bar{z}} = \frac{1}{2} \left( 2 \frac{\partial g}{\partial w} \frac{\partial f}{\partial \bar{z}} + 2 \frac{\partial g}{\partial \bar{w}} \frac{\partial \bar{f}}{\partial \bar{z}} \right) = \frac{\partial g}{\partial w} \frac{\partial f}{\partial \bar{z}} + \frac{\partial g}{\partial \bar{w}} \frac{\partial \bar{f}}{\partial \bar{z}}.$$

# Ch1.Ex9
Show that in polar coordinates, the Cauchy-Riemann equations take the form
$$ \frac{\partial u}{\partial r} = \frac{1}{r} \frac{\partial v}{\partial \theta} \quad \text{and} \quad \frac{1}{r} \frac{\partial u}{\partial \theta} = -\frac{\partial v}{\partial r}. $$
Use these equations to show that the logarithm function defined by
$$ \log z = \log r + i\theta \quad \text{where } z = re^{i\theta} \text{ with } -\pi < \theta < \pi $$
is holomorphic in the region $r > 0$ and $-\pi < \theta < \pi$.

## 解答
设 $z = r e^{i\theta}$，$f(z) = u(r,\theta) + i v(r,\theta)$。由直角坐标变换 $x = r\cos\theta$、$y = r\sin\theta$ 及链式法则可得：
$$\frac{\partial u}{\partial x} = \frac{\partial u}{\partial r} \cos\theta - \frac{1}{r} \frac{\partial u}{\partial \theta} \sin\theta, \quad
\frac{\partial u}{\partial y} = \frac{\partial u}{\partial r} \sin\theta + \frac{1}{r} \frac{\partial u}{\partial \theta} \cos\theta,$$
对 $v$ 类似。代入直角坐标柯西-黎曼方程 $\frac{\partial u}{\partial x} = \frac{\partial v}{\partial y}$ 与 $\frac{\partial u}{\partial y} = -\frac{\partial v}{\partial x}$，整理后得到极坐标形式：
$$\frac{\partial u}{\partial r} = \frac{1}{r} \frac{\partial v}{\partial \theta}, \qquad
\frac{1}{r} \frac{\partial u}{\partial \theta} = -\frac{\partial v}{\partial r}.$$
对数函数的全纯性
定义 $\log z = \log r + i\theta$（$r > 0,\ -\pi < \theta < \pi$），则 $u = \log r$，$v = \theta$。计算偏导：
$$\frac{\partial u}{\partial r} = \frac{1}{r},\quad \frac{\partial u}{\partial \theta} = 0,\quad 
\frac{\partial v}{\partial r} = 0,\quad \frac{\partial v}{\partial \theta} = 1.$$
代入极坐标柯西-黎曼方程：

$\frac{\partial u}{\partial r} = \frac{1}{r} = \frac{1}{r} \cdot 1 = \frac{1}{r} \frac{\partial v}{\partial \theta}$，
$\frac{1}{r} \frac{\partial u}{\partial \theta} = 0 = -\frac{\partial v}{\partial r}$。

方程成立，且偏导数在区域 $r > 0,\ -\pi < \theta < \pi$ 上连续，故 $\log z$ 在该区域上全纯。

# Ch1.Ex10
Show that
$$ 4 \frac{\partial}{\partial z} \frac{\partial}{\partial \bar{z}} = 4 \frac{\partial}{\partial \bar{z}} \frac{\partial}{\partial z} = \triangle, $$
where $\triangle$ is the **Laplacian**
$$ \triangle = \frac{\partial^2}{\partial x^2} + \frac{\partial^2}{\partial y^2}. $$

## 解答
由 Wirtinger 导数的定义：
$$\frac{\partial}{\partial z} = \frac{1}{2} \left( \frac{\partial}{\partial x} - i \frac{\partial}{\partial y} \right), \quad \frac{\partial}{\partial \bar{z}} = \frac{1}{2} \left( \frac{\partial}{\partial x} + i \frac{\partial}{\partial y} \right).$$
计算 $4 \frac{\partial}{\partial z} \frac{\partial}{\partial \bar{z}}$：
$$4 \frac{\partial}{\partial z} \frac{\partial}{\partial \bar{z}} = 4 \cdot \frac{1}{4} \left( \frac{\partial}{\partial x} - i \frac{\partial}{\partial y} \right) \left( \frac{\partial}{\partial x} + i \frac{\partial}{\partial y} \right) = \frac{\partial^2}{\partial x^2} + i \frac{\partial}{\partial x} \frac{\partial}{\partial y} - i \frac{\partial}{\partial y} \frac{\partial}{\partial x} + \frac{\partial^2}{\partial y^2}.$$
由于混合偏导数可交换，$i \frac{\partial}{\partial x} \frac{\partial}{\partial y} - i \frac{\partial}{\partial y} \frac{\partial}{\partial x} = 0$，因此
$$4 \frac{\partial}{\partial z} \frac{\partial}{\partial \bar{z}} = \frac{\partial^2}{\partial x^2} + \frac{\partial^2}{\partial y^2} = \triangle.$$
类似地，
$$4 \frac{\partial}{\partial \bar{z}} \frac{\partial}{\partial z} = 4 \cdot \frac{1}{4} \left( \frac{\partial}{\partial x} + i \frac{\partial}{\partial y} \right) \left( \frac{\partial}{\partial x} - i \frac{\partial}{\partial y} \right) = \frac{\partial^2}{\partial x^2} - i \frac{\partial}{\partial x} \frac{\partial}{\partial y} + i \frac{\partial}{\partial y} \frac{\partial}{\partial x} + \frac{\partial^2}{\partial y^2}.$$
混合偏导数交换后同样消去，得到
$$4 \frac{\partial}{\partial \bar{z}} \frac{\partial}{\partial z} = \frac{\partial^2}{\partial x^2} + \frac{\partial^2}{\partial y^2} = \triangle.$$



# Ch1.Ex16
Determine the radius of convergence of the series $\sum_{n=1}^{\infty} a_n z^n$ when:

(a) $a_n = (\log n)^2$

(b) $a_n = n!$

(c) $a_n = \dfrac{n^2}{4^{n+3n}}$

(d) $a_n = \dfrac{(n!)^3}{(3n)!}$  
[Hint: Use Stirling’s formula, which says that  
$n! \sim c n^{n + \frac{1}{2}} e^{-n}$ for some $c > 0$.]

(e) Find the radius of convergence of the **hypergeometric series**

$$
F(\alpha, \beta, \gamma; z) = 1 + \sum_{n=1}^{\infty} \frac{\alpha(\alpha+1)\cdots(\alpha+n-1)\,\beta(\beta+1)\cdots(\beta+n-1)}{n!\,\gamma(\gamma+1)\cdots(\gamma+n-1)} z^n.
$$

Here $\alpha, \beta \in \mathbb{C}$ and $\gamma \ne 0, -1, -2, \dots$.


(f) Find the radius of convergence of the Bessel function of order $r$:

$$
J_r(z) = \left(\frac{z}{2}\right)^r \sum_{n=0}^{\infty} \frac{(-1)^n}{n!(n+r)!} \left(\frac{z}{2}\right)^{2n},
$$

where $r$ is a positive integer.

## 解答
### (a)  
$a_n = (\log n)^2$  
$\lim_{n\to\infty} (\log n)^{2/n} = 1$，故收敛半径 $R = 1$.

### (b)  
$a_n = n!$  
$\lim_{n\to\infty} (n!)^{1/n} = \infty$，故收敛半径 $R = 0$.

### (c)  
$a_n = \dfrac{n^2}{4^{n+3n}} = \dfrac{n^2}{256^n}$  
$\lim_{n\to\infty} \left( \dfrac{n^2}{256^n} \right)^{1/n} = \dfrac{1}{256}$，故收敛半径 $R = 256$.

### (d)  
$a_n = \dfrac{(n!)^3}{(3n)!}$  
使用比值法：$\lim_{n\to\infty} \left| \dfrac{a_{n+1}}{a_n} \right| = \dfrac{1}{27}$，故收敛半径 $R = 27$.

### (e)  
超几何级数 $F(\alpha, \beta, \gamma; z)$  
系数比值 $\left| \dfrac{c_{n+1}}{c_n} \right| = \dfrac{|(\alpha+n)(\beta+n)|}{|(n+1)(\gamma+n)|} \to 1$，故收敛半径 $R = 1$.

### (f)  
Bessel 函数 $J_r(z)$  
考虑级数 $\sum_{n=0}^{\infty} \frac{(-1)^n}{n!(n+r)!} \left( \frac{z}{2} \right)^{2n}$，系数绝对值倒数的极限为 $\infty$，故收敛半径 $R = \infty$.



# Ch1.Ex23
Consider the function $ f $ defined on $\mathbb{R}$ by
$$
f(x) = \begin{cases} 
0 & \text{if } x \leq 0, \\
e^{-1/x^2} & \text{if } x > 0.
\end{cases}
$$
Prove that $ f $ is indefinitely differentiable on $\mathbb{R}$, and that $ f^{(n)}(0) = 0 $ for all $ n \geq 1 $. Conclude that $ f $ does not have a converging power series expansion $\sum_{n=0}^{\infty} a_n x^n$ for $x$ near the origin.

## 解答
当 $x > 0$ 时，$f(x) = e^{-1/x^2}$，通过归纳法可证存在多项式 $P_n(t)$ 使得
$$f^{(n)}(x) = P_n(1/x) e^{-1/x^2}, \quad x > 0.$$
由于当 $t \to \infty$ 时 $P_n(t) e^{-t^2} \to 0$，可得 $\lim_{x \to 0^+} f^{(n)}(x) = 0$。
当 $x < 0$ 时，$f^{(n)}(x) = 0$，故在 $x = 0$ 处有 $\lim_{x \to 0} f^{(n)}(x) = 0$。
现用归纳法证明 $f^{(n)}(0) = 0$。当 $n = 0$ 时 $f(0) = 0$。假设 $f^{(k)}(0) = 0$ 对所有 $k \le n$ 成立，则
$$f^{(n+1)}(0) = \lim_{h \to 0} \frac{f^{(n)}(h) - f^{(n)}(0)}{h} = \lim_{h \to 0} \frac{f^{(n)}(h)}{h}.$$
对 $h > 0$，$f^{(n)}(h)/h = h^{-1} P_n(1/h) e^{-1/h^2}$，令 $t = 1/h \to \infty$，表达式为 $t P_n(t) e^{-t^2} \to 0$；对 $h < 0$，差商为 0。因此极限为 0，即 $f^{(n+1)}(0) = 0$。由归纳法知所有阶导数在 0 处均为 0。

$f$ 在 0 处的泰勒级数为 $\sum_{n=0}^\infty \frac{f^{(n)}(0)}{n!} x^n = 0$，该级数处处收敛到零函数。但在 $x > 0$ 时 $f(x) > 0$，故泰勒级数在任意邻域内不等于 $f(x)$。因此 $f$ 在原点附近不能表示为收敛的幂级数。

# Ch1.Ex25
The next three calculations provide some insight into Cauchy’s theorem, which we treat in the next chapter.

(a) Evaluate the integrals
$$
\int_{\gamma} z^n \, dz
$$
for all integers $n$. Here $\gamma$ is any circle centered at the origin with the positive (counterclockwise) orientation.

(b) Same question as before, but with $\gamma$ any circle not containing the origin.


(c) Show that if $|a| < r < |b|$, then
$$
\int_{\gamma} \frac{1}{(z - a)(z - b)} \, dz = \frac{2\pi i}{a - b},
$$
where $\gamma$ denotes the circle centered at the origin, of radius $r$, with the positive orientation.


## 解答
### (a)
设 $\gamma$ 为以原点为中心、半径 $r > 0$ 的正向圆周，参数化 $z = r e^{i\theta}, \, \theta \in [0, 2\pi]$。则
$$\int_{\gamma} z^n \, dz = \int_0^{2\pi} (r e^{i\theta})^n \cdot i r e^{i\theta} \, d\theta = i r^{n+1} \int_0^{2\pi} e^{i(n+1)\theta} \, d\theta.$$
若 $n \ne -1$，积分 $\int_0^{2\pi} e^{i(n+1)\theta} d\theta = 0$；若 $n = -1$，积分等于 $2\pi$。故
$$\int_{\gamma} z^n \, dz = \begin{cases}
2\pi i & n = -1, \\
0 & n \ne -1.
\end{cases}$$

## (b)
设 $\gamma$ 为任意不包含原点的圆周。函数 $z^n$ 当 $n \ge 0$ 时在整个复平面解析；当 $n < 0$ 时，除原点外解析。由于原点不在 $\gamma$ 内部及圆周上，故 $z^n$ 在 $\gamma$ 所围区域内解析。由柯西定理，
$$\int_{\gamma} z^n \, dz = 0 \quad \text{对所有整数 } n.$$

### (c)
设 $|a| < r < |b|$，$\gamma$ 为以原点为中心、半径 $r$ 的正向圆周。部分分式分解：
$$\frac{1}{(z-a)(z-b)} = \frac{1}{a-b} \left( \frac{1}{z-a} - \frac{1}{z-b} \right).$$
于是
$$\int_{\gamma} \frac{1}{(z-a)(z-b)} \, dz = \frac{1}{a-b} \left( \int_{\gamma} \frac{1}{z-a} \, dz - \int_{\gamma} \frac{1}{z-b} \, dz \right).$$
由于 $|a| < r$，点 $a$ 在 $\gamma$ 内部，故 $\int_{\gamma} \frac{1}{z-a} \, dz = 2\pi i$。又 $|b| > r$，点 $b$ 在 $\gamma$ 外部，函数 $\frac{1}{z-b}$ 在 $\gamma$ 内部解析，故积分为 0。因此
$$\int_{\gamma} \frac{1}{(z-a)(z-b)} \, dz = \frac{2\pi i}{a - b}.$$