function spiceMustFlow(startingYield){
let days = 0;
let workersConsumption = 26;
let sumOfSpice = 0

while(startingYield >= 100){
sumOfSpice += startingYield
if(workersConsumption > sumOfSpice){
    workersConsumption = sumOfSpice
}
sumOfSpice -= workersConsumption
startingYield -= 10;
days++
}
if(workersConsumption > sumOfSpice){
    workersConsumption = sumOfSpice
}
if(startingYield < 100){
    sumOfSpice -= workersConsumption;
}
console.log(days);
console.log(sumOfSpice);

}
spiceMustFlow(111)