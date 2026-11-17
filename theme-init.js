// Set the saved theme before the page is painted.
try {
 const saved=localStorage.getItem('portfolio-theme');
 if(saved==='light'||saved==='dark')document.documentElement.dataset.theme=saved;
} catch {}
