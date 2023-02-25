function alterarImg(botao){
    let tela=document.getElementById('card-video');
    let texto_tela=document.getElementsByTagName('p');
    let img_tela=document.getElementsByTagName('img');
    
    let novo_texto=texto_tela[botao].innerHTML;
    let nova_img= img_tela[botao+1].src;
   
    texto_tela[0].innerHTML= novo_texto;
    
    img_tela.src=nova_img;
    
}