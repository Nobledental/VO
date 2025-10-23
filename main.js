/* ==========================================================================
   HealthFlo 3D Anatomy & Pathology — Full JS
   - Fixes duplication, improves a11y, keeps theme & Android layer
   ========================================================================== */

const $  = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
const root = document.documentElement;
const prefersReduced = () =>
  window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ----------------- Header & Mobile Nav ----------------- */
const header    = document.querySelector('.site-header');
const nav       = document.querySelector('.primary-nav');
const navToggle = document.querySelector('.nav-toggle');
const navLinks  = document.querySelectorAll('.primary-nav a');

const updateHeaderState = () => {
  if (!header) return;
  const y = window.scrollY || 0;
  header.classList.toggle('is-scrolled', y > 20);
};

const closeMobileNav = () => {
  nav?.classList.remove('is-open');
  navToggle?.classList.remove('is-open');
  navToggle?.setAttribute('aria-expanded', 'false');
};

if (nav && navToggle) {
  navToggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('is-open');
    navToggle.classList.toggle('is-open', isOpen);
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });
}

navLinks.forEach((link) => link.addEventListener('click', closeMobileNav));

if (header) {
  window.addEventListener('scroll', updateHeaderState, { passive: true });
  updateHeaderState();
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeMobileNav();
});

/* Focus outline helper */
$$('a, button, input, textarea, select').forEach((el) => {
  el.addEventListener('focus', () => el.classList.add('is-focused'));
  el.addEventListener('blur',  () => el.classList.remove('is-focused'));
});

/* ----------------- Soft Aurora Background ----------------- */
(() => {
  const a = $('.hf-bg-aurora');
  let rot = 0;
  if (a && !prefersReduced()) {
    const loop = () => {
      rot = (rot + 0.06) % 360;
      a.style.setProperty('--rot', `${rot}deg`);
      requestAnimationFrame(loop);
    };
    requestAnimationFrame(loop);
    addEventListener('pointermove', (e) => {
      a.style.setProperty('--ax', `${(e.clientX / innerWidth) * 100}%`);
      a.style.setProperty('--ay', `${(e.clientY / innerHeight) * 100}%`);
    }, { passive: true });
  }
})();

/* ----------------- Ripple (global) ----------------- */
document.addEventListener('pointerdown', (e) => {
  const el = e.target.closest(
    '.hf-ripple, .btn, .mini-card, .feature-card, .step-card, .primary-nav a, .btn-primary, .btn-secondary'
  );
  if (!el) return;
  el.classList.add('hf-ripple');
  const r = el.getBoundingClientRect();
  const size = Math.max(r.width, r.height) * 1.2;
  const span = document.createElement('span');
  span.className = 'r';
  span.style.width = span.style.height = `${size}px`;
  span.style.left = `${(e.clientX ?? r.left + r.width / 2) - r.left - size / 2}px`;
  span.style.top  = `${(e.clientY ?? r.top  + r.height/ 2) - r.top  - size / 2}px`;
  el.appendChild(span);
  span.addEventListener('animationend', () => span.remove());
}, { passive: true });

/* ----------------- SFX (optional, safe) ----------------- */
const SFX = {
  header: $('#hf-sfx-header'),
  click:  $('#hf-sfx-click'),
  close:  $('#hf-sfx-close')
};
const play = (t) => { try { t.currentTime = 0; t.play().catch(() => {}); } catch(_) {} };

