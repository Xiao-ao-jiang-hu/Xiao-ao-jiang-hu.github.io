---
title: Ch7.5 胞腔同调
tags:
  - math
  - topology
categories:
  - math
  - topology
index_img: /img/topology.jpg
banner_img: /img/topology.jpg
excerpt: 拓扑学笔记
date: 2024-12-10 20:56:39
---
胞腔同调是一种在 CW 复形上计算同调的工具。与奇异同调相比，其链复形通常小得多，便于具体计算。本节首先说明 CW 复形的基本概念，然后构造胞腔链复形，证明它与奇异同调的等价性，并通过典型例子展示其应用。

### **1. CW 复形回顾**

CW 复形通过将不同维数的“胞腔”逐步粘合来构造拓扑空间，兼具一般性与组合简洁性。其名称来源于“闭有限性”（closure finite）与“弱拓扑”（weak topology）。

#### **1.1 胞腔与骨架**

**定义 5.1.1（CW 复形）**  
一个 **CW 复形** $X$ 是一个 Hausdorff 空间，带有一列递增的 **骨架**（skeletons）：
$$
X^0 \subseteq X^1 \subseteq X^2 \subseteq \cdots \subseteq X = \bigcup_{n \geq 0} X^n,
$$
满足以下条件：

1. **0-骨架** $X^0$ 是一个离散点集（0-胞腔）。
2. **归纳构造**：对每个 $n \geq 1$，存在一族 $n$ 维闭圆盘 $\{D_\alpha^n\}_\alpha$ 和 **附着映射** $\varphi_\alpha: \partial D_\alpha^n = S_\alpha^{n-1} \to X^{n-1}$。将 $X^{n-1}$ 与所有 $D_\alpha^n$ 的不交并按等价关系 $x \sim \varphi_\alpha(x)$（$x \in \partial D_\alpha^n$）粘合，得到 $n$-骨架：
   $$
   X^n = \left( X^{n-1} \sqcup \bigsqcup_\alpha D_\alpha^n \right) / \sim.
   $$
   每个 $D_\alpha^n$ 在商映射下的像称为一个 **开 $n$-胞腔**，记作 $e_\alpha^n$，同胚于开圆盘 $\mathring{D}^n$。
3. **闭有限性**：每个胞腔的闭包只与有限多个其他胞腔相交。
4. **弱拓扑**：子集 $A \subseteq X$ 是闭的当且仅当对每个胞腔 $e_\alpha^n$，$A \cap \overline{e_\alpha^n}$ 是闭的。

若存在 $N$ 使得 $X = X^N$ 且 $X^{N-1} \neq X^N$，则称 $X$ 为 **$N$ 维 CW 复形**。若每个骨架只添加有限多个胞腔，则称 $X$ 为 **有限 CW 复形**。

#### **1.2 几何直观与例子**

- **球面 $S^n$**：最小胞腔分解：一个 0-胞腔和一个 $n$-胞腔。附着映射 $\varphi: S^{n-1} \to X^0 = \{*\}$ 为常值映射。
- **环面 $T^2 = S^1 \times S^1$**：一个 0-胞腔 $v$，两个 1-胞腔 $a, b$（均为环路），一个 2-胞腔 $T$。附着映射 $\partial T \to X^1$ 对应路径 $aba^{-1}b^{-1}$。
- **实射影平面 $\mathbb{RP}^2$**：一个 0-胞腔 $v$，一个 1-胞腔 $a$（环路），一个 2-胞腔 $P$。附着映射 $\partial P \to X^1$ 对应 $a^2$。
- **复射影空间 $\mathbb{CP}^n$**：只有偶数维胞腔：一个 0-胞腔、一个 2-胞腔、……、一个 $2n$-胞腔。

CW 复形的骨架滤波 $X^0 \subset X^1 \subset \cdots$ 允许我们利用相对同调逐步分析空间结构，这是胞腔同调的核心思想。


### **2. 胞腔链复形的构造**

设 $X$ 为 CW 复形。我们希望构造一个链复形 $(C_\bullet^{\text{CW}}(X), d_\bullet)$，其链群由胞腔生成，边缘算子反映胞腔边界的粘合方式。

#### **2.1 胞腔链群**

**定义 5.2.1（胞腔链群）**  
对于每个 $n \geq 0$，定义 **胞腔 $n$-链群** 为相对同调群：
$$
C_n^{\text{CW}}(X) := H_n(X^n, X^{n-1}).
$$

