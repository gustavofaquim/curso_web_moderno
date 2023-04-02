


const imprimirResultado = function(nota){
    switch(Math.floor(nota)){ //Arredondoado para baixo
        case 10:
        case 9:
                console.log('Quadro de Honra') // Executa se o valor for 9 ou 10
                break
        case 8: case 7:
                console.log('Aprovado') // Executa se o valor for 7 ou 8
                break
        case 6: case 5:
                console.log('Aprovado') // Executa se o valor for 7 ou 8
                break
        case 4: case 3: case 1: case 0:
                console.log('Reprovado') 
                break
        default:
                console.log('Nota inválida')
    }
}

imprimirResultado(9)
imprimirResultado(7.2)
imprimirResultado(6.98)
imprimirResultado(4.55)
imprimirResultado('Ola mundo')
imprimirResultado(-1)