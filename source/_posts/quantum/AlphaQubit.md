---
title: AlphaQubit 论文总结
tags:
  - quantum-computing
  - quantum-information
categories:
  - quantum
excerpt: >-
  AlphaQubit
  是谷歌量子AI团队提出的一种新型解码器架构，旨在提高超导量子计算中的逻辑错误率。本文总结了其核心架构、训练策略、数据处理方法以及评估细节。
abbrlink: ac063cf2
date: 2025-06-16 00:30:36
---

## 一、解码器架构：循环Transformer网络  
### 1. 输入表示 
- 输入特征（每稳定器）：  
  - 检测事件（Detection events）：二进制变量 $d_{i,n} \in \{0,1\}$，表示稳定器测量值在轮次 $n$ 和 $n-1$ 间的变化  
  - 原始测量（Raw measurements）：二进制变量 $s_{i,n} \in \{0,1\}$，表示稳定器当前轮次的测量结果  
  - 泄漏概率（Leakage probability）：连续值 $post_2 \in [0,1]$，标识稳定器处于泄漏态（如 $\ket{2}$)的概率  
  - 泄漏事件差分（Leakage event difference）：$ \delta post_2 = post_2^{(n)} \oplus post_2^{(n-1)} $  
- 特殊处理：  
  - 最终轮次的数据量子位测量强制二值化（防止标签信息泄漏）  
  - 稳定器索引嵌入：可学习的位置编码向量 $ \text{embed}(i) \in \mathbb{R}^{128} $  

### 2. Stabilizer Embedder 
```python
def stabilizer_embedder(inputs):
    # 线性投影层（特征融合）
    proj_events = Linear(dim=64)(detection_events)  
    proj_measure = Linear(dim=64)(raw_measurements)
    proj_leak = Linear(dim=32)(leakage_prob)
    
    # 特征拼接与残差网络
    combined = Concat([proj_events, proj_measure, proj_leak]) 
    out = ResNetBlock1(combined)  # 2层残差网络
    out = ResNetBlock2(out)       # 每层含LayerNorm+ReLU
    
    # 添加位置编码
    position_embed = EmbeddingTable(stabilizer_index) 
    return out + position_embed
```

### 3. Syndrome Transformer  
- 核心公式（论文Eq. in "Syndrome transformer"）：  
  $$
  \text{Attention}(Q,K,V) = \text{softmax}\left( \frac{QK^T}{\sqrt{d_k}} + B \right)V
  $$
  - $B$ 为Attention Bias矩阵，预计算自空间关系：  
    $$
    B_{ij} = f(\Delta x_{ij}, \Delta y_{ij}, \|i-j\|_1, \mathbb{I}_{\text{same type}}(i,j))
    $$
- 层结构（Extended Data Fig. 4e）：  
  1. 多头注意力：4头，键维度 $d_k=32$  
  2. 门控全连接层：  
     $$
     \text{GatedFFN}(x) = \text{Sigmoid}(W_g x) \odot \text{ReLU}(W_f x)
     $$
  3. 空洞卷积：3×3卷积核，空洞率随码距增加（距离3：1,1,1；距离11：1,2,4）  

### 4. 循环状态更新  
- 状态向量：每个稳定器维护 $h_i^{(n)} \in \mathbb{R}^{320}$  
- 更新规则：  
  $$
  h_i^{(n)} = \text{LayerNorm}\left( 0.707 \times (h_i^{(n-1)} + S_{ni}) + \text{Transformer}(h^{(n-1)}) \right)
  $$
  - 缩放因子 $0.707$ 用于控制幅值（Section "Model details"）

### 5. Readout 网络  
```python
def readout_network(final_state):
    # 散射至数据量子位网格
    data_qubit_grid = ScatterTo2D(final_state)  # [d×d]网格
    
    # 2×2卷积聚合邻居信息
    conv_out = Conv2D(kernel=2x2, channels=64)(data_qubit_grid)
    
    # 沿逻辑链池化（例：Z基沿行方向）
    pooled = []
    for logical_chain in get_chains(basis):
        chain_reps = [conv_out[i] for i in logical_chain]
        pooled.append(MeanPool(chain_reps))  # 输出向量v_j
    
    # ResNet分类器
    logits = ResNet16Layer(pooled)  # 16层残差网络
    return Sigmoid(logits)           # 逻辑错误概率
```


