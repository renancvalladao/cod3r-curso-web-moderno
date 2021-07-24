console.log(module.exports === this)
console.log(module.exports === exports)

this.a = 1
exports.b = 2
module.exports.c = 3

exports = null // Não altera o que vai ser exportado
console.log(module.exports)

exports = { // Também não muda o que vai ser exportado
    nome: "Teste"
}

console.log(module.exports) 

module.exports = { public: true } // Isso sim vai mudar o objeto exportado

/**
 * O this, module.exports e exports apontam para um
 * mesmo objeto inicialmente vazio, mas quem irá de fato
 * ser exportado é o module.exports.
 * Ou seja, caso module.exports seja alterado, nada ocorrerá com
 * as outras referências.
 */