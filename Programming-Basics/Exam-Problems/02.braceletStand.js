function solve(input){
let daysLeft = 5;
let moneyPerDay = Number(input[0]);
let profitPerDay = Number(input[1]);
let expenses = Number(input[2]);
let priceOfPresent = Number(input[3]);
let totalProfit = (moneyPerDay * daysLeft) + (profitPerDay * daysLeft);
let leftMoneyAfterExpenses = totalProfit - expenses;

if(leftMoneyAfterExpenses >= priceOfPresent){
    console.log(`Profit: ${leftMoneyAfterExpenses.toFixed(2)} BGN, the gift has been purchased.`)
}else{
    console.log(`Insufficient money: ${(priceOfPresent - leftMoneyAfterExpenses).toFixed(2)} BGN.`)
}



}
solve(["15.20",
"200.00",
"7.30",
"1500.12"])
