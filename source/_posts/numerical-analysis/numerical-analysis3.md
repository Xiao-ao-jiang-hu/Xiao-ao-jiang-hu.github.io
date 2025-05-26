---
title: 函数逼近和插值
date: 2025-05-27 01:54:16
tags:
    - mathematics
    - numerical-analysis
excerpt: 
---
## 函数逼近的基本概念

### 问题描述与函数空间  
函数逼近的核心目标是为给定函数$f(x)$（可能是复杂表达式或表格函数）在简单函数类$\Phi$（如多项式、三角函数等）中找到一个近似函数$p(x)$，使得误差$p(x) - f(x)$在某种度量意义下最小。  

函数空间是研究逼近问题的基础。例如，定义在区间$[a, b]$上的实连续函数集合$C[a, b]$和$k$阶导数连续函数集合$C^k[a, b]$均构成无限维线性空间。通过引入范数（如 ∞-范数、1-范数、2-范数）可度量函数的大小及误差。


### 常用范数与内积  
在空间$C[a, b]$中，常用范数包括：  
- ∞-范数（一致范数）：  
 $$
  \|f(x)\|_{\infty} = \max_{x \in [a,b]} |f(x)|
 $$
- 1-范数（积分绝对值）：  
 $$
  \|f(x)\|_1 = \int_a^b |f(x)| dx
 $$
- 2-范数（平方积分）：  
 $$
  \|f(x)\|_2 = \left[ \int_a^b f^2(x) dx \right]^{1/2}
 $$

内积定义为：  
$$
\langle u(x), v(x) \rangle = \int_a^b u(x) v(x) dx
$$
其对应的范数为 2-范数，即$\|u\|_2 = \sqrt{\langle u, u \rangle}$。


### Cauchy-Schwarz 不等式与 Gram 矩阵  
定理 6.1（Cauchy-Schwarz 不等式）：  
$$
|\langle u, v \rangle|^2 \leq \langle u, u \rangle \cdot \langle v, v \rangle
$$
可通过构造非负二次型$\langle u + av, u + av \rangle \geq 0$证明。  

定理 6.2（Gram 矩阵非奇异性）：  
若$u_1, \ldots, u_n$是实内积空间中的函数，其 Gram 矩阵  
$$
G = 
\begin{bmatrix}
\langle u_1, u_1 \rangle & \cdots & \langle u_n, u_1 \rangle \\
\vdots & \ddots & \vdots \\
\langle u_1, u_n \rangle & \cdots & \langle u_n, u_n \rangle
\end{bmatrix}
$$
非奇异的充要条件是$u_1, \ldots, u_n$线性无关。证明基于反证法：若线性相关，则存在非零向量$a$使得$Ga = 0$，矛盾。


### 权函数与加权内积  
权函数$\rho(x)$需满足：  
1. 非负性：$\rho(x) \geq 0, \ \forall x \in [a, b]$；  
2. 可积性：对任意多项式$x^k$，积分$\int_a^b x^k \rho(x) dx$存在。  

加权内积定义为：  
$$
\langle u(x), v(x) \rangle = \int_a^b \rho(x) u(x) v(x) dx
$$
对应的范数为广义 2-范数：  
$$
\|f(x)\| = \left[ \int_a^b \rho(x) f^2(x) dx \right]^{1/2}
$$


### 误差度量分类与逼近方法  
按误差度量方式分类：  
1. 最佳一致逼近（∞-范数）：  
  $$
   \varepsilon = \|p(x) - f(x)\|_\infty \to \min
  $$
   要求$p(x)$在区间上均匀接近$f(x)$，但求解复杂。  

2. 最佳平方逼近（2-范数）：  
  $$
   \|p(x) - f(x)\|_2 \to \min
  $$
   通过最小二乘法实现，计算相对简便，是实际应用中的主要方法。  

1-范数则对应误差曲线间的面积最小化，体现“平均”误差特性。