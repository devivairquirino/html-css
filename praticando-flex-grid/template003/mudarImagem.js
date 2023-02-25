function alterarImg(n){
    let banner = document.getElementsByTagName('img')[1];
    let img_pq= document.getElementsByTagName('img')[n+1];
    // Variavel de apoio
    let temp_img= img_pq.src;

    // Alterando o endereço das imgs
    img_pq.src=banner.src;
    banner.src=temp_img;

    let txt_banner = document.getElementsByTagName('p')[0];
    let txt_pq = document.getElementsByTagName('p')[n];
    // Variavel de apoio
    let temp_txt= txt_pq.innerHTML;

     // Alterando os textos
    txt_pq.innerHTML= txt_banner.innerHTML;
    txt_banner.innerHTML= temp_txt;



    // let texto_tela=document.getElementsByTagName('p');
    // let img_tela=document.getElementsByTagName('img');
    


}