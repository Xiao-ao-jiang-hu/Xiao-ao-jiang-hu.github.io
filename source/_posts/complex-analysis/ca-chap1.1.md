---
title: 复数与复平面
tags:
  - complex-analysis
  - math
categories:
  - math
  - complex-analysis
index_img: /img/complex.jpg
banner_img: /img/complex.jpg
excerpt: 复数与复平面的基本性质、收敛性以及集合的拓扑性质。
date: 2026-03-02 12:56:34
---
## 1 复数与复平面

### 1.1 基本性质

#### 复数的表示
*   **定义**：复数的形式为 $z = x + iy$。
    *   $x, y \in \mathbb{R}$。
    *   $i$ 为虚数单位，满足 $i^2 = -1$。
*   **实部与虚部**：
    $$ \text{Re}(z) = x, \quad \text{Im}(z) = y $$
*   **特殊集合**：
    *   **实数**：$\text{Im}(z) = 0$。
    *   **纯虚数**：$\text{Re}(z) = 0$。
    *   **复数集**：$\mathbb{C}$。

#### 几何表示（复平面）
*   复数 $z = x + iy$ 与 $\mathbb{R}^2$ 平面上的点 $(x, y)$ 一一对应。
*   **实轴**：对应 $\text{Im}(z) = 0$（实数）。
*   **虚轴**：对应 $\text{Re}(z) = 0$（纯虚数）。

#### 代数运算
设 $z_1 = x_1 + iy_1$, $z_2 = x_2 + iy_2$。
1.  **加法**：
    $$ z_1 + z_2 = (x_1 + x_2) + i(y_1 + y_2) $$
    （对应向量的加法）

2.  **乘法**：
    $$ \begin{aligned} z_1 z_2 &= (x_1 x_2 - y_1 y_2) + i(x_1 y_2 + y_1 x_2) \end{aligned} $$

3.  **运算律**：
    *   交换律：$z_1 + z_2 = z_2 + z_1$，$z_1 z_2 = z_2 z_1$。
    *   结合律：$(z_1 + z_2) + z_3 = z_1 + (z_2 + z_3)$，$(z_1 z_2)z_3 = z_1(z_2 z_3)$。
    *   分配律：$z_1(z_2 + z_3) = z_1 z_2 + z_1 z_3$。
*   **乘法几何意义**：旋转与伸缩的复合（见极坐标形式）。

#### 模（绝对值）与共轭

1.  **模（绝对值）**：
    $$ |z| = \sqrt{x^2 + y^2} $$
    （表示点 $(x, y)$ 到原点的欧几里得距离）

2.  **共轭复数**：
    $$ \bar{z} = x - iy $$
    （几何上关于实轴的反射）

3.  **关键关系式**：
    *   $\text{Re}(z) = \dfrac{z + \bar{z}}{2}$
    *   $\text{Im}(z) = \dfrac{z - \bar{z}}{2i}$
    *   $|z|^2 = z \bar{z}$
    *   若 $z \neq 0$，则 $\dfrac{1}{z} = \dfrac{\bar{z}}{|z|^2}$

#### 重要不等式
*   三角不等式：$|z + w| \leq |z| + |w|$
*   $|\text{Re}(z)| \leq |z|$，$|\text{Im}(z)| \leq |z|$
*   $||z| - |w|| \leq |z - w|$

#### 极坐标形式
*   任何非零复数 $z$ 可写作：
    $$ z = re^{i\theta} $$
    其中：
    *   $r = |z| > 0$
    *   $\theta = \arg z$（辐角，由正实轴逆时针测量，模 $2\pi$）
    *   **欧拉公式**：$e^{i\theta} = \cos\theta + i\sin\theta$

*   **乘法几何意义**（极坐标下）：
    若 $z = re^{i\theta}$，$w = se^{i\varphi}$，则
    $$ zw = rs e^{i(\theta+\varphi)} $$
    （模相乘，辐角相加，即旋转与伸缩的复合）

### 1.2 收敛性

#### 序列收敛
*   **定义**：序列 $\{z_n\}$ **收敛**于 $w \in \mathbb{C}$ 当且仅当
    $$ \lim_{n \to \infty} |z_n - w| = 0 $$
    记作 $w = \lim_{n \to \infty} z_n$。

*   **等价条件**：$z_n \to w$ 当且仅当 $\text{Re}(z_n) \to \text{Re}(w)$ 且 $\text{Im}(z_n) \to \text{Im}(w)$。

#### 柯西序列与完备性
*   **柯西序列**：序列 $\{z_n\}$ 称为**柯西序列**，如果
    $$ |z_n - z_m| \to 0 \quad \text{当 } n, m \to \infty $$
    （即 $\forall \epsilon > 0, \exists N > 0, s.t. \forall n, m > N, |z_n - z_m| < \epsilon$）

