function criarPessoa(nome, idade){
    return {
        nome,
        idade,
        falar(){
            console.log(`${this.nome} tem ${this.idade} anos`)
        }
    }
}
const p = criarPessoa('Autobele', 27)
p.falar()

const factoryPessoa = nome => {
    return {
        falar(){
            console.log(`${nome}`)
        }
    }
}

const p2 = factoryPessoa('Autobele')
p2.falar()