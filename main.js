const header = document.querySelector('.site-header');
const nav = document.querySelector('.primary-nav');
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.primary-nav a');

function updateHeaderState() {
  if (!header) return;
  if (window.scrollY > 20) {
    header.classList.add('is-scrolled');
  } else {
    header.classList.remove('is-scrolled');
  }
}

function closeMobileNav() {
  nav?.classList.remove('is-open');
  navToggle?.classList.remove('is-open');
  navToggle?.setAttribute('aria-expanded', 'false');
}

if (nav && navToggle) {
  navToggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('is-open');
    navToggle.classList.toggle('is-open', isOpen);
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });
}

navLinks.forEach((link) =>
  link.addEventListener('click', () => {
    closeMobileNav();
  })
);

if (header) {
  window.addEventListener('scroll', updateHeaderState, { passive: true });
  updateHeaderState();
}

// Accessible focus trap for the mobile navigation
if (navToggle) {
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeMobileNav();
    }
  });
}

// Smooth keyboard focus outline helper
const focusableElements = document.querySelectorAll(
  'a, button, input, textarea, select'
);

focusableElements.forEach((element) => {
  element.addEventListener('focus', () => {
    element.classList.add('is-focused');
  });
  element.addEventListener('blur', () => {
    element.classList.remove('is-focused');
  });
});

const $=(s,r=document)=>r.querySelector(s), $$=(s,r=document)=>Array.from(r.querySelectorAll(s));
const root=document.documentElement;

/* 1) Soft background parallax + slow conic drift */
(function(){
  const a=$('.hf-bg-aurora'); let rot=0;
  if(a && !matchMedia('(prefers-reduced-motion: reduce)').matches){
    requestAnimationFrame(function loop(){ rot=(rot+0.06)%360; a.style.setProperty('--rot',rot+'deg'); requestAnimationFrame(loop); });
    addEventListener('pointermove',e=>{
      a.style.setProperty('--ax',(e.clientX/innerWidth*100)+'%');
      a.style.setProperty('--ay',(e.clientY/innerHeight*100)+'%');
    }, {passive:true});
  }
})();

/* 2) Global ripple */
document.addEventListener('pointerdown',e=>{
  const el=e.target.closest('.hf-ripple, .btn, .mini-card, .feature-card, .step-card, .primary-nav a, .btn-primary, .btn-secondary');
  if(!el) return;
  el.classList.add('hf-ripple');
  const r=el.getBoundingClientRect(), size=Math.max(r.width,r.height)*1.2;
  const span=document.createElement('span'); span.className='r';
  span.style.width=span.style.height=size+'px';
  span.style.left=((e.clientX??r.left+r.width/2)-r.left-size/2)+'px';
  span.style.top=((e.clientY??r.top+r.height/2)-r.top-size/2)+'px';
  el.appendChild(span); span.addEventListener('animationend',()=>span.remove());
}, {passive:true});

/* 3) Sounds */
const SFX={ header:$('#hf-sfx-header'), click:$('#hf-sfx-click'), close:$('#hf-sfx-close') };
const play=t=>{ try{ t.currentTime=0; t.play().catch(()=>{});}catch{} };

/* 4) Quick Settings: toggle, drag, tiles navigate, brightness demo */
(function(){
  const qs=$('[data-hf-qs]'); if(!qs) return;
  const panel=$('[data-hf-qspanel]'), scrim=$('[data-hf-scrim]'), tSm=$('[data-hf-qstime]');
  let exp=0, dragging=false, startY=0, startExp=0;

  function setExp(v, snap=false){
    exp=Math.max(0,Math.min(1,v));
    root.style.setProperty('--hf-qs-exp',exp);
    if(snap){ qs.dataset.open=exp>0.01?'true':'false'; scrim.hidden=!(exp>0.01); }
    else { if(exp>0.01){scrim.hidden=false; qs.dataset.open='true';} if(exp<=0){scrim.hidden=true; qs.dataset.open='false';} }
  }
  const open=()=>{ setExp(1,true); if(SFX.header) play(SFX.header); };
  const close=()=> setExp(0,true);

  $('[data-hf-qstoggle]')?.addEventListener('click',()=> qs.dataset.open==='true'?close():open());
  scrim?.addEventListener('click',close);

  function pd(e){ dragging=true; startY=('touches'in e?e.touches[0].clientY:e.clientY); startExp=exp; e.preventDefault(); }
  function pm(e){
    if(!dragging) return;
    const y=('touches'in e?e.touches[0].clientY:e.clientY);
    const cs=getComputedStyle(root);
    const rng=(parseInt(cs.getPropertyValue('--hf-qs-max'))-parseInt(cs.getPropertyValue('--hf-qs-min'))) || 496;
    setExp(startExp+(y-startY)/rng);
  }
  function pu(){ if(!dragging) return; dragging=false; exp>=.45?open():close(); }
  $('[data-hf-qsdrag]')?.addEventListener('mousedown',pd);
  addEventListener('mousemove',pm,{passive:true});
  addEventListener('mouseup',pu);
  $('[data-hf-qsdrag]')?.addEventListener('touchstart',pd,{passive:false});
  addEventListener('touchmove',pm,{passive:false});
  addEventListener('touchend',pu);

  // tiles navigate + auto-close + sound
  $$('.hf-qs-tile').forEach(t=>{
    t.addEventListener('click',()=>{
      t.classList.toggle('is-on'); if(SFX.click) play(SFX.click);
      const target=t.getAttribute('data-target');
      if(target) document.querySelector(target)?.scrollIntoView({behavior:'smooth',block:'start'});
      close();
    });
  });

  // brightness demo
  $('[data-hf-brightness]')?.addEventListener('input',e=>{
    const v=+e.target.value; panel.style.filter=`brightness(${0.4+v/100})`;
  });

  // live clock
  function tick(){ const d=new Date(); const hh=String(d.getHours()).padStart(2,'0'); const mm=String(d.getMinutes()).padStart(2,'0'); tSm.textContent=`${hh}:${mm}`; }
  tick(); setInterval(tick,20000);

  setExp(0,true);
})();

