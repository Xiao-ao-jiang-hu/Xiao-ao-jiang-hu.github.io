---
title: ODE第二次作业
tags:
  - math
  - ode
categories:
  - math
  - ode
excerpt: no excerpt
abbrlink: 74d1d102
date: 2025-09-24 19:30:03
---
## Ex1
<img src="/posts/74d1d102/m1.png" alt="a>1" width="100%">

<img src="/posts/74d1d102/01.png" alt="0<a<1" width="100%">

<img src="/posts/74d1d102/l0.png" alt="a<0" width="100%">

$$
\varphi_c'(t) = \frac{ce_t(1-c+ce^t)-c^2e^{2t}}{(1-c+ce^t)^2}
= \frac{(1-c)ce^t}{（1-c+ce^t)^2}
$$

$$
\varphi_c''(t) = \frac{(1-c)ce^t(1-c+ce^t)^2 - (1-c)ce^t \cdot 2(1-c+ce^t)ce^t}{(1-c+ce^t)^4}\\
= \frac{(1-c)ce^t(1-c)(1-c+ce^t)}{(1-c+ce^t)^4}
= \frac{(1-c)^2ce^t}{(1-c+ce^t)^3}
$$

$c<0$时，$\varphi_c''(t)<0$，$\varphi_c(t)$在$t\in(-\infty,+\infty)$上为凹函数。
$c>1$或$0<c<1$时，$\varphi_c''(t)>0$，$\varphi_c(t)$在$t\in(-\infty,+\infty)$上为凸函数。
$c=0/1$时，$\varphi_c''(t)=0$，$\varphi_c(t)$在$t\in(-\infty,+\infty)$上为驻点。

## Ex2
### 1）

### 2）
分离变量：
$$
\frac{1}{x(1-x)}dx = dt \Rightarrow (\frac{1}{x}+\frac{1}{1-x})dx = dt \\
 \Rightarrow \ln|x|-\ln|1-x|=t+C \Rightarrow \frac{x}{1-x}=Ce^t \Rightarrow x=\frac{Ce^t}{1+Ce^t}
$$

带入初值$x(0)=c$:
$$
c=\frac{C}{1+C} \Rightarrow C=\frac{c}{1-c} \Rightarrow x(t)=\frac{\frac{c}{1-c}e^t}{1+\frac{c}{1-c}e^t}=\frac{ce^t}{1-c+ce^t}
$$

### 3）


## Ex3

## Ex4

## Ex5
### 1）

### 2）
- System 1
$$
x = \frac{dx}{dt} \Rightarrow \frac{1}{x}dx = dt \Rightarrow \ln|x|=t+C_1 \Rightarrow x=C_1e^t
$$
$$
y = 2\frac{dy}{dt} \Rightarrow \frac{1}{2y}dy = dt \Rightarrow \ln|y|/2=t+C_2 \Rightarrow y=C_2e^{2t}
$$
$$
\Rightarrow X(t) = \begin{bmatrix}C_1e^t \\ C_2e^{2t}\end{bmatrix}
$$

- System 2
$$
x = \frac{dx}{dt} \Rightarrow \frac{1}{x}dx = dt \Rightarrow \ln|x|=t+C_1 \Rightarrow x=C_1e^t
$$

$$
y = -2\frac{dy}{dt} \Rightarrow \frac{1}{-2y}dy = dt \Rightarrow \ln|y|/(-2)=t+C_2 \Rightarrow y=C_2e^{-2t}
$$

$$\Rightarrow X(t) = \begin{bmatrix}C_1e^t \\ C_2e^{-2t}\end{bmatrix}$$

- System 3
$$
x = -\frac{dx}{dt} \Rightarrow \frac{1}{-x}dx = dt \Rightarrow \ln|x|=-t+C_1 \Rightarrow x=C_1e^{-t}
$$
$$
y = -2\frac{dy}{dt} \Rightarrow \frac{1}{-2y}dy = dt \Rightarrow \ln|y|/(-2)=t+C_2 \Rightarrow y=C_2e^{-2t}
$$
$$\Rightarrow X(t) = \begin{bmatrix}C_1e^{-t} \\ C_2e^{-2t}\end{bmatrix}$$ 

## Ex6
### 1）

### 2）
$$
\begin{cases}
  \frac{dx}{dt} = y \\
  \frac{dy}{dt} = -2x
\end{cases}
\Rightarrow
\begin{cases}
  \frac{d^2x}{dt^2} = \frac{dy}{dt} = -2x \\
  \frac{d^2y}{dt^2} = -2\frac{dx}{dt} = -2y
\end{cases}
$$
假设其有形如$x=e^{\lambda t}$的解，代入上式得：
$$
\lambda^2e^{\lambda t} = -2e^{\lambda t} \Rightarrow \lambda = \pm \sqrt{2}i
$$
$$
\Rightarrow x = C_1\cos(\sqrt{2}t) + C_2\sin(\sqrt{2}t)
$$
$$
y = \frac{dx}{dt} = -\sqrt{2}C_1\sin(\sqrt{2}t) + \sqrt{2}C_2\cos(\sqrt{2}t)
$$
$$\Rightarrow X(t) = \begin{bmatrix}
C_1\cos(\sqrt{2}t) + C_2\sin(\sqrt{2}t) \\ 
-\sqrt{2}C_1\sin(\sqrt{2}t) + \sqrt{2}C_2\cos(\sqrt{2}t)
\end{bmatrix}$$
### 3）


## Ex7
### 1）

### 2）
$$
\begin{cases}
  \frac{dx}{dt} = \lambda x+y \\
  \frac{dy}{dt} = \lambda y
\end{cases}
$$
先求解$y$:
$$
\frac{dy}{dt} = \lambda y \Rightarrow \frac{1}{y}dy = \lambda dt \Rightarrow \ln|y|=\lambda t + C_1 \Rightarrow y=C_1e^{\lambda t}
$$
再求解$x$:
$$
\frac{dx}{dt} = \lambda x + C_1e^{\lambda t} \Rightarrow \frac{dx}{dt} - \lambda x = C_1e^{\lambda t}
$$
分离变量，先求解齐次方程：
$$
\frac{dx}{dt} = \lambda x \Rightarrow \frac{1}{x}dx = \lambda dt \Rightarrow \ln|x|=\lambda t + C_2 \Rightarrow x=C_2e^{\lambda t}
$$
再求解非齐次方程，设$x=v(t)e^{\lambda t}$
$$
\frac{d(v(t)e^{\lambda t})}{dt} - \lambda v(t)e^{\lambda t} = C_1e^{\lambda t} \Rightarrow \frac{dv(t)}{dt}e^{\lambda t} = C_1e^{\lambda t} \Rightarrow \frac{dv(t)}{dt} = C_1 \Rightarrow v(t) = C_1t + C_3
$$
$$\Rightarrow x = (C_1t + C_3)e^{\lambda t}$$
$$\Rightarrow X(t) = \begin{bmatrix}
(C_1t + C_3)e^{\lambda t} \\
C_1e^{\lambda t}
\end{bmatrix}$$

### 3）