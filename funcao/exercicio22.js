

const notas = [1.4,4.9,6.8,8.6,9.1]

notas.forEach(function(nota){
    let letra = ""
         
    if(nota >= 0 && nota <= 4.9){
        letra = "D"
    }
    else if(nota >= 5.0 && nota <= 6.9){
        letra = "C"
    }
    else if(nota >= 7.0 && nota <= 8.9){
        letra = "B"
    }
    else if(nota >= 9.0 && nota <= 10.0){
        letra = "A"
    }

    console.log(letra)
})



