function Carro (velocidadeMaxima = 200, aceleracao = 5){
    let velocidadeAtual = 0
    this.acelerar = function(){
        if(velocidadeAtual + aceleracao <= velocidadeMaxima){
            velocidadeAtual += aceleracao
        } else {
            velocidadeAtual = velocidadeMaxima
        }
    }

    this.getVelocidadeAtual = function(){
        return velocidadeAtual
    }
    this.especiticacoesCarro = function(){
        return `Velocidade Máxima: ${velocidadeMaxima} | Aceleração ${aceleracao}`
    }
}


let ferrari = new Carro()
ferrari.acelerar()
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual())
console.log(ferrari.especiticacoesCarro())

let uno = new Carro(350, 20)
uno.acelerar()
uno.acelerar()
uno.acelerar()
uno.acelerar()
console.log(uno.getVelocidadeAtual())
console.log(uno.especiticacoesCarro())