function solve(arr){
let result = []
let sideA = 0;
let sideB = 0;

for(let i = 0; i < arr.length; i++){
sideA += arr[i][i] 
sideB += arr[i][arr.length - 1 - i];
}
result.push(sideA);
result.push(sideB);
console.log(result.join(" "));
}
solve([[3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]]);
   