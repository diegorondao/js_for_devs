(function(){
    var relogio = document.querySelector('.relogio')

    function getHour(){
        var data = new Date()
        var h = formata(data.getHours())
        var m = formata(data.getMinutes())
        var s = formata(data.getSeconds())

        return h + ':' + m + ':' + s
    }
   


    function formata(t){
        return t < 10 ? "0" + t : t
    }

    function mostraRelogio(atual){
        relogio.textContent = atual
    }

    mostraRelogio(getHour())

    setInterval(function(){
        mostraRelogio(getHour())
    }, 1000)
})();