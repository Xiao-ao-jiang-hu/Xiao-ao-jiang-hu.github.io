---
title: 泛函分析期中复习
tags:
  - math
  - functional analysis
categories:
  - math
  - functional analysis
excerpt: 泛函分析课程期中复习笔记
abbrlink: 2b31788a
date: 2025-10-27 21:45:14
---
# Part 1 Hilbert Space
## 范数诱导内积的充要条件
### 核心结论  
一个范数 $\|\cdot\|$ 由某个内积 $\langle \cdot, \cdot \rangle$ 诱导（即 $\|x\| = \sqrt{\langle x, x \rangle}$）的充要条件是：  
该范数满足平行四边形法则：  
$$
\|x + y\|^2 + \|x - y\|^2 = 2\|x\|^2 + 2\|y\|^2, \quad \forall x,y \in V.
$$
此时，内积可通过极化恒等式唯一确定。

- 实内积空间：  
  $$
  \langle x, y \rangle = \frac{1}{4} \left( \|x + y\|^2 - \|x - y\|^2 \right).
  $$  
- 复内积空间：  
  $$
  \langle x, y \rangle = \frac{1}{4} \left( \|x + y\|^2 - \|x - y\|^2 + i\|x + iy\|^2 - i\|x - iy\|^2 \right).
  $$  


### 特殊情形  
#### （1）常见可诱导内积的范数  
- $L^2$ 范数：$\|x\|_2 = \sqrt{\sum |x_i|^2}$（对应内积 $\langle x,y \rangle = \sum x_i \bar{y}_i$)。   

#### （2）常见不可诱导内积的范数  
- $L^1$ 范数：$\|x\|_1 = \sum |x_i|$（不满足平行四边形法则）。  
- $L^\infty$ 范数：$\|x\|_\infty = \max |x_i|$（不满足平行四边形法则）。  
- 矩阵范数：Frobenius 范数 $\|A\|_F = \sqrt{\sum |a_{ij}|^2}$ 可诱导内积（$\langle A,B \rangle = \operatorname{tr}(A^*B)$），但算子范数（如 $\|A\|_2 = \sup_{\|x\|_2=1} \|Ax\|_2$）一般不可。  


## 凸投影定理

### 核心结论
设 $H$ 是希尔伯特空间（内积为 $\langle \cdot, \cdot \rangle$，范数为 $\|\cdot\|$），$C \subseteq H$ 是非空闭凸子集。对任意 $x \in H$：

存在唯一性：存在唯一点 $P_C(x) \in C$，满足：
$$\|x - P_C(x)\| = \min_{y \in C} \|x - y\|.$$
$P_C(x)$ 称为 $x$ 在 $C$ 上的投影。
变分不等式：$P_C(x)$ 是投影 当且仅当：
$$\langle x - P_C(x),  y - P_C(x) \rangle \leq 0, \quad \forall y \in C.$$
该不等式的几何意义：向量 $x - P_C(x)$ 与 $C$ 中所有从 $P_C(x)$ 出发的向量 $(y - P_C(x))$ 的夹角为直角或钝角。


### 关键条件

希尔伯特空间：完备内积空间（保证存在性）。
闭集：$C$ 包含所有极限点（确保最小值可达）。
凸集：$\forall y_1, y_2 \in C, \lambda \in [0,1]$，有 $\lambda y_1 + (1-\lambda)y_2 \in C$（保证唯一性）。
非空：$C \neq \emptyset$（投影有定义）。


### 直观解释

$P_C(x)$ 是 $C$ 中离 $x$ 最近的点。
变分不等式表明：$x$ 位于集合 $C$ 在 $P_C(x)$ 处的支撑超平面的“另一侧”（残差向量 $x - P_C(x)$ 是该超平面的法向量）。


### 特殊情形

闭线性子空间：变分不等式退化为正交条件：
$$\langle x - P_C(x), y \rangle = 0, \quad \forall y \in C.$$

仿射集：$C = a + M$（$M$ 为子空间），投影唯一且残差垂直于 $M$。


## 度量空间紧集的刻画
### 核心结论
在度量空间 $(X,d)$ 中，以下条件等价：  
1. 覆盖紧：$K$ 是紧集（任意开覆盖有有限子覆盖）。  
2. 序列紧：$K$ 是序列紧的（$K$ 中任意序列存在收敛子列，且极限在 $K$ 中）。  
3. 完备且完全有界：$K$ 是 完备的（所有 Cauchy 列收敛于 $K$ 中）且 完全有界的（对任意 $\varepsilon > 0$，存在有限个半径 $\varepsilon$ 的开球覆盖 $K$）。


### 直观解释
- 覆盖紧：“用开集覆盖 $K$ 时，有限个就够了”。  
- 序列紧：“$K$ 中序列不会无限发散，总聚集到某点”。  
- 完备+完全有界：  
  - 完备：“$K$ 没有‘洞’（极限点都在内部）”。  
  - 完全有界：“$K$ 可被有限个任意小的球覆盖”（类似“有限维”特性）。  
- 核心思想：紧集是“有限大小”且“无洞”的集合，兼具“局部性质”与“整体性质”。


### 特殊情形
1. 欧氏空间 $\mathbb{R}^n$  
   - Heine-Borel 定理：$K \subseteq \mathbb{R}^n$ 紧 $\iff$ $K$ 闭且有界。  
   - 原因：$\mathbb{R}^n$ 的有限维性质保证了完全有界性。

