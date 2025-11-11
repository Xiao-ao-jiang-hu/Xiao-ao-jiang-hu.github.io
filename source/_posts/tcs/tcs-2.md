---
title: TCS Lec2总结
tags:
  - tcs
categories:
  - tcs
index_img: /img/tcs.jpg
banner_img: /img/tcs.jpg
excerpt: >-
  本节深入探讨了λ演算的计算机制，包括β-归约、相容闭包、归约策略、Church-Rosser性质及其证明，并展示了如何用λ演算编码布尔值、自然数及基本算术运算，奠定了其作为通用编程语言的基础。
abbrlink: a8da05d7
date: 2025-05-25 22:43:17
---

### **第一部分：λ演算的计算机制**

#### **1. β-归约 (Beta-Reduction)**
**目标**：理解λ演算中“计算”的核心驱动机制——β-归约。
*   **动机**：代换（Substitution）是实现计算的关键，但它是非对称的。我们关注其“归约”部分，即 $(\lambda x.s)t \to_\beta s[t/x]$，这构成了λ演算的计算驱动力。
*   **定义**：β-归约是基于关系 $\beta$ 的二元关系，其中 $\beta$ 定义为 $(\lambda x.s)t \ \beta \ s[t/x]$。它不是等价关系。
*   **记号**：
    *   一步β-归约：$s \to_\beta t$
    *   多步β-归约（自反传递闭包）：$s \twoheadrightarrow_\beta t$
    *   β-可转换（自反对称传递闭包）：$s =_\beta t$

#### **2. 相容闭包 (Compatible Closure)**
**目标**：将基础的归约关系扩展到整个项结构中。
*   **定义**：对于任意二元关系 $R$，其一步 $R$ 归约（$\to_R$）是 $R$ 的相容闭包，由以下规则诱导：
    1.  **(R)** 基础规则：若 $\langle s, t \rangle \in R$，则 $s \to_R t$。
    2.  **(左归约)** 若 $s \to_R t$，则 $su \to_R tu$。
    3.  **(右归约)** 若 $s \to_R t$，则 $us \to_R ut$。
    4.  **(抽象下归约)** 若 $s \to_R t$，则 $\lambda x.s \to_R \lambda x.t$。
*   **术语**：在 $s \to_R t$ 中，$t$ 称为 $s$ 的**归约项 (reduct)**。
*   **闭包**：
    *   $\twoheadrightarrow_R$ 是 $\to_R$ 的自反传递闭包。
    *   $=_R$ 是 $\to_R$ 的自反对称传递闭包。

#### **3. 归约示例 (Examples)**
*   **例1**: 演示了组合子 `skk` 如何通过一系列β-归约最终得到恒等组合子 `i`。
    $$
    \text{skk} \equiv (\lambda xyz.(xz)(yz))kk \to_\beta \lambda yz.(kz)(yz)k \to_\beta \lambda z.(kz)(kz) \equiv \lambda z.((\lambda xy.x)z)(kz) \to_\beta \lambda z.(\lambda y.z)(kz) \to_\beta \lambda z.z \equiv i.
    $$
*   **例2**: 介绍了不动点组合子 `Ω`，它满足 $\Omega \to_\beta \Omega$，是一个无限归约的例子。
*   **注释**: 提到了 `Θf` 和 `yf` 这两个重要的不动点组合子，它们满足 $\Theta f \twoheadrightarrow_\beta f(\Theta f)$ 和 $yf =_\beta f(yf)$。

#### **4. 正规形 (Normal Form)**
**目标**：区分哪些项可以被“完全计算”。
*   **定义**：
    *   **正规形 (Normal Form)**: 一个项 $s$ 是正规形，如果不存在任何项 $t$ 使得 $s \to_\beta t$。
    *   **有正规形 (Has a Normal Form)**: 一个项 $s$ 有正规形，如果存在一个正规形项 $t$ 使得 $s \twoheadrightarrow_\beta t$。也称为**可正规化 (normalizable)**。
    *   **强可正规化 (Strongly Normalizable)**: 一个项 $s$ 是强可正规化的，如果不存在无限序列 $t_1, t_2, ...$ 使得 $s \to_\beta t_1 \to_\beta t_2 \to_\beta \cdots$。
*   **示例**:
    *   $\lambda x.x$ 是正规形。
    *   $(\lambda x.x)(\lambda x.x)$ 有正规形且是强可正规化的。
    *   $\Omega$ 甚至不可正规化，因为它会无限归约。
    *   $f \Omega i$ 是可正规化的（它可以归约为 $i$），但不是强可正规化的（因为 $\Omega$ 会导致无限归约）。

