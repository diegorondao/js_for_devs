var dataAtual = new Date();
dataAtual.setHours(0);
dataAtual.setMinutes(0);
dataAtual.setSeconds(0);
dataAtual.setMilliseconds(0);
var anoAtual = dataAtual.getFullYear();                
        
var dataNiver = new Date(anoAtual, 2, 8);

var dataAtualTS = dataAtual.getTime();
var dataNiverTS = dataNiver.getTime();

if (dataNiverTS === dataAtualTS){
    alert('Parabens pelo seu aniversario');
}
if(dataNiverTS < dataAtualTS){
    dataNiver.setFullYear(++anoAtual);
    dataNiverTS = dataNiver.getTime();
}

const UM_DIA_TS  = 24 * 60 * 60 * 1000;
var diferenca = dataNiverTS - dataAtualTS;
console.log(diferenca / UM_DIA_TS);  