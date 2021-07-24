function filtrarPorQuantidadeDeDigitos(array, digitos) {
    console.log(array.filter(e => e.toString().length == digitos))
}

filtrarPorQuantidadeDeDigitos([38, 2, 365, 10, 125, 11], 2) // retornará [38, 10, 11]
filtrarPorQuantidadeDeDigitos([5, 9, 1, 125, 11], 1) // retornará [5, 9, 1]