# 🛡️ AutoBlur — 视频车牌 / 人脸自动打码

在浏览器里上传视频 → 自动识别**车牌**和**人脸** → 勾选要处理的对象 → 一键**打马赛克 / 模糊 / 遮挡**并导出。

> 🔒 **隐私优先**：所有识别与视频处理都在你自己的浏览器本地完成，视频**不会上传**到任何服务器。

**在线预览**：`https://zhaoweiyang.github.io/autoblur/`（GitHub Pages 部署完成后可访问）

---

## ✨ 功能

- **上传视频**：拖拽或点击选择，支持浏览器可播放的常见格式（MP4 / WebM / MOV 等）。
- **自动识别**：使用 [OpenCV.js](https://opencv.org/) 的 Haar 级联模型识别人脸与车牌，并通过 IoU 跟踪为每个目标分配持续 ID。
- **自由勾选**：识别结果以缩略图列表呈现，可逐个勾选/取消，也可直接点击画面上的方框切换。
- **手动补框**：对漏检的目标，可在预览画面上手动拖拽框选要遮挡的区域。
- **多种遮挡方式**：马赛克、高斯模糊、黑色遮挡，强度可调。
- **导出下载**：在浏览器内重新编码为视频（含原始音轨）并直接下载。

## 🧠 工作原理

1. **采样识别**：按设定密度（2/4/8 帧每秒）在时间轴上逐帧抽样，缩放到 640px 宽后运行 Haar 检测。
2. **目标跟踪**：`tracker.js` 用 IoU 贪心匹配把跨帧检测串成一个个「目标」，记录出现时间段并挑选最清晰的一帧作缩略图。
3. **本地渲染**：导出时按原速播放源视频，用 `requestVideoFrameCallback` 逐帧绘制到画布，对所选目标按时间插值出的位置打码。
4. **录制导出**：用 `canvas.captureStream()` + `MediaRecorder` 录制画布，并通过 Web Audio 把原始音轨混入，生成可下载的视频文件。

全部逻辑是纯静态前端（HTML + CSS + JS），因此可以直接部署在 GitHub Pages 上。

## ⚠️ 使用说明与局限

- 识别基于经典 Haar 模型（可完全在浏览器本地运行、无需服务器），**正脸和清晰、正对镜头的车牌**效果最好；侧脸、遮挡、模糊、过小或倾斜的目标可能漏检——遇到漏检请用「✏️ 手动框选」补充。
- 导出**按视频原速**进行，处理一段视频大约需要与其时长相当的时间；建议先用较短视频体验。
- 为兼容性与性能，输出分辨率最高约 1920px 宽，格式取决于浏览器（Chrome/Edge 通常为 WebM，Safari 为 MP4）。
- 推荐使用**最新版 Chrome / Edge**（需要 `MediaRecorder`、`canvas.captureStream` 等特性）。
- 这是一个隐私工具的实用原型：请在导出后**自行检查**每一处敏感信息都已被妥善遮挡。

## 🚀 本地运行

因为要 `fetch` 模型文件，需通过 HTTP 服务访问（不能直接 `file://` 打开）：

```bash
# 任选其一
python3 -m http.server 8000
# 或
npx serve .
```

然后浏览器打开 `http://localhost:8000`。

## 📦 部署（GitHub Pages）

仓库内含 `.github/workflows/deploy.yml`：推送到部署分支后，GitHub Actions 会自动启用并发布 Pages，站点地址形如
`https://<用户名>.github.io/autoblur/`。

## 🗂️ 目录结构

```
index.html                 # 页面结构
css/style.css              # 样式
js/mosaic.js               # 马赛克 / 模糊 / 遮挡
js/tracker.js              # IoU 跟踪与时间插值
js/detector.js             # OpenCV.js 加载与人脸/车牌检测
js/app.js                  # 主流程与交互
vendor/opencv.js           # 本地内置的 OpenCV.js（含 WASM，自包含）
models/*.xml               # Haar 级联模型（人脸 / 车牌）
.github/workflows/deploy.yml
```

## 📄 许可与来源

- [OpenCV.js](https://github.com/opencv/opencv) — Apache-2.0，内置构建来自 [`@techstark/opencv-js`](https://www.npmjs.com/package/@techstark/opencv-js)。
- Haar 级联模型来自 OpenCV 官方 `data/haarcascades`。
