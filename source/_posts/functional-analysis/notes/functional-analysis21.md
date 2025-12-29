---
title: Ch 5.2 线性算子的谱
tags:
  - math
  - functional analysis
categories:
  - math
  - functional analysis
index_img: /img/fa.jpg
banner_img: /img/fa.jpg
excerpt: 泛函分析课程笔记
abbrlink: b131692d
date: 2025-12-12 17:08:46
---
# 谱理论预备
## 谱的定义

设 $X$ 为一个复Banach空间，且令 $A \in \mathcal{L}^c(X)$。算子 $A$ 的**谱**是集合
$$
\sigma(A) := \left\{ \lambda \in \mathbb{C} \mid \text{算子 } \lambda\mathbb{1} - A \text{ 不是双射} \right\}
$$
$$
= \mathrm{P}\sigma(A) \cup \mathrm{R}\sigma(A) \cup \mathrm{C}\sigma(A).
$$
其中 $\mathrm{P}\sigma(A)$ 是**点谱**，$\mathrm{R}\sigma(A)$ 是**剩余谱**，$\mathrm{C}\sigma(A)$ 是**连续谱**。它们被定义为：
1. $\mathrm{P}\sigma(A) := \left\{ \lambda \in \mathbb{C} \mid \text{算子 } \lambda\mathbb{1} - A \text{ 不是单射} \right\}$,
2. $\mathrm{R}\sigma(A) := \left\{ \lambda \in \mathbb{C} \mid \begin{array}{l} \text{算子 } \lambda\mathbb{1} - A \text{ 是单射} \\ \text{但其像集不稠密} \end{array} \right\}$,
3. $\mathrm{C}\sigma(A) := \left\{ \lambda \in \mathbb{C} \mid \begin{array}{l} \text{算子 } \lambda\mathbb{1} - A \text{ 是单射} \\ \text{且其像集稠密}, \\ \text{但它不是满射} \end{array} \right\}$.

算子 $A$ 的**预解集**是谱的补集。它记作
$$
\rho(A) := \mathbb{C} \setminus \sigma(A) = \left\{ \lambda \in \mathbb{C} \mid \text{算子 } \lambda\mathbb{1} - A \text{ 是双射} \right\}.
$$

一个复数 $\lambda$ 属于点谱 $\mathrm{P}\sigma(A)$ 当且仅当存在一个非零向量 $x \in X$ 使得
$$
Ax = \lambda x.
$$
元素 $\lambda \in \mathrm{P}\sigma(A)$ 称为 $A$ 的**特征值**，而非零向量 $x \in \ker(\lambda\mathbb{1} - A)$ 称为**特征向量**。当 $X$ 是一个实Banach空间且 $A \in \mathcal{L}(X)$ 时，我们记 $\sigma(A) := \sigma(A^c)$ 为复化算子 $A^c$ 的谱，类似地定义点谱、连续谱和剩余谱。

关于谱和预解集的划分，可以总结为如下表格：
|                                   | $(\lambda I - A)^{-1}$ | $\operatorname{Ran}(\lambda I - A)$对于$Y$ | $(\lambda I - A)^{-1}$ 有界性 | $(\lambda I - A)x = y$ 可解性         |
| --------------------------------- | ---------------------- | ------------------------------------------ | ----------------------------- | ------------------------------------- |
| $\lambda \in \mathrm{P}\sigma(A)$ | 无定义                 | 不稠                                       | 无定义                        | 即使有解也不唯一                      |
| $\lambda \in \mathrm{R}\sigma(A)$ | 存在                   | 不稠                                       | 无定义                        | 存在性只在 $H$ 中的不稠子集上         |
| $\lambda \in \mathrm{C}\sigma(A)$ | 存在                   | 稠                                         | “无界”                        | 存在性只在 $H$ 中的稠密集，且“不稳定” |
| $\lambda \in \rho(A)$             | 存在                   | Y                                          | 有界                          | 存在且唯一且稳定                      |



## 谱的例子

若 $\dim X = n < \infty$，则 $\sigma(A) = \mathrm{P}\sigma(A)$ 是特征值的集合，且 $\#\sigma(A) \le n$。若 $X = \{0\}$，则 $\sigma(A) = \emptyset$。

