
console.log(soma(3,4)) 
console.log(sub(3,4)) 

// function declaration - pode ser usada antes de ser declarada
function soma(x,y){
    return x + y
}

// function expression
const sub = function(x,y){
    return x - y
}

//named function expression
const mult = function mult(x,y){
    return x * y
}
