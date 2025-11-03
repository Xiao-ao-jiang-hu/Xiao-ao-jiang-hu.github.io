---
title: 泛函分析第十一次作业
tags:
  - math
  - functional analysis
categories:
  - math
  - functional analysis
excerpt: 泛函分析第十一次作业
abbrlink: 7caa848b
date: 2025-11-02 03:15:35
---
# 11.1
给定赋范线性空间χ中n个线性无关的元素$x_{1},x_{2},\cdots,x_{n},$ 证明：

$$\exists f_{1},f_{2},\cdots,f_{n}\in\mathcal{X}^{*},s.t.\langle f_{i},x_{j}\rangle=\delta_{i j},\forall1\leq i,j\leq n.$$

## 解答
令 $M = \operatorname{span}\{x_1, x_2, \cdots, x_n\}$，即 $M$ 是由 $x_1, x_2, \cdots, x_n$ 张成的子空间。由于 $x_1, x_2, \cdots, x_n$ 线性无关，$M$ 是 $\mathcal{X}$ 的一个 $n$ 维子空间。在赋范线性空间中，有限维子空间是闭的。

对于每个 $i$（$1 \leq i \leq n$），定义线性泛函 $g_i: M \to \mathbb{R}$（或 $\mathbb{C}$，取决于标量域）如下：
$$g_i(x_j) = \delta_{ij} \quad \text{对于 } j = 1, 2, \cdots, n,$$
并通过线性扩展定义在 $M$ 上。由于 $M$ 是有限维的，$g_i$ 是连续线性泛函，即 $g_i \in M^*$。

根据 Hahn-Banach 定理，对于每个连续线性泛函 $g_i \in M^*$，存在一个扩展 $f_i \in \mathcal{X}^*$，使得 $f_i|_M = g_i$，即 $f_i$ 在 $M$ 上与 $g_i$ 一致。

对于任意 $i, j$（$1 \leq i, j \leq n$），有
$$\langle f_i, x_j \rangle = f_i(x_j) = g_i(x_j) = \delta_{ij},$$
满足要求。

因此，存在 $f_1, f_2, \cdots, f_n \in \mathcal{X}^*$，使得 $\langle f_i, x_j \rangle = \delta_{ij}$ 对所有 $1 \leq i, j \leq n$ 成立。

# 11.2
记$l^{\infty}$ 为装备了上确界范数的实有界序列构成的Banach空间，定义移位算子T：$l^{\infty}\rightarrow l^{\infty}$ 为

$$T x:=(x_{n+1})_{n\in\mathbb{N}},\quad x=(x_{n})_{n\in\mathbb{N}}\in l^{\infty}.$$

考虑子空间

$$Y:=\mathrm{Im}(\mathrm{id}-T)=\{x-T x:x\in l^{\infty}\}.$$

1. 记$c_{0}\subset l^{\infty}$ 为趋于0的序列构成的子空间，证明：$c_{0}\subset\overline{{Y}}$ 

2. 记$\mathbf{1}=(1,1,\cdots)\in l^{\infty}$ ，证明：$\sup_{n\in\mathbb{N}}\left|1+x_{n+1}-x_n\right|\geq1,\forall x\in l^\infty$ ，并由此推出

$$d(\mathbf{1},Y)=\inf_{y\in Y}\|\mathbf{1}-y\|_{\infty}=1.$$

3. 由Hahn-Banach定理，存在有界线性泛函$\Lambda:l^{\infty}\rightarrow\mathbb{R}$ 使得$$\Lambda(\mathbf{1})=1,\quad\|\Lambda\|=1,\quad\Lambda(x-T x)\|=0,\forall x\in l^{\infty}.$$
  证明任意这样的泛函具有如下性质：
     1. $\Lambda(T x)=\Lambda(x),\forall x\in l^{\infty}$ 
     2. (b)若$x\in l^{\infty},x_n\geq0,\forall n\in\mathbb{N}$ ，则$\Lambda(x)\geq0$ 
     3. $\liminf_{n\to\infty}x_n\leq\Lambda(x)\leq\limsup_{n\to\infty}x_n,\forall x\in l^{\infty}.$ 收敛，则$\Lambda(x)=\lim_{n\to\infty}x_n$ 

4. 设$\Lambda$满足 3 中条件，试找出$x,y\in l^{\infty}$ 使得$\Lambda(xy)\ne\Lambda(x)\Lambda(y)$ ；（提示：考虑序列$x_{n}:=(-1)^{n}$ 并说明$\Lambda(x)=0$ 

