---
title: 泛函分析第二十四次作业
tags:
  - math
  - functional analysis
categories:
  - math
  - functional analysis homework
index_img: /img/fa.jpg
banner_img: /img/fa.jpg
excerpt: 泛函分析第二十四次作业
abbrlink: ee468473
date: 2025-12-21 19:03:46
---
# 24.1

若 $\Lambda \in \mathcal{L}^c(X = (X, \|\cdot\|; \mathbb{C}); \mathbb{C})$，则

1. $Re\Lambda \in \mathcal{L}(X = (X, \|\cdot\|; \mathbb{R}); \mathbb{R})$；
2. $\Phi: \mathcal{L}^c(X = (X, \|\cdot\|; \mathbb{C}); \mathbb{C}) \to \mathcal{L}(X = (X, \|\cdot\|; \mathbb{R}); \mathbb{R})$ 是等距同构如果
   $$
   \Phi(\Lambda) = Re\Lambda.
   $$

## 解答
### 1

设 $\Lambda \in \mathcal{L}^c(X; \mathbb{C})$ 为复有界线性泛函。定义 $u = \operatorname{Re} \Lambda : X \to \mathbb{R}$ 为 $u(x) = \operatorname{Re}(\Lambda(x))$。  
- **实线性性**：对任意 $x, y \in X$ 和 $\alpha, \beta \in \mathbb{R}$，由 $\Lambda$ 的复线性知其具实线性性，故  
  $$
  \Lambda(\alpha x + \beta y) = \alpha \Lambda(x) + \beta \Lambda(y).
  $$  
  取实部得  
  $$
  u(\alpha x + \beta y) = \alpha u(x) + \beta u(y).
  $$  
  因此 $u$ 是实线性的。  
- **有界性**：由于 $\Lambda$ 有界，存在 $M > 0$ 使得 $|\Lambda(x)| \leq M \|x\|$ 对所有 $x \in X$ 成立。于是  
  $$
  |u(x)| = |\operatorname{Re}(\Lambda(x))| \leq |\Lambda(x)| \leq M \|x\|.
  $$  
  故 $u$ 有界，且 $\|u\| \leq \|\Lambda\|$。  

综上，$u \in \mathcal{L}(X; \mathbb{R})$。

### 2

定义映射 $\Phi: \mathcal{L}^c(X; \mathbb{C}) \to \mathcal{L}(X; \mathbb{R})$ 为 $\Phi(\Lambda) = \operatorname{Re} \Lambda$。需证 $\Phi$ 是实线性双射且等距。

- **实线性性**：对任意 $\Lambda_1, \Lambda_2 \in \mathcal{L}^c(X; \mathbb{C})$ 和 $\alpha, \beta \in \mathbb{R}$，  
  $$
  \Phi(\alpha \Lambda_1 + \beta \Lambda_2) = \operatorname{Re}(\alpha \Lambda_1 + \beta \Lambda_2) = \alpha \operatorname{Re} \Lambda_1 + \beta \operatorname{Re} \Lambda_2 = \alpha \Phi(\Lambda_1) + \beta \Phi(\Lambda_2).
  $$  
  故 $\Phi$ 是实线性的。

- **单射性**：若 $\Phi(\Lambda_1) = \Phi(\Lambda_2)$，即 $\operatorname{Re} \Lambda_1 = \operatorname{Re} \Lambda_2$。对任意 $x \in X$，由复线性泛函的表示  
  $$
  \Lambda_1(x) = \operatorname{Re} \Lambda_1(x) - i \operatorname{Re} \Lambda_1(ix), \quad
  \Lambda_2(x) = \operatorname{Re} \Lambda_2(x) - i \operatorname{Re} \Lambda_2(ix),
  $$  
  可知 $\Lambda_1 = \Lambda_2$。故 $\Phi$ 是单射。

