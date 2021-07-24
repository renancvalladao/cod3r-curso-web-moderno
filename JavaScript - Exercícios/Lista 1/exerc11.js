function bissexto(ano) {
    let ehBissexto = false
    if(ano % 400 == 0) {
        ehBissexto = true
    } else if (ano % 100 != 0 && ano % 4 == 0) {
        ehBissexto = true
    }
    return ehBissexto
}

console.log(bissexto(2020))