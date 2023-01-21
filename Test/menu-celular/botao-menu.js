function menu(){

    const linha= document.querySelectorAll('div.traco');
    
    if(linha[1].style.display==='none')
    {
        for(let i=0; i<=2;i++){
            linha[i].style.position='static';

            linha[i].style.margin='5px auto'
        }
        linha[0].style.transform='rotate(0deg)';
        linha[2].style.transform='rotate(180deg)';
        linha[1].style.display='block'
    }
    else{
        linha[1].style.display='none';
        for(let i=0; i<=2;i++){
            linha[i].style.position='absolute';
            linha[i].style.margin='-2.5px -45%'
        }
        linha[0].style.transform='rotate(45deg)';
        linha[2].style.transform='rotate(135deg)';
    }
}