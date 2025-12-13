---
title: ODE第五次作业
tags:
  - math
  - ode
categories:
  - math
  - ode-hw
excerpt: ODE第五次作业
index_img: /img/ode.jpg
banner_img: /img/ode.jpg
abbrlink: 40a8101e
date: 2025-11-01 01:35:01
---
# Ex1
设$\lambda, \epsilon>0$ ，记

$$J_{\lambda,\epsilon}:=\left[\begin{matrix}{\lambda}&{\epsilon}\\ {}&{\lambda}\\ \end{matrix}\right]$$

考虑系统$\dot{X}=J_{\lambda,\epsilon}X$ 记S为以原点为中心的单位圆周。

1. 设$Z\neq0。$ 、设$\phi(t,Z)$ 是系统取初值$X(0)=Z$ 时的解。证明该解曲线至少与S相交一次。解曲线最多与单位圆周相交几次?

2. 取定$\lambda>0$ ，证明存在$\epsilon_{0}>0$ 使得当$\epsilon\in(0,\epsilon_0)$ 时，系统的每条不为平衡点的相曲线仅与S相交一次。


3. 假设同2。现取定$\epsilon\in(0,\epsilon_0)$ 定义$T:\mathbb{R}^{2}\setminus\{0\}\to\mathbb{R}$ ：对每个$Z\ne0$ ，记$.T(Z)$ 是唯一使得$\phi(t,Z)\in S$ 的t。证明T连续。

## 解答

### 1
解为：
$$
\phi(t, Z) = e^{\lambda t} \begin{pmatrix} z_1 + \epsilon t z_2 \\ z_2 \end{pmatrix},
$$
其中 $Z = \begin{pmatrix} z_1 \\ z_2 \end{pmatrix}$。定义函数 $f(t) = \|\phi(t, Z)\|^2 = x(t)^2 + y(t)^2$，即：
$$
f(t) = e^{2\lambda t} \left[ (z_1 + \epsilon t z_2)^2 + z_2^2 \right].
$$
解曲线与 $S$ 相交当且仅当 $f(t) = 1$。

- **至少相交一次**：  
  当 $t \to -\infty$ 时，$e^{2\lambda t} \to 0$，且括号内表达式有界或多项式增长，但指数衰减主导，故 $f(t) \to 0 < 1$。  
  当 $t \to \infty$ 时，$e^{2\lambda t} \to \infty$，且括号内表达式趋向正无穷（若 $z_2 \neq 0$) 或常数正（若 $z_2 = 0$)，故 $f(t) \to \infty > 1$。  
  函数 $f(t)$ 连续，且 $f(0) = z_1^2 + z_2^2 > 0$（因 $Z \neq 0$)。由介值定理，存在 $t$ 使得 $f(t) = 1$，故解曲线至少与 $S$ 相交一次。

