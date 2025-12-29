---
title: 泛函分析第二十五次作业
tags:
  - math
  - functional analysis
categories:
  - math
  - functional analysis homework
index_img: /img/fa.jpg
banner_img: /img/fa.jpg
excerpt: 泛函分析第二十五次作业
date: 2025-12-28 18:07:04
---
# 25.1

尝试说明 $R: l^2 \to l^2$ 使得 $R(\{x_i\}_{i \ge 1}) = (0, x_1, x_2, \cdots)$。则 $C_\sigma(R) = \{|\lambda| = 1\}$; $R_\sigma(\lambda) = \{|\lambda| < 1\}$。（这表明 $P_\sigma(R)$ 是空集）

提示：连续谱的证明可以参考例子；剩余谱的刻画关键证明：$|\lambda| < 1$，有 $\text{Ran}(\lambda I - R) = \{(\bar{\lambda}^i)_{i \ge 0}\}^\perp$。

## 解答
- 点谱 $P_\sigma(R) = \emptyset$。
设 $R x = \lambda x$，比较分量得 $0 = \lambda x_1$，$x_1 = \lambda x_2$，$x_2 = \lambda x_3$，……
若 $\lambda = 0$，则 $x = 0$；若 $\lambda \ne 0$，则 $x_1 = 0$，进而 $x_2 = 0$，……，故 $x=0$。因此无特征值。


- 剩余谱 $R_\sigma(R) = \{|\lambda| < 1\}$。
当 $|\lambda| < 1$ 时，$\lambda I - R$ 是单射（点谱为空）。下证其值域不稠密。
考虑 $v = (1, \bar{\lambda}, \bar{\lambda}^2, \dots) \in l^2$，则 $v$ 是 $(\lambda I - R)^* = \bar{\lambda} I - L$ 的特征向量（$L$ 为左移），故对任意 $x \in l^2$ 有 $\langle (\lambda I - R)x, v \rangle = 0$，即 $\text{Ran}(\lambda I - R) \subset \{v\}^\perp$。
进一步可证 $\text{Ran}(\lambda I - R) = \{v\}^\perp$（闭子空间），故值域不稠密，$\lambda$ 属于剩余谱。


- 连续谱 $C_\sigma(R) = \{|\lambda| = 1\}$。
当 $|\lambda| = 1$ 时，$\lambda I - R$ 仍为单射。
由于 $(\bar{\lambda} I - L) v = 0$ 无非零解 $v \in l^2$（否则 $v$ 范数无穷），故 $\ker(\bar{\lambda} I - L) = \{0\}$，从而 $\overline{\text{Ran}(\lambda I - R)} = l^2$，即值域稠密。
但取 $y = (1,0,0,\dots)$，方程 $(\lambda I - R)x = y$ 的解 $x = (1/\lambda, 1/\lambda^2, \dots) \notin l^2$，故值域非全空间。因此 $\lambda$ 属于连续谱。


当 $|\lambda| > 1$ 时，$(\lambda I - R)^{-1} = \lambda^{-1} \sum_{j=0}^\infty \lambda^{-j} R^j$ 收敛，故 $\lambda$ 属于预解集。


综上，$P_\sigma(R) = \emptyset$，$C_\sigma(R) = \{|\lambda|=1\}$，$R_\sigma(R) = \{|\lambda|<1\}$。

# 25.2

设 $X$ 为复 Banach 空间，$A \in \mathcal{L}^c(X)$ 为双射且是有界复线性算子，实数 $\varepsilon, r$ 使得
$$
0 < \varepsilon < \|A^{-1}\|^{-1} \le \|A\| < r.
$$
证明 $\sigma(A) \subset \{\varepsilon < |\lambda| < r\}$。


## 解答
由谱半径定理，$r_\sigma(A) = \lim_{n\to\infty} \|A^n\|^{1/n} \le \|A\|$，故对任意 $\lambda \in \sigma(A)$ 有 $|\lambda| \le r_\sigma(A) \le \|A\| < r$。
另一方面，$A$ 可逆，且 $\sigma(A^{-1}) = \{\mu^{-1} : \mu \in \sigma(A)\}$。对 $\lambda \in \sigma(A)$，有 $\lambda^{-1} \in \sigma(A^{-1})$，故 $|\lambda^{-1}| \le r_\sigma(A^{-1}) \le \|A^{-1}\|$，即 $|\lambda| \ge \|A^{-1}\|^{-1} > \varepsilon$。
因此 $\varepsilon < |\lambda| < r$，即 $\sigma(A) \subset \{\varepsilon < |\lambda| < r\}$。

