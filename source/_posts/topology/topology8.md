---
title: Ch5.2 基本群的计算与 Van Kampen 定理
tags:
  - math
  - topology
categories:
  - math
  - topology
index_img: /img/topology.jpg
banner_img: /img/topology.jpg
excerpt: 拓扑学笔记
date: 2024-10-29 13:24:49
---
# 基本群的计算

本节计算若干常见拓扑空间的基本群，结果汇总如下：

| 空间                                 | 基本群                                |
| ------------------------------------ | ------------------------------------- |
| $\mathbb{E}^n$ 的凸子集              | 平凡群                                |
| 圆周 $S^1$                           | $\mathbb{Z}$                          |
| $n$ 维球面 $S^n$（$n \geq 2$）       | 平凡群                                |
| $n$ 维实射影空间 $P^n$（$n \geq 2$） | $\mathbb{Z}_2$                        |
| 环面 $T$                             | $\mathbb{Z} \times \mathbb{Z}$        |
| 克莱因瓶                             | $\langle a, b \mid a^2 = b^2 \rangle$ |
| 透镜空间 $L(p,q)$                    | $\mathbb{Z}_p$                        |


## 0. 提升引理
提升引理是计算基本群的关键工具。道路提升引理说明了如何将路径从空间 $X$ 提升到其覆盖空间 $\tilde{X}$（在后续章节中会介绍），而同伦提升引理则处理同伦的提升。对于圆周 $S^1$，我们将其视为实数轴 $\mathbb{R}$ 的覆盖空间，通过指数映射 $\pi: \mathbb{R} \to S^1$ 给出。
### 引理 5.10（路径提升引理）
对 $S^1$ 中任意从 $1$ 出发的路径 $\sigma$，存在唯一路径 $\tilde{\sigma}: I \to \mathbb{R}$ 使得 $\tilde{\sigma}(0)=0$ 且 $\pi \circ \tilde{\sigma} = \sigma$。

#### 证明
利用 $S^1$ 的开覆盖 $\{U=S^1 \setminus \{-1\}, V=S^1 \setminus \{1\}\}$ 及其在 $\mathbb{R}$ 中的原像分解。通过勒贝格引理将 $I$ 细分，使得每一段落在 $\sigma^{-1}(U)$ 或 $\sigma^{-1}(V)$ 中，然后逐段提升。

### 引理 5.11（同伦提升引理）
设 $F: I \times I \to S^1$ 满足 $F(0,t)=F(1,t)=1$ 对所有 $t$ 成立。则存在唯一映射 $\tilde{F}: I \times I \to \mathbb{R}$ 使得 $\pi \circ \tilde{F} = F$ 且 $\tilde{F}(0,t)=0$。  
#### 证明
类似路径提升，将 $I\times I$ 细分为小正方形，使得每个正方形在 $F$ 下落入 $U$ 或 $V$，然后逐正方形提升。

## 1. $\mathbb{E}^n$ 的凸子集

设 $C \subseteq \mathbb{E}^n$ 为凸集。对任意以 $p \in C$ 为基点的环路 $\alpha$，定义直线同伦  
$$
F(s,t) = (1-t)\alpha(s) + t p.
$$  
则 $F$ 是 $\alpha$ 到常值环路 $e(s)=p$ 的同伦。因此 $\pi_1(C,p)$ 为平凡群。若道路连通空间的基本群平凡，则称其为**单连通**空间。

## 2. 圆周 $S^1$

### 定理 5.8  
圆周的基本群同构于整数加群：$\pi_1(S^1) \cong \mathbb{Z}$。

#### 证明

将 $S^1$ 视为复平面中的单位圆，取基点 $1 \in S^1$。定义指数映射 $\pi: \mathbb{R} \to S^1$ 为 $\pi(x) = e^{2\pi i x}$。对每个整数 $n$，定义 $\mathbb{R}$ 中从 $0$ 到 $n$ 的路径 $\gamma_n(s)=ns$。复合 $\pi \circ \gamma_n$ 是 $S^1$ 中以 $1$ 为基点的环路，其绕行方向由 $n$ 的符号决定，绕行圈数为 $|n|$。定义同态  
$$
\phi: \mathbb{Z} \to \pi_1(S^1,1), \quad \phi(n) = \langle \pi \circ \gamma_n \rangle.
$$

