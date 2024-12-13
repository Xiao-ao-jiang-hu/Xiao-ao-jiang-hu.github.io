---
layout: blog
title: LL(1) analysis
date: 2024-12-09 13:32:42
tags:
    - signal
excerpt: Signal processing course notes
---
# 自顶向下分析之LL（1）分析
## 三个重要集合
### First集合
First集合是某个符号推出的句型中开头可能出现的终结符集合。

一种直观计算方法如下：**希望寻找某个句型$\alpha$的First集合，则遍历所有的终结符和$\epsilon$，尝试能否推导出该终结符。**($\epsilon \in \text{First}(\alpha) \quad \text{i.f.f} \quad \alpha \rightarrow \epsilon$)

### Follow集合
Follow集合是在推导过程中可能紧跟某符号的终结符集合。

例如，某产生式为$A \rightarrow Ba$，则$a \in \text{Follow}(B)$

一种直观计算方法如下：**希望寻找某个句型的Follow集合，则遍历所有终结符和#，尝试能否推导出该符号紧跟该句型的形式。**

### Select集合
Select集合是指可能选用该产生式的终结符集合。
<span>
$$ \text{Select}(A \rightarrow \alpha) = \begin{align*}
    \begin{cases}
        \text{First}(\alpha),\epsilon \notin \text{First}(\alpha)\\
        (\text{First}(\alpha) - \{\epsilon\})\cup\text{Follow}(\alpha),\epsilon \in \text{First}(\alpha)
    \end{cases}
\end{align*} $$
</span>

## LL(1)文法
我们称满足如下性质的文法为LL(1)文法：
$$ \text{Select}(A \rightarrow \alpha) \cap \text{Select}(A \rightarrow \beta) = \phi $$

## LL(1)文法分析方法
### 递归下降分析
- 每个非终结符对应一个子程序
- 从S开始调用子程序
- 对于产生式右端的符号，从左到右按符号顺序调用子程序：
  - 如果遇到非终结符，则读入待分析串的下一个字符判断是否匹配，如果不匹配则报错
  - 如果遇到终结符，则调用相应的子程序

### 表驱动分析
空栈接受
<span>
- 将栈初始化为$S\#|$
  - 弹栈顶$A$
    - 栈顶是终结符，则**读入**分析串下一个字符判断是否匹配，不匹配则报错
    - 栈顶是非终结符，**查看**分析串，查表$M(A, a)$得到产生式，从右到左入栈
</span>
## 文法变换
### 消除左递归
1. 消除直接左递归
对$P \rightarrow P\alpha | \beta , \beta \neq P\gamma$，变换为$P \rightarrow \beta Q,Q\rightarrow \alpha P|\epsilon$
2. 消除一般左递归

