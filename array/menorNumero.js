


function menorNumero(array){
    let numero = array[0]

    array.forEach(element => {
        if(element < numero) numero = element
    });

    console.log(numero)
}

menorNumero([10,5,35,65])
menorNumero([5,-5,0,-1,-25,50])