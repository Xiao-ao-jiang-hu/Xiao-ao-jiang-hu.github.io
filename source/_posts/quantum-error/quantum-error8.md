---
title: 量子纠错条件和QECC的性质
tags:
  - quantum
  - quantum-error
categories:
  - quantum
excerpt: 量子纠错码（QECC）的充分条件和充要条件是量子信息处理中的重要理论基础。本文将介绍九QECC的充分条件、充要条件以及退化码的性质，以及纠错条件的等价表述。
abbrlink: 7d007f06
date: 2025-03-19 12:53:34
---
## QECC的充分条件
### 九量子比特码的启示  
九量子比特码相位错误校正的关键在于：  
- 正交性：错误生成的子空间与编码空间正交，且彼此正交。  
- 测量区分：通过正交性构造测量，区分不同错误子空间，从而识别错误类型。  
这一思路具有普适性，可推广至一般量子纠错码（QECC）的构造。


### 充分条件的提出  
设编码空间为 $Q \subseteq \mathcal{H}_N$，错误 $E$ 作用后生成子空间 $E(Q)$。若对任意两个错误 $E_1, E_2 \in \mathcal{E}$，子空间 $E_1(Q)$ 与 $E_2(Q)$ 正交，则可通过测量唯一确定错误。  
进一步要求：  
- 错误可逆：错误操作 $E|_Q$ 必须是幺正的，即保持内积不变：  
  $$
  \langle \psi | E^\dagger E | \phi \rangle = \langle \psi | \phi \rangle \quad (\forall |\psi\rangle, |\phi\rangle \in Q).
  $$  
  这确保了错误操作在编码空间上是等距映射，从而可逆。

综合正交性与可逆性，得到充分条件：  
对任意 $|\psi\rangle, |\phi\rangle \in Q$ 和 $E_a, E_b \in \mathcal{E}$，满足  
$$
\langle \psi | E_a^\dagger E_b | \phi \rangle = \delta_{ab} \langle \psi | \phi \rangle.
$$  
含义：  
1. 正交性（当 $a \neq b$ 时）：不同错误作用后的子空间正交，测量可唯一区分错误。  
2. 保内积性（当 $a = b$ 时）：每个错误在编码空间上的限制是幺正的，保证可逆性。  
此类编码称为非退化正交码（Non-degenerate Orthogonal Code）。

### 关键点  
1. 为何需要幺正性  
   量子纠错需恢复原始态，因此错误操作必须可逆。幺正性隐含错误模型需满足特定结构（如Pauli错误），确保存在恢复操作。  

2. 正交性的作用  
   类似经典纠错中的“唯一伴随式”原则，正交性保证错误唯一可识别，避免歧义。  

3. 非退化 vs. 退化  
   - 非退化：每个错误对应唯一正交子空间（严格满足 $\delta_{ab}$）。  
   - 退化：不同错误可能共享子空间，但通过其他方式仍可纠正（如利用错误算符的线性相关性）。  

4. 与Knill-Laflamme条件的关系  
   广义的Knill-Laflamme条件为 $\langle \psi | E_a^\dagger E_b | \phi \rangle = C_{ab} \langle \psi | \phi \rangle$，其中 $C_{ab}$ 为常数矩阵。此处条件 $C_{ab} = \delta_{ab}$ 是更严格的非退化特例。


## QECC的充要条件

### 问题引出  
在九量子比特码中，若错误 $E_1 = Z_1$ 和 $E_2 = Z_2$ 作用后导致 $E_1|\overline{\psi}\rangle = E_2|\overline{\psi}\rangle$，则原非退化正交条件（公式2.58）失效。这表明原条件仅为充分条件，非必要。因此，需推广至更一般的QECC条件。


### 定理2.7（QECC的充要条件）  
条件：对任意编码态 $|\psi\rangle, |\phi\rangle \in Q$ 和错误 $E_a, E_b \in \mathcal{E}$，存在与态无关的常数 $C_{ab}$，使得  
$$
\langle\psi|E_a^{\dagger}E_b|\phi\rangle = C_{ab}\langle\psi|\phi\rangle.  
$$  
核心含义：不同错误对编码空间的作用需保持内积的线性比例关系，且比例系数仅与错误对相关，与具体态无关。


