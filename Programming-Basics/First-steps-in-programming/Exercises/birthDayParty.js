//INPUT:
//Наем за залата – цяло число в интервала [100..10000]
//Explanations:
//наем за залата: 2250
//цена за тортата: 2250 * 20% = 450
//цена за напитки: 450 – 45% = 247.5
//цена за аниматор: 1 / 3 от 2250 = 750
//необходима сума: 2250 + 450 + 247.5 +750 = 3697.5
//ADDITIONAL INFORMSTION:
//	Торта  – цената ѝ е 20% от наема на залата
//	Напитки – цената им е 45% по-малко от тази на тортата
//	Аниматор – цената му е 1/3 от цената за наема на залата
function solve(input){
//Taking the input:
const rentForHall = Number(input[0]);
//Solving:
const priceOfCake = rentForHall * 0.2;
const priceOfDrinks = priceOfCake - (priceOfCake * 0.45);
const priceOfAnimator = rentForHall / 3;
const neededMoney = rentForHall + priceOfCake + priceOfDrinks + priceOfAnimator;
console.log(neededMoney);



}
solve(["2250"]);
solve(["3720"]);
