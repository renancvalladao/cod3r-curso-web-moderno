function intervaloImpares(inicio = 0, fim = 100) {
    if(inicio > fim) {
        let temp = inicio
        inicio = fim
        fim = temp
    }
    for(let i = inicio; i <= fim; i++) {
        if(i % 2 != 0) console.log(i)
    }
}

intervaloImpares()
intervaloImpares(1, 7)
intervaloImpares(6, 2)