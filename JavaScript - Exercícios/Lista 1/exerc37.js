function pa(n, a1, r) {
    soma = 0
    for(let i = 0; i < n; i++) {
        console.log(a1 + i * r)
        soma += a1 + i * r
    }
    console.log("Soma =", soma)
}

function pg(n, a1, r) {
    soma = 0
    for(let i = 0; i < n; i++) {
        console.log(a1 * (r ** i))
        soma += a1 * (r ** i)
    }
    console.log("Soma =", soma)
}

pa(3, 1, 2)
pg(4, 4, 2)