- **最多相交次数**：  
  方程 $f(t) = 1$ 的解的个数取决于参数。分析 $f(t)$：  
  $$
  h(t) = (z_1 + \epsilon t z_2)^2 + z_2^2 = \epsilon^2 z_2^2 t^2 + 2\epsilon z_1 z_2 t + (z_1^2 + z_2^2),
  $$
  $$
  f(t) = e^{2\lambda t} h(t).
  $$
  导数：
  $$
  f'(t) = e^{2\lambda t} \left[ 2\lambda h(t) + h'(t) \right], \quad h'(t) = 2\epsilon^2 z_2^2 t + 2\epsilon z_1 z_2.
  $$
  令 $p(t) = 2\lambda h(t) + h'(t)$，则 $f'(t) = e^{2\lambda t} p(t)$，且 $e^{2\lambda t} > 0$，故 $f'(t)$ 的符号由 $p(t)$ 决定。  
  $p(t)$ 是二次函数：
  $$
  p(t) = 2\lambda \epsilon^2 z_2^2 t^2 + (4\lambda \epsilon z_1 z_2 + 2\epsilon^2 z_2^2) t + (2\lambda z_1^2 + 2\lambda z_2^2 + 2\epsilon z_1 z_2).
  $$
  系数 $A = 2\lambda \epsilon^2 z_2^2 \geq 0$，当 $z_2 \neq 0$ 时 $A > 0$，抛物线开口向上。  
  - 若 $z_2 = 0$，则 $h(t) = z_1^2 > 0$，$f(t) = e^{2\lambda t} z_1^2$，严格递增，故 $f(t) = 1$ 有唯一解。  
  - 若 $z_2 \neq 0$，则 $A > 0$，$p(t)$ 的判别式为：
    $$
    D_p = (4\lambda \epsilon z_1 z_2 + 2\epsilon^2 z_2^2)^2 - 4 \cdot (2\lambda \epsilon^2 z_2^2) \cdot (2\lambda (z_1^2 + z_2^2) + 2\epsilon z_1 z_2) = 4 \epsilon^2 z_2^4 (\epsilon^2 - 4\lambda^2).
    $$
    $D_p$ 可正、负或零。  
    - 若 $D_p < 0$，则 $p(t) > 0$，$f'(t) > 0$，$f(t)$ 严格递增，故 $f(t) = 1$ 有唯一解。  
    - 若 $D_p = 0$，则 $p(t) \geq 0$，$f(t)$ 非减，且 $f(t) \to 0$（$t \to -\infty$) 和 $f(t) \to \infty$（$t \to \infty$)，故 $f(t) = 1$ 有唯一解。  
    - 若 $D_p > 0$（即 $\epsilon > 2\lambda$)，则 $p(t) = 0$ 有两个实根 $t_1 < t_2$，$f(t)$ 在 $(-\infty, t_1)$ 递增，$(t_1, t_2)$ 递减，$(t_2, \infty)$ 递增。结合极限行为，$f(t) = 1$ 最多有三个解（例如，当 $\lambda = 1$，$\epsilon = 3$，$Z = (0, 1)^\top$ 时，有三个交点）。

综上，解曲线与单位圆周至少相交一次，最多相交三次。

### 2
由前，$f(t) = e^{2\lambda t} h(t)$，且：
- 若 $z_2 = 0$，则 $f(t) = e^{2\lambda t} z_1^2$，严格递增，故 $f(t) = 1$ 有唯一解。  
- 若 $z_2 \neq 0$，则 $D_p = 4 \epsilon^2 z_2^4 (\epsilon^2 - 4\lambda^2) < 0$（因 $\epsilon < 2\lambda$)，故 $p(t) > 0$，$f'(t) > 0$，$f(t)$ 严格递增，故 $f(t) = 1$ 有唯一解。

因此，当 $\epsilon \in (0, \epsilon_0)$ 时，每条非平衡点（即 $Z \neq 0$) 的相曲线与 $S$ 仅相交一次。

### 3
  
首先函数 $f(t, Z)$ 关于 $(t, Z)$ 连续。其次偏导数 $\frac{\partial f}{\partial t}(t, Z) = f'(t)$，由前当 $\epsilon < 2\lambda$ 时，$\frac{\partial f}{\partial t}(t, Z) > 0$ 对所有 $t$ 和 $Z \neq 0$ 成立（严格递增）。对任意 $Z_0 \neq 0$，令 $t_0 = T(Z_0)$，则 $f(t_0, Z_0) = 1$ 且 $\frac{\partial f}{\partial t}(t_0, Z_0) > 0$。由隐函数定理，存在 $Z_0$ 的邻域和唯一连续函数 $g(Z)$ 满足 $g(Z_0) = t_0$ 且 $f(g(Z), Z) = 1$。由于 $T(Z)$ 也满足 $f(T(Z), Z) = 1$，故在邻域内 $T(Z) = g(Z)$，从而 $T$ 在 $Z_0$ 处连续。因 $Z_0 \neq 0$ 任意，故 $T$ 在 $\mathbb{R}^2 \setminus \{0\}$ 上连续。

# Ex2
习题2设$A\in M_{d}(\mathbb{R})$ 定义

$$\|A\|:=\sup\{|A x|:|x|\leq1\};\quad\|A\|_{\infty}:=\max\{|a_{i j}|:1\leq i,j\leq d\}.二$$

1)证明|·|与‖·$\parallel_{\infty}$ 均为$M_{d}(\mathbb{R})$ 上的范数。

