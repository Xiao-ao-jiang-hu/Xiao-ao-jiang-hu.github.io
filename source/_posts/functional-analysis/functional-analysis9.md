---
title: Ch 2.3.3 共轭双线性泛函的表示
tags:
  - math
  - functional analysis
categories:
  - math
  - functional analysis
index_img: /img/fa.jpg
banner_img: /img/fa.jpg
excerpt: 泛函分析课程笔记
date: 2025-10-13 10:42:52
---
# 共轭双线性泛函的表示
## 定义（共轭双线性泛函）
设 $H$ 是复 Hilbert 空间，其内积记为 $\langle \cdot, \cdot \rangle$。 若 $a: H \times H \to \mathbb{C}$ 满足以下性质：
- 对第一个变量线性：对任意 $x, y, z \in H$ 和 $\alpha, \beta \in \mathbb{C}$，有  
  $$
  a(\alpha x + \beta y, z) = \alpha a(x, z) + \beta a(y, z);
  $$
- 对第二个变量共轭线性：对任意 $x, y, z \in H$ 和 $\alpha, \beta \in \mathbb{C}$，有  
  $$
  a(x, \alpha y + \beta z) = \overline{\alpha} a(x, y) + \overline{\beta} a(x, z).
  $$
则称 $a$ 为 $H$ 上的共轭双线性泛函。

## 定理（Lax–Milgram）

若 Hilbert 空间 $H$ 上的共轭双线性泛函 $a$ 满足以下条件：
1. **有界性**：存在常数 $M > 0$，使得对任意 $x, y \in H$，有  
   $$
   |a(x, y)| \leq M \|x\| \|y\|;
   $$
2. **强制性**：存在常数 $\delta > 0$，使得对任意 $x \in H$，有  
   $$
   |a(x, x)| \geq \delta \|x\|^2.
   $$

则存在唯一的有界线性算子 $A: H \to H$，使得对任意 $x, y \in H$，有  
$$
a(x, y) = \langle x, A y \rangle.
$$
此外，$A$ 是可逆的，$A^{-1} \in \mathcal{L}(H, H)$ ，且满足  
$$
\|A^{-1}\| \leq \delta^{-1}.
$$

### 证明
对每个固定的 $y \in H$，考虑映射 $x \mapsto a(x, y)$。由共轭双线性，该映射是线性的；由有界性条件 (i)，它是 $H$ 上的有界线性泛函。根据 Riesz 表示定理，存在唯一的向量，记为 $A y \in H$，使得对任意 $x \in H$，有  
$$
a(x, y) = \langle x, A y \rangle.
$$
定义算子 $A: H \to H$ 为 $y \mapsto A y$。

**验证 $A$ 是线性的**：对任意 $y, z \in H$ 和 $\alpha, \beta \in \mathbb{C}$，及任意 $x \in H$，有  
$$
\begin{aligned}
\langle x, A(\alpha y + \beta z) \rangle &= a(x, \alpha y + \beta z) \\
&= \overline{\alpha} a(x, y) + \overline{\beta} a(x, z) \\
&= \overline{\alpha} \langle x, A y \rangle + \overline{\beta} \langle x, A z \rangle \\
&= \langle x, \alpha A y \rangle + \langle x, \beta A z \rangle \\
&= \langle x, \alpha A y + \beta A z \rangle.
\end{aligned}
$$
由于这对所有 $x$ 成立，得 $A(\alpha y + \beta z) = \alpha A y + \beta A z$，故 $A$ 是线性的。


对任意 $y \in H$，由有界性条件 (i)，  
$$
|\langle x, A y \rangle| = |a(x, y)| \leq M \|x\| \|y\| \quad \text{对所有 } x \in H.
$$
取 $x = A y$，则  
$$
\|A y\|^2 = |\langle A y, A y \rangle| \leq M \|A y\| \|y\|.
$$
若 $A y \neq 0$，则 $\|A y\| \leq M \|y\|$；若 $A y = 0$，不等式自然成立。故 $\|A\| \leq M$，即 $A$ 是有界线性算子。


假设 $A x = 0$ 对某个 $x \in H$。则对任意 $y \in H$，有  
$$
a(x, y) = \langle x, A y \rangle.
$$
取 $y = x$，得  
$$
a(x, x) = \langle x, A x \rangle = 0.
$$
由强制性条件 (ii)，  
$$
0 = |a(x, x)| \geq \delta \|x\|^2,
$$
故 $\|x\| = 0$，即 $x = 0$。因此 $A$ 是单射。


