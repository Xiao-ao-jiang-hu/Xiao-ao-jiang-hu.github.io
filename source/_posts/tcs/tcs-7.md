---
title: TCS Lec7总结
tags:
  - tcs
categories:
  - tcs
index_img: /img/tcs.jpg
banner_img: /img/tcs.jpg
excerpt: 本节系统阐述了 NP 完全性理论的核心：Cook-Levin 定理证明 SAT 是 NP 完全的；展示了从 3-SAT 到 VERTEX-COVER、CLIQUE、3-COLORING、HAM-CYCLE、MAX-CUT 等经典问题的多项式归约；并介绍了 Ladner 定理，说明若 P ≠ NP，则存在介于 P 与 NP 完全之间的“NP 中间”问题。
abbrlink: fae22a70
date: 2025-05-27 11:09:08
---

### **第一部分：NP 完全性与 Cook-Levin 定理**

#### **1.1 NP 完全性的定义**
- **NP-hard**：问题 $B$ 满足 $\forall A \in \mathsf{NP}, A \leq_P B$。
- **NP-complete**：$B \in \mathsf{NP}$ 且 $B$ 是 NP-hard。
- **多项式归约（Karp 归约）**：
  > $A \leq_P B$ 若存在多项式时间可计算函数 $f$，使得  
  > $$
  > \forall x,\quad x \in A \iff f(x) \in B.
  > $$

- **关键性质**：
  > 若 $A \leq_P B$ 且 $B \in \mathsf{P}$，则 $A \in \mathsf{P}$。

#### **1.2 Cook-Levin 定理**
> **定理（Cook-Levin, 1971）**：SAT 是 NP 完全的。

##### **证明概要**：
设 $A \in \mathsf{NP}$，则存在验证器 TM $V$，使得：
- $x \in A \iff \exists y,\ |y| \le \text{poly}(|x|)$，$V(\langle x, y \rangle)$ 在 $T = n^c$ 步内接受。

**构造 CNF 公式 $\varphi_x$**：
1. **变量**：对每个时间步 $t \in [0, T]$ 和带位置 $j \in [1, T]$，用 $k = \lceil \log |\Gamma| \rceil$ 位编码配置符号 $\gamma^{(t)}_j$。
2. **三部分子公式**：
   - **初始配置** $\varphi_{\text{init}}$：确保输入为 $x$，见证为某 $y$。
   - **转移正确性** $\bigwedge_{t,j} \varphi^{(t)}_j$：对每个局部窗口 $(\gamma^{(t)}_{j-1}, \gamma^{(t)}_j, \gamma^{(t)}_{j+1})$，强制 $\gamma^{(t+1)}_j = F_V(\cdot)$。
     - 每个布尔函数 $F_V: \{0,1\}^{3k} \to \{0,1\}^k$ 可写为 CNF，大小 $O(k 2^{3k}) = O(1)$（因 $k$ 为常数）。
   - **接受条件** $\varphi_{\text{final}}$：最终配置为接受态。

**结论**：
$$
x \in A \iff \exists y,\ V(\langle x, y \rangle) \text{ 接受} \iff \varphi_x \in \text{SAT}.
$$
且 $\varphi_x$ 可在 $\text{poly}(|x|)$ 时间内构造 ⇒ $A \leq_P \text{SAT}$。


### **第二部分：经典 NP 完全问题归约**

#### **2.1 3-SAT 是 NP 完全的**
- **归约**：SAT $\leq_P$ 3-SAT。
- **技巧**：将长子句 $(\ell_1 \vee \cdots \vee \ell_m)$ 转换为：
  $$
  (\ell_1 \vee \ell_2 \vee z_1) \wedge (\neg z_1 \vee \ell_3 \vee z_2) \wedge \cdots \wedge (\neg z_{m-3} \vee \ell_{m-1} \vee \ell_m)
  $$
  引入新变量 $z_i$，保持可满足性等价。

#### **2.2 VERTEX-COVER（顶点覆盖）**
> **定义**：给定图 $G=(V,E)$ 与整数 $k$，是否存在 $S \subseteq V$，$|S| \le k$，使得每条边至少一端在 $S$ 中？

**归约**：3-SAT $\leq_P$ VERTEX-COVER。

##### **构造**：
- 对每个变量 $x_i$：添加边 $(x_i, \neg x_i)$（强制选其一）。
- 对每个子句 $C_j = (\ell_{j1} \vee \ell_{j2} \vee \ell_{j3})$：添加三角形（3-clique）连接 $\ell_{j1}, \ell_{j2}, \ell_{j3}$。
- 对每个文字 $\ell$：连接子句顶点 $\ell$ 到对应变量顶点。

**参数**：设 $n$ 变量、$m$ 子句，则问是否存在大小为 $k = n + 2m$ 的顶点覆盖。

##### **正确性**：
- **完备性**：若 $\varphi$ 可满足，对真变量选 $x_i$，假变量选 $\neg x_i$（共 $n$ 点）；每子句至少一文字为真，另两点覆盖三角形（共 $2m$ 点）。
- **可靠性**：若存在大小 $n+2m$ 覆盖，则每变量边选一点（定义赋值），每三角形至少两点被选 ⇒ 每子句至少一文字为真。

#### **2.3 INDEPENDENT SET 与 CLIQUE**
- **INDEPENDENT SET**：$S \subseteq V$ 无边相连。
  - **归约**：VERTEX-COVER $\leq_P$ INDEPENDENT SET：
    $$
    \langle G, k \rangle \mapsto \langle G, |V| - k \rangle
    $$
    （因 $S$ 是顶点覆盖 ⇔ $V \setminus S$ 是独立集）。
