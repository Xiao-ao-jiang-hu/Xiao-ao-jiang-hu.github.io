---
title: 从 ELBO 到 MSE：扩散模型为何能优雅地抛弃 ELBO
tags:
  - diffusion models
  - variational inference
  - deep generative models
categories:
  - machine learning
excerpt: >-
  本文通过推导阐述扩散模型为何可以绕过ELBO进行训练。我们展示了扩散模型确实具备一个严格的变分下界，但该下界的每一项都能解析地化成一个噪声预测/得分预测/速度预测的均方误差。因此实际训练时直接最小化这个MSE就等价于最大化ELBO，却省去了显式计算任何KL散度、归一化常数或配分函数。
abbrlink: 84067f3f
date: 2025-09-13 16:43:03
---
在深度生成模型的体系里，变分自编码器（VAE）以最大化证据下界（ELBO）为训练目标；流模型借助可逆变换能够直接计算对数似然，因而无需引入 ELBO；扩散模型则表现出不同的特性——虽然在理论上其具备一个严格的变分下界，但在实际训练过程中，我们通常并不直接优化该下界，而是采用“去噪回归”或“速度回归”的形式进行模型学习。

值得注意的是，这种训练方式在梯度层面是等价的：执行 DSM（Denoising Score Matching）或 CFM（Conditional Flow Matching）的每一步更新，实际上都等同于在梯度方向上最大化 ELBO，而无需显式计算任何 KL 散度、归一化常数或配分函数。

本文将通过推导阐述扩散模型为何可以绕过ELBO进行训练。为统一符号体系，我们采用如下连续时间SDE描述前向过程：

$$
\mathrm{d}\mathbf{x}_t = \mathbf{f}_t(\mathbf{x}_t)\mathrm{d}t + g_t\,\mathrm{d}\mathbf{w}_t,\quad \mathbf{x}_0\sim p_{\text{data}},
$$

并定义对应的逆向生成 SDE（Song et al. 2021）：

$$
\mathrm{d}\mathbf{x}_t = \Bigl[\mathbf{f}_t(\mathbf{x}_t)-g_t^2\,\nabla_{\!\mathbf{x}}\log p_t(\mathbf{x}_t)\Bigr]\mathrm{d}t + g_t\,\mathrm{d}\bar{\mathbf{w}}_t.
$$

以下推导将在此基础上展开。


## 1. 扩散模型确实有一个 ELBO：变分下界长什么样？

在概率生成模型的范畴内，扩散模型本质上可被视为一种深度隐变量模型，其隐变量为逐步加噪的样本序列 $\mathbf{x}_1, \mathbf{x}_2, \dots, \mathbf{x}_T$。尽管在实践中我们常以“去噪回归”或“速度回归”的形式进行训练，但在理论层面，扩散模型依然具备一个严格的证据下界。该下界为模型提供了对数似然的一个可优化下界，是变分推断框架的直接体现。

具体而言，给定一个真实数据点 $\mathbf{x}_0 \sim p_{\text{data}}(\mathbf{x}_0)$，扩散模型定义了一个前向过程（fixed forward process）：

$$
q(\mathbf{x}_{1:T} \mid \mathbf{x}_0) = \prod_{t=1}^T q(\mathbf{x}_t \mid \mathbf{x}_{t-1}),
\quad \text{其中} \quad
q(\mathbf{x}_t \mid \mathbf{x}_{t-1}) = \mathcal{N}\bigl(\mathbf{x}_t; \sqrt{1 - \beta_t} \, \mathbf{x}_{t-1}, \beta_t \mathbf{I}\bigr),
$$

其中 $\beta_t \in (0,1)$ 为预设的超参数。该过程为固定的马尔可夫链，不依赖于可训练参数。

相应地，模型定义了一个可学习的逆向过程（learnable reverse process）：

