---
title: 泛函分析第七次作业
tags:
  - math
  - functional analysis
categories:
  - math
  - functional analysis homework
index_img: /img/fa.jpg
banner_img: /img/fa.jpg
excerpt: no excerpt
abbrlink: 63f42aa2
date: 2025-10-14 11:09:28
---
## 7.1
(Baire纲定理等价依赖选择公理) 设 $X$ 为非空集合, 映射 $A: X \to 2^X$ 把每个 $x \in X$ 映为非空集合 $A(x) \subset X$, 证明存在序列 $\{x_n\}_{n=1}^\infty \subset X$ 使得 $x_{n+1} \in A(x_n), \forall n \in \mathbb{N}$.

**提示:** 记 $\mathcal{X} := X^\mathbb{N}$ 为所有序列 $\xi = \{x_n\}_{n=1}^\infty \subset X$ 构成的集合, 并定义函数 $d: \mathcal{X} \times \mathcal{X} \to [0, \infty)$ 如下: 对 $\xi = \{x_n\}_{n=1}^\infty \in \mathcal{X}, \eta = \{y_n\}_{n=1}^\infty \in \mathcal{X}$ 定义
$$d(\xi, \xi) = 0, \quad d(\xi, \eta) := 2^{-n}, \quad n := \min\{k \in \mathbb{N}: x_k \neq y_k\}.$$
证明 $(\mathcal{X}, d)$ 是完备度量空间, 对 $k \in \mathbb{N}$ 定义
$$
\mathcal{U}_k := \{\xi = \{x_n\}_{n=1}^\infty \in \mathcal{X}: \exists l > k, \text{ such that } x_l \in A(x_k)\}.
$$
证明对每个 $k \in \mathbb{N}, \mathcal{U}_k$ 是 $\mathcal{X}$ 中的稠密开集, 并由此推出 $\mathcal{R} := \bigcap_{k=1}^\infty \mathcal{U}_k$ 是非空的, 选取其中元素并构造其合适的子序列.

### 解答
设 $\mathcal{X} = X^\mathbb{N}$ 为所有序列 $\xi = (x_1, x_2, \dots)$（其中 $x_n \in X$）构成的集合。定义度量 $d: \mathcal{X} \times \mathcal{X} \to [0, \infty)$ 如下：

- 若 $\xi = \eta$，则 $d(\xi, \eta) = 0$；
- 若 $\xi \ne \eta$，设 $n = \min\{k \in \mathbb{N} : x_k \ne y_k\}$，则定义 $d(\xi, \eta) = 2^{-n}$。

容易验证 $d$ 满足度量的三条公理，因此 $(\mathcal{X}, d)$ 是一个度量空间。


设 $\{\xi^{(m)}\}_{m=1}^\infty \subset \mathcal{X}$ 是一个 Cauchy 序列，其中 $\xi^{(m)} = (x_1^{(m)}, x_2^{(m)}, \dots)$。

对任意 $\varepsilon > 0$，存在 $M \in \mathbb{N}$ 使得当 $m, m' \ge M$ 时，有 $d(\xi^{(m)}, \xi^{(m')}) < \varepsilon$。特别地，取 $\varepsilon = 2^{-N}$，则存在 $M_N$ 使得当 $m, m' \ge M_N$ 时，前 $N$ 个坐标一致，即  
$$
x_1^{(m)} = x_1^{(m')}, \dots, x_N^{(m)} = x_N^{(m')}.
$$

因此，对每个固定的 $n \in \mathbb{N}$，序列 $\{x_n^{(m)}\}_{m=1}^\infty$ 从某项起为常值。定义极限序列 $\xi = (x_1, x_2, \dots)$ 为：
$$
x_n = \lim_{m \to \infty} x_n^{(m)}.
$$

则对任意 $\varepsilon > 0$，取 $N$ 使得 $2^{-N} < \varepsilon$，并取 $m \ge M_N$，则 $d(\xi^{(m)}, \xi) \le 2^{-N} < \varepsilon$，故 $\xi^{(m)} \to \xi$。因此 $(\mathcal{X}, d)$ 是完备度量空间。


对每个 $k \in \mathbb{N}$，定义：
$$
\mathcal{U}_k = \left\{ \xi = (x_n) \in \mathcal{X} : \exists l > k \text{ 使得 } x_l \in A(x_k) \right\}.
$$

**证明 $\mathcal{U}_k$ 是开集：**

