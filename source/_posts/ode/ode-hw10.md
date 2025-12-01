---
title: ODE第十次作业
tags:
  - math
  - ode
categories:
  - math
  - ode-hw
excerpt: ODE第十次作业
index_img: /img/ode.jpg
banner_img: /img/ode.jpg
abbrlink: 1bdb4842
date: 2025-11-28 21:10:39
---
# Ex 1
本题的目的是说明平衡点渐近稳定的定义中，首先要求平衡点稳定这个条件不是多余的。
1. 求系统 $\dot{\theta}=\sin\frac{\theta}{2}$ 的相流。
2. 考虑极坐标系下的系统 $\dot{r}=r(1-r);\quad\dot{\theta}=\sin\frac{\theta}{2}.$ 求系统的相流。
3. 将该系统转化为直角坐标系下的自治系统，并求其平衡点以及相流。
4. 证明该平衡点p不稳定，但是存在p的一个小邻域U使得对任意的 $z\in U$ 有 $\lim_{t\rightarrow\infty}\phi_{t}(z)=p.$

## 解答
### 1
分离变量：
$$\frac{d\theta}{dt} = \sin\frac{\theta}{2} \implies \frac{d\theta}{\sin(\theta/2)} = dt$$
积分两边：
$$\int \csc\left(\frac{\theta}{2}\right) d\theta = \int dt$$
令 $u = \frac{\theta}{2}$，则 $d\theta = 2 du$，所以：
$$\int \csc u \cdot 2 du = \int dt \implies 2 \int \csc u \, du = t + C$$
$$2 \ln \left| \tan\frac{u}{2} \right| = t + C \implies \ln \left| \tan\frac{\theta}{4} \right| = \frac{t}{2} + C_1$$
$$\left| \tan\frac{\theta}{4} \right| = e^{t/2} e^{C_1} \implies \tan\frac{\theta}{4} = A e^{t/2}$$
其中 $A$ 为常数。由初始条件 $\theta(0) = \theta_0$，得 $A = \tan\frac{\theta_0}{4}$。因此相流为：
$$\phi_t(\theta_0) = 4 \arctan\left( e^{t/2} \tan\frac{\theta_0}{4} \right)$$

### 2
系统由两个独立的方程组成：

$\dot{r} = r(1-r)$ 是逻辑方程，解为：
$$r(t) = \frac{1}{1 + \left( \frac{1}{r_0} - 1 \right) e^{-t}}$$
其中 $r_0 = r(0)$。当 $t \to \infty$ 时，若 $r_0 > 0$，则 $r(t) \to 1$；若 $r_0 = 0$，则 $r(t) = 0$。
$\dot{\theta} = \sin\frac{\theta}{2}$ 的相流如第1部分所示：
$$\theta(t) = 4 \arctan\left( e^{t/2} \tan\frac{\theta_0}{4} \right)$$
其中 $\theta_0 = \theta(0)$。

因此，极坐标系下的相流为：
$$\phi_t(r_0, \theta_0) = \left( \frac{1}{1 + \left( \frac{1}{r_0} - 1 \right) e^{-t}},\ 4 \arctan\left( e^{t/2} \tan\frac{\theta_0}{4} \right) \right)$$
平衡点为：

$r = 0$
$r = 1$ 且 $\theta = 2k\pi$ ，但考虑 $\theta$ 模 $2\pi$，主要平衡点为 $(1,0)$。

### 3
直角坐标与极坐标的关系： $x = r \cos \theta$, $y = r \sin \theta$。则：
$$\dot{x} = \frac{dx}{dt} = \frac{\partial x}{\partial r} \dot{r} + \frac{\partial x}{\partial \theta} \dot{\theta} = \cos \theta \cdot r(1-r) + (-r \sin \theta) \cdot \sin\frac{\theta}{2} = r(1-r) \cos \theta - r \sin \theta \sin\frac{\theta}{2}$$
$$\dot{y} = \frac{dy}{dt} = \frac{\partial y}{\partial r} \dot{r} + \frac{\partial y}{\partial \theta} \dot{\theta} = \sin \theta \cdot r(1-r) + r \cos \theta \cdot \sin\frac{\theta}{2} = r(1-r) \sin \theta + r \cos \theta \sin\frac{\theta}{2}$$
因此，直角坐标系下的自治系统为：
$$\begin{aligned}
\dot{x} &= r(1-r) \cos \theta - r \sin \theta \sin\frac{\theta}{2} \\
\dot{y} &= r(1-r) \sin \theta + r \cos \theta \sin\frac{\theta}{2}
\end{aligned}$$
其中 $r = \sqrt{x^2 + y^2}$, $\cos \theta = \frac{x}{r}$, $\sin \theta = \frac{y}{r}$，但 $\sin\frac{\theta}{2}$ 需通过三角恒等式表达，例如 $\sin\frac{\theta}{2} = \sqrt{\frac{1 - \cos \theta}{2}}$（需考虑象限），系统在原点可能不光滑。
平衡点满足 $\dot{r} = 0$ 和 $\dot{\theta} = 0$：

$\dot{r} = 0$ 当 $r = 0$ 或 $r = 1$。
$\dot{\theta} = 0$ 当 $\sin\frac{\theta}{2} = 0$，即 $\theta = 2k\pi$。

因此平衡点为：

$r = 0$：原点 $(0,0)$。
$r = 1$ 且 $\theta = 2k\pi$：点 $(1,0)$（考虑模 $2\pi$）。

相流在直角坐标系中为：
$$\Phi_t(x, y) = \left( r(t) \cos \theta(t),\ r(t) \sin \theta(t) \right)$$
其中 $r(t) = \frac{1}{1 + \left( \frac{1}{r_0} - 1 \right) e^{-t}}$，$\theta(t) = 4 \arctan\left( e^{t/2} \tan\frac{\theta_0}{4} \right)$，且 $r_0 = \sqrt{x^2 + y^2}$，$\theta_0 = \arg(x + y i)$。

### 4
