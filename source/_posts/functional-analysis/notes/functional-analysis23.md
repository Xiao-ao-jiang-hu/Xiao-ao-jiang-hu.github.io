---
title: Ch 5.4 复 Hilbert 空间上的谱理论
tags:
  - math
  - functional analysis
categories:
  - math
  - functional analysis
index_img: /img/fa.jpg
banner_img: /img/fa.jpg
excerpt: 泛函分析课程笔记
abbrlink: 123fd101
date: 2025-12-29 09:07:00
---
# 伴随算子

设 $A: X \to Y$ 是复 Hilbert 空间之间的有界复线性算子。则 $A$ 的对偶算子是复对偶空间之间的有界线性算子 $A^*_{\text{Banach}}: Y^* \to X^*$，该算子在引入对偶算子的定义部分中引入。在 Hilbert 空间背景下，可以利用 Hilbert 空间同构定理中的同构将对偶算子 $A^*_{\text{Banach}}$ 替换为算子
$$
A^*_{\text{Hilbert}} := \iota_X^{-1} \circ A^*_{\text{Banach}} \circ \iota_Y : Y \to X
$$
该算子作用于原始的 Hilbert 空间，称为 $A$ 的伴随算子。因此，对偶算子与伴随算子通过以下交换图相关联：
$$
\begin{CD}
Y @>A^*_{\text{Hilbert}}>> X \\
@V\iota_YVV @VV\iota_XV \\
Y^* @>A^*_{\text{Banach}}>> X^*
\end{CD}
$$

从现在起，我们省略下标“Banach”和“Hilbert”，仅使用伴随算子。因此，在本章余下的部分中，记号 $A^*$ 获得新的含义，表示复 Hilbert 空间之间有界复线性算子的伴随算子。Banach 空间背景下的对偶算子将不再使用。

## 伴随算子的定义

设 $X$ 和 $Y$ 为复 Hilbert 空间，且 $A \in \mathcal{L}^c(X,Y)$ 为一个有界复线性算子。$A$ 的**伴随算子**是唯一的算子 $A^*: Y \to X$，满足方程
$$
\langle A^* y, x \rangle_X = \langle y, Ax \rangle_Y
$$
对所有 $x \in X$ 和所有 $y \in Y$ 成立。由 Hilbert 空间同构定理可知其良定义，并且它与关于埃尔米特内积的伴随算子的例子中关联于 $X$ 和 $Y$ 上埃尔米特内积实部的伴随算子一致。

若 $H$ 是一个复 Hilbert 空间，则子集 $S \subset H$ 的**复正交补**记作
$$
S^\perp := \{ x \in H \mid \langle x, y \rangle = 0 \text{ 对所有 } y \in S \}。
$$
任何子集 $S \subset H$ 的复正交补是一个闭复线性子空间。它在 Hilbert 空间同构定理给出的同构 $\iota: H \to H^*$ 下同构于 $S$ 的复零化子，通常不同于关于实内积的正交补。当子集 $S$ 在乘以 $\mathrm{i}$ 下不变时，实正交补与复正交补一致。接下来的两个引理总结了正交补和伴随算子的性质。

## 正交补的性质引理

设 $H$ 为复 Hilbert 空间，$E \subset H$ 为复线性子空间。则 $\overline{E} = E^{\perp\perp}$，因此 $E$ 是闭的当且仅当 $E = E^{\perp\perp}$。

### 证明

根据定义，$E$ 的正交补的正交补与 $E$ 的零化子的预零化子一致。因此，结论由关于零化子和预零化子的推论的复类比得出。（另见关于正交补的推论）

## 伴随算子的性质引理

设 $X, Y, Z$ 为复 Hilbert 空间，且 $A \in \mathcal{L}^c(X,Y)$、$B \in \mathcal{L}^c(Y,Z)$。则以下成立：

