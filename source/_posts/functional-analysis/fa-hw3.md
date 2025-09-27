---
title: 泛函分析第三次作业
tags:
  - math
  - homework
  - functional-analysis
categories:
  - math
  - functional-analysis
excerpt: no excerpt
abbrlink: 74d6ba6b
date: 2025-09-23 12:10:51
---
## 3.1
证明在 $C[a, b]$ 中，不可能引入一个内积 $(\cdot, \cdot)$，使得  
$$
(f, f)^{1/2} = \max_{a \leq x \leq b} |f(x)|, \quad \forall f \in C[a, b].
$$

### 解答

取 $[a,b] = [0,1]$（不失一般性），令
$$
f(x) = 1, \quad g(x) = x.
$$
则
$$
\|f\| = 1, \quad \|g\| = 1.
$$
计算：
$$
f(x)+g(x) = 1+x, \quad \max_{x\in[0,1]} |1+x| = 2, \quad \|f+g\| = 2.
$$
$$
f(x)-g(x) = 1-x, \quad \max_{x\in[0,1]} |1-x| = 1, \quad \|f-g\| = 1.
$$


若 $\|\cdot\| = \|\cdot\|$ 来自内积，则：
$$
\|f+g\|^2 + \|f-g\|^2 = 2^2 + 1^2 = 4 + 1 = 5.
$$
右边：
$$
2\|f\|^2 + 2\|g\|^2 = 2\cdot 1^2 + 2\cdot 1^2 = 4.
$$
显然 $5 \neq 4$，所以平行四边形法则不成立。

对其他的a, b，将函数在x轴上伸缩即可。

## 3.2
在 $L^2[0,T]$ 中考虑泛函  
$$
J(f) = \left| \int_0^T e^{-(T-t)} f(t) \, dt \right|, \quad f \in L^2[0,T].
$$  
求在单位球面（即 $\|f\|_{L^2} = 1$）上 $J(f)$ 的最大值以及达到最大值的函数。

### 解答
由 Cauchy–Schwarz 不等式：

$$
\left| \int_0^T e^{-(T-t)} f(t) \, dt \right| 
\le \left( \int_0^T e^{-2(T-t)} \, dt \right)^{1/2} \cdot \|f\|_{L^2}.
$$

约束 $\|f\|_{L^2} = 1$，所以上界为

$$
\left( \int_0^T e^{2t - 2T} \, dt \right)^{1/2}
= e^{-T} \left( \frac{e^{2T} - 1}{2} \right)^{1/2}
= \sqrt{ \frac{1 - e^{-2T}}{2} }.
$$

等号成立当且仅当 $f(t) = \alpha \, e^{t-T}$，由归一化得

$$
|\alpha| = \frac{1}{\|e^{t-T}\|_{L^2}} = \frac{1}{\sqrt{ \frac{1 - e^{-2T}}{2} }}.
$$

取 $\alpha > 0$ 得极值函数

$$
f(t) = \frac{\sqrt{2} \, e^{t-T}}{\sqrt{1 - e^{-2T}}}.
$$

## 3.3
证明$L^\infty$空间是不可分的。

### 解答
构造$A = \{f_a(x) = \begin{cases} 1, & x = a \\ 0, & x \neq a \end{cases} | a \in \mathbb{R} \}$
有
$$\|f - g\|_\infty = \sup_{t \in \mathbb{R}} |f(t) - g(t)| \geq |f(x) - g(x)| = 1.$$
构造开集族$\{B(f_a, \frac{1}{3}) | a \in \mathbb{R}\}$，显然这些开集两两不交。
假设存在可数稠密子集$D = \{g_n | n \in \mathbb{N}\}$，则对于每个$a \in \mathbb{R}$，存在某个$g_n$使得$g_n \in B(f_a, \frac{1}{3})$。因此，$D$中至少包含与$A$中每个元素对应的一个元素，这与$A$是不可数集矛盾。

