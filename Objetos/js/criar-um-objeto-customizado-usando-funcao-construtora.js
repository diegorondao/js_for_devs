// Funções construtoras, tem seu nome iniciando sempre com letra maiúscula.
function Caneta(preco,cor){
    this.preco = preco || 1
    this.cor = cor || 'Azul'
    this.mudaCor = function(cor){
        this.cor = cor
    }
}

caneta1 = new Caneta(2,'Amarelo')
console.log(caneta1)
