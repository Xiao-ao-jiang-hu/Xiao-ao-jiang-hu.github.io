---
title: Ch6.1 覆叠空间
tags:
  - math
  - topology
categories:
  - math
  - topology
index_img: /img/topology.jpg
banner_img: /img/topology.jpg
excerpt: 拓扑学笔记
abbrlink: '387e7995'
date: 2024-11-11 16:37:43
---
回忆前面圆周道路提升的例子：
$$\Pi: \mathbb{R} \to S^1 := \Pi(x) = e^{2\pi ix}$$
令 $U = S^1 \setminus \{-1\}, \, V = S^1 \setminus \{1\}$。则 $U, V$ 是 $S^1$ 的开覆盖，且 $\Pi^{-1}(U) = \bigcup_{n \in \mathbb{Z}} (n - \tfrac{1}{2}, n + \tfrac{1}{2})$，$\Pi^{-1}(V) = \bigcup_{n \in \mathbb{Z}} (n, n + 1)$。显然 $\Pi: (n - \tfrac{1}{2}, n + \tfrac{1}{2}) \to U$ 和 $\Pi: (n, n + 1) \to V$ 都是同胚映射。这说明了在 $S^1$ 的每个开集上, $\Pi$ 的原像都是一些与该开集同胚的开集的并.。这就是覆叠空间的基本思想，即在一个空间上构造另一个空间，使得在某个开覆盖下，映射的原像局部与原空间同胚。直观上看，覆叠空间可以被视为在原空间上“铺设”多个“层”，每个层在局部与原空间相似，但整体结构可能更复杂。

## 覆叠空间
### 定义（覆叠映射与覆叠空间）
设 $X$ 和 $\tilde{X}$ 是拓扑空间，映射 $p: \tilde{X} \to X$ 称为一个**覆叠映射**，如果对于 $X$ 的每个点 $x \in X$，存在一个开邻域 $U$，使得 $p^{-1}(U)= \bigsqcup_{\alpha \in A} V_\alpha$，其中每个 $V_\alpha$ 都是 $\tilde{X}$ 的开集，并且 $p|_{V_\alpha}: V_\alpha \to U$ 是一个同胚映射。这里的 $\bigsqcup$ 表示不交并。空间 $\tilde{X}$ 称为 $X$ 的一个**覆叠空间**。

### 示例
1. 考虑 $p: \mathbb{C} \to \mathbb{C}^*$，定义为 $p(z) = e^{z}$。令 $U = \mathbb{C}^* \setminus \{z \in \mathbb{C}^* | \text{Im}(z) = 0\}$。则 $p^{-1}(U) = \bigsqcup_{n \in \mathbb{Z}} V_n$，其中 $V_n = \{z \in \mathbb{C} | n\pi < \text{Im}(z) < (n+1)\pi\}$。每个 $p|_{V_n}: V_n \to U$ 都是同胚映射，因此 $p$ 是一个覆叠映射。
   
2. 设 $p: S^1 \to S^1$, $p(z) = z^n$, $n \neq 0$. 则 $p$ 是一个覆叠映射。
令 $U = S^1 \setminus \{-1\}$, $V = S^1 \setminus \{1\}$.
$p^{-1}(U) = \left\{ e^{i\theta} \mid -\frac{\pi}{n} + \frac{2k\pi}{n} < \theta < \frac{\pi}{n} + \frac{2k\pi}{n}, \; 0 \le k \le n-1 \right\} = \bigcup_{k=0}^{n-1} V_{1k}$
$p^{-1}(V) = \left\{ e^{i\theta} \mid \frac{2k\pi}{n} < \theta < \frac{2k\pi}{n} + \frac{2\pi}{n}, \; 0 \le k \le n-1 \right\} = \bigcup_{k=0}^{n-1} V_{2k}$
其中 $p|_{V_{1k}}: V_{1k} \to U$ 和 $p|_{V_{2k}}: V_{2k} \to V$ 均为同胚。

