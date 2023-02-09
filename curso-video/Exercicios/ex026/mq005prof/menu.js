
function clickMenu(){
    const menu= document.getElementById('imenu');

    
    if(menu.style.display==='none'){
        menu.style.display='block';
    }
    else{
        menu.style.display='none';
    }
}

function mudouTamanho(){
    const menu= document.getElementById('imenu');
    if(window.innerWidth>= 768){
        menu.style.display='block';
    }
    else{
        menu.style.display='none';
    }
}