1. $A^*$ 是有界复线性算子，且 $\|A^*\| = \|A\|$。
2. $(AB)^* = B^* A^*$ 且 $(\lambda \mathbb{I})^* = \overline{\lambda} \mathbb{I}$ 对所有 $\lambda \in \mathbb{C}$ 成立。
3. $A^{**} = A$。
4. $\ker(A^*) = \operatorname{im}(A)^\perp$ 且 $\overline{\operatorname{im}(A^*)} = \ker(A)^\perp$。
5. 若 $A$ 有闭像，则 $A^*$ 也有闭像。
6. 若 $A$ 是双射，则 $A^*$ 也是双射，且 $(A^*)^{-1} = (A^{-1})^*$。
7. 若 $A$ 是等距映射，则 $A^*$ 也是等距映射。
8. 若 $A$ 是紧算子，则 $A^*$ 也是紧算子。
9. 若 $A$ 是 Fredholm 算子，则 $A^*$ 也是 Fredholm 算子，且 $\operatorname{index}(A^*) = -\operatorname{index}(A)$。
10. 假设 $X = Y = H$。则
    $$
    \sigma(A^*) = \{ \overline{\lambda} \mid \lambda \in \sigma(A) \}
    $$
    并且
    $$
    \begin{aligned}
    \mathrm{P}\sigma(A^*) &\subset \{ \overline{\lambda} \mid \lambda \in \mathrm{P}\sigma(A) \cup \mathrm{R}\sigma(A) \}, \\
    \mathrm{R}\sigma(A^*) &\subset \{ \overline{\lambda} \mid \lambda \in \mathrm{P}\sigma(A) \}, \\
    \mathrm{C}\sigma(A^*) &= \{ \overline{\lambda} \mid \lambda \in \mathrm{C}\sigma(A) \}.
    \end{aligned}
    $$

### 证明

第 1 部分的论证与关于伴随算子范数的引理相同；第 2 和 3 部分直接由定义得出（另见关于伴随算子基本性质的引理）。第 4 部分由关于伴随算子与像和核的关系定理和正交补的性质引理得出。第 5 部分由关于闭像的定理得出；第 6 和 7 部分由关于伴随算子与逆和等距的关系推论得出；第 8 部分由关于紧算子的伴随定理得出；第 9 部分由关于 Fredholm 算子的伴随定理得出。第 10 部分由第 4 和 6 部分以及关系
$$
(\lambda \mathbb{I} - A)^* = \overline{\lambda} \mathbb{I} - A^*
$$
（由第 2 部分得出，另见关于谱映射的引理）推出。这证明了伴随算子的性质引理。

# 正规算子的谱

## 正规算子的定义

设 $H$ 为复 Hilbert 空间。有界复线性算子 $A: H \to H$ 称为

- **正规的**，若 $A^* A = A A^*$，
- **酉的**，若 $A^* A = A A^* = \mathbb{I}$，
- **自伴的**，若 $A^* = A$。

因此，每个自伴算子和每个酉算子都是正规的。

## 习题

设 $H$ 为复 Hilbert 空间，且令
$$
A = A^*: H \to H
$$
为一个自伴算子。证明：
$$
A = 0 \quad \Longleftrightarrow \quad \langle x, Ax \rangle = 0 \quad \text{对所有 } x \in H.
$$

## 例子

考虑复 Hilbert 空间 $H := \ell^2(\mathbb{N}, \mathbb{C})$，并选择一个复数的有界序列 $(\lambda_i)_{i \in \mathbb{N}}$。则算子
$$
A_\lambda: \ell^2(\mathbb{N}, \mathbb{C}) \to \ell^2(\mathbb{N}, \mathbb{C}),
$$
由
$$
A_\lambda x := (\lambda_i x_i)_{i \in \mathbb{N}} \quad \text{对 } x = (x_i)_{i \in \mathbb{N}} \in \ell^2(\mathbb{N}, \mathbb{C})
$$
定义，是正规的，其伴随算子由
$$
A_\lambda^* x := (\overline{\lambda}_i x_i)_{i \in \mathbb{N}} \quad \text{对 } x = (x_i)_{i \in \mathbb{N}} \in \ell^2(\mathbb{N}, \mathbb{C})
$$
给出。因此，$A_\lambda$ 是自伴的当且仅当对所有 $i$ 有 $\lambda_i \in \mathbb{R}$，且 $A_\lambda$ 是酉的当且仅当对所有 $i$ 有 $|\lambda_i| = 1$。

## 另一个例子

定义有界复线性算子
$$
A: \ell^2(\mathbb{N}, \mathbb{C}) \to \ell^2(\mathbb{N}, \mathbb{C})
$$
为
$$
Ax := (0, x_1, x_2, x_3, \dots) \quad \text{对 } x = (x_i)_{i \in \mathbb{N}} \in \ell^2(\mathbb{N}, \mathbb{C})。
$$
则
$$
A^* x := (x_2, x_3, x_4, \dots) \quad \text{对 } x = (x_i)_{i \in \mathbb{N}} \in \ell^2(\mathbb{N}, \mathbb{C})
$$
因此
$$
A^* A = \mathbb{I} \neq A A^*。
$$
因此 $A$ 不是正规的。它是一个等距嵌入但不是酉算子。

