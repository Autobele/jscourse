const fabricantes = ["Mercedes", "Lamborguini", "BMW"]

function listarFabricantes (nome, indice){
    console.log(`${indice + 1}: ${nome}`)
}

fabricantesSorted = fabricantes.sort()

fabricantesSorted.forEach(listarFabricantes)
fabricantesSorted.forEach(fabricante => console.log(fabricante))
