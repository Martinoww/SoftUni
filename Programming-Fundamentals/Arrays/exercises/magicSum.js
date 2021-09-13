function magicSum(array, uniqueNumber) {
  for (let i = 0; i < array.length; i++) {
    let currentNumber = Number(array[i]);
    for (let j = i + 1; j < array.length; j++) {
      let secondNumber = Number(array[j]);
      let sum = currentNumber + secondNumber;
      if (sum == uniqueNumber) {
        console.log(`${array[i]} ${array[j]}`);
      }
    }
  }
}
magicSum([1, 2, 3, 4, 5, 6], 6);
