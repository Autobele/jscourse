let valor // não inicializada

console.log(valor)

valor = null // ausência de valor
console.log(valor)
//console.log(valor.toString()) // Apresenta error

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.50

console.log(produto.preco.toFixed(2))
console.log(produto.preco.a)

produto.preco = undefined
console.log(produto)