class Lancamento {
    //É a função chamada quando esta função é instanciada, usando a função new
    constructor(nome = 'Genérico', valor = 0) {
        this.nome = nome
        this.valor = valor
    }

}

class CicloFinanceiro {
    constructor(mes, ano) {
        this.mes = mes
        this.ano = ano
        this.lancamentos = []
    }
    addLancamentos(...lancamentos) {
        lancamentos.forEach(l => this.lancamentos.push(l))
    }
    sumario() {
        let valorConsolidado = 0
        this.lancamentos.forEach(l => {
            valorConsolidado += l.valor
        })
        return valorConsolidado
    }
}


const salario = new Lancamento('salario',4500)
const contaDeLux = new Lancamento('Luz', -220)

const contas = new CicloFinanceiro(6,2018)
contas.addLancamentos(salario,contaDeLux)
console.log(contas.sumario())