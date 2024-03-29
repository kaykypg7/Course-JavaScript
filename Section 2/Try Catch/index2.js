try{ //executado normalmento quando não houver erro.
console.log(soma)
console.log("abri um arquivo")
console.log("manipulei o arquivo e ocorreu erro")
console.log("fechei o arquivo")
}
catch(e){ // executa quando houver algum erro dentro do try.
    console.log("Tratando o erro")
}

finally{ // sempre executa, mesmo que não ocorra ou occorra o erro
    console.log("Finally : Sempre sou executado")
}