## 正规算子的刻画引理

设 $H$ 为复 Hilbert 空间，$A: H \to H$ 为有界复线性算子。则以下成立：

1. $A$ 是正规的当且仅当对所有 $x \in H$ 有 $\|A^* x\| = \|Ax\|$。
2. $A$ 是酉的当且仅当对所有 $x \in H$ 有 $\|A^* x\| = \|Ax\| = \|x\|$。
3. $A$ 是自伴的当且仅当对所有 $x \in H$ 有 $\langle x, Ax \rangle \in \mathbb{R}$。

### 证明

我们证明第 1 部分。若 $A$ 是正规的，则对所有 $x \in X$ 有
$$
\|Ax\|^2 = \langle Ax, Ax \rangle = \langle x, A^* A x \rangle = \langle x, A A^* x \rangle = \|A^* x\|^2。
$$
反之，假设对所有 $x \in X$ 有 $\|A^* x\| = \|Ax\|$。则对所有 $x,y \in H$，有
$$
\begin{aligned}
\operatorname{Re}\langle Ax, Ay \rangle &= \frac{1}{4} \left( \|Ax + Ay\|^2 - \|Ax - Ay\|^2 \right) \\
&= \frac{1}{4} \left( \|A^* x + A^* y\|^2 - \|A^* x - A^* y\|^2 \right) = \operatorname{Re}\langle A^* x, A^* y \rangle
\end{aligned}
$$
因此 $\operatorname{Im}\langle Ax, Ay \rangle = \operatorname{Re}\langle A\mathrm{i}x, Ay \rangle = \operatorname{Re}\langle A^* \mathrm{i}x, A^* y \rangle = \operatorname{Im}\langle A^* x, A^* y \rangle$。于是
$$
\langle A^* A x, y \rangle = \langle Ax, Ay \rangle = \langle A^* x, A^* y \rangle = \langle A A^* x, y \rangle
$$
对所有 $x,y \in H$ 成立，故 $A^* A = A A^*$。这证明了 1。

我们证明第 2 部分。若 $A$ 是酉的，则
$$
\|Ax\|^2 = \langle Ax, Ax \rangle = \langle x, A^* A x \rangle = \langle x, x \rangle = \|x\|^2
$$
且由类似论证，对所有 $x \in X$ 有 $\|A^* x\| = \|x\|$。反之，假设对所有 $x \in X$ 有 $\|Ax\| = \|A^* x\| = \|x\|$。则对所有 $x,y \in H$，有
$$
\begin{aligned}
\operatorname{Re}\langle Ax, Ay \rangle &= \frac{1}{4} \left( \|Ax + Ay\|^2 - \|Ax - Ay\|^2 \right) \\
&= \frac{1}{4} \left( \|x + y\|^2 - \|x - y\|^2 \right) = \operatorname{Re}\langle x, y \rangle
\end{aligned}
$$
因此 $\operatorname{Im}\langle Ax, Ay \rangle = \operatorname{Re}\langle A\mathrm{i}x, Ay \rangle = \operatorname{Re}\langle \mathrm{i}x, y \rangle = \operatorname{Im}\langle x, y \rangle$。于是
$$
\langle A^* A x, y \rangle = \langle Ax, Ay \rangle = \langle x, y \rangle
$$
对所有 $x,y \in H$ 成立，故 $A^* A = \mathbb{I}$。交换 $A$ 与 $A^*$ 的相同论证表明 $A A^* = \mathbb{I}$。因此 $A$ 是酉的，这证明了 2。

