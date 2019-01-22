(function(){
    var n1 = 0,
        n2 = 0
    
    setTimeout(function(){
        console.log('n1 =',n1)
    },1000)
    
    var intervalo = setInterval(function(){
        console.log('n2 =',n2++)

        if(n2 > 10){
            clearInterval(intervalo)
            console.log('setInterval finalizado' )
        }
    },2000)

    var str = ''
    var div = document.querySelector('div')
    var single = setTimeout(function(){
        for(var i = 0; i < 900; i++){
            str+= 'i: ' + i + '--'
            div.textContent += str
        }
    },2000)

    
})();