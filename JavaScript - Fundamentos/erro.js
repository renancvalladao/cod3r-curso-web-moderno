function tratarErroELancar(erro) {
    // throw new Error("...")
    // throw 10
    // throw true
    // throw "Mensagem"
    throw {
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
}

function imprimirNomeGritado(obj) {
    try { // Tenta executar o que está aqui dentro
        console.log(obj.name.toUpperCase() + "!!!")
    } catch (e) { // Se ocorrer erro entra aqui
        tratarErroELancar(e)
    } finally { // Executa mesmo tendo erro ou não
        console.log("Final")
    }
}

const obj = { nome: "Roberto"}
imprimirNomeGritado(obj)