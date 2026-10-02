
const root=document.documentElement;
const themeToggle=document.getElementById('themeToggle');
const storedTheme=localStorage.getItem('portfolio-theme');
if(storedTheme==='light'||storedTheme==='dark') root.dataset.theme=storedTheme;
function syncTheme(){
  if(!themeToggle) return;
  const light=root.dataset.theme==='light';
  themeToggle.textContent=light?'🌙':'☀️';
  themeToggle.setAttribute('aria-label', light?'Passer en mode sombre':'Passer en mode clair');
}
syncTheme();
if(themeToggle){
  themeToggle.addEventListener('click',()=>{
    root.dataset.theme=root.dataset.theme==='light'?'dark':'light';
    localStorage.setItem('portfolio-theme', root.dataset.theme);
    syncTheme();
  });
}
const roleWord=document.getElementById('roleWord');
if(roleWord){
  const roles=[
    'développeuse web junior',
    'développeuse mobile',
    'créatrice d’API REST',
    'développeuse full-stack junior'
  ];
  let idx=0;
  const animate=()=>{
    roleWord.classList.remove('leave');
    roleWord.textContent=roles[idx];
    requestAnimationFrame(()=>requestAnimationFrame(()=>roleWord.classList.add('show')));
    setTimeout(()=>{
      roleWord.classList.remove('show');
      roleWord.classList.add('leave');
      setTimeout(()=>{idx=(idx+1)%roles.length;animate();},520);
    },2100);
  };
  animate();
}
const observer=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  })
},{threshold:.16});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
