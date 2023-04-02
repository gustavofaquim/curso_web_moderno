

function numerosParesIndices(array){
    let novoArray = []

    array.forEach((element, key) => {
        if(element % 2 == 0 && key % 2 == 0 ){
            novoArray.push(element)
        }    
    });
    return console.log(novoArray)
}

numerosParesIndices([1,2,3,4])
numerosParesIndices([10,70,22,43])