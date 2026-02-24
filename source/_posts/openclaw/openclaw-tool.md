---
title: OpenClaw 工具权限控制
tags:
  - openclaw
  - agent
categories:
  - others
abbrlink: 5bf9ba19
date: 2026-02-23 17:20:49
---
## 权限模型设计

```
┌─────────────────────────────────────────────────────────────┐
│                    Layer 1: Device Pairing                  │
│  - All nodes must be paired                                 │
│  - User approves pairing request                            │
│  - Issue device token                                       │
└─────────────────────────────────────────────────────────────┘
                            │
                            ▼
┌──────────────────────────────────────────────────────────────┐
│                    Layer 2: Tool Policy                      │
│  - Profile-based constraints (minimal/coding/messaging/full) │
│  - Allow/Deny lists                                          │
│  - Provider-specific policies                                │
└──────────────────────────────────────────────────────────────┘
                            │
                            ▼
┌─────────────────────────────────────────────────────────────┐
│                Layer 3: Node Command Policy                 │
│  - Platform default allowlist                               │
│  - Dangerous commands disabled by default                   │
│  - Configuration overrides (allowCommands/denyCommands)     │
└─────────────────────────────────────────────────────────────┘
                            │
                            ▼
┌─────────────────────────────────────────────────────────────┐
│                    Layer 4: Exec Approvals                  │
│  - Deny / Allowlist / Full                                  │
│  - Per-node independent configuration                       │
│  - Real-time user approval                                  │
└─────────────────────────────────────────────────────────────┘
                            │
                            ▼
┌─────────────────────────────────────────────────────────────┐
│                    Layer 5: TCC Permissions                 │
│  - macOS/iOS system-level permissions                       │
│  - Screen Recording, Camera, Microphone, Location, etc.     │
└─────────────────────────────────────────────────────────────┘
```


## 工具权限申请

### 工具分类与权限需求

#### 文件系统工具 (group:fs)

| 工具          | 权限需求       | 实现方式     |
| ------------- | -------------- | ------------ |
| `read`        | 工作目录读权限 | 路径限制检查 |
| `write`       | 工作目录写权限 | 路径限制检查 |
| `edit`        | 工作目录写权限 | 路径限制检查 |
| `apply_patch` | 工作目录写权限 | 路径限制检查 |

**沙箱模式**：
- 限制在工作目录内
- 无法访问系统文件

#### 运行时工具 (group:runtime)

| 工具      | 权限需求      | 实现方式                      |
| --------- | ------------- | ----------------------------- |
| `exec`    | Exec Approval | 三层检查（策略 + 审批 + TCC） |
| `process` | 同 exec       | 继承 exec 权限                |

**exec 权限流程**：
```
exec 调用
   ↓
1. Tool Policy 检查
   - 是否在 allow 列表
   - 是否在 deny 列表
   - profile 是否允许
   ↓
2. Host 选择
   - sandbox: Docker 容器
   - gateway: Gateway 主机
   - node: 指定节点
   ↓
3. Security 模式检查
   - deny: 拒绝所有
   - allowlist: 检查白名单
   - full: 允许所有
   ↓
4. Exec Approval 检查
   - 白名单命令：直接执行
   - 未知命令：用户审批（如 ask=on-miss）
   - 拒绝命令：返回错误
   ↓
5. TCC 权限检查（如需要）
   - Screen Recording
   - Accessibility
   ↓
6. 执行命令
```

#### nodes 工具

| 动作            | 权限需求      | 实现方式                    |
| --------------- | ------------- | --------------------------- |
| `status`        | 无            | 公开信息                    |
| `describe`      | 无            | 公开信息                    |
| `pending`       | 无            | 公开信息                    |
| `approve`       | 所有者权限    | 仅限 owner sender           |
| `reject`        | 所有者权限    | 仅限 owner sender           |
| `notify`        | 通知权限      | TCC Notification            |
| `camera_snap`   | 相机权限      | TCC Camera + 前景检查       |
| `camera_clip`   | 相机 + 麦克风 | TCC Camera + Mic + 前景     |
| `screen_record` | 屏幕录制      | TCC Screen Recording + 前景 |
| `location_get`  | 位置权限      | TCC Location                |
| `run`           | Exec Approval | 节点端 Exec 审批 + TCC      |
| `invoke`        | 命令策略      | 命令白名单检查              |

### 节点命令策略

**平台默认允许列表**：

