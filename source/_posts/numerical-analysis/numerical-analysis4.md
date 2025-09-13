---
title: 最小二乘法
tags:
  - mathematics
  - numerical-analysis
  - least-squares
  - linear-least-squares
  - nonlinear-least-squares
  - QR-decomposition
  - orthogonal-transformation
categories:
  - numerical-analysis
excerpt: >-
  本文介绍了最小二乘法的基本原理和应用，包括线性最小二乘问题的矩阵表述、法方程法求解、正交变换法（QR分解）以及非线性问题的线性化处理。重点讨论了如何通过正交变换提升数值稳定性，并提供了具体的例子来说明方法的实现。
abbrlink: 6b330b18
date: 2025-05-27 12:44:23
---

### 曲线拟合问题与最小二乘法的动机  
曲线拟合的核心目标是通过含参数的函数 $S(t)$ 逼近给定数据点 $(t_i, f_i)$（$i=1,\ldots,m$），使得误差平方和最小：  
$$
\sum_{i=1}^m [S(t_i) - f_i]^2 \to \min
$$  
由于数据可能存在观测误差，拟合曲线无需严格通过所有点。若 $S(t) \in \Phi$（线性函数类），且 $S(t) = \sum_{j=1}^n x_j \varphi_j(t)$，问题转化为求解系数 $x_j$，即 线性最小二乘问题。  


### 线性最小二乘的矩阵表述  
将数据点映射为向量和矩阵形式：  
- 表格函数 $f$ 定义为：  
$$
f = [f(t_1), f(t_2), \ldots, f(t_m)]^T
$$  
- 基函数矩阵 $A$ 构造为：  
$$
A = 
\begin{bmatrix}
\varphi_1(t_1) & \varphi_2(t_1) & \cdots & \varphi_n(t_1) \\
\varphi_1(t_2) & \varphi_2(t_2) & \cdots & \varphi_n(t_2) \\
\vdots & \vdots & \ddots & \vdots \\
\varphi_1(t_m) & \varphi_2(t_m) & \cdots & \varphi_n(t_m)
\end{bmatrix}
$$  
目标是最小化残差向量的 2-范数：  
$$
\|f - Ax\|_2 \to \min
$$  


### 法方程法求解线性最小二乘  
通过构造 法方程 $A^TAx = A^Tf$ 求解系数 $x$，其中：  
- Gram 矩阵 $G = A^TA$，元素为 $G_{kj} = \langle \varphi_j, \varphi_k \rangle = \sum_{i=1}^m \varphi_j(t_i) \varphi_k(t_i)$；  
- 向量 $b = A^Tf$，元素为 $b_k = \langle f, \varphi_k \rangle = \sum_{i=1}^m f(t_i) \varphi_k(t_i)$。  

解的存在唯一性：  
若基函数 $\{\varphi_j(t)\}$ 对应的表格函数线性无关，则 $A$ 列满秩，法方程存在唯一解。  

Haar 条件：  
若数据点 $\{t_i\}$ 中至少有 $n$ 个不同值，则多项式基函数 $\{1, t, \ldots, t^{n-1}\}$ 对应的表格函数线性无关。  


### 正交变换法与 QR 分解  
为改善法方程的病态性，采用 QR 分解：  
1. 将矩阵 $A$ 分解为正交矩阵 $Q$ 和上三角矩阵 $R$：  
$$
A = QR
$$  
2. 最小二乘问题转化为：  
$$
\|f - Ax\|_2 = \|Q^Tf - Rx\|_2 \to \min
$$  
3. 分解 $Q = [Q_1 \quad Q_2]$ 和 $R = \begin{bmatrix} R_1 \\ 0 \end{bmatrix}$，问题进一步简化为：  
$$
R_1x = Q_1^Tf
$$  
通过回代法求解 $x$，避免直接计算 $A^TA$，提升数值稳定性。  


