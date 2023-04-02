
/*const produto = new Object
produto.nome = 'Cadeira'
produto['marca do produto'] = 'Generica'
produto.preco = 2020

console.log(produto)
delete produto.preco
delete produto['marca do produto']
console.log(produto) */


const carro = {
    modelo: 'A4',
    valor: 89000,
    proprietario:{
        nome: 'Raul',
        idade: 56,
        endereco:{
            rua: 45,
            bairro: 'Vila Nova',
            cidade: 'Ceres'
        }
    },
    condutores:[
        {nome:'Gustavo',
        cnh: 'S'},
        {nome: 'Dirlene',
        cnh: 'S'}
    ],
    calcularSeguro: function(){
        //...
    }
}

console.log(carro.proprietario.endereco.cidade)
console.log(carro['proprietario']['endereco']['cidade'])
console.log(carro.condutores.length)

