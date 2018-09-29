//Função Factory com Parâmetros Personalizados

function criarProduto(nome, preco){
    return {
        nome,
        preco,
        desconto: 0.1
    }
}

console.log(criarProduto('Dell Inspiron', 1.2500))
console.log(criarProduto('Mac', 4.900))