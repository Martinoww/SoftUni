function solve(a, b, c) {
    let numbers = [a, b, c];
  
    let sorting = numbers.sort(function(a, b){return b-a});
    let firstNumber = Number(sorting[0]);
    let secondNumber = Number(sorting[1]);
    let thirdNumber = Number(sorting[2]);
  
    console.log(firstNumber)
    console.log(secondNumber)
    console.log(thirdNumber)
  
  }
  solve(2, 1, 3);
