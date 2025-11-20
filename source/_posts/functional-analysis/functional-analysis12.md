---
title: Ch 3.1 拓扑向量空间
tags:
  - math
  - functional analysis
categories:
  - math
  - functional analysis
index_img: /img/fa.jpg
banner_img: /img/fa.jpg
excerpt: 泛函分析课程笔记
abbrlink: 5d8d4333
date: 2025-11-12 19:39:37
---
# 动机
本章致力于研究Banach空间 $X$ 上的弱拓扑及其对偶空间 $X^*$ 上的弱\*拓扑。借助这些拓扑，$X$ 和 $X^*$ 均成为局部凸Hausdorff拓扑向量空间，此类空间的基本性质在下一节中讨论。特别地，我们证明了 $X^*$ 中的闭单位球是单位球面的弱\*闭包，并且 $X^*$ 上的一个线性泛函关于弱\*拓扑连续，当且仅当它属于典范嵌入 $\iota: X \to X^{**}$ 的像。

本章的核心结果是下一节中的Banach–Alaoglu定理，该定理断言：对偶空间 $X^*$ 中的单位球关于弱\*拓扑是紧的。此定理在数学诸多领域具有重要推论。对偶空间上弱\*拓扑的进一步性质在随后一节中建立。我们证明了 $X^*$ 的一个线性子空间是弱\*闭的，当且仅当它与闭单位球的交集是弱\*闭的。作为Banach–Alaoglu定理的一个推论，反射性Banach空间中的单位球是弱紧的。Eberlein–Šmulian定理指出，这一性质刻画了反射性Banach空间。

下一节中的Kreĭn–Milman定理断言：任意局部凸Hausdorff拓扑向量空间中的非空紧凸子集，都是其极点的凸包。结合Kreĭn–Milman定理与Banach–Alaoglu定理，可以证明：任何紧度量空间的同胚映射均容许一个不变的遍历Borel概率测度。此类遍历测度的一些性质在最后一节中探讨。