#### 充分性  
1. 生成集选择与矩阵对角化：  
   - 通过选择错误集合的生成集 $\{F_a\}$，可将 $C_{ab}$ 对角化为 $d_a \delta_{ab}$，其中 $d_a$ 为实数。  
   - 条件变为：  
     $$
     \langle\psi|F_a^{\dagger}F_b|\phi\rangle = d_a\delta_{ab}\langle\psi|\phi\rangle.  
     $$  
     此时，不同错误 $F_a$ 对应的子空间 $F_a(Q)$ 相互正交。

2. 关于 $d_a$ 的讨论：  
   - 若 $d_a \neq 0$：$F_a|_Q$ 可分解为幺正操作与缩放因子 $\sqrt{d_a}$ 。解码时，态被缩放 $\sqrt{d_a}$，但量子纠错允许此类全局相位或缩放。  
   - 若 $d_a = 0$：$F_a|_Q$ 的像为零空间，对应错误概率为零（因 $\langle\psi|F_a^\dagger F_a|\psi\rangle = 0$），物理上无需处理。

#### 必要性  
1. 引用命题2.2：  
   - 纠错后的系数 $c(E,|\psi\rangle)$ 和辅助态 $|A(E,|\psi\rangle)\rangle$ 不依赖于 $|\psi\rangle$，表明纠错过程具有态无关性。

2. 纯化解码器为幺正操作：  
   - 引入辅助系统，将解码器扩展为幺正操作 $V$，确保内积不变性。  
   - 计算内积可得：  
     $$
     \langle\overline{\psi}|E_a^{\dagger}E_b|\overline{\phi}\rangle = \sqrt{c(E_a)c(E_b)} \langle A(E_a)|A(E_b)\rangle \langle\psi|\phi\rangle,  
     $$  
     即 $C_{ab} = \sqrt{c(E_a)c(E_b)} \langle A(E_a)|A(E_b)\rangle$，满足定理条件。

### 关键点  
1. 系数 $C_{ab}$ 的物理意义：  
   - $C_{ab}$ 综合了错误发生的概率（$c(E_a)$）和辅助态的重叠（$\langle A(E_a)|A(E_b)\rangle$）。  
   - 若 $C_{ab} = \delta_{ab}$，则退化为非退化正交码；否则允许更灵活的错误关系。

2. 与Knill-Laflamme条件的关系：  
   - 定理2.7是Knill-Laflamme条件的等价表述，其中 $C_{ab}$ 为常数矩阵。  
   - 非退化正交码是特例（$C_{ab}$ 对角且元素为1），而定理2.7允许任意Hermitian矩阵 $C_{ab}$。

3. 错误的可纠正性：  
   - 即使错误不严格正交，只要满足线性比例关系，仍可通过调整解码过程（如缩放或辅助态处理）实现纠错。  
   - 若 $C_{ab}$ 不可对角化（如存在简并），则需依赖更复杂的纠错协议。

## 退化码（Degenerate Codes）

退化码（Degenerate Codes）的核心在于放宽了QECC的条件，允许错误作用后的内积矩阵 $C_{ab}$ 非满秩。与非退化码（$C_{ab} = \delta_{ab}$）不同，退化码中不同错误可能产生线性相关的效果，但仍能通过统一的操作恢复。

### 退化码的数学条件  
1. 秩不足的 $C_{ab}$：  
   - 若错误集合 $\mathcal{E}$ 线性独立，但矩阵 $C_{ab}$ 的秩 $\text{rank}(C_{ab}) < |\mathcal{E}|$，则码为退化码。  
   - 若 $\mathcal{E}$ 本身线性相关，需选取其最小生成集 $\mathcal{E}'$，再判断 $C_{ab}$ 的秩是否小于 $|\mathcal{E}'|$。  

2. 物理意义：  
   - 不同错误作用于码空间可能产生线性相关的结果，导致无法通过测量唯一区分这些错误。例如，九量子比特码中多个不同的 $Z$ 错误对逻辑态的影响相同（如 $Z_1|\overline{\psi}\rangle = Z_2|\overline{\psi}\rangle$）。

### 九量子比特码的退化性示例  
- 具体表现：  
  对于编码态 $|\overline{0}\rangle$ 和 $|\overline{1}\rangle$，不同位置的 $Z$ 错误（如 $Z_1$ 和 $Z_2$）作用后结果相同：  
  $$
  Z_1\ket{\overline{0}} = Z_2|\overline{0}\rangle, \quad Z_1|\overline{1}\rangle = Z_2|\overline{1}\rangle.
  $$  
  这表明这些错误在码空间上的效果完全一致，导致 $C_{ab}$ 中存在线性相关的行/列。  

