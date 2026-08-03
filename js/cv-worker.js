/* cv-worker.js — runs OpenCV.js entirely off the main thread.
 *
 * Loading the ~10MB OpenCV.js (with its embedded WASM) on the main thread
 * blocks/freezes the page for a long time in browsers (Chrome restricts large
 * synchronous WASM compilation on the main thread). In a Worker it initializes
 * in well under a second and never touches the UI thread. This worker owns
 * model loading and all detection; the page talks to it via messages. */

/* eslint-disable no-undef */
'use strict';

var CV_READY = false;
var faceMode = 'none'; // 'yunet' | 'haar'
var yunet = null, faceCascade = null, plateCascade = null;
var curW = 0, curH = 0;
var FACE_SCORE = 0.5;

function post(type, extra) {
  var m = { type: type };
  if (extra) { for (var k in extra) if (extra.hasOwnProperty(k)) m[k] = extra[k]; }
  postMessage(m);
}

function loadCv() {
  return new Promise(function (resolve, reject) {
    try {
      importScripts('../vendor/opencv.js');
    } catch (e) { reject(new Error('无法加载 OpenCV.js: ' + (e.message || e))); return; }
    var started = Date.now();
    (function check() {
      try {
        if (typeof cv !== 'undefined' && cv && cv.Mat && typeof cv.FaceDetectorYN === 'function') return resolve();
        if (typeof cv !== 'undefined' && cv && !cv.__hooked) {
          cv.__hooked = true;
          cv.onRuntimeInitialized = function () { resolve(); };
        }
      } catch (e) { /* not ready */ }
      if (Date.now() - started > 180000) return reject(new Error('OpenCV 初始化超时'));
      setTimeout(check, 50);
    })();
  });
}

function fetchToFS(url, name) {
  return fetch(url).then(function (r) {
    if (!r.ok) throw new Error('无法加载模型 ' + url);
    return r.arrayBuffer();
  }).then(function (buf) {
    var data = new Uint8Array(buf);
    try { cv.FS_unlink(name); } catch (e) { /* not present */ }
    cv.FS_createDataFile('/', name, data, true, false, false);
  });
}

function init() {
  post('status', { text: '加载识别引擎 (OpenCV.js，约 10MB)…' });
  loadCv().then(function () {
    post('status', { text: '加载人脸模型 (YuNet DNN)…' });
    return fetchToFS('../models/face_detection_yunet_2023mar.onnx', 'face_yunet.onnx').then(function () {
      var sz = new cv.Size(320, 320);
      yunet = new cv.FaceDetectorYN('face_yunet.onnx', '', sz, FACE_SCORE, 0.3, 5000);
      if (sz.delete) sz.delete();
      faceMode = 'yunet';
    }).catch(function (e) {
      // Fallback to Haar face cascade.
      return fetchToFS('../models/haarcascade_frontalface_alt2.xml', 'face.xml').then(function () {
        faceCascade = new cv.CascadeClassifier();
        if (!faceCascade.load('face.xml')) throw new Error('人脸模型加载失败');
        faceMode = 'haar';
      });
    });
  }).then(function () {
    post('status', { text: '加载车牌模型…' });
    return fetchToFS('../models/haarcascade_russian_plate_number.xml', 'plate.xml').then(function () {
      plateCascade = new cv.CascadeClassifier();
      if (!plateCascade.load('plate.xml')) throw new Error('车牌模型加载失败');
    });
  }).then(function () {
    CV_READY = true;
    post('ready', { faceMode: faceMode });
  }).catch(function (e) {
    post('error', { message: String(e && e.message ? e.message : e) });
  });
}

function clamp01(v) { return v < 0 ? 0 : v > 1 ? 1 : v; }

function detectYuNet(bgr, W, H) {
  var res = [];
  var faces = new cv.Mat();
  try {
    if (W !== curW || H !== curH) {
      var sz = new cv.Size(W, H);
      yunet.setInputSize(sz);
      if (sz.delete) sz.delete();
      curW = W; curH = H;
    }
    yunet.detect(bgr, faces);
    var sc = faces.cols - 1;
    for (var i = 0; i < faces.rows; i++) {
      var s = faces.floatAt(i, sc);
      if (s < FACE_SCORE) continue;
      res.push({
        x: clamp01(faces.floatAt(i, 0) / W), y: clamp01(faces.floatAt(i, 1) / H),
        w: faces.floatAt(i, 2) / W, h: faces.floatAt(i, 3) / H, score: s
      });
    }
  } finally { faces.delete(); }
  return res;
}

function haarDetect(rgba, W, H, clf, sf, mn, minW, minH) {
  var res = [];
  var gray = new cv.Mat();
  var vec = new cv.RectVector();
  var mnS = new cv.Size(minW, minH), mxS = new cv.Size(0, 0);
  try {
    cv.cvtColor(rgba, gray, cv.COLOR_RGBA2GRAY);
    cv.equalizeHist(gray, gray);
    clf.detectMultiScale(gray, vec, sf, mn, 0, mnS, mxS);
    for (var i = 0; i < vec.size(); i++) {
      var r = vec.get(i);
      res.push({ x: r.x / W, y: r.y / H, w: r.width / W, h: r.height / H, score: 1 });
    }
  } finally {
    gray.delete(); vec.delete();
    if (mnS.delete) mnS.delete();
    if (mxS.delete) mxS.delete();
  }
  return res;
}

function doDetect(msg) {
  var W = msg.width, H = msg.height;
  var rgba = cv.matFromImageData({ data: new Uint8ClampedArray(msg.buffer), width: W, height: H });
  var out = { faces: [], plates: [] };
  var bgr = null;
  try {
    if (msg.face) {
      if (faceMode === 'yunet') {
        bgr = new cv.Mat();
        cv.cvtColor(rgba, bgr, cv.COLOR_RGBA2BGR);
        out.faces = detectYuNet(bgr, W, H);
      } else {
        out.faces = haarDetect(rgba, W, H, faceCascade, 1.1, 5, 24, 24);
      }
    }
    if (msg.plate) out.plates = haarDetect(rgba, W, H, plateCascade, 1.1, 4, 26, 9);
  } catch (e) { /* return whatever we have */ }
  finally { rgba.delete(); if (bgr) bgr.delete(); }
  post('result', { id: msg.id, faces: out.faces, plates: out.plates });
}

onmessage = function (e) {
  var msg = e.data;
  if (!msg) return;
  if (msg.type === 'init') init();
  else if (msg.type === 'detect') {
    if (!CV_READY) { post('result', { id: msg.id, faces: [], plates: [] }); return; }
    doDetect(msg);
  }
};
