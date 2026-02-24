---
title: OpenClaw 架构概览
tags:
  - openclaw
  - agent
categories:
  - others
abbrlink: b7d4662d
date: 2026-02-23 15:57:02
---
## 整体架构

```text
┌─────────────────────────────────────────────────────────────────┐
│                           Channels                              │
│  ┌──────────┐ ┌──────────┐ ┌───────┐ ┌────────┐ ┌────────────┐  │
│  │ WhatsApp │ │ Telegram │ │ Slack │ │ Discord│ │   Signal   │  │
│  └──────────┘ └──────────┘ └───────┘ └────────┘ └────────────┘  │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌────────────────────┐  │
│  │iMessage  │ │GoogleChat│ │ MS Teams │ │ Matrix/Zalo/etc.   │  │
│  └──────────┘ └──────────┘ └──────────┘ └────────────────────┘  │
└────────────────────────────┬────────────────────────────────────┘
                             │ WebSocket / HTTP
                             ▼
┌────────────────────────────────────────────────────────────────┐
│                             Gateway                            │
│  ┌────────────────────────────────────────────────────────────┐│
│  │                  WebSocket Server                          ││
│  └────────────────────────────────────────────────────────────┘│
│                                                                │
│  ┌──────────────┐ ┌──────────────┐ ┌──────────────────────┐    │
│  │ Session Mgr  │ │ Tool Orch.   │ │ Node Registry        │    │
│  └──────────────┘ └──────────────┘ └──────────────────────┘    │
│                                                                │
│  ┌──────────────┐ ┌──────────────┐ ┌──────────────────────┐    │
│  │ Pairing      │ │ Auth/Policy  │ │ Event Bus            │    │
│  └──────────────┘ └──────────────┘ └──────────────────────┘    │
│                                                                │
│  ┌────────────────────────────────────────────────────────────┐│
│  │              Agent Runtime (pi-mono based)                 ││
│  └────────────────────────────────────────────────────────────┘│
└────────────────────────────────────────────────────────────────┘
                             │
              ┌──────────────┴──────────────┐
              │                             │
              ▼                             ▼
    ┌─────────────────┐           ┌─────────────────┐
    │   Control       │           │    Nodes        │
    │   Clients       │           │                 │
    │                 │           │                 │
    │ ┌─────────────┐ │           │ ┌─────────────┐ │
    │ │macOS Menubar│ │           │ │ macOS Node  │ │
    │ │ Application │ │           │ │ (App Mode)  │ │
    │ └─────────────┘ │           │ └─────────────┘ │
    │                 │           │                 │
    │ ┌─────────────┐ │           │ ┌─────────────┐ │
    │ │ CLI Tools   │ │           │ │ iOS Node    │ │
    │ │ openclaw    │ │           │ │ App         │ │
    │ └─────────────┘ │           │ └─────────────┘ │
    │                 │           │                 │
    │ ┌─────────────┐ │           │ ┌─────────────┐ │
    │ │ Web UI      │ │           │ │ Android     │ │
    │ │ Dashboard   │ │           │ │ Node App    │ │
    │ └─────────────┘ │           │ └─────────────┘ │
    │                 │           │                 │
    │ ┌─────────────┐ │           │ ┌─────────────┐ │
    │ │ Automation  │ │           │ │ Headless    │ │
    │ │ Scripts     │ │           │ │ Node Host   │ │
    │ └─────────────┘ │           │ └─────────────┘ │
    └─────────────────┘           └─────────────────┘
```

## 核心组件

### Gateway
单一控制平面，所有消息和工具调用的中枢。作为 WebSocket 服务器，处理客户端和节点连接，管理会话状态，隔离多会话，编排工具调用，验证权限，分发事件（agent events, presence, health）等。

可以暴露到公网，支持 Tailscale Serve/Funnel 和 SSH 隧道访问。采用 Token 认证或 Tailscale 身份验证。

**代码位置**：`src/gateway/`

### Agent Runtime
基于 pi-mono 的嵌入式运行时。整个架构中唯一调用LLM的组件，负责执行 Agent 逻辑。核心流程为：
1. 接收消息和会话上下文
2. 构建 System Prompt 和用户提示
3. 调用 LLM 进行推理
4. 解析模型输出，执行工具调用
5. 处理工具结果，生成响应
6. 维护会话状态和历史
7. 触发相关通信事件


**代码位置**：`src/agents/`, `src/auto-reply/`