**引理 5.2.2**  
设 $X$ 为 CW 复形，则：
1. $H_k(X^n, X^{n-1}) = 0$ 对 $k \neq n$。
2. $H_n(X^n, X^{n-1})$ 是以所有 $n$-胞腔为基的自由阿贝尔群。更确切地，对于每个 $n$-胞腔 $e_\alpha^n$，存在生成元 $[e_\alpha^n] \in H_n(X^n, X^{n-1})$，对应于特征映射 $(D_\alpha^n, S_\alpha^{n-1}) \to (X^n, X^{n-1})$ 诱导的相对同调类。

**证明思路**：由于 $X^n$ 是从 $X^{n-1}$ 粘合 $n$-胞腔得到，切除定理给出同构：
$$
H_n(X^n, X^{n-1}) \cong \bigoplus_\alpha H_n(D_\alpha^n, S_\alpha^{n-1}) \cong \bigoplus_\alpha \mathbb{Z},
$$
其中每个直和项由标准生成元 $[D_\alpha^n]$ 生成。因此可将 $C_n^{\text{CW}}(X)$ 记为自由阿贝尔群 $\bigoplus_\alpha \mathbb{Z} e_\alpha^n$，其中 $e_\alpha^n$ 对应 $n$-胞腔。

#### **2.2 边缘算子的拓扑定义**

为了构造链复形，需要定义边缘算子 $d_n: C_n^{\text{CW}}(X) \to C_{n-1}^{\text{CW}}(X)$。考虑如下同态的复合：

从三重 $(X^n, X^{n-1}, X^{n-2})$ 的奇异同调长正合序列中，有：
$$
\cdots \to H_n(X^n, X^{n-1}) \xrightarrow{\partial_n} H_{n-1}(X^{n-1}) \xrightarrow{j_{n-1}} H_{n-1}(X^{n-1}, X^{n-2}) \to \cdots,
$$
其中 $\partial_n$ 是相对同调的边界算子，$j_{n-1}$ 由包含对 $(X^{n-1}, \emptyset) \hookrightarrow (X^{n-1}, X^{n-2})$ 诱导。定义 $d_n$ 为复合：
$$
d_n := j_{n-1} \circ \partial_n: C_n^{\text{CW}}(X) \to C_{n-1}^{\text{CW}}(X).
$$

由长正合序列的自然性，可证 $d_{n-1} \circ d_n = 0$，从而 $(C_\bullet^{\text{CW}}(X), d_\bullet)$ 构成链复形。

#### **2.3 边缘算子的组合描述**

上述定义抽象，但边缘算子在胞腔基上有具体的组合公式。设 $e_\alpha^n$ 为 $n$-胞腔，附着映射为 $\varphi_\alpha: S^{n-1} \to X^{n-1}$。对于每个 $(n-1)$-胞腔 $e_\beta^{n-1}$，考虑复合：
$$
f_{\alpha\beta}: S^{n-1} \xrightarrow{\varphi_\alpha} X^{n-1} \xrightarrow{q_\beta} X^{n-1} / (X^{n-1} \setminus \mathring{e}_\beta^{n-1}) \approx S^{n-1},
$$
其中 $q_\beta$ 是商映射，将 $e_\beta^{n-1}$ 之外的部分坍缩为一点，而商空间同胚于 $S^{n-1}$。记 $\deg(f_{\alpha\beta})$ 为映射 $f_{\alpha\beta}$ 的度数。

**定义 5.2.3（边缘算子的矩阵元）**  
边缘算子 $d_n$ 在生成元 $e_\alpha^n$ 上的作用为：
$$
d_n(e_\alpha^n) = \sum_{\beta} \deg(f_{\alpha\beta}) \, e_\beta^{n-1},
$$
其中和取遍所有 $(n-1)$-胞腔 $e_\beta^{n-1}$。

**几何直观**：系数 $\deg(f_{\alpha\beta})$ 表示 $e_\alpha^n$ 的边界环绕 $e_\beta^{n-1}$ 的代数次数，考虑了定向。计算时往往可通过附着映射的几何描述直接得到。

**例 5.2.4（环面 $T^2$**）  
采用前述胞腔分解：$e^0 = v$，$e_a^1, e_b^1$，$e^2 = T$。  
- 对于 1-胞腔：$d_1(e_a^1) = d_1(e_b^1) = 0$（因为均为环路）。  
- 对于 2-胞腔：边界路径为 $aba^{-1}b^{-1}$。计算 $f_{T,a}: S^1 \to S^1$。将边界映射商掉除 $a$ 外的部分，得到映射：先沿 $a$ 正走一圈，再沿 $b$（坍缩），再沿 $a$ 反走一圈，再沿 $b$（坍缩）。这同伦于常值映射，故 $\deg(f_{T,a}) = 0$。同理 $\deg(f_{T,b}) = 0$。因此 $d_2(e^2) = 0$。  
胞腔链复形为：
$$
0 \longrightarrow \mathbb{Z} \xrightarrow{\,0\,} \mathbb{Z} \oplus \mathbb{Z} \xrightarrow{\,0\,} \mathbb{Z} \longrightarrow 0.
$$

