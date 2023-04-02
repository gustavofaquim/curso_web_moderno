

let notas = ""

function contagem(valor){

    let nota100 = (valor - (valor % 100)) / 100
    valor = valor - (valor - (valor % 100))
    if(nota100 != 0)notas += ` ${nota100} nota(s) de R$ 100,00`

    let nota50 = (valor - (valor % 50)) / 50
    valor = valor - (valor - (valor % 50))
    if(nota50 != 0) notas +=` ${nota50} nota(s) de R$ 50,00`

    let nota10 = (valor - (valor % 10)) / 10
    valor = valor - (valor - (valor % 10))
    if(nota10 != 0)notas +=` ${nota10} nota(s) de R$ 10,00`

    let nota5 = (valor - (valor % 5)) / 5
    valor = valor - (valor - (valor % 5))
    if(nota5 != 0)notas +=` ${nota5} nota(s) de R$ 5,00`

    let moeda1 = (valor - (valor % 1)) / 1
    valor = valor - (valor - (valor % 1))
    if(moeda1 != 0)notas +=` ${moeda1} moeda(s) de R$ 1,00`

    


    return notas

}


console.log(contagem(18.00)) 