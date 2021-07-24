function aumento(plano, salario) {
    switch(plano) {
        case "A":
            console.log(`Novo salário: ${salario * 1.1}`)
            break
        case "B":
            console.log(`Novo salário: ${salario * 1.15}`)
            break
        case "C":
            console.log(`Novo salário: ${salario * 1.2}`)
            break
        default:
            console.log("Plano inválido")
    }
}

aumento("A", 1000)
aumento("B", 1000)
aumento("C", 1000)
aumento("D", 1000)