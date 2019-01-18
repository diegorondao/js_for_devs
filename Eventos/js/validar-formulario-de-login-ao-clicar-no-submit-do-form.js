(function(){
    var form = document.querySelector('form')
    var input1 = document.querySelector('#input1')
    var input2 = document.querySelector('#input2')
    

    form.addEventListener('submit', function(evento){
        
        if(!input1.value || !input2.value){
            alert('Preencha todos os campos')
            evento.preventDefault()
        }
    })
})()
