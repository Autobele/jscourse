const alunos = [
    {nome: 'Autobele', nota: 7.3, bolsista: false},
    {nome: 'Wiliany', nota: 8.9, bolsista: false},
    {nome: 'Romário', nota: 8.5, bolsista: false},
    {nome: 'Rômulo', nota: 6.0, bolsista: true}
]


//Desafio 1: Todos os alunos são bolsista?

const onlyBolsista = (acumulador, atual) => acumulador && atual
const resultado = alunos.map(a => a.bolsista).reduce(onlyBolsista)

console.log(`Todos os alunos são bolsista? ${resultado}`)


//Desafio 2: Tem algum aluno bolsista?

const atLeast = (acumulador, atual) => acumulador || atual
const least = alunos.map(a => a.bolsista).reduce(atLeast)

console.log(`Tem algum aluno bolsista? ${least}`)
