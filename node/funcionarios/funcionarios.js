 
 const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
 const axios = require('axios')


 // Mulher chinesa com menor salario 
 axios.get(url).then(response => {
    const funcionarios = response.data

   

    const mulher = funcionarios.filter(funcionario => funcionario.genero === 'F')
    const chinesa = mulher.filter( funcionaria => funcionaria.pais === 'China')
    const menorSalario = (func, funcAtual) =>{
      return func.salario > funcAtual.salario ? func: funcAtual
    }
    
    console.log(chinesa.reduce(menorSalario))    


 })