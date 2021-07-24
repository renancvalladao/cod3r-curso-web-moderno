function menorNumero(array) {
    let menor = array[0]
    for(let i = 1; i < array.length; i++) {
        if(array[i] < menor) menor = array[i]
    }
    console.log(menor)
}

menorNumero([10, 5, 35, 65]) // retornará 5
menorNumero([5, -15, 50, 3]) // retornará -15