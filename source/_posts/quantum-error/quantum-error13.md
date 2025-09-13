---
title: 经典纠错码(2)
tags:
  - quantum-error
  - quantum
categories:
  - quantum
excerpt: >-
  本文介绍了经典线性码的对偶理论，包括GF(2)上的线性代数基础、对偶码的定义与性质，以及7比特汉明码的对偶实例。重点讨论了对偶码的生成矩阵与校验矩阵之间的关系，以及秩-零定理在GF(2)中的应用。
abbrlink: '36e94218'
date: 2025-04-23 23:55:46
---
## 经典线性码的对偶理论  

### GF(2) 上的线性代数基础  
问题：在 $\mathbb{R}$ 中成立的"行空间正交补=零空间"性质，在 $GF(2)$ 中不成立。  

反例：  
取生成矩阵 $G = \begin{pmatrix} 1 & 0 \\ 1 & 1 \end{pmatrix}$  
- 行空间：$\text{rowsp}(G) = \{(00), (10), (01), (11)\}$（全空间）  
- 零空间：$\ker(G) = \{ y \mid G y^T = 0 \} = \{(00)\}$  
- 正交补：  
  $$
  (\text{rowsp}(G))^\perp = \{ y \mid x \cdot y = 0 \, \forall x \in \text{rowsp}(G) \} = \{(00)\}
  $$  
但若按实数域直觉，校验矩阵 $H$ 应满足：  
$$
H = \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix} \implies \text{rowsp}(H) = \text{全空间} \neq \ker(G)
$$  

根本原因：  
1. 特征 2 效应：在 $GF(2)$ 中 $1 + 1 = 0$，导致：  
   - 自正交向量：存在 $x \neq 0$ 满足 $x \cdot x = 0$（如 $x = (1,1)$）  
   - 非退化失败：$x \cdot y = 0 \, \forall y \not\Rightarrow x = 0$  
2. 正交补定义：  
   $$
   (\text{rowsp}(G))^\perp = \{ y \mid G y^T = 0 \} = \ker(G)
   $$  
   但 $\ker(G) \neq \text{rowsp}(H)$ 一般成立  

####　秩-零定理：  
对线性映射 $\sigma: V \to W$：  
$$
\dim(\text{im } \sigma) + \dim(\ker \sigma) = \dim V
$$  
高斯消元验证（在 $GF(2)$ 有效）：  
1. 对 $k \times n$ 矩阵 $G$ 作行初等变换  
2. 得到行阶梯形：  
   $$
   \begin{pmatrix} I_r & A \\ 0 & 0 \end{pmatrix} \implies \text{rank}(G) = r, \, \dim(\ker G) = n - r
   $$  
3. 校验矩阵 $H$ 的构造：取 $\ker(G)$ 的基为行向量  

> 关键结论：在 $GF(2)$ 中，$H$ 的行空间是 $G$ 的零空间，而非正交补空间。  


### 对偶码的代数定义与性质  
#### 定义 4.11（对偶码）：  
设 $C \subseteq \mathbb{Z}_2^n$ 是线性码，其对偶码定义为：  
$$
C^\perp = \{ y \in \mathbb{Z}_2^n \mid x \cdot y = 0, \, \forall x \in C \}
$$  
其中点积 $x \cdot y = \sum_{i=1}^n x_i y_i \mod 2$。  

性质：  
1. 矩阵关系：  
   - $C$ 的生成矩阵 $G$ ⇔ $C^\perp$ 的校验矩阵  
   - $C$ 的校验矩阵 $H$ ⇔ $C^\perp$ 的生成矩阵  
   - 即：$C^\perp = \{ y \mid G y^T = 0 \}$  
2. 参数关系：  
   - 若 $C$ 为 $[n,k,d]$ 码，则 $C^\perp$ 为 $[n, n-k, d']$ 码  
   - $d'$ 是 $C^\perp$ 的最小权重，与 $d$ 无直接关系  
3. 双重对偶：$(C^\perp)^\perp = C$  


### 实例
#### 7比特汉明码的对偶  
- 原码：$[7,4,3]$ 汉明码  
  - 校验矩阵 $H =$ 所有非零3-bit向量（列向量）  
- 对偶码：$[7,3,4]$ 码  
  - 生成矩阵：$G_{\perp} = H$（即 $H$ 的行生成 $C^\perp$)  
  - 最小权重 $d' = 4$：  
    - 任意两列线性无关 ⇒ 无权重2码字  
    - 存在权重4码字（如三列和：001+010+011=000）  

