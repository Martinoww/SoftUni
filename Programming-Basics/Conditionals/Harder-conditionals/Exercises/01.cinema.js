function solve(input) {
  let priceForPremiere = 12;
  let priceForNormalProjection = 7.5;
  let priceDiscount = 5;
  let typeOfProjection = input[0];
  let numOfRows = Number(input[1]);
  let numOfCollums = Number(input[2]);
  let income = 0;
  let totalCountOfPlaces = numOfRows * numOfCollums;

  switch (typeOfProjection) {
    case "Premiere":
      income = totalCountOfPlaces * priceForPremiere;
      break;
    case "Normal":
      income = totalCountOfPlaces * priceForNormalProjection;
      break;
    case "Discount":
      income = totalCountOfPlaces * priceDiscount;
      break;
  }
  console.log(`${income.toFixed(2)} leva`);
}
solve(["Premiere", "10", "12"]);
solve(["Normal",
"21",
"13"])
solve(["Discount",
"12",
"30"])

