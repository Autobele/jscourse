let obj = new Object
console.log(obj)

obj.name = 'Autobele'
obj.idade = 27

console.log(obj)


function criarObjeto(nome, salarioBase, faltas){
    return {
        nome,
        salarioBase,
        faltas,
        beneficios: ['Auxilio Creche', 'Ticket', 'Vale Transporte'],
        getSalario(){
            let valorDaDiaria = salarioBase/30
            let diasTrabalhados = 30 - faltas
            return  valorDaDiaria * diasTrabalhados
        }
    }
}

let funcionario1 = criarObjeto('Autobele', 1500, 3)
console.log(funcionario1.getSalario())
console.log(funcionario1, funcionario1.getSalario())

//Object.create
let pessoa1 = Object.create(null)
pessoa1.nome = 'Autobele Silva'
pessoa1.endereco = 'Quadra 29 Lote 04 Casa B'
pessoa1.cep = '64027180'
console.log(pessoa1)

//Uma famosa função que retorna Object.
const fromJSON = JSON.parse('{"info": "Sou um JSON"}')
console.log(fromJSON.info)