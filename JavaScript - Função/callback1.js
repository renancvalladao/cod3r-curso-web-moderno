const fabricantes = ["Mercedes", "Audi", "BMW"]

function imprimir(nome, indice) {
    console.log(`${indice + 1}. ${nome}`)
}

fabricantes.forEach(imprimir) // Passa como parâmetros o valor da posição e o índice
fabricantes.forEach(fabricante => console.log(fabricante))