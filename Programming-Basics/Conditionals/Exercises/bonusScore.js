function solve(input) {
  let score = Number(input[0]);
  let bonusScore = 0.0;
  if (score <= 100) {
    bonusScore = 5;
  } else if (score > 1000) {
    bonusScore = score * 0.1;
  } else if (score >= 100) {
    bonusScore = score * 0.2;
  }
  if (score % 2 === 0) {
    bonusScore += 1;
  } else if (score % 10 === 5) {
    bonusScore += 2;
  }
  console.log(bonusScore);
  console.log(score + bonusScore);
}
solve(["15875"])

