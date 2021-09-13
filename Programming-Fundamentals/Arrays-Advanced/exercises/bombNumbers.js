function bombNumbers(numbers, theBomb) {
    let [bombN, power] = theBomb;
    let copyNumbers = numbers.slice(0);
    for (let i = 0; i < copyNumbers.length; i++) {
      if (copyNumbers[i] === bombN) {
        let index = numbers.indexOf(bombN);
        let start = Math.max(0, index - power);
        let deleteCount = 2 * power + 1;
        if (index !== -1) {
          numbers.splice(start, deleteCount);
        }
      }
    }
    let sum = 0;
    for (j = 0; j < numbers.length; j++) {
      sum += numbers[j];
    }
    console.log(sum);
  }
bombNumbers([1, 7, 7, 1, 2, 3],
    [7, 1]
    
    
    
    )