**引理 5.9**：$\phi$ 是同态。  
**证明**：对 $m,n \in \mathbb{Z}$，考虑 $\mathbb{R}$ 中路径 $\sigma(s) = \gamma_n(s) + m$，则 $\pi \circ \sigma = \pi \circ \gamma_n$。路径 $\gamma_m \cdot \sigma$ 连接 $0$ 到 $m+n$，故  
$$
\phi(m+n) = \langle \pi \circ \gamma_{m+n} \rangle = \langle \pi \circ (\gamma_m \cdot \sigma) \rangle = \langle (\pi \circ \gamma_m) \cdot (\pi \circ \sigma) \rangle = \phi(m) \cdot \phi(n).
$$

两个提升引理可得：
- **满射性**：对任意 $\langle \alpha \rangle \in \pi_1(S^1,1)$，提升 $\tilde{\alpha}$ 为 $\mathbb{R}$ 中从 $0$ 到某整数 $n$ 的路径，则 $\phi(n)=\langle \alpha \rangle$。
- **单射性**：若 $\phi(n)$ 为单位元，则存在从常值环路到 $\pi \circ \gamma_n$ 的同伦。提升该同伦可得 $\tilde{F}(1,1)=0$，从而 $n=0$。

因此 $\phi$ 是同构。


## 3. $n$ 维球面 $S^n$（$n \geq 2$）

### 定理 5.12（维数 ≥ 2 的球面单连通）  
当 $n \geq 2$ 时，$\pi_1(S^n)$ 为平凡群。

#### 证明

取 $S^n$ 上两点 $x, y$，令 $U = S^n \setminus \{x\}$，$V = S^n \setminus \{y\}$。则：
- $U$ 与 $V$ 均同胚于 $\mathbb{E}^n$，故单连通。
- 当 $n \geq 2$ 时，$U \cap V = S^n \setminus \{x,y\}$ 道路连通。
- 对任意基点 $p \in U \cap V$ 及环路 $\alpha$，利用勒贝格引理将 $\alpha$ 分割为若干小段，每段完全落在 $U$ 或 $V$ 中。通过在 $U \cap V$ 中选取辅助路径，可将 $\alpha$ 表示为一系列完全位于 $U$ 或 $V$ 中的环路的乘积。由于 $U$ 和 $V$ 单连通，每个因子零伦，故 $\alpha$ 零伦。

因此 $S^n$（$n \geq 2$）单连通。

## 4. 轨道空间的基本群

### 定理 5.13（轨道空间的基本群）  
设 $G$ 为同胚群，作用于单连通空间 $X$，且满足：对任意 $x \in X$，存在邻域 $U$ 使得对所有 $g \in G \setminus \{e\}$ 有 $U \cap g(U) = \varnothing$。则轨道空间 $X/G$ 的基本群同构于 $G$：$\pi_1(X/G) \cong G$。

#### 证明

取基点 $x_0 \in X$，令 $\pi: X \to X/G$ 为自然投影。对 $g \in G$，取 $X$ 中连接 $x_0$ 与 $g(x_0)$ 的路径 $\gamma_g$（$X$ 单连通确保路径在同伦意义下唯一）。定义  
$$
\phi: G \to \pi_1(X/G, \pi(x_0)), \quad \phi(g) = \langle \pi \circ \gamma_g \rangle.
$$  
验证 $\phi$ 为同态。条件 $U \cap g(U)=\varnothing$ 保证 $\pi$ 是覆叠映射，从而可应用提升引理：
- **满射**：对 $X/G$ 中任意环路 $\alpha$，存在提升 $\tilde{\alpha}$ 为 $X$ 中从 $x_0$ 到某点 $g(x_0)$ 的路径，则 $\phi(g)=\langle \alpha \rangle$。
- **单射**：若 $\phi(g)$ 为单位元，则存在 $\pi \circ \gamma_g$ 到常值环路的同伦，提升该同伦可得 $g(x_0)=x_0$，由作用自由性得 $g=e$。

故 $\phi$ 为同构。


## 例

1. **环面 $T$**  
   取 $X=\mathbb{E}^2$，$G=\mathbb{Z} \times \mathbb{Z}$ 通过平移作用。$X$ 单连通，作用满足定理条件，轨道空间为环面，故 $\pi_1(T) \cong \mathbb{Z} \times \mathbb{Z}$。

2. **实射影空间 $P^n$（$n \geq 2$）**  
   取 $X=S^n$，$G=\mathbb{Z}_2$ 通过对径点作用。当 $n \geq 2$ 时 $S^n$ 单连通，作用满足定理条件，故 $\pi_1(P^n) \cong \mathbb{Z}_2$。

