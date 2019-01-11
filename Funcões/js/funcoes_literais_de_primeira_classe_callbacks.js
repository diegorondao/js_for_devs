// Literal
function soma(n1,n2){
    return n1 + n2
}

var resultado = soma(50,50)
console.log('Resultado:',resultado)


// Funções por ser cidadãos de primeira classe, podem ser tratadas como qualquer outro objeto.
soma.propriedade = 'Propriedade da função'
console.log(soma.propriedade)


//JavaScript é uma linguagem funcional, portanto eu posso atribuir uma função a uma variável e chamar essa variável como função.
var minhaFuncao = function(str){
    console.log('Olá',str)
} 

minhaFuncao('mundo!')

// Funções também podem ser passadas por parâmetro em outra função.
var minhaFuncao2 = function(funcao){
    funcao()
}

minhaFuncao2(function(){
    console.log('Função passada por parâmetro em outra função')
})