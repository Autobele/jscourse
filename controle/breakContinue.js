const lista = [1, 2, 3, 4, 6, 7, 9, 0, 5, 1]

/*for(i in lista){
    if(i == 5) break
    console.log(`${lista[i]}`)
}

for(x in lista){
    if(x == 5) continue
    console.log(`${lista[x]}`)
}*/

externo: for(x in lista){
    for(y in lista){
        if(x == 2 && y == 1) break externo
        console.log(`Par = ${x}, ${y}`)
    }
}