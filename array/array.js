

let aprovados = new Array('Bia', 'Carlos', 'Adriana')
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']
console.log(aprovados)

console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])

aprovados[3] = 'Paulo'
aprovados.push('Abia')
console.log(aprovados)

//aprovados[9] = 'João'
//console.log(aprovados)

aprovados.sort() //Ordena o array
console.log(aprovados)

delete aprovados[1]
console.log(aprovados)

aprovados[1] = 'Fernando'
console.log(aprovados)

aprovados.splice(3,2,'Gomide', 'Adriana','Rubens') // eemento inicial, quantos elementos quer remover, elementos para adicionar
console.log(aprovados)

