//atributo protorype, está somente disponível no Object prototype
const ferrari = {
    modelo: 'F40',
    veloMax: 324
}

const volvo = {
    modelo: 'v40',
    veloMax: 125
}
//Imprime o protótipo do objeto
console.log(ferrari.__proto__)
console.log(ferrari.__proto__ === Object.prototype)
console.log(volvo.__proto__ === Object.prototype)
//Objetos não possuem a proriedade prototype, somente Object
console.log(Object.prototype, ferrari.prototype)

//Object não possui um prototype. O __proto__ aponta para null
console.log(Object.prototype.__proto__)
console.log(Object.prototype.__proto__ === null)

function Meu(){}
console.log(typeof Object, typeof Meu)

console.log(Object.prototype,Meu.prototype)