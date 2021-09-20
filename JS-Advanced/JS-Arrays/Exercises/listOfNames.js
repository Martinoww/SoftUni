function solve(arr){
let sorted = arr.sort(compareFn)
let num = 1
for(let el of sorted){
    console.log(`${num++}.${el}`);
}


function compareFn(a, b){
    return a.localeCompare(b);
}
}
solve(["John", "Bob", "Christina", "Ema"])