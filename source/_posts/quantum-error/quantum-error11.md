---
title: 稳定子码的码距和大小
tags:
  - quantum
  - quantum-error
categories:
  - quantum
excerpt:  稳定子码的码距和大小是量子纠错理论中的重要概念。本文将介绍稳定子码的编码空间维度、稳定子态的定义以及错误检测机制。
date: 2025-04-09 01:14:33
---
## 编码空间的维度 
若作用于 $n$个物理量子比特的稳定子群 $S$满足 $|S| = 2^r$（即由 $r$个生成元生成），则稳定子码的编码空间 $T(S)$的维度为 $2^{n-r}$，对应逻辑量子比特数 $k = n - r$。

### 证明
核心：投影算符 $\Pi_S$的迹等于 $T(S)$的维度： $\dim T(S) = \operatorname{tr} \Pi_S$。
1. 投影算符分解：  
   $$
   \Pi_S = \frac{1}{|S|} \sum_{M \in S} M = \frac{1}{2^r} \sum_{M \in S} M.
   $$
2. 迹的计算：  
   $$
   \operatorname{tr} \Pi_S = \frac{1}{2^r} \sum_{M \in S} \operatorname{tr} M.
   $$
   - 关键性质：Pauli 算符的迹满足 $\operatorname{tr}(P) = 0$（当 $P \neq I$），而 $\operatorname{tr}(I) = 2^n$。
   - 稳定子 $S$中仅单位算符 $I$的迹非零，其余项迹为零。
3. 最终结果：  
   $$
   \operatorname{tr} \Pi_S = \frac{1}{2^r} \cdot \operatorname{tr}(I) = \frac{2^n}{2^r} = 2^{n-r}.
   $$
   故 $\dim T(S) = 2^{n-r}$，逻辑量子比特数 $k = n - r$.


### 直观理解
1. 生成元的作用：  
   - 第一个生成元将整个希尔伯特空间（维度 $2^n$）划分为两个维度均为 $2^{n-1}$的+1和-1本征空间，码空间位于+1子空间。
   - 后续每个生成元进一步将当前码空间对半分割（维度减半），总计分割 $r$次，最终维度为 $2^n / 2^r = 2^{n-r}$。
   - 非生成元不分割空间：其本征值可由生成元导出，不产生新的约束。
2. 实例验证：  
   - 九量子比特码：$n=9, r=8 \rightarrow k=1$（如 Shor 码）。
   - 五量子比特码：$n=5, r=4 \rightarrow k=1$（最小纠错码）。
3. 边界情况：  
   若 $r = n$（即稳定子有 $n$个生成元），则 $k=0$，码空间退化为维度 1 的固定态（非真正量子码，但仍有理论意义）。

## 稳定子态与错误检测机制

### 稳定子态的定义
- 定义：一个 $n$量子比特的稳定子态（Stabilizer State） 是由 $n$个生成元生成的稳定子的码空间。
- 数学描述：  
  设稳定子 $S$有 $n$个生成元，码空间 $T(S)$是所有满足 $M|\psi\rangle = |\psi\rangle$（$M \in S$）的态 $|\psi\rangle$的集合。
- 性质：  
  - 是稳定子码的极端情况（$r = n$，无逻辑量子比特）。
  - 常见例子：GHZ 态（$|000\rangle + |111\rangle$）、贝尔态（如 $|00\rangle \pm |11\rangle$）。
- 动机：量子纠错码（QECC）的构造常通过调整稳定子态中的编码量子比特数实现。


### 错误检测的核心：对易关系
核心问题：如何通过稳定子生成元 $M \in S$检测泡利错误 $E \in P_n$？  
关键取决于 $M$与 $E$的对易性：

- 若 $M$与 $E$反对易（Anticommute）：  
  $$
  M(E|\psi\rangle) = -E|\psi\rangle \quad (\forall |\psi\rangle \in T(S))
  $$
  - 错误 $E$将码态 $|\psi\rangle$（$M$的本征值 $+1$）变为 $M$的 $-1$本征态，$M$的测量结果翻转为 $-1$，标志着错误发生。

- 若 $M$与 $E$对易（Commute）：  
  $$
  M(E|\psi\rangle) = E|\psi\rangle
  $$
  - 错误 $E$不改变 $M$的本征值（仍为 $+1$），$M$无法检测此类错误。


## 稳定子码的纠错能力

### 稳定子码的正规化子与可检测错误

