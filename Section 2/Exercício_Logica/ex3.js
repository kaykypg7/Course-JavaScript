// exercício FizzBuzz
// caso o tipo for diferente de number retorne o que foi digitado
// caso o numero nao seja divisivel por 3 ou 5 retorne o proprio numero
// faca um laço de 0 a 100


function num(x){

    if (typeof x != 'number'){
        return x
    }
    if(x % 3 === 0 && x % 5 === 0 ){
        return "FizzBuzz"  
    }if(x % 3 === 0){
        return "Fizz"
    }
    if(x % 5 === 0 ){
        return "Buzz"
    }
    return x // caso nada acima aconteça
    
}
for(let i = 0; i <=100; i++){

    console.log(i, num(i))
}