- **满射性**：给定任意 $u \in \mathcal{L}(X; \mathbb{R})$，定义 $\Lambda: X \to \mathbb{C}$ 为  
  $$
  \Lambda(x) = u(x) - i u(ix), \quad x \in X.
  $$  
  验证 $\Lambda$ 是复线性的：  
  1. **实线性**：由 $u$ 的实线性性，对 $\alpha, \beta \in \mathbb{R}$，  
     $$
     \Lambda(\alpha x + \beta y) = u(\alpha x + \beta y) - i u(i(\alpha x + \beta y)) \\= \alpha u(x) + \beta u(y) - i (\alpha u(ix) + \beta u(iy)) \\= \alpha \Lambda(x) + \beta \Lambda(y).
     $$  
  2. **与 $i$ 交换**：  
     $$
     \Lambda(ix) = u(ix) - i u(i(ix)) = u(ix) - i u(-x) = u(ix) + i u(x),
     $$  
     $$
     i \Lambda(x) = i(u(x) - i u(ix)) = i u(x) + u(ix),
     $$  
     故 $\Lambda(ix) = i \Lambda(x)$。  
  由此可推得 $\Lambda$ 对任意复标量均为线性，即 $\Lambda$ 是复线性的。  
  由 $u$ 有界易得 $\Lambda$ 有界（因 $|\Lambda(x)| \leq |u(x)| + |u(ix)| \leq 2\|u\|\|x\|$），故 $\Lambda \in \mathcal{L}^c(X; \mathbb{C})$。显然 $\operatorname{Re} \Lambda = u$，即 $\Phi(\Lambda) = u$。因此 $\Phi$ 是满射。

- **等距性**：对任意 $\Lambda \in \mathcal{L}^c(X; \mathbb{C})$，令 $u = \Phi(\Lambda)$。需证 $\|\Lambda\| = \|u\|$。  
  一方面，由 $|u(x)| = |\operatorname{Re}(\Lambda(x))| \leq |\Lambda(x)|$ 得 $\|u\| \leq \|\Lambda\|$。  
  另一方面，对任意 $x \in X$ 满足 $\|x\| = 1$，设 $\Lambda(x) = r e^{i\theta}$（$r \geq 0, \theta \in \mathbb{R}$）。由 $\Lambda$ 的复线性，  
  $$
  |\Lambda(x)| = r = \operatorname{Re}(e^{-i\theta} \Lambda(x)) = \operatorname{Re}(\Lambda(e^{-i\theta} x)) = u(e^{-i\theta} x).
  $$  
  由于 $\|e^{-i\theta} x\| = \|x\| = 1$，故  
  $$
  |\Lambda(x)| = u(e^{-i\theta} x) \leq \|u\|.
  $$  
  取上确界得 $\|\Lambda\| \leq \|u\|$。综上，$\|\Lambda\| = \|u\|$，即 $\Phi$ 是等距映射。

因此，$\Phi$ 是实线性空间意义上的等距同构。

# 24.2

若 $X = (X, \|\cdot\|; \mathbb{R})$, $\forall z \in X^c$，记
$$
\|z\|_{X^c} := \sup_{\theta \in \mathbb{R}} \sqrt{\|Re(e^{i\theta}z)\|_X^2 + \|Im(e^{i\theta}z)\|_X^2}.
$$

则

1. $(X^c, \|\cdot\|_{X^c})$ 是复赋范空间，且 $(X^c, \|\cdot\|_{X^c})$ 是 Banach 的如果 $X$ 是 Banach 的；
2. 若 $A: X = (X, \|\cdot\|; \mathbb{R}) \to Y = (Y, \|\cdot\|; \mathbb{R})$，记 $A^c: (X^c, \|\cdot\|_{X^c}) \to (Y^c, \|\cdot\|_{Y^c})$ 使得
   $$
   A^c(x + iy) := Ax + iAy, \forall x + iy \in X^c, x, y \in X.
   $$