#### 正规化子的定义与性质
定义稳定子 $\mathsf{S}$的正规化子 $\mathsf{N(S)}$：
$$
\mathsf{N(S)} = \{ N \in \mathsf{P}_n \mid NM = MN,  \forall M \in \mathsf{S} \}
$$
其中 $\mathsf{P}_n$是 $n$-量子比特的泡利群。需注意：
1. 术语选择：  
   数学上此定义对应中心化子（与 $\mathsf{S}$所有元素交换的集合），但因泡利算符的特性（仅对易或反对易，且 $-I \notin \mathsf{S}$)，此处正规化子与中心化子等价。作者选用“正规化子”因其与逻辑操作的关联（见第 3.4.2 节）。
2. 包含关系：  
   由于 $\mathsf{S}$是阿贝尔群，必有 $\mathsf{S} \subseteq \mathsf{N(S)}$。此外，$\mathsf{N(S)}$还包含：
   - 负稳定子 $-\mathsf{S}$
   - 虚数相位项 $\pm i\mathsf{S}$
3. 相位处理：  
   在错误检测场景中，全局相位不影响物理态，故实际使用商群 $\hat{\mathsf{N}}(\mathsf{S})$（忽略 $\pm 1, \pm i$相位）。

### 稳定子码不可检测错误与距离定理

#### 定理 3.4
定理 3.4 完整刻画了稳定子码的不可检测错误和码距：
- 不可检测错误集：$\hat{\mathsf{N}}(\mathsf{S})\setminus\hat{\mathsf{S}}$ 
  （即正规化子商群中排除稳定子本身的元素）
- 码距定义：  
  $d = \min\{\mathrm{wt}\,E \mid \hat{E} \in \hat{\mathsf{N}}(\mathsf{S})\setminus\hat{\mathsf{S}}\}$ 
  （不可检测错误的最小权重）

- 证明
通过定义 2.7（可检测错误需满足 $\langle \psi|E|\phi \rangle = c(E)\langle \psi|\phi \rangle$）分析三类错误：

1. $\hat{E} \in \hat{\mathsf{S}}$（稳定子内错误） 
   - 存在相位选择使 $E \in \mathsf{S}$，满足 $E|\phi\rangle = |\phi\rangle$ 
   - 矩阵元：$\langle \psi|E|\phi \rangle = \langle \psi|\phi \rangle$ 
   - 满足 $c(E)=1$，属于可检测错误（实际无影响）

2. $\hat{E} \notin \hat{\mathsf{N}}(\mathsf{S})$（正规化子外错误）  
   - 存在 $M \in \mathsf{S}$与 $E$反对易：$\{M,E\}=0$ 
   - 利用 $M^2=I$推导：  
     $$
     \langle \psi|E|\phi \rangle = -\langle \psi|E|\phi \rangle \implies \langle \psi|E|\phi \rangle = 0
     $$  
   - 满足 $c(E)=0$，属于可检测错误

3. $\hat{E} \in \hat{\mathsf{N}}(\mathsf{S}) \setminus \hat{\mathsf{S}}$（关键情况）  
   - $E$与 $\mathsf{S}$交换，故 $E|\phi\rangle$仍是码字  
   - 但 $E \notin \mathsf{S}$，存在码字 $|\phi\rangle$使 $E|\phi\rangle \neq |\phi\rangle$ 
   - 计算矩阵元：  
     - $\langle \psi|E|\phi \rangle = 1$（当 $|\psi\rangle = E|\phi\rangle$)  
     - $\langle \phi|E|\phi \rangle = \langle \phi|\psi \rangle$ 
   - 若要求可检测，需 $|\langle \phi|\psi \rangle|=1$（即 $E|\phi\rangle = e^{i\theta}|\phi\rangle$)，但此条件无法对所有 $|\phi\rangle$一致成立  
   - 故属于不可检测错误

#### 分析
1. 不可检测错误的本质：
   正规化子中非稳定子元素对应逻辑操作，会改变编码信息但保持码空间结构，故无法被稳定子测量察觉。

2. 码距的含义：  
   - 码距 $d$是最小非平凡逻辑操作的权重  
   - 直接决定纠错能力：可检测所有权重 $<d$的错误，可纠正所有权重 $<\lfloor d/2 \rfloor$的错误


### 纠错条件与符号体系

