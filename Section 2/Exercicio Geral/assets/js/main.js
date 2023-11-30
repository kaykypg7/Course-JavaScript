const form = document.querySelector('.form')

form.addEventListener('submit', (e)=>{  // evento do botao 
  e.preventDefault() // faz com que a pagina não atualize a todo momento
  console.log('evento previnido')
  const inppeso = e.target.querySelector('#peso')
  const inpaltura = e.target.querySelector('#altura')
  const peso = Number(inppeso.value)
  const altura = Number(inpaltura.value)
  console.log(peso,altura)
  if (!peso){
    setResultado('Peso inválido', false)
    return
  }
  if (!altura){
    setResultado('Altura inválida', false)
    return
  }
  
  const imc = getIMC(peso,altura)
  console.log(imc)
  
} )

function getIMC(peso, altura){
  const imc = peso / altura ** 2
  return imc.toFixed(2)

}


function createParagrafo(){
  const createP = document.createElement('p') // metodo de criar elementos com JS
  return createP
}

function setResultado(msg, isValid){
  const result = document.querySelector('.resultado')
  result.innerHTML = ''
  const p = createParagrafo()
  p.innerHTML = msg
  result.appendChild(p)
}
