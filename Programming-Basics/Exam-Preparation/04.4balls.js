function solve(input) {
  let numOfBalls = Number(input[0]);
  let points = 0;
  let pointFromRedBalls = 0;
  let pointFromOrangeBalls = 0;
  let pointFromYellowBalls = 0;
  let pointFromWhiteBalls = 0;
  let devidesFromBlackBalls = 0;
  let otherColorBalls = 0;

  for (let i = 1; i <= numOfBalls; i++) {
    let color = input[i];
    if (color === "red") {
      points += 5;
      pointFromRedBalls++;
      continue;
    } else if (color === "orange") {
      points += 10;
      pointFromOrangeBalls++;
      continue;
    } else if (color === "yellow") {
      points += 15;
      pointFromYellowBalls++;
      continue;
    } else if (color === "white") {
      points += 20;
      pointFromWhiteBalls++;
      continue;
    } else if (color === "black") {
      points = Math.floor(points / 2);
      devidesFromBlackBalls++;
      continue;
    }

    if (color !== "red") {
      otherColorBalls++;
      continue;
    } else if (color !== "orange") {
      otherColorBalls++;
      continue;
    } else if (color !== "yellow") {
      otherColorBalls++;
      continue;
    } else if (color !== "white") {
      otherColorBalls++;
      continue;
    } else if (color !== "black") {
      otherColorBalls++;
      continue;
    }
  }
console.log(`Total points: ${points}`)
console.log(`Points from red balls: ${pointFromRedBalls}`)
console.log(`Points from orange balls: ${pointFromOrangeBalls}`)
console.log(`Points from yellow balls: ${pointFromYellowBalls}`)
console.log(`Points from white balls: ${pointFromWhiteBalls}`)
console.log(`Other colors picked: ${otherColorBalls}`)
console.log(`Divides from black balls: ${devidesFromBlackBalls}`)


}
solve(["3", "white", "black", "pink",]);
