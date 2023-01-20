let a =0;
let b =1;
function retorna2valores(){
    a+=1;
    b+=1;
    // para retornar dois valores, armazenei os dois em um array.
    return [a,b];
}
// variavel que armazena a função
//Fazendo isso a função é chamada apenas 1 vez, evitando contar de 2 em 2.
// let valores=retorna2valores();

// Cada variavel armazerna um dos valores de retorno
// let A= valores[0];
// let B= valores[1];
// atribuição desestruturada
let [A,B]=retorna2valores();

console.log('Somou de 1 em 1: ');
console.log(A+'-'+B);
// incremento
A+=A;
B+=B;
console.log(A+'-'+B);

// reset variavel
a=0;
b=1;
console.log('Ele irá somar cada vez que a function for chamada.')
console.log(retorna2valores()[0]+'-'+retorna2valores()[1]);
console.log(retorna2valores()[0]+'-'+retorna2valores()[1]);