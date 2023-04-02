

// Armazenando uma funcao em uma variavel

const impprimirSoma = function(a,b){
    console.log(a+b)
}

impprimirSoma(2,3)

// Armazenando uma funcao arrow em uma variavel

const soma = (a , b) => {
    return a + b
}

console.log(soma(2,3))

// retorno implícito 

const subtracao = (a,b) => a-b  // Só funciona com reotrno assim quando só tem uma linha

console.log(subtracao(3,2))

 