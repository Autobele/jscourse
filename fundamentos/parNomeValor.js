// PAR - CHAVE/VALOR
// Contexto léxico 1

const saudacao = 'Opa!'

//Contexto léxico 2

function exec(){
    const saudacao = 'Eaeee'
    return saudacao;
}

// Objeto são grupos de aninhados de chave/valor

const cliente = {
    nome: 'Autobele',
    idade: 27,
    endereco: {
        logradouro: 'Quadra 29 Lote 04 Casa B',
        numero: 29
    }
}


console.log(saudacao)
console.log(exec())
console.log(cliente)