### 覆盖层数 (Number of Sheets):
设 $p: \tilde{X} \to X$ 是一个覆叠映射。如果对于 $X$ 的每个点 $x \in X$，$p^{-1}(x)$ 的基数是一个固定的整数 $n$，则称 $p$ 是一个**n-层覆叠映射**，$\tilde{X}$ 是 $X$ 的一个**n-层覆叠空间**。如果 $p^{-1}(x)$ 的基数在不同点处可能不同，则称 $p$ 是一个**无限层覆叠映射**。

## 覆叠空间的提升性质
设 $p: \tilde{X} \to X$ 是一个覆叠映射，$Y$ 是一个连通空间，$f: Y \to X$ 是一个连续映射。若存在 $y_0 \in Y$ 和 $\tilde{x}_0 \in \tilde{X}$ 使得 $p(\tilde{x}_0) = f(y_0)$，则存在唯一的连续映射 $\tilde{f}: Y \to \tilde{X}$ 使得 $p \circ \tilde{f} = f$ 且 $\tilde{f}(y_0) = \tilde{x}_0$。这个过程称为**提升**。直观上看，提升性质允许我们将一个映射从一个空间提升到其覆叠空间中，同时保持映射的连续性和起点的一致性。这在研究空间的拓扑性质时非常有用，因为它允许我们在更简单或更易处理的覆叠空间中分析映射的行为。

### 路径提升引理 (Path Lifting Lemma)
设 $p: \widetilde{X} \to X$ 是覆叠映射，$\gamma: I \to X$ 是一条路径，满足 $\gamma(0) = x_0 \in X$. 设 $\widetilde{x}_0 \in \widetilde{X}$ 满足 $p(\widetilde{x}_0) = x_0$.
则存在唯一的提升路径 $\widetilde{\gamma}: I \to \widetilde{X}$, 使得 $\widetilde{\gamma}(0) = \widetilde{x}_0$ 且 $p \circ \widetilde{\gamma} = \gamma$.

#### 证明
**唯一性：**
假设有两个提升 $\widetilde{\gamma}_1, \widetilde{\gamma}_2$ 满足条件。考虑集合 $A = \{ t \in I : \widetilde{\gamma}_1(t) = \widetilde{\gamma}_2(t) \}$。由于 $\widetilde{\gamma}_1(0) = \widetilde{\gamma}_2(0) = \widetilde{x}_0$，有 $0 \in A$。因为 $\widetilde{X}$ 是 Hausdorff 空间，两个连续映射相等的点集是闭集，故 $A$ 是闭集。下证 $A$ 是开集：取 $t_0 \in A$，令 $x = \gamma(t_0)$，取 $x$ 的一个均匀覆盖邻域 $U$，则存在 $\widetilde{x} = \widetilde{\gamma}_1(t_0) = \widetilde{\gamma}_2(t_0)$ 的开邻域 $V \subset p^{-1}(U)$ 使得 $p|_V: V \to U$ 是同胚。由连续性，存在 $\epsilon > 0$ 使得当 $|t - t_0| < \epsilon$ 时，$\widetilde{\gamma}_1(t), \widetilde{\gamma}_2(t) \in V$。由于 $p \circ \widetilde{\gamma}_1 = p \circ \widetilde{\gamma}_2 = \gamma$ 且 $p|_V$ 是单射，得 $\widetilde{\gamma}_1(t) = \widetilde{\gamma}_2(t)$，故 $(t_0 - \epsilon, t_0 + \epsilon) \cap I \subset A$。因此 $A$ 是开集。由 $I$ 的连通性，$A = I$，唯一性得证。