#### iOS
```typescript
[
  // Canvas
  "canvas.present", "canvas.hide", "canvas.navigate", 
  "canvas.eval", "canvas.snapshot",
  "canvas.a2ui.push", "canvas.a2ui.pushJSONL", "canvas.a2ui.reset",
  
  // Camera (只读)
  "camera.list",
  
  // Location
  "location.get",
  
  // Device Info
  "device.info", "device.status",
  
  // Contacts (只读)
  "contacts.search",
  
  // Calendar (只读)
  "calendar.events",
  
  // Reminders (只读)
  "reminders.list",
  
  // Photos (只读)
  "photos.latest",
  
  // Motion
  "motion.activity", "motion.pedometer",
  
  // Notifications
  "system.notify"
]
```

#### Android
```typescript
[
  ...iOS 默认命令，
  // 额外支持（需用户授权）
  "sms.send"  // 需 SMS 权限
]
```

#### macOS
```typescript
[
  ...iOS 默认命令，
  // 系统命令
  "system.run", "system.which",
  // 浏览器代理
  "browser.proxy"
]
```

#### Linux/Windows
```typescript
[
  "system.run", "system.which"
]
```

**危险命令（默认禁止）**：
```typescript
[
  "camera.snap",      // 拍照
  "camera.clip",      // 录像
  "screen.record",    // 屏幕录制
  "contacts.add",     // 添加联系人
  "calendar.add",     // 添加日历事件
  "reminders.add",    // 添加提醒
  "sms.send"         // 发送短信
]
```

**配置覆盖**：
```json5
{
  gateway: {
    nodes: {
      allowCommands: [
        "camera.snap",
        "screen.record"
      ],
      denyCommands: [
        "sms.send"
      ]
    }
  }
}
```

### Exec 审批系统

**审批模式**：

| 模式        | 行为             | 适用场景   |
| ----------- | ---------------- | ---------- |
| `deny`      | 拒绝所有 exec    | 高安全环境 |
| `allowlist` | 仅允许白名单命令 | 默认推荐   |
| `full`      | 允许所有命令     | 受信任环境 |


**自动学习**：
- 用户批准一次后，可添加到白名单
- 包装器命令（env, nice, nohup）自动解包记录内层命令
- Shell 包装器（bash -c）限制环境变量

### TCC 权限 (macOS/iOS)

**权限类型**：

| 权限             | 工具                                | 检查点         |
| ---------------- | ----------------------------------- | -------------- |
| Screen Recording | `system.run` (needsScreenRecording) | 启动时检查     |
| Accessibility    | `system.run` (某些命令)             | 启动时检查     |
| Camera           | `camera_snap`, `camera_clip`        | 首次使用时弹窗 |
| Microphone       | `camera_clip` (带音频)              | 首次使用时弹窗 |
| Location         | `location_get`                      | 首次使用时弹窗 |
| Notifications    | `system.notify`                     | 首次使用时弹窗 |

**权限状态查询**：
```typescript
// node.describe 返回
{
  nodeId: "mac-office",
  permissions: {
    "screenRecording": true,
    "accessibility": false,
    "camera": true,
    "microphone": true,
    "location": true,
    "notifications": true
  }
}
```

**权限不足处理**：
- 返回 `PERMISSION_MISSING` 错误
- 提示用户到系统设置开启权限
- macOS 提供打开系统设置的快捷方式

## 设备操控实现

OpenClaw 通过以下方式实现屏幕捕获和输入控制：

| 功能 | 实现方式 | 平台 |
|------|----------|------|
| 屏幕捕获 | ScreenCaptureKit (SCStream) | macOS |
| 屏幕录制 | ScreenCaptureKit + AVAssetWriter | macOS |
| 鼠标/键盘模拟 | 无直接实现，通过 Shell 命令间接实现 | 所有平台 |
| 浏览器自动化 | Playwright | 所有平台 |
| AppleScript 自动化 | NSAppleScript | macOS |
| 命令行执行 | Node.js child_process.spawn | 所有平台 |

### 跨平台支持

OpenClaw 在 **Windows** 和 **Linux** 上使用相同的架构实现命令执行，但**没有原生屏幕捕获功能**：

| 平台 | 屏幕捕获 | 输入控制 | 命令执行 |
|------|----------|----------|----------|
| **macOS** | ✅ ScreenCaptureKit | ✅ AppleScript / 辅助功能 | ✅ ShellExecutor.swift |
| **Windows** | ❌ 不支持 | ❌ 不支持（可通过外部工具） | ✅ child_process.spawn |
| **Linux** | ❌ 不支持 | ❌ 不支持（可通过外部工具） | ✅ child_process.spawn |

