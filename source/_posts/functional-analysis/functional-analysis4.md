---
title: Ch 2.1 泛函分析原理
tags:
  - math
  - functional analysis
categories:
  - math
  - functional analysis
excerpt: 泛函分析课程笔记
abbrlink: cd27c0e5
date: 2025-10-01 18:38:26
---
# §1 Baire纲集定理
用于说明可数开稠子集的交仍然是稠密的。

## 定义：Baire 纲集
$(X, d)$ 是度量空间。
1. 若 $A \subseteq X$ 满足 $\overline{A}$ 没有内点（即 $\forall x \in \overline{A}, \forall \varepsilon > 0, B(x, \varepsilon) \cap \overline{A}^C \neq \varnothing$），称 $A$ 是无处稠密的。
2. 若 $A = \bigcup_{i=1}^{\infty} A_i$，$A_i$ 是无处稠密的，则称 $A$ 是第一纲集。
3. 不是第一纲集的集合称为第二纲集。因若 $A^c$ 是第一纲集，则称 $A$ 是剩余集。


### 引理1（纲集的性质）：设 $(X, d)$ 是度量空间，则下列结论成立。

1. $A$ 是无处稠密的 $\Leftrightarrow A^c$ 是包含开的稠密集；
2. 若 $B$ 是第一纲集，$A \subseteq B$，则 $A$ 是第一纲集（即第一纲集的子集是第一纲集）；
3. 若 $A$ 是第二纲集，$A \subseteq B \subseteq X$，则 $B$ 是第二纲集（即包含第一纲集的集合仍是第二纲集）；
4. 可数并的第一纲集是第一纲集，可数交的剩余集是剩余集；
5. $R$ 是剩余集 $\Leftrightarrow R$ 含有可数个开的稠密集的交。


#### 证明：

1: 
首先，不难验证 $X \setminus \overline{A} = \text{int}(X \setminus A)$，其中 $\text{int}(A) = \left\{ x \in A \mid \exists \delta > 0, \text{ s.t. } B(x, \delta) \subseteq A \right\}$。

从而
$$
X \setminus \text{int}(\overline{A}) = \overline{X \setminus \overline{A}} = \overline{\text{int}(X \setminus A)}
$$

“$\Rightarrow$”：若 $\text{int}(\overline{A}) = \varnothing$，$\Rightarrow X = \overline{\text{int}(X \setminus A)}$，即 $X \setminus A$ 是开稠集。由于 $\text{int}(X \setminus A) \subseteq A^c$，$\Rightarrow$ 结论。

“$\Leftarrow$”：若 $A^c$ 包含开稠集，则 $\underbrace{\text{int}(X \setminus A)}_{\text{开}} \supseteq \text{开稠集}$，$\Rightarrow X = \overline{\text{int}(X \setminus A)} = X \setminus \text{int}(\overline{A})$，$\Rightarrow \text{int}(\overline{A}) = \varnothing$，$\Rightarrow$ 依定义。

2, 3, 4 可由定义验证。

5：

“$\Rightarrow$” 若 $R \subseteq X$ 是剩余集，$A = X \setminus R$ 是第一纲集 $\xRightarrow{\text{定义}} A = \bigcup_{j=1}^{\infty} A_j$, $A_j$ 是无处稠密集。

记 $U_i = X \setminus \overline{A_i} = \text{int}(X \setminus A_i)$，从而 $\overline{U_i} = \overline{\text{int}(X \setminus A_i)} = X \setminus \text{int}(\overline{A_i}) = X$ $\Rightarrow U_i$ 是开稠集。

$$
\bigcap_{i=1}^{\infty} U_i = X \setminus \bigcup_{i=1}^{\infty} \overline{A_i} \subseteq X \setminus \bigcup_{i=1}^{\infty} A_i = R \quad \Rightarrow \text{结论}.
$$

“$\Leftarrow$” 若 $\bigcap_{i=1}^{\infty} U_i \subseteq R$，其中 $U_i$ 是开稠集。记 $A_i = X \setminus U_i$ $\xRightarrow{\text{引理1①}} A_i$ 是无处稠密集，

$\Rightarrow A = \bigcup_{i=1}^{\infty} A_i$ 是第一纲集，$X \setminus R \subseteq X \setminus \bigcap_{i=1}^{\infty} U_i = \bigcup_{i=1}^{\infty} A_i = A$ $\Rightarrow$ 结论。


## Baire纲定理
若 $(X, d)$ 是非空完备度量空间，则下列结论成立。
1. 剩余集是稠密的；
2. $U \subseteq X$ 是非空开集，则 $U$ 是第二纲集；
3. 若 $A_i \subseteq X$ 是闭集且无内点，则 $\bigcup_{i=1}^{\infty} A_i$ 也无内点；
4. 若 $U_i \subseteq X$ 开集且稠密，则 $\bigcap_{i=1}^{\infty} U_i$ 是稠密的；
5. 剩余集是第二纲集。


### 命题：若 $(X, d)$ 是度量空间，则 1 $\Leftrightarrow$ 2 $\Leftrightarrow$ 3 $\Leftrightarrow$ 4

#### 证明：

