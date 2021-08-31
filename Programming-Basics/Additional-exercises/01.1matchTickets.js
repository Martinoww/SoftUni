function solve(input){
const budget = Number(input[0]);
const category = input[1];
const numOfPeople = Number(input[2]);
let moneyLeft = 0;
let moneyNeeded = 0;
let moneyForTransport = 0;
let priceForVIP = 499.99 * numOfPeople;
let priceForNormal = 249.99 * numOfPeople;

 if(category === 'VIP'){
if(numOfPeople >= 1 && numOfPeople <= 4){
    moneyForTransport = budget - (budget * 0.75);
}else if(numOfPeople >= 5 && numOfPeople <= 9){
    moneyForTransport = budget - (budget * 0.6);
}else if(numOfPeople >= 10 && numOfPeople <= 24){
    moneyForTransport = budget - (budget * 0.5);
}else if(numOfPeople >=25 && numOfPeople < 50){
    moneyForTransport = budget - (budget * 0.4);
}else if(numOfPeople >= 50){
    moneyForTransport = budget - (budget * 0.25);
}
if(moneyForTransport >= priceForVIP){
    moneyLeft = moneyForTransport - priceForVIP;
    console.log(`Yes! You have ${moneyLeft.toFixed(2)} leva left.`);
}else{
    moneyNeeded = priceForVIP - moneyForTransport;
    console.log(`Not enough money! You need ${moneyNeeded.toFixed(2)} leva.`);
}
 }else if(category === 'Normal'){
    if(numOfPeople >= 1 && numOfPeople <= 4){
        moneyForTransport = budget - (budget * 0.75);
    }else if(numOfPeople >= 5 && numOfPeople <= 9){
        moneyForTransport = budget - (budget * 0.6);
    }else if(numOfPeople >= 10 && numOfPeople <= 24){
        moneyForTransport = budget - (budget * 0.5);
    }else if(numOfPeople >= 25 && numOfPeople < 50){
        moneyForTransport = budget - (budget * 0.4);
      }else if(numOfPeople >= 50){
        moneyForTransport = budget - (budget * 0.25);
    }
    if(moneyForTransport >= priceForNormal){
        moneyLeft = moneyForTransport - priceForNormal;
        console.log(`Yes! You have ${moneyLeft.toFixed(2)} leva left.`);
    }else{
        moneyNeeded = priceForNormal - moneyForTransport;
        console.log(`Not enough money! You need ${moneyNeeded.toFixed(2)} leva.`);
    }
 }






}
solve(['1000','Normal', '1'])