2)证明|$\|AB\|\leq\|A\|\|B\|$ 1。对$\|\cdot\|_{\infty}$ 该性质成立吗?

3)证明

$$\|A\|_{\infty}\leq\|A\|\leq d\|A\|_{\infty}.$$

## 解答

### 1
一个范数必须满足以下三个条件：正定性（非负性且零矩阵的范数为零）、绝对齐次性（对任意标量 $c$ 有 $\|cA\| = |c| \|A\|$）和三角不等式（$\|A + B\| \leq \|A\| + \|B\|$）。

- **对 $\|\cdot\|$（算子范数）**：
  - **正定性**：  
    $\|A\| = \sup\{ |A x| : |x| \leq 1 \} \geq 0$，因为它是非负函数的上确界。  
    $\|A\| = 0$ 当且仅当对所有 $|x| \leq 1$ 有 $|A x| = 0$，这等价于 $A = 0$（零矩阵）。
  - **绝对齐次性**：  
    对任意 $c \in \mathbb{R}$，  
    $$
    \|c A\| = \sup\{ |c A x| : |x| \leq 1 \} = \sup\{ |c| \cdot |A x| : |x| \leq 1 \} = |c| \sup\{ |A x| : |x| \leq 1 \} = |c| \|A\|.
    $$
  - **三角不等式**：  
    对任意 $A, B \in M_d(\mathbb{R})$，  
    $$
    \|A + B\| = \sup\{ |(A + B) x| : |x| \leq 1 \} \leq \sup\{ |A x| + |B x| : |x| \leq 1 \} \leq \sup\{ |A x| : |x| \leq 1 \} + \sup\{ |B x| : |x| \leq 1 \} = \|A\| + \|B\|,
    $$
    其中第一个不等式由向量范数的三角不等式 $|(A + B)x| \leq |A x| + |B x|$ 得到，第二个不等式由上确界的性质得到。

  因此，$\|\cdot\|$ 是 $M_d(\mathbb{R})$ 上的范数。

- **对 $\|\cdot\|_{\infty}$（元素最大绝对值范数）**：
  - **正定性**：  
    $\|A\|_{\infty} = \max\{ |a_{ij}| : 1 \leq i,j \leq d \} \geq 0$，因为它是绝对值的最大值。  
    $\|A\|_{\infty} = 0$ 当且仅当所有 $|a_{ij}| = 0$，即 $A = 0$。
  - **绝对齐次性**：  
    对任意 $c \in \mathbb{R}$，  
    $$
    \|c A\|_{\infty} = \max\{ |c a_{ij}| : 1 \leq i,j \leq d \} = \max\{ |c| \cdot |a_{ij}| : 1 \leq i,j \leq d \} = |c| \max\{ |a_{ij}| : 1 \leq i,j \leq d \} = |c| \|A\|_{\infty}.
    $$
  - **三角不等式**：  
    对任意 $A, B \in M_d(\mathbb{R})$，  
    $$
    \|A + B\|_{\infty} = \max\{ |a_{ij} + b_{ij}| : 1 \leq i,j \leq d \} \leq \max\{ |a_{ij}| + |b_{ij}| : 1 \leq i,j \leq d \} \leq \max\{ |a_{ij}| : 1 \leq i,j \leq d \} + \max\{ |b_{ij}| : 1 \leq i,j \leq d \} = \|A\|_{\infty} + \|B\|_{\infty},
    $$
    其中第一个不等式由绝对值三角不等式 $|a_{ij} + b_{ij}| \leq |a_{ij}| + |b_{ij}|$ 得到，第二个不等式由最大值函数的性质得到。

  因此，$\|\cdot\|_{\infty}$ 是 $M_d(\mathbb{R})$ 上的范数。

