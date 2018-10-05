const valor = 'Global'

function minha(){
    console.log(valor)
}

function exec(){
    const valor = 'Local'
    minha()
}
// Carrega o valor da variável do local onde o escopo onde ele foi definido
exec()