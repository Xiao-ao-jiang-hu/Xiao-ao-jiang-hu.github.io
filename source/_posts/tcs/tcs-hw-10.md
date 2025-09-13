---
title: TCS Homework 10
tags:
  - tcs
categories:
  - tcs
excerpt: TCS Homework 10
abbrlink: 5c4e5ed9
date: 2025-05-31 15:22:21
---
## 10.1

### 题目
(a) 设 $X$ 为一个取值于 $[0, 1]$ 的随机变量。证明若 $\mathbb{E}(X) = \epsilon$，则  
$$
\Pr \left( X \geq \frac{\epsilon}{2} \right) \geq \frac{\epsilon}{2}.
$$ 
(b) 设 $X \geq 0$ 为一个随机变量。证明  
$$
\Pr(X = 0) \leq \frac{\text{Var}(X)}{\left(\mathbb{E}(X)\right)^2}.
$$

### 解答
(a) 设 $X \in [0, 1]$ 且 $\mathbb{E}[X] = \epsilon$。我们的目标是证明 $\Pr \left( X \geq \frac{\epsilon}{2} \right) \geq \frac{\epsilon}{2}$。  
假设反证法，即 $\Pr \left( X \geq \frac{\epsilon}{2} \right) < \frac{\epsilon}{2}$。那么：  
$$
\mathbb{E}[X] = \mathbb{E}\left[X \mid X \geq \frac{\epsilon}{2}\right] \Pr\left(X \geq \frac{\epsilon}{2}\right) + \mathbb{E}\left[X \mid X < \frac{\epsilon}{2}\right] \Pr\left(X < \frac{\epsilon}{2}\right).
$$ 
由于 $X \leq 1$ 且在第二项中 $X < \frac{\epsilon}{2}$，有：  
$$
\epsilon \leq 1 \cdot \frac{\epsilon}{2} + \frac{\epsilon}{2} \cdot \left( 1 - \frac{\epsilon}{2} \right).
$$ 
简化：  
$$
\epsilon \leq \frac{\epsilon}{2} + \frac{\epsilon}{2} - \frac{\epsilon^2}{4} \implies \epsilon \leq \epsilon - \frac{\epsilon^2}{4},
$$ 
这导致矛盾（除非 $\epsilon = 0$）。因此，$\Pr \left( X \geq \frac{\epsilon}{2} \right) \geq \frac{\epsilon}{2}$。  

(b) 对于 $X \geq 0$，证明 $\Pr(X = 0) \leq \frac{\text{Var}(X)}{(\mathbb{E}[X])^2}$。  
使用切比雪夫不等式，令 $\mu = \mathbb{E}[X]$：  
$$
\Pr(|X - \mu| \geq \mu) \leq \frac{\text{Var}(X)}{\mu^2}.
$$ 
由于 $X \geq 0$，当 $X = 0$ 时，有 $|X - \mu| \geq \mu$。因此：  
$$
\Pr(X = 0) \leq \Pr(|X - \mu| \geq \mu) \leq \frac{\text{Var}(X)}{\mu^2}.
$$

## 10.2
### 题目
设 RandomSign(n) 是一个向量分布，其中每个向量包含 $n$ 个条目，且每个条目独立地以概率 $\frac{1}{2}$ 选择为 $\pm 1$。抽取 $m$ 个向量 $\mathbf{v}^{(1)}, \mathbf{v}^{(2)}, \ldots, \mathbf{v}^{(m)} \sim$ RandomSign(n)。定义归一化向量 $\mathbf{w}^{(i)} = \mathbf{v}^{(i)} / \sqrt{n}$，使得对所有 $i = 1, 2, \ldots, m$ 有 $\|\mathbf{w}^{(i)}\| = 1$。证明以下结论：  
(a) 对所有 $i \neq j$，内积 $\left\langle \mathbf{w}^{(i)}, \mathbf{w}^{(j)} \right\rangle = \sum_k \mathbf{w}_k^{(i)} \mathbf{w}_k^{(j)}$ 以高概率很小。即：  