### 非线性问题的线性化处理  
#### 法方程法求解
例 6.5：用指数函数 $y \approx x_1 e^{x_2 t}$ 拟合数据：  
| |1|2|3|4|5|  
| :---: | :---: | :---: | :---: | :---: | :---: |
| $t_i$ | 1.00 | 1.25 | 1.50 | 1.75 | 2.00 |  
| $y_i$ | 5.10 | 5.79 | 6.53 | 7.45 | 8.46 | 
| $\tilde{y_i}$ | 1.6292 | 1.7561 | 1.8764 | 2.0082 | 2.1353 | 

步骤：  
1. 线性化：取对数得 $\ln y \approx \ln x_1 + x_2 t$，定义新变量 $\hat{y} = \ln y$；  
2. 构造矩阵：  
$$
A = 
\begin{bmatrix}
1 & 1.00 \\
1 & 1.25 \\
1 & 1.50 \\
1 & 1.75 \\
1 & 2.00
\end{bmatrix}, \quad f = 
\begin{bmatrix}
1.6292 \\
1.7561 \\
1.8764 \\
2.0082 \\
2.1353
\end{bmatrix}
$$  
1. 解法方程：  
$$
A^TAx = A^Tf \Rightarrow 
\begin{bmatrix}
5 & 7.5 \\
7.5 & 11.875
\end{bmatrix}
\begin{bmatrix}
\hat{x}_1 \\
x_2
\end{bmatrix}
=
\begin{bmatrix}
9.4052 \\
14.4239
\end{bmatrix}
$$  
解得 $\hat{x}_1 = 1.1225$，$x_2 = 0.5057$，进而 $x_1 = e^{\hat{x}_1} = 3.0725$，最终拟合函数为：  
$$
S(t) = 3.0725 e^{0.5057 t}
$$  

#### 正交变换法求解  
例 6.7：对以上数据点进行指数函数拟合，利用正交变换法（Householder 变换）求解线性最小二乘问题：  

1. 线性化：取对数得 $\ln y \approx \ln x_1 + x_2 t$，定义 $\tilde{y} = \ln y$，基函数为 $\varphi_1(t) = 1$，$\varphi_2(t) = t$。  

2. 矩阵 $A$ 和向量 $f$：  
$$
A = 
\begin{bmatrix}
1 & 1.00 \\
1 & 1.25 \\
1 & 1.50 \\
1 & 1.75 \\
1 & 2.00
\end{bmatrix}, \quad f = 
\begin{bmatrix}
1.6292 \\
1.7561 \\
1.8764 \\
2.0082 \\
2.1353
\end{bmatrix}
$$  
3. 进行正交变换
应用第一次 Householder 变换，选择变换向量 $v_1 = 
\begin{bmatrix}
1 + \sqrt{5} \\
1 \\
1 \\
1 \\
1
\end{bmatrix}$，变换后矩阵与向量更新为：  
$$
\begin{bmatrix}
-2.236 & -3.354 \\
0 & -0.095 \\
0 & 0.155 \\
0 & 0.405 \\
0 & 0.655
\end{bmatrix} x \cong 
\begin{bmatrix}
-4.206 \\
-0.047 \\
0.073 \\
0.205 \\
0.332
\end{bmatrix}
$$  

应用第二次 Householder 变换，得到简化形式：  
$$
\begin{bmatrix}
-2.236 & -3.354 \\
0 & 0.791 \\
0 & 0 \\
0 & 0 \\
0 & 0
\end{bmatrix} x \cong 
\begin{bmatrix}
-4.206 \\
0.400 \\
-0.005 \\
0.001 \\
0.002
\end{bmatrix}
$$  

通过回代法解上三角方程组，得到系数：  
$$
\begin{bmatrix}
\tilde{x}_1 \\
x_2
\end{bmatrix} = 
\begin{bmatrix}
1.1225 \\
0.5057
\end{bmatrix}
$$  
反推原参数：  
$$
x_1 = e^{\tilde{x}_1} = 3.0725
$$  
最终拟合函数为：  
$$
S(t) = 3.0725 e^{0.5057 t}
$$  


### 正交变换法的优势  
1. 数值稳定：避免病态矩阵 $A^TA$ 的直接计算；  
2. 高效计算：QR 分解复杂度为 $O(mn^2)$，优于法方程的 $O(n^3)$；  
3. 普适性：适用于大规模数据和高维参数空间。  

