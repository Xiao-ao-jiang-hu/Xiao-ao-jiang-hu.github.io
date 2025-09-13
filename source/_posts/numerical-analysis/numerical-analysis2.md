---
title: 矩阵的QR分解
tags:
  - mathematics
  - numerical-analysis
  - QR-decomposition
  - Householder-transformation
  - Givens-rotation
  - matrix-factorization
categories:
  - numerical-analysis
excerpt: 本文介绍了矩阵的QR分解，包括Householder变换和Givens旋转，重点讨论了它们在数值计算中的应用和实现方法。
abbrlink: 6f72a8b5
date: 2025-05-27 01:07:32
---

## QR分解
定义：对任意实矩阵$A \in \mathbb{R}^{m \times n}$，存在正交矩阵$Q$和上三角矩阵$R$，使得  
$$
A = QR.
$$ 
- 唯一性：若$A$非奇异且为方阵（$m = n$），且规定$R$的对角元全为正，则分解唯一。  
- 经济分解：当$m > n$时，$Q$为$m \times n$列正交矩阵，$R$为$n \times n$上三角阵；当$m < n$，分解形式需调整。  

核心思想：通过正交变换（Householder反射或Givens旋转）逐步将矩阵$A$转化为上三角阵$R$，同时记录变换过程得到正交阵$Q$。  


## Householder变换  
定义5.8：给定单位向量$w \in \mathbb{R}^n$，Householder矩阵定义为：  
$$
H(w) = I - 2ww^T,
$$ 
其性质包括对称性（$H^T = H$）和正交性（$H^TH = I$）。  

几何意义：  
-$Hx$表示向量$x$关于以$w$为法向量的超平面的镜像反射。  
- 保持向量2-范数不变，即$\|Hx\|_2 = \|x\|_2$。  

关键定理：  
- 定理5.18：若$x, y \in \mathbb{R}^n$满足$\|x\|_2 = \|y\|_2$，则存在Householder矩阵$H$，使得$Hx = y$。  
- 定理5.19：可构造$H$将任意向量$x$变换为$\pm \|x\|_2 e_1$，即  
$$
  Hx = \begin{bmatrix} -\sigma \\ 0 \\ \vdots \\ 0 \end{bmatrix}, \quad \sigma = \text{sign}(x_1)\|x\|_2.
$$ 

构造方法（取$x$和$-\sigma e_1$的连线作为法向量，即沿着$x$和$-\sigma e_1$的垂直平分面对$x$做镜像）：  
1. 取$v = x + \sigma e_1$，其中$\sigma = \text{sign}(x_1)\|x\|_2$。  
2. 归一化：$w = v / \|v\|_2$。  
3. 定义$H = I - 2ww^T$。  

示例：  
对向量$a = \begin{bmatrix} 2 \\ 1 \\ 2 \end{bmatrix}$，构造$H$使其变换为$\begin{bmatrix} -3 \\ 0 \\ 0 \end{bmatrix}$：  
1. 计算$\sigma = 3$，则$v = a + \sigma e_1 = \begin{bmatrix} 5 \\ 1 \\ 2 \end{bmatrix}$。  
2.$w = v / \|v\|_2$，得$H = I - 2ww^T$。  
3. 验证：$Ha = -3e_1$。  


## Givens旋转变换  
定义：Givens矩阵是平面旋转矩阵的推广，用于在特定平面内旋转向量以消元。  

二维形式：  
$$
G = \begin{bmatrix} c & s \\ -s & c \end{bmatrix}, \quad c = \cos\theta, \, s = \sin\theta,
$$ 
满足$G^TG = I$。  

消元原理：对向量$\begin{bmatrix} x_i \\ x_j \end{bmatrix}$，选择$c = x_i / \alpha$，$s = x_j / \alpha$，其中$\alpha = \sqrt{x_i^2 + x_j^2}$，使得  
$$
G \begin{bmatrix} x_i \\ x_j \end{bmatrix} = \begin{bmatrix} \alpha \\ 0 \end{bmatrix}.
$$ 

高维扩展：将二维Givens矩阵嵌入n维单位阵，仅修改两行两列。例如，对向量$x = \begin{bmatrix} 2 \\ 0 \\ 1 \\ 2 \end{bmatrix}$：  
1. 构造$G_1$消去第三分量：  
 $$
   G_1 = \begin{bmatrix} 2/\sqrt{5} & 0 & 1/\sqrt{5} & 0 \\ 0 & 1 & 0 & 0 \\ -1/\sqrt{5} & 0 & 2/\sqrt{5} & 0 \\ 0 & 0 & 0 & 1 \end{bmatrix} \implies G_1x = \begin{bmatrix} \sqrt{5} \\ 0 \\ 0 \\ 2 \end{bmatrix}.
 $$ 
2. 构造$G_2$消去第四分量：  
 $$
   G_2 = \begin{bmatrix} \sqrt{5}/3 & 0 & 0 & 2/3 \\ 0 & 1 & 0 & 0 \\ 0 & 0 & 1 & 0 \\ -2/3 & 0 & 0 & \sqrt{5}/3 \end{bmatrix} \implies G_2G_1x = \begin{bmatrix} 3 \\ 0 \\ 0 \\ 0 \end{bmatrix}.
 $$ 

优势：每次旋转仅影响两个元素，适合稀疏矩阵的局部消元。  


