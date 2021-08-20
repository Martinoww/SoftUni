function solve(input) {
  let num = Number(input[0]);
  if (num % 2 === 0) {
    console.log(`even`);
  } else {
    console.log(`odd`);
  }
}
solve(["2"]);
solve(["3"]);
solve(["25"]);
solve(["1024"]);
