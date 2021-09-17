function solve(arr) {
  let foundPairs = 0;

  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] === arr[i + 1][j]) {
        foundPairs++;
      }
      if(arr[i][j] === arr[i][j + 1]){
        foundPairs++;
      }
      if(arr.length - 1 - i === 1){
        if(arr[arr.length - 1][j] === arr[arr.length -1][j + 1]){
          foundPairs++;
        }
      }
    }
  }
  return foundPairs;
  }

solve([
  ["2", "3", "4", "7", "0"],
  ["4", "0", "5", "3", "4"],
  ["2", "3", "5", "4", "2"],
  ["9", "8", "7", "5", "4"],
]);

solve([
  ["test", "done", "yo", "ho"],
  ["ho", "done", "yo", "6"],
  ["not", "done", "yet", "5"],
]);

solve([
  [2, 2, 5, 7, 4],
  [4, 0, 5, 3, 4],
  [2, 5, 5, 4, 2],
]);
