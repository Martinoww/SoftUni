function solve(input) {
  const budget = Number(input[0]);
  const season = input[1];
  let moneySpent = 0;
  let destination = "";
  if (budget <= 100) {
    destination = `Bulgaria`;
    if (season === "summer") {
      moneySpent = budget * 0.3;
      console.log(`Somewhere in ${destination}
Camp - ${moneySpent.toFixed(2)}`);
    } else if (season === "winter") {
      moneySpent = budget * 0.7;
      console.log(`Somewhere in ${destination}
Hotel - ${moneySpent.toFixed(2)}`);
    }
  } else if (budget <= 1000) {
    destination = `Balkans`;
    if (season === "summer") {
      moneySpent = budget * 0.4;
      console.log(`Somewhere in ${destination}
Camp - ${moneySpent.toFixed(2)}`);
    } else if (season === "winter") {
      moneySpent = budget * 0.8;
      console.log(`Somewhere in ${destination}
Hotel - ${moneySpent.toFixed(2)}`);
    }
  } else if (budget > 1000) {
    destination = `Europe`;
    if (season === "summer") {
      moneySpent = budget * 0.9;
      console.log(`Somewhere in ${destination}
Hotel - ${moneySpent.toFixed(2)}`);
    } else if (season === "winter") {
      moneySpent = budget * 0.9;
      console.log(`Somewhere in ${destination}
Hotel - ${moneySpent.toFixed(2)}`);
    }
  }
}
solve(["50", "summer"]);
solve(["75", "winter"]);
solve(["312", "summer"]);
solve(["678.53", "winter"]);
solve(["1500", "summer"]);
