
const alunos =[
    {nome: 'João', nota: 7.3, bolsista: false},
    {nome: 'Maria', nota: 9.2, bolsista: true},
    {nome: 'Pedro', nota: 9.8, bolsista: false},
    {nome: 'Ana', nota: 8.7, bolsista: true},
]

// Soma de todas as notas
const notas = alunos.map(a => a.nota).reduce(function(acumulador, atual){
    console.log(acumulador,atual)
    return acumulador + atual
})

console.log(notas)


// Desafio 01: Todos os alunos são bolsistas?
console.log('Desafio 01')
const todosBolsistas = (resultado,bolsista) => resultado && bolsista
console.log(alunos.map(a => a.bolsista).reduce(todosBolsistas))

// Desafio 2: Algum aluno é bolsista?
console.log('Desafio 02')
const algumBolsista = (resultado, bolsista) => resultado || bolsista
console.log(alunos.map(a => a.bolsista).reduce(algumBolsista))