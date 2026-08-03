# 🛡️ AutoBlur — 视频车牌 / 人脸自动打码

在浏览器里上传视频 → 自动识别**车牌**和**人脸** → 勾选要处理的对象 → 一键**打马赛克 / 模糊 / 遮挡**并导出。

> 🔒 **隐私优先**：所有识别与视频处理都在你自己的浏览器本地完成，视频**不会上传**到任何服务器。

**在线预览**：`https://zhaoweiyang.github.io/autoblur/`（GitHub Pages 部署完成后可访问）

---

## ✨ 功能

- **上传视频**：拖拽或点击选择，支持浏览器可播放的常见格式（MP4 / WebM / MOV 等）。
- **自动识别**：人脸使用 **YuNet 深度模型**（ONNX，经 [OpenCV.js](https://opencv.org/) 的 DNN 模块在浏览器本地运行，对侧脸/角度/光线更鲁棒）；车牌使用 Haar 级联模型；并通过 IoU 跟踪为每个目标分配持续 ID。
- **自由勾选**：识别结果以缩略图列表呈现，可逐个勾选/取消，也可直接点击画面上的方框切换。
- **手动补框**：对漏检的目标，可在预览画面上手动拖拽框选要遮挡的区域。
- **多种遮挡方式**：马赛克、高斯模糊、黑色遮挡，强度可调。
- **导出下载**：在浏览器内重新编码为视频（含原始音轨）并直接下载。

## 🧠 工作原理

1. **采样识别**：按设定密度（2/3/5 帧每秒）在时间轴上逐帧抽样，缩放到 448px 宽后运行检测（人脸 YuNet DNN，车牌 Haar）。
2. **目标跟踪**：`tracker.js` 用 IoU 贪心匹配把跨帧检测串成一个个「目标」，记录出现时间段并挑选最清晰的一帧作缩略图。
3. **本地渲染**：导出时按原速播放源视频，用 `requestVideoFrameCallback` 逐帧绘制到画布，对所选目标按时间插值出的位置打码。
4. **录制导出**：用 `canvas.captureStream()` + `MediaRecorder` 录制画布，并通过 Web Audio 把原始音轨混入，生成可下载的视频文件。

识别引擎（OpenCV.js + WASM，约 10MB）运行在 **Web Worker 后台线程**里：主线程直接加载这么大的 WASM 会被浏览器长时间阻塞（Chrome 限制主线程上的大型同步 WASM 编译），放到 Worker 里既不冻结界面、又能在约 1 秒内完成初始化。

全部逻辑是纯静态前端（HTML + CSS + JS），因此可以直接部署在 GitHub Pages 上。

## ⚠️ 使用说明与局限

- **人脸**用 YuNet 深度模型，对侧脸、角度和光线较鲁棒；**车牌**用经典 Haar 模型，**正对、清晰的车牌**效果最好，倾斜/模糊/过小的车牌可能漏检。遇到漏检请用「✏️ 手动框选」补充。
- 曾评估用深度模型（LPD-YuNet）识别车牌以提升精度，但在 GitHub Pages 的纯浏览器 WASM 环境（无 SIMD/多线程）下单帧推理约 5 秒，逐帧运行不现实，故车牌暂用快速 Haar。若需要更高车牌精度，可改用 onnxruntime-web（SIMD）作为推理后端——欢迎提 issue。
- 深度人脸识别比传统方法慢（约每帧 0.1–0.2 秒），因此识别阶段会比纯 Haar 版本更耗时，请留意进度条；长视频建议选“快速”密度。
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
vendor/opencv.js           # 本地内置的 OpenCV.js（含 WASM + DNN，自包含）
models/face_detection_yunet_2023mar.onnx     # YuNet 人脸深度模型
models/haarcascade_frontalface_alt2.xml      # 人脸 Haar（YuNet 加载失败时回退）
models/haarcascade_russian_plate_number.xml  # 车牌 Haar
.github/workflows/deploy.yml
```

## 📄 许可与来源

- [OpenCV.js](https://github.com/opencv/opencv) — Apache-2.0，内置构建来自 [`@techstark/opencv-js`](https://www.npmjs.com/package/@techstark/opencv-js)。
- **YuNet** 人脸模型来自 [OpenCV Zoo](https://github.com/opencv/opencv_zoo)（`face_detection_yunet`，MIT）。
- Haar 级联模型来自 OpenCV 官方 `data/haarcascades`。
