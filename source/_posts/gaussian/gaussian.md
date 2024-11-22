---
layout: blog
title: gaussian
date: 2024-07-30 15:04:15
tags:
    - code
excerpt: Gaussian Splatting & Gaussian Cube代码阅读
---
3DGS论文附带代码仓库提供了论文算法的实现。主要使用的类为GaussianModel和Scene。渲染时构建Scene传入render函数进行训练集和测试集上的渲染。
# Gaussian Splatting
## GaussianModel
高斯点云类，拥有以下成员变量：
- _xyz 
  - 点云中心
  - size(N, 3, 1)
- _features_dc
  - 球谐函数基本系数
  - size(N, 1, 3)
- _features_rest
  - 球谐函数高阶系数
  - size(N, (n+1)^2 -1, 3)
- _opacity
  - 透明度
  - shape(N, 1)
- _rots
  - 协方差的旋转项
  - shape(N, 4)
- _scales
  - 协方差的拉伸项
  - shape(N, 3)

## Scene
内置一个GaussianModel类的实例，存储点云。

保存了相机角度和对应的gt文件信息。

**在自行加载参数渲染时，要先初始化Scene，之后修改Scene实例的gaussians变量，否则在创建Scene时传入的gaussians会被覆盖**

# Gaussian Cube
## ot_structuralization.py
- 对原点云进行分块ot
- 使用o3d保存点云
