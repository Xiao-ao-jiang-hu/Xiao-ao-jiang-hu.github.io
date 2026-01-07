---
title: 泛函分析期末复习
tags:
  - math
  - functional analysis
categories:
  - math
  - functional analysis
index_img: /img/fa.jpg
banner_img: /img/fa.jpg
excerpt: 泛函分析课程期末复习笔记
abbrlink: 1b2b099a
date: 2026-01-06 21:53:55
---
# 弱拓扑
## 基础
### 定义
使得所有现行泛函连续的最弱（开集最少）的拓扑称为弱拓扑，记为 $\sigma(X, X^*)$。

### 弱拓扑的基
有限个开区间在有限个泛函下的原像的交，即形如
$$U = \bigcap_{i=1}^n \{x \in X : |f_i(x - x_0)| < \epsilon\}$$
的集合构成弱拓扑的一个基。

### 性质
1. 弱拓扑是局部凸的
2. $x_n \rightharpoonup x$ 当且仅当 $\forall x^* \in X^*$ 有 $\lim_{n \to \infty} x^*(x_n) = x^*(x)$
3. 凸集弱闭当且仅当闭
4. 子空间的弱闭包性质：如果 $E \subset X$ 是子空间，则
   1. $\overline{E} = (E^\perp)^\perp$
   2. $E$ 闭当且仅当 $E = (E^\perp)^\perp$
   3. $E$ 稠密当且仅当 $E^\perp = \{0\}$
5. 凸包性质（Mazur 定理）：若 $x_n \rightharpoonup x$，则存在 $y_n \in \text{conv}\{x_n, x_{n+1}, \ldots\}$ 使得 $y_n \to x$ 强收敛。
6. 单位球面的弱闭包是单位闭球。


## Banach-Alaoglu 定理
设 $X$ 是实赋范向量空间，则单位闭球在弱\*拓扑下是紧的。

### 推论
弱\*紧子集定理：设 $E \subset X$ 是子集
1. $E$ 弱\*紧
2. $E$ 弱\*闭且有界
3. $E$ 弱\*列紧
4. $E$ 弱\*列闭且有界

若 $X$ 是可分的，则上述四个条件等价。若 $X$ 不可分，则 (1) $\Leftrightarrow$ (2) $\Rightarrow$ (4) $\Leftarrow$ (3)。

## Banach-Dieudonné 定理
设 $X$ 是实 Banach 空间，$E \subset X^*$ 是线性子空间，则下列命题等价
1. $E$ 在弱\*拓扑下闭
2. $E\cap B_{X^*}$ 在弱\*拓扑下闭
3. $(E^\perp)^\perp = E$


## Eberlein-Šmulian 定理
设 $X$ 是实赋范向量空间，$E \subset X$，则下列命题等价
1. $X$ 自反
2. 单位闭球在弱拓扑下是紧的
3. 单位闭球在弱拓扑下是列紧的
4. 每个有界序列都有弱收敛子列

### 推论
James 定理：$X$ 自反当且仅当每个连续线性泛函在单位闭球上都能达到其范数。

# 对偶算子
## 定义
设 $X, Y$ 是赋范向量空间，$T \in B(X, Y)$，则定义 $T$ 的对偶算子 $T^* \in B(Y^*, X^*)$ 为
$$(T^*y^*)(x) = y^*(Tx), \quad \forall x \in X, y^* \in Y^*.$$

## 对偶性定理
设 $X$ 和 $Y$ 为实赋范向量空间，且设 $A: X \to Y$ 为一个有界线性算子。则以下成立：

1. $\mathrm{im}(A)^\perp = \ker(A^*)$ 且 ${}^\perp \mathrm{im}(A^*) = \ker(A)$。
2. $A$ 具有稠密值域当且仅当 $A^*$ 是单射。
3. $A$ 是单射当且仅当 $A^*$ 具有弱\*稠密值域。


## 闭值域定理
设 $X$ 和 $Y$ 为 Banach 空间，令 $A: X \to Y$ 为一个有界线性算子，并令 $A^*: Y^* \to X^*$ 为其对偶算子。则以下条件等价：

