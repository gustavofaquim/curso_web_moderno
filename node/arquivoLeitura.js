
const fs = require('fs')


const caminho = __dirname + '/arquivo.json'

// sincrono ... Vai esperar ler o arquivo para continuar a execução do código 
const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo)

// asscinrono ... 
fs.readFile(caminho,'utf-8', (error, conteudo) =>{
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}:${config.db.port}`)
})

const config = require('./arquivo.json')
console.log(config.db)


fs.readdir(__dirname, (err,arquivos) =>{
    console.log('Conteudo da pasta...')
    console.log(arquivos)
})