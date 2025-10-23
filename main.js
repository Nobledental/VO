/* ---------- tiny helpers ---------- */
const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

/* Safe storage (prevents crashes in private mode) */
const storage = (() => {
  try {
    const t = "__hf_test__";
    localStorage.setItem(t, "1");
    localStorage.removeItem(t);
    return {
      get: (k) => localStorage.getItem(k),
      set: (k, v) => localStorage.setItem(k, v),
      del: (k) => localStorage.removeItem(k)
    };
  } catch {
    const mem = new Map();
    return {
      get: (k) => mem.get(k) || null,
      set: (k, v) => mem.set(k, v),
      del: (k) => mem.delete(k)
    };
  }
})();

const prefersReduced =
  !!(window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches);

let revealObserver = null;
let floatsHidden = false;

/* ---------- persona data (unchanged) ---------- */
const PERSONAS = /* same data block you shared */ (function(){ return window.PERSONAS || {}; })();

/* ---------- DOM cache ---------- */
const dom = {
  body: document.body,
  heroTitle: $("#hero-title"),
  heroCTA: $("#personaCta"),
  heroActions: $(".hero-actions"),
  whatsappLink: $("#whatsappCta"),
  whatsappWrapper: $(".whatsapp-optin"),
  floatingWhatsapp: $("#floatingWhatsapp"),
  personaButtons: $$("[data-persona-option]"),
  whyGrid: $("[data-why-grid]"),
  productGrid: $("[data-product-grid]"),
  packagePanel: $("[data-package-panel]"),
  packages: $("[data-packages]"),
  howSteps: $("[data-how-steps]"),
  quote: $("#personaQuote"),
  quoteMeta: $("#personaQuoteMeta"),
  riskList: $("#riskReversalList"),
  pricingCard: $("[data-pricing-card]"),
  pricingGrid: $(".pricing-grid"),
  leadForm: $("#leadForm"),
  leadFields: $("[data-lead-fields]"),
  leadSubtitle: $("#leadSubtitle"),
  leadClose: $(".lead-close"),
  contactForm: $("#contactForm"),
  themeButtons: $$("[data-theme-option]"),
  nav: $(".primary-nav"),
  navToggle: $(".nav-toggle"),
  heroProof: $(".hero-proof"),
  leadCapture: $(".lead-capture"),
  copilotButton: $("#aiCopilot"),
  copilotModal: $("#copilotModal"),
  copilotClose: $(".copilot-close"),
  copilotChips: $("[data-copilot-chips]"),
  copilotInput: $("#copilotInput"),
  copilotSend: $("#copilotSend")
};

/* ---------- analytics (unchanged) ---------- */
function fireAnalyticsEvent(event, props = {}) {
  const payload = { event, timestamp: new Date().toISOString(), ...props };
  // eslint-disable-next-line no-console
  console.log("[analytics]", payload);
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(payload);
}

/* ---------- theme ---------- */
function applyTheme(theme) {
  if (!["white", "dark", "matte", "cosmic"].includes(theme)) return;
  if (dom.body) dom.body.dataset.theme = theme;
  dom.themeButtons.forEach((btn) =>
    btn.classList.toggle("is-active", btn.dataset.themeOption === theme)
  );
  storage.set("healthflo_theme", theme);
}

dom.themeButtons.forEach((btn) => {
  btn.addEventListener("click", () => applyTheme(btn.dataset.themeOption));
});

/* ---------- utils ---------- */
function formatINR(value) {
  try {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0
    }).format(value);
  } catch {
    return `₹${(value || 0).toLocaleString("en-IN")}`;
  }
}

/* ---------- renderers ---------- */
function renderWhy(personaConfig) {
  if (!dom.whyGrid || !personaConfig?.why) return;
  dom.whyGrid.innerHTML = "";
  personaConfig.why.forEach((item) => {
    const card = document.createElement("article");
    card.className = "pillar-card";
    card.setAttribute("data-reveal", "");
    card.innerHTML = `<h3>${item.title}</h3><p>${item.copy}</p>`;
    dom.whyGrid.appendChild(card);
    observeReveal(card);
  });
}

