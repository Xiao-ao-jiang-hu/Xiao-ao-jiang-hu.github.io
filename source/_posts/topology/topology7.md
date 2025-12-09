---
title: Ch5.1 同伦和基本群
tags:
  - math
  - topology
categories:
  - math
  - topology
index_img: /img/topology.jpg
banner_img: /img/topology.jpg
excerpt: 拓扑学笔记
date: 2024-10-24 10:53:12
---
# 5.1 同伦映射

基本群的定义依赖于从基点出发并返回的环路集合。更一般地，我们考虑映射之间的连续形变，即同伦。

**定义 5.1（同伦）**  
设 $f, g: X \to Y$ 为拓扑空间之间的映射。若存在连续映射 $F: X \times I \to Y$ 使得对所有 $x \in X$ 有 $F(x,0) = f(x)$ 和 $F(x,1) = g(x)$，则称 $f$ **同伦于** $g$，记作 $f \simeq g$。映射 $F$ 称为从 $f$ 到 $g$ 的同伦。

若 $f$ 和 $g$ 在子集 $A \subseteq X$ 上相等，且同伦 $F$ 满足 $F(a,t) = f(a)$ 对所有 $a \in A$ 和 $t \in I$ 成立，则称 $f$ **相对于 $A$** 同伦于 $g$，记作 $f \simeq g \text{ rel } A$。

特别地，对于以点 $p$ 为基点的环路 $\alpha, \beta: I \to X$，若存在相对于 $\{0,1\}$ 的同伦，则称环路 $\alpha$ 和 $\beta$ 保持基点同伦。

## 同伦的实例

1. **凸集上的直线同伦**  
   设 $C$ 是欧几里得空间的凸子集，$f, g: X \to C$ 为映射。定义 $F(x,t) = (1-t)f(x) + t g(x)$，则 $F$ 是从 $f$ 到 $g$ 的同伦。若 $f$ 和 $g$ 在子集 $A \subseteq X$ 上相等，则此同伦是相对于 $A$ 的。

2. **球面映射的同伦**  
   设 $f, g: X \to S^n$ 为映射，且对任意 $x \in X$，$f(x)$ 与 $g(x)$ 不是对径点。将 $S^n$ 视为 $\mathbb{E}^{n+1}$ 中的单位球面，定义  
   $$
   F(x,t) = \frac{(1-t)f(x) + t g(x)}{\| (1-t)f(x) + t g(x) \|},
   $$
   则 $F$ 是从 $f$ 到 $g$ 的同伦。

3. **单位圆周上的环路同伦**  
   考虑 $S^1 \subset \mathbb{C}$ 中以点 $1$ 为基点的两个环路 $\alpha$ 和 $\beta$：
   - 环路 $\alpha$ 分三段：  
     - 在区间 $[0, \frac{1}{2}]$ 上逆时针绕圆周一圈；  
     - 在区间 $[\frac{1}{2}, \frac{3}{4}]$ 上逆时针绕圆周一圈；  
     - 在区间 $[\frac{3}{4}, 1]$ 上顺时针绕圆周一圈。  
   - 环路 $\beta$ 在整个区间 $[0,1]$ 上逆时针绕圆周一圈。  
   存在相对于 $\{0,1\}$ 的同伦 $F: I \times I \to S^1$，其表达式为  
   $$
   F(s,t) = 
   \begin{cases}
   \exp\left( \dfrac{4\pi i s}{t+1} \right), & 0 \leq s \leq \dfrac{t+1}{2}, \\
   \exp\bigl( 4\pi i (2s - 1 - t) \bigr), & \dfrac{t+1}{2} \leq s \leq \dfrac{t+3}{4}, \\
   \exp\bigl( 8\pi i (1-s) \bigr), & \dfrac{t+3}{4} \leq s \leq 1.
   \end{cases}
   $$  
   该同伦连续，且保持基点不变。

## 同伦的基本性质

**引理 5.2**  
同伦关系 $\simeq$ 是从拓扑空间 $X$ 到 $Y$ 的所有映射集合上的等价关系。

**证明概要**  
- 自反性：取常值同伦 $F(x,t) = f(x)$。  
- 对称性：若 $F$ 是 $f$ 到 $g$ 的同伦，则 $G(x,t) = F(x,1-t)$ 给出 $g$ 到 $f$ 的同伦。  
- 传递性：若 $F$ 连接 $f$ 与 $g$，$G$ 连接 $g$ 与 $h$，则  
  $$
  H(x,t) = 
  \begin{cases}
  F(x,2t), & 0 \leq t \leq \frac{1}{2}, \\
  G(x,2t-1), & \frac{1}{2} \leq t \leq 1,
  \end{cases}
  $$
  连接 $f$ 与 $h$。

**引理 5.3**  
相对于子集 $A \subseteq X$ 的同伦关系是所有在 $A$ 上取相同值的映射集合上的等价关系。

**证明**  
在引理 5.2 的构造中，若所有映射在 $A$ 上一致且同伦保持 $A$ 不动，则所得同伦也是相对于 $A$ 的。

