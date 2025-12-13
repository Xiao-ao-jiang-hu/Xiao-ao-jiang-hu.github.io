---
title: Ch7.7 同调理论的应用（二）
tags:
  - math
  - topology
categories:
  - math
  - topology
index_img: /img/topology.jpg
banner_img: /img/topology.jpg
excerpt: 拓扑学笔记
abbrlink: e81dddcd
date: 2025-01-03 21:49:41
---
## **4. Jordan 曲线定理的代数拓扑证明**

Jordan 曲线定理是平面拓扑中的一个基本而深刻的结果，它描述了简单闭曲线如何分割平面。虽然定理本身直观上明显，但严格的证明却需要借助代数拓扑的工具。本节将利用奇异同调理论给出一个完整的证明，并讨论其推广和例子。

### **4.1 定理陈述**

**定理 7.4.1（Jordan 曲线定理）**  
设 $C \subset \mathbb{R}^2$ 是一条简单闭曲线，即 $C$ 同胚于圆周 $S^1$。则：
1. **分离性**：补集 $\mathbb{R}^2 \setminus C$ 恰有两个连通分支。
2. **有界性**：其中一个分支是有界的（称为**内部**），另一个是无界的（称为**外部**）。
3. **边界性**：$C$ 是这两个分支的公共边界。

**注记**：该定理首先由 Camille Jordan 在 1887 年提出，但其证明后来被发现存在漏洞。第一个严格证明由 Oswald Veblen 在 1905 年给出。代数拓扑的证明利用同调理论，不仅简洁而且易于推广到高维。

### **4.2 证明的代数拓扑工具**

证明将主要依赖于以下同调性质：

1. **圆周的同调**：$H_1(S^1) \cong \mathbb{Z}$，且当 $S^1$ 嵌入 $\mathbb{R}^2 \setminus \{0\}$ 时，包含映射诱导同调同构。
2. **零维约化同调**：对于非空空间 $X$，$\tilde{H}_0(X)$ 是自由阿贝尔群，其秩等于 $X$ 的连通分支数减一。特别地，$X$ 连通当且仅当 $\tilde{H}_0(X) = 0$。
3. **Alexander 对偶**：这是证明的核心。对于紧子集 $C \subset \mathbb{R}^2$，有同构：
   $$
   \tilde{H}_0(\mathbb{R}^2 \setminus C) \cong H^1(C),
   $$
   其中右边是 Čech 上同调或奇异上同调（对于好的空间如多面体，两者一致）。由于 $C \cong S^1$，有 $H^1(C) \cong \mathbb{Z}$，从而 $\tilde{H}_0(\mathbb{R}^2 \setminus C) \cong \mathbb{Z}$，这意味着 $\mathbb{R}^2 \setminus C$ 有两个连通分支。


### **4.3 证明**
我们将分三步进行：首先证明 $\mathbb{R}^2 \setminus C$ 恰有两个连通分支，然后证明其中一个有界而另一个无界，最后证明 $C$ 是这两个分支的公共边界。

#### **第一步：分离性**

考虑 $\mathbb{R}^2$ 的单点紧化 $S^2 = \mathbb{R}^2 \cup \{\infty\}$，并将 $C$ 视为 $S^2$ 的紧子集。由于 $C$ 同胚于圆周 $S^1$，其（奇异或 Čech）上同调满足 $H^1(C) \cong \mathbb{Z}$。

对嵌入 $S^2$ 的紧子集 $C$ 应用 **Alexander 对偶定理**，得到：
$$\tilde{H}_0(S^2 \setminus C) \cong H^1(C) \cong \mathbb{Z}.$$
由约化同调的性质：对于非空空间 $X$，$\tilde{H}_0(X)$ 是自由阿贝尔群，其秩等于 $X$ 的连通分支数减一。故 $S^2 \setminus C$ 的连通分支数为 $2$。由于 $\mathbb{R}^2 \setminus C = (S^2 \setminus C) \setminus \{\infty\}$，且 $\infty$ 属于其中一个分支，去掉 $\infty$ 后该分支仍连通（它是开集且与 $\mathbb{R}^2$ 同胚），而另一个分支不变。因此 $\mathbb{R}^2 \setminus C$ 也有两个连通分支。


