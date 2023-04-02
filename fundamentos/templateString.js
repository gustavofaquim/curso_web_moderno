
const nome = 'Roberto'
const conatencao = 'Olá' + nome + '!'

const template = `
    Olá 
    ${nome}!`

console.log(template)


// Expressões

console.log(`1 + 1 = ${1 + 1}`)

const up = texto => texto.toUpperCase()

console.log(`Ei... ${up('cuidado')}!`)