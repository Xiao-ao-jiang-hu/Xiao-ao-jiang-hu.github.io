---
title: TCS Lec4总结
tags:
  - tcs
categories:
  - tcs
excerpt: 本节深入探讨了 Kleene 递归定理及其在自复制程序、不可判定性证明中的应用，介绍了 Rogers 不动点定理，并借助递归定理给出了 Gödel 不完备性定理的计算视角证明，包括第一与第二不完备性定理的构造性论证。
abbrlink: cb0a30ed
date: 2025-05-26 11:15:44
---

### **第一部分：Kleene 递归定理（Kleene’s Recursion Theorem）**

#### **1.1 动机与背景**
- Kleene 是 Church 的学生，受 λ 演算中 **Y 组合子**（不动点组合子）启发，提出递归定理。
- 核心思想：**图灵机可以获取自身描述并据此进行计算**。
- 应用广泛：自复制程序、计算机病毒、逻辑自指、不可判定性证明。

#### **1.2 自打印图灵机 SELF 的构造**
目标：构造 TM $ \text{SELF} $，使得对任意输入，$ \text{SELF} $ 输出其自身编码 $ \langle \text{SELF} \rangle $。

##### **关键引理**：
> **引理 1**：存在可计算函数 $ q: \Sigma^* \to \Sigma^* $，使得对任意字符串 $ w $，$ q(w) = \langle P_w \rangle $，其中 $ P_w $ 是忽略输入、输出 $ w $ 后停机的 TM。

**构造 SELF**：
- 将 $ \text{SELF} $ 分为两部分：$ A $ 和 $ B $。
  - $ A = P_{\langle B \rangle} $：输出 $ \langle B \rangle $。
  - $ B $：读取 tape 上的 $ \langle B \rangle $，计算 $ q(\langle B \rangle) = \langle A \rangle $，拼接为 $ \langle AB \rangle = \langle \text{SELF} \rangle $，并输出。

**执行流程**：
1. $ A $ 运行 → tape 上为 $ \langle B \rangle $。
2. $ B $ 读取 $ \langle B \rangle $ → 计算 $ \langle A \rangle $ → 拼接得 $ \langle \text{SELF} \rangle $ → 输出。

**编程语言实现（Python）**：
```python
s = 's=%r;print(s%%s)'; print(s % s)
```
此程序输出自身，是 SELF 的具体实例。


#### **1.3 Kleene 递归定理的正式陈述与证明**

> **定理（Kleene 递归定理）**：  
> 设 $ T $ 是计算函数 $ t: \Sigma^* \times \Sigma^* \to \Sigma^* $ 的 TM，则存在 TM $ R $ 计算函数 $ r: \Sigma^* \to \Sigma^* $，使得对任意 $ w \in \Sigma^* $，
> $$
> r(w) = t(\langle R \rangle, w).
> $$

**构造性证明**：
- 将 $ R $ 分为三部分：$ A $、$ B $、$ T $。
  - $ A = P_{\langle BT \rangle} $：在输入 $ w $ 后，将 $ \langle BT \rangle $ 写在 $ w $ 之后（tape 内容变为 $ w \langle BT \rangle $）。
  - $ B $：从 tape 中提取 $ \langle BT \rangle $，计算 $ q(\langle BT \rangle) = \langle A \rangle $，拼接得 $ \langle R \rangle = \langle ABT \rangle $，将 tape 改为 $ \langle R \rangle, w $，移交控制权给 $ T $。
  - $ T $：计算 $ t(\langle R \rangle, w) $。

**结论**：$ R(w) = T(\langle R \rangle, w) = t(\langle R \rangle, w) $，满足定理要求。


#### **1.4 应用**

##### **(1) 重写 SELF**
利用递归定理，可简洁定义：
> **SELF** = “On any input:  
> 1. Obtain own description $ \langle \text{SELF} \rangle $ via recursion theorem;  
> 2. Print $ \langle \text{SELF} \rangle $.”

##### **(2) 证明 $ A_{\text{TM}} $ 不可判定**
> $ A_{\text{TM}} = \{ \langle M, w \rangle \mid M \text{ accepts } w \} $

**反证**：假设存在判定器 $ H $。
- 构造 $ B $ = “On input $ w $:  
> 1. Obtain $ \langle B \rangle $;  
> 2. Run $ H $ on $ \langle B, w \rangle $;  
> 3. **Do the opposite**: accept if $ H $ rejects, reject if $ H $ accepts.”

则 $ H $ 在 $ \langle B, w \rangle $ 上行为矛盾 ⇒ $ A_{\text{TM}} $ 不可判定。

##### **(3) 最小图灵机问题（$ \text{MIN}_{\text{TM}} $）**
> $ \text{MIN}_{\text{TM}} = \{ \langle M \rangle \mid M \text{ 是描述最短的等价 TM} \} $

**定理**：$ \text{MIN}_{\text{TM}} $ **不是图灵可识别的**。

**证明**（反证）：
- 假设存在枚举器 $ E $ 枚举 $ \text{MIN}_{\text{TM}} $。
- 构造 $ C $ = “On input $ w $:  
> 1. Obtain $ \langle C \rangle $;  
> 2. Run $ E $ 直到找到描述长于 $ \langle C \rangle $ 的 TM $ D $；  
> 3. Simulate $ D $ on $ w $。”