#### **第二步：有界性**

因为 $C$ 是 $\mathbb{R}^2$ 中的紧集，存在充分大的闭圆盘 $D \subset \mathbb{R}^2$ 使得 $C \subset D$。在 $\mathbb{R}^2$ 中，$D$ 的补集 $\mathbb{R}^2 \setminus D$ 是无界的且道路连通（它是开集且连通）。注意到 $\infty \in S^2 \setminus C$，且 $\mathbb{R}^2 \setminus D$ 连通且与 $C$ 不交，故 $\mathbb{R}^2 \setminus D$ 包含于 $S^2 \setminus C$ 的某个连通分支中。因此该分支在 $\mathbb{R}^2$ 中的部分是无界的，称为**外部**；另一个分支包含于 $D$，因而是有界的，称为**内部**。


#### **第三步：边界性**

记 $\mathbb{R}^2 \setminus C$ 的两个连通分支为 $U$（有界内部）和 $V$（无界外部）。由于 $U$ 和 $V$ 是开集，它们的边界满足 $\partial U \subset C$ 和 $\partial V \subset C$。反之，需证 $C$ 的每一点同时是 $U$ 和 $V$ 的极限点。

任取 $x \in C$，假设存在 $x$ 的邻域 $W$ 使得 $W \cap U = \emptyset$，则 $W \setminus C \subset V$。但 $C$ 是简单闭曲线，局部上同胚于实直线：存在同胚将 $W \cap C$ 映射到 $(-1,1) \times \{0\} \subset \mathbb{R}^2$。此时 $W \setminus C$ 被分成两个不相交的开集，分别对应上半平面和下半平面。这两个开集均与 $V$ 相交，但由于 $W \setminus C \subset V$ 且 $V$ 连通，这两个开集必须属于 $V$ 的同一个连通分支，矛盾于它们被 $C$ 分离。因此 $x$ 是 $U$ 的极限点。同理可证 $x$ 也是 $V$ 的极限点。故 $C = \partial U = \partial V$，即 $C$ 是两个分支的公共边界。


综上，Jordan 曲线定理得证。


### **4.4 例子**

**例 7.4.2（标准圆）**  
单位圆 $C = S^1 \subset \mathbb{R}^2$。补集 $\mathbb{R}^2 \setminus S^1$ 由单位开圆盘 $\{|z|<1\}$ 和外部 $\{|z|>1\}$ 组成，显然有两个连通分支。

**例 7.4.3（多边形曲线）**  
任何简单多边形（如三角形、正方形）都是简单闭曲线。其内部和外部是明显的。

**例 7.4.4（非 Jordan 曲线）**  
如果曲线不是简单的，比如数字 8 字形，则补集可能有三个或更多连通分支。例如，8 字形将平面分成三个区域：左上方、右上方和下方。

**例 7.4.5（空间填充曲线）**  
注意：空间填充曲线不是简单闭曲线，因为它不是同胚于 $S^1$（它占据了面积）。

### **4.5 高维推广：Jordan-Brouwer 分离定理**

**定理 7.4.6（Jordan-Brouwer 分离定理）**  
设 $\Sigma \subset \mathbb{R}^n$ 是一个同胚于 $S^{n-1}$ 的子集（称为拓扑球面）。则 $\mathbb{R}^n \setminus \Sigma$ 恰有两个连通分支，其中一个有界（内部），另一个无界（外部），并且 $\Sigma$ 是它们的公共边界。

**证明概要**：利用 Alexander 对偶：对于紧集 $\Sigma \subset S^n$（一点紧化），有
$$
\tilde{H}_0(S^n \setminus \Sigma) \cong H^{n-1}(\Sigma) \cong \mathbb{Z},
$$
因此 $S^n \setminus \Sigma$ 有两个连通分支。去掉无穷远点即得 $\mathbb{R}^n \setminus \Sigma$ 的两个分支。


## **5. Lefschetz 不动点定理简介**

Lefschetz 不动点定理是 Brouwer 不动点定理的深远推广，它将不动点的存在性与映射诱导的同调同态的迹联系起来，从而提供了一个可计算的不动点存在性判据。

### **5.1 Lefschetz 数的定义**