### system.run 实现

**Gateway 端流程**：
```typescript
// src/gateway/server-methods/nodes.ts

async function handleNodeInvoke(params) {
  const { nodeId, command, params: cmdParams } = params;
  
  // 1. 验证节点连接
  const node = nodeRegistry.get(nodeId);
  if (!node || !node.isConnected) {
    throw new Error("Node not connected");
  }
  
  // 2. 检查命令策略
  const allowedCommands = resolveNodeCommandAllowlist(config, node);
  if (!allowedCommands.has(command)) {
    throw new Error(`Command ${command} not allowed`);
  }
  
  // 3. 参数清理（防止注入）
  const sanitizedParams = sanitizeNodeInvokeParams(cmdParams);
  
  // 4. APNS 后台唤醒（如节点在后台）
  if (!node.isForeground) {
    await maybeWakeNodeWithApns(nodeId);
    // 等待节点重新连接
    await waitForNodeReconnect(nodeId);
  }
  
  // 5. 发送调用请求
  const result = await node.invoke(command, sanitizedParams);
  
  // 6. 处理结果
  return handleNodeInvokeResult(result);
}
```

**macOS Node 端实现 (ShellExecutor.swift)**：

```swift
// apps/macos/Sources/OpenClaw/ShellExecutor.swift

enum ShellExecutor {
    struct ShellResult {
        var stdout: String
        var stderr: String
        var exitCode: Int?
        var timedOut: Bool
        var success: Bool
        var errorMessage: String?
    }
    
    static func runDetailed(
        command: [String],
        cwd: String?,
        env: [String: String]?,
        timeout: Double?
    ) async -> ShellResult {
        guard !command.isEmpty else {
            return ShellResult(stdout: "", stderr: "", exitCode: nil,
                             timedOut: false, success: false,
                             errorMessage: "empty command")
        }
        
        // 使用 /usr/bin/env 执行命令
        let process = Process()
        process.executableURL = URL(fileURLWithPath: "/usr/bin/env")
        process.arguments = command
        if let cwd { process.currentDirectoryURL = URL(fileURLWithPath: cwd) }
        if let env { process.environment = env }
        
        let stdoutPipe = Pipe()
        let stderrPipe = Pipe()
        process.standardOutput = stdoutPipe
        process.standardError = stderrPipe
        
        try process.run()
        
        // 异步读取输出
        let outTask = Task { stdoutPipe.fileHandleForReading.readToEndSafely() }
        let errTask = Task { stderrPipe.fileHandleForReading.readToEndSafely() }
        
        // 等待完成或超时
        let waitTask = Task { () -> ShellResult in
            process.waitUntilExit()
            let out = await outTask.value
            let err = await errTask.value
            let status = Int(process.terminationStatus)
            return ShellResult(
                stdout: String(bytes: out, encoding: .utf8) ?? "",
                stderr: stderr: String(bytes: err, encoding: .utf8) ?? "",
                exitCode: status,
                timedOut: false,
                success: status == 0,
                errorMessage: status == 0 ? nil : "exit \(status)"
            )
        }
        
        if let timeout, timeout > 0 {
            let nanos = UInt64(timeout * 1_000_000_000)
            return await withTaskGroup(of: ShellResult.self) { group in
                group.addTask { await waitTask.value }
                group.addTask {
                    try? await Task.sleep(nanoseconds: nanos)
                    if process.isRunning { process.terminate() }
                    _ = await waitTask.value
                    return ShellResult(stdout: "", stderr: "", exitCode: nil,
                                     timedOut: true, success: false,
                                     errorMessage: "timeout")
                }
                let first = await group.next()!
                group.cancelAll()
                return first
            }
        }
        
        return await waitTask.value
    }
}
```

#### 权限检查 (PermissionManager.swift)

```swift
import CoreGraphics

enum ScreenRecordingProbe {
    /// 预检屏幕录制权限
    static func isAuthorized() -> Bool {
        if #available(macOS 10.15, *) {
            return CGPreflightScreenCaptureAccess()
        }
        return true
    }
    
    /// 请求屏幕录制权限（弹出系统对话框）
    @MainActor
    static func requestAuthorization() async {
        if #available(macOS 10.15, *) {
            _ = CGRequestScreenCaptureAccess()
        }
    }
}
```