$$
\Pr\left( \left| \left\langle \mathbf{w}^{(i)}, \mathbf{w}^{(j)} \right\rangle \right| \geq \delta \right) \leq \exp\left(-\Omega(\delta^2 n)\right).
$$

(b) 存在某个 $m = \exp(\Omega(\delta^2 n))$，使得这 $m$ 个向量以高概率两两近似正交。更精确地：  

$$
\Pr\left( \left| \left\langle \mathbf{w}^{(i)}, \mathbf{w}^{(j)} \right\rangle \right| \leq \delta \text{ 对所有 } i \neq j \text{ 成立} \right) \geq 0.99.
$$

（注：通过概率方法，这证明了在 $\mathbb{R}^n$ 中存在指数级多的近似正交单位向量，尽管最多只有 $n$ 个严格正交向量。）

### 解答
(a) 对于 $i \neq j$，考虑 $\left\langle \mathbf{w}^{(i)}, \mathbf{w}^{(j)} \right\rangle = \frac{1}{n} \sum_{k=1}^{n} v_k^{(i)} v_k^{(j)}$。每项 $v_k^{(i)} v_k^{(j)}$ 为 $\pm 1$ 且均值为 0。由 Hoeffding 不等式：  

$$
\Pr\left( \left| \frac{1}{n} \sum_{k=1}^{n} v_k^{(i)} v_k^{(j)} \right| \geq \delta \right) \leq 2 \exp\left(-\frac{\delta^2 n}{2}\right) = \exp\left(-\Omega(\delta^2 n)\right).
$$

(b) 令 $m = \exp(c \delta^2 n)$（其中 $c > 0$ 足够小）。共有 $\binom{m}{2}$ 个向量对。由联合界：  

$$
\Pr\left( \exists i \neq j : \left| \left\langle \mathbf{w}^{(i)}, \mathbf{w}^{(j)} \right\rangle \right| \geq \delta \right) \leq \binom{m}{2} \exp(-\Omega(\delta^2 n)).
$$

选择 $m = \exp(c \delta^2 n)$，右侧上界化为 $\exp(2c \delta^2 n - \Omega(\delta^2 n))$。当 $c$ 足够小时，该上界 $\leq 0.01$，因此有 $\Pr(\text{所有向量对满足 } \left| \left\langle \mathbf{w}^{(i)}, \mathbf{w}^{(j)} \right\rangle \right| \leq \delta) \geq 0.99$。

## 10.3
### 题目
设 **随机图分布** $\text{RandomGraph}(n,p)$ 表示具有 $n$ 个顶点的随机图分布，其中对于任意顶点对 $u,v$，边 $\{u,v\}$ 以概率 $p$ **独立** 地被选为图的边。对服从该分布的随机图 $G \sim \text{RandomGraph}(n,p)$，证明以下结论：  

(a) 若 $p = o(n^{-2/3})$，则  
$$
\lim_{n \to \infty} \Pr(G \text{ 包含一个 } 4\text{-团}) = 0.
$$ 

(b) 若 $p = \omega(n^{-2/3})$，则  
$$
\lim_{n \to \infty} \Pr(G \text{ 不包含 } 4\text{-团}) = 0.
$$ 

（提示：使用 10.1 的 a) 部分，并需仔细计算当顶点集 $A$ 和 $B$ 满足 $|A \cap B| \geq 2$ 时，$4$-团同时在 $A$ 和 $B$ 上出现的概率。）  

### 解答
(a) 设 $p = o(n^{-2/3})$。$4$-团数量的期望为：  
$$
\mathbb{E}[X] = \binom{n}{4} p^6 \approx \frac{n^4}{24} p^6 = o(1).
$$ 
由马尔可夫不等式：$\Pr(X \geq 1) \leq \mathbb{E}[X] \to 0$。  

(b) 设 $\mathcal{A}$ 为所有可能的 4-团对应的顶点集（即所有 4-元子集），则：
$$
X = \sum_{A \in \mathcal{A}} I_A,
$$
其中 $I_A$ 是指示变量（当 $A$ 形成 4-团时为 1，否则为 0）。