**定义 7.5.1（Lefschetz 数）**  
设 $X$ 是一个有限维 CW 复形，$f: X \to X$ 是一个连续映射。对于每个整数 $k \ge 0$，诱导同态 $f_*: H_k(X; \mathbb{Q}) \to H_k(X; \mathbb{Q})$ 是有限维有理向量空间上的线性映射。定义 **Lefschetz 数** $L(f)$ 为交错迹：
$$
L(f) = \sum_{k \ge 0} (-1)^k \operatorname{tr}\left( f_*: H_k(X; \mathbb{Q}) \to H_k(X; \mathbb{Q}) \right).
$$
这里使用有理系数以确保迹有定义（因为同调群的挠子群在有理化后消失，只留下自由部分）。如果 $X$ 的同调群是有限生成的，那么 $f_*$ 在自由部分上的作用可以表示为一个矩阵，迹就是该矩阵的迹。

**注记**：也可以使用实数或复数系数。Lefschetz 数是一个同伦不变量，因为同伦的映射诱导相同的同调同态。

### **5.2 Lefschetz 不动点定理**

**定理 7.5.2（Lefschetz 不动点定理）**  
设 $X$ 是一个有限维 CW 复形，$f: X \to X$ 连续。如果 Lefschetz 数 $L(f) \neq 0$，则 $f$ 至少有一个不动点。

**证明思路**：证明采用反证法，假设 $f$ 没有不动点，然后通过一系列技术步骤导出 $L(f)=0$。主要步骤如下：

1. **没有不动点的假设**：假设 $f(x) \neq x$ 对所有 $x \in X$。由于 $X$ 紧（有限维 CW 复形通常假定为紧？实际上，CW 复形不一定紧，但我们可以假设 $X$ 是紧的，或者使用紧支撑同调。标准陈述中常要求 $X$ 是紧多面体），存在 $\epsilon > 0$ 使得 $d(x, f(x)) \ge \epsilon$ 对所有 $x \in X$（因为 $x \mapsto d(x, f(x))$ 连续且正值）。
2. **胞腔逼近**：通过对 $f$ 进行胞腔逼近，我们可以假设 $f$ 是胞腔映射，并且仍然满足 $f(x) \neq x$（可能通过同伦调整，但同伦映射保持 Lefschetz 数不变，所以不妨碍）。进一步，我们可以假设 $f$ 将每个胞腔映到一个不同胞腔的星形邻域中，确保 $f$ 与恒等映射“横向”。
3. **映射柱和交截数**：考虑映射 $F: X \to X \times X$ 定义为 $F(x) = (x, f(x))$。没有不动点的条件意味着 $F(X)$ 与对角线 $\Delta = \{(x,x)\}$ 不交。利用同调的交截理论，可以证明对角类 $[\Delta] \in H_*(X \times X)$ 与 $F_*[X]$ 的交截数为零。而这个交截数可以通过 Künneth 公式和迹公式计算，恰好等于 Lefschetz 数。因此 $L(f)=0$。

详细证明可参见 Hatcher 的《代数拓扑》第 2.C 节。我们在此承认定理的正确性，并着重于其应用和计算。

### **5.3 特殊情形与例子**

#### **5.3.1 Brouwer 不动点定理的再现**

取 $X = D^n$，它是可缩的 CW 复形。其有理同调：$H_0(D^n; \mathbb{Q}) \cong \mathbb{Q}$，高阶同调均为零。对于任何连续映射 $f: D^n \to D^n$，诱导映射 $f_*: H_0(D^n; \mathbb{Q}) \to H_0(D^n; \mathbb{Q})$ 是恒等（因为 $D^n$ 连通，所以 $f_*$ 将生成元映到生成元）。因此：
$$
L(f) = \operatorname{tr}(f_*|_{H_0}) = 1 \neq 0.
$$
由 Lefschetz 不动点定理，$f$ 有不动点。

#### **5.3.2 球面自映射**

