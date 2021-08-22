function solve(input) {
  let n = Number(input[0]);
  let isValid = n >= -100 && n <= 100 && n != 0;
  if (isValid) {
    console.log(`Yes`);
  } else {
    console.log(`No`);
  }
}
solve(["99"]);
