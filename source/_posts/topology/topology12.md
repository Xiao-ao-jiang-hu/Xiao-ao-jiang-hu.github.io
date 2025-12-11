---
title: Ch6.2 覆叠空间的分类
tags:
  - math
  - topology
categories:
  - math
  - topology
index_img: /img/topology.jpg
banner_img: /img/topology.jpg
excerpt: 拓扑学笔记
abbrlink: a6f75896
date: 2024-11-16 00:19:52
---
## 覆叠空间的分类
在前面的讨论中，我们已经看到覆叠空间与基本群之间存在密切的联系。实际上，覆叠空间可以通过基本群的子群来分类。

### 定义：覆叠空间的同构
设 $p_1: \widetilde{X}_1 \to X$ 和 $p_2: \widetilde{X}_2 \to X$ 是两个覆叠空间。称它们是同构的，如果存在一个同胚 $f: \widetilde{X}_1 \to \widetilde{X}_2$，使得 $p_1 = p_2 \circ f$。

!!! warning 事实
    覆叠空间的同构是等价关系。考虑三个覆叠空间 $p_1: \widetilde{X}_1 \to X$，$p_2: \widetilde{X}_2 \to X$ 和 $p_3: \widetilde{X}_3 \to X$。如果 $p_1$ 与 $p_2$ 同构，且 $p_2$ 与 $p_3$ 同构，那么存在同胚 $f: \widetilde{X}_1 \to \widetilde{X}_2$ 和 $g: \widetilde{X}_2 \to \widetilde{X}_3$ 使得 $p_1 = p_2 \circ f$ 和 $p_2 = p_3 \circ g$。则复合映射 $g \circ f: \widetilde{X}_1 \to \widetilde{X}_3$ 是一个同胚，且满足 $p_1 = p_3 \circ (g \circ f)$，因此 $p_1$ 与 $p_3$ 同构。


### 定理：覆叠空间同构的判定
设 $X$ 是路径连通且局部路径连通的空间。则两个路径连通的覆叠空间 $p_1: \widetilde{X}_1 \to X$ 和 $p_2: \widetilde{X}_2 \to X$ 通过一个将基点 $\widetilde{x}_1 \in p_1^{-1}(x_0)$ 映射到基点 $\widetilde{x}_2 \in p_2^{-1}(x_0)$ 的同构 $f: \widetilde{X}_1 \to \widetilde{X}_2$ 同构，当且仅当
$$(p_1)_*(\pi_1(\widetilde{X}_1, \widetilde{x}_1)) = (p_2)_*(\pi_1(\widetilde{X}_2, \widetilde{x}_2)).$$

### 定理：覆叠空间的分类
设 $X$ 是路径连通、局部路径连通且半局部单连通的空间。则：
1. 存在一个双射，对应于保持基点的同构类的路径连通覆叠空间 $p: (\widetilde{X}, \widetilde{x}_0) \to (X, x_0)$ 与由 $p_*(\pi_1(\widetilde{X}, \widetilde{x}_0))$ 给出的 $\pi_1(X, x_0)$ 的子群集合。
2. 如果忽略基点，则这个对应关系给出路径连通覆叠空间 $p: \widetilde{X} \to X$ 的同构类与 $\pi_1(X, x_0)$ 的子群的共轭类之间的一个双射。

### 定义：甲板变换群（Deck Transformation Group）

设 $p: \widetilde{X} \to X$ 是一个覆叠映射。一个同构 $f: \widetilde{X} \to \widetilde{X}$ 称为**甲板变换**（deck transformation），如果它满足 $p \circ f = p$。所有甲板变换在映射复合下构成一个群，记作 $G(\widetilde{X})$，称为**甲板变换群**。

该群自然地作用于覆叠空间 $\widetilde{X}$ 上，作用方式为  
$$
f \cdot \widetilde{x} = f(\widetilde{x}), \quad \text{其中 } f \in G(\widetilde{X}),\, \widetilde{x} \in \widetilde{X}.
$$

### 定理：甲板变换群的自由作用
若 $\widetilde{X}$ 是路径连通的，则此群作用是**自由的**：即对任意 $f \in G(\widetilde{X})$ 和 $\widetilde{x} \in \widetilde{X}$，若 $f(\widetilde{x}) = \widetilde{x}$，则必有 $f = \mathrm{id}_{\widetilde{X}}$。

