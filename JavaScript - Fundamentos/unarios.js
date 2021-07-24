let num1 = 1
let num2 = 2

num1++ // Forma pósfixada
console.log(num1)
--num1 // Essa forma tem precedência maior, ou seja, executa antes
console.log(num1)

console.log(++num1 === num2--) // ++ num1 executa antes da comparação, logo 2 = 2, e num2-- só ocorre depois da comparação
console.log(num1 === num2)