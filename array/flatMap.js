const escola = [{
    nome: 'Turma M1',
    alunos: [{
        nome: 'Gustavo',
        nota: 10
    },{
        nome: 'Ricardo',
        nota: 9.9
    }]
},{
    nome: 'Turma M2',
    alunos: [{
        nome: 'Luana',
        nota: 10
    },{
        nome: 'Leidiane',
        nota: 8.5
    }]
}]

const getNotasDoAluno = aluno => aluno.nota
const getNotasDaTurma = turma => turma.alunos.map(getNotasDoAluno)

const notas1 = escola.map(getNotasDaTurma)
console.log(notas1)


Array.prototype.flatMap = function(callback){
    return Array.prototype.concat.apply([], this.map(callback))
}

const notas2 = escola.flatMap(getNotasDaTurma)
console.log(notas2)