
// Factory Simples
// Função Factory é uma função que retorna um objeto


function criarPessoa(){
    return{
        nome: 'Ana',
        sobrenome: 'Silva'
    }
}

console.log(criarPessoa())


function criarProduto(nome, preco){
    return{
        nome: nome,
        preco: preco
    }
}

console.log(criarProduto('Arroz', 34))