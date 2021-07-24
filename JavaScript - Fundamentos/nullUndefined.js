let valor // Não inicializada
console.log(valor)

valor = null // Ausência de valor
console.log(valor)
// console.log(valor.toString()) // Erro!

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined // Evite atribuir undefined
console.log(!!produto.preco)
// delete produto.preco para remover atributo de um objeto
console.log(produto)

produto.preco = null // Sem preço
console.log(!!produto.preco)
console.log(produto)

/**
 * Passagem de tipos básicos é por valores
 * Os demais tipos são por referência
 */