**例 5.2.5（实射影平面 $\mathbb{RP}^2$**）  
胞腔：$e^0 = v$，$e^1 = a$，$e^2 = P$。  
- $d_1(e^1) = 0$。  
- 边界为 $a^2$，故 $f_{P,a}: S^1 \to S^1$ 为二重覆叠，度数 2。因此 $d_2(e^2) = 2 e^1$。  
胞腔链复形：
$$
0 \longrightarrow \mathbb{Z} \xrightarrow{\,2\,} \mathbb{Z} \xrightarrow{\,0\,} \mathbb{Z} \longrightarrow 0.
$$


### **3. 胞腔同调与奇异同调的等价性**

尽管胞腔链复形依赖于 CW 结构，但其同调与奇异同调自然同构，因此胞腔同调是计算奇异同调的有效工具。

**定理 5.3.1（等价性定理）**  
设 $X$ 为 CW 复形，则存在自然同构：
$$
H_n^{\text{CW}}(X) \cong H_n^{\text{Sing}}(X) \quad \text{对所有 } n,
$$
其中左边是胞腔链复形 $(C_\bullet^{\text{CW}}(X), d_\bullet)$ 的同调，右边是奇异同调。

**证明思路**（归纳与五引理）：  
考虑骨架包含 $i: X^n \hookrightarrow X$。关键步骤如下：

1. **高阶同调的消失**：对 $k > n$，$H_k(X^n) = 0$。这因为 $X^n$ 是 $n$ 维 CW 复形，任何奇异 $k$-单形可经过同伦推到 $(k-1)$-骨架，归纳即得。
2. **骨架提升的同调**：对每个 $n$，考虑长正合序列：
   $$
   \cdots \to H_{n+1}(X^{n+1}, X^n) \xrightarrow{\partial_{n+1}} H_n(X^n) \xrightarrow{i_*} H_n(X^{n+1}) \to 0,
   $$
   这里 $H_n(X^{n+1}, X^n)=0$。于是 $H_n(X^{n+1}) \cong H_n(X^n) / \operatorname{im} \partial_{n+1}$。
3. **稳定性**：对 $m \ge n$，包含映射诱导同构 $H_n(X^{n+1}) \cong H_n(X^m)$。由于 $X = \bigcup X^m$ 且紧奇异单形总落在某个骨架中，有 $H_n(X) \cong \varinjlim H_n(X^m) \cong H_n(X^{n+1})$。
4. **与胞腔链复形的联系**：由短正合序列：
   $$
   0 \to H_n(X^n) \to C_n^{\text{CW}}(X) \xrightarrow{\partial_n} H_{n-1}(X^{n-1}),
   $$
   得 $H_n(X^n) \cong \ker \partial_n$。注意 $d_n = j_{n-1} \circ \partial_n$，且 $j_{n-1}$ 在 $\ker \partial_n$ 上为单射（因 $\operatorname{im} \partial_n = \ker j_{n-1}$）。因此：
   $$
   H_n(X) \cong H_n(X^{n+1}) \cong H_n(X^n)/\operatorname{im} \partial_{n+1} \cong \ker \partial_n / \operatorname{im} \partial_{n+1} \cong \ker d_n / \operatorname{im} d_{n+1} = H_n^{\text{CW}}(X).
   $$
   详细图表追踪可验证这些同构的兼容性。

**注记**：该定理保证了对 CW 复形，胞腔同调与奇异同调一致，且计算更简便。同构由包含映射 $X^n \hookrightarrow X$ 诱导。


### **4. 典型计算**

利用胞腔同调，我们可以高效计算经典空间的同调群。

#### **4.1 实射影空间 $\mathbb{RP}^n$**

**胞腔结构**：每个维数一个胞腔：$e^0, e^1, \dots, e^n$。其中 $e^k$ 通过二重覆盖 $\varphi_k: S^{k-1} \to \mathbb{RP}^{k-1}$ 附着到 $(k-1)$-骨架上。

**边缘算子**：计算得 $d_k(e^k) = (1 + (-1)^k) e^{k-1}$，即：
$$
d_k = \begin{cases}
0 & \text{若 } k \text{ 为奇数}, \\
2 & \text{若 } k \text{ 为偶数且 } k \ge 2.
\end{cases}
$$