**存在性：**
利用 $I$ 的紧致性。对每个 $s \in I$，取 $\gamma(s)$ 的均匀覆盖邻域 $U_s$，则 $\{ \gamma^{-1}(U_s) \}_{s \in I}$ 是 $I$ 的开覆盖。存在有限子覆盖，从而可选取划分 $0 = t_0 < t_1 < \cdots < t_n = 1$ 使得每个区间 $[t_i, t_{i+1}]$ 包含在某个 $\gamma^{-1}(U_i)$ 中，其中 $U_i$ 均匀覆盖。归纳构造：令 $\widetilde{\gamma}(0) = \widetilde{x}_0$。假设已在 $[0, t_i]$ 上定义提升，考虑 $[t_i, t_{i+1}]$，有 $\gamma([t_i, t_{i+1}]) \subset U_i$。设 $p^{-1}(U_i) = \bigsqcup_{\alpha} V_\alpha$，且 $\widetilde{\gamma}(t_i)$ 属于某个 $V_{\alpha_0}$。定义 $\widetilde{\gamma}(t) = (p|_{V_{\alpha_0}})^{-1}(\gamma(t))$ 对 $t \in [t_i, t_{i+1}]$。由 $p|_{V_{\alpha_0}}$ 是同胚知该定义连续，且在端点与已有定义一致。经有限步得整体提升。

### 同伦提升引理 (Homotopy Lifting Lemma)
设 $p: \widetilde{X} \to X$ 是覆叠映射，$F: Y \times I \to X$ 是一个同伦。设 $\widetilde{F}: Y \to \widetilde{X}$ 满足 $p \circ \widetilde{F}(y) = F(y, 0)$ 对所有 $y \in Y$ 成立。
则存在唯一的同伦 $\widehat{F}: Y \times I \to \widetilde{X}$, 使得 $\widehat{F}(y, 0) = \widetilde{F}(y)$ 且 $p \circ \widehat{F} = F$.

#### 证明
**唯一性：**
假设有两个提升同伦 $\widehat{F}_1, \widehat{F}_2$。对每个 $y \in Y$，考虑集合 $\{ t \in I : \widehat{F}_1(y,t) = \widehat{F}_2(y,t) \}$。该集合包含 0 且为既开又闭（证明类似路径提升），故为整个 $I$。因此对每个 $y$ 和所有 $t$ 相等，唯一性得证。

**存在性：**
对任意 $y_0 \in Y$，由 $I$ 的紧致性，存在划分 $0 = t_0 < t_1 < \cdots < t_m = 1$ 和均匀覆盖开集 $U_1, \dots, U_m$ 使得 $F(y_0 \times [t_{i-1}, t_i]) \subset U_i$。由连续性，存在 $y_0$ 的开邻域 $W_{y_0}$ 使得 $F(W_{y_0} \times [t_{i-1}, t_i]) \subset U_i$。在 $W_{y_0} \times I$ 上逐步构造提升：首先在 $W_{y_0} \times \{0\}$ 上定义 $\widehat{F}(y,0) = \widetilde{F}(y)$。假设已在 $W_{y_0} \times [0, t_{i-1}]$ 上定义提升，考虑区间 $[t_{i-1}, t_i]$。对每个 $y \in W_{y_0}$，点 $\widehat{F}(y, t_{i-1})$ 落在 $p^{-1}(U_i)$ 的某个片 $V_{\alpha(y)}$ 中。由于 $\widehat{F}(\cdot, t_{i-1})$ 连续且各片互不相交，$\alpha(y)$ 在 $y_0$ 附近局部常数，故存在 $y_0$ 的邻域 $W' \subset W_{y_0}$ 使所有 $y \in W'$ 对应同一片 $V_{\alpha_0}$。在 $W' \times [t_{i-1}, t_i]$ 上定义 $\widehat{F}(y,t) = (p|_{V_{\alpha_0}})^{-1}(F(y,t))$，连续。由唯一性，这些局部提升可粘合成整体提升 $\widehat{F}: Y \times I \to \widetilde{X}$。


提升性质的一个重要应用是研究覆叠映射对基本群的影响。


