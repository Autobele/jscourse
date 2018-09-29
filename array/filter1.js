const produtos = [
    {nome: 'Notebook', preco: 2400, fragil: true},
    {nome: 'iPad', preco: 5400, fragil: true},
    {nome: 'Copo de Vidro', preco: 15.80, fragil: true},
    {nome: 'Copo de Plástico', preco: 12.50, fragil: false}
]

const caro = produto => produto.preco < 20
const fragil = produto => produto.fragil

console.log(produtos.filter(caro).filter(fragil))

