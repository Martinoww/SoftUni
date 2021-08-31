function solve(input) {
  let numOfTurns = Number(input.shift());
  let from0to9 = 0;
  let from10to19 = 0;
  let from20to29 = 0;
  let from30to39 = 0;
  let from40to50 = 0;
  let addedPoints = 0;
  let invalidNumbers = 0;

  for (let i = 1; i <= numOfTurns; i++) {
    let numbers = Number(input.shift());
    if (numbers >= 0 && numbers <= 9) {
      from0to9++;
      addedPoints += numbers * 0.2;
    } else if (numbers > 9 && numbers <= 19) {
      from10to19++;
      addedPoints += numbers * 0.3;
    } else if (numbers > 19 && numbers <= 29) {
      from20to29++;
      addedPoints += numbers * 0.4;
    } else if (numbers > 29 && numbers <= 39) {
      from30to39++;
      addedPoints += 50;
    } else if (numbers > 39 && numbers <= 50) {
      from40to50++;
      addedPoints += 100;
    } else if (numbers < 0) {
      invalidNumbers++;
      addedPoints /= 2;
    } else if (numbers > 50) {
      invalidNumbers++;
      addedPoints /= 2;
    }
  }
 let percentOf0to9 = from0to9 / numOfTurns * 100;
 let percentOf10to19 = from10to19 / numOfTurns * 100;
 let percentOf20to29 = from20to29 / numOfTurns * 100;
 let percentOf30to39 = from30to39 / numOfTurns * 100;
 let percentOf40to50 = from40to50 / numOfTurns * 100;
 let percentOfInvalidNumbers = invalidNumbers / numOfTurns * 100;

 console.log(`${addedPoints.toFixed(2)}`)
 console.log(`From 0 to 9: ${percentOf0to9.toFixed(2)}%`)
 console.log(`From 10 to 19: ${percentOf10to19.toFixed(2)}%`)
 console.log(`From 20 to 29: ${percentOf20to29.toFixed(2)}%`)
 console.log(`From 30 to 39: ${percentOf30to39.toFixed(2)}%`)
 console.log(`From 40 to 50: ${percentOf40to50.toFixed(2)}%`)
 console.log(`Invalid numbers: ${percentOfInvalidNumbers.toFixed(2)}%`)

}
solve(["10", "43", "57", "-12", "23", "12", "0", "50", "40", "30", "20"]);
