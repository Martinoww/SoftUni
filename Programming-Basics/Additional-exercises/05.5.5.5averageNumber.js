function solve(input) {
  let n = Number(input[0]);
  let totalScore = 0;
  for (let i = 1; i <= n; i++) {
    totalScore += Number(input[i]);
  }
  let averageScore = totalScore / n;
  console.log(averageScore.toFixed(2));
}
solve(["4", "3", "2", "4", "2"]);
solve(["2", "6", "4"]);
solve(["3", "82", "43", "22"]);
solve(["4", "95", "23", "76", "23"]);