### 2
- **对算子范数 $\|\cdot\|$**：  
  $$
  \|A B\| = \sup\{ |A B x| : |x| \leq 1 \}.
  $$
  对任意 $x$ 满足 $|x| \leq 1$，令 $y = B x$。由算子范数的定义，$|y| = |B x| \leq \|B\|$。  
  则
  $$
  |A B x| = |A y| \leq \|A\| |y| \leq \|A\| \|B\|,
  $$
  其中第一个不等式由算子范数的性质 $|A v| \leq \|A\| |v|$ 对所有向量 $v$ 成立（因为 $\|A\| = \sup_{|u|=1} |A u|$）。  
  因此，对所有 $|x| \leq 1$ 有 $|A B x| \leq \|A\| \|B\|$，取上确界得 $\|A B\| \leq \|A\| \|B\|$。

- **对 $\|\cdot\|_{\infty}$ 是否成立？**  
  该性质（子乘性 $\|A B\|_{\infty} \leq \|A\|_{\infty} \|B\|_{\infty}$）不成立。  
  **反例**：取 $d=2$，$A = B = \begin{pmatrix} 1 & 1 \\ 1 & 1 \end{pmatrix}$。  
  则 $\|A\|_{\infty} = \max\{|1|, |1|\} = 1$，$\|B\|_{\infty} = 1$。  
  计算乘积：
  $$
  A B = \begin{pmatrix} 1 & 1 \\ 1 & 1 \end{pmatrix} \begin{pmatrix} 1 & 1 \\ 1 & 1 \end{pmatrix} = \begin{pmatrix} 2 & 2 \\ 2 & 2 \end{pmatrix}, \quad \|A B\|_{\infty} = \max\{|2|, |2|\} = 2.
  $$
  有 $2 > 1 \cdot 1$，即 $\|A B\|_{\infty} > \|A\|_{\infty} \|B\|_{\infty}$，故子乘性不成立。

### 3
设 $A = (a_{ij}) \in M_d(\mathbb{R})$，$\|A\|_{\infty} = \max_{i,j} |a_{ij}| = M$。

- **左边不等式**：$\|A\|_{\infty} \leq \|A\|$。  
  设 $|a_{k\ell}| = M$（即最大值在位置 $(k,\ell)$ 取得）。取标准基向量 $e_\ell = (0, \dots, 0, 1, 0, \dots, 0)^\top$（第 $\ell$ 个分量为 1，其余为 0），则 $|e_\ell| = 1$（欧几里得范数）。  
  $A e_\ell$ 是 $A$ 的第 $\ell$ 列，记为 $c_\ell$，其第 $k$ 个分量为 $a_{k\ell}$。  
  则
  $$
  |A e_\ell| = |c_\ell| = \sqrt{\sum_{i=1}^d |a_{i\ell}|^2} \geq |a_{k\ell}| = M,
  $$
  因为求和包含 $|a_{k\ell}|^2$ 项。  
  由算子范数定义，
  $$
  \|A\| \geq |A e_\ell| \geq M = \|A\|_{\infty}.
  $$
  因此，$\|A\|_{\infty} \leq \|A\|$.

- **右边不等式**：$\|A\| \leq d \|A\|_{\infty}$。  
  需证 $\sup\{ |A x| : |x| \leq 1 \} \leq d M$。  
  对任意 $x = (x_1, \dots, x_d)^\top$ 满足 $|x| \leq 1$（欧几里得范数），令 $y = A x$，则 $y_i = \sum_{j=1}^d a_{ij} x_j$。  
  由绝对值不等式和 $\|A\|_{\infty} = M$，有
  $$
  |y_i| = \left| \sum_{j=1}^d a_{ij} x_j \right| \leq \sum_{j=1}^d |a_{ij}| |x_j| \leq \sum_{j=1}^d M |x_j| = M \sum_{j=1}^d |x_j|.
  $$
  则
  $$
  |y|^2 = \sum_{i=1}^d |y_i|^2 \leq \sum_{i=1}^d \left( M \sum_{j=1}^d |x_j| \right)^2 = M^2 \sum_{i=1}^d \left( \sum_{j=1}^d |x_j| \right)^2 = M^2 d \left( \sum_{j=1}^d |x_j| \right)^2,
  $$
  因为 $\sum_{i=1}^d$ 作用在常数上（内层和与 $i$ 无关）。  
  由 Cauchy-Schwarz 不等式，
  $$
  \left( \sum_{j=1}^d |x_j| \right)^2 \leq \left( \sum_{j=1}^d 1^2 \right) \left( \sum_{j=1}^d |x_j|^2 \right) = d \cdot |x|^2 \leq d \cdot 1 = d,
  $$
  所以
  $$
  |y|^2 \leq M^2 d \cdot d = d^2 M^2, \quad \text{故} \quad |y| \leq d M.
  $$
  因此，对所有 $|x| \leq 1$ 有 $|A x| \leq d M = d \|A\|_{\infty}$。取上确界得 $\|A\| \leq d \|A\|_{\infty}$.

