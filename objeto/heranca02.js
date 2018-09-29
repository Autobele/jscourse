const avo = {attr0: 'A'}
const pai = {__proto__: avo, atrr1: 'B'}
const filho = {__proto__: pai, attr2: 'C'}

console.log(filho.attr0)

const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta){
        if(this.velAtual + delta <= this.velMax){
            this.velAtual += delta
        } else {
            this.velAtual = this.velMax
        }
    },
    status(){
        return `${this.velAtual}Km/h de ${this.velMax}Km/h`
    }
}

const ferrari = {
    modelo: 'F40',
    velMax: 350
}

const volvo = {
    modelo: 'volvo',
    velMax: 250,
    status(){
        return `${this.modelo}: ${super.status()}`
    }
}

Object.setPrototypeOf(ferrari, carro)
ferrari.acelerarMais(200)
console.log(ferrari.status())

Object.setPrototypeOf(volvo, carro)
volvo.acelerarMais(300)
console.log(volvo.status())
console.log(volvo.velMax)


const fusca = {
    modelo: 'fusca'
}

Object.setPrototypeOf(fusca, carro)
console.log(fusca.status())