设 $X = \ell^2$，并定义算子 $A, B: \ell^2 \to \ell^2$ 为
$$
Ax := (x_2, x_3, x_4, \dots), \quad Bx := (0, x_1, x_2, x_3, \dots)
$$
对 $x = (x_i)_{i \in \mathbb{N}} \in \ell^2$。则
$$
\sigma(A) = \sigma(B) = \overline{\mathbb{D}}
$$
是复平面 $\mathbb{C}$ 中的闭单位圆盘，且
$$
\mathrm{P}\sigma(A) = \operatorname{int}(\overline{\mathbb{D}}), \quad \mathrm{R}\sigma(A) = \emptyset, \quad \mathrm{C}\sigma(A) = S^1,
$$
$$
\mathrm{P}\sigma(B) = \emptyset, \quad \mathrm{R}\sigma(B) = \operatorname{int}(\overline{\mathbb{D}}), \quad \mathrm{C}\sigma(B) = S^1.
$$

设 $X = \ell^2$，且令 $(\lambda_i)_{i \in \mathbb{N}}$ 为复数的一个有界序列。定义有界线性算子 $A: \ell^2 \to \ell^2$ 为
$$
Ax := (\lambda_i x_i)_{i \in \mathbb{N}} \quad \text{对 } x = (x_i)_{i \in \mathbb{N}} \in \ell^2.
$$
则
$$
\sigma(A) = \overline{\{ \lambda_i \mid i \in \mathbb{N} \}}, \quad \mathrm{P}\sigma(A) = \{ \lambda_i \mid i \in \mathbb{N} \}, \quad \mathrm{R}\sigma(A) = \emptyset.
$$
因此，每一个非空紧子集都是某个无限维Hilbert空间上的有界线性算子的谱。

## 谱的基本性质引理

设 $A: X \to X$ 为复Banach空间 $X$ 上的一个有界复线性算子，并记 $A^*: X^* \to X^*$ 为其复对偶算子。则以下结论成立：

1. 谱 $\sigma(A)$ 是 $\mathbb{C}$ 的一个紧子集。

2. $\sigma(A^*) = \sigma(A)$。

3. 算子 $A$ 和 $A^*$ 的点谱、剩余谱和连续谱满足如下关系：
   - $\mathrm{P}\sigma(A^*) \subset \mathrm{P}\sigma(A) \cup \mathrm{R}\sigma(A)$,
   - $\mathrm{P}\sigma(A) \subset \mathrm{P}\sigma(A^*) \cup \mathrm{R}\sigma(A^*)$,
   - $\mathrm{R}\sigma(A^*) \subset \mathrm{P}\sigma(A) \cup \mathrm{C}\sigma(A)$,
   - $\mathrm{R}\sigma(A) \subset \mathrm{P}\sigma(A^*)$,
   - $\mathrm{C}\sigma(A^*) \subset \mathrm{C}\sigma(A)$,
   - $\mathrm{C}\sigma(A) \subset \mathrm{R}\sigma(A^*) \cup \mathrm{C}\sigma(A^*)$.

4. 若 $X$ 是自反的，则 $\mathrm{C}\sigma(A^*) = \mathrm{C}\sigma(A)$，且
   - $\mathrm{P}\sigma(A^*) \subset \mathrm{P}\sigma(A) \cup \mathrm{R}\sigma(A)$,
   - $\mathrm{P}\sigma(A) \subset \mathrm{P}\sigma(A^*) \cup \mathrm{R}\sigma(A^*)$,
   - $\mathrm{R}\sigma(A^*) \subset \mathrm{P}\sigma(A)$,
   - $\mathrm{R}\sigma(A) \subset \mathrm{P}\sigma(A^*)$.


### 证明

谱是一个 $\mathbb{C}$ 的有界子集，且其补集是 $\mathbb{C}$ 的开子集，由关于预解集开性的定理可知。这证明了谱的紧性。谱与对偶谱相等由关于对偶算子谱的推论和恒等式 $(\lambda\mathbb{1}_X - A)^* = \lambda\mathbb{1}_{X^*} - A^*$ 得出。

为证明点谱、剩余谱与连续谱之间的关系，首先假设 $\lambda$ 属于 $A^*$ 的点谱。则 $\lambda\mathbb{1} - A^*$ 不是单射，因此根据关于对偶算子核与值域关系的定理，$\lambda\mathbb{1} - A$ 没有稠密像，故 $\lambda$ 属于 $A$ 的点谱或剩余谱。其次，假设 $\lambda$ 属于 $A^*$ 的剩余谱。则 $\lambda\mathbb{1} - A^*$ 是单射，因此 $\lambda\mathbb{1} - A$ 具有稠密像，故 $\lambda$ 属于 $A$ 的点谱或连续谱。第三，假设 $\lambda$ 属于 $A^*$ 的连续谱。则 $\lambda\mathbb{1} - A^*$ 是单射且具有稠密像，因此也具有弱\*稠密像。于是由关于对偶算子核与值域关系的定理可知，$\lambda\mathbb{1} - A$ 是单射且具有稠密像，所以 $\lambda$ 属于 $A$ 的连续谱。从这三个包含关系可以推出，$A$ 的点谱与 $A^*$ 的连续谱不相交，$A$ 的连续谱与 $A^*$ 的点谱不相交，且 $A$ 的剩余谱与 $A^*$ 的剩余谱和连续谱的并集不相交。这证明了点谱、剩余谱与连续谱之间的关系。