- 退化码的优势：  
  无需区分所有可能的错误类型，只需处理错误生成的等效类，从而减少纠错操作的复杂度。


## 码距

### 定义  
定义2.3：量子码 $C \subseteq \mathcal{H}_N$ 的码距 $d$ 是满足以下条件的最小权重错误 $F$ 的权重：  
$$
\langle \psi | F | \phi \rangle \neq c(F) \langle \psi | \phi \rangle \quad (\exists |\psi\rangle, |\phi\rangle \in C).
$$  
- 权重（Weight）：错误作用的不同量子比特数量。例如，$Z_1 X_2$ 的权重为2。  
- 物理意义：距离 $d$ 表示码能检测到所有权重小于 $d$ 的错误，但至少存在一个权重为 $d$ 的错误无法被“掩盖”（即内积不满足比例关系）。


### 码距与纠错能力的关系  
推论2.8：距离为 $d$ 的码可纠正 $t = \lfloor (d-1)/2 \rfloor$ 个错误。  
- 公式推导：  
  - 要纠正 $t$ 个错误，码需能检测所有权重 $\leq 2t$ 的错误（因纠错需区分 $E_a^\dagger E_b$ 的权重 $\leq 2t$）。  
  - 因此，距离需满足 $d \geq 2t + 1$。  
- 示例：  
  - 距离 $d=3$ → 纠正 $t=1$ 个错误。  
  - 距离 $d=5$ → 纠正 $t=2$ 个错误。  
- 偶数距离的特殊性：  
  - 若 $d=4$，仍只能纠正 $t=1$ 个错误（因 $\lfloor (4-1)/2 \rfloor = 1$），但可能在其他应用（如错误检测）中发挥优势。


### 量子码的符号表示  
- 基本形式：$((n, K, d))$  
  - $n$：物理量子比特数。  
  - $K$：逻辑空间维度（编码 $\log_2 K$ 个逻辑量子比特）。  
  - $d$：码的距离。  
- 扩展形式：  
  - 对于 $q$-维量子比特（qudit），表示为 $((n, K, d))_q$。  
  - 若忽略距离，则为 $((n, K))$ 或 $((n, K))_q$。  
- 示例：  
  - $((5, 2, 3))$：5个物理量子比特编码1个逻辑量子比特（$K=2=2^1$），距离3，可纠正1个错误。  
  - $((7, 16, 3))_3$：7个三维qudit编码4个逻辑qudit（$K=3^4=81$，但此处 $K=16$，可能为混合系统），距离3。


### 退化码与距离的关系  
定义2.5：  
- 若码 $Q$ 的距离为 $d=2t+1$，且在纠正所有 $t$-qubit错误时满足 $\text{rank}(C_{ab}) < |\mathcal{E}|$，则 $Q$ 是退化码。   
- 示例：  
  - 九量子比特码：距离 $d=3$，可纠正 $t=1$ 个错误，但多个单比特 $Z$ 错误可能等效，因此为退化码。


### 关键讨论  

1. 距离定义的普适性：  
   - 即使定义中要求检查所有权重 $<d$ 的错误，实际只需检查权重 $d$ 的Pauli基错误（如 $X, Y, Z$ 的张量积），因它们生成整个错误空间。  

2. 偶数距离的意义：  
   - 如 $d=4$，虽纠错能力与 $d=3$ 相同（纠正 $t=1$），但可能在错误检测或容错操作中提供额外冗余。  

3. 稳定子码的特殊性：  
   - 对稳定子码（如Shor码、表面码），可通过对称性和生成子结构更高效处理偶数距离，甚至突破 $d=2t+1$ 的限制。



## QECC与擦除错误