几何解释：  
- $C^\perp$ 的码字对应原码 $C$ 的奇偶校验方程  
- 权重4的码字：如 $y = (1,1,1,0,1,0,0)$ 满足 $H y^T = 0$  

#### 汉明码与RM码的对偶关系  
##### 定理 4.10（穿刺RM码 = 汉明码对偶）：  
对 $\mathcal{R}(1,m)$ 进行：  
1. 移除全1向量 → 维度降为 $m$  
2. 穿刺（删除恒0位）→ 码长 $n = 2^m - 1$  
得到 $[2^m - 1, m, 2^{m-1}]$ 码，此即 $[2^m - 1, 2^m - m - 1, 3]$ 汉明码的对偶码。  

证明：  
1. 穿刺RM码的生成矩阵：  
   - 行向量为 $\{v_1, \dots, v_m\}$（移除全1向量后）  
   - 第 $j$ 列 = $j$ 的二进制表示（$j = 1,\dots,2^m - 1$)  
2. 汉明码校验矩阵：  
   - $H$ 的列 = 所有非零 $m$-bit向量  
   - 与穿刺RM码的生成矩阵相同  
3. 对偶关系：  
   $$
   C_{\text{汉明}}^\perp = \text{rowsp}(H) = \text{rowsp}(G_{\text{穿刺}}) = C_{\text{穿刺}}
   $$  

> 示例（$m=3$）：  
> - 穿刺 $\mathcal{R}(1,3)$ 的生成矩阵：  
>   $$
>   G' = \begin{pmatrix} 
>   0 & 0 & 1 & 1 & 1 & 1 \\ 
>   0 & 1 & 0 & 1 & 0 & 1 \\ 
>   1 & 0 & 1 & 0 & 1 & 0 
>   \end{pmatrix} \quad \text{（列对应 } j=1,\dots,7\text{）}
>   $$  
> - 汉明码校验矩阵 $H$ 与此相同 → 对偶得证  


### 里德-穆勒码的对偶定理  
#### 定理 4.11（RM码的对偶）：  
$$
\mathcal{R}(r,m)^\perp = \mathcal{R}(m - r - 1, m) \quad (0 \leq r \leq m - 1)
$$  

证明：  
步骤1：正交性验证  
- 取基向量 $w \in \mathcal{R}(r,m)$, $w' \in \mathcal{R}(m - r - 1, m)$  
- 点积 $w \cdot w' = \sum_j w_j w'_j \mod 2$  
- $w_j w'_j$ 是至多 $(r + (m - r - 1)) = m - 1$ 个 $v_i$ 的乘积  
- 由定理 4.8，权重 $< 2^m$ ⇒ 点积为 0  

步骤2：维度匹配  
$$
\begin{align*}
\dim \mathcal{R}(r,m) &= \sum_{i=0}^r \binom{m}{i} \\
\dim \mathcal{R}(m - r - 1, m) &= \sum_{i=0}^{m - r - 1} \binom{m}{i} \\
\dim \mathcal{R}(r,m) + \dim \mathcal{R}(m - r - 1, m) &= \sum_{i=0}^m \binom{m}{i} = 2^m
\end{align*}
$$  
⇒ $\mathcal{R}(m - r - 1, m) = \mathcal{R}(r,m)^\perp$  

#### 推论 4.12（自对偶条件）：  
- 自对偶：当 $m = 2r + 1$ 时，$\mathcal{R}(r, 2r+1)$ 满足 $C = C^\perp$  
- 弱自对偶：当 $m > 2r + 1$ 时，$\mathcal{R}(r,m) \subseteq \mathcal{R}(r,m)^\perp$  

> 示例（$\mathcal{R}(1,3)$）：  
> - $m=3, r=1$ ⇒ $m = 2 \times 1 + 1 = 3$  
> - 参数：$[8,4,4]$  
> - 自对偶验证：  
>   $$
>   \dim \mathcal{R}(1,3) = \binom{3}{0} + \binom{3}{1} = 4, \quad \dim \mathcal{R}(1,3)^\perp = 8 - 4 = 4
>   $$  



## 经典纠错码相关界及完美码
### 汉明界：球包极限  
#### 定理 4.16（汉明界）：  
对 $(n, K, 2t+1)_q$ 码，有：  
$$
K \cdot \sum_{j=0}^{t} (q-1)^j \binom{n}{j} \leq q^n
$$  
渐近形式（$n \to \infty$）：  
$$
\frac{\log_q K}{n} \leq 1 - \frac{t}{n} \log_q (q-1) - h_q \left( \frac{t}{n} \right)
$$  
其中 $h_q(x) = -x \log_q x - (1-x) \log_q (1-x)$ 为 $q$-进制熵函数。  

