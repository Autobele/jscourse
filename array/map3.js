Array.prototype.map2 = function(callback){
    let newArray = []
    for(let i = 0; i < this.length; i++){
        newArray.push(callback(this[i], i, this))
    }
    return newArray
}

const carrinho = [
    '{"nome": "Borracha", "preco": 3.50}',
    '{"nome": "Caderno", "preco": 21.75}',
    '{"nome": "Kit de lapis", "preco": 7.50}'
]
/*
let listaDePrecos = carrinho.map(e => {
    return JSON.parse(e).preco
})*/

let toObject = e => JSON.parse(e)
let precoOnly = e => e.preco

let listaDePrecos = carrinho.map2(toObject).map2(precoOnly)

console.log(listaDePrecos)