设 $\xi = (x_n) \in \mathcal{U}_k$，则存在 $l > k$ 使得 $x_l \in A(x_k)$。取 $\delta = 2^{-l}$，考虑开球 $B(\xi, \delta)$。对任意 $\eta = (y_n) \in B(\xi, \delta)$，有 $d(\xi, \eta) < 2^{-l}$，即前 $l$ 个坐标相同，故 $y_k = x_k$，$y_l = x_l \in A(x_k) = A(y_k)$。因此 $\eta \in \mathcal{U}_k$，即 $B(\xi, \delta) \subset \mathcal{U}_k$，所以 $\mathcal{U}_k$ 是开集。

**证明 $\mathcal{U}_k$ 是稠密集：**

设 $\xi = (x_n) \in \mathcal{X}$，$\varepsilon > 0$。取 $N \in \mathbb{N}$ 使得 $2^{-N} < \varepsilon$ 且 $N > k$。由于 $A(x_k) \ne \emptyset$，取 $y \in A(x_k)$。定义序列 $\eta = (y_n)$ 如下：

- 当 $n \ne N+1$ 时，令 $y_n = x_n$；
- 当 $n = N+1$ 时，令 $y_n = y$。

则 $\eta \in \mathcal{U}_k$，因为 $y_{N+1} = y \in A(x_k) = A(y_k)$ 且 $N+1 > k$。又 $d(\xi, \eta) = 2^{-(N+1)} < 2^{-N} < \varepsilon$，故 $\eta \in B(\xi, \varepsilon) \cap \mathcal{U}_k$。因此 $\mathcal{U}_k$ 在 $\mathcal{X}$ 中稠密。

由于 $(\mathcal{X}, d)$ 是完备度量空间，且每个 $\mathcal{U}_k$ 是稠密开集，由 Baire 纲定理，交集$\mathcal{R} = \bigcap_{k=1}^\infty \mathcal{U}_k$在 $\mathcal{X}$ 中稠密，故非空。

取 $\xi = (x_1, x_2, \dots) \in \mathcal{R}$。对每个 $k \in \mathbb{N}$，由于 $\xi \in \mathcal{U}_k$，存在 $l > k$ 使得 $x_l \in A(x_k)$。

现归纳构造指标序列 $\{n_i\}$：

- 令 $n_1 = 1$；
- 假设已定义 $n_i$，由 $\xi \in \mathcal{U}_{n_i}$，存在 $l > n_i$ 使得 $x_l \in A(x_{n_i})$，取最小的这样的 $l$ 作为 $n_{i+1}$。

定义序列 $y_i = x_{n_i}$ ，则对每个 $i \in \mathbb{N}$，有 $y_{i+1} = x_{n_{i+1}} \in A(x_{n_i}) = A(y_i)$ ,即 $y_{i+1} \in A(y_i)$。


## 7.2
设 $f : [0, \infty) \to \mathbb{R}$ 为连续函数，并且
$$
\lim_{n \to \infty} f(nt) = 0, \quad \forall t > 0.
$$
证明：$\lim_{x \to \infty} f(x) = 0$.
提示：固定 $\varepsilon > 0$ 并证明对某些 $n \in \mathbb{N}$,
$$
A_n := \{ t > 0 : |f(mt)| \leq \varepsilon, \forall m \geq n \}
$$
的内部是非空的，不妨设 $[a, b] \subset A_n$, $0 < a < b$ 以及 $n(b-a) \geq a$，推出 $|f(x)| \leq \varepsilon, \forall x \geq na$.
### 解答
固定 $\varepsilon > 0$，定义集合：

$$
A_n = \left\{ t > 0 : |f(mt)| \leq \varepsilon \quad \forall m \geq n \right\}, \quad n \in \mathbb{N}.
$$

由题设条件 $\lim_{n \to \infty} f(nt) = 0$ 对任意 $t > 0$ 成立，可知对每个 $t > 0$，存在 $N \in \mathbb{N}$ 使得 $|f(mt)| \leq \varepsilon$ 对所有 $m \geq N$ 成立，即 $t \in A_N$。因此：

$$
(0, \infty) = \bigcup_{n=1}^{\infty} A_n.
$$


设 $\{t_k\} \subset A_n$ 且 $t_k \to t > 0$。对任意 $m \geq n$，有 $|f(mt_k)| \leq \varepsilon$。由 $f$ 的连续性，得：

$$
|f(mt)| = \lim_{k \to \infty} |f(mt_k)| \leq \varepsilon,
$$

故 $t \in A_n$，即 $A_n$ 是闭集。


由于 $(0, \infty)$ 是完备度量空间，且为可数个闭集 $A_n$ 的并集，由 Baire 纲定理，存在某个 $n \in \mathbb{N}$ 使得 $A_n$ 具有非空内部。因此，存在区间 $[a, b] \subset A_n$ 满足 $0 < a < b$。

