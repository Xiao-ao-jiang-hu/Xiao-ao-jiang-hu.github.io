---
title: TCS Lec9总结
tags:
  - tcs
categories:
  - tcs
index_img: /img/tcs.jpg
banner_img: /img/tcs.jpg
excerpt: 本节课介绍了λ演算的等式理论、η-规则及其意义、不动点定理及不动点组合子的构造，
abbrlink: aadd512d
date: 2025-05-25 22:03:26
---

## λ 演算（Lambda Calculus）

### 1. 动机与历史背景
- λ 演算是与图灵机等价的**计算模型**，但更贴近**函数式编程**。
- 是函数式语言（如 LISP、ML、Haskell）的理论基础。
- 核心思想：**函数与参数处于同一层次**，支持高阶函数和匿名函数。

### 2. 语法：λ 项（Terms）
λ 项由以下三条规则**归纳定义**：

- **变量**（Variable）：若 $x$ 是变量，则 $x \in \Lambda$；
- **抽象**（Abstraction）：若 $s \in \Lambda$，则 $\lambda x.s \in \Lambda$；
- **应用**（Application）：若 $s, t \in \Lambda$，则 $(st) \in \Lambda$。

简写约定（避免括号混乱）：
- 左结合：$xyz \equiv ((xy)z)$；
- 抽象体向右延伸：$\lambda x.st \equiv \lambda x.(st)$；
- 多重抽象右结合：$\lambda xy.xz \equiv \lambda x.(\lambda y.(xz))$。

### 3. 自由变量与约束变量
- **自由变量集** $FV(s)$ 定义如下：
  - $FV(x) = \{x\}$
  - $FV(st) = FV(s) \cup FV(t)$
  - $FV(\lambda x.s) = FV(s) \setminus \{x\}$
- 若 $FV(s) = \emptyset$，则称 $s$ 为**闭项**（combinator）。
- 常见组合子：
  - $\mathbf{i} \equiv \lambda x.x$（恒等）
  - $\mathbf{k} \equiv \lambda x y.x$（常量函数）
  - $\mathbf{s} \equiv \lambda x y z. x z (y z)$
  - $\mathbf{t} \equiv \lambda x y.x$，$\mathbf{f} \equiv \lambda x y.y$（布尔真/假）
  - $\Omega \equiv (\lambda x.xx)(\lambda x.xx)$（发散项）

### 4. α-转换（Alpha-conversion）
- 绑定变量是“哑变量”，可重命名而不改变含义。
- 例如：$\lambda x.x \equiv_\alpha \lambda y.y$
- 要求：重命名时不能与自由变量冲突。
- 在语法层面，α-等价的项被视为**相同**。

### 5. β-归约（Beta-reduction）
- 核心计算规则：  
  $$
  (\lambda x.s)\, t \;\; \to_\beta \;\; s[t/x]
  $$
  其中 $s[t/x]$ 表示将 $s$ 中所有**自由出现的** $x$ 替换为 $t$。
- **替换需避免变量捕获**（variable capture）：
  - 例如：$(\lambda x. y x)[\lambda z. x z / y]$ 不能直接替换为 $\lambda x. (\lambda z. x z) x$，因为内部的 $x$ 会被错误绑定。
  - 正确做法：先 α-转换内部绑定变量（如将 $x$ 改为 $x'$），再替换。

### 6. 等式理论（Equational Theory）
- λ 演算的“理论”是一组**项之间的等式**。
- **λβ 理论**包含以下推理规则：
  - 自反、对称、传递；
  - 应用与抽象的**同余性**（congruence）；
  - β-等式：$(\lambda x.s)t = s[t/x]$
- 可构造**证明树**或线性证明链（如 $(\lambda x y.x) p q = p$）。

### 7. η-规则（Eta-rule）
- 扩展 λβ 为 **λβη 理论**，增加：
  $$
  \lambda x. s x = s \quad \text{（当 } x \notin FV(s) \text{）}
  $$
- 体现**外延性原则**（extensionality）：若两个函数对所有输入行为相同，则它们相等。
- η-规则不能由 β-规则推出。

### 8. 不动点定理（Fixed-Point Theorem）
- **核心结论**：任意 λ 项 $f$ 都存在不动点 $u$，使得 $f u = u$（在 λβ 中可证）。
- **不动点组合子**（Fixed-point combinator）：
  - **Y 组合子**（Curry）：
    $$
    Y \equiv \lambda f. (\lambda x. f (x x)) (\lambda x. f (x x))
    $$
    满足 $Y f \to_\beta f (Y f)$
  - **Θ 组合子**（Turing）：
    $$
    \Theta \equiv (\lambda x y. y (x x y)) (\lambda x y. y (x x y))
    $$
- **推导思路**（“自引用技巧”）：
  - 欲解 $X = f X$，令 $X = (\lambda x. f (x x)) (\lambda x. f (x x))$
  - 则 $X \to_\beta f (X)$，即为不动点。
