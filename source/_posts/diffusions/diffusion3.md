---
title: diffusion3
tags:
  - no tags
categories:
  - uncategorized
excerpt: no excerpt
date: 2025-09-13 14:45:29
---
## 流匹配
### 从边缘速度场到可学习的训练目标

前面我们推导了边缘速度场 $u_t(x)$ 的显式表达式，它把“噪声分布”推向“真实数据分布”，是流模型（Flow Matching）理论上要拟合的最优向量场。然而，我们无法直接用 $u_t(x)$ 做监督信号，因为：

1. 它依赖整个数据分布 $p_{\text{data}}(x_0)$ 与边缘概率路径 $p_t(x)$，而后者在训练前是未知的；
2. 每次计算都要对所有样本做高斯混合求和（或积分），复杂度与数据量成正比，不可扩展。

为了绕过这一困境，引入条件-边缘等价性，把不可计算的边缘回归目标转化为可采样、可 mini-batch 化的条件回归目标。

### 流匹配损失（Flow Matching Loss）

给定一个参数化神经网络 $v_\theta(t,x)$，我们的理想目标是让它最小化与边缘速度场的均方误差：
$$
\mathcal{L}_{\text{FM}}(\theta)=
\mathbb{E}_{t\sim\mathcal{U}(0,1)}\,
\mathbb{E}_{x\sim p_t(x)}\!
\Bigl[\bigl\|v_\theta(t,x)-u_t(x)\bigr\|^2\Bigr].
$$

- 时间 $t$ 均匀采样，空间 $x$ 从瞬时边缘分布 $p_t(x)$ 采样；
- 监督信号 $u_t(x)$ 由上一节的边缘化公式给出：

$$
  u_t(x)=\int u_t(x|x_0)\,\frac{p_t(x|x_0)\,p_{\text{data}}(x_0)}{p_t(x)}\,dx_0.
  $$

然而，式 (1) 在实践里不可计算：  
- 我们无法直接采样 $x\sim p_t(x)$，因为 $p_t(x)$ 本身是高斯混合，归一化常数未知；  
- 即使能采样，计算 $u_t(x)$ 也需要遍历整个数据集求后验权重，代价 $\mathcal{O}(N)$ 且无法 mini-batch。

因此，$\mathcal{L}_{\text{FM}}$ 只是一个“理论灯塔”，我们需要一条可航行的船——条件流匹配损失。


### 条件流匹配损失（Conditional Flow Matching Loss）

把边缘期望“拆开”来写，我们得到一个看似不同却等价的目标：

$$
\mathcal{L}_{\text{CFM}}(\theta)=
\mathbb{E}_{t\sim\mathcal{U}(0,1)}\,
\mathbb{E}_{x_0\sim p_{\text{data}}(x_0)}\,
\mathbb{E}_{x\sim p_t(x|x_0)}\!
\Bigl[\bigl\|v_\theta(t,x)-u_t(x|x_0)\bigr\|^2\Bigr].
$$

先采样数据点 $x_0$，再按条件概率路径采样 $x\sim p_t(x|x_0)$。监督信号是闭式可算的条件速度场 $u_t(x|x_0)$，例如 VP 路径下 $\displaystyle u_t(x|x_0)=\frac{x_0-x}{1-t}$。整个过程只依赖单条样本 $x_0$，天然支持 mini-batch，与数据量无关。

### 等价性定理
对任意参数 $\theta$，两个损失的梯度相等：
$$
\nabla_\theta\,\mathcal{L}_{\text{FM}}(\theta)=\nabla_\theta\,\mathcal{L}_{\text{CFM}}(\theta).
$$

因此，用 $\mathcal{L}_{\text{CFM}}$ 训练即等价于最小化不可计算的 $\mathcal{L}_{\text{FM}}$。


### 等价性证明

我们给出基于线性期望交换的简洁证明，无需任何分布假设，适用于一般路径。

- Step 1：展开 $\mathcal{L}_{\text{FM}}$ 的梯度  

对平方误差求导：

$$
\nabla_\theta\mathcal{L}_{\text{FM}}(\theta)=2\,\mathbb{E}_{t,x}\!\Bigl[
\bigl(v_\theta(t,x)-u_t(x)\bigr)\cdot\nabla_\theta v_\theta(t,x)
\Bigr].
$$

