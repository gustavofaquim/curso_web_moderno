 
function tratarErroELancar(erro){
    //throw new Error('Ocorreu um erro...')
    throw{
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
}


 function imprimirNomeGritado(obj){
    try{
        console.log(obj.name.toUpperCase() + '!!!')
    } catch (e){
        tratarErroELancar(e)
    } finally{
        console.log('final') // Executa em todos os casos, dando erro ou não
    }
   
 }

 const obj = {nome: 'Roberto'}
 imprimirNomeGritado(obj)