/* detector.js — loads OpenCV.js (vendored, WASM embedded) and runs Haar-cascade
 * detection for faces and license plates on a canvas. Returns pixel-space rects. */
(function (global) {
  'use strict';

  const CASCADES = {
    face: 'models/haarcascade_frontalface_alt2.xml',
    plate: 'models/haarcascade_russian_plate_number.xml'
  };

  let cvRef = null;
  let ready = false;
  const classifiers = {};

  function loadScript(src) {
    return new Promise((resolve, reject) => {
      const s = document.createElement('script');
      s.src = src;
      s.async = true;
      s.onload = () => resolve();
      s.onerror = () => reject(new Error('无法加载 ' + src));
      document.head.appendChild(s);
    });
  }

  function waitForRuntime() {
    return new Promise((resolve, reject) => {
      const started = Date.now();
      const done = () => resolve(global.cv);
      // Some builds expose onRuntimeInitialized; set it if runtime not ready yet.
      try {
        if (typeof global.cv !== 'undefined' && global.cv && !global.cv.Mat) {
          global.cv.onRuntimeInitialized = done;
        }
      } catch (e) { /* ignore */ }
      (function check() {
        try {
          if (typeof global.cv !== 'undefined' && global.cv &&
              global.cv.Mat && typeof global.cv.CascadeClassifier === 'function') {
            return resolve(global.cv);
          }
        } catch (e) { /* ignore */ }
        if (Date.now() - started > 180000) return reject(new Error('OpenCV 初始化超时'));
        setTimeout(check, 60);
      })();
    });
  }

  async function loadCascade(cv, url, fsName) {
    const resp = await fetch(url);
    if (!resp.ok) throw new Error('无法加载模型 ' + url);
    const buf = new Uint8Array(await resp.arrayBuffer());
    try { cv.FS_unlink(fsName); } catch (e) { /* not present yet */ }
    cv.FS_createDataFile('/', fsName, buf, true, false, false);
    const clf = new cv.CascadeClassifier();
    if (!clf.load(fsName)) throw new Error('模型解析失败 ' + fsName);
    return clf;
  }

  async function init(onStatus) {
    if (ready) return cvRef;
    onStatus && onStatus('加载识别引擎 (OpenCV.js，约 10MB)…');
    await loadScript('vendor/opencv.js');
    cvRef = await waitForRuntime();
    onStatus && onStatus('加载识别模型…');
    classifiers.face = await loadCascade(cvRef, CASCADES.face, 'face.xml');
    classifiers.plate = await loadCascade(cvRef, CASCADES.plate, 'plate.xml');
    ready = true;
    onStatus && onStatus('引擎就绪');
    return cvRef;
  }

  function runCascade(cv, gray, clf, scaleFactor, minNeighbors, minW, minH) {
    const rects = [];
    const vec = new cv.RectVector();
    const minSize = new cv.Size(minW, minH);
    const maxSize = new cv.Size(0, 0);
    try {
      clf.detectMultiScale(gray, vec, scaleFactor, minNeighbors, 0, minSize, maxSize);
      for (let i = 0; i < vec.size(); i++) {
        const r = vec.get(i);
        rects.push({ x: r.x, y: r.y, w: r.width, h: r.height });
      }
    } finally {
      vec.delete();
      if (minSize.delete) minSize.delete();
      if (maxSize.delete) maxSize.delete();
    }
    return rects;
  }

  // canvas: already downscaled detection canvas. opts: {face, plate}
  // returns { faces:[{x,y,w,h}], plates:[{x,y,w,h}] } in canvas pixel coords.
  function detect(canvas, opts) {
    const cv = cvRef;
    const src = cv.imread(canvas);
    const gray = new cv.Mat();
    const out = { faces: [], plates: [] };
    try {
      cv.cvtColor(src, gray, cv.COLOR_RGBA2GRAY);
      cv.equalizeHist(gray, gray);
      if (opts.face) {
        out.faces = runCascade(cv, gray, classifiers.face, 1.1, 5, 24, 24);
      }
      if (opts.plate) {
        out.plates = runCascade(cv, gray, classifiers.plate, 1.1, 4, 26, 9);
      }
    } finally {
      src.delete();
      gray.delete();
    }
    return out;
  }

  global.Detector = {
    init,
    detect,
    isReady: () => ready,
    get cv() { return cvRef; }
  };
})(window);