综上，不等式 $\|A\|_{\infty} \leq \|A\| \leq d \|A\|_{\infty}$ 成立。

# Ex3
设$V$是一个有限维实线性空间。

1) 证明可以定义一个范数‖·‖使得V在此范数下成为一个赋范线性空间。

2) 设$\| \cdot \|_{i},i=1,2$ 是V上的两个范数，证明二者等价，即存在$C>1$ 使得对任意的$x\in V$ 有

$$C^{-1}\|x\|_2\leq\|x\|_1\leq C\|x\|_2.$$

## 解答
### 1
取 $V$ 的一组基 $\{e_1, e_2, \dots, e_n\}$。对任意向量 $x \in V$，可唯一表示为 $x = \sum_{i=1}^n a_i e_i$，其中 $a_i \in \mathbb{R}$。定义范数：
$$
\|x\| = \sqrt{\sum_{i=1}^n a_i^2}.
$$
下面验证此定义满足范数的三个性质：

- **正定性**：  
  $\|x\| = \sqrt{\sum_{i=1}^n a_i^2} \geq 0$，且 $\|x\| = 0$ 当且仅当 $\sum_{i=1}^n a_i^2 = 0$，即所有 $a_i = 0$，故 $x = 0$。

- **齐次性**：  
  对任意标量 $\alpha \in \mathbb{R}$，有 $\alpha x = \sum_{i=1}^n (\alpha a_i) e_i$，所以
  $$
  \|\alpha x\| = \sqrt{\sum_{i=1}^n (\alpha a_i)^2} = \sqrt{\alpha^2 \sum_{i=1}^n a_i^2} = |\alpha| \sqrt{\sum_{i=1}^n a_i^2} = |\alpha| \|x\|.
  $$

- **三角不等式**：  
  对任意 $x, y \in V$，设 $x = \sum_{i=1}^n a_i e_i$，$y = \sum_{i=1}^n b_i e_i$，则 $x + y = \sum_{i=1}^n (a_i + b_i) e_i$。  
  定义向量 $\mathbf{a} = (a_1, \dots, a_n)$, $\mathbf{b} = (b_1, \dots, b_n) \in \mathbb{R}^n$，则 $\|x\| = \|\mathbf{a}\|_2$, $\|y\| = \|\mathbf{b}\|_2$, $\|x + y\| = \|\mathbf{a} + \mathbf{b}\|_2$。  
  在 $\mathbb{R}^n$ 中，欧几里得范数满足三角不等式：$\|\mathbf{a} + \mathbf{b}\|_2 \leq \|\mathbf{a}\|_2 + \|\mathbf{b}\|_2$，即
  $$
  \|x + y\| \leq \|x\| + \|y\|.
  $$

因此，$\|\cdot\|$ 是 $V$ 上的一个范数，$V$ 在此范数下成为赋范线性空间。

### 2

设 $\|\cdot\|_1$ 和 $\|\cdot\|_2$ 是 $V$ 上的两个范数。需证存在常数 $C > 0$ 使得对任意 $x \in V$，有
$$
C^{-1} \|x\|_2 \leq \|x\|_1 \leq C \|x\|_2.
$$

考虑集合 $S = \{ x \in V : \|x\|_2 = 1 \}$（即 $\|\cdot\|_2$ 范数下的单位球面）。由于 $\|\cdot\|_2$ 是范数，$S$ 在 $\|\cdot\|_2$ 范数下有界且闭。在有限维空间中，有界闭集是紧致的（因为 $V$ 与 $\mathbb{R}^n$ 同胚，且 $\mathbb{R}^n$ 中的有界闭集是紧致的）。