设 $\{A x_n\}$ 是 $A$ 值域中的柯西序列。则对任意 $\varepsilon > 0$，存在 $N$ 使得当 $m, n \geq N$ 时，  
$$
\|A x_n - A x_m\| < \varepsilon.
$$
由强制性条件 (ii)，对 $x = x_n - x_m$，有  
$$
\delta \|x_n - x_m\|^2 \leq |a(x_n - x_m, x_n - x_m)| = |\langle x_n - x_m, A(x_n - x_m) \rangle| \leq \|x_n - x_m\| \|A(x_n - x_m)\|.
$$
若 $\|x_n - x_m\| \neq 0$，则  
$$
\|x_n - x_m\| \leq \frac{1}{\delta} \|A(x_n - x_m)\| = \frac{1}{\delta} \|A x_n - A x_m\| < \frac{\varepsilon}{\delta}.
$$
故 $\{x_n\}$ 是柯西序列。由 $H$ 的完备性，存在 $x \in H$ 使得 $x_n \to x$。由 $A$ 的连续性，$A x_n \to A x$，所以 $A x$ 是 $\{A x_n\}$ 的极限，即值域是闭的。


只需证明 $A$ 的值域在 $H$ 中稠密。设 $z \in H$ 与 $A$ 的值域正交，即对任意 $x \in H$，有 $\langle A x, z \rangle = 0$。取 $x = z$，则  
$$
\langle A z, z \rangle = 0.
$$
但 $a(z, z) = \langle z, A z \rangle$，故  
$$
|a(z, z)| = |\langle z, A z \rangle| = 0.
$$
由强制性条件 (ii)，  
$$
0 \geq \delta \|z\|^2,
$$
所以 $\|z\| = 0$，即 $z = 0$。因此值域是稠密的。结合第四步，值域是闭的，故值域 $= H$，即 $A$ 是满射。

对任意 $y \in H$，存在唯一 $x \in H$ 使得 $A x = y$。由强制性条件 (ii)，  
$$
\delta \|x\|^2 \leq |a(x, x)| = |\langle x, A x \rangle| = |\langle x, y \rangle| \leq \|x\| \|y\|,
$$
故  
$$
\|x\| \leq \frac{1}{\delta} \|y\|.
$$
即 $\|A^{-1} y\| \leq \frac{1}{\delta} \|y\|$，所以 $A^{-1}$ 是有界线性算子，且 $\|A^{-1}\| \leq \delta^{-1}$.


### 应用：椭圆型偏微分方程的弱解理论

#### 问题设定

考虑有界开集 $\Omega \subseteq \mathbb{R}^n$ 上的泊松方程（带零边界条件）：
$$
\begin{cases}
-\Delta u + \lambda u = f, & \text{在 } \Omega \text{ 上}, \\
u|_{\partial\Omega} = 0,
\end{cases}
$$
其中 $\Delta = \sum_{j=1}^n \frac{\partial^2}{\partial x_j^2}$ 是拉普拉斯算子，$\lambda \geq 0$ 是常数，$f \in L^2(\Omega)$。

#### 函数空间与双线性形式

我们使用 Sobolev 空间 $H_0^1(\Omega) = W_0^{1,2}(\Omega)$，即 $C_c^\infty(\Omega)$ 在 $H^1(\Omega)$ 范数下的闭包。其内积定义为：
$$
\langle f, g \rangle_{H_0^1(\Omega)} = \int_\Omega \nabla f \cdot \nabla g \, dx + \int_\Omega f g \, dx.
$$
对应的范数为 $\|f\|_{H_0^1(\Omega)} = \left( \int_\Omega |\nabla f|^2 + |f|^2 \, dx \right)^{1/2}$。

定义双线性形式：
$$
\alpha(u, v) = \int_\Omega \nabla u \cdot \nabla v \, dx + \lambda \int_\Omega u v \, dx, \quad \forall u, v \in H_0^1(\Omega).
$$

#### 验证 Lax-Milgram 定理条件

1. **有界性**：
   由 Cauchy-Schwarz 不等式，
   $$
   \begin{aligned}
   |\alpha(u, v)| &\leq \|\nabla u\|_{L^2(\Omega)} \|\nabla v\|_{L^2(\Omega)} + \lambda \|u\|_{L^2(\Omega)} \|v\|_{L^2(\Omega)} \\
   &\leq \max(1, \lambda) \left( \|\nabla u\|_{L^2(\Omega)} \|\nabla v\|_{L^2(\Omega)} + \|u\|_{L^2(\Omega)} \|v\|_{L^2(\Omega)} \right) \\
   &\leq \max(1, \lambda) \|u\|_{H_0^1(\Omega)} \|v\|_{H_0^1(\Omega)}.
   \end{aligned}
   $$
   故有界性成立，取 $M = \max(1, \lambda)$。

