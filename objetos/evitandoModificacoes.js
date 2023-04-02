


// Object.preventExtenssions -> impede novos atributos

const produto = Object.preventExtensions({
    nome: 'Qualquer',
    preco: 1.99,
    tag: 'promocao'
})

console.log('Extensivel: ', Object.isExtensible(produto))

produto.nome = 'Boraccha'
produto.descricao = 'Boraccha escolhar branca'
delete produto.tag
console.log(produto)

// Object.seal -> não permite adicionar nem excluir
const pessoa = {nome: 'Juliana', idade: 35}
Object.seal(pessoa)
console.log('Selado: ', Object.isSealed(pessoa))

pessoa.sobrenome = 'Silva'
delete pessoa.nome
console.log(pessoa)

// Object.freeze = selado + valores constantes