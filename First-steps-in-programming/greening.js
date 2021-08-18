//Цената на един кв. м. е 7.61лв със ДДС.
//Input:
//	Кв. метри, които ще бъдат озеленени – реално число в интервала [0.00… 10000.00]
function solve(input){
//Taking the input:
const squareMeters = Number(input[0]);
let priceOfOneSquareMeter = 7.61;
//Solving:
let totalSumOfService = squareMeters * priceOfOneSquareMeter;
let discount = totalSumOfService * 0.18;
let finalPriceAfterDiscount = totalSumOfService - discount;

console.log(`The final price is : ${finalPriceAfterDiscount}lv.
The discount is : ${discount}lv.`);


}
solve(["550"])
solve(["150"])