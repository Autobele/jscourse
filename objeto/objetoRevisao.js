//coleção de chave: valor

const produto = new Object
produto.nome = 'Notebook'
produto['descrição'] = 'Dell'
produto.preco = 200

console.log(produto)
delete produto.preco
console.log(produto)

const carro = {
    modelo: 'A4',
    valor: 89000,
    proprietario: {
        nome: 'Autobele',
        idade: 27,
        endereco: {
            logradouro: 'Quadra 29 Lote 04',
            casa: 'B'
        }
    },
    condutores: [{
        nome: 'Junior',
        idade: 18
    },{
        nome: 'Ana',
        idade: 42
    }]

}
console.log(carro.condutores[0])
console.log(carro.condutores[1])