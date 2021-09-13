function solve(numbers) {
  let sum = 0;
  let numbersAsString = numbers.toString();
  for (let i = 0; i < numbersAsString.length; i++) {
    sum += Number(numbersAsString[i]);
  }
  console.log(sum);
}
solve(245678);
solve(97561);
solve(543);