/* ----------------- Android Quick Settings ----------------- */
(() => {
  const qs     = $('[data-hf-qs]');
  if (!qs) return;

  const panel  = $('[data-hf-qspanel]');
  const scrim  = $('[data-hf-scrim]');
  const tSm    = $('[data-hf-qstime]');
  const togg   = $('[data-hf-qstoggle]');
  const grab   = $('[data-hf-qsdrag]');
  const slider = $('[data-hf-brightness]');

  let exp = 0, dragging = false, startY = 0, startExp = 0;

  const setExp = (v, snap = false) => {
    exp = Math.max(0, Math.min(1, v));
    root.style.setProperty('--hf-qs-exp', exp);
    if (snap) {
      qs.dataset.open = exp > 0.01 ? 'true' : 'false';
      scrim.hidden    = !(exp > 0.01);
    } else {
      if (exp > 0.01) { scrim.hidden = false; qs.dataset.open = 'true'; }
      if (exp <= 0)   { scrim.hidden = true;  qs.dataset.open = 'false'; }
    }
  };
  const open  = () => { setExp(1, true); if (SFX.header) play(SFX.header); };
  const close = () => setExp(0, true);

  togg?.addEventListener('click', () => qs.dataset.open === 'true' ? close() : open());
  scrim?.addEventListener('click', close);

  const onDown = (e) => {
    dragging = true;
    startY   = ('touches' in e ? e.touches[0].clientY : e.clientY);
    startExp = exp;
    e.preventDefault();
  };
  const onMove = (e) => {
    if (!dragging) return;
    const y = ('touches' in e ? e.touches[0].clientY : e.clientY);
    const cs = getComputedStyle(root);
    const rng = (parseInt(cs.getPropertyValue('--hf-qs-max')) -
                 parseInt(cs.getPropertyValue('--hf-qs-min'))) || 496;
    setExp(startExp + (y - startY) / rng);
  };
  const onUp = () => {
    if (!dragging) return;
    dragging = false;
    exp >= .45 ? open() : close();
  };

  grab?.addEventListener('mousedown', onDown);
  addEventListener('mousemove', onMove, { passive: true });
  addEventListener('mouseup',   onUp);
  grab?.addEventListener('touchstart', onDown, { passive: false });
  addEventListener('touchmove',  onMove, { passive: false });
  addEventListener('touchend',   onUp);

  // Tiles: scroll to target & close
  $$('.hf-qs-tile').forEach((t) => {
    t.addEventListener('click', () => {
      t.classList.toggle('is-on');
      if (SFX.click) play(SFX.click);
      const target = t.getAttribute('data-target');
      if (target) document.querySelector(target)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      close();
    });
  });

  // Brightness demo
  slider?.addEventListener('input', (e) => {
    const v = +e.target.value;
    if (panel) panel.style.filter = `brightness(${0.4 + v / 100})`;
  });

  // Live clock
  const tick = () => {
    const d = new Date();
    const hh = String(d.getHours()).padStart(2, '0');
    const mm = String(d.getMinutes()).padStart(2, '0');
    if (tSm) tSm.textContent = `${hh}:${mm}`;
  };
  tick(); setInterval(tick, 20000);

  setExp(0, true);
})();

/* ----------------- Smooth Scroll for in-page links ----------------- */
(() => {
  $$('.primary-nav a, .hf-qs-tile').forEach((a) => {
    a.addEventListener('click', (e) => {
      const href = a.getAttribute('href') || a.getAttribute('data-target') || '';
      if (href.startsWith('#')) {
        const el = document.querySelector(href);
        if (el) {
          e.preventDefault();
          if (SFX.click) play(SFX.click);
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    });
  });
})();

/* ----------------- “Open as App” Sheet ----------------- */
(() => {
  const sheet   = $('#hfAppSheet');
  if (!sheet) return;

  const scrim   = sheet.querySelector('[data-hf-app-close]');
  const closeBtn= sheet.querySelector('.hf-app-close');
  const iconBox = $('#hfAppIcon');
  const titleEl = $('#hfAppTitle');
  const body    = $('#hfAppBody');

  const selectable = [
    '.feature-card', '.mini-card', '.step-card',
    '.atlas-card', '.knowledge-card', '.assurance-cards article'
  ];
  $$(selectable.join(',')).forEach((card) => {
    card.style.cursor = 'pointer';
    card.addEventListener('click', () => {
      if (SFX.click) play(SFX.click);
      const t = card.querySelector('h3, h2')?.textContent?.trim() || 'Widget';
      if (titleEl) titleEl.textContent = t;
      if (iconBox) {
        iconBox.innerHTML = `<span style="display:inline-block;width:18px;height:18px;border-radius:5px;background:linear-gradient(135deg,var(--hf-p1),var(--hf-p4));"></span>`;
      }
      sheet.setAttribute('open', '');
      if (body) {
        body.innerHTML = `
          <div style="display:grid;gap:14px">
            <p style="margin:0">Loaded <strong>${t}</strong>. Use tabs to switch sections.</p>
            <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:12px">
              <div class="hf-app-widget" style="background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.14);border-radius:14px;padding:12px">
                <strong>Overview</strong>
                <div style="height:88px;border-radius:10px;background:linear-gradient(135deg, rgba(255,255,255,.18), transparent)"></div>
              </div>
              <div class="hf-app-widget" style="background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.14);border-radius:14px;padding:12px">
                <strong>Activity</strong>
                <div style="height:88px;border-radius:10px;background:linear-gradient(135deg, rgba(255,255,255,.18), transparent)"></div>
              </div>
            </div>
          </div>`;
      }
      // Select first tab (Overview)
      const firstTab = $('.hf-app-tab');
      if (firstTab) firstTab.click();
    });
  });

  // Tabs
  $$('.hf-app-tab').forEach((t) =>
    t.addEventListener('click', () => {
      $$('.hf-app-tab').forEach((x) => x.setAttribute('aria-selected', 'false'));
      t.setAttribute('aria-selected', 'true');
      const id = t.dataset.tab;
      if (!body) return;
      body.innerHTML =
        id === 'overview' ? `<div id="tab-overview"><p style="margin-top:0">Overview metrics and summary for this widget.</p></div>` :
        id === 'activity' ? `<div id="tab-activity"><p style="margin-top:0">Recent activity, interactions, and usage.</p></div>` :
                            `<div id="tab-settings"><p style="margin-top:0">Per-widget settings and preferences.</p></div>`;
    })
  );

  // Closing
  const closeSheet = () => {
    sheet.removeAttribute('open');
    if (SFX.close) play(SFX.close);
  };
  scrim?.addEventListener('click',  closeSheet);
  closeBtn?.addEventListener('click', closeSheet);
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && sheet.hasAttribute('open')) closeSheet();
  });
})();