#### 定理 3.5：纠错条件的代数刻画
定理 3.5 给出稳定子码 $\mathsf{S}$纠正错误集 $\mathcal{E} \subseteq \mathsf{P}_n$的充要条件：
$$
\forall E,F \in \mathcal{E},\quad \hat{E}^\dagger \hat{F} \notin \hat{\mathsf{N}}(\mathsf{S}) \setminus \hat{\mathsf{S}}
$$

由定理 3.4 和量子纠错一般理论（定理 2.7）直接导出。关键利用量子码的线性特性（推论 2.5）：分析泡利错误即可完全确定码的纠错能力。
1. 物理意义：  
   条件确保任意两个错误 $E,F$的组合 $\hat{E}^\dagger \hat{F}$：
   - 要么在 $\hat{\mathsf{S}}$中（等效恒等操作）
   - 要么在 $\hat{\mathsf{N}}(\mathsf{S})$外（可检测错误）  
   从而满足错误区分条件（定义 2.7）。

#### 稳定子码的符号体系：$[[n,k,d]]$
区别于一般量子码的 $((n,K,d))$符号，稳定子码采用专用符号：
- 符号定义：$[[n,k,d]]$ 
  - $n$：物理量子比特数  
  - $k$：逻辑量子比特数（编码信息量）  
  - $d$：码距（定义见定理 3.4）  
- 维度特性：  
  编码空间维度恒为 $2^k$（源于稳定子结构的阿贝尔性质）。
- 简化表示：  
  当码距未知或不重要时，简写为 $[[n,k]]$。

#### 典型码例与距离分析
1. 九量子比特码：  
   - 参数：$[[9,1,3]]$ 
   - 性质：可纠正单量子比特错误（距离 ≥3）  
   - 精确距离验证：存在权重 3 的泡利算子（如 $X_1X_2X_3$) 属于 $\hat{\mathsf{N}}(\mathsf{S}) \setminus \hat{\mathsf{S}}$

2. 五量子比特码：  
   - 参数：$[[5,1,3]]$ 
   - 地位：已知最小距离 3 码（证明见第 7 章）

3. 距离 2 码的价值：  
   - 虽不能纠错，但可检测单错误或纠正单擦除错误  
   - 最小实例：$[[4,2,2]]$码（生成元 ZZZZ, XXXX）
     - 生成元设计：单量子比特泡利算符必与至少一个生成元反对易  
     - 距离验证：存在权重 2 的泡利算子（如 $X \otimes X \otimes I \otimes I$) 与所有生成元交换


## 稳定子码的简并性

### 简并性的代数刻画（命题 3.6）
从定理 3.4 证明中的矩阵 $C_{ab}$分析可得结论：  
稳定子码 $\mathsf{S}$对错误集 $\mathcal{E}$是简并的，当且仅当  
$$
\exists E_1, E_2 \in \mathcal{E} \quad \text{使得} \quad E_1^\dagger E_2 \in \mathsf{S}
$$
其机制为：
1. 矩阵 $C_{ab}$的秩缺陷：  
   - 若 $E_1^\dagger E_2 \in \mathsf{S}$，则 $E_1^\dagger F \in \mathsf{S} \Leftrightarrow E_2^\dagger F \in \mathsf{S}$ 
   - 导致 $C_{ab}$中 $E_1$和 $E_2$对应的行完全相同（线性相关）
2. 错误不可区分性：  
   当 $E_1^\dagger E_2 \in \mathsf{S}$，两错误在编码空间作用等效，无法通过症状测量区分

### 距离视角的简并性定义（定义 3.9）
脱离具体错误集，从码的固有属性定义：  
距离为 $d$的稳定子码 $\mathsf{S}$是简并的，若存在非平凡稳定子元素  
$$
M \in \mathsf{S},  M \neq I,  \quad \mathrm{wt}(M) < d
$$

#### 关键说明：
1. 与一般量子码的区别：  
   - 此定义专用于稳定子码，比一般量子码的简并性概念更广泛  
   - 对偶数距离码（如 $d=2t+2$），只要 $\mathsf{S}$含权重 $\leq 2t+1$的元素即属简并
2. 物理内涵：  
   低权重稳定子元素揭示编码空间的对称性，使不同错误产生相同症状

### 典型码例分析
1. 九量子比特码（[9,1,3]）
   - 简并性证据：稳定子含多个权重 2 的生成元（如 $Z_1Z_2, X_1X_2$）  
   - 矛盾现象：存在权重 2 的可检测错误（因 $\mathrm{wt}=2 < d=3$)，但实际是稳定子元素（非真正错误）

