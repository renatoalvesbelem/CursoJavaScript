//Classe
class Pessoa {
    constructor(nome) {
        this.nome = nome
    }
    falar() {
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa('Renato')
p1.falar()

//Factory
//Função factory não tem problema do mudança do this, este problema vai aparecer nos browsers
const pessoa = nome => {
    return {
        falar: () => console.log(`Meu nome é ${nome}`)
    }
}
const p2 = pessoa('João')
p2.falar()

//Função construtora
function PessoaConstrutora(nome) {
    this.falar = () => console.log(nome)
}
const pessoaConstrutora = new PessoaConstrutora('Teste Renato')
pessoaConstrutora.falar()