2. **强制性**：
   我们有
   $$
   \alpha(u, u) = \|\nabla u\|_{L^2(\Omega)}^2 + \lambda \|u\|_{L^2(\Omega)}^2.
   $$
   利用 Poincaré 不等式：存在常数 $C_P > 0$ 使得对任意 $u \in H_0^1(\Omega)$，有
   $$
   \|u\|_{L^2(\Omega)}^2 \leq C_P \|\nabla u\|_{L^2(\Omega)}^2.
   $$
   于是，
   $$
   \|u\|_{H_0^1(\Omega)}^2 = \|\nabla u\|_{L^2(\Omega)}^2 + \|u\|_{L^2(\Omega)}^2 \leq (1 + C_P) \|\nabla u\|_{L^2(\Omega)}^2.
   $$
   
   现在分两种情况：
   - 若 $\lambda \geq 1$，则 $\alpha(u, u) \geq \|\nabla u\|_{L^2(\Omega)}^2 + \|u\|_{L^2(\Omega)}^2 = \|u\|_{H_0^1(\Omega)}^2$。
   - 若 $0 \leq \lambda < 1$，则 $\alpha(u, u) \geq \|\nabla u\|_{L^2(\Omega)}^2 \geq \frac{1}{1 + C_P} \|u\|_{H_0^1(\Omega)}^2$。
   
   因此，取 $\delta = \min\left(1, \frac{1}{1 + C_P}\right)$，则对任意 $u \in H_0^1(\Omega)$，有
   $$
   \alpha(u, u) \geq \delta \|u\|_{H_0^1(\Omega)}^2.
   $$

#### 应用 Lax-Milgram 定理

由 Lax-Milgram 定理，存在唯一的有界线性算子 $A \in \mathcal{L}(H_0^1(\Omega), H_0^1(\Omega))$ 使得
$$
\alpha(u, v) = \langle u, A v \rangle_{H_0^1(\Omega)}, \quad \forall u, v \in H_0^1(\Omega),
$$
且 $A$ 可逆，$A^{-1} \in \mathcal{L}(H_0^1(\Omega), H_0^1(\Omega))$，满足 $\|A^{-1}\| \leq \delta^{-1}$。

#### 弱解的存在性与唯一性

定义线性泛函 $T_f: H_0^1(\Omega) \to \mathbb{R}$ 为
$$
T_f(v) = \int_\Omega f v \, dx.
$$
由 Cauchy-Schwarz 不等式和 Poincaré 不等式，$T_f$ 是 $H_0^1(\Omega)$ 上的连续线性泛函。

由 Riesz 表示定理，存在唯一 $u_f \in H_0^1(\Omega)$ 使得
$$
T_f(v) = \langle v, u_f \rangle_{H_0^1(\Omega)}, \quad \forall v \in H_0^1(\Omega).
$$

令 $u = A^{-1} u_f \in H_0^1(\Omega)$，则对任意 $v \in H_0^1(\Omega)$，有
$$
\begin{aligned}
T_f(v) &= \langle v, u_f \rangle_{H_0^1(\Omega)} \\
&= \langle v, A(A^{-1} u_f) \rangle_{H_0^1(\Omega)} \\
&= \alpha(v, A^{-1} u_f) \\
&= \alpha(A^{-1} u_f, v) \quad \text{（由 $\alpha$ 的对称性）}.
\end{aligned}
$$

因此，我们得到弱形式：
$$
\label{eq:weak-form}
\int_\Omega \nabla u \cdot \nabla v \, dx + \lambda \int_\Omega u v \, dx = \int_\Omega f v \, dx, \quad \forall v \in H_0^1(\Omega). \tag{1}
$$

函数 $u = A^{-1} u_f$ 称为原方程的**弱解**。

#### 弱解与经典解的关系

如果弱解 $u$ 还具有 $H^2(\Omega)$ 正则性，那么我们可以对 \eqref{eq:weak-form} 进行分部积分（在分布意义下），得到
$$
\int_\Omega (-\Delta u + \lambda u) v \, dx = \int_\Omega f v \, dx, \quad \forall v \in C_c^\infty(\Omega).
$$
由于 $C_c^\infty(\Omega)$ 在 $L^2(\Omega)$ 中稠密，这意味着
$$
-\Delta u + \lambda u = f \quad \text{在 } L^2(\Omega) \text{ 中几乎处处成立}.
$$
此外，由于 $u \in H_0^1(\Omega)$，边界条件 $u|_{\partial\Omega} = 0$ 在迹意义下成立。