2. 连续函数空间 $C[a,b]$  
   - Arzelà-Ascoli 定理：$K \subseteq C[a,b]$ 紧 $\iff$ $K$ 一致有界、等度连续且闭。  
   - 本质：将完全有界性转化为函数空间的条件。

3. 离散度量空间  
   - 紧集 $\iff$ 有限集（因开覆盖 $\{B(x,1) \mid x \in K\}$ 必须有限）。


## Arzelà-Ascoli 定理
### 核心结论
设 $F$ 是紧度量空间 $(X, d)$ 上实值或复值连续函数构成的集合，则：  
$F$ 是列紧的（即 $F$ 的闭包是紧集）当且仅当 $F$ 等度连续且一致有界。  
等价表述：  
从 $F$ 中任一序列必存在一致收敛的子列。


### Arzelà-Ascoli 定理  
设 $(X, d_X)$ 和 $(Y, d_Y)$ 是度量空间，且 $X$ 是紧的。给定连续函数集合 $\mathcal{F} \subset C(X, Y)$，则以下等价：  

1. $\mathcal{F}$ 是预紧集（在 $C(X, Y)$ 的一致收敛拓扑下，即关于度量 $d(f,g) = \sup_{x \in X} d_Y(f(x), g(x))$）。  
2. $\mathcal{F}$ 满足：  
   - (i) 等度连续性：  
     $$
     \forall \varepsilon > 0, \ \forall x \in X, \ \exists \delta > 0 \text{ 使得 } \forall f \in \mathcal{F}, \ \forall x' \in X :  
     d_X(x, x') < \delta \implies d_Y(f(x), f(x')) < \varepsilon.
     $$  
   - (ii) 点态列紧性：对每个 $x \in X$，集合 $\mathcal{F}(x) = \{ f(x) \mid f \in \mathcal{F} \}$ 是 $(Y, d_Y)$ 中的预紧集。  


### 关键条件  
- 预紧集：对任意 $\varepsilon > 0$，存在有限个半径为 $\varepsilon$ 的开球覆盖集合（若 $Y$ 完备，则预紧等价于相对紧）。  
- 点态列紧：条件 (ii) 要求对每个固定 $x \in X$，函数值集合 $\mathcal{F}(x)$ 在 $Y$ 中完全有界。  
- 等度连续：$\delta$ 依赖于 $\varepsilon$ 和 $x$，但与 $f \in \mathcal{F}$ 无关；当 $X$ 紧时，可加强为一致等度连续（$\delta$ 与 $x$ 无关）。  


### 直观解释  
- 点态列紧：每个位置 $x$ 的函数值 $f(x)$ 不无限扩散（可被有限小球覆盖）。  
- 等度连续：函数族整体“刚性”强，无局部剧烈振荡。  
- 定理核心：紧空间 $X$ 将点态控制与等度连续结合，确保函数族全局一致可控，从而可提取一致收敛子列。  


### 特殊情形
$X = [a, b]$, $Y = \mathbb{R}$; $\mathcal{F} \subset C([a, b])$ 预紧当且仅当：  
- 等度连续：$\forall \varepsilon > 0$, $\exists \delta > 0$ 使得 $|x - y| < \delta \implies |f(x) - f(y)| < \varepsilon$ 对所有 $f \in \mathcal{F}$ 成立。  
- 点态列紧：$\forall x \in [a, b]$, $\sup_{f \in \mathcal{F}} |f(x)| < \infty$（即点态有界）。  



# Part 2 泛函分析原理
## Baire 纲定理
### 核心结论
在满足特定条件的空间中，可数个稠密开集的交仍然是稠密的。等价地：  
可数个无处稠密闭集的并集不包含任何内点（即其并是“贫集”或“第一纲集”）。


### 关键条件
定理要求空间满足以下至少一个条件：  
1. 完备度量空间（Complete Metric Space）：  
   度量空间中所有柯西列均收敛（如：$\mathbb{R}^n$、希尔伯特空间$l^2$、连续函数空间$C[a,b]$）。  
2. 局部紧豪斯多夫空间（Locally Compact Hausdorff Space）：  
   每点有紧邻域（如：$\mathbb{R}^n$、离散空间）。


### 直观解释
1. 稠密性的“永不枯竭”：  
   可数个“几乎充满全空间”的稠密开集，其交集依然“几乎充满全空间”（稠密）。  
   *例*：在$\mathbb{R}$中，取稠密开集$U_n = \mathbb{R} \setminus \{q_n\}$（挖去第$n$个有理数），则$\bigcap_n U_n = \mathbb{R} \setminus \mathbb{Q}$（无理数集）仍稠密。  
   
2. 空间“足够大”：  
   完备/局部紧空间不能被可数个“稀疏”集（无处稠密集）覆盖。  
   *推论*：$\mathbb{R}$是不可数集（若可数，则每个单点集是无处稠密的，与Baire定理矛盾）。


### 特殊情形
1. 实数轴$\mathbb{R}$：  
   可数个稠密开集的交稠密（如：$\bigcap_{n=1}^\infty \left( a-\frac{1}{n}, b+\frac{1}{n} \right) = [a,b]$的闭包）。  
   
2. 函数空间的应用：  
   证明“性质$\mathcal{P}$的典型函数存在”（如：  
   - $C[0,1]$中“处处不可导的连续函数”集是稠密$G_\delta$（第二纲集）；  
   - 一致有界原理（Banach-Steinhaus）的证明基础。


