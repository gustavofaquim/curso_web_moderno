

/*

Array heterogeneo - tipos diferentes
Sem tamanho fixo

*/

const valores = [7.7,8.9,6.3,9.2]

console.log(valores[0], valores[3])
console.log(valores[4])
console.log(valores)

valores[4] = 10
valores[10] = 8.9 // Adiciona posições vazias
console.log(valores[4])
console.log(valores)
console.log(valores.length)

valores.push({id: 3}, false, null, 'teste')

console.log(valores)

console.log(valores.pop()) // Retira a última posição do array
delete valores[0] // Retira o valor de uma posição do array

console.log(typeof valores)