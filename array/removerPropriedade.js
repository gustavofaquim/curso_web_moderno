

function removerPropriedade(array, propriedade){

    delete array[propriedade]
    return console.log(array)
}

removerPropriedade({a: 1, b:2}, "b")