3. **透镜空间 $L(p,q)$**  
   取 $X=S^3$，$G=\mathbb{Z}_p$ 通过特定旋转作用（见第4.4节例6）。$S^3$ 单连通，作用满足定理条件，故 $\pi_1(L(p,q)) \cong \mathbb{Z}_p$。


## 非阿贝尔基本群的例子

基本群不一定交换。例如，考虑群 $G = \langle t, u \mid u^{-1} t u = t^{-1} \rangle$（这是一个非交换群）在平面上的适当作用，其轨道空间的基本群即为 $G$。

环面的基本群也可由定理5.13得到，同时该定理也表明当 $m,n \geq 2$ 时，$\pi_1(S^m \times S^n)$ 是平凡群（因为 $S^m \times S^n$ 单连通）。


# Van Kampen 定理
## 局部道路连通性

在讨论 Van Kampen 定理之前，需要引入**局部道路连通性**的概念。

**定义（局部道路连通）**  
拓扑空间 $X$ 称为在点 $x \in X$ 处**局部道路连通**，如果对于 $x$ 的任意邻域 $U$，存在 $x$ 的一个道路连通邻域 $V$ 使得 $V \subseteq U$。若 $X$ 在每一点都局部道路连通，则称 $X$ 为**局部道路连通空间**。

局部道路连通性与道路连通性有本质的区别。
存在道路连通但不局部道路连通的空间，例如一组同起点的射线集合，这是道路连通的，但在除起点外的任何点处都不局部道路连通。
存在局部道路连通但不道路连通的空间，例如两个不相交的圆周的并集，在每一点处都局部道路连通，但整体不道路连通。

对于基本群的计算，局部道路连通性保证了开子集的基本群可以自然地嵌入到整个空间的基本群中，这是 Van Kampen 定理有效应用的关键条件之一。

## 群的自由积与 amalgamated product

Van Kampen 定理的代数部分涉及群的构造。

### 自由积

设 $\{G_\lambda\}_{\lambda \in \Lambda}$ 是一族群。它们的**自由积** $\ast_{\lambda} G_\lambda$ 定义如下：
- 作为集合，它由所有有限长的**字**组成，每个字形如 $g_1 g_2 \cdots g_k$，其中相邻字母 $g_i$ 和 $g_{i+1}$ 属于不同的 $G_\lambda$，且每个 $g_i$ 是所在群 $G_{\lambda_i}$ 的非单位元。
- 乘法通过字的拼接与约化得到：若相邻字母属于同一群，则将其相乘（若结果为幺元则消去）。
- 单位元是空字。

自由积是包含每个 $G_\lambda$ 作为子群的“最自由”的群，且满足泛性质：以下的图是交换的
$$\begin{CD}
G_\lambda @>i_\lambda>> \ast_{\lambda} G_\lambda \\
@V f_\lambda VV @VV \exists ! f V \\
H @= H
\end{CD}$$
其中 $i_\lambda$ 为自然包含映射，$f_\lambda: G_\lambda \to H$ 为任意群同态。则存在唯一同态 $f: \ast_{\lambda} G_\lambda \to H$ 使得 $f \circ i_\lambda = f_\lambda$ 对所有 $\lambda$ 成立。

!!! note 直观理解
    群的自由积可以看作是将多个群“拼接”在一起，形成一个新的群，其中每个原始群的元素都保留其独立性。例如，考虑两个群 $G_1$ 和 $G_2$。它们的自由积 $G_1 \ast G_2$ 包含所有可能的有限序列，这些序列由 $G_1$ 和 $G_2$ 的元素交替组成，且相邻元素不来自同一个群。通过这种方式，自由积允许我们在新的群中自由地组合原始群的元素，而不引入额外的关系或约束。

### 含幺元的自由积的商（amalgamated product）

设 $G_1, G_2$ 为群，$A$ 为另一个群，并给定同态 $\phi_1: A \to G_1$ 和 $\phi_2: A \to G_2$。**amalgamated product** $G_1 \ast_A G_2$ 定义为自由积 $G_1 \ast G_2$ 模去由关系 $\phi_1(a) = \phi_2(a)$（对所有 $a \in A$）生成的正规子群所得的商群。直观上，这是将 $G_1$ 和 $G_2$ 沿着公共子群 $A$ 粘合得到的群。

当 $A$ 是 $G_1$ 和 $G_2$ 的公共子群且嵌入映射为包含时，记作 $G_1 \ast_A G_2$，称为**沿着 $A$ 的 amalgamated product**。

