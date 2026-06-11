(function(){
  var root=document.documentElement,
      btn=document.getElementById('themeBtn'),
      lbtn=document.getElementById('langBtn');
  function sync(){ if(btn) btn.textContent=root.getAttribute('data-theme')==='dark'?'☀️':'🌙'; }
  sync();
  if(btn) btn.onclick=function(){
    var t=root.getAttribute('data-theme')==='dark'?'light':'dark';
    root.setAttribute('data-theme',t); localStorage.setItem('tupa-theme',t); sync();
  };
  var lang=localStorage.getItem('tupa-lang')||'ko';
  function applyLang(){
    document.querySelectorAll('[data-en]').forEach(function(el){
      el.innerHTML = lang==='en' ? el.getAttribute('data-en') : el.getAttribute('data-ko');
    });
    root.setAttribute('lang', lang);
    if(lbtn) lbtn.textContent = lang==='en' ? '한' : 'EN';
  }
  applyLang();
  if(lbtn) lbtn.onclick=function(){ lang=lang==='en'?'ko':'en'; localStorage.setItem('tupa-lang',lang); applyLang(); };
})();
