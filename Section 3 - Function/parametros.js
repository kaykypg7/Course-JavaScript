
// somente com function
function funcao(){
    valorInicial = 0
    for(let argumento of arguments){
        valorInicial += argumento;
    }
    console.log(valorInicial)
}

funcao(1,2,3,4,5)