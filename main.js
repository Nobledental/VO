const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
const body = document.body;
const dataLayer = (window.dataLayer = window.dataLayer || []);

const track = (event, props = {}) => {
  dataLayer.push({ event, ...props, timestamp: Date.now() });
};

const createStorage = () => {
  try {
    if (!('localStorage' in window)) throw new Error('localStorage unavailable');
    const key = '__healthflo__';
    window.localStorage.setItem(key, key);
    window.localStorage.removeItem(key);
    return window.localStorage;
  } catch {
    return {
      getItem: () => null,
      setItem: () => {},
      removeItem: () => {}
    };
  }
};

const storage = createStorage();

const motionMediaQuery =
  typeof window.matchMedia === 'function'
    ? window.matchMedia('(prefers-reduced-motion: reduce)')
    : null;

const prefersReducedMotion = () => motionMediaQuery?.matches ?? false;

const heroCanvas = $('#heroCanvas');
let heroCtx = null;
let heroParticles = [];
let heroAnimationId = null;
let heroPointer = { x: 0, y: 0 };
let heroTick = 0;
let deferredInstallPrompt = null;
const installPromptListeners = [];

window.addEventListener('beforeinstallprompt', (event) => {
  event.preventDefault();
  deferredInstallPrompt = event;
  installPromptListeners.forEach((listener) => {
    try {
      listener();
    } catch (error) {
      track('pwa_install_listener_error', { message: error?.message || String(error) });
    }
  });
  track('pwa_install_available');
});

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
      subtitle: 'Ask HealthFlo to summarise your policy in plain language.',
      prompts: [
        'Summarise my policy (room rent, co-pay, PED)',
        'List non-payables for my maternity cover',
        'What documents do I need for planned surgery?'
      ]
    },
    whatsappCTA:
      'Hi, I’d like a 2-min summary of my policy (PDF attached). City: ____.',
    packages: [
      {
        id: 'pkg_apollo_knee_chennai',
        procedure: 'Total Knee Replacement (Unilateral)',
        specialty: 'Orthopedics',
        city: 'Chennai',
        hospital: 'Apollo Hospitals, Greams Road',
        image: 'https://images.healthflo.org/hospitals/apollo-chennai-knee.jpg',
        lead_price_inr: 185000,
        inclusions: ['OT & Anesthesia', 'Implant (standard)', '2 bed-days (twin)', 'Nursing', 'Pre-op labs'],
        cashless_eligible: true
      },
      {
        id: 'pkg_manipal_lsc_chole_blr',
        procedure: 'Laparoscopic Cholecystectomy',
        specialty: 'General Surgery',
        city: 'Bengaluru',
        hospital: 'Manipal Hospital, Old Airport Road',
        image: 'https://images.healthflo.org/hospitals/manipal-blr-chole.jpg',
        lead_price_inr: 68000,
        inclusions: ['OT', 'Anesthesia', 'Surgeon fee', '1 bed-day (twin)', 'Basic meds'],
        cashless_eligible: true
      },
      {
        id: 'pkg_aster_normal_delivery_hyd',
        procedure: 'Normal Delivery (Mother & Newborn)',
        specialty: 'Obstetrics',
        city: 'Hyderabad',
        hospital: 'Aster Prime',
        image: 'https://images.healthflo.org/hospitals/aster-hyd-obs.jpg',
        lead_price_inr: 52000,
        inclusions: ['Labor room', 'Nursing', 'Standard meds', '2 bed-days (general)'],
        cashless_eligible: true
      }
    ]
  },
  hospital: {
    label: 'Hospital',
    heroIntro:
      'Launch compliant cashless everywhere, run empanelment like a pipeline, and recover denials with forensic workflows.',
    heroCTA: { label: 'Launch RCM Cockpit →', href: '#products' },
    whatsapp: 'Hi, I want to enable compliant cashless for [dept/TPA]. Beds: ____.',
    why: [
      {
        title: 'Clarity before care',
        copy: 'Coverage decoders, package-first pricing, and consent-ready paperwork keep clinicians aligned.'
      },
      {
        title: 'Velocity when it counts',
        copy: 'AI-prepared pre-auths, same-day approvals, and pre-network cashless under compliant guardrails.'
      },
      {
        title: 'Recovery & prevention',
        copy: 'Denial forensics, resubmission templates, and cockpit heatmaps prevent leakage.'
      }
    ],
    quote: {
      text:
        '“Cashless approvals moved from days to hours. The dashboard keeps finance and nursing in sync.”',
      cite: '— RCM Head, 250-bed hospital, Chennai'
    },
    products: {
      title: 'Revenue acceleration for hospitals',
      subtitle: 'RCM intelligence, compliant cashless, and denial recovery in one cockpit.',
      cards: [
        {
          title: 'Cashless Everywhere',
          copy: 'Managed & compliant cashless with a 60-day runway post-empanelment and payer-ready kits.',
          tag: 'Same-day %: 92',
          cta: 'Enable now →',
          href: '#lead',
          image: 'https://storage.googleapis.com/dev_resources_voka_io_303011/common/cat-2.webp'
        },
        {
          title: 'Empanelment desk',
          copy: '20+ insurers & major TPAs with live trackers, SLA timers, and tariff governance.',
          tag: 'Network expansion',
          cta: 'Expand network →',
          href: '#lead',
          image: 'https://storage.googleapis.com/dev_resources_voka_io_303011/common/cat-8.webp'
        },
        {
          title: 'Denial & recovery',
          copy: 'Forensics, category playbooks, and recovery loops to reclaim underpayments.',
          tag: 'Recovery rate: 98%',
          cta: 'Recover revenue →',
          href: '#lead',
          image: 'https://storage.googleapis.com/dev_resources_voka_io_303011/common/cat-7.webp'
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
        title: 'Clarity before care',
        copy: 'Tariff governance, package guardrails, and transparent inclusions so provider networks stay aligned.'
      },
      {
        title: 'Velocity when it counts',
        copy: 'Pre-auth intelligence, SLA tracking, and breach alerts keep claims predictable.'
      },
      {
        title: 'Recovery & prevention',
        copy: 'Denial pattern analytics and playbooks reduce leakages and improve loss ratios.'
      }
    ],
    quote: {
      text:
        '“City cohorts and LOS tracking gave us real-time visibility. Loss ratio dropped 5.6 points in six months.”',
      cite: '— VP Network Ops, national insurer'
    },
    products: {
      title: 'Insurer growth console',
      subtitle: 'Distribution nudges, network governance, and loss-ratio analytics in one view.',
      cards: [
        {
          title: 'Distribution engine',
          copy: 'City cohorts, verified funnels, and quote→bind nudges for targeted growth.',
          tag: 'Channel ROAS ↑',
          cta: 'Launch pilot →',
          href: '#lead',
          image: 'https://storage.googleapis.com/dev_resources_voka_io_303011/common/cat-4.webp'
        },
        {
          title: 'Network hospital ops',
          copy: 'Empanelment SLAs, tariff governance, and TAT visibility at every node.',
          tag: 'TAT breach 3.4%',
          cta: 'See network graph →',
          href: '#lead',
          image: 'https://storage.googleapis.com/dev_resources_voka_io_303011/common/cat-8.webp'
        },
        {
          title: 'Packages & pricing',
          copy: 'Standard catalogs, city-tier guardrails, and approval trails for compliance.',
          tag: 'Guardrails',
          cta: 'Explore packages →',
          href: '#lead',
          image: 'https://storage.googleapis.com/dev_resources_voka_io_303011/common/cat-5.webp'
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
        title: 'Clarity before care',
        copy: 'Plan modeling with inclusions/exclusions spelled out before you take it to leadership.'
      },
      {
        title: 'Velocity when it counts',
        copy: 'Same-day e-cards and cashless helpdesk to prevent shortfalls during admissions.'
      },
      {
        title: 'Recovery & prevention',
        copy: 'Utilization analytics, top claim categories, and SLA tracking keep costs predictable.'
      }
    ],
    quote: {
      text: '“E-cards in minutes. Employees actually used benefits, and HR finally had clean utilization data.”',
      cite: '— HR Lead, 1,200 staff, Bengaluru'
    },
    products: {
      title: 'Corporate healthcare your team actually uses',
      subtitle: 'Plan design, enrollment, cashless helpdesk, and analytics in one place.',
      cards: [
        {
          title: 'Plan design',
          copy: 'Model benefits by census & budget with maternity, OPD, and parent riders in clicks.',
          tag: 'Benefits modeling',
          cta: 'Design my plan →',
          href: '#pricing',
          image: 'https://storage.googleapis.com/dev_resources_voka_io_303011/common/university-computers.webp'
        },
        {
          title: 'Seamless enrollment',
          copy: 'Bulk import employees and issue e-cards in minutes with automation.',
          tag: 'E-cards: 1.3h',
          cta: 'Onboard fast →',
          href: '#lead',
          image: 'https://storage.googleapis.com/dev_resources_voka_io_303011/common/guide-1.webp'
        },
        {
          title: 'Cashless helpdesk',
          copy: 'Live pre-auth guidance prevents shortfalls and manages hospital coordination.',
          tag: 'Helpdesk',
          cta: 'Protect employees →',
          href: '#lead',
          image: 'https://storage.googleapis.com/dev_resources_voka_io_303011/common/cat-6.webp'
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
      subtitle: 'Ask HealthFlo to highlight benefits usage and anomalies.',
      prompts: [
        'Show utilization anomalies this month',
        'Which claims drove the spike in OPD?',
        'Send me top hospitals by employee NPS'
      ]
    },
    whatsappCTA: 'Hi, we’re {headcount} and exploring plan design for {go-live}.',
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
const stickyLead = $('.sticky-lead');
const aiSubtitle = $('[data-ai-subtitle]');
const aiPrompts = $('[data-ai-prompts]');
const aiModal = $('[data-ai-modal]');
const aiOpeners = $$('[data-ai-launch] button, [data-ai-launch]');
const aiCloseEls = $$('[data-ai-close]');
const siteHeader = $('.site-header');
const nav = $('.primary-nav');
const navToggle = $('.nav-toggle');

const updateLeadFormFocusables = (expanded) => {
  if (!leadForm) return;
  const focusables = $$('input, select, textarea, button, a', leadForm);
  focusables.forEach((el) => {
    if (expanded) {
      if (el.dataset.tabRestore) {
        if (el.dataset.tabRestore === 'default') {
          el.removeAttribute('tabindex');
        } else {
          el.setAttribute('tabindex', el.dataset.tabRestore);
        }
        delete el.dataset.tabRestore;
      } else {
        el.removeAttribute('tabindex');
      }
    } else {
      if (!el.dataset.tabRestore) {
        const existing = el.getAttribute('tabindex');
        el.dataset.tabRestore = existing ?? 'default';
      }
      el.setAttribute('tabindex', '-1');
    }
  });
};

let currentPersona = 'patient';

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

const renderPackages = (config) => {
  if (!packagesSection) return;
  if (config.packages && config.packages.length) {
    packagesSection.hidden = false;
    packagesSection.setAttribute('aria-hidden', 'false');
    packageGrid.innerHTML = config.packages
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
  } else {
    packagesSection.hidden = true;
    packagesSection.setAttribute('aria-hidden', 'true');
    packageGrid.innerHTML = '';
  }
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
    insurer: {
      'Pick focus cities': 'Select high-impact city cohorts, attach baseline LOS, and set pilot KPIs.',
      'Align networks & packages': 'Standard catalogs, guardrails, and approvals rolled out via provider console.',
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
  if (!leadFields) return;
  leadTitle.textContent = config.lead.title;
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
          <span>${field.label}</span>
          <input type="${field.type}" name="${field.name}" placeholder="${field.placeholder || ''}" ${
        field.required ? 'required' : ''
      } />
        </label>
      `;
    })
    .join('');
  observeReveal([leadForm]);
  initLeadFieldListeners();
  if (stickyLead?.classList.contains('is-collapsed') && !('inert' in leadForm)) {
    updateLeadFormFocusables(false);
  }
};

const renderAI = (config) => {
  if (aiSubtitle) aiSubtitle.textContent = config.ai.subtitle;
  if (aiPrompts)
    aiPrompts.innerHTML = config.ai.prompts
      .map(
        (prompt) =>
          `<button type="button" class="ai-prompt" data-prompt="${prompt.replace(/"/g, '&quot;')}">${prompt}</button>`
      )
      .join('');
};

const updateWhatsAppLinks = (config) => {
  const encoded = encodeURIComponent(config.whatsappCTA);
  heroProofLinks.forEach((link) => {
    const base = 'https://wa.me/919940207670';
    link.href = `${base}?text=${encoded}`;
  });
};

const applyPersona = (persona, trackEvent = false) => {
  const config = personaConfig[persona];
  if (!config) return;
  currentPersona = persona;
  body.dataset.persona = persona;
  personaButtons.forEach((btn) => {
    const isActive = btn.dataset.persona === persona;
    btn.classList.toggle('is-active', isActive);
    btn.setAttribute('aria-pressed', String(isActive));
  });
  if (heroIntroEl) heroIntroEl.textContent = config.heroIntro;
  if (heroCTA) {
    heroCTA.textContent = config.heroCTA.label;
    heroCTA.href = config.heroCTA.href;
    heroCTA.setAttribute('data-track-label', `hero_primary_${persona}`);
  }
  renderWhy(config);
  renderQuote(config);
  renderProducts(config);
  renderPackages(config);
  renderHow(config);
  if (riskLine) riskLine.textContent = config.riskLine;
  renderPricing(config);
  renderLeadForm(config);
  renderAI(config);
  updateWhatsAppLinks(config);
  storage.setItem('healthflo_persona', persona);
  localStorage.setItem('healthflo_persona', persona);
  if (trackEvent) track('persona_selected', { role: persona });
  togglePersonaSections(persona);
};

const togglePersonaSections = (persona) => {
  $$('[data-persona-section]').forEach((section) => {
    const roles = section.dataset.personaSection.split(/[,\s]+/).filter(Boolean);
    const visible = roles.includes(persona);
    section.hidden = !visible;
    section.setAttribute('aria-hidden', String(!visible));
  });
};

const initLeadFieldListeners = () => {
  const fileInput = leadFields.querySelector('input[type="file"]');
  if (fileInput) {
    fileInput.addEventListener('change', (e) => {
      const file = e.target.files?.[0];
      if (file) {
        track('policy_uploaded', {
          role: currentPersona,
          size_kb: Math.round(file.size / 1024),
          parse_success: true
        });
      }
    });
  }
};

const createRevealObserver = () => {
  if (typeof window === 'undefined' || typeof window.IntersectionObserver !== 'function') {
    return null;
  }
  return new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );
};

const revealObserver = createRevealObserver();

const observeReveal = (nodes = []) => {
  const list = Array.isArray(nodes) ? nodes : Array.from(nodes || []);
  list.forEach((node) => {
    if (!node) return;
    if (revealObserver) {
      revealObserver.observe(node);
    } else {
      node.classList.add('revealed');
    }
  });
};

const initHeader = () => {
  const onScroll = () => {
    if (!siteHeader) return;
    const y = window.scrollY || 0;
    siteHeader.classList.toggle('is-scrolled', y > 16);
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
};

const initNav = () => {
  if (!nav || !navToggle) return;

  const mobileQuery = window.matchMedia('(max-width: 960px)');

  const setAriaHidden = () => {
    if (mobileQuery.matches) {
      const hidden = !nav.classList.contains('is-open');
      nav.setAttribute('aria-hidden', String(hidden));
    } else {
      nav.removeAttribute('aria-hidden');
    }
  };

  const closeNav = (focusToggle = false) => {
    nav.classList.remove('is-open');
    navToggle.classList.remove('is-active');
    navToggle.setAttribute('aria-expanded', 'false');
    body.classList.remove('nav-open');
    setAriaHidden();
    if (focusToggle) {
      navToggle.focus();
    }
  };

  const openNav = () => {
    nav.classList.add('is-open');
    navToggle.classList.add('is-active');
    navToggle.setAttribute('aria-expanded', 'true');
    body.classList.add('nav-open');
    setAriaHidden();
    const firstLink = nav.querySelector('a');
    if (firstLink) {
      firstLink.focus({ preventScroll: true });
    }
  };

  const toggleNav = () => {
    if (!mobileQuery.matches) return;
    if (nav.classList.contains('is-open')) {
      closeNav();
    } else {
      openNav();
    }
  };

  const handleKeydown = (event) => {
    if (event.key === 'Escape' && nav.classList.contains('is-open')) {
      closeNav(true);
    }
  };

  const handleDocumentClick = (event) => {
    if (!nav.classList.contains('is-open')) return;
    if (event.target.closest('.primary-nav')) return;
    if (event.target.closest('.nav-toggle')) return;
    closeNav();
  };

  const handleViewportChange = (event) => {
    if (!event.matches) {
      closeNav();
    } else {
      setAriaHidden();
    }
  };

  navToggle.addEventListener('click', toggleNav);
  document.addEventListener('keydown', handleKeydown);
  document.addEventListener('click', handleDocumentClick);

  $$('.primary-nav a').forEach((link) =>
    link.addEventListener('click', () => closeNav())
  );

  if (typeof mobileQuery.addEventListener === 'function') {
    mobileQuery.addEventListener('change', handleViewportChange);
  } else if (typeof mobileQuery.addListener === 'function') {
    mobileQuery.addListener(handleViewportChange);
  }

  setAriaHidden();
};

const initTheme = () => {
  const stored = storage.getItem('healthflo_theme');
  if (stored && ['white', 'dark', 'matte', 'cosmic'].includes(stored)) {
    body.dataset.theme = stored;
    themeButtons.forEach((btn) => {
      btn.classList.toggle('is-active', btn.dataset.themeTarget === stored);
      btn.setAttribute('aria-checked', String(btn.dataset.themeTarget === stored));
    });
  } else if (body.dataset.theme) {
    storage.setItem('healthflo_theme', body.dataset.theme);
  }
  themeButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const theme = btn.dataset.themeTarget;
      body.dataset.theme = theme;
      themeButtons.forEach((b) => {
        const active = b === btn;
        b.classList.toggle('is-active', active);
        b.setAttribute('aria-checked', String(active));
      });
      storage.setItem('healthflo_theme', theme);
      track('theme_changed', { theme });
    });
  });
};

