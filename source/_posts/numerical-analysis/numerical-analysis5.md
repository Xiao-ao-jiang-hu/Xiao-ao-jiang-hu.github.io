---
title: 多项式插值
date: 2025-05-27 13:10:43
tags:
    - mathematics
    - numerical-analysis
    - polynomial-interpolation
    - Lagrange-interpolation
    - Newton-interpolation
categories:
    - numerical-analysis
excerpt: 本文介绍了多项式插值的基本概念，包括Lagrange插值和Newton插值的构造方法、差商的定义与计算、以及插值余项的推导。
---

## 多项式插值的基本概念
给定 $n+1$ 个插值节点 $x_0, x_1, \ldots, x_n$ 及其对应的函数值 $y_0, y_1, \ldots, y_n$，多项式插值的目标是构造一个 $n$ 次多项式 $P(x)$，满足：
$$
P(x_i) = y_i \quad (i = 0, 1, \ldots, n).
$$

## 多项式插值的唯一性
定理：满足 $L_n(x_i) = y_i$ 的 $n$ 次多项式是唯一的。  
证明：  
假设存在两个不同的 $n$ 次多项式 $P(x)$ 和 $Q(x)$ 均满足插值条件，则多项式 $R(x) = P(x) - Q(x)$ 是一个次数不超过 $n$ 的多项式，且在 $n+1$ 个不同点处取零值。根据代数基本定理，只有零多项式才能有超过其次数的根，因此 $R(x) \equiv 0$，即 $P(x) = Q(x)$。


## Vandermonde矩阵
通过待定系数法可建立线性方程组：
$$
\begin{cases}
a_0 + a_1x_0 + \cdots + a_nx_0^n = y_0 \\
a_0 + a_1x_1 + \cdots + a_nx_1^n = y_1 \\
\vdots \\
a_0 + a_1x_n + \cdots + a_nx_n^n = y_n
\end{cases}
$$

其系数矩阵为Vandermonde矩阵：
$$
A = 
\begin{bmatrix}
1 & x_0 & \cdots & x_0^n \\
1 & x_1 & \cdots & x_1^n \\
\vdots & \vdots & \ddots & \vdots \\
1 & x_n & \cdots & x_n^n
\end{bmatrix}.
$$
其解向量为 $a = [a_0, a_1, \ldots, a_n]^T$，右端向量为 $y = [y_0, y_1, \ldots, y_n]^T$。因此，插值问题可转化为求解线性方程组 $Ax = y$。


## Lagrange插值

核心思想：为每个节点 $x_k$ 构造一个基函数 $l_k(x)$，满足：
$$
l_k(x_i) = 
\begin{cases} 
1, & i = k \\ 
0, & i \neq k 
\end{cases}.
$$
所有基函数均为 $n$ 次多项式，最终插值多项式表示为它们的线性组合：
$$
L_n(x) = \sum_{k=0}^n y_k l_k(x).
$$

### 1. 基函数的构造
- 分子部分：构造一个多项式，在除 $x_k$ 外的所有节点处取零值。这可以通过乘积形式实现：
  $$
  \prod_{\substack{j=0 \\ j \neq k}}^n (x - x_j).
  $$
- 分母部分：确保 $l_k(x_k) = 1$。当 $x = x_k$ 时，分子为：
  $$
  \prod_{\substack{j=0 \\ j \neq k}}^n (x_k - x_j),
  $$
  因此基函数定义为：
  $$
  l_k(x) = \frac{\prod_{\substack{j=0 \\ j \neq k}}^n (x - x_j)}{\prod_{\substack{j=0 \\ j \neq k}}^n (x_k - x_j)}.
  $$


