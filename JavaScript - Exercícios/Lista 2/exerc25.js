function buscarPalavrasSemelhantes(string, array) {
    console.log(array.filter(e => e.includes(string)))
}

buscarPalavrasSemelhantes("pro", ["programação", "mobile", "profissional"]) // retornará ["programação", "profissional"]
buscarPalavrasSemelhantes("python", ["javascript", "java", "c++"]) // retornará []