---
title: Banach空间
tags:
  - math
  - functional-analysis
categories:
  - math
  - functional-analysis
excerpt: no excerpt
abbrlink: 45a5a42
date: 2025-09-16 12:43:44
---
# **Ch.1 Banach Spaces**

## **度量空间**

### **1. 度量空间**
- **定义：** 若函数 $d: X \times X \rightarrow \mathbb{R}_{\geq 0}$ 满足以下性质（对所有 $x, y, z \in X$）：
  1. **非负性：** $d(x, y) \geq 0$
  2. **不可区分者的同一性：** $d(x, y) = 0 \iff x = y$
  3. **对称性：** $d(x, y) = d(y, x)$
  4. **三角不等式：** $d(x, y) + d(y, z) \geq d(x, z)$

  则称 $(X, d)$ 为一个**度量空间**，函数 $d$ 称为 $X$ 上的**度量**。


### **2. 度量诱导拓扑**
- 对任意 $x \in X$ 和 $\epsilon > 0$，定义**开球**：
  $$
  B(x, \epsilon) := \{ y \in X \mid d(x, y) < \epsilon \}
  $$
- 集合 $U \subseteq X$ 是**开集**当且仅当：
  $$
  \forall x \in U,\ \exists \epsilon > 0 \text{ 使得 } B(x, \epsilon) \subseteq U
  $$
- 所有开集的集合构成了 $X$ 上的一个**拓扑**。


### **3. 柯西序列**
- 称 $(X, d)$ 中的序列 $\{x_n\}_{n \geq 1}$ 为**柯西序列**，如果：
  $$
  \forall \epsilon > 0,\ \exists N \in \mathbb{N} \text{ 使得 } \forall m, n \geq N,\ d(x_m, x_n) < \epsilon
  $$


### **4. 完备性**
- 若度量空间 $(X, d)$ 中每个柯西序列都收敛于 $X$ 中的某点，则称该空间是**完备的**。即：
  $$
  \forall \{x_n\}_{n \geq 1} \subseteq X \text{ (柯西序列)},\ \exists x \in X \text{ 使得 } \lim_{n \to \infty} d(x_n, x) = 0
  $$


### **5. 引理：每个度量空间都可完备化**

#### **5.1. 稠密子空间**
- 子集 $E \subseteq X$ 在 $X$ 中**稠密**，如果：
  $$
  \forall x \in X,\ \forall \epsilon > 0,\ \exists y \in E \text{ 使得 } d(x, y) < \epsilon
  $$

#### **5.2. 度量空间的完备化**
- 度量空间 $(\hat{X}, \hat{d})$ 称为 $(X, d)$ 的**完备化**，如果：
  1. $\hat{X}$ 是完备的。
  2. 存在一个等距嵌入 $\phi: X \rightarrow \hat{X}$（即对所有 $x, y \in X$，有 $\hat{d}(\phi(x), \phi(y)) = d(x, y)$）。
  3. $\phi(X)$ 在 $\hat{X}$ 中稠密。

- 此外，完备化在**等距意义下是唯一的**：若 $(\hat{X}_1, \hat{d}_1)$ 和 $(\hat{X}_2, \hat{d}_2)$ 都是 $(X, d)$ 的完备化，则存在 $\hat{X}_1$ 与 $\hat{X}_2$ 之间的等距双射。


### **定理1：每个度量空间 $(X, d)$ 都存在完备化**

#### **证明：**

##### **第一步：完备化的构造**
- 令 $\mathcal{C}$ 为 $X$ 中所有柯西序列的集合。
- 在 $\mathcal{C}$ 上定义等价关系：
  $$
  \{x_n\} \sim \{y_n\} \iff \lim_{n \to \infty} d(x_n, y_n) = 0
  $$
- 令 $\hat{X} = \mathcal{C} / \sim$ 为所有等价类的集合。
- 对 $\xi = [\{x_n\}], \eta = [\{y_n\}] \in \hat{X}$，定义：
  $$
  \hat{d}(\xi, \eta) := \lim_{n \to \infty} d(x_n, y_n)
  $$
  该极限存在且定义良好（与代表元的选取无关）。

