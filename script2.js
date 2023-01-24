var hint = document.getElementById('ConteudoPagina');
var btn = document.getElementById('btn');

btn.addEventListener('click', function(){
  var ctr = 0;
  hint.className = hint.className !== 'show' ? 'show' : 'hide';
  
  if (hint.className === 'show') {
    window.setTimeout(function(){
      hint.style.display = 'block';
      fadein();
    },0); // do this asap        
  }
  
  if (hint.className === 'hide') {
    fadeout();
    window.setTimeout(function(){
      hint.style.display = 'none';
    },700); // time this to fit the animation
  }
  
  function fadein(){
    hint.style.opacity = ctr !== 10 ? '0.'+ctr : 1;
    hint.style.transform = ctr !== 10 ? 'scale('+('0.'+ctr)+')' : 'scale(1)';
    ctr++;
    
    if (ctr < 11)
      requestAnimationFrame(fadein);
    
    else
      ctr = 0;
  }

  function fadeout(){
    hint.style.opacity = 1 - ('0.'+ctr);
    hint.style.transform = 'scale('+(1 - ('0.'+ctr))+')';
    ctr++;
    
    if (ctr < 10)
      requestAnimationFrame(fadeout);
    else
      ctr = 0;
  }
});
