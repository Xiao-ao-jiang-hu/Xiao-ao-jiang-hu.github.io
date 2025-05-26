---
title: 单比特量子信道
date: 2025-05-24 18:46:26
tags:
---
## 退相干信道（Dephasing Channel）

消相干信道核心作用是破坏量子态的相干性（即密度矩阵的非对角元素），使量子态逐渐退化为经典概率混合态。
### 定义与数学模型
#### 基本形式
消相干信道的数学定义为：
$$
\mathcal{R}_p(\rho) = (1 - p)\rho + pZ\rho Z^\dagger,
$$
其中 $Z = \begin{pmatrix}1 & 0 \\ 0 & -1\end{pmatrix}$ 是泡利Z算符，$p \in [0, 1/2]$ 是消相干概率。  
- 物理意义：以概率 $1-p$ 保持原态不变，以概率 $p$ 施加一个相位翻转（$Z$ 操作）。  
- 克劳斯分解：其克劳斯算符为 $\sqrt{1-p}I$ 和 $\sqrt{p}Z$，直接对应上述概率解释。

#### 对密度矩阵的影响
对一般密度矩阵 $\rho = \begin{pmatrix}a & b \\ c & d\end{pmatrix}$，消相干信道的作用为：
$$
\mathcal{R}_p(\rho) = \begin{pmatrix}a & (1-2p)b \\ (1-2p)c & d\end{pmatrix}.
$$
效果：非对角项（相干项）被缩小为原来的 $1-2p$ 倍。当 $p=1/2$（完全消相干）时，非对角项消失，量子态退化为经典概率分布 $\text{diag}(a, d)$。

#### 两种克劳斯分解的矛盾？
另一种分解形式：
$$
\mathcal{R}_p(\rho) = (1 - 2p)\rho + \frac{2p}{\pi} \int_0^{\pi} R_\theta \rho R_\theta^\dagger d\theta,
$$
其中 $R_\theta = e^{-i\theta Z/2}$ 是绕Z轴的旋转算符。  
- 物理意义：以概率 $1-2p$ 保持原态，以概率 $2p$ 随机施加一个相位旋转（$\theta \in [0, \pi]$）。  
- 矛盾点：为何概率从 $p$ 变为 $2p$？  
  解释：两种分解本质等效，但概率定义不同。在积分形式中，相位旋转的随机性导致平均效应，即使实际旋转角度 $\theta$ 较小，其累积效果仍等效于一个概率为 $p$ 的相位翻转。因此，量子纠错中更倾向使用 $I$ 和 $Z$ 的分解，因其直接对应离散错误事件。

### 物理实现
#### 环境交互模型
考虑系统与环境通过哈密顿量 $\mathcal{H} = \omega Z \otimes Z$ 耦合：
- 初始态：系统为 $|\psi_0\rangle = \alpha|0\rangle + \beta|1\rangle$，环境为 $|+\rangle = (|0\rangle + |1\rangle)/\sqrt{2}$。  
- 时间演化：经过时间 $t$，联合态变为：
  $$
  e^{-i\omega t Z \otimes Z} |\psi_0\rangle \otimes |+\rangle = \frac{1}{\sqrt{2}} \left( \alpha e^{-i\omega t}|00\rangle + \alpha e^{+i\omega t}|01\rangle + \beta e^{+i\omega t}|10\rangle + \beta e^{-i\omega t}|11\rangle \right).
  $$
- 部分迹操作：对环境求迹后，系统态的非对角项出现 $\cos(2\omega t)$ 的衰减，对应消相干信道 $\mathcal{R}_{(1-\cos(2\omega t))/2}$。

#### 退相干时间 $T_2$
在真实系统中，环境通常包含多个自由度（如多个量子比特），且相互作用具有马尔可夫性（环境快速重置）。此时，相干项随时间指数衰减：
$$
\text{非对角项} \propto e^{-t/T_2},
$$
其中 $T_2$ 是退相干时间，表征相位信息丢失的速率。  
物理机制：能量差 $E_1 - E_0$ 的随机涨落会导致相对相位不可预测的累积，最终破坏相干性。

