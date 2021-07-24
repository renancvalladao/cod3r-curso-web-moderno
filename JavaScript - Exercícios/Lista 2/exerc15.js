function receberSomenteOsParesDeIndicesPares(array) {
    console.log(array.filter((e, i) => e % 2 == 0 && i % 2 == 0))
}

receberSomenteOsParesDeIndicesPares([1, 2, 3, 4]) // retornará []
receberSomenteOsParesDeIndicesPares([10, 70, 22, 43]) // retornará [10, 22]