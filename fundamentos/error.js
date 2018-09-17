function lancarExececao(error){
    throw {
        nome: error.name,
        msg: error.mensagem,
        date: new Date
    }
}

function imprimirGrito(obj){
    try{
        console.log(`${obj.name.toUpperCase()}!!`)
    } catch(e){
        lancarExececao(e)
        console.log(e)
    } finally {
        console.log('Final!')
    }
}

const obj = {nme: 'Autobele', idade: 27}
imprimirGrito(obj)