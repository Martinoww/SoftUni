function solve(arr){
let sorted = arr.sort((a, b) => a - b)
let result = sorted.slice(0, 2);
console.log(result.join(' '));
}
solve([30, 15, 50, 5]);