function calcularMedia(array) {
    console.log(array.reduce((soma, e) => soma + e, 0) / array.length)
}

calcularMedia([0, 10]) // retornarĂ¡ 5
calcularMedia([1, 2, 3, 4, 5]) // retornarĂ¡ 3