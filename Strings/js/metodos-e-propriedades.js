var str = 'Minha String'
console.log(str)
console.log('Quantidade de caracteres de \"Minha String\" =',str.length)
console.log('============================================================')

console.log('Método replace troca sempre a primeira ocorrência')
console.log(str.replace('i', 'I'))
console.log('============================================================')

console.log('indexOf(), mostra qual o índice dos caracteres da string.')
console.log('Índice do caractere \"n\" =',str.indexOf('n'))
console.log('============================================================')

console.log('lastIndexOf(), mostra qual o índice do ultimo caractere da string.')
console.log('Índice do caractere \"n\" =',str.lastIndexOf('g'))
console.log('============================================================')

console.log('Método slice corta a string. A quantidade de números será a quantidade de caracteres a serem removidos.')
console.log(str.slice(1,9))
console.log('============================================================')

console.log('Método substring corta a string. A quantidade de números será a quantidade de caracteres a serem removidos, porém usando o método substring é possível inverter os número como 1,9 para 9,1 e obter o mesmo resultado do método slice.')
console.log(str.substring(9,1))
console.log('============================================================')

console.log('O método split pega uma string remove caracteres e transforma em um array.')
console.log(str.split(''))
console.log('============================================================')

console.log('O método toLowerCase transforma todos os caracteres em minúsculo')
console.log(str.toLowerCase('M'))
console.log('============================================================')

console.log('O método toUpperCase transforma todos os caracteres em maiúsculo')
console.log(str.toUpperCase('i'))
console.log('============================================================')