function longestWord(chaine) {
    if (chaine === "string") {
        return Math.max(...chaine.split(' ').map((a)=> a.length))
    }

    return -1
}

console.log(longestWord("Hello world"));