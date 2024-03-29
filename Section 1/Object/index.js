const pessoa = {
        nome: 'Kayky',
        idade: 25,
        peso: 65,

        // fala(){               les dentro do objeto
        // console.log('hello word');                  //função simp
        // }
        fala(){                                 
        console.log(`${this.nome} com ${this.idade} anos quer dar um oi...`); // this serve para referenciar o próprio objeto, inves de usar o pessoa.nome , o this substitue a pessoa
        },
        
        adicionarIdade(){ // função simples para adicionar 1 ano de idade quando for chamada
        this.idade++
        console.log(this.idade)
        }
};

pessoa.fala()
pessoa.adicionarIdade()

