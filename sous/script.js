function sous(a,b) {
    if (typeof a == "number" && typeof b == "number") {
        if (a >b) {
           return a - b 
        }else{
            b - a
        }
    }
    retun -1
}

console.log(sous(4,2));

let demande = prompt("Donne moi ton nom age s'il te plait");
if (demande == 2018) {
    alert("merci de nous avoir donner votre age !!!!")
}else{
    alert ("Donner nous votre vrai age ")
}

// let demande = prompt("Donne moi ton nom age s'il te plait");
// let resutt = (demande > 18) ? "ces bien" : "ces mal";
// alert(resutt);

let i = 0;
while (i < 3) {
    
    i ++
    alert(i)
}
