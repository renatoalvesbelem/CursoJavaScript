// Json não pode armazenar funcoes, somente dados. É um formato de dados
const obj = { a: 1, b: 3, c: 3, soma() { return a + b + c } }
console.log(JSON.stringify(obj))
// Convertendo de uma string para Json
console.log(JSON.parse('{"a":1,"b":3,"c":3}'))