设 $X = S^n$（$n \ge 1$）。其有理同调：$H_0(S^n; \mathbb{Q}) \cong \mathbb{Q}$，$H_n(S^n; \mathbb{Q}) \cong \mathbb{Q}$，其余为零。设 $f: S^n \to S^n$ 的映射度为 $d = \deg(f)$。则诱导同态：
- $f_*|_{H_0}$ 是恒等（因为连通），迹为 1。
- $f_*|_{H_n}$ 是乘以 $d$，迹为 $d$。

因此：
$$
L(f) = 1 + (-1)^n d.
$$
定理断言：如果 $1 + (-1)^n d \neq 0$，则 $f$ 有不动点。

**讨论**：
- 当 $n$ 为偶数时，$L(f) = 1 + d$。因此只要 $d \neq -1$，就有不动点。例如，反射映射度数为 -1，此时 $L(f)=0$，定理不保证不动点存在；实际上反射有不动点吗？在偶维球面上，关于超平面的反射的不动点集是一个赤道（同胚于 $S^{n-1}$），所以确实有无穷多个不动点，但 Lefschetz 数为零。这说明 Lefschetz 数为零时不动点可能存在，但定理只是充分条件。
- 当 $n$ 为奇数时，$L(f) = 1 - d$。因此只要 $d \neq 1$，就有不动点。例如，反射的度数为 -1，则 $L(f)=1-(-1)=2\neq0$，所以有不动点（实际上反射的不动点集也是赤道）。

**例 7.5.3**  
考虑 $S^2$ 上的映射 $f: S^2 \to S^2$ 为绕 z 轴旋转角度 $\theta$（$0 < \theta < 2\pi$）。这个映射的度数为 1（因为同伦于恒等），所以 $L(f)=1+1=2\neq0$，定理保证有不动点。实际上，旋转有两个不动点：北极和南极。

**例 7.5.4**  
考虑 $S^2$ 上的 antipodal 映射 $a(x) = -x$，度数为 1（因为偶维球面的 antipodal 映射度数为 $(-1)^{n+1} = (-1)^3 = -1$？实际上，对于 $S^n$，antipodal 映射的度数为 $(-1)^{n+1}$。当 $n=2$ 时，度数为 $(-1)^3 = -1$。所以 $L(a)=1+(-1)=0$。定理不保证不动点存在；事实上 antipodal 映射没有不动点。

#### **5.3.3 环面自映射**

设 $X = T^2 = S^1 \times S^1$。其有理同调：$H_0 \cong \mathbb{Q}$，$H_1 \cong \mathbb{Q}^2$，$H_2 \cong \mathbb{Q}$。考虑线性映射 $f: T^2 \to T^2$ 诱导自整数矩阵 $A = \begin{pmatrix} a & b \\ c & d \end{pmatrix} \in M_2(\mathbb{Z})$，即 $f(e^{i\theta}, e^{i\phi}) = (e^{i(a\theta+b\phi)}, e^{i(c\theta+d\phi)})$。则诱导同态：
- $f_*|_{H_0}$ 是恒等，迹为 1。
- $f_*|_{H_1}$ 在生成元（两个坐标圆的方向）上的作用由矩阵 $A$ 表示，迹为 $a+d$。
- $f_*|_{H_2}$ 是乘以 $\det(A) = ad-bc$（因为映射度等于行列式），迹为 $\det(A)$。

因此：
$$
L(f) = 1 - (a+d) + \det(A).
$$
例如，取 $A = \begin{pmatrix} 2 & 0 \\ 0 & 1 \end{pmatrix}$，则 $L(f) = 1 - (2+1) + 2 = 0$。所以定理不保证不动点。实际上，该映射的不动点满足 $e^{i2\theta}=e^{i\theta}$ 和 $e^{i\phi}=e^{i\phi}$，第一个方程给出 $e^{i\theta}=1$（因为 $2\theta \equiv \theta \mod 2\pi \Rightarrow \theta \equiv 0$），所以不动点是整个圆 $\{(1, e^{i\phi})\}$，即无穷多个不动点。

#### **5.3.4 射影平面**

