function anuidade(mes, valor) {
    return valor * (1 + 0.05) ** (mes - 1)
}

console.log(anuidade(2, 100))
console.log(anuidade(3, 100))