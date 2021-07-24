function multiplicaVetor(vetor, num) {
    for(let i = 0; i < vetor.length; i++) vetor[i] *= num
    console.log(vetor)
}

function multiplicaMaiorCinco(vetor, num) {
    for(let i = 0; i < vetor.length; i++) {
        if(vetor[i] > 5) vetor[i] *= num
    }    
    console.log(vetor)
}

let vetor = [1, 2, 3, 4, 5, 6]
multiplicaVetor(vetor, 2)
multiplicaMaiorCinco(vetor, 2)