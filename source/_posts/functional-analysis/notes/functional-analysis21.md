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
# 5.2. 谱

## 谱的定义

设 $X$ 为一个复巴拿赫空间，且令 $A \in \mathcal{L}^c(X)$。算子 $A$ 的**谱**是集合
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
元素 $\lambda \in \mathrm{P}\sigma(A)$ 称为 $A$ 的**特征值**，而非零向量 $x \in \ker(\lambda\mathbb{1} - A)$ 称为**特征向量**。当 $X$ 是一个实巴拿赫空间且 $A \in \mathcal{L}(X)$ 时，我们记 $\sigma(A) := \sigma(A^c)$ 为复化算子 $A^c$ 的谱，类似地定义点谱、连续谱和剩余谱。

关于谱和正则集的划分，可以总结为如下表格：
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
因此，每一个非空紧子集都是某个无限维希尔伯特空间上的有界线性算子的谱。

## 谱的基本性质引理

设 $A: X \to X$ 为复巴拿赫空间 $X$ 上的一个有界复线性算子，并记 $A^*: X^* \to X^*$ 为其复对偶算子。则以下结论成立：

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

为证明自反空间的情形，观察到在自反情形下，$X^*$ 的一个线性子空间是弱\*稠密的当且仅当它是稠密的。因此，由关于对偶算子核与值域关系的定理可知，只要 $X$ 是自反的，就有 $A$ 和 $A^*$ 的连续谱相等。在此理解下，自反空间情形的其余断言直接由点谱、剩余谱与连续谱之间的关系得出。这证明了谱的基本性质引理。$\square$

## 预解恒等式引理

设 $X$ 为一个复巴拿赫空间，且令 $A \in \mathcal{L}^c(X)$。则预解集 $\rho(A) \subset \mathbb{C}$ 是开集。对于 $\lambda \in \rho(A)$，定义**预解算子** $R_\lambda(A) \in \mathcal{L}^c(X)$ 为
$$
R_\lambda(A) := (\lambda\mathbb{1} - A)^{-1}.
$$
那么映射 $\rho(A) \to \mathcal{L}^c(X): \lambda \mapsto R_\lambda(A)$ 是全纯的，并满足
$$
R_\lambda(A) - R_\mu(A) = (\mu - \lambda) R_\lambda(A) R_\mu(A)
$$
对所有 $\lambda, \mu \in \rho(A)$ 成立。此方程被称为**预解恒等式**。

### 证明

我们先证明预解恒等式。令 $\lambda, \mu \in \rho(A)$。则
$$
(\lambda\mathbb{1} - A)(R_\lambda(A) - R_\mu(A))(\mu\mathbb{1} - A) = (\mu\mathbb{1} - A) - (\lambda\mathbb{1} - A) = (\mu - \lambda)\mathbb{1}.
$$
在左边乘以 $R_\lambda(A)$，在右边乘以 $R_\mu(A)$，即可得到预解恒等式。

我们再证明 $\rho(A)$ 是开集，且映射 $\lambda \mapsto R_\lambda(A)$ 是连续的。固定一个元素 $\lambda \in \rho(A)$，并选择 $\mu \in \mathbb{C}$ 使得
$$
|\mu - \lambda| \, \|R_\lambda(A)\| < 1.
$$
则关于小扰动下可逆性保持的推论断言，算子
$$
(\mu\mathbb{1} - A)R_\lambda(A) = \mathbb{1} - (\lambda - \mu)R_\lambda(A)
$$
是双射的，且
$$
((\mu\mathbb{1} - A)R_\lambda(A))^{-1} = \sum_{k=0}^\infty (\lambda - \mu)^k R_\lambda(A)^k.
$$
因此 $\mu \in \rho(A)$，且
$$
R_\mu(A) = \sum_{k=0}^\infty (\lambda - \mu)^k R_\lambda(A)^{k+1} = R_\lambda(A) + \sum_{k=1}^\infty (\lambda - \mu)^k R_\lambda(A)^{k+1},
$$
从而
$$
\|R_\mu(A) - R_\lambda(A)\| \le \sum_{k=1}^\infty |\lambda - \mu|^k \|R_\lambda(A)\|^{k+1} = \frac{|\mu - \lambda| \, \|R_\lambda(A)\|^2}{1 - |\mu - \lambda| \, \|R_\lambda(A)\|}.
$$
这证明了 $\rho(A)$ 是开集，且映射 $\lambda \mapsto R_\lambda(A)$ 是连续的。该映射是全纯的，因为它满足方程
$$
\lim_{\mu \to \lambda} \frac{R_\mu(A) - R_\lambda(A)}{\mu - \lambda} = - \lim_{\mu \to \lambda} R_\lambda(A) R_\mu(A) = -R_\lambda(A)^2
$$
对 $\lambda \in \rho(A)$ 成立，且映射 $\lambda \mapsto R_\lambda(A)^2$ 是连续的。这证明了预解恒等式引理。$\square$