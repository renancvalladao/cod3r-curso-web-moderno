function sistemaNota(nota) {
    if(nota >= 37 && (Math.floor(nota/5) + 1) * 5 - nota < 3) {
        nota = (Math.floor(nota/5) + 1) * 5
    }
    if(nota < 40) {
        console.log("Reprovado com nota =", nota)
    }
    else {
        console.log("Aprovado com nota =", nota)
    }
}

sistemaNota(38)
sistemaNota(29)
sistemaNota(84)