/* detector.js — loads OpenCV.js (vendored, WASM embedded) and detects faces and
 * license plates on a canvas.
 *
 * Faces: YuNet DNN (models/face_detection_yunet_2023mar.onnx) via cv.FaceDetectorYN
 *        — far more robust to pose/lighting than Haar. Falls back to a Haar cascade
 *        if the model fails to load.
 * Plates: Haar cascade (fast). A DNN plate model was evaluated but pure-WASM
 *         inference on GitHub Pages is too slow (~5s/frame) to run per sample.
 *
 * detect() returns boxes normalized to [0,1] relative to the input canvas. */
(function (global) {
  'use strict';

  const YUNET_URL = 'models/face_detection_yunet_2023mar.onnx';
  const FACE_HAAR = 'models/haarcascade_frontalface_alt2.xml';
  const PLATE_HAAR = 'models/haarcascade_russian_plate_number.xml';
  const FACE_SCORE = 0.5;

  let cvRef = null;
  let ready = false;
  let faceMode = 'none'; // 'yunet' | 'haar'
  let yunet = null;
  let faceCascade = null;
  let plateCascade = null;
  let curW = 0, curH = 0;

  function loadScript(src) {
    return new Promise((resolve, reject) => {
      const s = document.createElement('script');
      s.src = src; s.async = true;
      s.onload = () => resolve();
      s.onerror = () => reject(new Error('无法加载 ' + src));
      document.head.appendChild(s);
    });
  }

  function waitForRuntime() {
    return new Promise((resolve, reject) => {
      const started = Date.now();
      try {
        if (typeof global.cv !== 'undefined' && global.cv && !global.cv.Mat) {
          global.cv.onRuntimeInitialized = () => resolve(global.cv);
        }
      } catch (e) { /* ignore */ }
      (function check() {
        try {
          if (typeof global.cv !== 'undefined' && global.cv &&
              global.cv.Mat && typeof global.cv.FaceDetectorYN === 'function') {
            return resolve(global.cv);
          }
        } catch (e) { /* ignore */ }
        if (Date.now() - started > 180000) return reject(new Error('OpenCV 初始化超时'));
        setTimeout(check, 60);
      })();
    });
  }

  async function fetchToFS(url, fsName) {
    const resp = await fetch(url);
    if (!resp.ok) throw new Error('无法加载模型 ' + url);
    const buf = new Uint8Array(await resp.arrayBuffer());
    try { cvRef.FS_unlink(fsName); } catch (e) { /* not present */ }
    cvRef.FS_createDataFile('/', fsName, buf, true, false, false);
  }

  async function init(onStatus) {
    if (ready) return cvRef;
    onStatus && onStatus('加载识别引擎 (OpenCV.js，约 10MB)…');
    await loadScript('vendor/opencv.js');
    cvRef = await waitForRuntime();
    const cv = cvRef;

    // Faces: YuNet DNN, fall back to Haar cascade.
    onStatus && onStatus('加载人脸模型 (YuNet DNN)…');
    try {
      await fetchToFS(YUNET_URL, 'face_yunet.onnx');
      const sz = new cv.Size(320, 320);
      yunet = new cv.FaceDetectorYN('face_yunet.onnx', '', sz, FACE_SCORE, 0.3, 5000);
      if (sz.delete) sz.delete();
      faceMode = 'yunet';
    } catch (e) {
      console.warn('YuNet 加载失败，回退到 Haar：', e);
      await fetchToFS(FACE_HAAR, 'face.xml');
      faceCascade = new cv.CascadeClassifier();
      if (!faceCascade.load('face.xml')) throw new Error('人脸模型加载失败');
      faceMode = 'haar';
    }

    // Plates: Haar cascade (fast enough for per-frame sampling).
    onStatus && onStatus('加载车牌模型…');
    await fetchToFS(PLATE_HAAR, 'plate.xml');
    plateCascade = new cv.CascadeClassifier();
    if (!plateCascade.load('plate.xml')) throw new Error('车牌模型加载失败');

    ready = true;
    onStatus && onStatus('引擎就绪');
    return cvRef;
  }

  function clamp01(v) { return v < 0 ? 0 : v > 1 ? 1 : v; }

  function detectFacesYuNet(canvas) {
    const cv = cvRef, res = [];
    const W = canvas.width, H = canvas.height;
    const src = cv.imread(canvas);
    const bgr = new cv.Mat();
    const faces = new cv.Mat();
    try {
      cv.cvtColor(src, bgr, cv.COLOR_RGBA2BGR);
      if (W !== curW || H !== curH) {
        const sz = new cv.Size(W, H);
        yunet.setInputSize(sz);
        if (sz.delete) sz.delete();
        curW = W; curH = H;
      }
      yunet.detect(bgr, faces);
      const sc = faces.cols - 1;
      for (let i = 0; i < faces.rows; i++) {
        const s = faces.floatAt(i, sc);
        if (s < FACE_SCORE) continue;
        const x = faces.floatAt(i, 0), y = faces.floatAt(i, 1);
        const w = faces.floatAt(i, 2), h = faces.floatAt(i, 3);
        res.push({ x: clamp01(x / W), y: clamp01(y / H), w: w / W, h: h / H, score: s });
      }
    } finally {
      src.delete(); bgr.delete(); faces.delete();
    }
    return res;
  }

  function haarDetect(canvas, clf, scaleFactor, minNeighbors, minW, minH) {
    const cv = cvRef, res = [];
    const W = canvas.width, H = canvas.height;
    const src = cv.imread(canvas);
    const gray = new cv.Mat();
    const vec = new cv.RectVector();
    const mnS = new cv.Size(minW, minH), mxS = new cv.Size(0, 0);
    try {
      cv.cvtColor(src, gray, cv.COLOR_RGBA2GRAY);
      cv.equalizeHist(gray, gray);
      clf.detectMultiScale(gray, vec, scaleFactor, minNeighbors, 0, mnS, mxS);
      for (let i = 0; i < vec.size(); i++) {
        const r = vec.get(i);
        res.push({ x: r.x / W, y: r.y / H, w: r.width / W, h: r.height / H, score: 1 });
      }
    } finally {
      src.delete(); gray.delete(); vec.delete();
      if (mnS.delete) mnS.delete();
      if (mxS.delete) mxS.delete();
    }
    return res;
  }

  // canvas: downscaled detection canvas. opts: {face, plate}
  // returns { faces:[{x,y,w,h,score}], plates:[...] } with boxes normalized to [0,1].
  function detect(canvas, opts) {
    const out = { faces: [], plates: [] };
    if (opts.face) {
      out.faces = faceMode === 'yunet'
        ? detectFacesYuNet(canvas)
        : haarDetect(canvas, faceCascade, 1.1, 5, 24, 24);
    }
    if (opts.plate) {
      out.plates = haarDetect(canvas, plateCascade, 1.1, 4, 26, 9);
    }
    return out;
  }

  global.Detector = {
    init,
    detect,
    isReady: () => ready,
    faceMode: () => faceMode,
    get cv() { return cvRef; }
  };
})(window);
