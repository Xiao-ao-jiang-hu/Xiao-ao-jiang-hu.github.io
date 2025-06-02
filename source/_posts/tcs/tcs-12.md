---
title: TCS Lec12总结
date: 2025-05-28 23:25:21
tags:
    - tcs
categories:
    - tcs
excerpt: 本节内容涵盖了私钥加密基础、完美保密性、计算保密性与伪随机生成器（PRG）、选择明文攻击（CPA）安全与伪随机函数（PRF）等重要概念。
---

### **1. 私钥加密基础 (Private-Key Encryption)**
#### **1.1 场景设定**
- **参与者**：  
  - Alice（发送方）、Bob（接收方）共享**秘密密钥 $k \in \{0,1\}^*$**。  
  - Eve（敌手）窃听信道，但无法获取 $k$。  
- **流程**：  
  Alice 计算 $y = \text{Enc}_k(x)$ → 发送 $y$ → Bob 计算 $x = \text{Dec}_k(y)$。  

#### **1.2 有效性定义**
- **定义**：多项式时间算法对 $(\text{Enc}, \text{Dec})$ 是**有效加密方案**，当且仅当：  
  $$
  \forall n, k \in \{0,1\}^n, x: \quad \text{Dec}(k, \text{Enc}(k, x)) = x.
  $$  
- **密文长度限制**（引理 1）：  
  **证明**：假设存在 $x$ 使得 $|\text{Enc}_k(x)| < |x|$。由于 $\text{Dec}$ 是确定性算法，其输出仅依赖输入 $(k, y)$。若 $|y| < |x|$，则至多有 $2^{|y|}$ 个可能输出，但明文空间大小 $2^{|x|} > 2^{|y|}$，矛盾。故必有 $|y| \geq |x|$。


### **2. 完美保密性 (Perfect Secrecy)**
#### **2.1 定义**
- **完美保密性**：对任意 $n, x_0, x_1 \in \{0,1\}^{\ell(n)}$，分布 $Y_0 = \text{Enc}_k(x_0)$ 和 $Y_1 = \text{Enc}_k(x_1)$（密钥 $k \leftarrow \{0,1\}^n$）**完全相同**。  
  - **等价表述**：在以下实验中，敌手 $\mathcal{A}$ 的成功概率为 $\frac{1}{2}$：  
    1. 采样 $k \leftarrow \{0,1\}^n$.  
    2. $\mathcal{A}(1^n)$ 输出 $x_0, x_1$.  
    3. 随机选择 $b \leftarrow \{0,1\}$, 发送 $y = \text{Enc}_k(x_b)$ 给 $\mathcal{A}$.  
    4. $\mathcal{A}$ 输出 $b'$.  
    实验输出 $1$ 当且仅当 $b' = b$.  
  - 等价表述是在说给定任何两个明文，加密后对方无法区分它们的密文。

