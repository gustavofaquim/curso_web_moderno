

function calcularMedia(array){
    let soma = 0

    array.forEach(element => {
        soma += element
    });

    return console.log(soma / array.length)
}

calcularMedia([0,10])
calcularMedia([1,2,3,4,5])

