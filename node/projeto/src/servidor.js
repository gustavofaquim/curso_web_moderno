
const porta = 3003

// "express": "4.16.2"

const express = require('express')
const app = express()
const bodyParser = require('body-parser')

const bancoDeDados = require('./bancoDeDados')

app.use(bodyParser.urlencoded({extended: true})) // convertendo para objs as requisiçoes 


app.get('/produtos', (req, res, next) => {
   res.send(bancoDeDados.getProdutos())
}) 
 
app.get('/produtos/:id', (req,res,next)=> {
    res.send(bancoDeDados.getProduto(req.params.id))
})

app.post('/produtos', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) //Json
})

//atualizando dados pelo ID
app.put('/produtos/:id', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        id: req.params.id,
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) //Json
})


app.delete('/produtos/:id', (req, res, next) => {
    const produto = bancoDeDados.excluirProduto(req.params.id)
    res.send(produto) //JSON
})

app.listen(porta, () =>{
    console.log(`Servidor executando na porta ${porta}`)
})