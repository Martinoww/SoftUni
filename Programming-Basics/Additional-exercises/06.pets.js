function solve(input){
const numOfDays = Number(input[0]);
const leftFoodInKG = Number(input[1]);
const foodPerDayForDogInKG = Number(input[2]);
const foodPerDayForCatInKG = Number(input[3]);
const foodPerDayForTurtleInGrams = Number(input[4]);

let totalFoodForDogInKG = numOfDays * foodPerDayForDogInKG;
let totalFoodForCatInKG = numOfDays * foodPerDayForCatInKG;
let totalFoodForTurtleInKG = foodPerDayForTurtleInGrams / 1000 * numOfDays;
let totalFoodConsumedInKG = totalFoodForDogInKG + totalFoodForCatInKG + totalFoodForTurtleInKG;
let diff = 0;

if(leftFoodInKG >= totalFoodConsumedInKG){
diff = Math.abs(leftFoodInKG - totalFoodConsumedInKG);
console.log(`${Math.floor(diff)} kilos of food left.`)
}else{
    diff = Math.abs(leftFoodInKG - totalFoodConsumedInKG);
console.log(`${Math.ceil(diff)} more kilos of food are needed.`)
}

}
solve(['5', '10', '2.1', '0.8', '321'])