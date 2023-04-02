

const pilotos = ['Vettel', 'Alonso', 'Raikkomen', 'Massa']

pilotos.pop() // remove o último elemnto do array
pilotos.push('Caik') // adicona na última posição do array
pilotos.shift() // remove o primeiro elemento da lista

console.log(pilotos)

// splice -> pode adicionar e remover elementos

// adicionar
pilotos.splice(1,0,'Teste01', 'Teste02')
console.log(pilotos)

//remover
pilotos.splice(1,2)
console.log(pilotos)


// slice -> cria um novo array
const algunsPilotos = pilotos.slice(2)
console.log(algunsPilotos)