#### **5. 归约策略 (Reduction Strategy)**
**目标**：探讨不同的归约顺序是否会影响最终结果。
*   **左归约定理 (Reduction Theorem)**: 左归约（Leftmost reduction）总是能在正规形存在时找到它。
    *   **左归约定义**: 在项 $s$ 中，选择最左边的红ex（redex，即可归约表达式）$(\lambda x.u)v$ 进行归约。
*   **关联性**: 该定理与编程语言中的“传值调用”（call-by-value）和“传名调用”（call-by-name）的区别有关。

#### **6. Church-Rosser 性质**
**目标**：解决不同归约路径是否会得到不同结果的问题。
*   **问题**: 不同的归约策略是否会导致不同的正规形？
*   **定义**:
    1.  **菱形性质 (Diamond Property)**: 关系 $\to$ 满足菱形性质，如果 $s \to u$ 且 $s \to v$ 蕴含存在某个 $t$ 使得 $u \to t$ 且 $v \to t$。
    2.  **Church-Rosser 性质**: 关系 $\to$ 是 Church-Rosser 的，如果其自反传递闭包 $\twoheadrightarrow$ 满足菱形性质。
    3.  **唯一正规形性质 (Unique Normal Form Property)**: 关系 $\to$ 具有唯一正规形性质，如果 $s \twoheadrightarrow t_1$ 且 $s \twoheadrightarrow t_2$，且 $t_1, t_2$ 都是正规形，则 $t_1 \equiv t_2$。
*   **简单观察**:
    *   **引理1**: 如果 $\to$ 是 Church-Rosser 的，则它具有唯一正规形性质。
    *   **引理2**: 如果 $\to$ 满足菱形性质，则 $\twoheadrightarrow$ 也满足菱形性质。
    *   **引理3**: 如果 $\to$ 具有 Church-Rosser 性质，且 $=$ 是其反射、对称、传递闭包，则 $s = t$ 当且仅当存在某个 $u$ 使得 $s \twoheadrightarrow u$ 且 $t \twoheadrightarrow u$。
    *   **推论**: 如果 $\to$ 具有 Church-Rosser 性质，且 $s$ 和 $t$ 是正规形并满足 $s = t$，则 $s \equiv t$。
    *   **η规则**: η规则（如 $x$ 和 $\lambda y.xy$）不能从β规则推导出来，因为它们是不α等价的正规形。

#### **7. β-归约的 Church-Rosser 性质**
**目标**：证明β-归约具有 Church-Rosser 性质，这是λ演算的一个根本性结果。
*   **定理2 (Church and Rosser, 1936)**: β-归约具有 Church-Rosser 性质。
*   **注意**: $\to_\beta$ 本身**不**满足菱形性质。例如，考虑 $s \equiv (\lambda x.xx)((\lambda x.y)z)$，它可以归约为 $u \equiv ((\lambda x.y)z)((\lambda x.y)z)$ 或 $v \equiv (\lambda x.xx)y$，而这两个归约项需要多步才能汇合。

#### **8. 证明策略与平行归约**
**目标**：介绍证明 Church-Rosser 性质的一种方法。
*   **挑战**: 直接证明菱形性质或其变体通常很困难。
*   **解决方案 (Martin-Löf & Tait)**: 定义一个**并行β-归约**（Parallel β-reduction, $\to_\parallel$）。
*   **并行归约规则**:
    1.  **(refl)**: $s \to_\parallel s$
    2.  **(abs)**: 若 $s \to_\parallel s'$，则 $\lambda x.s \to_\parallel \lambda x.s'$
    3.  **(∥-app)**: 若 $s \to_\parallel s'$ 且 $t \to_\parallel t'$，则 $st \to_\parallel s't'$
    4.  **(∥-β)**: 若 $s \to_\parallel s'$ 且 $t \to_\parallel t'$，则 $(\lambda x.s)t \to_\parallel s'[t'/x]$
*   **证明思路**:
    1.  证明 $\to_\parallel$ 满足**菱形性质**。
    2.  证明 $\twoheadrightarrow_\beta$ 是 $\to_\parallel$ 的**传递闭包**。
*   **关键引理 (Substitution Lemma)**: 若 $s \to_\parallel s'$ 且 $t \to_\parallel t'$，则 $s[t/x] \to_\parallel s'[t'/x]$。（证明通过结构归纳法进行）


### **第二部分：λ演算作为编程语言**

#### **1. 核心思想**
λ演算不仅是理论模型，更是许多函数式编程语言的基础。它无需添加额外语法或公理，即可编码数据和操作数据的程序。

#### **2. 布尔值 (Booleans)**
*   **编码**:
    *   真: $t \equiv \lambda xy.x$
    *   假: $f \equiv \lambda xy.y$
