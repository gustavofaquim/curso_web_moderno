
let msg = ""

let modelo = "motocicletas"

switch(modelo){
    case "hatch":
        msg = "Compra efetuada com sucesso"
        break
    case ("sedans"):
        msg = "Tem certeza que não prefere este modelo?"
        break
    case ("motocicletas"):
        msg = "Tem certeza que não prefere este modelo?"
        break
    case ("caminhonetes"):
        msg = "Tem certeza que não prefere este modelo?"
        break
    default:
        msg = "Não trabalhamos com este tipo de automóvel aqui"
}

console.log(msg)