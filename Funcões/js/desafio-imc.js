(function(){
    function calcularIMC(altura,peso){
        return altura / (peso * peso)
    }

    function classificaIMC(imc){
        if(imc <= 16.9){
            alert('Classificação do IMC: Muito abaixo do peso')
        }else if(imc <= 18.4){
            alert('Classificação do IMC: Abaixo do peso')
        }else if(imc <= 24.9){
            alert('Classificação do IMC: Peso normal')
        }else if(imc <= 29.9){
            alert('Classificação do IMC: Acima do peso')
        }else if(imc <= 34.9){
            alert('Classificação do IMC: Obesidade I')
        }else if(imc <= 39.9){
            alert('Classificação do IMC: Obesidade II (severa)')
        }else{
            alert('Classificação do IMC: Obesidade III (mórbida)')
        }
    }

    var altura = prompt('Digite sua altura')
    var peso = prompt('Digite seu peso')
    
    var imc = calcularIMC(peso,altura)
    var classificacao = classificaIMC(imc)
    
})()