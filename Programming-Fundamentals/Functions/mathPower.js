function mathPower(num, numOfPower) {
  let result = 1;
  for (let i = 0; i < numOfPower; i++) {
    result *= num;
  }
  console.log(result);
}
mathPower(2, 8);

mathPower(3, 4);
