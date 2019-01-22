(function(){
    var banner = document.querySelector('.banner')
    var button = document.querySelector('.banner__close')

   var mostrarBanner = setTimeout(function(){
        banner.style.display = 'block'
   },3000)

   button.addEventListener('click', function(){
        button.removeEventListener('click', button)

    // parentNode vai me retornar o pai elemento pai de banner.   
       banner.parentNode.removeChild(banner)
   })
})()