### 覆叠映射诱导的基本群同态是单射 
设 $p: \widetilde{X} \to X$ 是覆叠映射，且 $p(\widetilde{x}_0) = x_0$。定义诱导的基本群同态 $p_*: \pi_1(\widetilde{X}, \widetilde{x}_0) \to \pi_1(X, x_0)$ 为 $p_*([\widetilde{\gamma}]) = [p \circ \widetilde{\gamma}]$，其中 $[\widetilde{\gamma}]$ 是 $\widetilde{X}$ 中基点 $\widetilde{x}_0$ 处的一个回路的同伦类。则 $p_*$ 是单射。

!!! note 直观理解
    即：$\langle \alpha \rangle \in p_*(\pi_1(\widetilde{X}, \widetilde{x}_0))$ 当且仅当 $\alpha$ 的提升是从 $\widetilde{x}_0$ 出发并回到 $\widetilde{x}_0$ 的闭路（即一个环路）。

#### 证明
设 $[\widetilde{\gamma}] \in \ker p_*$，即 $p \circ \widetilde{\gamma}$ 在 $X$ 中同伦于常值回路 $c_{x_0}$。则存在同伦 $H: I \times I \to X$ 使得 $H(s,0) = p \circ \widetilde{\gamma}(s)$，$H(s,1) = x_0$，且 $H(0,t) = H(1,t) = x_0$。由同伦提升引理（取 $Y = I$，$\widetilde{F}(s) = \widetilde{\gamma}(s)$），存在提升同伦 $\widehat{H}: I \times I \to \widetilde{X}$ 满足 $\widehat{H}(s,0) = \widetilde{\gamma}(s)$ 且 $p \circ \widehat{H} = H$。考虑路径 $t \mapsto \widehat{H}(0,t)$，有 $p(\widehat{H}(0,t)) = x_0$，且 $\widehat{H}(0,0) = \widetilde{x}_0$。由于纤维离散，该路径必为常值，故 $\widehat{H}(0,t) = \widetilde{x}_0$ 对所有 $t$。同理 $\widehat{H}(1,t) = \widetilde{x}_0$。因此 $\widehat{H}$ 是保持基点的同伦，且 $\widehat{H}(s,1)$ 是常值路径 $\widetilde{x}_0$（因为其投影为常值）。故 $\widetilde{\gamma}$ 同伦于常值回路，即 $[\widetilde{\gamma}] = 1$。所以 $p_*$ 是单射。


### 覆盖层数与基本群的指数
设 $p: \widetilde{X} \to X$ 是一个 n-层覆叠映射，且 $p(\widetilde{x}_0) = x_0$。则 $p_*(\pi_1(\widetilde{X}, \widetilde{x}_0))$ 在 $\pi_1(X, x_0)$ 中的指数为 $n$，即：
$$[\pi_1(X, x_0) : p_*(\pi_1(\widetilde{X}, \widetilde{x}_0))] = n.$$

#### 证明
记 $G = \pi_1(X, x_0)$，$H = p_*(\pi_1(\widetilde{X}, \widetilde{x}_0))$。定义映射 $\phi: p^{-1}(x_0) \to G/H$（左陪集集合）如下：对 $\widetilde{x} \in p^{-1}(x_0)$，选取道路 $\widetilde{\alpha}: I \to \widetilde{X}$ 满足 $\widetilde{\alpha}(0) = \widetilde{x}_0$，$\widetilde{\alpha}(1) = \widetilde{x}$（由道路连通性）。令 $\alpha = p \circ \widetilde{\alpha}$，则 $\alpha$ 是 $X$ 中基于 $x_0$ 的回路。定义 $\phi(\widetilde{x}) = [\alpha] H$。