## 一致有界原理（Banach-Steinhaus 定理）
### 核心结论
1.  设 $\{T_\alpha\}_{\alpha \in \mathcal{A}}$ 是一族定义在Banach空间 $X$ 上、取值于赋范空间 $Y$ 的连续线性算子。
2.  如果这个算子族是逐点有界的（即对每个固定的 $x \in X$，$\sup_{\alpha} \|T_\alpha x\|_Y < \infty$），
3.  那么该算子族是一致有界的（即 $\sup_{\alpha} \|T_\alpha\|_{\mathcal{L}(X, Y)} < \infty$，其中 $\|T_\alpha\|$ 是算子范数）。

用公式表达核心结论：
$$
\underbrace{\left( \forall x \in X, \; \sup_{\alpha \in \mathcal{A}} \|T_\alpha x\|_Y < \infty \right)}_{\text{逐点有界}} \quad \implies \quad \underbrace{\left( \sup_{\alpha \in \mathcal{A}} \|T_\alpha\|_{\mathcal{L}(X, Y)} < \infty \right)}_{\text{一致有界（算子范数有界）}}
$$

### 关键条件
1.  定义域空间 $X$ 的完备性： $X$ 必须是 Banach 空间
2.  算子的线性与连续性： 每个 $T_\alpha: X \to Y$ 必须是连续线性算子。
3.  逐点有界性： 对定义域空间 $X$ 中的每一个点 $x$，算子族作用在该点得到的像集 $\{T_\alpha x\}$ 在 $Y$ 中是范数有界的（上确界有限）。

### 直观解释
1.  “局部”有界蕴含“全局”有界： 如果算子在空间 $X$ 的每一点上都能将输入向量控制在一个有限的范围内（范围大小依赖于点 $x$），那么这些算子作为一个整体，其“放大能力”（即算子范数）也必然存在一个统一的上限。
2.  完备性的作用： $X$ 的完备性（没有“洞”）是这种从“逐点”到“一致”的跨越能够实现的关键。在不完备的空间中，可能存在一个“洞”或“边界点”，使得算子在该点附近的行为失控（范数趋向无穷大），即使在其他所有已知点都是有界的。完备性排除了这种“边界失控”的可能性。
3.  “共鸣”的比喻： 该定理有时被称为“共鸣定理”。想象算子族在每个点 $x$ 上的作用强度（$\|T_\alpha x\|$）是有限的。定理表明，这些“局部强度”的有限性会“共鸣”或“共振”出整个算子族作用强度（算子范数）的有限性。

### 特殊情形
1.  经典反例： 在非完备空间上，结论失效。著名例子是定义在 $C[0,1]$ 的稠密但非闭子空间（如多项式空间）上的线性泛函 $f_n(p) = p^{(n)}(0)$（$n$ 阶导数在 0 点的值）。它在每个固定的多项式 $p$ 上是有界的（因为 $p^{(n)}(0)$ 对足够大的 $n$ 为 0），但算子范数 $\|f_n\|$ 是无界的（由 Bernstein 定理或 Jackson 定理相关结果）。
2.  傅里叶级数发散： 一致有界原理是证明“存在连续函数，其傅里叶级数在给定点发散”的关键工具。通过证明连续函数空间 $C[0, 2\pi]$ 上的部分和算子 $S_n(f)$ 的范数（等价于 Lebesgue 常数 $L_n$）无界，再应用一致有界原理的逆否命题，即可推出存在 $f \in C[0, 2\pi]$ 使得 $\sup_n |S_n(f)(x_0)| = \infty$ 对某个 $x_0$ 成立。
3.  $L^1$ 函数的傅里叶变换： 证明不存在非零测度 $\mu$ 使得 $\hat{f} \in L^1(\mathbb{R})$ 对所有 $f \in L^1(\mathbb{R})$ 成立（即 $L^1$ 的傅里叶变换不一定在 $L^1$ 中）。反证法利用一致有界原理证明卷积算子的范数无界。
4.  弱收敛与弱*收敛：
    - 在 Banach 空间 $X$ 中，如果序列 $\{x_n\}$ 满足对所有 $f \in X^*$ (对偶空间)，$\{f(x_n)\}$ 有界，则 $\{x_n\}$ 是范数有界的 ($\sup_n \|x_n\|_X < \infty$)。（将 $T_n(f) = f(x_n)$ 视为 $X^*$ 上的线性泛函族）。
    - 在 Banach 空间 $X$ 的对偶空间 $X^*$ 中，如果序列 $\{f_n\}$ 满足对所有 $x \in X$，$\{f_n(x)\}$ 有界，则 $\{f_n\}$ 是算子范数有界的 ($\sup_n \|f_n\|_{X^*} < \infty$)。（标准的 Banach-Steinhaus 应用）。
5.  算子强收敛的必要条件： 如果一列连续线性算子 $\{T_n\}$ 在 Banach 空间 $X$ 上强收敛（即对每个 $x \in X$，$T_n x \to Tx$ 收敛），那么算子范数序列 $\{\|T_n\|\}$ 必须有界（$\sup_n \|T_n\| < \infty$）。这是由逐点收敛蕴含逐点有界，再应用一致有界原理得到。


## 开映射定理

