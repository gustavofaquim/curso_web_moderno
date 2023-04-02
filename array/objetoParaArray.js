

function objetoParaArray(obj){
    let array = []
    for(let propriedade in obj){
        //console.log(propriedade + obj[propriedade])
        array.push([propriedade, obj[propriedade]])
    }

    return console.log(array)


}

objetoParaArray({
    nome: "Maria",
    profissao: "Desenvolvedora"
})

objetoParaArray({
    codigo: 11111,
    preco: 12000
})