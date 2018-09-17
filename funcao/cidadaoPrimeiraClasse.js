// Função em JS é First-Class Object (Citizens)
//Higher-order function

//Criação de função de forma literal

function fun1(){}

//Armazenar função em uma variável
const fun2 = function (){}

//Armazenando função em um array
const array = [function (a, b){ return a + b}, fun1, fun2]
console.log(array[0](2, 2))

//Armazenando em um objeto
const obj = {}
obj.falar = function(){return 'Olá'}
console.log(obj.falar())

// Função como param
const fun3 = function(fun){
    return fun()
}
console.log(fun3(obj.falar))

//Função pode retornar/conter uma função
function somar(a, b){
    return function(c){
        console.log(a + b + c)
    }
}
somar(2, 5)(3)
const resultado = somar(2, 5)
resultado(10)