**胞腔链复形**：
$$
0 \to \mathbb{Z} \xrightarrow{d_n} \mathbb{Z} \xrightarrow{d_{n-1}} \cdots \xrightarrow{d_2} \mathbb{Z} \xrightarrow{d_1} \mathbb{Z} \to 0.
$$

计算同调（分 $n$ 奇偶）：

- **$n = 2m+1$ 奇数**：
  $$
  H_k(\mathbb{RP}^{2m+1}) \cong 
  \begin{cases}
  \mathbb{Z}, & k = 0, \\
  \mathbb{Z}_2, & k \text{ 为奇数}, 1 \le k \le 2m-1, \\
  0, & k \text{ 为偶数}, 2 \le k \le 2m, \\
  \mathbb{Z}, & k = 2m+1.
  \end{cases}
  $$

- **$n = 2m$ 偶数**：
  $$
  H_k(\mathbb{RP}^{2m}) \cong 
  \begin{cases}
  \mathbb{Z}, & k = 0, \\
  \mathbb{Z}_2, & k \text{ 为奇数}, 1 \le k \le 2m-1, \\
  0, & k \text{ 为偶数}, 2 \le k \le 2m.
  \end{cases}
  $$

#### **4.2 复射影空间 $\mathbb{CP}^n$**

**胞腔结构**：只有偶数维胞腔：$e^0, e^2, e^4, \dots, e^{2n}$。

**边缘算子**：由于奇数维链群为零，所有边缘算子自动为零。

**胞腔链复形**：
$$
0 \to \mathbb{Z} \xrightarrow{0} \mathbb{Z} \xrightarrow{0} 0 \to \mathbb{Z} \xrightarrow{0} \cdots \xrightarrow{0} \mathbb{Z} \to 0.
$$

**同调群**：
$$
H_k(\mathbb{CP}^n) \cong 
\begin{cases}
\mathbb{Z}, & k = 0, 2, 4, \dots, 2n, \\
0, & \text{其他}.
\end{cases}
$$

#### **4.3 闭曲面**

闭曲面（紧连通二维流形）分类为可定向曲面 $M_g$（ genus $g$）与不可定向曲面 $N_h$（ genus $h$）。

**可定向曲面 $M_g$**  
胞腔分解：一个 0-胞腔 $v$，$2g$ 个 1-胞腔 $a_1, b_1, \dots, a_g, b_g$，一个 2-胞腔 $T$。边界路径为 $\prod_{i=1}^g [a_i, b_i] = a_1 b_1 a_1^{-1} b_1^{-1} \cdots a_g b_g a_g^{-1} b_g^{-1}$。

- $d_1 = 0$（所有 1-胞腔为环路）。
- 对每个 1-胞腔，边界中正反向各出现一次，故 $d_2(T) = 0$。

胞腔链复形：
$$
0 \to \mathbb{Z} \xrightarrow{0} \mathbb{Z}^{2g} \xrightarrow{0} \mathbb{Z} \to 0.
$$

同调：
$$
H_0(M_g) \cong \mathbb{Z}, \quad H_1(M_g) \cong \mathbb{Z}^{2g}, \quad H_2(M_g) \cong \mathbb{Z}.
$$

**不可定向曲面 $N_h$**  
胞腔分解：一个 0-胞腔 $v$，$h$ 个 1-胞腔 $a_1, \dots, a_h$，一个 2-胞腔 $P$。边界路径为 $a_1^2 a_2^2 \cdots a_h^2$。

- $d_1 = 0$。
- 对每个 $a_i$，边界出现两次同向，故 $f_{P,a_i}: S^1 \to S^1$ 度数为 2，即 $d_2(P) = (2, 2, \dots, 2) \in \mathbb{Z}^h$。

胞腔链复形：
$$
0 \to \mathbb{Z} \xrightarrow{d_2} \mathbb{Z}^h \xrightarrow{0} \mathbb{Z} \to 0, \quad d_2(1) = (2,2,\dots,2).
$$

同调计算：
- $H_0 \cong \mathbb{Z}$。
- $H_1 \cong \mathbb{Z}^h / \langle (2,\dots,2) \rangle \cong \mathbb{Z}^{h-1} \oplus \mathbb{Z}_2$（通过 Smith 标准形）。
- $H_2 = \ker d_2 = 0$。

特别地：
- $\mathbb{RP}^2 = N_1$: $H_1 \cong \mathbb{Z}_2$。
- 克莱因瓶 $= N_2$: $H_1 \cong \mathbb{Z} \oplus \mathbb{Z}_2$。
