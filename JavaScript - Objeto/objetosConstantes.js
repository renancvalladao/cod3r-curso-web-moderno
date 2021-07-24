// pessoa -> 123 -> {...}
const pessoa = { nome: "João" }
pessoa.nome = "Pedro"
console.log(pessoa)

// pessoa -> 456 -> {...} 
// pessoa = { nome: "Ana" }

Object.freeze(pessoa) // "Congela" o objeto

pessoa.nome = "Maria" // Não vai mudar o nome
pessoa.end = "Rua ABC" // Nãi vai adicionar o atributo
delete pessoa.nome // Não exclui o atributo

console.log(pessoa.nome)
console.log(pessoa)

const pessoaConstante = Object.freeze({ nome: "João" })
pessoaConstante.nome = "Maria"
console.log(pessoaConstante)

/*
const pessoa1 = Object.freeze({ nome: 'Fulano' })
const novaPessoa = { ...pessoa1 } <- Serve para copiar os atributos de um objeto para outro
 
console.log(novaPessoa)
 
novaPessoa.nome = 'Sicrano'
console.log(novaPessoa)
*/