#### 证明
由提升的唯一性定理可知，若两个甲板变换在某一点取值相同，则它们处处相等。特别地，若 $f(\widetilde{x}) = \widetilde{x}$，则 $f$ 与恒等映射在 $\widetilde{x}$ 处一致，故 $f = \mathrm{id}_{\widetilde{X}}$。

好的！我们将严格遵循您提供的格式（包括标题层级、定理/定义环境、证明结构、术语统一等），将之前翻译中尚未整合的“正规覆叠空间”“群作用与商空间”以及“例子”部分，按相同风格补充完整。


## 正规覆叠空间

### 定义：正规覆叠
称覆叠映射 $p: \widetilde{X} \to X$ 为**正规覆叠**（或正则覆叠），如果甲板变换群 $G(\widetilde{X})$ 在每个纤维 $p^{-1}(x)$ 上的作用是**传递的**：即对任意 $x \in X$ 及任意 $\widetilde{x}, \widetilde{x}' \in p^{-1}(x)$，存在甲板变换 $f \in G(\widetilde{X})$ 使得  
$$
f(\widetilde{x}) = \widetilde{x}'.
$$

### 定理：正规覆叠与正规子群
设 $X$ 是路径连通、局部路径连通的空间，$p: (\widetilde{X}, \widetilde{x}_0) \to (X, x_0)$ 是一个路径连通的覆叠空间。令  
$$
H = p_*\big(\pi_1(\widetilde{X}, \widetilde{x}_0)\big) \subseteq \pi_1(X, x_0).
$$  
则：

1. $p: \widetilde{X} \to X$ 是正规覆叠 **当且仅当** $H$ 是 $\pi_1(X, x_0)$ 的**正规子群**；
2. 设 $N(H)$ 为 $H$ 在 $\pi_1(X, x_0)$ 中的正规化子，则  
   $$
   G(\widetilde{X}) \cong N(H)/H.
   $$  
   特别地，若 $p$ 是**万有覆叠空间**（即 $\widetilde{X}$ 单连通），则  
   $$
   G(\widetilde{X}) \cong \pi_1(X, x_0).
   $$

#### 证明
(1) 由覆叠分类定理，对任意 $\widetilde{x}_1 \in p^{-1}(x_0)$，存在 $[\gamma] \in \pi_1(X, x_0)$ 使得  
$$
p_*\big(\pi_1(\widetilde{X}, \widetilde{x}_1)\big) = [\gamma]^{-1} H [\gamma].
$$  
甲板变换群在纤维上传递当且仅当对所有这样的 $\widetilde{x}_1$，有 $p_*\big(\pi_1(\widetilde{X}, \widetilde{x}_1)\big) = H$，即 $[\gamma]^{-1} H [\gamma] = H$ 对所有 $[\gamma] \in \pi_1(X, x_0)$ 成立，这等价于 $H \trianglelefteq \pi_1(X, x_0)$。

(2) 构造同态 $\varphi: N(H) \to G(\widetilde{X})$，将 $[\gamma] \in N(H)$ 映为唯一的甲板变换 $f$ 满足 $f(\widetilde{x}_0) = \widetilde{\gamma}(1)$，其中 $\widetilde{\gamma}$ 是 $\gamma$ 以 $\widetilde{x}_0$ 为起点的提升。可验证 $\varphi$ 是满同态且 $\ker \varphi = H$，故由同态基本定理得 $G(\widetilde{X}) \cong N(H)/H$。


## 群作用与覆叠构造

### 定理：离散群自由真不连续作用诱导正规覆叠
设离散群 $G$ 作用于拓扑空间 $Y$，且满足以下条件（称为**真不连续作用**）：

> 对任意 $y \in Y$，存在邻域 $U$ 使得对任意不同的 $g_1, g_2 \in G$，有  
> $$
> g_1(U) \cap g_2(U) = \varnothing.
> $$

则：

1. 商映射 $p: Y \to Y/G$ 是一个**正规覆叠映射**；
2. 若 $Y$ 路径连通，则 $G$ 恰好是该覆叠的**甲板变换群**；
3. 若 $Y$ 路径连通且局部路径连通，则  
   $$
   G \cong \pi_1(Y/G) \big/ p_*\big(\pi_1(Y)\big).
   $$

#### 证明
(1) 对任意 $[y] \in Y/G$，取代表元 $y \in Y$ 及满足真不连续条件的邻域 $U$。则  
$$
p^{-1}(p(U)) = \bigsqcup_{g \in G} g(U),
$$  
且每个限制 $p|_{g(U)}: g(U) \to p(U)$ 是同胚，故 $p$ 是覆叠映射。由于 $G$ 作用传递于纤维，此覆叠是正规的。

