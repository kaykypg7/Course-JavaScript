// Objetivo: Escrever uma função de paisagem que recebe largura e altura e retorna se se a imagem estiver em modo de paisagem.


// padrão
// function ePaisagem(x,y){
//     if (x > y){
//         return true
//     }
//     else{
//         return false
//     }
// }


// forma simplificada

function ePaisagem(x,y){
    return x > y ? true : false;  // nesse caso não necessitaria adicionar para retornar o true e false, ja que a propria condição ja retorna isso
    // return x > y              // ja ira retorna true e false da mesma forma;
}


console.log(ePaisagem(1200,720))