*   **逻辑与 (and)**: 定义为 $\text{and} \equiv \lambda ab.abf$。
    *   验证: $\text{and}\ t\ t \twoheadrightarrow_\beta t$, $\text{and}\ t\ f \twoheadrightarrow_\beta f$, $\text{and}\ f\ t \twoheadrightarrow_\beta f$, $\text{and}\ f\ f \twoheadrightarrow_\beta f$。
    *   因为 $t$ 和 $f$ 是正规形，我们可以说 `andtt` 计算结果为 $t$。
*   **其他编码**: 也可以定义 $\text{and} \equiv \lambda ab.bab$。
*   **条件表达式 (ite)**: 定义为 $\text{ite} \equiv \lambda x.x$。
    *   验证: $\text{ite}\ t\ s\ t \twoheadrightarrow_\beta s$, $\text{ite}\ f\ s\ t \twoheadrightarrow_\beta t$。
    *   注意：`ite` 可以省略，直接使用布尔值本身。

#### **3. 自然数 (Natural Numbers)**
*   **Church 数 (Church Numerals)**: 使用高阶函数编码自然数。
    *   对于自然数 $n \geq 0$，定义 $n \equiv \lambda fx.f^n x$，其中 $f^n x$ 表示 $f$ 应用 $n$ 次。
    *   示例:
        *   $0 \equiv \lambda fx.x$
        *   $1 \equiv \lambda fx.fx$
        *   $2 \equiv \lambda fx.f(fx)$
        *   $3 \equiv \lambda fx.f(f(fx))$
        *   ...
*   **解释**: 这种编码对应于皮亚诺公理，其中 $f$ 代表后继函数，$x$ 代表零。
*   **巧合**: $0$ 与 `f`（假）的编码相同，因此在无类型λ演算中，需要预先知道结果应被解释为布尔值还是数值。

#### **4. 算术运算 (Arithmetic Operations)**
*   **后继函数 (Successor)**: $\text{succ} \equiv \lambda nfx.f(nfx)$。
    *   验证: $\text{succ}\ n \equiv (\lambda nfx.f(nfx))n \to_\beta \lambda fx.f(nfx) \twoheadrightarrow_\beta \lambda fx.f(f^n x) \equiv n+1$。
*   **加法 (Addition)**: $\text{add} \equiv \lambda nmfx.nf(mfx)$。
*   **乘法 (Multiplication)**: $\text{mult} \equiv \lambda nmf.n(mf)$。

#### **5. Currying**
*   **概念**: 在λ演算中，多参数函数通过Currying实现。一个接受多个参数的函数 $f(x,y)$ 被表示为接受一个参数 $x$ 并返回一个新函数 $\lambda y.f(x,y)$。
*   **示例**:
    *   $\lambda xy.\text{add}\ x\ y$ 接受参数 $a$ 后归约为 $\lambda y.\text{add}\ a\ y$。
    *   Church 数字 $m = \lambda fx.f^m x$，应用 $m f$ 得到 $\lambda x.f^m x$，这是一个将 $x$ 映射到 $f^m x$ 的函数。
*   **反Currying (Uncurrying)**: 将返回函数的函数转换为接受多个参数的函数。

#### **6. 一般函数 (General Functions)**
*   **定义**: 一个λ项 $s$ 代表一个 $k$ 元函数 $f: \mathbb{N}^k \to \mathbb{N}$，如果对于所有自然数 $n_1, ..., n_k$，都有 $s\ n_1\ \cdots\ n_k \twoheadrightarrow_\beta f(n_1, ..., n_k)$。
*   **推广**: 此定义可推广到布尔函数或其他数据类型。

#### **7. 示例与重要函数**
*   **iszero 函数**: $\text{iszero} \equiv \lambda nxy.n(\lambda z.y)x$。
    *   验证: $\text{iszero}\ 0 \to_\beta \lambda xy.(\lambda fx.x)(\lambda z.y)x \twoheadrightarrow_\beta \lambda xy.x \equiv t$。
    *   对于 $n \geq 1$: $\text{iszero}\ n \to_\beta \lambda xy.n(\lambda z.y)x \twoheadrightarrow_\beta \lambda xy.y \equiv f$。
*   **前驱函数 (pred)**: 定义为 $\text{pred}(n) = \begin{cases} 0 & \text{if } n=0 \\ n-1 & \text{otherwise} \end{cases}$。
    *   **历史**: Church 曾认为不可能实现，直到他的学生 Kleene 发现了“智慧齿技巧”（wisdom teeth trick）。
    *   **重要性**: 用于证明递归函数与λ演算的等价性。
*   **指数函数 (exp)**: 见作业。

