const notas = [7, 5, 6, 8, 3, 1, 9]
// sem uso do callback
let notasbaixas = []
for (let i in notas) {
    if (notas[i] < 7) {
        notasbaixas.push(notas[i])
    }
}
console.log(notasbaixas)

//Usanodo callback
let notasbaixasCall = notas.filter((nota) => nota < 7)
console.log(notasbaixasCall)