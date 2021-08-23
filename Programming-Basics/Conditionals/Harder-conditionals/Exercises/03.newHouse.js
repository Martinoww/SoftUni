function solve(input) {
  let priceOfRose = 5;
  let priceOfDahlia = 3.8;
  let priceOfTulips = 2.8;
  let priceOfNarcissus = 3;
  let priceOfGladiolus = 2.5;
  let typeOfFlower = input[0];
  let numOfFlowers = Number(input[1]);
  let budget = Number(input[2]);
  let finalPrice = 0;

  switch (typeOfFlower) {
    case "Roses":
      if (numOfFlowers > 80) {
        finalPrice -= priceOfRose * numOfFlowers * 0.1;
      }
      finalPrice += priceOfRose * numOfFlowers;
      break;
    case "Dahlias":
      if (numOfFlowers > 90) {
        finalPrice -= priceOfDahlia * numOfFlowers * 0.15;
      }
      finalPrice += priceOfDahlia * numOfFlowers;
      break;
    case "Tulips":
      if (numOfFlowers > 80) {
        finalPrice -= priceOfTulips * numOfFlowers * 0.15;
      }
      finalPrice += priceOfTulips * numOfFlowers;
      break;
    case "Narcissus":
      if (numOfFlowers < 120) {
        finalPrice += priceOfNarcissus * numOfFlowers * 0.15;
      }
      finalPrice += priceOfNarcissus * numOfFlowers;
      break;
    case "Gladiolus":
      if (numOfFlowers < 80) {
        finalPrice += priceOfGladiolus * numOfFlowers * 0.2;
      }
      finalPrice += priceOfGladiolus * numOfFlowers;
  }
  if (budget >= finalPrice) {
    let moneyLeft = budget - finalPrice;
    console.log(
      `Hey, you have a great garden with ${numOfFlowers} ${typeOfFlower} and ${moneyLeft.toFixed(
        2
      )} leva left.`
    );
  } else {
    let moneyNeeded = Math.abs(budget - finalPrice);
    console.log(
      `Not enough money, you need ${moneyNeeded.toFixed(2)} leva more.`
    );
  }
}
// solve(["Roses", "55", "250"]);

// solve(["Tulips", "88", "260"]);

solve(['Dahlias', "112", "460"]);