- 定义嵌入映射 $\phi: X \rightarrow \hat{X}$ 为：
  $$
  \phi(x) := [\{x, x, x, \ldots\}]
  $$
  则 $\phi$ 是一个**等距嵌入**：
  $$
  \hat{d}(\phi(x), \phi(y)) = \lim_{n \to \infty} d(x, y) = d(x, y)
  $$

##### **第二步：证明 $(\hat{X}, \hat{d})$ 是完备的**
- **2.1. $\phi(X)$ 在 $\hat{X}$ 中稠密：**
  任取 $\xi = [\{x_n\}] \in \hat{X}$。则：
  $$
  \hat{d}(\phi(x_n), \xi) = \lim_{m \to \infty} d(x_n, x_m) \rightarrow 0 \quad \text{当 } n \to \infty
  $$
  因为 $\{x_n\}$ 是柯西序列。

- **2.2. $\hat{X}$ 中的每个柯西序列都收敛：**
  设 $\{\xi_n\}_{n \geq 1}$ 是 $\hat{X}$ 中的柯西序列。对每个 $n$，选取 $y_n \in X$ 使得：
  $$
  \hat{d}(\xi_n, \phi(y_n)) < \frac{1}{n}
  $$
  则 $\{y_n\}_{n \geq 1}$ 是 $X$ 中的柯西序列。令 $\eta = [\{y_n\}] \in \hat{X}$。那么：
  $$
  \hat{d}(\xi_n, \eta) \leq \hat{d}(\xi_n, \phi(y_n)) + \hat{d}(\phi(y_n), \eta) \rightarrow 0
  $$
  因此 $\xi_n \rightarrow \eta$。

##### **第三步：极小性（等距意义下的唯一性）**
- 设 $(X^*, d^*)$ 是一个完备度量空间，满足 $X \subseteq X^*$ 且 $d^*|_{X \times X} = d$。
- 定义映射 $\psi: X^* \rightarrow \hat{X}$ 如下：
  - 对 $x \in X^*$，选取序列 $\{x_n\} \subseteq X$ 使得 $d^*(x_n, x) \rightarrow 0$（因为 $X$ 在 $X^*$ 中稠密，这是可行的）。
  - 则 $\{x_n\}$ 是 $X$ 中的柯西序列，故令 $\xi = [\{x_n\}] \in \hat{X}$。
  - 定义 $\psi(x) = \xi$。

- **定义良好：** 若 $\{x_n\}, \{x_n'\}$ 均收敛于 $x$，则：
  $$
  \lim_{n \to \infty} d(x_n, x_n') = 0 \Rightarrow [\{x_n\}] = [\{x_n'\}]
  $$
- **等距性：** 对 $x, y \in X^*$ 及对应的序列 $\{x_n\}, \{y_n\} \subseteq X$：
  $$
  d^*(x, y) = \lim_{n \to \infty} d^*(x_n, y_n) = \lim_{n \to \infty} d(x_n, y_n) = \hat{d}(\psi(x), \psi(y))
  $$
- **满射性：** 对任意 $\xi = [\{x_n\}] \in \hat{X}$，$\{x_n\}$ 是 $X$ 中的柯西序列，故收敛于某点 $x \in X^*$。则 $\psi(x) = \xi$。

因此，$\psi$ 是 $X^*$ 到 $\hat{X}$ 的等距双射，证明了等距意义下的唯一性。


## **巴拿赫空间**


### **1. 赋范空间**
- **定义：** 称 $(X, \|\cdot\|)$ 为一个**赋范空间**，若 $\|\cdot\|: X \rightarrow \mathbb{R}_{\geq 0}$ 满足以下性质（对所有 $x, y \in X$ 及标量 $\alpha$）：
  1. **非负性：** $\|x\| \geq 0$，且 $\|x\| = 0 \iff x = 0$
  2. **齐次性：** $\|\alpha x\| = |\alpha| \cdot \|x\|$
  3. **三角不等式：** $\|x + y\| \leq \|x\| + \|y\|$
  
  此时称 $\|\cdot\|$ 为 $X$ 上的**范数**。


### **2. 赋范空间诱导的度量**
- 任一赋范空间 $(X, \|\cdot\|)$ 都自然诱导一个度量 $d$：
  $$
  d(x, y) := \|x - y\|
  $$
  该度量满足度量空间的所有公理。


