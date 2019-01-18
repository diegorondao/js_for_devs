(function(){
    var input1 = document.querySelector('#input1')
    var input2 = document.querySelector('#input2')
    var meuButton = document.querySelector('#meuButton').addEventListener('click', function(){
        if(!input1.value || !input2.value){
        alert('Preencha todos os campos')
    }
})
})()
