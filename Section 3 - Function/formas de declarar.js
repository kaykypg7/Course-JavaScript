soma(2,4)
function soma (x,y){ // forma padrão com function hoisting, que permite a inicialização da funcao somente apos a leitura do codigo
    return console.log(x+y)
}


const vsoma = function(x,y){ // dentro de uma variável(function expression)
    return console.log(x+y)
}
vsoma(4,6)



function execfuncao(funcao){ // função que executa outras funções
    // ira se transformar em outra função declarada pelo ususario
}
execfuncao(soma(10,10))



// Arrow 
const arrow = (x,y)=>{
    return console.log(x+y)
}
arrow(100,100)


//funcao dentro do objeto

obj = {
    falar : function(){
        console.log("Estou falando, bla bla bla")       // forma classica
    }
}

obj.falar()






//funcao dentro do objeto
objc = {
    falar(){
        console.log("Estou falando em menos linhas, bla bla bla")       // forma curta
    }
}

objc.falar()