const initPersonaSelector = () => {
  personaButtons.forEach((btn) =>
    btn.addEventListener('click', () => applyPersona(btn.dataset.persona, true))
  );
};

const initLeadForm = () => {
  if (!leadForm) return;
  leadForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(leadForm);
    const fields = {};
    formData.forEach((value, key) => {
      fields[key] = value instanceof File ? value.name : value;
    });
    track('lead_submitted', { role: currentPersona, fields });
    switch (currentPersona) {
      case 'hospital':
        track('hospital_demo_booked', fields);
        break;
      case 'insurer':
        track('insurer_pilot_requested', fields);
        break;
      case 'employer':
        track('employer_plan_requested', fields);
        break;
      default:
        track('patient_decode_requested', fields);
    }
    leadForm.reset();
    showToast('Thanks! A specialist will reach out shortly.');
  });
};

const showToast = (message) => {
  let toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = message;
  document.body.appendChild(toast);
  requestAnimationFrame(() => toast.classList.add('is-visible'));
  setTimeout(() => {
    toast.classList.remove('is-visible');
    setTimeout(() => toast.remove(), 400);
  }, 3200);
};

const initAI = () => {
  aiOpeners.forEach((btn) =>
    btn.addEventListener('click', () => {
      aiModal.classList.add('is-open');
      aiModal.setAttribute('aria-hidden', 'false');
    })
  );
  aiCloseEls.forEach((el) =>
    el.addEventListener('click', closeAIModal)
  );
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeAIModal();
  });
  aiPrompts?.addEventListener('click', (e) => {
    const btn = e.target.closest('.ai-prompt');
    if (!btn) return;
    const prompt = btn.dataset.prompt;
    track('ai_prompt_selected', { role: currentPersona, prompt });
    showToast(`Prompt sent: ${prompt}`);
  });
};