## 3.4
证明Hanner不等式并说明对于 $1< p <+\infty$, $L^p$空间是一致凸的
### 解答
#### 1. Hanner不等式
设 $1 < p < \infty$，$f, g \in L^p(\mathbb{R})$ 为实值函数，则：

- 若 $1 \leq p \leq 2$，有  
  $$
  \|f + g\|_p^p + \|f - g\|_p^p \geq \left( \|f\|_p + \|g\|_p \right)^p + \left| \|f\|_p - \|g\|_p \right|^p.
  $$
- 若 $2 \leq p < \infty$，不等号反向。

对任意实数 $a, b$，定义函数  
$$
\phi(a, b) = |a + b|^p + |a - b|^p.
$$  
通过分析 $\phi$ 的凸性，可得点态不等式：  
- 当 $1 \leq p \leq 2$ 时，  
  $$
  |a + b|^p + |a - b|^p \geq (|a| + |b|)^p + \left| |a| - |b| \right|^p.
  $$
- 当 $p \geq 2$ 时，不等号反向。

将点态不等式应用于 $f(x)$ 和 $g(x)$，并积分得：  
$$
\int \left( |f + g|^p + |f - g|^p \right) \geq \int \left( (|f| + |g|)^p + \left| |f| - |g| \right|^p \right).
$$  
右边两项分别对应 $\| |f| + |g| \|_p^p$ 和 $\| |f| - |g| \|_p^p$。利用三角不等式和范数性质即可得证。

#### 2. Clarkson不等式
我们考虑p ≥ 2的情况（1 < p ≤ 2的证明类似）。设f, g ∈ L^p满足\|f\|_p = \|g\|_p = 1。

由Hanner不等式（p ≥ 2）：
$$
\|f + g\|_p^p + \|f - g\|_p^p \leq (\|f\|_p + \|g\|_p)^p + |\|f\|_p - \|g\|_p|^p = 2^p
$$

利用范数的齐次性，对任意f, g ∈ L^p，令F = f/2, G = g/2，代入上式：
$$
\|F + G\|_p^p + \|F - G\|_p^p \leq 2^{1-p}(\|f\|_p + \|g\|_p)^p + 2^{1-p}|\|f\|_p - \|g\|_p|^p
$$

通过进一步计算可得Clarkson不等式：
- 当p ≥ 2时：
  $$
  \left\|\frac{f+g}{2}\right\|_p^p + \left\|\frac{f-g}{2}\right\|_p^p \leq \frac{1}{2}(\|f\|_p^p + \|g\|_p^p)
  $$
- 当1 < p ≤ 2时：
  $$
  \left\|\frac{f+g}{2}\right\|_p^q + \left\|\frac{f-g}{2}\right\|_p^q \leq \left[\frac{1}{2}(\|f\|_p^p + \|g\|_p^p)\right]^{q/p}
  $$
  其中q = p/(p-1)为共轭指数。

#### 3. 证明$L^p$空间的一致凸性
**情况1：p ≥ 2**
由Clarkson不等式：
$$
\left\|\frac{f+g}{2}\right\|_p^p \leq \frac{1}{2}(\|f\|_p^p + \|g\|_p^p) - \left\|\frac{f-g}{2}\right\|_p^p \leq 1 - \left(\frac{\varepsilon}{2}\right)^p
$$
取δ = 1 - [1 - (ε/2)^p]^{1/p} > 0，即得\|(f+g)/2\|_p ≤ 1 - δ。

**情况2：1 < p ≤ 2**
由Clarkson不等式：
$$
\left\|\frac{f+g}{2}\right\|_p^q \leq \left[\frac{1}{2}(\|f\|_p^p + \|g\|_p^p)\right]^{q/p} - \left\|\frac{f-g}{2}\right\|_p^q \leq 1 - \left(\frac{\varepsilon}{2}\right)^q
$$
取$\delta = 1 - [1 - (\epsilon/2)^q]^{1/q} > 0$，即得$\|(f+g)/2\|_p ≤ 1 - \delta$。

综上，$L^p$空间是一致凸的。