1. $\mathrm{im}(A) = {}^\perp \ker(A^*)$。
2. $A$ 的像在 $Y$ 中是一个闭子空间。
3. 存在一个常数 $c > 0$，使得对每个 $x \in X$，
$$
\inf_{A\xi=0} \|x + \xi\|_X \le c \|Ax\|_Y.
$$
4. $\mathrm{im}(A^*) = \ker(A)^\perp$。
5. $A^*$ 的像在 $X^*$ 中是一个弱\*闭子空间。
6. $A^*$ 的像在 $X^*$ 中是一个闭子空间。
7. 存在一个常数 $c > 0$，使得对每个 $y^* \in Y^*$，
$$
\inf_{A^*\eta=0} \|y^* + \eta\|_{Y^*} \le c \|A^*y^*\|_{X^*}.
$$

### 推论
对于单射，$ker(A) = \{0\}$，所以闭值域定理说明 $A$ 有闭值域当且仅当存在常数 $c > 0$ 使得 $\|Ax\|_Y \ge \frac{1}{c}\|x\|_X$。

算子及其对偶的双射性质和等距性质等价，且双射算子的对偶和逆可以交换


# 紧算子
## 定义
设 $X, Y$ 是赋范向量空间，$T \in B(X, Y)$，若 $T$ 将 $X$ 中的有界集映射为 $Y$ 中的相对紧集，则称 $T$ 为紧算子。

## 等价性性质
1. 紧算子都是完全连续的（即弱收敛序列的像是强收敛序列）
2. 如果 $X$ 是自反的，则紧和完全连续等价

## 对运算的封闭性
1. 紧算子的极限是紧算子
2. 紧算子和有界算子的乘积是紧算子
3. 算子紧当且仅当其对偶算子紧

# Fredholm 算子
## 定义
若算子的核和余核均为有限维，且值域闭，则称该算子为 Fredholm 算子。（其中值域闭是冗余的，可由余核有限维推出）

## 指数
设 $X, Y$ 是赋范向量空间，$T \in B(X, Y)$ 是 Fredholm 算子，则定义 $T$ 的指数为
$$\mathrm{ind}(T) = \dim(\ker(T)) - \dim(Y / \mathrm{im}(T)).$$

## 对偶性定理
1. 若 $A$ 和 $A^*$ 均有闭像，则 $\dim ker(A^*) = \dim coker(A)$ 且 $\dim ker(A) = \dim coker(A^*)$。
2. $A$ 是 Fredholm 算子当且仅当 $A^*$ 是 Fredholm 算子，且 $\mathrm{ind}(A^*) = -\mathrm{ind}(A)$。

## 主Fredholm定理
设 $X, Y$ 是 Banach 空间，$A \in B(X, Y)$ 是有界线性算子，则下列条件等价
1. $A$ 有限维核且有闭像
2. 存在 Banach 空间 $Z$ 和紧算子 $K \in B(X, Z)$，使得 $\|x\|_X \le c(\|Ax\|_Y + \|Kx\|_Z)$ 对所有 $x \in X$ 成立

## Fredholm 与紧算子的等价刻画定理
设 $X$ 和 $Y$ 是 Banach 空间，令 $A: X \to Y$ 为一个有界线性算子。则下列条件等价：
1. $A$ 是 Fredholm 算子。
2. 存在一个有界线性算子 $F: X \to Y$，使得算子 $\mathbb{I}_X - FA: X \to X$ 和 $\mathbb{I}_Y - AF: Y \to Y$ 是紧算子。


## Fredholm 算子的复合定理

设 $X, Y, Z$ 为 Banach 空间，且令 $A: X \to Y$ 和 $B: Y \to Z$ 为 Fredholm 算子。则 $BA: X \to Z$ 是一个 Fredholm 算子，且
$$
\text{index}(BA) = \text{index}(A) + \text{index}(B).
$$

# 复Banach空间
## 充要条件
一个实赋范向量空间 $X$ 可以赋予复结构当且仅当存在一个线性算子 $J \in B(X)$ 使得 $J^2 = -\mathbb{I}$。

## 构造步骤
1. 定义复数乘法：对任意 $x \in X$ 和复数 $a + bi$，定义 $(a + bi)x = ax + bJx$。
2. 定义复范数：对任意 $x \in X$，定义 $\|x\|_{\mathbb{C}} = \sup_{0 \le \theta < 2\pi} \|\cos\theta x + \sin\theta Jx\|$。

# 全纯函数
## 刻画引理
设 $X$ 和 $Y$ 为复Banach空间，且令 $A: \Omega \to \mathcal{L}^c(X,Y)$ 为一个在开集 $\Omega \subset \mathbb{C}$ 上定义的弱连续函数。则以下命题等价：

