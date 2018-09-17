const fabricantes = ["Mercedes", "Lamborguini", "BMW"]

function listarFabricantes (nome, indice){
    console.log(`${indice + 1}: ${nome}`)
}

fabricantes.forEach(listarFabricantes)
fabricantes.forEach(fabricante => console.log(fabricante))