为证明自反空间的情形，观察到在自反情形下，$X^*$ 的一个线性子空间是弱\*稠密的当且仅当它是稠密的。因此，由关于对偶算子核与值域关系的定理可知，只要 $X$ 是自反的，就有 $A$ 和 $A^*$ 的连续谱相等。在此理解下，自反空间情形的其余断言直接由点谱、剩余谱与连续谱之间的关系得出。这证明了谱的基本性质引理。


## 全纯函数
这是另一个预备性小节。它讨论定义在复平面开子集上、取值于复Banach空间的全纯函数。谱理论中最重要的例子是算子值全纯函数。

### 定义
设 $\Omega \subset \mathbb{C}$ 是一个开集，$X$ 是一个复Banach空间，且 $f: \Omega \to X$ 是一个连续函数。

1. 若极限
   $$
   f'(z) := \lim_{h \to 0} \frac{f(z + h) - f(z)}{h}
   $$
   对所有 $z \in \Omega$ 存在，且导函数 $f': \Omega \to X$ 连续，则称函数 $f$ 是**全纯的**。

2. 设 $\gamma: [a, b] \to \Omega$ 是定义在紧区间 $[a, b] \subset \mathbb{R}$ 上的一个连续可微函数。则向量
   $$
   \int_\gamma f \, dz := \int_a^b f(\gamma(t)) \dot{\gamma}(t) \, dt
   $$
   在 $X$ 中被称为 **$f$ 沿 $\gamma$ 的积分**。

下一个引理刻画了算子值全纯函数。特别地，它表明每一个弱全纯的算子值函数在范数拓扑下都是连续的。

### 全纯函数的刻画引理

设 $X$ 和 $Y$ 为复Banach空间，且令 $A: \Omega \to \mathcal{L}^c(X,Y)$ 为一个在开集 $\Omega \subset \mathbb{C}$ 上定义的弱连续函数。则以下命题等价：

1. 函数 $A$ 是全纯的。
2. 对任意 $x \in X$ 和任意 $y^* \in Y^*$，函数
   $$
   \Omega \to \mathbb{C}: z \mapsto \langle y^*, A(z)x \rangle
   $$
   是全纯的。
3. 设 $z_0 \in \Omega$ 且 $r > 0$ 使得闭圆盘 $\overline{B_r(z_0)} = \{ z \in \mathbb{C} \mid |z - z_0| \le r \} \subset \Omega$。定义环路 $\gamma: [0,1] \to \Omega$ 为
   $$
   \gamma(t) := z_0 + r e^{2\pi i t}, \quad \text{其中 } 0 \le t \le 1.
   $$
   那么，对所有 $x \in X$，所有 $y^* \in Y^*$，以及所有 $w \in \mathbb{C}$，有
   $$
   |w - z_0| < r \quad \Longrightarrow \quad \langle y^*, A(w)x \rangle = \frac{1}{2\pi i} \int_\gamma \frac{\langle y^*, A(z)x \rangle}{z - w} \, dz.
   $$

#### 证明

函数全纯蕴含其弱形式全纯直接由定义得出；弱形式全纯蕴含柯西积分公式成立是复值全纯函数的柯西积分公式（参见 [1], p. 119）。

