function maiorOuIgual(num1, num2) {
    let resultado = false
    if(typeof num1 == "number" && typeof num2 == "number") { 
        if(num1 >= num2) resultado = true
    }
    console.log(resultado)
}

maiorOuIgual(0, 0) // retornarĂ¡ true
maiorOuIgual(0, "0") // retornarĂ¡ false
maiorOuIgual(5, 1) // retornarĂ¡ false