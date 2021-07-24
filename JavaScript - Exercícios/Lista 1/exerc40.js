function verificaConceito(notas) {
    for(let i of notas) {
        if(i > 0 && i < 4.9) console.log(`${i}:D`)
        else if(i < 6.9) console.log(`${i}:C`)
        else if(i < 8.9) console.log(`${i}:B`)
        else if(i < 10) console.log(`${i}:A`)
    }
}

verificaConceito([1, 5, 7, 9])