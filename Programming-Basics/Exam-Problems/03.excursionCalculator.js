function solve(input){
let numOfPeople = Number(input[0]);
let typeOfSeason = input[1];
let price = 0;

if(typeOfSeason === 'spring'){
if(numOfPeople <= 5){
price = numOfPeople * 50;
}else if(numOfPeople > 5){
price = numOfPeople * 48;
}
}else if(typeOfSeason === 'summer'){
    if(numOfPeople <= 5){
        price = numOfPeople * 48.5;
        }else if(numOfPeople > 5){
        price = numOfPeople * 45;
        }
        price = price - (price * 0.15);
}else if(typeOfSeason === 'autumn'){
    if(numOfPeople <= 5){
        price = numOfPeople * 60;
        }else if(numOfPeople > 5){
        price = numOfPeople * 49.5;
        }
}else if(typeOfSeason === 'winter'){
    if(numOfPeople <= 5){
        price = numOfPeople * 86;
        }else if(numOfPeople > 5){
        price = numOfPeople * 85;
        }
        price = price + (price * 0.08);
}
console.log(`${price.toFixed(2)} leva.`);

}
solve(["20",
"winter"])


