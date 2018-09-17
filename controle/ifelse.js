function validacaoString(valor) {
    if(typeof valor === 'string'){
        throw new Error('O valor repassado é do tipo texto, favor inserir a nota corretamente.')
    }
}

const verificarAprovacao = function (nota) {
    validacaoString(nota)
    console.log(typeof nota)
    if (nota >= 7) {
        console.log('Aprovado!')
    } else {
        console.log('Reprovado!')
    }
}


verificarAprovacao(8.5)
verificarAprovacao(6)
verificarAprovacao('teste')