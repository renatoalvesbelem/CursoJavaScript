function Aula(nome, video) {
    this.nome = nome
    this.video = video
}

const aula1 = new Aula('Bom dia', 123)
const aula2 = new Aula('Bom video', 456)
console.log(aula1, aula2)

//Simulando o new
function novo(f, ...params) {
    //é criado um objeto
    const obj = {}
    //é associado o protótipo do objeto ao parâmetro prototipe do objeto passado
    obj.__proto__ = f.prototype
    //é aplicado os parametros passados ao novo objeto
    f.apply(obj, params)
    return obj
}

const aula3 = novo(Aula, 'Olá', 789)
const aula4 = novo(Aula, 'Até', 987)

console.log(aula3, aula4)
