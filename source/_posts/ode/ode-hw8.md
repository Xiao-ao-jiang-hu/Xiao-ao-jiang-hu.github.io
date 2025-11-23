---
title: ODE第八次作业
tags:
  - math
  - ode
categories:
  - math
  - ode
excerpt: ODE第八次作业
index_img: /img/ode.jpg
banner_img: /img/ode.jpg
date: 2025-11-23 18:40:03
---
# Ex 1
定义矩阵值函数

$$A(t):=\begin{bmatrix}t^2&-1\\ 2t&0\end{bmatrix}.$$

考虑线性方程$\dot{x}=A(t)x$ 

1) 验证$\phi(t):=(1,t^2)^t$ 是方程的解。

2) 做如下变量替换：
$$x=\begin{bmatrix}1&0\\ t^{2}&1\end{bmatrix}y $$
写出y满足的微分方程。

3) 求解2)中得到的微分方程。并得到原方程的一个解。

4) 求原方程的一组基。

## 解答
### 1
令 $\phi(t) = \begin{bmatrix} 1 \\ t^2 \end{bmatrix}$，计算其导数：

$$
\dot{\phi}(t) = \begin{bmatrix} 0 \\ 2t \end{bmatrix}
$$

再计算 $A(t)\phi(t)$：

$$
A(t)\phi(t) = \begin{bmatrix} t^2 & -1 \\ 2t & 0 \end{bmatrix} \begin{bmatrix} 1 \\ t^2 \end{bmatrix} = \begin{bmatrix} t^2 - t^2 \\ 2t \end{bmatrix} = \begin{bmatrix} 0 \\ 2t \end{bmatrix}
$$

由于 $\dot{\phi}(t) = A(t)\phi(t)$，因此 $\phi(t)$ 是该微分方程的一个解。


### 2

令 $P(t) = \begin{bmatrix} 1 & 0 \\ t^2 & 1 \end{bmatrix}$，则：

$$
x = P(t)y \Rightarrow \dot{x} = P'(t)y + P(t)\dot{y}
$$

又因 $\dot{x} = A(t)x = A(t)P(t)y$，代入得：

