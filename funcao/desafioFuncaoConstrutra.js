


function Pessoa(nome){

    //this.nome = nome

    this.falar = function(){
        console.log(`Meu nome é ${nome}`)
        //console.log(`Meu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa('João')
p1.falar()

const p2 = new Pessoa('Maria')
p2.falar()