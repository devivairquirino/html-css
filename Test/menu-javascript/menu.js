let visible= false;

function openClose(){
    const conteudo= document.getElementById('content-menu');

    if(visible){
        conteudo.style.marginLeft='-300px';
        transformBurguer(true);
        mudarCor('white');
        
        visible= false;
    }
    else{
        conteudo.style.marginLeft='0';
        transformX();
        mudarCor('#333333');
        girar(false);
        visible= true;
    }

}
function mudarCor(cor){
    let lines= document.getElementsByClassName('lines');
        for(let i=0; i<3;i++){
            lines[i].style.backgroundColor=cor;
        }

}
function transformX(){
    let lines= document.getElementsByClassName('lines');
    // Linha 1 roda para formar X
    lines[0].style.transform='rotate(45deg) scale(1.25)';
    lines[0].style.transformOrigin='0% 0%';

    lines[1].style.opacity='0';

    // Linha 3 roda para formar X
    lines[2].style.transform='rotate(-45deg) scale(1.25)';
    lines[2].style.transformOrigin='0% 100%';
}
function transformBurguer(){
    let lines= document.getElementsByClassName('lines');
    // Linha 1 roda para formar X
    lines[0].style.transform='rotate(0deg) scale(1)';

    lines[1].style.opacity='100';

    // Linha 3 roda para formar X
    lines[2].style.transform='rotate(0deg) scale(1)';
}   

function girar(visible){
    const box= document.getElementById('menu-lines');
   if(visible){
        box.style.animationName='animation-x'
        box.style.animationDuration='1s'
   }
//    Necesario para que a animção sempre aconteça
   else{
        box.style.animationName='animation-burguer'
        box.style.animationDuration='1s'
   }
}