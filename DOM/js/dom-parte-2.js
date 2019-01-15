// getElementsByTagName retorna uma coleção de objetos.
var p0 = document.getElementsByTagName('p')[0].textContent = 'Primeiro parágrafo alterado'
var p1 = document.getElementsByTagName('p')[1].textContent = 'Segundo parágrafo alterado'
var p2 = document.getElementsByTagName('p')[2].textContent = 'Terceiro parágrafo alterado'

var h2 = document.getElementsByTagName('h2')[0].innerHTML = '<h1>Título</h1>'
var h3 = document.getElementsByTagName('h3')[0].innerHTML = '<h2>Subtitulo</h2>'

// querySelector e querySelectorAll são parecidos com os seletores do CSS, para selecionar um ID usa-se #nomedoID para classe .nomedaClasse
// querySelector retorna apenas um objeto, se existirem mais de um objeto como vários parágrafos, ele irá pegar sempre o primeiro objeto.
var paragrafo = document.querySelector('p')
console.log(paragrafo)

// querySelectorAll retorna uma coleção de objetos.
var paragrafos = document.querySelectorAll('p')
console.log(paragrafos)