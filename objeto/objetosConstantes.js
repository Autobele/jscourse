const pessoa = {nome: 'Pedro'}
pessoa.nome = 'Joao'
console.log(pessoa.nome)

//Não é possível modificar o espaço da memoria dessa forma: 
//pessoa = {nome: 'Juliana'}

//Criando um Objeto realmente Constante

const funcionario1 = Object.freeze({nome: 'Autobele Silva', salarioBase: 1600, faltas: 0})
funcionario1.nome = 'Silva'
console.log(funcionario1)