### **3. 度量空间与赋范空间的关系**

#### **3.1 度量空间不一定由范数诱导**
- 例如，在 $\mathbb{R}$ 上定义度量：
  $$
  d(x, y) = |e^x - e^y|
  $$
  该度量无法由任何范数诱导，因为它不满足齐次性（即 $\|\alpha x\| = |\alpha| \cdot \|x\|$）。

#### **3.2 巴拿赫空间是完备的赋范空间**
- 巴拿赫空间是具备完备性的赋范空间。
- **反例（不完备的赋范空间）：**
  设 $X = \{ a = (a_1, a_2, \ldots) \mid a_n \in \mathbb{R},\ \text{仅有限项非零} \}$，定义范数：
  $$
  \|a\| = \sum_{n=1}^{\infty} |a_n|
  $$
  考虑序列 $a^{(m)} = (1, \frac{1}{2}, \ldots, \frac{1}{m}, 0, 0, \ldots)$，它是柯西序列，但在 $X$ 中无极限（因为极限序列 $(1, \frac{1}{2}, \frac{1}{3}, \ldots)$ 不在 $X$ 中）。故 $X$ 不完备。

#### **3.3 测度空间诱导的巴拿赫空间**
1. 设 $(X, \mathcal{M}, \mu)$ 为测度空间，其中 $\mu$ 为测度（满足 $\mu(\emptyset) = 0$ 且可数可加）。
2. 对 $1 \leq p < \infty$，定义 **$L^p$ 空间**：
   $$
   L^p(\mu) = \left\{ f: X \rightarrow \mathbb{R} \text{ 可测} \ \middle|\ \int_X |f|^p  d\mu < +\infty \right\}
   $$
   其范数为：
   $$
   \|f\|_{L^p} = \left( \int_X |f|^p  d\mu \right)^{1/p}
   $$
3. 对 $p = \infty$，定义：
   $$
   L^\infty(\mu) = \left\{ f: X \rightarrow \mathbb{R} \text{ 可测} \ \middle|\ \exists c > 0,\ |f| \leq c\ \mu\text{-a.e.} \right\}
   $$
   其范数为：
   $$
   \|f\|_{L^\infty} = \inf \{ c > 0 \mid |f| \leq c\ \mu\text{-a.e.} \}
   $$
4. 在商掉几乎处处相等的等价关系后（即 $f \sim g \iff f = g\ \mu\text{-a.e.}$），$(L^p(\mu), \|\cdot\|_{L^p})$ 构成巴拿赫空间。

5. 类似地，定义**有界可测函数空间**：
   $$
   C_m(X) = \{ f: X \rightarrow \mathbb{R} \text{ 可测} \mid \|f\|_\infty < +\infty \}
   $$
   则 $(C_m(X), \|\cdot\|_\infty)$ 也是巴拿赫空间。


### **4. 有限维巴拿赫空间**

#### **定理：有限维赋范空间必为巴拿赫空间**
- 若 $\dim X = n < +\infty$，则任何定义在 $X$ 上的范数 $\|\cdot\|$ 均使 $(X, \|\cdot\|)$ 成为巴拿赫空间。

#### **证明要点：**
1. 取 $X$ 的一组基 $\{e_1, \ldots, e_n\}$，则任意 $x \in X$ 可唯一表示为：
   $$
   x = \sum_{j=1}^n \alpha_j e_j
   $$
2. 定义欧几里得范数：
   $$
   \|x\|_2 = \left( \sum_{j=1}^n |\alpha_j|^2 \right)^{1/2}
   $$
   则 $(X, \|\cdot\|_2)$ 是完备的（因为与 $\mathbb{R}^n$ 等距同构）。
3. 可证明任意范数 $\|\cdot\|$ 均与 $\|\cdot\|_2$**等价**，即存在常数 $C_1, C_2 > 0$ 使得：
   $$
   C_1 \|x\|_2 \leq \|x\| \leq C_2 \|x\|_2 \quad \text{对所有 } x \in X \text{ 成立}
   $$
4. 范数的等价性保证了 $(X, \|\cdot\|)$ 的完备性。

#### **推论：**
- 有限维空间上的所有范数均等价。
- 任何有限维赋范空间都是巴拿赫空间。
