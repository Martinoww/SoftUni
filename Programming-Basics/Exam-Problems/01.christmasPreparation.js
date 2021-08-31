function solve(input){
let priceForOneRollPapper = 5.8;
let priceForOneRollFabric = 7.2;
let priceForOneLitreGlue = 1.2;
let numOfRollsOfPapper = Number(input[0]);
let numOfRollsOfFabric = Number(input[1]);
let numOfLitresOfGlue = Number(input[2]);
let percentDiscount = Number(input[3]);
let convertedPercentOfDiscount = percentDiscount / 100;
let totalSum = (priceForOneRollPapper * numOfRollsOfPapper) + (priceForOneRollFabric * numOfRollsOfFabric) + (priceForOneLitreGlue * numOfLitresOfGlue)
let sumAfterDiscount = totalSum - (totalSum * convertedPercentOfDiscount);
console.log(sumAfterDiscount.toFixed(3))


}
solve(["4",
"2",
"5",
"13"])

