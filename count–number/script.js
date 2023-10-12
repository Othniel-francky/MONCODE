function countNumber(num) {
    if (!Number.isInteger(num) || num < 0) {
        return -1
    }

    return num.toString().split('').reduce((a,x)=> (+a)+(+x))
}

console.log(countNumber(123));  