证明（几何视角）：  
1. 纠错球定义：对每个码字 $x \in C$，定义半径为 $t$ 的球：  
   $$
   S_x = \{ z \in \text{GF}(q)^n \mid d_H(z, x) \leq t \}
   $$  
2. 球不相交：因最小距离 $d = 2t+1$，有 $S_x \cap S_y = \emptyset \quad (\forall x \neq y)$  
   （否则存在 $z$ 可解码为 $x$ 或 $y$，矛盾）  
3. 球体积计算：  
   - 固定 $x$，选 $j$ 个错误位置：$\binom{n}{j}$ 种方式  
   - 每个位置 $q-1$ 种错误值：$(q-1)^j$ 种组合  
   - 体积：$|S_x| = \sum_{j=0}^{t} (q-1)^j \binom{n}{j}$  
4. 空间填充：  
   $$
   \bigcup_{x \in C} S_x \subseteq \text{GF}(q)^n \implies K \cdot |S_x| \leq q^n
   $$  

#### 引理 4.17（熵函数来源）：  
$$
\log_q \binom{n}{j} = -j \log_q \left( \frac{j}{n} \right) - (n-j) \log_q \left( 1 - \frac{j}{n} \right) + o(n)
$$  
证明：  
1. 斯特林公式：$\log(m!) = m \log m - m \log e + o(m)$  
2. 展开：  
   $$
   \log_q \binom{n}{j} = \log_q (n!) - \log_q (j!) - \log_q ((n-j)!)
   $$  
3. 代入得：  
   $$
   = \left[ n \log n - n \log e \right] - \left[ j \log j - j \log e \right] - \left[ (n-j) \log (n-j) - (n-j) \log e \right] + o(n)
   $$  
化简即证。  


### 完美码：汉明码的最优性  
#### 定义 4.14（完美码）：  
达到汉明界等号的码称为完美码，即：  
$$
K \cdot \sum_{j=0}^{t} (q-1)^j \binom{n}{j} = q^n
$$  

#### 定理（距离 3 完美码）：  
线性 $[n,k,3]_q$ 完美码的参数必为：  
$$
n = \frac{q^r - 1}{q - 1}, \quad k = n - r
$$  
即汉明码的参数。  

证明：  
1. 最小距离 $d=3 \implies t=1$  
2. 完美码条件：$K \left[ 1 + (q-1)n \right] = q^n$  
3. 线性码：$K = q^k$，代入得：  
   $$
   q^k \left[ 1 + (q-1)n \right] = q^n
   $$  
4. 令 $r = n - k$（校验位）：  
   $$
   1 + (q-1)n = q^r
   $$  
5. 解得：  
   $$
   n = \frac{q^r - 1}{q - 1}, \quad k = n - r
   $$  

汉明码的完美性验证（以 $q=2, r=3$ 为例）：  
- $n = \frac{2^3 - 1}{2-1} = 7$, $k = 7 - 3 = 4$  
- 球体积：$|S_x| = \binom{7}{0} + \binom{7}{1} = 1 + 7 = 8$  
- 总空间：$2^7 = 128$  
- $K \cdot |S_x| = 16 \times 8 = 128 = 2^7$  

### Gilbert-Varshamov界：编码存在性保证  
#### 定理 4.18（Gilbert-Varshamov界）：  
若参数满足：  
$$
K \sum_{j=0}^{d-1} (q-1)^j \binom{n}{j} \leq q^n \tag{4.30}
$$  
则存在 $(n,K,d)_q$ 码。渐近形式：  
$$
\frac{\log_q K}{n} \leq 1 - \frac{d}{n} \log_q (q-1) - h_q \left( \frac{d}{n} \right)
$$  

构造性证明（贪心算法）：  
1. 初始化：  
   - 任选 $x_1 \in \text{GF}(q)^n$ 为第一码字  
   - 排除球 $S_{x_1} = \{ z \mid d_H(z, x_1) \leq d-1 \}$  
2. 迭代添加（$i = 2 \to K$)：  
   - 在剩余空间 $\text{GF}(q)^n \setminus \bigcup_{k=1}^{i-1} S_{x_k}$ 中任选 $x_i$  
   - 由构造：$d_H(x_i, x_k) \geq d \quad (\forall k < i)$  
