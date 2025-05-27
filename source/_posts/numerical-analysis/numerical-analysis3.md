---
title: 函数逼近
date: 2025-05-27 01:54:16
tags:
    - mathematics
    - numerical-analysis
excerpt: 本文介绍了函数逼近的基本概念，包括函数空间、常用范数、内积、Cauchy-Schwarz不等式、Gram矩阵、权函数与加权内积等。重点讨论了最佳平方逼近的求解方法及其在实际应用中的重要性。
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
其对应的范数为 2-范数，即 $\|u\|_2 = \sqrt{\langle u, u \rangle}$ 。


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
非奇异的充要条件是 $u_1, \ldots, u_n$ 线性无关。证明基于反证法：若线性相关，则存在非零向量$a$使得$Ga = 0$，矛盾。


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

## 连续函数的最佳平方逼近

### 最佳平方逼近的问题描述与求解  
最佳平方逼近的目标是对给定函数 $f(t) \in C[a, b]$ 进行逼近，选择函数类 $\Phi$ 为线性空间，通常由基函数 $\{\varphi_1(t), \ldots, \varphi_n(t)\}$ 张成。目标是找到 $S(t) = \sum_{j=1}^n x_j \varphi_j(t) \in \Phi$，使得误差的 2-范数 $\|S(t) - f(t)\|_2$ 最小化。  

将误差平方范数展开为：  
$$
F = \|S(t) - f(t)\|_2^2 = \left\langle \sum_{j=1}^n x_j \varphi_j - f, \sum_{j=1}^n x_j \varphi_j - f \right\rangle
$$  
进一步展开为二次函数形式：  
$$
F = \sum_{j=1}^n \sum_{i=1}^n x_j x_i \langle \varphi_j, \varphi_i \rangle - 2 \sum_{j=1}^n x_j \langle f, \varphi_j \rangle + \langle f, f \rangle
$$  
通过对 $x_k$ 求偏导并令导数为零，得到法方程组 $Gx = b$，其中：  
- Gram 矩阵 $G$ 的元素为 $G_{kj} = \langle \varphi_j, \varphi_k \rangle$  
- 向量 $b$ 的元素为 $b_k = \langle f, \varphi_k \rangle$  


### 法方程的解与充分性验证  
Gram 矩阵 $G$ 是对称正定矩阵，因此法方程存在唯一解 $x^*$，对应的最佳逼近函数为 $S^*(t) = \sum_{j=1}^n x_j^* \varphi_j(t)$。  

解的充分性验证：对任意 $S \in \Phi$，误差平方差为：  
$$
\|S - f\|_2^2 - \|S^* - f\|_2^2 = \|S - S^*\|_2^2 + 2 \langle S - S^*, S^* - f \rangle
$$  
由于 $\langle S^* - f, \varphi_k \rangle = 0$（法方程性质），上式第二项为零，故 $\|S - f\|_2^2 \geq \|S^* - f\|_2^2$，证明 $S^*$ 是最优解。  


### 算法实现与误差计算  
算法步骤：  
1. 构造法方程的 Gram 矩阵 $G$ 和向量 $b$；  
2. 对 $G$ 进行 Cholesky 分解 $G = LL^T$；  
3. 求解 $LL^T x = b$，得到系数 $x^*$；  
4. 构建逼近函数 $S^*(t) = \sum_{j=1}^n x_j^* \varphi_j(t)$。  

逼近误差的计算公式为：  
$$
\|\delta\|_2^2 = \|f\|_2^2 - \sum_{j=1}^n x_j^* \langle \varphi_j, f \rangle
$$  


### 多项式逼近与 Hilbert 矩阵的病态性  
当选择多项式基函数 $\Phi = \mathbb{P}_{n-1}$（次数不超过 $n-1$ 的多项式集合）时，Gram 矩阵退化为 Hilbert 矩阵，其元素为：  
$$
G_{kj} = \int_0^1 t^{k+j-2} dt = \frac{1}{k + j - 1}
$$  
对应的矩阵形式为：  
$$
G_n = 
\begin{bmatrix}
1 & \frac{1}{2} & \cdots & \frac{1}{n} \\
\frac{1}{2} & \frac{1}{3} & \cdots & \frac{1}{n+1} \\
\vdots & \vdots & \ddots & \vdots \\
\frac{1}{n} & \frac{1}{n+1} & \cdots & \frac{1}{2n-1}
\end{bmatrix}
$$  

存在的问题：  
1. 病态性：当 $n$ 较大时，Hilbert 矩阵的条件数急剧增大，导致数值不稳定；  
2. 计算复杂度：稠密矩阵的求解计算量随 $n$ 增长迅速。  

改进方法：采用正交基函数（如 Legendre 多项式），此时 Gram 矩阵变为对角阵，显著降低病态性和计算量。  


### Weierstrass 定理的意义  
根据 Weierstrass 定理，对于任意连续函数 $f \in C[a, b]$，存在多项式序列在一致范数下收敛于 $f$。这表明多项式逼近在理论上是普适的，但实际应用中需结合数值稳定性进行优化。

