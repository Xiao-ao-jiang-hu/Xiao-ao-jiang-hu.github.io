---
title: ODE第二部分
tags:
  - math
  - ode
categories:
  - math
  - ode
excerpt: ODE第二部分
index_img: /img/ode.jpg
banner_img: /img/ode.jpg
date: 2025-11-24 07:17:24
---
## 第一部分：二阶系统的IVP形式与线性共轭

### 1. 二阶系统的IVP形式

**定义 1.1（平面线性系统的初值问题）**  
设 $A$ 是一个 $2 \times 2$ 实矩阵，$\mathbf{x}(t) = \begin{pmatrix} x_1(t) \\ x_2(t) \end{pmatrix}$ 是未知向量函数，$t$ 是自变量。平面线性系统的初值问题（IVP）表示为：  
$$
\begin{cases}
\dot{\mathbf{x}} = A \mathbf{x}, \\
\mathbf{x}(t_0) = \mathbf{x}_0,
\end{cases}
$$  
其中 $\dot{\mathbf{x}} = \frac{d\mathbf{x}}{dt}$，$\mathbf{x}_0 \in \mathbb{R}^2$ 是初始条件。解 $\mathbf{x}(t)$ 需在包含 $t_0$ 的区间 $I \subseteq \mathbb{R}$ 上定义，满足 $\dot{\mathbf{x}}(t) = A \mathbf{x}(t)$ 对于所有 $t \in I$，且 $\mathbf{x}(t_0) = \mathbf{x}_0$.

### 2. 系统的线性共轭

**定义 1.2（线性共轭系统）**  
设 $A$ 和 $B$ 是两个 $2 \times 2$ 实矩阵。如果存在一个 $2 \times 2$ 可逆矩阵 $P$ 使得 $A = P B P^{-1}$，则称系统 $\dot{\mathbf{x}} = A \mathbf{x}$ 和 $\dot{\mathbf{y}} = B \mathbf{y}$ 是线性共轭的。矩阵 $P$ 称为共轭矩阵。

### 3. 性质1及其证明

**性质 1.1**  
设 $A$ 和 $B$ 是两个 $2 \times 2$ 实矩阵，$P$ 是一个 $2 \times 2$ 可逆矩阵使得 $A = P B P^{-1}$。考虑两个初值问题：  
IVP(1):  
$$
\begin{cases}
\dot{\mathbf{x}} = A \mathbf{x}, \\
\mathbf{x}(t_0) = \mathbf{c}_1,
\end{cases}
$$  
其中 $\mathbf{c}_1 \in \mathbb{R}^2$。  
IVP(2):  
$$
\begin{cases}
\dot{\mathbf{y}} = B \mathbf{y}, \\
\mathbf{y}(t_0) = \mathbf{c}_2,
\end{cases}
$$  
其中 $\mathbf{c}_2 = P^{-1} \mathbf{c}_1$。  
设 $\phi(t)$ 是一个从 $\mathbb{R}$ 到 $\mathbb{R}^2$ 的函数。则 $\phi$ 是 IVP(2) 的解当且仅当 $P \phi$ 是 IVP(1) 的解。

**证明**  
首先假设 $\phi$ 是 IVP(2) 的解，即 $\dot{\phi}(t) = B \phi(t)$ 对于所有 $t$ 在定义区间内，且 $\phi(t_0) = \mathbf{c}_2$。  
定义 $\psi(t) = P \phi(t)$。则  
$$
\dot{\psi}(t) = P \dot{\phi}(t) = P B \phi(t).
$$  
由于 $A = P B P^{-1}$，有 $P B = A P$，所以  
$$
\dot{\psi}(t) = A P \phi(t) = A \psi(t).
$$  
此外，  
$$
\psi(t_0) = P \phi(t_0) = P \mathbf{c}_2 = P (P^{-1} \mathbf{c}_1) = \mathbf{c}_1.
$$  
因此， $\psi = P \phi$ 满足 $\dot{\psi} = A \psi$ 和 $\psi(t_0) = \mathbf{c}_1$，即 $P \phi$ 是 IVP(1) 的解。

