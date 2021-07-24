const url = "http://files.cod3r.com.br/curso-js/funcionarios.json"
const axios = require("axios")

const getChines = (obj) => obj.pais === "China"
const getMulher = (obj) => obj.genero === "F"
const getMenor = (menor, atual) => menor = atual.salario < menor.salario ? menor = atual : menor


axios.get(url).then(response => {
    const funcionarios = response.data
    //console.log(funcionarios)

    // Mulher chinesa com menor salário?
    const f = funcionarios
        .filter(getChines)
        .filter(getMulher)
        .reduce(getMenor)

    console.log(f)
})

