let visibilidade= false;
function ocultarExibir(){
    const box_option= document.getElementById('links-menu');

    if(visibilidade){
        box_option.style.display='none';
        visibilidade=false;
    }
    else{
        box_option.style.display='flex';
        visibilidade='true';
    }
    
    
}
