const valores = ['Autobele', 25, 76.5, 1.65]
console.log(valores.length)
console.log(valores.indexOf(25))
console.log(valores.toString())
console.log(valores[10] || 'Desconhecido')

valores[4] = 10
console.log(valores)

valores.push({id: 3}, false, true, Object)
console.log(valores)

console.log(valores.pop())
console.log(valores)

delete valores[3]
console.log(valores)

console.log(typeof valores)
console.log(!!valores)