### Camera 控制实现

**Tool 端调用**：
```typescript
// src/agents/tools/nodes-tool.ts

case "camera_snap": {
  // 1. 解析参数
  const nodeId = await resolveNodeId(gatewayOpts, node);
  const facing = params.facing ?? "both";  // front/back/both
  const maxWidth = params.maxWidth;
  const quality = params.quality ?? 0.8;
  
  // 2. 调用 Gateway RPC
  const payload = await callGatewayTool("node.invoke", gatewayOpts, {
    nodeId,
    command: "camera.snap",
    params: {
      facing,
      maxWidth,
      quality,
      delayMs: params.delayMs
    }
  });
  
  // 3. 解析结果（base64 图片）
  const images = parseCameraSnapPayload(payload);
  
  // 4. 写入临时文件
  const paths = [];
  for (const img of images) {
    const path = writeBase64ToFile(img.base64, cameraTempPath());
    paths.push(`MEDIA:${path}`);
  }
  
  // 5. 返回 MEDIA 路径（Agent 可附加到消息）
  return {paths};
}
```

**iOS Node 端实现**：
```swift
// apps/ios/Sources/Camera/CameraController.swift

func capturePhoto(facing: CameraFacing) async throws -> Data {
  // 1. 检查是否在前景
  guard appState.isForeground else {
    throw NodeError.NODE_BACKGROUND_UNAVAILABLE
  }
  
  // 2. 检查相机权限
  let status = AVCaptureDevice.authorizationStatus(for: .video)
  switch status {
  case .authorized:
    break
  case .notDetermined:
    // 请求权限（需要用户交互，必须在前景）
    guard await AVCaptureDevice.requestAccess(for: .video) else {
      throw NodeError.PERMISSION_REQUIRED("Camera")
    }
  default:
    throw NodeError.PERMISSION_REQUIRED("Camera")
  }
  
  // 3. 配置相机
  let session = AVCaptureSession()
  session.beginConfiguration()
  session.sessionPreset = .photo
  
  // 4. 选择摄像头
  let position: AVCaptureDevice.Position = facing == .front ? .front : .back
  guard let device = AVCaptureDevice.default(.builtInWideAngleCamera, for: .video, position: position) else {
    throw NodeError.CAMERA_NOT_AVAILABLE
  }
  
  let input = try AVCaptureDeviceInput(device: device)
  if session.canAddInput(input) {
    session.addInput(input)
  }
  
  let output = AVCapturePhotoOutput()
  if session.canAddOutput(output) {
    session.addOutput(output)
  }
  
  session.commitConfiguration()
  
  // 5. 捕获照片
  return await withCheckedContinuation { continuation in
    let settings = AVCapturePhotoSettings()
    settings.isHighResolutionPhotoEnabled = true
    
    let delegate = PhotoCaptureDelegate { photoData in
      continuation.resume(returning: photoData)
    }
    
    output.capturePhoto(with: settings, delegate: delegate)
    session.startRunning()
  }
}
```

### Screen Record 实现

**Tool 端调用**：
```typescript
// src/agents/tools/nodes-tool.ts

case "screen_record": {
  const nodeId = await resolveNodeId(gatewayOpts, node);
  
  // 调用 Gateway RPC
  const payload = await callGatewayTool("node.invoke", gatewayOpts, {
    nodeId,
    command: "screen.record",
    params: {
      duration: params.duration ?? "10s",
      fps: params.fps ?? 10,
      includeAudio: params.includeAudio ?? true,
      screenIndex: params.screenIndex ?? 0
    }
  });
  
  // 解析结果（MP4 base64）
  const video = parseScreenRecordPayload(payload);
  
  // 写入文件
  const path = writeScreenRecordToFile(video.base64, screenRecordTempPath());
  
  return {path: `FILE:${path}`};
}
```

**macOS Node 端实现 (ScreenRecordService.swift)**：

