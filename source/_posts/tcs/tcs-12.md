---
title: TCS Lec12总结
date: 2025-05-28 23:25:21
tags:
    - tcs
excerpt: 本节内容涵盖了私钥加密基础、完美保密性、计算保密性与伪随机生成器（PRG）、选择明文攻击（CPA）安全与伪随机函数（PRF）等重要概念。
---

### **1. 私钥加密基础 (Private-Key Encryption)**
* **场景**：Alice 和 Bob 共享密钥 $k$，Alice 用 $k$ 加密明文 $x$ 生成密文 $y$，Bob 用 $k$ 解密密文恢复 $x$。敌手 Eve 窃听信道但不知 $k$。
* **有效性 (Validity)**：  
  对任意密钥 $k \in \{0,1\}^n$ 和明文 $x$，需满足 $\text{Dec}(k, \text{Enc}(k,x)) = x$。
* **密文长度**：  
  **引理 1**：任何有效加密方案的密文长度至少等于明文长度（$|y| \geq |x|$）。优化目标是支持更长的明文。


### **2. 完美保密性 (Perfect Secrecy)**
* **安全定义问题**：  
  早期定义（如恢复密钥或明文）不足。**完美保密性**由 Shannon 提出：  
  对任意明文 $x_0, x_1$ 和随机密钥 $k$，分布 $\text{Enc}_k(x_0)$ 与 $\text{Enc}_k(x_1)$ **完全相同**。  
  * 敌手无法从密文中获得任何关于明文的信息（即使拥有无限算力）。
* **实验分析**：  
  敌手 $\mathcal{A}$ 选择 $x_0, x_1$，挑战者随机加密其一生成 $y$，$\mathcal{A}$ 猜测加密的是哪个明文。  
  **完美保密性等价于**：$\Pr[\mathcal{A} \text{ 成功}] = \frac{1}{2}$（与随机猜测无异）。
* **一次性密码本 (One-Time Pad, OTP)**：  
  * **构造**：$\text{Enc}_k(x) = k \oplus x$，$\text{Dec}_k(y) = k \oplus y$（要求 $|k|=|x|$）。
  * **优点**：满足完美保密性，计算高效。  
  * **缺点**：密钥长度必须等于明文长度，且**密钥不能重用**（否则泄露 $x_1 \oplus x_2$）。
* **密钥长度限制**：  
  **定理 1**：任何完美保密加密方案的明文长度满足 $\ell_p(n) \leq n$（密钥长度 $n$ 限制了可加密的明文长度）。


### **3. 计算保密性与伪随机生成器 (PRG)**
* **动机**：克服 OTP 的密钥过长问题，允许短密钥加密长明文（如 AES 用 128 位密钥加密 TB 级数据）。
* **计算保密性 (Computational Secrecy)**：  
  放宽安全要求，只针对**多项式时间**敌手。  
  * **实验**：与完美保密实验相同，但敌手 $\mathcal{A}$ 是 PPT 算法。  
  * **定义**：对任意 PPT $\mathcal{A}$，存在可忽略函数 $\text{negl}(n)$ 使得：  
    $$
    \Pr[\mathcal{A} \text{ 成功}] \leq \frac{1}{2} + \text{negl}(n).
    $$
* **伪随机生成器 (Pseudorandom Generator, PRG)**：  
  * **定义**：多项式时间函数 $G: \{0,1\}^n \to \{0,1\}^{\ell(n)}$（$\ell(n) > n$），满足：  
    对任意 PPT 区分器 $\mathcal{D}$，有  
    $$
    \left| \Pr[\mathcal{D}(G(s)) = 1] - \Pr[\mathcal{D}(r) = 1] \right| \leq \text{negl}(n),
    $$  
    其中 $s \leftarrow \{0,1\}^n$，$r \leftarrow \{0,1\}^{\ell(n)}$。  
  * **密码学 PRG 猜想**：存在 PRG 满足 $\ell(n) = n^a$（任意多项式拉伸）。
* **基于 PRG 的加密方案**：  
  * **构造**：$\text{Enc}_k(x) = x \oplus G(k)$，$\text{Dec}_k(y) = y \oplus G(k)$（$|G(k)| = |x|$）。  
  * **安全性证明**（归约）：  
    若敌手 $\mathcal{A}$ 攻破加密方案（成功概率显著 $> \frac{1}{2}$），则可构造区分器 $\mathcal{D}_{\text{PRG}}$ 攻破 PRG（区分 $G(s)$ 与真随机串），矛盾。


### **4. CPA 安全与伪随机函数 (PRF)**
* **选择明文攻击 (Chosen-Plaintext Attack, CPA)**：  
  敌手可在攻击前**自适应地查询加密预言机**（获取任意明文的密文）。
* **CPA 安全定义**：  
  实验允许敌手访问 $\text{Enc}_k(\cdot)$ 预言机，输出挑战明文对 $(x_0, x_1)$ 后获挑战密文 $y = \text{Enc}_k(x_b)$，可继续查询预言机（但不可查 $y$）。要求 $\Pr[\mathcal{A} \text{ 成功}] \leq \frac{1}{2} + \text{negl}(n)$。
* **关键结论**：  
  * **确定性加密不可能 CPA 安全**（敌手直接加密 $x_0, x_1$ 并与 $y$ 比较）。  
  * CPA 安全方案**必须引入随机性**（如随机 IV）。
* **伪随机函数 (Pseudorandom Function, PRF)**：  
  * **定义**：函数族 $\{F_k: \{0,1\}^n \to \{0,1\}^n\}$，满足对任意 PPT 区分器 $\mathcal{D}$ 有：  
    $$
    \left| \Pr[\mathcal{D}^{F_k(\cdot)}(1^n)=1] - \Pr[\mathcal{D}^{f(\cdot)}(1^n)=1] \right| \leq \text{negl}(n),
    $$  
    其中 $k \leftarrow \{0,1\}^n$，$f$ 是真随机函数。  
  * **存在性**：PRF 存在当且仅当 PRG 存在。
* **基于 PRF 的 CPA 安全加密**：  
  * **构造**（随机 IV 模式）：  
    - $\text{Enc}_k(x)$：随机选 $r \leftarrow \{0,1\}^n$，输出 $\langle r, F_k(r) \oplus x \rangle$。  
    - $\text{Dec}_k(\langle r, s \rangle)$：输出 $F_k(r) \oplus s$。  
  * **安全性证明思路**：  
    1. **真随机函数方案 ($\widetilde{\Pi}$) 的分析**：  
       - 若挑战密文的 $r$ 与历史查询重复（概率 $\leq \frac{q(n)}{2^n}$），敌手可能成功。  
       - 否则，$F_k(r)$ 相当于一次性密钥，敌手成功概率恰为 $\frac{1}{2}$。  
       综上：$\Pr[\mathcal{A}_{\widetilde{\Pi}} \text{ 成功}] \leq \frac{1}{2} + \frac{q(n)}{2^n}$。  
    2. **归约到 PRF 安全**：  
       若敌手 $\mathcal{A}$ 攻破 $\Pi$（使用 PRF），则可构造区分器 $\mathcal{D}$ 攻破 PRF（通过模拟 CPA 实验）。