### 核心结论  
设 $X, Y$ 为巴拿赫空间（完备的赋范空间），$T: X \to Y$ 是连续线性算子（即 $T \in \mathcal{B}(X,Y)$）。若 $T$ 是满射（$\operatorname{range}(T) = Y$），则：  
1. $T$ 将 $X$ 中的开集映射为 $Y$ 中的开集（即 $T$ 是开映射）。  
2. 特别地，存在常数 $c > 0$，使得 $Y$ 中的单位开球 $B_Y(0,1)$ 被 $T$ 映射为包含 $X$ 中某个开球 $B_X(0,c)$ 的像，即：  
   $$
   B_Y(0,1) \subseteq T(B_X(0,1)) \quad \text{（更精确形式： } B_Y(0,c) \subseteq \overline{T(B_X(0,1))} \text{）}.
   $$

### 关键条件  
1. 空间完备性：$X$ 和 $Y$ 必须是巴拿赫空间
2. 算子性质：  
   - $T$ 是线性算子
   - $T$ 是连续（有界）的
   - $T$ 是满射

> 注：若条件不满足（如空间不完备），结论可能失效。例如 $X = C[0,1]$ 赋予 $L^1$-范数（不完备），微分算子 $T = \frac{d}{dx}$ 不满射且不开。


### 直观解释  
1. 几何视角：  
   - $T$ 将 $X$ 中的“小球”映射为 $Y$ 中的“大球”，且像集不塌缩（避免像集在 $Y$ 中“薄如曲线”或“遗漏内部点”）。  
   - 满射性确保 $Y$ 被 $T(X)$ 完整覆盖，而开性保证映射“不撕裂空间结构”。  
2. 拓扑视角：  
   - 开映射保持邻域关系：若 $U$ 是 $x$ 的邻域，则 $T(U)$ 是 $T(x)$ 的邻域。  
   - 定理表明：连续线性满射在巴拿赫空间上必然保持拓扑开性。



### 特殊情形  
1. 逆算子定理：  
   若 $T$ 是双射（线性连续且单射+满射），则 $T^{-1}$ 也是连续线性算子（即 $T$ 是同胚）。  
   > *证明*：开映射定理保证 $T$ 开映射，故 $T^{-1}$ 连续。  

2. 闭值域算子：  
   若 $\operatorname{range}(T)$ 在 $Y$ 中闭，则 $T$ 限制在 $X \to \operatorname{range}(T)$ 上满足开映射定理（因 $\operatorname{range}(T)$ 是闭子空间，故完备）。  

3. 有限维空间：  
   若 $\dim Y < \infty$，则任意线性满射 $T: X \to Y$ 自动连续且开（有限维空间简化条件）。  

4. 矩阵映射：  
   设 $A \in \mathbb{R}^{m \times n}$ 满秩（$\operatorname{rank}(A) = m$），则 $A: \mathbb{R}^n \to \mathbb{R}^m$ 是开映射（有限维特例）。


## 闭图定理
### 核心结论
称一个线性算子$T$是闭算子，如果它的图像$$\mathcal{G}(T) = \{ (x, Tx) \in X \times Y \mid x \in D(T) \}$$在乘积空间 $X \times Y$ 中是闭集。

若一个线性算子 $T: X \to Y$ 且定义域 $D(T)$ 在 $X$ 中是闭的，则 $T$ 是有界算子（即连续算子）等价于 $T$ 是闭算子。


### 关键条件
空间完备性： $X$ 和 $Y$ 必须是巴拿赫空间

### 直观解释
1.  闭图像蕴含连续性： 闭图定理的核心洞见在于，在完备空间（巴拿赫空间）的框架下，一个线性算子的闭性（图像是闭集）加上其定义域的闭性，这个看似纯粹拓扑或集合论的条件，足以保证该算子具有分析上最重要的性质——连续性（有界性）。
2.  “收敛输入-收敛输出”的稳定性： 闭性条件 $\mathcal{G}(T)$ 闭 等价于：如果输入序列 $\{x_n\}$ 收敛（到 $x$）并且对应的输出序列 $\{Tx_n\}$ 也收敛（到 $y$），那么极限点 $x$ 必然还在定义域 $D(T)$ 内，并且算子作用在 $x$ 上的结果 $Tx$ 必须等于输出序列的极限 $y$。闭图定理表明，在定义域闭的前提下，这种“输入收敛伴随输出收敛”的稳定性，在巴拿赫空间中自动蕴含了算子在整个定义域上的一致有界性（连续性）。
3.  与有界性的关系： 在完备空间里，对于线性算子，闭性（加上定义域闭）比有界性（连续性）更强。有界线性算子必然是闭算子，但闭图定理告诉我们，在巴拿赫空间和定义域闭的条件下，反过来也成立：闭算子必然有界。这揭示了在完备空间框架下闭性与有界性对于线性算子的某种等价性（在定义域闭的前提下）。

### 特殊情形
1.  定义域是整个空间 ($D(T) = X$)： 这是最常见和最重要的情形。
    - 定理简化： 若 $T: X \to Y$ 是定义在整个巴拿赫空间 $X$ 上的线性算子，且 $T$ 是闭算子（即 $\mathcal{G}(T)$ 在 $X \times Y$ 中闭），则 $T$ 必然是有界算子 ($T \in \mathcal{L}(X, Y)$)。
    - 关键点： 当 $D(T) = X$（$X$ 是闭子集）时，闭性条件单独就足以推出有界性。这是闭图定理最常用的形式。