const closeAIModal = () => {
  if (!aiModal) return;
  aiModal.classList.remove('is-open');
  aiModal.setAttribute('aria-hidden', 'true');
};

const initTracking = () => {
  document.addEventListener('click', (event) => {
    const target = event.target.closest('[data-track]');
    if (!target) return;
    const label = target.getAttribute('data-track-label');
    const role = currentPersona;
    track(target.dataset.track + '_clicked', { role, cta_label: label });
  });
};

const initWhatsAppOptin = () => {
  if (!leadForm) return;
  const checkbox = leadForm.querySelector('input[name="whatsapp_optin"]');
  if (!checkbox) return;
  checkbox.addEventListener('change', (e) => {
    track('whatsapp_optin', { role: currentPersona, opted_in: e.target.checked });
  });
};

const initHeroAnimation = () => {
  if (!heroCanvas) return;

  const fallbackBackground = 'linear-gradient(135deg, rgba(37,99,235,0.25), transparent)';

  const ensureContext = () => {
    if (!heroCtx) {
      heroCtx = heroCanvas.getContext('2d');
    }
};

  const createParticles = (width, height) => {
    const safeWidth = Math.max(width, 1);
    const safeHeight = Math.max(height, 1);
    const count = safeWidth < 640 ? 50 : 80;
    heroParticles = Array.from({ length: count }, () => ({
      x: Math.random() * safeWidth,
      y: Math.random() * safeHeight,
      r: Math.random() * 2 + 0.6,
      speed: Math.random() * 0.35 + 0.15,
      angle: Math.random() * Math.PI * 2,
      baseAlpha: Math.random() * 0.35 + 0.2,
      pulse: Math.random() * Math.PI * 2,
      drift: Math.random() * 0.02 + 0.005
    }));
    heroTick = 0;
  };

  const resizeCanvas = () => {
    if (!heroCtx) return;
    const dpr = window.devicePixelRatio || 1;
    const { clientWidth, clientHeight } = heroCanvas;
    heroCanvas.width = Math.max(clientWidth * dpr, 1);
    heroCanvas.height = Math.max(clientHeight * dpr, 1);
    heroCtx.setTransform(dpr, 0, 0, dpr, 0, 0);
    createParticles(clientWidth, clientHeight);
  };

  const draw = () => {
    if (!heroCtx) return;
    const { clientWidth: width, clientHeight: height } = heroCanvas;
    heroCtx.clearRect(0, 0, width, height);
    heroTick += 1;
    const gradient = heroCtx.createRadialGradient(
      width * 0.2 + heroPointer.x * 0.05,
      height * 0.3 + heroPointer.y * 0.05,
      20,
      width * 0.5,
      height * 0.6,
      Math.max(width, height)
    );
    gradient.addColorStop(0, 'rgba(37,99,235,0.35)');
    gradient.addColorStop(1, 'rgba(37,99,235,0)');
    heroCtx.fillStyle = gradient;
    heroCtx.fillRect(0, 0, width, height);

    heroCtx.strokeStyle = 'rgba(37, 99, 235, 0.2)';
    heroCtx.lineWidth = 1;
    heroCtx.beginPath();
    heroCtx.ellipse(width * 0.6, height * 0.5, width * 0.35, height * 0.18, 0, 0, Math.PI * 2);
    heroCtx.stroke();

    heroCtx.save();
    heroCtx.globalCompositeOperation = 'lighter';

    heroParticles.forEach((p, index) => {
      p.x += Math.cos(p.angle) * p.speed + heroPointer.x * 0.0005;
      p.y += Math.sin(p.angle) * p.speed + heroPointer.y * 0.0005;
      p.angle += 0.0025 + p.drift * 0.5;
      if (p.x > width) p.x = 0;
      if (p.x < 0) p.x = width;
      if (p.y > height) p.y = 0;
      if (p.y < 0) p.y = height;

      const pulse = p.baseAlpha + 0.35 * Math.sin(heroTick * (0.012 + p.drift) + p.pulse);
      const alpha = Math.max(0.08, Math.min(0.85, pulse));
      const radius = p.r * (0.7 + 0.35 * Math.sin(heroTick * 0.01 + p.pulse));

      heroCtx.fillStyle = `rgba(240, 248, 255, ${alpha})`;
      heroCtx.beginPath();
      heroCtx.arc(p.x, p.y, Math.max(radius, 0.4), 0, Math.PI * 2);
      heroCtx.fill();

      for (let j = index + 1; j < heroParticles.length; j += 1) {
        const q = heroParticles[j];
        const dx = p.x - q.x;
        const dy = p.y - q.y;
        const dist = Math.hypot(dx, dy);
        if (dist > 160) continue;
        const lineAlpha = Math.max(0, 1 - dist / 160) * 0.35;
        if (lineAlpha <= 0) continue;
        heroCtx.strokeStyle = `rgba(103, 232, 249, ${lineAlpha})`;
        heroCtx.lineWidth = Math.max(0.3, 1 - dist / 220);
        heroCtx.lineCap = 'round';
        heroCtx.beginPath();
        heroCtx.moveTo(p.x, p.y);
        heroCtx.lineTo(q.x, q.y);
        heroCtx.stroke();
      }
    });

    heroCtx.restore();

    heroAnimationId = requestAnimationFrame(draw);
  };

  const ensureAnimationState = () => {
    ensureContext();
    if (!heroParticles.length) {
      resizeCanvas();
    }
  };

  const stopAnimation = () => {
    if (heroAnimationId !== null) {
      cancelAnimationFrame(heroAnimationId);
      heroAnimationId = null;
    }
  };

  const startAnimation = () => {
    if (heroAnimationId !== null || prefersReducedMotion()) return;
    ensureAnimationState();
    heroCanvas.style.background = '';
    heroAnimationId = requestAnimationFrame(draw);
  };

  const handleVisibilityChange = () => {
    if (document.hidden) {
      stopAnimation();
    } else {
      startAnimation();
    }
  };

  if (prefersReducedMotion()) {
    heroCanvas.style.background = fallbackBackground;
  } else {
    startAnimation();
  }

  window.addEventListener('resize', () => {
    if (prefersReducedMotion()) return;
    ensureContext();
    resizeCanvas();
  });
  window.addEventListener('pointermove', (event) => {
    const rect = heroCanvas.getBoundingClientRect();
    heroPointer = {
      x: event.clientX - rect.left - rect.width / 2,
      y: event.clientY - rect.top - rect.height / 2
    };
  });
  document.addEventListener('visibilitychange', handleVisibilityChange);
  window.addEventListener('pagehide', stopAnimation);
  window.addEventListener('pageshow', () => startAnimation());

  if (motionMediaQuery) {
    const handleMotionPreference = (event) => {
      if (event.matches) {
        stopAnimation();
        heroCanvas.style.background = fallbackBackground;
      } else {
        heroParticles = [];
        startAnimation();
      }
    };
    if (typeof motionMediaQuery.addEventListener === 'function') {
      motionMediaQuery.addEventListener('change', handleMotionPreference);
    } else if (typeof motionMediaQuery.addListener === 'function') {
      motionMediaQuery.addListener(handleMotionPreference);
    }
  }
};

