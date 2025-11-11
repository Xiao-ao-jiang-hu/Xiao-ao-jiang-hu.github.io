---
title: 泛函分析第十二次作业
tags:
  - math
  - functional analysis
categories:
  - math
  - functional analysis
index_img: /img/fa.jpg
banner_img: /img/fa.jpg
excerpt: 泛函分析第十二次作业
abbrlink: 3efaddc4
date: 2025-11-03 08:43:29
---
# 12.1
$K\subset X=(X,+,\cdot,\mathbb{R})$ 则

1. $K$是吸收集等价于0是$K$的代数内点；

2. 若$K$是凸集，则$K$是吸收集等价$\forall x\in X,P_K(x)<\infty$ 

3. 若$K$是平衡凸吸收集，有 $V:=\left\{x\in X|P_{K}(x)<1\right\}\subset K\subset W:=\left\{x\in X|P_{K}(x)\leq1\right\}$; $V,W$ 也是是平衡凸吸收集；$V$ 是 $K$ 的代数内点点全体；$P_{K}=P_{V}=P_{W}$ 

## 解答
### 1
$\Rightarrow$ 
假设 $K$ 是吸收集。则对于每个 $x \in X$，存在 $\delta_x > 0$ 使得当 $|\alpha| \leq \delta_x$ 时，有 $\alpha x \in K$。特别地，对于任意方向 $d \in X$，取 $x = d$，则存在 $\delta_d > 0$ 使得当 $|t| \leq \delta_d$ 时，有 $t d \in K$。取 $\epsilon = \delta_d > 0$，则当 $|t| < \epsilon$ 时（因为 $|t|t| < \epsilon \leq \delta_d$，所以 $t d \in K$。因此，对于每个 $d$，存在 $\epsilon > 0$ 使得当 $|t| < \epsilon$ 时，有 $t d \in K$，即 0 是 $K$ 的代数内点。


$\Leftarrow$ 
假设 0 是 $K$ 的代数内点。则对于每个 $x \in X$，存在 $\epsilon_x > 0$ 使得当 $|t| < \epsilon_x$ 时，有 $t x \in K$。取 $\delta_x = \epsilon_x > 0$，则当 $|\alpha| \leq \delta_x$ 时：

如果 $|\alpha| < \delta_x$，则 $\alpha x \in K$ 直接成立。
如果 $|\alpha| = \delta_x$，则 $\alpha = \delta_x$ 或 $\alpha = -\delta_x$。由 $|t| < \epsilon_x$ 时 $t x \in K$，取 $\delta_x = \epsilon_x / 2 > 0$，则当 $|\alpha| \leq \delta_x$ 时，有 $|\alpha| < \epsilon_x$，所以 $\alpha x \in K$。因此，$K$ 是吸收集。

综上，$K$ 是吸收集当且仅当 0 是 $K$ 的代数内点

### 2
$\Rightarrow$ 
假设 $K$ 是吸收集（且凸）。则对于每个 $x \in X$，存在 $\delta_x > 0$ 使得当 $|\alpha| \leq \delta_x$ 时，有 $\alpha x \in K$。特别地，取 $\alpha = \delta_x$，则 $\delta_x x \in K$，所以 $x \in \frac{1}{\delta_x} K$。因此，$P_K(x) \leq \frac{1}{\delta_x} < \infty$。故 $\forall x \in X, P_K(x) < \infty$.

$\Leftarrow$
假设 $K$ 凸且 $\forall x \in X, P_K(x) < \infty$。首先，证明 $0 \in K$。因为 $P_K(0) = \inf \{ t > 0 \mid 0 \in t K \}$，而 $0 \in t K$ 当且仅当 $0 \in K$（因为 $t K = \{ t y \mid y \in K \}$，所以 $0 = t \cdot 0$ 要求 $0 \in K$)。若 $0 \notin K$，则 $\{ t > 0 \mid 0 \in t K \} = \emptyset$，所以 $P_K(0) = \infty$，矛盾于假设。故 $0 \in K$。

固定任意 $x \in X$，设 $p = P_K(x) < \infty$ 和 $q = P_K(-x) < \infty$（因为 $-x \in X$)。由于 $p < \infty$，对于任意 $\delta > 0$，有 $x \in (p + \delta) K$，即存在 $k_\delta \in K$ 使得 $x = (p + \delta) k_\delta$。类似地，对于 $-x$，存在 $m_\delta \in K$ 使得 $-x = (q + \delta) m_\delta$。

