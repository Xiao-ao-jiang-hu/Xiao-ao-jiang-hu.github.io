---
title: 经典纠错码
tags:
  - no tags
categories:
  - uncategorized
excerpt: no excerpt
date: 2025-06-24 02:19:41
---
## 经典纠错码的相关表示

### 经典纠错码的抽象定义
#### 定义 4.1（经典纠错码）：  
一个经典纠错码由以下两部分构成：
- 编码映射 $e: [K] \to [N]$，其中 $[K] = \{1, \dots, K\}$ 是信息集合，$[N] = \{1, \dots, N\}$ 是编码后的状态集合。
- 可纠正错误集合 $\mathcal{E}$，其中每个错误 $E: [N] \to [M]$ 是作用于编码状态的映射。  
要求存在解码映射 $d: [M] \to [K]$，满足对所有 $x \in [K]$ 和 $E \in \mathcal{E}$：  
$$
d(E(e(x))) = x.
$$  
此时，码字集合 $C = e([K]) \subseteq [N]$ 称为该码的码本。

理解：  
- 编码 $e$ 将信息 $x$ 映射为码字 $c = e(x)$。  
- 错误 $E$ 将码字 $c$ 篡改为 $E(c)$。  
- 解码 $d$ 需从篡改后的状态恢复原始信息 $x$。  
- 关键条件：不同码字在错误作用下不能混淆。：存在 $x \neq y$ 和 $E, F \in \mathcal{E}$ 使得 $E(e(x)) = F(e(y))$，则解码失败。

与量子纠错码的对比：  
| 经典码 | 量子码 |
|------------|------------|
| 状态为离散集合中的元素 | 状态为希尔伯特空间中的向量 |
| 任意映射 $e, d, E$ | 映射需为线性算子（量子操作） |
| 混淆条件：$E(e(x)) \neq F(e(y))$ | 正交条件：$\langle \psi_i \| E_a^\dagger E_b \| \psi_j \rangle = 0$（对 $i \neq j$) |
| 环境学习数据无害 | 环境学习数据会破坏量子态（需额外约束 $i = j$ 条件） |


### 经典码的距离与纠错能力
#### 定义 4.2（码的距离）：  
设 $C \subseteq [q^n]$ 是码本（$q$ 为符号集大小，$n$ 为码长）。其距离 $d$ 定义为：  
$$
d = \min \big\{ d_H(c_1, c_2) \mid c_1, c_2 \in C,\ c_1 \neq c_2 \big\},
$$  
其中 $d_H$ 是汉明距离（两码字不同位置的个数）。  
该码记为 $(n, K, d)_q$（$q=2$ 时简写为 $(n, K, d)$）。

几何解释：  
- $d$ 是码本中任意两不同码字的最小汉明距离。  
- 等价定义：$d = \min \{ w(E) \mid E(c_1) = c_2 \text{ for some } c_1 \neq c_2 \}$（$w(E)$ 为错误 $E$ 的权重）。

#### 命题 4.1（距离的纠错意义）：  
距离为 $d$ 的经典码可：  
1. 纠正任意错误：权重不超过 $t = \lfloor (d-1)/2 \rfloor$ 的错误。  
2. 纠正擦除错误：至多 $d-1$ 个位置丢失符号（已知错误位置）。  
3. 检测错误：权重不超过 $d-1$ 的错误。

