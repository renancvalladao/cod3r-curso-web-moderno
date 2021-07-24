function inverso(input) {
    if(typeof input == "boolean") console.log(!input)
    else if(typeof input == "number") console.log(-input)
    else console.log(`booleano ou números esperado, mas o parâmetro é do tipo ${typeof input}`)
}

inverso(true) // retornará false
inverso("6") // retornará "booleano ou número esperados, mas o parâmetro é do tipo string"
inverso(-2000) // retornará 2000
inverso("programação") // retornará "booleano ou números esperado, mas o parâmetro é do tipo string"