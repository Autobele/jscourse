//Map não transforma Array atual

const numbs = [1, 2, 3, 4, 5]

let num1 = numbs.map(l => l *2)

console.log(num1)

const soma10 = e => e + 10
const mult10 = e => e * 10
const toReal = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`

let num2 = numbs.map(soma10)
let num3 = numbs.map(mult10)
let paraDinheiro = numbs.map(toReal)
console.log(num2, num3, paraDinheiro)