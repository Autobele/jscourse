// Novo Recurso do ES2015 - Destructuring

const pessoa = {
    nome: 'Autobele',
    idade: 27,
    endereco: {
        logradouro: 'Quadra 29 Lote 04 Casa B',
        cep: '64027180'
    }
}

const {nome, idade} = pessoa
console.log(nome, idade)
console.log(pessoa)

const {nome: nomeDoCliente, idade: idadeDoCliente} = pessoa
console.log(nomeDoCliente, idadeDoCliente)

const {sobrenome, bemHumorada = true} = pessoa
console.log(sobrenome, bemHumorada)

const {endereco} = pessoa
console.log(endereco)

// Desconstruindo uma função dentro de outra função
const {endereco: {logradouro, cep}} = pessoa
console.log(`Endereço: ${logradouro} | CEP: ${cep}`)
