/* AutoBlur marketing site — small progressive-enhancement helpers. */
(function () {
  'use strict';

  /* ---- mobile nav ---- */
  var toggle = document.querySelector('.nav-toggle');
  var links = document.querySelector('.nav-links');

  if (toggle && links) {
    toggle.addEventListener('click', function () {
      var open = links.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
    });
  }

  /* On narrow screens the dropdown becomes an accordion. */
  document.querySelectorAll('.has-menu > .nav-link').forEach(function (trigger) {
    trigger.addEventListener('click', function (e) {
      if (window.matchMedia('(max-width: 860px)').matches) {
        e.preventDefault();
        trigger.parentElement.classList.toggle('open');
      }
    });
  });

  /* ---- before/after slider ---- */
  document.querySelectorAll('.ba').forEach(function (ba) {
    var clip = ba.querySelector('.ba-clip');
    var line = ba.querySelector('.ba-line');
    if (!clip || !line) return;

    var dragging = false;

    function setAt(clientX) {
      var box = ba.getBoundingClientRect();
      var pct = ((clientX - box.left) / box.width) * 100;
      pct = Math.max(6, Math.min(94, pct));
      clip.style.clipPath = 'inset(0 0 0 ' + pct + '%)';
      line.style.left = pct + '%';
    }

    ba.addEventListener('pointerdown', function (e) {
      dragging = true;
      ba.setPointerCapture(e.pointerId);
      setAt(e.clientX);
    });
    ba.addEventListener('pointermove', function (e) {
      if (dragging) setAt(e.clientX);
    });
    ['pointerup', 'pointercancel'].forEach(function (evt) {
      ba.addEventListener(evt, function () { dragging = false; });
    });
  });

  /* ---- scroll reveal ---- */
  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var targets = document.querySelectorAll('.reveal');

  if (reduced || !('IntersectionObserver' in window)) {
    targets.forEach(function (el) { el.classList.add('in'); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('in');
        io.unobserve(entry.target);
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });

    targets.forEach(function (el, i) {
      el.style.transitionDelay = (i % 4) * 60 + 'ms';
      io.observe(el);
    });
  }

  /* ---- FAQ: keep one answer open at a time within a group ---- */
  document.querySelectorAll('.faq').forEach(function (group) {
    var items = group.querySelectorAll('details');
    items.forEach(function (item) {
      item.addEventListener('toggle', function () {
        if (!item.open) return;
        items.forEach(function (other) {
          if (other !== item) other.open = false;
        });
      });
    });
  });

  /* ---- current year in footers ---- */
  document.querySelectorAll('[data-year]').forEach(function (el) {
    el.textContent = String(new Date().getFullYear());
  });
})();
