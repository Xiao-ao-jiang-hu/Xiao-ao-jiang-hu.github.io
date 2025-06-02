---
title: TCS Lec13总结
date: 2025-05-28 23:28:05
tags:
    - tcs
categories:
    - tcs
excerpt: 本节内容涵盖了交互式证明系统、抛币协议与比特承诺、零知识证明等重要概念，深入探讨了它们在计算复杂性和密码学中的应用。
---
### **1. 交互式证明系统 (IP)**
#### **核心思想**
突破传统NP验证模型（证明者一次性发送“书面证明”，验证者确定性验证）。允许证明者（Prover, P）和验证者（Verifier, V）进行多轮交互，验证者可使用随机性。
#### **定义 (Formal Definition)**
- **语言 $A \in \text{IP}[\ell]$** 当存在交互算法 $(P, V)$：
  - $V$ 为 PPT 算法（输入 $x$ 时运行时间 $\text{poly}(|x|)$）。
  - **完备性 (Completeness)**：  
    $$
    \forall x \in A: \quad \Pr \left[ \langle P, V \rangle(x) = 1 \right] = 1 \quad (\text{或} \geq 1 - \text{negl}(n))
    $$
  - **可靠性 (Soundness)**：  
    $$
    \forall x \notin A, \forall P^*: \quad \Pr \left[ \langle P^*, V \rangle(x) = 1 \right] \leq \frac{1}{2} \quad (\text{或} \leq \text{negl}(n))
    $$
  - $\ell$ 为交互轮数（消息数）。

> 直观理解
> 传统NP验证中（如数学证明），验证者被动检查"书面证明"。但若验证者加入随机提问（如随机抽查证明步骤），并允许证明者动态回应，可处理更复杂问题——例如验证"两个图不同构"这种没有简短书面证明的问题。随机性防止证明者预计算所有答案，交互使其能动态应对验证者的挑战。

#### **关键协议与证明**
1. **BPP ⊆ IP[1] (完美完备性)**  
   - 构造：对 $A \in \text{BPP}$，设 $V(x,r)$ 是 BPP 验证器（错误率 $\leq 1/4$）。  
     - Prover 发送 $s_1, \dots, s_{2m} \in \{0,1\}^{|r|}$ 满足：  
       $$
       \Pr_r \left[ \bigvee_{j=1}^{2m} V(x, s_j \oplus r) = 1 \right] = 
       \begin{cases} 
         1 & \text{if } x \in A \\
         \leq \frac{1}{2} & \text{if } x \notin A
       \end{cases}
       $$
   - 完备性：当 $x \in A$，存在 $s_j$ 使析取式恒真。  
   - 可靠性：当 $x \notin A$，析取式成立的概率 $\leq 1/2$（Chernoff 界）。
> **设计动机**  
> BPP问题已有高效概率算法，但需向他人"证明"答案正确。本协议巧妙转化：证明者发送一组"魔改随机数" $s_j$，使得无论验证者用哪个随机数 $r$，总有一个 $s_j \oplus r$ 能通过验证。真命题时所有 $r$ 被覆盖；假命题时多数 $r$ 会失败。**本质**：用空间换证明，将概率验证压缩为单轮交互证明。

