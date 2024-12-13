---
layout: blog
title: Signal Processing 4
date: 2024-12-13 23:22:19
tags:
    - signal
excerpt: Signal processing course notes
---
# 信号的采样
如何从连续时间信号的离散时间样本不失真地恢复成原来的连续时间信号？
## 采样和采样定理
### 采样的数学描述
$$x(n) = \int_{-\infty}^{\infty}f(t)\delta(t-n)dt$$