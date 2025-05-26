---
layout: blog
title: Signal Processing 3
date: 2024-12-09 13:32:42
tags:
    - signal
excerpt: 本文将介绍信号的傅里叶分解，包括周期连续函数的傅里叶分解、非周期连续函数的傅里叶变换等内容。
---
# 信号的傅里叶分解



## 周期连续函数的傅里叶分解
### 三角函数基
<span>
如下三角函数构成的集合是$\mathcal{L}^2(\mathcal{C}[-\frac{2\pi}{\omega_0}, -\frac{2\pi}{\omega_0}])$空间的一组可列正交基：
$$ \{ sin n \omega_0, cos n \omega_0, 1|n \in \mathbb{N^+}\} $$
该空间的内积为标准内积：
$$ \langle f, g \rangle = \int_{ -\frac{2\pi}{\omega_0} }^{\frac{2\pi}{\omega_0}} f(t)g(t)dt $$
</span>

### 标准形式
<span>
设周期函数$f(t)$的周期为$T$，则$f(t)$可在正交三角函数基$\{ \sin(\frac{2\pi nt}{T}),\cos(\frac{2\pi nt}{T}), 1|n \in \mathbb{N^+}\}$上分解：
</span>
$$f(t) = a_0 + \sum_{n=1}^{\infty}a_n\cos(\frac{2\pi nt}{T}) + \sum_{n=1}^{\infty}b_n\sin(\frac{2\pi nt}{T})$$

<span>
$$
\begin{align*}
    \begin{cases}
        a_0 = \frac{1}{T} \\
        a_n = \frac{2}{T} \int_{t_0}^{t_0+T}f(t)\cos(\frac{2\pi n}{T}t)dt \\
        b_n = \frac{2}{T} \int_{t_0}^{t_0+T}f(t)\sin(\frac{2\pi n}{T}t)dt
    \end{cases}
\end{align*}
$$
</span>

### 复指数形式
<span>
设周期函数$f(t)$的周期为$T$，则$f(t)$可在复指数函数基（不是正交基）$\{ e^{i\frac{2n\pi}{T}t}|n \in \mathbb{Z}\}$上分解：
$$f(t) = \sum_{n=-\infty}^{\infty}F_ne^{i\frac{2n\pi}{T}t}$$
其中
$$F_n = \frac{1}{T_1} \int_{t_0}^{t_0+T}f(t)e^{-i\frac{2n\pi}{T}t}$$
</span>

> **HINT: 为何实信号有负频率**
> sin或cos写成指数形式从欧拉公式的角度分成了$e^{i\omega t}$和$e^{-i\omega t}$项，引入了负数部分，负频率的出现本身无物理意义，实信号分解后正负是成对出现的

## 非周期连续函数的傅里叶分解
### 频谱密度
信号某频率范围内分量的能量与频率范围带宽的比值称为频谱密度
$$F(\omega) =\frac{d(E(\omega))}{d \omega}$$

### 傅里叶变换
若$f(t) \in \mathcal{L}^1$，则可做傅里叶变换：
$$F(\omega) = \int_{-\infty}^{\infty} f(t)e^{-i\omega t}dt $$

### 傅里叶逆变换
$$f(t) = \int_{-\infty}^{\infty} F(\omega)e^{i\omega t}d\omega$$