function createProductCard(item) {
  const card = document.createElement("article");
  card.className = "product-card";
  card.setAttribute("data-reveal", "");
  card.innerHTML = `
    <figure><img src="${item.image}" alt="${item.title}" loading="lazy"/></figure>
    <div class="product-copy">
      <h3>${item.title}</h3>
      <p>${item.copy}</p>
      <span class="badge">${item.badge}</span>
      <a href="#lead" class="btn btn-secondary" data-cta="${item.ctaAnalytics}">${item.ctaLabel}</a>
    </div>`;
  observeReveal(card);
  return card;
}

function renderProducts(personaKey, personaConfig) {
  if (!dom.productGrid || !personaConfig?.products) return;
  dom.productGrid.innerHTML = "";
  personaConfig.products.forEach((item) => dom.productGrid.appendChild(createProductCard(item)));

  if (personaConfig.packages?.length) {
    if (dom.packagePanel) {
      dom.packagePanel.hidden = false;
      dom.packagePanel.setAttribute("aria-hidden", "false");
    }
    if (dom.packages) dom.packages.innerHTML = "";
    personaConfig.packages.forEach((pkg) => {
      const card = document.createElement("article");
      card.className = "package-card";
      card.setAttribute("data-reveal", "");
      const inclusions = pkg.inclusions ? `<p><strong>Includes:</strong> ${pkg.inclusions.join(", ")}</p>` : "";
      const exclusions = pkg.exclusions ? `<p><strong>Excludes:</strong> ${pkg.exclusions.join(", ")}</p>` : "";
      const badge = pkg.cashless_eligible
        ? '<span class="badge">Cashless eligible</span>'
        : '<span class="badge">Check eligibility</span>';
      card.innerHTML = `
        <img src="${pkg.image}" alt="${pkg.hospital}" loading="lazy"/>
        <h4>${pkg.procedure}</h4>
        <div class="package-meta">
          <span><strong>${pkg.hospital}</strong></span>
          <span>${pkg.city} · ${pkg.specialty}</span>
          <span>From ${formatINR(pkg.lead_price_inr)}</span>
          ${badge}
        </div>
        ${inclusions}
        ${exclusions}
        ${pkg.notes ? `<p class="muted">${pkg.notes}</p>` : ""}`;
      dom.packages?.appendChild(card);
      observeReveal(card);
    });
  } else if (dom.packagePanel) {
    dom.packagePanel.hidden = true;
    dom.packagePanel.setAttribute("aria-hidden", "true");
    if (dom.packages) dom.packages.innerHTML = "";
  }
}

function renderHow(personaConfig) {
  if (!dom.howSteps || !personaConfig?.how) return;
  dom.howSteps.innerHTML = "";
  personaConfig.how.forEach((step) => {
    const card = document.createElement("li");
    card.className = "step-card";
    card.setAttribute("data-reveal", "");
    card.innerHTML = `<h3>${step}</h3><p>${personaConfig.label} workflow</p>`;
    dom.howSteps.appendChild(card);
    observeReveal(card);
  });
}

function renderRisk(personaConfig) {
  if (!dom.riskList || !personaConfig?.risk) return;
  dom.riskList.innerHTML = "";
  personaConfig.risk.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    dom.riskList.appendChild(li);
  });
}

function renderPricing(personaConfig) {
  if (!dom.pricingCard || !personaConfig?.pricing) return;
  const { heading, bullets } = personaConfig.pricing;
  dom.pricingCard.innerHTML = `
    <h3>${heading}</h3>
    <ul>${(bullets || []).map((b) => `<li>${b}</li>`).join("")}</ul>
    <button type="button" class="btn btn-secondary" data-roi>${personaConfig.label} ROI snapshot →</button>
  `;
  observeReveal(dom.pricingCard);
  const roiBtn = dom.pricingCard.querySelector("[data-roi]");
  if (roiBtn) {
    roiBtn.addEventListener("click", () => {
      fireAnalyticsEvent("roi_calculated", {
        role: currentPersona,
        claims: personaConfig.pricing.roi?.claims,
        denial_rate: personaConfig.pricing.roi?.denial_rate
      });
      roiBtn.textContent = "ROI snapshot queued ✓";
      roiBtn.disabled = true;
    });
  }
}

