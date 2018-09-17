// Armazenando uma função em uma variável

const imprimirSoma = function(valor1= 0, valor2 =0){
    return valor1 + valor2
}

// Armazenando uma função arrow

const soma = (valor1, valor2 = 0) => valor1 + valor2

console.log(imprimirSoma(10, 3))
console.log(soma(10, 2))