const initPersonaFromSource = () => {
  const params = new URLSearchParams(window.location.search);
  const utmRaw = params.get('utm_persona');
  const utmPersona = utmRaw ? utmRaw.toLowerCase() : null;
  const stored = storage.getItem('healthflo_persona');
  const fallback = stored && personaConfig[stored] ? stored : 'patient';
  const persona = utmPersona && personaConfig[utmPersona]?.label ? utmPersona : fallback;
  applyPersona(persona);
};

const initStickyToggle = () => {
  if (!stickyLead || !leadForm) return;
  const toggle = stickyLead.querySelector('.sticky-toggle');
  if (!toggle) return;

  const toggleLabel = toggle.querySelector('[data-toggle-label]');
  const toggleIcon = toggle.querySelector('[data-toggle-icon]');
  const collapsedLabel = toggle.dataset.collapsedLabel || 'Start a conversation';
  const expandedLabel = toggle.dataset.expandedLabel || 'Hide conversation';
  const collapsedIcon = toggle.dataset.collapsedIcon || '+';
  const expandedIcon = toggle.dataset.expandedIcon || '–';
  const closeButton = leadForm.querySelector('[data-lead-close]');

  const updateToggleVisuals = (expanded) => {
    if (toggleLabel) toggleLabel.textContent = expanded ? expandedLabel : collapsedLabel;
    if (toggleIcon) toggleIcon.textContent = expanded ? expandedIcon : collapsedIcon;
    toggle.setAttribute('aria-label', expanded ? expandedLabel : collapsedLabel);
  };

  const focusFirstField = () => {
    const firstField = leadForm.querySelector('input, select, textarea');
    if (!firstField) return;
    setTimeout(() => firstField.focus({ preventScroll: true }), 220);
  };

  const setExpanded = (expanded, { focusField = false } = {}) => {
    toggle.setAttribute('aria-expanded', String(expanded));
    stickyLead.classList.toggle('is-collapsed', !expanded);
    leadForm.setAttribute('aria-hidden', String(!expanded));
    leadForm.toggleAttribute('inert', !expanded);
    if ('inert' in leadForm) {
      leadForm.inert = !expanded;
    } else {
      updateLeadFormFocusables(expanded);
    }
    updateToggleVisuals(expanded);
    if (expanded && focusField) {
      focusFirstField();
    }
  };

  const isExpanded = () => toggle.getAttribute('aria-expanded') === 'true';

  const openLead = ({ focusField = false } = {}) => {
    if (!isExpanded()) {
      setExpanded(true, { focusField });
    } else if (focusField) {
      focusFirstField();
    }
  };

  const closeLead = () => {
    if (!isExpanded()) return;
    setExpanded(false);
  };

  const startExpanded = window.location.hash === '#lead';
  setExpanded(startExpanded);

  toggle.addEventListener('click', () => {
    if (isExpanded()) {
      closeLead();
    } else {
      openLead({ focusField: true });
    }
  });

  const leadLinks = $$('a[href="#lead"]');
  leadLinks.forEach((link) => {
    link.addEventListener('click', () => openLead({ focusField: true }));
  });

  const shouldIgnorePointer = (target) => {
    if (typeof Element === 'undefined') return false;
    if (!(target instanceof Element)) return false;
    if (stickyLead.contains(target)) return true;
    if (target.closest('a[href="#lead"]')) return true;
    return false;
  };

  document.addEventListener('pointerdown', (event) => {
    if (!isExpanded()) return;
    if (shouldIgnorePointer(event.target)) return;
    closeLead();
  });

  if (closeButton) {
    closeButton.addEventListener('click', () => {
      closeLead();
      toggle.focus();
    });
  }

  window.addEventListener('hashchange', () => {
    if (window.location.hash === '#lead') {
      openLead();
    } else if (isExpanded()) {
      closeLead();
    }
  });

  leadForm.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && isExpanded()) {
      event.preventDefault();
      closeLead();
      toggle.focus();
    }
  });
};

