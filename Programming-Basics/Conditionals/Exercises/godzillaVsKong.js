function solve(input) {
  let budget = Number(input[0]);
  let numOfStuntmen = Number(input[1]);
  let priceOfClothe = Number(input[2]);
  let priceForDecor = budget * 0.1;
  let pricePerClothe = numOfStuntmen * priceOfClothe;

  if (numOfStuntmen >= 150) {
    pricePerClothe *= 0.9;
  }
  let totalSumForMovie = pricePerClothe + priceForDecor;
  if (totalSumForMovie > budget) {
    let neededMoney = totalSumForMovie - budget;
    console.log(`Not enough money!
    Wingard needs ${neededMoney.toFixed(2)} leva more.`);
  } else {
    let moneyLeft = budget - totalSumForMovie;
    console.log(`Action!
    Wingard starts filming with ${moneyLeft.toFixed(2)} leva left.`);
  }
}
solve(["20000", "120", "55.5"]);
