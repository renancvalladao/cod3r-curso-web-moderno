const { compact } = require("lodash")

console.log(this === globalThis)
console.log(this === module)

console.log(this === module.exports)
console.log(this === exports)

function logThis() {
    console.log("Dentro de uma função...")
    console.log(this === exports)
    console.log(this === module.exports)
    console.log(this === globalThis)
}

logThis()