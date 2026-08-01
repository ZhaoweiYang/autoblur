/* tracker.js — simple IoU tracker to give detections persistent identities
 * across sampled frames, plus time-based box interpolation for playback.
 * All boxes are normalized to the video frame: {x, y, w, h} in [0,1]. */
(function (global) {
  'use strict';

  function iou(a, b) {
    const x1 = Math.max(a.x, b.x), y1 = Math.max(a.y, b.y);
    const x2 = Math.min(a.x + a.w, b.x + b.w), y2 = Math.min(a.y + a.h, b.y + b.h);
    const iw = Math.max(0, x2 - x1), ih = Math.max(0, y2 - y1);
    const inter = iw * ih;
    const uni = a.w * a.h + b.w * b.h - inter;
    return uni <= 0 ? 0 : inter / uni;
  }

  function lerp(a, b, f) { return a + (b - a) * f; }
  function lerpBox(a, b, f) {
    return { x: lerp(a.x, b.x, f), y: lerp(a.y, b.y, f), w: lerp(a.w, b.w, f), h: lerp(a.h, b.h, f) };
  }

  class Tracker {
    constructor(category, opts) {
      opts = opts || {};
      this.category = category;
      this.iouThresh = opts.iouThresh != null ? opts.iouThresh : 0.2;
      this.maxGap = opts.maxGap != null ? opts.maxGap : 0.8; // seconds unmatched before a track closes
      this.tracks = [];
      this._active = [];
      this._next = 1;
    }

    // dets: [{ box:{x,y,w,h}, thumb:dataURL }] for THIS category at time t
    update(dets, t) {
      const used = new Array(dets.length).fill(false);
      // Match existing active tracks greedily by IoU (most recent first).
      const active = this._active.slice().sort((a, b) => b.lastT - a.lastT);
      for (const tr of active) {
        let best = this.iouThresh, bi = -1;
        for (let i = 0; i < dets.length; i++) {
          if (used[i]) continue;
          const s = iou(tr.last, dets[i].box);
          if (s >= best) { best = s; bi = i; }
        }
        if (bi >= 0) {
          used[bi] = true;
          const d = dets[bi];
          tr.samples.push({ t, box: d.box });
          tr.last = d.box;
          tr.lastT = t;
          const area = d.box.w * d.box.h;
          if (area > tr.bestArea) { tr.bestArea = area; tr.thumb = d.thumb; tr.bestT = t; }
        }
      }
      // Unmatched detections become new tracks.
      for (let i = 0; i < dets.length; i++) {
        if (used[i]) continue;
        const d = dets[i];
        const tr = {
          id: this.category + '-' + (this._next++),
          category: this.category,
          samples: [{ t, box: d.box }],
          last: d.box,
          firstT: t, lastT: t, bestT: t,
          bestArea: d.box.w * d.box.h,
          thumb: d.thumb
        };
        this._active.push(tr);
        this.tracks.push(tr);
      }
      // Close tracks that have gone missing for too long.
      this._active = this._active.filter((tr) => (t - tr.lastT) <= this.maxGap);
    }

    finalize(minSamples) {
      minSamples = minSamples || 1;
      return this.tracks.filter((tr) => tr.samples.length >= minSamples);
    }
  }

  // Box of a track at time t (interpolated). Returns null outside its lifespan (+pad).
  function boxAt(track, t, pad) {
    pad = pad == null ? 0.35 : pad;
    const s = track.samples;
    if (!s.length) return null;
    if (t < s[0].t - pad || t > s[s.length - 1].t + pad) return null;
    if (t <= s[0].t) return s[0].box;
    if (t >= s[s.length - 1].t) return s[s.length - 1].box;
    for (let i = 0; i < s.length - 1; i++) {
      if (t >= s[i].t && t <= s[i + 1].t) {
        const span = s[i + 1].t - s[i].t;
        if (span <= 1e-6) return s[i].box;
        return lerpBox(s[i].box, s[i + 1].box, (t - s[i].t) / span);
      }
    }
    return s[s.length - 1].box;
  }

  global.Tracking = { Tracker, boxAt, iou };
})(window);
