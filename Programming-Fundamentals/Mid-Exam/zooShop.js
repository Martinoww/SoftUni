function zooShop(input) {
  let [qtityFood, qtityHay, qtityCover, pigWeight] = input.map(Number);
  let daysForRotation = 30;
  let qtityFoodInGrams = qtityFood * 1000;
  let qtityHayInGrams = qtityHay * 1000;
  let qtityCoverInGrams = qtityCover * 1000;
  let pigWeightInGrams = pigWeight * 1000;

  for (let i = 1; i <= daysForRotation; i++) {
    qtityFoodInGrams -= 300;
    if (i % 2 === 0) {
      qtityHayInGrams -= qtityFoodInGrams * 0.05;
    }
    if (i % 3 === 0) {
      qtityCoverInGrams -= pigWeightInGrams / 3;
    }
    if (
      qtityHayInGrams <= 0 ||
      qtityCoverInGrams <= 0 ||
      qtityFoodInGrams <= 0
    ) {
      break;
    }
  }

  if (qtityHayInGrams <= 0 || qtityCoverInGrams <= 0 || qtityFoodInGrams <= 0) {
    console.log(`Merry must go to the pet store!`);
  } else {
    console.log(
      `Everything is fine! Puppy is happy! Food: ${(
        qtityFoodInGrams / 1000
      ).toFixed(2)}, Hay: ${(qtityHayInGrams / 1000).toFixed(2)}, Cover: ${(
        qtityCoverInGrams / 1000
      ).toFixed(2)}.`
    );
  }
}
zooShop(["9", "5", "5.2", "1"]);
