function numeroAleatorio(max, min){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let count = 0

while(count != -1){
    count = numeroAleatorio(-1, 10)
    console.log(`Opção escolhida: ${count}`)
}

console.log('Fim da instrução')