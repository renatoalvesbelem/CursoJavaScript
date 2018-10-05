const pessoa = {
    nome: 'Renato',
    idade: 3,
    peso: 2
}

console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))
Object.entries(pessoa).forEach(element => {
    console.log(`${element[0]} ${element[1]}`)
});

//Utilizando destructuring
Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave} ${valor}`)
});

Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true,
    writable: false,
    value: '01/01/2019'
})

pessoa.dataNascimento = '02/02/2018'
console.log(pessoa.dataNascimento)

console.log(Object.keys(pessoa))

//Object.assign -- Concatena os atributos nos objetos

const dest = { a: 1 }
const o1 = { b: 2 }
const o3 = { c: 3, a: 4 }
const obj = Object.assign(dest, o1, o3)
console.log(dest)

//Congela o objeto, não alterando o valor das variáveis
Object.freeze(obj)
obj.c = 123
console.log(obj)