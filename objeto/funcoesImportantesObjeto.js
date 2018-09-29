//Funções Importantes de Object: keys, values, entries, freeze, assign, defineProperty
const pessoa = {
    nome: 'Ana',
    idade: 20,
    genero: 'feminino'
}

console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))

const p = Object.entries(pessoa)

p.forEach(([chave, valor]) => {
    return console.log(`${chave}: ${valor}`)
})

//defineProperty
const pessoa1 = {}
Object.defineProperty(pessoa1, 'nome', {
    enumerable: true,
    writable: false,
    value: 'Autobele'
})

console.log(pessoa1)

//assign
const dest = {a: 1}
const o1 = {b: 2}
const o2 = {a: 4, c: 3}

Object.assign(dest, o1, o2)
console.log(dest)
const endereco = {
    logradouro: 'Quadra 29 Lote 04 Casa B',
    cep: '64027180'
}

Object.assign(pessoa, endereco)
console.log(pessoa)