```swift
import ScreenCaptureKit
import AVFoundation

@MainActor
final class ScreenRecordService {
    func record(
        screenIndex: Int?,
        durationMs: Int?,
        fps: Double?,
        includeAudio: Bool?,
        outPath: String?
    ) async throws -> (path: String, hasAudio: Bool) {
        
        // 1. 参数标准化
        let durationMs = min(60000, max(250, durationMs ?? 10000))  // 250ms - 60s
        let fps = min(60.0, max(1.0, fps ?? 10))  // 1-60 FPS
        
        // 2. 输出路径
        let outURL: URL = {
            if let outPath, !outPath.isEmpty {
                return URL(fileURLWithPath: outPath)
            }
            return FileManager().temporaryDirectory
                .appendingPathComponent("openclaw-screen-record-\(UUID().uuidString).mp4")
        }()
        
        // 3. 获取显示器列表
        let content = try await SCShareableContent.current
        let displays = content.displays.sorted { $0.displayID < $1.displayID }
        guard !displays.isEmpty else {
            throw ScreenRecordError.noDisplays
        }
        
        // 4. 选择目标显示器
        let idx = screenIndex ?? 0
        guard idx >= 0, idx < displays.count else {
            throw ScreenRecordError.invalidScreenIndex(idx)
        }
        let display = displays[idx]
        
        // 5. 创建内容过滤器
        let filter = SCContentFilter(display: display, excludingWindows: [])
        
        // 6. 配置录制流
        let config = SCStreamConfiguration()
        config.width = display.width
        config.height = display.height
        config.queueDepth = 8
        config.showsCursor = true  // 显示鼠标光标
        config.minimumFrameInterval = CMTime(
            value: 1,
            timescale: CMTimeScale(Int32(fps.rounded()))
        )
        if includeAudio ?? false {
            config.capturesAudio = true
        }
        
        // 7. 创建录制器
        let recorder = try StreamRecorder(
            outputURL: outURL,
            width: display.width,
            height: display.height,
            includeAudio: includeAudio ?? false,
            logger: self.logger
        )
        
        // 8. 启动捕获
        let stream = SCStream(filter: filter, configuration: config, delegate: recorder)
        try stream.addStreamOutput(recorder, type: .screen, sampleHandlerQueue: recorder.queue)
        if includeAudio ?? false {
            try stream.addStreamOutput(recorder, type: .audio, sampleHandlerQueue: recorder.queue)
        }
        
        try await stream.startCapture()
        try await Task.sleep(nanoseconds: UInt64(durationMs) * 1_000_000)
        try await stream.stopCapture()
        
        // 9. 完成录制
        try await recorder.finish()
        return (path: outURL.path, hasAudio: recorder.hasAudio)
    }
}
```

#### StreamRecorder 类 (视频编码)

```swift
private final class StreamRecorder: NSObject, SCStreamOutput, SCStreamDelegate {
    let queue = DispatchQueue(label: "ai.openclaw.screenRecord.writer")
    private let logger: Logger
    private let writer: AVAssetWriter
    private let input: AVAssetWriterInput
    private let audioInput: AVAssetWriterInput?
    let hasAudio: Bool
    
    init(outputURL: URL, width: Int, height: Int, includeAudio: Bool, logger: Logger) throws {
        self.logger = logger
        self.writer = try AVAssetWriter(outputURL: outputURL, fileType: .mp4)
        
        // H.264 视频编码配置
        let settings: [String: Any] = [
            AVVideoCodecKey: AVVideoCodecType.h264,
            AVVideoWidthKey: width,
            AVVideoHeightKey: height,
        ]
        self.input = AVAssetWriterInput(mediaType: .video, outputSettings: settings)
        self.input.expectsMediaDataInRealTime = true
        self.writer.add(self.input)
        
        // AAC 音频编码配置
        if includeAudio {
            let audioSettings: [String: Any] = [
                AVFormatIDKey: kAudioFormatMPEG4AAC,
                AVNumberOfChannelsKey: 1,
                AVSampleRateKey: 44100,
                AVEncoderBitRateKey: 96000,
            ]
            let audioInput = AVAssetWriterInput(mediaType: .audio, outputSettings: audioSettings)
            audioInput.expectsMediaDataInRealTime = true
            if self.writer.canAdd(audioInput) {
                self.writer.add(audioInput)
                self.audioInput = audioInput
                self.hasAudio = true
            } else {
                self.audioInput = nil
                self.hasAudio = false
            }
        } else {
            self.audioInput = nil
            self.hasAudio = false
        }
        super.init()
    }
    // ... 后续处理逻辑省略
}
```

#### IPC 协议定义

```swift
// apps/macos/Sources/OpenClawIPC/IPC.swift

public enum Request: Sendable {
    case screenRecord(
        screenIndex: Int?,      // 显示器索引（多显示器场景）
        durationMs: Int?,       // 录制时长（毫秒）
        fps: Double?,           // 帧率
        includeAudio: Bool,     // 是否包含音频
        outPath: String?        // 输出路径
    )
}
```

