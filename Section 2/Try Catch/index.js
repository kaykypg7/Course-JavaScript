
// try{ //qualquer erro que ocorrer dentro do try, irá direcionar para o "catch"
// console.log(naoExisto);
// }

// catch(e){
//     console.log("Funcao não existente")
// }

// console.log(e)



function soma(x,y){
    
        if(typeof x !== 'number' || typeof y !== 'number'){
            throw new Error('x e y, não são numeros')  // erro do próprio javascript
        }
        return x+y;
    
}
console.log(soma(1,2))
