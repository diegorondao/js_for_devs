var $ul = document.querySelector('ul')
var $lis = document.querySelectorAll('li')

// var x = 0
// while($lis[x]){
//     $lis[x].addEventListener('click', function(evento){
//         evento.stopPropagation
//         console.log('Clicou na li')
//     })
//     x++
// }

$ul.addEventListener('click', function(evento){
    // evento.stopPropagation
    // console.log(this)
    // console.log(evento.target)
    // console.log(evento.currentTarget)

    if(evento.target.nodeName === 'LI'){
        console.log('Clicou na li')
    }
})