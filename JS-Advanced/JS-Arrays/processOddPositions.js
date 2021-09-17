function solve(arr){
let result = arr.filter((v, i) => i % 2 != 0).map(x => x * 2).reverse().join(' ');
return result
}
console.log(solve([10, 15, 20, 25]));