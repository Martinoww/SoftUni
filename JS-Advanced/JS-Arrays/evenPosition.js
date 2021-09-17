function solve(arr){
const result = arr.filter((v, i) => i % 2 == 0);
console.log(result.join(' '));
}
solve(['20', '30', '40', '50', '60'])