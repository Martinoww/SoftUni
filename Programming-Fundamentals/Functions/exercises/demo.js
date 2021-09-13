function factorialDivision(num1, num2) {
  let firstSum = 0;
  let secondSum = 0;
  let array = [num1, num2];
  for (let i = 0; i < array.length; i++) {
    let sum = 1;
    let currNum = Number(array[i]);
    for (let j = currNum; j >= 1; j--) {
      sum *= j;
      if (i == 0) {
        firstSum = sum;
      } else {
        secondSum = sum;
      }
    }
  }

  let result = firstSum / secondSum;
  console.log(result.toFixed(2));
}
factorialDivision(6, 2);
