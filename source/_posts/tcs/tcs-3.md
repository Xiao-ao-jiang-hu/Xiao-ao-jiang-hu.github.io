---
title: TCS Lec3总结
tags:
  - tcs
categories:
  - tcs
index_img: /img/tcs.jpg
banner_img: /img/tcs.jpg
excerpt: 本节内容涵盖了λ演算中递归的实现（不动点组合子）、数据结构（对、元组、列表）及其操作（map、filter、reduce）、函数式编程思想，以及Church-Turing论题的历史背景、图灵机模型、不可判定性与λ演算的图灵完备性。
abbrlink: ead0e63
date: 2025-05-25 23:09:58
---

### **第一部分：λ演算中的递归与不动点组合子**

#### **目标**：在不支持直接递归定义的λ演算中实现递归函数（如阶乘函数）。

#### **核心思想**：
- λ演算中不能直接写 `fact ≡ λn. ... fact ...`，因为函数名在定义体中尚未绑定。
- 将递归函数视为某个高阶函数的**不动点**（fixed point）。

#### **关键构造**：
1. **阶乘的递归形式**：
   $$
   \text{fact} \equiv \lambda n.\ \text{ite}(\text{iszero}\ n)\ 1\ (\text{mult}\ n\ (\text{fact}\ (\text{pred}\ n)))
   $$
   可重写为：
   $$
   \text{fact} = (\lambda f.\lambda n.\ \text{ite}(\text{iszero}\ n)\ 1\ (\text{mult}\ n\ (f\ (\text{pred}\ n))))\ \text{fact}
   $$
   即 $\text{fact}$ 是函数 $\text{fac} \equiv \lambda f.\lambda n.\dots$ 的不动点。

2. **Y组合子（Y combinator）**：
   - 存在一个λ项 $Y$，使得对任意 $F$，有 $Y F \twoheadrightarrow_\beta F(Y F)$。
   - 因此可定义：
     $$
     \text{fact} \equiv Y\ \text{fac}
     $$
   - 示例计算：
     $$
     \text{fact}\ 2 \equiv Y\ \text{fac}\ 2 \twoheadrightarrow_\beta \text{mult}\ 2\ (\text{fact}\ 1) \twoheadrightarrow_\beta 2
     $$

#### **结论**：通过不动点组合子，λ演算能表达任意递归函数。


### **第二部分：λ演算中的数据结构**

#### **2.1 对（Pair）与元组（Tuple）**
- **对的编码**：
  $$
  \langle s, t \rangle \equiv \lambda x.\ x\ s\ t \quad \text{（即 } \text{pair} \equiv \lambda a b.\lambda x.\ x\ a\ b\text{）}
  $$
- **投影函数**：
  $$
  \text{fst} \equiv \lambda p.\ p\ \text{true}, \quad \text{snd} \equiv \lambda p.\ p\ \text{false}
  $$
  验证：
  $$
  \text{fst}\ \langle s, t \rangle \twoheadrightarrow_\beta s, \quad \text{snd}\ \langle s, t \rangle \twoheadrightarrow_\beta t
  $$
- **k元组**：
  $$
  \langle s_1, \dots, s_k \rangle \equiv \lambda x.\ x\ s_1 \cdots s_k, \quad \pi_i^k \equiv \lambda p.\ p\ (\lambda x_1 \cdots x_k.\ x_i)
  $$

#### **2.2 列表（List）**
- **空列表与构造**：
  $$
  \text{nil} \equiv \lambda x.\ \text{true}, \quad h :: t \equiv \text{cons}\ h\ t \equiv \text{pair}\ h\ t
  $$
  （注：也可定义 $\text{nil} \equiv \text{false}$，但需调整判空函数）
- **基本操作**：
  $$
  \text{head} \equiv \text{fst}, \quad \text{tail} \equiv \text{snd}, \quad \text{empty} \equiv \lambda l.\ l\ (\lambda h t.\ \text{false})
  $$
  验证：
  $$
  \text{empty}\ \text{nil} \twoheadrightarrow_\beta \text{true}, \quad \text{empty}\ (h::t) \twoheadrightarrow_\beta \text{false}
  $$

#### **2.3 列表操作：map, filter, reduce**
- **map**：对每个元素应用函数 $f$：
  $$
  \text{map} \equiv \lambda l f.\ \text{reduce}\ l\ (\lambda a b.\ \text{cons}\ (f\ a)\ b)\ \text{nil}
  $$
- **filter**：保留满足布尔谓词 $f$ 的元素（可由 reduce 构造）。
- **reduce（折叠）**：递归定义为
  $$
  \begin{aligned}
  \text{reduce}\ \text{nil}\ f\ z &= z \\
  \text{reduce}\ (h::t)\ f\ z &= f\ h\ (\text{reduce}\ t\ f\ z)
  \end{aligned}
  $$
  在λ演算中通过不动点实现：
  $$
  \text{red} \equiv \lambda s\, l\, f\, z.\ \text{ite}(\text{empty}\ l)\ z\ (f\ (\text{head}\ l)\ (s\ (\text{tail}\ l)\ f\ z))
  $$
  $$
  \text{reduce} \equiv Y\ \text{red}
  $$

#### **历史影响**：这些高阶函数启发了 **MapReduce** 大数据处理框架。


### **第三部分：函数式编程简介**

