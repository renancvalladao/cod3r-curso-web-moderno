function tipoTriangulo(a, b, c){
    if(a == b && b == c) return "Equilátero"
    else if(a == b || a == c || b == c) return "Isósceles"
    else return "Escaleno"
}

console.log(tipoTriangulo(1, 1, 1))
console.log(tipoTriangulo(1, 1, 2))
console.log(tipoTriangulo(1, 2, 3))