我们通过将全纯函数的标准论证推广到算子值函数来证明柯西积分公式蕴含函数全纯。对每个满足 $|w - z_0| < r$ 的 $w \in \mathbb{C}$，定义 $B(w) \in \mathcal{L}^c(X,Y)$ 和 $c \ge 0$ 为：
$$
B(w)x := \frac{1}{2\pi i} \int_\gamma \frac{A(z)x}{(z - w)^2} \, dz, \quad c := \sup_{|z - z_0| = r} \|A(z)\|.
$$
由关于连续映射在紧集上一致有界的定理可知，$c$ 是有限的。对于满足 $0 < |h| < r - |w|$ 的 $h \in \mathbb{C}$，我们证明：
$$
\left\| \frac{A(w + h) - A(w)}{h} - B(w) \right\| \le \frac{cr|h|}{(r - |w|)^2(r - |w| - |h|)}.
$$
为证明这一点，令 $x \in X$ 和 $y^* \in Y^*$。则由柯西积分公式和算子 $B(w)$ 的定义得：
$$
\begin{aligned}
& \left\langle y^*, \frac{A(w + h)x - A(w)x}{h} - B(w)x \right\rangle \\
= & \frac{1}{2\pi i} \int_\gamma \left( \frac{1}{h} \left( \frac{1}{z - w - h} - \frac{1}{z - w} \right) - \frac{1}{(z - w)^2} \right) \langle y^*, A(z)x \rangle \, dz \\
= & \frac{1}{2\pi i} \int_\gamma \frac{h \langle y^*, A(z)x \rangle}{(z - w)^2(z - w - h)} \, dz.
\end{aligned}
$$
函数沿曲线积分的绝对值以函数的上确界范数乘以曲线长度为上界。在当前情形下，曲线长度为 $2\pi r$。因此，
$$
\begin{aligned}
& \left| \left\langle y^*, \frac{A(w + h)x - A(w)x}{h} - B(w)x \right\rangle \right| \\
= & \frac{1}{2\pi} \left| \int_\gamma \frac{h \langle y^*, A(z)x \rangle}{(z - w)^2(z - w - h)} \, dz \right| \\
\le & \sup_{|z - z_0| = r} \frac{r|h| \, |\langle y^*, A(z)x \rangle|}{|z - w|^2 |z - w - h|} \\
\le & \frac{cr|h| \, \|y^*\| \|x\|}{(r - |w|)^2(r - |w| - |h|)}
\end{aligned}
$$
对所有 $x \in X$ 和所有 $y^* \in Y^*$ 成立。因此，上述差商与导数之差的估计式由哈恩-Banach定理（关于线性泛函范数实现的推论）得出。

由该估计式可知，函数 $A: \Omega \to \mathcal{L}^c(X,Y)$ 在每一点 $w \in B_r(z_0)$ 处可微，且其在 $w$ 处的导数等于 $B(w)$。因此，$A$ 在范数拓扑下连续，函数 $B: B_r(z_0) \to \mathcal{L}^c(X,Y)$ 也由定义连续。故 $A$ 是全纯的，这证明了全纯函数的刻画引理。

## Von Neumann 级数定理

设 $X$ 是一个复Banach空间，$T \in \mathcal{L}^c(X)$ 是一个有界线性算子，且其算子范数满足 $\|T\| < 1$。则恒等算子与 $T$ 的差 $I - T$ 是可逆的，其逆算子由 Neumann 级数给出：
$$
(I - T)^{-1} = \sum_{n=0}^{\infty} T^n,
$$
该级数在算子范数拓扑下绝对收敛。此外，逆算子的范数满足估计：
$$
\|(I - T)^{-1}\| \le \frac{1}{1 - \|T\|}.
$$

### 证明

由于 $\|T\| < 1$，考虑 Neumann 级数 $\sum_{n=0}^{\infty} T^n$ 在 $\mathcal{L}^c(X)$ 中的收敛性。对部分和进行估计：
$$
\left\| \sum_{n=0}^{N} T^n \right\| \le \sum_{n=0}^{N} \|T^n\| \le \sum_{n=0}^{N} \|T\|^n.
$$
因为 $\|T\| < 1$，几何级数 $\sum_{n=0}^{\infty} \|T\|^n$ 收敛，其和为 $1/(1 - \|T\|)$。因此，序列 $\left( \sum_{n=0}^{N} T^n \right)_{N \in \mathbb{N}}$ 是 $\mathcal{L}^c(X)$ 中的柯西列，从而收敛于某个算子 $S \in \mathcal{L}^c(X)$，且满足：
$$
\|S\| \le \sum_{n=0}^{\infty} \|T\|^n = \frac{1}{1 - \|T\|}.
$$

接下来验证 $S$ 确实是 $I - T$ 的逆。计算：
$$
(I - T)S = (I - T) \sum_{n=0}^{\infty} T^n = \sum_{n=0}^{\infty} T^n - \sum_{n=0}^{\infty} T^{n+1} = T^0 = I,
$$
以及：
$$
S(I - T) = \sum_{n=0}^{\infty} T^n (I - T) = \sum_{n=0}^{\infty} (T^n - T^{n+1}) = I.
$$
因此，$S = (I - T)^{-1}$，且范数估计成立。证毕。


## 预解恒等式