由于 $ \text{MIN}_{\text{TM}} $ 无限，$ D $ 必存在。但 $ C \equiv D $ 且 $ |\langle C \rangle| < |\langle D \rangle| $，故 $ D \notin \text{MIN}_{\text{TM}} $，矛盾。

##### **(4) Rogers 不动点定理（Rogers’ Fixed-Point Theorem）**
> **定理**：设 $ t: \Sigma^* \to \Sigma^* $ 可计算，则存在 TM $ F $，使得 $ t(\langle F \rangle) $ 描述的机器与 $ F $ **等价**。

**证明**：
- 构造 $ F $ = “On input $ w $:  
> 1. Obtain $ \langle F \rangle $;  
> 2. Compute $ G = t(\langle F \rangle) $;  
> 3. Simulate $ G $ on $ w $.”

则 $ L(F) = L(G) $，即 $ F \equiv G $，满足不动点性质。

> **注**：该定理等价于 Kleene 递归定理，且可直接用 Y 组合子思想证明。


### **第二部分：Gödel 不完备性定理（Gödel’s Incompleteness Theorems）**

#### **2.1 背景与逻辑基础**
- **目标**：形式系统能否完备地刻画算术真理？
- **形式系统要求**：
  - **可计算公理**：公理集是递归可枚举的。
  - **足够表达力**：能编码图灵机、自然数运算（如 Peano Arithmetic, PA；ZFC 集合论）。

#### **2.2 Gödel 第一不完备性定理**

> **定理（第一不完备性）**：  
> 任何一致（consistent）且足够强的形式系统（如 PA、ZFC），若其公理集可计算，则**存在真但不可证的句子**。

##### **计算视角证明（借助递归定理）**
考虑语言：
$$
\text{HALT}_\varepsilon = \{ \langle M \rangle \mid M \text{ 在空输入上停机} \}
$$

**关键引理**：
> 若 $ M $ 在 $ w $ 上停机，则存在 ZFC 证明该事实（通过验证配置序列）。

**构造对角化机器 $ D $**：
> $ D $ = “On any input:  
> 1. Obtain $ \langle D \rangle $ via recursion theorem;  
> 2. 枚举所有字符串 $ P $（按长度）：  
>   (a) 若 $ P $ 是 ZFC 对 “$ D $ halts” 的证明 → **进入无限循环**；  
>   (b) 若 $ P $ 是 ZFC 对 “$ D $ loops” 的证明 → **停机**。”

**分析**：
- **情况 1**：ZFC 证明 “$ D $ loops”  
  → $ D $ 停机 → 存在 ZFC 证明 “$ D $ halts”（由引理）→ **矛盾**（不一致）。
- **情况 2**：ZFC 证明 “$ D $ halts”  
  → $ D $ 进入无限循环 → 可构造 ZFC 证明 “$ D $ loops”（验证前 $ T+1 $ 步配置）→ **矛盾**。

**结论**（假设 ZFC 一致）：
- ZFC **既不能证明 “$ D $ halts”，也不能证明 “$ D $ loops”**。
- 但二者必有一真（经典逻辑排中律）→ **存在真但不可证的句子**。

> 此即 Gödel 第一不完备性定理的构造性证明。

#### **2.3 Gödel 第二不完备性定理**

> **定理（第二不完备性）**：  
> 若 ZFC 一致，则 ZFC **无法证明自身的一致性**。

##### **证明思路**
- 由上述构造可知：
  $$
  \text{ZFC} \vdash (\text{Con(ZFC)} \rightarrow \text{“}D \text{ loops”})
  $$
  其中 $ \text{Con(ZFC)} $ 表示 “ZFC 一致”。
- 但已证：ZFC 无法证明 “$ D $ loops”。
- 故若 ZFC 能证明 $ \text{Con(ZFC)} $，则可推出 “$ D $ loops”，矛盾。
- 因此：
  $$
  \text{ZFC} \nvdash \text{Con(ZFC)}.
  $$

> **意义**：希尔伯特纲领（用有限方法证明数学系统一致性）**不可能实现**。


### **第三部分：补充说明**

#### **3.1 Gödel 编号（Gödel Numbering）**
- 将符号、公式、证明编码为自然数。
- 例如：句子 “Statement $ g $ has no proof” 的 Gödel 数为 $ g $。
- 实现了**语法 ↔ 算术**的映射，使自指成为可能。

#### **3.2 与停机问题的类比**
| 概念                | 停机问题                    | Gödel 不完备性      |
| ------------------- | --------------------------- | ------------------- |
| 核心对象            | 图灵机 $ M $                | 形式系统（如 ZFC）  |
| 不可判定/不可证命题 | “$ M $ 在 $ w $ 上是否停机” | “某句子是否可证”    |
| 对角化工具          | 自引用 TM $ D $             | 自指句子 “我不可证” |
| 结论                | 存在不可判定问题            | 存在真但不可证句子  |

#### **3.3 哲学意义**
- **数学真理 ≠ 可证性**。
- **任何形式系统都有其局限性**。
- **自指是逻辑与计算的核心机制**（从 Y 组合子到病毒，再到不完备性）。