2. 五量子比特码（[5,1,3]）
   - 非简并性证明：  
     - 所有生成元权重为 4（如 $XZZXI, IXZZX$等）  
     - 稳定子元素的任意乘积权重 ≥4 > $d=3$（需验证生成元乘积无低权重项）
   - 深层含义：不存在权重 < 3 的非平凡稳定子元素


## 稳定子码的错误症状与陪集结构

### 错误症状的代数定义与性质

#### 定义 3.10(错误症状)
- 错误症状：对稳定子码 $\mathsf{S}$（生成元 $M_1,\dots,M_r$），态 $|\psi\rangle$的错误症状是 $r$-比特串：
  $$
  \sigma(|\psi\rangle)_i = \begin{cases} 
  0 & \text{若 } M_i|\psi\rangle = |\psi\rangle \\
  1 & \text{若 } M_i|\psi\rangle = -|\psi\rangle 
  \end{cases}
  $$
- 泡利错误的症状：$\sigma(E) = \sigma(E|\phi\rangle)$（与码字 $|\phi\rangle$选择无关）
- 对易函数：定义泡利算符的对易关系：
  $$
  c(P,Q) = \begin{cases} 
  0 & P,Q\text{ 对易} \\
  1 & P,Q\text{ 反对易}
  \end{cases}
  $$
  关键等式：$\sigma(E)_i = c(E, M_i)$

#### 希尔伯特空间分解
- 正交子空间结构：
  - 存在 $2^r = 2^{n-k}$个症状子空间（$r = n-k$）
  - 每个子空间维数 $2^k$（同构于编码空间）
  - 不同症状子空间相互正交（因本征值不同）
- 症状调整技巧：  
  对症状 $\sigma$的子空间，可通过符号变换 $M_i \to (-1)^{\sigma_i}M_i$转化为标准稳定子码

#### 命题 3.7(泡利错误的症状性质)
1. 对易函数的线性性：  
   $c(P_1P_2, Q) = c(P_1, Q) + c(P_2, Q)$
2. 对称性：  
   $c(P, Q) = c(Q, P)$
3. 症状的加性：  
   $\sigma(EF) = \sigma(E) + \sigma(F)$ 
   （模 2 加法）

### 陪集结构与症状等价性

#### 命题 3.8(泡利错误的陪集分解)
两个泡利错误 $E,F$有相同症状当且仅当它们属于 $\mathsf{N(S)}$的同一陪集：
$$
\sigma(E) = \sigma(F) \iff F \in E \cdot \mathsf{N(S)}
$$

证明：
1. 陪集 ⇒ 同症状：  
   若 $F = EN$（$N \in \mathsf{N(S)}$），则  
   $$
   c(F,M_i) = c(E,M_i) + \underbrace{c(N,M_i)}_{=0} = c(E,M_i)
   $$
2. 同症状 ⇒ 陪集：  
   令 $N = E^\dagger F$，同症状蕴含 $\forall i, c(N,M_i)=0$，故 $N \in \mathsf{N(S)}$

#### 泡利群的陪集分解
- 整体结构：泡利群 $\mathsf{P}_n$被划分为 $2^{n-k}$个 $\mathsf{N(S)}$的陪集
- 陪集大小均等：每个陪集阶相同
- 正规化子阶公式（命题 3.9）：
  $$
  |\mathsf{N(S)}| = 4 \cdot 2^{n+k}
  $$
  推导：  
  泡利群阶 $|\mathsf{P}_n| = 4^{n+1} = 2^{2n+2}$，陪集数 $2^{n-k}$，故  
  $$
  |\mathsf{N(S)}| = \frac{2^{2n+2}}{2^{n-k}} = 2^{n+k+2} = 4 \cdot 2^{n+k}
  $$



#### 命题3.10（陪集等价性与逻辑操作）
设 $S$是稳定子，$\mathsf{N}(S)$是其正规化子。对任意 $N_1, N_2 \in \mathsf{N}(S)$，二者属于 $S$的同一陪集当且仅当对所有编码态 $|\psi\rangle$满足 $N_1|\psi\rangle = N_2|\psi\rangle$。

证明：  
- $N_1|\psi\rangle = N_2|\psi\rangle$等价于 $M = N_1^\dagger N_2$是 $|\psi\rangle$的 $+1$本征态。  
- 若该条件对所有编码态成立，则 $M \in S$，此时 $N_2 = N_1 M$即表明二者在同一陪集中。  