(2) 每个 $g \in G$ 诱导一个甲板变换；反之，任一甲板变换必保持轨道不变，从而属于 $G$。

(3) 由正规覆叠的甲板变换群定理直接得出。

## 万有覆叠空间的计算

给定一个拓扑空间 $X$，我们希望系统地找出所有可能的覆叠空间（在同构意义下）。以下是基于覆叠空间分类理论的一般步骤，假设 $X$ 满足“足够好”的条件（路径连通、局部路径连通、半局部单连通）。若 $X$ 不满足这些条件，则可能需要先考虑其满足条件的子空间或修正。


### **步骤一：计算基本群**
首先确定空间 $X$ 的基本群 $\pi_1(X, x_0)$（选择一个基点 $x_0 \in X$）。

### **步骤二：构造万有覆叠空间**
如果 $X$ 满足条件（特别是半局部单连通），则存在万有覆叠空间 $\tilde{X}$，它是单连通的，并且覆叠映射 $p: \tilde{X} \to X$ 的甲板变换群同构于 $\pi_1(X, x_0)$。

- **方法**：
  1. **直接构造**：通过路径类定义 $\tilde{X} = \{[\gamma] \mid \gamma: [0,1] \to X, \gamma(0)=x_0\}$，赋予合适的拓扑，投影 $p([\gamma]) = \gamma(1)$。这总是给出万有覆叠。
  2. **利用已知空间**：许多常见空间的万有覆叠是已知的：
     - $S^1$ 的万有覆叠是 $\mathbb{R}$，指数映射 $t \mapsto e^{2\pi i t}$。
     - $T^n$ 的万有覆叠是 $\mathbb{R}^n$，分量取指数映射。
     - $\mathbb{R}P^n$（$n \geq 2$）的万有覆叠是 $S^n$，对径映射。
     - 曲面（亏格 $g \geq 1$ 的紧可定向曲面）的万有覆叠是双曲平面 $\mathbb{H}^2$ 或欧氏平面 $\mathbb{R}^2$。

- **理解甲板变换的作用**：将 $\pi_1(X, x_0)$ 视为 $\tilde{X}$ 的甲板变换群。具体地，每个环路的同伦类 $[\gamma] \in \pi_1(X, x_0)$ 对应一个甲板变换 $D_{[\gamma]}: \tilde{X} \to \tilde{X}$，它将点 $[\eta] \in \tilde{X}$ 映射为 $[\gamma \cdot \eta]$（路径连接）。这给出了群作用 $\pi_1(X, x_0) \curvearrowright \tilde{X}$，且轨道空间 $\tilde{X}/\pi_1(X, x_0) \cong X$。


### **步骤三：列出基本群的所有子群**
覆叠空间的同构类与 $\pi_1(X, x_0)$ 的子群的共轭类一一对应（若考虑基点，则对应于具体子群）。因此，要找出所有覆叠空间，需要找出基本群的所有子群（共轭类）。

- **方法**：
  - 对于有限生成阿贝尔群（如 $\mathbb{Z}^n$），子群容易分类（例如 $\mathbb{Z}^2$ 的子群对应于 $\mathbb{Z}^2$ 的格）。
  - 对于自由群，子群很多，但可以通过 Reidemeister–Schreier 方法找出指数有限的子群。
  - 对于其他群，可能需要借助群论知识或计算工具。

### **步骤四：对每个子群构造对应的覆叠空间**
对于 $\pi_1(X, x_0)$ 的每个子群 $H$，构造对应的覆叠空间 $X_H$ 如下：

