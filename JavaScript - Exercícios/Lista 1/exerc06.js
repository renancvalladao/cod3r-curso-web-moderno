function jurosSimples(capitalInicial, taxaDeJuros, tempoDeAplicacao) {
    return capitalInicial + ((taxaDeJuros / 100) * capitalInicial * tempoDeAplicacao) 
}

function jurosCompostos(capitalInicial, taxaDeJuros, tempoDeAplicacao) {
    return capitalInicial * (1 + taxaDeJuros / 100) ** tempoDeAplicacao
}

console.log(jurosSimples(100, 20, 5))
console.log(jurosCompostos(10000, 10, 5))