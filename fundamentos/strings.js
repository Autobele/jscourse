const escola = 'Cod3r'

console.log(escola.charAt(4))
console.log(escola.charCodeAt(3))
console.log(escola.indexOf('r'))
console.log(escola.substring(0, 3))
console.log("Escola ".concat(escola).concat("!"))
console.log(escola.replace(3, 'e'))

console.log('Joao, Maria, Pedro'.split(','))
console.log(escola.replace(/\w/, 'e'))