function maiorEMenor(nums) {
    let maior = nums[0]
    let menor = nums[0]
    for(let i = 1; i < nums.length; i++) {
        if(nums[i] > maior) maior = nums[i]
        else if(nums[i] < menor) menor = nums[i]
    }
    console.log(`Maior: ${maior} || Menor: ${menor}`)
}

maiorEMenor([1, 2, 3, 4, 5, 6, 7, 2])