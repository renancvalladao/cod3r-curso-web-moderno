function recorde(registro) {
    let jogos = registro.split(" ")
    jogos[0] = Number(jogos[0])
    let piorResultado = jogos[0]
    let melhorResultado = jogos[0]
    let bateuRecorde = 0
    let piorJogo = 1
    for (let i = 1; i < jogos.length; i++){
        jogos[i] = Number(jogos[i])
        if (jogos[i] > melhorResultado) {
            melhorResultado = jogos[i]
            bateuRecorde++
        }
        else if (jogos[i] < piorResultado) {
            piorResultado = jogos[i]
            piorJogo = i + 1
        }
    }
    return [bateuRecorde, piorJogo]
}

console.log(recorde("10 20 20 8 25 3 0 30 1"))