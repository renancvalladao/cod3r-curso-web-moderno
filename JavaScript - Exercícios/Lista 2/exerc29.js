function segundoMaior(array) {
    console.log(array.sort((a,b) => a- b)[array.length - 2])

}

segundoMaior([12, 16, 1, 5]) // retornará 12
segundoMaior([8, 4, 5, 6]) // retornará 6