反之，假设 $P \phi$ 是 IVP(1) 的解，即 $\dot{(P \phi)}(t) = A (P \phi)(t)$ 且 $(P \phi)(t_0) = \mathbf{c}_1$。  
由于 $P$ 是常数矩阵，有 $\dot{(P \phi)} = P \dot{\phi}$，所以  
$$
P \dot{\phi}(t) = A P \phi(t).
$$  
由于 $A = P B P^{-1}$，有 $A P = P B$，所以  
$$
P \dot{\phi}(t) = P B \phi(t).
$$  
左乘 $P^{-1}$ 得  
$$
\dot{\phi}(t) = B \phi(t).
$$  
此外，  
$$
\phi(t_0) = P^{-1} (P \phi(t_0)) = P^{-1} \mathbf{c}_1 = \mathbf{c}_2.
$$  
因此， $\phi$ 满足 $\dot{\phi} = B \phi$ 和 $\phi(t_0) = \mathbf{c}_2$，即 $\phi$ 是 IVP(2) 的解。  
综上，性质得证。


## 第二部分：A可对角化的情形

### 1. 可对角化系统的解结构

**定义 2.1（可对角化矩阵）**  
设 $A$ 是一个 $2 \times 2$ 实矩阵。如果存在一个 $2 \times 2$ 可逆矩阵 $P$ 和一个对角矩阵 $D$ 使得 $A = P D P^{-1}$，则称 $A$ 是可对角化的。

**定理 2.1（可对角化系统的解结构）**  
设 $A$ 是一个可对角化的 $2 \times 2$ 实矩阵，其特征值为 $\lambda_1, \lambda_2 \in \mathbb{C}$。设 $\mathbf{v}_1, \mathbf{v}_2$ 分别是 $\lambda_1, \lambda_2$ 对应的特征向量。则系统 $\dot{\mathbf{x}} = A \mathbf{x}$ 的解构成一个二维线性空间，其一组基为：
$$
\mathbf{x}_1(t) = e^{\lambda_1 t} \mathbf{v}_1, \quad \mathbf{x}_2(t) = e^{\lambda_2 t} \mathbf{v}_2.
$$
对于任意初值 $\mathbf{x}(0) = \mathbf{c}$，若 $\mathbf{c} = c_1 \mathbf{v}_1 + c_2 \mathbf{v}_2$，则解为：
$$
\mathbf{x}(t) = c_1 e^{\lambda_1 t} \mathbf{v}_1 + c_2 e^{\lambda_2 t} \mathbf{v}_2.
$$

**证明**  
由可对角化条件，存在可逆矩阵 $P = [\mathbf{v}_1, \mathbf{v}_2]$ 使得 $A = P D P^{-1}$，其中 $D = \begin{bmatrix} \lambda_1 & 0 \\ 0 & \lambda_2 \end{bmatrix}$。  
令 $\mathbf{y} = P^{-1} \mathbf{x}$，则系统化为 $\dot{\mathbf{y}} = D \mathbf{y}$，其解为 $\mathbf{y}(t) = e^{Dt} \mathbf{y}(0)$。  
于是 $\mathbf{x}(t) = P e^{Dt} P^{-1} \mathbf{c}$。  
取 $\mathbf{c} = \mathbf{v}_1$ 和 $\mathbf{c} = \mathbf{v}_2$，分别得到特解 $\mathbf{x}_1(t) = e^{\lambda_1 t} \mathbf{v}_1$ 和 $\mathbf{x}_2(t) = e^{\lambda_2 t} \mathbf{v}_2$。  
由引理 2.2（解空间的线性性）和初值问题的唯一性，这些特解构成解空间的一组基。


**引理 2.1（特征向量解）**  
设 $\mathbf{v}$ 是矩阵 $A$ 的对应特征值 $\lambda$ 的特征向量，则 $\mathbf{x}(t) = e^{\lambda t} \mathbf{v}$ 是方程 $\dot{\mathbf{x}} = A \mathbf{x}$ 的解。

**证明**  
直接计算：
$$
\frac{d}{dt} \left( e^{\lambda t} \mathbf{v} \right) = \lambda e^{\lambda t} \mathbf{v} = e^{\lambda t} A \mathbf{v} = A \left( e^{\lambda t} \mathbf{v} \right).
$$
因此满足方程。


**引理 2.2（解空间的线性性）**  
系统 $\dot{\mathbf{x}} = A \mathbf{x}$ 的解构成一个线性空间。

**证明**  
设 $\phi(t), \psi(t)$ 是系统的两个解，$a, b \in \mathbb{R}$。则：
$$
\frac{d}{dt} (a\phi + b\psi) = a\dot{\phi} + b\dot{\psi} = a A\phi + b A\psi = A(a\phi + b\psi).
$$
因此 $a\phi + b\psi$ 也是解，解集合对线性运算封闭。


