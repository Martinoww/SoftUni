function addAndSubtract(numOne, numTwo, numThree) {
  function sum(firstNum, secondNum) {
    let result = firstNum + secondNum;
    return result;
  }

  function subtract(sumOfFirstAndSecondNum, numThree) {
    let result = sumOfFirstAndSecondNum - numThree;
    return result;
  }
  let result = subtract(sum(numOne, numTwo), numThree);
  return result;
}
let result = addAndSubtract(43, 58, 100);
console.log(result);
