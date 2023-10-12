function multi(nbr) {
    if (typeof nbr === "number") {
        let somme = "";
        for (let idx = 1; idx <= 6; idx++) {
            somme += `${ nbr * idx}`
            
        }
        return `${somme}...,${nbr*10}`
    }
    return -1
}

console.log(multi(2));