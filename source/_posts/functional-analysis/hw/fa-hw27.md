---
title: 泛函分析第二十七次作业
tags:
  - math
  - functional analysis
categories:
  - math
  - functional analysis homework
index_img: /img/fa.jpg
banner_img: /img/fa.jpg
excerpt: 泛函分析第二十七次作业
abbrlink: 5ee4e0d6
date: 2026-01-04 15:59:44
---
# 27.1
设 $X, Y, Z$ 是复 Hilbert 空间，$A \in \mathcal{L}(X;Y)$，$B \in \mathcal{L}(Y;Z)$。证明：

1. $A^* \in \mathcal{L}(Y;X)$ 且 $\|A^*\| = \|A\|$；
2. $(BA)^* = A^* B^*$，且对任意 $\lambda \in \mathbb{C}$，有 $(\lambda I_X)^* = \overline{\lambda} I_X$；
3. $\ker(A^*) = \operatorname{Ran}(A)^\perp$，且 $\overline{\operatorname{Ran}(A^*)} = \ker(A)^\perp$；
4. $\operatorname{Ran}(A)$ 闭当且仅当 $\operatorname{Ran}(A^*)$ 闭；
5. $A^{**} = A$；
6. 若 $A$ 是双射，则 $A^*$ 也是双射，且 $(A^*)^{-1} = (A^{-1})^*$；
7. 若 $A$ 是等距同构，则 $A^*$ 也是等距同构；
8. 若 $A$ 是紧算子，则 $A^*$ 也是紧算子；
9. 若 $A$ 是 Fredholm 算子，则 $A^*$ 也是 Fredholm 算子，且 $\operatorname{index}(A^*) + \operatorname{index}(A) = 0$。

## 解答  
### 1
由伴随算子的定义，对任意 $x \in X, y \in Y$，有 $\langle Ax, y \rangle_Y = \langle x, A^*y \rangle_X$。由于 $A$ 有界，对固定的 $y$，映射 $x \mapsto \langle Ax, y \rangle$ 是 $X$ 上的有界线性泛函，由 Riesz 表示定理，存在唯一的 $z \in X$ 使得 $\langle Ax, y \rangle = \langle x, z \rangle$，定义 $A^*y = z$，易证 $A^*$ 线性。  
对任意 $y \in Y$，若 $A^*y \neq 0$，则  
$$
\|A^*y\|^2 = \langle A^*y, A^*y \rangle = \langle A(A^*y), y \rangle \leq \|A(A^*y)\| \|y\| \leq \|A\| \|A^*y\| \|y\|,
$$  
故 $\|A^*y\| \leq \|A\| \|y\|$，即 $\|A^*\| \leq \|A\|$。  
另一方面，  
$$
\|A\| = \sup_{\|x\|=1} \|Ax\| = \sup_{\|x\|=1} \sup_{\|y\|=1} |\langle Ax, y \rangle| = \sup_{\|y\|=1} \sup_{\|x\|=1} |\langle x, A^*y \rangle| = \sup_{\|y\|=1} \|A^*y\| = \|A^*\|,
$$  
因此 $\|A^*\| = \|A\|$，且 $A^* \in \mathcal{L}(Y;X)$。  

### 2
对任意 $x \in X, z \in Z$，  
$$
\langle BAx, z \rangle_Z = \langle Ax, B^*z \rangle_Y = \langle x, A^*B^*z \rangle_X,
$$  
由伴随的唯一性得 $(BA)^* = A^*B^*$。  
对任意 $x, y \in X$，  
$$
\langle \lambda x, y \rangle = \lambda \langle x, y \rangle = \langle x, \overline{\lambda} y \rangle,
$$  
故 $(\lambda I_X)^* = \overline{\lambda} I_X$。  