/* ----------------- Toasts: rotating helpful tips ----------------- */
(() => {
  const box = $('#hf-toasts');
  if (!box) return;
  const msgs = [
    'HealthFlo tip: drag down for Quick Settings.',
    'Pre-auth velocity trending up.',
    '3 new appeal opportunities detected.',
    'Reminder: Validate payer rules.'
  ];
  const push = (msg) => {
    const el = document.createElement('div');
    el.className = 'hf-toast';
    el.textContent = msg;
    box.appendChild(el);
    setTimeout(() => el.classList.add('hide'), 2600);
    setTimeout(() => el.remove(), 2840);
  };
  setInterval(() => push(msgs[Math.floor(Math.random() * msgs.length)]), 10000);
})();

/* ----------------- Replace visible “VOKA” → “HealthFlo” (safety) ----------------- */
(() => {
  if (document.title) document.title = document.title.replace(/VOKA/gi, 'HealthFlo');
  const md = document.querySelector('meta[name="description"]');
  if (md && md.content) md.content = md.content.replace(/VOKA/gi, 'HealthFlo');

  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null);
  let n; const rx = /VOKA/gi;
  while ((n = walker.nextNode())) {
    if (rx.test(n.nodeValue)) n.nodeValue = n.nodeValue.replace(rx, 'HealthFlo');
  }
})();

/* ----------------- Guard: resize behavior ----------------- */
window.addEventListener('resize', () => {
  if (window.innerWidth >= 960) closeMobileNav();
}, { passive: true });

/* ----------------- Focus trap when mobile nav is open ----------------- */
(() => {
  if (!nav || !navToggle) return;
  const trap = (e) => {
    if (!nav.classList.contains('is-open')) return;
    if (e.key !== 'Tab') return;
    const f = $$('a, button, input, select, textarea, [tabindex]:not([tabindex="-1"])', nav);
    if (!f.length) return;
    const first = f[0];
    const last  = f[f.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      last.focus(); e.preventDefault();
    } else if (!e.shiftKey && document.activeElement === last) {
      first.focus(); e.preventDefault();
    }
  };
  document.addEventListener('keydown', trap);
})();

/* ----------------- Contact form (demo UX only) ----------------- */
(() => {
  const form = document.querySelector('.contact-form');
  if (!form) return;
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const toastHost = $('#hf-toasts');
    if (toastHost) {
      const el = document.createElement('div');
      el.className = 'hf-toast';
      el.textContent = 'Thanks! We’ll get back to you shortly.';
      toastHost.appendChild(el);
      setTimeout(() => el.classList.add('hide'), 2600);
      setTimeout(() => el.remove(), 2840);
    } else {
      alert('Thanks! We’ll get back to you shortly.');
    }
    form.reset();
  });
})();