### 2. 引入符号 $\omega_{n+1}(x)$
定义多项式：
$$
\omega_{n+1}(x) = \prod_{j=0}^n (x - x_j),
$$
其导数为：
$$
\omega_{n+1}'(x) = \sum_{m=0}^n \prod_{\substack{j=0 \\ j \neq m}}^n (x - x_j).
$$
在节点 $x_k$ 处求导数值：
$$
\omega_{n+1}'(x_k) = \prod_{\substack{j=0 \\ j \neq k}}^n (x_k - x_j).
$$
因此，基函数可简化为：
$$
l_k(x) = \frac{\omega_{n+1}(x)}{(x - x_k) \cdot \omega_{n+1}'(x_k)}.
$$


### 3. 插值多项式的最终形式
将基函数代入线性组合表达式，得到Lagrange插值多项式：
$$
L_n(x) = \sum_{k=0}^n y_k \cdot \frac{\prod_{\substack{j=0 \\ j \neq k}}^n (x - x_j)}{\prod_{\substack{j=0 \\ j \neq k}}^n (x_k - x_j)}.
$$
或等价地：
$$
L_n(x) = \sum_{k=0}^n y_k \cdot \frac{\omega_{n+1}(x)}{(x - x_k) \cdot \omega_{n+1}'(x_k)}.
$$


### 4. 举例验证（线性插值，n=1）
对于节点 $(x_0, y_0)$ 和 $(x_1, y_1)$，基函数为：
$$
l_0(x) = \frac{x - x_1}{x_0 - x_1}, \quad l_1(x) = \frac{x - x_0}{x_1 - x_0}.
$$
插值多项式为：
$$
L_1(x) = y_0 \cdot \frac{x - x_1}{x_0 - x_1} + y_1 \cdot \frac{x - x_0}{x_1 - x_0}.
$$
显然，$L_1(x_0) = y_0$ 且 $L_1(x_1) = y_1$，验证了公式的正确性。


### 5. 总结
- 构造原理：通过设计在特定节点取值为1、其余节点为0的基函数，将插值问题转化为基函数的线性组合。
- 唯一性：由多项式根的唯一性定理保证。
- 优势：避免求解线性方程组，直接通过乘积形式构造多项式。
- 局限性：节点增减时需重新计算所有基函数，计算复杂度较高。高次插值可能引发Runge现象（震荡误差）。


## Newton插值

### 1. 基本思想与构造方法  
**动机**：在逐步增加插值节点时，动态构造插值多项式。例如：  
- 初始节点 $x_0$，构造零次多项式：  
  $$P_0(x) = f(x_0).$$  
- 增加节点 $x_1$，构造一次多项式（点斜式）：  
  $$P_1(x) = f(x_0) + \frac{f(x_1) - f(x_0)}{x_1 - x_0}(x - x_0).$$  

**推广到高次多项式**：对于 $n$ 个节点，递推公式为：  
$$P_n(x) = P_{n-1}(x) + c_n(x - x_0)(x - x_1)\cdots(x - x_{n-1}).$$  

最终形式为**Newton插值多项式**：  
$$N_n(x) = c_0 + c_1(x - x_0) + c_2(x - x_0)(x - x_1) + \cdots + c_n\prod_{i=0}^{n-1}(x - x_i).$$  


### 2. 差商的定义与计算  
**差商**是Newton插值的核心系数，定义为：  
- **0阶差商**：$$f[x_i] = f(x_i).$$  
- **1阶差商**：$$f[x_0, x_i] = \frac{f(x_i) - f(x_0)}{x_i - x_0}.$$  
- **k阶差商**（递归定义）：  
  $$f[x_0, x_1, \ldots, x_k] = \frac{f[x_0, \ldots, x_{k-2}, x_k] - f[x_0, \ldots, x_{k-1}]}{x_k - x_{k-1}}.$$  

**性质**：  
- **对称性**：差商与节点顺序无关，即  
  $$f[x_0, x_1, \ldots, x_k] = f[x_{k}, \ldots, x_1, x_0].$$  
- **显式公式**：  
  $$f[x_0, \ldots, x_k] = \sum_{j=0}^k \frac{f(x_j)}{\prod_{\substack{i=0 \\ i \neq j}}^k (x_j - x_i)}.$$  


### 3. 差商表与计算示例  
**差商表**用于系统化计算各阶差商：  

| $x_k$ | $f(x_k)$ | 1阶差商        | 2阶差商             | 3阶差商                |
|---------|------------|----------------|---------------------|-----------------------|
| $x_0$ | $f(x_0)$ | $f[x_0, x_1]$ | $f[x_0, x_1, x_2]$ | $f[x_0, x_1, x_2, x_3]$ |
| $x_1$ | $f(x_1)$ | $f[x_1, x_2]$ | $f[x_1, x_2, x_3]$ | —                     |
| $x_2$ | $f(x_2)$ | $f[x_2, x_3]$ | —                   | —                     |
| $x_3$ | $f(x_3)$ | —              | —                   | —                     |

**示例6.9**：给定节点 $(-2, -27)$, $(0, -1)$, $(1, 0)$，构造二次Newton插值多项式：  
1. 计算差商表：  
   - 0阶差商：$f[-2] = -27$, $f[0] = -1$, $f[1] = 0$.  
   - 1阶差商：  
     $$f[-2, 0] = \frac{-1 - (-27)}{0 - (-2)} = 13, \quad f[0, 1] = \frac{0 - (-1)}{1 - 0} = 1.$$  
   - 2阶差商：  
     $$f[-2, 0, 1] = \frac{1 - 13}{1 - (-2)} = -4.$$  
2. 代入多项式：  
   $$N_2(x) = -27 + 13(x + 2) - 4(x + 2)x = -4x^2 + 5x - 1.$$  


### 4. Newton插值余项  
插值余项公式与Lagrange形式等价，但通过差商表达：  
$$R_n(x) = f(x) - N_n(x) = f[x, x_0, \ldots, x_n] \cdot \prod_{i=0}^n (x - x_i).$$  

结合Lagrange余项定理，可得：  
$$f[x, x_0, \ldots, x_n] = \frac{f^{(n+1)}(\xi)}{(n+1)!}, \quad \xi \in (a, b).$$  

**应用**：动态增加节点时，余项可近似为：  
$$R_k(x) \approx N_{k+1}(x) - N_k(x) = f[x_0, \ldots, x_{k+1}] \cdot \prod_{i=0}^k (x - x_i).$$  


### 5. 方法比较与总结  
**Newton插值优点**：  
- 动态增减节点时，仅需更新差商表，无需重新计算所有基函数。  
- 差商表可复用，适合逐步优化插值精度。  