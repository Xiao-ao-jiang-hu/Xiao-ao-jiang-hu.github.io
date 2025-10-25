---
title: Signal Processing 4
tags:
  - signal
  - math
categories:
  - math
  - signal
excerpt: 本文将介绍信号的采样和采样定理，包括采样函数、理想时域采样、采样定理以及连续信号的采样重构等内容。
abbrlink: 3d8203d0
date: 2024-12-13 23:22:19
---
# 信号的采样
如何从连续时间信号的离散时间样本不失真地恢复成原来的连续时间信号？
## 采样和采样定理
### 采样的数学描述
$$x(t) = f(t)p(t)$$，其中$p$是采样函数

## 理想时域采样
### 采样函数
$$p(t) = \sum_{n=-\infty}^{\infty} \delta(t-nT_s) $$

### 时域表示
$$x_p(t) = x(t)p(t) = \sum_{n=-\infty}^{\infty} x(n T_s)\delta(t-nT_s) $$

### 频域表示
> **HINT: Fourier变换下乘积和卷积关系**
> $$\mathcal{F}\{x(t)y(t)\} = \mathcal{F}\{x(t)\} *\mathcal{F}\{y(t)\}$$
> $$\mathcal{F}\{x(t)*y(t)\} = \mathcal{F}\{x(t)\} \mathcal{F}\{y(t)\}$$
> 频域下的乘积对应时域下的卷积，频域下的卷积对应时域下的乘积


对$p(t)$做傅里叶变换：
$$P(f) = \frac{1}{T_s}\sum_{b=-\infty}^{\infty} e^{in\omega_st} = \frac{2\pi}{T_s}\sum_{b=-\infty}^{\infty}\delta(\omega-n\omega_s)$$
于是由时域频域关系有：
$$X_p(\omega) = \frac{1}{T_s} \sum_{n=-\infty}^{\infty} X(\omega-n\omega_s)$$

> 观察：$X_p(f)$是频谱的平移叠加，平移的间隔为$\omega_s$

## 采样定理
在什么条件下，一个连续时间信号可以用它的离散时间样本来**代替**而不致丢失原有的信息？
### 频谱的混叠
从上方$X_p(f)$的表达式可以看出，当采样频率低于信号频率上限两倍时，延拓的频谱之间会发生叠加，这种现象称为频谱的混叠。

### 采样定理
> **采样定理**：对带限于最高频率$\omega_m$的连续时间信号$x(t)$,如果以$\omega_s≥2\omega_m$的频率进行理想采样，则$x(t)$可以唯一的由其样本$x(nT)$来确定。

## 连续信号的采样重构
如何从连续时间信号的离散时间样本不失真地**恢复**成原来的连续时间信号？
### 采样重构
将采样信号通过理想低通滤波器，滤除叠加的频谱，得到原信号。

### 理想滤波器
希望寻找系统响应函数$h(t)$，使得这个系统对于采样信号的响应信号是原信号。于是这要求：
$$H(\omega) = \begin{cases} T_s, |\omega|\leq\omega_c \\ 0, |\omega|>\omega_c \end{cases}$$
我们定义$Sa(t) = \frac{\sin t}{t}$; 由傅里叶变换的频域时域关系推知:
$$h(t)=\frac{T_s \omega_c}{\pi}Sa(\omega_c t)$$

由理想滤波器重构的信号为：
$$x_r(t) = x_p(t)*h(t) = \frac{T_s \omega_c}{\pi}\sum_{n=-\infty}^{\infty} x(nT_s)Sa(\omega_c(t-nT_s))$$

### 理想滤波器的近似
注意到理想滤波器不是因果系统。我们只能通过近似的方法来实现理想滤波器。

#### 震荡电路
当网络满足$R = \sqrt{\frac{L}{C}}$时，令$\omega_c = \frac{1}{\sqrt{LC}}$，其幅频特性与相频特性近似理想低通滤波器

#### 零阶保持插值
$h_0(t)=\begin{cases} 1, t<T_c \\ 0, \text{else} \end{cases}$

#### 一阶保持插值
$h_1(t)=\begin{cases} 1-|t|/T_c, |t|<T_c \\ 0, \text{else} \end{cases}$
需要延迟1步才能实现插值

## 频域采样
和时域采样对称