# 25.3

设 $X$ 为复 Banach 空间，$\Omega \subset \mathbb{C}$ 为开集，$f: \Omega \to X$ 为全纯函数。

1. $f$ 的导数 $f': \Omega \to X$ 也是全纯的；
2. $f$ 是光滑的；
3. 取 $z_0 \in \Omega, r > 0$ 使得 $\overline{B_r(z_0)} \subset \Omega$，定义 $\gamma(t) := z_0 + re^{2\pi it}$，证明 $f$ 在 $w \in B_r(z_0)$ 处的第 $n$ 阶导数由柯西积分公式给出：
   $$
   f^{(n)}(w) = \frac{n!}{2\pi i} \int_\gamma \frac{f(z)}{(z-w)^{n+1}} dz.
   $$

## 解答
1. **$f'$ 全纯**：  
   取 $z_0 \in \Omega$，$r > 0$ 使 $\overline{B_r(z_0)} \subset \Omega$，令 $\gamma(t) = z_0 + r e^{2\pi i t}$。对任意 $\phi \in X^*$，$\phi \circ f$ 标量全纯，由柯西积分公式：
   $$
   (\phi \circ f)(w) = \frac{1}{2\pi i} \int_\gamma \frac{(\phi \circ f)(z)}{z-w} dz = \phi\left( \frac{1}{2\pi i} \int_\gamma \frac{f(z)}{z-w} dz \right), \quad w \in B_r(z_0).
   $$
   由哈恩-Banach定理，$f(w) = \frac{1}{2\pi i} \int_\gamma \frac{f(z)}{z-w} dz$。  
   被积函数关于 $w$ 强连续且强可微，可在积分号下求导：
   $$
   f'(w) = \frac{1}{2\pi i} \int_\gamma \frac{f(z)}{(z-w)^2} dz,
   $$
   故 $f'$ 全纯。

2. **$f$ 光滑**：  
   由 (1)，$f'$ 全纯，同理可得高阶导数存在且全纯，故 $f$ 无限可微（光滑）。

3. **柯西积分公式**：  
   对 $w \in B_r(z_0)$，归纳可得
   $$
   f^{(n)}(w) = \frac{n!}{2\pi i} \int_\gamma \frac{f(z)}{(z-w)^{n+1}} dz.
   $$
   归纳基础 $n=0$ 已证。假设对 $n$ 成立，则
   $$
   \frac{f^{(n)}(w+h)-f^{(n)}(w)}{h} = \frac{n!}{2\pi i} \int_\gamma f(z) \frac{1}{h} \left( \frac{1}{(z-w-h)^{n+1}} - \frac{1}{(z-w)^{n+1}} \right) dz,
   $$
   令 $h \to 0$，被积函数一致收敛到 $\frac{n+1}{(z-w)^{n+2}}$，故
   $$
   f^{(n+1)}(w) = \frac{(n+1)!}{2\pi i} \int_\gamma \frac{f(z)}{(z-w)^{n+2}} dz.
   $$




# 25.4

设 $X$ 为复 Banach 空间，$(a_n)_{n \in \mathbb{N}}$ 为 $X$ 中序列，且
$$
\rho := \frac{1}{\limsup_{n \to \infty} \|a_n\|^{1/n}} > 0.
$$
证明幂级数 $f(z) := \sum_{n=0}^\infty a_n z^n$ 对任意满足 $|z| < \rho$ 的复数 $z$ 收敛，并且 $f: B_\rho(0) \to X$ 是全纯函数；取 $0 < r < \rho$ 并定义环路 $\gamma(t) = re^{2\pi it}$，证明系数 $a_n$ 由以下公式给出：
$$
a_n = \frac{f^{(n)}(0)}{n!} = \frac{1}{2\pi i} \int_\gamma \frac{f(z)}{z^{n+1}} dz.
$$