由于 $\mathsf{N}(S)$中的元素将编码态映射到编码态（可能不同），它们被称为逻辑操作。同一陪集中的元素在编码态上作用相同，因此代表同一逻辑操作。商群 $\mathsf{N}(S)/S$即对应所有独立的逻辑操作。

#### 定理 3.11（逻辑泡利群的结构）
若 $S$作用于 $n$个物理量子比特且编码 $k$个逻辑量子比特，则：  
$$
\mathsf{N}(S)/S \cong \mathbb{P}_k
$$  
即商群同构于 $k$量子比特的逻辑泡利群，其元素表示对逻辑量子比特的泡利操作（证明见 3.5 节）。

#### 错误综合征与陪集关联
考虑泡利群 $\mathsf{P}_n$中 $S$的陪集：  
- $\mathsf{N}(S)$的每个陪集可分解为 $S$的陪集。  
- 每个 $S$的陪集关联一个错误综合征（由其所属的 $\mathsf{N}(S)$陪集决定）。  
- 若固定 $\mathsf{N}(S)$陪集的代表元 $E$，则 $S$的陪集可标识为逻辑操作 $\overline{P} \in \mathsf{N}(S)/S$。此时陪集对应错误 $E$与逻辑操作 $\overline{P}$的组合。  

在解码过程中：  
1. 对每个综合征 $s$指定代表错误 $E_s$（满足 $\sigma(E_s) = s$）。  
2. 若测得 $s$，则假设错误为 $E_s$并纠正。  
3. 若真实错误 $E'$与 $E_s$不属于同一 $S$陪集，则发生逻辑泡利错误（对应 $E'$的实际陪集）。

#### 定理 3.12（简并性与错误纠正）
- 非简并码：可纠正错误集 $\mathcal{E}$中所有错误的综合征互异。  
- 简并码：$E, F \in \mathcal{E}$有相同综合征当且仅当 $\hat{E}^\dagger \hat{F} \in \hat{S}$。  
  （证明：由命题 3.8，相同综合征等价于 $E^\dagger F \in \mathsf{N}(S)$；结合定理 3.5 的可纠正条件，得 $E^\dagger F \in \mathsf{N}(S) \iff \hat{E}^\dagger \hat{F} \in \hat{S}$。）  

五量子比特码示例：  
- 15 个单量子比特错误（$X,Y,Z$× 5 量子比特）加恒等操作共 16 个错误。  
- 4 个生成元给出 $2^4 = 16$个互异综合征，无冗余，故为完美码（perfect code）且非简并。

#### 陪集代表元的选取与逻辑泡利群实现
为方便计算，需选取 $\mathsf{N}(S)/S$的陪集代表元：  
- 因 $\mathsf{N}(S)/S$是群，只需为生成元（如 $\overline{X}_i, \overline{Z}_i$）选代表元，其余由乘法导出。  
  *例*：五量子比特码的 $\overline{Y} = i\overline{X}\overline{Z} = Y \otimes Y \otimes Y \otimes Y \otimes Y$。  
- 关键约束：代表元需满足逻辑泡利的对易关系：  
  - $\overline{X}_i$与 $\overline{Z}_i$的代表元必须反对易。  
  - $\overline{X}_i$与 $\overline{X}_j$或 $\overline{Z}_j$（$j \neq i$）的代表元必须对易。  

#### 错误代表元选取的权衡
对 $\mathsf{P}_n/\mathsf{N}(S)$的陪集（对应错误综合征）：  
- 理论上可为基综合征选代表错误，再通过乘法导出其他错误。  
- 实践限制：若目标是纠正最多 $t$个错误，应选每个陪集中权重最低的错误作代表元。  
- 若依赖乘法导出代表元，可能得到高权重错误，导致部分低权重错误无法被正确纠正。  


## 最大似然解码

### 泡利信道模型与解码目标
本节采用与本章不同的视角：不再预设固定可纠正错误集 $\mathcal{E}$，而是考虑 $n$量子比特的泡利信道模型——每个泡利算子 $P \in \mathsf{P}_n$以概率 $p_P$出现。给定稳定子码 $S$，目标是设计最小化错误概率的解码方案。

解码过程定义为：对每个错误综合征 $s$，分配泡利算子 $Q_s$（称为标准错误）。测得 $s$时，假设真实错误为 $Q_s$并执行逆操作纠错。若真实错误 $P$与 $Q_s$不在同一 $S$陪集中，纠错后将残留逻辑泡利操作。