function renderLeadForm(personaConfig) {
  if (!dom.leadFields || !personaConfig?.leadFields) return;
  dom.leadFields.innerHTML = "";
  personaConfig.leadFields.forEach((field) => {
    const wrap = document.createElement("label");
    wrap.innerHTML = `<span>${field.label}</span>`;
    if (field.type === "select") {
      const select = document.createElement("select");
      select.name = field.name;
      select.required = !!field.required;
      (field.options || []).forEach((opt) => {
        const o = document.createElement("option");
        o.value = opt;
        o.textContent = opt;
        select.appendChild(o);
      });
      wrap.appendChild(select);
    } else {
      const input = document.createElement("input");
      input.type = field.type || "text";
      input.name = field.name;
      if (field.placeholder) input.placeholder = field.placeholder;
      if (field.accept) input.accept = field.accept;
      input.required = !!field.required;
      wrap.appendChild(input);
      if (field.type === "file") {
        input.addEventListener("change", (ev) => {
          const file = ev.target.files && ev.target.files[0];
          if (!file) return;
          const sizeKb = Math.round(file.size / 1024);
          const parseSuccess = /pdf|image\//i.test(file.type);
          fireAnalyticsEvent("policy_uploaded", {
            role: currentPersona,
            size_kb: sizeKb,
            parse_success: parseSuccess
          });
        });
      }
    }
    dom.leadFields.appendChild(wrap);
  });
}

function renderCopilot(personaConfig) {
  if (!dom.copilotChips || !personaConfig?.aiPrompts) return;
  dom.copilotChips.innerHTML = "";
  personaConfig.aiPrompts.forEach((prompt) => {
    const chip = document.createElement("button");
    chip.type = "button";
    chip.className = "copilot-chip";
    chip.textContent = prompt;
    chip.addEventListener("click", () => {
      if (dom.copilotInput) {
        dom.copilotInput.value = prompt;
        dom.copilotInput.focus();
      }
    });
    dom.copilotChips.appendChild(chip);
  });
}

/* ---------- persona state ---------- */
let currentPersona = "patient";

function applyPersona(personaKey) {
  const personaConfig = PERSONAS[personaKey];
  if (!personaConfig) return;
  currentPersona = personaKey;
  if (dom.body) dom.body.dataset.persona = personaKey;
  storage.set("healthflo_persona", personaKey);

  dom.personaButtons.forEach((btn) =>
    btn.classList.toggle("is-active", btn.dataset.personaOption === personaKey)
  );

  if (dom.heroTitle) dom.heroTitle.textContent = personaConfig.heroTitle;
  if (dom.heroCTA) {
    dom.heroCTA.textContent = personaConfig.ctaLabel;
    dom.heroCTA.dataset.cta = personaConfig.ctaAnalytics;
  }
  if (dom.heroProof) {
    dom.heroProof.textContent =
      "570+ NABH partners • 92% same-day approvals • 45s pre-auth median • 150k+ claims navigated";
  }
  if (dom.whatsappLink) {
    dom.whatsappLink.textContent = personaConfig.whatsappCopy;
    dom.whatsappLink.href = `https://wa.me/919940207670?text=${encodeURIComponent(
      personaConfig.whatsappText
    )}`;
  }
  if (dom.floatingWhatsapp) {
    dom.floatingWhatsapp.textContent = personaConfig.floatingLabel;
    dom.floatingWhatsapp.href = `https://wa.me/919940207670?text=${encodeURIComponent(
      personaConfig.whatsappText
    )}`;
  }
  if (dom.leadSubtitle) dom.leadSubtitle.textContent = personaConfig.leadSubtitle;

  renderWhy(personaConfig);
  renderProducts(personaKey, personaConfig);
  renderHow(personaConfig);
  renderRisk(personaConfig);
  renderPricing(personaConfig);
  if (dom.leadForm) dom.leadForm.reset();
  renderLeadForm(personaConfig);
  renderCopilot(personaConfig);
  if (dom.quote) dom.quote.textContent = personaConfig.quote?.text || "";
  if (dom.quoteMeta) dom.quoteMeta.textContent = personaConfig.quote?.meta || "";

  const submitBtn = dom.leadForm?.querySelector('button[type="submit"]');
  if (submitBtn) {
    submitBtn.disabled = false;
    submitBtn.textContent = "Start now";
  }

  fireAnalyticsEvent("persona_selected", { role: personaKey });
}

