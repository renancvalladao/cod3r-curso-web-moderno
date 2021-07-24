// Object.preventExtensions
const produto = Object.preventExtensions({
    nome: "Qualquer", preco: 1.99, tag: "promoção"
})
console.log("Extensível", Object.isExtensible(produto))

produto.nome = "Borracha" // Pode alterar atributo
produto.descricao = "Borracha escola branca" // Não adiciona atributo
delete produto.tag // Pode excluir atributo
console.log(produto)

// Object.seal
const pessoa = { nome: "Juliana", idade: 35 }
Object.seal(pessoa)
console.log("Selado:", Object.isSealed(pessoa))

pessoa.sobrenome = "Silva" // Não pode adicionar atributo
delete pessoa.nome // Não pode excluir
pessoa.idade = 29 // Pode alterar atributo
console.log(pessoa)

// Object.freeze = selado + valores constantes