const initInstallPrompt = () => {
  const installButtons = $$('[data-install-app]');
  const installHint = $('[data-install-hint]');
  if (!installButtons.length && !installHint) return;

  const hideInstallUI = () => {
    installButtons.forEach((button) => {
      button.hidden = true;
      button.setAttribute('aria-hidden', 'true');
    });
    if (installHint) {
      installHint.hidden = true;
      installHint.setAttribute('aria-hidden', 'true');
    }
  };

  const showInstallUI = () => {
    installButtons.forEach((button) => {
      button.hidden = false;
      button.removeAttribute('aria-hidden');
    });
    if (installHint) {
      installHint.hidden = false;
      installHint.removeAttribute('aria-hidden');
    }
  };

  hideInstallUI();

  installPromptListeners.push(showInstallUI);

  if (deferredInstallPrompt) {
    showInstallUI();
  }

  installButtons.forEach((button) => {
    button.addEventListener('click', async () => {
      if (!deferredInstallPrompt) {
        track('pwa_install_clicked', { available: false });
        return;
      }
      track('pwa_install_prompted');
      try {
        deferredInstallPrompt.prompt();
        const choice = await deferredInstallPrompt.userChoice;
        track('pwa_install_response', { outcome: choice?.outcome || 'unknown' });
      } catch (error) {
        track('pwa_install_error', { message: error?.message || String(error) });
      } finally {
        deferredInstallPrompt = null;
        hideInstallUI();
      }
    });
  });

  window.addEventListener('appinstalled', () => {
    track('pwa_app_installed');
    hideInstallUI();
  });

  if (window.matchMedia && window.matchMedia('(display-mode: standalone)').matches) {
    hideInstallUI();
  }
};

const initServiceWorker = () => {
  if (!('serviceWorker' in navigator)) return;
  const register = () => {
    navigator.serviceWorker
      .register('sw.js')
      .then((registration) =>
        track('service_worker_registered', { scope: registration.scope || 'default' })
      )
      .catch((error) =>
        track('service_worker_registration_failed', { message: error?.message || String(error) })
      );
  };
  if (document.readyState === 'complete') {
    register();
  } else {
    window.addEventListener('load', register, { once: true });
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
  initInstallPrompt();
  initServiceWorker();
  initPersonaFromSource();
  initWhatsAppOptin();
  observeReveal($$('.metric-panel, .guarantees, .visibility-card'));
};

document.addEventListener('DOMContentLoaded', init);