2.  Hellinger-Toeplitz 定理： 这是闭图定理在希尔伯特空间 (Hilbert Space) 上对称算子情形的著名应用。
    - 结论： 设 $H$ 是一个希尔伯特空间，$T: H \to H$ 是一个对称算子（即 $\langle Tx, y \rangle = \langle x, Ty \rangle$ 对所有 $x, y \in D(T)$ 成立），且 $D(T) = H$（定义在整个空间上），则 $T$ 必然是有界算子。
    - 证明思路： 利用对称性可以证明 $T$ 是闭算子（验证 $\mathcal{G}(T)$ 闭），然后应用闭图定理（$D(T)=H$ 是闭的）即得 $T$ 有界。
3.  闭稠定算子的逆算子： 如果 $T: X \to Y$ 是闭算子，定义域 $D(T)$ 稠密于 $X$（不要求闭），值域 $R(T)$ 稠密于 $Y$，且 $T$ 是单射（即存在逆算子 $T^{-1}: Y \to X$），那么 $T^{-1}$ 也是闭算子。
    - 应用闭图定理： 如果我们能额外证明 $T^{-1}$ 的定义域 $D(T^{-1}) = R(T)$ 是 $Y$ 中的闭子集，那么对 $T^{-1}$ 应用闭图定理（$T^{-1}$ 是闭算子，$D(T^{-1})$ 闭）即可推出 $T^{-1}$ 是有界算子（即 $T$ 有有界逆）。


## 可闭算子
### 核心结论
设 $T: D(T) \subseteq X \to Y$ 是 稠定线性算子（$X, Y$ 为 Banach 空间，$D(T)$ 在 $X$ 中稠密）。以下陈述等价：  
1. $T$ 可闭：其图像闭包 $\overline{G(T)}$ 是某个线性算子 $\overline{T}$ 的图像。  
2. 投影算子 $P_X: \overline{G(T)} \to X$ 是单射：  
   $$
   \ker P_X \cap \overline{G(T)} = \{0\} \quad \text{即} \quad (0,y) \in \overline{G(T)} \implies y=0.
   $$  
3. 收敛序列条件：  
   $$
   \left. \begin{array}{c} \{x_n\} \subseteq D(T), \\ x_n \to 0 \\ Tx_n \to y \end{array} \right\} \implies y = 0.
   $$  



### 关键条件
- 可闭性定义：$T$ 可闭当且仅当 $\overline{G(T)}$ 是线性算子的图像（即无“垂直线”）。  
- 稠定性：要求 $D(T)$ 在 $X$ 中稠密（否则伴随算子可能无定义，但可闭性本身不依赖稠密性）。  


### 直观解释
1. 投影单射条件 (2)：  
   - $\overline{G(T)}$ 在 $X \times \{0\}$ 上无“非平凡垂直纤维”，保证闭包是单值映射的图像。  
   - 几何意义：若 $\overline{G(T)}$ 包含 $(0,y)$ 且 $y \neq 0$，则 $0$ 对应多个 $y$，破坏算子定义。  
2. 序列条件 (3)：  
   - 若定义域中序列 $x_n \to 0$ 且 $Tx_n \to y$，则 $y$ 必须是 $0$。  
   - 物理意义：算子 $T$ 在 $0$ 附近的“不连续性”不会导致极限值歧义（无奇异点）。  


### 特殊情形
1. 闭算子：  
   - 若 $T$ 闭（$G(T)$ 闭），则自动可闭（取 $\overline{T} = T$），且满足所有条件。  
2. 对称算子（Hilbert 空间）：  
   - 若 $T$ 是 稠定对称算子（即 $T \subseteq T^*$，如量子力学中的 Hamilton 量），则 $T$ 必可闭，且 $\overline{T} = T^{}$。  
3. 微分算子：  
   - 可闭情形：  
     $T = i\frac{d}{dx}$ 在 $D(T) = C_c^\infty(\mathbb{R}) \subseteq L^2(\mathbb{R})$ 上可闭（闭包定义域为 $H^1(\mathbb{R})$）。  
   - 不可闭情形：  
     $T f = f'(0)$ 在 $D(T) = C^1([0,1]) \subseteq L^2([0,1])$ 上（存在 $f_n \to 0$ 但 $Tf_n \to 1 \neq 0$）。  
4. 有限秩算子：  
   - 若 $\dim R(T) < \infty$（如矩阵），则 $T$ 可闭（有限维空间中线性算子均闭）。  

## Meyer-Serrin 逼近定理
### 核心结论
设 $\Omega \subseteq \mathbb{R}^n$ 是开集，$k \geq 0$ 为整数，$1 \leq p < \infty$。若存在函数 $f$ 和一组函数 $\{g_\alpha\}_{|\alpha|\leq k}$（其中 $\alpha$ 为多重指标），满足：  
对任意测试函数 $\phi \in C_c^\infty(\Omega)$，有  
$$
\int_\Omega f \cdot (D^\alpha \phi)  dx = (-1)^{|\alpha|} \int_\Omega g_\alpha \cdot \phi  dx \quad (\forall |\alpha| \leq k),
$$  
且所有函数满足可积性：  
$$
\int_\Omega |f|^p  dx < \infty, \quad \int_\Omega |g_\alpha|^p  dx < \infty \quad (\forall |\alpha| \leq k),
$$  
则存在序列 $\{f_n\} \subset C^\infty(\Omega)$ 使得：  
1. 函数逼近：  
   $$
   \lim_{n \to \infty} \int_\Omega |f_n - f|^p  dx = 0
   $$  
