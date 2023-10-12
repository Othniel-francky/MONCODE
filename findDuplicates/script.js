function findDuplicates(tab) {
    if (Array.isArray(tab) && tab.every(a => Number.isInteger(a)) && tab.length > 0) {
        let newTab = tab.filter((a,b) => tab.indexOf(a) != b)
        return newTab
    }
    return -1
}
console.log(findDuplicates([1,3,5,3]));