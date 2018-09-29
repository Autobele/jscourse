const lutadores = ['Anderson Silva', 'Marreta', 'Sonnen', 'Connor']

lutadores.forEach(function(value, index){
    console.log(`${index+1}) ${value}`)
})

lutadores.forEach((v, i) => console.log(`${i+1}) ${v}`))


const exibirLutadores = l => console.log(l)

lutadores.forEach(exibirLutadores)