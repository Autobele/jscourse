global.c = 123
this.a = 1010

this.d = 'D'
this.e = false

console.log(module.exports.a)
console.log(global.c)
console.log(module.exports == this)
console.log(module.exports)

// Code smell - Não crie variáveis
abc = 12301
console.log(global.abc)