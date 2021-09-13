function sumOfEvenNumbers(numbers) {
  let sum = 0;

  for (let i = 0; i < numbers.length; i++) {
    let num = Number(numbers[i]);
    if (num % 2 == 0) {
      sum += num;
    } else {
      continue;
    }
  }
  console.log(sum);
}
sumOfEvenNumbers(["1", "2", "3", "4", "5", "6"]);
console.log("====");
sumOfEvenNumbers(["3", "5", "7", "9"]);
console.log("====");
sumOfEvenNumbers(["2", "4", "6", "8", "10"]);
