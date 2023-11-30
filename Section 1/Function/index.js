function carro(motor){
       return `seu motor é: ${motor}`
}

const m = carro("v8")
console.log(m)



function soma(x,y){
        const resultado = x+y
        return resultado
}

console.log(soma(2,2))


const raiz = function (n){ // padrao
        return n ** 0.5
}

console.log(raiz(25))


const raizq =  (n)=>{ // arrow function
        return n ** 0.5
}

console.log(raiz(9))