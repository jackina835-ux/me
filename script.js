(() => {
 const root=document.documentElement;
 root.classList.add('js');
 const theme=document.getElementById('themeToggle');
 try { const stored=localStorage.getItem('portfolio-theme'); if(stored==='light'||stored==='dark') root.dataset.theme=stored; } catch {}
 function syncTheme(){if(!theme)return;const dark=root.dataset.theme==='dark';theme.textContent=dark?'☀':'◐';theme.setAttribute('aria-label',dark?'Passer en mode clair':'Passer en mode sombre');}
 syncTheme();
 theme?.addEventListener('click',()=>{root.dataset.theme=root.dataset.theme==='dark'?'light':'dark';try{localStorage.setItem('portfolio-theme',root.dataset.theme);}catch{}syncTheme();});
 const filters=document.querySelector('.project-filters');
 if(filters){
  filters.hidden=false;
  const cards=[...document.querySelectorAll('.projects-list .project-card')];
  filters.addEventListener('click',event=>{
   const button=event.target.closest('[data-filter]');
   if(!button)return;
   filters.querySelectorAll('[data-filter]').forEach(item=>item.setAttribute('aria-pressed',String(item===button)));
   let count=0;
   cards.forEach(card=>{card.hidden=button.dataset.filter!=='all'&&card.dataset.category!==button.dataset.filter;if(!card.hidden)count++;});
   document.querySelector('.filter-status').textContent=`${count} projet${count>1?'s':''} affiché${count>1?'s':''}.`;
  });
 }
 const links=[...document.querySelectorAll('.nav-links a[href^="#"]')];
 if('IntersectionObserver' in window&&links.length){
  const observer=new IntersectionObserver(entries=>{
   entries.forEach(entry=>{if(entry.isIntersecting){links.forEach(link=>{if(link.hash===`#${entry.target.id}`)link.setAttribute('aria-current','location');else link.removeAttribute('aria-current');});}});
  },{rootMargin:'-15% 0px -55% 0px',threshold:0});
  links.forEach(link=>{const section=document.querySelector(link.hash);if(section)observer.observe(section);});
 }
 const menu=document.getElementById('menuToggle'),nav=document.getElementById('navigation');
 if(menu&&nav){
  menu.hidden=false;
  function close(){nav.classList.remove('open');menu.setAttribute('aria-expanded','false');menu.textContent='Menu';}
  menu.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',String(open));menu.textContent=open?'Fermer':'Menu';});
  nav.addEventListener('click',event=>{if(event.target.closest('a'))close();});
  document.addEventListener('keydown',event=>{if(event.key==='Escape'&&nav.classList.contains('open')){close();menu.focus();}});
 }
})();