5. 设$\Lambda$满足 3 中条件，证明不存在序列$y\in l^{1}$ 使得$\Lambda(x)=\sum_{n=1}^{\infty}x_n y_n,\forall x\in l^{\infty}$ .（提示：根据（3b）任意这样的序列必然有非负项$y_{n}\geq0$ 并满足$\sum_{n=1}^{\infty}y_{n}=1$ ，于是存在$N\in\mathbb{N}$ 使得$\sum_{n=1}^{N}y_{n}>0,$ ，与(3d)矛盾)

## 解答
### 1

设 $z = (z_n) \in c_0$，即 $\lim_{n \to \infty} z_n = 0$。需要证明存在序列 $y^{(m)} \in Y$ 使得 $y^{(m)} \to z$ 在 $l^{\infty}$ 范数下。

对于每个 $m \in \mathbb{N}$，定义序列 $x^{(m)} \in l^{\infty}$ 如下：
- 当 $n \leq m+1$ 时，令 $x^{(m)}_n = -\sum_{k=1}^{n-1} z_k$（其中空和定义为 0）；
- 当 $n > m+1$ 时，令 $x^{(m)}_n = -\sum_{k=1}^{m} z_k$.

则 $x^{(m)} \in l^{\infty}$，因为只有有限项非零。现在计算 $y^{(m)} = x^{(m)} - T x^{(m)}$:
- 对于 $n \leq m$，有 $y^{(m)}_n = x^{(m)}_n - x^{(m)}_{n+1} = \left( -\sum_{k=1}^{n-1} z_k \right) - \left( -\sum_{k=1}^{n} z_k \right) = z_n$;
- 对于 $n = m+1$，有 $y^{(m)}_{m+1} = x^{(m)}_{m+1} - x^{(m)}_{m+2} = \left( -\sum_{k=1}^{m} z_k \right) - \left( -\sum_{k=1}^{m} z_k \right) = 0$;
- 对于 $n > m+1$，有 $y^{(m)}_n = 0$.

因此，$y^{(m)} \in Y$ 且 $\| z - y^{(m)} \|_{\infty} = \sup_{n > m} |z_n|$。由于 $z_n \to 0$，有 $\sup_{n > m} |z_n| \to 0$ 当 $m \to \infty$，故 $y^{(m)} \to z$。所以 $z \in \overline{Y}$，即 $c_0 \subset \overline{Y}$.

### 2

首先，对于任意 $x \in l^{\infty}$，考虑 $|1 + x_{n+1} - x_n|$。假设对于所有 $n$，有 $|1 + x_{n+1} - x_n| < 1$，则 $-1 < 1 + x_{n+1} - x_n < 1$，即 $-2 < x_{n+1} - x_n < 0$。于是 $x_n$ 严格递减。但 $x$ 有界，严格递减序列必收敛，故 $x_n - x_{n+1} \to 0$，从而 $|1 + x_{n+1} - x_n| = |1 - (x_n - x_{n+1})| \to 1$，与假设矛盾。因此 $\sup_{n} |1 + x_{n+1} - x_n| \geq 1$.

对于 $y \in Y$，存在 $x \in l^{\infty}$ 使得 $y = x - T x$，则 $\| \mathbf{1} - y \|_{\infty} = \sup_n |1 - (x_n - x_{n+1})| = \sup_n |1 + x_{n+1} - x_n| \geq 1$。故 $d(\mathbf{1}, Y) = \inf_{y \in Y} \| \mathbf{1} - y \|_{\infty} \geq 1$. 取 $x = 0$，则 $y = 0 \in Y$，且 $\| \mathbf{1} - 0 \|_{\infty} = 1$，所以 $d(\mathbf{1}, Y) = 1$.

### 3

由 Hahn-Banach 定理，存在有界线性泛函 $\Lambda: l^{\infty} \to \mathbb{R}$ 满足 $\Lambda(\mathbf{1}) = 1$, $\|\Lambda\| = 1$, 且 $\Lambda(x - T x) = 0$ 对于所有 $x \in l^{\infty}$.

#### (a) $\Lambda(T x) = \Lambda(x)$

由 $\Lambda(x - T x) = 0$ 得 $\Lambda(x) - \Lambda(T x) = 0$，故 $\Lambda(T x) = \Lambda(x)$.