$$
p_\theta(\mathbf{x}_{0:T}) = p(\mathbf{x}_T) \prod_{t=1}^T p_\theta(\mathbf{x}_{t-1} \mid \mathbf{x}_t),
\quad \text{其中} \quad
p(\mathbf{x}_T) = \mathcal{N}(\mathbf{0}, \mathbf{I}),
\quad
p_\theta(\mathbf{x}_{t-1} \mid \mathbf{x}_t) = \mathcal{N}\bigl(\mathbf{x}_{t-1}; \boldsymbol{\mu}_\theta(\mathbf{x}_t, t), \sigma_t^2 \mathbf{I}\bigr),
$$

其中 $\boldsymbol{\mu}_\theta(\mathbf{x}_t, t)$ 为参数化神经网络，$\sigma_t^2$ 可为常数或学习量。

在此框架下，边际对数似然 $\log p_\theta(\mathbf{x}_0)$ 可分解为：

$$
\log p_\theta(\mathbf{x}_0) = \mathcal{L}_{\text{ELBO}}(\mathbf{x}_0) + \mathrm{KL}\bigl(q(\mathbf{x}_{1:T} \mid \mathbf{x}_0) \parallel p_\theta(\mathbf{x}_{1:T} \mid \mathbf{x}_0)\bigr),
$$

其中

$$
\mathcal{L}_{\text{ELBO}}(\mathbf{x}_0) = \mathbb{E}_{q(\mathbf{x}_{1:T} \mid \mathbf{x}_0)} \left[ \log \frac{p_\theta(\mathbf{x}_{0:T})}{q(\mathbf{x}_{1:T} \mid \mathbf{x}_0)} \right]
$$

即为证据下界。由于 KL 散度非负，我们有：

$$
\log p_\theta(\mathbf{x}_0) \geq \mathcal{L}_{\text{ELBO}}(\mathbf{x}_0).
$$

进一步展开可得：

$$
\mathcal{L}_{\text{ELBO}}(\mathbf{x}_0) = \underbrace{\mathbb{E}_q \left[ \log p_\theta(\mathbf{x}_0 \mid \mathbf{x}_1) \right]}_{\text{重构项}} - \sum_{t=2}^T \underbrace{\mathrm{KL}\bigl(q(\mathbf{x}_{t-1} \mid \mathbf{x}_t, \mathbf{x}_0) \parallel p_\theta(\mathbf{x}_{t-1} \mid \mathbf{x}_t)\bigr)}_{\text{逆向匹配项}} - \underbrace{\mathrm{KL}\bigl(q(\mathbf{x}_T \mid \mathbf{x}_0) \parallel p(\mathbf{x}_T)\bigr)}_{\text{先验匹配项}}.
$$

- 重构项衡量模型从 $\mathbf{x}_1$ 恢复 $\mathbf{x}_0$ 的能力；
- 逆向匹配项确保逆向过程与前向过程的后验分布一致；
- 先验匹配项保证最终状态接近标准高斯分布。

综上所述，扩散模型在理论层面具备一个严格的变分下界，其形式为一系列高斯分布之间的 KL 散度之和。看起来我们必须算一堆 KL？别急，它们都能闭式消掉。


## 2. 每一步 KL 都变成 MSE：闭式消元

因为 $q$ 和 $p_\theta$ 都是高斯，令

$$
q(\mathbf{x}_{t-1}|\mathbf{x}_t,\mathbf{x}_0)=\mathcal{N}\bigl(\mathbf{x}_{t-1};\tilde{\boldsymbol{\mu}}_t(\mathbf{x}_t,\mathbf{x}_0),\tilde\beta_t\mathbf{I}\bigr),
\quad
p_\theta(\mathbf{x}_{t-1}|\mathbf{x}_t)=\mathcal{N}\bigl(\mathbf{x}_{t-1};\boldsymbol{\mu}_\theta(\mathbf{x}_t,t),\tilde\beta_t\mathbf{I}\bigr),
$$

则

$$
\mathrm{KL}_t = \frac{1}{2\tilde\beta_t}\mathbb{E}\!\bigl[\|\boldsymbol{\mu}_\theta(\mathbf{x}_t,t)-\tilde{\boldsymbol{\mu}}_t(\mathbf{x}_t,\mathbf{x}_0)\|^2\bigr] +\text{const}.
$$

