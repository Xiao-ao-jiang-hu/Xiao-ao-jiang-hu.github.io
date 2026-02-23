---
title: OpenClaw Agent Workflow
tags:
  - openclaw
  - agent
categories:
  - others
abbrlink: e0689564
date: 2026-02-23 16:57:51
---
## Agent Loop 概述

OpenClaw 的 Agent 是基于 pi-mono 的嵌入式运行时，每个会话独立执行。

### 生命周期图

```text
┌─────────────────────────────────────────────────────────────────┐
│                      Agent Loop Lifecycle                       │
└─────────────────────────────────────────────────────────────────┘

    ┌─────────────────┐
    │  User Input     │ (Message/Command/Event)
    └──────┬──────────┘
           │
           ▼
    ┌─────────────────┐
    │ 1. Entry Point  │ (Gateway RPC / CLI)
    └──────┬──────────┘
           │
           ▼
    ┌─────────────────┐
    │ 2. Session      │ (Resolve/Create Session)
    │    Resolution   │ (Load History)
    └──────┬──────────┘
           │
           ▼
    ┌─────────────────┐
    │ 3. Context      │ (Load Workspace)
    │    Preparation  │ (Load Skills)
    │                 │ (Inject Bootstrap Files)
    └──────┬──────────┘
           │
           ▼
    ┌─────────────────┐
    │ 4. System       │ (Build Prompt)
    │    Prompt Build │ (Inject Tools List)
    │                 │ (Inject Skills List)
    └──────┬──────────┘
           │
           ▼
    ┌─────────────────┐
    │ 5. Model        │ (Resolve Model)
    │    Inference    │ (Stream Responses)
    │                 │ (Handle Tool Calls)
    └──────┬──────────┘
           │
           ▼
    ┌─────────────────┐
    │ 6. Tool         │ (Policy Check)
    │    Execution    │ (Execute Tool)
    │                 │ (Process Results)
    └──────┬──────────┘
           │
           ▼
    ┌─────────────────┐
    │ 7. Response     │ (Assemble Payloads)
    │    Assembly     │ (Filter Duplicates)
    │                 │ (Handle Errors)
    └──────┬──────────┘
           │
           ▼
    ┌─────────────────┐
    │ 8. Persistence  │ (Save Transcript)
    │                 │ (Update Session State)
    │                 │ (Track Usage)
    └──────┬──────────┘
           │
           ▼
    ┌─────────────────┐
    │   Final Reply   │ (To User/Channel)
    └─────────────────┘
```

## 详细阶段说明

### Entry Point

**触发方式**：
- Gateway RPC: `agent` / `agent.wait`
- CLI: `openclaw agent --message "..."`
- 渠道消息自动触发

**处理内容**：
- 验证参数（sessionKey, message, model 等）
- 生成 runId（幂等性）
- 立即返回 `{runId, acceptedAt}`
- 异步执行 agent loop

**代码位置**：`src/gateway/server-methods/agent.ts`

### Session Resolution

**会话 Key 格式**：
- `"main"`：主会话（直接对话）
- `agent:<agentId>:<channel>:group:<id>`：群组
- `agent:<agentId>:<channel>:channel:<id>`：渠道
- `cron:<jobId>`：定时任务
- `hook:<uuid>`：Hook
- `node-<nodeId>`：节点

**处理内容**：
- 根据 sessionKey 查找或创建会话
- 加载会话历史（JSONL 格式）
- 解析会话状态（model, thinkingLevel, verboseLevel 等）
- 获取会话工作目录

**会话存储**：
```
~/.openclaw/agents/<agentId>/sessions/<SessionId>.jsonl
```

**代码位置**：`src/config/sessions/`

### Context Preparation

**工作空间解析**：
- 默认：`~/.openclaw/workspace`
- 沙箱模式：`~/.openclaw/sandbox/<sessionId>/`

**技能加载**：
```
加载顺序（优先级从高到低）：
1. Workspace skills: <workspace>/skills
2. Managed skills: ~/.openclaw/skills
3. Bundled skills: 安装包附带
4. Extra dirs: 配置指定
```

**技能过滤**：
- 检查二进制依赖
- 检查环境变量
- 检查配置项
- 检查平台兼容性

**Bootstrap 文件注入**：
| 文件         | 内容         | 必填           |
| ------------ | ------------ | -------------- |
| AGENTS.md    | 操作指令     | 是             |
| SOUL.md      | 人设和语气   | 是             |
| TOOLS.md     | 工具使用指南 | 是             |
| IDENTITY.md  | 代理身份     | 可选           |
| USER.md      | 用户档案     | 可选           |
| MEMORY.md    | 长期记忆     | 可选           |
| BOOTSTRAP.md | 首次引导     | 仅新 workspace |

**大文件处理**：
- 单文件上限：20000 字符
- 总计上限：150000 字符
- 超出部分截断并添加标记

**代码位置**：`src/agents/skills/`, `src/gateway/agent-prompt.ts`

