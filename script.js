var hint = document.getElementById('ConteudoPagina');
var cortina = document.getElementById('cortina');
var btn = document.getElementById('btn');

var ctr = 0;
function abrirCortinas(){
    
    cortina.style.animation = "fade-out 2s forwards";
    
    window.setTimeout(function(){
        hint.style.display = 'block';
        hint.style.animation = "fade-in 2s forwards";
        cortina.classList.remove("vertical-center");
    },1500);
}

window.onload = function() {
    abrirCortinas();
}
