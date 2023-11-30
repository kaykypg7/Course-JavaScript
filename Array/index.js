var lista = ['eu', 'tu', 'nos'];

console.log(lista)
lista.push('vos') // push adiciona ao final
console.log(lista)
lista.unshift('eles') // unshift adiciona ao começo
console.log(lista)
const removido = lista.pop() // pop remove o ultimo item

console.log(removido)
console.log(lista)
console.log(lista.slice(0,2))