### Nodes
连接到 Gateway 的设备，暴露设备特定能力。接收工具调用并执行，返回结果。支持多平台（macOS/iOS/Android/Linux/Windows），不同形态（App/Headless）。通过 WebSocket 连接，使用设备 Token 认证。节点能力由连接时声明，包含系统控制（如 screen recording, camera access）和工具调用权限。


**代码位置**：
- Gateway 端：`src/gateway/server-methods/nodes.ts`
- macOS：`apps/macos/`
- iOS：`apps/ios/`
- Android：`apps/android/`

### Channels

**内置渠道**：
- WhatsApp (Baileys)
- Telegram (grammY)
- Slack (Bolt)
- Discord (discord.js)
- Signal (signal-cli)
- iMessage (BlueBubbles / 原生)
- Google Chat

**扩展渠道** (Plugins)：
- Microsoft Teams
- Matrix
- Zalo / Zalo Personal

**代码位置**：`src/telegram/`, `src/discord/`, `src/slack/`, `extensions/`

### Skills
类似自定义prompt，用自然语言指导Agent执行特定任务。
**来源**：
1. Bundled（安装包附带）
2. Managed (`~/.openclaw/skills`)
3. Workspace (`<workspace>/skills`)
4. ClawHub (在线 registry)

**Gate 机制**：
- 二进制依赖检查
- 环境变量检查
- 配置项检查
- 平台限制

**代码位置**：`src/agents/skills/`

### Tools
Agent 可调用的功能接口，抽象外部能力。分为系统工具（如文件操作、运行时命令）和设备工具（如 screen recording, camera）。工具调用通过 Gateway 直接执行或转发到 Nodes 执行，结果返回 Agent 进行后续处理。可以通过自己写ts代码实现，也可以通过 Skills 封装成更高层次的能力。

**分类**：
| 类别     | 工具                           | 描述                    |
| -------- | ------------------------------ | ----------------------- |
| 文件系统 | read, write, edit, apply_patch | 文件操作                |
| 运行时   | exec, process                  | Shell 命令和进程管理    |
| Web      | web_search, web_fetch          | 网络搜索和抓取          |
| 内存     | memory_search, memory_get      | 语义记忆                |
| 会话     | sessions_*, session_status     | 会话管理                |
| UI       | browser, canvas                | 浏览器和 Canvas 控制    |
| 消息     | message                        | 消息发送                |
| 自动化   | cron, gateway                  | 定时任务和 Gateway 控制 |
| 节点     | nodes                          | 设备控制                |
| 媒体     | image, tts                     | 图像和语音              |

**权限控制**：
- Profile 基础限制 (minimal/coding/messaging/full)
- Allow/Deny 列表
- Provider 特定策略

**代码位置**：`src/agents/tools/`

## 通信协议

### WebSocket 协议

**传输**：WebSocket 文本帧 (JSON)

**帧类型**：
- `connect`：握手（必须是第一帧）
- `req`：请求 `{type:"req", id, method, params}`
- `res`：响应 `{type:"res", id, ok, payload/error}`
- `event`：服务器推送 `{type:"event", event, payload, seq}`

**认证**：
- Token 认证：`connect.params.auth.token`
- Tailscale 身份头（Serve 模式）

### 节点协议扩展

节点连接时在 `connect` 中声明：
```json
{
  "role": "node",
  "identity": {
    "deviceId": "uuid",
    "platform": "macos",
    "capabilities": ["canvas.*", "camera.*", "system.run"],
    "permissions": {"screenRecording": true, "camera": true}
  }
}
```

## 数据流

### 消息处理流

```
WhatsApp/Telegram/etc.
        ↓
   Channel Monitor
        ↓
   Message Received Hook
        ↓
   Session Resolution
        ↓
   Agent Job Queue
        ↓
   Agent Loop (Pi Runtime)
        ↓
   Tool Calls → Gateway → Nodes/Host
        ↓
   Response Assembly
        ↓
   Message Sending Hook
        ↓
   Channel Send
        ↓
   User
```

### 设备控制流

```
Agent Tool Call (nodes)
        ↓
   Tool Policy Check
        ↓
   Gateway RPC (node.invoke)
        ↓
   Node Command Policy Check
        ↓
   APNS Wake (如需要)
        ↓
   Node Device
        ↓
   Permission Check (TCC/Exec Approvals)
        ↓
   Command Execution
        ↓
   Result → Gateway → Agent
```
