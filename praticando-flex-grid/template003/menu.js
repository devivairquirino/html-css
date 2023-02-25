let visible= false;

function openClose(){
     let menu= document.getElementById('menu-content');
    
     if(visible){
        menu.style.marginLeft='-300px';
        visible= false;
     }
     else{
        menu.style.marginLeft='0';
        visible= true;
     }
}