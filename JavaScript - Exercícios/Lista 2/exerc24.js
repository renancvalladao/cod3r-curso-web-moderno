function contarCaractere(char, string) {
    let qtd = 0
    for(let i = 0; i < string.length; i++) {
        if(string[i] == char) {
            qtd++
        }
    }
    console.log(qtd)
}

contarCaractere("r", "A sorte favorece os audazes") // retornarĂ¡ 2
contarCaractere("c", "Conhece-te a ti mesmo") // retornarĂ¡ 1