//Funcao sem retorno
function imprimirSoma(valor1, valor2){
    console.log(valor1 + valor2)
}

imprimirSoma(10, 4)
imprimirSoma(2)
imprimirSoma(2, 3, 4, 5, 6)
imprimirSoma()

function soma(valor1, valor2 = 0){
    return valor1 + valor2
}

let resultado = soma(10, 2)
console.log(resultado)