function detectPersona() {
  const params = new URLSearchParams(window.location.search);
  const utmPersona = params.get("utm_persona");
  if (utmPersona && PERSONAS[utmPersona]) return utmPersona;
  const stored = storage.get("healthflo_persona");
  if (stored && PERSONAS[stored]) return stored;
  return "patient";
}

/* ---------- form handlers ---------- */
function handleLeadSubmit(e) {
  e.preventDefault();
  if (!dom.leadForm) return;
  const formData = new FormData(dom.leadForm);
  const fields = {};
  for (const [k, v] of formData.entries()) {
    if (k === "policy") continue;
    fields[k] = v;
  }
  fireAnalyticsEvent("lead_submitted", { role: currentPersona, fields });
  if (formData.get("whatsapp_opt_in")) {
    fireAnalyticsEvent("whatsapp_optin", { role: currentPersona });
  }
  dom.leadForm.reset();
  dom.leadForm.classList.add("is-success");
  const btn = dom.leadForm.querySelector('button[type="submit"]');
  if (btn) btn.textContent = "Received ✓";
  setTimeout(() => {
    dom.leadForm?.classList.remove("is-success");
    const b = dom.leadForm?.querySelector('button[type="submit"]');
    if (b) b.textContent = "Start now";
  }, 4000);
}

function handleContactSubmit(e) {
  e.preventDefault();
  if (!dom.contactForm) return;
  const formData = new FormData(dom.contactForm);
  const fields = {};
  for (const [k, v] of formData.entries()) fields[k] = v;
  fireAnalyticsEvent("lead_submitted", { role: `${currentPersona}_contact`, fields });
  dom.contactForm.reset();
  const btn = dom.contactForm.querySelector('button[type="submit"]');
  if (btn) {
    btn.textContent = "Sent ✓";
    setTimeout(() => (btn.textContent = "Send message"), 4000);
  }
}

/* ---------- UI init ---------- */
function initNav() {
  if (!dom.nav || !dom.navToggle) return;
  dom.navToggle.addEventListener("click", () => {
    const isOpen = dom.nav.classList.toggle("is-open");
    dom.navToggle.setAttribute("aria-expanded", String(isOpen));
  });
  $$("a", dom.nav).forEach((link) =>
    link.addEventListener("click", () => dom.nav.classList.remove("is-open"))
  );
}

function initPersonaButtons() {
  dom.personaButtons.forEach((btn) => {
    btn.addEventListener("click", () => applyPersona(btn.dataset.personaOption));
  });
}

function initLeadClose() {
  dom.leadClose?.addEventListener("click", () => {
    dom.leadCapture?.classList.add("is-hidden");
    storage.set("hf_hide_lead", "1");
  });
}

function initAnalyticsDelegation() {
  document.addEventListener("click", (event) => {
    const target = event.target.closest("[data-cta]");
    if (!target) return;
    const label = target.dataset.cta;
    if (label && label.includes("whatsapp")) {
      fireAnalyticsEvent("whatsapp_optin", { role: currentPersona, label });
    }
    fireAnalyticsEvent("cta_clicked", { role: currentPersona, cta_label: label });
  });
}

