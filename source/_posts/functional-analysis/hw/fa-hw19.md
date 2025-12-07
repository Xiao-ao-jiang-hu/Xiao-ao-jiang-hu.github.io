---
title: 泛函分析第十九次作业
tags:
  - math
  - functional analysis
categories:
  - math
  - functional analysis homework
index_img: /img/fa.jpg
banner_img: /img/fa.jpg
excerpt: 泛函分析第十九次作业
abbrlink: 6f745113
date: 2025-12-07 10:21:12
---
# 19.1
若 $X$ 是自反的Banach空间，则规范嵌入映射 $l$ 满足 $l: (X, \mathcal{U}^w) \to (X^{**}, \mathcal{U}^w)$ 是同胚。

## 解答
1. $l$ 连续:
  对任意 $\psi \in X^{***}$，复合映射 $\psi \circ l: X \to \mathbb{R}$ 是线性泛函。由于 $X$ 自反，$X^*$ 也自反，且规范映射 $j_{X^*}: X^* \to X^{***}$ 是等距同构，故存在唯一的 $f \in X^*$ 使得对任意 $x \in X$，
  $$
  \psi(l(x)) = l(x)(f) = f(x).
  $$
  因此 $\psi \circ l = f \in X^*$，从而 $\psi \circ l$ 在 $\sigma(X, X^*)$ 下连续。由于 $\sigma(X^{**}, X^{***})$ 由半范族 $\{\varphi \mapsto |\psi(\varphi)| : \psi \in X^{***}\}$ 生成，而每个 $\psi \circ l$ 连续，故 $l$ 连续。


2. $l^{-1}$ 连续:
  因 $l$ 是双射，其逆映射 $l^{-1}: X^{**} \to X$ 存在。对任意 $f \in X^*$，考虑 $f \circ l^{-1}: X^{**} \to \mathbb{R}$。对任意 $\varphi \in X^{**}$，由自反性，存在唯一 $x \in X$ 使得 $\varphi = l(x)$，则
  $$
  f(l^{-1}(\varphi)) = f(x) = l(x)(f) = \varphi(f).
  $$
  定义 $T_f: X^{**} \to \mathbb{R}$ 为 $T_f(\varphi) = \varphi(f)$，则 $T_f \in X^{***}$（因为 $|T_f(\varphi)| \leq \|f\| \|\varphi\|$），故 $f \circ l^{-1} = T_f$ 在 $\sigma(X^{**}, X^{***})$ 下连续。由于 $\sigma(X, X^*)$ 由半范族 $\{x \mapsto |f(x)| : f \in X^*\}$ 生成，因此 $l^{-1}$ 连续。


# 19.2
Milman-Pettis定理：一致凸Banach空间是自反的。

1. 设X为一致凸赋范线性空间，$(x_{\alpha})_{\alpha\in A}$ 为X单位球中的网，且网$\left(\left\|x_{\alpha}+x_{\beta}\right\|\right)_{(\alpha,\beta)\in A\times A}$ 收敛于2，证明：$(x_{\alpha})_{\alpha\in A}$ 是Cauchy网;

2. 设X为赋范线性空间，$x^{**}\in X^{**},\|x^{**}\|=1$ ，证明：存在X单位球中的网$(x_{\alpha})_{\alpha\in A}$ 使得$X^{**}$ 中的网$(\iota(x_{\alpha}))_{\alpha\in A}$ 按照弱\*拓扑收敛于$x^{**}$ 

3. 设X为赋范线性空间，X单位球中的网$(x_{\alpha})_{\alpha\in A}$ 使得 $X^{**}$ 中的网$(\iota(x_{\alpha}))_{\alpha\in A}$ 按照弱\*拓扑收敛于 $x^{**},\left\|x^{**}\right\|=1$ 证明网$\left(\iota\left(x_{\alpha}+x_{\beta}\right)\right)_{(\alpha,\beta)\in A\times A}$ 按照弱\*拓扑收敛于$2x^{**}$ ；若X 是一致凸的，利用（1)证明 $(x_{\alpha})_{\alpha\in A}$ 是Cauchy网;

4. 设X是一致凸Banach空间，$x^{**}\in X^{**},\|x^{**}\|=1$ ，按照(2)取网 $(x_{\alpha})_{\alpha\in A}$ ,由(3)知它收敛于某个元素$x\in X$ ，从而推出 $\iota(x)=x^{**}$ 


## 1
由一致凸性，对任意 $\varepsilon > 0$，存在 $\delta > 0$ 使得若 $\|x\|, \|y\| \leq 1$ 且 $\|x + y\| > 2 - \delta$，则 $\|x - y\| < \varepsilon$。因 $\|x_\alpha + x_\beta\| \to 2$，存在 $(\alpha_0, \beta_0)$ 使得对所有 $(\alpha, \beta) \succeq (\alpha_0, \beta_0)$ 有 $\|x_\alpha + x_\beta\| > 2 - \delta$。取 $\gamma_0 \in A$ 满足 $\gamma_0 \succeq \alpha_0, \beta_0$，则对任意 $\alpha, \beta \succeq \gamma_0$ 有 $\|x_\alpha + x_\beta\| > 2 - \delta$，从而 $\|x_\alpha - x_\beta\| < \varepsilon$，即 $(x_\alpha)$ 为 Cauchy 网。

## 2
取指标集 $A = \{(F, \varepsilon) : F \subset X^* \text{有限}, \varepsilon > 0\}$，序定义为 $(F_1, \varepsilon_1) \preceq (F_2, \varepsilon_2)$ 当且仅当 $F_1 \subset F_2$ 且 $\varepsilon_2 \leq \varepsilon_1$。由 Goldstine 定理，$\iota(B_X)$ 在 $B_{X^{**}}$ 中弱\*稠密，故对每个 $\alpha = (F, \varepsilon)$，存在 $x_\alpha \in B_X$ 使得 $|\iota(x_\alpha)(f) - x^{**}(f)| < \varepsilon$ 对所有 $f \in F$ 成立。由此定义的网满足 $\iota(x_\alpha) \xrightarrow{w^*} x^{**}$。

## 3
对任意 $f \in X^*$，有
$$\iota(x_\alpha + x_\beta)(f) = f(x_\alpha) + f(x_\beta) \to 2x^{**}(f),$$
故 $\iota(x_\alpha + x_\beta) \xrightarrow{w^*} 2x^{**}$。由于范数在弱\*拓扑下下半连续，
$$2 = \|2x^{**}\| \leq \liminf \|\iota(x_\alpha + x_\beta)\| = \liminf \|x_\alpha + x_\beta\| \leq 2,$$
因此 $\|x_\alpha + x_\beta\| \to 2$。由 (1) 知 $(x_\alpha)$ 是 Cauchy 网。

## 4
由 $X$ 的完备性，Cauchy 网 $(x_\alpha)$ 收敛于某 $x \in X$。因 $\iota(x_\alpha) \xrightarrow{w^*} x^{**}$ 且 $\iota(x_\alpha) \to \iota(x)$ 按范数（从而弱\*），由弱\*极限的唯一性得 $\iota(x) = x^{**}$。故 $\iota$ 是满射，$X$ 自反。