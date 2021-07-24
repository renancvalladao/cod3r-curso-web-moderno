function calculaPedido(cod, qtd) {
    switch(cod) {
        case 100:
            return `Total: R$${(qtd * 3).toFixed(2)}`
        case 200:
            return `Total: R$${(qtd * 4).toFixed(2)}`
        case 300:
            return `Total: R$${(qtd * 5.5).toFixed(2)}`
        case 400:
            return `Total: R$${(qtd * 7.5).toFixed(2)}`
        case 500:
            return `Total: R$${(qtd * 3.5).toFixed(2)}`
        case 600:
            return `Total: R$${(qtd * 2.8).toFixed(2)}`
        default:
            return "Produto inexistente"
    }
}

console.log(calculaPedido(100, 2))
console.log(calculaPedido(200, 2))
console.log(calculaPedido(300, 2))
console.log(calculaPedido(400, 2))
console.log(calculaPedido(500, 2))
console.log(calculaPedido(600, 2))
console.log(calculaPedido(700, 2))