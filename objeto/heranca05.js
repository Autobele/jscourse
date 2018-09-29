console.log(typeof Array)
console.log(typeof String)
console.log(typeof Object)

String.prototype.reverse = function(){
    return this.split('').reverse().join('')
}

Array.prototype.first = function(){
    return this[0]
}

console.log([1, 2, 3, 4].first())
console.log(['a', 'b', 'c'].first())


//NÃO FAÇA ISSO! 
String.prototype.toString = function(){
    return 'Lascou tudo'
}

console.log('Autobele'.reverse())