---
title: 流匹配与得分匹配
tags:
  - generative models
  - flow models
  - diffusion models
  - math
categories:
  - machine learning
  - math
excerpt: >-
  本文我们将深入探讨构建流模型（Flow Models）与扩散模型（Diffusion
  Models）的核心——训练目标的推导。不同于传统的监督学习任务，这里我们没有明确的标签（label），因此必须从模型本身的动态出发，推导出合适的训练目标。重点是理解六个关键概念：条件概率路径（Conditional
  Probability Path）、条件向量场（Conditional Vector Field）、条件得分函数（Conditional Score
  Function），以及它们对应的边缘（Marginal）版本。
abbrlink: f1e1d33b
date: 2025-08-25 11:51:56
---

## 概率路径
### 条件概率路径

条件概率路径（Conditional Probability Path）描述的是单个数据点如何从一个已知的简单分布（如标准高斯）逐步演化为其对应的样本点。形式上，给定一个数据样本 $x_0 \in \mathbb{R}^d$，其条件概率路径是一个时间依赖的概率分布 $p_t(x|x_0)$，满足两个关键条件：

1. 初始分布：在时刻 $t=0$，路径起始于一个已知且易于采样的分布，通常取为标准高斯，即  
   $$
   p_0(x|x_0) = \mathcal{N}(x; 0, I_d)
   $$

2. 终端分布：在时刻 $t=1$，路径收敛于以真实样本点 $x_0$ 为中心的狄拉克分布（Dirac delta），即  
   $$
   p_1(x|x_0) = \delta(x - x_0)
   $$

换言之，条件概率路径刻画了从“噪声”到“数据”的确定性演化过程，为模型提供了一个可追踪的生成轨迹。

#### 例子

假设我们有一维数据点 $x_0 = 2.5$，并选择高斯分布作为初始分布。那么其条件概率路径可以构造为：

$$
p_t(x|x_0=2.5) = \mathcal{N}\!\left(x;\, (1-t)\cdot 0 + t\cdot 2.5,\; (1-t)^2\cdot 1\right)
$$

- 当 $t=0$ 时，$p_0(x|x_0)$ 是标准高斯 $\mathcal{N}(0,1)$，表示“纯噪声”；
- 当 $t=1$ 时，方差趋于 0，分布坍缩为 $\delta(x-2.5)$，即完全恢复出数据点。


### 边缘概率路径

边缘概率路径（Marginal Probability Path）是在整个数据集分布上定义的演化过程，它通过对所有数据点的条件概率路径进行加权积分得到。形式上，给定数据分布 $p_{\text{data}}(x_0)$，边缘概率路径定义为：

$$
p_t(x) = \int_{\mathbb{R}^d} p_t(x|x_0)\, p_{\text{data}}(x_0)\, dx_0
$$

它满足以下两个关键性质：

1. 初始分布：  
   $$
   p_0(x) = \mathcal{N}(x; 0, I_d)
   $$
   即所有路径共享同一个简单初始分布（如标准高斯）。

2. 终端分布：  
   $$
   p_1(x) = p_{\text{data}}(x)
   $$
   即演化终点恢复出真实的数据分布。

因此，边缘概率路径描述的是从噪声分布到真实数据分布的整体演化过程，是生成模型最终要学习的目标。


#### 例子：k 个数据点的情况

假设我们有一个离散数据集，包含 $k=3$ 个一维样本：  
$$
\{x_0^{(1)} = -1,\; x_0^{(2)} = 0,\; x_0^{(3)} = 1\}
$$  
对应的数据分布为：  
$$
p_{\text{data}}(x_0) = \frac{1}{3}\left[\delta(x_0 + 1) + \delta(x_0) + \delta(x_0 - 1)\right]
$$

那么，其边缘概率路径为：

$$
p_t(x) = \frac{1}{3}\sum_{i=1}^3 \mathcal{N}\!\left(x;\; t x_0^{(i)},\; (1-t)^2\right)
$$

- 当 $t=0$ 时，三个高斯分量重合，整体为 $\mathcal{N}(0,1)$；
- 当 $t=1$ 时，方差趋于 0，分布收敛为三个狄拉克函数的混合，即  
  $$
  p_1(x) = \frac{1}{3}\left[\delta(x+1) + \delta(x) + \delta(x-1)\right] = p_{\text{data}}(x)
  $$