1. 函数 $A$ 是全纯的。
2. 对任意 $x \in X$ 和任意 $y^* \in Y^*$，函数
   $$
   \Omega \to \mathbb{C}: z \mapsto \langle y^*, A(z)x \rangle
   $$
   是全纯的。
3. 设环路 $\gamma: [0,1] \to \Omega$ 包含于 $\Omega$ ，那么对所有 $x \in X$，所有 $y^* \in Y^*$，以及所有 $w \in \mathbb{C}$，有
   $$
   |w - z_0| < r \quad \Longrightarrow \quad \langle y^*, A(w)x \rangle = \frac{1}{2\pi i} \int_\gamma \frac{\langle y^*, A(z)x \rangle}{z - w} \, dz.
   $$

# 谱
## 定义
设 $X$ 是复巴拿赫空间，$T: X \to X$ 是有界线性算子。
- 预解集：$\rho(T) = \{\lambda \in \mathbb{C} : \lambda I - T \text{ 可逆且有界}\}$。
- 谱集：$\sigma(T) = \mathbb{C} \setminus \rho(T)$。

谱分为互不相交的三部分：

- 点谱 $\sigma_p(T)$：$\lambda I - T$ 不是单射，即存在 $x \neq 0$ 使 $Tx = \lambda x$，$\lambda$ 称为特征值。
- 连续谱 $\sigma_c(T)$：$\lambda I - T$ 是单射且值域稠密但不是满射。
- 剩余谱 $\sigma_r(T)$：$\lambda I - T$ 是单射但值域不稠密。

## 基本性质
1. 非空紧性：$\sigma(T)$ 是 $\mathbb{C}$ 中的非空紧集。
2. 有界性：$\sigma(T) \subseteq \{\lambda : |\lambda| \leq \|T\|\}$。
3. 谱半径公式：
$$r(T) = \sup_{\lambda \in \sigma(T)} |\lambda| = \lim_{n \to \infty} \|T^n\|^{1/n} = \inf_{n \geq 1} \|T^n\|^{1/n}.$$

4. 预解式的解析性：预解式 $R(\lambda, T) = (\lambda I - T)^{-1}$ 在 $\rho(T)$ 上为算子值全纯函数，满足预解方程：
$$R(\lambda, T) - R(\mu, T) = (\mu - \lambda) R(\lambda, T) R(\mu, T).$$


## 紧算子的谱性质
1. 除 $0$ 外，谱点均为特征值，且特征值重数有限。
2. 非零特征值至多可数，且若有无穷多个，则以 $0$ 为唯一聚点。
3. 若 $T$ 自伴紧，则存在标准正交基由特征向量构成，且谱为实数集。

## 正规算子的谱性质
### 三类算子
1. 正规算子：$T$ 满足 $TT^* = T^*T$。
2. 自伴算子：$T$ 满足 $T = T^*$。
3. 酉算子：$T$ 满足 $T^*T = TT^* = I$。

后两种包含于第一种。

### 三种算子的刻画
1. 正规算子：$\|Tx\| = \|T^*x\|$ 对所有 $x \in X$ 成立。
2. 自伴算子：$\langle Tx, x \rangle$ 为实数对所有 $x \in X$ 成立。
3. 酉算子：$\|Tx\| = \|T^*x\| = \|x\|$ 对所有 $x \in X$ 成立。


### 谱性质
设 $A$ 是正规算子。则
1. $\|A^n\| = \|A\|^n$ 对所有整数 $n \geq 1$ 成立。
2. 谱半径等于算子范数：$r(A) = \|A\|$。
3. 剩余谱及其对偶算子的剩余谱均为空。
4. 点谱和对偶算子的点谱互为共轭：$\sigma_p(A^*) = \{\overline{\lambda} : \lambda \in \sigma_p(A)\}$。
5. 酉算子的谱包含于单位圆上。
6. 设 $A$ 是紧的，则存在正交归一基由特征向量构成，且谱为实数集（若 $A$ 自伴）或包含于单位圆上（若 $A$ 酉）。

### 方法：预解式
在 $\rho(T)$ 上，$R(\lambda, T)$ 全纯，且当 $|\lambda| > r(T)$ 时有 Neumann 级数展开：
$$R(\lambda, T) = \sum_{n=0}^\infty \frac{T^n}{\lambda^{n+1}}.$$
通过分析预解式的奇点来研究谱。