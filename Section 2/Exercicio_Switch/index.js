function data(){
const agora = new Date()
const dia = agora.getDate()
const mes = agora.getMonth() + 1
const hora = agora.getHours()
const ano = agora.getFullYear() 
    return `${hora}, ${dia} de ${mes} de ${ano}`

}

console.log('aqui')
let titulo = document.querySelector('h1')
titulo.innerText = data()


