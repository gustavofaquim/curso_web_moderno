

function checarAnoBissexto(ano){
    let msg = false

    if(ano % 4 == 0){
        msg = true

        if(ano % 100 == 0){
           msg = false 

           if(ano % 400 == 0){
            msg = true
           }
        } 

           

    }

    return console.log(msg)
}

checarAnoBissexto(2020)
checarAnoBissexto(2100)