2. 导数逼近：  
   $$
   \lim_{n \to \infty} \int_\Omega |D^\alpha f_n - g_\alpha|^p  dx = 0 \quad (\forall |\alpha| \leq k)
   $$  


### 关键条件
1. 区域要求：  
   $\Omega$ 是任意非空开集（无需有界或光滑边界）。  
2. 可积性指数：  
   $1 \leq p < \infty$（排除 $p = \infty$）。  
3. 导数阶数：  
   $k \geq 0$（包括零阶导数情形）。  


### 直观解释
1. 弱导数意义：  
   条件 $\int f \cdot (D^\alpha \phi)  dx = (-1)^{|\alpha|} \int g_\alpha \cdot \phi  dx$ 表明 $g_\alpha$ 是 $f$ 的 $|\alpha|$ 阶弱导数。  
2. 光滑逼近：  
   定理断言：存在光滑函数列 $\{f_n\}$，使得：  
   - $f_n \to f$ 在 $L^p$ 中  
   - 对每个多重指标 $\alpha$，经典导数 $D^\alpha f_n \to g_\alpha$（弱导数）在 $L^p$ 中  


### 特殊情形
#### 情形1：一阶导数逼近 ($k=1$)  
设存在函数 $f, g_1, \dots, g_n \in L^p(\Omega)$ 满足：  
$$
\int_\Omega f \cdot \frac{\partial \phi}{\partial x_i}  dx = - \int_\Omega g_i \cdot \phi  dx \quad (\forall \phi \in C_c^\infty(\Omega), \ i=1,\dots,n)
$$  
则存在光滑序列 $\{f_n\}$ 使得：  
$$
\begin{cases}
\lim_{n \to \infty} \int_\Omega |f_n - f|^p  dx = 0 \\
\lim_{n \to \infty} \int_\Omega \left| \frac{\partial f_n}{\partial x_i} - g_i \right|^p  dx = 0 \quad (\forall i=1,\dots,n)
\end{cases}
$$

#### 情形2：零阶逼近 ($k=0$)  
若 $f \in L^p(\Omega)$（无导数条件），则存在光滑序列 $\{f_n\} \subset C^\infty(\Omega)$ 满足：  
$$
\lim_{n \to \infty} \int_\Omega |f_n - f|^p  dx = 0.
$$  
（此为经典 $L^p$ 光滑逼近）


### 构造方法
通过磨光卷积显式构造：  
1. 取光滑核 $\eta \in C_c^\infty(\mathbb{R}^n)$ 满足 $\int \eta =1$，定义 $\eta_\varepsilon(x) = \varepsilon^{-n} \eta(x/\varepsilon)$。  
2. 对 $\varepsilon >0$，定义磨光函数：  
   $$
   f_\varepsilon(x) = \int_\Omega f(y) \eta_\varepsilon(x-y)  dy
   $$  
3. 结合截断函数 $\zeta_n$ 控制边界，得到逼近列 $f_n = \zeta_n \cdot f_{\varepsilon_n}$。  
4. 当 $\varepsilon_n \to 0^+$ 时，序列满足：  
   $$
   \int_\Omega |f_n - f|^p  dx \to 0, \quad \int_\Omega |D^\alpha f_n - g_\alpha|^p  dx \to 0.
   $$

## 共轭双线性泛函的表示

### 核心结论
设 $H$ 是希尔伯特空间，$B: H \times H \rightarrow \mathbb{C}$ 是满足有界性和强制性的共轭双线性泛函，则存在唯一的有界线性算子 $A: H \to H$ 满足：  
$$ B(u, v) = (u, Av)_H \quad \forall u, v \in H $$  
且 $A$ 具有以下性质：  
1. $A$ 可逆：$A^{-1}$ 存在且是 $H \to H$ 的有界线性算子。  
2. 逆算子范数估计：$\|A^{-1}\|_{\mathcal{L}(H)} \leq \alpha^{-1}$。  
3. 解的存在唯一性：对任意 $F \in H'$（$H$ 的对偶空间），存在唯一解 $u_F \in H$ 使得：  
   $$ B(u_F, v) = F(v) \quad \forall v \in H $$  
   且 $u_F = A^{-1} w_F$，其中 $w_F$ 是 $F$ 的 Riesz 表示元（即 $F(v) = (w_F, v)_H$）。


### 关键条件
1. 共轭双线性性：  
   - 对第一变量线性：$B(\alpha u_1 + \beta u_2, v) = \alpha B(u_1, v) + \beta B(u_2, v)$  
   - 对第二变量共轭线性：$B(u, \alpha v_1 + \beta v_2) = \overline{\alpha} B(u, v_1) + \overline{\beta} B(u, v_2)$  
2. 有界性：存在 $M > 0$ 使得 $ |B(u, v)| \leq M \|u\|_H \|v\|_H \quad \forall u, v \in H $  
3. 强制性：存在 $\alpha > 0$ 使得 $ |B(u, u)| \geq \alpha \|u\|_H^2 \quad \forall u \in H $ 
4. 空间完备性：$H$ 必须是希尔伯特空间（完备性保证解的存在性）。  

### 直观解释
1. 算子构造：  
   由 $B$ 的共轭双线性和有界性，通过 Riesz 表示定理定义算子 $A$：  
   $$ B(u, v) = (u, Av)_H $$  
   这等价于将 $B$ 编码为内积形式。  
