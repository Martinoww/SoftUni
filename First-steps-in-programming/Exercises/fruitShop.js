//INPUT:
//	Цена на ягодите в лева – реално число в интервала [0.00 … 10000.00]
//	Количество на бананите в килограми – реално число в интервала [0.00 … 10000.00]
//	Количество на портокалите в килограми – реално число в интервала [0.00 … 10000.00]
//	Количество на малините в килограми – реално число в интервала [0.00 … 10000.00]
//	Количество на ягодите в килограми – реално число в интервала [0.00 … 10000.00]
//EXPLANATIONS:
//Цена на малините за килограм: 24 лв.
//cена на портокалите за килограм: 24 – (0.4 * 24) = 14.4 лв.
//Цена на бананите за килограм: 24 – (0.8 * 24) = 4.8 лв.
//Сума за малините: 6.5 * 24 = 156 лв.
//Сума за портокалите: 3.3 * 14.4 = 47.52 лв.
//Сума за бананите: 4.8 * 10 = 48 лв.
//Сума за ягодите: 1.7 * 48 = 81.6 лв.
//Обща сума: 156 + 47.52 + 48 + 81.6 = 333.12 лв.
//Additional information:
//	цената на малините е на половина по-ниска от тази на ягодите;
//	цената на портокалите е с 40% по-ниска от цената на малините;
//	цената на бананите е с 80% по-ниска от цената на малините.
function solve(input) {
//taking the input:
const priceOfStrawberries = Number(input[0]);
const quantityOfBananasInKg = Number(input[1]);
const quantityOfOrangesInKg = Number(input[2]);
const quantityOfRaspberriesInKg = Number(input[3]);
const quantityOfstrawberriesInKg = Number(input[4]);
//Solving
const priceOfRaspberries = priceOfStrawberries / 2;
const priceOfOranges = priceOfRaspberries - (priceOfRaspberries * 0.4);
const priceOfBananas = priceOfRaspberries - (priceOfRaspberries * 0.8);
const sumOfRaspberries = quantityOfRaspberriesInKg * priceOfRaspberries;
const sumOfOranges = quantityOfOrangesInKg * priceOfOranges;
const sumOfBananas = quantityOfBananasInKg * priceOfBananas;
const sumOfStrawberries = quantityOfstrawberriesInKg * priceOfStrawberries;
const totalSum = sumOfRaspberries + sumOfOranges + sumOfBananas + sumOfStrawberries;
console.log(totalSum.toFixed(2)); 







}
solve(["48", "10", "3.3", "6.5", "1.7"]);
solve(["63.5", "3.57", "6.35", "8.15", "2.5"]);
