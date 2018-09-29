// Shift , Unshift, Pop, Push, Splice, Slice
const linguagem = ['PHP', 'Python', 'Java', 'JS', 'GoLang']
console.log(linguagem)

linguagem.pop()
console.log(linguagem)

linguagem.shift()
console.log(linguagem)

linguagem.unshift('PHP')
console.log(linguagem)

linguagem.splice(2, 0, 'Ruby', 'C++', 'C#')
console.log(linguagem)

const linguagens2 = linguagem.slice(3, 5)
console.log(linguagens2)