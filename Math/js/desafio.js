(function(){
    window.addEventListener('load', function(){
        var n = sortear(5) + 1

        document.querySelector('body').style.backgroundImage = "url(images/"+ n +".jpg)"
    })
})();

function sortear(n){
    var _n = n || 1
    var sorteado = Math.random()
    sorteado = sorteado * _n
    sorteado = Math.floor(sorteado)
    return sorteado
};