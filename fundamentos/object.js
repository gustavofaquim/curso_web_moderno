

/**
 * prod1 = [] -> array
 * prod1 = {} -> objeto
 * 
 */

const prod1 = {}

prod1.nome = 'Celular Ultra Mega' // Criação de posições dinamicas
prod1.preco = 4998.90
prod1['Desconto Legal'] = 0.40

console.log(prod1)

const prod2 = {
    nome: 'Camisa Polo',
    preco: 79.90,
}
prod2['Desconto Legal'] = 0.40

console.log(prod2)