### 实验表现
在实验中，消相干的典型特征是量子干涉效应的衰减：
- Rabi振荡：理想情况下，系统态在 $|0\rangle$ 和 $|1\rangle$ 间周期性振荡（如 $\sin^2(\Omega_R t)$）。  
- 消相干效应：实际测量中，振荡幅度随时间衰减，因为相位随机化破坏了相干叠加。

## 去极化信道（Depolarizing Channel）与泡利信道（Pauli Channel）
### 去极化信道
#### 定义与数学模型
定义：  
$$
\mathcal{D}_p(\rho) = (1 - p)\rho + \frac{p}{3}X\rho X^\dagger + \frac{p}{3}Y\rho Y^\dagger + \frac{p}{3}Z\rho Z^\dagger,
$$  
其中 $p \in [0, 1]$ 是错误概率，$X, Y, Z$ 是泡利算符。  
- 物理意义：以概率 $1-p$ 保持原态不变，以概率 $p/3$ 分别施加 $X, Y, Z$ 错误。  
- 完全去极化信道（$p = 3/4$）：此时输入态被完全替换为最大混合态 $I/2$，即：  
  $$
  \mathcal{D}_{3/4}(\rho) = \frac{I}{2}.
  $$

#### 去极化信道的两种等价表示
原始形式：  
直接展开定义式，对一般密度矩阵 $\rho = \begin{pmatrix} a & b \\ c & d \end{pmatrix}$，有：  
$$
\mathcal{D}_p(\rho) = \begin{pmatrix}
(1 - 2p/3)a + (2p/3)d & (1 - 4p/3)b \\
(1 - 4p/3)c & (1 - 2p/3)d + (2p/3)a
\end{pmatrix}.
$$  
利用迹守恒（$\text{Tr}(\rho) = 1$），可改写为更简洁形式：  
$$
\mathcal{D}_p(\rho) = (1 - 4p/3)\rho + \frac{4p}{3}\cdot \frac{I}{2}.
$$  
解释：  
- 以概率 $1 - 4p/3$ 保持原态，以概率 $4p/3$ 将态替换为完全混合态 $I/2$。  
- 为何 $p = 3/4$ 对应完全去极化？  
  当 $4p/3 = 1$ 时（即 $p = 3/4$），原态被完全覆盖，输出恒为 $I/2$。


#### 去极化信道的对称性
SU(2) 积分表示：  
去极化信道可通过积分所有单比特幺正操作表示为：  
$$
\mathcal{D}_p(\rho) = (1 - 4p/3)\rho + \frac{2p}{3\pi^2} \int_{\text{SU}(2)} U\rho U^\dagger dU,
$$  
其中积分使用SU(2)的Haar测度（唯一不变测度）。  
- 对称性：此形式不依赖特定基矢，体现了去极化信道在任意幺正操作下的不变性。  
- 物理意义：所有可能的量子错误被均匀混合，等效于随机施加泡利错误。

### 泡利信道
定义：  
泡利信道是去极化信道的推广，允许不同泡利错误以不同概率出现：  
$$
\mathcal{E}(\rho) = p_I \rho + p_X X\rho X^\dagger + p_Y Y\rho Y^\dagger + p_Z Z\rho Z^\dagger,
$$  
其中 $p_I + p_X + p_Y + p_Z = 1$。  
- 特例：  
  - 去极化信道：$p_X = p_Y = p_Z = p/3$，$p_I = 1 - p$。  
  - 消相干信道（Dephasing Channel）：$p_X = p_Y = 0$，$p_Z = p$。  

布洛赫球变换：  
- 去极化信道：均匀缩小布洛赫球为一个更小的球（中心不变），完全去极化时坍缩为原点（$I/2$）。  
- 一般泡利信道：将布洛赫球压缩为椭球，对称性取决于 $p_X, p_Y, p_Z$ 的分布（见图1.4）。