### 2. 复特征值情形的实解

**定理 2.2（复特征值情形的实解）**  
设 $A$ 的特征值为 $\lambda = a + bi$ 和 $\overline{\lambda} = a - bi$（$b \neq 0$），对应的特征向量为 $\mathbf{u} = \mathbf{v} + i\mathbf{w}$。则存在实可逆矩阵 $P = [\mathbf{v}, \mathbf{w}]$ 使得 $A = P N P^{-1}$，其中
$$
N = \begin{bmatrix} a & b \\ -b & a \end{bmatrix}.
$$
系统 $\dot{\mathbf{x}} = A \mathbf{x}$ 的解空间的一组实基为：
$$
\mathbf{x}_1(t) = e^{at} (\mathbf{v} \cos bt - \mathbf{w} \sin bt), \quad \mathbf{x}_2(t) = e^{at} (\mathbf{v} \sin bt + \mathbf{w} \cos bt).
$$

**证明**  
由特征向量的定义：
$$
A(\mathbf{v} + i\mathbf{w}) = (a + bi)(\mathbf{v} + i\mathbf{w}) = (a\mathbf{v} - b\mathbf{w}) + i(b\mathbf{v} + a\mathbf{w}).
$$
比较实部虚部得：
$$
A\mathbf{v} = a\mathbf{v} - b\mathbf{w}, \quad A\mathbf{w} = b\mathbf{v} + a\mathbf{w}.
$$
于是 $A P = P N$，即 $A = P N P^{-1}$。  
系统 $\dot{\mathbf{y}} = N \mathbf{y}$ 有基解：
$$
\mathbf{y}_1(t) = e^{at} \begin{bmatrix} \cos bt \\ -\sin bt \end{bmatrix}, \quad \mathbf{y}_2(t) = e^{at} \begin{bmatrix} \sin bt \\ \cos bt \end{bmatrix}.
$$
通过变换 $\mathbf{x} = P \mathbf{y}$ 得到原系统的实基解。


### 3. 平衡点分类

**定义 2.2（螺旋汇）**  
当系统 $\dot{\mathbf{x}} = A \mathbf{x}$ 的特征值为 $a \pm bi$ 且 $a < 0, b \neq 0$ 时，原点称为螺旋汇。从任何非零初值出发的解随 $t \to +\infty$ 螺旋趋于原点。

**定义 2.3（螺旋源）**  
当系统 $\dot{\mathbf{x}} = A \mathbf{x}$ 的特征值为 $a \pm bi$ 且 $a > 0, b \neq 0$ 时，原点称为螺旋源。从任何非零初值出发的解随 $t \to +\infty$ 螺旋远离原点。

**定义 2.4（中心点）**  
当系统 $\dot{\mathbf{x}} = A \mathbf{x}$ 的特征值为 $\pm bi$（$b \neq 0$）时，原点称为中心点。从任何非零初值出发的解是周期轨道。


## 第三部分：A不可对角化的情形

### 1. 不可对角化系统的定义与结构

**定义 3.1（不可对角化矩阵）**  
设 $A$ 是一个 $2 \times 2$ 实矩阵。如果 $A$ 仅有一个实特征值 $\lambda$，其代数重数为 2 但几何重数为 1，则称 $A$ 是不可对角化的。

**定理 3.1（Jordan标准型）**  
设 $A$ 是一个不可对角化的 $2 \times 2$ 实矩阵，其特征值为 $\lambda$。则存在可逆实矩阵 $P$ 使得
$$
A = P J P^{-1}, \quad \text{其中} \quad J = \begin{bmatrix} \lambda & 1 \\ 0 & \lambda \end{bmatrix}.
$$

**证明**  
由代数重数为 2 且几何重数为 1，存在特征向量 $\mathbf{v}_1$ 对应特征值 $\lambda$。选择向量 $\mathbf{v}_2$ 使得 $(A - \lambda I)\mathbf{v}_2 = \mathbf{v}_1$。  
令 $P = [\mathbf{v}_1, \mathbf{v}_2]$，则
$$
AP = A[\mathbf{v}_1, \mathbf{v}_2] = [\lambda\mathbf{v}_1, A\mathbf{v}_2] = [\lambda\mathbf{v}_1, \lambda\mathbf{v}_2 + \mathbf{v}_1] = P\begin{bmatrix} \lambda & 1 \\ 0 & \lambda \end{bmatrix}.
$$
因此 $A = P J P^{-1}$。


