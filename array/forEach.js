
const aprovados = ['Agatha', 'Aldo', 'Wanda', 'Visão','Tony']

aprovados.forEach(function(nome,indece){
    console.log(`${indece + 1}. ${nome}`)
})

aprovados.forEach(nome => console.log(nome))

const exibirAprovados = (nome,indice) => console.log(nome,indice)
aprovados.forEach(exibirAprovados)