1. 从万有覆叠 $\tilde{X}$ 出发，考虑子群 $H$ 在 $\tilde{X}$ 上的限制作用（因为 $H \leq \pi_1(X, x_0)$，所以 $H$ 也作为甲板变换的子群作用在 $\tilde{X}$ 上）。
2. 取轨道空间 $X_H = \tilde{X}/H$，并定义投影 $p_H: X_H \to X$ 为 $p_H([\tilde{x}]_H) = p(\tilde{x})$，其中 $[\tilde{x}]_H$ 是 $H$-轨道。
3. 验证 $p_H$ 是一个覆叠映射，且 $p_{H*}(\pi_1(X_H, \tilde{x}_0')) = H$，其中 $\tilde{x}_0'$ 是 $\tilde{x}_0$ 的轨道。

**注意**：如果两个子群共轭，则对应的覆叠空间是同构的（但可能基点不同）。因此，我们通常只考虑子群的共轭类。


### **步骤五：识别所得覆叠空间的几何形状**
对于每个子群 $H$，尝试描述 $X_H = \tilde{X}/H$ 的拓扑类型。这通常需要理解 $H$ 在万有覆叠 $\tilde{X}$ 上的作用方式。

- **例子 1**：$X = T^2$，万有覆叠 $\tilde{X} = \mathbb{R}^2$，$\pi_1(T^2) = \mathbb{Z}^2$ 作用为平移。子群 $H \leq \mathbb{Z}^2$ 总是同构于 $\mathbb{Z}^m$（$0 \le m \le 2$）。根据 $H$ 的秩，轨道空间分别为：
  - $m=0$：平凡子群，$X_H = \mathbb{R}^2$（万有覆叠自身）。
  - $m=1$：$H \cong \mathbb{Z}$，由某个向量 $(a,b)$ 生成，则 $X_H$ 是一个柱面 $\mathbb{R} \times S^1$（若 $(a,b)$ 是原始向量，则柱面可能是斜的，但同胚于标准柱面）。
  - $m=2$：$H$ 是 $\mathbb{Z}^2$ 的一个有限指数子群（格），则 $X_H$ 是另一个环面（覆叠度等于指数）。
  
- **例子 2**：$X = \mathbb{R}P^2 \vee \mathbb{R}P^2$，其基本群为 $\mathbb{Z}_2 * \mathbb{Z}_2$（无限二面体群）。万有覆叠 $\tilde{X}$ 可以构造为一条无限长的“双射线”（两个端点交替连接线段），或者更直观地，考虑其 Cayley 图。子群很多，例如：
  - 平凡子群：万有覆叠本身，是一个无限树，每个顶点度数为 2。
  - 有限循环子群：对应于有限循环覆叠，例如二重覆叠等。
  - 无限循环子群：对应于无限柱面状的覆叠空间。
  具体构造需要仔细分析群作用。

- **例子 3**：$X = \mathbb{R}P^2 \times S^1$，基本群为 $\pi_1(\mathbb{R}P^2) \times \pi_1(S^1) = \mathbb{Z}_2 \times \mathbb{Z}$。万有覆叠为 $S^2 \times \mathbb{R}$。子群可以是 $\mathbb{Z}_2 \times n\mathbb{Z}$ 等，对应的覆叠空间为 $S^2 \times S^1$（当取 $n\mathbb{Z}$ 时）或 $\mathbb{R}P^2 \times \mathbb{R}$ 等。


### **步骤六：找出正则覆叠（正规覆叠）**
如果我们需要正则覆叠（即甲板变换群作用传递于纤维），那么只需考虑正规子群 $N \trianglelefteq \pi_1(X, x_0)$。此时，覆叠空间 $X_N = \tilde{X}/N$ 是正规的，且其甲板变换群为 $\pi_1(X, x_0)/N$。

- **方法**：找出基本群的所有正规子群。特别地，如果基本群是阿贝尔群（如 $\mathbb{Z}^n$），则所有子群都是正规的，因此所有覆叠空间都是正则的。
- **例子**：对于 $T^2$，所有子群都是正规的，所以每个覆叠都是正则的。对于 $\mathbb{R}P^2 \vee \mathbb{R}P^2$，基本群是非阿贝尔的，正规子群较少（例如换位子群），对应的正则覆叠空间具有较简单的甲板变换群。

## 寻找给定空间的覆叠空间：详细方法与应用实例

### 方法概述
给定拓扑空间 $X$，寻找其所有覆叠空间（在同构意义下）的一般步骤如下：

1. **验证条件**：确保 $X$ 路径连通、局部路径连通且半局部单连通（对一般覆叠分类定理）。若不满足，可考虑适当的子空间或修正。
2. **计算基本群**：确定 $\pi_1(X, x_0)$，这是代数分类的关键。
3. **构造万有覆叠**：若存在，万有覆叠 $\widetilde{X}$ 是单连通的，且其甲板变换群同构于 $\pi_1(X, x_0)$。
4. **列出子群**：找出 $\pi_1(X, x_0)$ 的所有子群的共轭类（若忽略基点，则对应覆叠的同构类）。
5. **构造对应覆叠**：对每个子群 $H$，取万有覆叠 $\widetilde{X}$ 关于 $H$ 作用的轨道空间 $\widetilde{X}/H$，得到覆叠空间 $X_H$。
6. **识别几何**：描述 $X_H$ 的拓扑形状，判断是否为正规覆叠（当 $H$ 是正规子群时）。
7. **特殊情况**：若空间有乘积或楔和结构，可利用各因子覆叠的构造。

以下通过两个具体例子展示该方法的应用。

---

### 例1：$X = \mathbb{RP}^2 \vee \mathbb{RP}^2$
#### 步骤1：计算基本群
每个 $\mathbb{RP}^2$ 的基本群为 $\mathbb{Z}_2$，由 Van Kampen 定理，$\pi_1(\mathbb{RP}^2 \vee \mathbb{RP}^2) \cong \mathbb{Z}_2 * \mathbb{Z}_2$。这是无限二面体群，展示为 $\langle a, b \mid a^2 = b^2 = 1 \rangle$。

#### 步骤2：万有覆叠空间
由于 $\mathbb{RP}^2$ 是流形，楔和满足半局部单连通，万有覆叠存在。可直接构造为：一条实数直线 $\mathbb{R}$，在每个整数点 $n$ 处粘上一个二维球面 $S^2$（粘合点为 $S^2$ 的固定点）。该空间单连通，覆叠映射将每个 $S^2$ 映到某个 $\mathbb{RP}^2$（通过对径映射），直线段映到楔点。

甲板变换群同构于 $\mathbb{Z}_2 * \mathbb{Z}_2$，作用为：生成元 $a$ 和 $b$ 分别反射直线并交换相邻的 $S^2$。

#### 步骤3：子群分类
$\mathbb{Z}_2 * \mathbb{Z}_2$ 的子群共轭类很多，典型例子：
- 平凡子群 $\{1\}$：对应万有覆叠自身。
- 有限循环子群 $\langle a \rangle \cong \mathbb{Z}_2$：对应一个二重覆叠。
- 无限循环子群 $\langle ab \rangle \cong \mathbb{Z}$：对应一个三重覆叠（指数为3）。
- 其他自由积子群（如 $\langle a, bab \rangle$ 等）。

#### 步骤4：构造覆叠空间并识别几何
以子群 $H = \langle ab \rangle \cong \mathbb{Z}$ 为例：
- **指数计算**：陪集分解为 $G = H \cup Ha \cup Hb$，故指数为3，对应三重覆叠。
- **构造**：万有覆叠 $\widetilde{X} = (\mathbb{R} \text{ 上粘 } S^2)$，模掉 $H$ 的作用。生成元 $ab$ 作用为平移（平移距离为2）并映射 $S^2$。
- **几何描述**：轨道空间 $X_H$ 可描述为：一个圆周 $S^1$（由直线模平移得到），在该圆周上两个对径点处各粘一个 $S^2$（对应轨道代表）。具体地，$H$ 作用将直线上的偶整数点和奇整数点分别轨道化，每个轨道坍缩为一个 $S^2$。因此 $X_H \simeq S^1 \vee S^2 \vee S^2$？注意粘合方式：两个 $S^2$ 分别粘在圆周的两个不同点上，整体不是楔和，因为圆周连接两个 $S^2$。实际上，$X_H$ 同伦等价于 $S^1 \vee S^2 \vee S^2$，但严格拓扑是圆周上两点分别粘 $S^2$。
- **基本群**：$p_*(\pi_1(X_H)) = H \cong \mathbb{Z}$，与直观一致。

其他子群对应的覆叠空间类似构造，如 $\langle a \rangle$ 对应二重覆叠，可描述为两个 $S^2$ 通过一个线段连接（同伦等价于 $S^2 \vee S^2$）。

#### 步骤5：正规覆叠
由于 $\mathbb{Z}_2 * \mathbb{Z}_2$ 非阿贝尔，正规子群较少。例如：
- $H = \langle (ab)^2 \rangle$：正规子群（因为由全体平方元生成），对应覆叠空间为无穷重，甲板变换群为二面体群 $D_\infty$。
- 换位子群 $G'$：对应最大阿贝尔覆叠（甲板变换群为 $\mathbb{Z} \times \mathbb{Z}_2$）。

!!! error 注意
    此处存疑

### 例2：$X = (S^1 \vee S^1) \times S^1$
#### 步骤1：计算基本群
$\pi_1(S^1 \vee S^1) \cong F_2 = \langle a, b \rangle$（自由群），$\pi_1(S^1) \cong \langle c \rangle \cong \mathbb{Z}$。由乘积公式，
$$
\pi_1((S^1 \vee S^1) \times S^1) \cong F_2 \times \mathbb{Z} = \langle a, b, c \mid [a,c]=1, [b,c]=1 \rangle.
$$

#### 步骤2：万有覆叠空间
$S^1 \vee S^1$ 的万有覆叠是一棵4正则无限树 $T$（每个顶点度数为4），$S^1$ 的万有覆叠是 $\mathbb{R}$。乘积的万有覆叠为 $\widetilde{X} = T \times \mathbb{R}$，这是一个可缩的三维空间（因为 $T$ 和 $\mathbb{R}$ 均可缩）。覆叠映射为树到 $S^1 \vee S^1$ 的标准覆叠（局部同胚）与指数映射 $\mathbb{R} \to S^1$ 的乘积。

甲板变换群同构于 $F_2 \times \mathbb{Z}$，作用为：$F_2$ 部分自由作用在树上，$\mathbb{Z}$ 部分平移 $\mathbb{R}$。

#### 步骤3：子群分类
$G = F_2 \times \mathbb{Z}$ 的子群结构丰富，常见类型：
- 直积子群 $H_1 \times H_2$，其中 $H_1 \leq F_2$，$H_2 \leq \mathbb{Z}$。
- 非直积子群，如纤维积等。

由于 $\mathbb{Z}$ 是循环群，其子群为 $n\mathbb{Z}$。$F_2$ 的子群可以是自由群（任意秩）或其他。

#### 步骤4：构造覆叠空间并识别几何
选取典型子群：

1. **平凡子群**：万有覆叠自身，$T \times \mathbb{R}$，单连通。

2. **$H = F_2 \times n\mathbb{Z}$**：
   - 对应覆叠空间为 $(S^1 \vee S^1) \times (S^1 \text{ 的 } n\text{重覆叠})$。
   - 由于 $S^1$ 的 $n$ 重覆叠仍是 $S^1$（覆叠映射 $z \mapsto z^n$），空间同胚于 $X$ 自身，但覆叠映射是 $\mathrm{id} \times (z^n)$。

3. **$H = \langle a, c \rangle \cong \mathbb{Z} \times \mathbb{Z}$**：
   - 这是一个直积子群，其中 $H_1 = \langle a \rangle \leq F_2$，$H_2 = \mathbb{Z}$。
   - 对应覆叠空间为 $X_H = (\text{对应于 } H_1 \text{ 的 } S^1 \vee S^1 \text{ 的覆叠}) \times S^1$。
   - $S^1 \vee S^1$ 对应于子群 $\langle a \rangle$ 的覆叠：由于 $\langle a \rangle \cong \mathbb{Z}$ 在 $F_2$ 中指数无穷，其覆叠空间非紧。具体可描述为：以一条直线（$a$ 的轨道）为骨干，在每个顶点处粘附一个圆（对应生成元 $b$），整体同伦等价于无穷多个圆 wedge 一条直线。几何上是一个“双向无限柱面”上附加无穷多个环柄。
   - 因此 $X_H$ 是该二维复形与 $S^1$ 的乘积，是一个三维非紧流形。

4. **$H = \langle ab, c \rangle$**：
   - 非直积子群（因为 $ab \in F_2$ 不与 $c$ 交换？实际上 $c$ 与所有 $F_2$ 元素交换，所以仍是直积）。更复杂的非直积例子需取像 $H = \langle ab, ac \rangle$ 等，此时需具体计算。

#### 步骤5：正规覆叠
由于 $G = F_2 \times \mathbb{Z}$，正规子群常为 $N_1 \times N_2$，其中 $N_1 \trianglelefteq F_2$，$N_2 \trianglelefteq \mathbb{Z}$（即 $N_2 = \mathbb{Z}$ 或 $n\mathbb{Z}$）。例如：
- $N = F_2 \times n\mathbb{Z}$：正规，甲板变换群为 $\mathbb{Z}_n$。
- $N = [F_2, F_2] \times \mathbb{Z}$：换位子群（$[F_2, F_2]$ 自由群无穷秩），对应覆叠空间的甲板变换群为 $F_2^{\mathrm{ab}} \times \{1\} \cong \mathbb{Z}^2$。
- $N = \ker(F_2 \to \mathbb{Z}_2) \times \mathbb{Z}$（其中 $F_2 \to \mathbb{Z}_2$ 是 mod 2 映射）：对应二重覆叠，甲板变换群为 $\mathbb{Z}_2$。
