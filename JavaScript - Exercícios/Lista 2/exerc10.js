function simboloMais(vezes) {
    let resultado = ""
    for(let i = 0; i < vezes; i++) {
        resultado += "+"
    }
    console.log(resultado)
}

simboloMais(2) // retornará "++"
simboloMais(4) // retornará "++++"