### 3
- 若 $y \in \ker(A^*)$，则对任意 $x \in X$，$\langle Ax, y \rangle = \langle x, A^*y \rangle = 0$，故 $y \in \operatorname{Ran}(A)^\perp$。反之，若 $y \in \operatorname{Ran}(A)^\perp$，则对任意 $x$，$\langle Ax, y \rangle = 0$，从而 $\langle x, A^*y \rangle = 0$，故 $A^*y = 0$。所以 $\ker(A^*) = \operatorname{Ran}(A)^\perp$。  
- 先证 $\overline{\operatorname{Ran}(A^*)} \subseteq \ker(A)^\perp$：若 $z \in \overline{\operatorname{Ran}(A^*)}$，存在 $y_n$ 使 $A^*y_n \to z$，则对任意 $x \in \ker(A)$，$\langle x, z \rangle = \lim \langle x, A^*y_n \rangle = \lim \langle Ax, y_n \rangle = 0$，故 $z \in \ker(A)^\perp$。  
  再证 $\ker(A)^\perp \subseteq \overline{\operatorname{Ran}(A^*)}$：注意到 $\overline{\operatorname{Ran}(A^*)}^\perp = \ker(A)$（因为 $x \in \overline{\operatorname{Ran}(A^*)}^\perp$ 当且仅当对任意 $y$，$\langle x, A^*y \rangle = 0$，即 $\langle Ax, y \rangle = 0$，故 $Ax = 0$）。对一般子空间有 $(\overline{\operatorname{Ran}(A^*)}^\perp)^\perp = \overline{\operatorname{Ran}(A^*)}$，而 $\ker(A)^\perp = (\overline{\operatorname{Ran}(A^*)}^\perp)^\perp$，所以 $\ker(A)^\perp = \overline{\operatorname{Ran}(A^*)}$。  

### 4  
由 (3)，$\overline{\operatorname{Ran}(A)} = \ker(A^*)^\perp$，$\overline{\operatorname{Ran}(A^*)} = \ker(A)^\perp$。若 $\operatorname{Ran}(A)$ 闭，则 $\operatorname{Ran}(A) = \ker(A^*)^\perp$。考虑限制 $A: \ker(A)^\perp \to \operatorname{Ran}(A)$，这是双射，由开映射定理其逆有界。现证 $\operatorname{Ran}(A^*)$ 闭：取 $x_n = A^*y_n \in \operatorname{Ran}(A^*)$ 且 $x_n \to x$，可设 $y_n \in \ker(A^*)^\perp = \operatorname{Ran}(A)$，则存在 $z_n \in \ker(A)^\perp$ 使得 $Az_n = y_n$。由逆有界性，存在 $c>0$ 使 $\|z_n\| \leq c \|y_n\|$。又  
$$
\|x_n\| = \|A^*y_n\| = \|A^*Az_n\| \geq \frac{1}{c} \|z_n\|,
$$  
故 $\{z_n\}$ 有界，存在弱收敛子列，但由下界估计易证 $\{z_n\}$ 为 Cauchy 序列，收敛到某 $z \in \ker(A)^\perp$，则 $x = A^*Az \in \operatorname{Ran}(A^*)$，所以 $\operatorname{Ran}(A^*)$ 闭。反之，由对称性（因 $A^{**} = A$），若 $\operatorname{Ran}(A^*)$ 闭，则 $\operatorname{Ran}(A)$ 闭。  

### 5
对任意 $x \in X, y \in Y$，  
$$
\langle y, A^{**}x \rangle_Y = \langle A^*y, x \rangle_X = \overline{\langle x, A^*y \rangle_X} = \overline{\langle Ax, y \rangle_Y} = \langle y, Ax \rangle_Y,
$$  
故 $A^{**}x = Ax$，即 $A^{**} = A$。  

### 6
由开映射定理，$A^{-1} \in \mathcal{L}(Y;X)$。计算伴随：  
$$
(A^{-1}A)^* = A^*(A^{-1})^* = I_X^*, \quad (AA^{-1})^* = (A^{-1})^*A^* = I_Y^*,
$$  
即 $A^*(A^{-1})^* = I_X$，$(A^{-1})^*A^* = I_Y$，故 $A^*$ 可逆且 $(A^*)^{-1} = (A^{-1})^*$。  

### 7
等距同构即酉算子，满足 $A^*A = AA^* = I$，故 $A^* = A^{-1}$，所以 $A^*$ 也是等距同构（酉算子）。  

