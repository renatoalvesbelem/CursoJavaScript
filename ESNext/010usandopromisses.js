// com promisse

const http = require('http')

const getTurma = letra => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    return new Promise((resolv, reject) => {
        http.get(url, res => {
            let resultado = ''
            res.on('data', dados => {
                resultado += dados
            })
            res.on('end', () => {
                try {
                    resolv(JSON.parse(resultado))
                }
                catch (e) {
                    reject(e)
                }
            })
        })
    })
}


Promise.all([getTurma('A'),getTurma('B'),getTurma('C')])
.then(turmas => [].concat(...turmas))
.then(alunos => alunos.map(alunos => alunos.nome))
.then(nomes => console.log(nomes))

getTurma('B').catch(e => console.log(e.message))