function initCopilot() {
  if (!dom.copilotButton || !dom.copilotModal) return;
  const closeModal = () => dom.copilotModal.setAttribute("hidden", "");
  const openModal = () => {
    dom.copilotModal.removeAttribute("hidden");
    dom.copilotInput?.focus();
  };
  dom.copilotButton.addEventListener("click", openModal);
  dom.copilotClose?.addEventListener("click", closeModal);
  dom.copilotModal.addEventListener("click", (e) => {
    if (e.target === dom.copilotModal) closeModal();
  });
  dom.copilotSend?.addEventListener("click", () => {
    fireAnalyticsEvent("cta_clicked", { role: currentPersona, cta_label: "copilot_send" });
    dom.copilotSend.textContent = "Sent ✓";
    setTimeout(() => (dom.copilotSend.textContent = "Send to Copilot"), 2500);
  });

  /* Long-press to hide floaters (no visual change) */
  [dom.copilotButton, dom.floatingWhatsapp].forEach((el) => {
    if (!el) return;
    let t = null;
    el.addEventListener("pointerdown", () => {
      t = setTimeout(() => toggleFloaters(true), 700);
    });
    el.addEventListener("pointerup", () => t && clearTimeout(t));
    el.addEventListener("pointerleave", () => t && clearTimeout(t));
    el.addEventListener("contextmenu", (e) => {
      e.preventDefault();
      toggleFloaters(!floatsHidden);
    });
  });
}

function initReveal() {
  if (prefersReduced) {
    $$("[data-reveal]").forEach((el) => el.classList.add("is-visible"));
    return;
  }
  revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );
  $$("[data-reveal]").forEach((el) => revealObserver.observe(el));
}
function observeReveal(el) {
  if (!el) return;
  if (prefersReduced) {
    el.classList.add("is-visible");
  } else if (revealObserver) {
    revealObserver.observe(el);
  }
}

function initHeroCanvas() {
  const canvas = document.getElementById("heroCanvas");
  if (!canvas || prefersReduced) return;
  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  let width = 0;
  let height = 0;
  let device = window.devicePixelRatio || 1;
  const particles = [];

  function resize() {
    width = canvas.clientWidth || window.innerWidth;
    height = canvas.clientHeight || 480;
    device = window.devicePixelRatio || 1;
    canvas.width = width * device;
    canvas.height = height * device;
    ctx.setTransform(device, 0, 0, device, 0, 0);
  }

  function createParticles(count = 48) {
    particles.length = 0;
    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 2 + 0.6,
        speed: Math.random() * 0.3 + 0.05,
        angle: Math.random() * Math.PI * 2
      });
    }
  }

  function drawBackground() {
    const g = ctx.createLinearGradient(0, 0, width, height);
    g.addColorStop(0, "rgba(26, 59, 155, 0.55)");
    g.addColorStop(0.6, "rgba(18, 30, 68, 0.65)");
    g.addColorStop(1, "rgba(12, 18, 38, 0.95)");
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, width, height);
  }

  function drawOrbits(time) {
    const cx = width * 0.6;
    const cy = height * 0.4;
    const layers = 4;
    for (let i = 0; i < layers; i++) {
      ctx.beginPath();
      const radius = 120 + i * 40 + Math.sin(time / 3000 + i) * 12;
      ctx.strokeStyle = `rgba(96,149,255,${0.12 + i * 0.05})`;
      ctx.lineWidth = 1.2;
      ctx.ellipse(cx, cy, radius * 1.4, radius, 0, 0, Math.PI * 2);
      ctx.stroke();
    }
  }

  function drawParticles(time) {
    particles.forEach((p, idx) => {
      p.angle += p.speed;
      p.x += Math.cos(p.angle) * 0.6;
      p.y += Math.sin(p.angle) * 0.6;
      if (p.x < -20 || p.x > width + 20 || p.y < -20 || p.y > height + 20) {
        p.x = Math.random() * width;
        p.y = Math.random() * height;
        p.angle = Math.random() * Math.PI * 2;
      }
      const glow = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, 18);
      glow.addColorStop(0, "rgba(255,176,110,0.6)");
      glow.addColorStop(1, "rgba(255,176,110,0)");
      ctx.fillStyle = glow;
      ctx.beginPath();
      ctx.arc(p.x, p.y, 18, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = "rgba(120,196,255,0.65)";
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fill();

      if (idx % 7 === 0) {
        ctx.strokeStyle = "rgba(80,150,255,0.2)";
        ctx.lineWidth = 0.6;
        ctx.beginPath();
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(
          width * 0.5 + Math.sin(time / 1500 + idx) * 90,
          height * 0.5 + Math.cos(time / 1700 + idx) * 90
        );
        ctx.stroke();
      }
    });
  }

  function render(time = 0) {
    ctx.clearRect(0, 0, width, height);
    drawBackground();
    drawOrbits(time);
    drawParticles(time);
    requestAnimationFrame(render);
  }

  resize();
  createParticles();
  window.addEventListener("resize", () => {
    resize();
    createParticles();
  });
  requestAnimationFrame(render);
}

