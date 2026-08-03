/* detector.js — main-thread proxy to the OpenCV Web Worker (js/cv-worker.js).
 *
 * All OpenCV loading and detection happen in the worker so the ~10MB WASM load
 * never freezes the page. This module just forwards init/detect and resolves
 * promises when the worker replies.
 *
 * detect(imageData, opts) -> Promise<{faces, plates}> with boxes normalized to [0,1]. */
(function (global) {
  'use strict';

  var worker = null;
  var ready = false;
  var faceMode = 'none';
  var nextId = 1;
  var pending = Object.create(null);
  var statusCb = null;
  var initResolve = null, initReject = null;
  var initPromise = null;

  function onMessage(e) {
    var m = e.data;
    if (!m) return;
    if (m.type === 'status') {
      if (statusCb) statusCb(m.text);
    } else if (m.type === 'ready') {
      ready = true;
      faceMode = m.faceMode;
      if (statusCb) statusCb('引擎就绪');
      if (initResolve) initResolve();
    } else if (m.type === 'error') {
      if (initReject) initReject(new Error(m.message || '引擎加载失败'));
    } else if (m.type === 'result') {
      var cb = pending[m.id];
      if (cb) { delete pending[m.id]; cb({ faces: m.faces || [], plates: m.plates || [] }); }
    }
  }

  function init(onStatus) {
    if (initPromise) return initPromise;
    statusCb = onStatus || null;
    initPromise = new Promise(function (resolve, reject) {
      initResolve = resolve; initReject = reject;
      try {
        worker = new Worker('js/cv-worker.js');
      } catch (e) {
        reject(new Error('无法创建后台线程 (Worker)：' + (e.message || e)));
        return;
      }
      worker.onmessage = onMessage;
      worker.onerror = function (e) {
        if (!ready && initReject) initReject(new Error('识别引擎线程出错：' + (e.message || '未知错误')));
      };
      worker.postMessage({ type: 'init' });
    });
    return initPromise;
  }

  // imageData: an ImageData (or {data, width, height}). Its buffer is transferred
  // to the worker, so pass a fresh ImageData each call (e.g. from getImageData).
  function detect(imageData, opts) {
    return new Promise(function (resolve) {
      if (!ready || !worker) { resolve({ faces: [], plates: [] }); return; }
      var id = nextId++;
      pending[id] = resolve;
      var buf = imageData.data.buffer;
      try {
        worker.postMessage({
          type: 'detect', id: id,
          width: imageData.width, height: imageData.height,
          buffer: buf,
          face: !!opts.face, plate: !!opts.plate
        }, [buf]);
      } catch (e) {
        delete pending[id];
        resolve({ faces: [], plates: [] });
      }
    });
  }

  global.Detector = {
    init: init,
    detect: detect,
    isReady: function () { return ready; },
    faceMode: function () { return faceMode; }
  };
})(window);
