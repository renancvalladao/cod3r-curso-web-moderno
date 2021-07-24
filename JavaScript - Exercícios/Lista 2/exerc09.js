function repetir(dado, vezes) {
    const resultado = []
    for(let i = 0; i < vezes; i++) {
        resultado.push(dado)
    }
    console.log(resultado)
}

repetir("código", 2) // retornará ["código", "código"]
repetir(7, 3) // retornará [7, 7, 7]