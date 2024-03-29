function retornaHora(data){
    if(data && !(data instanceof Date)){ //caso receba um valor que não seja uma data
        throw new TypeError("Esperando instancia de Date") // lancando um erro com throw new Error para indicar que nao recebeu uma data
    }

    if(!data){  // nao seja enviada uma data pelo usuário gere uma data automaticamente
        data = new Date()

    }

    return data.toLocaleTimeString('pt-BR', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12 : false
});
}


try{
const data = new Date("01-01-1970 12:58:12")
const hora = retornaHora();

console.log(hora)
}
catch(e){
    
}
finally{
    console.log("tenha um bom dia")
}