function somarNumeros(array) {
    console.log(array.reduce((ant, atual) => ant + atual))
}

somarNumeros([10, 10, 10]) // retornarĂ¡ 30
somarNumeros([15, 15, 15, 15]) // retornarĂ¡ 60