关键点：$\tilde{\boldsymbol{\mu}}_t$ 是已知线性组合（DDPM 式 (9)）：

$$
\tilde{\boldsymbol{\mu}}_t(\mathbf{x}_t,\mathbf{x}_0)=\frac{1}{\sqrt{\alpha_t}}\mathbf{x}_t-\frac{1-\alpha_t}{\sqrt{\alpha_t(1-\bar\alpha_t)}}\varepsilon,\quad \varepsilon\sim\mathcal{N}(\mathbf{0},\mathbf{I}).
$$

于是最大化 $\mathcal{L}_{\text{ELBO}}$ 等价于最小化

$$
\mathcal{L}_{\text{MSE}}=\mathbb{E}_{t,\mathbf{x}_0,\varepsilon}\!\bigl[\|\boldsymbol{\varepsilon}_\theta(\underbrace{\sqrt{\bar\alpha_t}\mathbf{x}_0+\sqrt{1-\bar\alpha_t}\varepsilon}_{=\mathbf{x}_t},t)-\varepsilon\|^2\bigr].
$$

配分函数、归一化常数、KL 全部消失，只剩一个噪声预测回归。


## 3. 这个 MSE 就是去噪得分匹配 DSM

把 $\boldsymbol{\varepsilon}_\theta$ 与得分函数联系起来：

$$
\nabla_{\!\mathbf{x}}\log p_t(\mathbf{x}|\mathbf{x}_0)=-\frac{\mathbf{x}-\sqrt{\bar\alpha_t}\mathbf{x}_0}{1-\bar\alpha_t}=-\frac{\varepsilon}{\sqrt{1-\bar\alpha_t}}.
$$

因此

$$
\boldsymbol{\varepsilon}_\theta(\mathbf{x}_t,t)=-\sqrt{1-\bar\alpha_t}\,s_\theta(\mathbf{x}_t,t),\quad s_\theta\approx\nabla_{\!\mathbf{x}}\log p_t(\mathbf{x}_t).
$$

代入 $\mathcal{L}_{\text{MSE}}$ 立即得到

$$
\mathcal{L}_{\text{DSM}}=\mathbb{E}_{t,\mathbf{x}_0,\varepsilon}\!\bigl[\|s_\theta(\mathbf{x}_t,t)-\nabla_{\!\mathbf{x}}\log p_t(\mathbf{x}_t|\mathbf{x}_0)\|^2\bigr].
$$

Song et al. 2021 严格证明：

$$
\nabla_\theta\mathcal{L}_{\text{ELBO}}=\nabla_\theta\mathcal{L}_{\text{DSM}}.
$$

梯度层面完全等价，但后者只采样一个 (x0,ε) 就能算，O(1) 复杂度，天然 mini-batch。


## 4. 流匹配视角：连“得分”都不需要

条件流匹配（CFM）直接回归条件速度场：

$$
\mathbf{u}_t(\mathbf{x}|\mathbf{x}_0)=\frac{\mathbf{x}_0-\mathbf{x}}{1-t}\quad(\text{VP 路径}).
$$

损失

$$
\mathcal{L}_{\text{CFM}}=\mathbb{E}_{t,\mathbf{x}_0,\mathbf{x}\sim p_t(\mathbf{x}|\mathbf{x}_0)}\!\bigl[\|\mathbf{v}_\theta(\mathbf{x},t)-\mathbf{u}_t(\mathbf{x}|\mathbf{x}_0)\|^2\bigr]
$$

同样满足

$$
\nabla_\theta\mathcal{L}_{\text{FM}}=\nabla_\theta\mathcal{L}_{\text{CFM}}.
$$

而 $\mathbf{u}_t(\mathbf{x}|\mathbf{x}_0)$ 是已知解析式，无需任何密度或归一化常数。



## 5. 总结

扩散模型“有 ELBO”，但 ELBO 的每一项都能解析地化成一个噪声预测/得分预测/速度预测的均方误差。因此实际训练时直接最小化这个 MSE 就等价于最大化 ELBO，却省去了显式计算任何 KL、归一化常数或配分函数.