#### (b) 若 $x_n \geq 0$ 对于所有 $n$，则 $\Lambda(x) \geq 0$

设 $x \geq 0$。对于任意 $\alpha > \| x \|_{\infty}$，有 $\| \alpha \mathbf{1} - x \|_{\infty} = \alpha - \inf_n x_n$，因为 $\alpha \geq \sup_n x_n$. 于是 $| \Lambda(\alpha \mathbf{1} - x) | \leq \| \alpha \mathbf{1} - x \|_{\infty} = \alpha - \inf_n x_n$. 但 $\Lambda(\alpha \mathbf{1} - x) = \alpha \Lambda(\mathbf{1}) - \Lambda(x) = \alpha - \Lambda(x)$，故 $| \alpha - \Lambda(x) | \leq \alpha - \inf_n x_n$. 由于 $\alpha - \inf_n x_n > 0$，有 $\alpha - \Lambda(x) \leq \alpha - \inf_n x_n$，即 $\Lambda(x) \geq \inf_n x_n \geq 0$.

#### (c) $\liminf_{n \to \infty} x_n \leq \Lambda(x) \leq \limsup_{n \to \infty} x_n$

设 $a = \liminf_{n \to \infty} x_n$, $b = \limsup_{n \to \infty} x_n$. 对于任意 $\varepsilon > 0$，存在 $N$ 使得对于所有 $n \geq N$，有 $x_n \geq a - \varepsilon$. 定义 $w = x - (a - \varepsilon) \mathbf{1}$，则对于 $n \geq N$，有 $w_n \geq 0$. 定义 $u \in c_0$ 为 $u_n = w_n$ 当 $n < N$，且 $u_n = 0$ 当 $n \geq N$. 则 $\Lambda(u) = 0$（因为 $\Lambda$ 在 $c_0$ 上为零）。现在 $w - u \geq 0$，由 (b) 得 $\Lambda(w - u) \geq 0$. 但 $\Lambda(w - u) = \Lambda(w) - \Lambda(u) = \Lambda(w) = \Lambda(x) - (a - \varepsilon)$，故 $\Lambda(x) \geq a - \varepsilon$. 由 $\varepsilon$ 任意性，$\Lambda(x) \geq a$.

类似地，对于 $\limsup$，存在 $N$ 使得对于所有 $n \geq N$，有 $x_n \leq b + \varepsilon$. 定义 $w = (b + \varepsilon) \mathbf{1} - x$，则对于 $n \geq N$，有 $w_n \geq 0$. 定义 $u \in c_0$ 为 $u_n = w_n$ 当 $n < N$，且 $u_n = 0$ 当 $n \geq N$. 则 $\Lambda(u) = 0$，且 $w - u \geq 0$，故 $\Lambda(w - u) \geq 0$. 但 $\Lambda(w - u) = \Lambda(w) - \Lambda(u) = \Lambda(w) = (b + \varepsilon) - \Lambda(x)$，所以 $\Lambda(x) \leq b + \varepsilon$. 由 $\varepsilon$ 任意性，$\Lambda(x) \leq b$.

若 $x$ 收敛，则 $a = b$，故 $\Lambda(x) = \lim_{n \to \infty} x_n$.

### 4

令 $x_n = (-1)^n$. 则 $x \in l^{\infty}$. 由 (3a) 和 $\Lambda(x - T x) = 0$，注意 $T x = ((-1)^{n+1}) = -x$，故 $x - T x = 2x$，所以 $\Lambda(2x) = 0$，即 $\Lambda(x) = 0$. 令 $y = x$，则 $xy = (x_n y_n) = (1) = \mathbf{1}$，故 $\Lambda(xy) = \Lambda(\mathbf{1}) = 1$. 但 $\Lambda(x) \Lambda(y) = 0 \cdot 0 = 0$，所以 $\Lambda(xy) \neq \Lambda(x) \Lambda(y)$.

### 5
考虑序列 $x^{(N)} = 1_{\{n > N\}}$. 则 $\Lambda(x^{(N)}) = \sum_{n > N} y_n$. 但 $T^N x^{(N)} = \mathbf{1}$，故 $\Lambda(T^N x^{(N)}) = \Lambda(\mathbf{1}) = 1$. 由移位不变性，$\Lambda(x^{(N)}) = \Lambda(T^N x^{(N)}) = 1$，所以 $\sum_{n > N} y_n = 1$ 对于所有 $N$. 但 $\sum y_n = 1$ 且 $y_n \geq 0$，故 $\sum_{n > N} y_n \to 0$ 当 $N \to \infty$，矛盾。因此不存在这样的 $y$.


