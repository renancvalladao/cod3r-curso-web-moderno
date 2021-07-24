function trocaVetores(vetorA, vetorB) {
    if(vetorA.length == vetorB.length) {
        let n = 0
        for(let i = 0; i < vetorA.length; i++){
            vetorA[i] = vetorA[i] + vetorB[i]
            vetorB[i] = vetorA[i] - vetorB[i]
            vetorA[i] = vetorA[i] - vetorB[i]
        }
        console.log("Vetor A:", vetorA)
        console.log("Vetor B:", vetorB)
    } else {
        console.log("Não têm o mesmo tamanho")
    }
}

trocaVetores([1, 2, 3], [3, 2, 1])