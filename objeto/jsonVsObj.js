const obj = {a: 1, b: 2, c: 3, soma(){return a + b + c}}
console.log(JSON.stringify(obj))

const obj2 = {a: 1, b: 2, c: 3}
const jsonObj = JSON.parse('{"a": 1, "b": 2, "c": 3}')
console.log(jsonObj)

const json2 = '{"nome": "Autobele"}'

const obj3 = JSON.parse(json2)