let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

console.log('Verdadeiros')
console.log(!!3)
console.log(!!'a')
console.log(!!-1)
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))

console.log('Falsos')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!undefined)
console.log(!!NaN)
console.log(!!(isAtivo = false))

console.log('para finalizar...')
console.log(''|| null || 0 || 'epa')
