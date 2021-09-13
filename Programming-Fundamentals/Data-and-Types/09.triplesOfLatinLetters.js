function triples(n){
    
for(let a = 0; a < n; a++){
    let printLine = '';
    let letter1 = String.fromCharCode(97 + a);
    for(let b = 0; b < n; b++){
        let letter2 = String.fromCharCode(97 + b);
        printLine = `${letter1}${letter2}`;
        for(let c = 0; c < n; c++){
            let letter3 = String.fromCharCode(97 + c);
            printLine = `${letter1}${letter2}${letter3}`;
            console.log(printLine)
        }
    }
}


}
triples(3);