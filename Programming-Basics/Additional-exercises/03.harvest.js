function solve(input) {
  const x = Number(input[0]);
  const y = Number(input[1]);
  const z = Number(input[2]);
  const numOfWorkers = Number(input[3]);

  let totalGrape = x * y;
  let wine = (0.4 * totalGrape) / 2.5;
  let difference = Math.abs(wine - z);
  let wineForWorkers = 0;
  if (wine < z) {
    console.log(
      `It will be a tough winter! More ${Math.floor( difference)} liters wine needed.`);
  } else if (wine >= z) {
    wineForWorkers = difference / numOfWorkers;
    console.log(`Good harvest this year! Total wine: ${Math.floor(wine)} liters.`);
    console.log(
      `${Math.ceil(difference)} liters left -> ${Math.ceil(wineForWorkers)} liters per person.`
    );
  }
}
solve(["650", "2", "175", "3"]);
