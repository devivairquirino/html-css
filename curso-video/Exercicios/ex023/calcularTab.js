function removePoint(i){
    let dadosTab= document.getElementsByClassName('num')[i];

    let numPopulacao= dadosTab.innerHTML;
    // Retira os pontos da string para transformar em numero
    numPopulacao= numPopulacao.replace(/\./g,'');
    
    return Number(numPopulacao);
}

function calcularTotal(){
    let total= document.getElementById('total-populacao');
    
    let num_soma= 0;
    for(let i=0;i<=26;i++){
        num_soma+=removePoint(i);
    }
    num_soma=AddPoint(num_soma);
    total.innerHTML=num_soma;
}

function AddPoint(numFormatado){
    return numFormatado.toLocaleString('pt-br');
}