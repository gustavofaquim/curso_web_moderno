

const sequencia = {

    _valor: 1, // convenção de atributos privados
    
    get valor(){return this._valor++},
    set valor(valor){this._valor = valor},

    
}

sequencia.valor = 1000

console.log(sequencia.valor)

