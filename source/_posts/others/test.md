---
title: 渲染测试
tags:
  - others
categories:
  - others
excerpt: 渲染测试
date: 2025-1-25 20:15:24
---
# MathJax 测试

本文用于验证 MathJax 对 LaTeX 数学语法的支持程度，涵盖公式、矩阵、对齐、定理、交换图等。

## 1. 基础语法

### 行内公式
- `$a^2 + b^2 = c^2$` → $a^2 + b^2 = c^2$
- `$\sqrt{x} + \int_0^1 f(t)\,dt$` → $\sqrt{x} + \int_0^1 f(t)\,dt$

### 块级公式
$$
\boxed{E = mc^2}
$$

$$
\alpha, \beta, \gamma, \delta, \epsilon, \zeta, \eta, \theta, \iota, \kappa, \lambda, \mu, \nu, \xi, \pi, \rho, \sigma, \tau, \upsilon, \phi, \chi, \psi, \omega
$$

## 2. 矩阵与数组

### 基本矩阵
$$
\begin{matrix}
a & b \\
c & d
\end{matrix}
\quad
\begin{pmatrix}
x \\ y
\end{pmatrix}
\quad
\begin{bmatrix}
1 & 2 & 3 \\
4 & 5 & 6 \\
7 & 8 & 9
\end{bmatrix}
$$

### 分块矩阵
$$
\left[
\begin{array}{c|c}
A & B \\
\hline
C & D
\end{array}
\right]
$$

## 3. 分段函数与条件表达式

$$
f(x) = 
\begin{cases}
x^2 & \text{if } x \geq 0 \\
-x   & \text{if } x < 0
\end{cases}
$$

## 4. 多行公式对齐（align 环境）

$$
\begin{aligned}
(x + y)^2 &= x^2 + 2xy + y^2 \\
(x - y)^2 &= x^2 - 2xy + y^2 \\
(x + y)(x - y) &= x^2 - y^2
\end{aligned}
$$

> ⚠️ 注意：MathJax **不支持 `align` 环境**（会报错），但支持 `aligned`（用于块内对齐）。

## 5. 定理、引理、证明（需 ams 包）

$$
\textbf{Theorem (Pythagoras).} \quad a^2 + b^2 = c^2
$$

$$
\textbf{Proof.} \quad \text{Consider a right triangle...} \quad \blacksquare
$$

> 💡 MathJax 不原生支持 `\begin{theorem}` 环境，但可用 `\textbf{}` 模拟。

## 6. 交换图（AMScd）

$$
\begin{CD}
A @>f>> B \\
@VgVV @VVhV \\
C @>>k> D
\end{CD}
$$

带对角线的图：

$$
\begin{CD}
X @>T>> Y \\
@| @AASA \\
X @<<T^{-1}< Y
\end{CD}
$$

> ✅ 需确保 MathJax 加载了 `ams` 扩展（MPE 默认启用）。

## 7. 特殊符号与字体

### 运算符
$$
\sum_{n=1}^\infty \frac{1}{n^2} = \frac{\pi^2}{6}, \quad
\prod_{k=1}^n k = n!, \quad
\bigcup_{i=1}^n A_i
$$

### 字体
$$
\mathbb{R}, \mathbb{C}, \mathbb{Z}, \quad
\mathcal{L}, \mathcal{F}, \quad
\mathfrak{g}, \mathfrak{sl}_2
$$

### 箭头与关系
$$
\Rightarrow, \Leftrightarrow, \mapsto, \hookrightarrow, \twoheadrightarrow
$$

## 8. 自动编号与引用（可选）

> 🔧 此功能需在 MathJax 配置中启用 `tagFormat` 和 `tags: 'ams'`，**MPE 默认不启用**。

$$
\label{eq:energy}
E = mc^2 \tag{1}
$$

如公式 \eqref{eq:energy} 所示（需配合 `\label{eq:energy}`）。

> 📌 在标准 MPE 或 Hexo 中，通常**不启用自动编号**，故此处仅作说明。

## 9. 极限、积分、微分

$$
\lim_{x \to 0} \frac{\sin x}{x} = 1, \quad
\int_{-\infty}^{\infty} e^{-x^2} dx = \sqrt{\pi}, \quad
\frac{d}{dx} \left( \int_0^x f(t)\,dt \right) = f(x)
$$

## 10. 复杂嵌套

$$
\left\{
\begin{aligned}
\frac{\partial u}{\partial t} &= \alpha \nabla^2 u \\
u(x,0) &= f(x) \\
u(0,t) &= u(L,t) = 0
\end{aligned}
\right.
$$