### 2. Jordan标准型系统的解

**定理 3.2（Jordan系统的解）**  
考虑系统 $\dot{\mathbf{y}} = J \mathbf{y}$，其中 $J = \begin{bmatrix} \lambda & 1 \\ 0 & \lambda \end{bmatrix}$，初值条件 $\mathbf{y}(0) = \mathbf{c} = \begin{pmatrix} c_1 \\ c_2 \end{pmatrix}$。  
该系统的解为：
$$
\mathbf{y}(t) = e^{\lambda t} \begin{bmatrix} 1 & t \\ 0 & 1 \end{bmatrix} \mathbf{c} = e^{\lambda t} \begin{pmatrix} c_1 + c_2 t \\ c_2 \end{pmatrix}.
$$
解空间的一组基为：
$$
\mathbf{y}_1(t) = e^{\lambda t} \begin{pmatrix} 1 \\ 0 \end{pmatrix}, \quad \mathbf{y}_2(t) = e^{\lambda t} \begin{pmatrix} t \\ 1 \end{pmatrix}.
$$

**证明**  
系统分量形式为：
$$
\begin{cases}
\dot{y}_1 = \lambda y_1 + y_2, \\
\dot{y}_2 = \lambda y_2.
\end{cases}
$$
第二个方程的解为 $y_2(t) = c_2 e^{\lambda t}$。  
代入第一个方程：
$$
\dot{y}_1 = \lambda y_1 + c_2 e^{\lambda t}.
$$
这是非齐次线性方程，解为：
$$
y_1(t) = e^{\lambda t} \left( c_1 + \int_0^t c_2 e^{\lambda s} e^{-\lambda s} ds \right) = e^{\lambda t} (c_1 + c_2 t).
$$
因此解为：
$$
\mathbf{y}(t) = e^{\lambda t} \begin{pmatrix} c_1 + c_2 t \\ c_2 \end{pmatrix}.
$$
取 $\mathbf{c} = \begin{pmatrix} 1 \\ 0 \end{pmatrix}$ 和 $\mathbf{c} = \begin{pmatrix} 0 \\ 1 \end{pmatrix}$ 得到基解。


### 3. 一般不可对角化系统的解

**定理 3.3（一般不可对角化系统的解）**  
设 $A = P J P^{-1}$，其中 $P = [\mathbf{v}_1, \mathbf{v}_2]$ 是可逆实矩阵，$J$ 为 Jordan 块。则系统 $\dot{\mathbf{x}} = A \mathbf{x}$ 的解空间的一组基为：
$$
\mathbf{x}_1(t) = e^{\lambda t} \mathbf{v}_1, \quad \mathbf{x}_2(t) = t e^{\lambda t} \mathbf{v}_1 + e^{\lambda t} \mathbf{v}_2.
$$

**证明**  
由性质 1.1（线性共轭系统的解对应关系），系统 $\dot{\mathbf{x}} = A \mathbf{x}$ 与 $\dot{\mathbf{y}} = J \mathbf{y}$ 通过变换 $\mathbf{x} = P \mathbf{y}$ 相关联。  
将定理 3.2 的基解通过此变换：
$$
\mathbf{x}_1(t) = P \mathbf{y}_1(t) = P \left( e^{\lambda t} \begin{pmatrix} 1 \\ 0 \end{pmatrix} \right) = e^{\lambda t} \mathbf{v}_1,
$$
$$
\mathbf{x}_2(t) = P \mathbf{y}_2(t) = P \left( e^{\lambda t} \begin{pmatrix} t \\ 1 \end{pmatrix} \right) = t e^{\lambda t} \mathbf{v}_1 + e^{\lambda t} \mathbf{v}_2.
$$
这些解线性无关且构成解空间的基。

### 4. 平衡点分类

**定义 3.2（退化结点）**  
当系统 $\dot{\mathbf{x}} = A \mathbf{x}$ 的矩阵 $A$ 不可对角化且特征值 $\lambda < 0$ 时，原点称为退化结点。所有解随 $t \to +\infty$ 趋于原点，但沿单一方向。

**定义 3.3（退化源）**  
当系统 $\dot{\mathbf{x}} = A \mathbf{x}$ 的矩阵 $A$ 不可对角化且特征值 $\lambda > 0$ 时，原点称为退化源。所有解随 $t \to +\infty$ 远离原点，但沿单一方向。

