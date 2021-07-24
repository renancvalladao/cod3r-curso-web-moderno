function mediaVetor(nums) {
    media = 0
    for(let i of nums) media += i
    media /= nums.length
    console.log("Media =", media)
}

mediaVetor([1, 2, 3, 4])