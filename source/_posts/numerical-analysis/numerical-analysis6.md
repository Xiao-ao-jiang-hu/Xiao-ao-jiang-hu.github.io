---
title: 分段插值
date: 2025-05-27 14:37:19
tags:
    - numerical-analysis
    - mathematics
excerpt:
---
## 高次多项式插值的局限性  

### 收敛性差（Runge现象）  
以函数 \( f(x) = \frac{1}{1+x^2} \, (x \in [-5,5]) \) 为例，在等距节点上构造插值多项式 \( L_n(x) \)，其收敛性表现为：  
\[
\lim_{n \to \infty} L_n(x) = 
\begin{cases} 
-f(x), & |x| \leq c \, (c \approx 3.63) \\
\text{不收敛}, & |x| > c 
\end{cases}
\]  
这表明高次多项式插值可能在某些区域发散，无法保证全局逼近效果。  

### 保凸性差与数值不稳定性  
- **多余拐点**：插值多项式可能出现违背原始数据单调性或凸性的振荡。  
- **误差传播**：单个节点的函数值误差会影响整个区间的插值结果，导致病态问题。  


## 分段线性插值  
### 基本思想  
将相邻数据点用直线连接，形成分段一次多项式函数。给定节点 \( x_0 < x_1 < \dots < x_n \) 及对应函数值 \( f_0, f_1, \dots, f_n \)，分段线性插值函数 \( I_h(x) \) 的表达式为：  
\[
I_h(x) = \sum_{j=0}^n f_j l_j(x)
\]  
其中基函数 \( l_j(x) \) 定义为：  
\[
l_j(x) = 
\begin{cases} 
\frac{x - x_{j-1}}{x_j - x_{j-1}}, & x \in [x_{j-1}, x_j] \, (j \neq 0) \\
\frac{x - x_{j+1}}{x_j - x_{j+1}}, & x \in [x_j, x_{j+1}] \, (j \neq n) \\
0, & \text{其他区域}
\end{cases}
\]  

### 误差估计与收敛性  
插值误差由 Lagrange 余项给出：  
\[
|f(x) - I_h(x)| \leq \frac{M_2}{8} h^2
\]  
其中 \( M_2 = \max |f''(x)| \)，\( h \) 为最大区间长度。若 \( f(x) \in C^2[a,b] \)，则当 \( h \to 0 \) 时，\( I_h(x) \) 一致收敛于 \( f(x) \)。  


## 分段埃尔米特（Hermite）插值  
### 整体思想  
在节点处同时插值函数值和导数值，构造光滑性更高的分段多项式。对于节点 \( x_0, x_1, \dots, x_n \)，要求插值多项式 \( H(x) \) 满足：  
\[
H(x_i) = f(x_i), \quad H'(x_i) = f'(x_i)
\]  
其一般形式为：  
\[
H_{2n+1}(x) = \sum_{j=0}^n \left[ f_j \alpha_j(x) + f_j' \beta_j(x) \right]
\]  
基函数 \( \alpha_j(x) \) 和 \( \beta_j(x) \) 需满足：  
\[
\alpha_j(x_i) = \delta_{ij}, \quad \alpha_j'(x_i) = 0; \quad \beta_j(x_i) = 0, \quad \beta_j'(x_i) = \delta_{ij}
\]  

### 两点三次埃尔米特插值  
在子区间 \( [x_k, x_{k+1}] \) 上，三次 Hermite 插值多项式为：  
\[
H_3(x) = f_k \tilde{\alpha}_k(x) + f_{k+1} \tilde{\alpha}_{k+1}(x) + f_k' \tilde{\beta}_k(x) + f_{k+1}' \tilde{\beta}_{k+1}(x)
\]  
其中基函数的具体形式为：  
\[
\begin{aligned}
\tilde{\alpha}_k(x) &= \left( 1 + 2 \frac{x - x_k}{x_{k+1} - x_k} \right) \left( \frac{x - x_{k+1}}{x_k - x_{k+1}} \right)^2, \\
\tilde{\beta}_k(x) &= (x - x_k) \left( \frac{x - x_{k+1}}{x_k - x_{k+1}} \right)^2.
\end{aligned}
\]  
该插值函数在节点处一阶导数连续（\( C^1 \) 光滑），且全局收敛。  


## 保形分段插值（Shape-Preserving）  
### 核心思想  
通过自动设定节点导数值，使分段 Hermite 插值既保持光滑性，又保留原始数据的单调性与凸性。  

### 导数值设定方法  
- **计算割线斜率**：对节点 \( x_k \)，计算相邻差商：  
  \[
  d_{k-1} = \frac{f(x_k) - f(x_{k-1})}{x_k - x_{k-1}}, \quad d_k = \frac{f(x_{k+1}) - f(x_k)}{x_{k+1} - x_k}
  \]  
- **导数值规则**：  
  - 若 \( d_{k-1} \cdot d_k \leq 0 \)，令 \( f_k' = 0 \)（避免振荡）；  
  - 否则，采用加权调和平均：  
    \[
    \frac{w_{k-1} + w_k}{f_k'} = \frac{w_{k-1}}{d_{k-1}} + \frac{w_k}{d_k}
    \]  
  其中权重 \( w_k \) 通常取区间长度。  


