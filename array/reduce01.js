const alunos = [
    {nome: 'Autobele', nota: 7.3, bolsista: true},
    {nome: 'Wiliany', nota: 8.9, bolsista: true},
    {nome: 'Romário', nota: 8.5, bolsista: false},
    {nome: 'Rômulo', nota: 6.0, bolsista: false}
]

const resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual){
    console.log(acumulador, atual)
    return acumulador += atual
}, 0)

console.log(resultado)