1. **期望计算**：  
   $$
   \mathbb{E}[X] = \binom{n}{4} p^{\binom{4}{2}} = \binom{n}{4} p^6 \approx \frac{n^4}{24} p^6.
   $$
   由 $p = \omega(n^{-2/3})$，有 $n^4 p^6 \to \infty$，故 $\mathbb{E}[X] \to \infty$.

2. **方差计算**：  
   $$
   \text{Var}(X) = \mathbb{E}[X^2] - (\mathbb{E}[X])^2 = \sum_{A,B \in \mathcal{A}} \left( \mathbb{E}[I_A I_B] - \mathbb{E}[I_A] \mathbb{E}[I_B] \right).
   $$
   根据 $|A \cap B| = k$（$k = 0,1,2,3,4$) 分类求和：
   - **$k=4$（相同团）**：$A=B$，贡献为 $\binom{n}{4} p^6$.
   - **$k=3$（共享 3 顶点）**：  
     数量：$\binom{n}{3} \binom{3}{1} \binom{n-4}{1} = O(n^4)$（选 3 个共享顶点，再选 $A$ 中剩余 1 顶点，最后选 $B$ 中剩余 1 顶点）。  
     概率：$\mathbb{E}[I_A I_B] = p^{9}$（因 $|A \cup B| = 5$ 个顶点，需 $\binom{5}{2} = 10$ 条边，但共享的 3-团已固定，实际需新增 3 条边，共 $\binom{3}{2} + 3 + 3 = 9$ 条边）。  
     贡献阶：$O(n^4 p^9)$.
   - **$k=2$（共享 2 顶点）**：  
     数量：$\binom{n}{2} \binom{n-2}{2} \binom{n-4}{2} = O(n^6)$（选 2 个共享顶点，再选 $A$ 中剩余 2 顶点，最后选 $B$ 中剩余 2 顶点）。  
     概率：$\mathbb{E}[I_A I_B] = p^{11}$（因 $|A \cup B| = 6$ 个顶点，需 $\binom{6}{2} = 15$ 条边，但共享的 2-团贡献 $\binom{2}{2} = 1$ 条边，且 $A$ 与 $B$ 各自剩余部分无公共边，总边数 $6 + 6 - 1 = 11$）。  
     贡献阶：$O(n^6 p^{11})$.
   - **$k=0,1$（低阶项）**：  
     数量 $O(n^7)$ 或 $O(n^8)$，概率 $p^{12}$，贡献 $o(n^6 p^{11})$（因 $p = o(1)$）。

3. **主导项分析**：  
   比较各项与 $(\mathbb{E}[X])^2 \approx n^8 p^{12}$:
   - $k=2$ 项：$\dfrac{O(n^6 p^{11})}{n^8 p^{12}} = O\left( \dfrac{1}{n^2 p} \right)$
   - $k=3$ 项：$\dfrac{O(n^4 p^9)}{n^8 p^{12}} = O\left( \dfrac{1}{n^4 p^3} \right)$
   - $k=4$ 项：$\dfrac{\binom{n}{4} p^6}{n^8 p^{12}} = O\left( \dfrac{1}{n^4 p^6} \right)$
   - $k=0,1$ 项：$o\left( \dfrac{1}{n^2 p} \right)$

   由 $p = \omega(n^{-2/3})$，有 $n^2 p \to \infty$，故：
   $$
   \frac{\text{Var}(X)}{(\mathbb{E}[X])^2} = O\left( \frac{1}{n^2 p} \right) + o\left( \frac{1}{n^2 p} \right) \to 0.
   $$

4. **应用概率界**：  
   由问题 1(b) 结论：
   $$
   \Pr(X = 0) \leq \frac{\text{Var}(X)}{(\mathbb{E}[X])^2} \to 0,
   $$
   故 $\lim_{n \to \infty} \Pr(\text{不包含 } 4\text{-团}) = 0$.