2. **GNI ∈ IP (图非同构)**  
   - **协议 (Coke vs. Pepsi)**：  
     1. Verifier 选随机比特 $b \leftarrow \{0,1\}$ 和置换 $\pi$，发送 $G' = \pi(G_b)$。  
     2. Prover 计算 $b'$ 使得 $G' \sim G_{b'}$，发送 $b'$。  
     3. Verifier 接受 iff $b' = b$。  
   - **完备性**：若 $G_0 \not\sim G_1$，Prover 可正确计算 $b' = b$（因 $\text{supp}(\pi(G_0)) \cap \text{supp}(\pi(G_1)) = \emptyset$）。  
   - **可靠性**：若 $G_0 \sim G_1$，则 $\pi(G_b)$ 的分布与 $b$ 独立，故 $\Pr[b' = b] = \frac{1}{2}$。  
     $$
     \Pr[\text{accept}] = \Pr[b' = b] = \frac{1}{2} \quad \Rightarrow \quad \text{错误率} \leq \frac{1}{2}.
     $$
> **为何随机置换图？**  
> 验证者将随机选中的图 $G_b$ 用随机置换$\pi$加密后发送 $G'$，要求证明者指认原始图。若两图不同构（如可乐与百事），$G'$ 必然只像其中一个，诚实证明者总能答对；若同构（如两杯可乐），$G'$ 可能来自任一杯，证明者只能瞎猜。**核心思想**：用"同构混淆"制造不确定性，区分问题答案。


3. **GNI ∈ AM (Goldwasser-Sipser 集合下界协议)**  
   - 定义集合 $S = \{ (H, \pi) \mid H \sim G_0 \text{ 或 } H \sim G_1 \}$，则：  
     $$
     |S| = \begin{cases} 
        n! & \text{if } G_0 \sim G_1 \\
        2n! & \text{otherwise}
     \end{cases}
     $$
   - **协议**：  
     1. Arthur 发送随机哈希 $(h, y)$（$h: \{0,1\}^m \to \{0,1\}^k$，$y \leftarrow \{0,1\}^k$）。  
     2. Merlin 找到 $x \in S$ 满足 $h(x) = y$，并发送 $x$ 及证明。  
     3. Arthur 验证 $h(x)=y$ 且 $x \in S$。  
   - **完备性分析**：  
     - 若 $|S| = N$（即 $G_0 \not\sim G_1$），则：  
       $$
       \Pr_{h,y} [\exists x \in S: h(x)=y] \geq \frac{|S|}{2^k} - \frac{|S|^2}{2 \cdot 2^{2k}} \geq p - \frac{N}{2^{k+1}}p \geq \frac{3p}{4} \quad (p = N/2^k)
       $$
     - 若 $|S| = N/2$（即 $G_0 \sim G_1$），则：  
       $$
       \Pr_{h,y} [\exists x \in S: h(x)=y] \leq \frac{|S|}{2^k} = \frac{p}{2}
       $$
   - 区分间隙 $\frac{3p}{4} > \frac{p}{2}$，故协议可靠。


### **2. 比特承诺 (Bit Commitment)**
#### **核心问题**
如何在“先公开承诺，后揭示信息”的过程中，防止任何一方的欺诈行为？发送方希望承诺后不能反悔，接收方希望在揭示前无法窥探承诺内容。
#### **形式化定义**
- **承诺方案 $\mathrm{Com}$** 是两阶段协议：  
  1. **Commit 阶段**：发送者输出承诺值 $c = \mathrm{Com}(x; r)$。  
  2. **Reveal 阶段**：发送者输出 $(x, r)$，验证者检查 $c \overset{?}{=} \mathrm{Com}(x; r)$。  
- **安全性质**：  
  - **计算隐藏性 (Hiding)**：  
    $$
    \forall x_0 \neq x_1, \quad \{\mathrm{Com}(x_0)\} \approx_c \{\mathrm{Com}(x_1)\}
    $$
  - **统计绑定性 (Binding)**：  
    $$
    \Pr\left[ \exists x' \neq x: \mathrm{Com}(x; r) = \mathrm{Com}(x'; r') \right] \leq \text{negl}(n)
    $$

> **为何需隐藏 + 绑定？**  
> 想象"密封信封"：发送者将消息封入信封（**隐藏**：看不见内容），接收者持有信封但发送者无法篡改内容（**绑定**：打开时必须是原消息）。

#### **Naor 承诺方案 (基于 PRG)**
- **构造**：  
  1. Receiver 发送随机 $x \leftarrow \{0,1\}^{3n}$。  
  2. Sender 选 $m \leftarrow \{0,1\}$, $z \leftarrow \{0,1\}^n$，计算：  
     $$
     y = G(z) \oplus \begin{cases} x & \text{if } m=1 \\ 0^{3n} & \text{if } m=0 \end{cases}
     $$
    发送 $y$。  
- **证明**：  
  - **隐藏性**：若 $G$ 是 PRG，则 $G(z)$ 伪随机 $\Rightarrow y$ 隐藏 $m$。  
  - **绑定性**：Sender 想作弊需找到 $z, z'$ 使：  
    $$
    G(z) \oplus G(z') = x \quad \text{或} \quad G(z) \oplus G(z') = x \oplus 0^{3n} = x.
    $$
    对随机 $x$，解存在的概率 $\leq \frac{2^{2n}}{2^{3n}} = 2^{-n}$（因方程数 $\leq |\text{dom}(G)|^2 = 2^{2n}$)。

> **为何用PRG和随机串 $x$？**  
> 接收者先发随机串 $x$（如公开信封编号），发送者用PRG生成"伪随机密钥" $G(z)$，将 $x$ 与密钥异或后作为承诺值。  
> - **隐藏**：$G(z)$ 像真随机数，掩盖了消息 $m$。  
> - **绑定**：想作弊需找到另一密钥 $G(z')$ 使得 $G(z) \oplus G(z') = x$，但随机 $x$ 几乎无解。**本质**：用伪随机性实现信息论安全绑定 + 计算安全隐藏。


#### **公平抛币协议 (From Commitment)**
- **协议**：  
  1. Alice 发送 $c = \mathrm{Com}(a; r)$（$a \leftarrow \{0,1\}$）。  
  2. Bob 发送 $b \leftarrow \{0,1\}$。  
  3. Alice 打开 $c$ 揭示 $a$。  
  4. 输出 $R = a \oplus b$.  
- **抗恶意 Bob**：  
  $$
  \Pr[R=0] = \Pr[a = b] \leq \frac{1}{2} + \text{negl}(n) \quad (\text{由隐藏性保证})
  $$

> **为何Alice先承诺，Bob先亮出？**  
> Alice用承诺锁住比特 $a$（Bob无法窥探），Bob被迫先亮出 $b$（此时 $a$ 仍隐藏），Alice再揭晓 $a$。这样：  
> - 恶意Bob选 $b$ 时不知 $a$，无法控制 $a \oplus b$。  
> - 恶意Alice虽知 $b$，但承诺绑定了 $a$，无法更改。**核心**：承诺的"延迟揭晓"特性强制双方公平。



### **3. 零知识证明 (ZK Proofs)**
#### **形式化定义**
- **计算零知识 (CZK)**：对任意 PPT $V^*$，存在 PPT 模拟器 $S$ 使得：  
  $$
  \forall x \in A: \quad \left\{ \text{view}_{V^*}\langle P, V^* \rangle(x) \right\} \approx_c \left\{ S(x) \right\}
  $$
  其中 $\text{view}_{V^*}$ 包含消息序列和 $V^*$ 的随机带。

> **为何要求模拟器？**  
> "不泄露知识"难直接定义。Goldwasser等提出：**若能模拟**出与真实对话不可区分的假对话，则真实对话必然未泄露知识（因假对话由模拟器生成，不含任何知识）。恶意验证者 $V^*$ 的加入确保即使对方作弊，也无法榨取额外信息。

#### **图同构 (GRAPH-ISO) 的 PZK 协议**
- **协议**：  
  1. Prover 发送 $H = \pi(G_0)$（$\pi$ 随机置换）。  
  2. Verifier 发送挑战 $b \leftarrow \{0,1\}$。  
  3. Prover 发送 $\tau = \pi \circ \sigma^b$（其中 $\sigma$ 满足 $\sigma(G_1) = G_0$）。  
  4. Verifier 接受 iff $\tau(G_b) = H$.  
- **模拟器构造**：  
  1. 随机选 $a \leftarrow \{0,1\}$，生成 $H = \pi(G_a)$。  
  2. 运行 $V^*$ 输入 $H$ 得挑战 $b$.  
  3. 若 $b = a$，输出 $(H, b, \tau=\pi)$；否则 **回退重试 (Rewind)**。  
- **期望运行时间**：$\mathbb{E}[\text{steps}] = 2 \cdot \text{poly}(n)$（因 $\Pr[b=a] = \frac{1}{2}$)。


> **为何随机化图 + 挑战响应？**  
> 证明者先发送 $G_0$ 的随机置换版本 $H$（隐藏原图结构），验证者随机要求证明 $H$ 与 $G_0$ 或 $G_1$ 同构。证明者用置换 $\tau$ 回应。  
> - **零知识**：恶意 $V^*$ 可能故意选 $b$ 想套取信息（如问 $H$ 是否与某秘密图同构），但模拟器通过"重放"技巧：反复试错直到 $V^*$ 的挑战匹配预设，输出合法对话而不需知识。**本质**：随机化 + 重放机制"骗过"验证者。

#### **3-染色问题的 ZK 协议 (Goldreich-Micali-Wigderson)**
- **协议**：  
  1. Prover 对随机置换染色 $\psi(v) = \pi(\phi(v))$ 承诺 $\{c_v = \mathrm{Com}(\psi(v))\}_{v \in V}$。  
  2. Verifier 挑战随机边 $e = (u,v) \leftarrow E$.  
  3. Prover 打开 $c_u, c_v$.  
  4. Verifier 检查 $\psi(u) \neq \psi(v)$ 且承诺有效。  
- **可靠性错误率**：若图非 3-可染色，则：  
  $$
  \Pr[\text{accept}] \leq \Pr[\text{承诺绑定失败}] + \Pr[\text{未抓到非法边} \mid \text{绑定}] \leq \text{negl}(n) + \left(1 - \frac{1}{|E|}\right)
  $$
- **零知识模拟器**：  
  1. 预选随机边 $e' = (u',v') \leftarrow E$.  
  2. 对 $u',v'$ 承诺随机不同颜色 $c_{u'}, c_{v'}$；其余顶点承诺 $0$.  
  3. 接收 $V^*$ 的挑战 $e = (u,v)$.  
  4. 若 $e = e'$，打开 $c_u, c_v$；否则 **回退重试**。  
- **混合论证 (Hybrid Argument)**：  
  定义混合分布 $H_0$（真实协议）, $H_1$（使用真染色但预选边）, $H_2$（仅对挑战边承诺真染色）, $H_3$（模拟器）。  
  - $H_0 \equiv H_1$：因 $e'$ 独立。  
  - $H_1 \approx_c H_2$：由承诺的**隐藏性**保证（非挑战边的承诺不可区分）。  
  - $H_2 \equiv H_3$：挑战边的颜色在随机置换下分布相同。


> **为何承诺所有点颜色，但只揭晓一条边？**  
> 证明者对随机染色方案承诺（隐藏真实颜色），验证者随机抽查一条边要求揭晓。  
> - 真染色时边两点颜色必不同。  
> - 模拟器"作弊"：预判一条边 $(u',v')$ 承诺随机不同颜色，其余点承诺假颜色；若验证者恰好抽查该边，则过关；否则重试。**关键**：承诺的隐藏性掩护了非抽查点的假颜色，重放将成功概率提升至可行。

### **4. 关键结论与扩展**
1. **复杂度类关系**：  
   - $\text{IP} = \text{PSPACE}$（Shamir 1990）。  
   - 对常数 $k \geq 2$，有 $\text{IP}[k] = \text{AM}[k] = \text{AM}$（Goldwasser-Sipser）。  
2. **零知识证明的存在性**：  
   - 若存在单向函数，则所有 **NP** 语言有 **CZK** 证明（基于承诺方案）。  
   - **统计零知识 (SZK)** 类包含 **GNI**、**Quadratic Residuosity** 等。  
3. **现代密码学扩展**：  
   - **公钥加密**：基于陷门置换或格问题。  
   - **多方计算 (MPC)**：Yao's Garbled Circuit, GMW 协议。  
   - **全同态加密 (FHE)**：Gentry 构造（基于 LWE）。