!!! note 直观理解
    amalgamated product 可以看作是将两个群“粘合”在一起，通过一个公共的子群 $A$ 来实现这种粘合。想象有两个群 $G_1$ 和 $G_2$，它们都包含一个相同的子群 $A$。通过 amalgamated product，我们将 $G_1$ 和 $G_2$ 结合在一起，同时确保它们在子群 $A$ 上的一致性。这意味着，在新的群中，来自 $G_1$ 和 $G_2$ 的元素在 $A$ 上是相等的，从而形成一个更大的结构，同时保留了原始群的某些特性。

## Van Kampen 定理

Van Kampen 定理提供了计算基本群的有效工具，当空间可分解为若干开子集的并时，其基本群可由这些子集的基本群通过自由积或 amalgamated product 表达。

### 定理 5.14（Seifert–Van Kampen 定理）

设 $X$ 为拓扑空间，$U_1, U_2$ 是 $X$ 的开子集，满足：
1. $X = U_1 \cup U_2$；
2. $U_1, U_2, U_1 \cap U_2$ 均为道路连通；
3. $U_1, U_2, U_1 \cap U_2$ 均为局部道路连通。

取基点 $x_0 \in U_1 \cap U_2$。记包含映射为：
- $i_k: U_1 \cap U_2 \hookrightarrow U_k$（$k=1,2$）
- $j_k: U_k \hookrightarrow X$（$k=1,2$）

设 $i_{k*}: \pi_1(U_1 \cap U_2, x_0) \to \pi_1(U_k, x_0)$ 和 $j_{k*}: \pi_1(U_k, x_0) \to \pi_1(X, x_0)$ 为诱导同态。

则 $\pi_1(X, x_0)$ 同构于 amalgamated product：
$$
\pi_1(X, x_0) \cong \pi_1(U_1, x_0) \ast_{\pi_1(U_1 \cap U_2, x_0)} \pi_1(U_2, x_0),
$$
即 $\pi_1(U_1, x_0)$ 与 $\pi_1(U_2, x_0)$ 的自由积模去关系：对于所有 $\gamma \in \pi_1(U_1 \cap U_2, x_0)$，有 $i_{1*}(\gamma) = i_{2*}(\gamma)$。

等价地，$\pi_1(X, x_0)$ 由生成元集 $\pi_1(U_1, x_0) \cup \pi_1(U_2, x_0)$ 及关系集 $\{i_{1*}(\gamma) = i_{2*}(\gamma) \mid \gamma \in \pi_1(U_1 \cap U_2, x_0)\}$ 定义。

!!! note 直观理解
    1. 诱导同态：包含映射 $i_k$ 和 $j_k$ 诱导了基本群之间的同态，这些同态反映了子空间的基本群如何嵌入到更大的空间中。例如，对于 $i_{k*}$，它将 $U_1 \cap U_2$ 的基本群映射到 $U_k$ 的基本群，反映了在包含过程中环路的变化。
    2. 自由积与 amalgamated product：Van Kampen 定理表明，整个空间 $X$ 的基本群可以通过子空间 $U_1$ 和 $U_2$ 的基本群的自由积来构造，但需要考虑它们在交集 $U_1 \cap U_2$ 上的一致性。

## Van Kampen 定理的证明
**第一步：构造同态 $\Phi: G \to \pi_1(X, x_0)$**

由自由积的泛性质，存在同态 $\phi: G_1 \ast G_2 \to \pi_1(X, x_0)$，使得 $\phi|_{G_1} = j_{1*}$，$\phi|_{G_2} = j_{2*}$。对任意 $h \in H$，
$$
\phi(i_{1*}(h)) = j_{1*}(i_{1*}(h)) = (j_1 \circ i_1)_*(h), \quad
\phi(i_{2*}(h)) = j_{2*}(i_{2*}(h)) = (j_2 \circ i_2)_*(h).
$$
由于 $j_1 \circ i_1 = j_2 \circ i_2$（均为包含映射 $U_1 \cap U_2 \hookrightarrow X$），故 $(j_1 \circ i_1)_*(h) = (j_2 \circ i_2)_*(h)$。因此 $\phi$ 将关系 $i_{1*}(h) i_{2*}(h)^{-1}$ 映为 $1$，从而诱导同态
$$
\Phi: G \to \pi_1(X, x_0).
$$

**第二步：证明 $\Phi$ 是满射**

