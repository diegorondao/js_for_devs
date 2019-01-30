(function(){
    var Carousel = document.querySelector(".carousel")
    var CarouselInner = document.querySelector(".carousel__inner")
    var CarouselItens = document.querySelectorAll(".carousel__item")
    var BtnPrev = document.querySelector(".carousel__btn--prev")
    var BtnNext = document.querySelector(".carousel__btn--next")
    var CarouselPaginacao = document.querySelector(".carousel__paginacao")
    var Atual = 0
    var Quantidade = CarouselItens.length

    Carousel.style.overflowX = "hidden"
    BtnPrev.style.display = "block"
    BtnNext.style.display = "block"

    BtnPrev.addEventListener("click", function(){
        Atual--
        MostrarBanner(Atual)
    });

    BtnNext.addEventListener("click", function(){
        Atual++
        MostrarBanner(Atual)
    });
    
    

    function MostrarBanner(Atual){
        limpaIntervalo()

        BtnPrev.disabled = !Atual > 0
        BtnNext.disabled = Atual === Quantidade -1

        var Largura = getComputedStyle(CarouselItens[0]).width
        Largura = parseInt(Largura)

        var Posicao = Largura * Atual * -1
        CarouselInner.style.transform = "translateX("+ Posicao + "px)"
        atualizaPaginacao()
        iniciaIntervalo()

        
    };

    MontaPaginacao()
    function MontaPaginacao(){
        for(var i = 0; i < Quantidade; i++){
            AdicionarLi(i)
        }
    };

    function AdicionarLi(i){
        var li = document.createElement('li')
        if(i === 0) li.className = 'atual'
        li.addEventListener("click", function(){
            var BannerAtual = i
            MostrarBanner(Atual = i)
        })

        CarouselPaginacao.appendChild(li)
    };

    function atualizaPaginacao(){
        CarouselPaginacao.querySelector("li.atual").removeAttribute('class')
        CarouselPaginacao.querySelectorAll('li')
        [Atual].className = 'atual'

    };

    var intervalo = null
    function iniciaIntervalo(){
        intervalo = setInterval(function(){
            Atual++
            if(Atual >= Quantidade) Atual = 0
            MostrarBanner(Atual)
        },5000)
    }

    iniciaIntervalo()

    function limpaIntervalo(){
        clearInterval(intervalo)
    }

    
})()