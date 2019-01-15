(function(){
    var Button = document.querySelector('#Button')
    var MeuInput = document.querySelector('#MeuInput')
    var Msg = document.querySelector('#msg')
    

    Button.addEventListener('click', function(){
        var nome = MeuInput.value
        Msg.innerHTML = `<span style="color: green;">Bem-vindo: </span><b>${nome}</b>`
        
    })
})()