**定义 3.4（临界结点）**  
当系统 $\dot{\mathbf{x}} = A \mathbf{x}$ 的矩阵 $A$ 不可对角化且特征值 $\lambda = 0$ 时，原点称为临界结点。此时系统退化为 $\dot{\mathbf{x}} = N \mathbf{x}$，其中 $N^2 = 0$。

## 第四部分：临界阻尼情形与迹-行列式平面分类
### 1. 简谐振子的临界阻尼情形示例

**定理 4.1（临界阻尼简谐振子）**  
考虑简谐振子系统：
$$
\ddot{x} = -kx - a\dot{x},
$$
当摩擦系数 $a = 2\sqrt{k}$ 时，系统矩阵为：
$$
A = \begin{bmatrix} 0 & 1 \\ -k & -2\sqrt{k} \end{bmatrix}.
$$
此时 $A$ 不可对角化，其特征值为二重实根 $\lambda = -\sqrt{k}$。

**证明**  
特征多项式为：
$$
P_A(\lambda) = \lambda^2 + 2\sqrt{k}\lambda + k = (\lambda + \sqrt{k})^2.
$$
特征值 $\lambda = -\sqrt{k}$ 的代数重数为 2。  
计算几何重数：
$$
A - \lambda I = \begin{bmatrix} \sqrt{k} & 1 \\ -k & -\sqrt{k} \end{bmatrix},
\quad \text{rank}(A - \lambda I) = 1.
$$
几何重数 = $2 - \text{rank}(A - \lambda I) = 1 < 2$，故 $A$ 不可对角化。


**定理 4.2（临界阻尼情形的解）**  
系统 $\dot{X} = AX$ 的通解为：
$$
X(t) = e^{-\sqrt{k}t} \left[ C_1 \begin{bmatrix} 1 \\ -\sqrt{k} \end{bmatrix} + C_2 \begin{bmatrix} t \\ 1 - \sqrt{k}t \end{bmatrix} \right],
$$
其中 $C_1, C_2$ 由初值条件确定。原方程的解为 $x(t) = X_1(t)$。

**证明**  
通过构造 Jordan 链：取特征向量 $\mathbf{v}_1 = \begin{bmatrix} 1 \\ -\sqrt{k} \end{bmatrix}$，  
解方程 $(A - \lambda I)\mathbf{v}_2 = \mathbf{v}_1$ 得 $\mathbf{v}_2 = \begin{bmatrix} 0 \\ 1 \end{bmatrix}$。  
令 $P = [\mathbf{v}_1, \mathbf{v}_2]$，则 $A = P J P^{-1}$，其中 $J = \begin{bmatrix} -\sqrt{k} & 1 \\ 0 & -\sqrt{k} \end{bmatrix}$。  
系统 $\dot{Y} = JY$ 有基解：
$$
\mathbf{y}_1(t) = e^{-\sqrt{k}t} \begin{pmatrix} 1 \\ 0 \end{pmatrix}, \quad \mathbf{y}_2(t) = e^{-\sqrt{k}t} \begin{pmatrix} t \\ 1 \end{pmatrix}.
$$
通过变换 $X = PY$ 得到原系统的基解，线性组合即得通解。

**定义 4.3（临界阻尼的平衡点）**  
在此临界阻尼情形下，原点称为**退化结点**。所有解随 $t \to +\infty$ 趋于原点，且沿特征向量方向 $\mathbf{v}_1$ 衰减最快，无振荡现象。

### 2. 平衡点的迹-行列式平面分类

**定义 4.4（迹-行列式平面）**  
设 $A$ 是一个 $2 \times 2$ 实矩阵，定义其迹 $T = \mathrm{tr}(A)$ 和行列式 $D = \det(A)$。迹-行列式平面是以 $T$ 为横轴、$D$ 为纵轴的平面，用于分类系统 $\dot{\mathbf{x}} = A \mathbf{x}$ 的平衡点类型。

**定理 4.5（特征多项式与判别式）**  
矩阵 $A$ 的特征多项式为：
$$
f_A(\lambda) = \lambda^2 - T\lambda + D.
$$
定义判别式 $\Delta = T^2 - 4D$。

**证明**  
由特征多项式定义，$f_A(\lambda) = \det(\lambda I - A)$。对于 $2 \times 2$ 矩阵：
$$
\det\begin{bmatrix} \lambda - a_{11} & -a_{12} \\ -a_{21} & \lambda - a_{22} \end{bmatrix} 
= \lambda^2 - (a_{11}+a_{22})\lambda + (a_{11}a_{22} - a_{12}a_{21}) = \lambda^2 - T\lambda + D.
$$
判别式 $\Delta = T^2 - 4D$ 决定特征根的性质。