- 1 $\Rightarrow$ 2：由于 $U$ 是开集 $\Rightarrow X \setminus U$ 不是稠密的 $\Rightarrow X \setminus U$ 不是剩余集 $\Rightarrow U$ 不是第一纲集。
- 2 $\Rightarrow$ 3：由定义知 $\bigcup_{i=1}^{\infty} A_i$ 是第一纲集。（反证法）若 $\bigcup_{i=1}^{\infty} A_i$ 会有内点，即 $\bigcup_{i=1}^{\infty} A_i$ 包含一开集 $\Longrightarrow \bigcup_{i=1}^{\infty} A_i$ 是第二纲集，这与 $\bigcup_{i=1}^{\infty} A_i$ 是第一纲集矛盾，$\Rightarrow$ 结论。
- 3 $\Rightarrow$ 4：记 $A_i = X \setminus U_i$；$\xRightarrow{\text{由引理1①}} A_i$ 是无处稠密的且是闭集 $\xRightarrow{\text{③}} \bigcup_{i=1}^{\infty} A_i$ 无内点。由于 $\left( \bigcup_{i=1}^{\infty} A_i \right)^C = \bigcap_{i=1}^{\infty} U_i$，从而 $\bigcap_{i=1}^{\infty} U_i$ 是稠密的。否则若 $\bigcap_{i=1}^{\infty} U_i$ 不稠，$\exists x_0 \in X$ 以及 $\varepsilon > 0$，s.t. $B(x_0; \varepsilon) \cap \bigcap_{i=1}^{\infty} U_i = \varnothing$，由上式，有 $B(x_0; \varepsilon) \subseteq \bigcup_{i=1}^{\infty} A_i$，这与条件矛盾。
- 4 $\Rightarrow$ 1：假设 $R$ 是剩余集，由引理1⑤，$R$ 是稠密的。

### Baire 纲定理的证明
#### 首先 2 $\Rightarrow$ 5：

假设 $R$ 是剩余集 $\Rightarrow X \setminus R$ 是第一纲集。若 $R$ 是第一纲集，$\Rightarrow X = (X \setminus R) \cup R$ 是第一纲集，这与②矛盾 $\Rightarrow R$ 是第二纲集。（$X$ 是非空开集）。


#### 4的证明：
假设 $U_i$ 是开稠集。则：
$$
\bigcap_{i=1}^{\infty} U_i \text{ 是稠密的} \Longleftrightarrow \forall x_0 \in X, \forall \varepsilon_0 > 0, \quad B(x_0; \varepsilon_0) \cap \left( \bigcap_{i=1}^{\infty} U_i \right) \neq \varnothing
$$

由于 $U_i$ ($i \ge 1$) 是开稠集，$\Rightarrow B(x_0; \varepsilon_0) \cap U_1 \neq \varnothing$，即 $\exists x_1 \in U_1 \cap B(x_0; \varepsilon_0)$。

选取$\epsilon_n$：
$$
\varepsilon_1 < \frac{1}{2} \varepsilon_0, \quad \overline{B(x_1; \varepsilon_1)} \subset U_1 \cap B(x_0; \varepsilon_0)\\
......\\
\varepsilon_k < 2^{-k} \varepsilon_0, \quad B(x_k; \varepsilon_k) \subset U_k \cap B(x_{k+1}; \varepsilon_{k+1})
$$

$\Rightarrow d(x_k, x_{k+1}) < 2^{-(k+1)} \Rightarrow \{x_k\}_{k \ge 1}$ 是 $X$ 中的 Cauchy 列。

由完备性，$\exists x^* \in X$，s.t. $d(x_k, x^*) \to 0$，当 $k \to +\infty$。

$\Rightarrow \forall k \ge k_0, \quad x_k \in B(x_k; \varepsilon_k) \Rightarrow x^* \in \overline{B(x_k, \varepsilon_k)} \subset U_k$

$$
\Rightarrow x^* \in B(x_0; \varepsilon_0) \cap \left( \bigcap_{j \ge 1} U_j \right) \quad \Rightarrow \bigcap_{j \ge 1} U_j \text{ 是稠密的}.
$$


### 注：

- 证明用到了“依赖选择公理”：
  若 $A: X \to 2^X$（$\Rightarrow \forall x \in X, A(x) \subseteq X$ 且 $A(x)$ 非空），则 $\exists \{x_k\}_{k \ge 1} \subseteq X$，s.t. $x_{k+1} \in A(x_k), \quad \forall k \ge 1$。

- 对于上述选取过程：假定
  $$
  X \overset{\text{记}}{=} \left\{ (k, x, \varepsilon) \mid k \ge 1, x \in X, 0 < \varepsilon < 2^{-k}, \overline{B(x; \varepsilon)} \subset U_k \cap B(x_0; \varepsilon_0) \right\}
  $$

  且
  $$
  A(k, x, \varepsilon) := \left\{ (\tilde{k}, \tilde{x}, \tilde{\varepsilon}) \in X \mid \tilde{k} = k+1, B(\tilde{x}; \tilde{\varepsilon}) \subseteq B(x; \varepsilon) \right\}
  $$