- **CLIQUE**：完全子图。
  - **归约**：INDEPENDENT SET $\leq_P$ CLIQUE：
    $$
    \langle G, k \rangle \mapsto \langle \overline{G}, k \rangle
    $$
    （$\overline{G}$ 为补图）。

#### **2.4 3-COLORING**
> **定义**：能否用 3 色给图顶点染色，使相邻顶点不同色？

**归约思路**（略，作业）：
- 构造 **OR-gadget**：强制 $x \vee y$ 为真时染色合法。
- 将 3-SAT 子句转换为染色约束。

#### **2.5 HAMILTONIAN CYCLE（哈密顿环）**
> **定义**：是否存在访问每个顶点恰好一次的环？

**归约**：VERTEX-COVER $\leq_P$ HAM-CYCLE。

##### **构造**：
- 对每条边 $e = (u,v) \in E(G)$，放置 **边 gadget**（4 顶点 $a,b,c,d$）：
  - 三种遍历方式：
    - (I)：穿过 $a \to b \to c \to d$（表示 $u,v$ 均在覆盖中）。
    - (II)/(III)：绕行（表示仅 $u$ 或 $v$ 在覆盖中）。
- 对每个顶点 $u \in V(G)$，将所有关联 gadget 的“$u$ 端”串连。
- 添加 $k$ 个选择顶点 $v_1,\dots,v_k$，连接所有 gadget 的开放端。

**正确性**：
- **完备性**：若 $G$ 有大小 $k$ 覆盖，则用 $v_1,\dots,v_k$ 依次遍历覆盖顶点对应的 gadget。
- **可靠性**：若 $H$ 有哈密顿环，则环在 $v_1,\dots,v_k$ 间切换，每段对应一个覆盖顶点；未覆盖边的 gadget 无法被遍历。

#### **2.6 MAX-CUT**
> **定义**：是否存在割 $(S, \bar{S})$，使得跨割边数 $\ge k$？

**归约**：NAESAT $\leq_P$ MAX-CUT。

##### **NAESAT**（Not-All-Equal SAT）：
- 每子句至少一真一假。

##### **构造**：
- 对每个变量 $x_i$：创建顶点 $x_i, \neg x_i$。
- 对每个出现 $x_i$ 或 $\neg x_i$，添加边 $(x_i, \neg x_i)$（共 $n_i$ 条，$n_i$ 为出现次数）。
- 对每个子句 $C_j = (\ell_1 \vee \ell_2 \vee \ell_3)$：添加三角形连接 $\ell_1,\ell_2,\ell_3$。
- 设阈值 $k = 3m + 2m = 5m$（$m$ 为子句数）。

##### **正确性**：
- **完备性**：若 NAESAT 可满足，按真值割点（$x_i$ 与 $\neg x_i$ 分属不同侧），每三角形恰割 2 边（因非全等）。
- **可靠性**：若割大小 $\ge 5m$，则每 $(x_i, \neg x_i)$ 边全割（贡献 $3m$），每三角形必须割 2 边 ⇒ 每子句非全等。


### **第三部分：NP 中间问题与 Ladner 定理**

#### **3.1 动机**
- 若 $\mathsf{P} \neq \mathsf{NP}$，是否所有 $\mathsf{NP} \setminus \mathsf{P}$ 问题都是 NP 完全？
- **Ladner 定理**（1975）：否！存在 **NP 中间问题**（NP-intermediate）。

#### **3.2 Ladner 定理陈述**
> **定理**：若 $\mathsf{P} \neq \mathsf{NP}$，则存在语言 $L \in \mathsf{NP} \setminus \mathsf{P}$，且 $L$ 不是 NP 完全。

#### **3.3 证明概要（Impagliazzo 版）**
构造 **带填充的 SAT**：
$$
\text{SAT}_Z = \{ \varphi 1^{n^{Z(n)}} \mid \varphi \text{ 是大小为 } n \text{ 的 SAT 实例} \}
$$
其中 $Z: \mathbb{N} \to \mathbb{N}$ 为缓慢增长函数。

##### **定义 $Z(n)$**：
- 枚举所有 TM $M_1, M_2, \dots$（假设 $M_i$ 时间 $\le n^i$）。
- 递归定义：
  - $Z(1) = 1$。
  - 若 $Z(n-1) = i$，且 $\forall x,\ |x| \le \log n$，$M_i(x) = \text{SAT}_Z(x)$，则 $Z(n) = i$；
  - 否则 $Z(n) = \min\{i+1, \lfloor \log \log n \rfloor\}$。

##### **关键性质**：
1. **$\text{SAT}_Z \in \mathsf{NP}$**：验证器忽略填充，解 $\varphi$。
2. **$\text{SAT}_Z \notin \mathsf{P}$**：若 $\text{SAT}_Z \in \mathsf{P}$，则某 $M_i$ 永远正确 ⇒ $Z(n)$ 恒为 $i$，但构造强制 $Z$ 无界（因 $\mathsf{P} \neq \mathsf{NP}$）。
3. **$\text{SAT}_Z$ 非 NP 完全**：若存在归约 $R: \text{SAT} \leq_P \text{SAT}_Z$，则 $R(\varphi)$ 长度为 $|\varphi|^{O(1)}$，但 $\text{SAT}_Z$ 实例长度为 $n^{Z(n)}$（超多项式，因 $Z$ 无界）⇒ 矛盾。


### **第四部分：归约的通用结构**

任何 NP 归约需验证四点：
1. **描述**：明确输入 $x \in A$ 如何映射到 $f(x) \in B$。
2. **效率**：$f$ 在 $\text{poly}(|x|)$ 时间内可计算。
3. **完备性**：$x \in A \Rightarrow f(x) \in B$。
4. **可靠性**：$x \notin A \Rightarrow f(x) \notin B$。


