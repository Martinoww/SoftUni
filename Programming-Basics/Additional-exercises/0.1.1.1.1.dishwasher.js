function solve(input) {
  let numOfDetergentBottles = Number(input.shift());
  let sizeOfOneDetergentBottle = 750;
  let neededDetergentForOnePlate = 5;
  let neededDetergentForOnePot = 15;
  let totalSizeOfDetergent = sizeOfOneDetergentBottle * numOfDetergentBottles;
  let operator = input[0];
  let index = 1;
  let numOfDishes = 0;
  let numOfPots = 0;
  let numOfPlates = 0;
  while (operator !== "End") {
    numOfDishes = Number(operator);
    if (index % 3 === 0) {
      numOfPots += numOfDishes;
      totalSizeOfDetergent -= numOfDishes * neededDetergentForOnePot;
    } else {
      numOfPlates += numOfDishes;
      totalSizeOfDetergent -= numOfDishes * neededDetergentForOnePlate;
    }
    if (totalSizeOfDetergent < 0) {
      break;
    }
    operator = input[index++];
  }
  if (totalSizeOfDetergent >= 0) {
    console.log(`Detergent was enough!`);
    console.log(`${numOfPlates} dishes and ${numOfPots} pots were washed.`);
    console.log(`Leftover detergent ${totalSizeOfDetergent} ml.`);
  }else{
    console.log(`Not enough detergent, ${Math.abs(totalSizeOfDetergent)} ml. more necessary!`);
  }
}

solve(["2", "53", "65", "55", "End"]);
//solve(["1", "10", "15", "10", "12", "13", "30"]);