设 $X$ 是一个复Banach空间，$A \in \mathcal{L}^c(X)$ 是一个有界线性算子。对于 $\lambda \in \rho(A)$，定义预解式 $R(\lambda; A) := (\lambda I_X - A)^{-1}$。则以下性质成立：

1. **外部区域包含在预解集中**：若 $|\lambda| > \|A\|$，则 $\lambda \in \rho(A)$，且
   $$
   R(\lambda; A) = \sum_{n=0}^{\infty} \frac{A^n}{\lambda^{n+1}},
   $$
   并且有范数估计
   $$
   \|R(\lambda; A)\| \le \frac{1}{|\lambda| - \|A\|}.
   $$
   特别地，谱 $\sigma(A)$ 包含在闭球 $\{\lambda \in \mathbb{C} \mid |\lambda| \le \|A\|\}$ 中。

2. **预解集是开集**：对任意 $\lambda_0 \in \rho(A)$，若 $|\mu - \lambda_0| < \frac{1}{\|R(\lambda_0; A)\|}$，则 $\mu \in \rho(A)$，且预解式可展开为
   $$
   R(\mu; A) = R(\lambda_0; A) \sum_{n=0}^{\infty} \left( (\lambda_0 - \mu) R(\lambda_0; A) \right)^n.
   $$
   因此，预解集 $\rho(A)$ 是开集，从而谱 $\sigma(A)$ 是紧集。

3. **预解式映射是全纯的**：映射 $\Phi: \rho(A) \to \mathcal{L}^c(X)$，定义为 $\Phi(\lambda) = R(\lambda; A)$，是全纯函数，并且满足预解恒等式：对任意 $\lambda, \mu \in \rho(A)$，
   $$
   R(\lambda; A) - R(\mu; A) = (\mu - \lambda) R(\lambda; A) R(\mu; A).
   $$

### 证明
1. **外部区域包含在预解集中**：

   设 $|\lambda| > \|A\|$。考虑级数 $\sum_{n=0}^{\infty} \frac{A^n}{\lambda^{n+1}}$。由于 $\|A^n\| \le \|A\|^n$，我们有
   $$
   \sum_{n=0}^{\infty} \left\| \frac{A^n}{\lambda^{n+1}} \right\| \le \sum_{n=0}^{\infty} \frac{\|A\|^n}{|\lambda|^{n+1}} = \frac{1}{|\lambda|} \sum_{n=0}^{\infty} \left( \frac{\|A\|}{|\lambda|} \right)^n = \frac{1}{|\lambda| - \|A\|} < \infty.
   $$
   因此，该级数在算子范数下绝对收敛，从而收敛于某个算子 $S \in \mathcal{L}^c(X)$。现在验证 $S = (\lambda I - A)^{-1}$：
   $$
   (\lambda I - A) S = \sum_{n=0}^{\infty} \frac{(\lambda I - A) A^n}{\lambda^{n+1}} = \sum_{n=0}^{\infty} \frac{\lambda A^n - A^{n+1}}{\lambda^{n+1}} = \sum_{n=0}^{\infty} \left( \frac{A^n}{\lambda^n} - \frac{A^{n+1}}{\lambda^{n+1}} \right) = I,
   $$
   类似地，$S (\lambda I - A) = I$。因此，$\lambda \in \rho(A)$，且 $R(\lambda; A) = S$。范数估计由级数的收敛性直接得到。

2. **预解集是开集**：

   设 $\lambda_0 \in \rho(A)$。对于满足 $|\mu - \lambda_0| < \frac{1}{\|R(\lambda_0; A)\|}$ 的 $\mu$，定义算子
   $$
   T = (\lambda_0 - \mu) R(\lambda_0; A).
   $$
   则 $\|T\| \le |\lambda_0 - \mu| \cdot \|R(\lambda_0; A)\| < 1$。由 Von Neumann 级数定理，算子 $I - T$ 可逆，且
   $$
   (I - T)^{-1} = \sum_{n=0}^{\infty} T^n.
   $$
   注意到
   $$
   \mu I - A = (\lambda_0 I - A) - (\lambda_0 - \mu) I = (\lambda_0 I - A) \left( I - (\lambda_0 - \mu) R(\lambda_0; A) \right) = (\lambda_0 I - A) (I - T).
   $$
   由于 $\lambda_0 I - A$ 和 $I - T$ 都可逆，故 $\mu I - A$ 可逆，即 $\mu \in \rho(A)$，且
   $$
   R(\mu; A) = (I - T)^{-1} R(\lambda_0; A) = \sum_{n=0}^{\infty} \left( (\lambda_0 - \mu) R(\lambda_0; A) \right)^n R(\lambda_0; A).
   $$
   这证明了预解集是开集，且给出了预解式在 $\lambda_0$ 附近的展开式。

