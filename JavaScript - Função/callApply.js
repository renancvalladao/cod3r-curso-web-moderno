function getPreco(imposto = 0, moeda = "R$") {
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
    nome: "Notebook",
    preco: 4589,
    desc: 0.15,
    getPreco
}

globalThis.preco = 20
globalThis.desc = 0.1
console.log(getPreco())
console.log(produto.getPreco())

const carro = { preco: 49990, desc: 0.2 }

console.log(getPreco.call(carro))
console.log(getPreco.apply(carro))

console.log(getPreco.call(carro, 0.17, "$"))
console.log(getPreco.apply(globalThis, [0.17, "$"]))
/**
 * No call os parâmetros são colocados diretos.
 * No apply é através de um array.
 * É possível passar o contexto global, já que o objeto carro
 * existe no contexto global.
 */