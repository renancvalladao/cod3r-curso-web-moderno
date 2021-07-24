console.log(7 / 0) // Existe o valor Infinity, para onde essa divisão converge
console.log("10" / 2) // O JavaScript testa se a operação faz sentido com a string sendo um valor numérico
console.log("3" + 2) // Aqui porém ele concatena como se fossem duas strings
console.log("3" - 2) // Aqui não faz sentido tratar como string, logo volta a ser valor numérico
console.log("Show!" * 2) // Não funciona
console.log(0.1 + 0.7) // Gera imprecisão por conta da forma de representação de ponto flutuante
// console.log(10.toString()) O valor precisa estar dentro de ()
console.log((10.345).toFixed(2))