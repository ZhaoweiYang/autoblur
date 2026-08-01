/* mosaic.js — pixelation / blur / solid obfuscation on a canvas 2D context.
 * All rects are in destination-canvas pixel coordinates: {x, y, w, h}. */
(function (global) {
  'use strict';

  const tmp = document.createElement('canvas');
  const tctx = tmp.getContext('2d', { willReadFrequently: true });

  function clampRect(canvas, r) {
    let x = Math.round(r.x), y = Math.round(r.y), w = Math.round(r.w), h = Math.round(r.h);
    if (x < 0) { w += x; x = 0; }
    if (y < 0) { h += y; y = 0; }
    if (x + w > canvas.width) w = canvas.width - x;
    if (y + h > canvas.height) h = canvas.height - y;
    return { x, y, w, h };
  }

  // gridN: number of blocks across the longer side (bigger = finer / weaker).
  function mosaic(ctx, r, gridN) {
    const c = clampRect(ctx.canvas, r);
    if (c.w <= 1 || c.h <= 1) return;
    gridN = Math.max(2, Math.min(80, gridN | 0 || 10));
    const block = Math.max(2, Math.round(Math.max(c.w, c.h) / gridN));
    const cols = Math.max(1, Math.round(c.w / block));
    const rows = Math.max(1, Math.round(c.h / block));
    tmp.width = cols; tmp.height = rows;
    tctx.imageSmoothingEnabled = false;
    tctx.clearRect(0, 0, cols, rows);
    tctx.drawImage(ctx.canvas, c.x, c.y, c.w, c.h, 0, 0, cols, rows);
    const prev = ctx.imageSmoothingEnabled;
    ctx.imageSmoothingEnabled = false;
    ctx.drawImage(tmp, 0, 0, cols, rows, c.x, c.y, c.w, c.h);
    ctx.imageSmoothingEnabled = prev;
  }

  function blur(ctx, r, radius) {
    const c = clampRect(ctx.canvas, r);
    if (c.w <= 1 || c.h <= 1) return;
    radius = Math.max(2, radius | 0);
    tmp.width = c.w; tmp.height = c.h;
    tctx.filter = 'none';
    tctx.clearRect(0, 0, c.w, c.h);
    tctx.drawImage(ctx.canvas, c.x, c.y, c.w, c.h, 0, 0, c.w, c.h);
    ctx.save();
    ctx.beginPath();
    ctx.rect(c.x, c.y, c.w, c.h);
    ctx.clip();
    ctx.filter = 'blur(' + radius + 'px)';
    ctx.drawImage(tmp, 0, 0, c.w, c.h, c.x, c.y, c.w, c.h);
    ctx.restore();
    ctx.filter = 'none';
  }

  function solid(ctx, r, color) {
    const c = clampRect(ctx.canvas, r);
    if (c.w <= 0 || c.h <= 0) return;
    ctx.save();
    ctx.fillStyle = color || '#000';
    ctx.fillRect(c.x, c.y, c.w, c.h);
    ctx.restore();
  }

  // strength: 1..10 (bigger = stronger obfuscation)
  function apply(ctx, r, opts) {
    opts = opts || {};
    const strength = Math.max(1, Math.min(10, opts.strength || 6));
    const style = opts.style || 'mosaic';
    if (style === 'black') {
      solid(ctx, r, '#000');
    } else if (style === 'blur') {
      // stronger => larger radius relative to region size
      const radius = Math.max(3, Math.round(Math.max(r.w, r.h) / (14 - strength)));
      blur(ctx, r, radius);
    } else {
      // mosaic: stronger => fewer, larger blocks => smaller gridN
      const gridN = Math.round(22 - (strength - 1) * (16 / 9));
      mosaic(ctx, r, gridN);
    }
  }

  global.Mosaic = { apply, mosaic, blur, solid };
})(window);
