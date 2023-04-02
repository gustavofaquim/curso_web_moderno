


const bhaskara = function(ax2,bx,c){
    const deta = (bx**2) (- 4) * (ax2 * c)
    if(delta < 0){
        return 'delta menor que zero'
    }else{
        const x1 = (b + delta) / (2*ax2)
        const x2 = (b - delta) / (2*ax2)

        const result = {
            'x1': x1,
            'x2': x2
        }
    }
    return result
   

}

console.log(bhaskara(3,-5,12))