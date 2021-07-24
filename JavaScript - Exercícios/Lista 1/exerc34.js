function comparaCaracteres(string1, string2) {
    if(comparaStrings(string1, string2) && comparaStrings(string2, string1)) {
        console.log("Strings possuem os mesmos caracteres")
    } else {
        console.log("Strings não possuem os mesmos caracteres")
    }
}

function comparaStrings(string1, string2) {
    let contido
    for(let i of string1) {
        contido = false
        for(let j of string2) {
            if(i.toLowerCase() == j.toLowerCase()) {
                contido = true
                break
            }
        }
        if(contido == false) break
    }
    return contido
}

comparaCaracteres("QweR", "qew")
comparaCaracteres("Qwe", "qew")