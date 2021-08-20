function solve(input) {
  const priceOfPuzzels = 2.6;
  const priceOfTalkingDolls = 3;
  const priceOfTeddyBears = 4.1;
  const priceOfMinions = 8.2;
  const priceOfTrucks = 2;
  let priceOfExcursion = Number(input[0]);
  let amountOfPuzzels = Number(input[1]);
  let amountOfTalkingDolls = Number(input[2]);
  let amountOfTeddyBears = Number(input[3]);
  let amountOfMinions = Number(input[4]);
  let amountOfTrucks = Number(input[5]);
  let sumOfToys =
    priceOfPuzzels * amountOfPuzzels +
    priceOfTalkingDolls * amountOfTalkingDolls +
    priceOfTeddyBears * amountOfTeddyBears +
    priceOfMinions * amountOfMinions +
    priceOfTrucks * amountOfTrucks;
  let numberOfToys =
    amountOfPuzzels +
    amountOfTalkingDolls +
    amountOfTeddyBears +
    amountOfMinions +
    amountOfTrucks;
  if(numberOfToys >= 50){
    let sum = sumOfToys * 0.75;
    let sumAfterRent = sum * 0.9;
    let result = Math.abs(sumAfterRent - priceOfExcursion);
    if(sumAfterRent >= priceOfExcursion){
        console.log(`Yes! ${result.toFixed(2)} lv left.`);
    } else {
        console.log(`Not enough money! ${result.toFixed(2)} lv needed.`);
    }
    

  }else{ 
    let sumAfterRent = sumOfToys * 0.9;
    let result = Math.abs(sumAfterRent - priceOfExcursion);
    if(sumAfterRent >= priceOfExcursion){
        console.log(`Yes! ${result.toFixed(2)} lv left.`);
    } else {
        console.log(`Not enough money! ${result.toFixed(2)} lv needed.`);
    }
  }
  
  
    
  

} 
solve(["40.8", "20", "25", "30", "50", "10"]);
solve(["320", "8", "2", "5", "5", "1"]);
