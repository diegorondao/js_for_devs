
function calcularMedia(){
        var total = 0
        var quantidade = arguments.length
        var x = 0

        while(typeof arguments[x] === 'number'){
            total += arguments[x]
            x++
        }
        
        return (total / quantidade).toFixed(2)
};


function sortear(n){
    var _n = n || 1
    var sorteado = Math.random()
    sorteado = sorteado * _n
    sorteado = Math.floor(sorteado)
    return sorteado
}
    
console.log(sortear(10))
