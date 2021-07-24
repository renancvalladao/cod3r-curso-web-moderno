function inverter(obj) {
    const resultado = {}
    for(let key in obj) {
        resultado[obj[key]] = key
    }
    console.log(resultado)
}

inverter({ a: 1, b: 2, c: 3}) // retornará { 1: "a", 2: "b", 3: "c"}