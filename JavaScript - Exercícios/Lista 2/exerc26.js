function removerVogais(string) {
    let vogais = ["a", "e", "i", "o", "u"]
    console.log([...string].filter(e => !vogais.includes(e.toLowerCase())).join(""))
}

removerVogais("Cod3r") // retornarĂ¡ "Cd3r"
removerVogais("Fundamentos") // retornarĂ¡ "Fndmnts"