## 解答
1. **收敛性**：对 $|z| < \rho$，有 $\limsup \|a_n z^n\|^{1/n} = |z|/\rho < 1$，故级数 $\sum_{n=0}^\infty a_n z^n$ 绝对收敛，定义 $f(z) = \sum_{n=0}^\infty a_n z^n$。
2. **全纯性**：对 $z_0$ 满足 $|z_0| < \rho$，取 $r$ 使 $|z_0| < r < \rho$。在 $|z-z_0| < r - |z_0|$ 内，可写
   $$
   f(z) = \sum_{k=0}^\infty \left( \sum_{n=k}^\infty \binom{n}{k} a_n z_0^{n-k} \right) (z-z_0)^k,
   $$
   或直接验证差商收敛到 $\sum_{n=1}^\infty n a_n z_0^{n-1}$，故 $f$ 全纯。
3. **系数公式**：取 $0 < r < \rho$，$\gamma(t) = r e^{2\pi i t}$。由一致收敛交换积分与求和：
   $$
   \frac{1}{2\pi i} \int_\gamma \frac{f(z)}{z^{n+1}} dz = \sum_{m=0}^\infty a_m \cdot \frac{1}{2\pi i} \int_\gamma z^{m-n-1} dz = a_n,
   $$
   因为 $\frac{1}{2\pi i} \int_\gamma z^k dz = \delta_{k,-1}$。  
   又由泰勒展开 $f(z) = \sum_{n=0}^\infty \frac{f^{(n)}(0)}{n!} z^n$，比较得 $a_n = \frac{f^{(n)}(0)}{n!}$。



# 25.5

设 $X$ 为复 Banach 空间，$A: X \to X$ 为有界复线性算子，$p(z) = \sum_{k=0}^n a_k z^k$ 为复系数多项式，直接证明算子 $p(A) := \sum_{k=0}^n a_k A^k$ 满足 $\sigma(p(A)) = p(\sigma(A))$。

提示：为证明 $p(\sigma(A)) \subset \sigma(p(A))$，固定 $\lambda \in \sigma(A)$，则存在复系数多项式 $q$ 使得 $p(z) - p(\lambda) = (z - \lambda)q(z), \forall z \in \mathbb{C}$；为证明反向包含关系，不妨设 $a := a_n \ne 0$，固定 $\mu \in \sigma(p(A))$ 以及 $\lambda_1, \cdots, \lambda_n$ 为多项式 $p - \mu$ 的零点，于是 $p(z) - \mu = a \prod_{i=1}^n (z - \lambda_i), \forall z \in \mathbb{C}$，证明 $A - \lambda_i I$ 对某些 $i$ 不是双射。

## 解答
- **包含关系 $p(\sigma(A)) \subset \sigma(p(A))$**：  
  设 $\lambda \in \sigma(A)$，则 $p(z) - p(\lambda) = (z - \lambda) q(z)$，其中 $q$ 为多项式。于是
  $$
  p(A) - p(\lambda)I = (A - \lambda I) q(A) = q(A)(A - \lambda I).
  $$
  若 $p(A) - p(\lambda)I$ 可逆，则其逆与 $A-\lambda I$、$q(A)$ 交换（因它们生成交换代数），从而 $A-\lambda I$ 可逆，矛盾。故 $p(\lambda) \in \sigma(p(A))$。

- **包含关系 $\sigma(p(A)) \subset p(\sigma(A))$**：  
  设 $\mu \in \sigma(p(A))$，令 $a = a_n \ne 0$，分解 $p(z) - \mu = a \prod_{i=1}^n (z - \lambda_i)$，则
  $$
  p(A) - \mu I = a \prod_{i=1}^n (A - \lambda_i I).
  $$
  若所有 $A - \lambda_i I$ 可逆，则乘积可逆，矛盾。故存在 $i$ 使 $A - \lambda_i I$ 不可逆，即 $\lambda_i \in \sigma(A)$，且 $p(\lambda_i) = \mu$，故 $\mu \in p(\sigma(A))$。

综上，$\sigma(p(A)) = p(\sigma(A))$。