function addAndSubtract(numbers) {
  let oldSum = 0;
  let newSum = 0;
  let newArray = [];

  for (let i = 0; i < numbers.length; i++) {
    let currentNumber = numbers[i];
    oldSum += Number(currentNumber);
    if (currentNumber % 2 == 0) {
        currentNumber = currentNumber + i;
        newArray.push(currentNumber);
      newSum += Number(currentNumber);
    } else {
      currentNumber = currentNumber - i;
      newArray.push(currentNumber);
      newSum += Number(currentNumber);
    }
  }
console.log(newArray);
console.log(oldSum);
console.log(newSum);

}
// addAndSubtract([5, 15, 23, 56, 35]);
// // console.log("======");
addAndSubtract([-5, 11, 3, 0, 2]);
