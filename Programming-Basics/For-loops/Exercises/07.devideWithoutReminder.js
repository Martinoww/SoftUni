function solve(input) {
let n = Number(input.shift());
 let p1 = 0;
let p2 = 0;
let p3 = 0;

for(let i = 0; i < n; i++){
    let number = Number(input.shift());
    if(number % 2 === 0){
        p1++
    }
    if(number % 3 === 0){
        p2++
    }
    if(number % 4 === 0){
        p3++
    }
}
console.log(`${(p1 / n * 100).toFixed(2)}%`)
console.log(`${(p2 / n * 100).toFixed(2)}%`)
console.log(`${(p3 / n * 100).toFixed(2)}%`)


}
solve(["10", "680", "2", "600", "200", "800", "799", "199", "46", "128", "65"]);
