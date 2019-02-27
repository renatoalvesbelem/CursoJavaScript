const fs = require('fs');

const produto = {
    nome: 'Celular',
    preco: 129.3,
    desconto: 15
}

fs.writeFile(__dirname + '/arquivoGerado.json', JSON.stringify(produto), err => {
    console.log(err || 'Arquivo Salvo!')
})