### 量子错误检测码  
### 定义2.6（量子错误检测码）  
设编码器 $U$ 将逻辑空间映射到物理空间，且 $\mathcal{E}$ 为一组可检测的错误操作。若以下条件成立，则称 $(U, \mathcal{E})$ 构成一个量子错误检测码：  
对于所有码字 $|\psi\rangle \in Q$（码空间 $Q$ 是 $U$ 的像）和所有错误 $E \in \mathcal{E}$，存在标量 $c(E, |\psi\rangle)$，使得投影算符 $\Pi$（投影到码空间 $Q$）满足：  
$$
\Pi E |\psi\rangle = c(E, |\psi\rangle) |\psi\rangle.
$$  
物理意义：  
- 错误 $E$ 作用后，码空间上的投影结果与原码字成比例，仅引入全局缩放因子 $c(E, |\psi\rangle)$。  
- 通过测量 $\{\Pi, I-\Pi\}$，可判断是否发生错误：若结果为 $\Pi$，状态被修正为原码字；否则检测到错误。


### 定理2.9（量子错误检测码的条件）  
条件：  
量子错误检测码 $(U, \mathcal{E})$ 的充要条件为，对所有码字 $|\psi\rangle, |\phi\rangle \in Q$ 和所有错误 $E \in \mathcal{E}$，存在仅依赖于 $E$ 的标量 $c(E)$，使得：  
$$
\langle \psi | E | \phi \rangle = c(E) \langle \psi | \phi \rangle. \tag{2.67}
$$  
推论：  
若码的距离为 $d$，则它能检测所有权重 $\leq d-1$ 的错误。  

证明思路：  
1. 必要性（⇒）：  
   假设 $(U, \mathcal{E})$ 是错误检测码，则根据定义 $\Pi E |\psi\rangle = c(E) |\psi\rangle$。对任意码字 $|\psi\rangle, |\phi\rangle$，有：  
   $$
   \langle \psi | E | \phi \rangle = \langle \psi | \Pi E | \phi \rangle = c(E) \langle \psi | \phi \rangle.
   $$  
   其中 $c(E)$ 与 $|\psi\rangle, |\phi\rangle$ 无关（否则会破坏线性叠加性）。  

2. 充分性（⇐）：  
   若条件 $\langle \psi | E | \phi \rangle = c(E) \langle \psi | \phi \rangle$ 成立，构造投影算符 $\Pi = \sum_i |\psi_i\rangle \langle \psi_i|$，其中 $\{|\psi_i\rangle\}$ 是码空间基。对任意码字 $|\psi\rangle$，有：  
   $$
   \Pi E |\psi\rangle = \sum_i |\psi_i\rangle \langle \psi_i | E | \psi \rangle = c(E) \sum_i |\psi_i\rangle \langle \psi_i | \psi \rangle = c(E) |\psi\rangle.
   $$  
   因此满足错误检测码的定义。


#### 擦除错误的纠正  
定理2.10指出：距离为 $d$ 的QECC可纠正 $d-1$ 个擦除错误。  
擦除错误的特点：已知错误位置但类型未知。  
证明思路：  
1. 擦除错误模型：  
   - 设擦除发生在位置集合 $S$（$|S| \leq d-1$），错误集合 $\mathcal{E}_S$ 包含所有作用于 $S$ 的错误。  
   - 编码器 $U$ 需独立于 $S$，但解码时可针对 $S$ 选择特定恢复操作。

2. QECC条件的适配：  
   - 需验证对任意 $E_a, E_b \in \mathcal{E}_S$，满足  
     $$
     \langle \psi | E_a^\dagger E_b | \phi \rangle = C_{ab} \langle \psi | \phi \rangle.  
     $$  
   - 由于 $E_a^\dagger E_b$ 的支撑仍在 $S$ 内（即 $\mathcal{E}_S^2 = \mathcal{E}_S$），且距离 $d$ 保证所有权重 $\leq d-1$ 的错误可被检测，故条件成立。

3. 纠错能力提升的原因：  
   - 已知位置：解码器可针对 $S$ 设计，无需覆盖所有可能的错误组合。  
   - 距离的利用：擦除错误的最大权重 $d-1$ 恰为码的检测能力上限，因此可唯一识别并恢复。


#### 关键结论  
1. 错误检测与纠正的关系：  
   - 能纠正 $t$ 个错误的码可检测 $2t$ 个错误（因纠错需处理权重 $2t$ 的错误乘积）。  
   - 反之，能检测 $d-1$ 个错误的码（距离 $d$）可纠正 $\lfloor (d-1)/2 \rfloor$ 个普通错误，但通过擦除模型可纠正 $d-1$ 个错误。