**引理 5.4（同伦与复合的相容性）**  
同伦在映射复合下保持良好。具体而言：  
1. 若 $f, g: X \to Y$ 满足 $f \simeq g \text{ rel } A$，且 $h: Y \to Z$ 连续，则  
   $$
   h \circ f \simeq h \circ g \text{ rel } A.
   $$  
2. 若 $f: X \to Y$ 连续，且 $g, h: Y \to Z$ 满足 $g \simeq h \text{ rel } B$ 对于某子集 $B \subseteq Y$，则  
   $$
   g \circ f \simeq h \circ f \text{ rel } f^{-1}(B).
   $$

**证明**  
1. 若 $F$ 是连接 $f$ 与 $g$ 的同伦，则 $H(x,t) = h(F(x,t))$ 连接 $h \circ f$ 与 $h \circ g$，且在 $A$ 上保持不变。  
2. 若 $G$ 是连接 $g$ 与 $h$ 的同伦，则 $H(x,t) = G(f(x),t)$ 连接 $g \circ f$ 与 $h \circ f$，且在 $f^{-1}(B)$ 上保持不变。


# 5.2 基本群

## 同伦类与乘法

设 $X$ 为拓扑空间，选定基点 $p \in X$。考虑所有以 $p$ 为基点的环路 $\alpha: I \to X$ 的集合。如5.1节所述，相对于 $\{0,1\}$ 的同伦关系是该集合上的等价关系。环路 $\alpha$ 所在的等价类称为**同伦类**，记作 $\langle \alpha \rangle$。

定义同伦类之间的乘法为：

$$
\langle \alpha \rangle \cdot \langle \beta \rangle = \langle \alpha \cdot \beta \rangle
$$

其中 $\alpha \cdot \beta$ 为环路的乘积：

$$
(\alpha \cdot \beta)(s) = 
\begin{cases}
\alpha(2s), & 0 \leq s \leq \frac{1}{2}, \\
\beta(2s-1), & \frac{1}{2} \leq s \leq 1.
\end{cases}
$$

此乘法良定义：若 $\alpha' \simeq \alpha \text{ rel } \{0,1\}$ 且 $\beta' \simeq \beta \text{ rel } \{0,1\}$，则存在同伦 $H: I \times I \to X$ 使得

$$
H(s,t) = 
\begin{cases}
F(2s, t), & 0 \leq s \leq \frac{1}{2}, \\
G(2s-1, t), & \frac{1}{2} \leq s \leq 1,
\end{cases}
$$

其中 $F, G$ 分别为连接 $\alpha'$ 与 $\alpha$、$\beta'$ 与 $\beta$ 的同伦。由粘合引理保证连续性，故 $\alpha' \cdot \beta' \simeq \alpha \cdot \beta \text{ rel } \{0,1\}$。

## 定理 5.5：基本群的群结构

以点 $p$ 为基点的环路同伦类集合在上述乘法下构成一个群，称为空间 $X$ 在基点 $p$ 处的**基本群**，记作 $\pi_1(X, p)$。

### 证明

以下验证群公理，其中 $\alpha, \beta, \gamma$ 均为以 $p$ 为基点的环路。

1. **结合律**：需证 $(\alpha \cdot \beta) \cdot \gamma \simeq \alpha \cdot (\beta \cdot \gamma) \text{ rel } \{0,1\}$。  
   注意到 $(\alpha \cdot \beta) \cdot \gamma = [\alpha \cdot (\beta \cdot \gamma)] \circ f$，其中 $f: I \to I$ 定义为
   $$
   f(s) = 
   \begin{cases}
   2s, & 0 \leq s \leq \frac{1}{4}, \\
   s + \frac{1}{4}, & \frac{1}{4} \leq s \leq \frac{1}{2}, \\
   \frac{s+1}{2}, & \frac{1}{2} \leq s \leq 1.
   \end{cases}
   $$
   由于 $I$ 凸且 $f(0)=0, f(1)=1$，存在相对于 $\{0,1\}$ 的直线同伦连接 $f$ 与恒等映射 $1_I$。由引理5.4得
   $$
   (\alpha \cdot \beta) \cdot \gamma \simeq [\alpha \cdot (\beta \cdot \gamma)] \circ 1_I = \alpha \cdot (\beta \cdot \gamma) \quad \text{rel } \{0,1\}.
   $$
   故 $\langle \alpha \cdot \beta \rangle \cdot \langle \gamma \rangle = \langle \alpha \rangle \cdot \langle \beta \cdot \gamma \rangle$。

2. **单位元**：取常值环路 $e(s)=p$ 的同伦类 $\langle e \rangle$。  
   验证 $\langle e \rangle \cdot \langle \alpha \rangle = \langle \alpha \rangle$：  
   $e \cdot \alpha = \alpha \circ f$，其中 $f: I \to I$ 满足
   $$
   f(s) = 
   \begin{cases}
   0, & 0 \leq s \leq \frac{1}{2}, \\
   2s-1, & \frac{1}{2} \leq s \leq 1.
   \end{cases}
   $$
   由于 $f \simeq 1_I \text{ rel } \{0,1\}$，故 $e \cdot \alpha \simeq \alpha \text{ rel } \{0,1\}$。  
   同理可证 $\langle \alpha \rangle \cdot \langle e \rangle = \langle \alpha \rangle$。

