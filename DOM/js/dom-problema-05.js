(function(){
    var nome = 'Diego Freitas'
    var paragrafos = document.querySelectorAll('p')
    var x = 0
    while(paragrafos[x]){
        paragrafos[x].innerHTML = `<b>Este site foi hackeado por </b><span style="color: red;">${nome}</span>`
        x++
    }
})()