/* ---------- ripple ---------- */
function initRipple() {
  document.addEventListener("pointerdown", (event) => {
    const target = event.target.closest(".btn, .persona-btn");
    if (!target) return;
    const rect = target.getBoundingClientRect();
    const ripple = document.createElement("span");
    ripple.className = "ripple-effect";
    const size = Math.max(rect.width, rect.height);
    const cx = (event.clientX ?? rect.left + rect.width / 2) - rect.left - size / 2;
    const cy = (event.clientY ?? rect.top + rect.height / 2) - rect.top - size / 2;
    ripple.style.width = ripple.style.height = `${size}px`;
    ripple.style.left = `${cx}px`;
    ripple.style.top = `${cy}px`;
    target.appendChild(ripple);
    ripple.addEventListener("animationend", () => ripple.remove());
  });
}

/* ---------- proof ticker ---------- */
function initHeroProofTicker() {
  if (!dom.heroProof) return;
  const proofs = [
    "570+ NABH partners · 92% same-day approvals · 45s pre-auth median · 150k+ claims navigated",
    "Ethical automation · Transparent tariffs · Compliant cashless even pre-network",
    "Outcome framing · Social proof · Control · Micro-commitment built into every flow"
  ];
  let index = 0;
  setInterval(() => {
    index = (index + 1) % proofs.length;
    dom.heroProof.textContent = proofs[index];
  }, 6000);
}

/* ---------- floaters hide/show (no visual redesign) ---------- */
function toggleFloaters(hide) {
  floatsHidden = hide;
  const els = [dom.leadCapture, dom.floatingWhatsapp, dom.copilotButton];
  els.forEach((el) => {
    if (!el) return;
    el.style.display = hide ? "none" : "";
  });
  storage.set("hf_hide_floaters", hide ? "1" : "0");
}

/* ---------- keyboard shortcuts ---------- */
function initGlobalShortcuts() {
  document.addEventListener("keydown", (e) => {
    // ESC closes nav, lead card, and copilot modal (if open)
    if (e.key === "Escape") {
      dom.nav?.classList.remove("is-open");
      dom.leadCapture?.classList.add("is-hidden");
      dom.copilotModal?.setAttribute("hidden", "");
      storage.set("hf_hide_lead", "1");
    }
    // Ctrl+/ (or Cmd+/) toggles floaters visibility
    if ((e.ctrlKey || e.metaKey) && (e.key === "/" || e.code === "Slash")) {
      e.preventDefault();
      toggleFloaters(!floatsHidden);
    }
  });
}

/* ---------- restore preferences ---------- */
function restoreTheme() {
  const stored = storage.get("healthflo_theme");
  if (stored) applyTheme(stored);
}
function restoreFloaters() {
  const hideLead = storage.get("hf_hide_lead") === "1";
  const hideAll = storage.get("hf_hide_floaters") === "1";
  if (hideLead) dom.leadCapture?.classList.add("is-hidden");
  if (hideAll) toggleFloaters(true);
}

/* ---------- init ---------- */
function init() {
  restoreTheme();
  initNav();
  initPersonaButtons();
  initLeadClose();
  initAnalyticsDelegation();
  initCopilot();
  initReveal();
  initHeroCanvas();
  initRipple();
  initHeroProofTicker();
  initGlobalShortcuts();
  restoreFloaters();

  if (dom.leadForm) dom.leadForm.addEventListener("submit", handleLeadSubmit);
  if (dom.contactForm) dom.contactForm.addEventListener("submit", handleContactSubmit);

  const persona = detectPersona();
  applyPersona(persona);
}

document.addEventListener("DOMContentLoaded", init);