证明：  
1. 纠正任意错误（权重 $\leq t$）：  
- 思路：接收向量 $r$ 与真实码字 $c$ 的汉明距离 $\leq t$，需证 $r$ 唯一对应 $c$。  
- 反证：假设存在另一码字 $c'$ 满足 $d_H(r, c') \leq t$，则：  
  $$
  d_H(c, c') \leq d_H(c, r) + d_H(r, c') \leq 2t \leq d-1 < d,
  $$  
  与距离定义矛盾（因 $d_H(c, c') \geq d$）。  
- 结论：以 $r$ 为中心、半径 $t$ 的汉明球仅包含唯一码字 $c$，故可解码为 $c$。

2. 纠正擦除错误（至多 $d-1$ 个）：  
- 思路：擦除指已知错误位置但符号丢失。设擦除位置集 $S$，$|S| = e \leq d-1$。  
- 唯一性：对任意两码字 $c_1 \neq c_2$，在非擦除位置集 $S^c$ 上，$c_1$ 与 $c_2$ 必须不同（否则 $d_H(c_1, c_2) \leq e < d$，矛盾）。  
- 结论：通过 $S^c$ 上的符号可唯一确定码字。

3. 检测错误（权重 $\leq d-1$）：  
- 思路：若接收向量 $r$ 非码字，则检测到错误。  
- 唯一性：若错误权重 $w \leq d-1$，则 $d_H(r, c) = w \leq d-1$，故 $r$ 不可能是其他码字（因码字间距 $\geq d$）。  
- 结论：当 $r \notin C$ 时，可断言发生错误。


### 示例：重复码
考虑 $(3, 2, 3)$ 重复码：  
- 编码：$0 \to 000$，$1 \to 111$。  
- 距离：$d_H(000, 111) = 3 = d$。  
- 纠错能力：  
  - 纠正单比特错误（$t = \lfloor (3-1)/2 \rfloor = 1$）：  
    - $000 \to \{000, 100, 010, 001\}$  
    - $111 \to \{111, 011, 101, 110\}$  
    接收向量（如 $100$）唯一对应发送码字 $000$。  
  - 纠正双擦除错误：若丢失任意两符号，剩余符号仍可解码（如 $0?\,?$ 解码为 $000$）。  
  - 检测双比特错误：若接收 $110$（非码字），可检测错误发生。




## 经典线性码

### 经典线性码的代数结构
定义 4.3（线性码）：  
设 $C \subseteq \mathbb{Z}_2^n$ 是 $\mathbb{Z}_2^n$ 的子空间，满足：  
$$
\forall x, y \in C, \quad x + y \in C
$$  
则 $C$ 称为 线性码。其维度为 $k$，包含 $2^k$ 个码字，记为 $[n, k, d]$ 码（$d$ 为距离）。

生成矩阵 $G$（定义 4.4）：  
- $G$ 是 $k \times n$ 矩阵，行向量为 $C$ 的基  
- 编码映射：$v \in \mathbb{Z}_2^k \mapsto G^T v \in \mathbb{Z}_2^n$  
- 码字判定：$x \in C \iff \exists v \in \mathbb{Z}_2^k, \, x = G^T v$

校验矩阵 $H$（定义 4.5）：  
- $H$ 是 $(n-k) \times n$ 矩阵，行向量满足：  
  $$
  Gy_i = 0 \quad (\forall i)
  $$  
- $\{y_i\}$ 是满足条件 $G y_i = 0$ 的极大线性无关组

定理 4.3（矩阵关系）：  
$$
G H^T = 0, \quad H G^T = 0
$$  
证明：  
1. 设 $G$ 的行向量为 $g_1, \dots, g_k$，$H$ 的行向量为 $h_1, \dots, h_{n-k}$  
2. 由定义：$G h_j^T = 0$（因 $G y_j = 0$)  
3. 故 $G H^T$ 的 $(i,j)$ 元为 $g_i h_j^T = 0$，即 $G H^T = 0$  
4. 转置得 $H G^T = 0$  
5. $\text{rank}(H) = n-k$：  
   - $G$ 的 $k$ 个行向量线性无关  
   - 约束 $G y = 0$ 的解空间维数为 $n - k$  
   - 故极大线性无关组 $\{y_i\}$ 含 $n-k$ 个向量  


### 距离的简化计算与纠错条件  
命题 4.5（线性码距离）：  
距离 $d = \min \{ \text{wt}(e) \mid e \in C, \, e \neq 0 \}$  
证明：  
1. 一般定义：$d = \min \{ d_H(x,y) \mid x \neq y \in C \}$  
2. 设 $e = x + y$，由线性性 $e \in C$  
3. $x \neq y \iff e \neq 0$  
4. $d_H(x,y) = \text{wt}(x + y) = \text{wt}(e)$  
5. 故 $d = \min_{e \in C \setminus \{0\}} \text{wt}(e)$

定理 4.6（可纠正错误条件）：  
设错误集 $\mathcal{E} \subseteq \mathbb{Z}_2^n$，则以下等价：  
1. $C$ 可纠正 $\mathcal{E}$  
2. $\forall e \neq f \in \mathcal{E}, \, e + f \notin C$  
3. $\forall e \neq f \in \mathcal{E}, \, H e \neq H f$  

证明：  
（1）⇒（2）：  
- 假设 $\exists e \neq f \in \mathcal{E}$ 使 $e + f \in C$  
- 取 $x \in C$，令 $y = x + (e + f) \in C$  
- 则 $x + e = y + f$  
- 接收向量 $r = x + e$ 无法区分：  
  - 若解码为 $x$（错误 $e$)  
  - 或解码为 $y$（错误 $f$)  

（2）⇔（3）：  
- $e + f \in C \iff H(e + f) = 0 \iff H e = H f$  
- 因 $C = \{ x \mid H x = 0 \}$  

（3）⇒（1）：  
- 接收向量 $r = x + e$  
- 计算症状 $s = H r = H e$  
- 症状唯一确定 $e$（因 $H e \neq H f$ for $e \neq f$)  
- 解码：$x = r + e$  


