/* =========================================================
   DATA
========================================================= */
const services = [
  {n:'01',t:'Projection de poudre métallique',d:'Rechargement de surface par projection thermique pour restaurer dimensions et résistance des pièces usées.',ic:'flame'},
  {n:'02',t:'Métallisation',d:'Dépôt métallique protecteur contre la corrosion et l\'usure, adapté aux environnements industriels sévères.',ic:'shield'},
  {n:'03',t:'Réparation de rails de tramway',d:'Rechargement et reprofilage de rails urbains pour prolonger leur durée de vie en toute sécurité.',ic:'rail'},
  {n:'04',t:'Réparation de rails ferroviaires',d:'Interventions sur voies ferrées : meulage, rechargement et contrôle dimensionnel précis.',ic:'rail'},
  {n:'05',t:'Rechargement de pièces industrielles',d:'Restauration de pièces mécaniques de grande dimension par apport de matière contrôlé.',ic:'layers'},
  {n:'06',t:'Fonte métallique',d:'Coulée et réparation par fonte pour les pièces massives nécessitant une reconstruction complète.',ic:'pour'},
  {n:'07',t:'Soudage industriel',d:'Soudage haute performance sur aciers et alliages, réalisé par des soudeurs qualifiés.',ic:'weld'},
  {n:'08',t:'Usinage de précision',d:'Reprise dimensionnelle après réparation pour un ajustement parfait aux tolérances d\'origine.',ic:'gear'},
  {n:'09',t:'Maintenance industrielle',d:'Programmes de maintenance préventive et corrective pour vos équipements critiques.',ic:'tool'},
  {n:'10',t:'Fabrication de pièces spécifiques',d:'Conception et fabrication sur mesure de pièces métalliques selon vos plans techniques.',ic:'blueprint'},
];

const icons = {
  flame:'<path d="M12 2c1 3-2 4-2 7a4 4 0 008 0c2 2 2 5 0 8a7 7 0 01-11-9c1-2 3-3 5-6z" stroke="currentColor" stroke-width="1.7" fill="none"/>',
  shield:'<path d="M12 3l7 3v6c0 5-3 8-7 9-4-1-7-4-7-9V6l7-3z" stroke="currentColor" stroke-width="1.7" fill="none"/>',
  rail:'<path d="M3 8h18M3 16h18M7 8v8M12 8v8M17 8v8" stroke="currentColor" stroke-width="1.7"/>',
  layers:'<path d="M12 3l9 5-9 5-9-5 9-5zM3 14l9 5 9-5" stroke="currentColor" stroke-width="1.7" fill="none" stroke-linejoin="round"/>',
  pour:'<path d="M5 4h6l3 8a4 4 0 11-6 4M11 12h8" stroke="currentColor" stroke-width="1.7" fill="none" stroke-linecap="round"/>',
  weld:'<path d="M4 15l5-5 3 3-5 5-3-3zM12 7l3-3 5 5-3 3M9 13l2 2" stroke="currentColor" stroke-width="1.7" fill="none" stroke-linecap="round" stroke-linejoin="round"/>',
  gear:'<circle cx="12" cy="12" r="3" stroke="currentColor" stroke-width="1.7"/><path d="M12 2v3M12 19v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M2 12h3M19 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/>',
  tool:'<path d="M14 6a4 4 0 015 5l-7 7-2-2m-3-3L4 16l2 2 2.5-2.5M9 9L6 6l1.5-3L11 4l1 3" stroke="currentColor" stroke-width="1.7" fill="none" stroke-linecap="round" stroke-linejoin="round"/>',
  blueprint:'<rect x="3" y="4" width="18" height="16" rx="1" stroke="currentColor" stroke-width="1.7"/><path d="M7 9h6M7 13h10M7 17h6" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/>'
};