# 11.3
(Hahn-Banach 延拓定理不唯一)假设
$$\mathcal{C}:=\{x=\{x_n\}_{n\geq1}\in l^{\infty}\mid\lim_{n\rightarrow\infty}x_n \text{ 存在} \}$$

$$\mathcal{S}:=\{x=\{x_n\}_{n\geq1}\in l^{\infty}\mid\lim_{n\rightarrow\infty}x_{2n} \text{ 存在} ,\lim_{n\rightarrow\infty}x_{2n+1} \text{存在} \}.$$
$$f(x)=\lim_{n\to\infty}x_n,\forall x\in\mathcal{C}$$
$$f_1(x)=\lim_{n\to\infty}x_{2n},\forall x\in\mathcal{S}$$
$$f_2(x)=\lim_{n\to\infty}x_{2n+1},\forall x\in\mathcal{S}$$

则(i).$\mathcal{S},\mathcal{C}$ 是l∞上的闭子空间；(ii).$f\in\mathcal{C}^{*};f_{1},f_{2}\in\mathcal{S}^{*},\mathrm{ 且 }\|f\|=\|f_{1}\|=\|f_{2}\|=1.$ .此时$f_{1}|_{\mathcal{C}}=f_{2}|_{\mathcal{C}}.$ (iii).能否构造一个例子，表明$\mathrm{Hahn-Banach}$ 延拓方式是无穷的。


## 解答

### 1

首先，证明 $\mathcal{C}$ 是闭子空间。  
设 $\{x^{(k)}\} \subset \mathcal{C}$ 且 $x^{(k)} \to x$ 在 $l^{\infty}$ 范数下，即 $\|x^{(k)} - x\|_{\infty} \to 0$。  
由于每个 $x^{(k)}$ 收敛，设 $L_k = \lim_{n \to \infty} x^{(k)}_n$。  
由 $l^{\infty}$ 收敛性，对于任意 $\epsilon > 0$，存在 $K$ 使得对于所有 $k \geq K$，有 $\|x^{(k)} - x\|_{\infty} < \epsilon$。  
考虑序列 $\{L_k\}$，对于 $k, m \geq K$，有 $|L_k - L_m| \leq \|x^{(k)} - x^{(m)}\|_{\infty} \leq \|x^{(k)} - x\|_{\infty} + \|x - x^{(m)}\|_{\infty} < 2\epsilon$，故 $\{L_k\}$ 是 Cauchy 序列，收敛于某个 $L$。  
现在，对于任意 $\epsilon > 0$，存在 $N$ 使得对于 $n \geq N$，有 $|x^{(k)}_n - L_k| < \epsilon$ 对于足够大的 $k$。  
同时，存在 $K$ 使得对于 $k \geq K$，有 $\|x^{(k)} - x\|_{\infty} < \epsilon$。  
于是对于 $n \geq N$，有  
$$
|x_n - L| \leq |x_n - x^{(k)}_n| + |x^{(k)}_n - L_k| + |L_k - L| < \epsilon + \epsilon + \epsilon = 3\epsilon,
$$  
故 $x_n \to L$，即 $x \in \mathcal{C}$。  
因此 $\mathcal{C}$ 是闭子空间。

其次，证明 $\mathcal{S}$ 是闭子空间。  
设 $\{x^{(k)}\} \subset \mathcal{S}$ 且 $x^{(k)} \to x$ 在 $l^{\infty}$ 范数下。  
对于每个 $x^{(k)}$，极限 $\lim_{n \to \infty} x^{(k)}_{2n}$ 和 $\lim_{n \to \infty} x^{(k)}_{2n+1}$ 存在。  
考虑偶数索引子序列 $\{x_{2n}\}$。  
由于 $\|x^{(k)} - x\|_{\infty} \to 0$，有 $\sup_n |x^{(k)}_{2n} - x_{2n}| \leq \|x^{(k)} - x\|_{\infty} \to 0$，故 $\{x^{(k)}_{2n}\}$ 一致收敛于 $\{x_{2n}\}$。  
一致收敛保持极限，故 $\lim_{n \to \infty} x^{(k)}_{2n}$ 收敛于 $\lim_{n \to \infty} x_{2n}$，即 $\lim_{n \to \infty} x_{2n}$ 存在。  
同理，$\lim_{n \to \infty} x_{2n+1}$ 存在。  
因此 $x \in \mathcal{S}$，故 $\mathcal{S}$ 是闭子空间。

