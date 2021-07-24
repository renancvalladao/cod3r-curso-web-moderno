function dinheiro(valor){
    return "R$" + valor.toFixed(2).toString().replace(".", ",")
}

console.log(dinheiro(0.1 + 0.2))