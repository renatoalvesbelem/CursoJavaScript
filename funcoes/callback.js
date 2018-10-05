//callback chama uma função assim que ela é passada

const fabricantes = ['Mercedes', 'Audi']

function imprimir(nom, indice) {
    console.log(`${indice + 1},${nom}`)
}

fabricantes.forEach(imprimir)

fabricantes.forEach(fabricantes => console.log(fabricantes))