//	Броят на кучетата – цяло число в интервала [0… 100]
//	Броят на останалите животни  - цяло число в интервала [0… 100]
function solve(input){
let numOfDogs = Number(input[0]);
let numOfOtherAnimals = Number(input[1]);
let dogFood = 2.5;
let otherAnimalsFood = 4;
const totalSumOfDogFood = numOfDogs * dogFood;
const totalSumOfOtherFood = numOfOtherAnimals * otherAnimalsFood;
const totalSum = totalSumOfDogFood + totalSumOfOtherFood;
console.log(`${totalSum} lv.`);

}
solve(["5", "4"])
solve(["13", "9"])