### 条件速度场
条件速度场（Conditional Vector Field）$u_t(x|x_0)$ 是一条确定性的常微分方程（ODE）速度场，它保证：如果我们从初始分布 $p_0(x|x_0)=\mathcal{N}(0,I)$ 中采一个 $X_0$，然后按

$$
\frac{dX_t}{dt}=u_t(X_t|x_0),\quad X_0\sim p_0(\cdot|x_0)
$$

演化，那么任意时刻 $t$ 的瞬时分布恰好就是条件概率路径 $p_t(x|x_0)$。换句话说，$u_t(\cdot|x_0)$ 是“把噪声一步步推成狄拉克”的确定性引擎。

数学上，$u_t(x|x_0)$ 必须满足连续性方程（consistency condition）

$$
\frac{\partial p_t(x|x_0)}{\partial t}+\nabla_x\cdot\bigl(p_t(x|x_0)\,u_t(x|x_0)\bigr)=0,
$$

只要该方程成立，ODE 轨迹的分布就与 $p_t(x|x_0)$ 完全匹配。


#### 延续前面的一维例子  
对 $x_0=2.5$，我们已构造

$$
p_t(x|x_0)=\mathcal{N}\!\bigl(x;\,\mu_t=t x_0,\,\sigma_t^2=(1-t)^2\bigr).
$$

把它代入连续性方程，可解出封闭形式的条件速度场

$$
u_t(x|x_0)=\frac{x_0-x}{1-t}.
$$

### 边缘速度场

边缘速度场（Marginal Vector Field）$u_t(x)$ 是作用在整个数据分布上的确定性速度场，它满足：若我们从初始分布 $X_0 \sim p_0(x) = \mathcal{N}(0, I)$ 出发，按如下 ODE 演化：

$$
\frac{dX_t}{dt} = u_t(X_t), \quad X_0 \sim p_0(x),
$$

则任意时刻 $t$ 的瞬时分布恰好是边缘概率路径 $p_t(x)$。换句话说，$u_t(x)$ 是把“噪声分布”推向“真实数据分布”的整体驱动场。


#### 数学描述：通过条件速度场边缘化得到

边缘速度场不是独立定义的，而是通过对所有数据点的条件速度场进行加权平均（即边缘化）得到：

$$
u_t(x) = \mathbb{E}_{p_t(x_0|x)} \left[ u_t(x|x_0) \right] = \int u_t(x|x_0)\, p_t(x_0|x)\, dx_0.
$$

这里的关键是引入后验分布 $p_t(x_0|x)$，它表示：在当前位置 $x$ 处，最有可能来自哪个原始数据点 $x_0$。利用贝叶斯公式，我们有：

$$
p_t(x_0|x) = \frac{p_t(x|x_0)\, p_{\text{data}}(x_0)}{p_t(x)}.
$$

因此，边缘速度场可以显式写为：

$$
u_t(x) = \int u_t(x|x_0)\, \frac{p_t(x|x_0)\, p_{\text{data}}(x_0)}{p_t(x)}\, dx_0.
$$


#### 推导：从条件到边缘

我们已知条件速度场满足连续性方程：

$$
\frac{\partial p_t(x|x_0)}{\partial t} + \nabla_x \cdot \left( p_t(x|x_0)\, u_t(x|x_0) \right) = 0.
$$

对两边关于 $p_{\text{data}}(x_0)\, dx_0$ 积分，交换微分与积分顺序，得到：

$$
\frac{\partial}{\partial t} \int p_t(x|x_0)\, p_{\text{data}}(x_0)\, dx_0 + \nabla_x \cdot \int p_t(x|x_0)\, u_t(x|x_0)\, p_{\text{data}}(x_0)\, dx_0 = 0.
$$

左边第一项正是边缘概率路径：

$$
\frac{\partial p_t(x)}{\partial t} + \nabla_x \cdot \left( p_t(x)\, \underbrace{\int u_t(x|x_0)\, \frac{p_t(x|x_0)\, p_{\text{data}}(x_0)}{p_t(x)}\, dx_0}_{=u_t(x)} \right) = 0.
$$

