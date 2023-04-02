



let c = 3
let d = c

d++

console.log(d)
console.log(c)

console.log('-------------------------------')
/**
 * Quandos são objetos e não tipos primitivos, oq é atribuido é o caminho de memória
 * e não simplesmente o valor. Sendo assim alterando o valor de qualquer um, ambos serão alterados,
 * Exemplis a baixo:
 */


const a = {nome: 'Teste'}

console.log(a)

const b = a

console.log(b)

b.name = 'Opa'

console.log(a)
console.log(b)



