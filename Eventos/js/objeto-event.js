document.addEventListener('click', function(evento){
    console.log('Você clicou no document')
    // currentTarget mostra qual elemento foi atrelado o evento.
    console.log(evento.currentTarget)

    // this é sempre o elemento a qual eu atrelei o evento.
    console.log(this)

    // target mostra qual elemento disparou o evento.
    console.log(evento.target) 

})