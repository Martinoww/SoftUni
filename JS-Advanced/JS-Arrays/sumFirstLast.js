function solve(arr){
let firstNum = arr.slice(0, 1);
let lastNum = arr.slice(-1);
let newArr = firstNum.concat(lastNum);
let result = newArr.map(Number).reduce((a, b) => a + b);
return result;

}
solve(['5', '10'])