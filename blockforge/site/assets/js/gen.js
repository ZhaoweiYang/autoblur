/* BlockForge — procedural asset generators.
 * Everything runs locally in the browser: canvas for images, OfflineAudioContext
 * for sound. Output is seeded by the prompt text + a variation counter, so the
 * same prompt gives the same result and "New variation" gives a fresh one. */
(function () {
  "use strict";

  function hash(str) {
    let h = 2166136261 >>> 0;
    for (let i = 0; i < str.length; i++) {
      h ^= str.charCodeAt(i);
      h = Math.imul(h, 16777619);
    }
    return h >>> 0;
  }

  function rng(seed) {
    let a = seed >>> 0;
    return function () {
      a = (a + 0x6d2b79f5) >>> 0;
      let t = a;
      t = Math.imul(t ^ (t >>> 15), t | 1);
      t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }

  const has = (p, ...words) => words.some((w) => p.includes(w));

  // Pick a palette from keywords (EN + JA), falling back to the seed.
  const PALETTES = [
    { k: ["lava", "fire", "volcan", "溶岩", "火", "炎"], c: ["#ff5a1f", "#ffb020", "#3a0a05", "#ffe08a"] },
    { k: ["ice", "frost", "snow", "氷", "雪"], c: ["#5fd3ff", "#e6f7ff", "#0b2a4a", "#9be7ff"] },
    { k: ["neon", "cyber", "sci-fi", "scifi", "ネオン", "サイバー", "sf"], c: ["#ff2bd6", "#22e3ff", "#120428", "#a855f7"] },
    { k: ["gold", "coin", "cash", "money", "tycoon", "金", "コイン", "タイクーン"], c: ["#ffc61a", "#fff1a8", "#3b2300", "#ff8a00"] },
    { k: ["zombie", "horror", "dark", "shadow", "ゾンビ", "ホラー", "闇"], c: ["#6ee04a", "#c9ff9e", "#0b1408", "#8b1e3f"] },
    { k: ["forest", "moss", "nature", "grass", "森", "苔", "草"], c: ["#4caf50", "#c5e86c", "#0e2410", "#8d6e3f"] },
    { k: ["candy", "pink", "cute", "pet", "お菓子", "ペット", "かわいい"], c: ["#ff7ac6", "#ffe0f2", "#3b0f2a", "#7ad7ff"] },
    { k: ["ocean", "pirate", "water", "sea", "海", "海賊"], c: ["#1e88e5", "#80d8ff", "#06213d", "#ffca28"] },
    { k: ["dragon", "magic", "crystal", "mage", "魔法", "ドラゴン", "クリスタル"], c: ["#8b5cf6", "#e9d5ff", "#1a0b33", "#22d3ee"] },
    { k: ["emerald", "diamond", "gem", "エメラルド", "ダイヤ"], c: ["#10e39a", "#c9fff0", "#04271c", "#38bdf8"] }
  ];
  const FALLBACK = [
    ["#ffb020", "#fff4c2", "#1b1206", "#ff4d4d"],
    ["#38bdf8", "#e0f2fe", "#081a2b", "#facc15"],
    ["#f43f5e", "#ffe4e6", "#2a0610", "#22c55e"],
    ["#22c55e", "#dcfce7", "#06210f", "#f97316"]
  ];
  function palette(p, r) {
    for (const pal of PALETTES) if (has(p, ...pal.k)) return pal.c;
    return FALLBACK[Math.floor(r() * FALLBACK.length)];
  }

  function makeCanvas(w, h) {
    const c = document.createElement("canvas");
    c.width = w;
    c.height = h;
    return c;
  }

  function roundRect(ctx, x, y, w, h, r) {
    ctx.beginPath();
    ctx.moveTo(x + r, y);
    ctx.arcTo(x + w, y, x + w, y + h, r);
    ctx.arcTo(x + w, y + h, x, y + h, r);
    ctx.arcTo(x, y + h, x, y, r);
    ctx.arcTo(x, y, x + w, y, r);
    ctx.closePath();
  }

  // A blocky character (head + body + limbs) with a simple face.
  function blockyChar(ctx, x, y, s, body, skin, r, expression) {
    ctx.save();
    ctx.translate(x, y);
    ctx.lineWidth = s * 0.06;
    ctx.strokeStyle = "rgba(0,0,0,.55)";
    const part = (px, py, pw, ph, col) => {
      ctx.fillStyle = col;
      roundRect(ctx, px * s, py * s, pw * s, ph * s, s * 0.08);
      ctx.fill();
      ctx.stroke();
    };
    part(-0.95, 0.15, 0.42, 1.0, skin); // left arm
    part(0.53, 0.15, 0.42, 1.0, skin); // right arm
    part(-0.5, 1.15, 0.48, 0.95, "#2b3a67"); // legs
    part(0.02, 1.15, 0.48, 0.95, "#2b3a67");
    part(-0.55, 0.1, 1.1, 1.1, body); // torso
    part(-0.45, -0.85, 0.9, 0.9, skin); // head
    // face
    ctx.fillStyle = "#111";
    const eyeY = -0.5 * s;
    ctx.beginPath();
    ctx.ellipse(-0.18 * s, eyeY, 0.07 * s, expression === "shock" ? 0.1 * s : 0.07 * s, 0, 0, Math.PI * 2);
    ctx.ellipse(0.18 * s, eyeY, 0.07 * s, expression === "shock" ? 0.1 * s : 0.07 * s, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    if (expression === "shock") {
      ctx.ellipse(0, -0.2 * s, 0.12 * s, 0.14 * s, 0, 0, Math.PI * 2);
      ctx.fill();
    } else {
      ctx.lineWidth = s * 0.05;
      ctx.strokeStyle = "#111";
      ctx.arc(0, -0.32 * s, 0.18 * s, 0.15 * Math.PI, 0.85 * Math.PI);
      ctx.stroke();
    }
    ctx.restore();
  }

  function gem(ctx, cx, cy, s, c1, c2) {
    ctx.save();
    ctx.translate(cx, cy);
    const pts = [[0, -1], [0.75, -0.35], [0.55, 0.75], [-0.55, 0.75], [-0.75, -0.35]];
    ctx.beginPath();
    pts.forEach(([x, y], i) => (i ? ctx.lineTo(x * s, y * s) : ctx.moveTo(x * s, y * s)));
    ctx.closePath();
    const g = ctx.createLinearGradient(-s, -s, s, s);
    g.addColorStop(0, c2);
    g.addColorStop(1, c1);
    ctx.fillStyle = g;
    ctx.fill();
    ctx.lineWidth = s * 0.08;
    ctx.strokeStyle = "rgba(0,0,0,.5)";
    ctx.stroke();
    ctx.fillStyle = "rgba(255,255,255,.55)";
    ctx.beginPath();
    ctx.moveTo(0, -1 * s);
    ctx.lineTo(-0.3 * s, -0.2 * s);
    ctx.lineTo(0, 0.1 * s);
    ctx.closePath();
    ctx.fill();
    ctx.restore();
  }

  function bigText(ctx, text, x, y, size, fill, angle) {
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(angle || 0);
    ctx.font = `900 ${size}px "Bricolage Grotesque", "Noto Sans JP", system-ui, sans-serif`;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.lineJoin = "round";
    ctx.lineWidth = size * 0.22;
    ctx.strokeStyle = "#000";
    ctx.strokeText(text, 0, 0);
    const g = ctx.createLinearGradient(0, -size / 2, 0, size / 2);
    g.addColorStop(0, "#fff");
    g.addColorStop(0.45, fill);
    g.addColorStop(1, fill);
    ctx.fillStyle = g;
    ctx.fillText(text, 0, 0);
    ctx.restore();
  }

  function headline(prompt) {
    const p = prompt.toLowerCase();
    const num = prompt.match(/\d[\d,.$¥]*/g);
    if (has(p, "vs", "対")) return num && num.length > 1 ? `${num[0]} VS ${num[1]}` : "VS";
    if (num) return (has(p, "level", "lvl", "レベル") ? "LVL " : "") + num[num.length - 1];
    const words = prompt.replace(/[,.!?！？、。]/g, " ").trim().split(/\s+/).filter((w) => w.length > 2);
    if (!words.length) return prompt.slice(0, 8).toUpperCase();
    if (/[぀-ヿ一-龯]/.test(prompt)) return prompt.replace(/[、。,.!！?？]/g, "").slice(0, 7);
    return words.slice(-2).join(" ").toUpperCase().slice(0, 16);
  }

  /* ---------- thumbnail 16:9 ---------- */
  function thumbnail(prompt, seed, w = 1280, h = 720) {
    const r = rng(seed);
    const p = prompt.toLowerCase();
    const [c1, c2, dark, accent] = palette(p, r);
    const cv = makeCanvas(w, h);
    const ctx = cv.getContext("2d");
    const bg = ctx.createRadialGradient(w * 0.6, h * 0.45, 20, w * 0.5, h * 0.5, w * 0.75);
    bg.addColorStop(0, c2);
    bg.addColorStop(0.35, c1);
    bg.addColorStop(1, dark);
    ctx.fillStyle = bg;
    ctx.fillRect(0, 0, w, h);
    // light rays
    ctx.save();
    ctx.translate(w * 0.62, h * 0.45);
    ctx.globalAlpha = 0.18;
    for (let i = 0; i < 18; i++) {
      ctx.rotate((Math.PI * 2) / 18);
      ctx.fillStyle = i % 2 ? "#fff" : accent;
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(w, -50);
      ctx.lineTo(w, 50);
      ctx.closePath();
      ctx.fill();
    }
    ctx.restore();
    // blocky ground
    for (let x = 0; x < w; x += 80) {
      const gh = 90 + r() * 60;
      ctx.fillStyle = r() > 0.5 ? dark : "rgba(0,0,0,.55)";
      ctx.fillRect(x, h - gh, 82, gh);
    }
    // hero object: gem / coins / skull-ish blob depending on prompt
    const ox = w * (0.6 + r() * 0.1), oy = h * 0.5;
    if (has(p, "coin", "cash", "money", "gold", "$", "金", "円", "札")) {
      for (let i = 0; i < 26; i++) {
        const cx = ox + (r() - 0.5) * 420, cy = oy + (r() - 0.3) * 260, cr = 26 + r() * 30;
        ctx.fillStyle = "#ffcf33";
        ctx.strokeStyle = "#7a4a00";
        ctx.lineWidth = 6;
        ctx.beginPath();
        ctx.ellipse(cx, cy, cr, cr * 0.85, r(), 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
      }
    } else {
      ctx.shadowColor = c2;
      ctx.shadowBlur = 60;
      gem(ctx, ox, oy, 150 + r() * 40, c1, c2);
      ctx.shadowBlur = 0;
    }
    // characters
    blockyChar(ctx, w * 0.2, h * 0.36, 120, accent, "#ffd29c", r, "shock");
    if (has(p, "vs", "対", "race", "対決")) blockyChar(ctx, w * 0.86, h * 0.42, 95, c1, "#f5c08a", r, "smile");
    // arrow
    ctx.save();
    ctx.translate(w * 0.36, h * 0.5);
    ctx.rotate(-0.35);
    ctx.fillStyle = "#ff2b2b";
    ctx.strokeStyle = "#fff";
    ctx.lineWidth = 10;
    ctx.beginPath();
    ctx.moveTo(0, -22); ctx.lineTo(120, -22); ctx.lineTo(120, -60); ctx.lineTo(200, 0);
    ctx.lineTo(120, 60); ctx.lineTo(120, 22); ctx.lineTo(0, 22); ctx.closePath();
    ctx.stroke();
    ctx.fill();
    ctx.restore();
    bigText(ctx, headline(prompt), w * 0.5, h * 0.15, 110, "#ffd400", -0.04);
    // vignette
    const v = ctx.createRadialGradient(w / 2, h / 2, h * 0.3, w / 2, h / 2, w * 0.7);
    v.addColorStop(0, "rgba(0,0,0,0)");
    v.addColorStop(1, "rgba(0,0,0,.55)");
    ctx.fillStyle = v;
    ctx.fillRect(0, 0, w, h);
    return cv;
  }

  /* ---------- seamless texture ---------- */
  function texture(prompt, seed, size = 512) {
    const r = rng(seed);
    const p = prompt.toLowerCase();
    const cv = makeCanvas(size, size);
    const ctx = cv.getContext("2d");
    const img = ctx.createImageData(size, size);
    // tileable value noise
    const G = 16;
    const grid = Array.from({ length: G * G }, () => r());
    const at = (x, y) => grid[((y % G + G) % G) * G + ((x % G + G) % G)];
    const smooth = (t) => t * t * (3 - 2 * t);
    const noise = (x, y, f) => {
      const fx = (x / size) * f, fy = (y / size) * f;
      const x0 = Math.floor(fx), y0 = Math.floor(fy);
      const tx = smooth(fx - x0), ty = smooth(fy - y0);
      // lattice period = f cells, so the result wraps at the canvas edge
      const g = (a, b) => at((a % f) + f * 3, (b % f) + f);
      const a = g(x0, y0), b = g(x0 + 1, y0);
      const c = g(x0, y0 + 1), d = g(x0 + 1, y0 + 1);
      return (a + (b - a) * tx) + ((c + (d - c) * tx) - (a + (b - a) * tx)) * ty;
    };
    const fbm = (x, y) => noise(x, y, 4) * 0.5 + noise(x, y, 8) * 0.3 + noise(x, y, 16) * 0.2;
    let mode = "stone";
    if (has(p, "wood", "plank", "木")) mode = "wood";
    else if (has(p, "metal", "sci", "steel", "メタル", "金属")) mode = "metal";
    else if (has(p, "lava", "volcan", "溶岩", "火山")) mode = "lava";
    else if (has(p, "ice", "frost", "氷")) mode = "ice";
    const hex = (h) => [1, 3, 5].map((i) => parseInt(h.slice(i, i + 2), 16));
    const pal = {
      stone: [hex("#3d4a3a"), hex("#7f8f6a"), hex("#a8b58d")],
      wood: [hex("#5a3416"), hex("#9a6331"), hex("#c98f52")],
      metal: [hex("#2a313b"), hex("#6b7785"), hex("#b8c4d0")],
      lava: [hex("#1a0b07"), hex("#4a1a0e"), hex("#ff7a1a")],
      ice: [hex("#5fa8d6"), hex("#a9dcf5"), hex("#f2fbff")]
    }[mode];
    const mix = (a, b, t) => a.map((v, i) => v + (b[i] - v) * t);
    for (let y = 0; y < size; y++) {
      for (let x = 0; x < size; x++) {
        let n = fbm(x, y), col;
        if (mode === "wood") {
          const ring = Math.sin((y / size) * Math.PI * 2 * 6 + n * 6) * 0.5 + 0.5;
          col = mix(pal[0], pal[2], ring * 0.7 + n * 0.3);
          if (y % 128 < 3) col = mix(col, [20, 10, 4], 0.7);
        } else if (mode === "metal") {
          col = mix(pal[0], pal[2], 0.35 + n * 0.4);
          if (x % 128 < 3 || y % 128 < 3) col = mix(col, [10, 12, 16], 0.6);
          if ((x % 128 === 12 || x % 128 === 116) && (y % 128 === 12 || y % 128 === 116)) col = pal[2];
        } else if (mode === "lava") {
          const crack = Math.abs(n - 0.5) < 0.04 ? 1 : 0;
          col = crack ? mix(pal[2], [255, 220, 120], r() * 0.3) : mix(pal[0], pal[1], n);
        } else if (mode === "ice") {
          col = mix(pal[0], pal[2], n);
          if (x % 128 < 2 || y % 128 < 2) col = mix(col, [255, 255, 255], 0.6);
        } else {
          col = n < 0.45 ? mix(pal[0], pal[1], n / 0.45) : mix(pal[1], pal[2], (n - 0.45) / 0.55);
          const bx = x % 128, by = (y + (Math.floor(x / 128) % 2) * 64) % 128;
          if (bx < 4 || by < 4) col = mix(col, [25, 28, 22], 0.65);
        }
        const i = (y * size + x) * 4;
        img.data[i] = col[0];
        img.data[i + 1] = col[1];
        img.data[i + 2] = col[2];
        img.data[i + 3] = 255;
      }
    }
    ctx.putImageData(img, 0, 0);
    return cv;
  }

  /* ---------- transparent icon ---------- */
  function icon(prompt, seed, size = 512) {
    const r = rng(seed);
    const p = prompt.toLowerCase();
    const [c1, c2, dark, accent] = palette(p, r);
    const cv = makeCanvas(size, size);
    const ctx = cv.getContext("2d");
    const s = size;
    ctx.lineJoin = "round";
    if (has(p, "coin", "金貨", "コイン")) {
      ctx.fillStyle = "#ffcf33"; ctx.strokeStyle = "#5c3700"; ctx.lineWidth = 22;
      ctx.beginPath(); ctx.arc(s / 2, s / 2, s * 0.36, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
      ctx.fillStyle = "#ffe68a"; ctx.beginPath(); ctx.arc(s / 2, s / 2, s * 0.26, 0, Math.PI * 2); ctx.fill();
      star(ctx, s / 2, s / 2, s * 0.17, "#f59e0b");
    } else if (has(p, "potion", "ポーション", "flask")) {
      ctx.fillStyle = c1; ctx.strokeStyle = "#111"; ctx.lineWidth = 20;
      ctx.beginPath(); ctx.arc(s / 2, s * 0.6, s * 0.28, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
      ctx.fillStyle = "#e8e8e8"; roundRect(ctx, s * 0.42, s * 0.14, s * 0.16, s * 0.22, 14); ctx.fill(); ctx.stroke();
      ctx.fillStyle = "#8b5a2b"; roundRect(ctx, s * 0.39, s * 0.08, s * 0.22, s * 0.09, 10); ctx.fill(); ctx.stroke();
      ctx.fillStyle = "rgba(255,255,255,.5)"; ctx.beginPath(); ctx.ellipse(s * 0.42, s * 0.52, s * 0.05, s * 0.09, -0.5, 0, Math.PI * 2); ctx.fill();
    } else if (has(p, "sword", "剣", "pickaxe", "ツルハシ")) {
      ctx.save(); ctx.translate(s / 2, s / 2); ctx.rotate(-Math.PI / 4);
      ctx.strokeStyle = "#111"; ctx.lineWidth = 18;
      const blade = ctx.createLinearGradient(-30, 0, 30, 0); blade.addColorStop(0, c2); blade.addColorStop(1, c1);
      ctx.fillStyle = blade;
      ctx.beginPath(); ctx.moveTo(0, -s * 0.42); ctx.lineTo(s * 0.07, -s * 0.3); ctx.lineTo(s * 0.07, s * 0.12);
      ctx.lineTo(-s * 0.07, s * 0.12); ctx.lineTo(-s * 0.07, -s * 0.3); ctx.closePath(); ctx.fill(); ctx.stroke();
      ctx.fillStyle = accent; roundRect(ctx, -s * 0.18, s * 0.12, s * 0.36, s * 0.07, 10); ctx.fill(); ctx.stroke();
      ctx.fillStyle = "#6b3f1d"; roundRect(ctx, -s * 0.045, s * 0.19, s * 0.09, s * 0.2, 8); ctx.fill(); ctx.stroke();
      ctx.restore();
    } else if (has(p, "chest", "宝箱", "box")) {
      ctx.strokeStyle = "#111"; ctx.lineWidth = 18;
      ctx.fillStyle = "#8b5a2b"; roundRect(ctx, s * 0.14, s * 0.42, s * 0.72, s * 0.38, 20); ctx.fill(); ctx.stroke();
      ctx.fillStyle = "#a86b33"; roundRect(ctx, s * 0.14, s * 0.22, s * 0.72, s * 0.22, 40); ctx.fill(); ctx.stroke();
      ctx.fillStyle = "#ffcf33"; roundRect(ctx, s * 0.44, s * 0.38, s * 0.12, s * 0.16, 8); ctx.fill(); ctx.stroke();
      ctx.shadowColor = c2; ctx.shadowBlur = 40; gem(ctx, s / 2, s * 0.2, s * 0.08, c1, c2); ctx.shadowBlur = 0;
    } else {
      // hex badge with a gem
      ctx.fillStyle = dark; ctx.strokeStyle = "#111"; ctx.lineWidth = 20;
      ctx.beginPath();
      for (let i = 0; i < 6; i++) {
        const a = Math.PI / 6 + (i * Math.PI) / 3;
        ctx.lineTo(s / 2 + Math.cos(a) * s * 0.4, s / 2 + Math.sin(a) * s * 0.4);
      }
      ctx.closePath(); ctx.fill(); ctx.stroke();
      ctx.lineWidth = 12; ctx.strokeStyle = accent; ctx.stroke();
      gem(ctx, s / 2, s * 0.52, s * 0.22, c1, c2);
    }
    return cv;
  }

  function star(ctx, cx, cy, rr, col) {
    ctx.fillStyle = col;
    ctx.beginPath();
    for (let i = 0; i < 10; i++) {
      const a = -Math.PI / 2 + (i * Math.PI) / 5, d = i % 2 ? rr * 0.45 : rr;
      ctx.lineTo(cx + Math.cos(a) * d, cy + Math.sin(a) * d);
    }
    ctx.closePath();
    ctx.fill();
  }

  /* ---------- clothing template 585×559 ---------- */
  function clothing(prompt, seed) {
    const r = rng(seed);
    const p = prompt.toLowerCase();
    const [c1, c2, dark, accent] = palette(p, r);
    const cv = makeCanvas(585, 559);
    const ctx = cv.getContext("2d");
    ctx.clearRect(0, 0, 585, 559);
    // simplified template regions: torso front/back + sides, arms
    const regions = [
      [231, 74, 128, 128], [427, 74, 128, 128], [165, 74, 64, 128], [361, 74, 64, 128],
      [19, 355, 64, 128], [85, 355, 64, 128], [151, 355, 64, 128], [217, 355, 64, 128],
      [308, 355, 64, 128], [374, 355, 64, 128], [440, 355, 64, 128], [506, 355, 64, 128]
    ];
    const striped = has(p, "jersey", "racing", "ジャージ", "レーシング", "varsity", "スタジャン");
    regions.forEach(([x, y, w, h], i) => {
      ctx.save();
      ctx.beginPath(); ctx.rect(x, y, w, h); ctx.clip();
      ctx.fillStyle = i < 4 ? c1 : (has(p, "varsity", "スタジャン") ? "#f5f5f5" : c1);
      ctx.fillRect(x, y, w, h);
      if (striped) {
        ctx.fillStyle = accent;
        for (let k = 0; k < 3; k++) ctx.fillRect(x, y + h * 0.7 + k * 12, w, 6);
      } else {
        ctx.globalAlpha = 0.18;
        for (let k = 0; k < 40; k++) {
          ctx.fillStyle = r() > 0.5 ? "#fff" : dark;
          ctx.fillRect(x + r() * w, y + r() * h, 4 + r() * 10, 4 + r() * 10);
        }
        ctx.globalAlpha = 1;
      }
      ctx.restore();
    });
    // front emblem
    ctx.fillStyle = accent; ctx.strokeStyle = "#111"; ctx.lineWidth = 4;
    ctx.beginPath(); ctx.arc(295, 128, 26, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
    ctx.font = '900 28px "Bricolage Grotesque", sans-serif';
    ctx.fillStyle = "#111"; ctx.textAlign = "center"; ctx.textBaseline = "middle";
    ctx.fillText((prompt.trim()[0] || "B").toUpperCase(), 295, 130);
    // zipper / collar
    ctx.fillStyle = c2; ctx.fillRect(231, 74, 128, 10); ctx.fillRect(427, 74, 128, 10);
    // outline the template guides
    ctx.strokeStyle = "rgba(0,0,0,.25)"; ctx.lineWidth = 1;
    regions.forEach(([x, y, w, h]) => ctx.strokeRect(x + 0.5, y + 0.5, w - 1, h - 1));
    return cv;
  }

  /* ---------- GFX character render ---------- */
  function gfx(prompt, seed, size = 512) {
    const r = rng(seed);
    const p = prompt.toLowerCase();
    const [c1, c2, dark, accent] = palette(p, r);
    const cv = makeCanvas(size, size);
    const ctx = cv.getContext("2d");
    const bg = ctx.createRadialGradient(size / 2, size * 0.4, 10, size / 2, size / 2, size * 0.75);
    bg.addColorStop(0, c1); bg.addColorStop(1, dark);
    ctx.fillStyle = bg; ctx.fillRect(0, 0, size, size);
    for (let i = 0; i < 60; i++) {
      ctx.fillStyle = `rgba(255,255,255,${r() * 0.5})`;
      ctx.beginPath(); ctx.arc(r() * size, r() * size, r() * 3, 0, Math.PI * 2); ctx.fill();
    }
    ctx.shadowColor = c2; ctx.shadowBlur = 50;
    blockyChar(ctx, size / 2, size * 0.36, 120, accent, "#ffd29c", r, "smile");
    ctx.shadowBlur = 0;
    // rim light
    const rim = ctx.createLinearGradient(0, 0, size, 0);
    rim.addColorStop(0, "rgba(255,255,255,0)"); rim.addColorStop(0.85, "rgba(255,255,255,0)"); rim.addColorStop(1, c2);
    ctx.globalCompositeOperation = "overlay"; ctx.fillStyle = rim; ctx.fillRect(0, 0, size, size);
    ctx.globalCompositeOperation = "source-over";
    return cv;
  }

  /* ---------- UI mock (shop panel) ---------- */
  function ui(prompt, seed, w = 1280, h = 720) {
    const r = rng(seed);
    const p = prompt.toLowerCase();
    const [c1, c2, dark, accent] = palette(p, r);
    const cv = makeCanvas(w, h);
    const ctx = cv.getContext("2d");
    ctx.fillStyle = "#1c2433"; ctx.fillRect(0, 0, w, h);
    ctx.globalAlpha = 0.15;
    for (let x = 0; x < w; x += 40) for (let y = 0; y < h; y += 40) { ctx.fillStyle = (x + y) % 80 ? "#fff" : "#000"; ctx.fillRect(x, y, 40, 40); }
    ctx.globalAlpha = 1;
    const px = 190, py = 80, pw = 900, ph = 560;
    ctx.fillStyle = c1; ctx.strokeStyle = "#111"; ctx.lineWidth = 10;
    roundRect(ctx, px, py, pw, ph, 36); ctx.fill(); ctx.stroke();
    ctx.fillStyle = dark; roundRect(ctx, px + 24, py + 100, pw - 48, ph - 124, 24); ctx.fill();
    // title bar
    const titleTxt = headline(prompt).slice(0, 14) || "SHOP";
    ctx.fillStyle = accent; roundRect(ctx, px + pw / 2 - 200, py - 30, 400, 90, 28); ctx.fill(); ctx.stroke();
    ctx.font = '900 46px "Bricolage Grotesque", "Noto Sans JP", sans-serif';
    ctx.fillStyle = "#fff"; ctx.textAlign = "center"; ctx.textBaseline = "middle";
    ctx.lineWidth = 8; ctx.strokeText(titleTxt, px + pw / 2, py + 15); ctx.fillText(titleTxt, px + pw / 2, py + 15);
    // close button
    ctx.fillStyle = "#ff3b3b"; roundRect(ctx, px + pw - 70, py - 20, 80, 80, 20); ctx.fill(); ctx.stroke();
    ctx.strokeStyle = "#fff"; ctx.lineWidth = 10;
    ctx.beginPath(); ctx.moveTo(px + pw - 50, py); ctx.lineTo(px + pw - 10, py + 40); ctx.moveTo(px + pw - 10, py); ctx.lineTo(px + pw - 50, py + 40); ctx.stroke();
    // item slots
    for (let i = 0; i < 6; i++) {
      const sx = px + 60 + (i % 3) * 270, sy = py + 130 + Math.floor(i / 3) * 210;
      ctx.fillStyle = c2; ctx.strokeStyle = "#111"; ctx.lineWidth = 6;
      roundRect(ctx, sx, sy, 240, 185, 22); ctx.fill(); ctx.stroke();
      gem(ctx, sx + 120, sy + 75, 42, [c1, accent, "#22d3ee", "#a855f7", "#f43f5e", "#22c55e"][i], "#fff");
      ctx.fillStyle = "#22c55e"; roundRect(ctx, sx + 40, sy + 132, 160, 40, 14); ctx.fill(); ctx.stroke();
      ctx.font = '800 24px "Bricolage Grotesque", sans-serif'; ctx.fillStyle = "#fff";
      ctx.fillText(`${(i + 1) * 25 + Math.floor(r() * 10) * 5}`, sx + 120, sy + 153);
    }
    return cv;
  }

  /* ---------- SFX ---------- */
  async function sfx(prompt, seed) {
    const r = rng(seed);
    const p = prompt.toLowerCase();
    const sr = 44100;
    let dur = 0.6;
    let kind = "blip";
    if (has(p, "coin", "コイン", "pickup", "取得")) { kind = "coin"; dur = 0.45; }
    else if (has(p, "level", "chime", "レベル", "チャイム")) { kind = "chime"; dur = 1.2; }
    else if (has(p, "laser", "shot", "レーザー", "発射")) { kind = "laser"; dur = 0.5; }
    else if (has(p, "door", "ドア", "wood", "木", "impact", "hit")) { kind = "door"; dur = 0.7; }
    else if (has(p, "magic", "spell", "魔法", "呪文")) { kind = "magic"; dur = 1.4; }
    else if (has(p, "click", "クリック", "button", "ボタン")) { kind = "click"; dur = 0.12; }
    const Ctx = window.OfflineAudioContext || window.webkitOfflineAudioContext;
    const ac = new Ctx(1, Math.ceil(sr * dur), sr);
    const out = ac.createGain();
    out.gain.value = 0.6;
    out.connect(ac.destination);
    const tone = (type, f0, f1, t0, t1, vol) => {
      const o = ac.createOscillator(), g = ac.createGain();
      o.type = type;
      o.frequency.setValueAtTime(f0, t0);
      if (f1 !== f0) o.frequency.exponentialRampToValueAtTime(f1, t1);
      g.gain.setValueAtTime(0.0001, t0);
      g.gain.exponentialRampToValueAtTime(vol, t0 + 0.01);
      g.gain.exponentialRampToValueAtTime(0.0001, t1);
      o.connect(g).connect(out);
      o.start(t0);
      o.stop(t1 + 0.02);
    };
    const noise = (t0, t1, vol, freq) => {
      const len = Math.ceil(sr * (t1 - t0));
      const buf = ac.createBuffer(1, len, sr);
      const d = buf.getChannelData(0);
      for (let i = 0; i < len; i++) d[i] = (r() * 2 - 1) * Math.pow(1 - i / len, 3);
      const s = ac.createBufferSource(), f = ac.createBiquadFilter(), g = ac.createGain();
      s.buffer = buf; f.type = "lowpass"; f.frequency.value = freq; g.gain.value = vol;
      s.connect(f).connect(g).connect(out);
      s.start(t0);
    };
    const base = 1 + (r() - 0.5) * 0.3;
    switch (kind) {
      case "coin":
        tone("square", 988 * base, 988 * base, 0, 0.08, 0.25);
        tone("square", 1319 * base, 1319 * base, 0.08, 0.42, 0.25);
        break;
      case "chime":
        [523, 659, 784, 1047].forEach((f, i) => tone("triangle", f * base, f * base, i * 0.12, i * 0.12 + 0.7, 0.35));
        tone("sine", 2093 * base, 2093 * base, 0.48, 1.15, 0.15);
        break;
      case "laser":
        tone("sawtooth", 1800 * base, 120, 0, 0.45, 0.3);
        tone("square", 900 * base, 80, 0, 0.3, 0.12);
        break;
      case "door":
        noise(0, 0.35, 0.9, 900);
        tone("sine", 110 * base, 55, 0, 0.5, 0.6);
        noise(0.32, 0.65, 0.4, 500);
        break;
      case "magic":
        for (let i = 0; i < 14; i++) {
          const f = 600 + r() * 1800;
          tone("sine", f, f * 1.5, i * 0.07, i * 0.07 + 0.5, 0.12);
        }
        tone("triangle", 220 * base, 880 * base, 0, 1.3, 0.15);
        break;
      case "click":
        noise(0, 0.05, 0.8, 4000);
        tone("square", 1500 * base, 800, 0, 0.05, 0.2);
        break;
      default:
        tone("square", 440 * base, 880 * base, 0, 0.25, 0.25);
        tone("triangle", 660 * base, 1320 * base, 0.15, 0.55, 0.2);
    }
    return ac.startRendering();
  }

  function wavBlob(audioBuffer) {
    const data = audioBuffer.getChannelData(0);
    const sr = audioBuffer.sampleRate;
    const buf = new ArrayBuffer(44 + data.length * 2);
    const v = new DataView(buf);
    const w = (o, s) => [...s].forEach((c, i) => v.setUint8(o + i, c.charCodeAt(0)));
    w(0, "RIFF"); v.setUint32(4, 36 + data.length * 2, true); w(8, "WAVE"); w(12, "fmt ");
    v.setUint32(16, 16, true); v.setUint16(20, 1, true); v.setUint16(22, 1, true);
    v.setUint32(24, sr, true); v.setUint32(28, sr * 2, true); v.setUint16(32, 2, true); v.setUint16(34, 16, true);
    w(36, "data"); v.setUint32(40, data.length * 2, true);
    for (let i = 0; i < data.length; i++) {
      const s = Math.max(-1, Math.min(1, data[i]));
      v.setInt16(44 + i * 2, s < 0 ? s * 0x8000 : s * 0x7fff, true);
    }
    return new Blob([buf], { type: "audio/wav" });
  }

  function waveform(audioBuffer, w = 1024, h = 300, color = "#f7b928") {
    const cv = makeCanvas(w, h);
    const ctx = cv.getContext("2d");
    ctx.fillStyle = "#121110"; ctx.fillRect(0, 0, w, h);
    const d = audioBuffer.getChannelData(0);
    const step = Math.ceil(d.length / w);
    ctx.fillStyle = color;
    for (let x = 0; x < w; x++) {
      let mn = 1, mx = -1;
      for (let i = 0; i < step; i++) { const s = d[x * step + i] || 0; if (s < mn) mn = s; if (s > mx) mx = s; }
      ctx.fillRect(x, (1 + mn) * h / 2, 1, Math.max(1, (mx - mn) * h / 2));
    }
    return cv;
  }

  window.Gen = { hash, rng, thumbnail, texture, icon, clothing, gfx, ui, sfx, wavBlob, waveform };
})();
