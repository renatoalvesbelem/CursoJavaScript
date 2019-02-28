//não aceita repetição e não é indexado
const times = new Set();
times.add('Vasco')
times.add('Sao Paulo').add('Palmeiras').add('Corintians')
times.add('Vasco')

console.log(times)
console.log(times.size)
console.log(times.has('Vasco'))
console.log(times.delete('Vasco'))

const nomes = ['raq','luc','jul','luc']
const nomesSet = new Set(nomes)
console.log(nomesSet)