/*
Primitivos ( string, number, symbol, bollean, undefined,null, bigint,)
ao serem atribuidos a outras variaveis vao ser copiaods

Referencia( function, Array, Object)
ao serem atribuidos a outras variaveis, teram o valor alterado

*/

let num = 1

let num2 = num
num2 = 3
console.log(num)




const nome = {
        nome : 'kayky',
        sobrenome : 'carvalho'
}

const b = nome

b.nome = "nao sei"

console.log(nome.nome)