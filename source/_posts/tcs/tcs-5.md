---
title: TCS Lec5总结
tags:
  - tcs
categories:
  - tcs
index_img: /img/tcs.jpg
banner_img: /img/tcs.jpg
excerpt: 本节系统介绍了时间复杂性理论，包括图灵机与RAM模型下的运行时间定义、大O记号、回文问题的复杂性分析、复杂性类TIME(t(n))与P、扩展Church-Turing论题，以及时间层级定理（Time Hierarchy Theorem）及其证明与推论。
abbrlink: 6d7d3b59
date: 2025-05-26 14:14:33
---

### **第一部分：时间复杂性的基本概念**

#### **1.1 回文问题（PAL）作为动机**
- **问题定义**：
  $$
  \text{PAL} = \{ w \mid w^R = w \}
  $$
- **例子**：苏轼《西江月·咏梅》、英文回文小说等。
- **计算模型**：
  - 有限自动机无法识别 PAL（需无限状态记忆）。
  - 图灵机或通用编程语言（如 Python）可解决。

#### **1.2 图灵机的时间复杂性定义**
- **运行时间**：TM 在输入长度为 $n$ 时**最坏情况**下的步数。
  $$
  T_A(n) = \max_{\substack{x \in \Sigma^* \\ |x| = n}} \text{steps}(A, x)
  $$
- **回文机 P 的分析**：
  - 每轮比较首尾字符，共 $n/2$ 轮。
  - 第 $i$ 轮移动约 $n - 2(i-1)$ 步。
  - 总步数：
    $$
    T(n) = \sum_{k=1}^{n} k = \frac{1}{2}n^2 + \frac{3}{2}n + 1 = \Theta(n^2)
    $$

#### **1.3 为何采用最坏情况？**
- **优点**：对所有输入提供性能保证。
- **缺点**：可能过于悲观（如平均情况更好）。
- **替代方案**：平均情况复杂性、平滑分析（Spielman & Teng, 2002）。


### **第二部分：渐近记号与递归关系**

#### **2.1 大O记号**
- **定义**（$f, g: \mathbb{N} \to \mathbb{N}$）：
  - $f(n) = O(g(n))$：$\exists c, n_0 > 0$，$\forall n \ge n_0$，$f(n) \le c g(n)$。
  - $f(n) = \Omega(g(n))$：$\exists c, n_0 > 0$，$\forall n \ge n_0$，$f(n) \ge c g(n)$。
  - $f(n) = \Theta(g(n))$：$f(n) = O(g(n))$ 且 $f(n) = \Omega(g(n))$。

- **常见函数增长阶**（从小到大）：
  $$
  O(1) \prec O(\log^* n) \prec O(\log \log n) \prec O(\log n) \prec O(\sqrt{n}) \prec O(n) \prec O(n \log n) \prec O(n^{1.5}) \prec O(n^2) \prec O(2^n) \prec O(n!) \prec O(2^{2^n})
  $$

#### **2.2 递归关系与主定理**
- **形式**：$T(n) = a T(n/b) + f(n)$
- **例子**：
  - 二分查找：$T(n) = T(n/2) + O(1) \Rightarrow T(n) = O(\log n)$
  - 归并排序：$T(n) = 2T(n/2) + O(n) \Rightarrow T(n) = O(n \log n)$


### **第三部分：计算模型与内在复杂性**

#### **3.1 内在时间复杂性下界**
- **定理**：任何解决 PAL 的单带图灵机需 $\Omega(n^2)$ 时间。
- **证明思路**（对手论证）：
  - 若算法在 $n-2$ 步内停机，则至少有两个位置未被读取。
  - 修改这两个位置可翻转答案，导致错误。

#### **3.2 RAM 模型**
- **特点**：
  - 支持随机访问内存（一步读/写任意地址）。
  - 含有限寄存器，支持算术与数据移动操作。
- **与 TM 关系**：
  - RAM 可在 $O(n)$ 时间解决 PAL（双指针法）。
  - RAM 与多带 TM **多项式等价**：任何 RAM 算法可在 TM 上以多项式慢模拟。

#### **3.3 Python 代码的时间复杂性争议**
```python
def OneLinePal(x): return x == x[::-1]
```
- **问题**：
  1. `x[::-1]` 创建新字符串，耗时 $\Theta(n)$。
  2. 字符串比较耗时 $\Theta(n)$。
- **结论**：实际为 $\Theta(n)$，但依赖于**模型假设**（如字符串操作是否为单位时间）。


