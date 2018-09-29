class Lancamento {
    constructor(nome = 'Genérico', valor = 0){
        this.nome = nome
        this.valor = valor
    }
}

class CicloFinanceiro {
    constructor(mes, ano){
        this.mes = mes
        this.ano = ano
        this.lancamento = []
    }

    addLancamento(...lancamento){
        lancamento.forEach(l => this.lancamento.push(l))
    }

    sumario(){
        let valorConsolidado = 0
        this.lancamento.forEach(l => {
            valorConsolidado += l.valor
        })
        return valorConsolidado
    }
    relatorio(){
        this.lancamento.forEach(l => console.log(`${l.nome}: ${l.valor}`))
    }
}

const salario = new Lancamento('Salário', 1200)
const debito = new Lancamento('Conta de Luz', -300)
const debito2 = new Lancamento('Conta de Água', -400)
const debito3 = new Lancamento('Internet', -99)
const debito4 = new Lancamento('Pagamento', 200)
const contas = new CicloFinanceiro(6, 2018)
contas.addLancamento(salario, debito, debito2, debito3, debito4)
console.log(contas.sumario())
contas.relatorio()

const salario9 = new Lancamento('Salário 09/2018', 1380)
const internet = new Lancamento('Internet', -99)
const conta9 = new CicloFinanceiro(9, 2018)

conta9.addLancamento(salario9, internet)
console.log(conta9.sumario())