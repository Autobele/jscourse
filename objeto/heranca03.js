const personagem = {
    nome: 'nome',
    level: 0,
    xp: 0,
    magias: {
        misseis: 'Misséis',
        arcadaDeGelo: 'Arcada de Gelo'
    }
}

const heroi = Object.create(personagem, {
    nome: {value: 'Autobele', writable: false, enumerable: true},
    level: {value: 1, writable: false, enumerable: true},
    xp: {value: 10, enumerable: true}
})

for(let key in heroi){
    heroi.hasOwnProperty(key) ? console.log(key) : console.log(`Por herança: ${key}`)
}