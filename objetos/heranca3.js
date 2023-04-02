

const pai = {nome: 'Pedro', corCabelo: 'preto'}

const filha1 = Object.create(pai)
filha1.nome = 'Ana'
console.log(filha1.corCabelo)

const filha2 = Object.create(pai,{
    nome: {value: 'Bia'},
    idade: {value: 25}
})

console.log(filha2.nome)
console.log(filha2.idade)
console.log(filha2.corCabelo)

// Mais infos sobre herança na aula herança3