### System Prompt Build

**结构**：
```markdown
# OpenClaw Agent

## Tooling
[工具列表和描述]

## Safety
[安全护栏]

## Skills
<available_skills>
  <skill>
    <name>skill-name</name>
    <description>description</description>
    <location>/path/to/skill</location>
  </skill>
</available_skills>

## OpenClaw Self-Update
[配置和更新指令]

## Workspace
Working directory: ~/.openclaw/workspace

## Documentation
[本地文档路径]

## Workspace Files
[Bootstrap 文件内容]

## Sandbox (if enabled)
[沙箱信息]

## Current Date & Time
Timezone: Asia/Shanghai

## Reply Tags
[回复标签语法]

## Heartbeats
[心跳提示]

## Runtime
Host: hostname
OS: darwin
Model: provider/model
Thinking: medium
```

**Prompt 模式**：
- `full`：默认，包含所有部分
- `minimal`：子代理使用，省略 Skills/Memory/Update 等
- `none`：仅身份行

**代码位置**：`src/gateway/agent-prompt.ts`

### 2.5 Model Inference

**代码位置**：`src/agents/pi-embedded-runner/`

### 2.6 工具执行 (Tool Execution)

**流程**：
```
模型工具调用
      ↓
工具策略检查 (allow/deny/profile)
      ↓
Hook: before_tool_call
      ↓
执行工具实现
      ↓
结果 Sanitization (大小限制/图片处理)
      ↓
Hook: after_tool_call
      ↓
Hook: tool_result_persist
      ↓
返回结果给模型
```

**工具策略**：
```json5
{
  tools: {
    profile: "coding",  // 基础限制
    allow: ["browser"],  // 额外允许
    deny: ["exec"],      // 明确禁止
    byProvider: {        // Provider 特定
      "google-antigravity": {profile: "minimal"}
    }
  }
}
```

**代码位置**：`src/agents/tools/`, `src/agents/tool-policy.ts`

### Response Assembly

**Payload 来源**：
- Assistant text（流式累积）
- Reasoning text（如启用）
- Tool summaries（verbose 模式）
- Error messages

**处理步骤**：
1. 过滤 `NO_REPLY` 标记
2. 移除 messaging tool 重复发送
3. 错误回退（工具错误时生成友好提示）
4. 格式化最终回复

**代码位置**：`src/auto-reply/reply/agent-runner-execution.ts`

### Persistence

**会话记录**：
- 格式：JSONL
- 位置：`~/.openclaw/agents/<agentId>/sessions/<SessionId>.jsonl`
- 内容：messages, tool calls, results

**Usage 追踪**：
- Input tokens
- Output tokens
- Cost（如 provider 支持）

**Compaction**：
- 自动触发（token 超限）
- 生成摘要
- 可触发 retry

**代码位置**：`src/config/sessions/`

## 队列和并发

### 序列化模型

```
┌─────────────────────────────────────────┐
│          Global Queue (optional)        │
└─────────────────┬───────────────────────┘
                  │
    ┌─────────────┼─────────────┐
    │             │             │
    ▼             ▼             ▼
┌────────┐  ┌────────┐  ┌────────┐
│Session │  │Session │  │Session │
│ Lane 1 │  │ Lane 2 │  │ Lane 3 │
└────────┘  └────────┘  └────────┘
```

每个 session key 一个 lane 保证同一 session 串行化执行，可选全局 lane 串行化所有 runs


## Hook 系统

### 内部 Hooks (Gateway)

| Hook              | 触发时机              | 用途         |
| ----------------- | --------------------- | ------------ |
| `agent:bootstrap` | 构建 bootstrap 文件时 | 修改注入文件 |
| `command:new`     | `/new` 命令           | 会话重置     |
| `command:reset`   | `/reset` 命令         | 会话重置     |
| `command:stop`    | `/stop` 命令          | 停止运行     |

### Plugin Hooks

| Hook                   | 触发时机      | 可修改内容                   |
| ---------------------- | ------------- | ---------------------------- |
| `before_model_resolve` | 模型解析前    | provider/model               |
| `before_prompt_build`  | prompt 构建前 | prependContext, systemPrompt |
| `before_agent_start`   | agent 启动前  | messages, config             |
| `agent_end`            | agent 结束后  | final messages               |
| `before_tool_call`     | 工具调用前    | params                       |
| `after_tool_call`      | 工具调用后    | result                       |
| `tool_result_persist`  | 持久化前      | result                       |
| `message_received`     | 收到消息      | message                      |
| `message_sending`      | 发送消息前    | message                      |
| `message_sent`         | 发送消息后    | -                            |
| `session_start`        | 会话开始      | -                            |
| `session_end`          | 会话结束      | -                            |
| `gateway_start`        | Gateway 启动  | -                            |
| `gateway_stop`         | Gateway 停止  | -                            |

**代码位置**：`src/hooks/`, `src/plugins/hooks.ts`