我们证明第 3 部分。若 $A$ 是自伴的，则 $\overline{\langle x, Ax \rangle} = \langle Ax, x \rangle = \langle x, Ax \rangle$，因此对所有 $x \in X$ 有 $\langle x, Ax \rangle \in \mathbb{R}$。反之，假设对所有 $x \in X$ 有 $\langle x, Ax \rangle \in \mathbb{R}$。则对所有 $x,y \in H$，有
$$
\begin{aligned}
\operatorname{Im}\langle x, Ay \rangle - \operatorname{Im}\langle Ax, y \rangle &= \operatorname{Im}\bigl( \langle x, Ay \rangle + \langle y, Ax \rangle \bigr) \\
&= \frac{1}{2} \operatorname{Im}\bigl( \langle x+y, Ax+Ay \rangle - \langle x-y, Ax-Ay \rangle \bigr) = 0
\end{aligned}
$$
因此 $\operatorname{Re}\langle x, Ay \rangle - \operatorname{Re}\langle Ax, y \rangle = \operatorname{Im}\langle x, A\mathrm{i}y \rangle - \operatorname{Im}\langle Ax, \mathrm{i}y \rangle = 0$。于是
$$
\langle A^* x, y \rangle = \langle x, Ay \rangle = \langle Ax, y \rangle
$$
对所有 $x,y \in H$ 成立，故 $A^* = A$。这证明了正规算子的刻画引理。

## 正规算子的谱定理

设 $H$ 为非零复 Hilbert 空间，$A \in \mathcal{L}^c(H)$ 为正规算子。则以下成立：

1. 对所有 $n \in \mathbb{N}$ 有 $\|A^n\| = \|A\|^n$。
2. $\|A\| = \sup_{\lambda \in \sigma(A)} |\lambda|$。
3. $\mathrm{R}\sigma(A^*) = \mathrm{R}\sigma(A) = \emptyset$ 且 $\mathrm{P}\sigma(A^*) = \{ \overline{\lambda} \mid \lambda \in \mathrm{P}\sigma(A) \}$。
4. 若 $A$ 是酉的，则 $\sigma(A) \subset S^1$。
5. 假设 $A$ 是紧的。则 $H$ 具有 $A$ 的特征向量的标准正交基。更精确地说，存在集合 $I \subset \mathbb{N}$（要么等于 $\mathbb{N}$，要么有限），$H$ 中的一个标准正交序列 $(e_i)_{i \in I}$，以及一个映射 $I \to \mathbb{C} \setminus \{0\}: i \mapsto \lambda_i$，使得当 $I = \mathbb{N}$ 时 $\lim_{i \to \infty} \lambda_i = 0$，且
   $$
   Ax = \sum_{i \in I} \lambda_i \langle e_i, x \rangle e_i \quad \text{对所有 } x \in H。
   $$

### 证明

若 $x \in H$ 是单位向量，则由正规算子的刻画引理，
$$
\|Ax\|^2 = \langle Ax, Ax \rangle = \langle x, A^* A x \rangle \le \|A^* A x\| = \|A^2 x\|。
$$
因此
$$
\|A^2\| \le \|A\|^2 = \sup_{\|x\|=1} \|Ax\|^2 \le \sup_{\|x\|=1} \|A^2 x\| = \|A^2\|
$$
所以 $\|A^2\| = \|A\|^2$。因此由归纳法可得对所有 $m \in \mathbb{N}$ 有 $\|A^{2^m}\| = \|A\|^{2^m}$。给定任意整数 $n \ge 1$，选择 $m \in \mathbb{N}$ 使得 $n < 2^m$，并推导出
$$
\|A\|^{2^m - n} \|A\|^n = \|A^{2^m}\| \le \|A^n\| \|A\|^{2^m - n}。
$$
因此 $\|A\|^n \le \|A^n\| \le \|A\|^n$，所以 $\|A^n\| = \|A\|^n$。这证明了第 1 部分。

第 2 部分由第 1 部分和谱半径定理得出。

为证明第 3 部分，固定元素 $\lambda \in \mathbb{C}$。则由伴随算子的性质引理的第 2 部分，$(\lambda \mathbb{I} - A)^* = \overline{\lambda} \mathbb{I} - A^*$。因此 $\lambda \mathbb{I} - A$ 是正规的，且由正规算子的刻画引理的第 1 部分可知 $\ker(\overline{\lambda} \mathbb{I} - A^*) = \ker(\lambda \mathbb{I} - A)$。因此，由伴随算子的性质引理的第 4 部分，有
$$
\overline{\operatorname{im}(\lambda \mathbb{I} - A)} = \ker(\overline{\lambda} \mathbb{I} - A^*)^\perp = \ker(\lambda \mathbb{I} - A)^\perp。
$$
由正交补的性质引理可知，算子 $\lambda \mathbb{I} - A$ 是单射当且仅当它有稠密像。因此 $\mathrm{R}\sigma(A) = \emptyset$，且由伴随算子的性质引理的第 10 部分得 $\mathrm{P}\sigma(A^*) = \{ \overline{\lambda} \mid \lambda \in \mathrm{P}\sigma(A) \}$。这证明了第 3 部分。

