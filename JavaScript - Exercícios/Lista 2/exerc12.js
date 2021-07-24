function removerPropriedade(obj, atr) {
    const resultado = Object.assign({}, obj) // = {...obj}
    delete resultado[atr]
    console.log(resultado)
}

removerPropriedade({a: 1, b: 2}, "a") // retornará {b: 2}
removerPropriedade({
id: 20,
nome: "caneta",
descricao: "Não preenchido"
}, "descricao") // retornará {id: 20, nome: "caneta"}
 /*
function removerPropriedade(obj, atr) {
    const resultado = {}
    for(let key in obj) {
        if(key != atr) {
            resultado[key] = obj[key]
        }
    }
    console.log(resultado)
}*/