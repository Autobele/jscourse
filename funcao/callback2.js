const notas = [1.5, 5.5, 9.0, 4.0, 8.50, 7.1] 

let notasBaixas1 = []

for(i in notas){
    if(notas[i] < 7){
        notasBaixas1.push(notas[i])
    }
}

console.log(notasBaixas1)

const notasBaixas2 = notas.filter(function(nota){
    return nota < 7
})

console.log(notasBaixas2)

const notasAbaixoDaMedia = nota => nota < 7

const notasBaixas3 = notas.filter(notasAbaixoDaMedia)

console.log(notasBaixas3)