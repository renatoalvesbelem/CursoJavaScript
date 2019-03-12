for (let letra of 'reanto') {
    console.log(letra)
}

const assuntosEcma = ['map', 'set', 'promisses']

for (let i in assuntosEcma) {
    console.log(i)
}

for (let i of assuntosEcma) {
    console.log(i)
}

const assuntosMap = new Map([
    ['map', { abordado: true }],
    ['set', { abordado: true }],
    ['promisse', { abordado: false }],
])

for (let i of assuntosMap) {
    console.log(i)
}

for (let i of assuntosMap.keys()) {
    console.log(i)
}

for (let i of assuntosMap.values()) {
    console.log(i)
}

for (let [ch, vl] of assuntosMap.entries()) {
    console.log(ch, vl)
}

 const s = new Set(['a','b','c'])

for(let i of s){
    console.log(i)
}