### 8
在 Hilbert 空间中，紧算子可用有限秩算子逼近。设有限秩算子 $A_n \to A$ 按算子范数，则 $A_n^* \to A^*$ 且 $\|A_n^* - A^*\| = \|A_n - A\| \to 0$。每个 $A_n^*$ 是有限秩的（若 $A_n = \sum_{i=1}^k \phi_i \otimes y_i$，则 $A_n^* = \sum_{i=1}^k \overline{\phi_i} \otimes x_i$），故 $A^*$ 为紧算子（紧算子空间是闭的）。  

### 9
$A$ 是 Fredholm 算子意味着 $\dim \ker(A) < \infty$，$\dim \operatorname{coker}(A) < \infty$，且 $\operatorname{Ran}(A)$ 闭。由 (3)，$\operatorname{coker}(A) \cong \ker(A^*)$，故 $\dim \ker(A^*) < \infty$。由 (4)，$\operatorname{Ran}(A^*)$ 闭。所以 $A^*$ 也是 Fredholm 算子。指标定义为  
$$
\operatorname{index}(A) = \dim \ker(A) - \dim \operatorname{coker}(A) = \dim \ker(A) - \dim \ker(A^*).
$$  
对于 $A^*$，有 $\operatorname{index}(A^*) = \dim \ker(A^*) - \dim \ker(A^{**}) = \dim \ker(A^*) - \dim \ker(A)$，因此 $\operatorname{index}(A^*) + \operatorname{index}(A) = 0$。  




# 27.2

设 $H$ 是非零复 Hilbert 空间，$A: H \to H$ 为正规算子。

1. 证明：
   $$
   \operatorname{Re}\lambda \geq 0,\ \forall \lambda \in \sigma(A)
   \iff
   \operatorname{Re}\langle x, Ax \rangle \geq 0,\ \forall x \in H.
   $$

2. 证明：
   $$
   \sup_{\|x\|=1} \operatorname{Re}\langle x, Ax \rangle = \sup_{\lambda \in \sigma(A)} \operatorname{Re}\lambda,
   \quad
   \inf_{\|x\|=1} \operatorname{Re}\langle x, Ax \rangle = \inf_{\lambda \in \sigma(A)} \operatorname{Re}\lambda.
   $$

3. 证明：
   $$
   \sigma(A) \cap i\mathbb{R} = \varnothing
   \iff
   A + A^* \text{ 是双射}.
   $$

4. 证明：
   $$
   \sigma(A + A^*) = \{ \lambda + \overline{\lambda} : \lambda \in \sigma(A) \}.
   $$

5. 说明：在上述 (1)–(4) 中，“$A$ 是正规算子”的假设不可省略。  
   **提示**：构造一个实 $2 \times 2$ 矩阵 $A$ 及向量 $x \in \mathbb{R}^2$，使得 $\sigma(A) = \{0\}$ 但 $\langle x, Ax \rangle > 0$。


### 1
由谱定理，存在谱测度 $E$ 使得 $A = \int_{\sigma(A)} \lambda \, dE(\lambda)$。对任意 $x \in H$，  
$$
\langle x, Ax \rangle = \int_{\sigma(A)} \lambda \, d\mu_x(\lambda), \quad \text{其中 } \mu_x(\Omega) = \langle E(\Omega)x, x \rangle.
$$  
于是 $\operatorname{Re}\langle x, Ax \rangle = \int_{\sigma(A)} \operatorname{Re}\lambda \, d\mu_x(\lambda)$。  
若 $\operatorname{Re}\lambda \geq 0$ 对所有 $\lambda \in \sigma(A)$ 成立，则积分非负，故 $\operatorname{Re}\langle x, Ax \rangle \geq 0$。  
反之，若对所有单位向量 $x$ 有 $\operatorname{Re}\langle x, Ax \rangle \geq 0$，假设存在 $\lambda_0 \in \sigma(A)$ 使 $\operatorname{Re}\lambda_0 < 0$。由于正规算子的谱是近似点谱，存在单位向量序列 $x_n$ 使 $\|(A - \lambda_0)x_n\| \to 0$，则 $\langle x_n, Ax_n \rangle \to \lambda_0$，从而 $\operatorname{Re}\langle x_n, Ax_n \rangle \to \operatorname{Re}\lambda_0 < 0$，矛盾。故 $\operatorname{Re}\lambda \geq 0$ 对所有 $\lambda \in \sigma(A)$ 成立。  

