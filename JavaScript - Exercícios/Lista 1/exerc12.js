function fatorialFor(num) {
    let fat = 1
    for(let i = num; i > 1; i--) {
        fat *= i
    }
    return fat
}

function fatorialRec(num) {
    if(num == 0) return 1
    else return num * fatorialRec(num - 1)
}

console.log(fatorialFor(0))
console.log(fatorialRec(0))
console.log(fatorialFor(4))
console.log(fatorialRec(4))
