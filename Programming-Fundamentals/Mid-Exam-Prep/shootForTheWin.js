function solve(input) {
  let targets = input.shift().split(" ").map(Number);
  let i = 0;
  let counter = 0;

  while (input[i] !== "End") {
    let searchingIndex = Number(input[i]);

    if (searchingIndex <= targets.length - 1 && searchingIndex >= 0) {
      if (targets[searchingIndex] !== -1) {
        let currNum = targets[searchingIndex];
        targets[searchingIndex] = -1;

        for (let j = 0; j < targets.length; j++) {
          if (targets[j] > currNum && targets[j] !== -1) {
            targets[j] -= currNum;
            
          } else if (targets[j] <= currNum && targets[j] !== -1) {
            targets[j] += currNum;
            
          }
        }
        counter++
      }
    }
    i++
  }
  console.log(`Shot targets: ${counter} -> ${targets.join(' ')}`);
}
// solve(["24 50 36 70", "0", "4", "3", "1", "End"]);
solve((["30 30 12 60 54 66",
"5",
"2",
"4",
"0",
"End"])
)