2. 强制性的核心作用：  
   - $\|Au\| \geq \alpha \|u\|$ 表明 $A$ 下方有界，从而保证：  
     - 单射性：若 $Au=0$ 则 $u=0$。  
     - 闭值域：值域 $\text{Ran}(A)$ 在 $H$ 中闭。  
   - 结合 Lax-Milgram 原结论（解存在唯一）推出 $A$ 满射，故 $A$ 是双射。  
3. 逆算子有界性：  
   $\|Au\| \geq \alpha \|u\|$ 直接推出 $\|A^{-1}w\| \leq \alpha^{-1} \|w\|$，即 $\|A^{-1}\| \leq \alpha^{-1}$。  


### 特殊情形
1. 对称双线性泛函（实空间）：  
   若 $B(u, v) = B(v, u)$ 且 $H$ 为实空间，则 $A$ 是自伴算子（$A^*=A$），且 $B(u, v) = (Au, v)_H$。此时定理退化为 Riesz 定理的推广。  
2. 正定对称算子：  
   在对称情形下，强制性 $B(u, u) \geq \alpha \|u\|^2$ 等价于 $A$ 的正定性，此时 $A$ 可逆且 $A^{-1}$ 正定。  


## Hanh-Banach 定理（延拓版本）

### 核心结论  
设 $X$ 是实数域或复数域上的线性空间，$p: X \to \mathbb{R}$ 是 $X$ 上的一个拟范数（次线性泛函），$M \subseteq X$ 是其子空间。若存在定义在 $M$ 上的线性泛函 $f_M: M \to \mathbb{K}$（$\mathbb{K} = \mathbb{R}$ 或 $\mathbb{C}$），满足：  
$$  
\forall x \in M, \quad |f_M(x)| \leq p(x)  
$$  
则存在 $f_M$ 到全空间 $X$ 上的 保控延拓 $f: X \to \mathbb{K}$，即：  
1. 线性延拓：$f|_M = f_M$；  
2. 控制不变：$\forall x \in X, |f(x)| \leq p(x)$。  

### 关键条件  
1. 拟范数（次线性泛函）$p$：  
   满足以下性质的函数 $p: X \to \mathbb{R}$：  
   - 次可加性：$\forall x,y \in X, \, p(x+y) \leq p(x) + p(y)$；  
   - 正齐次性：$\forall \alpha \geq 0, \, \forall x \in X, \, p(\alpha x) = \alpha p(x)$。  
   > 注：若 $p$ 是范数 $\|\cdot\|$，则定理给出 保范延拓（即 $\|f\| = \|f_M\|$）。

2. 子空间上的控制条件：  
   初始泛函 $f_M$ 需满足 $|f_M(x)| \leq p(x)$ 对所有 $x \in M$ 成立。


### 直观解释  
1. 泛函的“自由延拓”：  
   子空间 $M$ 上的线性泛函 $f_M$ 若被拟范数 $p$ 控制，则可安全地延拓到全空间 $X$ 而不破坏控制条件。  
2. 几何意义：  
   拟范数 $p$ 定义了一个“广义单位球”，延拓过程保证新泛函 $f$ 的核空间不与该球相交（保持有界性）。  
3. 非构造性：  
   定理仅断言延拓存在，但未提供具体构造方式（构造需要选择公理）。

### 特殊情形  
1. 赋范空间上的保范延拓：  
   若 $X$ 是赋范空间，$p(x) = \|f_M\| \cdot \|x\|$，则存在 $f: X \to \mathbb{K}$ 满足：  
   - $f|_M = f_M$；  
   - $\|f\|_{X^*} = \|f_M\|_{M^*}$。  
   > 推论：对任意 $x_0 \in X$，存在 $f \in X^*$ 使得 $f(x_0) = \|x_0\|$ 且 $\|f\|=1$。

2. 实空间情形：  
   当 $\mathbb{K}=\mathbb{R}$ 时，条件简化为 $f_M(x) \leq p(x)$（无需绝对值）。

3. 复空间情形：  
   通过将复泛函拆分为实部与虚部，并利用实形式的Hahn-Banach定理完成延拓。

4. 半范数控制：  
   若 $p$ 是半范数（即 $p(\alpha x)=|\alpha|p(x)$ 且次可加），结论仍成立。

## Minkowski 饭哈

### 1. 核心结论
设 $X$ 是实数域 $\mathbb{R}$ 上的向量空间，$A \subseteq X$ 是吸收凸集且包含原点（$0 \in A$），则其 Minkowski泛函 $p_A: X \to [0, +\infty)$ 定义为：
$$
p_A(x) = \inf \left\{ t > 0 \mid t^{-1}x \in A \right\}
$$
满足以下核心性质：
1. 次线性性：
   - 正齐次性：$\forall \lambda \geq 0,  p_A(\lambda x) = \lambda p_A(x)$
   - 次可加性：$\forall x,y \in X,  p_A(x+y) \leq p_A(x) + p_A(y)$
2. 控制吸收性：
   $$
   \{ x \in X \mid p_A(x) < 1 \} \subseteq A \subseteq \{ x \in X \mid p_A(x) \leq 1 \}
   $$
3. 半范数性：若 $A$ 对称（即 $A = -A$），则 $p_A$ 是半范数（满足 $p_A(-x)=p_A(x)$）。