### 命题3.13（逻辑错误概率的量化分析）
记 $C_s$为 $\mathsf{N}(S)$中对应综合征 $s$的陪集（包含所有满足 $\sigma(P)=s$的 $P$
- a) 综合征 $s$的出现概率：  
  $$
  p_s = \sum_{P \in C_s} p_P
  $$  
  即 $C_s$中所有错误的概率之和。  
- b) 测得 $s$且纠错成功（无逻辑错误）的概率：  
  $$
  p_{s,\text{OK}} = \sum_{P \in Q_s S} p_P
  $$  
  仅当真实错误与 $Q_s$同属 $S$的陪集时成立。  
- c) 整体纠错成功率：  
  $$
  p_{\text{OK}} = \sum_s p_{s,\text{OK}} = \sum_s \sum_{P \in Q_s S} p_P
  $$

### 最大似然解码策略
不同综合征的解码选择相互独立。最大化 $p_{\text{OK}}$等价于对每个 $s$最大化 $p_{s,\text{OK}}$：  
- $Q_s$的具体选择不影响 $p_{s,\text{OK}}$（因同一陪集内概率和相同）。  
- 核心优化：在 $C_s$包含的多个 $S$陪集中，选择总概率最大的陪集作为标准错误陪集。  
  即对每个 $s$，计算各陪集 $T_i \subset C_s$的概率和 $\sum_{P \in T_i} p_P$，并选取最大者。

### 与距离优化解码的对比
- 距离优化：选 $C_s$中权重最低的错误作代表（常见于纠错码理论）。  
- 最大似然：选总概率最高的陪集（可能含多个中权重错误）。  
  关键差异：当单量子比特错误率较小时：  
  - 单个低权重错误概率高于单个高权重错误。  
  - 但一个含低权重+多个高权重的陪集，总概率可能低于含多个中权重的陪集。  
  *例*：陪集 A 含 1 个权重 1 错误（概率 0.01）和 10 个权重 3 错误（各概率 10^{-6}），总概率 ≈ 0.01001；陪集 B 含 100 个权重 2 错误（各概率 10^{-4}），总概率 = 0.01。此时 B 更优。


## 二进制辛表示

### 3.5.1 泡利算子的辛表示
稳定子码的核心分析工具是二进制辛表示——通过忽略泡利算子的相位，将 $\hat{\mathsf{P}}_n$（无相位泡利群）映射到二元向量空间：
- 结构同构：$\hat{\mathsf{P}}_n \cong \mathbb{Z}_2^{2n}$（元素总数 $4^n$，乘法交换）。  
- 表示规则（定义 3.11）：  
  每个泡利算子 $P$对应二元向量对 $v_P = (x_P | z_P) \in \mathbb{Z}_2^n \times \mathbb{Z}_2^n$：  
  - $x_P$分量：第 $i$位为 1 当且仅当 $P$在第 $i$量子比特的作用包含 $X$分量（即算子为 $X$或 $Y$）。  
  - $z_P$分量：第 $i$位为 1 当且仅当 $P$在第 $i$量子比特的作用包含 $Z$分量（即算子为 $Y$或 $Z$）。  
  *标准对应*：  
  $$
  \begin{array}{c|c}
  \text{泡利算子} & \text{辛表示} \\ \hline
  I & (0|0) \\
  X & (1|0) \\
  Y & (1|1) \\
  Z & (0|1)
  \end{array}
  $$  
  *例*：$X \otimes I \otimes Y \leftrightarrow (1\,0\,1|0\,0\,1)$。

### 辛形式与对易性恢复
为弥补相位丢失导致的对易性信息缺失，引入辛形式（定义 3.12）：  
- 定义：向量 $(x_1|z_1) \odot (x_2|z_2) = x_1 \cdot z_2 + x_2 \cdot z_1 \pmod{2}$（点积为 $\mathbb{Z}_2^n$标准内积）。  
- 核心性质（命题 3.14）：  
  $$
  v_P \odot v_Q = c(P,Q)
  $$  
  其中 $c(P,Q)=0$时 $P$与 $Q$对易，$c(P,Q)=1$时反对易。  
  *证明思路*：单量子比特情形穷举验证，并利用多比特情形的奇偶性（辛形式和对易关系均按分量模2求和）推广。