则 $A^c \in \mathcal{L}^c(X^c; Y^c)$ 如果 $A \in \mathcal{L}(X; Y)$ 且 $\|A^c\| = \|A\|$。


## 解答
### 1
首先验证 $\|\cdot\|_{X^c}$ 是范数：
- **正定性**：显然 $\|z\|_{X^c} \geq 0$。若 $\|z\|_{X^c} = 0$，则对任意 $\theta \in \mathbb{R}$，有 $\| \operatorname{Re}(e^{i\theta} z) \|_X = \| \operatorname{Im}(e^{i\theta} z) \|_X = 0$。取 $\theta = 0$，得 $\|x\|_X = \|y\|_X = 0$，故 $x = y = 0$，即 $z = 0$。
- **齐次性**：对任意 $\alpha \in \mathbb{C}$，写 $\alpha = r e^{i\phi}$（$r \geq 0$）。则
  $$
  \|\alpha z\|_{X^c} = \sup_\theta \sqrt{ \| \operatorname{Re}(e^{i\theta} \alpha z) \|_X^2 + \| \operatorname{Im}(e^{i\theta} \alpha z) \|_X^2 } \\= \sup_\theta \sqrt{ r^2 \left( \| \operatorname{Re}(e^{i(\theta+\phi)} z) \|_X^2 + \| \operatorname{Im}(e^{i(\theta+\phi)} z) \|_X^2 \right) } = r \|z\|_{X^c} = |\alpha| \|z\|_{X^c}.
  $$
- **三角不等式**：对任意 $z_1, z_2 \in X^c$，对每个 $\theta$，
  $$
  \begin{aligned}
  &\sqrt{ \| \operatorname{Re}(e^{i\theta}(z_1+z_2)) \|_X^2 + \| \operatorname{Im}(e^{i\theta}(z_1+z_2)) \|_X^2 } \\
  &= \sqrt{ \| \operatorname{Re}(e^{i\theta}z_1) + \operatorname{Re}(e^{i\theta}z_2) \|_X^2 + \| \operatorname{Im}(e^{i\theta}z_1) + \operatorname{Im}(e^{i\theta}z_2) \|_X^2 } \\
  &\leq \sqrt{ \left( \| \operatorname{Re}(e^{i\theta}z_1) \|_X + \| \operatorname{Re}(e^{i\theta}z_2) \|_X \right)^2 + \left( \| \operatorname{Im}(e^{i\theta}z_1) \|_X + \| \operatorname{Im}(e^{i\theta}z_2) \|_X \right)^2 } \\
  &\leq \sqrt{ \| \operatorname{Re}(e^{i\theta}z_1) \|_X^2 + \| \operatorname{Im}(e^{i\theta}z_1) \|_X^2 } + \sqrt{ \| \operatorname{Re}(e^{i\theta}z_2) \|_X^2 + \| \operatorname{Im}(e^{i\theta}z_2) \|_X^2 }.
  \end{aligned}
  $$
  取上确界即得 $\|z_1+z_2\|_{X^c} \leq \|z_1\|_{X^c} + \|z_2\|_{X^c}$。

因此 $(X^c, \|\cdot\|_{X^c})$ 是复赋范空间。

再证完备性：设 $\{z_n = x_n + i y_n\}$ 是 $X^c$ 中的 Cauchy 序列。由范数定义，取 $\theta = 0$，得
$$
\sqrt{ \|x_n - x_m\|_X^2 + \|y_n - y_m\|_X^2 } \leq \|z_n - z_m\|_{X^c},
$$
故 $\{x_n\}$ 和 $\{y_n\}$ 是 $X$ 中的 Cauchy 序列。由 $X$ 完备，存在 $x, y \in X$ 使得 $x_n \to x$，$y_n \to y$。令 $z = x + iy$，下证 $z_n \to z$。

