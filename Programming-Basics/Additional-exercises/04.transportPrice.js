function solve(input) {
  const numOfKilometers = Number(input[0]);
  const timeOfDay = input[1];
  let price = 0;
  if (timeOfDay === "day") {
    if (numOfKilometers >= 20 && numOfKilometers < 100) {
      price = 0.09 * numOfKilometers;
      console.log(price.toFixed(2));
    } else if (numOfKilometers >= 100) {
      price = 0.06 * numOfKilometers;
      console.log(price.toFixed(2));
    } else {
      price = 0.79 * numOfKilometers + 0.7;
      console.log(price.toFixed(2));
    }
  } else if (timeOfDay === "night") {
    if (numOfKilometers >= 20 && numOfKilometers < 100) {
      price = 0.09 * numOfKilometers;
      console.log(price.toFixed(2));
    } else if (numOfKilometers >= 100) {
      price = 0.06 * numOfKilometers;
      console.log(price.toFixed(2));
    } else {
      price = 0.9 * numOfKilometers + 0.7;
      console.log(price.toFixed(2));
    }
}
}
solve(["5", "night"]);
