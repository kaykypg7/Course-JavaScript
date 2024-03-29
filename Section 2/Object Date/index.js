function zero(num){
        return num >= 10 ? num : `0${num}` 
}



function formatDate(data){
        const agora = new Date()
        const dia = zero(agora.getDate())
        const mes = zero(agora.getMonth() + 1)
        const ano =zero(agora.getFullYear())


        return `${dia}, ${mes}, ${ano}`
}





const data = new Date()  // pega a hora atual
const dataAtual = formatDate(data)
console.log(dataAtual)

// var hora = data.getHours()
// console.log(hora.toString())