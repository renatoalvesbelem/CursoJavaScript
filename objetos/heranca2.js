//Cadeia de protótipos (prototype chain)
const avo = { attr1: 'A' }
const pai = {
    __proto__: avo,
    attr2: 'B',
    attr3: 'D'
}
const filho = {
    __proto__: pai,
    attr3: 'C'
}

console.log(filho)
console.log(filho.attr1)
console.log(filho.attr3)
console.log(pai.attr3)

// Nenhum das funcoes possuem a variável, nem o object
console.log(filho.attr0)
// Agora eu defini um nova variável no prototype do object, sendo assim a variável será achada em object
Object.prototype.attr0 = 3 // Não faça sem um objetivo claro
console.log(filho.attr0)


//Forma diferente de prototipar um objeto
const carro = {
    velAtual: 0,
    velMax: 200,
    acelerar(delta) {
        if (this.velAtual + delta <= this.velMax) {
            this.velAtual += delta
        }
        else {
            this.velAtual = this.velMax
        }
    },
    status() {
        return this.velAtual
    }
}

const ferrari = {
    modelo: 'ferrari',
    velMax: 324//shadowing
}

const volvo = {
    modelo: 'v40',
    status() {
        return `modelo: ${this.modelo}  velocidade: ${super.status()}`
    }
}

Object.setPrototypeOf(ferrari, carro)
ferrari.acelerar(300)
console.log(ferrari.status())
Object.setPrototypeOf(volvo, carro)
console.log(volvo.status())