#### **2.2 完美保密性分析**
- **关键证明**：  
  $$
  \Pr[\mathcal{A} \text{ 成功}] = \Pr[b' = b] = \frac{1}{2}.
  $$  
  **推导**：  
  由完美保密性，$\Pr[Y = y \mid b = 0] = \Pr[Y = y \mid b = 1] = p(y)$.  
  由全概率公式：  
  $$
  \Pr[Y = y] = \Pr[b=0] \cdot p(y) + \Pr[b=1] \cdot p(y) = p(y).
  $$  
  故 $Y$ 与 $b$ 独立：  
  $$
  \Pr[b=i \mid Y=y] = \frac{\Pr[b=i] \cdot p(y)}{p(y)} = \Pr[b=i] = \frac{1}{2}.
  $$  
  因此 $\mathcal{A}$ 无法从 $y$ 获取 $b$ 的信息。

#### **2.3 一次性密码本 (OTP)**
- **构造**：  
  - $\text{Enc}_k(x) = k \oplus x$（要求 $|k| = |x| = n$）。  
  - $\text{Dec}_k(y) = k \oplus y$.  
- **完美保密性证明**：  
  对任意 $x_0, x_1, y$：  
  $$
  \Pr[\text{Enc}_k(x_0) = y] = \Pr[k = x_0 \oplus y] = 2^{-n},
  $$  
  $$
  \Pr[\text{Enc}_k(x_1) = y] = \Pr[k = x_1 \oplus y] = 2^{-n}.
  $$  
  故分布相同。

#### **2.4 密钥长度限制（定理 1）**
- **定理**：对任意完美保密加密方案，有 $\ell_p(n) \leq n$（明文长度 $\leq$ 密钥长度）。  
- **证明**：  
  固定 $n$，设 $\ell = \ell_p(n)$。  
  1. 取 $x_0 = 0^\ell$，其密文分布 $Y_0$ 的支撑集 $S_0$ 满足 $|S_0| \leq 2^n$（因密钥仅 $2^n$ 种）。  
  2. 由完美保密性，对任意 $x_1$ 和 $k$，$\text{Enc}_k(x_1) \in S_0$。  
  3. 对固定 $k$，集合 $I_k = \{ y \mid y = \text{Enc}_k(x) \text{ for some } x \}$ 的大小至少为 $2^\ell$（因明文空间大小为 $2^\ell$）。  
  4. 因 $I_k \subseteq S_0$，故 $2^\ell \leq |S_0| \leq 2^n$，即 $\ell \leq n$.


### **3. 计算保密性与伪随机生成器 (PRG)**
#### **3.1 计算保密性定义**
- **实验**（敌手为 PPT 算法 $\mathcal{A}$)：  
  1. 采样 $k \leftarrow \{0,1\}^n$.  
  2. $\mathcal{A}(1^n)$ 输出等长明文 $x_0, x_1$.  
  3. 随机选择 $b \leftarrow \{0,1\}$，发送 $y = \text{Enc}_k(x_b)$ 给 $\mathcal{A}$.  
  4. $\mathcal{A}$ 输出 $b'$.  
  实验输出 $1$ 当且仅当 $b' = b$.  
- **定义**：方案是**计算保密的**，若 $\forall$ PPT $\mathcal{A}$，$\exists$ 可忽略函数 $\text{negl}$ 使得：  
  $$
  \Pr[\mathcal{A} \text{ 成功}] \leq \frac{1}{2} + \text{negl}(n).
  $$

#### **3.2 伪随机生成器 (PRG)**
- **定义**：多项式时间函数 $G: \{0,1\}^n \to \{0,1\}^{\ell(n)}$ 是 **PRG**，若：  
  1. $\forall s \in \{0,1\}^n: |G(s)| = \ell(n)$.  
  2. $\forall$ PPT 区分器 $\mathcal{D}$，有：  
  $$
  \left| \Pr_{s \leftarrow \{0,1\}^n} [\mathcal{D}(G(s)) = 1] - \Pr_{r \leftarrow \{0,1\}^{\ell(n)}} [\mathcal{D}(r) = 1] \right| \leq \text{negl}(n).
  $$  
  - **密码学 PRG 猜想**：存在 PRG 满足 $\ell(n) = n^a$（$\forall a \in \mathbb{N}$).

#### **3.3 基于 PRG 的加密方案**
- **构造**：  
  - $\text{Enc}_k(x) = x \oplus G(k)$（要求 $|G(k)| = |x|$）。  
  - $\text{Dec}_k(y) = y \oplus G(k)$.  
