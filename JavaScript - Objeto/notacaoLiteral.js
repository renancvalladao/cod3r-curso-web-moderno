const a = 1
const b = 2
const c = 3

const obj1 = { a: a, b: b, c: c }
const obj2 = { a, b, c} // Já cria o atributo com o nome da variável
console.log(obj1, obj2)

const nomeAttr = "nota"
const valorAttr = 7.87

const obj3 = {}
obj3[nomeAttr] = valorAttr
console.log(obj3)

const obj4= {[nomeAttr]: valorAttr}
console.log(obj4)

const obj5 = {
    funcao1: function() {
        // ...
    },
    funcao() { // Nova forma de declarar função dentor de um objeto
        // ...
    }
}
console.log(obj5)