

function fatorial(num){

    let fat = num -1


    while(fat != 0){
        fat = fat  * num 
        console.log(fat)
        fat--
        
    }
    return fat
}

console.log(fatorial(5))