// Effet d'inclinaison 3D léger au survol des cartes (souris)
function attachTilt(selector){
  document.querySelectorAll(selector).forEach(card=>{
    card.addEventListener('mousemove', e=>{
      const r = card.getBoundingClientRect();
      const x = (e.clientX - r.left)/r.width - .5;
      const y = (e.clientY - r.top)/r.height - .5;
      card.style.transform = `translateY(-8px) rotateX(${(-y*6).toFixed(2)}deg) rotateY(${(x*6).toFixed(2)}deg)`;
    });
    card.addEventListener('mouseleave', ()=>{ card.style.transform=''; });
  });
}

document.getElementById('servicesGrid').innerHTML = services.map(s=>`
  <div class="service-card reveal">
    <span class="num">${s.n}</span>
    <div class="ic"><svg width="26" height="26" viewBox="0 0 24 24">${icons[s.ic]}</svg></div>
    <h3>${s.t}</h3>
    <p>${s.d}</p>
  </div>`).join('');
attachTilt('#servicesGrid .service-card');

const process = [
  {t:'Inspection',d:'Visite technique directement sur votre site grâce à notre unité mobile, et évaluation initiale des dommages.'},
  {t:'Analyse de la pièce',d:'Diagnostic métallurgique précis pour déterminer la cause de l\'usure et la technique adaptée.'},
  {t:'Préparation',d:'Nettoyage, décapage et préparation de surface pour garantir l\'adhérence du dépôt.'},
  {t:'Projection de poudre métallique',d:'Application du revêtement par projection thermique selon les paramètres définis.'},
  {t:'Fusion / Rechargement',d:'Rechargement par soudage ou fonte pour restaurer la géométrie d\'origine.'},
  {t:'Contrôle qualité',d:'Vérifications dimensionnelles et métallurgiques rigoureuses avant validation.'},
  {t:'Remise en service',d:'Remontage et remise en service de la pièce directement sur son équipement, sans transport ni temps d\'immobilisation supplémentaire.'},
];
document.getElementById('timeline').insertAdjacentHTML('beforeend', process.map((p,i)=>`
  <div class="timeline-item reveal">
    <div class="marker">${i+1}</div>
    <h3>${p.t}</h3>
    <p>${p.d}</p>
  </div>`).join(''));

const why = [
  {t:'Expertise reconnue',ic:'shield'},
  {t:'Personnel qualifié',ic:'gear'},
  {t:'Machines de dernière génération',ic:'tool'},
  {t:'Contrôle qualité',ic:'flame'},
  {t:'Respect des délais',ic:'rail'},
  {t:'Solutions sur mesure',ic:'blueprint'},
  {t:'Intervention rapide',ic:'weld'},
  {t:'Travaux garantis',ic:'layers'},
];
document.getElementById('whyGrid').innerHTML = why.map(w=>`
  <div class="why-card">
    <div class="ic"><svg width="30" height="30" viewBox="0 0 24 24">${icons[w.ic]}</svg></div>
    <h3>${w.t}</h3>
  </div>`).join('');

