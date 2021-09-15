function solve(num){
let arrOfStr = num.toString().split('');
let element = arrOfStr[0];
let newArr = arrOfStr.filter((x) => x == element);
let result;
let arrOfNums = arrOfStr.map((x) => Number(x));

if(newArr.length == arrOfStr.length){
 console.log(`true`);
result = arrOfNums.reduce((a, b) => a + b);
console.log(result);
}else {
console.log(`false`);
result = arrOfNums.reduce((a, b) => a + b);
console.log(result);
}

}
solve(1234)