- **安全性证明**（定理 2）：  
  **假设** PRG 安全。**归约**：若存在 PPT 敌手 $\mathcal{A}$ 攻破加密方案（即 $\Pr[\mathcal{A} \text{成功}] \geq \frac{1}{2} + \frac{1}{\text{poly}(n)}$），则构造区分器 $\mathcal{D}_{\text{PRG}}$ 攻破 PRG：  
  1. $\mathcal{D}_{\text{PRG}}(w)$：  
     - 运行 $\mathcal{A}(1^n)$ 获得 $x_0, x_1$.  
     - 随机选 $b \leftarrow \{0,1\}$，计算 $y = w \oplus x_b$.  
     - 发送 $y$ 给 $\mathcal{A}$，获其输出 $b'$.  
     - 若 $b' = b$ 输出 $1$，否则输出 $0$.  
  **分析**：  
  - 若 $w \leftarrow \{0,1\}^{\ell(n)}$（真随机）：则 $y$ 是 $x_b$ 的 OTP 密文，故 $\Pr[\mathcal{D}_{\text{PRG}} \text{ 输出 } 1] = \Pr[\mathcal{A} \text{ 成功}] = \frac{1}{2}$.  
  - 若 $w = G(s)$（PRG 输出）：则 $\Pr[\mathcal{D}_{\text{PRG}} \text{ 输出 } 1] = \Pr[\mathcal{A} \text{ 成功}] \geq \frac{1}{2} + \frac{1}{\text{poly}(n)}$.  
  **矛盾**：区分优势为 $\frac{1}{\text{poly}(n)}$（非可忽略），与 PRG 安全假设矛盾。

### **4. CPA 安全与伪随机函数 (PRF)**
#### **4.1 CPA 安全定义**
- **实验**（敌手可访问加密预言机）：  
  - **实验参与者**
    - **挑战者（Challenger）**：持有密钥 $k$，执行加密操作。
    - **敌手 $\mathcal{A}$**：PPT 算法，可访问加密预言机。

  - **实验步骤**
    1. **初始化（Setup）**：  
       - 挑战者生成密钥 $k \leftarrow \{0,1\}^n$（安全参数 $n$）。

    2. **预言机访问阶段（Oracle Access Phase）**：  
       - $\mathcal{A}$ 输入 $1^n$，获得对加密预言机 $\text{Enc}_k(\cdot)$ 的**自适应访问权**。  
       - $\mathcal{A}$ 可提交任意明文 $x$，预言机返回密文 $y = \text{Enc}_k(x)$。  
       - **关键**：敌手可基于之前的查询结果动态选择后续查询（例如：根据 $y_1$ 决定 $x_2$）。

    3. **挑战阶段（Challenge Phase）**：  
       - $\mathcal{A}$ 输出一对**等长明文** $x_0, x_1$（相同长度 $\ell$）。  
       - 挑战者随机选择 $b \leftarrow \{0,1\}$，计算**挑战密文** $y^* = \text{Enc}_k(x_b)$ 并发送给 $\mathcal{A}$。

    4. **继续访问阶段（Continued Oracle Access）**：  
       - $\mathcal{A}$ **仍可访问** $\text{Enc}_k(\cdot)$，但**禁止查询** $x_0$ 或 $x_1$（避免直接比较）。  
       - 敌手可加密其他任意明文（如 $x_2 \neq x_0, x_1$）。

    5. **猜测阶段（Guess Phase）**：  
       - $\mathcal{A}$ 输出比特 $b' \in \{0,1\}$，猜测 $y^*$ 对应 $x_0$ 或 $x_1$。

    6. **实验结果**：  
       - 若 $b' = b$，输出 1（敌手成功）；否则输出 0（敌手失败）。 
- **实验设计思路**
  - 敌手（如网络窃听者）可能通过合法或非法手段获取部分明文的加密结果
  - 希望即使敌手能观察任意明文的密文，也应无法破解从未见过的挑战密文（Challenge Ciphertext）的机密性。
- **定义**：方案是 **CPA 安全的**，若 $\forall$ PPT $\mathcal{A}$，$\exists$ $\text{negl}$ 使得：  
  $$
  \Pr[\mathcal{A} \text{ 成功}] \leq \frac{1}{2} + \text{negl}(n).
  $$

#### **4.2 伪随机函数 (PRF)**
- **定义**：函数族 $F_k: \{0,1\}^n \to \{0,1\}^n$ 是 **PRF**，若 $\forall$ PPT 区分器 $\mathcal{D}$，有：  
  $$
  \left| \Pr_{k \leftarrow \{0,1\}^n} \left[ \mathcal{D}^{F_k(\cdot)}(1^n) = 1 \right] - \Pr_{f \leftarrow \text{Rand}(n)} \left[ \mathcal{D}^{f(\cdot)}(1^n) = 1 \right] \right| \leq \text{negl}(n),
  $$  
  其中 $\text{Rand}(n)$ 是所有函数 $\{0,1\}^n \to \{0,1\}^n$ 的集合。