## QR分解的算法实现  
Householder方法：  
1. 列消元：从第一列开始，逐列构造Householder矩阵$H_k$，消去当前列下方的非零元素。  
2. 矩阵更新：  
 $$
   H_n \cdots H_2H_1A = R \quad \implies \quad A = H_1H_2 \cdots H_n R = QR,
 $$ 
   其中$Q = H_1H_2 \cdots H_n$。  
3. 经济存储：对于$A \in \mathbb{R}^{m \times n}$（$m \geq n$），仅需存储前$n$个Householder向量。  

Givens方法：  
1. 元素消元：从矩阵左下角开始，逐行消元。对每个非零元素$a_{ij}$（$i > j$），构造Givens矩阵$G_{ij}$将其变为零。  
2. 累积变换：  
 $$
   G_{k} \cdots G_2G_1A = R \quad \implies \quad A = G_1^TG_2^T \cdots G_k^T R = QR.
 $$ 


## 计算矩阵所有特征值的方法

### 1. 实Schur分解
实Schur分解定理（Th5.21）：  
对任意实矩阵$A \in \mathbb{R}^{n \times n}$，存在正交矩阵$Q$和拟上三角矩阵$S$（实Schur型），使得  
$$
Q^T A Q = S,
$$ 
其中$S$的形式为分块上三角矩阵，其对角块为1阶或2阶实矩阵：  
- 1阶对角块：对应实特征值。  
- 2阶对角块：对应一对复共轭特征值（例如$\alpha \pm \beta i$）。  

实Schur型的结构：  
设$S$的形式为：  
$$
S = \begin{bmatrix}
S_{11} & S_{12} & \cdots & S_{1m} \\
0 & S_{22} & \cdots & S_{2m} \\
\vdots & \vdots & \ddots & \vdots \\
0 & 0 & \cdots & S_{mm}
\end{bmatrix},
$$ 
其中每个$S_{ii}$是1阶或2阶实矩阵：  
- 若$S_{ii}$为1阶块，则其唯一元素即为$A$的实特征值。  
- 若$S_{ii}$为2阶块$\begin{bmatrix} a & b \\ c & d \end{bmatrix}$，其特征值为复数$\alpha \pm \beta i$，满足$\alpha = \frac{a+d}{2}$，$\beta = \sqrt{bc - \frac{(a-d)^2}{4}}$。  

存在性与唯一性：  
- 存在性：定理保证实Schur分解对任意实矩阵均存在。  
- 唯一性：若矩阵$A$的特征值均为实数且互异，则实Schur型退化为对角矩阵（特征值按任意顺序排列）。对于重复特征值或复特征值，分解不唯一，但分块结构由特征值的代数重数决定。  

优势与应用：  
- 避免复数运算：通过2阶对角块表示复共轭特征值对，避免直接处理复数矩阵。  
- 直接读取特征值：从分块结构中可直接提取所有实数和复共轭特征值对。  
- 数值稳定性：正交相似变换（Householder或Givens）保范性强，适合数值计算。  


### 2. QR迭代算法
理论基础：  
QR迭代通过正交相似变换序列$\{A_k\}$，逐步逼近实Schur型矩阵$S$。迭代公式为：  
$$
A_{k+1} = R_k Q_k, \quad \text{其中 } A_k = Q_k R_k \text{（QR分解）}.
$$ 

收敛性（Th5.22）：  
- 若$A$的等模特征值为实重根或复共轭对，则$\{A_k\}$收敛到拟上三角阵（实Schur型）。  
- 对称矩阵的QR迭代收敛到对角阵，特征值为实数。  

算法实现：  
1. 预处理为上Hessenberg型：  
通过Householder变换将$A$化为上Hessenberg矩阵（次对角线以下全零）：  
$$
\begin{bmatrix}* & * & * & * \\ * & * & * & * \\
    0 & * & * & * \\
    0 & 0 & * & *
\end{bmatrix}
$$ 

优势：QR分解的计算量从$O(n^3)$降至$O(n^2)$。  

1. Givens旋转的应用：  
   - 对上Hessenberg矩阵执行QR分解时，逐行消元仅需$n-1$次Givens旋转。  
   - 例：对$A_k$，构造Givens矩阵$P_1, \dots, P_{n-1}$，使得$P_{n-1} \cdots P_1 A_k = R_k$，则$Q_k = (P_{n-1} \cdots P_1)^T$，更新$A_{k+1} = R_k Q_k$。  

结构保持性：  
- 每步迭代后$A_{k+1}$仍保持上Hessenberg型，确保算法高效性。  

### 3. 收缩技术（Deflation）
核心步骤：  
1. 已知特征向量处理：若$A$有特征值$\lambda_1$及对应特征向量$x_1$，构造Householder变换$H$，使$Hx_1 = \sigma e_1$。  
2. 正交相似变换：计算$HAH^T$，其分块形式为：  
 $$
   HAH^T = \begin{bmatrix} \lambda_1 & r_1^T \\ 0 & A_1 \end{bmatrix},
 $$ 
   其中$A_1$为降阶后的子矩阵，其特征值为$A$的剩余特征值。  

示例：  
对矩阵$A = \begin{bmatrix} 3 & -1 & 1 \\ 2 & 0 & 1 \\ 1 & -1 & 2 \end{bmatrix}$，已知特征值$\lambda_1 = 2$，特征向量$x_1 = [1, 1, 0]^T$：  
1. 构造Householder变换$H$，将$x_1$反射到$\sigma e_1$。  
2. 计算$HAH^T$，子矩阵$A_1$的特征值为$1$和$2$。  

局限性：误差可能累积，且效率较低。  

