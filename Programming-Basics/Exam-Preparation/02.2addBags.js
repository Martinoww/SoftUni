function solve(input) {
let priceForLuggageOver20kg = Number(input[0]);
let weightOfLuggage = Number(input[1]);
let daysRemainingToTheFlight = Number(input[2]);
let numOfLuggage = Number(input[3]);
let priceForLuggage = 0;

if(weightOfLuggage < 10){
priceForLuggage = priceForLuggageOver20kg * 0.2;
}else if(weightOfLuggage >= 10 && weightOfLuggage <= 20){
priceForLuggage = priceForLuggageOver20kg * 0.5
}else if(weightOfLuggage > 20){
priceForLuggage = priceForLuggageOver20kg
}
if(daysRemainingToTheFlight > 30){
priceForLuggage = priceForLuggage + (priceForLuggage * 0.1);
}else if(daysRemainingToTheFlight >= 7 && daysRemainingToTheFlight <= 30){
priceForLuggage = priceForLuggage + (priceForLuggage * 0.15);
}else if(daysRemainingToTheFlight < 7){
priceForLuggage = priceForLuggage + (priceForLuggage * 0.4);
}
console.log(`The total price of bags is: ${(priceForLuggage * numOfLuggage).toFixed(2)} lv.`) 

}
solve(['25.50',
    '5',
    '36',
    '6']);
