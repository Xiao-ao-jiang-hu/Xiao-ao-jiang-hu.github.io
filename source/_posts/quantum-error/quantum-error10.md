---
title: 稳定化子纠错码
date: 2025-03-25 17:31:27
tags:
    - quantum
    - quantum-error
categories:
    - quantum
excerpt: 稳定化子纠错码是量子纠错的核心技术之一，本文将介绍其设计原理、数学框架及关键机制，并回顾9比特码的核心机制和稳定子形式化。
---

## 9bit码回顾
### 9量子比特码的核心机制
核心是通过测量特定泡利算子的特征值（+1或-1）来检测错误：  
- 比特翻转错误（X错误）：测量 $Z \otimes Z$算子  
  - +1 表示偶校验（无错误），-1 表示奇校验（存在错误）  
- 相位翻转错误（Z错误）：测量 $X \otimes X \otimes X$算子  
  - +1 表示相位一致，-1 表示相位反转  

> 构造目的：这种设计利用泡利算子的对易关系，使测量结果直接反映错误类型。

9量子比特码的症候群结构  
- 8位症候群：  
  - 6位检测比特翻转（每组3量子比特进行2次奇偶校验）  
  - 2位检测相位翻转（比较三组量子比特的全局相位）  
- 测量算子：  
  - 比特翻转检测：每组内测量 $Z_i Z_j$（例如第一组测 $Z_1 Z_2$和 $Z_2 Z_3$)  
  - 相位翻转检测：测量六比特算子 $X^{\otimes 6}$（如 $X_1 X_2 X_3 X_4 X_5 X_6$)  

直观理解  
> 将9量子比特分为三组（三个"三重态"）：  
> - 比特翻转检测：组内两两比较量子比特状态（类似经典奇偶校验）  
> - 相位翻转检测：比较三个"三重态"的整体相位（如同比较三组合唱团的音调一致性）  

> 设计意义：这种分层检测将复杂的9比特问题分解为可管理的子任务。


### 稳定子形式化
#### 定义  
- 稳定子群 $S(T)$：由互相对易的泡利算子生成的群，其共同+1特征空间构成编码空间。  
- 生成元：稳定子群的极小生成集（9量子比特码需8个生成元），用于高效表示整个群。

错误检测原理  
若错误算子 $E$与生成元 $S_i$反对易（$E S_i = -S_i E$），测量 $S_i$得特征值-1：  
1. 编码态 $|\psi\rangle$满足 $S_i |\psi\rangle = +|\psi\rangle$ 
2. 错误作用后态变为 $E|\psi\rangle$ 
3. 测量结果：  
   $$
   S_i (E |\psi\rangle) = \begin{cases} 
   +E |\psi\rangle & \text{对易} \\ 
   -E |\psi\rangle & \text{反对易} 
   \end{cases}
   $$  

> 核心洞察：反对易关系使错误暴露为特征值-1，如同警报系统。

#### 9量子比特码生成元
| 生成元 | 作用（1-9号量子比特）     | 功能           |  
|--------|----------------------------|----------------|  
| $M_1$| $Z \otimes Z \otimes I^{\otimes 7}$| 组1比特翻转检测 |  
| $M_2$| $Z \otimes I \otimes Z \otimes I^{\otimes 6}$| 组1比特翻转检测 |  
| $M_3, M_4$| 组2类似操作             | 组2比特翻转检测 |  
| $M_5, M_6$| 组3类似操作             | 组3比特翻转检测 |  
| $M_7$| $X^{\otimes 3} \otimes X^{\otimes 3} \otimes I^{\otimes 3}$| 组1 vs 组2相位检测 |  
| $M_8$| $X^{\otimes 3} \otimes I^{\otimes 3} \otimes X^{\otimes 3}$| 组1 vs 组3相位检测 |  


#### 原理
测量算子的选择依据  
- $X$错误与 $Z$算子反对易（$XZ = -ZX$），故用 $Z$检测 $X$错误  
- $Z$错误与 $X$算子反对易（$ZX = -XZ$），故用 $X$检测 $Z$错误  

> 深层原因：泡利算子的反对易性是量子纠错区别于经典纠错的本质特征。

#### 生成元的自由度  
症候群算子可替换（如用 $Z_1 Z_3$替代 $Z_1 Z_2$），因新算子可由原生成元乘积得到：  
$$
Z_1 Z_3 = (Z_1 Z_2) \cdot (Z_2 Z_3)
$$  
> 实际意义：这种等价性为硬件实现提供灵活性，允许根据物理约束优化测量方案。


## 稳定子码的数学基础
定义 3.3（稳定子码）  
对量子纠错码 $T \subseteq \mathcal{H}_{2^n}$，其稳定子定义为：  
$$
S(T) = \{ M \in P_n \mid M|\psi \rangle = |\psi \rangle,\, \forall |\psi \rangle \in T \}
$$  
> 构造目的：通过泡利算子约束条件明确定义受保护的编码空间。

