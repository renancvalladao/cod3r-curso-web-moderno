function lerArquivo(nomeArquivo){
    const fs = require("fs")
    const caminho = `${__dirname}/${nomeArquivo}`
    return new Promise(resolve => {
        fs.readFile(caminho, (err, conteudo) => {
            resolve(conteudo.toString())
        })
        console.log("Lembrando que essa leitura é assíncrona...")
        console.log("Então o programa não fica esperando a leitura")
    })
}

lerArquivo("dados.txt")
    .then(conteudo => conteudo.split("\r\n"))
    .then(linhas => linhas.join(","))
    .then(conteudo => `O valor final é: ${conteudo}`)
    .then(console.log)