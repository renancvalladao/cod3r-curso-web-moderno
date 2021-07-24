function adicionaVetor(vetorPilha, vetorAdiciona) {
    for(let i of vetorAdiciona) {
        vetorPilha.push(i)
        console.log("Elemento adicionado:", i)
    }
    console.log("vetorAdiciona =", vetorAdiciona)
    console.log("vetorPilha", vetorPilha)
}

adicionaVetor([1, 2, 3], [4, 5, 6])