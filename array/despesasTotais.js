
function despesasTotais(array){
    let total = 0;

    array.forEach(element => {
        total += element.preco    
    });

    return console.log(total)
}

despesasTotais([
    {nome: "Jornal online", categoria: "Informação", preco: 89.99},
    {nome: "Cinema", categoria: "Entreterimento", preco: 150}
])

despesasTotais([
    {nome: "Galaxy S20", categoria: "Eletônicos", preco: 3599.99},
    {nome: "mackbook Pro", categoria: "Eletônicos", preco: 30999.90}
])


