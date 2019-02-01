var $menu = document.querySelector('.menu');

window.addEventListener('scroll', setupNav);

function setupNav(){
    var posYScroll = getYscroll()
    
    if(posYScroll > 100 && !hasClassFx()){
        console.log('adiciona');
        document.body.classList.add('fx');
    } 
    
    if(posYScroll <= 100 && hasClassFx()) {
        console.log('remove');
        document.body.classList.remove('fx');
    }
}

function getYscroll(){
    return window.pageYOffset;
}

function hasClassFx(){
    return !!document.querySelector('.fx')
}