/* 5) Nav smooth scroll + keep your header behavior */
(function(){
  $$('.primary-nav a').forEach(a=>{
    a.addEventListener('click',e=>{
      const href=a.getAttribute('href')||'';
      if(href.startsWith('#')){ e.preventDefault(); if(SFX.click) play(SFX.click);
        document.querySelector(href)?.scrollIntoView({behavior:'smooth'});
      }
    });
  });
})();

/* 6) “Open as App/Widget” behavior — makes your cards open in the sheet */
(function(){
  const sheet=$('#hfAppSheet'); if(!sheet) return;
  const scrim=sheet.querySelector('[data-hf-app-close]'), closeBtn=sheet.querySelector('.hf-app-close');
  const iconBox=$('#hfAppIcon'), titleBox=$('#hfAppTitle'), body=$('#hfAppBody');

  // Attach to common card types automatically
  const selectors=['.feature-card','.mini-card','.step-card','.atlas-card','.knowledge-card','.assurance-cards article'];
  $$(selectors.join(',')).forEach(card=>{
    card.style.cursor='pointer';
    card.addEventListener('click',()=>{
      if(SFX.click) play(SFX.click);
      // title inference
      const t = card.querySelector('h3, h2')?.textContent?.trim() || 'Widget';
      titleBox.textContent=t;
      iconBox.innerHTML=`<span style="display:inline-block;width:18px;height:18px;border-radius:5px;background:linear-gradient(135deg,var(--hf-p1),var(--hf-p4));"></span>`;
      sheet.setAttribute('open','');
      body.innerHTML=`
        <div style="display:grid;gap:14px">
          <p style="margin:0">Loaded <strong>${t}</strong>. Use tabs to switch sections.</p>
          <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:12px">
            <div class="hf-app-widget" style="background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.14);border-radius:14px;padding:12px">
              <strong>Overview</strong><div style="height:88px;border-radius:10px;background:linear-gradient(135deg, rgba(255,255,255,.18), transparent)"></div>
            </div>
            <div class="hf-app-widget" style="background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.14);border-radius:14px;padding:12px">
              <strong>Activity</strong><div style="height:88px;border-radius:10px;background:linear-gradient(135deg, rgba(255,255,255,.18), transparent)"></div>
            </div>
          </div>
        </div>`;
      // select first tab content immediately
      $('.hf-app-tab[aria-selected="true"]')?.click();
    });
  });

  // Tabs
  $$('.hf-app-tab').forEach(t=> t.addEventListener('click',()=>{
    $$('.hf-app-tab').forEach(x=>x.setAttribute('aria-selected','false'));
    t.setAttribute('aria-selected','true');
    const id=t.dataset.tab;
    body.innerHTML = id==='overview'
      ? `<p style="margin-top:0">Overview metrics and summary for this widget.</p>`
      : id==='activity'
      ? `<p style="margin-top:0">Recent activity, interactions, and usage.</p>`
      : `<p style="margin-top:0">Per-widget settings and preferences.</p>`;
  }));

  // Closing
  function close(){ sheet.removeAttribute('open'); if(SFX.close) play(SFX.close); }
  scrim?.addEventListener('click',close); closeBtn?.addEventListener('click',close);
  document.addEventListener('keydown',e=>{ if(e.key==='Escape' && sheet.hasAttribute('open')) close(); });
})();

/* 7) Toast every 10s (rotates helpful tips) */
(function(){
  const box=$('#hf-toasts'); if(!box) return;
  const msgs=[
    'HealthFlo tip: drag down for Quick Settings.',
    'Pre-auth velocity trending up.',
    '3 new appeal opportunities detected.',
    'Reminder: Validate payer rules.'
  ];
  function push(msg){ const el=document.createElement('div'); el.className='hf-toast'; el.textContent=msg; box.appendChild(el);
    setTimeout(()=>el.classList.add('hide'),2600); setTimeout(()=>el.remove(),2840); }
  setInterval(()=> push(msgs[Math.floor(Math.random()*msgs.length)]), 10000);
})();

/* 8) Replace visible “VOKA” → “HealthFlo” safely (text nodes only) + head */
(function(){
  document.title = document.title.replace(/VOKA/gi,'HealthFlo');
  const md=document.querySelector('meta[name="description"]');
  if(md && md.content) md.content = md.content.replace(/VOKA/gi,'HealthFlo');

  const walker=document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null);
  let n; const rx=/VOKA/gi;
  while(n=walker.nextNode()){ if(rx.test(n.nodeValue)) n.nodeValue = n.nodeValue.replace(rx,'HealthFlo'); }
})();