#### **优势**：
1. **不可变性**：避免副作用，提高程序可靠性。
2. **一等函数与高阶函数**：函数可作为参数、返回值。
3. **声明式风格**：关注“做什么”而非“怎么做”。
4. **并发友好**：无共享状态，易于并行化。


### **第四部分：Church-Turing 论题**

#### **4.1 什么是计算？**
- **历史背景**：
  - **Hilbert 第十问题**（1900）：判定整系数多项式是否有整数解 → **不可判定**（1970）。
  - **Entscheidungsproblem**（1928）：判定一阶逻辑句子是否可证 → **不可判定**（Church & Turing, 1936）。
- **等价计算模型**：
  1. 递归函数（Gödel）
  2. λ演算（Church）
  3. 图灵机（Turing）
  4. 元胞自动机（如 Conway 生命游戏）
  5. RAM 模型
  6. 现代编程语言（如 Python、C）

#### **Church-Turing 论题**：
> 所有“有效可计算”（effectively calculable）的函数，恰好是图灵机可计算的函数。

- **图灵机为何特殊**？因其直观模拟人类纸笔计算过程：
  > “计算通常是在纸上写下符号……机器有有限状态、无限带、读写头。” —— Alan Turing (1936)

- **扩展 Church-Turing 论题**：任何“合理”的物理计算模型均可被图灵机**多项式时间模拟**。
- **量子计算**：虽可能加速某些问题，但**不违反** Church-Turing 论题（仍可被图灵机模拟，只是可能指数慢）。


### **第五部分：图灵机回顾与不可判定性**

#### **5.1 图灵机（TM）定义**
- **组成**：
  1. 有限状态控制器
  2. 无限长纸带（单元格含有限符号，含空白符 $B$）
  3. 读写头（可左/右移动）
- **转移函数**：
  $$
  \delta: Q \times \Gamma \to Q \times \Gamma \times \{L, R\}
  $$
- **初始配置**：输入字符串置于带左端，其余为 $B$，头在最左。

#### **5.2 重要事实**
1. **编码**：TM 可编码为二进制串 $\langle M \rangle$。
2. **配置（Configuration）**：记录带内容、状态、头位置。
3. **通用图灵机 $U$**：输入 $\langle M, w \rangle$，模拟 $M(w)$。
4. **变体等价性**：
   - 多带 TM ≡ 单带 TM
   - 非确定性 TM ≡ 确定性 TM（通过广度优先搜索模拟）

#### **5.3 不可判定性**
- **停机问题**：
  $$
  \text{HALT} = \{ \langle M, w \rangle \mid M \text{ 在 } w \text{ 上停机} \}
  $$
  **证明**（对角化）：
  - 假设存在判定器 $H$。
  - 构造 $D(\langle M \rangle)$：若 $H(\langle M, \langle M \rangle \rangle)$ 接受，则 $D$ 死循环；否则停机。
  - 矛盾：$D(\langle D \rangle)$ 停机 ⇔ 不停机。

- **其他不可判定问题**：
  - 两 TM 是否等价？
  - 程序是否会打印 "Hello World!"？
  - **Post 对应问题（PCP）**
  - **Mortal Matrix 问题**（15×15 整数矩阵乘积能否为零矩阵？→ 不可判定）
  - **Wang Tiles 平面铺砖问题**（Berger, 1966）：可归约自停机问题。

#### **5.4 归约（Reduction）**
- **定义**：若问题 $A$ 可用 $B$ 的算法解决，则 $A \leq_T B$。
- **用途**：若 $B$ 可判定 ⇒ $A$ 可判定；若 $A$ 不可判定 ⇒ $B$ 不可判定。


### **第六部分：λ演算是图灵完备的**

#### **目标**：证明λ演算可模拟任意图灵机。

#### **构造思路**：
1. **配置编码**：用λ列表表示 TM 配置 $\alpha = \gamma_0 :: \gamma_1 :: \cdots :: \gamma_{k-1} :: \text{nil}$。
2. **局部转移**：下一配置的每个符号 $\gamma'_j$ 仅依赖 $\gamma_{j-1}, \gamma_j, \gamma_{j+1}$。
   - 存在λ项 $\text{local}_M$ 使得：
     $$
     \text{local}_M\ \langle \gamma_{j-1}, \gamma_j, \gamma_{j+1} \rangle \twoheadrightarrow_\beta \gamma'_j
     $$
3. **打包与映射**：
   - $\text{pack}$：将配置转换为三元组列表。
   - $\text{next}_M \equiv \lambda l.\ \text{map}\ (\text{pack}\ l)\ \text{local}_M$
4. **模拟器**：
   $$
   \text{sim}_M \equiv \lambda s\, l.\ (\text{terminate}\ l)\ l\ (s\ (\text{next}_M\ l)), \quad \text{simulate}_M \equiv Y\ \text{sim}_M
   $$
   - 若 $M$ 停机，则 $\text{simulate}_M\ \alpha \twoheadrightarrow_\beta \alpha_{\text{final}}$（正规式）。
   - 若 $M$ 不停机，则 $\text{simulate}_M\ \alpha$ **无正规式**（对应无限β归约）。

#### **双向模拟**：
- λ演算 ⇄ 图灵机：两者计算能力等价 ⇒ **λ演算是图灵完备的**。
