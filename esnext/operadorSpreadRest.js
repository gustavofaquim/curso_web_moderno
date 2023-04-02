

// operador ... rest (junstar) / spread(espalhar)
// usar rest com parâmetro de função

// usar spread com objeto
const funcionario = {nome: 'Maria', salario: 12346.99}
const clone = {ativo: true, ...funcionario}

console.log(clone)

// usar spread com array
const grupoA = ['João', 'Pedro', 'Groria']
const grupoFinal = ['Maria', ...grupoA,'Rafaela']
console.log(grupoFinal)