### 稳定子与正规化子的线性代数描述
通过辛表示，稳定子码的关键结构转化为向量空间性质：  
- 稳定子 $S$：  
  - 群结构 $\Rightarrow$$\mathsf{S}$的辛表示构成 $\mathbb{Z}_2^{2n}$的线性子空间。  
  - 阿贝尔性 $\Rightarrow$$\forall v,w \in \mathsf{S}, \, v \odot w = 0$（即 $\mathsf{S} \subseteq \mathsf{S}^\perp$），称为弱自对偶子空间（定义 3.13）。  
- 正规化子 $\mathsf{N}(S)$：  
  $$
  \mathsf{N}(S) \leftrightarrow \mathsf{S}^\perp = \{ w \in \mathbb{Z}_2^{2n} \mid w \odot v = 0, \, \forall v \in \mathsf{S} \}
  $$  
  即 $\mathsf{S}$在辛形式下的对偶空间。  
- 生成元独立性（定义 3.14）：  
  泡利算子集 $\{P_1,\dots,P_m\}$独立当且仅当其辛向量 $\{v_{P_1},\dots,v_{P_m}\}$线性无关（等价于无算子可表示为其他算子的乘积）。


| 泡利群中的概念          | 二进制辛表示中的对应概念                     |
|-------------------------|--------------------------------------------|
| $P \in \mathsf{P}_n$ | $v_P = (x_P \| z_P) \in \mathbb{Z}_2^n \times \mathbb{Z}_2^n$|
| 乘法运算                | 向量加法（模2）                            |
| 对易子 $c(P,Q)$      | 辛形式 $v_P \odot v_Q$                  |
| 相位                    | 无直接对应（信息丢失）                     |
| 稳定子 $\mathsf{S}$  | 弱自对偶子空间 $\mathsf{S}$（满足 $\forall v,w \in \mathsf{S}, v \odot w = 0$) |
| 正规化子 $\mathsf{N}(\mathsf{S})$| 对偶子空间 $\mathsf{S}^\perp$（关于辛形式 $\odot$) |
| $\mathsf{S}$的极小生成元集 | $\mathsf{S}$的向量空间基               |

### 五量子比特码示例
下表给出五量子比特码的辛表示：  
- 稳定子生成元：4 个线性无关向量（每行对应一个生成元）。  
- 逻辑泡利算子：$\overline{X} \leftrightarrow (11111|00000)$, $\overline{Z} \leftrightarrow (00000|11111)$。  
- 向量维度：$\mathbb{Z}_2^{10}$（因 $n=5$，故 $\dim = 2 \times 5 = 10$）。


| 算子类型 | 辛向量（x\|z）           | 向量分量（10位，按顺序对应5个量子比特） |
|----------|--------------------------|----------------------------------------|
| 稳定子生成元1 | $(x\|z)$| $1,0,0,1,0 \| 0,1,1,0,0$           |
| 稳定子生成元2 | $(x\|z)$| $0,1,0,0,1 \| 0,0,1,1,0$           |
| 稳定子生成元3 | $(x\|z)$| $1,0,1,0,0 \| 0,0,0,1,1$           |
| 稳定子生成元4 | $(x\|z)$| $0,1,0,1,0 \| 1,0,0,0,1$           |
| 逻辑 $\overline{X}$| $(x\|z)$| $1,1,1,1,1 \| 0,0,0,0,0$           |
| 逻辑 $\overline{Z}$| $(x\|z)$| $0,0,0,0,0 \| 1,1,1,1,1$           |


### 注意
- 相位信息丢失：辛表示无法保留泡利算子的相位，涉及相位的计算（如投影算子的符号）需回归原始表示。  
- 维度约束：$\mathbb{Z}_2^n \times \mathbb{Z}_2^n$是 $2n$维空间，故独立泡利算子数量上限为 $2n$（匹配泡利群的生成元数）。  
- 子空间秩关系：由弱自对偶性 $\mathsf{S} \subseteq \mathsf{S}^\perp$及 $\dim \mathsf{S} + \dim \mathsf{S}^\perp = 2n$，得 $\dim \mathsf{S} \leq n$（稳定子生成元数 $r \leq n$）。


## 补充：线性代数引理及对前述定理的证明
### 引理与证明
#### 引理3.15：泡利算子的存在性与计数
设 $\{P_1,\dots,P_m\}$是 $n$量子比特上的独立泡利算子集，$s$是 $m$位二元向量（分量 $s_i$）。则存在泡利算子 $Q \in \mathsf{P}_n$满足对易关系 $c(P_i, Q) = s_i$（即 $Q$与每个 $P_i$的对易性由 $s_i$指定）。这样的 $Q$共有 $2^{2n-m}$个。

