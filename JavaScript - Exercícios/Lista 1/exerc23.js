function notaFinal(cod, notas) {
    let situacao = "REPROVADO"
    let media = 0
    if(notas[0] > notas[1] && notas[0] > notas[2]) {
        media += (notas[0] * 4 + (notas[1] + notas[2]) * 3) / 10
    } else if(notas[1] > notas[2]) {
        media += (notas[1] * 4 + (notas[0] + notas[2]) * 3) / 10
    } else {
        media += (notas[2] * 4 + (notas[0] + notas[1]) * 3) / 10
    }
    if(media >= 5) {
        situacao = "APROVADO"
    }
    console.log(`Código: ${cod}; Notas: ${notas}; Média: ${media}; ${situacao}`)
}

notaFinal(123, [7, 5, 8])
notaFinal(321, [4, 5, 3])