### 2. 关键条件
结论成立需满足以下条件：
- 吸收性：$\forall x \in X,  \exists \delta > 0$ 使得 $\lambda x \in A$ 对所有 $|\lambda| \leq \delta$ 成立（即 $A$ 吸收任意向量）。
- 凸性：$A$ 是凸集（即 $\forall x,y \in A, \forall t \in [0,1],  tx + (1-t)y \in A$）。
- 原点包含：$0 \in A$（保证 $p_A(0)=0$）。

对于$A$凸集：$A$是吸收集合的充分必要条件是$0$在$A$的内部。

### 3. 直观解释
- Minkowski泛函 $p_A(x)$：度量 $x$ 被 $A$ “吸收”的最小缩放因子。  
  - $p_A(x) < 1$：$x$ 被 $A$ 严格包含（缩放后仍在 $A$ 内）。  
  - $p_A(x) \leq 1$：$x$ 位于 $A$ 的边界或内部。  
- 吸收性：任何向量 $x$ 经充分缩小后必属于 $A$（反映集合的“全局覆盖性”）。  
- 次线性性：泛函沿射线的线性增长（齐次性）及三角不等式（次可加性）。  



### 4. 特殊情形
#### (1) 赋范空间中的单位球
- 设 $(X, \|\cdot\|)$ 为赋范空间，$A = \{ x \in X \mid \|x\| \leq 1 \}$（闭单位球）。  
- 则 Minkowski 泛函 $p_A(x) = \|x\|$，即范数本身。  
- 验证：  
  $$
  p_A(x) = \inf \{ t > 0 \mid \|t^{-1}x\| \leq 1 \} = \inf \{ t > 0 \mid \|x\| \leq t \} = \|x\|.
  $$

#### (2) 对称吸收凸集 → 半范数
- 若 $A$ 对称（即 $x \in A \iff -x \in A$），则 $p_A$ 是半范数：  
  $$
  p_A(\lambda x) = |\lambda| p_A(x), \quad \forall \lambda \in \mathbb{R}.
  $$
- 应用：局部凸空间（Locally Convex Spaces）的半范数诱导拓扑。

#### (3) 开集与闭集的关系
- 若 $A$ 为开凸集且 $0 \in A$，则：  
  $$
  A = \{ x \in X \mid p_A(x) < 1 \}.
  $$
- 若 $A$ 为闭凸集且 $0 \in A$，则：  
  $$
  A = \{ x \in X \mid p_A(x) \leq 1 \}.
  $$


## Hahn-Banach 定理（分离版本）
### 核心结论  
设 $X$ 是实数域上的局部凸拓扑向量空间，$A$ 和 $B$ 是 $X$ 中两个非空凸集。若满足以下条件之一：  
1. $A$ 是开集且 $A \cap B = \emptyset$  
2. $A$ 紧致、$B$ 闭且 $A \cap B = \emptyset$  
则存在非零连续线性泛函 $f \in X^*$ 和常数 $\alpha \in \mathbb{R}$，使得：  
$$
\sup_{x \in A} f(x) \leq \alpha \leq \inf_{y \in B} f(y)
$$  
即 $f$ 分离 $A$ 和 $B$。若不等式严格成立（$\sup_A f < \inf_B f$），则称为 严格分离。


### 关键条件  
1. 凸性要求：  
   $A$ 和 $B$ 必须是非空凸集（核心前提）。  
   
2. 分离可行性条件（满足其一即可）：  
   - 版本1：$A$ 有非空内部（通常取开集）且 $A \cap B = \emptyset$  
   - 版本2：$A$ 紧致、$B$ 闭且 $A \cap B = \emptyset$（可推出严格分离）  
   - *弱条件*：$A$ 有非空相对内部（对仿射包成立）  

3. 空间结构：  
   $X$ 需为 局部凸拓扑向量空间（由一族半范数诱导拓扑）。  

> 注：拟范数/半范数在此版本中隐含于空间结构（局部凸性由半范数族定义）。

### 直观解释  
1. 超平面分离：  
   存在仿射超平面 $H = \{x \in X \mid f(x) = \alpha\}$，使 $A$ 和 $B$ 位于其两侧：  
   - $A \subseteq \{x \mid f(x) \leq \alpha\}$  
   - $B \subseteq \{x \mid f(x) \geq \alpha\}$  

2. 几何意义：  
   - 开凸集与不交凸集可被超平面分离  
   - 紧凸集与闭凸集可被严格分离（存在"间隙"）  
   - 分离泛函 $f$ 的法向量指向 $B$ 的方向  

3. 对偶思想：  
   凸集不交性 $\xrightarrow{\text{对偶}}$ 存在连续线性泛函"检测"分离  


### 特殊情形  
1. 赋范空间中的点与闭凸集分离：  
   若 $X$ 是赋范空间，$B \subset X$ 是非空闭凸集，$x_0 \notin B$，则存在 $f \in X^*$ 满足：  
   $$
   f(x_0) < \inf_{y \in B} f(y)
   $$  

2. 有限维空间（Farkas引理）：  
   在 $\mathbb{R}^n$ 中，若凸锥 $C$ 与向量 $b$ 满足 $b \notin C$，则存在超平面分离 $b$ 与 $C$，且 $f(c) \geq 0$ 对所有 $c \in C$ 成立。  

3. 严格分离的应用：  
   - 紧凸集与闭凸集不交 $\Rightarrow$ 存在 $\varepsilon >0$ 使 $\sup_A f \leq \alpha - \varepsilon < \alpha + \varepsilon \leq \inf_B f$  
   - 在优化中用于证明强对偶性  