### 命题 3.1（稳定子三性质）  
非空码 $T$ 的稳定子 $S(T)$ 满足：  
1. $-I \notin S(T)$（无全局相位翻转）  
2. $S(T)$ 是群（乘法和逆封闭）  
3. $S(T)$ 是阿贝尔群（生成元互相对易）  

#### 证明：  
- 性质1：$-I$会将态映射到 $-|\psi\rangle$，破坏 +1 本征态条件。  
- 性质2：若 $M,N \in S(T)$，则 $MN|\psi\rangle = M(N|\psi\rangle) = M|\psi\rangle = |\psi\rangle$。  
- 性质3：泡利算子必对易或反对易。若反对易，$[M,N]=2MN$作用码态得 $2MN|\psi\rangle \neq 0$，与 $S(T)$定义矛盾。  

> 必要性说明：阿贝尔性确保所有生成元可同时测量，这是实验实现的关键前提。

### 稳定子码的构造方法
#### 定义 3.4（由稳定子定义码空间）  
给定阿贝尔群 $S \subseteq P_n$ 且 $-I \notin S$，对应码空间为：  
$$
\mathcal{T}(S) = \{ |\psi\rangle \mid M|\psi\rangle = |\psi\rangle,\, \forall M \in S \}
$$  

#### 稳定子码的等价定义  
当 $T = \mathcal{T}(S(T))$ 时称为稳定子码（满足自洽条件）。  

#### 生成元的核心作用  
- 稳定子元素可表示为 $M = \prod_{j=1}^r M_j^{i_j}$（$i_j \in \{0,1\}$)，故 $|S| = 2^r$ 
- 生成元选择不唯一，但可自由指定其 $\pm 1$特征值：  
  > 操作意义：通过翻转生成元符号（如用$-M_i$替代$M_i$）可定义相同维度的正交子空间。


### 五量子比特码实例分析
循环稳定子结构  
生成元集（具有循环对称性）：  
```
M₁: X ⊗ Z ⊗ Z ⊗ X ⊗ I  
M₂: I ⊗ X ⊗ Z ⊗ Z ⊗ X  
M₃: X ⊗ I ⊗ X ⊗ Z ⊗ Z  
M₄: Z ⊗ X ⊗ I ⊗ X ⊗ Z  
```  
> 关键说明：第五算子 $Z \otimes Z \otimes X \otimes I \otimes X$ 是生成元的乘积（非独立元素），体现稳定子的群结构特性。

#### 投影算子构造法  
码空间投影算子为：  
$$
\Pi_S = \frac{1}{2^r} \prod_{i=1}^r (I + M_i) = \frac{1}{2^r} \sum_{M \in S} M
$$  
> 应用方法：对参考态（如 $|00000\rangle$) 作用 $\Pi_S$并归一化即得码字。

#### 五量子比特码字  
通过稳定子群作用得到基态：  
$$
|\overline{0}\rangle = \Pi_S |00000\rangle / \|\Pi_S |00000\rangle\|
$$
$$
|\overline{1}\rangle = \Pi_S |11111\rangle / \|\Pi_S |11111\rangle\|
$$
> 计算过程：展开稳定子所有16个元素作用于初态，需仔细处理泡利算子的符号规则。


### 几何意义
考虑 $n$ 个量子比特的 $2^n$ 维希尔伯特空间 $\mathcal{H}$：
1. 编码空间构造  
   每个稳定子生成元 $g_i$（$n-k$ 个泡利算子）将 $\mathcal{H}$ 划分为正交子空间：  
   $\mathcal{H}^+(g_i) = \{ |\psi\rangle \mid g_i|\psi\rangle = +|\psi\rangle \}$  
   $\mathcal{H}^-(g_i) = \{ |\psi\rangle \mid g_i|\psi\rangle = -|\psi\rangle \}$  
   编码空间 $C$ 是所有 $+1$ 本征空间的交集：  
   $$
   C = \bigcap_{i=1}^{n-k} \mathcal{H}^+(g_i)
   $$  
   这形成一个 $2^k$ 维子空间（编码 $k$ 个逻辑量子比特），几何上可视为 $n-k$ 个超平面的交。

2. 错误检测的几何表现  
   - 错误算子 $E$ 将编码态 $|\psi\rangle \in C$ 推出原空间  
   - 若 $E$ 与 $g_j$ 反对易，则 $E|\psi\rangle \in \mathcal{H}^-(g_j)$  
   - 测量稳定子生成元等价于检测态落在哪个子空间，其 $\pm 1$ 结果构成错误症状

3. 空间分割与纠错  
   整个 $\mathcal{H}$ 被稳定子群 $S$ 分割为 $2^{n-k}$ 个正交陪集：  
   - $C$ 对应零症状空间（$g_i=+1,\ \forall i$）  
   - 其他陪集 $E_\alpha C$ 对应特定错误症状  
   纠错即通过症状定位陪集，并逆操作将态推回 $C$。

4. 码距离的几何意义  
   码距离 $d$ 是最小权重的泡利算子 $E$ 满足：  
   - $E$ 将整个 $C$ 平行移动到最近的陪集  
   - 几何上对应 $C$ 与最近邻陪集的最短距离（以泡利权重衡量）。
