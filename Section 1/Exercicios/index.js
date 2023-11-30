function escopo(){
        const formulario = document.querySelector('.form');
        
        

        const pessoas = []
        function recebeEvento(evento){
        evento.preventDefault();
        
        const nome = formulario.querySelector('.nome')
        const sobrenome = formulario.querySelector('.sobrenome')
        const peso = formulario.querySelector('.peso')
        const altura = formulario.querySelector('.altura')
        const resultado = document.querySelector('.result')
        console.log(nome.value,sobrenome.value,peso.value,altura.value)


        resultado.innerHTML += `<p>${nome.value}, ${sobrenome.value}, ${peso.value}, ${altura.value}</p>`


        pessoas.push({
                nome: nome.value,
                sobrenome: sobrenome.value,
                peso:peso.value,
                altura:altura.value
                
               
        }) 
        console.log(pessoas)}

        
        
        formulario.addEventListener('submit', recebeEvento)
}
escopo()