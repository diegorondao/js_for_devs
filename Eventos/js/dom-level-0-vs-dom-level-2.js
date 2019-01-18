// DOM level 0
function Button1(){
    alert('Mensagem 1')
}

var Button2 = document.querySelector('#Button2').onclick = function(){
    alert('Mensagem 2')
}

// DOM level 2
var Button3 = document.querySelector('#Button3').addEventListener('click', function(){
    alert('Mensagem 3 level 2')
});

Button3 = document.querySelector('#Button3').addEventListener('click', function(){
    alert('Mensagem 3 level 2 executado por outro evento')
})