3. 存在性保证：  
   - 条件 (4.30) 保证每步剩余空间非空  

线性码版本：  
当 $K = q^k$ 时，存在线性码满足相同参数。  


### Singleton界 
#### 定理 4.19（Singleton界）：  
对任意 $(n, q^k, d)_q$ 码，有：  
$$
n - k \geq d - 1 \quad \iff \quad k \leq n - d + 1
$$  

证明（擦除纠错视角）：  
1. 擦除容错：最小距离 $d$ 的码可纠正 $d-1$ 个擦除错误（命题 4.1）  
2. 投影操作：  
   - 设删除任意 $d-1$ 个寄存器（位置已知）  
   - 剩余 $n - (d-1)$ 个寄存器值记为 $x_R$  
3. 唯一解码：  
   - 由擦除纠错能力，可从 $x_R$ 唯一重构原始信息  
   - 故不同码字在剩余寄存器上的投影必不同  
4. 鸽巢原理：  
   - 剩余寄存器数 $m = n - d + 1$  
   - 可能取值数 $\leq q^m$  
   - 码字数 $q^k \leq q^m \implies k \leq m = n - d + 1$  


### MDS码：达到Singleton界的最优码  
#### 定义 4.15（MDS码）：  
满足 $k = n - d + 1$ 的线性码称为 最大距离可分码（MDS）。  

特性：  
1. 距离最优：在固定 $n,k$ 下最大化 $d$  
2. 投影可分性：任意 $k$ 个寄存器值唯一确定码字  
   - 由Singleton证明：删除 $d-1$ 个寄存器后仍可解码  


> 注：量子系统中"MDS码"仅指满足量子Singleton界 $k \leq n - 2d + 2$ 的码，其投影性质因不可克隆定理而不成立。


### MDS码的对偶定理  
#### 定理 4.20（MDS对偶性）：  
若 $C$ 是 $[n,k,n-k+1]_q$ MDS码，则其对偶码 $C^\perp$ 是 $[n,n-k,k+1]_q$ MDS码。  

证明（反证法）：  
1. 目标：证 $\text{dist}(C^\perp) \geq k+1$（由Singleton界，其距离上限恰为 $k+1$)  
2. 假设存在低权重码字：  
   - 设 $y \in C^\perp$ 满足 $0 < \text{wt}(y) \leq k$  
   - 记支撑集 $S = \text{supp}(y)$，$|S| = w \leq k$  
3. 构造投影：  
   - 取寄存器集 $R \supseteq S$ 且 $|R| = k$（因 $k \geq w$)  
   - 由MDS投影可分性：对任意 $x' \in \text{GF}(q)^k$，存在码字 $x \in C$ 满足 $x|_R = x'$  
4. 导出矛盾：  
   - 取 $x'$ 使得 $y|_R \cdot x' \neq 0$（因 $y|_R \neq 0$)  
   - 则 $y \cdot x = \sum_{i \in R} y_i x_i \neq 0$  
   - 但 $y \in C^\perp$ 要求 $y \cdot x = 0 \quad (\forall x \in C)$  
5. 结论：不存在权重 $\leq k$ 的非零 $y \in C^\perp$，故 $\text{dist}(C^\perp) \geq k+1$  

示例（RS码对偶）：  
- 原码：$[n,k,n-k+1]_q$ RS码（MDS）  
- 对偶码：$[n,n-k,k+1]_q$ 也是MDS码  
  - 如 $n=7, k=3, q=8$ 时：  
    $$
    C: [7,3,5]_8, \quad C^\perp: [7,4,4]_8
    $$  


### MDS码的量子意义  
量子CSS构造核心定理：  
若存在经典 $[n,k,d]_q$ MDS码 $C$ 满足 $C^\perp \subseteq C$，则可构造量子MDS码：  
$$
[[n, 2k - n, d]]_q \quad \text{其中} \quad 2k - n \geq k - (n - k) = 2k - n
$$  

构造步骤：  
1. 由 $C^\perp \subseteq C$ 确保稳定子定义合法  
2. 量子距离 $d_{\text{quant}} \geq d$  

> 示例：量子Reed-Solomon码  
> - 取 $C$ 为 $[n,k,n-k+1]_q$ RS码  
> - 当 $k > n/2$ 时 $C^\perp \not\subseteq C$，需调整参数  
> - 通过子码构造可得 $[[n, n-2k, k+1]]_q$ 量子MDS码  