**定理 4.6（平衡点分类）**  
系统 $\dot{\mathbf{x}} = A \mathbf{x}$ 的平衡点分类如下：

1. **鞍点**：当 $D < 0$，特征值为一正一负两个实根。
2. **源**：当 $D > 0, T > 0, \Delta > 0$，特征值为两个正实根。
3. **螺旋源**：当 $D > 0, T > 0, \Delta < 0$，特征值为实部为正的共轭复根。
4. **汇**：当 $D > 0, T < 0, \Delta > 0$，特征值为两个负实根。
5. **螺旋汇**：当 $D > 0, T < 0, \Delta < 0$，特征值为实部为负的共轭复根。
6. **中心点**：当 $D > 0, T = 0$，特征值为纯虚数。
7. **退化结点**：当 $\Delta = 0, T \neq 0$ 且 $A$ 不可对角化。
8. **临界结点**：当 $\Delta = 0, T \neq 0$ 且 $A$ 可对角化。

**证明**  
分类基于特征值的实部符号：
- 若两特征根实部均负，平衡点为汇（稳定）
- 若两特征根实部均正，平衡点为源（不稳定）
- 若两特征根实部异号，平衡点为鞍点（不稳定）
具体情形由 $T, D, \Delta$ 的符号关系确定：
- $D < 0 \Rightarrow$ 特征值异号 $\Rightarrow$ 鞍点
- $D > 0, T > 0, \Delta > 0 \Rightarrow$ 两正实根 $\Rightarrow$ 源
- $D > 0, T > 0, \Delta < 0 \Rightarrow$ 实部为正的复根 $\Rightarrow$ 螺旋源
- $D > 0, T < 0, \Delta > 0 \Rightarrow$ 两负实根 $\Rightarrow$ 汇
- $D > 0, T < 0, \Delta < 0 \Rightarrow$ 实部为负的复根 $\Rightarrow$ 螺旋汇
- $D > 0, T = 0 \Rightarrow$ 纯虚根 $\Rightarrow$ 中心点
- $\Delta = 0 \Rightarrow$ 重根，可对角化性决定结点类型


**推论 4.7（稳定性判据）**  
设 $A$ 的特征根实部均不为零：
- 若两特征根实部均小于0，平衡点为汇
- 若两特征根实部均大于0，平衡点为源  
- 若两特征根实部异号，平衡点为鞍点

**证明**  
由特征根实部符号直接决定解的渐近行为：
- 实部均负 $\Rightarrow e^{\lambda t} \to 0 \Rightarrow$ 稳定
- 实部均正 $\Rightarrow e^{\lambda t} \to \infty \Rightarrow$ 不稳定
- 实部异号 $\Rightarrow$ 一方向稳定，另一方向不稳定


## 第五部分：自治系统的相流

### 1. 相流的定义

**定义 5.1（流）**  
设 $V \subset \mathbb{R}^n$ 是一个开集。一族映射 $\{\phi_t : V \to V \mid t \in \mathbb{R}\}$ 称为 $V$ 上的一个流，如果满足：
1. $\phi_0 = \mathrm{Id}_V$（恒等映射），
2. $\phi_{t+s} = \phi_t \circ \phi_s$ 对于所有 $t, s \in \mathbb{R}$（群性质）。

若映射 $\phi: \mathbb{R} \times V \to V$ 定义为 $\phi(t, X) = \phi_t(X)$ 是连续（或光滑）的，则称该流为连续（或光滑）流。

**定义 5.2（相流）**  
设 $g: V \to \mathbb{R}^n$ 是一个连续向量场。考虑自治系统 $\dot{X} = g(X)$。假设对于每个初值 $Z \in V$，初值问题
$$
\begin{cases}
\dot{X} = g(X), \\
X(0) = Z
\end{cases}
$$
存在唯一解 $\phi(t, Z)$，且该解在 $\mathbb{R}$ 上有定义。定义映射 $\phi_t: V \to V$ 为 $\phi_t(Z) = \phi(t, Z)$。如果 $\{\phi_t : t \in \mathbb{R}\}$ 是 $V$ 上的一个流，则称其为自治系统 $\dot{X} = g(X)$ 的相流。

### 2. 相流的性质

