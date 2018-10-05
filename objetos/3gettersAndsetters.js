const sequencia = {
    _valor: 1, //convencao
    get valor() {
        return this._valor++
    },
    set valor(valor) {
        this._valor = valor
    }
}
// o javascipt sabe que vc quer utilizar o get
console.log(sequencia.valor, sequencia.valor)
// O java script sabe que quer se utilizar o set
sequencia.valor = 1000
console.log(sequencia.valor)