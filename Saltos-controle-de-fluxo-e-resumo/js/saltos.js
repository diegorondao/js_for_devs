function Retorno(){
  console.log("Usando return")
  for(var i = 0; i < 11; i++){
    console.log(i)
    if(i == 5){
      return "Parei no 5 e sai da função"
      console.log("return saiu da função")
    }
  }
}

var retorno = Retorno()
console.log(retorno)
console.log("===================================================")


function Pausa(){
  console.log("Usando break")
  for(var i = 0; i < 11; i++){
    console.log(i)
    if(i == 5){
      break
    }
    
  } 

  console.log("Parei no 5, sai do loop mas não sai da função")
  return "Fim do loop"
}

var pare = Pausa()
console.log(pare)
console.log("====================================================")


function Continue(){
  console.log("Usando continue")
  for(var i = 0; i < 11; i++){
    if(i == 5){
      console.log("Pulei o 5 e continuei")
      continue
    }
    console.log(i)
  }

  
}

Continue()
console.log("=====================================================")


function Caso(){
  var recebe = prompt("Digite um número")
  switch(recebe){
    case "0": 
      console.log("switch 0")
      break
    case "10":
      console.log("switch 10")  
      break
    case "20":
      console.log("switch 20")  
      break
    case "30":
      console.log("switch 30")  
      break
    default:
      console.log("Número não encontrado")  
  }
}

Caso()

