function sumOfLastAndFirstArray(array) {
  let firstNum = Number(array[0]);
  let secondNum = Number(array[array.length - 1]);
  let sum = firstNum + secondNum;
  console.log(sum);
}
sumOfLastAndFirstArray([20, 30, 40]);
console.log("------");

sumOfLastAndFirstArray([10, 17, 22, 33]);
console.log("------");

sumOfLastAndFirstArray([11, 58, 69]);
