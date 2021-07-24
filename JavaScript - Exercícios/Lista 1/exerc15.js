function compraCarro(tipo) {
    switch(tipo){
        case "Hatch":
            console.log("Compra efetuada com sucesso")
            break
        case "Sedan":
        case "Motocicleta":
        case "Caminhonete":
            console.log("Tem certeza que não prefere esse modelo?")
            break
        default:
            console.log("Não trabalhamos com este tipo de automóvel aqui")
    }
}

compraCarro("Hatch")
compraCarro("Sedan")
compraCarro("Motocicleta")
compraCarro("Caminhonete")
compraCarro("Bicicleta")