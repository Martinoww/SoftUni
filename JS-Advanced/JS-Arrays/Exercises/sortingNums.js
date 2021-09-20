function solve(arrOfNums){
let rotations = Math.floor(arrOfNums.length / 2);
let sorted = arrOfNums.sort((a, b) => a - b);
let result = [];
while(sorted.length !== 0){
result.push(sorted.shift(), sorted.pop());
}
return result;

}
solve([1, 65, 3, 52, 48, 31, -3, 18, 56])