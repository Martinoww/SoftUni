function solve(input) {
  let n = Number(input[0]);
  let isValid = (n >= 100 && n <= 200) || n === 0;
  if (!isValid) {
    console.log(`invalid`);
  }
}
solve(["100"]);