定义函数 $f: S \to \mathbb{R}$ 为 $f(x) = \|x\|_1$。首先证明 $f$ 在 $\|\cdot\|_2$ 范数下连续。  
取序列 $\{x_k\} \subset S$ 满足 $\|x_k - x\|_2 \to 0$（即 $x_k \to x$ 在 $\|\cdot\|_2$ 范数下）。则
$$
|f(x_k) - f(x)| = \left| \|x_k\|_1 - \|x\|_1 \right| \leq \|x_k - x\|_1,
$$
其中不等式由范数的逆三角不等式给出。  
固定 $V$ 的一组基 $\{e_1, \dots, e_n\}$，则对任意 $z \in V$，有 $z = \sum_{i=1}^n z_i e_i$。定义 $\|z\|_\infty = \max_{1 \leq i \leq n} |z_i|$，这是一个范数。  
由基的线性无关性，存在常数 $K_1, K_2 > 0$（依赖于基和范数）使得：
$$
\|z\|_1 \leq K_1 \|z\|_\infty, \quad \|z\|_\infty \leq K_2 \|z\|_2.
$$
（具体地，取 $K_1 = \sum_{i=1}^n \|e_i\|_1$，则 $\|z\|_1 \leq \sum |z_i| \|e_i\|_1 \leq K_1 \|z\|_\infty$；取 $K_2 = \max_{i} \|\phi_i\|$，其中 $\phi_i$ 是第 $i$ 个坐标泛函，则 $\|z\|_\infty \leq K_2 \|z\|_2$。）  
因此，
$$
\|x_k - x\|_1 \leq K_1 \|x_k - x\|_\infty \leq K_1 K_2 \|x_k - x\|_2.
$$
当 $\|x_k - x\|_2 \to 0$ 时，有 $\|x_k - x\|_1 \to 0$，从而 $|f(x_k) - f(x)| \to 0$，故 $f$ 连续。

由于 $S$ 紧致且 $f$ 连续，$f$ 在 $S$ 上取得最小值 $m$ 和最大值 $M$。因为 $S \subset V \setminus \{0\}$ 且 $\|\cdot\|_1$ 正定，有 $f(x) = \|x\|_1 > 0$ 对所有 $x \in S$，故 $m > 0$ 和 $M < \infty$。

对任意非零 $y \in V$，令 $x = y / \|y\|_2$，则 $\|x\|_2 = 1$，故 $x \in S$，且
$$
m \leq f(x) = \|x\|_1 \leq M \implies m \leq \frac{\|y\|_1}{\|y\|_2} \leq M.
$$
因此，
$$
m \|y\|_2 \leq \|y\|_1 \leq M \|y\|_2.
$$
当 $y = 0$ 时，两边为 0，不等式自然成立。取 $C = \max\{M, 1/m\}$，则
$$
C^{-1} \|y\|_2 \leq \|y\|_1 \leq C \|y\|_2,
$$
其中 $C^{-1} = \min\{1/M, m\} \leq m$ 且 $C \geq M$。因此，$\|\cdot\|_1$ 和 $\|\cdot\|_2$ 等价。

# Ex4
在$.C[0,$ ,1]上定义两个函数如下：

$$\|f\|_{1}:=\int_{0}^{1}|f(x)|d x;\quad\|f\|_{\infty}:=\sup\{|f(x)|:x\in[0,1]\}.$$

1) 证明.$\left\|_{1} 与 \right.$ $\parallel_{\infty}$ 均为范数。

2) 证明$\left(C[0,1],\|\cdot\|_{\infty}\right)$ 完备，即若$\{f_n:n\in\mathbb{N}\}$ 在范数$\|\cdot\|_{\infty}$ 下为$Cauchy 列$ ,则存在$f\in C[0,$ ,1]使得$f_{n}\rightarrow f。$ 

3) $(C[0,1],\|\cdot\|_1)$ )完备吗？说明理由。

## 解答
### 1
- **正定性**：  
  $\|f\|_1 = \int_0^1 |f(x)| \, dx \geq 0$，且 $\|f\|_1 = 0 \iff f = 0$（因连续函数积分非负且为零当且仅当函数恒零）。  
  $\|f\|_\infty = \sup_{x \in [0,1]} |f(x)| \geq 0$，且 $\|f\|_\infty = 0 \iff f = 0$（上确界为零当且仅当函数恒零）。  