为证明第 4 部分，假设 $A$ 是酉的，且 $\lambda \in \sigma(A)$。则由谱半径定理有 $|\lambda| \le 1$。此外，由于 $A$ 可逆，$\lambda \ne 0$，且算子 $\lambda^{-1} \mathbb{I} - A^{-1} = (\lambda A)^{-1} (A - \lambda \mathbb{I})$ 不可逆。因此 $\lambda^{-1} \in \sigma(A^{-1})$，所以 $|\lambda|^{-1} \le \|A^{-1}\| = \|A^*\| = \|A\| = 1$。这证明了第 4 部分。

我们分三步证明第 5 部分。第一步证明特征空间两两正交，第二步证明每个广义特征向量都是特征向量，第三步证明所有非零特征值对应的特征空间直和的正交补是 $A$ 的核。

#### 步骤 1

若 $\lambda, \mu \in \sigma(A)$ 满足 $\lambda \ne \mu$，且 $x,y \in H$ 满足 $Ax = \lambda x$ 和 $Ay = \mu y$，则 $\langle x, y \rangle = 0$。

由正规算子的刻画引理，$\ker(\lambda \mathbb{I} - A) = \ker(\lambda \mathbb{I} - A)^* = \ker(\overline{\lambda} - A^*)$。因此
$$
(\lambda - \mu) \langle x, y \rangle = \langle \overline{\lambda} x, y \rangle - \langle x, \mu y \rangle = \langle A^* x, y \rangle - \langle x, Ay \rangle = 0
$$
这证明了步骤 1。

#### 步骤 2

设 $\lambda \in \sigma(A)$ 且 $n \in \mathbb{N}$。则 $\ker(\lambda \mathbb{I} - A)^n = \ker(\lambda \mathbb{I} - A)$。

设 $x \in \ker(\lambda \mathbb{I} - A)^2$。则由正规算子的刻画引理，$(\overline{\lambda} \mathbb{I} - A^*)(\lambda x - Ax) = 0$，因此
$$
\|\lambda x - Ax\|^2 = \langle \lambda x - Ax, \lambda x - Ax \rangle = \langle x, (\overline{\lambda} \mathbb{I} - A^*)(\lambda x - Ax) \rangle = 0,
$$
故 $x \in \ker(\lambda \mathbb{I} - A)$。于是
$$
\ker(\lambda \mathbb{I} - A)^2 = \ker(\lambda \mathbb{I} - A)
$$
这意味着对所有 $n \in \mathbb{N}$ 有 $\ker(\lambda \mathbb{I} - A)^n = \ker(\lambda \mathbb{I} - A)$。

#### 步骤 3

对 $\lambda \in \sigma(A) \setminus \{0\}$，定义 $E_\lambda := \ker(\lambda \mathbb{I} - A)$。则
$$
x \perp E_\lambda \quad \text{对所有 } \lambda \in \sigma(A) \setminus \{0\} \quad \Longleftrightarrow \quad Ax = 0
$$
对所有 $x \in H$ 成立。

若 $x \in \ker(A)$，则由步骤 1 知对所有 $\lambda \in \sigma(A) \setminus \{0\}$ 有 $x \perp E_\lambda$。为证明逆命题，定义
$$
H_0 := \{ x \in H \mid x \perp E_\lambda \text{ 对所有 } \lambda \in \sigma(A) \setminus \{0\} \}。
$$
则 $H_0$ 是 $H$ 的一个闭的 $A$-不变子空间，且
$$
A_0 := A|_{H_0}: H_0 \to H_0
$$
是一个紧正规算子。假设反证 $A_0 \ne 0$。则由紧算子的谱定理和第 2 部分可知 $A_0$ 有一个非零特征值。这与 $H_0$ 的定义矛盾，从而证明了步骤 3。

由紧算子的谱定理，集合 $\sigma(A) \setminus \{0\}$ 要么是有限集，要么是收敛于零的序列，且对所有 $\lambda \in \sigma(A) \setminus \{0\}$ 有 $\dim E_\lambda < \infty$。因此，第 5 部分由步骤 1、2、3 通过选取所有 $\lambda \in \sigma(A) \setminus \{0\}$ 对应的特征空间 $E_\lambda$ 的标准正交基得出。这证明了正规算子的谱定理。