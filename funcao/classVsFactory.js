//Criando Pessoa com Função Construtora

function criarPessoa(nome){
    return {
        nome,
        falar(){
            console.log(`Meu nome é ${this.nome}`)
        }
    }
}

const autobele = criarPessoa('Autobele')
autobele.falar()

class Pessoa{
    constructor(nome){
        this.nome = nome
    }
    falar(){
        console.log(`Meu nome é ${this.nome}`)
    }
}

const factoryPessoa = nome => {
    return {
        falar: () => {console.log(`Meu nome é ${nome}`)}
    }
}

const wiliany = factoryPessoa('Wiliany')
wiliany.falar()