- 对于 $\alpha \geq 0$，考虑 $\alpha x$。取 $\delta = 1$，则 $x = (p + 1) k_1$ 对于某 $k_1 \in K$。设 $s = \alpha (p + 1)$，则 $\alpha x = s k_1$。如果 $s \leq 1$，即 $\alpha \leq \frac{1}{p+1}$，则因为 $K$ 凸且 $0, k_1 \in K$，有 $s k_1 \in [0, k_1] \subset K$，所以 $\alpha x \in K$。
- 对于 $\alpha < 0$，设 $\alpha = -\gamma$ 其中 $\gamma > 0$。则 $-x = (q + 1) m_1$ 对于某 $m_1 \in K$，所以 $\alpha x = -\gamma x = \gamma (-x) = \gamma (q + 1) m_1$。设 $s' = \gamma (q + 1)$，则如果 $s' \leq 1$，即 $\gamma \leq \frac{1}{q+1}$，有 $s' m_1 \in [0, m_1] \subset K$，所以 $\alpha x \in K$。取 $\epsilon = \min \left( \frac{1}{p+1}, \frac{1}{q+1} \right) > 0$。则当 $|\alpha| \leq \epsilon$ 时：

  - 若 $\alpha \geq 0$，则 $\alpha \leq \epsilon \leq \frac{1}{p+1}$，所以 $\alpha x \in K$。
  - 若 $\alpha < 0$，则 $|\alpha| \leq \epsilon \leq \frac{1}{q+1}$，所以 $\alpha x \in K$（如上）。

因此，$K$ 是吸收集。

综上，若 $K$ 凸，则 $K$ 是吸收集当且仅当 $\forall x \in X, P_K(x) < \infty$.


### 3
#### (a) $V \subset K \subset W$
- **$K \subset W$**：若 $x \in K$，则 $x \in 1 \cdot K$，所以 $P_K(x) \leq 1$，故 $x \in W$。
- **$V \subset K$**：若 $x \in V$，即 $P_K(x) < 1$，则存在 $s < 1$ 使得 $x \in s K$，即 $x = s k$ 对于某 $k \in K$。因为 $s \in [0,1]$ 且 $K$ 凸、含 0，有 $s k \in [0, k] \subset K$，所以 $x \in K$。

#### (b) $V$ 和 $W$ 是平衡凸吸收集
- **凸性**：
  - $W = \{ x \mid P_K(x) \leq 1 \}$。设 $x, y \in W$，则 $P_K(x) \leq 1$, $P_K(y) \leq 1$。对 $\lambda \in [0,1]$，有 $P_K(\lambda x + (1-\lambda)y) \leq \lambda P_K(x) + (1-\lambda) P_K(y) \leq \lambda \cdot 1 + (1-\lambda) \cdot 1 = 1$，所以 $\lambda x + (1-\lambda)y \in W$。故 $W$ 凸。
  - $V = \{ x \mid P_K(x) < 1 \}$。设 $x, y \in V$，则 $P_K(x) < 1$, $P_K(y) < 1$。对 $\lambda \in [0,1]$，有 $P_K(\lambda x + (1-\lambda)y) \leq \lambda P_K(x) + (1-\lambda) P_K(y) < \lambda \cdot 1 + (1-\lambda) \cdot 1 = 1$，所以 $\lambda x + (1-\lambda)y \in V$。故 $V$ 凸。
- **平衡性**（用 $P_K$ 绝对齐性）：
  - $W$: 设 $x \in W$，即 $P_K(x) \leq 1$。对 $|\lambda| \leq 1$，有 $P_K(\lambda x) = |\lambda| P_K(x) \leq |\lambda| \cdot 1 \leq 1$，所以 $\lambda x \in W$。故 $W$ 平衡。
  - $V$: 设 $x \in V$，即 $P_K(x) < 1$。对 $|\lambda| \leq 1$，有 $P_K(\lambda x) = |\lambda| P_K(x) < |\lambda| \cdot 1 \leq 1$（因为 $P_K(x) < 1$），所以 $\lambda x \in V$。故 $V$ 平衡。
