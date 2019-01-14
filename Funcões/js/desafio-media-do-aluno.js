(function(){
    function calcularMedia(){
        var total = 0
        var quantidade = arguments.length
        var x = 0

        while(typeof arguments[x] === 'number'){
            total += arguments[x]
            x++
        }
        return total / quantidade
    }

    var media1 = calcularMedia(2,4)
    var media2 = calcularMedia(1,1,2,3,5)
    var media3 = calcularMedia(1,1,0,10,10)
    console.log('media1:',media1)
    console.log('media2:',media2)
    console.log('media3:',media3)
})();


// Somando notas digitadas em um input e mostrando a media em uma div
(function(){
    function CalcularMedia(){
        var total = 0
        var quantidade = arguments.length
        var x = 0

        while(typeof arguments[x] === 'number'){
            total += arguments[x]
            x++
        }
        return total / quantidade
    }


    var Media = '';
            var MeuInput = document.querySelector('#MeuInput')
            var Button = document.querySelector('#Button')   
            Button.addEventListener('click', function(){
                var media = MeuInput.value.split(',')
                var notNumber = media.every((a)=>{ return !isNaN(a) })
                if (notNumber) {
                   Media = media.reduce((x,y)=>{return (parseFloat(x) + parseFloat(y)) })
                   Media = Media / media.length
                }
                var MinhaDiv = document.querySelector('#MinhaDiv').textContent = Media
            })
    
})()