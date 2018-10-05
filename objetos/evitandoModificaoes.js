//Previni que o objeto seja extendido, posso excluir mas não aumentar
const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 88, tag: 'promocao'
})
console.log(Object.isExtensible(produto))
produto.nome = 'Borracha'
produto.descricao = 'Escolar Branca'
delete produto.tag
console.log(produto)

//Não consegue adicionar ou excluir, mas consegue modificar
const pessoa = { nome: 'Julg', idade: 35 }
Object.seal(pessoa)
console.log('Selado', Object.isSealed(pessoa))
pessoa.sobrenome = 'Teste'
delete pessoa.nome
pessoa.idade = 29
console.log(pessoa)

//Freeze Selado + valores constantes,