因此，我们验证了：只要用上述加权平均定义 $u_t(x)$，它就自动满足边缘连续性方程，从而保证 ODE 轨迹的分布始终与 $p_t(x)$ 一致。


#### 延续前面 k 个点的例子

回忆离散数据集：

$$
p_{\text{data}}(x_0) = \frac{1}{3}\left[\delta(x_0 + 1) + \delta(x_0) + \delta(x_0 - 1)\right],
$$

条件速度场为：

$$
u_t(x|x_0) = \frac{x_0 - x}{1 - t}.
$$

代入边缘化公式，得：

$$
u_t(x) = \sum_{i=1}^3 \frac{x_0^{(i)} - x}{1 - t} \cdot \underbrace{\frac{\mathcal{N}\!\left(x;\, t x_0^{(i)},\, (1-t)^2\right)}{\sum_{j=1}^3 \mathcal{N}\!\left(x;\, t x_0^{(j)},\, (1-t)^2\right)}}_{\text{后验权重 } w_i(x,t)}.
$$

- 当 $x$ 靠近 $-t$，权重 $w_1 \approx 1$，速度场近似 $\frac{-1 - x}{1 - t}$；  
- 当 $x$ 靠近 $0$，权重 $w_2 \approx 1$，速度场近似 $\frac{-x}{1 - t}$；  
- 当 $x$ 靠近 $t$，权重 $w_3 \approx 1$，速度场近似 $\frac{1 - x}{1 - t}$。

#### 直观理解
- 每个地铁站 = 空间中的一个位置 $x$  
- 每辆列车 = 一条条件速度场 $u_t(x|x_0)$，只负责把乘客送到固定公司 $x_0$  
- 乘客刷闸机时，APP 会根据你当前所在的站台 $x$ 实时告诉你：去哪家公司上班最可能？ 这个概率就是后验权重 $p_t(x_0|x)$  

于是，你在站台看到的人潮流动方向（箭头叠加）正是边缘速度场 $u_t(x)$：  
- 靠近 A 公司线路的站台 → 箭头几乎指向 A 公司；  
- 位于中间换乘站 → 箭头是三条线路的加权平均，人自然分流；  
- 最终，所有人（噪声粒子）沿着各自最可能的路线，精准抵达各自公司（数据点），整个城市分布从“随机散客”变成“早高峰三簇通勤人流”——这就是边缘速度场把“噪声分布”推向“真实数据分布”的直观画面。

### 条件得分函数
从确定性流模型扩展到扩散模型时，我们不再只沿一条 ODE 轨迹，而是让粒子在随机微分方程 中扩散：

$$
dX_t = u_t(X_t|x_0)\,dt + \sigma_t\,dW_t,
$$

其中 $\sigma_t>0$ 是扩散系数，$W_t$ 为标准布朗运动。为了描述这种带噪声的演化，我们需要引入条件得分函数（Conditional Score Function）：

$$
\nabla_x \log p_t(x|x_0),
$$

它衡量“在当前位置 $x$ 处，对数概率密度最陡的增长方向”，即告诉布朗粒子“应该朝哪里漂移才能最终塌陷到 $x_0$”。


#### 连续性方程：Fokker–Planck 形式

对于上述 SDE，条件概率路径 $p_t(x|x_0)$ 满足Fokker–Planck 方程：

$$
\frac{\partial p_t(x|x_0)}{\partial t} = -\nabla_x \cdot \bigl(p_t(x|x_0)\,u_t(x|x_0)\bigr) + \frac{\sigma_t^2}{2}\Delta_x p_t(x|x_0).
$$

把漂移项改写得物态方程形式，可发现：

$$
p_t(x|x_0)\,u_t(x|x_0) = \frac{\sigma_t^2}{2}\,p_t(x|x_0)\,\nabla_x \log p_t(x|x_0) + \text{(散度自由项)},
$$

于是条件得分函数天然出现在漂移速度里，成为 SDE 版本的“导航梯度”。


### 边缘得分函数

与速度场类似，我们关心整个数据集的边缘得分：

$$
\nabla_x \log p_t(x).
$$

利用贝叶斯链式法则：

