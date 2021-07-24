let a = 3

globalThis.b = 123

this.c = 456
this.d = false
this.e = "Teste"

console.log(a)
console.log(globalThis.b)
console.log(this.c)
console.log(module.exports.c)
console.log(module.exports === this)
console.log(module.exports)

// Criando uma variável maluca: sem var e let!
abc = 3 // Não faça isso em casa!!!
console.log(globalThis.abc)

// module.exports = { e: 456, f: false, g: "Teste"} Forma mais comum