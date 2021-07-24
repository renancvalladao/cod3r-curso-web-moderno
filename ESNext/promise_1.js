const primeiroElemento = arrayOuString => arrayOuString[0]
const letraMinuscula = letra => letra.toLowerCase()

/*let p = */new Promise(function(resolve) {
    resolve(["Ana", "Bia", "Carlos", "Daniel"]) // Aceita apenas 1 parâmetro
})

//p
    .then(primeiroElemento)
    .then(primeiroElemento)
    .then(letraMinuscula)
    .then(console.log)