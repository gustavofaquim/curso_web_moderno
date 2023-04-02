

function MeuObjeto(){}

console.log(MeuObjeto.prototype)

const obj1 = new MeuObjeto
const obj2 = new MeuObjeto

console.log(obj1.__proto__ == obj2.__proto__)

// Criando atributos para o prototipo (objeto original), será herdado pelos outros
MeuObjeto.prototype.nome = 'Anônimo',
MeuObjeto.prototype.falar = function(){
    console.log(`Bom dia! Meu nome é ${this.nome}`)
}

console.log(obj1.nome)
obj1.nome = 'Gustavo'
obj1.falar()

const obj3 = {}
obj3.__proto__ = MeuObjeto.prototype //Mudando o prototipo do obj3
obj3.nome = 'Obj3'
obj3.falar()



// Resumindo a loucura...
