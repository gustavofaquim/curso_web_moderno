

function soma(){
    let soma = 0
    for(i in arguments){ // arguments tem todos os argumentos que foram passados
        soma += arguments[i] 
    }
    return soma
}


console.log(soma())
console.log(soma(1,2,3))
console.log(soma(1,2,' Teste'))
console.log(soma('Olá,',' Teste'))