设 $[f] \in \pi_1(X, x_0)$，其中 $f: I \to X$ 为基于 $x_0$ 的环路。由于 $\{U_1, U_2\}$ 是 $X$ 的开覆盖，由 Lebesgue 引理，存在分割
$$
0 = t_0 < t_1 < \cdots < t_n = 1,
$$
使得每个区间 $[t_{i-1}, t_i]$ 的像包含于某个 $U_k$（$k=1$ 或 $2$）。通过细分，可假设相邻区间落在不同的 $U_k$ 中（否则合并），且每个端点 $f(t_i) \in U_1 \cap U_2$（因为相邻区间像分属不同开集时，公共端点必在交集中；而 $f(0)=f(1)=x_0 \in U_1 \cap U_2$）。

对每个 $i = 1, \dots, n-1$，选取道路 $\gamma_i: I \to U_1 \cap U_2$ 使得 $\gamma_i(0)=x_0$，$\gamma_i(1)=f(t_i)$（利用 $U_1 \cap U_2$ 的道路连通性）。令 $\gamma_0$ 和 $\gamma_n$ 为常道路 $c_{x_0}$。

定义道路段 $f_i = f|_{[t_{i-1}, t_i]}$，其像包含于 $U_{k_i}$（$k_i=1$ 或 $2$）。构造环路
$$
\alpha_i = \gamma_{i-1} \cdot f_i \cdot \overline{\gamma_i}: I \to U_{k_i},
$$
其中 $\cdot$ 表示道路连接，$\overline{\gamma_i}$ 为 $\gamma_i$ 的逆。则 $\alpha_i$ 是基于 $x_0$ 的环路，且完全位于 $U_{k_i}$ 中，故 $[\alpha_i] \in \pi_1(U_{k_i}, x_0)$。

考虑 $G$ 中的元素 $g = [\alpha_1] [\alpha_2] \cdots [\alpha_n]$（乘积在 $G$ 中计算）。计算 $\Phi(g)$：
$$
\Phi(g) = j_{k_1*}([\alpha_1]) \cdot j_{k_2*}([\alpha_2]) \cdots j_{k_n*}([\alpha_n]) \in \pi_1(X, x_0).
$$
在 $X$ 中，
$$
\alpha_1 \cdot \alpha_2 \cdots \alpha_n
= (\gamma_0 \cdot f_1 \cdot \overline{\gamma_1}) \cdot (\gamma_1 \cdot f_2 \cdot \overline{\gamma_2}) \cdots (\gamma_{n-1} \cdot f_n \cdot \overline{\gamma_n})
\sim \gamma_0 \cdot f_1 \cdot f_2 \cdots f_n \cdot \overline{\gamma_n}
= c_{x_0} \cdot f \cdot c_{x_0}
\sim f.
$$
因此 $\Phi(g) = [f]$，故 $\Phi$ 是满射。

**第三步：证明 $\Phi$ 是单射**

设 $g \in G$ 满足 $\Phi(g) = 1$。将 $g$ 表示为字
$$
w = g_1 g_2 \cdots g_m,
$$
其中每个 $g_\nu$ 属于 $G_1$ 或 $G_2$，且相邻字母来自不同的群（否则可合并）。则存在基于 $x_0$ 的环路 $f: I \to X$ 使得 $[f] = \Phi(g)$，且存在同伦 $F: I \times I \to X$ 满足
$$
F(t,0) = f(t),\quad F(t,1) = x_0,\quad F(0,s)=F(1,s)=x_0,
$$
即 $F$ 是 $f$ 到常道路的零伦。

**构造网格分割：**  
由于 $\{U_1, U_2\}$ 是开覆盖，由 Lebesgue 引理，存在分割
$$
0 = t_0 < t_1 < \cdots < t_p = 1, \quad 0 = s_0 < s_1 < \cdots < s_q = 1,
$$
使得每个小矩形 $R_{ij} = [t_{i-1}, t_i] \times [s_{j-1}, s_j]$ 的像 $F(R_{ij})$ 包含于某个 $U_k$（记作 $U_{k_{ij}}$）。通过进一步细分，可要求每个顶点 $F(t_i, s_j) \in U_1 \cap U_2$（利用 $U_1 \cap U_2$ 是开集且 $F$ 连续）。

