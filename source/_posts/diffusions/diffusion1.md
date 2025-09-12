---
title: diffusion1
tags:
  - no tags
categories:
  - uncategorized
excerpt: no excerpt
date: 2025-09-13 11:24:56
---

## 生成模型

生成模型（Generative Models）的核心任务，是从观测数据中学习**真实数据分布** $p_{\text{data}}(\mathbf{x})$，并进而**采样**出与真实数据“难以区分”的新样本。换言之，我们假设观测样本 $\mathbf{x} \in \mathbb{R}^D$ 是从某个未知但存在的真实分布中独立同分布地采样得到的，而生成模型的目标就是构造一个参数化分布 $p_{\theta}(\mathbf{x})$，使得它与 $p_{\text{data}}(\mathbf{x})$ 之间的距离（常用 KL 散度）尽可能小：

$$
\theta^* = \arg\min_{\theta}\ \mathrm{KL}\!\bigl(p_{\text{data}}(\mathbf{x}) \parallel p_{\theta}(\mathbf{x})\bigr).
$$

由于真实分布未知，我们只能利用经验分布 $\hat{p}_{\text{data}}(\mathbf{x}) = \frac{1}{N}\sum_{n=1}^{N}\delta(\mathbf{x}-\mathbf{x}_n)$ 来近似。于是，上述目标转化为最大化观测数据的对数似然：

$$
\theta^* = \arg\max_{\theta}\ \mathbb{E}_{\mathbf{x}\sim\hat{p}_{\text{data}}}\!\bigl[\log p_{\theta}(\mathbf{x})\bigr] = \arg\max_{\theta}\ \frac{1}{N}\sum_{n=1}^{N}\log p_{\theta}(\mathbf{x}_n).
$$

一旦获得最优参数 $\theta^*$，我们即可从 $p_{\theta^*}(\mathbf{x})$ 中采样，生成“以假乱真”的新数据。不同的生成模型——无论是早期的 VAE、GAN，还是如今的流模型（Flow-based Models）与扩散模型（Diffusion Models）——都在用各自的方式建模 $p_{\theta}(\mathbf{x})$，从而解决“如何表示复杂高维分布、如何高效采样、如何稳定训练”这三大核心挑战。


## 流模型
### 流模型的数学基础：从ODE到可逆映射

流模型的核心思想，是构造一个**可逆的、可微的映射** $f_\theta: \mathbb{R}^D \to \mathbb{R}^D$，将复杂的数据分布 $p_{\text{data}}(\mathbf{x})$ 变换为一个简单的先验分布 $p_{\text{prior}}(\mathbf{z})$（通常是标准高斯），从而实现**精确密度估计**与**高效采样**。这一变换不是一步完成，而是通过**连续时间上的微分同胚**逐步演化得到。

具体而言，我们引入一个**时间依赖的向量场**（vector field）$\mathbf{u}_t: \mathbb{R}^D \times [0,1] \to \mathbb{R}^D$，并定义一条轨迹 $\mathbf{x}(t)$ 满足常微分方程（ODE）：

$$
\frac{d\mathbf{x}(t)}{dt} = \mathbf{u}_t(\mathbf{x}(t)), \quad \mathbf{x}(0) = \mathbf{x}_0.
$$

根据**Picard-Lindelöf 存在唯一性定理**，只要向量场 $\mathbf{u}_t$ 是 Lipschitz 连续的（在实践中通常满足），则上述ODE存在唯一解，从而定义了一个**可逆的流映射**（flow map）：

$$
\mathbf{x}(t) = \phi_t(\mathbf{x}_0), \quad \text{其中} \quad \phi_t: \mathbb{R}^D \to \mathbb{R}^D \quad \text{是微分同胚}.
$$

特别地，当 $t = 1$ 时，我们得到一个从数据空间到先验空间的**可逆变换**：

$$
\mathbf{z} = \phi_1(\mathbf{x}), \quad \mathbf{x} = \phi_1^{-1}(\mathbf{z}).
$$

最终，我们可以通过**数值ODE求解器**（如Euler或Runge-Kutta方法）模拟这条轨迹，实现从先验采样生成数据，或从数据计算精确密度，从而完成**生成与推断的双向任务**。

### 神经网络如何驱动流模型：向量场的参数化与训练

虽然ODE给出了理论框架，但真正让流模型“落地”的关键，是把**向量场** $\mathbf{u}_t(\mathbf{x})$ 用一个**神经网络** $\mathbf{u}_\theta(t, \mathbf{x})$ 来参数化。这里的网络输入是**时间 t** 与**空间坐标 x**，输出是 D 维速度向量。

由于 Picard-Lindelöf 定理只要求向量场**Lipschitz 连续**，而深度神经网络（带平滑激活，如 Swish、Spectral Norm 约束）很容易满足这一条件，因此**存在唯一且可逆的流映射** $\phi_\theta$ 的保证依然成立。推理阶段，只需从先验 $p_{\text{prior}}(\mathbf{z})$ 采样一条高斯噪声，再**反向积分**神经网络定义的向量场：

$$
\frac{d\mathbf{x}(t)}{dt} = \mathbf{u}_\theta(t, \mathbf{x}(t)), \quad t:1\to 0,
$$

即可把简单噪声“还原”成复杂数据点。

### 扩散模型的数学基础：流模型的随机微分延伸

在流模型中，我们用一个**确定性**的常微分方程（ODE）把数据 $\mathbf{x}_0$ 映射到先验 $\mathbf{z}$：

$$
\frac{d\mathbf{x}(t)}{dt} = \mathbf{u}_\theta(t, \mathbf{x}(t)), \quad \mathbf{x}(0)=\mathbf{x}_0,
$$

扩散模型保留“连续时间变换”，但**把确定性速度项拆成“漂移+随机扰动”**，从而引入**随机微分方程（SDE）**：

$$
d\mathbf{x}(t) = \underbrace{\mathbf{f}_\theta(t,\mathbf{x}(t))\,dt}_{\text{漂移}} + \underbrace{g(t)\,d\mathbf{w}(t)}_{\text{扩散}}, \quad \mathbf{x}(0)=\mathbf{x}_0,
$$

其中  
- $\mathbf{w}(t)\in\mathbb{R}^D$ 是标准布朗运动，增量 $d\mathbf{w}(t)\sim\mathcal{N}(0,I\,dt)$；  
- 标量函数 $g(t)$ 控制“每时刻注入多少噪声”，当 $g(t)\equiv 0$ 时 SDE 退化成流模型的 ODE；  
- 漂移 $\mathbf{f}_\theta$ 继续由神经网络参数化，可视为“在随机扰动下，对数据点的平均修正方向”。

与流模型完全可逆的确定性映射 $\phi_t$ 不同，SDE 给出的**前向过程**是**不可逆的**概率转移：给定初值 $\mathbf{x}_0$，时刻 $t$ 的状态分布 $p_t(\mathbf{x})$ 满足**Fokker–Planck 方程**

$$
\frac{\partial p_t(\mathbf{x})}{\partial t} = -\nabla\cdot\!\bigl[\mathbf{f}_\theta p_t\bigr] + \frac{g(t)^2}{2}\Delta p_t,
$$

其解在 $t\to 1$ 时把任意数据分布“扩散”成几乎与 $\mathcal{N}(0,I)$ 不可区分的先验。