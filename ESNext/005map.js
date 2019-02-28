const tecnologia = new Map()
tecnologia.set('react', { framework: false })
tecnologia.set('angular', { framework: true })
console.log(tecnologia.get("react").framework)


const chavesVaridas = new Map([
    [function () { }, 'funcao'],
    [{}, 'Objeto '],
    [123, 'numero'],
])

chavesVaridas.forEach((vl,ch)=>{
    console.log(ch,vl)
})

console.log(chavesVaridas.has(123))
console.log(chavesVaridas.delete(123))
console.log(chavesVaridas.size);
