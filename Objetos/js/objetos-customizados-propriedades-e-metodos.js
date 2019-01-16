// Objetos customizados, é o mesmo que objetos literais.
var minhaCaneta1 = {
    cor: 'Azul',
    preco: 1,
    mudaCor: function(cor){
        this.cor = cor
    }
}

var minhaCaneta2 = {
    cor: 'Verde',
    preco: 2,
    mudaCor: function(cor){
        this.cor = cor
    }
}

minhaCaneta1.mudaCor('Amarelo')
console.log(minhaCaneta1)
console.log(minhaCaneta2)