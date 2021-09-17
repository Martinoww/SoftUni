function solve(n, k){
let result = [1];

for(let i = 1; i < n; i++){
let kNums = result.slice(-k);
let newNum = kNums.reduce((a,b) => a + b);
result.push(newNum);
}
return result;

}
solve(6, 3)