### **第四部分：时间复杂性类**

#### **4.1 定义**
- **TIME(t(n))**：可在 $O(t(n))$ 时间内由**确定性图灵机**判定的语言类。
- **P 类**：
  $$
  \mathsf{P} = \bigcup_{c > 0} \mathsf{TIME}(n^c)
  $$
  - 包含“高效可解”问题（如最短路径、最大流、线性规划）。
  - **注意**：$n^{100} \in \mathsf{P}$ 但实践中不可行；$\mathsf{P}$ 是理论抽象。

- **EXP 类**：
  $$
  \mathsf{EXP} = \bigcup_{c > 0} \mathsf{TIME}(2^{n^c})
  $$

#### **4.2 扩展 Church-Turing 论题（ECTT）**
> 所有“合理”的计算模型在**多项式时间内等价**。

- **意义**：
  - $\mathsf{P}$ 是**模型无关**的高效计算类。
  - 量子计算虽可能加速（如 Shor 算法），但**不违反 ECTT**（因 BQP ⊆ EXP）。


### **第五部分：时间层级定理（Time Hierarchy Theorem）**

#### **5.1 定理陈述**
> **定理**：设 $t(n) \ge n \log n$ 为**时间可构造函数**（time-constructible），则存在语言 $A$ 满足：
> $$
> A \in \mathsf{TIME}(t(n)) \quad \text{但} \quad A \notin \mathsf{TIME}\left(o\left(\frac{t(n)}{\log t(n)}\right)\right)
> $$
> 即：
> $$
> \mathsf{TIME}\left(o\left(\frac{t(n)}{\log t(n)}\right)\right) \subsetneq \mathsf{TIME}(t(n))
> $$

- **时间可构造函数**：存在 TM 在输入 $1^n$ 时，输出 $t(n)$ 的二进制表示，且耗时 $O(t(n))$。
  - **例子**：$n \log n$, $n^2$, $2^n$。
  - **非例子**：$\sqrt{n}$, $n$（因输出长度 $\log n$ 已超时间）。

#### **5.2 证明概要（对角化）**
构造判定器 $D$：
> $D =$ “On input $w$:  
> 1. 计算 $n = |w|$，利用时间可构造性计算 $t(n)$；  
> 2. 将 $w$ 解析为 $\langle M \rangle 10^*$（填充技巧）；  
> 3. 模拟 $M$ 在 $w$ 上运行，最多 $\frac{t(n)}{\log t(n)}$ 步；  
> 4. 若 $M$ 接受则拒绝，否则接受。”

- **关键点**：
  - **模拟开销**：单带 TM 模拟需 $O(\log t(n))$ 倍时间（因需维护计数器与状态）。
  - **总时间**：$\frac{t(n)}{\log t(n)} \cdot \log t(n) = O(t(n))$。
  - **矛盾**：若存在 $M$ 在 $o(t(n)/\log t(n))$ 时间判定 $L(D)$，则 $D$ 会与 $M$ 输出相反。

#### **5.3 推论**
1. **严格包含**：
   $$
   \mathsf{TIME}(n^{c_0}) \subsetneq \mathsf{TIME}(n^{c_1}) \quad \text{对所有 } c_1 > c_0 \ge 1
   $$
2. **P ⊊ EXP**：
   - 取 $t(n) = 2^n$，则 $\mathsf{P} \subseteq \mathsf{TIME}(n^k) \subsetneq \mathsf{TIME}(2^n) \subseteq \mathsf{EXP}$。

#### **5.4 间隙定理（Gap Theorem）**
> 存在可计算函数 $g(n)$，使得：
> $$
> \mathsf{TIME}(g(n)) = \mathsf{TIME}(2g(n))
> $$

- **意义**：时间层级定理**依赖时间可构造性**；若放弃该条件，可能存在“复杂性间隙”。


### **第六部分：总结**

- **核心思想**：
  - **资源限制决定可解性**：更多时间 ⇒ 更多可解问题。
  - **对角化是证明不可解性的强大工具**（从停机问题到层级定理）。
- **开放问题**：
  - 是否存在自然问题位于 $\mathsf{P}$ 与 $\mathsf{NP}$ 之间？
  - 能否消除时间层级定理中的 $\log t(n)$ 间隙？
- **实践启示**：
  - 算法设计应关注**最坏情况**与**渐近行为**。
  - $\mathsf{P}$ 虽为理论模型，但指导了高效算法的开发（如 FFT、Dijkstra）。