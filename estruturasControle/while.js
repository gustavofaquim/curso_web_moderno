

function getInterioroAleatorio(min,max){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = 0

while(opcao != -1){
    opcao = getInterioroAleatorio(-1, 10)
    console.log(`Opção escolhada foi ${opcao}.`)
}

console.log('Até a próxima!')