#### **4.3 基于 PRF 的 CPA 安全加密**
- **构造**（随机 IV 模式）：  
  - $\text{Enc}_k(x)$：  
    1. 随机选 $r \leftarrow \{0,1\}^n$.  
    2. 计算 $s = F_k(r) \oplus x$.  
    3. 输出密文 $y = \langle r, s \rangle$.  
  - $\text{Dec}_k(\langle r, s \rangle)$：输出 $x = F_k(r) \oplus s$.  

#### **4.4 CPA 安全性证明**
- **步骤 1：分析真随机函数方案 $\widetilde{\Pi}$**  
  设敌手 $\mathcal{A}$ 在 CPA 实验中做 $q(n)$ 次加密查询，使用随机数 $r_1, \dots, r_q$。  
  - **事件 Repeat**：挑战密文中的 $r_c$ 在 $\{r_1, \dots, r_q\}$ 中出现。  
    $$
    \Pr[\text{Repeat}] \leq \frac{q(n)}{2^n}.
    $$  
  - **事件 No Repeat**：此时 $F_k(r_c)$ 对敌手完全随机（因 $f$ 是真随机函数），故：  
    $$
    \Pr[\mathcal{A} \text{ 成功} \mid \text{No Repeat}] = \frac{1}{2}.
    $$  
  - **总成功概率**：  
    $$
    \Pr[\mathcal{A}_{\widetilde{\Pi}} \text{ 成功}] \leq \Pr[\text{Repeat}] + \Pr[\mathcal{A} \text{ 成功} \mid \text{No Repeat}] \leq \frac{q(n)}{2^n} + \frac{1}{2}.
    $$

- **步骤 2：归约到 PRF 安全**  
  **构造区分器 $\mathcal{D}$**：  
  1. $\mathcal{D}^{\mathcal{O}(\cdot)}(1^n)$：  
     - 模拟 $\mathcal{A}$ 的 CPA 实验：  
       - 当 $\mathcal{A}$ 查询 $\text{Enc}(x)$：  
         选 $r \leftarrow \{0,1\}^n$，查询 $s' = \mathcal{O}(r)$，返回 $\langle r, s' \oplus x \rangle$.  
       - 当 $\mathcal{A}$ 输出挑战明文 $x_0, x_1$：  
         选 $b \leftarrow \{0,1\}, r_c \leftarrow \{0,1\}^n$，查询 $s' = \mathcal{O}(r_c)$，返回 $\langle r_c, s' \oplus x_b \rangle$.  
     - 若 $\mathcal{A}$ 输出 $b' = b$，则输出 $1$；否则输出 $0$.  
  **分析**：  
  - 若 $\mathcal{O} = F_k$（伪随机函数）：则 $\mathcal{A}$ 的视图与方案 $\Pi$ 中相同，故：  
    $$
    \Pr[\mathcal{D}^{F_k(\cdot)} = 1] = \Pr[\mathcal{A}_{\Pi} \text{ 成功}].
    $$  
  - 若 $\mathcal{O} = f$（真随机函数）：则 $\mathcal{A}$ 的视图与方案 $\widetilde{\Pi}$ 中相同，故：  
    $$
    \Pr[\mathcal{D}^{f(\cdot)} = 1] = \Pr[\mathcal{A}_{\widetilde{\Pi}} \text{ 成功}] \leq \frac{1}{2} + \frac{q(n)}{2^n}.
    $$  
  **矛盾**：若 $\mathcal{A}_{\Pi}$ 成功概率显著 $> \frac{1}{2}$，则：  
  $$
  \left| \Pr[\mathcal{D}^{f(\cdot)} = 1] - \Pr[\mathcal{D}^{F_k(\cdot)} = 1] \right| \geq \frac{1}{\text{poly}(n)},
  $$  
  与 PRF 安全假设矛盾。
