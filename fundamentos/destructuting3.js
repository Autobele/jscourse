function ataque({min = 0, max = 20}){
    const resultado = Math.random() * (max - min) + min
    return Math.floor(resultado)
}

const obj = {min: 12, max: 18}

console.log(ataque(obj))


// Testando Array
const [a] = [10]

const arr = [10, 6]

const [n1, n2] = [arr[0], arr[1]]
console.log(a)
console.log(n1, n2)

// null e undefined não podem ser descontruidos