### Location 获取实现

**Tool 端调用**：
```typescript
// src/agents/tools/nodes-tool.ts

case "location_get": {
  const nodeId = await resolveNodeId(gatewayOpts, node);
  
  const payload = await callGatewayTool("node.invoke", gatewayOpts, {
    nodeId,
    command: "location.get",
    params: {
      maxAgeMs: params.maxAgeMs ?? 60000,
      locationTimeoutMs: params.locationTimeoutMs ?? 10000,
      desiredAccuracy: params.desiredAccuracy ?? "balanced"
    }
  });
  
  // 返回 JSON payload
  return {
    latitude: payload.latitude,
    longitude: payload.longitude,
    accuracy: payload.accuracy,  // 米
    timestamp: payload.timestamp
  };
}
```

**iOS Node 端实现**：
```swift
// apps/ios/Sources/Location/LocationManager.swift

func getLocation(accuracy: Accuracy) async throws -> Location {
  // 1. 检查位置权限
  let status = CLLocationManager.authorizationStatus()
  switch status {
  case .authorizedAlways, .authorizedWhenInUse:
    break
  case .notDetermined:
    // 请求权限
    locationManager.requestWhenInUseAuthorization()
    // 等待用户响应（需要前景）
    guard await waitForAuthorization() == .authorized else {
      throw NodeError.PERMISSION_REQUIRED("Location")
    }
  default:
    throw NodeError.PERMISSION_REQUIRED("Location")
  }
  
  // 2. 配置精度
  switch accuracy {
  case .coarse:
    locationManager.desiredAccuracy = kCLLocationAccuracyKilometer
  case .balanced:
    locationManager.desiredAccuracy = kCLLocationAccuracyHundredMeters
  case .precise:
    locationManager.desiredAccuracy = kCLLocationAccuracyBest
  }
  
  // 3. 获取位置
  return await withCheckedContinuation { continuation in
    let handler = LocationHandler { location in
      continuation.resume(returning: location)
    }
    locationManager.requestLocation(handler: handler)
  }
}
```

### Canvas 控制实现

**Tool 端调用**：
```typescript
// src/agents/tools/canvas-tool.ts

case "a2ui_push": {
  const nodeId = await resolveNodeId(gatewayOpts, node);
  
  await callGatewayTool("node.invoke", gatewayOpts, {
    nodeId,
    command: "canvas.a2ui.pushJSONL",
    params: {
      jsonl: a2uiJsonl  // A2UI v0.8 JSONL 格式
    }
  });
}
```

**MacOS Node 端实现**：
```swift
// apps/macos/Sources/Canvas/CanvasView.swift

func pushA2UI(jsonl: String) throws {
  // 1. 检查是否在前景
  guard appState.isForeground else {
    throw NodeError.NODE_BACKGROUND_UNAVAILABLE
  }
  
  // 2. 解析 JSONL
  let commands = try parseA2UICommands(jsonl: jsonl)
  
  // 3. 在 WebView 中执行
  DispatchQueue.main.async {
    for command in commands {
      self.webView.evaluateJavaScript(command.js)
    }
  }
}
```

### 鼠标/键盘控制实现

#### 设计

OpenClaw **不直接模拟鼠标/键盘事件**，通过以下方式实现自动化：

1. **Shell 命令执行** (`system.run`) - 调用系统工具
2. **AppleScript 自动化** - 控制 macOS 应用（仅限 macOS，提供了通过命令行实现类似点击按钮等的功能）
3. **浏览器自动化** (Playwright) - 控制浏览器
4. **节点命令** - 通过 IPC 调用原生功能

#### AppleScript 自动化

##### 权限检查 (PermissionManager.swift)

```swift
// apps/macos/Sources/OpenClaw/PermissionManager.swift

enum AppleScriptPermission {
    /// 检查 Automation 权限
    @MainActor
    static func isAuthorized() -> Bool {
        let script = "tell application \"Terminal\" to return \"ok\""
        var error: NSDictionary?
        let appleScript = NSAppleScript(source: script)
        let result = appleScript?.executeAndReturnError(&error)
        return result != nil
    }
}
```

##### 使用示例

通过 `system.run` 执行 AppleScript 实现鼠标点击：