**选择顶点道路：**  
对每个顶点 $(t_i, s_j)$，选取道路 $\gamma_{ij}: I \to U_1 \cap U_2$ 使得 $\gamma_{ij}(0)=x_0$，$\gamma_{ij}(1)=F(t_i,s_j)$，且满足：
- 对于角点：$\gamma_{00}$ 和 $\gamma_{p0}$ 取常道路 $c_{x_0}$（因为 $F(0,0)=x_0$，$F(1,0)=x_0$）；
- 对于底边顶点 $(t_i, 0)$，可调整 $\gamma_{i0}$ 使得它们与 $g$ 的表示相容（详见后文）；
- 对于顶边 $s=q$，因 $F(t,1)=x_0$，取所有 $\gamma_{i,q} = c_{x_0}$；
- 对于侧边 $t=0$ 和 $t=p$，因 $F(0,s)=F(1,s)=x_0$，取 $\gamma_{0j} = \gamma_{pj} = c_{x_0}$。

**定义边对应的群元素：**  
对于水平边 $e_{ij} = [t_{i-1}, t_i] \times \{s_j\}$，定义
$$
a_{ij} = [\gamma_{i-1,j} \cdot F|_{e_{ij}} \cdot \overline{\gamma_{i,j}}] \in \pi_1(U_{k_{ij}}, x_0),
$$
其中 $U_{k_{ij}}$ 包含 $F(e_{ij})$。类似地，对于垂直边 $f_{ij} = \{t_i\} \times [s_{j-1}, s_j]$，定义
$$
b_{ij} = [\gamma_{i,j-1} \cdot F|_{f_{ij}} \cdot \overline{\gamma_{i,j}}] \in \pi_1(U_{k_{ij}}, x_0).
$$

**小矩形关系：**  
考虑小矩形 $R_{ij}$，其边界环路（基于 $x_0$）为
$$
\alpha_{ij} = \gamma_{i-1,j-1} \cdot F|_{\partial R_{ij}} \cdot \overline{\gamma_{i-1,j-1}},
$$
其中 $\partial R_{ij}$ 为逆时针方向。由于 $F(R_{ij}) \subset U_{k_{ij}}$，且顶点在 $U_1 \cap U_2 \subset U_{k_{ij}}$，环路 $\alpha_{ij}$ 完全位于 $U_{k_{ij}}$ 中。又因 $R_{ij}$ 可缩，$\alpha_{ij}$ 在 $U_{k_{ij}}$ 中零伦，故 $[\alpha_{ij}]=1$ 在 $\pi_1(U_{k_{ij}}, x_0)$ 中。

将 $\alpha_{ij}$ 用边元素表示：
$$
\alpha_{ij} \sim a_{i,j-1} \cdot b_{i,j} \cdot \overline{a_{i,j}} \cdot \overline{b_{i-1,j}}.
$$
因此得到关系
$$
a_{i,j-1} b_{i,j} = b_{i-1,j} a_{i,j} \quad \text{在 } \pi_1(U_{k_{ij}}, x_0) \text{ 中}.
$$
该关系在包含同态下也给出 $G$ 中的等式。

**底边与顶边：**  
适当选择底边道路 $\gamma_{i0}$，可使乘积
$$
a_{10} a_{20} \cdots a_{p0} = g \quad \text{在 } G \text{ 中}.
$$
对于顶边，因 $\gamma_{i,q}=c_{x_0}$ 且 $F(t,1)=x_0$，有 $a_{iq}=1$（平凡元素）。

**归纳变换：**  
从底行 $j=0$ 开始，利用关系式逐步将 $a_{i,j-1}$ 向上推进。具体地，对固定的 $j$，关系
$$
a_{i,j-1} b_{i,j} = b_{i-1,j} a_{i,j}
$$
允许在 $G$ 中将 $a_{i,j-1}$ 替换为 $b_{i-1,j} a_{i,j} b_{i,j}^{-1}$。通过一系列这样的操作（并利用侧边 $b_{0j}=b_{pj}=1$），可证明在 $G$ 中：
$$
a_{10} a_{20} \cdots a_{p0} = a_{1q} a_{2q} \cdots a_{pq} = 1 \cdot 1 \cdots 1 = 1.
$$
因此 $g=1$，故 $\Phi$ 是单射。


综上，$\Phi: G \to \pi_1(X, x_0)$ 是同构，即
$$
\pi_1(X, x_0) \cong \pi_1(U_1, x_0) \ast_{\pi_1(U_1 \cap U_2, x_0)} \pi_1(U_2, x_0).
$$


## 应用 Van Kampen 定理计算基本群的步骤

