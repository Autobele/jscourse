const prod1 = {}
prod1.nome = 'Notebook Dell'
prod1.preco = 1.500
prod1['Desconto Legal'] = 0.40 //Evitar atributos com espaço

console.log(prod1)

const prod2 = {
    nome: 'Camisa Polo',
    valor: 79.90,
}

prod2.cor = 'preto'
console.log(prod2)

'{"nome": "Autobele", "preço": 79.30}'