- **吸收性**：
  - $W$: 固定 $x \in X$。设 $p = P_K(x) < \infty$。取 $\delta = \frac{1}{2p} > 0$（若 $p = 0$，取 $\delta > 0$ 任意）。则当 $|\beta| \leq \delta$，有 $P_K(\beta x) = |\beta| p \leq \delta p = \frac{1}{2} \leq 1$，所以 $\beta x \in W$。故 $W$ 吸收。
  - $V$: 固定 $x \in X$。设 $p = P_K(x) < \infty$。取 $\delta = \frac{1}{2p} > 0$。则当 $|\beta| \leq \delta$，有 $P_K(\beta x) = |\beta| p \leq \delta p = \frac{1}{2} < 1$，所以 $\beta x \in V$。故 $V$ 吸收。

#### (c) $V = \operatorname{aint}(K)$（$V$ 是 $K$ 的代数内点全体）
- **$V \subset \operatorname{aint}(K)$**：设 $x \in V$，即 $P_K(x) < 1$。固定任意 $d \in X$，设 $p_d = P_K(d) < \infty$。取 $\epsilon = \frac{1 - P_K(x)}{2 \max(p_d, 1)} > 0$（若 $p_d = 0$，取 $\epsilon > 0$ 任意大）。则当 $|t| < \epsilon$，有：
  $$
  P_K(x + t d) \leq P_K(x) + P_K(t d) = P_K(x) + |t| p_d < P_K(x) + \epsilon p_d \leq P_K(x) + \frac{1 - P_K(x)}{2} \cdot \frac{p_d}{\max(p_d,1)} \leq P_K(x) + \frac{1 - P_K(x)}{2} = \frac{P_K(x) + 1}{2} < 1
  $$
  （因为 $P_K(x) < 1$，所以 $\frac{P_K(x) + 1}{2} < 1$)。因此 $P_K(x + t d) < 1$，故 $x + t d \in V \subset K$。所以 $x$ 是 $K$ 的代数内点，即 $x \in \operatorname{aint}(K)$。
- **$\operatorname{aint}(K) \subset V$**：设 $x \in \operatorname{aint}(K)$。则 $x \in K$（因为代数内点属于集合），所以 $P_K(x) \leq 1$。假设 $P_K(x) = 1$。考虑方向 $d = -x$，由代数内点定义，存在 $\epsilon > 0$ 使得当 $|t| < \epsilon$ 时，有 $x + t(-x) = (1 - t)x \in K$。取 $t = -\epsilon/2$（负值），则 $|t| = \epsilon/2 < \epsilon$，所以 $(1 - (-\epsilon/2))x = (1 + \epsilon/2)x \in K$。因此 $x \in \frac{1}{1 + \epsilon/2} K$，所以 $P_K(x) \leq \frac{1}{1 + \epsilon/2} < 1$，矛盾（因为假设 $P_K(x) = 1$)。故 $P_K(x) < 1$，即 $x \in V$。  
  因此 $\operatorname{aint}(K) = V$.

#### (d) $P_K = P_V = P_W$
- **$P_K = P_W$**：  
  $P_W(x) = \inf \{ t > 0 \mid x \in t W \}$。因为 $W$ 平衡，$x \in t W$ 当且仅当 $x/t \in W$ 当且仅当 $P_K(x/t) \leq 1$。由于 $P_K(x/t) = |1/t| P_K(x) = \frac{1}{t} P_K(x)$（$t > 0$)，所以 $P_K(x/t) \leq 1$ 当且仅当 $P_K(x) \leq t$。因此：
  $$
  P_W(x) = \inf \{ t > 0 \mid P_K(x) \leq t \} = P_K(x)
  $$
  （因为 $\{ t > 0 \mid P_K(x) \leq t \} = [P_K(x), \infty)$ 如果 $P_K(x) < \infty$，下确界为 $P_K(x)$; 若 $P_K(x) = \infty$，集合为空，下确界 $\infty$)。
- **$P_K = P_V$**：  
  $P_V(x) = \inf \{ t > 0 \mid x \in t V \}$。因为 $V$ 平衡，$x \in t V$ 当且仅当 $x/t \in V$ 当且仅当 $P_K(x/t) < 1$。即 $\frac{1}{t} P_K(x) < 1$ 当且仅当 $P_K(x) < t$（$t > 0$)。因此：
  $$
  P_V(x) = \inf \{ t > 0 \mid P_K(x) < t \} = P_K(x)
  $$
  （因为 $\{ t > 0 \mid P_K(x) < t \} = (P_K(x), \infty)$ 如果 $P_K(x) < \infty$，下确界为 $P_K(x)$; 若 $P_K(x) = \infty$，集合为空，下确界 $\infty$)。  
  故 $P_K = P_V = P_W$.