3. **预解式映射是全纯的**：

   首先，由预解恒等式：对任意 $\lambda, \mu \in \rho(A)$，
   $$
   R(\lambda; A) - R(\mu; A) = (\mu - \lambda) R(\lambda; A) R(\mu; A).
   $$
   将两边同时除以 $\mu - \lambda$（当 $\mu \neq \lambda$ 时），得到
   $$
   \frac{R(\mu; A) - R(\lambda; A)}{\mu - \lambda} = - R(\lambda; A) R(\mu; A).
   $$
   令 $\mu \to \lambda$，由预解式的连续性（由性质2可知，预解式在预解集内连续），我们得到
   $$
   \lim_{\mu \to \lambda} \frac{R(\mu; A) - R(\lambda; A)}{\mu - \lambda} = - R(\lambda; A)^2.
   $$
   因此，预解式映射在 $\lambda$ 处可微，且导数为 $-R(\lambda; A)^2$。由于映射 $\lambda \mapsto R(\lambda; A)^2$ 是连续的（由预解式的连续性），所以预解式映射是全纯的。

   预解恒等式的证明：对任意 $\lambda, \mu \in \rho(A)$，有
   $$
   (\lambda I - A)(R(\lambda; A) - R(\mu; A))(\mu I - A) = (\mu I - A) - (\lambda I - A) = (\mu - \lambda)I.
   $$
   两边同时左乘 $R(\lambda; A)$，右乘 $R(\mu; A)$，即得预解恒等式。

至此，我们证明了谱的性质。


# 谱半径

## 引理：谱不空定理
设 $X$ 是一个非零的复Banach空间，$A \in \mathcal{L}^c(X)$ 是一个有界线性算子。则算子 $A$ 的谱 $\sigma(A)$ 是非空的紧集。

### 证明

谱的紧性已在谱的性质中证明：由预解集为开集且谱包含在半径为 $\|A\|$ 的闭圆盘内，可知 $\sigma(A)$ 是 $\mathbb{C}$ 中的有界闭集，从而是紧集。

假设相反，即 $\sigma(A) = \emptyset$，那么特别地，$A$ 是可逆的。任取一个非零元素 $x \in X$，则 $A^{-1}x \neq 0$，因此由哈恩-Banach定理（关于线性泛函范数实现的推论），存在一个元素 $x^* \in X^*$ 使得 $\langle x^*, A^{-1}x \rangle = -1$。定义函数 $f: \mathbb{C} \to \mathbb{C}$ 为
$$f(\lambda) := \langle x^*, (\lambda \mathbb{1} - A)^{-1}x \rangle \quad \text{对 } \lambda \in \mathbb{C} = \rho(A).$$
则 $f$ 是全纯的（由预解恒等式引理），$f(0) = 1$（由定义），且对所有满足 $|\lambda| > \|A\|$ 的 $\lambda \in \mathbb{C}$，有
$$|f(\lambda)| \le \|x^*\| \|x\| \|(\lambda \mathbb{1} - A)^{-1}\| \le \frac{\|x^*\| \|x\|}{|\lambda| - \|A\|}.$$
因此，$f$ 是整个复平面上的一个非常值有界全纯函数，这与刘维尔定理矛盾。因此，$A$ 的谱是非空的，这证明了谱半径定理。


## 谱半径定理

设 $X$ 是一个非零的复Banach空间，且令 $A \in \mathcal{L}^c(X)$。则 $\sigma(A) \neq \emptyset$，且
$$
r_A := \lim_{n \to \infty} \|A^n\|^{1/n} = \sup_{\lambda \in \sigma(A)} |\lambda|.
$$

### 对于有限维情形
设 $X$ 是 $n$ 维复向量空间（$\dim X = n < +\infty$），$A \in M_n(\mathbb{C})$ 是 $n$ 阶复方阵，$\|\cdot\|$ 为任意矩阵范数（通常取算子范数）。