### 2

首先，$f(x) = \lim_{n \to \infty} x_n$ 对于 $x \in \mathcal{C}$。  
线性性：对于 $x, y \in \mathcal{C}$ 和标量 $\alpha, \beta$，有  
$$
f(\alpha x + \beta y) = \lim_{n \to \infty} (\alpha x_n + \beta y_n) = \alpha \lim_{n \to \infty} x_n + \beta \lim_{n \to \infty} y_n = \alpha f(x) + \beta f(y).
$$  
连续性：$|f(x)| = |\lim_{n \to \infty} x_n| \leq \sup_n |x_n| = \|x\|_{\infty}$，故 $\|f\| \leq 1$。  
取序列 $x = (1,1,1,\dots) \in \mathcal{C}$，则 $f(x)=1$ 且 $\|x\|_{\infty}=1$，故 $\|f\| \geq 1$。  
因此 $\|f\|=1$。

其次，$f_1(x) = \lim_{n \to \infty} x_{2n}$ 对于 $x \in \mathcal{S}$。  
线性性类似。  
连续性：$|f_1(x)| \leq \sup_n |x_{2n}| \leq \|x\|_{\infty}$，故 $\|f_1\| \leq 1$。  
取序列 $x$ 其中 $x_{2n}=1$, $x_{2n+1}=0$，则 $x \in \mathcal{S}$，$f_1(x)=1$ 且 $\|x\|_{\infty}=1$，故 $\|f_1\|=1$。  
同理，$f_2(x) = \lim_{n \to \infty} x_{2n+1}$，有 $\|f_2\|=1$。

最后，对于 $x \in \mathcal{C}$，有 $\lim_{n \to \infty} x_n$ 存在，故  
$$
\lim_{n \to \infty} x_{2n} = \lim_{n \to \infty} x_n = \lim_{n \to \infty} x_{2n+1},
$$  
即 $f_1(x) = f(x)$ 和 $f_2(x) = f(x)$，所以 $f_1|_{\mathcal{C}} = f_2|_{\mathcal{C}} = f$.

### 3

考虑子空间 $\mathcal{S}$ 和泛函 $g_\lambda$ 定义在 $\mathcal{S}$ 上：  
$$
g_\lambda(x) = \lambda f_1(x) + (1-\lambda) f_2(x), \quad \lambda \in [0,1].
$$  
由 (ii) 知 $f_1$ 和 $f_2$ 是线性的，故 $g_\lambda$ 是线性的。  
对于 $x \in \mathcal{C}$，有 $f_1(x) = f_2(x) = f(x)$，故 $g_\lambda(x) = f(x)$，即 $g_\lambda$ 是 $f$ 从 $\mathcal{C}$ 到 $\mathcal{S}$ 的延拓。  
范数估计：  
$$
|g_\lambda(x)| \leq \lambda |f_1(x)| + (1-\lambda) |f_2(x)| \leq \lambda \|x\|_{\infty} + (1-\lambda) \|x\|_{\infty} = \|x\|_{\infty},
$$  
故 $\|g_\lambda\| \leq 1$。  
取序列 $x = (1,1,1,\dots) \in \mathcal{S}$，则 $g_\lambda(x) = 1$，且 $\|x\|_{\infty}=1$，故 $\|g_\lambda\| = 1$。

现在，通过 Hahn-Banach 定理，每个 $g_\lambda$ 可以延拓到 $l^{\infty}$ 上的线性泛函 $G_\lambda$，且 $\|G_\lambda\| = 1$。  
对于不同的 $\lambda$，$G_\lambda$ 不同：取序列 $x \in \mathcal{S}$ 其中 $x_{2n}=1$, $x_{2n+1}=0$，则  
$$
G_\lambda(x) = g_\lambda(x) = \lambda f_1(x) + (1-\lambda) f_2(x) = \lambda \cdot 1 + (1-\lambda) \cdot 0 = \lambda.
$$  
因此，当 $\lambda$ 取不同值时，$G_\lambda$ 也不同。这表明 Hahn-Banach 延拓方式可以是无穷的。
