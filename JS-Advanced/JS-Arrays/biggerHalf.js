function solve(arr){
const sorted = arr.sort((a, b) => a - b);
let result;
if(sorted.length % 2 === 0){
result = sorted.slice(sorted.length / 2);
}else{
let start = Math.floor(sorted.length / 2);
result = sorted.slice(start);
}
return result;


}
solve([3, 19, 14, 7, 2, 19, 6]);
solve([4, 7, 2, 5]);