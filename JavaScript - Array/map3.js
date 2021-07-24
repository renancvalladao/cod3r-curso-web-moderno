Array.prototype.map2 = function(callbackFunction) {
    const arrayTemp = []
    for(let i = 0; i < this.length; i++) {
        arrayTemp.push(callbackFunction(this[i]), i, this)
    }
    return arrayTemp
}

const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45 }',
    '{ "nome": "Caderno", "preco": 13.90 }',
    '{ "nome": "Kit de Lapis", "preco": 41.22 }',
    '{ "nome": "Caneta", "preco": 7.50 }'
]

// Retornar um array apenas com os preços

const arrayPrecos = carrinho.map2(JSON.parse).map2(e => e.preco)
console.log(arrayPrecos)