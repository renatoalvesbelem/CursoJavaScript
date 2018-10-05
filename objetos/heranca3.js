const pai = { nome: 'Pedro', cor: 'preto' ,idade:15}
//Criando um ojject como protótipo o objeto pai
const filho1 = Object.create(pai)
filho1.nome = 'Ana'
console.log(filho1.nome)


//Crio um objeto ainda editando a forma das variaveis dele
const filho2 = Object.create(pai, {
    nome: {
        value: 'Bia',
        writable: false,
        enumerable: false
    },
    cor: {
        value: 'branco',
        writable: false,
        enumerable: true
    }
})
console.log(Object.keys(filho1))
console.log(Object.keys(filho2))

//Saber se um atributo que veio por herança. E quais são do proprio objeto
for(let key in filho2){
    filho2.hasOwnProperty(key)?
    console.log(key):console.log(`Veio por herança ${key}`)
}