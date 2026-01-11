---
title: 泛函分析第二十六次作业
tags:
  - math
  - functional analysis
categories:
  - math
  - functional analysis homework
index_img: /img/fa.jpg
banner_img: /img/fa.jpg
excerpt: 泛函分析第二十六次作业
abbrlink: 772b99c1
date: 2025-12-28 18:13:56
---
# 26.1
设 $X$ 为复 Banach 空间，$A \in \mathcal{L}^c(X)$ 为双射且是有界复线性算子，实数 $\varepsilon, r$ 使得
$$
0 < \varepsilon < \|A^{-1}\|^{-1} \le \|A\| < r.
$$

证明
$$
A^{-1} = \frac{1}{2\pi i} \int_{|z|=r} \frac{R(z, A)}{z} dz - \frac{1}{2\pi i} \int_{|z|=\varepsilon} \frac{R(z, A)}{z} dz.
$$


## 解答
取 $r > \|A\|$ 及充分小的 $\varepsilon > 0$ 使得 $\sigma(A) \subset \{z: |z| < r\}$ 且 $\{z: |z| \le \varepsilon\} \subset \rho(A)$. 在 $|z|=r$ 上，$R(z,A) = \sum_{n=0}^\infty \frac{A^n}{z^{n+1}}$ 一致收敛，代入积分得
$$
\frac{1}{2\pi i} \int_{|z|=r} \frac{R(z,A)}{z} dz = \sum_{n=0}^\infty A^n \cdot \frac{1}{2\pi i} \int_{|z|=r} \frac{1}{z^{n+2}} dz = 0,
$$
因为 $n+2 \ge 2$ 时积分值为零。在 $|z|=\varepsilon$ 上，$R(z,A)/z$ 在 $z=0$ 处有一阶极点，留数为 $R(0,A) = -A^{-1}$，故
$$
\frac{1}{2\pi i} \int_{|z|=\varepsilon} \frac{R(z,A)}{z} dz = -A^{-1}.
$$
因此，
$$
\frac{1}{2\pi i} \int_{|z|=r} \frac{R(z,A)}{z} dz - \frac{1}{2\pi i} \int_{|z|=\varepsilon} \frac{R(z,A)}{z} dz = 0 - (-A^{-1}) = A^{-1}.
$$

# 26.2

设 $H$ 是复 Hilbert 空间，$A \in \mathcal{L}^c(H)$，$E \subset H$ 为闭复线性子空间，称子空间 $E$ 在 $A$ 下不变，如果
$$
\forall x \in H,\ x \in E \Rightarrow Ax \in E.
$$
证明 $E$ 在 $A$ 下不变当且仅当 $E^\perp$ 在 $A^*$ 下不变。

## 解答
- **充分性**：设 $E$ 在 $A$ 下不变，$\forall y \in E^\perp, x \in E$，有 $Ax \in E$，故 $\langle y, Ax \rangle = 0$，即 $\langle A^* y, x \rangle = 0$，所以 $A^* y \in E^\perp$.  
- **必要性**：设 $E^\perp$ 在 $A^*$ 下不变，$\forall x \in E, y \in E^\perp$，有 $A^* y \in E^\perp$，故 $\langle Ax, y \rangle = \langle x, A^* y \rangle = 0$，所以 $Ax \perp E^\perp$，即 $Ax \in (E^\perp)^\perp = E$.


# 26.3

若 $A \in \mathcal{L}^c(X)$ 满足 $\ker((\lambda I - A)^m) = \ker((\lambda I - A)^{m+1})$，则 $\ker((\lambda I - A)^m) = \ker((\lambda I - A)^{m+k}), \forall k \ge 1$。


## 解答
记 $T = \lambda I - A$. 已知 $\ker(T^m) = \ker(T^{m+1})$. 归纳证明 $\ker(T^m) = \ker(T^{m+k}), \forall k \ge 1$.  
- $k=1$ 时成立.  
- 假设对某个 $k$ 成立，则对 $x \in \ker(T^{m+k+1})$ 有 $T^{m+k}(Tx) = 0$，故 $Tx \in \ker(T^{m+k}) = \ker(T^m)$，从而 $T^{m+1}x = 0$. 由已知条件 $x \in \ker(T^m)$. 因此 $\ker(T^{m+k+1}) \subset \ker(T^m)$. 反向包含显然，故等式成立.

# 26.4

假设 $\lambda \in \sigma(A) \setminus \{0\}$，其中 $A \in \mathcal{L}^c(X)$ 是紧算子。若 $P_\lambda = \frac{1}{2\pi i} \int_{|z-\lambda|=\varepsilon} R(z, A) dz$，其中 $\{|z-\lambda|\le\varepsilon\} \setminus \{\lambda\} \subset \rho(A)$，$Y = \text{Ran}(P_\lambda)$，则 $\forall m \ge 1$，
$$
\ker((\lambda I - A)^m) = \ker((\lambda I - A|_Y)^m).
$$


