
 

function getInterioroAleatorio(min,max){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

//let opcao = -1

let opcao  //Não é necessário definir um valor para opcao no 'do while'

do {
    opcao = getInterioroAleatorio(-1, 10)
    console.log(`Opção escolhada foi ${opcao}.`)
}  while(opcao != -1)

console.log('Até a próxima!')