//formula :сума = депозирана сума  + срок на депозита * ((депозирана сума * годишен лихвен процент ) / 12)
//Input:
//	Депозирана сума – реално число в интервала [0.00 … 10000.00];
//	Срок на депозита(в месеци) – цяло число[1..12];
//	Годишен лихвен процент – реално число в интервала [0.00 … 10000.00];
function solve(input) {
//Taking the input:
const depositSum = Number(input[0]);
const deadLineOfDeposit = Number(input[1]);
const yearInterestPercent = Number(input[2]);
//Solving:
const interest = depositSum * yearInterestPercent / 100;
const interestForMonth = interest / 12;
const totalSum = depositSum + (deadLineOfDeposit * interestForMonth);
console.log(totalSum);



}
solve(["200", "3", "5.7"]);
solve(["2350", "6", "7"]);
