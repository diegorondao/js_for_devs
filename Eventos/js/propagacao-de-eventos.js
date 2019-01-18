// Bubbling a propagação ocorre do elemento filho e sobe o DOM até o elemento raiz.
var $section1 = document.querySelector('#section1').addEventListener('click', function(){
    console.log('Você clicou na section')
})

var $span = document.querySelector('span').addEventListener('click', function(){
    console.log('Você clicou na span')
})



// Capturing a propagação ocorre do elemento raiz até o ultimo elemento filho.
$section2 = document.querySelector('#section2').addEventListener('click', function(){
    console.log('Você clicou na section')
}, true)

$span2 = document.querySelector('#span2').addEventListener('click', function(){
    console.log('Você clicou na span')
}, true)

