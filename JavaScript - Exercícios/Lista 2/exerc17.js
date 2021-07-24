function somarNumeros(array) {
    console.log(array.reduce((ant, atual) => ant + atual))
}

somarNumeros([10, 10, 10]) // retornará 30
somarNumeros([15, 15, 15, 15]) // retornará 60