设 $X = \mathbb{RP}^2$。其有理同调：由于整数同调 $H_0 \cong \mathbb{Z}$，$H_1 \cong \mathbb{Z}_2$（挠），$H_2 = 0$，所以有理化后：$H_0(\mathbb{RP}^2; \mathbb{Q}) \cong \mathbb{Q}$，$H_1(\mathbb{RP}^2; \mathbb{Q}) = 0$，$H_2(\mathbb{RP}^2; \mathbb{Q}) = 0$。因此对于任何连续映射 $f: \mathbb{RP}^2 \to \mathbb{RP}^2$，有 $L(f) = \operatorname{tr}(f_*|_{H_0}) = 1 \neq 0$。所以由 Lefschetz 定理，**任何连续映射 $f: \mathbb{RP}^2 \to \mathbb{RP}^2$ 都有不动点**。这是一个非平凡结论，因为 Brouwer 定理只对圆盘成立，而射影平面不是圆盘。

### **5.4 Lefschetz 数与欧拉示性数的关系**

对于恒等映射 $\operatorname{id}: X \to X$，显然 $(\operatorname{id})_*$ 是恒等同构，所以迹等于对应同调群的维数（Betti 数）。因此：
$$
L(\operatorname{id}) = \sum_{k} (-1)^k \operatorname{tr}((\operatorname{id})_*) = \sum_{k} (-1)^k \dim H_k(X; \mathbb{Q}) = \chi(X),
$$
即 Lefschetz 数等于欧拉示性数。因此，如果欧拉示性数非零，则恒等映射（以及任何与恒等同伦的映射）必有不动点。

### **5.5 应用与推广**

Lefschetz 不动点定理在动力系统、微分方程和几何中都有应用。例如，在研究流形上的向量场时，可以利用该定理证明周期轨道的存在性。

**推广**：Atiyah-Bott 不动点定理是 Lefschetz 定理在椭圆复形上的推广，它将不动点指标表示为迹公式，在指标定理中扮演重要角色。

## **6. de Rham 定理简介（连通与分析）**

de Rham 定理建立了微分流形上的分析（微分形式）与拓扑（奇异上同调）之间的深刻联系。它表明，流形的 de Rham 上同调群与实系数奇异上同调群自然同构。这允许我们使用微分形式的工具来计算拓扑不变量，反之亦然。

### **6.1 de Rham 上同调的定义**

设 $M$ 是一个光滑流形（$C^\infty$）。记 $\Omega^k(M)$ 为 $M$ 上光滑 $k$-形式的空间。外微分算子 $d: \Omega^k(M) \to \Omega^{k+1}(M)$ 满足 $d^2 = 0$，因此我们得到一个上链复形：
$$
0 \to \Omega^0(M) \xrightarrow{d} \Omega^1(M) \xrightarrow{d} \Omega^2(M) \xrightarrow{d} \cdots.
$$

**定义 7.6.1（de Rham 上同调群）**  
第 $k$ 个 de Rham 上同调群定义为：
$$
H^k_{\text{dR}}(M) = \frac{\ker(d: \Omega^k(M) \to \Omega^{k+1}(M))}{\operatorname{im}(d: \Omega^{k-1}(M) \to \Omega^k(M))}.
$$
元素称为 **闭形式** 的等价类，两个闭形式如果相差一个恰当形式，则它们代表同一个上同调类。

de Rham 上同调是光滑流形的不变量：如果两个流形是微分同胚的，则它们的 de Rham 上同调同构。实际上，de Rham 上同调是同伦型不变量（由同伦不变性定理），因此甚至更弱的关系也能保持同构。

### **6.2 de Rham 定理的陈述**

**定理 7.6.2（de Rham）**  
设 $M$ 是一个光滑流形。则有自然同构：
$$
H^k_{\text{dR}}(M) \cong H^k_{\text{sing}}(M; \mathbb{R}) \quad \text{对所有 } k \ge 0,
$$
其中右边是实系数奇异上同调群。更具体地，存在线性映射（积分映射）
$$
\Phi: H^k_{\text{dR}}(M) \to H^k_{\text{sing}}(M; \mathbb{R}),
$$
它是同构。

**注记**：对于非紧流形，通常考虑具有紧支撑的微分形式，得到紧支撑 de Rham 上同调，它与常系数奇异上同调不一定同构，而与 Borel-Moore 同调或带紧支撑的同调对偶。但这里我们主要讨论紧流形或无紧支撑的通常形式。

### **6.3 证明思路**

