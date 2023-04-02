

let valor //Não inicializado

console.log(valor)
//console.log(valor2)

valor = null // ausência de valor
console.log(valor)

//console.log(valor.toString())

const produto = {}

console.log(produto.preco)
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined // evite atribuir undefined

console.log(!!produto.preco)
console.log(produto)

produto.preco = null
console.log(!!produto.preco)

console.log(produto)
