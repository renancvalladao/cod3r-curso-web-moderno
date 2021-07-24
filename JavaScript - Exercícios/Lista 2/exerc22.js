function funcaoDaSorte(num) {
    let aleatorio = Math.floor(Math.random() * 10 + 1)
    if(aleatorio == num) {
        console.log(`Parabéns! O número sorteado foi o ${aleatorio}`)
    } else {
        console.log(`Que pena! O número sorteado foi o ${aleatorio}`)
    }
}

funcaoDaSorte(10)
funcaoDaSorte(5)
funcaoDaSorte(5)