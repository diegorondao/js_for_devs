var hoje = new Date()
console.log(hoje)
console.log(typeof hoje)
console.log(hoje.getDay())
console.log('============================')

hoje = Date()
console.log(hoje)
// Atribuindo Date() a minha variável hoje, não haverá erro.
// Mas se eu tentar chamar minha variável com o método getDay() ocorrerá um erro pois eu não instanciei com operador new que Date() é um objeto.
// console.log(hoje.getDay())
console.log('============================')

// Valor vs Referência.
// Valor.
var x = 0
function mudaX(x){
    var y = x
    console.log('mudaX: ', x)
}
mudaX(1)
console.log('x: ', x)
console.log('============================')


// Referência.
// Objetos são passados para dentro de funções por referência e não por valor.
// Portanto mesmo n e y estando dentro da minha função mudaN, n e y tem o mesmo valor da variável de escopo local que armazeno meu array. 
var n = [0]
function mudaN(n){
   y = n
   y.push(2)
   n.push(3)
   console.log(n)
   console.log(y)
}
mudaN(n)
console.log(n)
