
let dobro = function(a){
    return 2 * a
}

dobro = (a) => {
    return 2 * a
}

dobro = a => 2 * a // retorno implicito

console.log(dobro(Math.PI))


let ola = function(){
    return 'Olá'
}

ola = () => 'Olá' // Função sem parametro 
ola = _ => 'Olá' // o _ indica que existe um parametro
console.log(ola())