
const produtos = [
    {nome: 'Notebook', preco: 2499, fragil: true},
    {nome: 'Ipad Prod', preco: 4199, fragil: true},
    {nome: 'Copo de Vidro', preco: 24, fragil: true},
    {nome: 'Copo de Plástico', preco: 18.99, fragil: false}
]


const caro = produto => produto.preco > 2400
const fragil = produto => produto.fragil == true

console.log(produtos.filter(caro).filter(fragil))

