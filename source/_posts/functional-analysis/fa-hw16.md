---
title: 泛函分析第十六次作业
tags:
  - math
  - functional analysis
categories:
  - math
  - functional analysis homework
index_img: /img/fa.jpg
banner_img: /img/fa.jpg
excerpt: 泛函分析第十六次作业
date: 2025-11-20 22:45:21
---
# 16.1
设H为无穷维可分实Hilbert空间，$(e_n)_{n\in\mathbb{N}}$ 为一组标准正交基，证明:
1. 序列$(e_n)_{n\in\mathbb{N}}$ 弱收敛于0;

2. 集合$A:=\{\sqrt{n}e_n:n\in\mathbb{N}\}$ 是序列弱闭的，但A的弱闭包包含0；
提示：令$U\subset H$ 为0的弱开邻域，证明存在$\varepsilon>0$ 以及$y_{1},\cdots,y_{m}\in H$ 使得
$$V:=\{x\in H:\max_{i=1,\cdots,m}|\langle x,y_i\rangle|<\varepsilon\}\subset U.$$
证明序列$z_{n}:=\max_{i=1,\cdots,m}\left|\left\langle e_{n},y_{i}\right\rangle\right|$ 是平方可加的，并推出$V\cap A\neq\varnothing$ 

3. $A:=\{\sqrt{n}e_n:n\in\mathbb{N}\}$ 中的任何子列均不弱收敛于0.

## 解答
### 1
由于$H$是Hilbert空间，于是由Reisz表示定理，$\forall f \in H^*, !\exist y \in H \, s.t. \, f(x) = <x, y>, \, \forall x \in H$。又由于$(e_n)_{n\in\mathbb{N}}$为标准正交基，故有Parseval等式：
$$\sum_{n=1}^{\infty} |<e_n, y>|^2 = ||y||^2 < +\infty, \forall y \in H$$
因此$|<e_n, y>| \to 0$，即$e_n \rightharpoonup 0$。

### 2