```bash
# 点击窗口按钮
osascript -e 'tell application "System Events" to click button "OK" of window 1 of process "Safari"'

# 模拟键盘输入
osascript -e 'tell application "System Events" to keystroke "Hello World"'
```

#### 浏览器自动化 (Playwright)

OpenClaw 使用 Playwright 实现深度的网页交互：

```typescript
// src/browser/pw-tools-core.interactions.ts

export async function click(opts: { page: Page; selector: string }) {
  await opts.page.click(opts.selector);
}

export async function type(opts: { page: Page; selector: string; text: string }) {
  await opts.page.type(opts.selector, opts.text);
}
```

## APNS 后台唤醒

### 唤醒流程

```
Gateway 需要调用后台节点
        ↓
检查节点是否在后台
        ↓
读取 APNS 注册信息
        ↓
构建 APNS payload
        ↓
发送 APNS 请求到 Apple
        ↓
Apple 推送通知到设备
        ↓
Node App 收到后台唤醒
        ↓
Node App 重新连接 Gateway
        ↓
Gateway 继续调用
```

### APNS Payload

```json
{
  "aps": {
    "content-available": 1,
    "wake-reason": "node.invoke"
  },
  "gateway-url": "wss://example.com:18789",
  "node-id": "uuid"
}
```

### 实现代码

**Gateway 端**：
```typescript
// src/infra/push-apns.ts

async function sendApnsBackgroundWake({
  auth,  // APNS auth (JWT)
  registration,  // 设备注册信息
  nodeId,
  wakeReason
}) {
  // 构建 JWT
  const token = generateApnsJwt(auth);
  
  // 构建 payload
  const payload = {
    "aps": {
      "content-available": 1,
      "wake-reason": wakeReason
    }
  };
  
  // 发送 APNS 请求
  const response = await fetch(
    `https://api.push.apple.com/3/device/${registration.deviceToken}`,
    {
      method: "POST",
      headers: {
        "apns-topic": "ai.openclaw.node",
        "apns-priority": "5",  // 后台优先级
        "apns-expiration": "0",
        "authorization": `bearer ${token}`
      },
      body: JSON.stringify(payload)
    }
  );
  
  return {
    ok: response.ok,
    status: response.status,
    reason: response.headers.get("apns-reason")
  };
}
```

**iOS Node 端**：
```swift
// apps/ios/Sources/AppDelegate.swift

func application(
  _ application: UIApplication,
  didReceiveRemoteNotification userInfo: [AnyHashable: Any],
  fetchCompletionHandler completionHandler: @escaping (UIBackgroundFetchResult) -> Void
) {
  // 检查是否是唤醒通知
  guard userInfo["wake-reason"] != nil else {
    completionHandler(.noData)
    return
  }
  
  // 后台重新连接 Gateway
  Task {
    await nodeManager.reconnectToGateway()
    completionHandler(.newData)
  }
}
```

## 权限状态管理

### 能力广告

节点连接时广告其能力：

```typescript
// node.connect payload
{
  role: "node",
  identity: {
    deviceId: "uuid",
    platform: "macos",
    deviceFamily: "Mac",
    capabilities: [
      "canvas.present",
      "canvas.a2ui.push",
      "camera.snap",
      "camera.clip",
      "screen.record",
      "location.get",
      "system.run",
      "system.notify"
    ],
    permissions: {
      "screenRecording": true,
      "accessibility": true,
      "camera": true,
      "microphone": false,
      "location": true,
      "notifications": true
    }
  }
}
```

### 权限检查

**Gateway 端检查**：
```typescript
// src/gateway/server-methods/nodes.ts

async function handleNodeInvoke(params) {
  const node = nodeRegistry.get(params.nodeId);
  
  // 检查命令是否在能力列表中
  if (!node.capabilities.has(params.command)) {
    throw new Error(`Command ${params.command} not supported by node`);
  }
  
  // 检查权限状态
  if (params.command.requiresPermission) {
    const permissionName = params.command.permission;
    if (!node.permissions[permissionName]) {
      throw new Error(
        `Permission ${permissionName} not granted on node`
      );
    }
  }
  
  // ...继续处理
}
```

### 权限变化通知

节点权限变化时主动通知 Gateway：

```typescript
// Node → Gateway
{
  type: "event",
  event: "node.permissions",
  payload: {
    nodeId: "uuid",
    permissions: {
      "camera": true,  // 新授权
      "microphone": false
    }
  }
}
```