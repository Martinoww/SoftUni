function solve(input) {
  let n = Number(input.shift());
  let sum = 0;
  while (sum < n) {
    let currentNumber = Number(input.shift());
    sum += currentNumber;
  }
  console.log(sum);
}
solve(["20",
"1",
"2",
"3",
"4",
"5",
"6"])