const galleryData = [
  {cat:'atelier',label:'Atelier de réparation',big:true,grad:'linear-gradient(135deg,#0B2E4F,#111827)'},
  {cat:'projection',label:'Projection métallique',grad:'linear-gradient(135deg,#F97316,#6B7280)'},
  {cat:'rails',label:'Rails ferroviaires',grad:'linear-gradient(135deg,#111827,#0B2E4F)'},
  {cat:'machines',label:'Machines industrielles',grad:'linear-gradient(135deg,#6B7280,#111827)'},
  {cat:'tramway',label:'Réparation de rails de tramway',grad:'linear-gradient(135deg,#0B2E4F,#F97316)'},
  {cat:'avant',label:'Avant réparation',grad:'linear-gradient(135deg,#3a3f47,#111827)'},
  {cat:'apres',label:'Après réparation',grad:'linear-gradient(135deg,#0B2E4F,#1a5c8f)'},
  {cat:'pieces',label:'Pièces industrielles',grad:'linear-gradient(135deg,#111827,#6B7280)'},
];
const filters = ['tous','atelier','machines','projection','rails','tramway','avant','apres'];
document.getElementById('galleryFilters').innerHTML = filters.map((f,i)=>`<button class="filter-btn ${i===0?'active':''}" data-filter="${f}">${f.charAt(0).toUpperCase()+f.slice(1)}</button>`).join('');
function renderGallery(filter){
  const items = filter==='tous' ? galleryData : galleryData.filter(g=>g.cat===filter || (filter==='rails' && g.cat==='tramway'));
  document.getElementById('galleryGrid').innerHTML = items.map(g=>`
    <div class="gallery-item ${g.big?'big':''}" data-caption="${g.label}" data-grad="${g.grad}">
      <div class="fill" style="background:${g.grad}"></div>
      <span class="zoom-ic"><svg width="16" height="16" viewBox="0 0 24 24" fill="none"><circle cx="11" cy="11" r="7" stroke="#fff" stroke-width="1.8"/><path d="M21 21l-4-4" stroke="#fff" stroke-width="1.8" stroke-linecap="round"/></svg></span>
      <div class="overlay"><span>${g.label}</span></div>
    </div>`).join('');
  attachLightbox();
}
renderGallery('tous');
document.getElementById('galleryFilters').addEventListener('click', e=>{
  const btn = e.target.closest('.filter-btn'); if(!btn) return;
  document.querySelectorAll('.filter-btn').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  renderGallery(btn.dataset.filter);
});
function attachLightbox(){
  document.querySelectorAll('.gallery-item').forEach(item=>{
    item.addEventListener('click',()=>{
      document.getElementById('lightboxFrame').style.background = item.dataset.grad;
      document.getElementById('lightboxCaption').textContent = item.dataset.caption;
      document.getElementById('lightbox').classList.add('open');
    });
  });
}
document.getElementById('lightboxClose').addEventListener('click',()=>document.getElementById('lightbox').classList.remove('open'));
document.getElementById('lightbox').addEventListener('click',e=>{ if(e.target.id==='lightbox') e.currentTarget.classList.remove('open'); });

const projects = [
  {tag:'Rechargement',t:'Arbre de transmission — sidérurgie',d:'Restauration d\'un arbre de 3m après usure sévère par rechargement contrôlé.',tech:'Projection thermique',result:'Remise en service en 5 jours',grad:'linear-gradient(135deg,#0B2E4F,#111827)'},
  {tag:'Rails tramway',t:'Aiguillage urbain',d:'Reprofilage complet d\'un aiguillage de tramway soumis à un trafic intense.',tech:'Soudage + meulage',result:'Durée de vie prolongée de 10 ans',grad:'linear-gradient(135deg,#F97316,#6B7280)'},
  {tag:'Métallisation',t:'Vanne industrielle haute pression',d:'Protection anticorrosion d\'une vanne exposée à un environnement chimique agressif.',tech:'Métallisation',result:'Résistance accrue à la corrosion',grad:'linear-gradient(135deg,#111827,#0B2E4F)'},
  {tag:'Usinage',t:'Rouleau de laminoir',d:'Reprise dimensionnelle précise après rechargement d\'un rouleau de laminoir.',tech:'Usinage de précision',result:'Tolérances d\'origine respectées',grad:'linear-gradient(135deg,#6B7280,#111827)'},
  {tag:'Rails ferroviaires',t:'Voie principale — jonction',d:'Réparation d\'une jonction de rails présentant une fissuration avancée.',tech:'Rechargement + contrôle qualité',result:'Sécurité ferroviaire restaurée',grad:'linear-gradient(135deg,#0B2E4F,#1a5c8f)'},
  {tag:'Fonte',t:'Carter de machine lourde',d:'Reconstruction par fonte d\'un carter endommagé sur presse industrielle.',tech:'Fonte métallique',result:'Pièce remise à neuf',grad:'linear-gradient(135deg,#111827,#6B7280)'},
];
document.getElementById('projectsGrid').innerHTML = projects.map(p=>`
  <div class="project-card reveal">
    <div class="project-media"><div class="fill" style="background:${p.grad}"></div><span class="project-tag">${p.tag}</span></div>
    <div class="project-body">
      <h3>${p.t}</h3>
      <p>${p.d}</p>
      <div class="project-meta"><span>${p.tech}</span><span>${p.result}</span></div>
    </div>
  </div>`).join('');

