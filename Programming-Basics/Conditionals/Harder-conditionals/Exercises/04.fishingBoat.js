function solve(input) {
  const priceForRentDurringSpring = 3000;
  const priceForRentDurringSummerAndAutumn = 4200;
  const priceForRentDurringWinter = 2600;
  const budget = Number(input[0]);
  const season = input[1];
  const numOfFishermen = Number(input[2]);
  let finalPrice = 0;
  switch (season) {
    case "Spring":
      finalPrice += priceForRentDurringSpring;
      break;
    case "Summer":
      finalPrice += priceForRentDurringSummerAndAutumn;
      break;
    case "Autumn":
      finalPrice += priceForRentDurringSummerAndAutumn;
      break;
    case "Winter":
      finalPrice += priceForRentDurringWinter;
      break;
  }
  if (numOfFishermen <= 6) {
    finalPrice *= 0.9;
  } else if (numOfFishermen >= 7 && numOfFishermen <= 11) {
    finalPrice *= 0.85;
  } else if (numOfFishermen > 12) {
    finalPrice *= 0.75;
  }
  if (numOfFishermen % 2 === 0 && season != "Autumn") {
    finalPrice = finalPrice - (finalPrice * 0.05);
  }
  if (budget >= finalPrice) {
    let moneyLeft = budget - finalPrice;
    console.log(`Yes! You have ${moneyLeft.toFixed(2)} leva left.`);
  } else {
    let moneyNeeded = Math.abs(budget - finalPrice);
    console.log(`Not enough money! You need ${moneyNeeded.toFixed(2)} leva.`);
  }
}
solve(["3000", "Summer", "10"]);

solve(["3600", "Autumn", "6"]);

 solve(["2000", "Winter", "13"]);
