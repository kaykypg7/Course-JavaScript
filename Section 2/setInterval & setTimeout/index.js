function horaAtual() {
    let hora = new Date();
    return hora.toLocaleTimeString('pt-BR', {

        hour12: false

    })
}

const seconds = setInterval(function () {
    console.log(horaAtual());
}, 1000) // milisegundos

setTimeout(function () { clearInterval(seconds) }, 5000) // para o intervalo 
setTimeout(function () {
    console.log("Passou-se 10 segundos")
}, 10000)