# 12.2
设X为实赋范线性空间，$0\in C\subset X$ 为凸集，$C$的Minkowski泛函 $p:X\to[0,\infty]$ 定义为

$$p(x):=\inf\{\lambda>0:\lambda^{-1}x\in C\},\ x\in X.$$

证明：$p$是连续的当且仅当 $0\in\mathrm{int}C$ ，此时 $\mathrm{int}C=p^{-1}([0,1)),\overline{C}=p^{-1}([0,1]).$ 

## 解答
$p$ 连续 $\iff$ $0 \in \operatorname{int} C$：

必要性
设 $p$ 连续。因 $p(0) = 0$，存在 $\delta > 0$ 使得当 $\|x\| < \delta$ 时 $p(x) < 1$，即 $x \in p^{-1}([0,1))$。由凸集性质（见 12.1 题），$p^{-1}([0,1)) \subseteq C$，故 $B(0,\delta) \subseteq C$，即 $0 \in \operatorname{int} C$.

充分性
设 $0 \in \operatorname{int} C$，则存在 $\delta > 0$ 使得 $B(0,\delta) \subseteq C$。对任意 $x \in X$ 和 $\varepsilon > 0$，取 $y \in B(x, \delta \varepsilon)$（即 $\|x - y\| < \delta \varepsilon$）。由 $p$ 的次可加性：
$$|p(x) - p(y)| \leq p(x - y).$$
令 $z = (x - y)/(\delta \varepsilon)$，则 $\|z\| < 1$，故 $z \in B(0,1) \subseteq \delta^{-1} C$（因 $B(0,\delta) \subseteq C$），即 $\delta z \in C$，从而 $p(\delta z) \leq 1$。由正齐次性：
$$p(\delta z) = \delta p(z) \leq 1 \implies p(z) \leq \delta^{-1}.$$
代入得：
$$p(x - y) = p(\delta \varepsilon z) = \delta \varepsilon p(z) \leq \varepsilon.$$
故 $|p(x) - p(y)| \leq \varepsilon$，即 $p$ 连续。

$\operatorname{int} C = p^{-1}([0,1))$:

$\subseteq$: 设 $x \in \operatorname{int} C$，存在 $\eta > 0$ 使 $B(x,\eta) \subseteq C$。取 $t \in (0, \eta / \|x\|)$（若 $x \neq 0$），则 $\|(1+t)x - x\| = t\|x\| < \eta$，故 $(1+t)x \in C$，即 $x \in \frac{1}{1+t} C$，从而 $p(x) \leq \frac{1}{1+t} < 1$。
$\supseteq$: 设 $p(x) < 1$，则存在 $r > 0$ 使 $p(x) < 1 - r$。由 $p$ 连续，存在 $\eta > 0$ 使得当 $\|z - x\| < \eta$ 时 $|p(z) - p(x)| < r/2$，则 $p(z) < p(x) + r/2 < 1 - r/2 < 1$，故 $B(x,\eta) \subseteq p^{-1}([0,1)) \subseteq C$（由凸性），即 $x \in \operatorname{int} C$.

$\overline{C} = p^{-1}([0,1])$:

$\subseteq$: 设 $x \in \overline{C}$，则存在序列 $\{x_n\} \subseteq C$ 收敛于 $x$。由 $p$ 连续且 $p(x_n) \leq 1$，有 $p(x) = \lim p(x_n) \leq 1$.
$\supseteq$: 设 $p(x) \leq 1$. 若 $p(x) < 1$，则 $x \in p^{-1}([0,1)) = \operatorname{int} C \subseteq \overline{C}$。若 $p(x) = 1$，令 $x_n = \frac{n}{n+1} x$，则 $p(x_n) = \frac{n}{n+1} < 1$，故 $x_n \in \operatorname{int} C$，且 $\|x_n - x\| = \frac{\|x\|}{n+1} \to 0$，即 $x \in \overline{C}$.

# 12.3
设$X$是赋范线性空间，$E$是$X$中的非空平衡凸集，$f$是$X$上的线性泛函，证明：