**定理 5.1（相流是流）**  
设自治系统 $\dot{X} = g(X)$ 对每个初值 $Z \in V$ 都有唯一整体解 $\phi(t, Z)$，且定义 $\phi_t(Z) = \phi(t, Z)$。则 $\{\phi_t : t \in \mathbb{R}\}$ 是 $V$ 上的一个流。

**证明**  
需验证两个条件：
1. 由定义，$\phi_0(Z) = \phi(0, Z) = Z$，故 $\phi_0 = \mathrm{Id}_V$。
2. 固定 $Z \in V$，令 $\psi(t) = \phi_{t+s}(Z)$，$\chi(t) = \phi_t(\phi_s(Z))$。则
   $$
   \dot{\psi}(t) = g(\psi(t)), \quad \psi(0) = \phi_s(Z),
   $$
   $$
   \dot{\chi}(t) = g(\chi(t)), \quad \chi(0) = \phi_s(Z).
   $$
   由解的唯一性，$\psi(t) = \chi(t)$ 对所有 $t$ 成立，即 $\phi_{t+s}(Z) = \phi_t(\phi_s(Z))$。故 $\phi_{t+s} = \phi_t \circ \phi_s$。

因此，$\{\phi_t\}$ 是流。

### 3. 二维线性系统的相流

**定理 5.2（二维线性系统的相流）**  
设 $A$ 是一个二阶实方阵，且 $A = P B P^{-1}$，其中 $B \in \{D, N, J\}$ 为 $A$ 的实标准型（分别对应可对角化、幂零、Jordan块情形）。则系统 $\dot{X} = A X$ 的相流存在，且为 $\{\phi_t^A : t \in \mathbb{R}\}$，其中
$$
\phi_t^A(Z) = P \phi_t^B P^{-1} Z.
$$
这里 $\phi_t^B$ 是系统 $\dot{Y} = B Y$ 的相流。

**证明**  
我们仅需验证 $\{\phi_t^A : t \in \mathbb{R}\}$ 是一个流。由系统 $\dot{Y} = B Y$ 的相流定义，$\{\phi_t^B : t \in \mathbb{R}\}$ 是一个流。从而我们有
$$
\phi_0^A = P \phi_0^B P^{-1} = P \cdot \mathrm{Id} \cdot P^{-1} = \mathrm{Id}_{\mathbb{R}^2},
$$
且
$$
\phi_{t+s}^A = P \phi_{t+s}^B P^{-1} = P (\phi_t^B \circ \phi_s^B) P^{-1} = P \phi_t^B P^{-1} P \phi_s^B P^{-1} = \phi_t^A \circ \phi_s^A.
$$
因此，$\{\phi_t^A\}$ 是一个流。



## 第六部分：拓扑共轭与拓扑分类

### 1. 拓扑共轭的定义

**定义 6.1（拓扑共轭）**  
设 $\{\phi_t\}$ 和 $\{\psi_t\}$ 分别是定义在 $\mathbb{R}^n$ 上的两个流。如果存在一个同胚 $F: \mathbb{R}^n \to \mathbb{R}^n$ 使得对于所有 $t \in \mathbb{R}$ 和 $X \in \mathbb{R}^n$ 有
$$
F(\phi_t(X)) = \psi_t(F(X)),
$$
则称这两个流是拓扑共轭的，称 $F$ 为拓扑共轭。

对于自治系统 $\dot{X} = f(X)$ 和 $\dot{Y} = g(Y)$，如果它们的相流是拓扑共轭的，则称这两个系统是拓扑共轭的。

### 2. 拓扑共轭的性质

**性质 6.1（拓扑共轭是等价关系）**  
拓扑共轭是自治系统之间的一个等价关系。

**证明**  
- 自反性：取 $F = \mathrm{Id}_{\mathbb{R}^n}$，显然成立。
- 对称性：若 $F$ 是拓扑共轭，则 $F^{-1}$ 也是拓扑共轭。
- 传递性：若 $F$ 和 $G$ 分别是两个拓扑共轭，则 $G \circ F$ 也是拓扑共轭。

**性质 6.2（拓扑共轭保持轨道结构）**  
如果两个系统拓扑共轭，则它们的相图在拓扑意义下相同，即轨道被一一对应，且时间参数化也通过同胚对应。

### 3. 线性系统的拓扑共轭

**定义 6.2（线性共轭与拓扑共轭的关系）**  
如果两个线性系统是线性共轭的，则它们也是拓扑共轭的。

