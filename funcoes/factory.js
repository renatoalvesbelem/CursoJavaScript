//Factory - funçção que retorna um objeto

function criarPessoa() {
    return {
        nome: 'Teste',
        sobrenome: 'Testando'
    }
}

function criarProduto(preco, nome) {
    return {
        preco: preco,
        nome: nome
    }
}

const pessoa = criarPessoa()
pessoa.nome = 'Novo'
console.log(pessoa)

const p1 = criarProduto(10, 'Sabão')
const p2 = criarProduto(20, 'Limão')
console.log(p1, p2)