对任意 $\varepsilon > 0$，存在 $N$ 使得当 $n,m > N$ 时 $\|z_n - z_m\|_{X^c} < \varepsilon$。固定 $n > N$，对任意 $\theta$，
$$
\sqrt{ \| \operatorname{Re}(e^{i\theta}(z_n - z_m)) \|_X^2 + \| \operatorname{Im}(e^{i\theta}(z_n - z_m)) \|_X^2 } < \varepsilon.
$$
令 $m \to \infty$，由收敛性得
$$
\sqrt{ \| \operatorname{Re}(e^{i\theta}(z_n - z)) \|_X^2 + \| \operatorname{Im}(e^{i\theta}(z_n - z)) \|_X^2 } \leq \varepsilon.
$$
取上确界得 $\|z_n - z\|_{X^c} \leq \varepsilon$，故 $z_n \to z$，因此 $X^c$ 完备。

### 2

定义 $A^c(x+iy) = Ax + iAy$，易见 $A^c$ 复线性。下证有界性。

对任意 $z = x+iy \in X^c$，
$$
\begin{aligned}
\|A^c z\|_{Y^c} &= \sup_\theta \sqrt{ \| \operatorname{Re}(e^{i\theta} A^c z) \|_Y^2 + \| \operatorname{Im}(e^{i\theta} A^c z) \|_Y^2 } \\
&= \sup_\theta \sqrt{ \| A( \operatorname{Re}(e^{i\theta} z) ) \|_Y^2 + \| A( \operatorname{Im}(e^{i\theta} z) ) \|_Y^2 } \\
&\leq \|A\| \sup_\theta \sqrt{ \| \operatorname{Re}(e^{i\theta} z) \|_X^2 + \| \operatorname{Im}(e^{i\theta} z) \|_X^2 } = \|A\| \|z\|_{X^c}.
\end{aligned}
$$
故 $\|A^c\| \leq \|A\|$。

另一方面，对任意 $x \in X$，考虑 $z = x + i0$，则 $\|z\|_{X^c} = \|x\|_X$，且 $A^c z = Ax + i0$，有 $\|A^c z\|_{Y^c} = \|Ax\|_Y$。因此
$$
\|Ax\|_Y = \|A^c z\|_{Y^c} \leq \|A^c\| \|z\|_{X^c} = \|A^c\| \|x\|_X,
$$
故 $\|A\| \leq \|A^c\|$。综上，$\|A^c\| = \|A\|$。


# 24.3

若 $\Lambda_1 + i\Lambda_2 \in (\mathcal{L}(X = (X, \|\cdot\|; \mathbb{R}); \mathbb{R}))^c$，其中 $\Lambda_1, \Lambda_2 \in \mathcal{L}(X = (X, \|\cdot\|; \mathbb{R}); \mathbb{R})$，有
$$
\Lambda^c(x + iy) = \Lambda_1(x) - \Lambda_2(y) + i(\Lambda_2(x) + \Lambda_1(y)),
$$

则

1. $\Phi: (\mathcal{L}(X = (X, \|\cdot\|; \mathbb{R}); \mathbb{R}))^c \to \mathcal{L}^c(X^c; \mathbb{C})$ 是同构，如果 $\Phi(\Lambda_1 + i\Lambda_2) = \Lambda^c$；
2. 若 $X$ 是 Hilbert 空间，则 $\Phi$ 还是等距的。

## 解答
### 1

定义 $\Phi(\Lambda_1 + i\Lambda_2) = \Lambda^c$，其中 $\Lambda^c(x+iy) = \Lambda_1(x) - \Lambda_2(y) + i(\Lambda_2(x) + \Lambda_1(y))$。易验证 $\Lambda^c$ 是复线性的，且由 $\Lambda_1, \Lambda_2$ 有界可知 $\Lambda^c$ 有界，故 $\Lambda^c \in \mathcal{L}^c(X^c; \mathbb{C})$。

