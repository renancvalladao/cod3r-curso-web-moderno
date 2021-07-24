/**
 * O interpretador carrega previamente as funções declaradas da
 * primeira forma, então ela está disponível desde a primeira linha.
 * Isso não ocorre para as outras formas de declaração.
 */
console.log(soma(3, 4))

// function declaration
function soma(x, y) {
    return x + y
}

// function expression
const sub = function(x, y) {
    return x - y
}
console.log(sub(3, 4))

// named function expression
const mult = function mult(x, y) {
    return x * y
}
console.log(mult(3, 4))