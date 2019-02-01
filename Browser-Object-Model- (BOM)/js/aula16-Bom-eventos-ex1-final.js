    window.addEventListener('load', function(){
        console.log('load disparado');
    });
    
    window.addEventListener('DOMContentLoaded', function(){
        console.log('DOMContentLoaded disparado');
    });
    
    window.addEventListener('resize', function(e){
        //console.log('resize disparado');
        //console.log(e);
    });
    
    window.addEventListener('scroll', function(e){
        //console.log('scroll disparado');
        //console.log(e);
        //console.log('scroll Y', pageYOffset);
    });
    
    window.addEventListener('unload', function(){
        console.log('unload disparado');
        debugger
    });
    
    window.addEventListener('beforeunload', function(){
        console.log('beforeunload disparado');
        debugger
    });
    