function solve(fruit, weightInGrams, priceForKG) {
  let weightInKG = weightInGrams / 1000;
  let price = weightInKG * priceForKG;
  console.log(`I need $${price.toFixed(2)} to buy ${weightInKG.toFixed(2)} kilograms ${fruit}.`);
}
solve("orange", 2500, 1.8);
