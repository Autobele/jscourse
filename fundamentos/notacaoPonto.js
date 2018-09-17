console.log(Math.ceil(6.19))
console.log(Math.sqrt(16))

const obj = {}
obj['prop'] = 'propriedade'

console.log(obj['prop'])

function Obj(nome){
    this.nome = nome
    this.exec = function(){
        console.log('Exec...')
    }
}

const obj2 = new Obj('Autobele')
const obj3 = new Obj('Dell Inspirion')

console.log(obj2.nome)
console.log(obj3.nome)
obj2.exec()

