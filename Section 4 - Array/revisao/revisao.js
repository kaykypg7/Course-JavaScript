
//const nomes = new Array('kayky', 'carvalho', 'sebastiao') // outra formas de criar um array
const nome = ["KAyky", "Carvalho", "Sebastiao"]
// const novoNome = nome; // tudo que for alterado dentro dessa variavel, tambem sera alterado em nome
const novoNome = [...nome] //copia os elementos de nome, como um crtl+c. utilizando spread

const removido = nome.pop() // armazena o elemento removido dentro de uma varivavel

// .pop() remove o item do final do array
// .shift() remove o item do comeco do array
// .push() adiciona um elemento no final do array
// .unshift() adiciona um elemento no comeco do array
// .slice(1,3) remove uma parte do array // ultimo paramento nao é incluido
// .split(' ') transforma uma string em um array
// exemplo const nome = "Kayky Carvalho Sebastiao"
// const nomes = nome.split(' ') // se tiver separado por virgura, nos parametros comocamos virgula

// .join(' ') // tranforma um array em string






// delete nome[1]  // remove um elemento do array sem alterar os indices
console.log(nome, removido)



