---
title: TCS Homework 10
date: 2025-05-31 15:22:21
tags:
    - tcs
excerpt: TCS Homework 10
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

(b) 对于 $p = \omega(n^{-2/3})$，有 $\mathbb{E}[X] \to \infty$。计算方差：  
$$
\text{Var}(X) = \mathbb{E}[X^2] - (\mathbb{E}[X])^2.
$$ 
$\text{Var}(X)$ 的**主要贡献**来自**重叠的** $4$-团。对于共享 $2$ 个顶点的团，$\mathbb{E}[X^2]$ 项的数量级为 $O(n^6 p^{11})$。此时：  
$$
\frac{\text{Var}(X)}{(\mathbb{E}[X])^2} \approx \frac{n^6 p^{11}}{n^8 p^{12}} = \frac{1}{n^2 p} \to 0.
$$ 
由问题 1(b) 的结论：  
$$
\Pr(X = 0) \leq \frac{\text{Var}(X)}{(\mathbb{E}[X])^2} \to 0,
$$ 
因此 $G$ **几乎必然** 包含一个 $4$-团。