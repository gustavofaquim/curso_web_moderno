

function Produto(nome, valor, quantidade){

    this.getNome = () =>{return this.nome}
    this.setNome = (valor) => {this.nome = valor}

}


function Bolacha(vencimento = 'indefinido'){
    this.vencimento = vencimento

}

Object.setPrototypeOf(Bolacha, Produto)

const bolacha = new Bolacha();
bolacha.nome = 'A'

console.log(bolacha)


// -----------------------


class Produto{
  
    constructor(nome, valor, quantidade){
        this.nome = nome
        this.valor = valor
    }

   
}


const p1 = new Produto()
console.log(p1)