### 与量子稳定子码的转换  
定理 4.4（线性码→稳定子码）：  
设经典线性码 $C$ 的校验矩阵为 $H$，定义量子稳定子码：  
- 稳定子生成元：将 $H$ 的每行 $h_i$ 映射为 $Z$ 算子  
  $$
  g_i = Z^{h_{i1}} \otimes \cdots \otimes Z^{h_{in}}
  $$  
- 二进制表示：稳定子的辛表示为 $(0 \mid H)$  
则：  
1. 基底态为 $\lvert x \rangle$（$x \in C$)  
2. 可纠正错误集 $\mathcal{E}_{\text{quant}} = \{ \lvert e \rangle \mid e \in \mathcal{E} \}$  

证明思路：  
1. 基底态验证：  
   - $g_i \lvert x \rangle = (-1)^{h_i \cdot x} \lvert x \rangle$  
   - $H x = 0 \iff h_i \cdot x = 0 \quad (\forall i) \iff g_i \lvert x \rangle = \lvert x \rangle$  
2. 错误纠正：  
   - 量子症状 $\langle g_i \rangle = (-1)^{(H e)_i}$  
   - 经典症状 $H e$ 唯一确定 $e$ ⇒ 量子症状唯一确定错误  

深层对比：  
| 经典线性码       | 量子稳定子码         |
|----------------------|--------------------------|
| 校验矩阵 $H$       | 稳定子生成元 $\{g_i\}$ |
| 症状 $s = H e$     | 错误症状 $\langle g_i \rangle$ |
| 行线性组合等价       | 生成元乘积等价           |
| 无非简并概念         | 存在简并码（环境获信息） |



### 实例
#### 汉明码：单比特纠错码  
构造思路：  
1. 观察：单比特错误 $e_i$ 的症状 $s = H e_i$ 等于 $H$ 的第 $i$ 列  
2. 设计原则：使所有单比特错误的症状唯一  
   - 校验矩阵 $H$ 的列取遍所有非零二元向量  
   - 列数 $n = 2^r - 1$（排除全零列）  
   - 行数 $r$（症状长度）  

##### 定义 4.8（汉明码）：  
- 参数：$[2^r - 1, 2^r - r - 1, 3]$  
- 校验矩阵 $H$：$r \times (2^r - 1)$ 矩阵，列向量为所有非零 $r$-bit 向量  

示例（$r=3$）：  
$$
H = \begin{pmatrix}
1 & 1 & 1 & 0 & 1 & 0 & 0 \\
1 & 1 & 0 & 1 & 0 & 1 & 0 \\
1 & 0 & 1 & 1 & 0 & 0 & 1
\end{pmatrix}
$$  
- 列对应错误位置：  
  | 列号 | 二进制 | 错误位置 |  
  |------|--------|----------|  
  | 1    | 001    | bit 1    |  
  | 2    | 010    | bit 2    |  
  | 3    | 011    | bit 3    |  
  | 4    | 100    | bit 4    |  
  | 5    | 101    | bit 5    |  
  | 6    | 110    | bit 6    |  
  | 7    | 111    | bit 7    |  

生成矩阵（以 $r=3$ 为例）：  
$$
G = \begin{pmatrix}
1 & 0 & 0 & 0 & 1 & 1 & 1 \\
0 & 1 & 0 & 0 & 1 & 1 & 0 \\
0 & 0 & 1 & 0 & 1 & 0 & 1 \\
0 & 0 & 0 & 1 & 0 & 1 & 1
\end{pmatrix}
$$  
- 满足 $G H^T = 0$  
- 行空间维度 $k = 4$（共 $2^4 = 16$ 个码字）  

纠错能力证明：  
1. 距离 $d=3$：  
   - 任意两列线性无关 ⇒ 无权重2码字  
   - 存在三列线性相关（如列1+列2+列3=0）⇒ 最小权重3  
2. 单比特纠错：  
   - 接收向量 $r = c + e_i$  
   - 症状 $s = H r = H e_i =$ 第 $i$ 列  
   - 唯一确定错误位置 $i$，解码 $c = r + e_i$  

最优性分析：  
- 可能症状数：$2^r - 1 = n$  
- 单比特错误数：$n$  
- 完美匹配：症状与错误一一对应，无冗余  


#### 2. 里德-穆勒码：多阶可调纠错码  
构造思路：  
1. 几何视角：将 $n=2^m$ 个比特视为 $m$-维超立方体的顶点  
2. 生成元：  
   - 基向量 $v_i$：第 $j$ 位 = $j$ 的二进制表示的第 $i$ 位  
   - 乘积向量：$v_{i_1} \odot \cdots \odot v_{i_k}$（按位与）  
3. 阶数控制：$\mathcal{R}(r,m)$ 包含所有 $\leq r$ 个向量的乘积  

