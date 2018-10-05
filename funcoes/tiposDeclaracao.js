// function declaration. Vantagem é poder usar antes de ser declarada
console.log(soma(2,3))
function soma(a, b) {
    return a + b
}

//function expression. Não pode ser usada antes de ser declarada
//console.log(sub())
let sub = function (x, y) {
    return x - y
}

//named function expression. Não pode ser usada antes de ser declarada
const mult = function mult(a, b) {
    return a * b
}