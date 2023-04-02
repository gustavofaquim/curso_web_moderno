

function somarNumeros(array){

    let soma = 0
    array.forEach(element => {
        soma += element;    
    });

    return console.log(soma)
}

somarNumeros([10,10,10])
somarNumeros([15,15,15,15])