- Step 2：把边缘期望改写成双重期望  

把 $x\sim p_t(x)$ 看作两步采样：先 $x_0\sim p_{\text{data}}$，再 $x\sim p_t(x|x_0)$，于是

$$
\mathbb{E}_{x\sim p_t(x)}[\,\cdot\,]=\mathbb{E}_{x_0\sim p_{\text{data}}}\,
\mathbb{E}_{x\sim p_t(x|x_0)}[\,\cdot\,].
$$

因此

$$
\nabla_\theta\mathcal{L}_{\text{FM}}(\theta)=2\,\mathbb{E}_{t}\,
\mathbb{E}_{x_0}\,
\mathbb{E}_{x|x_0}\!\Bigl[
\bigl(v_\theta(t,x)-u_t(x)\bigr)\cdot\nabla_\theta v_\theta(t,x)
\Bigr].
$$

- Step 3：利用“最优回归函数”性质  

对任意固定 $(t,x)$，向量场 $u_t(x)$ 正是条件期望：

$$
u_t(x)=\mathbb{E}_{p_t(x_0|x)}[u_t(x|x_0)].
$$

于是

$$
\mathbb{E}_{x_0|x}\!\bigl[v_\theta(t,x)-u_t(x|x_0)\bigr]=v_\theta(t,x)-u_t(x).
$$

把这一项代回 Step 2，即得

$$
\nabla_\theta\mathcal{L}_{\text{FM}}(\theta)=2\,\mathbb{E}_{t,x_0,x|x_0}\!\Bigl[
\bigl(v_\theta(t,x)-u_t(x|x_0)\bigr)\cdot\nabla_\theta v_\theta(t,x)
\Bigr]=\nabla_\theta\mathcal{L}_{\text{CFM}}(\theta).
$$

证毕。

## 得分匹配
两者在流程上是相似的

### 得分匹配损失（Score Matching Loss）
设我们要学一个得分网络 $s_\theta(t,x)$ 去逼近真实边缘得分函数：

$$
\nabla_x \log p_t(x).
$$

最自然的损失是Fisher 散度（均方误差）：

$$
\mathcal{L}_{\text{SM}}(\theta) =
\mathbb{E}_{t\sim\mathcal{U}(0,1)}\,
\mathbb{E}_{x\sim p_t(x)}\!
\Bigl[\bigl\|s_\theta(t,x)-\nabla_x \log p_t(x)\bigr\|^2\Bigr].
$$

- 时间、空间采样方式与 Flow Matching 完全一致；
- 但真实得分 $\nabla_x \log p_t(x)$ 需要计算边缘分布的归一化常数 及其梯度，不可 tractable；
- 同样地，$p_t(x)$ 是高斯混合（或积分），无法 mini-batch。


### 去噪得分匹配损失（Denoising Score Matching）

注意到：真实边缘得分是条件得分的后验平均：

$$
\nabla_x \log p_t(x) = \mathbb{E}_{p_t(x_0|x)}\!\bigl[\nabla_x \log p_t(x|x_0)\bigr].
$$

于是，我们把边缘期望 拆成两步采样：  
先采样干净数据 $x_0\sim p_{\text{data}}$，再采样噪声版本 $x\sim p_t(x|x_0)$，并用条件得分作为监督信号：

$$
\mathcal{L}_{\text{DSM}}(\theta) = \mathbb{E}_{t\sim\mathcal{U}(0,1)}\,
\mathbb{E}_{x_0\sim p_{\text{data}}}\,
\mathbb{E}_{x\sim p_t(x|x_0)}\!
\Bigl[\bigl\|s_\theta(t,x)-\nabla_x \log p_t(x|x_0)\bigr\|^2\Bigr].
$$

- 条件得分 $\nabla_x \log p_t(x|x_0)$闭式可算（下面给出公式）；  
- 整个期望只依赖单样本 $x_0$，天然支持 mini-batch；  
-无需知道归一化常数，因为高斯对数梯度是解析式。

### 等价性定理
对任意参数 $\theta$，

$$
\nabla_\theta\,\mathcal{L}_{\text{SM}}(\theta)=\nabla_\theta\,\mathcal{L}_{\text{DSM}}(\theta).
$$

