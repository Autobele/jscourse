Array.prototype.filter2 = function(callback){
    const newArray = []
    for(let i = 0; i < this.length; i++){
        if(callback(this[i], i, this)){
            newArray.push(this[i])
        }
    }
    return newArray
}


const produtos = [
    {nome: 'Notebook', preco: 2400, fragil: true},
    {nome: 'iPad', preco: 5400, fragil: true},
    {nome: 'Copo de Vidro', preco: 15.80, fragil: true},
    {nome: 'Copo de Plástico', preco: 12.50, fragil: false}
]

const caro = produto => produto.preco >= 500
const fragil = produto => produto.fragil

console.log(caro(produtos[2]))

console.log(produtos.filter2(caro).filter2(fragil))
