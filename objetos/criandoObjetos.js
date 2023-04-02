// usando a notação literal
const obj1 = {}


// Objetc em JS
const obj2 = new Object



// Funções construtoras
function Produto(nome, preco, desc){
    //this.nome = nome

    this.getPrecoComDesconto = () =>{
        return preco * (1 - desc)
    }
}



const p1 = new Produto('Caneta', 7.99, 0.1)
const p2 = new Produto('Notebook', 2998.99, 0.25)
console.log(p1.getPrecoComDesconto())


// Função Factory

function criarFuncionario(nome,salarioBase,faltas){
    return {
        nome,
        salarioBase,
        faltas,
        getSalario(){
            return (salarioBase / 30) * (30 - faltas)
        }
    }
}

const f1 = criarFuncionario('Joao', 7980, 4)
const f2 = criarFuncionario('maria', 11400,1)
console.log(f1.getSalario(), f2.getSalario())


// Object create
const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha)