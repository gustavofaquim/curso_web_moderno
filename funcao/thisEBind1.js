
// constante que armazena um objetivo com uma função dentro
const pessoa = {
    saudacao: 'Bom dia',
    falar(){
        console.log(this.saudacao)
    }
}

pessoa.falar()

/* Quando atribuimos a função em uma variável o escopo do this muda
 não sendo mais possível chamar a função */
const falar = pessoa.falar
falar() 

/*Podemos resolver com o bind, e informando o objeto do escopom
nesse caso, pessoa */
const falar2 = pessoa.falar.bind(pessoa)
falar2()