- **绝对齐次性**：  
  $\|\alpha f\|_1 = |\alpha| \|f\|_1$，$\|\alpha f\|_\infty = |\alpha| \|f\|_\infty$（由积分和上确界的线性性质）。  
- **三角不等式**：  
  $\|f + g\|_1 \leq \|f\|_1 + \|g\|_1$（由 $|f + g| \leq |f| + |g|$ 及积分线性性）。  
  $\|f + g\|_\infty \leq \|f\|_\infty + \|g\|_\infty$（由 $|f + g| \leq |f| + |g|$ 及上确界性质）。  
故两者均为范数。

### 2
设 $\{f_n\}$ 是 $\|\cdot\|_\infty$-Cauchy 列。则 $\forall \epsilon > 0$，$\exists N$ 使得当 $m, n > N$ 时，$\sup_x |f_m(x) - f_n(x)| < \epsilon$。  
- **定义极限函数**：对每个 $x \in [0,1]$，$\{f_n(x)\}$ 是 $\mathbb{R}$ 的 Cauchy 列，故收敛。定义 $f(x) = \lim_{n \to \infty} f_n(x)$。  
- **一致收敛**：固定 $\epsilon > 0$，取 $N$ 使当 $m, n > N$ 时 $\|f_m - f_n\|_\infty < \epsilon$。令 $m \to \infty$，得 $|f_n(x) - f(x)| \leq \epsilon$ 对所有 $x$ 成立，故 $\|f_n - f\|_\infty \to 0$。  
- **连续性**：因 $f_n$ 一致收敛于 $f$ 且 $f_n$ 连续，故 $f$ 连续（一致收敛保持连续性）。  
故空间完备。

### 3
**反例**：定义函数序列  
$$
f_n(x) = 
\begin{cases} 
0 & x \in [0, \frac{1}{2} - \frac{1}{n}], \\
n(x - (\frac{1}{2} - \frac{1}{n})) & x \in (\frac{1}{2} - \frac{1}{n}, \frac{1}{2}), \\
1 & x \in [\frac{1}{2}, 1].
\end{cases}
$$  
- **连续性**：每个 $f_n$ 连续（分段线性）。  
- **Cauchy 列**：当 $m > n > 1$ 时，$\|f_m - f_n\|_1 \leq \int_{\frac{1}{2} - \frac{1}{n}}^{\frac{1}{2}} 1 \, dx = \frac{1}{n}$，故 $\forall \epsilon > 0$，取 $N > 1/\epsilon$，当 $m > n > N$ 时 $\|f_m - f_n\|_1 < \epsilon$。  
- **收敛但极限不连续**：$\|f_n - f\|_1 \to 0$，其中  
  $$
  f(x) = 
  \begin{cases} 
  0 & x < \frac{1}{2}, \\
  1 & x \geq \frac{1}{2}.
  \end{cases}
  $$  
  但 $f$ 在 $x = \frac{1}{2}$ 不连续，故 $f \notin C[0,1]$。  
故该空间不完备。


# Ex5
考虑初值问题

$$\dot{x}=x^{2};\quad x(0)=1;$$

1) 写出初值问题的等价积分方程形式。

2) $\phi_{0}(t)\equiv1$ 出发，计算$P i c a r$ d迭代序列$\left|\phi_{n}(t)\right.$ 

3) $\{\phi_{n}:n\geq1\}$ ·收敛吗？若收敛，其是否为初值问题的解?

## 解答
### 1
$$x(t) = 1 + \int_{0}^{t} [x(s)]^{2}  ds$$

### 2
从初始猜测 $\phi_0(t) \equiv 1$ 出发，Picard 迭代定义为：
$$\phi_{n+1}(t) = 1 + \int_{0}^{t} [\phi_n(s)]^2  ds$$

通项不会求

### 3
收敛，且极限函数是解：