*   **关键定理**：

    !!! note 定理 1.1 (复数的完备性)
        复数集 $\mathbb{C}$ 是完备的：每个 $\mathbb{C}$ 中的柯西序列都在 $\mathbb{C}$ 中收敛。

    *   **证明思路**：序列 $\{z_n\}$ 是柯西序列当且仅当其**实部序列**和**虚部序列**均为实柯西序列。由于 $\mathbb{R}$ 完备，故实部与虚部序列均收敛，从而 $z_n$ 在 $\mathbb{C}$ 中收敛。

### 1.3 复平面中的集合

#### 圆盘与圆
*   **开圆盘**（以 $z_0$ 为中心，$r$ 为半径）：
    $$ D_r(z_0) = \{ z \in \mathbb{C} : |z - z_0| < r \} $$

*   **闭圆盘**：
    $$ \bar{D}_r(z_0) = \{ z \in \mathbb{C} : |z - z_0| \leq r \} $$

*   **边界（圆）**：
    $$ C_r(z_0) = \{ z \in \mathbb{C} : |z - z_0| = r \} $$

*   **单位圆盘**（常用符号）：
    $$ \mathbb{D} = D_1(0) = \{ z \in \mathbb{C} : |z| < 1 \} $$

#### 拓扑基本概念
*   **内点**：点 $z_0 \in \Omega$ 称为 $\Omega$ 的**内点**，若存在 $r > 0$ 使得 $D_r(z_0) \subset \Omega$。
*   **内部**：$\Omega$ 的所有内点组成的集合。
*   **开集**：若 $\Omega$ 的每个点都是其内点（即 $\Omega$ 等于其内部），则 $\Omega$ 是**开集**。
*   **极限点**：点 $z \in \mathbb{C}$ 称为 $\Omega$ 的**极限点**，若存在序列 $\{z_n\} \subset \Omega$，$z_n \neq z$，使得 $\lim_{n \to \infty} z_n = z$。
*   **闭集**：若 $\Omega$ 的补集 $\Omega^c = \mathbb{C} \setminus \Omega$ 是开集，则 $\Omega$ 是**闭集**。
    *   等价表述：$\Omega$ 是闭集当且仅当它包含其所有的极限点。
*   **闭包**：$\Omega$ 与其所有极限点的并集，记作 $\bar{\Omega}$。
*   **边界**：$\partial \Omega = \bar{\Omega} \setminus \text{Int}(\Omega)$。

#### 有界性、直径与紧致性
*   **有界集**：集合 $\Omega$ **有界**，若存在 $M > 0$ 使得对所有 $z \in \Omega$ 有 $|z| < M$（即 $\Omega$ 包含于某个大圆盘内）。
*   **直径**：若有界，定义其直径为
    $$ \text{diam}(\Omega) = \sup_{z, w \in \Omega} |z - w| $$

*   **紧致集**：集合 $\Omega$ **紧致**，若它同时是**闭的**和**有界的**。

    !!! note 定理 1.2 (紧致性的序列刻画)
        集合 $\Omega \subset \mathbb{C}$ 是紧致的，当且仅当 $\Omega$ 中的每个序列 $\{z_n\}$ 都有一个子序列收敛于 $\Omega$ 中的某点。

    !!! note 定理 1.3 (紧致性的覆盖刻画)
        集合 $\Omega$ 是紧致的，当且仅当 $\Omega$ 的每个开覆盖都有一个有限子覆盖。

*   **嵌套紧致集的性质**：

    !!! note 命题 1.4 (Cantor 交集性质)
        若 $\Omega_1 \supset \Omega_2 \supset \dots \supset \Omega_n \supset \dots$ 是 $\mathbb{C}$ 中一列**非空紧致集**，且满足
        $$ \text{diam}(\Omega_n) \to 0 \quad \text{当 } n \to \infty $$
        则存在**唯一**的点 $w \in \mathbb{C}$ 使得 $w \in \Omega_n$ 对所有 $n$ 成立。
    *   **证明思路**：从每个 $\Omega_n$ 中取一点 $z_n$，利用直径趋于零的条件证明 $\{z_n\}$ 为柯西列，其极限 $w$ 必属于每个 $\Omega_n$（因 $\Omega_n$ 闭）。唯一性由直径条件保证。

#### 连通性
*   **连通开集（区域）**：
    一个开集 $\Omega \subset \mathbb{C}$ 称为**连通的**，如果它**不能**表示为两个不相交的非空开集 $\Omega_1$ 和 $\Omega_2$ 的并集（即不存在 $\Omega_1, \Omega_2$ 开，$\Omega_1 \cap \Omega_2 = \emptyset$，使得 $\Omega = \Omega_1 \cup \Omega_2$）。
    *   **区域**：连通的开集称为一个**区域**。

*   **连通闭集**：
    一个闭集 $F$ 是连通的，如果它**不能**表示为两个不相交的非空闭集 $F_1$ 和 $F_2$ 的并集。

*   **连通性的等价刻画（曲线连通性）**：
    一个开集 $\Omega$ 是连通的，当且仅当 $\Omega$ 中任意两点都可以用一条**完全包含在 $\Omega$ 中**的（连续）曲线连接起来。
    （证明细节参见习题。）