### 2
由谱表示，对单位向量 $x$，  
$$
\operatorname{Re}\langle x, Ax \rangle = \int_{\sigma(A)} \operatorname{Re}\lambda \, d\mu_x(\lambda) \leq \sup_{\lambda \in \sigma(A)} \operatorname{Re}\lambda,
$$  
故左端 $\leq$ 右端。由于 $\sigma(A)$ 紧，存在 $\lambda_0 \in \sigma(A)$ 使 $\operatorname{Re}\lambda_0 = \sup \operatorname{Re}\lambda$。由近似点谱性质，存在单位向量序列 $x_n$ 使 $\|(A - \lambda_0)x_n\| \to 0$，则 $\langle x_n, Ax_n \rangle \to \lambda_0$，从而 $\operatorname{Re}\langle x_n, Ax_n \rangle \to \operatorname{Re}\lambda_0$，故左端 $\geq$ 右端。同理可证下确界等式。  

### 3
由于 $A$ 正规，考虑连续函数演算：定义 $f(\lambda) = \lambda + \overline{\lambda} = 2\operatorname{Re}\lambda$，则 $f(A) = A + A^*$，且 $\sigma(A + A^*) = f(\sigma(A)) = \{2\operatorname{Re}\lambda : \lambda \in \sigma(A)\}$。  
$A + A^*$ 是双射当且仅当 $0 \notin \sigma(A + A^*)$，当且仅当对任意 $\lambda \in \sigma(A)$，$2\operatorname{Re}\lambda \neq 0$，即 $\operatorname{Re}\lambda \neq 0$，这等价于 $\sigma(A) \cap i\mathbb{R} = \varnothing$。  

### 4
由正规算子的谱映射定理，对连续函数 $f(\lambda) = \lambda + \overline{\lambda}$，有 $\sigma(f(A)) = f(\sigma(A))$，即 $\sigma(A + A^*) = \{\lambda + \overline{\lambda} : \lambda \in \sigma(A)\}$。  

### 5
取非零复 Hilbert 空间 $H=\mathbb C^{2}$，在其标准正交基底下定义线性算子
$$A=\begin{pmatrix}0&1\\0&0\end{pmatrix}.$$


$A$ 不是正规算子：
$$AA^{*}=\begin{pmatrix}1&0\\0&0\end{pmatrix}\neq A^{*}A=\begin{pmatrix}0&0\\0&1\end{pmatrix}.$$


谱：$\sigma(A)=\{0\}$，于是 $\operatorname{Re}\lambda=0$ 对所有 $\lambda\in\sigma(A)$ 成立。


(1) 不成立：取单位向量 $x=\frac{1}{\sqrt2}(1,-1)$，则
$$\langle x,Ax\rangle=\frac{1}{\sqrt2}(1,-1)\cdot\frac{1}{\sqrt2}(-1,0)=-\frac12,
\qquad\operatorname{Re}\langle x,Ax\rangle=-\frac12<0.$$
故 $\operatorname{Re}\lambda\ge0$（$\forall\lambda\in\sigma(A)$）并不能推出 $\operatorname{Re}\langle x,Ax\rangle\ge0$（$\forall x\in H$）。


(2) 不成立：数值范围的实部为
$$\{\operatorname{Re}\langle x,Ax\rangle:\|x\|=1\}=[-\tfrac12,\tfrac12].$$
因此
$$\sup_{\|x\|=1}\operatorname{Re}\langle x,Ax\rangle=\frac12>0=\sup_{\lambda\in\sigma(A)}\operatorname{Re}\lambda,
\qquad
\inf_{\|x\|=1}\operatorname{Re}\langle x,Ax\rangle=-\frac12<0=\inf_{\lambda\in\sigma(A)}\operatorname{Re}\lambda.$$


(3) 不成立：$\sigma(A)\cap i\mathbb R=\{0\}\neq\varnothing$，但
$$A+A^{*}=\begin{pmatrix}0&1\\1&0\end{pmatrix}$$
的特征值为 $\pm1$，故 $A+A^{*}$ 是双射（可逆）。


(4) 不成立：$\sigma(A+A^{*})=\{1,-1\}$，而
$$\{\lambda+\overline\lambda:\lambda\in\sigma(A)\}=\{0\}.$$
两者不相等。