### 正交函数族与正交多项式  
正交函数族的定义基于带权内积：  
$$
\langle f(t), g(t) \rangle = \int_a^b \rho(t) f(t) g(t) dt = 0
$$  
若函数族 $\{\varphi_k(t)\}$ 在区间 $[a, b]$ 上两两正交，则称其为 正交函数族。例如，在区间 $[-\pi, \pi]$ 上，三角函数族 $\{1, \cos t, \sin t, \cos 2t, \sin 2t, \ldots\}$ 是正交的。  

正交多项式是正交函数族的特例。通过 Gram-Schmidt 正交化 可从多项式基 $\{1, t, t^2, \ldots, t^{n-1}\}$ 构造正交基 $\{\varphi_1(t), \ldots, \varphi_n(t)\}$：  
$$
\varphi_k(t) = t^{k-1} - \sum_{j=1}^{k-1} \frac{\langle t^{k-1}, \varphi_j(t) \rangle}{\langle \varphi_j(t), \varphi_j(t) \rangle} \varphi_j(t)
$$  
性质：  
1. $\varphi_k(t)$ 是最高次项系数为 $1$ 的 $k-1$ 次多项式；  
2. $\varphi_k(t)$ 的根均为区间 $(a, b)$ 上的单实根。  


### 常见正交多项式及其递推公式  
下表列出经典正交多项式及其定义域、权函数和递推关系：  

| 名称 | 定义域 | 权函数 $\rho(t)$ | 递推公式 |  
|---|---|---|---|  
| 勒让德多项式 | $[-1, 1]$ | $1$ |  $\begin{cases}P_0(t) = 1, \\ (k+1)P_{k+1}(t) = (2k+1)tP_k(t) - kP_{k-1}(t)\end{cases}$|  
| 切比雪夫多项式 | $[-1, 1]$ | $\frac{1}{\sqrt{1-t^2}}$ |  $\begin{cases} T_0(t) = 1, \\ T_{k+1}(t) = 2tT_k(t) - T_{k-1}(t)\end{cases}$ | 
| 拉盖尔多项式 | $[0, +\infty)$ | $e^{-t}$ |  $\begin{cases} L_0(t) = 1, \\ L_{k+1}(t) = (1 + 2k - t)L_k(t) - k^2L_{k-1}(t)\end{cases}$ | 
| 埃尔米特多项式 | $(-\infty, +\infty)$ | $e^{-t^2}$ | $\begin{cases} H_0(t) = 1, \\ H_{k+1}(t) = 2tH_k(t) - 2kH_{k-1}(t)\end{cases}$ | 


### 区间转换与正交多项式推广  
若需在任意区间 $[a, b]$ 上使用勒让德多项式，可通过 变量代换 实现：  
$$
s = \frac{b-a}{2}t + \frac{b+a}{2}, \quad t = \frac{2s - (a + b)}{b - a}
$$  
转换后的正交多项式为：  
$$
\hat{P}_k(s) = P_k\left( \frac{2s - (a + b)}{b - a} \right)
$$  
其内积满足：  
$$
\langle \hat{P}_j(s), \hat{P}_k(s) \rangle = \begin{cases} 
0, & j \neq k, \\ 
\frac{b - a}{2} \cdot \frac{2}{2k + 1}, & j = k 
\end{cases}
$$  


### 用正交多项式进行最佳平方逼近  
步骤：  
1. 选择基函数：在目标区间上构造正交多项式 $\{\hat{P}_k(t)\}$；  
2. 计算系数：利用正交性简化法方程，直接求解：  
$$
x_k^* = \frac{\langle f(t), \hat{P}_k(t) \rangle}{\langle \hat{P}_k(t), \hat{P}_k(t) \rangle}
$$  
3. 构建逼近多项式：  
$$
S^*(t) = \sum_{k=1}^n x_k^* \hat{P}_k(t)
$$  

例 6.3：对 $f(t) = \sqrt{1 + t^2}$ 在 $[0, 1]$ 上求一次最佳平方逼近多项式。  
1. 构造转换后的基函数：  
$$
\hat{P}_0(t) = 1, \quad \hat{P}_1(t) = 2t - 1
$$  
2. 计算系数：  
$$
x_1^* = \frac{\int_0^1 \sqrt{1 + t^2} dt}{\int_0^1 dt} \approx 1.147, \quad x_2^* = \frac{\int_0^1 \sqrt{1 + t^2} (2t - 1) dt}{\int_0^1 (2t - 1)^2 dt} \approx 0.213
$$  
3. 结果：  
$$
S_1^*(t) = 1.147 + 0.213(2t - 1) = 0.934 + 0.426t
$$  


### 正交逼近的优势与收敛性  
优势：  
1. 计算高效：Gram 矩阵为对角阵，避免病态问题；  
2. 数值稳定：正交基减少舍入误差；  
3. 灵活扩展：基函数可动态增删。  

定理 6.5（收敛性）：  
若 $f(t)$ 二阶导数连续，则存在最佳平方逼近多项式序列 $\{S_n^*(t)\}$，满足：  
$$
\lim_{n \to \infty} \|S_n^* - f\|_\infty = 0
$$  
且误差阶为 $O\left(\frac{1}{\sqrt{n}}\right)$（2-范数下）。
