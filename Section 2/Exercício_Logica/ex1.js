// formas de resumir o código, para se adequar a cada situação



function numeros(x,y){
        
    // utilizando if padrão
    if(x>y){
        return x
    }
    else{
        return y
    }

}

    // utilizando if sem chaves
function numeros2(x,y){
    if(x>y) return x;
    else return y;
}

    // utilizando operação ternária
function numeros3(x,y){
    return x > y ?  x : y;
}


    //utilizando operação ternária + arrow function

    const num = (x,y) => x > y ? x : y; 



console.log(numeros(7,5))
console.log(numeros2(9,8))
console.log(numeros3(15,10))
console.log(num(40,20))