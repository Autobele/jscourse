const alunos = [
    {nome: 'Autobele', nota: 10},
    {nome: 'Wiliany', nota: 10}
]

let total = 0
for(let i = 0; i < alunos.length; i++){
    console.log(alunos[i])
    total += alunos[i].nota
}
console.log(total)

const getNotas = aluno => aluno.nota
const soma = (total, atual) => total + atual

const resultado = alunos.map(getNotas).reduce(soma)

console.log(resultado)