de Rham 定理的证明是微分拓扑的经典内容。我们概述主要步骤：

1. **积分配对**：对于光滑奇异 $k$-链 $c = \sum a_i \sigma_i$（其中每个 $\sigma_i: \Delta^k \to M$ 是光滑映射）和 $k$-形式 $\omega$，定义积分：
   $$
   \int_c \omega = \sum a_i \int_{\Delta^k} \sigma_i^* \omega.
   $$
   Stokes 定理断言：对于 $(k-1)$-形式 $\eta$，有
   $$
   \int_{\partial c} \eta = \int_c d\eta.
   $$
   因此，如果 $\omega$ 是闭形式，则积分在链的边缘上为零，从而定义了奇异上同调类：映射 $c \mapsto \int_c \omega$ 是一个奇异 $k$-上链，且其上边缘为零（因为 $\int_{\partial c} \omega = \int_c d\omega = 0$），所以它是上闭链。如果 $\omega = d\eta$ 是恰当形式，则对应的上链是上边缘（因为 $\int_c d\eta = \int_{\partial c} \eta$）。因此，积分给出了一个线性映射：
   $$
   \Phi: H^k_{\text{dR}}(M) \to H^k_{\text{sing}}(M; \mathbb{R}).
   $$

2. **证明 $\Phi$ 是同构**：这通常通过对具有有限好覆盖的流形进行归纳来完成。关键观察是：
   - 对于 $\mathbb{R}^n$，两者都是平凡的（除了 $k=0$），且 $\Phi$ 是同构。
   - 对于开球，同样成立。
   - de Rham 上同调和奇异上同调都满足 Mayer-Vietoris 序列，并且 $\Phi$ 与这些序列相容（即它是一个上同调理论的态射）。
   - 如果对于两个开集 $U, V$ 和它们的交 $U \cap V$，$\Phi$ 是同构，则对于并 $U \cup V$，$\Phi$ 也是同构。

   因此，通过对流形的好覆盖进行归纳，可以证明 $\Phi$ 对所有光滑流形都是同构。

另一种证明使用层论，将 de Rham 复形视为一个解析层，而奇异上同调用常数层，然后比较它们的上同调。

### **6.4 例子与计算**

#### **6.4.1 欧氏空间**

对于 $\mathbb{R}^n$，Poincaré 引理断言：任何闭形式都是恰当的（在适当条件下）。因此，对于 $k \ge 1$，$H^k_{\text{dR}}(\mathbb{R}^n) = 0$。而 $H^0_{\text{dR}}(\mathbb{R}^n)$ 由局部常数函数组成，因为 $\mathbb{R}^n$ 连通，所以 $H^0_{\text{dR}}(\mathbb{R}^n) \cong \mathbb{R}$。这与奇异上同调一致。

#### **6.4.2 圆周**

