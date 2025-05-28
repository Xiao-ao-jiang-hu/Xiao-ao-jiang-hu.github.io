---
title: TCS Lec9总结
date: 2025-05-28 23:06:57
tags:
    - tcs
excerpt: 本节内容涵盖了空间复杂度的基础知识、多项式空间（PSPACE）及其完备性、对数空间（Logarithmic Space）以及空间层次定理等重要概念。
---

### **1. 空间复杂度基础**
- **定义**：
  - **SPACE**($f(n)$)：由确定型图灵机（TM）在 $O(f(n))$ 空间内可判定的语言集合（$f(n) \geq n$）。
  - **NSPACE**($f(n)$)：由非确定型图灵机（NTM）在 $O(f(n))$ 空间内可判定的语言集合。
- **示例**：
  - **SAT 问题** 可用线性空间算法求解（遍历所有赋值组合并验证）。
- **时间与空间关系**：
  1. $\text{TIME}(t(n)) \subseteq \text{SPACE}(t(n))$  
  2. $\text{SPACE}(t(n)) \subseteq \text{TIME}(2^{O(t(n))})$  
- **PSPACE 类**：
  $$
  \text{PSPACE} = \bigcup_{k \geq 0} \text{SPACE}(n^k)
  $$
  - **P ⊆ PSPACE**（多项式时间算法最多消耗多项式空间）。
  - **NP ⊆ PSPACE**（例如 3-SAT ∈ PSPACE）。
  - **coNP ⊆ PSPACE**（因 coPSPACE = PSPACE）。


### **2. 多项式空间（PSPACE）**
#### **(1) PSPACE 完备性**
- **定义**：问题 $B$ 是 **PSPACE-完全** 的需满足：
  1. $B \in \text{PSPACE}$；
  2. 所有 PSPACE 中的问题 $A$ 可在 **多项式时间** 内归约到 $B$。
- **关键问题：TQBF（全量化布尔公式）**
  - **描述**：判定形如 $\exists x_1 \forall x_2 \exists x_3 \cdots Q x_n [\phi]$ 的公式是否为真（$\phi$ 是无量词的布尔公式）。
  - **性质**：
    - **TQBF ∈ PSPACE**（递归验证，每层消耗常数空间，总空间 $O(n)$）。
    - **TQBF 是 PSPACE-完全** 的（证明核心：将 PSPACE 问题归约为 TQBF，通过递归构造配置转移公式，并利用 **缩写技巧（Abbreviation Trick）** 避免公式膨胀）。
  - **特例**：SAT 是 TQBF 的子问题（仅存在量词）。

#### **(2) Savitch 定理**
- **定理**：对任意 $f(n) \geq n$，有  
  $$
  \text{NSPACE}(f(n)) \subseteq \text{SPACE}(f^2(n)).
  $$
- **推论**：$\text{PSPACE} = \text{NPSPACE}$。
- **证明思路**：
  - 定义 **可达性问题（Yieldability）**：检查 NTM 能否在 $t$ 步内从配置 $c_1$ 到 $c_2$。
  - 递归算法：二分法枚举中间配置 $c_m$，验证 $c_1 \to c_m$ 和 $c_m \to c_2$。
  - **空间分析**：递归深度 $\log t = O(f(n))$，每层存配置需 $O(f(n))$ 空间，总空间 $O(f^2(n))$。

#### **(3) 游戏与 PSPACE 完备性**
- **公式游戏（FORMULA-GAME）**：
  - 玩家 $\exists$ 和 $\forall$ 按量词顺序赋值，$\exists$ 获胜当且仅当公式为真。
  - **FORMULA-GAME = TQBF**，故为 **PSPACE-完全**。
- **广义地理学（GENERAL-GEOGRAPHY）**：
  - 在有向图上交替选点，不可重复，无法移动者输。
  - **PSPACE-完全**（归约自 FORMULA-GAME）。
- **引申**：国际象棋、围棋等博弈在 $n \times n$ 棋盘上是 **PSPACE-难** 的。


### **3. 对数空间（Logarithmic Space）**
#### **(1) 模型与复杂度类**
- **模型调整**：输入带 **只读**，工作带空间限制为 $O(\log n)$。
- **复杂度类**：
  - $\text{L} = \text{SPACE}(\log n)$（确定型对数空间）。
  - $\text{NL} = \text{NSPACE}(\log n)$（非确定型对数空间）。
- **示例**：
  - **PAL（回文串）∈ L**。
  - **PATH（有向图可达性）∈ NL**（非确定地猜测路径节点）。

#### **(2) 基本性质**
- **包含关系**：
  - $\text{L} \subseteq \text{NL} \subseteq \text{P}$（Savitch 定理得 $\text{NL} \subseteq \text{SPACE}(\log^2 n)$）。
- **NL 问题判定**：
  - 构造配置图 $G_{M,w}$（节点为配置，边为一步转移）。
  - $M$ 接受 $w$ 当且仅当存在 $c_{\text{init}}$ 到 $c_{\text{acc}}$ 的路径。

#### **(3) NL 完备性**
- **对数空间归约（$\leq_L$）**：
  - 使用 **对数空间转换器（Transducer）**（输入带只读，工作带 $O(\log n)$，输出带只写）。
  - **关键性质**：若 $A \leq_L B$ 且 $B \in \text{L}$，则 $A \in \text{L}$（需动态生成输出符号，避免存储长字符串）。
- **NL-完全问题**：
  - **PATH 是 NL-完全** 的：
    1. $\text{PATH} \in \text{NL}$（非确定搜索路径）。
    2. **任意 NL 问题归约到 PATH**（构造配置图 $G_{M,w}$，对数空间输出边和起止点）。

#### **(4) NL = coNL**
- **Immerman-Szelepcsényi 定理**：$\text{NL} = \text{coNL}$。
- **意义**：NL 类对补运算封闭（与 NP 是否等于 coNP 的开放问题形成对比）。


### **4. 空间层次定理**
- **定理**：对任意 **空间可构造** 函数 $f(n)$，存在语言 $A$ 满足：
  $$
  A \in \text{SPACE}(f(n)) \quad \text{但} \quad A \notin \text{SPACE}(o(f(n))).
  $$
- **推论**：$\text{L} \subsetneq \text{PSPACE}$（对数空间严格包含于多项式空间）。


### **关键结论与关系图**
- **复杂度类包含关系**：
  $$
  \text{L} \subseteq \text{NL} \subseteq \text{P} \subseteq \text{NP} \subseteq \text{PH} \subseteq \text{P}^{\#\text{P}} \subseteq \text{PSPACE}
  $$
- **严格性**：$\text{L} \neq \text{PSPACE}$（由空间层次定理证明）。
- **核心问题与定理**：
  | **问题/定理**          | **复杂度类**  | **重要性**                     |
  |------------------------|---------------|--------------------------------|
  | TQBF                   | PSPACE-完全   | 首个 PSPACE 完备问题           |
  | Savitch 定理           | NSPACE ⊆ SPACE($f^2$) | 连接确定与非确定空间类 |
  | PATH                   | NL-完全       | NL 类的代表问题                |
  | Immerman-Szelepcsényi  | NL = coNL     | NL 对补封闭                   |
