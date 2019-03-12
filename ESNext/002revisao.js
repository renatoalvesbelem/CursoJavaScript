//usar spread com objeto

const funcionario = { nome: "renato", salario: 123 }
const clone = { ativo: true, ...funcionario }

console.log(clone)

//contexto de array

const grupoA = ['a','b','c']
const grupoB = [...grupoA,'d','e']
console.log(grupoB)