2. 擦除错误的优势：  
   - 位置信息：允许解码器针对性操作，突破普通纠错的 $t = \lfloor (d-1)/2 \rfloor$ 限制。  
   - 应用场景：适用于量子通信中光子丢失等已知位置的错误类型。

3. 线性与双线性条件：  
   - 错误检测：条件仅涉及单错误线性作用（$\langle \psi | E | \phi \rangle$），导致可检测错误集合唯一最大。  
   - 错误纠正：条件涉及双错误乘积（$\langle \psi | E_a^\dagger E_b | \phi \rangle$），允许多种可纠正错误集合。


## 量子纠错条件的等价形式  
定理2.7的QECC条件为：  
$$
\langle \psi | E_a^\dagger E_b | \phi \rangle = C_{ab} \langle \psi | \phi \rangle \quad (\forall |\psi\rangle, |\phi\rangle \in Q,\, E_a, E_b \in \mathcal{E}).
$$  
命题2.11给出了四个等价条件：

### 条件1：单一码字内积形式  
表述：对所有码字 $|\psi\rangle$ 和错误对 $E_a, E_b \in \mathcal{E}$，  
$$
\langle \psi | E_a^\dagger E_b | \psi \rangle = C_{ab}. \tag{2.69}
$$  
等价性证明：  
1. 原始条件⇒条件1：直接取 $|\psi\rangle = |\phi\rangle$，即得 $C_{ab} \langle \psi | \psi \rangle = C_{ab}$。  
2. 条件1⇒原始条件：  
   - 构造叠加态 $|\psi\rangle = \alpha |\phi_1\rangle + \beta |\phi_2\rangle$，其中 $|\phi_1\rangle, |\phi_2\rangle \in Q$。  
   - 展开 $\langle \psi | E_a^\dagger E_b | \psi \rangle = C_{ab}$，得到：  
     $$
     |\alpha|^2 C_{ab} + |\beta|^2 C_{ab} + \alpha^* \beta \langle \phi_1 | E_a^\dagger E_b | \phi_2 \rangle + \alpha \beta^* \langle \phi_2 | E_a^\dagger E_b | \phi_1 \rangle = C_{ab}.
     $$  
   - 通过选择特定系数 $\alpha, \beta$（如 $\alpha = \beta = 1/\sqrt{2(1 + \text{Re}\langle \phi_1 | \phi_2 \rangle)}$ 和 $\alpha = -i\beta = 1/\sqrt{2(1 - \text{Im}\langle \phi_1 | \phi_2 \rangle)}$），可推导出：  
     $$
     \langle \phi_1 | E_a^\dagger E_b | \phi_2 \rangle = C_{ab} \langle \phi_1 | \phi_2 \rangle.
     $$  
   - 由此推广到任意码字对 $|\psi\rangle, |\phi\rangle$，证明原始条件成立。


### 条件2与3：线性空间假设下的简化形式  
假设：$\text{span}(\mathcal{E}) = \mathcal{E}$（错误集合构成线性空间）。  
条件2：对任意码字 $|\psi\rangle, |\phi\rangle \in Q$ 和错误 $E \in \mathcal{E}$，  
$$
\langle \psi | E^\dagger E | \phi \rangle = C(E) \langle \psi | \phi \rangle. \tag{2.70}
$$  
条件3：对任意码字 $|\psi\rangle \in Q$ 和错误 $E \in \mathcal{E}$，  
$$
\text{tr}(|\psi\rangle \langle \psi | E^\dagger E) = C(E). \tag{2.71}
$$  
等价性证明：  
1. 条件2⇒原始条件：  
   - 取 $E_a = E_b = E$，条件2退化为 $\langle \psi | E^\dagger E | \phi \rangle = C(E) \langle \psi | \phi \rangle$。  
   - 结合线性空间假设，可推广到任意错误对 $E_a, E_b \in \mathcal{E}$。  
2. 条件3⇒条件2：  
   - 迹条件 $\text{tr}(|\psi\rangle \langle \psi | E^\dagger E) = C(E)$ 等价于 $\langle \psi | E^\dagger E | \psi \rangle = C(E)$。  
   - 通过叠加态构造（类似条件1的证明），可推导出一般形式 $\langle \psi | E^\dagger E | \phi \rangle = C(E) \langle \psi | \phi \rangle$。