$$
\nabla_x \log p_t(x) = \frac{\nabla_x p_t(x)}{p_t(x)} = \frac{\displaystyle\int \nabla_x p_t(x|x_0)\,p_{\text{data}}(x_0)\,dx_0}{p_t(x)} = \int \Bigl[\nabla_x \log p_t(x|x_0)\Bigr]\,\frac{p_t(x|x_0)\,p_{\text{data}}(x_0)}{p_t(x)}\,dx_0.
$$

记后验权重 $w(x_0|x,t)=\dfrac{p_t(x|x_0)\,p_{\text{data}}(x_0)}{p_t(x)}$，得到边缘得分 = 条件得分的后验加权平均：

$$
\nabla_x \log p_t(x) = \mathbb{E}_{p_t(x_0|x)}\!\bigl[\nabla_x \log p_t(x|x_0)\bigr].
$$


#### 例子

继续用离散数据集：

$$
p_{\text{data}}(x_0)=\frac13\sum_{i=1}^3 \delta(x_0-x_0^{(i)}),\quad x_0^{(i)}\in\{-1,0,1\}.
$$

选择方差保持（VP） 扩散路径：

$$
p_t(x|x_0)=\mathcal{N}\!\bigl(x;\,t x_0,\,(1-t)^2\bigr)\quad(\text{扩散系数 }\sigma_t=\sqrt{2}\,),
$$

则条件得分函数为：

$$
\nabla_x \log p_t(x|x_0) = -\frac{x-t x_0}{(1-t)^2}.
$$

代入边缘化公式，得边缘得分：

$$
\nabla_x \log p_t(x) = -\sum_{i=1}^3 w_i(x,t)\,\frac{x-t x_0^{(i)}}{(1-t)^2},
$$

其中权重：

$$
w_i(x,t)=\frac{\mathcal{N}\!\bigl(x;\,t x_0^{(i)},\,(1-t)^2\bigr)}{\sum_{j=1}^3 \mathcal{N}\!\bigl(x;\,t x_0^{(j)},\,(1-t)^2\bigr)}.
$$

- 当 $x\approx -t$，$w_1\approx 1$，得分 $\approx -\frac{x+t}{(1-t)^2}$，粒子被拉向 $-1$；  
- 当 $x\approx 0$，$w_2\approx 1$，得分 $\approx -\frac{x}{(1-t)^2}$，粒子被拉向 $0$；  
- 当 $x\approx t$，$w_3\approx 1$，得分 $\approx -\frac{x-t}{(1-t)^2}$，粒子被拉向 $1$。


## 总结
| 名称     | 记号                                 | 核心性质                                               | 公式                                                                                                     |
| ------ | ---------------------------------- | -------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| 条件概率路径 | $$p_t(x \mid x_0)$$                  | 把单样本 $x_0$ 与初始高斯 $\mathcal N(0,I)$ 插值              | 例：$\mathcal N\bigl(x;\,t x_0,\,(1-t)^2 I\bigr)$                                                        |
| 边缘概率路径 | $$p_t(x)$$                           | 把初始分布 $p_{\text{init}}$ 与数据分布 $p_{\text{data}}$ 插值 | $$p_t(x)=\int p_t(x\mid z)\,p_{\text{data}}(z)\,dz$$                                                     |
| 条件速度场  | $$u_t(x \mid x_0)$$                  | 使 ODE 轨迹的瞬时分布恰为 $p_t(x \mid x_0)$                  | 例：$\displaystyle\frac{x_0-x}{1-t}$（VP 路径）                                                              |
| 边缘速度场  | $$u_t(x)$$                           | 使 ODE 轨迹的瞬时分布恰为 $p_t(x)$                           | $$u_t(x)=\int u_t(x\mid z)\,\frac{p_t(x\mid z)\,p_{\text{data}}(z)}{p_t(x)}\,dz$$                        |
| 条件得分函数 | $$\nabla_{\!x}\log p_t(x \mid x_0)$$ | 梯度指向单样本 $x_0$ 的对数似然最陡升方向                           | 例：$-\dfrac{x-t x_0}{(1-t)^2}$（VP 路径）                                                                   |
| 边缘得分函数 | $$\nabla_{\!x}\log p_t(x)$$          | 梯度指向数据分布 $p_{\text{data}}$ 的对数似然最陡升方向              | $$\displaystyle\int \nabla_{\!x}\log p_t(x\mid z)\,\frac{p_t(x\mid z)\,p_{\text{data}}(z)}{p_t(x)}\,dz$$ |



