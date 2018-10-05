function getPreco(imposto = 0, moeda = 'R$') {
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}


const produto = {
    nome: 'note',
    preco: 425,
    desc: 0.15,
    getPreco
}

global.preco = 20
global.desc = 0.1
console.log(getPreco())
console.log(produto.getPreco())
const carro = { preco: 222, desc: .2 }
console.log(getPreco.call(carro))
console.log(getPreco.apply(carro))
//Na função call eu passo os parâmetros dentro da função
console.log(getPreco.call(carro, 0.17, '$'))
//Na função apply eu passo os parametros dentro de um array
console.log(getPreco.apply(carro, [0.17, '$']))