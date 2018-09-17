function comprar(trabalho1, trabalho2){
    const comprarSorvete = (trabalho1 || trabalho2) ? 'Compro sorvete' : 'Não compro sorvete'
    const tv32Polegadas = (trabalho1 != trabalho2) ? 'Compro TV 32 Polegadas' : 'Não compro TV 32'
    const tv50Polegadas = (trabalho1 && trabalho2) ? 'Compro TV 50 Polegadas' : 'Não compro TV 50'
    const manterSaudavel = !comprarSorvete
    return {comprarSorvete, tv32Polegadas, tv50Polegadas, manterSaudavel}
}

console.log(comprar(true, true))
console.log(comprar(true, false))
console.log(comprar(false, false))