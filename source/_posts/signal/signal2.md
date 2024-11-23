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
将信号**近似**为矩形脉冲和