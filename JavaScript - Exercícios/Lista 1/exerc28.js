function parEImpar(nums) {
    let par = 0
    let impar = 0
    for(let i of nums) {
        if(i % 2 == 0) par++
        else impar++
    }
    console.log(`Pares: ${par} || Ímpares: ${impar}`)
}

parEImpar([1, 2, 3, 4, 5])