const testimonials = [
  {q:'Une intervention rapide et un travail d\'une précision remarquable sur nos rails de tramway. Le trafic a pu reprendre sans compromis sur la sécurité.',n:'Marc Delaunay',c:'Responsable maintenance, Réseau Urbain',i:'MD'},
  {q:'Le rechargement de nos arbres de transmission a dépassé nos attentes. Une équipe technique très professionnelle et à l\'écoute.',n:'Sophie Meunier',c:'Directrice technique, Aciérie du Nord',i:'SM'},
  {q:'Grâce à leur expertise en métallisation, nos équipements résistent enfin à la corrosion. Un partenaire fiable sur le long terme.',n:'Karim Belhadj',c:'Responsable production, Chimie Industrielle',i:'KB'},
  {q:'Intervention sur site en urgence gérée en moins de 24h. Le contrôle qualité rassure sur la durabilité de la réparation.',n:'Julien Roche',c:'Chef d\'exploitation, Voies Ferrées Régionales',i:'JR'},
];
document.getElementById('testiSlides').innerHTML = testimonials.map(t=>`
  <div class="testi-slide">
    <div class="stars">★★★★★</div>
    <p>« ${t.q} »</p>
    <div class="testi-author">
      <div class="testi-avatar">${t.i}</div>
      <div style="text-align:left;"><b>${t.n}</b><span>${t.c}</span></div>
    </div>
  </div>`).join('');
document.getElementById('testiNav').innerHTML = testimonials.map((_,i)=>`<span class="testi-dot ${i===0?'active':''}" data-i="${i}"></span>`).join('');
let testiIndex = 0;
function goTesti(i){
  testiIndex = (i+testimonials.length)%testimonials.length;
  document.getElementById('testiSlides').style.transform = `translateX(-${testiIndex*100}%)`;
  document.querySelectorAll('.testi-dot').forEach((d,idx)=>d.classList.toggle('active', idx===testiIndex));
}
document.getElementById('testiPrev').addEventListener('click',()=>goTesti(testiIndex-1));
document.getElementById('testiNext').addEventListener('click',()=>goTesti(testiIndex+1));
document.getElementById('testiNav').addEventListener('click',e=>{ const d=e.target.closest('.testi-dot'); if(d) goTesti(+d.dataset.i); });
let testiAuto = setInterval(()=>goTesti(testiIndex+1), 6000);
document.querySelector('.testi-wrap').addEventListener('mouseenter',()=>clearInterval(testiAuto));
document.querySelector('.testi-wrap').addEventListener('mouseleave',()=>{testiAuto=setInterval(()=>goTesti(testiIndex+1),6000);});

const faqs = [
  {q:'Quels types de pièces réparez-vous ?',a:'Nous intervenons sur tout type de pièces métalliques industrielles de grande dimension : arbres, rouleaux, carters, vannes, engrenages, ainsi que sur les rails ferroviaires et de tramway.'},
  {q:'Intervenez-vous sur les rails de tramway ?',a:'Oui, nous réalisons le rechargement, le reprofilage et la réparation de rails de tramway et de voies ferrées, y compris les aiguillages soumis à un trafic intense.'},
  {q:'Quels matériaux utilisez-vous ?',a:'Nous travaillons avec des poudres métalliques, alliages et matériaux d\'apport sélectionnés selon la nature de la pièce et les contraintes mécaniques qu\'elle subit.'},
  {q:'Quels sont vos délais ?',a:'Les délais varient selon la complexité de l\'intervention, généralement entre 3 et 10 jours ouvrés. Un devis précis avec délai est fourni après diagnostic.'},
  {q:'Pouvez-vous intervenir sur site ?',a:'Oui, c\'est notre mode d\'intervention principal : notre unité mobile se déplace directement chez vous, quelle que soit la taille de la pièce. Aucun démontage ni transport n\'est nécessaire : nos équipes réalisent la réparation complète sur place.'},
];
document.getElementById('faqList').innerHTML = faqs.map((f,i)=>`
  <div class="faq-item ${i===0?'open':''}">
    <button class="faq-q"><span>${f.q}</span><span class="plus"></span></button>
    <div class="faq-a"><p>${f.a}</p></div>
  </div>`).join('');
