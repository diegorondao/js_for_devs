// Variáveis e Constantes.
// Existem dois tipo de se declarar variáveis que são var e let.
// Para criar uma constante usa-se const.
// A diferença de var e const é que ambos são da 'nova' especificação do ES6.
// Teoricamente const é quando não queremos que seja alterado o valor de uma variável.
// A diferença entre let e var é o escopo onde var vaza alguns escopos e let não.


// Objetos nativos do JavaScript.
// undefined.
var nome
console.log(nome)

// null
var sobrenome = null
console.log(sobrenome)

// A diferença entre null e undefined é que null não reserva espaço na memória e undefined reserva.


// NaN de Not a Number ou em português não é um número.
var string = 'Diego Freitas',
    number = 123
console.log(string * number)    


// Infinity.
// Os valores numéricos no JavaScript tem um limite que ao ser atingido, é apresentado o Infinity indicando que atingiu o número máximo do JS.
console.log(2e1)
console.log(2e2)
console.log(2e10)
console.log(2e100)
console.log(2e307)
console.log(2e308)
console.log(-2e1)
console.log(-2e2)
console.log(-2e307)
console.log(-2e308)


// Objetos globais.
// window objeto root, ou objeto raiz onde contem todas as informações do ambiente de hospedagem que nada mais é que o browser.
console.log(window)


/*
 *  alert é uma função do browser, então quando usamos alert('') na verdade estamos usando window.alert(''), como a função alert('') está        *  atrelada ao objeto window, não é preciso usar window.alert('') podemos usar apenas alert('').
 */

window.alert('Olá mundo!') 


// this.
// O this na prática é quem representa o contexto atual.
// Se eu digitar no console do browser this.alert(''), o this estará representando o objeto window ou seja o this representa o contexto atual.
console.log(this.alert('Jedi'))

