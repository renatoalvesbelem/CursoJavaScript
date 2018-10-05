function Meu() {
    console.log(Meu.prototype)
}

//Todos os objetos criados a partir de uma mesma função contrutora apontam para um mesmo protótipo, a partir do atributo __proto__
const obj1 = new Meu()
const obj2 = new Meu()
console.log(obj1.__proto__ === obj2.__proto__)
console.log(Meu.prototype === obj2.__proto__)

Meu.prototype.nome = 'Anonimo'
Meu.prototype.falar = function () {
    console.log(`Bom dia ${this.nome}`)
}
obj1.falar()
obj2.nome = 'R'
obj1.falar()
obj2.falar()

//Mudando a referencia do __proto__ de um objeto
const obj3 = {}
obj3.__proto__ = Meu.prototype
obj3.nome = 'L'
obj3.falar()

//Resumindo
console.log((new Meu).__proto__ === Meu.prototype)
console.log(Meu.__proto__ === Function.prototype)
console.log(Object.prototype.__proto__ === null)