$$|f(x)|\leq\sup_{y\in E}\mathrm{Re}f(y),\quad\forall x\in E $$

## 解答
记 $M = \sup_{y \in E} \operatorname{Re} f(y)$。若 $M = +\infty$，则不等式 $|f(x)| \leq M$ 对任意 $x \in E$ 显然成立。因此，假设 $M < +\infty$。

对任意 $x \in E$，需证 $|f(x)| \leq M$。设 $f(x) = re^{i\theta}$，其中 $r = |f(x)| \geq 0$，$\theta \in \mathbb{R}$。取 $\alpha = e^{-i\theta}$，则 $|\alpha| = 1$。由于 $E$ 是平衡集，有 $\alpha x \in E$。

由 $f$ 的线性性，
$$
f(\alpha x) = \alpha f(x) = e^{-i\theta} \cdot re^{i\theta} = r.
$$
因此，
$$
\operatorname{Re} f(\alpha x) = \operatorname{Re}(r) = r = |f(x)|.
$$
由于 $\alpha x \in E$，有
$$
\operatorname{Re} f(\alpha x) \leq \sup_{y \in E} \operatorname{Re} f(y) = M.
$$
即
$$
|f(x)| \leq M.
$$
故对任意 $x \in E$，不等式成立。

# 12.4
设 $X$ 是实赋范线性空间，$E \subseteq X$ 是非空的平衡闭凸集，$x_0 \in X \setminus E$。证明存在 $f \in X^*$ 和 $a > 0$，使得对任意 $x \in E$，有 $|f(x)| < a < |f(x_0)|$。


## 解答
由于 $E$ 是非空平衡凸集，有 $0 \in E$。因为 $x_0 \notin E$ 且 $E$ 是闭凸集，根据 Hahn-Banach 分离定理，存在 $f \in X^*$ 使得对任意 $x \in E$，有 $f(x) < f(x_0)$。特别地，由于 $0 \in E$，有 $f(0) = 0 < f(x_0)$，故 $f(x_0) > 0$。

由于 $E$ 是平衡集，对任意 $x \in E$，有 $-x \in E$，因此 $f(-x) < f(x_0)$，即 $-f(x) < f(x_0)$，所以 $f(x) > -f(x_0)$。于是对任意 $x \in E$，有 $-f(x_0) < f(x) < f(x_0)$，从而 $|f(x)| < f(x_0) = |f(x_0)|$。

令 $\alpha = \sup_{x \in E} f(x)$。由于对任意 $x \in E$ 有 $f(x) < f(x_0)$，且 $E$ 是闭集，有 $\alpha < f(x_0)$。又因为 $E$ 是平衡集，有 $\sup_{x \in E} |f(x)| = \alpha$。因此，取 $a$ 满足 $\alpha < a < f(x_0)$，则对任意 $x \in E$，有 $|f(x)| \leq \alpha < a$，且 $a < f(x_0) = |f(x_0)|$。

故存在 $f \in X^*$ 和 $a > 0$，使得对任意 $x \in E$，有 $|f(x)| < a < |f(x_0)|$。

# 12.5
设$E,F$是实赋范线性空间$X$中的两个互不相交的非空凸集，并且$E$是开的和平衡的，证明：

$$\exists f\in\mathcal{X}^*,s.t.|f(x)|<\inf_{y\in F}|f(y)|,\ \forall x\in E.$$

## 解答
因 $E$ 开、凸、平衡，$F$ 凸，且 $E \cap F = \varnothing$，由 Hahn–Banach 分离定理，存在 $f \in \mathcal{X}^*$ 和 $c > 0$ 使得 $f(x) < c \leq f(y)$ 对所有 $x \in E, y \in F$。
由 $E$ 平衡，$|f(x)| < c$（因 $x, -x \in E$），而 $f(y) \geq c$ 得 $|f(y)| \geq c$。
故对所有 $x \in E$，$|f(x)| < c \leq \inf_{y \in F} |f(y)|$，即得结论


# 12.6
定义$A:=\{x\in l^{2}:x_{i}=0,\forall i>1\}$ 以及

$$B:=\{x=(x_i)_{i=1}^{\infty}\in\mathbb{R}^{\mathbb{N}}:|ix_i-i^{1/3}|\leq x_1,\forall i>1\}\subset l^2.$$

