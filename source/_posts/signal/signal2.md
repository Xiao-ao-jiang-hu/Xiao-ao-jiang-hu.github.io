---
layout: blog
title: Signal Processing 2
date: 2024-11-24 19:00:00
tags:
    - signal
excerpt: Signal processing course notes
---

# 信号的分解
## 常规分解
### 直流交流分解
$$f_{DC}(t) = \lim_{T \rightarrow\infty}\frac{1}{T} \int_{-\frac{T}{2}}^{\frac{T}{2}}f(t)\mathrm{d}t$$
$$f_{AC}=f(t)-f_{DC}(t)$$

### 奇偶分解
$$f_e(t) = \frac{f(t)+f(-t)}{2}, f_o(t) = \frac{f(t)-f(-t)}{2}$$

### 虚实分解

## 脉冲分解
将信号**近似**为矩形脉冲

## 正交分解

### Hilbert空间
内积空间+完备性，保证任何函数都存在一个收敛到该函数的函数列

Hilbert空间内任何函数都可以写成无穷级数的形式，该级数为Hilbert空间一组基的线性组合，且该无穷级数收敛到该函数

### 标准正交基
正交基：是一组基+相互正交+模长为1

### 标准正交基下的分解
设$\{x_n\}$是Hilbert空间$H$的一组可列的标准正交基，则有
$$\forall x \in H, x = \sum_n \langle x, x_n \rangle x_n $$

## 周期函数的正交分解
### Dirichlet条件
某个函数在一个周期内满足间断点有限、极值点有限、绝对积分数值有限，称该函数满足Dirichlet条件

### 分解定理
满足Dirichlet条件的周期函数都可以在一组正交基上展开为无穷级数，该级数收敛与原函数
