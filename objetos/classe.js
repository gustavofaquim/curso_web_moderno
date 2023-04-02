


class Lancamento{
    constructor(nome='Generico', valor=0){
        this.nome = nome
        this.valor = valor
    }
}

class ClicoFinanceiro{
    constructor(mes,ano){
        this.mes = mes
        this.ano = ano
        this.lancamentos = []
    }

    addLancamentos(...lancamentos){ //Aceita parametros variaveis 
        lancamentos.forEach(l => this.lancamentos.push(l))
    }

    sumario(){
        let valorConsolidado = 0
        this.lancamentos.forEach(l =>{
            valorConsolidado += l.valor
        })
        return valorConsolidado
    }
}


const salario = new Lancamento('Salario', 3500)
const aluguel = new Lancamento('Aluguel', -1200)

const contas = new ClicoFinanceiro(6,2018)
contas.addLancamentos(salario,aluguel)
console.log(contas.sumario())
