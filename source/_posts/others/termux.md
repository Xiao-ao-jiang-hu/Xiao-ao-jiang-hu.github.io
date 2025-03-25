---
layout: blog
title: 安卓搞机日志
date: 2025-3-24 20:30:00
tags:
    - android
    - harmony os
---
不失一般性地，假设我们有一个华为平板。作为一个具有大于12英寸屏幕的设备，自然地我们希望配置一个开发环境进行开发。然而，向系财务申请报销并在一个月内拿到报销款的概率都比安卓系统原生支持apt-get的概率大。我的某室友云："这屏都能裁成三个vim窗口了，咋不直接买笔记本？"我望着账单沉默了三秒，突然想起校图书馆《Linux从入门到放弃》扉页写着：真正的极客能把微波炉刷成ArchLinux。

## Termux
经常地，配置一个良好的开发环境从打开一个终端开始。Termux是一个在安卓上运行的终端模拟器，支持大部分Linux命令。它不靠虚拟机也不走双系统，直接在ARM架构上构建起完整的包生态。Termux通过proot实现文件系统隔离，就像在客厅里搭了个透明玻璃房。你在里面敲apt install python时，安卓本体系统只会觉得有人在安静地拼乐高。

### 安装
进入[Termux仓库](https://github.com/termux/termux-app)，进入Releases，下载最新的apk安装包
![](/img/releases.jpeg)
安装后打开：
![](termux.jpeg)

## proot
### 为何套娃永动机
Termux自带的proot就像宿舍床位——能摆下课本水杯，但开小灶炖红烧肉就会被楼长邀请谈话。原装环境虽然预置了apt，但/usr目录仍然被锁在sandbox里。

### 三重套娃奥义

1. 权限隔离：Termux的proot仅够它自己玩转基础包，而Debian套娃相当于在阳台搭违建——既能保留原宿舍床位（Termux原生环境），又能在新地盘炖红烧肉（sudo rm -rf / ，反正炸不穿安卓的SeLinux防火墙）

2. 环境完整性：原生Termux的/data目录结构像308的柜子，而Debian镜像自带标准Linux骨架。

3. 软件生态：例如，Termux仓库的gcc可能砍了Fortran编译腿，而Debian源里的开发工具都是全须全尾的。

### 套娃实操
1. `pkg install proot proot-distro` 安装proot
2. `proot-distro install <your distro choice>` （这里我选用了debian，因为不希望snap在存储里拉屎，你可以使用`proot-distro list`命令查看所有可选的发行版）


## xfce4


## vscode+ssh
