function rand([min = 0, max = 99]){
    if(min > max) [min, max] = [max, min]
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

console.log(rand([10, 2]))
console.log(rand([, 10]))
console.log(rand([10]))
console.log(rand([]))
//console.log(rand())