
function funcaoDaSorte(numero){

    const min = 1
    const max = 10

    const numeroAleatorio = Math.floor(Math.random() * (max - min + 1) + min)

    return (numero === numeroAleatorio ?
        `Parabéns! o número sorteado foi o ${numeroAleatorio}`:
        `Ue pena, o número sorteado foi o ${numeroAleatorio}`)
}

console.log(funcaoDaSorte(5))
console.log(funcaoDaSorte(1))
console.log(funcaoDaSorte(10))