var n = new Number('10')
var str = new String('Teste')

// Propriedade estática é uma propriedade do próprio construtor
console.log('Valor máximo suportado pelo JS =',Number.MAX_VALUE)
console.log('Valor mínimo suportado pelo JS =',Number.MIN_VALUE)

// O método toFixed trabalha com duas casas decimais
var n1 = 123.456
console.log(n1.toFixed(10))

// toPreciosion mostra quantos  dígitos tem no total 
n1 = 12.345
console.log(n1.toPrecision(4))

// toString transforma um número em string
console.log(n1.toString(8))

// toExponential serve para retornar anotação cientifica de um número
n1 = 10
console.log(n1.toExponential())