因此，用 DSM 训练即等价于最小化不可计算的 SM。


### 等价性证明

- Step 1：展开 SM 梯度

$$
\nabla_\theta\mathcal{L}_{\text{SM}}(\theta)=2\,\mathbb{E}_{t,x}\!\Bigl[
\bigl(s_\theta(t,x)-\nabla_x \log p_t(x)\bigr)\cdot\nabla_\theta s_\theta(t,x)
\Bigr].
$$

- Step 2：把边缘期望改写成双重期望  

同 FM 证明，
$$\mathbb{E}_{x\sim p_t(x)}[\,\cdot\,]=
\mathbb{E}_{x_0\sim p_{\text{data}}}\,
\mathbb{E}_{x\sim p_t(x|x_0)}[\,\cdot\,].
$$

于是

$$
\nabla_\theta\mathcal{L}_{\text{SM}}(\theta)=
2\,\mathbb{E}_{t,x_0,x|x_0}\!\Bigl[
\bigl(s_\theta(t,x)-\nabla_x \log p_t(x)\bigr)\cdot\nabla_\theta s_\theta(t,x)
\Bigr].
$$

- Step 3：利用“最优回归函数”恒等式  

对任意固定 $(t,x)$，

$$
\nabla_x \log p_t(x)=
\mathbb{E}_{p_t(x_0|x)}\!\bigl[\nabla_x \log p_t(x|x_0)\bigr],
$$

因此

$$
s_\theta(t,x)-\nabla_x \log p_t(x)=
\mathbb{E}_{x_0|x}\!\bigl[s_\theta(t,x)-\nabla_x \log p_t(x|x_0)\bigr].
$$

- Step 4：把期望“塞回”被积函数  

将上式代入 Step 2，得到

$$
\nabla_\theta\mathcal{L}_{\text{SM}}(\theta)=
2\,\mathbb{E}_{t,x_0,x|x_0}\!\Bigl[
\bigl(s_\theta(t,x)-\nabla_x \log p_t(x|x_0)\bigr)\cdot\nabla_\theta s_\theta(t,x)
\Bigr]=
\nabla_\theta\mathcal{L}_{\text{DSM}}(\theta).
$$

证毕。


## 附：去噪扩散模型（DDMs）中的得分与速度场互换性

在去噪扩散模型（Denoising Diffusion Models, DDMs）中，我们采用高斯概率路径：

\[
p_t(x|x_0) = \mathcal{N}(x;\, \alpha_t x_0,\, \beta_t^2 I),
\]

其中 \(\alpha_t, \beta_t\) 为时间相关的系数，满足 \(\alpha_t^2 + \beta_t^2 = 1\)（VP 路径）。这种模型有一个非常特殊的性质：得分函数（score）与速度场（vector field）可以互相线性转换，而无需额外训练。

具体地，条件得分函数为：

\[
\nabla_x \log p_t(x|x_0) = -\frac{x - \alpha_t x_0}{\beta_t^2},
\]

而条件速度场为：

\[
u_t(x|x_0) = \frac{x_0 - x}{1 - t} \quad (\text{OT 路径}) \quad \text{或更一般地} \quad u_t(x|x_0) = \frac{\alpha_t'}{\alpha_t}(x_0 - x) - \frac{\beta_t'}{\beta_t}x.
\]

关键在于，这两个量都是 \(x\) 与 \(x_0\) 的加权平均，因此它们之间可以通过线性组合互相表示。例如，我们可以将得分函数表示为速度场的函数：

\[
\nabla_x \log p_t(x|x_0) = \frac{\alpha_t}{\beta_t^2} u_t(x|x_0) + \left( \frac{\alpha_t'}{\alpha_t} - \frac{\beta_t'}{\beta_t} \right) x.
\]

这意味着：

> 在去噪扩散模型中，我们只需训练一个得分网络或一个速度场网络，训练完成后可通过线性转换公式直接得到另一个网络，而无需单独训练。

这一性质极大地简化了模型部署与推理阶段的灵活性，也解释了为什么早期扩散模型（如 DDPM）仅通过得分匹配（score matching）就能完成生成任务——得分即速度，速度即得分。