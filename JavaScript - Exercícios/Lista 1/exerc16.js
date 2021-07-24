function calculadora(a, op, b) {
    switch(op){
        case "+":
            return a + b
        case "-":
            return a - b
        case "*":
            return a * b
        case "/":
            return a / b
        default:
            return "Operação inválida"
    }
}

console.log(calculadora(4, "+", 3))
console.log(calculadora(4, "-", 3))
console.log(calculadora(4, "*", 4))
console.log(calculadora(8, "/", 4))
console.log(calculadora(1, "@", 2))