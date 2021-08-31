function solve(input){
let numOfLoad = Number(input.shift());
let totalWeightOfLoad = 0
let priceWithBus = 0;
let priceWithTrain = 0
let priceWithTruck = 0
let weightOfLoadWithBus = 0
let weightOfLoadWithTrain = 0
let weightOfLoadWithTruck = 0
for(let i = 1; i <= numOfLoad; i++){
    let weightOfLoad = Number(input.shift())
    if(weightOfLoad <= 3){
        weightOfLoadWithBus += weightOfLoad
        priceWithBus += weightOfLoad * 200;
    }else if(weightOfLoad > 3 && weightOfLoad <= 11){
        weightOfLoadWithTruck += weightOfLoad
       priceWithTruck += weightOfLoad * 175;
    }else if(weightOfLoad > 11){
        weightOfLoadWithTrain += weightOfLoad
      priceWithTrain += weightOfLoad * 120;
    }
    totalWeightOfLoad += weightOfLoad
}
let averageSumPerTon = (priceWithBus + priceWithTrain + priceWithTruck) / totalWeightOfLoad;
console.log(averageSumPerTon.toFixed(2))

let percentTransportedWithBus = weightOfLoadWithBus / totalWeightOfLoad * 100;
let percentTransportedWithTruck = weightOfLoadWithTruck / totalWeightOfLoad * 100;
let percentTransportedWithTrain = weightOfLoadWithTrain / totalWeightOfLoad * 100;
console.log(`${percentTransportedWithBus.toFixed(2)}%`)
console.log(`${percentTransportedWithTruck.toFixed(2)}%`)
console.log(`${percentTransportedWithTrain.toFixed(2)}%`)



}
solve(['5', '2', '10', '20', '1', '7'])