## 二、训练策略：两阶段优化  
### 1. 预训练  
- 合成数据集生成：  
  | 类型       | 噪声模型                          | 样本量      | 生成工具 |  
  |------------|----------------------------------|-------------|----------|  
  | $p_{ij}$ DEM | 拟合Sycamore实验关联错误 $p_{ij}$ | 2×10⁹       | Stim     |  
  | XEB DEM    | 基于XEB基准的泡利噪声模型          | 2×10⁹       | Stim     |  
  | SI1000     | 超导退极化噪声                     | 5×10⁸       | Stim     |  

- Noise Curriculum：  
  $$
  p_f(t) = 1 + w_c \cdot \exp\left(-\frac{(f - f_c(t))^2}{2\sigma_c^2}\right)
  $$
  - 参数： $w_c=12, \sigma_c=0.05, f_c(t) = \frac{1}{1+e^{-s_c(t/t_c-1)}}$  
  - 过渡点： $t_c = 1.28 \times 10^7$ 样本  

### 2. 微调
- 真实数据划分：  
  - Sycamore实验：325k样本 → 19880训练集 + 5120验证集（早停）  
  - Pauli+模拟：每距离1亿样本 → 按需采样（图4c）  
- 优化器配置：  
  | 阶段       | 优化器 | 学习率      | 权重衰减   | 批大小 |  
  |------------|--------|-------------|------------|--------|  
  | 预训练     | Lamb   | 2.45e−4 (d5) | 1e−5       | 256→1024 |  
  | 微调       | Lion   | 3e−4        | 0.08       | 1024   |  
- 辅助任务：下一稳定器预测（损失权重0.02）  


## 三、数据处理：软读出与噪声模型  
### 1. 软读出物理模型  
- I/Q信号生成（Section "Measurement noise"）：  
  $$
  P_k(z, \text{SNR}, t) = 
  \begin{cases} 
  \sqrt{\frac{\text{SNR}}{\pi}} e^{-\text{SNR} z^2} & k=0 \\
  \frac{t}{2} e^{-t(z-\frac{t}{4\text{SNR}})} \left[ \text{Erf}(\cdots) \right] + e^{-t} \sqrt{\frac{\text{SNR}}{\pi}} e^{-\text{SNR}(z-1)^2} & k=1 \\
  P_1(z-1, \text{SNR}, 2t) & k=2 
  \end{cases}
  $$
  - 参数：SNR=10, $t=0.01$  
- 后验概率计算：  
  $$
  \text{post}_1 = \frac{P_1}{\bar{w}_0 P_0 + P_1}, \quad 
  \text{post}_2 = \gamma \frac{P_2}{w_0 P_0 + w_1 P_1 + w_2 P_2}
  $$
  - 先验权重： $w_0 = w_1 = 0.4975, w_2 = 0.005$  

### 2. Pauli+噪声模拟器  
- 泄漏态建模：  
  - 量子态集合： $\{I, X, Y, Z, L_2, L_3\}$（$L_2=\ket{2}, L_3=\ket{3}$)  
  - 泄漏源：  
    - CZ门相移泄漏（概率 $2\times10^{-4}$)  
    - 热激发（率 $1/(700 \text{ns})$)  
    - 串扰诱导泄漏  
- 重置机制：测量后多级复位门清除泄漏  


## 四、评估与实现细节  
### 1. 逻辑错误率计算  
- 多轮次实验拟合：  
  $$
  \log F(n) = \log F_0 + n \log(1 - 2e), \quad F(n) = 1 - 2 \times \text{LogicalError}(n)
  $$
  - 排除首轮数据（边界效应）  
- 置信区间：499次bootstrap重采样  

### 2. 集成解码
- 策略：20个独立模型几何平均  
  $$
  p_{\text{ensemble}} = \sigma\left( \frac{1}{K} \sum_{k=1}^K \log \frac{p_k}{1-p_k} \right)
  $$
- 效果：距离5 LER降低 $0.08 \times 10^{-2}$  

### 3. 计算效率优化  
- 中间标签重用（仅合成数据）：  
  - 特权访问量子态 → 提前终止实验的标签生成  
  - 计算复杂度：$O(N)$（传统方法 $O(N^2)$）  
- 代码实现：JAX + Haiku框架，TPU v4训练  
