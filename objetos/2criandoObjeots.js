//Notação Literal
const a = {
    nome: 'Teste',
    sobre: 'Novo'
}
a.nome = "mais"
console.log(a)

// Funções construtoras
function Produto(nome, preco, desc) {
    this.nome = nome
    this.preco = preco
    this.desc = desc
}
const b = new Produto('Renato')
console.log(b)

//Função factory
function Pessoa(nome, salario, faltas) {
    return {
        nome,
        salario,
        faltas,
        getSalario() {
            return salario * 32
        }
    }
}
const s1 = Pessoa('Renato', 20, 2)
console.log(s1.getSalario())

//Object create
const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha)

//Função famosa que retorna retorna Objeto

const fromJson = JSON.parse('{"info":"Teste Json"}')
console.log(fromJson)