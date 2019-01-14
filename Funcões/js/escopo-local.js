// No ES5, são somente as funções que criam escopo de variáveis.
// Variável de escopo global.
var x = 0
console.log('Mostra x de escopo global:',x)


function mostraX(){
    // Variável de escopo local.
    var x = 10
    console.log('Mostra x de escopo local:',x)
}
mostraX()


/*

Podemos acessar variáveis de escopo global dentro de uma função, mas não podemos acessar uma variável de escopo local que está dentro uma função de fora da função.

*/

var y = 20
var z
console.log('y fora da função:',y)
console.log('z fora da função:',z)

function mostraY(){
    var y = 30
    var z = 50
    console.log('y dentro da função:',y)
    console.log('z dentro da função:',z)

}
mostraY()