由 Schur 三角化定理（或酉三角化），存在酉矩阵 $U$（即 $U^*U = I$）使得：
$$A = U^* T U, \quad T = \begin{pmatrix}
\lambda_1 & * & \cdots & * \\
0 & \lambda_2 & \cdots & * \\
\vdots & \ddots & \ddots & \vdots \\
0 & \cdots & 0 & \lambda_n
\end{pmatrix},$$
其中 $\lambda_1, \dots, \lambda_n$ 是 $A$ 的特征值（按任意顺序排列），上三角部分 $*$ 表示可能非零的元素。
由于酉相似不改变谱，$\sigma(A^k) = \{\lambda^k : \lambda \in \sigma(A)\}$，且谱半径是特征值模的最大值，故：
$$r_\sigma(A^k) = \bigl(r_\sigma(A)\bigr)^k.$$
又因为谱半径不超过任何矩阵范数（即 $r_\sigma(B) \le \|B\|$ 对任意方阵 $B$ 成立），取 $B = A^k$，得：
$$\bigl(r_\sigma(A)\bigr)^k = r_\sigma(A^k) \le \|A^k\|.$$
于是：
$$r_\sigma(A) \le \|A^k\|^{1/k} \quad (\forall k \ge 1).$$
令 $k \to \infty$ 即得：
$$r_\sigma(A) \le \liminf_{k \to \infty} \|A^k\|^{1/k}. \tag{1}$$
引入参数 $t > 0$，定义对角矩阵：
$$D_t = \operatorname{diag}(t, t^2, \dots, t^n), \quad D_t^{-1} = \operatorname{diag}(t^{-1}, t^{-2}, \dots, t^{-n}).$$
构造矩阵：
$$B_t := D_t T D_t^{-1} = \begin{pmatrix}
\lambda_1 & t\lambda_1(*) & t^2\lambda_1(*) & \cdots & t^{n-1}\lambda_1(*) \\
0 & \lambda_2 & t\lambda_2(*) & \cdots & t^{n-2}\lambda_2(*) \\
0 & 0 & \lambda_3 & \cdots & t^{n-3}\lambda_3(*) \\
\vdots & \vdots & \ddots & \ddots & \vdots \\
0 & 0 & \cdots & 0 & \lambda_n
\end{pmatrix},$$
其中 $(*)$ 表示原上三角位置的非零常数（与 $t$ 无关）。
令 $V_t = D_t U$，则：
$$A = (D_t U)^{-1} B_t (D_t U) = V_t^{-1} B_t V_t,$$
故 $A^k = V_t^{-1} B_t^k V_t$。
由矩阵范数的相容性，存在常数 $C_t = \|V_t^{-1}\|\cdot\|V_t\| > 0$（依赖于 $t$）使得：
$$\|A^k\| \le C_t \|B_t^k\| \quad (\forall k \ge 1). \tag{2}$$
现在固定任意 $\varepsilon > 0$。因为 $|\lambda_i| \le r_\sigma(A)$，我们可以选择合适的 $t$ 使得 $B_t$ 的非对角元素足够小。具体地，定义：
$$M_t := \max_{1 \le i \le j \le n} |(B_t)_{ij}|,$$
并且注意到当 $t \to 0^+$ 时，$B_t$ 的非对角元趋于 0（因为每个非对角元都乘以 $t$ 的正幂次）。
因此，存在充分小的 $t_0 > 0$，使得当 $0 < t < t_0$ 时，有：
$$M_t \le r_\sigma(A) + \varepsilon.$$
此时，对任意 $k$，利用矩阵幂的估计（例如，通过矩阵元素增长率的界或直接使用范数定义）可得：
$$\|B_t^k\| \le n \bigl(r_\sigma(A) + \varepsilon\bigr)^k, \quad \forall k \ge 1.$$
结合 (2) 得：
$$\|A^k\| \le C_t n \bigl(r_\sigma(A) + \varepsilon\bigr)^k.$$
取 $k$ 次根并令 $k \to \infty$：
$$\limsup_{k \to \infty} \|A^k\|^{1/k} \le r_\sigma(A) + \varepsilon.$$
由于 $\varepsilon > 0$ 任意，有：
$$\limsup_{k \to \infty} \|A^k\|^{1/k} \le r_\sigma(A). \tag{3}$$

由 (1) 和 (3) 得：
$$\liminf_{k \to \infty} \|A^k\|^{1/k} \ge r_\sigma(A) \quad \text{且} \quad \limsup_{k \to \infty} \|A^k\|^{1/k} \le r_\sigma(A),$$
故极限存在且：
$$\lim_{k \to \infty} \|A^k\|^{1/k} = r_\sigma(A).$$

### 证明
非空性已经由引理给出。下面证明恒等式。

