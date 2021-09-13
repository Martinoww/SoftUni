function evenAndOddSubtraction(numbers) {
  let sumODD = 0;
  let sumEVEN = 0;
  for (let i = 0; i < numbers.length; i++) {
    let num = Number(numbers[i]);
    if (num % 2 == 0) {
      sumEVEN += num;
    } else {
      sumODD += num;
    }
  }
  console.log(sumEVEN - sumODD);
}
evenAndOddSubtraction(["1", "2", "3", "4", "5", "6"]);
console.log("====");
evenAndOddSubtraction(["3", "5", "7", "9"]);
console.log("====");
evenAndOddSubtraction(["2", "4", "6", "8", "10"]);
