// Case Sensitive.
var nome = 'Diego',
    Nome = 'Freitas'
console.log(nome,Nome)    

// Existe duas maneiras de se fazer comentário no JavaScript, a primeira é usando //, e a segunda é usando /* */.
// A primeira opção usando // é para quando o comentário tiver apenas uma linha.
// A segunda opção usando /* */ é para quando o comentário tiver mais de uma linha.
// Comentários não são interpretados pelo mecanismo do browser portanto a linha de comentário no código é ignorada.


// Declarações ou sentenças de código nada mais é que as linhas de código.
// Como mostrado abaixo, tenho três declarações ou sentenças de código, sendo uma na primeira linha e duas na segunda linha.
var n1 = 100,
    n2 = 100; console.log('Resultado de n1 + n2 é =', n1 + n2)


// Literais.
// Os literais são cada valor atribuído direto a uma variável.

// Literal de string.
var minhaString = 'Olá mundo'

// Literal de número.
var meuNumero = 123

// Literal de boolean.
var verdadeiro = true

// Literal de array do tipo number
var meuArray = [1,2,3,4,5]

// Literal de array do tipo string
var frutas = ['Maçã', 'Abacaxi', 'Uva', 'Pera']

// Literal de objeto
var obj = {
    nome: 'Diego',
    sobrenome: 'Freitas',
    idade: 26
}


// Imprimindo no console os valores de cada string que foram criadas de forma literal.
console.log(minhaString,)
console.log(meuNumero)
console.log(verdadeiro)
console.log(meuArray[0], meuArray[1], meuArray[2], meuArray[3], meuArray[4])
console.log(frutas[0], frutas[1], frutas[2], frutas[3])
console.log(obj.nome, obj.sobrenome, obj.idade)


// Escape.
// usamos \"\"  ou \'\' dentro de uma string quando quisermos escapar um texto puro.
// Abaixo estou escapando um texto puro que será imprimido no console dizendo O "JavaScript" é maneiro.
var escape = 'O \"JavaScript\" é maneiro'
console.log(escape)

