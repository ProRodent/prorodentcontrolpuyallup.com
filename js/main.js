(function(){
  var t=document.getElementById('mob-toggle'),d=document.getElementById('mob-drawer'),o=document.getElementById('mob-overlay'),c=document.getElementById('drawer-close');
  if(!t||!d||!o){return;}
  function openMenu(){d.classList.add('is-open');o.classList.add('visible');t.setAttribute('aria-expanded','true');t.setAttribute('aria-label','Close navigation menu');document.documentElement.style.overflow='hidden';if(c){c.focus();}}
  function closeMenu(){d.classList.remove('is-open');o.classList.remove('visible');t.setAttribute('aria-expanded','false');t.setAttribute('aria-label','Open navigation menu');document.documentElement.style.overflow='';}
  t.addEventListener('click',function(){if(t.getAttribute('aria-expanded')==='true'){closeMenu();}else{openMenu();}});
  if(c){c.addEventListener('click',function(){closeMenu();t.focus();});}
  o.addEventListener('click',closeMenu);
  var links=d.querySelectorAll('a');
  for(var i=0;i<links.length;i++){links[i].addEventListener('click',closeMenu);}
  document.addEventListener('keydown',function(e){if(e.key==='Escape'){closeMenu();}});
  window.addEventListener('resize',function(){if(window.innerWidth>=900){closeMenu();}});
})();