取 $[a, b]$ 的子区间 $[a, b']$ 使得 $b' = a\left(1 + \frac{1}{n}\right)$，即：

$$
n(b' - a) = a.
$$

由于 $A_n$ 是递增的（即 $A_n \subset A_{n+1}$），若需更大的 $n$ 满足上述条件，可取更大的 $n$ 使得 $[a, b] \subset A_n$ 且 $n(b - a) \geq a$。为简便起见，仍记该区间为 $[a, b]$，并假设：

$$
n(b - a) \geq a.
$$


任取 $x \geq na$，需证 $|f(x)| \leq \varepsilon$。分两种情况讨论：

- **情况 1：** $na \leq x \leq nb$

  取 $m = n$，则 $t = \frac{x}{n} \in [a, b]$。由于 $t \in A_n$，有：

  $$
  |f(x)| = |f(nt)| \leq \varepsilon.
  $$

- **情况 2：** $x > nb$

  考虑区间：

  $$
  I_x = \left[ \frac{x}{b}, \frac{x}{a} \right].
  $$

  其长度为：

  $$
  L = \frac{x}{a} - \frac{x}{b} = x \cdot \frac{b - a}{ab}.
  $$

  当 $x = nb$ 时：

  $$
  L = nb \cdot \frac{b - a}{ab} = \frac{n(b - a)}{a} \geq 1,
  $$

  且当 $x > nb$ 时，$L > 1$。因此 $I_x$ 必包含某个整数 $m$。又因为 $\frac{x}{b} > n$，有 $m \geq n + 1 > n$。取 $t = \frac{x}{m}$，则：

  $$
  t \in \left[ \frac{x}{m}, \frac{x}{m} \right] \subset [a, b],
  $$

  故 $t \in A_n$，从而：

  $$
  |f(x)| = |f(mt)| \leq \varepsilon.
  $$

综上，对任意 $x \geq na$，有 $|f(x)| \leq \varepsilon$。由 $\varepsilon > 0$ 的任意性，得：$\lim_{x \to \infty} f(x) = 0.$


## 7.3
7.3.设$X$为无限维赋范线性空间，$\Lambda:X\to\mathbb{R}$为非零线性泛函，则以下命题等价：
1. $\Lambda$ 是有界的
2. $\operatorname{Ker} \Lambda$ 是 $X$ 的闭线性子空间
3. $\operatorname{Ker} \Lambda$ 在 $X$ 中不是稠密的


### 解答


#### (1) ⇒ (2)

假设 $\Lambda$ 有界，于是 $\Lambda$ 连续。又 $\Lambda$ 是连续的，且 $\{0\} \subset \mathbb{R}$ 是闭集，根据连续映射的性质，原像 $\Lambda^{-1}(\{0\}) = \operatorname{Ker} \Lambda$ 也是闭集。因此，$\operatorname{Ker} \Lambda$ 是闭的。


#### (2) ⇒ (3)
由于 $\Lambda$ 是非零泛函，存在 $x_0 \in X$ 使得 $\Lambda(x_0) \ne 0$，因此 $\operatorname{Ker} \Lambda \ne X$。若 $\operatorname{Ker} \Lambda$ 是闭的且不等于 $X$，则其闭包即为自身，故 $\operatorname{Ker} \Lambda$ 在 $X$ 中不是稠密的。

#### (3) ⇒ (1)
假设 $\Lambda$ 无界。则存在序列 $\{x_n\} \subset X$ 使得：

$$
|\Lambda(x_n)| > n \|x_n\| \quad \text{对所有 } n \in \mathbb{N}
$$

定义：

$$
y_n = \frac{x_n}{\Lambda(x_n)} \quad \Rightarrow \quad \Lambda(y_n) = 1, \quad \|y_n\| < \frac{1}{n}
$$

对任意 $z \in X$，考虑：

$$
z_n = z - \Lambda(z) y_n
$$

则：

$$
\Lambda(z_n) = \Lambda(z) - \Lambda(z) \cdot 1 = 0 \quad \Rightarrow \quad z_n \in \operatorname{Ker} \Lambda
$$

且：

$$
\|z - z_n\| = |\Lambda(z)| \cdot \|y_n\| \to 0 \quad \text{当 } n \to \infty
$$

因此，$\operatorname{Ker} \Lambda$ 在 $X$ 中稠密，与假设矛盾。

## 7.4
假设 $\{x_n\} _{n\geq 1}$ 具有如下性质：对任意 $\{ y_n\} _{n\geq 1}$ 满足 $\lim _{n\to \infty }y_n= 0$ , 总有 $\sum _{n\geq 1}x_ny_n$ 收敛，则 $\sum_{n\geq1}|x_n|$ 收敛。

### 解答
假设其不收敛，于是存在正整数列 $\{n_k\}$ 满足
$$
\sum_{n = n_{k-1}}^{n_k-1} |x_n| > 1 ,\quad \forall k \in \mathbb{n}
$$

令
$$
y_n = \frac{\text{sign}(x_{n})}{k}, \,\, n \in [n_{k-1}, n_k)
$$

于是
$$
\sum_{n\geq 1} x_n y_n = \sum_{k\geq 1} \frac{1}{k} \sum_{n=n_{k-1}}^{n_k-1} |x_n| \geq \sum_{k\geq 1} \frac{1}{k} = +\infty
$$

矛盾，因此 $\sum_{n\geq1}|x_n|$ 收敛。

## 7.5
(本题强调讲义 45 页共轭双线性定理中 “X 是 Banach 空间” 条件不可去除)
假设 $X$ 是 $[0, 1]$ 上实系数多项式函数的全体。考虑 $(X, L^1(0,1))$ 空间上的双线性泛函
$$
B(f,g) := \int_0^1 f(t)g(t)dt, \forall f,g \in X.
$$
试证明：
1. $\forall x \in X$，$B(x, \cdot)$ 是共轭线性的；$\forall y \in X$，$B(\cdot, y) \in \mathcal{L}(X, \mathbb{R})$  且连续。
2. B 不是有界的。

### 解答
#### 1
由于 $X$ 是实系数多项式空间，共轭线性即线性。
- **对于所有 $f \in X$，$B(f, \cdot)$ 是线性的**：  
  对于任意 $g_1, g_2 \in X$ 和 $\alpha, \beta \in \mathbb{R}$，有
  $$
  B(f, \alpha g_1 + \beta g_2) = \int_0^1 f(t) (\alpha g_1(t) + \beta g_2(t)) \, dt =\\ \alpha \int_0^1 f(t) g_1(t) \, dt + \beta \int_0^1 f(t) g_2(t) \, dt = \alpha B(f, g_1) + \beta B(f, g_2).
  $$
  因此，$B(f, \cdot)$ 是线性的。

- **对于所有 $g \in X$，$B(\cdot, g)$ 是线性的且连续**：  
  对于任意 $f_1, f_2 \in X$ 和 $\alpha, \beta \in \mathbb{R}$，有
  $$
  B(\alpha f_1 + \beta f_2, g) = \int_0^1 (\alpha f_1(t) + \beta f_2(t)) g(t) \, dt =\\ \alpha \int_0^1 f_1(t) g(t) \, dt + \beta \int_0^1 f_2(t) g(t) \, dt = \alpha B(f_1, g) + \beta B(f_2, g).
  $$
  因此，$B(\cdot, g)$ 是线性的。  
  现在证明连续性。对于任意 $f \in X$，有
  $$
  |B(f, g)| = \left| \int_0^1 f(t) g(t) \, dt \right| \leq \int_0^1 |f(t)| |g(t)| \, dt \leq \|g\|_\infty \int_0^1 |f(t)| \, dt = \|g\|_\infty \|f\|_1,
  $$
  其中 $\|g\|_\infty = \sup_{t \in [0,1]} |g(t)|$。由于 $g$ 是多项式，在 $[0,1]$ 上连续，故 $\|g\|_\infty < \infty$。因此，存在常数 $C = \|g\|_\infty$ 使得 $|B(f, g)| \leq C \|f\|_1$，即 $B(\cdot, g)$ 是连续线性泛函。  
  故 $B(\cdot, g) \in \mathcal{L}(X, \mathbb{R})$ 且连续。

#### 2

双线性泛函 $B$ 有界是指存在常数 $M > 0$ 使得对于所有 $f, g \in X$，有
$$
|B(f, g)| \leq M \|f\|_1 \|g\|_1.
$$
我们证明不存在这样的 $M$。

考虑序列 $f_n(t) = t^n$ , $n \in \mathbb{N}$。则 $\|f_n\|_1 = \int_0^1 t^n \, dt = \frac{1}{n+1}$, $B(f_n, f_n) = \int_0^1 t^{2n} \, dt = \frac{1}{2n+1}$.
因此
$$
\frac{|B(f_n, f_n)|}{\|f_n\|_1 \|f_n\|_1} = \frac{\frac{1}{2n+1}}{\left( \frac{1}{n+1} \right)^2} = \frac{(n+1)^2}{2n+1}.
$$
当 $n \to \infty$ 时，
$$
\frac{(n+1)^2}{2n+1} \sim \frac{n}{2} \to \infty.
$$

因此，对于任意 $M > 0$，存在 $n$ 使得 $\frac{|B(f_n, f_n)|}{\|f_n\|_1 \|f_n\|_1} > M$，故 $B$ 不是有界的。
