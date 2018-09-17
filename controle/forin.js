let lista = [4.5, 6.3, 9.7, 2.6]


for(i in lista){
    console.log(`${i} = ${lista[i]}`)
}

const pessoa = {
    nome: 'Autobele',
    idade: 27,
    sexo: 'masculino'
}


for(atributo in pessoa){
    console.log(`${atributo} = ${pessoa[atributo]}`)
}
