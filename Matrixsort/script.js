function matrixSort(arr) {
    if (Array.isArray(arr) && arr.every((item)=> Array.isArray(item) && item.every((a)=>typeof a == "number"))) {
        let taille = arr [0].length
        if (arr.every((item)=> item.length == taille)) {
            let flag = arr.flat().sort((a,x)=> a-x)
            
            let tab = 
        }
    }
}