$$
P'(t)y + P(t)\dot{y} = A(t)P(t)y
\Rightarrow \dot{y} = P^{-1}(t)(A(t)P(t) - P'(t))y
$$

计算各部分：

- $P'(t) = \begin{bmatrix} 0 & 0 \\ 2t & 0 \end{bmatrix}$
- $A(t)P(t) = \begin{bmatrix} 0 & -1 \\ 2t & 0 \end{bmatrix}$
- $A(t)P(t) - P'(t) = \begin{bmatrix} 0 & -1 \\ 0 & 0 \end{bmatrix}$
- $P^{-1}(t) = \begin{bmatrix} 1 & 0 \\ -t^2 & 1 \end{bmatrix}$

因此：

$$
P^{-1}(t)(A(t)P(t) - P'(t)) = \begin{bmatrix} 0 & -1 \\ 0 & t^2 \end{bmatrix}
$$

于是 $y$ 满足的微分方程为：

$$
\dot{y} = \begin{bmatrix} 0 & -1 \\ 0 & t^2 \end{bmatrix} y
$$


### 3

由上式，$y$ 满足：

$$
\begin{cases}
\dot{y}_1 = -y_2 \\
\dot{y}_2 = t^2 y_2
\end{cases}
$$

先解 $\dot{y}_2 = t^2 y_2$，得：

$$
y_2(t) = C e^{\int t^2 dt} = C e^{t^3/3}
$$

再代入 $\dot{y}_1 = -y_2$，得：

$$
y_1(t) = -C \int e^{s^3/3} ds + D
$$

取 $C = 1$, $D = 0$，得一个特解：

$$
y(t) = \begin{bmatrix} -\int_0^t e^{s^3/3} ds \\ e^{t^3/3} \end{bmatrix}
$$

代入 $x = P(t)y$，得原方程的一个解：

$$
x(t) = \begin{bmatrix} 1 & 0 \\ t^2 & 1 \end{bmatrix} \begin{bmatrix} -\int_0^t e^{s^3/3} ds \\ e^{t^3/3} \end{bmatrix}
= \begin{bmatrix} -\int_0^t e^{s^3/3} ds \\ t^2 \left(-\int_0^t e^{s^3/3} ds \right) + e^{t^3/3} \end{bmatrix}
$$


### 4

已知 $\phi(t) = \begin{bmatrix} 1 \\ t^2 \end{bmatrix}$ 是一个解，另取上一题中得到的解：

$$
\psi(t) = \begin{bmatrix} -\int_0^t e^{s^3/3} ds \\ t^2 \left(-\int_0^t e^{s^3/3} ds \right) + e^{t^3/3} \end{bmatrix}
$$

计算 Wronski 行列式：

$$
W(t) = \det \begin{bmatrix} 1 & -\int_0^t e^{s^3/3} ds \\ t^2 & t^2 \left(-\int_0^t e^{s^3/3} ds \right) + e^{t^3/3} \end{bmatrix}
= e^{t^3/3} \neq 0
$$

因此 $\phi(t)$ 与 $\psi(t)$ 线性无关，构成一组基。


# Ex 2
求系统 $\dot{x} = \begin{bmatrix} 1 & t \\ 0 & 2 \end{bmatrix} x$ 的流 $\Pi(t, s)$。

## 解答
设
$$
\Pi(t, s) = \begin{bmatrix} \phi_{11}(t,s) & \phi_{12}(t,s) \\ 0 & \phi_{22}(t,s) \end{bmatrix}
$$

由 $\dot{x}_2 = 2x_2$，得：
$$
\phi_{22}(t,s) = e^{2(t - s)}
$$

由 $\dot{x}_1 = x_1$（当 $x_2=0$），得：
$$
\phi_{11}(t,s) = e^{t - s}
$$

考虑初始条件 $x(s) = [0, 1]^T$，即 $x_2(s) = 1$，则：
$$
x_2(t) = e^{2(t - s)}, \quad \dot{x}_1 = x_1 + t x_2
$$
这是一个一阶线性非齐次微分方程，用积分因子法求解：
$$
x_1(t) = e^{t - s} \int_s^t \tau e^{2(\tau - s)} e^{s - \tau} d\tau = e^{t - s} \int_s^t \tau e^{\tau - s} d\tau
$$
计算积分：
$$
\int_s^t \tau e^{\tau - s} d\tau = (t - 1)e^{t - s} - (s - 1)
$$
因此：
$$
\phi_{12}(t,s) = (t - 1)e^{2(t - s)} - (s - 1)e^{t - s}
$$


$$
\Pi(t, s) = 
\begin{bmatrix}
e^{t - s} & (t - 1)e^{2(t - s)} - (s - 1)e^{t - s} \\
0 & e^{2(t - s)}
\end{bmatrix}
$$

# Ex 3
验证讲义第四部分性质13证明过程中的等式

$$e^{\mu I_{m}+B}=J_{\lambda}(m).$$

其中$B = \sum_{k=1}^{m-1} (-1)^{k+1} \frac{N_m^k}{k\lambda^k}$，$\mu$ 是满足 $e^{\mu} = \lambda$ 的复数。



## 解答
由于 $\mu I_{m}$ 和 $B$ 可交换（$I_m$ 与任何矩阵都可交换），我们有：
$$e^{\mu I_{m}+B} = e^{\mu I_{m}} \cdot e^B$$

$$e^{\mu I_{m}} = \sum_{k=0}^{\infty} \frac{(\mu I_{m})^k}{k!} = \sum_{k=0}^{\infty} \frac{\mu^k I_{m}^k}{k!} = \left(\sum_{k=0}^{\infty} \frac{\mu^k}{k!}\right) I_{m} = e^{\mu} I_{m} = \lambda I_{m}$$

根据 $B$ 的定义：
$$B = \sum_{k=1}^{m-1} (-1)^{k+1} \frac{N_m^k}{k\lambda^k}$$

我们知道，对于标量情况，$e^{\log(1+x)} = 1+x$。在矩阵情况下，由于 $N_m^m = \mathbf{0}$，我们可以验证：
$$e^B = I_m + \frac{N_m}{\lambda}$$

考虑 $x = \frac{N_m}{\lambda}$，则 $B = \sum_{k=1}^{m-1} (-1)^{k+1} \frac{x^k}{k}$。
计算 $e^B$：
$$e^B = \sum_{j=0}^{\infty} \frac{B^j}{j!} = I_m + B + \frac{B^2}{2!} + \frac{B^3}{3!} + \cdots$$
由于 $x^m = \left(\frac{N_m}{\lambda}\right)^m = \mathbf{0}$，所有高于 $m-1$ 次的项为零，因此：
$$e^B = \sum_{j=0}^{m-1} \frac{B^j}{j!}$$
通过直接计算各项系数，可得：
$$e^B = I_m + x = I_m + \frac{N_m}{\lambda}$$
结合结果
$$e^{\mu I_{m}+B} = e^{\mu I_{m}} \cdot e^B = (\lambda I_{m}) \cdot \left(I_m + \frac{N_m}{\lambda}\right)\\= \lambda I_{m} \cdot I_m + \lambda I_{m} \cdot \frac{N_m}{\lambda} = \lambda I_{m} + N_m = J_{\lambda}(m)$$


# Ex 4
本题的目的是证明性质14.

1. 设$A, B \in M_d(\mathbb{R})$ 且$A = e^{B}$。设$\lambda < 0$是$A$的特征值。证明$B$有形如 $\log (-\lambda) \pm (2k+`)\pi i, k \in mathbb{Z}$ 的一对特征根。由此证明：若$J_{\lambda}(m)$ 出现在A的Jordan标准型中，则其必出偶数次。

2. 设$a,b\in\mathbb{R} 且 b\neq0$ 则存在$D\in M_{2}(\mathbb{R})$ 使得
$$\begin{bmatrix}a&b\\ -b&a\end{bmatrix}=e^D.$$
特别的，存在$D\in M_{2}$ (R)使得$e^{D}=-I_{2}$ 

3. 证明如下两个矩阵相似：
$$\left[\begin{matrix}{J_{\lambda}(m)}&{}&{}&{}\\ {}&{J_{\lambda}(m)}\\ \end{matrix}\right];\quad\left[\begin{matrix}{\lambda I_{2}}&{I_{2}}&{}&{}&{}\\ {}&{\lambda I_{2}}&{I_{2}}&{}&{}\\ {}&{}&{\ddots}&{\ddots}&{}\\ {}&{}&{}&{\lambda I_{2}}&{I_{2}}\\ {}&{}&{}&{}&{\lambda I_{2}}\\ \end{matrix}\right]$$

4. 设C，$D\in M_{2}$ (R)使得$C=e^{D}$ ，则存在$B\in M_{2m}$ (R)使得
$$\left[\begin{matrix}{C}&{I_{2}}&{}&{}&{}\\ {}&{C}&{I_{2}}&{}&{}\\ {}&{}&{\ddots}&{\ddots}&{}\\ {}&{}&{}&{C}&{I_{2}}\\ {}&{}&{}&{}&{C}\\ \end{matrix}\right]=e^{B}.$$

5. 证明性质14：设A∈Md(R)可逆。
   1. 存在$B\in M_{d}(\mathbb{R})$ 使得 $A=e^{B}$ 当且仅当若 $\lambda<0$ 是$A$的特征值且 $J_{\lambda}(m)$ 出现在A的Jordan标准型中，则其必出现偶数次。
   2. 若A无负特征值，则存在 $B\in M_{d}(\mathbb{R})$ 使得 $A=e^{B}$
   3. 必存在 $B \in M_{d}(\mathbb{R})$ 使得 $A^{2}=e^{B}$ 

## 解答
### 1
设 $\lambda < 0$ 是 $A$ 的一个特征值。

根据谱映射定理，若 $\mu$ 是 $B$ 的特征值，则 $e^\mu$ 是 $A$ 的特征值。要使 $e^\mu = \lambda$ 且 $\lambda$ 为负实数，$\mu$ 必须形如：$$\mu = \ln|\lambda| + i(2k+1)\pi, \quad k \in \mathbb{Z}$$
显然，$\mu$ 是一个虚部不为零的复数。

因为 $B$ 是实矩阵，其特征多项式是实系数的。因此，非实特征值必然共轭成对出现。
即：若 $\mu$ 是 $B$ 的特征值，则 $\bar{\mu} = \ln|\lambda| - i(2k+1)\pi$ 也是 $B$ 的特征值。
注意 $\mu \neq \bar{\mu}$。

对于 $B$ 的共轭特征值对 $\mu$ 和 $\bar{\mu}$，它们在 $B$ 的 Jordan 标准型中对应的 Jordan 块结构是完全相同的（大小和数量一一对应）。

考虑映射 $z \mapsto e^z$。该映射在 $\mu$ 的邻域内是共形映射（导数 $e^\mu = \lambda \neq 0$）。因此，它保持 Jordan 块的大小不变。
具体来说，如果 $B$ 中有一个 $m$ 阶的 Jordan 块 $J_\mu(m)$，那么 $A = e^B$ 中就会对应出现一个 $m$ 阶的 Jordan 块 $J_{e^\mu}(m) = J_\lambda(m)$。

由于 $B$ 中的 $J_\mu(m)$ 和 $J_{\bar{\mu}}(m)$ 是成对出现的，它们映射到 $A$ 中后，就变成了两个 $J_\lambda(m)$。
这意味着 $A$ 中关于负特征值 $\lambda$ 的 $m$ 阶 Jordan 块 $J_\lambda(m)$ 出现的总次数必须是 $1+1=2$ 的倍数，即偶数次。


### 2

设 $M = \begin{bmatrix}a&b\\ -b&a\end{bmatrix}$，其中 $b \neq 0$。
这对应于复数 $z = a - bi$（注意矩阵形式通常对应 $a+bi$ 的线性变换，这里符号取决于基的选取，本质相同）。

令 $r = \sqrt{a^2+b^2} > 0$，则可以写成：
$$\begin{bmatrix}a&b\\ -b&a\end{bmatrix} = r \begin{bmatrix}\frac{a}{r}&\frac{b}{r}\\ -\frac{b}{r}&\frac{a}{r}\end{bmatrix} = r \begin{bmatrix}\cos \theta & \sin \theta \\ -\sin \theta & \cos \theta\end{bmatrix}$$
其中 $\theta$ 满足 $\cos \theta = a/r, \sin \theta = b/r$。

旋转矩阵的指数形式：
$$\exp\left(\begin{bmatrix}0 & \theta \\ -\theta & 0\end{bmatrix}\right) = \begin{bmatrix}\cos \theta & \sin \theta \\ -\sin \theta & \cos \theta\end{bmatrix}$$
且标量 $r = e^{\ln r}$（即 $r I_2 = e^{(\ln r)I_2}$）。
因为 $r I_2$ 与旋转矩阵可交换，故：
$$\begin{bmatrix}a&b\\ -b&a\end{bmatrix} = e^{(\ln r)I_2} \cdot e^{\begin{bmatrix}0 & \theta \\ -\theta & 0\end{bmatrix}} = \exp\left( \begin{bmatrix}\ln r & \theta \\ -\theta & \ln r\end{bmatrix} \right)$$
取 $D = \begin{bmatrix}\ln\sqrt{a^2+b^2} & \theta \\ -\theta & \ln\sqrt{a^2+b^2}\end{bmatrix}$ 即可（$\theta$ 是幅角）。

取 $a=-1, b=0$。
对于 $-I_2$，模长 $r=1$，幅角 $\theta = \pi$。
$$D = \begin{bmatrix} 0 & \pi \\ -\pi & 0 \end{bmatrix} \implies e^D = \begin{bmatrix} \cos \pi & \sin \pi \\ -\sin \pi & \cos \pi \end{bmatrix} = \begin{bmatrix} -1 & 0 \\ 0 & -1 \end{bmatrix} = -I_2$$


### 3


我们要证明矩阵 $X$ 和 $Y$ 相似：
$$X = \begin{bmatrix} J_\lambda(m) & 0 \\ 0 & J_\lambda(m) \end{bmatrix}, \quad Y = \begin{bmatrix} \lambda I_2 & I_2 & & \\ & \lambda I_2 & \ddots & \\ & & \ddots & I_2 \\ & & & \lambda I_2 \end{bmatrix}$$

$Y$ 是一个 $2m \times 2m$ 的分块矩阵，对角块是 $\lambda I_2$，次对角块是 $I_2$。

设 $X$ 定义在基 $\{e_1, \dots, e_m, f_1, \dots, f_m\}$ 上，其中：
* $A e_1 = \lambda e_1, A e_k = \lambda e_k + e_{k-1}$
* $A f_1 = \lambda f_1, A f_k = \lambda f_k + f_{k-1}$

将基向量重新排序为交错序列：
$$\mathcal{B}_{new} = \{e_1, f_1, e_2, f_2, \dots, e_m, f_m\}$$

在这个新基下考察算子的矩阵表示：
1.  第1块 ($e_1, f_1$)：
    $A e_1 = \lambda e_1$
    $A f_1 = \lambda f_1$
    对应矩阵块 $\begin{bmatrix} \lambda & 0 \\ 0 & \lambda \end{bmatrix} = \lambda I_2$。

2.  第 $k$ 块 ($e_k, f_k$) 与第 $k-1$ 块的关系 ($k > 1$)：
    $A e_k = \lambda e_k + e_{k-1}$
    $A f_k = \lambda f_k + f_{k-1}$
    
这表明第 $k$ 组基向量被映射为 $\lambda$ 倍的自己加上第 $k-1$ 组基向量。在矩阵形式上，这意味着对角块是 $\lambda I_2$，而上一行对应的块是 $I_2$。通过这个置换矩阵 $P$，我们将 $X$ 变换为了 $Y$。即 $Y = P^{-1} X P$。

### 4
设 $C, D \in M_2(\mathbb{R})$ 且 $C = e^D$。
我们需要证明如下 $2m \times 2m$ 分块矩阵 $\mathcal{C}$ 是某个实矩阵 $B$ 的指数：
$$\mathcal{C} = \begin{bmatrix} C & I_2 & & \\ & C & \ddots & \\ & & \ddots & I_2 \\ & & & C \end{bmatrix}$$

将 $\mathcal{C}$ 写成：
$$\mathcal{C} = \text{diag}(C, \dots, C) \cdot (I_{2m} + \mathcal{N})$$
其中 $\mathcal{N}$ 是严格上三角分块矩阵（幂零矩阵），其对角线上方第一块为 $C^{-1}$ (注意提出因子时要乘逆)，其余为0。
即 $\mathcal{C} = \mathcal{D} (I + \mathcal{K})$，其中 $\mathcal{D} = I_m \otimes C$，且 $\mathcal{K}$ 是分块幂零的。

令 $B = \ln \mathcal{C}$ 通过泰勒级数展开：
$$B = \ln(\mathcal{C}) = \ln(\text{diag}(C) + \mathcal{N}_{blocks})$$
由于 $C=e^D$，我们可以在 $C$ 的邻域内定义实对数。
一个显式的构造是：
$$B = \begin{bmatrix} D & Y_1 & Y_2 & \dots \\ & D & Y_1 & \dots \\ & & \ddots & \end{bmatrix}$$
其中 $Y_k$ 可以通过比较 $\mathcal{C} = e^B$ 的幂级数系数递归解出。因为 $C$ 可逆，这些解都是实矩阵。

### 5
#### 5.1 

* 必要性 ($\Rightarrow$)：
    由 问题1 已证。若 $A=e^B$，则负特征值 $\lambda$ 来源于 $B$ 的共轭复特征值对，因此 Jordan 块必然成对出现。

* 充分性 ($\Leftarrow$)：
    考虑 $A$ 的实 Jordan 标准型。
    $A$ 相似于 $J = \text{diag}(J_{\lambda_i}, J_{\mu_j}, \dots)$。
    1.  对于正特征值 $\lambda > 0$： $J_\lambda(m)$ 总有实对数（即 $e^{J_{\ln \lambda}(m)}$）。
    2.  对于复特征值 $\mu, \bar{\mu}$： 它们对应的实 Jordan 块形如问题2中的旋转块的扩展。由问题2知，$2\times 2$ 旋转块有实对数。对于高阶复 Jordan 块，可以使用分块对数级数构造实对数。
    3.  对于负特征值 $\lambda < 0$： 根据假设，对应的 Jordan 块 $J_\lambda(m)$ 出现偶数次，即 $J_\lambda(m) \oplus J_\lambda(m)$。
        由 问题3，这相似于一个 $2m \times 2m$ 的分块矩阵，其对角块为 $\lambda I_2$，次对角块为 $I_2$。
        $\lambda I_2 = |\lambda| (-I_2)$。
        由 问题2，$-I_2$ 有实对数。
        由 问题4，以 $-I_2$ 为基础构成的分块 Jordan 形式也有实对数。
        结合常数 $\ln|\lambda|$，可知 $J_\lambda(m) \oplus J_\lambda(m)$ 也是某个实矩阵的指数。

    综上，由于 $A$ 的每个分块部分都是实指数，$A$ 本身也是实指数。

#### 5.2
若 $A$ 无负特征值，则其特征值要么是正实数，要么是共轭复数对。
* 正特征值的 Jordan 块显然有实对数。
* 共轭复数对对应的实 Jordan 块总有实对数（这不依赖于偶数次条件，因为复数本身就是成对处理转化为实块的）。
* 条件 5.1 中的“负特征值块必须成对”这一限制条件自然满足（因为根本没有负特征值，0是偶数）。
故结论成立。

#### 5.3

考察 $A^2$ 的特征值。设 $\lambda$ 是 $A$ 的特征值。
$A^2$ 的特征值为 $\lambda^2$。

检查 $A^2$ 是否有负特征值，以及如果有，其 Jordan 块是否成对。
$A^2$ 有负特征值当且仅当 $\lambda^2 < 0$，这意味着 $\lambda$ 必须是纯虚数 ($\lambda = i y, y \in \mathbb{R}^*$)。

因为 $A$ 是实矩阵，纯虚数特征值必须成对出现：$\pm iy$。这意味着在 $A$ 的 Jordan 型中，$J_{iy}(m)$ 和 $J_{-iy}(m)$ 同时出现。平方后，$J_{iy}(m)^2$ 和 $J_{-iy}(m)^2$ 的主特征值变为 $(iy)^2 = -y^2$ 和 $(-iy)^2 = -y^2$。这说明 $A^2$ 的负特征值 $-y^2$ 对应的 Jordan 块至少是成对出现的（来源于 $A$ 的一对共轭虚特征值）。根据 5.1 的结论，$A^2$ 满足“负特征值 Jordan 块成对出现”的条件。因此，必然存在实矩阵 $B$ 使得 $A^2 = e^B$。


# Ex 5
1) 设 $A, B \in M_d(\mathbb{C})$ 且 $A = e^B$。证明 $A$ 可对角化当且仅当 $B$ 可对角化。

2) 设 $A \in M_d(\mathbb{C})$ 可逆。证明 $A$ 可对角化当且仅当 $A^2$ 可对角化。

## 证明

### 1

$\Longleftarrow$：
假设 $B$ 可对角化。
存在可逆矩阵 $P$ 和对角矩阵 $\Lambda = \text{diag}(\lambda_1, \dots, \lambda_d)$，使得 $B = P \Lambda P^{-1}$。
根据矩阵指数的性质：
$$A = e^B = e^{P \Lambda P^{-1}} = P e^\Lambda P^{-1}$$
其中 $e^\Lambda = \text{diag}(e^{\lambda_1}, \dots, e^{\lambda_d})$ 显然是一个对角矩阵。
因此，$A$ 可对角化。

$\Longrightarrow$：
假设 $A = e^B$ 可对角化。

任何复矩阵 $B$ 都可以唯一分解为 $B = S + N$，其中：
* $S$ 是可对角化矩阵 (Semisimple / Diagonalizable)，
* $N$ 是幂零矩阵 (Nilpotent)，
* 且 $S$ 与 $N$ 可交换，即 $SN = NS$。

因为 $S$ 与 $N$ 可交换，我们可以将指数展开为：
$$A = e^B = e^{S+N} = e^S e^N$$
由于 $S$ 可对角化，且 $e^S$ 是对角化矩阵的多项式，$e^S$ 也是可对角化的（这是 $A$ 的半单部分）。
由于 $N$ 是幂零矩阵，$e^N = I + N + \frac{1}{2}N^2 + \dots$ 是一个幺幂矩阵 (Unipotent)，即它可以写成 $I + N'$ 的形式，其中 $N'$ 也是幂零的。

根据 Jordan-Chevalley 分解的唯一性，$A$ 的半单部分是 $e^S$，幺幂部分是 $e^N$。
$A$ 可对角化的充要条件是其幺幂部分为单位矩阵 $I$（即没有非平凡的若当块）。

所以：
$$A \text{ 可对角化} \iff e^N = I$$
对于幂零矩阵 $N$，我们有映射关系。在幂零矩阵集合上，$\exp$ 是一个双射（实际上是同构），其逆映射是 $\log$。
$$e^N = I \iff N = \log(I) = 0$$
如果 $N = 0$，则 $B = S + 0 = S$。
因为 $S$ 是可对角化的，所以 $B$ 可对角化。


### 2

$\Longrightarrow$：
假设 $A$ 可对角化。
即存在可逆矩阵 $P$ 使得 $A = P \Lambda P^{-1}$，其中 $\Lambda$ 为对角阵。
则 $A^2 = (P \Lambda P^{-1})^2 = P \Lambda^2 P^{-1}$。
由于 $\Lambda^2$ 仍是对角阵，故 $A^2$ 可对角化。

$\Longleftarrow$ ：
假设 $A^2$ 可对角化。
这意味着 $A^2$ 的极小多项式 $m_{A^2}(x)$ 没有重根，且可以分解为一次因式的乘积：
$$m_{A^2}(x) = (x - \mu_1)(x - \mu_2)\dots(x - \mu_k)$$
其中 $\mu_i$ 是互不相同的复数。

因为题目已知 $A$ 可逆，所以 $A$ 没有特征值 $0$，这意味着 $A^2$ 也没有特征值 $0$。
所以，所有的 $\mu_i \neq 0$。

考察矩阵 $A$ 满足的多项式。$A$ 是多项式 $P(t) = m_{A^2}(t^2)$ 的根：
$$P(A) = m_{A^2}(A^2) = 0$$
我们可以将 $P(t)$ 展开：
$$P(t) = \prod_{i=1}^k (t^2 - \mu_i) = \prod_{i=1}^k (t - \sqrt{\mu_i})(t + \sqrt{\mu_i})$$
由于 $\mu_i \neq 0$ 且 $\mu_i$ 互不相同，对于每一个 $i$，方程 $t^2 = \mu_i$ 有两个互不相同的根 $\sqrt{\mu_i}$ 和 $-\sqrt{\mu_i}$。而且对于 $i \neq j$，$\mu_i$ 的根与 $\mu_j$ 的根也不相同。

因此，多项式 $P(t)$ 拥有 $2k$ 个互不相同的单根。
由于 $A$ 的极小多项式 $m_A(t)$ 必须整除 $P(t)$，这意味着 $m_A(t)$ 也只能包含互不相同的单根。



