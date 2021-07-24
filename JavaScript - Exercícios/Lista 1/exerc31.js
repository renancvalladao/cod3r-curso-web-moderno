function negativos(nums) {
    let qtdNegativos = 0
    for(let i of nums) {
        if(i < 0) qtdNegativos++
    }
    console.log(`Existe(m) ${qtdNegativos} valor(es) negativo(s)`)
}

negativos([1, 2, -1, 0, -2, -6])