## 附：Fokker-Planck 公式推导
考虑一般形式的扩散过程：

$$
dX_t = u_t(X_t)\,dt + \sigma_t(X_t)\,dW_t,
$$

- $u_t(\cdot)$：漂移函数  
- $\sigma_t(\cdot)$：扩散系数（可为位置依赖）  
- $W_t$：标准布朗运动  

记$p_t(x)$为$X_t$的概率密度函数，目标是导出$p_t(x)$随时间演化的闭合方程。

取任意光滑紧支撑测试函数$\varphi(x)\in C_c^\infty$。由Itô公式：

$$
d\varphi(X_t) = \varphi'(X_t)\,dX_t + \tfrac12\varphi''(X_t)\,(dX_t)^2.
$$

代入SDE：

$$
d\varphi(X_t) = \varphi'(X_t)\,u_t(X_t)\,dt + \varphi'(X_t)\,\sigma_t(X_t)\,dW_t + \tfrac12\varphi''(X_t)\,\sigma_t^2(X_t)\,dt.
$$

两边取期望，布朗积分项消失（因为Itô积分的期望为零）：

$$
\frac{d}{dt}\mathbb E[\varphi(X_t)] = \mathbb E\!\bigl[\varphi'(X_t)\,u_t(X_t) + \tfrac12\varphi''(X_t)\,\sigma_t^2(X_t)\bigr].
$$

用密度$p_t(x)$重写：

$$
\int \varphi(x)\,\frac{\partial p_t(x)}{\partial t}\,dx = \int \bigl[\varphi'(x)\,u_t(x) + \tfrac12\varphi''(x)\,\sigma_t^2(x)\bigr]\,p_t(x)\,dx.
$$

对右边两项依次分部积分（边界项因$\varphi$紧支撑而为零）：

$$
\int \varphi'(x)\,u_t(x)\,p_t(x)\,dx = -\int \varphi(x)\,\frac{\partial}{\partial x}\bigl(u_t(x)\,p_t(x)\bigr)\,dx,
$$

$$
\int \varphi''(x)\,\tfrac12\sigma_t^2(x)\,p_t(x)\,dx = \int \varphi(x)\,\tfrac12\frac{\partial^2}{\partial x^2}\bigl(\sigma_t^2(x)\,p_t(x)\bigr)\,dx.
$$

合并回等式：

$$
\int \varphi(x)\,\frac{\partial p_t(x)}{\partial t}\,dx = \int \varphi(x)\,\Bigl[-\frac{\partial}{\partial x}\bigl(u_t(x)\,p_t(x)\bigr) + \tfrac12\frac{\partial^2}{\partial x^2}\bigl(\sigma_t^2(x)\,p_t(x)\bigr)\Bigr]\,dx.
$$

由于$\varphi(x)$任意，被积函数必须点点相等，于是得到


$$
\boxed{\;\frac{\partial p_t(x)}{\partial t} = -\frac{\partial}{\partial x}\bigl(u_t(x)\,p_t(x)\bigr) + \frac12\frac{\partial^2}{\partial x^2}\bigl(\sigma_t^2(x)\,p_t(x)\bigr).\;}
$$

- 第一项：漂移引起的概率流散度  
- 第二项：扩散引起的概率流“曲率”  

高维把导数换成梯度与散度即可：

$$
\frac{\partial p_t(\mathbf x)}{\partial t} = -\nabla\cdot\bigl(\mathbf u_t(\mathbf x)\,p_t(\mathbf x)\bigr) + \frac12\nabla\cdot\Bigl[\nabla\cdot\bigl(\mathbf\Sigma_t(\mathbf x)\,p_t(\mathbf x)\bigr)\Bigr],
$$

其中$\mathbf\Sigma_t(\mathbf x)=\sigma_t(\mathbf x)\sigma_t(\mathbf x)^\top$为扩散矩阵。

当$\sigma_t$为常数且取$\sigma_t=\sqrt{2}$（方差保持VP-SDE），方程简化为：

$$
\frac{\partial p_t}{\partial t} = -\nabla\cdot(u_t\,p_t) + \Delta p_t,
$$
