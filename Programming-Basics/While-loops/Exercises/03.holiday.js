function solve(input) {
  let neededMoneyForExcursion = Number(input.shift());
  let moneyThatSheHas = Number(input.shift());
  let numOfSpending = 0;
  let passedDays = 0;
  while (moneyThatSheHas < neededMoneyForExcursion) {
    let typeOfAction = input.shift();
    let amountOfMoney = Number(input.shift());
    passedDays++;
    if (typeOfAction === "spend") {
      if (moneyThatSheHas < amountOfMoney) {
        amountOfMoney = moneyThatSheHas;
      }
      moneyThatSheHas -= amountOfMoney;
      numOfSpending++;
      if (numOfSpending == 5) {
        console.log(`You can't save the money.`)
        console.log(passedDays);
        break;
      }
    } else if (typeOfAction === "save") {
      numOfSpending = 0
      moneyThatSheHas += amountOfMoney;
      
    }
  }
  if (moneyThatSheHas >= neededMoneyForExcursion) {
    console.log(`You saved the money for ${passedDays} days.`);
  }
}
solve(["2000",
"1000",
"spend",
"1200",
"save",
"2000"])


