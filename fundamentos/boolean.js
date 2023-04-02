

let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!isAtivo)
console.log(!!isAtivo)

console.log('os verdadeiros...')
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!!(isAtivo = 0))

console.log(!!0)
console.log(!!'')
console.log(!!null)

console.log('' ||  null || 0 || '123')
console.log(!!('' ||  null || 0 || '123'))

let nome = ''
console.log(nome || 'Nome não informado')