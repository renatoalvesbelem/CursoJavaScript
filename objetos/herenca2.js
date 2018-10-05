console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)

//É possível adicionar métodos não existentes via prototype
String.prototype.reverse = function () {
    return this.split('').reverse().join('')
}
console.log('Renato'.reverse())