**良定义性：**
若另取道路 $\widetilde{\alpha}'$ 从 $\widetilde{x}_0$ 到 $\widetilde{x}$，则 $\widetilde{\alpha} \cdot (\widetilde{\alpha}')^{-1}$ 是 $\widetilde{X}$ 中基于 $\widetilde{x}_0$ 的回路，故 $[\widetilde{\alpha} \cdot (\widetilde{\alpha}')^{-1}] \in \pi_1(\widetilde{X}, \widetilde{x}_0)$。于是 $p_*([\widetilde{\alpha} \cdot (\widetilde{\alpha}')^{-1}]) = [\alpha \cdot (\alpha')^{-1}] \in H$，即 $[\alpha] H = [\alpha'] H$。

**单射性：**
设 $\widetilde{x}_1, \widetilde{x}_2 \in p^{-1}(x_0)$ 满足 $\phi(\widetilde{x}_1) = \phi(\widetilde{x}_2)$。选取提升道路 $\widetilde{\alpha}_i$ 从 $\widetilde{x}_0$ 到 $\widetilde{x}_i$，令 $\alpha_i = p \circ \widetilde{\alpha}_i$。由条件存在 $[\beta] \in H$ 使 $[\alpha_1] = [\beta][\alpha_2]$。取 $\widetilde{\beta} \in \pi_1(\widetilde{X}, \widetilde{x}_0)$ 使得 $p_*([\widetilde{\beta}]) = [\beta]$。则 $p \circ \widetilde{\beta}$ 与 $\alpha_1 \cdot \alpha_2^{-1}$ 同伦。考虑道路 $\widetilde{\alpha}_1$ 和 $\widetilde{\beta} \cdot \widetilde{\alpha}_2$，它们投影为 $\alpha_1$ 和 $p \circ \widetilde{\beta} \cdot \alpha_2$，且后者与 $\alpha_1$ 保持基点同伦。由同伦提升，两条提升道路的终点相同，即 $\widetilde{x}_1 = \widetilde{x}_2$。

**满射性：**
对任意左陪集 $[\gamma] H$，设 $\gamma$ 是 $X$ 中基于 $x_0$ 的回路。由路径提升，存在唯一提升 $\widetilde{\gamma}$ 从 $\widetilde{x}_0$ 出发，设终点为 $\widetilde{x} = \widetilde{\gamma}(1) \in p^{-1}(x_0)$。取 $\widetilde{\alpha} = \widetilde{\gamma}$，则 $\alpha = \gamma$，故 $\phi(\widetilde{x}) = [\gamma] H$。

因此 $\phi$ 是双射，左陪集个数等于纤维基数 $n$，即指数为 $n$。

### 定义（局部道路连通空间）
拓扑空间 $X$ 称为**局部道路连通空间**，如果对于 $X$ 的每个点 $x \in X$ 和每个包含 $x$ 的开邻域 $U$，存在一个包含 $x$ 的道路连通开邻域 $V$，使得 $V \subseteq U$。

**注意：局部道路连通空间和道路连通空间有本质上的区别**
存在道路连通但不局部道路连通的空间。例如，考虑同一点出发的射线集合 $X = \{(r, \theta) | r \geq 0, \theta = 0 \text{ 或 } \theta = \frac{1}{r}\}$，其中 $(r, \theta)$ 是极坐标系中的点。对于 $X$ 中的每个点和每个包含该点的开邻域，我们都可以找到一个道路连通的开邻域包含在其中，因此 $X$ 是局部道路连通的。然而，$X$ 本身并不是道路连通的，因为从原点出发的两条射线无法通过一条连续路径连接起来。

存在局部道路连通但不道路连通的空间。例如，考虑两个不相交的圆 $C_1$ 和 $C_2$。 它们的并集 $X = C_1 \cup C_2$ 是局部道路连通的，因为每个点都有一个包含在圆内的道路连通开邻域。然而，$X$ 本身不是道路连通的，因为没有一条连续路径可以连接 $C_1$ 上的点和 $C_2$ 上的点。


### 提升准则 (Lifting Criterion)
设 $p: (\widetilde{X}, \widetilde{x}_0) \to (X, x_0)$ 是覆叠映射，$f: (Y, y_0) \to (X, x_0)$ 是连续映射，其中 $Y$ 道路连通且局部道路连通。
则存在提升 $\widetilde{f}: (Y, y_0) \to (\widetilde{X}, \widetilde{x}_0)$ 使得 $p \circ \widetilde{f} = f$，当且仅当 $f_*(\pi_1(Y, y_0)) \subseteq p_*(\pi_1(\widetilde{X}, \widetilde{x}_0))$.

!!! note 直观理解
    考虑从空间 $Y$ 到空间 $X$ 的映射 $f$。如果我们想将这个映射提升到覆叠空间 $\widetilde{X}$ 中，我们需要确保 $Y$ 中的路径在 $X$ 中的映射不会“绕过”覆叠空间中的任何“层”。换句话说，$Y$ 中的每个闭路在 $X$ 中的映射必须能够在覆叠空间中找到一个对应的闭路。这就是为什么需要满足基本群的包含关系：只有当 $f_*(\pi_1(Y, y_0))$ 包含在 $p_*(\pi_1(\widetilde{X}, \widetilde{x}_0))$ 中时，才能确保所有路径都能正确地提升。

#### 证明


### 提升的唯一性
设 $p: \widetilde{X} \to X$ 是一个覆叠映射，$Y$ 是连通空间，$f: Y \to X$ 是连续映射。设 $\widetilde{f}_1, \widetilde{f}_2: Y \to \widetilde{X}$ 是 $f$ 的两个提升（lift），且存在一点 $y_0 \in Y$ 使得 $\widetilde{f}_1(y_0) = \widetilde{f}_2(y_0)$。那么 $\widetilde{f}_1 = \widetilde{f}_2$。


## 万有覆叠空间
从上可知，一个空间的覆叠空间可能不唯一。为了得到一个“最大”的覆叠空间，我们引入万有覆叠空间的概念。由前面基本群对应的关系可以直观知道，覆叠空间“越大”，其对应的基本群子群“越小”。因此，我们可以考虑基本群的平凡子群对应的覆叠空间，这个覆叠空间就是万有覆叠空间。

### 定义 (万有覆叠空间 - Universal Covering Space)
设 $p: \widetilde{X} \to X$ 是一个覆叠映射。如果 $\pi_1(\widetilde{X}) = \{e\}$（即 $\widetilde{X}$ 是单连通的），则称 $\widetilde{X}$ 是 $X$ 的一个万有覆叠空间。
定义 (局部路径连通 - Locally Path-Connected):
空间 $X$ 称为局部路径连通，如果对任意 $x \in X$ 及其任意邻域 $U$，都存在一个包含 $x$ 的路径连通邻域 $V \subseteq U$。

### 定义 (半局部单连通 - Semilocally Simply-Connected):
空间 $X$ 称为半局部单连通，如果对任意 $x \in X$，存在一个邻域 $U$，使得包含映射 $i: U \hookrightarrow X$ 诱导的同态 $i_*: \pi_1(U, x) \to \pi_1(X, x)$ 将 $\pi_1(U, x)$ 映入 $\pi_1(X, x)$ 中的单位元 $\{e\}$。即，$U$ 中的任何环路在 $X$ 中都是零伦的。


### 引理
若 $p: \widetilde{X} \to X$ 是一个万有覆叠空间，则 $X$ 是半局部单连通的。

### 定理：万有覆叠空间的存在性
设 $X$ 是路径连通、局部路径连通且半局部单连通的空间。则存在一个万有覆叠空间 $p: \widetilde{X} \to X$。


### 定理
设 $X$ 是路径连通、局部路径连通且半局部单连通的空间。则对 $\pi_1(X, x_0)$ 的任意子群 $H$，存在一个覆叠空间 $p_H: X_H \to X$，使得 $p_{H*}(\pi_1(X_H, \widetilde{x}_0)) = H$，其中 $\widetilde{x}_0$ 是 $X_H$ 中对应于 $x_0$ 的点。

