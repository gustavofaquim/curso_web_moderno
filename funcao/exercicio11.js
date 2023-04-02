

function bissextos(ano){

    if((ano % 4) == 0) return `O ano de ${ano} é Bissexto`

    return `O ano de ${ano} não é Bissexto`
}

console.log(bissextos(2023))