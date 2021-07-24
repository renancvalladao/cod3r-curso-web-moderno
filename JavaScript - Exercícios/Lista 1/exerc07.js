function bhaskara(a, b, c) {
    let delta = b ** 2 - (4 * a * c)
    if (delta < 0) {
        return "Delta é negativo"
    }
    let x = []
    x.push((-b + Math.sqrt(delta)) / (2 * a))
    x.push((-b - Math.sqrt(delta)) / (2 * a))
    return x
}

console.log(bhaskara(1, 3, 2))