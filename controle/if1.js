function soNoticiaBoa(nota){
    if(nota >= 7){
        console.log('Aprovado com nota ' + 7)
    }
}

soNoticiaBoa(8.1)
soNoticiaBoa(6.1)

function soFaloAVerdade(valor){
    if(valor){
        console.log('É verdade... ' + valor)
    }
}

soFaloAVerdade({})
soFaloAVerdade(0)