$S^1$ 的 de Rham 上同调计算如下：
- 0-形式：函数 $f$ 是闭的当且仅当它是局部常数，由于 $S^1$ 连通，所以整体常数函数，因此 $H^0_{\text{dR}}(S^1) \cong \mathbb{R}$。
- 1-形式：任何 1-形式可以写为 $g(\theta) d\theta$，其中 $\theta$ 是角度坐标（但整体上 $d\theta$ 不是恰当的，因为 $\theta$ 不是整体函数）。闭形式要求 $d(g d\theta) = g' d\theta \wedge d\theta = 0$，所以 $g$ 常数。恰当形式是 $d f = f' d\theta$，其中 $f$ 是周期函数。因此，闭形式模恰当形式由 $\mathbb{R} d\theta$ 模 $\{ f' d\theta \}$ 给出。由于 $\int_{S^1} d\theta = 2\pi \neq 0$，所以 $d\theta$ 不是恰当的。实际上，$H^1_{\text{dR}}(S^1) \cong \mathbb{R}$，生成元为 $[d\theta]$。

因此，$H^0_{\text{dR}}(S^1) \cong \mathbb{R}$，$H^1_{\text{dR}}(S^1) \cong \mathbb{R}$，与奇异上同调一致。

#### **6.4.3 球面**

对于 $S^n$（$n \ge 2$），由于 $S^n$ 是单连通的且具有可缩的开覆盖，可以证明：对于 $0 < k < n$，$H^k_{\text{dR}}(S^n) = 0$，而 $H^n_{\text{dR}}(S^n) \cong \mathbb{R}$。生成元是体积形式。例如，对于 $S^2$，体积形式为 $\sin\theta\, d\theta \wedge d\phi$（在球坐标下）。

#### **6.4.4 环面**

$T^2 = S^1 \times S^1$ 的 de Rham 上同调可以通过 Künneth 公式计算。设 $\theta, \phi$ 为两个角度坐标，则：
- $H^0_{\text{dR}}(T^2) \cong \mathbb{R}$，
- $H^1_{\text{dR}}(T^2)$ 由 $[d\theta]$ 和 $[d\phi]$ 生成，故 $\cong \mathbb{R}^2$，
- $H^2_{\text{dR}}(T^2)$ 由 $[d\theta \wedge d\phi]$ 生成，故 $\cong \mathbb{R}$。

这与奇异上同调一致。

### **6.5 几何直观**

de Rham 上同调的几何直观来自向量微积分中的线积分和曲面积分。例如，在 $\mathbb{R}^3$ 中：
- 一个向量场 $\mathbf{F}$ 对应一个 1-形式 $\omega = F_x dx + F_y dy + F_z dz$。
- 闭形式（$d\omega = 0$）对应无旋场（$\nabla \times \mathbf{F} = 0$）。
- 恰当形式（$\omega = df$）对应保守场（$\mathbf{F} = \nabla f$）。
- 因此，$H^1_{\text{dR}}(M)$ 衡量了无旋场是否为保守场的障碍，这由空间的“孔洞”决定。例如，在 $\mathbb{R}^3 \setminus \{0\}$ 中，虽然 $\nabla \times \mathbf{F} = 0$，但线积分可能非零（如引力场），这对应于非平凡的 de Rham 上同调。

对于 2-形式，闭形式对应无散场（$\nabla \cdot \mathbf{F} = 0$），恰当形式对应旋度场（$\mathbf{F} = \nabla \times \mathbf{A}$）。$H^2_{\text{dR}}(M)$ 衡量了无散场是否为旋度场的障碍。

### **6.6 应用**

1. **Poincaré 引理**：在可缩区域上，闭形式都是恰当的。这对应于奇异上同调在可缩空间上平凡。

2. **上积结构**：de Rham 上同调有自然的上积：给定闭形式 $\alpha, \beta$，其外积 $\alpha \wedge \beta$ 也是闭的，且上同调类的乘积对应于奇异上同调的杯积。这使得 de Rham 上同调成为一个分次交换代数，与奇异上同调一致。

3. **Hodge 理论**：对于紧黎曼流形，Hodge 定理表明每个 de Rham 上同调类中有唯一的调和代表元（即满足 $d\omega = 0$ 且 $d^*\omega = 0$ 的形式）。这提供了分析上与拓扑上的联系，并允许用椭圆算子研究同调。

4. **指标定理**：Atiyah-Singer 指标定理将某些微分算子的解析指标表示为拓扑指标，其中 de Rham 复形是基本的例子。

5. **微分形式的积分**：de Rham 定理使得我们可以用微分形式表示同调类，从而在流形上积分。例如，Stokes 定理是链的同调与形式的上同调之间对偶的体现。

### **6.7 例子：计算 $\mathbb{RP}^2$ 的 de Rham 上同调**

实射影平面 $\mathbb{RP}^2$ 作为光滑流形，其 de Rham 上同调可以通过覆盖映射 $S^2 \to \mathbb{RP}^2$ 来计算。由于 $\mathbb{RP}^2$ 不可定向，其最高维 de Rham 上同调为零。事实上，可以证明：
- $H^0_{\text{dR}}(\mathbb{RP}^2) \cong \mathbb{R}$，
- $H^1_{\text{dR}}(\mathbb{RP}^2) = 0$（因为 $\pi_1(\mathbb{RP}^2) = \mathbb{Z}_2$，但 de Rham 上同调是实向量空间，所以挠部分消失），
- $H^2_{\text{dR}}(\mathbb{RP}^2) = 0$（因为不可定向）。

这与实系数奇异上同调一致。
