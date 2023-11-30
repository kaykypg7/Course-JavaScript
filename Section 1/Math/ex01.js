const numero = Number(prompt('Digite seu número'))

let num = document.querySelector('.numero')
var txt = document.querySelector('#texto')

num.innerHTML = numero;
txt.innerHTML = `<p>a raiz quadrada do seu numero é ${numero ** 0.5}</p>`;
txt.innerHTML = `<p>${numero} é um número inteiro: ${Number.isInteger(numero)}</p>`;
