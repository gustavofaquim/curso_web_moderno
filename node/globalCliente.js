
require('./global')

console.log(MinhaApp.saudacao())

MinhaApp.nome = 'Eita' // O freeze impede alterações...
console.log(MinhaApp.nome)