**证明（辛表示视角）：**
1. 将泡利算子转为辛向量：$\{v_{P_1},\dots,v_{P_m}\}$线性独立（由定义3.14）。
2. 目标：求向量 $w \in \mathbb{Z}_2^{2n}$使得 $v_{P_i} \odot w = s_i$（每个等式对应辛形式的线性约束）。
3. 因向量组独立，该 $m$个方程的系数矩阵满秩。
4. 在 $2n$维二元向量空间中，解空间维数为 $2n - m$，故解的总数为 $2^{2n-m}$。

**推论（命题3.16）：**
对任意稳定子 $S$（生成元集 $\{M_i\}$) 和任意错误综合征 $s$，总存在泡利算子 $P \in \mathsf{P}_n$满足 $\sigma(P) = s$。  
深层意义：错误综合征映射 $\sigma: \mathsf{P}_n \to \mathbb{Z}_2^r$是满射（$r = n-k$为生成元数），覆盖所有可能的 $2^r$个综合征。


### 前述定理证明

#### 定理3.11的证明：$\mathsf{N}(S)/S \cong \mathsf{P}_k$
1. 逻辑泡利群的生成关系：
   $\mathsf{P}_k$由生成元 $\{\overline{X}_i, \overline{Z}_i\}_{i=1}^k$和以下对易关系唯一确定：
   $$
   \begin{align*}
   c(\overline{X}_i, \overline{X}_j) &= 0, \\
   c(\overline{Z}_i, \overline{Z}_j) &= 0, \\
   c(\overline{X}_i, \overline{Z}_j) &= \delta_{ij}.
   \end{align*}
   $$
2. 陪集代表元的构造：
   - 顺序选取 $\overline{X}_i$和 $\overline{Z}_i$在 $\mathsf{N}(S)/S$中的代表元。
   - 对每个新逻辑算子，约束包括：
     - 与所有 $S$生成元对易（保证在 $\mathsf{N}(S)$中）。
     - 与已选逻辑泡利满足特定对易关系。
   - 引理3.15保证解存在：约束转化为线性方程组，解空间非空。
3. 独立性验证：
   - 选取 $\overline{Z}_j$时：因需与 $\overline{X}_j$反对易（异于其他算子），必独立。
   - 选取 $\overline{X}_j$时：约束总数 $\leq (n-k) + (k-1) = n-1$，解空间大小 $\geq 2^{n+1} > |\langle S, \text{已选逻辑算子}\rangle| = 2^{n-1}$，故存在独立解。
4. 同构完成：
   构造单射 $\mathsf{P}_k \hookrightarrow \mathsf{N}(S)/S$，结合 $|\mathsf{N}(S)| = |S| \cdot 4^k = |S| \cdot |\mathsf{P}_k|$，得同构。

#### 命题3.2的证明：$S = S(\mathcal{T}(S))$
目标：证明稳定子 $S$等于其编码空间 $\mathcal{T}(S)$的稳定子群。  

1. 平凡包含：$S \subseteq S(\mathcal{T}(S))$（因 $S$固定 $\mathcal{T}(S)$所有态）。
2. 反证（若 $N \notin S$，则 $N \notin S(\mathcal{T}(S))$）：
   - 情形1：$N \notin \mathsf{N}(S)$ 
     存在 $M \in S$和 $|\psi\rangle \in \mathcal{T}(S)$使得 $N|\psi\rangle$是 $M$的 $-1$本征态（与 $|\psi\rangle$正交），故 $N$不固定 $\mathcal{T}(S)$。
   - 情形2：$N \in \mathsf{N}(S) \setminus S$ 
     - 由引理3.15，存在 $M \in \mathsf{N}(S) \setminus S$与 $N$反对易。
     - 构造扩张稳定子 $S' = \langle S, M \rangle$，其编码空间维数 $2^{k-1} \geq 1$（因 $k \geq 1$）。
     - 取非零 $|\psi\rangle \in \mathcal{T}(S') \subseteq \mathcal{T}(S)$，则：
       $$
       N|\psi\rangle = N M |\psi\rangle = -M N |\psi\rangle
       $$
       （因 $\{N,M\}=0$），故 $N|\psi\rangle$是 $M$的 $-1$本征态，与 $|\psi\rangle$正交。

结论：$S$精确刻画了 $\mathcal{T}(S)$的稳定子群。