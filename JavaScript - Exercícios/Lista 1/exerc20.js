function cedulas(valor) {
    let notas100 = Math.floor(valor / 100)
    valor %= 100
    let notas50 = Math.floor(valor / 50)
    valor %= 50
    let notas10 = Math.floor(valor / 10)
    valor %= 10
    let notas5 = Math.floor(valor / 5)
    valor %= 5
    let notas1 = valor

    let resultado = ""
    if(notas100 > 0) resultado += `${notas100} nota(s) de R$${100}. `
    if(notas50 > 0) resultado += `${notas50} nota(s) de R$${50}. `
    if(notas10 > 0) resultado += `${notas10} nota(s) de R$${10}. `
    if(notas5 > 0) resultado += `${notas5} nota(s) de R$${5}. `
    if(notas1 > 0) resultado += `${notas1} nota(s) de R$${1}. `
    return resultado
}

console.log(cedulas(18))