### 条件4：码空间基矢的正交性条件  
表述：对码空间基矢 $\{|\psi_i\rangle\}$，任意 $i, j$ 和错误对 $E_a, E_b \in \mathcal{E}$，  
$$
\langle \psi_i | E_a^\dagger E_b | \psi_j \rangle = C_{ab} \delta_{ij}. \tag{2.72}
$$  
等价性证明：  
1. 原始条件⇒条件4：  
   - 基矢正交性 $\langle \psi_i | \psi_j \rangle = \delta_{ij}$，代入原始条件即得 $C_{ab} \delta_{ij}$。  
2. 条件4⇒原始条件：  
   - 任意码字可表示为 $|\psi\rangle = \sum_i \alpha_i |\psi_i\rangle$ 和 $|\phi\rangle = \sum_j \beta_j |\psi_j\rangle$。  
   - 计算 $\langle \psi | E_a^\dagger E_b | \phi \rangle = \sum_{i,j} \alpha_i^* \beta_j \langle \psi_i | E_a^\dagger E_b | \psi_j \rangle = \sum_i \alpha_i^* \beta_i C_{ab} = C_{ab} \langle \psi | \phi \rangle$，满足原始条件。


#### 可检测错误的条件与物理意义  
结论：操作符 $E$ 可检测当且仅当 $\text{tr}(\rho E)$ 不依赖于码字密度矩阵 $\rho = |\psi\rangle \langle \psi|$。  
物理意义：  
- 信息泄露：若测量 $E$ 会泄露逻辑态信息（即 $\text{tr}(\rho E)$ 依赖于 $\rho$），则 $E$ 不可检测。  
- 错误隐藏：可检测错误不会暴露逻辑态信息，仅引入全局缩放，允许通过投影测量恢复原态。


## 擦除错误的纠正条件

### 命题 2.11  
设 $\mathcal{E}$ 为一组擦除错误（每个错误对应一组被擦除的量子比特或qudit），则量子码 $Q$ 能纠正 $\mathcal{E}$ 当且仅当：对于所有逻辑态 $|\psi\rangle$，被擦除子集 $S \in \mathcal{E}$ 对应的约化密度矩阵 $\rho_S$ 相同。  
物理意义：  
- 若被擦除部分 $S$ 的量子态 $\rho_S$ 不包含逻辑态信息，则错误可被纠正。  
- 擦除错误的特点是已知位置但类型未知，解码时可针对性恢复。


### 证明

#### 纠正擦除错误 ⇒ $\rho_S$ 与逻辑态无关  
1. 构造错误算符：  
   选择作用于子集 $S$ 的基矢算符 $E_a = |k\rangle \langle j|$ 和 $E_b = |k\rangle \langle i|$，其中 $i, j, k$ 是 $S$ 的基矢标记。  
   - 作用：$E_a$ 将 $S$ 的第 $j$ 个基矢映射到第 $k$ 个，$E_b$ 将第 $i$ 个映射到第 $k$ 个。  

2. 计算迹条件：  
   根据命题2.11的条件1（单一码字内积形式），对任意码字 $|\psi\rangle$，有：  
   $$
   \text{tr}(|\psi\rangle \langle\psi| E_a^\dagger E_b) = \langle i | \rho_S | j \rangle \langle k | k \rangle = (\rho_S)_{ij}.
   $$  
   - 由于 $Q$ 能纠正擦除错误，$\text{tr}(|\psi\rangle \langle\psi| E_a^\dagger E_b)$ 应与 $|\psi\rangle$ 无关，即 $(\rho_S)_{ij}$ 对所有逻辑态相同。  
   - 因此，$\rho_S$ 的矩阵元与逻辑态无关，即 $\rho_S$ 是固定的。  

#### $\rho_S$ 与逻辑态无关 ⇒ 可纠正擦除错误  
1. 利用命题2.11的条件：  
   若 $\rho_S$ 独立于 $|\psi\rangle$，则对任意算符 $E$ 作用于 $S$，有：  
   $$
   \text{tr}(|\psi\rangle \langle\psi| E) = \text{tr}(\rho_S E).
   $$  
   - 右侧与 $|\psi\rangle$ 无关，满足命题2.11的条件1或3。  
   - 因此，$Q$ 满足QECC条件，可纠正作用于 $S$ 的所有错误（即擦除错误）。  
