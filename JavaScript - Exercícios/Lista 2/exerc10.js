function simboloMais(vezes) {
    let resultado = ""
    for(let i = 0; i < vezes; i++) {
        resultado += "+"
    }
    console.log(resultado)
}

simboloMais(2) // retornarĂ¡ "++"
simboloMais(4) // retornarĂ¡ "++++"