收敛性：
在 $|t| < 1$ 内，序列 $\{\phi_n(t)\}$ 一致收敛到极限函数 $\lim_{n \to \infty} \phi_n(t) = \frac{1}{1 - t}$。该极限函数是初值问题在 $|t| < 1$ 内的唯一解。

验证解：
满足初始条件：$\frac{1}{1 - 0} = 1$。
满足微分方程：$\frac{d}{dt} \left( \frac{1}{1 - t} \right) = \frac{1}{(1 - t)^2} = \left( \frac{1}{1 - t} \right)^2$。
在 $t = 1$ 处有奇点，序列不收敛。

综上，序列在 $|t| < 1$ 内收敛到初值问题的解。

# Ex6
举例说明 $e^{A+B} = e^A e^B$ 不一定成立

## 解答
取矩阵：  
$$
A = \begin{pmatrix} 0 & 1 \\ 0 & 0 \end{pmatrix}, \quad B = \begin{pmatrix} 0 & 0 \\ 1 & 0 \end{pmatrix}.
$$
 
1. $e^A e^B = \begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix} \begin{pmatrix} 1 & 0 \\ 1 & 1 \end{pmatrix} = \begin{pmatrix} 2 & 1 \\ 1 & 1 \end{pmatrix}$.  
2. $e^{A+B} = e^{\begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}} = \begin{pmatrix} \cosh 1 & \sinh 1 \\ \sinh 1 & \cosh 1 \end{pmatrix} \approx \begin{pmatrix} 1.54308 & 1.17520 \\ 1.17520 & 1.54308 \end{pmatrix}$.  

二者不相等

# Ex7
习题7设$A\in M_{d}(\mathbb{R})$ 且$\left\|A\right\|<1。$ 证明级数

$$\phi(A):=-\sum_{n=0}^{\infty}\frac{A^n}{n}.$$

收敛。并计算$e^{\phi(A)}\circ$ 

## 解答
考虑级数 $\sum_{n=1}^{\infty} \frac{A^n}{n}$。由于 $\|A\| < 1$，且矩阵范数满足次乘性（即 $\|A^k\| \leq \|A\|^k$），有
$$\left\| \frac{A^n}{n} \right\| \leq \frac{\|A\|^n}{n}.$$
标量级数 $\sum_{n=1}^{\infty} \frac{\|A\|^n}{n}$ 收敛，因为当 $|r| < 1$ 时，$\sum_{n=1}^{\infty} \frac{r^n}{n} = -\ln(1 - r)$ 收敛（这里 $r = \|A\| < 1$)。矩阵空间 $M_d(\mathbb{R})$ 在范数下是 Banach 空间，因此级数 $\sum_{n=1}^{\infty} \frac{A^n}{n}$ 绝对收敛，从而收敛。故 $\phi(A) = -\sum_{n=1}^{\infty} \frac{A^n}{n}$ 收敛。

展开指数级数：
$$e^{\phi(A)} = \sum_{k=0}^{\infty} \frac{1}{k!} \left( -\sum_{m=1}^{\infty} \frac{A^m}{m} \right)^k.$$
因 $A$ 与自身交换，按 $A^s$ 分组系数：

$s=0$（常数项）：仅 $k=0$ 贡献，系数为 $1$。
$s=1$：仅 $k=1$，$m=1$，系数为 $\frac{(-1)^1}{1!} \cdot \frac{1}{1} = -1$。
$s \geq 2$：

$k=1$ 贡献 $-\frac{1}{s}$，
$k=2$ 贡献 $\frac{1}{2!} \sum_{\substack{m_1+m_2=s \\ m_i \geq 1}} \frac{1}{m_1 m_2}$，
更高 $k$ 类似。
关键：对 $s=2$，计算得 $-\frac{1}{2} + \frac{1}{2} \cdot 2 \cdot \frac{1}{1 \cdot 1} = 0$；
对 $s \geq 3$，组合恒等式保证系数为 $0$（如 $s=3$：$-\frac{1}{3} + \frac{1}{2} \left( \frac{1}{1 \cdot 2} + \frac{1}{2 \cdot 1} \right) - \frac{1}{6} \cdot \frac{1}{1 \cdot 1 \cdot 1} = 0$）。


故 $e^{\phi(A)} = I - A$。