Array.prototype.forEach2 = function(func) {
    for(let i = 0; i < this.length; i++) {
        func(this[i], i, this )
    }
}

const aprovados = ["Agatha", "Aldo", "Daniel", "Raquel"]

aprovados.forEach2(function(nome, indice) {
    console.log(`${indice + 1}) ${nome}`)
})

aprovados.forEach2(nome => console.log(nome))

const exibirAprovados = aprovado => console.log(aprovado)
aprovados.forEach2(exibirAprovados)