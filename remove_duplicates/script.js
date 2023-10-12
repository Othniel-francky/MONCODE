function remove_duplicates(t) {
    if (Array.isArray(t)) {
        return t.filter((a,b) => t.indexOf(a) == b)
    }else{
        return -1
    }
}

console.log(remove_duplicates([1,3,4,8,1,9]));
console.log(remove_duplicates("jjk;;;k"));