**定理 6.1（线性共轭蕴含拓扑共轭）**  
设 $A$ 和 $B$ 是两个 $n \times n$ 实矩阵，且存在可逆矩阵 $P$ 使得 $A = P B P^{-1}$。则系统 $\dot{X} = A X$ 和 $\dot{Y} = B Y$ 是拓扑共轭的。

**证明**  
定义 $F(X) = P X$，则 $F$ 是 $\mathbb{R}^n$ 到自身的同胚。设 $\phi_t^A(X) = e^{tA} X$，$\phi_t^B(Y) = e^{tB} Y$ 分别是两个系统的相流。则
$$
F(\phi_t^A(X)) = P e^{tA} X = P e^{tA} P^{-1} P X = e^{tB} P X = \phi_t^B(F(X)).
$$
因此，$F$ 是拓扑共轭。

### 4. 双曲系统的定义与判别

**定义 6.3（双曲矩阵）**  
设 $A$ 是一个二阶实方阵。称 $A$ 是双曲的，如果它的每个特征值的实部均不为零。称系统 $\dot{X} = A X$ 是双曲的，如果 $A$ 是双曲矩阵。

**性质 6.3（双曲矩阵的判别）**  
设 $A$ 是一个二阶实方阵，记 $T = \mathrm{tr}(A)$，$D = \det(A)$。则 $A$ 非双曲当且仅当
$$
D = 0 \quad \text{或} \quad D > 0, T = 0.
$$

**证明**  
特征多项式为 $\lambda^2 - T\lambda + D = 0$。特征值实部为零当且仅当：
- 要么 $D = 0$（有零特征值）
- 要么 $D > 0$ 且 $T = 0$（纯虚特征值）

### 5. 二维线性系统的拓扑分类

**定理 6.2（二维线性系统的拓扑分类）**  
设 $A$ 是二阶实矩阵。记
$$
J = \begin{bmatrix} 1 & 0 \\ 0 & -1 \end{bmatrix}.
$$
则：
1. 若 $D(A) < 0$，则系统 $\dot{X} = A X$ 与系统 $\dot{X} = J X$ 拓扑共轭。
2. 若 $D(A) > 0, T(A) > 0$，则系统 $\dot{X} = A X$ 与系统 $\dot{X} = X$ 拓扑共轭。
3. 若 $D(A) > 0, T(A) < 0$，则系统 $\dot{X} = A X$ 与系统 $\dot{X} = -X$ 拓扑共轭。

**证明思路**  
1. 当 $D(A) < 0$ 时，$A$ 有两个互异实特征值 $\lambda_2 < 0 < \lambda_1$。通过构造同胚 $F(x,y) = (F_1(x), F_2(y))$，其中 $F_1, F_2$ 分别将 $e^t$ 和 $e^{-t}$ 的流变为 $e^{\lambda_1 t}$ 和 $e^{\lambda_2 t}$ 的流。
2. 当 $D(A) > 0, T(A) > 0$ 时，分三种情况：
   - 两个正实特征值：类似1）构造
   - 复特征值：通过构造首次到达单位圆周的时间函数
   - Jordan块情形：通过相似变换将非对角元变小
3. 当 $D(A) > 0, T(A) < 0$ 时，证明与2）类似。

### 6. 拓扑不等价性

**定理 6.3（标准型互不拓扑共轭）**  
如下三个系统互不拓扑共轭：
$$
\dot{X} = X, \quad \dot{X} = -X, \quad \dot{X} = J X.
$$

### 7. 符号分类

**定义 6.4（双曲矩阵的符号）**  
设 $A$ 是一个双曲矩阵，定义其符号为 $\mathrm{sgn}(A) = (m_+, m_-)$，其中 $m_+$ 是实部为正的特征值个数，$m_-$ 是实部为负的特征值个数。

**推论 6.1（拓扑共轭的判别）**  
设 $A, B$ 均为二阶双曲实矩阵。则 $\dot{X} = A X$ 与 $\dot{Y} = B Y$ 拓扑共轭当且仅当 $\mathrm{sgn}(A) = \mathrm{sgn}(B)$。

**证明**  
由定理6.2，每个双曲系统都拓扑共轭于三个标准型之一，而这三个标准型的符号分别为：
- $\dot{X} = X$：符号 $(2,0)$
- $\dot{X} = -X$：符号 $(0,2)$
- $\dot{X} = J X$：符号 $(1,1)$

再由定理6.3，这三个标准型互不拓扑共轭，故符号相同是拓扑共轭的充要条件。