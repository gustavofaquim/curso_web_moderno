

function filtrarNumeros(array){
    const resultado = []

    array.forEach(element => {
        if (typeof element == 'number') resultado.push(element) 
    });

    return console.log(resultado)
}

filtrarNumeros(['JavaScript', 1,2,'3', "Web", 20])