设 $\lambda \in \mathbb{C}$ 满足 $|\lambda| > r_A$。则 $r_{\lambda^{-1} A} = |\lambda|^{-1} r_A < 1$，因此根据关于算子范数小于1时 Neumann 级数收敛的推论，算子 $\mathbb{1} - \lambda^{-1} A$ 可逆。于是算子 $\lambda \mathbb{1} - A = \lambda (\mathbb{1} - \lambda^{-1} A)$ 是双射的，故 $\lambda \notin \sigma(A)$。因此，
$$
\sup_{\lambda \in \sigma(A)} |\lambda| \le r_A.
$$

为证明反向不等式，定义集合 $\Omega \subset \mathbb{C}$ 为
$$
\Omega := \{ z \in \mathbb{C} \mid z = 0 \text{ 或 } z^{-1} \in \rho(A) \},
$$
并定义映射 $R: \Omega \to \mathcal{L}^c(X)$ 为 $R(0) := 0$，以及对 $z \in \Omega \setminus \{0\}$，
$$
R(z) := (z^{-1} \mathbb{1} - A)^{-1}.
$$
则 $\Omega$ 是 $\mathbb{C}$ 的开子集，且 $R$ 在 $\Omega \setminus \{0\}$ 上的限制是全纯的（由预解恒等式引理）。此外，$\Omega$ 包含以原点为中心、半径为 $r_A^{-1}$ 的开圆盘，并且由关于 Neumann 级数收敛的推论可知，对所有满足 $r_A |z| < 1$ 的 $z \in \mathbb{C}$，有
$$
R(z) = z(\mathbb{1} - zA)^{-1} = \sum_{k=0}^{\infty} z^{k+1} A^k.
$$
因此，$R$ 是全纯的（由全纯函数的刻画引理），于是 $R$ 的第 $n$ 阶导函数 $R^{(n)}: \Omega \to \mathcal{L}^c(X)$ 对每个 $n \in \mathbb{N}$ 都是全纯的。

现在令 $r > \sup_{\lambda \in \sigma(A)} |\lambda|$，则以原点为中心、半径为 $r^{-1}$ 的闭圆盘包含在 $\Omega$ 中。取 $x \in X$ 和 $x^* \in X^*$，并将柯西积分公式（见全纯函数的刻画引理或参考教材）应用于幂级数
$$
\langle x^*, R(z)x \rangle = \sum_{k=1}^{\infty} \langle x^*, A^{k-1}x \rangle z^k
$$
和环路
$$
\gamma(t) := \frac{e^{2\pi i t}}{r}, \quad 0 \le t \le 1.
$$

那么，对每个 $n \in \mathbb{N}$，我们有
$$
\langle x^*, A^{n-1}x \rangle = \frac{1}{n!} \left. \frac{d^n}{dz^n} \right|_{z=0} \langle x^*, R(z)x \rangle = \frac{1}{2\pi i} \int_\gamma \frac{\langle x^*, R(z)x \rangle}{z^{n+1}} dz.
$$
由哈恩-Banach定理（关于线性泛函范数实现的推论），这意味着
$$
A^n = \frac{1}{2\pi i} \int_\gamma \frac{R(z)}{z^{n+2}} dz = \frac{1}{2\pi i} \int_0^1 \frac{\dot{\gamma}(t) R(\gamma(t))}{\gamma(t)^{n+2}} dt = \int_0^1 \frac{R(\gamma(t))}{\gamma(t)^{n+1}} dt.
$$
因此，由 Bochner 积分范数估计的性质，我们有
$$
\|A^n\| \le \int_0^1 \frac{\|R(\gamma(t))\|}{|\gamma(t)|^{n+1}} dt \\
= r^{n+1} \int_0^1 \|R(\gamma(t))\| \, dt \\
\le r^{n+1} \sup_{0 \le t \le 1} \|R(\gamma(t))\| \\
= r^{n+1} \sup_{|\lambda|=r} \|(\lambda \mathbb{1} - A)^{-1}\|
$$
对所有 $n \in \mathbb{N}$ 成立。记
$$
c := \sup_{|\lambda|=r} \|(\lambda \mathbb{1} - A)^{-1}\|.
$$

那么，对所有 $n \in \mathbb{N}$，有 $\|A^n\|^{1/n} \le r (rc)^{1/n}$，从而
$$
r_A = \lim_{n \to \infty} \|A^n\|^{1/n} \le r \lim_{n \to \infty} (rc)^{1/n} = r.
$$
这对所有 $r > \sup_{\lambda \in \sigma(A)} |\lambda|$ 成立，因此
$$
r_A \le \sup_{\lambda \in \sigma(A)} |\lambda|
$$
如所断言。结合前面的不等式，这证明了等式。