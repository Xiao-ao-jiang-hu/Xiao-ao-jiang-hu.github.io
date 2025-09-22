---
title: ODE的数值解法
tags:
  - mathematics
  - numerical-analysis
  - ODE
  - numerical-ODE
  - numerical-integration
  - ODE-methods
  - math
categories:
  - math
  - numerical-analysis
excerpt: >-
  本文介绍了ODE数值解法的基本概念，包括常微分方程的基础知识、数值解法的分类、单步法和多步法的具体实现，以及稳定性和收敛性的分析。重点讨论了欧拉法、向后欧拉法、梯形法、Runge-Kutta方法和多步法的特点和应用。
abbrlink: 5160c0e9
date: 2025-06-02 18:29:20
---
## **一、常微分方程（ODE）基础概念**
1. **ODE定义**  
   - $g(t, y, y', \cdots, y^{(k)}) = 0$，其中 $y = y(t)$ 是未知函数。  
   - **k阶显式ODE**：$y^{(k)} = f(t, y, y', \cdots, y^{(k-1)})$。  

2. **高阶ODE化一阶方程组**  
   - 变量代换：设 $u_1 = y, u_2 = y', \cdots, u_k = y^{(k-1)}$。  
     $$
     \begin{cases}
     u_1' = u_2 \\
     u_2' = u_3 \\
     \vdots \\
     u_k' = f(t, u_1, \dots, u_k)
     \end{cases}
     $$
   - **例（牛顿第二定律）**：  
     $$
     my'' = F(t, y, y') \rightarrow 
     \begin{cases}
     u_1' = u_2 \\
     u_2' = \frac{1}{m} F(t, u_1, u_2)
     \end{cases}
     $$

3. **初值问题（IVP）**  
   $
   y' = f(t, y), \quad y(t_0) = y_0, \quad t \geq t_0
   $
   - 解的唯一性由初始条件保证。

4. **稳定性分类**（定义8.1）  
   - **稳定**：初值扰动 $\delta$ 导致解偏差 $\Delta y(t)$ 有界。  
   - **渐近稳定**：$\lim_{t \to \infty} \Delta y(t) = 0$。  
   - **不稳定**：$\Delta y(t) \to \infty$。  
   - **模型问题分析**：$y' = \lambda y$，解 $y(t) = y_0 e^{\lambda(t-t_0)}$。  
     - 稳定当 $\operatorname{Re}(\lambda) \leq 0$；渐近稳定当 $\operatorname{Re}(\lambda) < 0$。  
   - **非线性问题局部稳定性**：  
     - 雅可比矩阵 $J = \frac{\partial f}{\partial y}$，特征值 $\lambda_k$ 满足 $\operatorname{Re}(\lambda_k) \leq 0$ 则局部稳定。


## **二、数值解法基本概念**
1. **离散变量法**  
   - 步进计算：$t_0 < t_1 < \cdots < t_n$，步长 $h_n = t_{n+1} - t_n$。  
   - 近似解序列 $y_0, y_1, \dots, y_n$。  

2. **方法分类**  
   | **类型**       | **公式形式**                          | **特点**               |
   |---------------|---------------------------------------|------------------------|
   | 单步法         | $y_{n+1} = G(y_n)$                | 仅依赖前一步           |
   | 多步法（k步）  | $y_{n+1} = G(y_n, \dots, y_{n-k})$ | 依赖前k步             |
   | 显式          | $y_{n+1}$ 不隐式出现             | 直接计算              |
   | 隐式          | $y_{n+1}$ 出现在方程中           | 需迭代求解（如牛顿法）|

3. **局部截断误差（LTE）**（定义8.3）  
   - 假设 $y_{n-i} = y(t_{n-i})$ 精确，则 $l_{n+1} = y(t_{n+1}) - y_{n+1}$。  
   - **p阶精度**：$l_{n+1} = O(h^{p+1})$。  

4. **整体误差**  
   - $e_n = y_n - y(t_n)$。  
   - **定理**：若方法稳定且局部截断误差 $O(h^{p+1})$，则整体误差 $e_n = O(h^p)$。  


## **三、单步法数值解法**
### **1. 欧拉法（显式）**  
   - **公式**：$y_{n+1} = y_n + h f(t_n, y_n)$。  
   - **推导**：  
     - 数值微分（向前差分）：$y'(t_n) \approx \frac{y(t_{n+1}) - y(t_n)}{h}$。  
     - 数值积分（左矩形）：$\int_{t_n}^{t_{n+1}} f ds \approx h f(t_n, y(t_n))$。  
   - **精度**：$l_{n+1} = O(h^2)$ → **1阶精度**。  
   - **稳定性分析**（模型问题 $y' = \lambda y$)：  
     - 递推式：$y_{n+1} = (1 + h\lambda) y_n$。  
     - 稳定条件：$|1 + h\lambda| \leq 1$。  
     - **稳定区域**：复平面中 $h\lambda$ 在圆盘 $|z+1| \leq 1$ 内（见Page 15图示）。  

### **2. 向后欧拉法（隐式）**  
   - **公式**：$y_{n+1} = y_n + h f(t_{n+1}, y_{n+1})$。  
   - **稳定性**（模型问题）：  
     - $y_{n+1} = \frac{1}{1 - h\lambda} y_n$，稳定条件 $\left| \frac{1}{1 - h\lambda} \right| \leq 1$ 恒成立（$\operatorname{Re}(\lambda) \leq 0$ 时）。  
     → **无条件稳定（A-stable）**。  
   - **精度**：$l_{n+1} = O(h^2)$ → 1阶精度（推导见Page 22）。  

### **3. 梯形法（隐式）**  
   - **公式**：$y_{n+1} = y_n + \frac{h}{2} \left[ f(t_n, y_n) + f(t_{n+1}, y_{n+1}) \right]$。  
   - **稳定性**（模型问题）：  
     - $y_{n+1} = \frac{2 + h\lambda}{2 - h\lambda} y_n$，稳定当 $\operatorname{Re}(h\lambda) \leq 0$ → **无条件稳定**。  
   - **精度**：$l_{n+1} = O(h^3)$ → **2阶精度**。  


## **四、Runge-Kutta（R-K）方法**
### **1. 显式R-K公式**  
   - **一般形式**：  
     $$
     y_{n+1} = y_n + h \sum_{i=1}^{r} c_i k_i, \quad 
     \begin{cases}
     k_1 = f(t_n, y_n) \\
     k_i = f\left( t_n + \lambda_i h, y_n + h \sum_{j=1}^{i-1} \mu_{ij} k_j \right)
     \end{cases}
     $$  
   - **参数确定**：通过泰勒展开匹配精度阶（例：2级R-K见Page 29）。  

### **2. 常用公式**  
   - **改进欧拉法（2级2阶）**：  
     $$
     \begin{cases}
     k_1 = f(t_n, y_n) \\
     k_2 = f(t_n + h, y_n + h k_1) \\
     y_{n+1} = y_n + \frac{h}{2} (k_1 + k_2)
     \end{cases}
     $$  
   - **经典4级4阶R-K**：  
     $$
     \begin{cases}
     k_1 = f(t_n, y_n) \\
     k_2 = f(t_n + \frac{h}{2}, y_n + \frac{h}{2} k_1) \\
     k_3 = f(t_n + \frac{h}{2}, y_n + \frac{h}{2} k_2) \\
     k_4 = f(t_n + h, y_n + h k_3) \\
     y_{n+1} = y_n + \frac{h}{6} (k_1 + 2k_2 + 2k_3 + k_4)
     \end{cases}
     $$
   - **精度与稳定性**：  
     - r级显式R-K最高阶数：r（当 $r \leq 4$ 时）。  
     - 稳定区域：模型问题下 $|\phi(h\lambda)| \leq 1$（例：2阶R-K要求 $h \leq -2/\lambda$）。  


## **五、多步法**
### **1. 线性多步法公式**  
   $$
   y_{n+1} = \sum_{i=1}^{m} \alpha_i y_{n+1-i} + h \sum_{i=0}^{m} \beta_i f(t_{n+1-i}, y_{n+1-i})
   $$
   - **显式**：$\beta_0 = 0$；**隐式**：$\beta_0 \neq 0$。  

### **2. 系数确定方法**  
   - **泰勒展开法**：  
     - 将 $y(t_{n+1})$ 在 $t_{n+1}$ 泰勒展开，匹配系数使低阶项为零。  
     - **相容性条件**（1阶精度）：  
       $
       \sum \alpha_i = 1, \quad \sum i \alpha_i = \sum \beta_i
       $  
   - **单项式代入法**：  
     - 令 $y(t) = t^k$（$k=0,1,\dots,p$）代入公式，解方程组。  

### **3. 常用多步法**  
   | **类型**       | **公式**                                                                 | **阶数** | **稳定阈值** |
   |---------------|--------------------------------------------------------------------------|----------|--------------|
   | **Adams显式** | $y_{n+1} = y_n + \frac{h}{24} (55f_n - 59f_{n-1} + 37f_{n-2} - 9f_{n-3})$ | 4        | $-3/10$  |
   | **Adams隐式** | $y_{n+1} = y_n + \frac{h}{24} (9f_{n+1} + 19f_n - 5f_{n-1} + f_{n-2})$    | 4        | $-3$     |
   | **BDF隐式**   | $y_{n+1} = \sum \alpha_i y_{n+1-i} + h \beta_0 f_{n+1}$                  | 变阶     | 大稳定区域   |

   - **定理8.4**：m步Adams法，显式阶数 $m$，隐式阶数 $m+1$。  
   - **启动问题**：需用单步法计算前 $m$ 步。  


## **六、稳定性与收敛性**
### **1. 数值稳定性定义**（定义8.2）  
   - 扰动 $\delta_n$ 引起的后续误差 $|\delta_m| \leq |\delta_n|$。  

### **2. 收敛性条件**  
   - **单步法**：若满足相容性 $\varphi(t,y,0) = f(t,y)$ 且 Lipschitz 连续，则收敛。  
   - **多步法**：需满足根条件（特征多项式根 $|r_i| \leq 1$ 且模1根为单根）。  

### **3. 刚性（Stiff）问题**  
   - 特征：解变化缓慢，但附近解变化快（$\operatorname{Re}(\lambda_k) \ll 0$）。  
   - **适用方法**：隐式法（如向后欧拉、BDF）。  



**示例**：双联摆问题。  
$$
\begin{bmatrix}
1 & 0 & 0 & 0 \\
0 & 1 & 0 & 0 \\
0 & 0 & 2 & \cos(\Delta u) \\
0 & 0 & \cos(\Delta u) & 1
\end{bmatrix}
\mathbf{u}' = 
\begin{bmatrix}
u_3 \\
u_4 \\
-2g \sin u_1 - \sin(\Delta u) u_4^2 \\
-g \sin u_2 + \sin(\Delta u) u_3^2
\end{bmatrix}, \quad \Delta u = u_1 - u_2
$$
