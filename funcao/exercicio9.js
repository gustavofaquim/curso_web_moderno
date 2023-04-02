

function encerramento(nota){

    if(nota < 40) return 'Aluno reprovado'
    
   let aux = nota
   let multiplo = 0

    for(let i = 0; i < 5; i++){
        let conta = (aux++) % 5
        console.log(i)
        
        if(conta == 0){
            multiplo = nota + i 
            break
        }
    } 
    
    if((multiplo - nota) < 3) nota = multiplo

    return `Aluno aprovado com nota: ${nota}`


}

console.log(encerramento(103))