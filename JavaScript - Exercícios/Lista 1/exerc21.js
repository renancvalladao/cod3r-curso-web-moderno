function planoDeSaude(idade) {
    let valor = 100
    if(idade > 60) return valor + 130
    else if(idade > 30) return valor + 95
    else if(idade >= 10) return valor + 50
    else if(idade >= 0) return valor + 80
}

console.log(planoDeSaude(8));
console.log(planoDeSaude(15));
console.log(planoDeSaude(35));
console.log(planoDeSaude(52));
console.log(planoDeSaude(80));