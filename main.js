const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
const body = document.body;
const dataLayer = (window.dataLayer = window.dataLayer || []);

const track = (event, props = {}) => {
  dataLayer.push({ event, ...props, timestamp: Date.now() });
};

const prefersReducedMotion = () =>
  window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const heroCanvas = $('#heroCanvas');
let heroCtx = null;
let heroParticles = [];
let heroAnimationId = null;
let heroPointer = { x: 0, y: 0 };

const personaConfig = {
  patient: {
    label: 'Patient',
    heroIntro:
      'Upload a policy, decode the fine print, compare transparent treatment packages, and hand off cashless coordination in minutes.',
    heroCTA: { label: 'Decode My Policy →', href: '#lead' },
    whatsapp: 'Hi, I’d like a 2-min summary of my policy (PDF attached). City: ____.',
    why: [
      {
        title: 'Clarity before care',
        copy: 'Package-first pricing, coverage decoders, and honest inclusions/exclusions so decisions are stress-free.'
      },
      {
        title: 'Velocity when it counts',
        copy: 'AI-prepared pre-auths and compliant cashless even with pre-network approvals when documentation allows.'
      },
      {
        title: 'Recovery & prevention',
        copy: 'Structured appeal templates, ombudsman support, and line-item reconciliation for fair settlements.'
      }
    ],
    quote: {
      text:
        '“Pre-auth went from back-and-forth calls to one WhatsApp thread. My mother’s surgery cleared in hours.”',
      cite: '— Caregiver, 2-policy family, Bengaluru'
    },
    products: {
      title: 'Get care on your terms',
      subtitle: 'Tools that decode policies, surface packages, and keep every update transparent.',
      cards: [
        {
          title: 'Know your coverage',
          copy: 'Upload PDF → instantly see room rent caps, co-pay, waiting periods, and non-payables.',
          tag: 'Policy decoder',
          cta: 'Decode in 2 minutes →',
          href: '#lead',
          image: 'https://storage.googleapis.com/dev_resources_voka_io_303011/common/cat-1.webp'
        },
        {
          title: 'Treatment packages',
          copy: 'Transparent bundles by city & specialty; add-ons like private room or ICU buffer before admission.',
          tag: 'City packages',
          cta: 'Browse packages →',
          href: '#packages',
          image: 'https://storage.googleapis.com/dev_resources_voka_io_303011/common/cat-5.webp'
        },
        {
          title: 'Cashless concierge',
          copy: 'We prep docs, coordinate TPA, and keep you updated on WhatsApp with every decision.',
          tag: 'Concierge',
          cta: 'Start cashless →',
          href: '#lead',
          image: 'https://storage.googleapis.com/dev_resources_voka_io_303011/common/cat-6.webp'
        },
        {
          title: 'Denials & shortfalls',
          copy: 'Structured appeals, ombudsman escalation, and reimbursement audits when things go sideways.',
          tag: 'Appeals',
          cta: 'Get help →',
          href: '#lead',
          image: 'https://storage.googleapis.com/dev_resources_voka_io_303011/common/cat-7.webp'
        }
      ]
    },
    how: ['Upload policy', 'Decode coverage', 'We run cashless & update you'],
    riskLine:
      'Patients: Concierge fee billed only if cashless is confirmed and you approve the quote.',
    pricing: {
      lede: 'Patients: Core tools free; concierge optional when you want a specialist on your case.',
      points: [
        'Unlimited policy decodes and package lookups at no cost.',
        'Concierge available per episode with transparent pricing.',
        'Ombudsman & escalation desk included for active concierge cases.'
      ],
      cta: 'Start for free'
    },
    lead: {
      title: 'Decode your policy with a specialist',
      subtitle: 'Upload a policy for a concierge summary and coverage checklist.',
      responseTime: '<5 min',
      fields: [
        {
          label: 'Email or WhatsApp*',
          name: 'contact',
          type: 'text',
          placeholder: 'you@email.com / +91…',
          required: true
        },
        {
          label: 'City*',
          name: 'city',
          type: 'text',
          placeholder: 'e.g. Chennai',
          required: true
        },
        {
          label: 'Upload policy (optional)',
          name: 'policy',
          type: 'file',
          accept: '.pdf,.png,.jpg,.jpeg',
          required: false
        }
      ]
    },
    ai: {
@@ -219,50 +221,52 @@ const personaConfig = {
        },
        {
          title: 'RCM cockpit',
          copy: 'Pre-auth velocity, same-day %, and exception heatmaps so finance and ops act early.',
          tag: 'AR days ↓ 35%',
          cta: 'Open dashboard →',
          href: '#lead',
          image: 'https://storage.googleapis.com/dev_resources_voka_io_303011/common/guide-3.webp'
        }
      ]
    },
    how: ['Baseline & gap scan', 'Launch cashless / empanelment', 'Denial prevention + cockpit'],
    riskLine:
      'Hospitals: If we miss agreed SLAs for two weeks in a row, we fund an extra ops sprint at no cost.',
    pricing: {
      lede: 'Hospitals: Modular subscription (bed count + features) + optional recovery-share.',
      points: [
        'RCM cockpit priced by bed strength & feature modules.',
        'Recovery-share applies only on realised recoveries.',
        'On-ground transition squad included in rollout plans.'
      ],
      cta: 'Book an RCM pilot'
    },
    lead: {
      title: 'Launch compliant cashless & RCM',
      subtitle: 'RCM specialists respond with baseline scan templates and rollout guardrails.',
      responseTime: '<30 min',
      fields: [
        { label: 'Name*', name: 'name', type: 'text', placeholder: 'Your name', required: true },
        { label: 'Work email*', name: 'email', type: 'email', placeholder: 'name@hospital.com', required: true },
        { label: 'Bed strength*', name: 'beds', type: 'text', placeholder: 'e.g. 250', required: true }
      ]
    },
    ai: {
      subtitle: 'Ask HealthFlo to flag today’s bottlenecks before billing closes.',
      prompts: [
        'Find denial risk in today’s pre-auths',
        'Which TPAs are breaching SLAs?',
        'Show exceptions for ortho discharges'
      ]
    },
    whatsappCTA: 'Hi, I want to enable compliant cashless for [dept/TPA]. Beds: ____.',
    packages: []
  },
  insurer: {
    label: 'Insurer',
    heroIntro:
      'Standardise packages, orchestrate network ops, and drive distribution pilots with live LOS and loss-ratio analytics.',
    heroCTA: { label: 'Request a Pilot →', href: '#lead' },
    whatsapp: 'Hi, pilot interest: focus cities __, target LOS __.',
    why: [
      {
@@ -313,50 +317,52 @@ const personaConfig = {
        },
        {
          title: 'Loss-ratio analytics',
          copy: 'Denial patterns, LOS by specialty, and ROI by channel to tune strategy.',
          tag: 'Loss ratio ↓ 5.6',
          cta: 'View dashboards →',
          href: '#lead',
          image: 'https://storage.googleapis.com/dev_resources_voka_io_303011/common/guide-2.webp'
        }
      ]
    },
    how: ['Pick focus cities', 'Align networks & packages', 'Run loss-ratio analytics'],
    riskLine:
      'Insurers: 60–90 day pilots with co-defined SLAs; opt-out if LOS targets aren’t met.',
    pricing: {
      lede: 'Insurers: Enterprise license by geographies/modules with 60–90 day pilots.',
      points: [
        'Modular pricing by distribution, network ops, and analytics modules.',
        'Pilots convert only after jointly agreed ROI checkpoints.',
        'Secure deployment with SSO, SCIM, and quarterly penetration tests.'
      ],
      cta: 'Schedule pilot review'
    },
    lead: {
      title: 'Co-design your insurer pilot',
      subtitle: 'Pilot desk reverts with timelines, cohort benchmarks, and integration plans.',
      responseTime: '<45 min',
      fields: [
        { label: 'Company*', name: 'company', type: 'text', placeholder: 'Insurer name', required: true },
        { label: 'Work email*', name: 'email', type: 'email', placeholder: 'name@insurer.com', required: true },
        { label: 'Focus cities*', name: 'cities', type: 'text', placeholder: 'e.g. Mumbai, Pune', required: true }
      ]
    },
    ai: {
      subtitle: 'Ask HealthFlo to spot trends before they hit loss ratios.',
      prompts: [
        'Flag hospitals breaching TAT',
        'Show LOS outliers by specialty',
        'Which channels have best ROAS?'
      ]
    },
    whatsappCTA: 'Hi, pilot interest: focus cities __, target LOS __.',
    packages: []
  },
  employer: {
    label: 'Employer',
    heroIntro:
      'Model benefits by census, issue e-cards in minutes, and keep HR dashboards honest with utilization insights.',
    heroCTA: { label: 'Design My Employee Plan →', href: '#pricing' },
    whatsapp: 'Hi, we’re {headcount} and exploring plan design for {go-live}.',
    why: [
      {
@@ -406,50 +412,52 @@ const personaConfig = {
        },
        {
          title: 'HR analytics',
          copy: 'Utilization trends, top claim categories, and SLA tracking in one dashboard.',
          tag: 'Adoption: 78%',
          cta: 'See HR dashboard →',
          href: '#lead',
          image: 'https://storage.googleapis.com/dev_resources_voka_io_303011/common/cat-4.webp'
        }
      ]
    },
    how: ['Design plan', 'Enroll & issue e-cards', 'Concierge & analytics'],
    riskLine:
      'Employers: If e-cards aren’t issued within 48h of clean data, first-month platform fee is waived.',
    pricing: {
      lede: 'Employers: Broker-assisted plan + platform per-employee with optional wellness add-ons.',
      points: [
        'Per-employee pricing with tiered discounts by headcount.',
        'Wellness, OPD, and parental add-ons priced a la carte.',
        'Broker partnerships or direct carrier integrations available.'
      ],
      cta: 'Plan a benefits sprint'
    },
    lead: {
      title: 'Design the plan your team will use',
      subtitle: 'Benefits architects share plan comparisons and go-live playbooks fast.',
      responseTime: '<15 min',
      fields: [
        {
          label: 'Headcount band*',
          name: 'headcount',
          type: 'select',
          options: ['<250', '250-750', '750-1500', '1500+'],
          required: true
        },
        {
          label: 'Work email*',
          name: 'email',
          type: 'email',
          placeholder: 'name@company.com',
          required: true
        },
        {
          label: 'Target go-live month*',
          name: 'golive',
          type: 'select',
          options: ['ASAP', 'Next 30 days', 'Next quarter', 'Next 6 months'],
          required: true
        }
      ]
    },
    ai: {
@@ -464,141 +472,214 @@ const personaConfig = {
    packages: []
  }
};

const themeButtons = $$('.theme-chip');
const personaButtons = $$('.persona-chip');
const heroIntroEl = $('[data-hero-intro]');
const heroCTA = $('[data-hero-cta]');
const heroProofLinks = $$('[data-whatsapp-link]');
const whyGrid = $('[data-why-grid]');
const quoteText = $('[data-quote-text]');
const quoteCite = $('[data-quote-cite]');
const productTitle = $('[data-products-title]');
const productSubtitle = $('[data-products-subtitle]');
const productGrid = $('[data-product-grid]');
const packagesSection = $('[data-persona-section="patient"]');
const packageGrid = $('[data-package-grid]');
const howSteps = $('[data-how-steps]');
const riskLine = $('[data-risk-line]');
const pricingLede = $('[data-pricing-lede]');
const pricingPoints = $('[data-pricing-points]');
const pricingCTA = $('[data-pricing-cta]');
const leadTitle = $('[data-lead-title]');
const leadFields = $('[data-lead-fields]');
const leadForm = $('[data-lead-form]');
const leadSubtitle = $('[data-lead-subtitle]');
const responseTimeEl = $('[data-response-time]');
const aiSubtitle = $('[data-ai-subtitle]');
const aiPrompts = $('[data-ai-prompts]');
const aiModal = $('[data-ai-modal]');
const aiOpeners = $$('[data-ai-launch] button, [data-ai-launch]');
const aiCloseEls = $$('[data-ai-close]');
const siteHeader = $('.site-header');
const nav = $('.primary-nav');
const navToggle = $('.nav-toggle');
const stickyLead = $('.sticky-lead');
const stickyToggle = $('.sticky-toggle');
const packageControls = $('[data-package-controls]');
const packageCityFilter = $('[data-package-filter="city"]');
const packageSpecialtyFilter = $('[data-package-filter="specialty"]');
const packageCashlessFilter = $('[data-package-filter="cashless"]');
const packageResetButton = $('[data-package-reset]');
const installBanner = $('[data-install-banner]');
const installButton = $('[data-install-button]');
const installDismiss = $('[data-install-dismiss]');
const devicePreview = $('[data-device-preview]');
const experienceArticles = $$('.experience-grid article');
const actionCards = $$('.action-card');
const devicePreviewPanels = devicePreview ? $$('[data-device-panel]', devicePreview) : [];
const devicePreviewTabs = devicePreview ? $$('[data-device-target]', devicePreview) : [];

let currentPersona = 'patient';
let deferredInstallPrompt = null;
let availablePackages = [];
const packageFilterState = { city: 'all', specialty: 'all', cashless: false };
let installPromptDismissed = false;

const renderWhy = (config) => {
  if (!whyGrid) return;
  whyGrid.innerHTML = config.why
    .map(
      (item) => `
        <article class="pillar-card will-reveal">
          <h3>${item.title}</h3>
          <p>${item.copy}</p>
        </article>
      `
    )
    .join('');
  observeReveal($$('.pillar-card', whyGrid));
};

const renderQuote = (config) => {
  if (quoteText) quoteText.textContent = config.quote.text;
  if (quoteCite) quoteCite.textContent = config.quote.cite;
};

const renderProducts = (config) => {
  if (!productGrid) return;
  productTitle.textContent = config.products.title;
  productSubtitle.textContent = config.products.subtitle;
  productGrid.innerHTML = config.products.cards
    .map(
      (card, idx) => `
        <article class="product-card will-reveal">
          <img src="${card.image}" alt="${card.title}" loading="lazy" />
          <div>
            <h3>${card.title}</h3>
            <p>${card.copy}</p>
          </div>
          <div class="card-footer">
            <span class="card-tag">${card.tag}</span>
            <a class="btn-link" href="${card.href}" data-track="cta" data-track-label="product_${currentPersona}_${idx}">${card.cta}</a>
          </div>
        </article>
      `
    )
    .join('');
  observeReveal($$('.product-card', productGrid));
};

const formatINR = (value) =>
  `₹${value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`;

const resetPackageFiltersState = (syncDom = true) => {
  packageFilterState.city = 'all';
  packageFilterState.specialty = 'all';
  packageFilterState.cashless = false;
  if (syncDom) {
    if (packageCityFilter) packageCityFilter.value = 'all';
    if (packageSpecialtyFilter) packageSpecialtyFilter.value = 'all';
    if (packageCashlessFilter) packageCashlessFilter.checked = false;
  }
};

const populatePackageFilters = (packages) => {
  if (!packageCityFilter || !packageSpecialtyFilter) return;
  const uniqueValues = (key) => [...new Set(packages.map((pkg) => pkg[key]))].sort();
  const buildOptions = (values, label) =>
    ['<option value="all">' + label + '</option>', ...values.map((value) => `<option value="${value}">${value}</option>`)].join('');
  packageCityFilter.innerHTML = buildOptions(uniqueValues('city'), 'All cities');
  packageSpecialtyFilter.innerHTML = buildOptions(uniqueValues('specialty'), 'All specialties');
  packageCityFilter.value = packageFilterState.city;
  packageSpecialtyFilter.value = packageFilterState.specialty;
  if (packageCashlessFilter) packageCashlessFilter.checked = packageFilterState.cashless;
};

const filterPackages = () =>
  availablePackages.filter((pkg) => {
    if (packageFilterState.city !== 'all' && pkg.city !== packageFilterState.city) return false;
    if (packageFilterState.specialty !== 'all' && pkg.specialty !== packageFilterState.specialty) return false;
    if (packageFilterState.cashless && !pkg.cashless_eligible) return false;
    return true;
  });

const drawPackages = () => {
  if (!packageGrid) return;
  if (!availablePackages.length) {
    packageGrid.innerHTML = '';
    return;
  }
  const filtered = filterPackages();
  if (!filtered.length) {
    packageGrid.innerHTML =
      '<p class="packages-empty">No packages match your filters yet. Reset to explore all NABH partner bundles.</p>';
    return;
  }
  packageGrid.innerHTML = filtered
    .map(
      (pkg) => `
        <article class="package-card will-reveal">
          <img src="${pkg.image}" alt="${pkg.hospital} — ${pkg.procedure}" loading="lazy" />
          <div class="package-body">
            <span class="badge-cashless">${pkg.cashless_eligible ? 'Cashless eligible' : 'Reimbursement only'}</span>
            <h3>${pkg.procedure}</h3>
            <div class="package-meta">
              <span>${pkg.hospital}</span>
              <span>${pkg.city} · ${pkg.specialty}</span>
              <span class="package-price">From ${formatINR(pkg.lead_price_inr)}</span>
            </div>
            <div class="package-includes">Includes: ${pkg.inclusions.slice(0, 3).join(', ')}${
              pkg.inclusions.length > 3 ? ', …' : ''
            }</div>
            <a class="btn-link" href="#lead" data-track="cta" data-track-label="package_${pkg.id}">Check eligibility →</a>
          </div>
        </article>
      `
    )
    .join('');
  observeReveal($$('.package-card', packageGrid));
};

const renderPackages = (config) => {
  if (!packagesSection) return;
  availablePackages = Array.isArray(config.packages) ? config.packages : [];
  const hasPackages = availablePackages.length > 0;
  packagesSection.hidden = !hasPackages;
  packagesSection.setAttribute('aria-hidden', String(!hasPackages));
  if (packageControls) {
    packageControls.hidden = !hasPackages;
    packageControls.setAttribute('aria-hidden', String(!hasPackages));
  }
  if (!hasPackages) {
    packageGrid.innerHTML = '';
    return;
  }
  resetPackageFiltersState(false);
  populatePackageFilters(availablePackages);
  drawPackages();
};

const renderHow = (config) => {
  if (!howSteps) return;
  howSteps.innerHTML = config.how
    .map(
      (step) =>
        `<li class="step-card will-reveal"><h3>${step}</h3><p>${howCopy(step, currentPersona)}</p></li>`
    )
    .join('');
  observeReveal($$('.step-card', howSteps));
};

const howCopy = (step, persona) => {
  const lookup = {
    patient: {
      'Upload policy': 'Snap a photo or upload the PDF. We auto-redact PII for secure processing.',
      'Decode coverage': 'Room rent, co-pay, PED, and non-payables rendered in a friendly checklist.',
      'We run cashless & update you': 'Dedicated concierge preps documents, tracks TPAs, and pushes WhatsApp status updates.'
    },
    hospital: {
      'Baseline & gap scan': 'Map empanelment status, cashless velocity, and leakage categories in under a week.',
      'Launch cashless / empanelment': 'AI-prepared packs, SLA timers, and tariff governance keep teams compliant.',
      'Denial prevention + cockpit': 'Exception heatmaps and recovery loops close the gap on underpayments.'
    },
@@ -608,52 +689,64 @@ const howCopy = (step, persona) => {
      'Run loss-ratio analytics': 'Monitor LOS, denial patterns, and channel ROAS with automated alerts.'
    },
    employer: {
      'Design plan': 'Model census, rider mix, and co-pay scenarios to get leadership sign-off faster.',
      'Enroll & issue e-cards': 'Bulk import employees, auto-generate e-cards, and sync with HRIS.',
      'Concierge & analytics': 'Cashless helpdesk, utilization dashboards, and SLA alerts keep benefits predictable.'
    }
  };
  return lookup[persona][step] || '';
};

const renderPricing = (config) => {
  if (pricingLede) pricingLede.textContent = config.pricing.lede;
  if (pricingPoints)
    pricingPoints.innerHTML = config.pricing.points
      .map((point) => `<li>${point}</li>`)
      .join('');
  if (pricingCTA) {
    pricingCTA.textContent = config.pricing.cta;
    pricingCTA.setAttribute('data-track-label', `pricing_${currentPersona}`);
  }
  observeReveal([$('.pricing-copy'), $('.pricing-card')].filter(Boolean));
};

const renderLeadForm = (config) => {
  if (!leadFields || !config.lead) return;
  if (leadTitle) leadTitle.textContent = config.lead.title;
  if (leadSubtitle) {
    if (config.lead.subtitle) {
      leadSubtitle.textContent = config.lead.subtitle;
      leadSubtitle.hidden = false;
    } else {
      leadSubtitle.textContent = '';
      leadSubtitle.hidden = true;
    }
  }
  if (responseTimeEl) {
    responseTimeEl.textContent = config.lead.responseTime || '<10 min';
  }
  leadFields.innerHTML = config.lead.fields
    .map((field) => {
      if (field.type === 'select') {
        const options = field.options
          .map((opt) => `<option value="${opt}">${opt}</option>`)
          .join('');
        return `
          <label>
            <span>${field.label}</span>
            <select name="${field.name}" ${field.required ? 'required' : ''}>${options}</select>
          </label>
        `;
      }
      if (field.type === 'file') {
        return `
          <label>
            <span>${field.label}</span>
            <input type="file" name="${field.name}" ${field.accept ? `accept="${field.accept}"` : ''} ${
          field.required ? 'required' : ''
        } />
          </label>
        `;
      }
      return `
        <label>
@@ -965,50 +1058,221 @@ const initHeroAnimation = () => {
    heroAnimationId = requestAnimationFrame(draw);
  };
  resize();
  draw();
  window.addEventListener('resize', resize);
  window.addEventListener('pointermove', (event) => {
    const rect = heroCanvas.getBoundingClientRect();
    heroPointer = {
      x: event.clientX - rect.left - rect.width / 2,
      y: event.clientY - rect.top - rect.height / 2
    };
  });
};

const initPersonaFromSource = () => {
  const params = new URLSearchParams(window.location.search);
  const utmRaw = params.get('utm_persona');
  const utmPersona = utmRaw ? utmRaw.toLowerCase() : null;
  const stored = localStorage.getItem('healthflo_persona');
  const fallback = stored && personaConfig[stored] ? stored : 'patient';
  const persona = utmPersona && personaConfig[utmPersona]?.label ? utmPersona : fallback;
  applyPersona(persona);
};

const initStickyToggle = () => {
  if (!stickyLead || !stickyToggle || !leadForm) return;
  const setState = (expanded) => {
    stickyLead.classList.toggle('is-collapsed', !expanded);
    leadForm.classList.toggle('is-collapsed', !expanded);
    stickyToggle.setAttribute('aria-expanded', String(expanded));
    stickyToggle.setAttribute(
      'aria-label',
      expanded ? 'Collapse conversation panel' : 'Expand conversation panel'
    );
  };
  setState(false);
  stickyToggle.addEventListener('click', () => {
    const expanded = stickyToggle.getAttribute('aria-expanded') === 'true';
    setState(!expanded);
    track('lead_panel_toggled', { expanded: !expanded, role: currentPersona });
  });
};

const initPackageControls = () => {
  if (!packageControls) return;
  packageControls.addEventListener('change', (event) => {
    const target = event.target;
    if (target === packageCityFilter) {
      packageFilterState.city = target.value;
      track('package_filter_changed', { filter: 'city', value: target.value, role: currentPersona });
    } else if (target === packageSpecialtyFilter) {
      packageFilterState.specialty = target.value;
      track('package_filter_changed', { filter: 'specialty', value: target.value, role: currentPersona });
    } else if (target === packageCashlessFilter) {
      packageFilterState.cashless = target.checked;
      track('package_filter_changed', { filter: 'cashless', value: target.checked, role: currentPersona });
    } else {
      return;
    }
    drawPackages();
  });
  packageResetButton?.addEventListener('click', () => {
    resetPackageFiltersState();
    populatePackageFilters(availablePackages);
    drawPackages();
    track('package_filter_reset', { role: currentPersona });
  });
};

const initDevicePreview = () => {
  if (!devicePreview || !devicePreviewTabs.length || !devicePreviewPanels.length) return;
  const activate = (target) => {
    const fallback = devicePreviewTabs[0]?.dataset.deviceTarget;
    const selected = target || fallback;
    if (!selected) return;
    devicePreviewTabs.forEach((tab) => {
      const isActive = tab.dataset.deviceTarget === selected;
      tab.classList.toggle('is-active', isActive);
      tab.setAttribute('aria-selected', String(isActive));
      tab.setAttribute('tabindex', isActive ? '0' : '-1');
    });
    devicePreviewPanels.forEach((panel) => {
      const isActive = panel.dataset.devicePanel === selected;
      panel.classList.toggle('is-active', isActive);
      panel.setAttribute('aria-hidden', String(!isActive));
    });
  };
  const initial = devicePreviewTabs.find((tab) => tab.classList.contains('is-active'));
  activate(initial?.dataset.deviceTarget);
  devicePreviewTabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      activate(tab.dataset.deviceTarget);
      track('device_preview_changed', { target: tab.dataset.deviceTarget, role: currentPersona });
    });
    tab.addEventListener('keydown', (event) => {
      const index = devicePreviewTabs.indexOf(tab);
      if (['ArrowRight', 'ArrowDown'].includes(event.key)) {
        event.preventDefault();
        const nextTab = devicePreviewTabs[(index + 1) % devicePreviewTabs.length];
        activate(nextTab.dataset.deviceTarget);
        nextTab.focus();
      } else if (['ArrowLeft', 'ArrowUp'].includes(event.key)) {
        event.preventDefault();
        const prevTab = devicePreviewTabs[(index - 1 + devicePreviewTabs.length) % devicePreviewTabs.length];
        activate(prevTab.dataset.deviceTarget);
        prevTab.focus();
      } else if (event.key === 'Home') {
        event.preventDefault();
        const first = devicePreviewTabs[0];
        activate(first.dataset.deviceTarget);
        first.focus();
      } else if (event.key === 'End') {
        event.preventDefault();
        const last = devicePreviewTabs[devicePreviewTabs.length - 1];
        activate(last.dataset.deviceTarget);
        last.focus();
      }
    });
  });
};

const showInstallPromptBanner = () => {
  if (!installBanner || installPromptDismissed) return;
  installBanner.hidden = false;
  installBanner.setAttribute('aria-hidden', 'false');
};

const hideInstallPromptBanner = () => {
  if (!installBanner) return;
  installBanner.hidden = true;
  installBanner.setAttribute('aria-hidden', 'true');
};

const initPWA = () => {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', async () => {
      try {
        const registration = await navigator.serviceWorker.register('sw.js');
        track('service_worker_registered', { scope: registration.scope });
      } catch (error) {
        console.error('Service worker registration failed', error);
        track('service_worker_error', { message: error.message });
      }
    });
  }

  window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault();
    deferredInstallPrompt = event;
    showInstallPromptBanner();
    track('pwa_prompt_available', { role: currentPersona });
  });

  installButton?.addEventListener('click', async () => {
    if (!deferredInstallPrompt) {
      showToast('Tap share and “Add to Home Screen” to install the HealthFlo mini-app.');
      track('pwa_prompt_manual', { role: currentPersona });
      return;
    }
    try {
      deferredInstallPrompt.prompt();
      const { outcome } = await deferredInstallPrompt.userChoice;
      track('pwa_prompt_choice', { outcome, role: currentPersona });
      if (outcome !== 'dismissed') {
        hideInstallPromptBanner();
      }
    } catch (error) {
      console.error('PWA install prompt failed', error);
      track('pwa_prompt_choice_error', { message: error.message });
    }
    deferredInstallPrompt = null;
  });

  installDismiss?.addEventListener('click', () => {
    installPromptDismissed = true;
    hideInstallPromptBanner();
    track('pwa_prompt_dismissed', { role: currentPersona });
  });

  window.addEventListener('appinstalled', () => {
    hideInstallPromptBanner();
    track('pwa_installed', { role: currentPersona });
    showToast('HealthFlo installed—open it from your home screen.');
  });

  const isStandalone = window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone;
  const isIOS = /iphone|ipad|ipod/.test(window.navigator.userAgent.toLowerCase());
  if (!isStandalone && isIOS) {
    setTimeout(() => {
      if (!deferredInstallPrompt && !installPromptDismissed) {
        showInstallPromptBanner();
      }
    }, 3500);
  }
};

const init = () => {
  initHeader();
  initNav();
  initTheme();
  initPersonaSelector();
  initLeadForm();
  initAI();
  initTracking();
  initHeroAnimation();
  initStickyToggle();
  initPackageControls();
  initDevicePreview();
  initPWA();
  initPersonaFromSource();
  initWhatsAppOptin();
  const revealTargets = [
    ...$$('.metric-panel, .guarantees'),
    ...experienceArticles,
    ...actionCards
  ];
  if (devicePreview) revealTargets.push(devicePreview);
  observeReveal(revealTargets.filter(Boolean));
};

document.addEventListener('DOMContentLoaded', init);