1. **空间分解**：将待计算空间 $X$ 表示为两个道路连通且局部道路连通的开子集 $U_1, U_2$ 的并，且 $U_1 \cap U_2$ 也道路连通。
2. **计算各子群**：分别计算 $\pi_1(U_1, x_0)$, $\pi_1(U_2, x_0)$ 和 $\pi_1(U_1 \cap U_2, x_0)$。
3. **确定诱导同态**：确定包含映射诱导的同态 $i_{1*}$ 和 $i_{2*}$。这通常涉及将 $U_1 \cap U_2$ 中的生成元映射到 $U_1$ 和 $U_2$ 中的对应元素。具体步骤包括：
   - 选取 $U_1 \cap U_2$ 中的生成元路径。
   - 在 $U_1$ 和 $U_2$ 中找到与这些路径同伦的路径表示。
   - 写出这些映射在基本群中的表达式。
4. **构造 amalgamated product**：写出生成元与关系，得到 $\pi_1(X, x_0)$ 的群表示。具体而言，$\pi_1(X, x_0)$ 由 $\pi_1(U_1, x_0)$ 和 $\pi_1(U_2, x_0)$ 的生成元组成，关系由 $i_{1*}(\gamma) = i_{2*}(\gamma)$（对所有 $\gamma \in \pi_1(U_1 \cap U_2, x_0)$）给出。

若 $U_1 \cap U_2$ 单连通（即基本群平凡），则关系部分消失，此时 $\pi_1(X, x_0)$ 就是 $\pi_1(U_1, x_0)$ 与 $\pi_1(U_2, x_0)$ 的自由积。

## 推论：交集单连通
**推论 5.15**  
设 $X$ 为拓扑空间，$U_1, U_2$ 为 $X$ 的开子集，满足：
1. $X = U_1 \cup U_2$；
2. $U_1, U_2$ 均为道路连通且局部道路连通；
3. $U_1 \cap U_2$ 单连通。
取基点 $x_0 \in U_1 \cap U_2$。则
$$
\pi_1(X, x_0) \cong \pi_1(U_1, x_0) \ast \pi_1(U_2, x_0).
$$


## 例子

### 例 1：两个圆环的并（交于一点）

设 $X = S^1 \vee S^1$ 为两个圆周在一点 $p$ 处粘合而成的“8”字形空间。取 $U_1$ 为包含第一个圆周及第二个圆周上不含 $p$ 的一个开弧的邻域，类似定义 $U_2$。则：
- $U_1$ 和 $U_2$ 均同伦等价于 $S^1$，故 $\pi_1(U_1) \cong \mathbb{Z}$，$\pi_1(U_2) \cong \mathbb{Z}$。
- $U_1 \cap U_2$ 是 contractible 的（可收缩到 $p$），故单连通。
因此，
$$
\pi_1(S^1 \vee S^1) \cong \mathbb{Z} \ast \mathbb{Z} = F_2,
$$
即两个生成元的自由群。

### 例 2：环面 $T$
取环面 $T^2$ 上一点 $x_0$，并构造两个开集：$U_1 = T^2 \setminus \{x_0\}$（环面去掉一点），$U_2$ 为包含 $x_0$ 的一个小开圆盘（同胚于 $\mathbb{R}^2$）。
计算基本群：
- $\pi_1(U_2, x_0)$：$U_2$ 可缩，故 $\pi_1(U_2, x_0) = 1$。
- $\pi_1(U_1, x_0)$：环面去掉一点可形变收缩到其 1-骨架，即两个生成圆周的楔和 $S^1 \vee S^1$，因此
$$\pi_1(U_1, x_0) \cong \langle a, b \rangle,$$
是一个自由群，生成元 $a$ 和 $b$ 分别对应经圆和纬圆。
- $\pi_1(U_1 \cap U_2, x_0)$：$U_1 \cap U_2$ 是穿孔圆盘，同伦等价于圆周，故
$$\pi_1(U_1 \cap U_2, x_0) \cong \mathbb{Z},$$
生成元 $\gamma$ 是围绕 $x_0$ 的小环路（逆时针方向）。

$i_1: U_1 \cap U_2 \hookrightarrow U_1$ 诱导 $i_{1*}: \mathbb{Z} \to \langle a, b \rangle$。
在 $U_1$ 中，围绕 $x_0$ 的小环路 $\gamma$ 同伦于换位子 $aba^{-1}b^{-1}$，因此
$$i_{1*}(\gamma) = aba^{-1}b^{-1}.$$

$i_2: U_1 \cap U_2 \hookrightarrow U_2$ 诱导 $i_{2*}: \mathbb{Z} \to 1$，故
$$i_{2*}(\gamma) = 1.$$

