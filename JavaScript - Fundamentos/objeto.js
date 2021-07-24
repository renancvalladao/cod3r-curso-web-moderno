const prod1 = {}
prod1.nome = "Celular Ultra Mega"
prod1.preco = 4998.90
prod1["Desconto Legal"] = 0.40 // Evitar atributos com espaço

console.log(prod1)

const prod2 = {
    nome: "Camisa Polo",
    preco: 79.90
}

console.log(prod2)

/**
 * JSON é um formato textual, não é a mesma coisa que objeto em JS
 * É possível gerar um JSON a partir de um objeto e vice-versa
 */