## 解答
记 $T = \lambda I - A$. 谱投影 $P_\lambda$ 与 $A$ 交换，从而与 $T$ 交换. 设 $Y = \operatorname{Ran}(P_\lambda)$, $Z = \operatorname{Ran}(I - P_\lambda)$. 则 $X = Y \oplus Z$，且 $T|_Z$ 可逆（因 $\lambda \notin \sigma(A|_Z)$）.  
若 $x \in \ker(T^m)$，则 $x = P_\lambda x + (I - P_\lambda)x$. 由交换性，$T^m (I - P_\lambda)x = (I - P_\lambda) T^m x = 0$，故 $(I - P_\lambda)x \in Z \cap \ker(T^m)$. 但 $T^m|_Z$ 可逆，故 $(I - P_\lambda)x = 0$，即 $x \in Y$. 所以 $\ker(T^m) \subset Y$. 显然 $\ker(T^m|_Y) = Y \cap \ker(T^m) = \ker(T^m)$. 等式得证.

# 26.5
证明 $\sigma_p(A)$ 是至多可数集。

## 解答
要证紧算子 $A$ 的点谱 $\sigma_p(A)$ 至多可数.  
对任意 $\delta > 0$，证明集合 $\{\lambda \in \sigma_p(A): |\lambda| \ge \delta\}$ 有限. 若不然，存在互异特征值 $\{\lambda_n\} \subset \sigma_p(A)$ 满足 $|\lambda_n| \ge \delta$，对应特征向量 $x_n$. 它们线性无关. 令 $E_n = \operatorname{span}\{x_1,\dots,x_n\}$，由 Riesz 引理取 $y_n \in E_n$ 使得 $\|y_n\|=1$ 且 $\operatorname{dist}(y_n, E_{n-1}) \ge 1/2$. 对 $m > n$，有
$$
A y_n - A y_m = \lambda_n y_n - \lambda_m y_m + w,
$$
其中 $w \in E_{m-1}$. 于是
$$
\left\| \frac{1}{\lambda_m}(A y_n - A y_m) \right\| = \left\| y_m - \left( \frac{\lambda_n}{\lambda_m} y_n + \frac{w}{\lambda_m} \right) \right\| \ge \operatorname{dist}(y_m, E_{m-1}) \ge \frac{1}{2},
$$
从而 $\|A y_n - A y_m\| \ge \delta/2$，$\{A y_n\}$ 无收敛子列，与 $A$ 紧矛盾. 因此 $\sigma_p(A) \setminus \{0\} = \bigcup_{n=1}^\infty \{\lambda: |\lambda| \ge 1/n\}$ 至多可数，故 $\sigma_p(A)$ 至多可数.

# 26.6

$A \in \mathcal{L}^c(X)$，$r > 0$ 满足 $r > \|A\|$。若 $e^A := \sum_{k=0}^\infty \frac{A^k}{k!}$，则

1. $e^A = \frac{1}{2\pi i} \int_{|z|=r} e^z R(z, A) dz$。
2. $\sigma(e^A) = \{e^\lambda | \lambda \in \sigma(A)\}$。
3. $\forall s, t \in \mathbb{R},\ e^{(s+t)A} = e^{sA} e^{tA}$。

## 解答
1. 取 $r > \|A\|$，则 $\sigma(A) \subset \{z: |z| < r\}$. 在 $|z|=r$ 上，$R(z,A) = \sum_{n=0}^\infty \frac{A^n}{z^{n+1}}$ 一致收敛. 代入积分并交换次序：
   $$
   \frac{1}{2\pi i} \int_{|z|=r} e^z R(z,A) dz = \sum_{n=0}^\infty A^n \cdot \frac{1}{2\pi i} \int_{|z|=r} \frac{e^z}{z^{n+1}} dz = \sum_{n=0}^\infty \frac{A^n}{n!} = e^A.
   $$
2. 由谱映射定理，$\sigma(e^A) = \{e^\lambda: \lambda \in \sigma(A)\}$. 对于紧算子，非零谱点均为特征值，直接验证；若 $0 \in \sigma(A)$，则 $e^0=1 \in \sigma(e^A)$，否则 $e^A - I$ 紧且可逆导致单位算子紧，矛盾（无限维空间）.
3. 由 $sA$ 与 $tA$ 可交换，利用指数级数展开：
   $$
   e^{sA} e^{tA} = \sum_{k,l=0}^\infty \frac{(sA)^k}{k!} \frac{(tA)^l}{l!} = \sum_{m=0}^\infty \frac{(s+t)^m A^m}{m!} = e^{(s+t)A}.
   $$