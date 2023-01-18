function somar(){
    var number1 = document.querySelector('input#n1').value;
    var number2 = document.querySelector('input#n2').value;
    var ress=document.querySelector('input#ress');

    var n1=Number(number1);
    var n2=Number(number2);

   
    ress.value=n1+n2;


}