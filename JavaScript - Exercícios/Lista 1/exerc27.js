function comparaAltura(alt1, taxa1, alt2, taxa2) {
    if(alt1 != alt2) {
        let i = 0
        if(alt1 > alt2 && taxa2 > taxa1) {
            while(alt2 < alt1) {
                alt1 += taxa1
                alt2 += taxa2
                i++
            }
            console.log(`Após ${i} anos a menor irá passar`)
        } else if(alt2 > alt1 && taxa1 > taxa2) {
            while(alt1 < alt2) {
                alt1 += taxa1
                alt2 += taxa2
                i++
            }
            console.log(`Após ${i} anos a menor irá passar`)
        } else {
            console.log("A menor não vai passar a maior")
        }
    } else {
        console.log("Têm a mesma altura")
    }
}

comparaAltura(150, 2, 130, 4)