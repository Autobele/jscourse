Number.prototype.entre = function(inicio, fim){
    return this >= inicio && this <= fim
} 

const imprimirResultado = function(nota){
    if(nota.entre(9, 10)){
        console.log('Honra Mérito Aluno! Adicionado ao Quadro')
    } else if(nota.entre(7, 8)){
        console.log('Parabéns você conseguiu estar entre os melhores!')
    } else if(nota.entre(4, 6)){
        console.log('Se esforce mais próximo ano!')
    } else if(nota.entre(1, 5)){
        console.log('Seu ano foi ruim, preste mais atenção as aulas.')
    }
}

imprimirResultado(9.5)
imprimirResultado(7.1)
imprimirResultado(1.5)
imprimirResultado(5)