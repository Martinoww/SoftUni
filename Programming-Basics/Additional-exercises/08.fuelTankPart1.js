function solve(input) {
  const fuelType = input[0];
  const fuelLeftInLitres = Number(input[1]);

  if (fuelType === "Diesel") {
    if (fuelLeftInLitres >= 25) {
      console.log(`You have enough diesel.`);
    } else if (fuelLeftInLitres < 25) {
      console.log(`Fill your tank with diesel!`);
    }
  } else if (fuelType === "Gasoline") {
    if (fuelLeftInLitres >= 25) {
      console.log(`You have enough gasoline.`);
    } else if (fuelLeftInLitres < 25) {
      console.log(`Fill your tank with gasoline!`);
    }
  } else if (fuelType === "Gas") {
    if (fuelLeftInLitres >= 25) {
      console.log(`You have enough gas.`);
    } else if (fuelLeftInLitres < 25) {
      console.log(`Fill your tank with gas!`);
    }
  } else {
    console.log(`Invalid fuel!`);
  }
}
solve(["Gasoline", "25"]);
