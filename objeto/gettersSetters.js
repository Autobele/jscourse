const pessoa = {
    _idade: 0,
    get idade(){
        return this._idade
    },
    fazerAniversario(){
        this._idade++
    },
    set idade(idade){
        if(idade > this._idade){
            this._idade = idade
        }
    }
}

console.log(pessoa.idade)
pessoa.fazerAniversario()
console.log(pessoa.idade)
pessoa.idade = 10
console.log(pessoa.idade)