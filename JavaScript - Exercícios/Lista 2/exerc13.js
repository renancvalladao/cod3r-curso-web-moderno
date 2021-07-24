function filtrarNumeros(array) {
    console.log(array.filter(e => typeof e === "number"))
}

filtrarNumeros(["Javascript", 1, "3", "Web", 20]) // retornará [1, 20]
filtrarNumeros(["a", "c"]) // retornará []