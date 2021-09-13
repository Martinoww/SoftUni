function solve(input) {
  let [days, dailyPlunder, target] = input.map(Number);
  let totalPlunder = 0;
  let bonusPlunder = dailyPlunder * 0.5;

  for (let i = 1; i <= days; i++) {
    totalPlunder += dailyPlunder;
    if (i % 3 == 0) {
      totalPlunder += bonusPlunder;
    }
    if (i % 5 === 0) {
      totalPlunder = totalPlunder - totalPlunder * 0.3;
    }
  }
  if (totalPlunder >= target) {
    console.log(`Ahoy! ${totalPlunder.toFixed(2)} plunder gained.`);
  } else {
    let percentage = (totalPlunder / target) * 100;
    console.log(`Collected only ${percentage.toFixed(2)}% of the plunder.`);
  }
}
solve(["10", "20", "380"]);