3. **逆元**：定义 $\alpha^{-1}(s) = \alpha(1-s)$，则 $\langle \alpha^{-1} \rangle$ 为 $\langle \alpha \rangle$ 的逆元。  
   验证 $\alpha \cdot \alpha^{-1} \simeq e \text{ rel } \{0,1\}$：  
   $\alpha \cdot \alpha^{-1} = \alpha \circ f$，其中
   $$
   f(s) = 
   \begin{cases}
   2s, & 0 \leq s \leq \frac{1}{2}, \\
   2-2s, & \frac{1}{2} \leq s \leq 1.
   \end{cases}
   $$
   注意到 $f(0)=f(1)=0$，存在相对于 $\{0,1\}$ 的同伦连接 $f$ 与常值映射 $g(s)=0$，从而 $\alpha \cdot \alpha^{-1} \simeq \alpha \circ g = e$。  
   同理可证 $\alpha^{-1} \cdot \alpha \simeq e$。

综上，$\pi_1(X, p)$ 构成群。


## 基点无关性

对于道路连通空间，基本群在同构意义下不依赖于基点选择。

### 定理 5.6

若 $X$ 道路连通，则对任意两点 $p, q \in X$，群 $\pi_1(X, p)$ 与 $\pi_1(X, q)$ 同构。

#### 证明

选取道路 $\gamma: I \to X$ 满足 $\gamma(0)=p, \gamma(1)=q$。定义映射 $\gamma_*: \pi_1(X, p) \to \pi_1(X, q)$ 为
$$
\gamma_*(\langle \alpha \rangle) = \langle \gamma^{-1} \cdot \alpha \cdot \gamma \rangle,
$$
其中 $\gamma^{-1}(s) = \gamma(1-s)$，且 $\gamma^{-1} \cdot \alpha \cdot \gamma$ 表示道路的复合（先沿 $\gamma^{-1}$ 从 $q$ 到 $p$，再沿环路 $\alpha$ 绕行，最后沿 $\gamma$ 返回 $q$）。利用以下关于道路同伦的性质可证 $\gamma_*$ 为同构：

1. 若 $\gamma \simeq \gamma' \text{ rel } \{0,1\}$ 且 $\sigma \simeq \sigma' \text{ rel } \{0,1\}$，则 $\gamma \cdot \sigma \simeq \gamma' \cdot \sigma' \text{ rel } \{0,1\}$。
2. 对满足端点衔接的三条道路 $\gamma, \sigma, \delta$，有 $(\gamma \cdot \sigma) \cdot \delta \simeq \gamma \cdot (\sigma \cdot \delta) \text{ rel } \{0,1\}$。
3. $\gamma \cdot \gamma^{-1} \simeq e_p \text{ rel } \{0,1\}$，其中 $e_p$ 为点 $p$ 处的常值道路；同理 $\gamma^{-1} \cdot \gamma \simeq e_q$。

由此可验证 $\gamma_*$ 为同态且具有逆 $(\gamma^{-1})_*$，故为同构。

因此，对道路连通空间 $X$，可记其基本群为 $\pi_1(X)$，意指在同构意义下唯一确定。


## 连续映射诱导的同态

连续映射诱导基本群间的同态，且该构造具有函子性。

### 定理 5.7

设 $f: X \to Y$ 连续，取基点 $p \in X$，记 $q = f(p)$。则 $f$ 诱导同态
$$
f_*: \pi_1(X, p) \to \pi_1(Y, q), \quad f_*(\langle \alpha \rangle) = \langle f \circ \alpha \rangle.
$$

进一步，若另有连续映射 $g: Y \to Z$ 及基点 $r = g(q)$，则有
$$
(g \circ f)_* = g_* \circ f_*.
$$

#### 证明

首先验证 $f_*$ 良定且为同态：  
若 $\alpha \simeq \beta \text{ rel } \{0,1\}$，则 $f \circ \alpha \simeq f \circ \beta \text{ rel } \{0,1\}$（引理5.4）。且
$$
f \circ (\alpha \cdot \beta) = (f \circ \alpha) \cdot (f \circ \beta),
$$
故 $f_*(\langle \alpha \rangle \cdot \langle \beta \rangle) = f_*(\langle \alpha \rangle) \cdot f_*(\langle \beta \rangle)$。

对于复合映射，直接计算：
$$
(g \circ f)_*(\langle \alpha \rangle) = \langle (g \circ f) \circ \alpha \rangle = \langle g \circ (f \circ \alpha) \rangle = g_*(\langle f \circ \alpha \rangle) = (g_* \circ f_*)(\langle \alpha \rangle).
$$

特别地，若 $h: X \to Y$ 为同胚，则 $h_*: \pi_1(X, p) \to \pi_1(Y, h(p))$ 为同构，其逆为 $(h^{-1})_*$。因此，同胚的道路连通空间具有同构的基本群。
