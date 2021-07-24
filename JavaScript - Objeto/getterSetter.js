const sequencia = {
    _valor: 1, // Convenção para atributo privado
    get valor() { return this._valor++ }, // Incrementa depois do retrun
    set valor(valor) {
        if(valor > this._valor) {
            this._valor = valor
        }    
    }
}

console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 1000
console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 900
console.log(sequencia.valor, sequencia.valor)

/**
 * Poderia criar um atributo privado com let _valor = 1
 */