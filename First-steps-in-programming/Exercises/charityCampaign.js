//INPUT:
//	Броят на дните, в които тече кампанията – цяло число в интервала [0 … 365]
//	Броят на сладкарите – цяло число в интервала [0 … 1000]
//	Броят на тортите – цяло число в интервала [0… 2000]
//	Броят на гофретите – цяло число в интервала [0 … 2000]
//	Броят на палачинките – цяло число в интервала [0 … 2000]
//Explanations:
//Изчисляваме сумата, която се изкарва на ден за всеки един от продуктите, направени от 1 сладкар:
//Торти: 14 * 45 = 630 лв.;
//Гофрети: 30 * 5.80 = 174 лв.;
//Палачинки: 16 * 3.20 = 51.20 лв.
//Обща сума за един ден: (630 + 174 + 51.20) * 8 = 6841.60 лв.
//Сума събрана от цялата кампания: 6841.60 * 23 = 157356.8лв.
//Сума след покриване на разходите: 157356.8 - 1/8 от 157356.8 = 137687.2 лв.
//Additional inf:
//	Торта - 45 лв.
//	Гофрета - 5.80 лв.
//	Палачинка – 3.20 лв.
//1/8 от крайната сума ще бъде използвана за покриване на разходите за продуктите по време на кампанията.
function charity(input) {
//taking the input:
const numberOfDays = Number(input[0]);
const numberOfChefs = Number(input[1]);
const numberOfCakes = Number(input[2]);
const numberOfWaffles = Number(input[3]);
const numberOfPancakes = Number(input[4]);
let priceOfCake = 45;
let priceOfWaffle = 5.8;
let priceOfPancake = 3.2;
//Solving:
const sumOfCakesForOneDay = numberOfCakes * priceOfCake;
const sumOfWafflesForOneDay = numberOfWaffles * priceOfWaffle;
const sumOfPancakesForOneDay = numberOfPancakes * priceOfPancake;
const totalSumForOneDay = (sumOfCakesForOneDay + sumOfWafflesForOneDay + sumOfPancakesForOneDay) * numberOfChefs;
const totalSumForCampaign = totalSumForOneDay * numberOfDays;
const totalSumAfterExpenses = totalSumForCampaign - (totalSumForCampaign / 8);

console.log(totalSumAfterExpenses);

}
charity(["23", "8", "14", "30", "16"]);
charity(["131", "5", "9", "33", "46"]);