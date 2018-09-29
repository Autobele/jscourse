function getPreco(imposto = 0, moeda = 'R$'){
    return `${moeda} ${this.preco * (1 - this.desc) * (1+imposto)}`
}

const produto = {
    nome: 'Notebook',
    preco: 4589,
    desc: 0.15,
    getPreco
}   

global.preco = 20
global.desc = 0.1

console.log(getPreco())
console.log(produto.getPreco())

const carro = {preco: 100, desc: 0.1}
console.log(getPreco.call(carro))
const carro2 = {preco: 150, desc: 0.5}
console.log(getPreco.call(carro, 0.17, '$'))
console.log(getPreco.apply(carro2, [0.7, '$']))