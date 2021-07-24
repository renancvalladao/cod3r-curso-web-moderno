function multiplicar(num1, num2) {
    let resultado = 0
    for(let i = 1; i <= num2; i++){
        resultado += num1
    }
    console.log(resultado)
}

multiplicar(5, 5) // retornará 25
multiplicar(0, 7) // retornará 0