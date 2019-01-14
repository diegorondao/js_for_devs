// Não é uma boa prática criar variáveis de escopo de global, pois podem causar conflitos com outras variáveis de mesmo nome.
// O conflito de variáveis com mesmo nome em escopo global, podem ocorrer mesmo que as variáveis estejam em arquivos diferentes.

/*

Para criar funções sem precisar especificar um nome e ter que chama-lá sempre para ser executada, podemos criar funções IIFE ou funções autoexecutáveis. 

*/

(function(){
    var str = 'Olá mundo!'
    console.log(str)
})();


/* 

Sabemos que se criarmos variáveis dentro uma função sem utilizar o var, essa variável passa a ser de escopo global, e para que isso não aconteça utilizamos a string 'use strict'.

*/

// Sem a string 'use strict', uma variável o var pode ser acessado de fora da função.
(function(){
    n1 = 1000
    
})()
console.log(n1);


// Utilizando a string 'use strict', não possível criar a variável sem o var. 
(function(){
    'use strict'
    var n1 = 2000
    console.log(n1)    
    
})();


function somar(){
    console.log(arguments)
    var result = 0
    var x = 0
    while(arguments[x]){
        // result = result + arguments[x] abaixo utilizo um short code para encurtar o código. 
        result += arguments[x]

        // x = x + 1
        x++
    }
    console.log('Result:', result)
}

somar(20,20,10,30)