document.querySelectorAll('.faq-item .faq-q').forEach(btn=>{
  btn.addEventListener('click',()=>{
    const item = btn.parentElement;
    const wasOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item').forEach(i=>{
      i.classList.remove('open');
      i.querySelector('.faq-a').style.maxHeight = null;
    });
    if(!wasOpen){
      item.classList.add('open');
      const a = item.querySelector('.faq-a');
      a.style.maxHeight = a.scrollHeight+40+'px';
    }
  });
});
document.querySelector('.faq-item.open .faq-a').style.maxHeight = document.querySelector('.faq-item.open .faq-a').scrollHeight+40+'px';

/* =========================================================
   SPARKS IN HERO
========================================================= */
const sparkContainer = document.getElementById('heroSparks');
for(let i=0;i<22;i++){
  const s = document.createElement('div');
  s.className='spark';
  const startX = 55 + Math.random()*40, startY = 30+Math.random()*50;
  s.style.left = startX+'%'; s.style.top = startY+'%';
  s.style.setProperty('--dx',(Math.random()*140-70)+'px');
  s.style.setProperty('--dy',(Math.random()*-100-20)+'px');
  s.style.animationDelay = (Math.random()*2.6)+'s';
  s.style.animationDuration = (1.8+Math.random()*1.4)+'s';
  sparkContainer.appendChild(s);
}

/* =========================================================
   NAV / MOBILE MENU
========================================================= */
const header = document.getElementById('header');
window.addEventListener('scroll',()=>{
  header.classList.toggle('scrolled', window.scrollY>40);
  const h = document.body.scrollHeight - window.innerHeight;
  document.getElementById('weld-progress').style.width = (window.scrollY/h*100)+'%';
});
const burger = document.getElementById('burger');
const mobileMenu = document.getElementById('mobileMenu');
burger.addEventListener('click',()=>{ burger.classList.toggle('active'); mobileMenu.classList.toggle('open'); });
mobileMenu.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{ burger.classList.remove('active'); mobileMenu.classList.remove('open'); }));

/* =========================================================
   SCROLL REVEAL
========================================================= */
const revealObserver = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('visible'); } });
},{threshold:.15});
document.querySelectorAll('.reveal, .timeline-item').forEach(el=>revealObserver.observe(el));

/* Timeline progress bar */
const timelineEl = document.getElementById('timeline');
const timelineProgress = document.getElementById('timelineProgress');
window.addEventListener('scroll',()=>{
  const rect = timelineEl.getBoundingClientRect();
  const vh = window.innerHeight;
  const total = rect.height;
  let progressed = vh*0.75 - rect.top;
  progressed = Math.max(0, Math.min(progressed, total));
  timelineProgress.style.height = progressed+'px';
});

/* =========================================================
   COUNTERS
========================================================= */
const counters = document.querySelectorAll('.counter');
const counterObserver = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      const el = entry.target;
      const target = +el.dataset.target;
      let cur = 0;
      const step = Math.max(1, target/60);
      const tick = ()=>{
        cur += step;
        if(cur >= target){ el.textContent = target; }
        else { el.textContent = Math.floor(cur); requestAnimationFrame(tick); }
      };
      tick();
      counterObserver.unobserve(el);
    }
  });
},{threshold:.5});
counters.forEach(c=>counterObserver.observe(c));

/* =========================================================
   CONTACT FORM
========================================================= */
document.getElementById('contactForm').addEventListener('submit', function(e){
  e.preventDefault();
  this.style.display='none';
  document.getElementById('formSuccess').classList.add('show');
});