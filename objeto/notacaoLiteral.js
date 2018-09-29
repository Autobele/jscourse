const a = 1
const b = 2
const c = 3

const obj1 = {a, b, c}

console.log(obj1)

const nomeAttr = 'nota'
const valorAttr = 7.80

const obj2 = {[nomeAttr]: valorAttr}

console.log(obj2)

const obj3 = {}
obj3[nomeAttr] = valorAttr
console.log(obj3)

const obj4 = {
    fun1: function(){

    },
    fun2(){

    }
}
console.log(obj4)