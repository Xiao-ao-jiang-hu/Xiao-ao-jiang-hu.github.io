---
title: 当前物理实现调研
tags:
  - quantum
  - network
categories:
  - paper-reading
  - network
  - routing
index_img: /img/reading.jpg
banner_img: /img/reading.jpg
excerpt: 当前物理实现调研
date: 2026-02-13 21:32:31
---
## 2026.2 Long-lived remote ion-ion entanglement for scalable quantum repeaters
https://www.nature.com/articles/s41586-026-10177-4

纠缠相干时间 ($T_{coh}$)：550 ± 36 ms
平均纠缠建立时间 ($\langle t_{ent} \rangle$)：450 ms（在10 km光纤距离下）。
实验上首次实现 $T_{coh} > \langle t_{ent} \rangle$。
Fidelity：> 90%：在通过 101 km 光纤连接时（渐进极限下）。

## 2025.12 Multi-Mode Quantum Memories for High-Throughput Satellite Entanglement Distribution
https://arxiv.org/abs/2512.00282

相干时间分钟至小时



| 物理平台   | 退相干时间 ($T_2$) | 典型存储效率    | 通信距离 (实验)         |
| :--------- | :----------------- | :-------------- | :---------------------- |
| 金刚石 SiV | 10ms - 1s (核自旋) | >90% (腔增强)   | 10 - 100 km             |
| 冷原子系综 | 0.1ms - 1ms        | 20% - 50%       | 50 - 150 km             |
| 稀土离子   | 1ms - 小时级       | ~30% (多路复用) | 实验室环境(多路复用)    |
| 捕获离子   | 秒级               | 40% - 60%       | < 1 km (主要用于节点内) |