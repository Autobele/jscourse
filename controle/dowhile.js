function numeroAleatorio(max, min){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let count = 0

do{
    count = numeroAleatorio(-1, 10)
    console.log(`Opção escolhida: ${count}`)
}while(count != -1)

console.log('Fim da instrução')