## 3.5
设 $(X, \mathcal{M}, \mu)$ 是一个完备测度空间，且 $\mu$ 是 $\sigma$-有限的。证明 $\mu$ 是可局部化的。

### 解答

#### 1. $\mu$ 是半有限的
由于 $\mu$ 是 $\sigma$-有限的，存在可测集序列 $\{X_n\}_{n=1}^{\infty} \subseteq \mathcal{M}$ 满足：
- $X = \bigcup_{n=1}^{\infty} X_n$，
- $\mu(X_n) < \infty$ 对每个 $n$。

设 $E \in \mathcal{M}$ 满足 $\mu(E) = \infty$。则 $E = \bigcup_{n=1}^{\infty} (E \cap X_n)$。若对所有 $n$ 有 $\mu(E \cap X_n) = 0$，则 $\mu(E) = 0$，矛盾。故存在某个 $n$ 使得 $\mu(E \cap X_n) > 0$。又因 $\mu(E \cap X_n) \leq \mu(X_n) < \infty$，所以 $0 < \mu(E \cap X_n) < \infty$。取 $F = E \cap X_n$，则 $F \subseteq E$ 且 $0 < \mu(F) < \infty$。因此 $\mu$ 是半有限的。


#### 2. $\mu$ 是局部可测的
由于 $X = \bigcup_{n=1}^{\infty} X_n$ 且 $X_n$ 两两不交，对每个 $n$，定义：
$$
\alpha_n = \sup \left\{ \mu(E) : E \in \mathcal{M},\ E \subseteq F \cap X_n \right\}.
$$
因 $\mu(X_n) < \infty$，有 $\alpha_n < \infty$。由确界定义，存在可测集列 $\{E_{n,k}\} \subseteq F \cap X_n$ 使得：
$$
\lim_{k \to \infty} \mu(E_{n,k}) = \alpha_n.
$$
令 $E_{n,k}' = \bigcup_{j=1}^{k} E_{n,j}$，则 $\{E_{n,k}'\}$ 递增，且 $\mu(E_{n,k}') \to \alpha_n$。定义：
$$
E_n = \bigcup_{k=1}^{\infty} E_{n,k}' \subseteq F \cap X_n,
$$
则 $E_n \in \mathcal{M}$，且 $\mu(E_n) = \alpha_n$。最后定义：
$$
H = \bigcup_{n=1}^{\infty} E_n \in \mathcal{M}.
$$

设 $E \in \mathcal{M}$ 且 $E \subseteq F$。对每个 $n$，有 $E \cap X_n \subseteq F \cap X_n$，故：
$$
\mu(E \cap X_n) \leq \alpha_n = \mu(E_n).
$$
若存在 $n$ 使得 $\mu((E \cap X_n) \setminus E_n) > 0$，则：
$$
\mu((E \cap X_n) \cup E_n) = \mu(E \cap X_n) + \mu(E_n) - \mu((E \cap X_n) \cap E_n) > \alpha_n,
$$
与 $\alpha_n$ 的定义矛盾。故对每个 $n$，有：
$$
\mu((E \cap X_n) \setminus E_n) = 0.
$$
由于 $E \setminus H \subseteq \bigcup_{n=1}^{\infty} (E \cap X_n \setminus H) \subseteq \bigcup_{n=1}^{\infty} (E \cap X_n \setminus E_n)$，得：
$$
\mu(E \setminus H) = 0.
$$

设 $G \in \mathcal{M}$ 满足对任意可测集 $E \subseteq F$ 有 $\mu(E \setminus G) = 0$。需证 $\mu(H \setminus G) = 0$。

由于 $H = \bigcup_{n=1}^{\infty} E_n$ 且 $E_n \subseteq F$，由假设得：
$$
\mu(E_n \setminus G) = 0 \quad \text{对每个 } n.
$$
因此：
$$
\mu(H \setminus G) \leq \sum_{n=1}^{\infty} \mu(E_n \setminus G) = 0.
$$
综上，$\mu$ 是可局部化的。

## 3.6
证明
1. $(l^p)^* = l^q$，其中$1/p+1/q=1$, $1 \leq p < +\infty$
2. 若$C_0 = \{\{x_n\} \mid \lim_{n \to \infty}|x_n|=0\} \subset l^{\infty}$, 则$(C_0)^* = l^1$.

### 解答
#### 1.

设 $1 \leq p < +\infty$，且 $q$ 满足 $1/p + 1/q = 1$。需证明每个连续线性泛函 $f \in (l^p)^*$ 对应唯一一个序列 $y \in l^q$，使得 $f(x) = \sum_{n=1}^{\infty} x_n y_n$ 对于所有 $x \in l^p$，且映射 $y \mapsto f_y$ 是等距同构。


对于任意 $y \in l^q$，定义 $f_y(x) = \sum_{n=1}^{\infty} x_n y_n$。由 Hölder 不等式，有：
$$
|f_y(x)| \leq \sum_{n=1}^{\infty} |x_n y_n| \leq \|x\|_p \|y\|_q,
$$
因此 $f_y$ 是连续线性泛函，且 $\|f_y\| \leq \|y\|_q$。进一步，可证 $\|f_y\| = \|y\|_q$：
- 若 $p > 1$，取序列 $x$ 满足 $x_n = |y_n|^{q-1} \operatorname{sign}(y_n)$（若 $y_n \neq 0$，否则 $x_n = 0$），则 $\|x\|_p = \|y\|_q^{q/p}$ 且 $f_y(x) = \|y\|_q^q$，故 $\|f_y\| \geq \|y\|_q$。
- 若 $p = 1$，则 $q = \infty$，取 $x$ 使得 $x_n = \operatorname{sign}(y_n)$，则 $\|x\|_1 = 1$ 且 $f_y(x) = \sum |y_n|$，但需注意 $x$ 可能不属于 $l^1$，但可通过截断序列逼近，得 $\|f_y\| = \|y\|_\infty$。

故映射 $y \mapsto f_y$ 是 $l^q$ 到 $(l^p)^*$ 的等距嵌入。


设 $f \in (l^p)^*$，定义序列 $y$ 满足 $y_n = f(e_n)$，其中 $e_n$ 是第 $n$ 个标准基向量。需证 $y \in l^q$ 且 $f(x) = \sum x_n y_n$ 对于所有 $x \in l^p$。

- **若 $p > 1$**：  
  对于任意 $N \in \mathbb{N}$，定义序列 $x^{(N)}$ 满足 $x_n^{(N)} = |y_n|^{q-1} \operatorname{sign}(y_n)$ 对于 $n \leq N$，否则 $x_n^{(N)} = 0$。则 $x^{(N)} \in l^p$，且：
  $$
  f(x^{(N)}) = \sum_{n=1}^{N} x_n^{(N)} y_n = \sum_{n=1}^{N} |y_n|^q.
  $$
  由连续性，$|f(x^{(N)})| \leq \|f\| \|x^{(N)}\|_p = \|f\| \left( \sum_{n=1}^{N} |y_n|^q \right)^{1/p}$。令 $S_N = \sum_{n=1}^{N} |y_n|^q$，则：
  $$
  S_N \leq \|f\| S_N^{1/p} \implies S_N^{1/q} \leq \|f\|,
  $$
  故 $S_N \leq \|f\|^q$ 对所有 $N$ 成立，因此 $\sum_{n=1}^{\infty} |y_n|^q \leq \|f\|^q < \infty$，即 $y \in l^q$。

- **若 $p = 1$**：  
  则 $q = \infty$。对于每个 $n$，有 $|y_n| = |f(e_n)| \leq \|f\| \|e_n\|_1 = \|f\|$，故 $\sup_n |y_n| \leq \|f\| < \infty$，即 $y \in l^\infty$。

现在，对于任意 $x \in l^p$，有限序列 $x^{(N)} = \sum_{n=1}^{N} x_n e_n$ 在 $l^p$ 中收敛于 $x$（因为 $p < \infty$ 时有限序列稠密）。由连续性：
$$
f(x) = \lim_{N \to \infty} f(x^{(N)}) = \lim_{N \to \infty} \sum_{n=1}^{N} x_n y_n = \sum_{n=1}^{\infty} x_n y_n.
$$
因此 $f = f_y$，且 $\|f\| = \|y\|_q$。

综上，$(l^p)^*$ 与 $l^q$ 等距同构。

#### 2.
需证明每个连续线性泛函 $f \in (C_0)^*$ 对应唯一一个序列 $y \in l^1$，使得 $f(x) = \sum_{n=1}^{\infty} x_n y_n$ 对于所有 $x \in C_0$，且映射 $y \mapsto f_y$ 是等距同构。


对于任意 $y \in l^1$，定义 $f_y(x) = \sum_{n=1}^{\infty} x_n y_n$。由于 $x \in C_0 \subset l^{\infty}$，有 $\|x\|_{\infty} < \infty$，且：
$$
|f_y(x)| \leq \sum_{n=1}^{\infty} |x_n y_n| \leq \|x\|_{\infty} \|y\|_1,
$$
故 $f_y$ 是连续线性泛函，且 $\|f_y\| \leq \|y\|_1$。进一步，可证 $\|f_y\| = \|y\|_1$：  
对于任意 $\epsilon > 0$，存在 $N$ 使得 $\sum_{n=N+1}^{\infty} |y_n| < \epsilon$。定义 $x \in C_0$ 为 $x_n = \operatorname{sign}(y_n)$ 对于 $n \leq N$，且 $x_n = 0$ 对于 $n > N$。则 $\|x\|_{\infty} = 1$，且：
$$
|f_y(x)| = \sum_{n=1}^{N} |y_n| \geq \|y\|_1 - \epsilon,
$$
故 $\|f_y\| \geq \|y\|_1 - \epsilon$，由 $\epsilon$ 任意性得 $\|f_y\| \geq \|y\|_1$，因此 $\|f_y\| = \|y\|_1$。

故映射 $y \mapsto f_y$ 是 $l^1$ 到 $(C_0)^*$ 的等距嵌入。


设 $f \in (C_0)^*$，定义序列 $y$ 满足 $y_n = f(e_n)$。需证 $y \in l^1$ 且 $f(x) = \sum x_n y_n$ 对于所有 $x \in C_0$。

对于任意 $N \in \mathbb{N}$，定义序列 $z^{(N)} \in C_0$ 为 $z_n^{(N)} = \operatorname{sign}(y_n)$ 对于 $n \leq N$，且 $z_n^{(N)} = 0$ 对于 $n > N$。则：
$$
f(z^{(N)}) = \sum_{n=1}^{N} \operatorname{sign}(y_n) y_n = \sum_{n=1}^{N} |y_n|.
$$
由连续性，$|f(z^{(N)})| \leq \|f\| \|z^{(N)}\|_{\infty} = \|f\|$，故：
$$
\sum_{n=1}^{N} |y_n| \leq \|f\| \quad \text{对所有 } N \text{ 成立},
$$
因此 $\sum_{n=1}^{\infty} |y_n| \leq \|f\| < \infty$，即 $y \in l^1$。

现在，对于任意 $x \in C_0$，有限序列 $x^{(N)} = \sum_{n=1}^{N} x_n e_n$ 在 $C_0$ 中收敛于 $x$（因为 $\|x - x^{(N)}\|_{\infty} = \sup_{n > N} |x_n| \to 0$ 当 $N \to \infty$）。由连续性：
$$
f(x) = \lim_{N \to \infty} f(x^{(N)}) = \lim_{N \to \infty} \sum_{n=1}^{N} x_n y_n = \sum_{n=1}^{\infty} x_n y_n.
$$
因此 $f = f_y$，且 $\|f\| = \|y\|_1$。

综上，$(C_0)^*$ 与 $l^1$ 等距同构。