- **线性性**：$\Phi$ 显然是实线性的。
- **单射**：若 $\Phi(\Lambda_1 + i\Lambda_2) = 0$，则对任意 $x, y \in X$，有 $\Lambda_1(x) - \Lambda_2(y) = 0$ 且 $\Lambda_2(x) + \Lambda_1(y) = 0$。取 $y = 0$ 得 $\Lambda_1(x) = 0$ 对所有 $x$ 成立；取 $x = 0$ 得 $\Lambda_2(y) = 0$ 对所有 $y$ 成立。故 $\Lambda_1 = \Lambda_2 = 0$。
- **满射**：任取 $\Gamma \in \mathcal{L}^c(X^c; \mathbb{C})$，定义 $\Lambda_1, \Lambda_2: X \to \mathbb{R}$ 为
  $$
  \Lambda_1(x) = \operatorname{Re} \Gamma(x), \quad \Lambda_2(x) = \operatorname{Im} \Gamma(x) \quad (x \in X \subset X^c).
  $$
  由 $\Gamma$ 的限制知 $\Lambda_1, \Lambda_2 \in \mathcal{L}(X; \mathbb{R})$。对任意 $z = x+iy$，
  $$
  \Gamma(z) = \Gamma(x) + i\Gamma(y) = (\Lambda_1(x) + i\Lambda_2(x)) + i(\Lambda_1(y) + i\Lambda_2(y)) \\= (\Lambda_1(x) - \Lambda_2(y)) + i(\Lambda_2(x) + \Lambda_1(y)) = \Lambda^c(z),
  $$
  即 $\Phi(\Lambda_1 + i\Lambda_2) = \Gamma$。故 $\Phi$ 是满射。

综上，$\Phi$ 是实线性空间同构。

### 2

设 $X$ 是实 Hilbert 空间，则 $X^c$ 可赋予标准复内积成为复 Hilbert 空间。由 Riesz 表示定理，存在 $u_1, u_2 \in X$ 使得 $\Lambda_1(x) = \langle x, u_1 \rangle$，$\Lambda_2(x) = \langle x, u_2 \rangle$。

在 $(\mathcal{L}(X; \mathbb{R}))^c$ 上定义范数为
$$
\|\Lambda_1 + i\Lambda_2\| = \sup_{\|x\|=1} |\Lambda_1(x) + i\Lambda_2(x)| = \sup_{\|x\|=1} \sqrt{\Lambda_1(x)^2 + \Lambda_2(x)^2}.
$$
由 Cauchy-Schwarz 不等式，
$$
\sqrt{\Lambda_1(x)^2 + \Lambda_2(x)^2} = \sqrt{\langle x, u_1 \rangle^2 + \langle x, u_2 \rangle^2} \leq \|x\| \sqrt{\|u_1\|^2 + \|u_2\|^2},
$$
且等号可取到（当 $x$ 在 $u_1, u_2$ 张成的子空间中取合适方向），故
$$
\|\Lambda_1 + i\Lambda_2\| = \sqrt{\|u_1\|^2 + \|u_2\|^2}.
$$

另一方面，计算 $\|\Lambda^c\|$。考虑复内积 $\langle z, w \rangle_{X^c} = \langle x, a \rangle + \langle y, b \rangle + i(\langle y, a \rangle - \langle x, b \rangle)$，其中 $z = x+iy$，$w = a+ib$。取 $w = u_1 - i u_2$，则
$$
\langle z, w \rangle_{X^c} = (\Lambda_1(x) - \Lambda_2(y)) + i(\Lambda_2(x) + \Lambda_1(y)) = \Lambda^c(z),
$$
故 $\Lambda^c$ 由向量 $w$ 表示。因此
$$
\|\Lambda^c\| = \|w\|_{X^c} = \sqrt{\|u_1\|^2 + \|u_2\|^2}.
$$

从而 $\|\Lambda_1 + i\Lambda_2\| = \|\Lambda^c\|$，即 $\Phi$ 是等距映射。