##### 定义 4.9（$\mathcal{R}(1,m)$）：  
- 生成矩阵行：全1向量 + $\{v_i\}_{i=1}^m$  
- 参数：$[2^m, m+1, 2^{m-1}]$  

示例（$m=3$）：  
$$
\begin{align*}
v_1 &= (00001111) \\
v_2 &= (00110011) \\
v_3 &= (01010101) \\
G &= \begin{pmatrix}
1 & 1 & 1 & 1 & 1 & 1 & 1 & 1 \\
0 & 0 & 0 & 0 & 1 & 1 & 1 & 1 \\
0 & 0 & 1 & 1 & 0 & 0 & 1 & 1 \\
0 & 1 & 0 & 1 & 0 & 1 & 0 & 1
\end{pmatrix}
\end{align*}
$$  
- 最小权重码字：$v_1 + v_2 = (00110011) + (00001111) = (00111100)$ 权重4  

##### 定义 4.10（$\mathcal{R}(r,m)$）：  
- 生成矩阵行：所有 $\leq r$ 个 $v_i$ 的乘积（按位与）  
- 参数：$[2^m, N(r,m), 2^{m-r}]$，其中 $N(r,m) = \sum_{i=0}^r \binom{m}{i}$  

示例（$\mathcal{R}(2,3)$）：  
- 新增生成元：$v_1v_2, v_1v_3, v_2v_3$  
$$
\begin{align*}
v_1v_2 &= (00000011) \\
v_1v_3 &= (00000101) \\
v_2v_3 &= (00010001) \\
G &= \left[\begin{array}{c}
\vec{1}^T \\
v_1 \\
v_2 \\
v_3 \\
v_1v_2 \\
v_1v_3 \\
v_2v_3
\end{array}\right]
\end{align*}
$$  
- 总维度 $N(2,3) = 1 + 3 + 3 = 7$，距离 $2^{3-2} = 2$  

##### 定理 4.8（距离 $d=2^{m-r}$ 的归纳证明）：  
基例：  
- $\mathcal{R}(1,m)$：距离 $2^{m-1}$（定理 4.7）  
- $\mathcal{R}(r,r)$：最小码字 $v_1\cdots v_r$ 权重 $1 = 2^{r-r}$  

归纳假设：  
- $\mathcal{R}(r-1,m)$ 距离 $2^{m-r+1}$  
- $\mathcal{R}(r,m)$ 距离 $2^{m-r}$  

##### Claim 4.9：$\mathcal{R}(r,m+1)$ 距离 $2^{m+1-r}$  
证明：  
设非零码字 $c \in \mathcal{R}(r,m+1)$，分解：  
$$
c = c_0 + v_1 \cdot d \quad (c_0 \in \mathcal{R}(r,m), \, d \in \mathcal{R}(r-1,m))
$$  
按 $v_1$ 取值分区间：  
- 前 $2^m$ 位（$v_1=0$）：仅 $c_0$ 贡献  
- 后 $2^m$ 位（$v_1=1$）：$c_0 + d$  

情况分析：  
1. $c_0 = 0$：  
   - 后 $2^m$ 位为 $d \in \mathcal{R}(r-1,m)$，权重 $\geq 2^{m-r+1}$  
   - 总权重 $\geq 2^{m-r+1} = 2^{(m+1)-r}$  
2. $d = 0$：  
   - 前后 $2^m$ 位均为 $c_0$，权重各 $\geq 2^{m-r}$  
   - 总权重 $\geq 2 \times 2^{m-r} = 2^{m-r+1}$  
3. $c_0 \neq 0, d \neq 0$：  
   - 前 $2^m$ 位：$c_0$ 权重 $\geq 2^{m-r}$  
   - 后 $2^m$ 位：$c_0 + d \in \mathcal{R}(r,m)$ 权重 $\geq 2^{m-r}$  
   - 总权重 $\geq 2^{m-r} + 2^{m-r} = 2^{m-r+1}$  


#### 量子化
汉明码的量子化：  
- 经典 $[7,4,3]$ 汉明码 → 量子 Steane 码 $[7,1,3]$  
- 构造：  
  $$
  \text{稳定子} = \langle X^H, Z^H \rangle \quad \text{（经典 } H \text{ 映射为 } Z \text{ 和 } X \text{ 算子）}
  $$  
- 可纠正任意单量子比特错误  

RM码的量子化：  
- $\mathcal{R}(r,m)$ → 量子 RM 码 $\mathcal{QR}(r,m)$  
- 构造：  
  $$
  \mathcal{QR}(r,m) = \mathcal{R}(r,m) \times \mathcal{R}(r,m)^\perp \quad \text{(CSS 构造)} 
  $$  
- 参数：$[[2^m, k, d]]$ 其中 $k = \binom{m}{r} - \binom{m}{r-1}$  


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
