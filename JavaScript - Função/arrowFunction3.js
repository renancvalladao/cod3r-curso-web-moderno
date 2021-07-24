let comparaComThis = function(param) {
    console.log(this === param)
}

comparaComThis(globalThis)

const obj = {}
comparaComThis = comparaComThis.bind(obj)
comparaComThis(globalThis)
comparaComThis(obj)

let comparaComThisArrow = param => console.log(this === param)
comparaComThisArrow(globalThis)
comparaComThisArrow(module.exports) // Ou this

comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(obj) // O bind não muda o funcionamento da função
comparaComThisArrow(module.exports)

/**
 * Em função normal, o this dentro dela aponta para o objeto global
 * no node e para window no browser.
 * Já na arrow function o this é associado ao local que a função foi
 * definida, neste caso o módulo.
 */