试证明$A,B$是$l^2$中的两个互不相交的非空闭凸集，并且$A-B$在$l^2$空间中稠密，并由此推出$A,B$不能被仿射超平面分离。

## 解答
非空显然。先证明不交：
假设存在 $(x_1, 0, \cdots, 0) \in A \cap B$. 则有 $n^{\frac{1}{3}} \leq x_1, \forall u > 1$. 由于 $x_1$ 为常数，矛盾，于是不交。

$A$ 和 $\mathbb{R}$ 同构，故闭凸。下证B闭凸

闭性：
设 $\{b_n\} \subset B$ 收敛于 $b \in l^2$。对于每个 $i > 1$，有 $|i b_n(i) - i^{1/3}| \leq b_n(1)$。取极限 $n \to \infty$，由坐标收敛得 $|i b(i) - i^{1/3}| \leq b(1)$，故 $b \in B$.

凸性：
取 $x, y \in B$ 和 $t \in [0,1]$，令 $z = t x + (1-t) y$。则 $z_1 = t x_1 + (1-t) y_1$，且对于 $i > 1$，有：
$$|i z_i - i^{1/3}| = |t(i x_i - i^{1/3}) + (1-t)(i y_i - i^{1/3})| \leq t |i x_i - i^{1/3}| + (1-t) |i y_i - i^{1/3}| \leq t x_1 + (1-t) y_1 = z_1,$$
故 $z \in B$.


$A-B$ 的稠密性：
任取 $y \in l^2$ 和 $\eta > 0$，需找 $a \in A$、$b \in B$ 使得 $\|y - (a - b)\|_2 < \eta$。
取 $\varepsilon = \eta^2$，选择 $N$ 使得$\sum_{i=N+1}^{\infty} y_i^2 < \frac{\varepsilon}{4}, \quad \sum_{i=N+1}^{\infty} i^{-4/3} < \frac{\varepsilon}{4}.$
定义 $b \in B$ ：$b_1 = M = \max\{ |i y_i + i^{1/3}| : i = 2, \dots, N \}$（若 $N=1$，取 $M \geq 0$）；对 $i = 2, \dots, N$，令 $b_i = -y_i$；对 $i > N$，令 $b_i = i^{-2/3}$。

验证 $b \in B$：

对 $i = 2, \dots, N$，有 $|i b_i - i^{1/3}| = | -i y_i - i^{1/3}| \leq M = b_1$，
对 $i > N$，有 $|i b_i - i^{1/3}| = 0 \leq b_1$。

定义 $a \in A$ 为：
$$a = (y_1 + M, 0, 0, \dots).$$
则：
$$y - (a - b) = (0, 0, \dots, 0, y_{N+1} + i^{-2/3}, \dots).$$
计算范数：
$$\|y - (a - b)\|_2^2 = \sum_{i=N+1}^{\infty} |y_i + i^{-2/3}|^2 \leq 2\sum_{i=N+1}^{\infty} y_i^2 + 2\sum_{i=N+1}^{\infty} i^{-4/3} < 2\cdot\frac{\varepsilon}{4} + 2\cdot\frac{\varepsilon}{4} = \varepsilon = \eta^2,$$
即 $\|y - (a - b)\|_2 < \eta$，故 $A - B$ 在 $l^2$ 中稠密。

不能被仿射超平面分离：
假设存在连续线性泛函 $f \neq 0$ 和常数 $c$ 使得对于所有 $a \in A$ 有 $f(a) \leq c$，对于所有 $b \in B$ 有 $f(b) \geq c$。则对于所有 $a \in A$ 和 $b \in B$，有 $f(a) \leq f(b)$，即 $f(a - b) \leq 0$。由于 $A - B$ 在 $l^2$ 中稠密，对于任意 $x \in l^2$，存在序列 $a_n \in A$ 和 $b_n \in B$ 使得 $a_n - b_n \to x$。则 $f(a_n - b_n) \to f(x)$，但 $f(a_n - b_n) \leq 0$，故 $f(x) \leq 0$。同理，考虑 $B - A$（亦稠密），有 $f(b - a) \geq 0$，故 $f(x) \geq 0$。因此 $f(x) = 0$ 对于所有 $x \in l^2$，与 $f \neq 0$ 矛盾。故不存在非平凡仿射超平面分离 $A$ 和 $B$。