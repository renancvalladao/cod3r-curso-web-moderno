function intervalo(nums) {
    let dentro = 0
    let fora = 0
    for(let i of nums) {
        if(i >= 10 && i <= 20) dentro++
        else fora++
    }
    console.log(`${dentro} números dentro do intervalo e ${fora} fora.`)
}

intervalo([1, 2, 15, 10, 20, 25])