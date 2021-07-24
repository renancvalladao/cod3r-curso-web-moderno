const notas = [6.7, 7.4, 9.8, 8.1, 7.7]

for(let i in notas) { // i é uma string
    console.log(i, notas[i])
}

const pessoa = {
    nome: "Ana",
    sobrenome: "Silva",
    idade: 29,
    peso: 64
}

for(let atributo in pessoa) { // atributo é uma string
    console.log(`${atributo} = ${pessoa[atributo]}`)
}

/**
 * Existe também a estrutura:
 * for(let i of notas) {}
 * Onde i passa a ser cada um dos ELEMENTOS do array, e não o índice
 */