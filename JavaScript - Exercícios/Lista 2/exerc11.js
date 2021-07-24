function receberPrimeiroEUltimoElemento(vetor) {
    const [num1, num2] = [vetor[0], vetor[vetor.length - 1]]
    console.log([num1, num2])
}

receberPrimeiroEUltimoElemento([7,14,"olá"]) // retornará [7, "olá"]
receberPrimeiroEUltimoElemento([-100, "aplicativo", 16]) // retornará [-100, 16]