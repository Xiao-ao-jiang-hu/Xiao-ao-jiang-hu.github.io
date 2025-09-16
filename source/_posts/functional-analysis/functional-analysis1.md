---
title: 泛函分析的起源
tags:
  - math
  - functional-analysis
categories:
  - math
  - functional-analysis
excerpt: 泛函分析课程笔记
abbrlink: 45a5a42
date: 2025-09-16 12:43:44
---
# Ch0. 泛函分析的起源

## 线性代数
研究有限维线性空间上的线性变换。

## 无限维空间怎么办？

1. **1887年，Fourier提出分解新方法求解热传导方程** → Fourier级数的收敛性。
   - Fourier级数展开公式：
     $$
     f(x) = \sum_{n=1}^{\infty} \hat{f}(n) e^{inx}
     $$
     其中 $\hat{f}(n) = \int_{-\pi}^{\pi} f(x) e^{-inx} dx$
   - 无穷维空间对应“角坐标系”，$e^{inx}$ 是 $L^2$ 上的正交基。

2. **从积分方程出发**：Sturm-Liouville问题
   $$
   -y'' + q(x)y = \lambda y \quad x \in [a, b]
   $$
   $$
   y(a) = 0 \quad y(b) = 0
   $$
   - 由ODE + 常数变易法：
     $$
     y(x) = C_0 \varphi(x-a) + \frac{1}{\rho} \int_a^x q(s) \sin \rho (x-s) y(s) ds
     $$

3. **$\Delta u + \lambda u = f$**
   $$
   \lambda \varphi(s) + \int_a^b k(s,t) \varphi(t) dt = f(s)
   $$
   - 积分方程：
     $$
     (\lambda - T) \varphi = f
     $$
   - 形式上，泛函：
     $$
     (T \varphi)(s) = \int_a^b k(s,t) \varphi(t) dt
     $$

4. **$(\lambda - T)\varphi = f$ 有限维空间的求解**
   - 由维数公式：
     $$
     \dim \ker(\lambda I - T) + \dim \text{Ran}(\lambda I - T) = n
     $$
     $$
     \Rightarrow \begin{cases} 
     \dim \ker(\lambda I - T) \neq 0 \Rightarrow \lambda \text{是} T \text{的特征值} \Rightarrow (\lambda I - T)\varphi = 0 \text{有非零解} \\
     \dim \ker(\lambda I - T) = 0 \Rightarrow \lambda \text{不是} T \text{的特征值} \Rightarrow (\lambda I - T)\varphi = f \text{有唯一解}
     \end{cases}
     $$

5. **“无穷维情形”**：Hilbert利用“Fourier级数展开”说明Fredholm“二择一定理”
   - 假设 $\{\varphi_n\}_{n \in \mathbb{N}}$ 是一组规范正交基 $\Rightarrow \varphi = \sum_{n \in \mathbb{N}} c_n \varphi_n$
     $$
     \Rightarrow \varphi \sim \{c_n\}_{n \in \mathbb{N}} = \bar{\varphi}
     $$
     $$
     \begin{cases} 
     k(s,t) = \sum_{m,n} b_{m,n} \varphi_m(s) \varphi_n(t) \Rightarrow k(s,t) \sim \{b_{m,n}\}_{(m,n) \in \mathbb{N}^2} = \bar{k} \\
     \end{cases}
     $$
     $$
     \Rightarrow (\lambda - T)\varphi = f \Rightarrow (\lambda - \bar{k})\bar{\varphi} = \bar{f} \quad \text{即“将算子求解”}
     $$

6. **定义内积以及规范正交基** ⇒ 引入线性算子的“谱”的概念（延伸“特征值”概念）
   - 1906年，Riesz研究积分方程中，发现“$L^2$ 不足够，从而引入 $L^p(\mu)$ 空间
   - 1972年，Banach引入“范数”，探讨建立三大原理
   - Von Neumann 将Hilbert空间以及算子理论应用于量子力学，提出“self-adjoint”（自伴）概念，用于“可观测量”
   - 后有Grothendieck，Schwartz ⇒ 局部凸空间，泛函分析理论
   - Sobolev空间

7. **有限维与无穷维的差别**
   - 收敛性
   - 谱
   - 紧性原理
   - 对偶空间