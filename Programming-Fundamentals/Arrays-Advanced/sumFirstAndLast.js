function sumFirstAndLast(arr){
let firstNum = Number(arr.shift())
let secondNum = Number(arr.pop())
console.log(firstNum + secondNum);
}
sumFirstAndLast(['20', '30', '40'])