根据定理，有
$$\pi_1(T^2, x_0) \cong \pi_1(U_1, x_0) \ast_{\pi_1(U_1 \cap U_2, x_0)} \pi_1(U_2, x_0) = \langle a, b \rangle \ast_{\mathbb{Z}} 1,$$
其中 amalgamated 关系为：对任意 $\gamma \in \pi_1(U_1 \cap U_2, x_0)$，满足 $i_{1*}(\gamma) = i_{2*}(\gamma)$。即
$$aba^{-1}b^{-1} = 1.$$
因此，
$$\pi_1(T^2, x_0) \cong \langle a, b \mid aba^{-1}b^{-1} = 1 \rangle \cong \mathbb{Z} \times \mathbb{Z}.$$

### 例 3：克莱因瓶
克莱因瓶可表示为正方形 $[0,1] \times [0,1]$ 通过如下粘合得到的商空间：
$$(0, y) \sim (1, y), \quad (x, 0) \sim (1-x, 1).$$
取 $K$ 中一点 $p$，构造两个开集：
- $U_1 = K \setminus \{p\}$（克莱因瓶去掉一点），
- $U_2 = p$ 的一个小开圆盘邻域（同胚于 $\mathbb{R}^2$）。
计算基本群：
- $\pi_1(U_2, p) = 1$（$U_2$ 可缩）。
- $\pi_1(U_1, p)$：克莱因瓶去掉一点可形变收缩到其 1-骨架，即两个生成圆周的楔和 $S^1 \vee S^1$，因此
$$\pi_1(U_1, p) \cong \langle a, b \mid aba^{-1}b = 1 \rangle,$$
其中 $a$ 和 $b$ 分别对应克莱因瓶的两个基本循环。
- $\pi_1(U_1 \cap U_2, p) \cong \mathbb{Z}$，生成元 $\gamma$ 是围绕 $p$ 的小环路。

$i_1: U_1 \cap U_2 \hookrightarrow U_1$ 诱导 $i_{1*}: \mathbb{Z} \to \langle a, b \mid aba^{-1}b = 1 \rangle$。
在 $U_1$ 中，围绕 $p$ 的小环路 $\gamma$ 同伦于换位子 $aba^{-1}b^{-1}$，因此
$$i_{1*}(\gamma) = aba^{-1}b^{-1}.$$

$i_2: U_1 \cap U_2 \hookrightarrow U_2$ 诱导 $i_{2*}: \mathbb{Z} \to 1$，故
$$i_{2*}(\gamma) = 1.$$

根据定理，有
$$\pi_1(K, p) \cong \pi_1(U_1, p) \ast_{\pi_1(U_1 \cap U_2, p)} \pi_1(U_2, p) = \langle a, b \mid aba^{-1}b = 1 \rangle \ast_{\mathbb{Z}} 1,$$
其中 amalgamated 关系为：对任意 $\gamma \in \pi_1(U_1 \cap U_2, p)$，满足 $i_{1*}(\gamma) = i_{2*}(\gamma)$。即
$$aba^{-1}b^{-1} = 1.$$因此，
$$\pi_1(K, p) \cong \langle a, b \mid aba^{-1}b = 1, aba^{-1}b^{-1} = 1 \rangle \cong \langle a, b \mid aba^{-1}b = 1 \rangle,$$
即克莱因瓶的基本群。

### 例 4：n 个圆周的 wedge sum

设 $X = \bigvee_{i=1}^n S^1$ 为 $n$ 个圆周在一点处粘合。类似例1的分解可得
$$
\pi_1(X) \cong \ast_{i=1}^n \mathbb{Z} = F_n,
$$
即 $n$ 个生成元的自由群。

### 例 5：射影平面 $P^2$

射影平面可视为将圆周的对径点等同。另一种描述：$P^2$ 是莫比乌斯带的边界粘上一个圆盘。利用 Van Kampen 定理，取 $U_1$ 为莫比乌斯带，$U_2$ 为圆盘。则：
- $U_1$ 的基本群为 $\mathbb{Z}$（莫比乌斯带收缩到中心圆周）。
- $U_2$ 单连通。
- $U_1 \cap U_2$ 同伦等价于圆周（边界），其基本群为 $\mathbb{Z}$。
- 包含映射 $i_{1*}: \pi_1(U_1 \cap U_2) \to \pi_1(U_1)$ 将生成元映为 2 倍生成元（因为莫比乌斯带边界绕中心两周），而 $i_{2*}$ 将生成元映为平凡元。
因此，
$$
\pi_1(P^2) \cong \langle a \mid a^2 = 1 \rangle \cong \mathbb{Z}_2.
$$
