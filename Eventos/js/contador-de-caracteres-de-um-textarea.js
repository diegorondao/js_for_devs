(function(){
    var meuTextarea = document.querySelector('#meuTextarea')
    var minhaSpan = document.querySelector('#minhaSpan')
    var maximoCaracteres = meuTextarea.maxLength
    minhaSpan.textContent = maximoCaracteres

    var mostraContador = document.querySelector('#mostraContador')
    mostraContador.style.display = 'block'

    meuTextarea.addEventListener('input', function(){
        var Caracteres = this.value.length
        minhaSpan.textContent = maximoCaracteres - Caracteres
    })
})()