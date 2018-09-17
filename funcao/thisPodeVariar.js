const obj = {
    prop1: 'propriedade 1',
    prop2: function(){
        let soma = 0
        for(i in arguments){
            soma += arguments[i]
        }
        return soma
    }
}

console.log(obj.prop1)
console.log(obj.prop2(1,2,3))
console.log(obj.prop3(1,2,3))